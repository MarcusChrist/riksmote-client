import { MaterialModule } from './shared/material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FeaturesModule } from './features/features.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './features/auth/interceptor/auth.interceptor';
import { ErrorHandlerInterceptor } from './core/interceptor/error-handler.interceptor';
import { CoreModule } from './core/core.module';
import { AuthService } from './features/auth/service/auth.service';
import { APP_BASE_HREF } from '@angular/common';
import { ServiceWorkerModule } from '@angular/service-worker';
import { SharedModule } from './shared/shared.module';

const initialize = (authService: AuthService) => async () => {
  if (authService.getAccessToken()) {
    try {
      await authService.getProfile().toPromise();
    } catch {}
  }
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    MaterialModule,
    SharedModule,
    FeaturesModule,
    BrowserAnimationsModule,
    CoreModule,
    ServiceWorkerModule.register('custom-service-worker.js', {
      enabled: true,
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    {
      provide: APP_INITIALIZER,
      useFactory: initialize,
      deps: [AuthService],
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
