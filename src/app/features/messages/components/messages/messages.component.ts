import {
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { forkJoin, Observable, Subject, Subscription } from 'rxjs';
import { map, take, takeUntil } from 'rxjs/operators';
import { MainSocket } from '../../../../core/socket/main-socket';
import { User } from '../../../auth/service/auth.service';
import { Room } from '../../../room/service/room.service';
import { Message, MessageService } from '../../service/message.service';

export enum MessageType {
  Direct = 'direct',
  Room = 'room',
}

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent implements OnInit, OnDestroy {
  @Input() type: MessageType;
  @Input() room?: Room;
  @Input() to?: User;

  messageForm = this.formBuilder.group({
    message: '',
  });

  @ViewChild('messagesContainer') messagesContainer: ElementRef<HTMLDivElement>;

  get messagesElement() {
    return this.messagesContainer.nativeElement;
  }

  messages: Message[];

  destroy$ = new Subject();
  MessageType = MessageType;

  user?: User;

  readonly scrollOffset = 200;

  constructor(
    private messageService: MessageService,
    private socket: MainSocket,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    const messageAction = (message: Message | Message[]) => {
      Array.isArray(message) ? this.messages = message : this.messages.push(message);
      this.scrollToLastIfNecessary()
      return;
    }

    this.messageService
      .getMessages(this.type, this.room?._id || this.to?._id)
      .pipe(take(1))
      .subscribe(messages => {
        messageAction(messages);
      });

    this.messageService
      .getMessage(this.type)
      .pipe(takeUntil(this.destroy$))
      .subscribe((message: Message) => {
        messageAction(message);
      });

    // Room Messages
    this.messageService.getRoomLeaveEvent().pipe(takeUntil(this.destroy$)).pipe(map((user: User) => (this.roomMessage(user, 'leave')))).subscribe((message: Message) => {
      messageAction(message);
    })

    this.messageService.getRoomJoinEvent().pipe(takeUntil(this.destroy$)).pipe(map((user: User) => (this.roomMessage(user, 'join')))).subscribe((message: Message) => {
      messageAction(message);
    })

  }

  ngOnDestroy() {
    this.socket.disconnect();

    this.destroy$.next();
    this.destroy$.complete();
  }

  scrollToLastIfNecessary() {
    if (
      this.messagesElement.scrollTop >
      this.messagesElement.offsetTop -
      this.messagesElement.scrollHeight -
      this.scrollOffset
    ) {
      setTimeout(() => this.scrollToLastMessages());
    }

  }

  roomMessage(user: User, type: string): Message {
    const newMessage = {
      from: null,
      to: '',
      message: `${user.username} ${type === 'leave' ? 'left' : 'joined'}`
    }
    return newMessage;
  }

  scrollToLastMessages() {
    this.messagesElement.scrollTo({
      top: this.messagesElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  sendMessage() {
    const message = this.messageForm.value.message;

    if (!message.trim()) {
      return;
    }

    this.messageForm.patchValue({
      message: '',
    });

    if (this.type === MessageType.Room) {
      this.messageService.sendRoomMessage(this.room, message);

      return;
    }

    this.messageService.sendDirectMessage(this.to, message);
  }
}
