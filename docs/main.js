(self["webpackChunktask"] = self["webpackChunktask"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9765);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 6782);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _core_interceptor_error_dialog_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/interceptor/error-dialog.interceptor */ 7025);
/* harmony import */ var _core_socket_main_socket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/socket/main-socket */ 2599);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _features_notification_components_push_notification_push_notification_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./features/notification/components/push-notification/push-notification.component */ 9034);







class AppComponent {
    constructor(errorHandler, socket) {
        this.errorHandler = errorHandler;
        this.socket = socket;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    }
    ngOnInit() {
        this.socket
            .fromEvent('exception')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroy$))
            .subscribe(e => this.errorHandler.handleError(e));
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_interceptor_error_dialog_interceptor__WEBPACK_IMPORTED_MODULE_0__.ErrorDialogInterceptor), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_socket_main_socket__WEBPACK_IMPORTED_MODULE_1__.MainSocket)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-push-notification");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet, _features_notification_components_push_notification_push_notification_component__WEBPACK_IMPORTED_MODULE_2__.PushNotificationComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _shared_material_material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/material/material.module */ 793);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _features_features_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./features/features.module */ 5790);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ 5835);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _features_auth_interceptor_auth_token_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./features/auth/interceptor/auth-token.interceptor */ 5244);
/* harmony import */ var _core_interceptor_error_dialog_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/interceptor/error-dialog.interceptor */ 7025);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/core.module */ 294);
/* harmony import */ var _features_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./features/auth/service/auth.service */ 2477);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/service-worker */ 2249);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/shared.module */ 4466);

















const initialize = (authService) => () => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(void 0, void 0, void 0, function* () {
    if (authService.getAccessToken()) {
        try {
            yield authService.getProfile().toPromise();
        }
        catch (_a) { }
    }
});
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ providers: [
        { provide: _angular_common__WEBPACK_IMPORTED_MODULE_10__.APP_BASE_HREF, useValue: '/' },
        {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_9__.APP_INITIALIZER,
            useFactory: initialize,
            deps: [_features_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_6__.AuthService],
            multi: true,
        },
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HTTP_INTERCEPTORS,
            useClass: _features_auth_interceptor_auth_token_interceptor__WEBPACK_IMPORTED_MODULE_3__.AuthTokenInterceptor,
            multi: true,
        },
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HTTP_INTERCEPTORS,
            useClass: _core_interceptor_error_dialog_interceptor__WEBPACK_IMPORTED_MODULE_4__.ErrorDialogInterceptor,
            multi: true,
        },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule,
            _shared_material_material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__.SharedModule,
            _features_features_module__WEBPACK_IMPORTED_MODULE_2__.FeaturesModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__.BrowserAnimationsModule,
            _core_core_module__WEBPACK_IMPORTED_MODULE_5__.CoreModule,
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_14__.ServiceWorkerModule.register('ngsw-worker.js', {
                enabled: true,
                registrationStrategy: 'registerWhenStable:30000',
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule,
        _shared_material_material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__.SharedModule,
        _features_features_module__WEBPACK_IMPORTED_MODULE_2__.FeaturesModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__.BrowserAnimationsModule,
        _core_core_module__WEBPACK_IMPORTED_MODULE_5__.CoreModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_14__.ServiceWorkerModule] }); })();


/***/ }),

/***/ 294:
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreModule": () => (/* binding */ CoreModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _socket_main_socket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./socket/main-socket */ 2599);
/* harmony import */ var _interceptor_error_dialog_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interceptor/error-dialog.interceptor */ 7025);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);




class CoreModule {
}
CoreModule.ɵfac = function CoreModule_Factory(t) { return new (t || CoreModule)(); };
CoreModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [_socket_main_socket__WEBPACK_IMPORTED_MODULE_0__.MainSocket, _interceptor_error_dialog_interceptor__WEBPACK_IMPORTED_MODULE_1__.ErrorDialogInterceptor], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CoreModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule] }); })();


/***/ }),

/***/ 7025:
/*!**************************************************************!*\
  !*** ./src/app/core/interceptor/error-dialog.interceptor.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorDialogInterceptor": () => (/* binding */ ErrorDialogInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8307);
/* harmony import */ var _shared_components_error_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/error-dialog/error-dialog.component */ 1696);
/* harmony import */ var _features_auth_interceptor_auth_token_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../features/auth/interceptor/auth-token.interceptor */ 5244);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 2238);
/* harmony import */ var src_app_features_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/features/auth/service/auth.service */ 2477);







class ErrorDialogInterceptor {
    constructor(dialog, authService) {
        this.dialog = dialog;
        this.authService = authService;
    }
    intercept(request, next) {
        if (request.headers.has(ErrorDialogInterceptor.skipHeader)) {
            return next.handle(request);
        }
        return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(() => { }, response => {
            if (response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpErrorResponse) {
                if (response.status === 401 &&
                    this.authService.getRefreshToken() &&
                    !request.headers.has(_features_auth_interceptor_auth_token_interceptor__WEBPACK_IMPORTED_MODULE_1__.AuthTokenInterceptor.skipHeader)) {
                    return;
                }
                this.handleError(response.error);
            }
        }));
    }
    handleError(err) {
        this.dialog.open(_shared_components_error_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_0__.ErrorDialogComponent, {
            data: {
                title: err.error || 'Error',
                message: err.message,
            },
            width: '350px',
        });
    }
}
ErrorDialogInterceptor.skipHeader = 'errorDialog';
ErrorDialogInterceptor.ɵfac = function ErrorDialogInterceptor_Factory(t) { return new (t || ErrorDialogInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_features_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService)); };
ErrorDialogInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: ErrorDialogInterceptor, factory: ErrorDialogInterceptor.ɵfac });


/***/ }),

/***/ 2599:
/*!********************************************!*\
  !*** ./src/app/core/socket/main-socket.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainSocket": () => (/* binding */ MainSocket)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var autobind_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! autobind-decorator */ 6714);
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-socket-io */ 5421);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5257);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_features_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/features/auth/service/auth.service */ 2477);







const getOptions = (authService) => ({
    transportOptions: {
        polling: {
            extraHeaders: {
                Authorization: `Bearer ${authService.getAccessToken()}`,
            },
        },
    },
    autoConnect: false,
});
class MainSocket extends ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__.Socket {
    constructor(authService) {
        super({
            url: _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.socket,
            options: getOptions(authService),
        });
        this.authService = authService;
        const io = this.ioSocket.io;
        io.on('reconnect_attempt', this.updateAccessToken);
        this.onConnect().subscribe(() => this.emit('user:subscribe'));
        this.onDisconnect().subscribe(reason => {
            if (reason !== 'io server disconnect') {
                return;
            }
            this.authService
                .loginWithRefreshToken()
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1))
                .subscribe(() => this.connect());
        });
    }
    connect() {
        this.updateAccessToken();
        super.connect();
    }
    onConnect() {
        return this.fromEvent('connect');
    }
    onDisconnect() {
        return this.fromEvent('disconnect');
    }
    updateAccessToken() {
        var _a, _b;
        Object.assign(((_b = (_a = this.ioSocket) === null || _a === void 0 ? void 0 : _a.io) === null || _b === void 0 ? void 0 : _b.opts) || {}, getOptions(this.authService));
    }
}
MainSocket.ɵfac = function MainSocket_Factory(t) { return new (t || MainSocket)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_features_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService)); };
MainSocket.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: MainSocket, factory: MainSocket.ɵfac });
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    autobind_decorator__WEBPACK_IMPORTED_MODULE_0__.boundMethod
], MainSocket.prototype, "updateAccessToken", null);


/***/ }),

/***/ 2399:
/*!**********************************************!*\
  !*** ./src/app/features/auth/auth.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthModule": () => (/* binding */ AuthModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularx-social-login */ 2707);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _provider_apple_login_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./provider/apple-login.provider */ 3067);
/* harmony import */ var _pages_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/register-page/register-page.component */ 2327);
/* harmony import */ var _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/login-page/login-page.component */ 7550);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ 4466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);








const apps = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apps;
class AuthModule {
}
AuthModule.ɵfac = function AuthModule_Factory(t) { return new (t || AuthModule)(); };
AuthModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AuthModule });
AuthModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [
        {
            provide: 'SocialAuthServiceConfig',
            useValue: {
                autoLogin: false,
                providers: [
                    {
                        id: angularx_social_login__WEBPACK_IMPORTED_MODULE_6__.GoogleLoginProvider.PROVIDER_ID,
                        provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_6__.GoogleLoginProvider(apps.google),
                    },
                    {
                        id: angularx_social_login__WEBPACK_IMPORTED_MODULE_6__.FacebookLoginProvider.PROVIDER_ID,
                        provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_6__.FacebookLoginProvider(apps.facebook),
                    },
                    {
                        id: _provider_apple_login_provider__WEBPACK_IMPORTED_MODULE_1__.AppleLoginProvider.PROVIDER_ID,
                        provider: new _provider_apple_login_provider__WEBPACK_IMPORTED_MODULE_1__.AppleLoginProvider(apps.apple),
                    },
                ],
            },
        },
    ], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, angularx_social_login__WEBPACK_IMPORTED_MODULE_6__.SocialLoginModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule], angularx_social_login__WEBPACK_IMPORTED_MODULE_6__.SocialLoginModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AuthModule, { declarations: [_pages_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_2__.RegisterPageComponent, _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_3__.LoginPageComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, angularx_social_login__WEBPACK_IMPORTED_MODULE_6__.SocialLoginModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule], exports: [angularx_social_login__WEBPACK_IMPORTED_MODULE_6__.SocialLoginModule, _pages_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_2__.RegisterPageComponent, _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_3__.LoginPageComponent] }); })();


/***/ }),

/***/ 2364:
/*!***************************************************!*\
  !*** ./src/app/features/auth/guard/auth.guard.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/auth.service */ 2477);



class AuthGuard {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    canActivate(next, state) {
        const { redirect, requireAuth } = next.data;
        const { isAuthenticated } = this.authService;
        const isAuthRequired = requireAuth == null || requireAuth;
        const isAccessAllowed = (isAuthRequired && isAuthenticated) ||
            (!isAuthRequired && !isAuthenticated);
        if (!isAccessAllowed) {
            if (requireAuth == null || requireAuth) {
                this.authService.setLoginCallbackUrl(state.url);
            }
            if (redirect) {
                if (redirect instanceof Array) {
                    this.router.navigate([...redirect]);
                }
                else {
                    this.router.navigate([redirect]);
                }
                return false;
            }
            if (this.router.routerState.snapshot.url === '') {
                this.router.navigate(isAuthRequired ? ['/login'] : ['/']);
                return false;
            }
        }
        return isAccessAllowed;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
AuthGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5244:
/*!*********************************************************************!*\
  !*** ./src/app/features/auth/interceptor/auth-token.interceptor.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthTokenInterceptor": () => (/* binding */ AuthTokenInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 205);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 5257);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8307);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 9773);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/auth.service */ 2477);





class AuthTokenInterceptor {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(request, next) {
        request = this.handleRequest(request);
        if (request.headers.has(AuthTokenInterceptor.skipHeader)) {
            return next.handle(request);
        }
        return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(response => {
            if (response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpErrorResponse && response.status === 401) {
                if (this.authService.getRefreshToken()) {
                    return this.authService.loginWithRefreshToken().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => { }, () => this.authService.logout()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.mergeMap)(() => next.handle(this.skipRequest(request)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => { }, () => this.authService.logout()))));
                }
                this.authService.logout();
            }
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(response);
        }));
    }
    skipRequest(request) {
        request = request.clone({
            headers: request.headers.set(AuthTokenInterceptor.skipHeader, 'true'),
        });
        return this.handleRequest(request);
    }
    handleRequest(request) {
        const token = this.authService.getAccessToken();
        if (token) {
            request = request.clone({
                headers: request.headers.set('Authorization', `Bearer ${token}`),
            });
        }
        return request;
    }
}
AuthTokenInterceptor.skipHeader = 'skipTokenInterceptor';
AuthTokenInterceptor.ɵfac = function AuthTokenInterceptor_Factory(t) { return new (t || AuthTokenInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
AuthTokenInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: AuthTokenInterceptor, factory: AuthTokenInterceptor.ɵfac });


/***/ }),

/***/ 7550:
/*!************************************************************************!*\
  !*** ./src/app/features/auth/pages/login-page/login-page.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageComponent": () => (/* binding */ LoginPageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 5257);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/auth.service */ 2477);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 3738);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 8295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 3166);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4885);












function LoginPageComponent_mat_spinner_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-spinner", 13);
} }
class LoginPageComponent {
    constructor(formBuilder, authService) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.loginForm = this.formBuilder.group({
            username: '',
            password: '',
        });
        this.loading = false;
    }
    submit() {
        if (this.loading) {
            return;
        }
        this.loading = true;
        const user = this.loginForm.value;
        this.authService
            .login(user)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1))
            .subscribe(() => this.authService.redirectToCallback(), () => {
            this.loading = false;
            this.loginForm.patchValue({
                password: '',
            });
        });
    }
    loginWithFacebook() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (this.loading) {
                return;
            }
            this.loading = true;
            try {
                yield this.authService.handleSocialLogin(() => this.authService.loginWithFacebook());
            }
            finally {
                this.loading = false;
            }
        });
    }
    loginWithApple() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (this.loading) {
                return;
            }
            this.loading = true;
            try {
                yield this.authService.handleSocialLogin(() => this.authService.loginWithApple());
            }
            finally {
                this.loading = false;
            }
        });
    }
    loginWithGoogle() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (this.loading) {
                return;
            }
            this.loading = true;
            try {
                yield this.authService.handleSocialLogin(() => this.authService.loginWithGoogle());
            }
            finally {
                this.loading = false;
            }
        });
    }
}
LoginPageComponent.ɵfac = function LoginPageComponent_Factory(t) { return new (t || LoginPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
LoginPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginPageComponent, selectors: [["ng-component"]], decls: 27, vars: 2, consts: [["class", "position-absolute", "diameter", "30", 4, "ngIf"], [1, "container"], ["mat-card-title", ""], ["mat-card-subtitle", ""], [3, "formGroup", "ngSubmit"], [1, "full-width"], ["type", "text", "formControlName", "username", "placeholder", "Type in your username", "matInput", ""], ["type", "password", "formControlName", "password", "placeholder", "Type in your password", "matInput", ""], ["align", "end"], ["routerLink", "/", "mat-button", "", "mat-raised-button", ""], ["mat-button", "", "mat-raised-button", "", "color", "primary"], ["mat-button", "", "mat-raised-button", "", "color", "primary", 1, "mr", 3, "click"], ["mat-button", "", "mat-raised-button", "", "color", "primary", 3, "click"], ["diameter", "30", 1, "position-absolute"]], template: function LoginPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, LoginPageComponent_mat_spinner_0_Template, 1, 0, "mat-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Sign into your account");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginPageComponent_Template_form_ngSubmit_7_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-card-actions", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginPageComponent_Template_button_click_21_listener() { return ctx.loginWithFacebook(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Login with Facebook ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginPageComponent_Template_button_click_23_listener() { return ctx.loginWithGoogle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " Login with Google ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginPageComponent_Template_button_click_25_listener() { return ctx.loginWithApple(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " Login with Apple ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.loginForm);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardSubtitle, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLabel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardActions, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkWithHref, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatAnchor, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__.MatSpinner], styles: [".mr[_ngcontent-%COMP%] {\n  margin-right: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGIiwiZmlsZSI6ImxvZ2luLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXIge1xyXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 2327:
/*!******************************************************************************!*\
  !*** ./src/app/features/auth/pages/register-page/register-page.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageComponent": () => (/* binding */ RegisterPageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 5257);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_app_features_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/features/auth/service/auth.service */ 2477);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 3738);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 8295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 3166);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4885);












function RegisterPageComponent_mat_spinner_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-spinner", 14);
} }
class RegisterPageComponent {
    constructor(formBuilder, authService) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.registerForm = this.formBuilder.group({
            username: '',
            password: '',
            email: '',
        });
        this.loading = false;
    }
    submit() {
        this.loading = true;
        const user = this.registerForm.value;
        this.authService
            .register(user)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1))
            .subscribe(() => this.authService.redirectToCallback(), () => {
            this.loading = false;
            this.registerForm.patchValue({
                password: '',
            });
        });
    }
    registerWithFacebook() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (this.loading) {
                return;
            }
            this.loading = true;
            try {
                yield this.authService.handleSocialLogin(() => this.authService.loginWithFacebook());
            }
            finally {
                this.loading = false;
            }
        });
    }
    registerWithGoogle() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (this.loading) {
                return;
            }
            this.loading = true;
            try {
                yield this.authService.handleSocialLogin(() => this.authService.loginWithGoogle());
            }
            finally {
                this.loading = false;
            }
        });
    }
    registerWithApple() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (this.loading) {
                return;
            }
            this.loading = true;
            try {
                yield this.authService.handleSocialLogin(() => this.authService.loginWithApple());
            }
            finally {
                this.loading = false;
            }
        });
    }
}
RegisterPageComponent.ɵfac = function RegisterPageComponent_Factory(t) { return new (t || RegisterPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_features_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
RegisterPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RegisterPageComponent, selectors: [["ng-component"]], decls: 31, vars: 2, consts: [["class", "position-absolute", "diameter", "30", 4, "ngIf"], [1, "container"], ["mat-card-title", ""], ["mat-card-subtitle", ""], [3, "formGroup", "ngSubmit"], [1, "full-width"], ["type", "text", "formControlName", "username", "placeholder", "Type in your username", "matInput", ""], ["type", "password", "formControlName", "password", "placeholder", "Type in your password", "matInput", ""], ["type", "email", "formControlName", "email", "placeholder", "Type in your email", "matInput", ""], ["align", "end"], ["routerLink", "/", "mat-button", "", "mat-raised-button", ""], ["mat-button", "", "mat-raised-button", "", "color", "primary"], ["mat-button", "", "mat-raised-button", "", "color", "primary", 1, "mr", 3, "click"], ["mat-button", "", "mat-raised-button", "", "color", "primary", 3, "click"], ["diameter", "30", 1, "position-absolute"]], template: function RegisterPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, RegisterPageComponent_mat_spinner_0_Template, 1, 0, "mat-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Register a new account");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function RegisterPageComponent_Template_form_ngSubmit_7_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-card-actions", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterPageComponent_Template_button_click_25_listener() { return ctx.registerWithFacebook(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " Register with Facebook ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterPageComponent_Template_button_click_27_listener() { return ctx.registerWithGoogle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " Register with Google ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterPageComponent_Template_button_click_29_listener() { return ctx.registerWithApple(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, " Register with Apple ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.registerForm);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardSubtitle, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLabel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardActions, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkWithHref, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatAnchor, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__.MatSpinner], styles: [".mr[_ngcontent-%COMP%] {\n  margin-right: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGIiwiZmlsZSI6InJlZ2lzdGVyLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXIge1xyXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 3067:
/*!****************************************************************!*\
  !*** ./src/app/features/auth/provider/apple-login.provider.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppleLoginProvider": () => (/* binding */ AppleLoginProvider)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angularx-social-login */ 2707);


class AppleLoginProvider extends angularx_social_login__WEBPACK_IMPORTED_MODULE_0__.BaseLoginProvider {
    constructor(app) {
        super();
        this.app = app;
    }
    initialize() {
        return new Promise(resolve => {
            this.loadScript(AppleLoginProvider.PROVIDER_ID, 'https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js', () => {
                AppleID.auth.init({
                    clientId: this.app.clientId,
                    scope: 'name email',
                    redirectURI: this.app.redirectUri,
                    usePopup: true,
                });
                resolve();
            });
        });
    }
    getLoginStatus() {
        return new Promise(resolve => resolve(null));
    }
    signIn(signInOptions) {
        var _a, _b;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const data = yield AppleID.auth.signIn();
                return {
                    name: `${(_a = data.user) === null || _a === void 0 ? void 0 : _a.firstName} ${(_b = data.user) === null || _b === void 0 ? void 0 : _b.lastName}`,
                    authorizationCode: data.authorization.code,
                    authToken: data.authorization.id_token,
                };
            }
            catch (err) {
                console.error(err);
                throw err;
            }
        });
    }
    signOut(revoke) {
        return new Promise(resolve => resolve());
    }
}
AppleLoginProvider.PROVIDER_ID = 'APPLE';


/***/ }),

/***/ 2477:
/*!*******************************************************!*\
  !*** ./src/app/features/auth/service/auth.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angularx-social-login */ 2707);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 6215);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 9773);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 5257);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 8307);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 8259);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_interceptor_error_dialog_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/interceptor/error-dialog.interceptor */ 7025);
/* harmony import */ var _interceptor_auth_token_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../interceptor/auth-token.interceptor */ 5244);
/* harmony import */ var _provider_apple_login_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../provider/apple-login.provider */ 3067);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _user_service_subscription_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../user/service/subscription.service */ 5511);














const { api } = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment;
class AuthService {
    constructor(http, socialService, router, subscriptionService) {
        this.http = http;
        this.socialService = socialService;
        this.router = router;
        this.subscriptionService = subscriptionService;
        this.user$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject(null);
    }
    get user() {
        return this.user$.getValue();
    }
    get isAuthenticated() {
        return this.user != null;
    }
    login(user) {
        return this.http
            .post(`${api}/auth/login`, user)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.mergeMap)(response => this.setTokens(response)));
    }
    loginWithFacebook() {
        return this.loginWith(angularx_social_login__WEBPACK_IMPORTED_MODULE_8__.FacebookLoginProvider.PROVIDER_ID, {
            scope: 'email,public_profile',
            return_scopes: true,
            enable_profile_selector: true,
        });
    }
    loginWithGoogle() {
        return this.loginWith(angularx_social_login__WEBPACK_IMPORTED_MODULE_8__.GoogleLoginProvider.PROVIDER_ID, {
            scope: 'profile email',
        });
    }
    loginWithApple() {
        return this.loginWith(_provider_apple_login_provider__WEBPACK_IMPORTED_MODULE_4__.AppleLoginProvider.PROVIDER_ID, {
            scope: 'profile email',
        });
    }
    handleSocialLogin(method) {
        return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const observer = yield method();
                return observer.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.take)(1)).subscribe(() => {
                    resolve();
                    this.redirectToCallback();
                }, e => reject(e));
            }
            catch (e) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                    title: 'Oops...!',
                    text: e.message ||
                        e.details ||
                        'An error occurred completing the authentication',
                    icon: 'error',
                });
                reject(e);
            }
        }));
    }
    loginWith(providerId, options) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const user = yield this.socialService.signIn(providerId);
            return this.http
                .post(`${api}/auth/${this.getProviderUri(providerId)}-login`, {
                name: user.name,
                accessToken: user.authToken,
                authorizationCode: user.authorizationCode,
                type: 'web',
            })
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.mergeMap)(tokens => this.setTokens(tokens)));
        });
    }
    getProviderUri(providerId) {
        switch (providerId) {
            case angularx_social_login__WEBPACK_IMPORTED_MODULE_8__.FacebookLoginProvider.PROVIDER_ID:
                return 'facebook';
            case angularx_social_login__WEBPACK_IMPORTED_MODULE_8__.GoogleLoginProvider.PROVIDER_ID:
                return 'google';
            case _provider_apple_login_provider__WEBPACK_IMPORTED_MODULE_4__.AppleLoginProvider.PROVIDER_ID:
                return 'apple';
            default:
                return undefined;
        }
    }
    register(user) {
        return this.http
            .post(`${api}/auth/register`, user)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.mergeMap)(response => this.setTokens(response)));
    }
    getProfile() {
        return this.http
            .get(`${api}/auth/me`, {
            headers: {
                [_core_interceptor_error_dialog_interceptor__WEBPACK_IMPORTED_MODULE_2__.ErrorDialogInterceptor.skipHeader]: 'true',
            },
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(user => this.user$.next(user)));
    }
    loginWithRefreshToken() {
        return this.http
            .post(`${api}/auth/refresh-token`, {
            refreshToken: this.getRefreshToken(),
        }, {
            headers: {
                [_interceptor_auth_token_interceptor__WEBPACK_IMPORTED_MODULE_3__.AuthTokenInterceptor.skipHeader]: 'true',
            },
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.mergeMap)(response => this.setTokens(response)));
    }
    logoutFromAllDevices() {
        return this.http
            .delete(`${api}/auth/logout-from-all-devices`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.mergeMap)(tokens => this.setTokens(tokens)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(() => this.subscriptionService.requestSubscription()));
    }
    setTokens(response) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.setRefreshToken(response.refresh_token);
            return this.setAccessToken(response.access_token);
        });
    }
    getAccessToken() {
        return localStorage.getItem('accessToken');
    }
    setAccessToken(token) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            localStorage.setItem('accessToken', token);
            return this.getProfile().toPromise();
        });
    }
    getRefreshToken() {
        return localStorage.getItem('refreshToken');
    }
    setRefreshToken(token) {
        localStorage.setItem('refreshToken', token);
    }
    getLoginCallbackUrl() {
        return localStorage.getItem('loginCallbackUrl');
    }
    setLoginCallbackUrl(url) {
        localStorage.setItem('loginCallbackUrl', url);
    }
    redirectToCallback() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const output = yield this.router.navigate([
                this.getLoginCallbackUrl() || '/',
            ]);
            this.setLoginCallbackUrl(null);
            return output;
        });
    }
    logout() {
        const callback = () => {
            sessionStorage.clear();
            localStorage.clear();
            this.user$.next(null);
        };
        this.subscriptionService
            .delete()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.take)(1))
            .subscribe(callback, callback);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](angularx_social_login__WEBPACK_IMPORTED_MODULE_8__.SocialAuthService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_user_service_subscription_service__WEBPACK_IMPORTED_MODULE_5__.SubscriptionService)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5790:
/*!*********************************************!*\
  !*** ./src/app/features/features.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeaturesModule": () => (/* binding */ FeaturesModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routes */ 2371);
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main/main.component */ 2260);
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user/user.module */ 4852);
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/auth.module */ 2399);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _room_room_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./room/room.module */ 96);
/* harmony import */ var _messages_messages_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./messages/messages.module */ 5289);
/* harmony import */ var _notification_notification_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./notification/notification.module */ 3523);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);











class FeaturesModule {
}
FeaturesModule.ɵfac = function FeaturesModule_Factory(t) { return new (t || FeaturesModule)(); };
FeaturesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: FeaturesModule });
FeaturesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule,
            _user_user_module__WEBPACK_IMPORTED_MODULE_2__.UserModule,
            _auth_auth_module__WEBPACK_IMPORTED_MODULE_3__.AuthModule,
            _room_room_module__WEBPACK_IMPORTED_MODULE_5__.RoomModule,
            _messages_messages_module__WEBPACK_IMPORTED_MODULE_6__.MessagesModule,
            _notification_notification_module__WEBPACK_IMPORTED_MODULE_7__.NotificationModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forRoot(_routes__WEBPACK_IMPORTED_MODULE_0__.routes, { relativeLinkResolution: 'legacy' }),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule, _notification_notification_module__WEBPACK_IMPORTED_MODULE_7__.NotificationModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](FeaturesModule, { declarations: [_main_main_component__WEBPACK_IMPORTED_MODULE_1__.MainComponent], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule,
        _user_user_module__WEBPACK_IMPORTED_MODULE_2__.UserModule,
        _auth_auth_module__WEBPACK_IMPORTED_MODULE_3__.AuthModule,
        _room_room_module__WEBPACK_IMPORTED_MODULE_5__.RoomModule,
        _messages_messages_module__WEBPACK_IMPORTED_MODULE_6__.MessagesModule,
        _notification_notification_module__WEBPACK_IMPORTED_MODULE_7__.NotificationModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule, _notification_notification_module__WEBPACK_IMPORTED_MODULE_7__.NotificationModule] }); })();


/***/ }),

/***/ 2260:
/*!*************************************************!*\
  !*** ./src/app/features/main/main.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainComponent": () => (/* binding */ MainComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9765);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 6782);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_features_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/features/auth/service/auth.service */ 2477);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 1095);







function MainComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Forgot my password");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MainComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Welcome, ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainComponent_ng_template_1_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Rooms");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.user.username);
} }
class MainComponent {
    constructor(authService) {
        this.authService = authService;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    }
    ngOnInit() {
        this.authService.user$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.destroy$))
            .subscribe(user => (this.user = user));
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    logout() {
        this.authService.logout();
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_features_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
MainComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["ng-component"]], decls: 3, vars: 2, consts: [["class", "container", 4, "ngIf", "ngIfElse"], ["logged", ""], [1, "container"], ["routerLink", "/login", "mat-button", "", "mat-raised-button", ""], ["routerLink", "/register", "mat-button", "", "mat-raised-button", ""], ["routerLink", "/recover", "mat-button", "", "mat-raised-button", ""], ["mat-button", "", "mat-raised-button", "", 3, "click"], ["routerLink", "/rooms", "mat-button", "", "mat-raised-button", ""], ["routerLink", "/settings", "mat-button", "", "mat-raised-button", ""]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, MainComponent_div_0_Template, 7, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MainComponent_ng_template_1_Template, 12, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.user)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatAnchor, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton], styles: [".container[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n.container[_ngcontent-%COMP%]   .mat-button[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQUNGO0FBQ0U7RUFDRSxrQkFBQTtBQUNKIiwiZmlsZSI6Im1haW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG5cclxuICAubWF0LWJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 238:
/*!*****************************************************************************!*\
  !*** ./src/app/features/messages/components/messages/messages.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessageType": () => (/* binding */ MessageType),
/* harmony export */   "MessagesComponent": () => (/* binding */ MessagesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var autobind_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! autobind-decorator */ 6714);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ 3815);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 9765);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 6797);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 6782);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 5435);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 8307);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 9773);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 5257);
/* harmony import */ var src_app_shared_services_sound_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/sound.service */ 5328);
/* harmony import */ var _shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/confirm-dialog/confirm-dialog.component */ 9077);
/* harmony import */ var _service_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/message.service */ 4963);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _core_socket_main_socket__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/socket/main-socket */ 2599);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _auth_service_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../auth/service/auth.service */ 2477);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ 2238);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ 8295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/input */ 3166);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/icon */ 6627);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4885);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/router */ 9895);






















const _c0 = ["messagesContainer"];
function MessagesComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "mat-spinner", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "h1", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Connecting");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function MessagesComponent_div_5_mat_icon_6_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MessagesComponent_div_5_mat_icon_6_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8); const message_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r6.confirmDeleteMessage(message_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
const _c1 = function (a0) { return [a0]; };
const _c2 = function (a1) { return ["/direct-message", a1]; };
function MessagesComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, MessagesComponent_div_5_mat_icon_6_Template, 2, 0, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r4 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](9, _c1, message_r4.from._id === ctx_r2.user._id ? "me" : "partner"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](11, _c2, message_r4.from.username));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](message_r4.from.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](message_r4.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.type === ctx_r2.MessageType.Direct || message_r4.from._id === ctx_r2.user._id || (ctx_r2.room == null ? null : ctx_r2.room.owner._id) === ctx_r2.user._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](9, 6, message_r4.createdAtDate, "short"));
} }
function MessagesComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const userTyping_r9 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](3, _c1, userTyping_r9._id === ctx_r3.user._id ? "me" : "partner"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](5, _c2, userTyping_r9.username));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](userTyping_r9.username);
} }
var MessageType;
(function (MessageType) {
    MessageType["Direct"] = "direct";
    MessageType["Room"] = "room";
})(MessageType || (MessageType = {}));
class MessagesComponent {
    constructor(messageService, socket, formBuilder, soundService, authService, dialog, changeDetector) {
        this.messageService = messageService;
        this.socket = socket;
        this.formBuilder = formBuilder;
        this.soundService = soundService;
        this.authService = authService;
        this.dialog = dialog;
        this.changeDetector = changeDetector;
        this.messages = [];
        this.messageForm = this.formBuilder.group({
            message: '',
        });
        this.isConnected = false;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
        this.MessageType = MessageType;
        this.typing = [];
        this.isTyping = false;
        this.limit = 30;
        this.scrollOffset = 200;
        this.typingTimeout = 5000;
        this.scrolledToLast = false;
    }
    get messagesElement() {
        return this.messagesContainer.nativeElement;
    }
    get partnerId() {
        switch (this.type) {
            case MessageType.Room:
                return this.room._id;
            case MessageType.Direct:
                return this.to._id;
            default:
                return undefined;
        }
    }
    ngOnInit() {
        var _a;
        this.socket.connect();
        this.socket
            .onConnect()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$))
            .subscribe(() => {
            this.isConnected = true;
            if (!this.updateMessages$) {
                this.getMessages();
            }
        });
        this.socket
            .onDisconnect()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$))
            .subscribe(() => (this.isConnected = false));
        this.authService.user$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$))
            .subscribe(user => (this.user = user));
        (_a = this.updateMessages$) === null || _a === void 0 ? void 0 : _a.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$)).subscribe(this.getMessages);
        this.messageService
            .onMessage(this.type)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.filter)(message => this.isCurrentSection(message.to !== this.user._id ? message.to : message.from._id, message.room) && !this.messages.some(msg => msg._id === message._id)))
            .subscribe(this.handleMessageEvent);
        this.messageService
            .onDeleteMessagesEvent(this.type)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.filter)(id => this.isCurrentSection(id)))
            .subscribe(() => (0,lodash__WEBPACK_IMPORTED_MODULE_1__.remove)(this.messages, () => true));
        this.messageService
            .onDeleteMessageEvent(this.type)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$))
            .subscribe(messageId => {
            var _a;
            if (messageId === ((_a = this.firstMessage) === null || _a === void 0 ? void 0 : _a._id)) {
                if (this.messages.some(message => message._id === messageId)) {
                    this.firstMessage = this.messages[1];
                }
                else {
                    this.updateFirstMessage();
                }
            }
            (0,lodash__WEBPACK_IMPORTED_MODULE_1__.remove)(this.messages, message => message._id === messageId);
        });
        this.updateFirstMessage();
        this.messageService
            .onTyping(this.type, this.partnerId)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.filter)(({ user, room }) => this.isCurrentSection(user._id, room === null || room === void 0 ? void 0 : room._id) &&
            this.user._id !== user._id), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(({ user }) => {
            if (!this.typing.some(u => u._id === user._id)) {
                this.typing.push(user);
            }
            this.changeDetector.detectChanges();
            this.scrollToLastIfNecessary();
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.mergeMap)(({ user }) => (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.timer)(this.typingTimeout).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.messageService
            .onTyping(this.type, this.partnerId)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.filter)(({ user: typingUser, room }) => this.isCurrentSection(user._id, room === null || room === void 0 ? void 0 : room._id) &&
            user._id === typingUser._id))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(() => (0,lodash__WEBPACK_IMPORTED_MODULE_1__.remove)(this.typing, u => u._id === user._id)))))
            .subscribe();
    }
    ngOnDestroy() {
        this.socket.disconnect();
        this.destroy$.next();
        this.destroy$.complete();
    }
    getMessages() {
        this.messageService
            .getMessages(this.type, this.partnerId, this.limit)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.take)(1))
            .subscribe(messages => {
            (0,lodash__WEBPACK_IMPORTED_MODULE_1__.remove)(this.messages, () => true);
            this.messages.push(...messages.map(this.convertToLocalMessage));
            this.scrollToLastMessages();
        });
    }
    updateFirstMessage() {
        this.messageService
            .getFirstMessage(this.type, this.partnerId)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.take)(1))
            .subscribe(message => (this.firstMessage = message));
    }
    getPreviousMessages() {
        const startingScrollHeight = this.messagesElement.scrollHeight;
        this.messageService
            .getMessages(this.type, this.partnerId, this.limit, this.messages[0].createdAt)
            .subscribe(messages => {
            this.messages.splice(0, 0, ...messages.map(this.convertToLocalMessage));
            this.changeDetector.detectChanges();
            this.messagesElement.scrollTo(0, this.messagesElement.scrollHeight - startingScrollHeight);
        });
    }
    handleMessageEvent(message) {
        if (message.from._id === this.user._id) {
            this.isTyping = false;
        }
        this.messages.push(this.convertToLocalMessage(message));
        (0,lodash__WEBPACK_IMPORTED_MODULE_1__.remove)(this.typing, user => user._id === message.from._id);
        if (message.from._id !== this.user._id) {
            this.soundService.playSound(src_app_shared_services_sound_service__WEBPACK_IMPORTED_MODULE_2__.Sound.Message);
        }
        this.scrollToLastIfNecessary();
        return;
    }
    isCurrentSection(...objectIds) {
        return objectIds.some(id => (this.room && this.room._id === id) ||
            (this.to && this.to._id === id) ||
            this.user._id === id);
    }
    scrollToLastIfNecessary() {
        const element = this.messagesElement;
        if (element.scrollTop >
            element.scrollHeight - element.offsetHeight - this.scrollOffset) {
            this.scrolledToLast = false;
            this.scrollToLastMessages();
        }
    }
    scrollToLastMessages() {
        this.changeDetector.detectChanges();
        this.messagesElement.scrollTo({
            top: this.messagesElement.scrollHeight,
            behavior: 'smooth',
        });
        (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.timer)(1000).subscribe(() => (this.scrolledToLast = true));
    }
    sendTyping() {
        if (this.isTyping) {
            return;
        }
        this.messageService.sendTyping(this.type, this.partnerId);
        this.isTyping = true;
        (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.timer)(this.typingTimeout - 1000).subscribe(() => (this.isTyping = false));
    }
    sendMessage() {
        const message = this.messageForm.value.message;
        if (!(message === null || message === void 0 ? void 0 : message.trim())) {
            return;
        }
        if (!this.isConnected) {
            this.handleMessageCallback();
        }
        this.messageService.sendMessage(this.type, this.partnerId, message, this.handleMessageCallback);
    }
    handleMessageCallback(response) {
        if (typeof response !== 'object') {
            this.messageForm.patchValue({
                message: '',
            });
        }
    }
    onScroll(e) {
        var _a, _b;
        if (!this.scrolledToLast ||
            ((_a = this.messages[0]) === null || _a === void 0 ? void 0 : _a._id) === ((_b = this.firstMessage) === null || _b === void 0 ? void 0 : _b._id)) {
            return;
        }
        const element = e.target;
        if (element.scrollTop <= 5) {
            this.getPreviousMessages();
        }
    }
    confirmDeleteMessage(message) {
        const dialog = this.dialog.open(_shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__.ConfirmDialogComponent);
        dialog
            .afterClosed()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.take)(1))
            .subscribe(confirm => {
            if (confirm) {
                this.deleteMessage(message);
            }
        });
    }
    deleteMessage(message) {
        this.messageService
            .deleteMessage(this.type, message)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.take)(1))
            .subscribe();
    }
    convertToLocalMessage(message) {
        return Object.assign(Object.assign({}, message), { createdAtDate: new Date(message.createdAt) });
    }
}
MessagesComponent.ɵfac = function MessagesComponent_Factory(t) { return new (t || MessagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_service_message_service__WEBPACK_IMPORTED_MODULE_4__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_socket_main_socket__WEBPACK_IMPORTED_MODULE_5__.MainSocket), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_sound_service__WEBPACK_IMPORTED_MODULE_2__.SoundService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_6__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef)); };
MessagesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: MessagesComponent, selectors: [["app-messages"]], viewQuery: function MessagesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.messagesContainer = _t.first);
    } }, inputs: { type: "type", room: "room", to: "to", updateMessages$: "updateMessages$", messages: "messages" }, decls: 17, vars: 4, consts: [[1, "chat-container", "d-flex", "flex-column", "flex-grow-1"], [1, "position-relative", "flex-grow-1"], ["class", "\n        position-absolute\n        h-100\n        w-100\n        d-flex\n        align-items-center\n        justify-content-center\n        z-10\n      ", 4, "ngIf"], [1, "position-absolute", "h-100", "messages", "w-100", "d-flex", "flex-column", 3, "scroll"], ["messagesContainer", ""], ["class", "message p-2 d-flex flex-column", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "text-container", "bg-white", "p-2"], [1, "d-flex", "align-items-center", 3, "formGroup", "ngSubmit"], [1, "full-width", "fs-4", "me-2"], ["type", "text", "placeholder", "Type a message", "matInput", "", "formControlName", "message", "rows", "2", 3, "keydown", "keydown.enter"], [1, "d-flex", "justify-content-center"], ["mat-icon-button", "", "color", "primary"], [1, "position-absolute", "h-100", "w-100", "d-flex", "align-items-center", "justify-content-center", "z-10"], ["diameter", "60", 1, "position-absolute"], [1, "mt-6"], [1, "message", "p-2", "d-flex", "flex-column", 3, "ngClass"], ["role", "button", 3, "routerLink"], [1, "bubble-container", "d-flex", "align-items-center"], [1, "bubble", "p-3"], ["role", "button", "class", "delete", 3, "click", 4, "ngIf"], ["role", "button", 1, "delete", 3, "click"], [1, "bubble-container", "typing", "d-flex", "align-items-center"]], template: function MessagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, MessagesComponent_div_2_Template, 4, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("scroll", function MessagesComponent_Template_div_scroll_3_listener($event) { return ctx.onScroll($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, MessagesComponent_div_5_Template, 10, 13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, MessagesComponent_div_6_Template, 8, 7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function MessagesComponent_Template_form_ngSubmit_8_listener() { return ctx.sendMessage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "textarea", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keydown", function MessagesComponent_Template_textarea_keydown_12_listener() { return ctx.sendTyping(); })("keydown.enter", function MessagesComponent_Template_textarea_keydown_enter_12_listener() { return ctx.sendMessage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "send");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.isConnected);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.messages);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.typing);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.messageForm);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControlName, _angular_material_button__WEBPACK_IMPORTED_MODULE_20__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__.MatIcon, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__.MatSpinner, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_23__.RouterLinkWithHref], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.DatePipe], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-grow: 1;\n}\n\n.messages[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n\n.messages[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%] {\n  word-break: break-word;\n  overflow-wrap: break-all;\n}\n\n.messages[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n\n.messages[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]:first-child {\n  margin-top: 1rem;\n}\n\n.messages[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 1rem;\n}\n\n.messages[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #444;\n  text-decoration: none;\n}\n\n.messages[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n\n.messages[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .typing[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  height: 1rem;\n  width: 1rem;\n  float: left;\n  margin: 0 1px;\n  background-color: #9e9ea1;\n  display: block;\n  border-radius: 50%;\n  opacity: 0.4;\n}\n\n.messages[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .typing[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-of-type(1) {\n  animation: 1s blink infinite 0.3333s;\n}\n\n.messages[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .typing[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-of-type(2) {\n  animation: 1s blink infinite 0.6666s;\n}\n\n.messages[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .typing[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-of-type(3) {\n  animation: 1s blink infinite 0.9999s;\n}\n\n.messages[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .typing[_ngcontent-%COMP%]   .bubble[_ngcontent-%COMP%] {\n  white-space: initial;\n}\n\n.messages[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .bubble-container[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.messages[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .bubble-container[_ngcontent-%COMP%]:hover   .delete[_ngcontent-%COMP%], .messages[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .bubble-container[_ngcontent-%COMP%]:focus   .delete[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.messages[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .bubble-container[_ngcontent-%COMP%]   .bubble[_ngcontent-%COMP%] {\n  box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.2);\n  border-radius: 0.5rem;\n  white-space: pre-wrap;\n  font-size: 1rem;\n}\n\n.messages[_ngcontent-%COMP%]   .message.partner[_ngcontent-%COMP%] {\n  align-items: flex-start;\n}\n\n.messages[_ngcontent-%COMP%]   .message.partner[_ngcontent-%COMP%]   .bubble-container[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n\n.messages[_ngcontent-%COMP%]   .message.partner[_ngcontent-%COMP%]   .bubble-container[_ngcontent-%COMP%]   .bubble[_ngcontent-%COMP%] {\n  background-color: #1266f1;\n  border-top-right-radius: 0;\n  color: #fff;\n}\n\n.messages[_ngcontent-%COMP%]   .message.me[_ngcontent-%COMP%] {\n  align-items: flex-end;\n}\n\n.messages[_ngcontent-%COMP%]   .message.me[_ngcontent-%COMP%]   .bubble[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.03);\n  border-top-left-radius: 0;\n}\n\n.mt-6[_ngcontent-%COMP%] {\n  margin-top: 8rem;\n}\n\n.z-10[_ngcontent-%COMP%] {\n  z-index: 10;\n}\n\n@keyframes blink {\n  50% {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUFERjs7QUFJQTtFQUNFLGNBQUE7QUFERjs7QUFHRTtFQUNFLHNCQUFBO0VBQ0Esd0JBQUE7QUFESjs7QUFHSTtFQUNFLGlCQUFBO0FBRE47O0FBSUk7RUFDRSxnQkFBQTtBQUZOOztBQUtJO0VBQ0UsbUJBQUE7QUFITjs7QUFNSTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FBSk47O0FBT0k7RUFDRSxvQkFBQTtBQUxOOztBQVNNO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQVBSOztBQVNVO0VBQ0Usb0NBQUE7QUFQWjs7QUFNVTtFQUNFLG9DQUFBO0FBSlo7O0FBR1U7RUFDRSxvQ0FBQTtBQURaOztBQU1NO0VBQ0Usb0JBQUE7QUFKUjs7QUFTTTtFQUNFLGFBQUE7QUFQUjs7QUFZUTtFQUNFLGFBQUE7QUFWVjs7QUFjTTtFQUNFLDRDQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUFaUjs7QUFnQkk7RUFDRSx1QkFBQTtBQWROOztBQWdCTTtFQUNFLDJCQUFBO0FBZFI7O0FBZ0JRO0VBQ0UseUJBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7QUFkVjs7QUFtQkk7RUFDRSxxQkFBQTtBQWpCTjs7QUFtQk07RUFDRSxxQ0FBQTtFQUNBLHlCQUFBO0FBakJSOztBQXVCQTtFQUNFLGdCQUFBO0FBcEJGOztBQXVCQTtFQUNFLFdBQUE7QUFwQkY7O0FBdUJBO0VBQ0U7SUFDRSxVQUFBO0VBcEJGO0FBQ0YiLCJmaWxlIjoibWVzc2FnZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdib290c3RyYXAtZ2xvYmFscyc7XHJcblxyXG46aG9zdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWdyb3c6IDE7XHJcbn1cclxuXHJcbi5tZXNzYWdlcyB7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcblxyXG4gIC5tZXNzYWdlIHtcclxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay1hbGw7XHJcblxyXG4gICAgJiA+IGkge1xyXG4gICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIH1cclxuXHJcbiAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgfVxyXG5cclxuICAgICYgPiBhIHtcclxuICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgIGNvbG9yOiAjNDQ0O1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgKiB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgfVxyXG5cclxuICAgIC50eXBpbmcge1xyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBoZWlnaHQ6IDFyZW07XHJcbiAgICAgICAgd2lkdGg6IDFyZW07XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgbWFyZ2luOiAwIDFweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWU5ZWExO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBvcGFjaXR5OiAwLjQ7XHJcbiAgICAgICAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAzIHtcclxuICAgICAgICAgICY6bnRoLW9mLXR5cGUoI3skaX0pIHtcclxuICAgICAgICAgICAgYW5pbWF0aW9uOiAxcyBibGluayBpbmZpbml0ZSAoJGkgKiAwLjMzMzNzKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5idWJibGUge1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBpbml0aWFsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmJ1YmJsZS1jb250YWluZXIge1xyXG4gICAgICAuZGVsZXRlIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmhvdmVyLFxyXG4gICAgICAmOmZvY3VzIHtcclxuICAgICAgICAuZGVsZXRlIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuYnViYmxlIHtcclxuICAgICAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCAwIHJnYmEoJGNvbG9yOiAjMDAwMDAwLCAkYWxwaGE6IDAuMik7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLnBhcnRuZXIge1xyXG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuXHJcbiAgICAgIC5idWJibGUtY29udGFpbmVyIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcblxyXG4gICAgICAgIC5idWJibGUge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldCgkdGhlbWUtY29sb3JzLCAncHJpbWFyeScpO1xyXG4gICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLm1lIHtcclxuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG5cclxuICAgICAgLmJ1YmJsZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICMwMDAwMDAsICRhbHBoYTogMC4wMyk7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLm10LTYge1xyXG4gIG1hcmdpbi10b3A6IDhyZW07XHJcbn1cclxuXHJcbi56LTEwIHtcclxuICB6LWluZGV4OiAxMDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBibGluayB7XHJcbiAgNTAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
(0,tslib__WEBPACK_IMPORTED_MODULE_24__.__decorate)([
    autobind_decorator__WEBPACK_IMPORTED_MODULE_0__.boundMethod
], MessagesComponent.prototype, "getMessages", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_24__.__decorate)([
    autobind_decorator__WEBPACK_IMPORTED_MODULE_0__.boundMethod
], MessagesComponent.prototype, "handleMessageEvent", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_24__.__decorate)([
    autobind_decorator__WEBPACK_IMPORTED_MODULE_0__.boundMethod
], MessagesComponent.prototype, "handleMessageCallback", null);


/***/ }),

/***/ 5289:
/*!******************************************************!*\
  !*** ./src/app/features/messages/messages.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessagesModule": () => (/* binding */ MessagesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/messages/messages.component */ 238);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/shared.module */ 4466);
/* harmony import */ var _pages_direct_message_page_direct_message_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/direct-message-page/direct-message-page.component */ 6676);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);





class MessagesModule {
}
MessagesModule.ɵfac = function MessagesModule_Factory(t) { return new (t || MessagesModule)(); };
MessagesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: MessagesModule });
MessagesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MessagesModule, { declarations: [_components_messages_messages_component__WEBPACK_IMPORTED_MODULE_0__.MessagesComponent, _pages_direct_message_page_direct_message_page_component__WEBPACK_IMPORTED_MODULE_2__.DirectMessagePageComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule], exports: [_components_messages_messages_component__WEBPACK_IMPORTED_MODULE_0__.MessagesComponent, _pages_direct_message_page_direct_message_page_component__WEBPACK_IMPORTED_MODULE_2__.DirectMessagePageComponent] }); })();


/***/ }),

/***/ 6676:
/*!**********************************************************************************************!*\
  !*** ./src/app/features/messages/pages/direct-message-page/direct-message-page.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DirectMessagePageComponent": () => (/* binding */ DirectMessagePageComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9765);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 945);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 6782);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 9773);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 5257);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 5435);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 8307);
/* harmony import */ var _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/messages/messages.component */ 238);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _user_service_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../user/service/user.service */ 8521);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 6627);










function DirectMessagePageComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h1", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "app-messages", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" Chatting with ", ctx_r0.to.username, " (", ctx_r0.to.online ? "Online" : "Offline", ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx_r0.MessageType.Direct)("to", ctx_r0.to)("messages", ctx_r0.messages)("updateMessages$", ctx_r0.updateMessages$);
} }
class DirectMessagePageComponent {
    constructor(userService, route, router, changeDetector) {
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.changeDetector = changeDetector;
        this.MessageType = _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_0__.MessageType;
        this.updateMessages$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this.messages = [];
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    }
    ngOnInit() {
        this.route.params
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroy$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.mergeMap)(params => {
            this.toName = params.username;
            return this.userService.getUser(this.toName).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1));
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(() => this.router.navigate(['/'])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(user => typeof user !== 'boolean'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.tap)(user => {
            this.to = user;
            this.changeDetector.detectChanges();
            this.updateMessages$.next();
        }))
            .subscribe();
        (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.interval)(5000)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroy$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(() => this.to != null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.mergeMap)(() => this.userService.getUser(this.toName).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.tap)(user => (this.to = user), () => this.router.navigate(['/rooms'])))
            .subscribe();
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        this.updateMessages$.complete();
    }
}
DirectMessagePageComponent.ɵfac = function DirectMessagePageComponent_Factory(t) { return new (t || DirectMessagePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_user_service_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef)); };
DirectMessagePageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DirectMessagePageComponent, selectors: [["ng-component"]], decls: 1, vars: 1, consts: [["class", "d-flex flex-column flex-grow-1", 4, "ngIf"], [1, "d-flex", "flex-column", "flex-grow-1"], [1, "d-flex", "p-4", "justify-content-between"], [1, "fw-bold"], ["mat-icon-button", "", "routerLink", "/"], [3, "type", "to", "messages", "updateMessages$"]], template: function DirectMessagePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, DirectMessagePageComponent_div_0_Template, 8, 6, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.to);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLinkWithHref, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon, _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_0__.MessagesComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaXJlY3QtbWVzc2FnZS1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 4963:
/*!**************************************************************!*\
  !*** ./src/app/features/messages/service/message.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessageService": () => (/* binding */ MessageService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 2340);
/* harmony import */ var _auth_interceptor_auth_token_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../auth/interceptor/auth-token.interceptor */ 5244);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _core_socket_main_socket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/socket/main-socket */ 2599);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 1841);





const { api } = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment;
class MessageService {
    constructor(socket, http) {
        this.socket = socket;
        this.http = http;
    }
    getMessages(type, id, limit, before) {
        const params = { limit, before };
        for (const key of Object.keys(params)) {
            if (!params[key]) {
                delete params[key];
            }
        }
        return this.http.get(`${api}/message/${type}/${id}`, { params });
    }
    getFirstMessage(type, id) {
        return this.http.get(`${api}/message/${type}-first-message/${id}`);
    }
    onMessage(type) {
        return this.socket.fromEvent(`message:${type}`);
    }
    sendMessage(type, id, message, callback) {
        return this.socket.emit(`message:${type}`, {
            to: id,
            roomId: id,
            message,
        }, callback);
    }
    sendTyping(type, id) {
        return this.socket.emit(`message:${type}:typing`, id);
    }
    deleteMessage(type, message) {
        return this.http.delete(`${api}/message/${type}`, {
            body: {
                messageId: message._id,
                roomId: message.room,
                to: message.to,
            },
            headers: {
                [_auth_interceptor_auth_token_interceptor__WEBPACK_IMPORTED_MODULE_1__.AuthTokenInterceptor.skipHeader]: 'true',
            },
        });
    }
    onDeleteMessagesEvent(type) {
        return this.socket.fromEvent(`${type}:delete_messages`);
    }
    onDeleteMessageEvent(type) {
        return this.socket.fromEvent(`${type}:delete_message`);
    }
    onTyping(type, id) {
        return this.socket.fromEvent(`message:${type}:typing`);
    }
}
MessageService.ɵfac = function MessageService_Factory(t) { return new (t || MessageService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_core_socket_main_socket__WEBPACK_IMPORTED_MODULE_2__.MainSocket), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient)); };
MessageService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: MessageService, factory: MessageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9034:
/*!***************************************************************************************************!*\
  !*** ./src/app/features/notification/components/push-notification/push-notification.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PushNotificationComponent": () => (/* binding */ PushNotificationComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9765);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 6782);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 5435);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 9773);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _auth_service_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../auth/service/auth.service */ 2477);
/* harmony import */ var _service_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/notification.service */ 2830);
/* harmony import */ var _user_service_subscription_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../user/service/subscription.service */ 5511);






class PushNotificationComponent {
    constructor(authService, notificationService, subscriptionService) {
        this.authService = authService;
        this.notificationService = notificationService;
        this.subscriptionService = subscriptionService;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    }
    ngOnInit() {
        this.authService.user$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroy$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(user => user != null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.mergeMap)(() => this.subscriptionService.requestSubscription()))
            .subscribe();
        this.notificationService.updateAvailable$.subscribe();
        this.notificationService.checkForUpdates();
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
PushNotificationComponent.ɵfac = function PushNotificationComponent_Factory(t) { return new (t || PushNotificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_service_notification_service__WEBPACK_IMPORTED_MODULE_1__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_user_service_subscription_service__WEBPACK_IMPORTED_MODULE_2__.SubscriptionService)); };
PushNotificationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: PushNotificationComponent, selectors: [["app-push-notification"]], decls: 0, vars: 0, template: function PushNotificationComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwdXNoLW5vdGlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 3523:
/*!**************************************************************!*\
  !*** ./src/app/features/notification/notification.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationModule": () => (/* binding */ NotificationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 4466);
/* harmony import */ var _components_push_notification_push_notification_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/push-notification/push-notification.component */ 9034);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);




class NotificationModule {
}
NotificationModule.ɵfac = function NotificationModule_Factory(t) { return new (t || NotificationModule)(); };
NotificationModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: NotificationModule });
NotificationModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NotificationModule, { declarations: [_components_push_notification_push_notification_component__WEBPACK_IMPORTED_MODULE_1__.PushNotificationComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule], exports: [_components_push_notification_push_notification_component__WEBPACK_IMPORTED_MODULE_1__.PushNotificationComponent] }); })();


/***/ }),

/***/ 2830:
/*!***********************************************************************!*\
  !*** ./src/app/features/notification/service/notification.service.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationService": () => (/* binding */ NotificationService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 8307);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 9773);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/service-worker */ 2249);






const { api } = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment;
class NotificationService {
    constructor(http, swPush, swUpdate) {
        this.http = http;
        this.swPush = swPush;
        this.swUpdate = swUpdate;
        this.updateAvailable$ = this.swUpdate.available.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(() => (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            yield this.swUpdate.activateUpdate();
            document.location.reload();
        })));
    }
    getConfig() {
        return this.http.get(`${api}/notification/config`);
    }
    requestSubscription() {
        return this.getConfig().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(({ webPublicKey: serverPublicKey }) => this.swPush.requestSubscription({ serverPublicKey })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(subscription => this.setSubscription(subscription)));
    }
    getSubscription() {
        return JSON.parse(sessionStorage.getItem('notificationToken') || '{}');
    }
    setSubscription(subscription) {
        sessionStorage.setItem('notificationToken', JSON.stringify(subscription));
    }
    checkForUpdates() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            try {
                yield this.swUpdate.checkForUpdate();
            }
            catch (e) {
                console.error('An error occured checking service worker updates', e);
            }
        });
    }
}
NotificationService.ɵfac = function NotificationService_Factory(t) { return new (t || NotificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_service_worker__WEBPACK_IMPORTED_MODULE_6__.SwPush), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_service_worker__WEBPACK_IMPORTED_MODULE_6__.SwUpdate)); };
NotificationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: NotificationService, factory: NotificationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9202:
/*!*****************************************************************************************!*\
  !*** ./src/app/features/room/components/join-room-dialog/join-room-dialog.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JoinRoomDialogComponent": () => (/* binding */ JoinRoomDialogComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 5257);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _service_room_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/room.service */ 6594);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 2238);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 8295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 3166);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 1095);









class JoinRoomDialogComponent {
    constructor(formBuilder, roomService, dialog, router) {
        this.formBuilder = formBuilder;
        this.roomService = roomService;
        this.dialog = dialog;
        this.router = router;
        this.joinForm = this.formBuilder.group({
            code: '',
        });
    }
    submit() {
        const array = this.joinForm.value.code.trim().split('/');
        const code = array[array.length - 1];
        if (!code) {
            return;
        }
        this.roomService
            .getRoom(code)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1))
            .subscribe(room => {
            this.dialog.close();
            this.router.navigate(['/room', room._id]);
        });
    }
}
JoinRoomDialogComponent.ɵfac = function JoinRoomDialogComponent_Factory(t) { return new (t || JoinRoomDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_room_service__WEBPACK_IMPORTED_MODULE_0__.RoomService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
JoinRoomDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: JoinRoomDialogComponent, selectors: [["app-join-room-dialog"]], decls: 10, vars: 1, consts: [["mat-dialog-title", ""], [3, "formGroup", "ngSubmit"], [1, "full-width"], ["type", "text", "formControlName", "code", "placeholder", "Type the room code", "matInput", ""], ["mat-raised-button", ""]], template: function JoinRoomDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Join");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function JoinRoomDialogComponent_Template_form_ngSubmit_3_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Join");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.joinForm);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogTitle, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJqb2luLXJvb20tZGlhbG9nLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 163:
/*!***************************************************************************!*\
  !*** ./src/app/features/room/components/room-item/room-item.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoomItemComponent": () => (/* binding */ RoomItemComponent)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 3815);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 5257);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 8307);
/* harmony import */ var _shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/confirm-dialog/confirm-dialog.component */ 9077);
/* harmony import */ var _shared_utils_upsert_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/utils/upsert-item */ 7236);
/* harmony import */ var _upsert_room_dialog_upsert_room_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../upsert-room-dialog/upsert-room-dialog.component */ 1529);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _service_room_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/room.service */ 6594);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 2238);
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/clipboard */ 4785);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/list */ 7746);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 6627);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 7817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 1095);















const _c0 = function (a1) { return ["/direct-message", a1]; };
function RoomItemComponent_a_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](2, _c0, ctx_r0.room.owner.username));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.room.owner.username, " ");
} }
function RoomItemComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RoomItemComponent_div_11_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r3.openUpdateDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RoomItemComponent_div_11_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r5.confirmDelete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function RoomItemComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RoomItemComponent_div_12_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r6.confirmLeaveRoom(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Leave ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
class RoomItemComponent {
    constructor(roomService, dialog, clipboard, router) {
        this.roomService = roomService;
        this.dialog = dialog;
        this.clipboard = clipboard;
        this.router = router;
        this.publicRooms = [];
        this.userRooms = [];
        this.memberRooms = [];
        this.loading = false;
        this.isOwner = false;
    }
    get isMember() {
        return this.memberRooms.some(e => e._id === this.room._id);
    }
    ngOnInit() {
        this.isOwner =
            this.room.owner === this.user._id ||
                this.room.owner._id === this.user._id;
    }
    openUpdateDialog() {
        const dialog = this.dialog.open(_upsert_room_dialog_upsert_room_dialog_component__WEBPACK_IMPORTED_MODULE_3__.UpsertRoomDialogComponent, {
            data: {
                type: _upsert_room_dialog_upsert_room_dialog_component__WEBPACK_IMPORTED_MODULE_3__.ActionType.Update,
                room: this.room,
            },
        });
        dialog
            .afterClosed()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1))
            .subscribe((updatedRoom) => {
            (0,_shared_utils_upsert_item__WEBPACK_IMPORTED_MODULE_2__.updateItem)(this.publicRooms, r => r._id === this.room._id, updatedRoom);
            (0,_shared_utils_upsert_item__WEBPACK_IMPORTED_MODULE_2__.updateItem)(this.memberRooms, r => r._id === this.room._id, updatedRoom);
            (0,_shared_utils_upsert_item__WEBPACK_IMPORTED_MODULE_2__.updateItem)(this.userRooms, r => r._id === this.room._id, updatedRoom);
        });
    }
    confirmDelete() {
        const dialog = this.dialog.open(_shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmDialogComponent);
        dialog
            .afterClosed()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1))
            .subscribe(confirm => {
            if (confirm) {
                this.delete();
            }
        });
    }
    delete() {
        if (this.loading) {
            return;
        }
        this.loading = true;
        this.roomService
            .deleteRoom(this.room)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1))
            .subscribe(() => {
            this.loading = false;
            (0,lodash__WEBPACK_IMPORTED_MODULE_0__.remove)(this.userRooms, r => r._id === this.room._id);
            (0,lodash__WEBPACK_IMPORTED_MODULE_0__.remove)(this.publicRooms, r => r._id === this.room._id);
            (0,lodash__WEBPACK_IMPORTED_MODULE_0__.remove)(this.memberRooms, r => r._id === this.room._id);
        });
    }
    joinRoom() {
        this.loading = true;
        const process = () => (this.loading = false);
        this.roomService
            .getRoom(this.room._id)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(process, process))
            .subscribe(() => this.router.navigate(['/room', this.room._id]));
    }
    confirmLeaveRoom() {
        const dialog = this.dialog.open(_shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmDialogComponent);
        dialog
            .afterClosed()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1))
            .subscribe(confirm => {
            if (confirm) {
                this.leaveRoom();
            }
        });
    }
    leaveRoom() {
        this.loading = true;
        const process = () => (this.loading = false);
        this.roomService
            .leaveRoom(this.room._id)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(process, process))
            .subscribe(() => (0,lodash__WEBPACK_IMPORTED_MODULE_0__.remove)(this.memberRooms, r => r._id === this.room._id));
    }
    copyUrl() {
        this.clipboard.copy(`${window.location.origin}/room/${this.room._id}`);
    }
    isString(value) {
        return typeof value === 'string';
    }
}
RoomItemComponent.ɵfac = function RoomItemComponent_Factory(t) { return new (t || RoomItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_service_room_service__WEBPACK_IMPORTED_MODULE_4__.RoomService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_9__.Clipboard), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router)); };
RoomItemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: RoomItemComponent, selectors: [["app-room-item"]], inputs: { room: "room", user: "user", publicRooms: "publicRooms", userRooms: "userRooms", memberRooms: "memberRooms" }, decls: 13, vars: 5, consts: [["matListIcon", ""], ["matLine", ""], ["matLine", "", "class", "description", 3, "routerLink", 4, "ngIf"], ["mat-button", "", 1, "text-primary", 3, "click"], [1, "mb-2", "d-flex"], ["mat-button", "", 3, "click"], [4, "ngIf"], ["matLine", "", 1, "description", 3, "routerLink"], ["mat-button", "", 1, "text-danger", 3, "click"]], template: function RoomItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-icon", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "person");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, RoomItemComponent_a_5_Template, 2, 4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RoomItemComponent_Template_button_click_6_listener() { return ctx.joinRoom(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Join");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RoomItemComponent_Template_button_click_9_listener() { return ctx.copyUrl(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Copy");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, RoomItemComponent_div_11_Template, 5, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, RoomItemComponent_div_12_Template, 3, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", ctx.room.title, " (", ctx.room.members.length, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isOwner && !ctx.isString(ctx.room.owner));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isOwner);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isMember);
    } }, directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_11__.MatListItem, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_material_list__WEBPACK_IMPORTED_MODULE_11__.MatListIconCssMatStyler, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatLine, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLinkWithHref], styles: [".description[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #444;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvb20taXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtBQUNGIiwiZmlsZSI6InJvb20taXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXNjcmlwdGlvbiB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiAjNDQ0O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 1529:
/*!*********************************************************************************************!*\
  !*** ./src/app/features/room/components/upsert-room-dialog/upsert-room-dialog.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionType": () => (/* binding */ ActionType),
/* harmony export */   "UpsertRoomDialogComponent": () => (/* binding */ UpsertRoomDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 2238);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 5257);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _service_room_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/room.service */ 6594);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 8295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 3166);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/slide-toggle */ 5396);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 1095);











function UpsertRoomDialogComponent_h3_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Create Room");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UpsertRoomDialogComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Update Room ", ctx_r2.room.title, "");
} }
var ActionType;
(function (ActionType) {
    ActionType[ActionType["Update"] = 0] = "Update";
    ActionType[ActionType["Create"] = 1] = "Create";
})(ActionType || (ActionType = {}));
class UpsertRoomDialogComponent {
    constructor(data, roomService, formBuilder, dialogRef) {
        this.roomService = roomService;
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.upsertForm = this.formBuilder.group({
            title: '',
            isPublic: false,
        });
        this.ActionType = ActionType;
        this.type = data.type;
        this.room = data.room;
        this.upsertForm.patchValue(Object.assign({}, this.room));
    }
    submit() {
        const roomInput = this.upsertForm.value;
        let request = this.roomService.createRoom(roomInput);
        if (this.type === ActionType.Update) {
            request = this.roomService.updateRoom(this.room._id, roomInput);
        }
        request.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1)).subscribe(room => this.dialogRef.close(Object.assign(Object.assign({}, room), { title: roomInput.title, isPublic: roomInput.isPublic })));
    }
}
UpsertRoomDialogComponent.ɵfac = function UpsertRoomDialogComponent_Factory(t) { return new (t || UpsertRoomDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_room_service__WEBPACK_IMPORTED_MODULE_0__.RoomService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef)); };
UpsertRoomDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UpsertRoomDialogComponent, selectors: [["app-upsert-room-dialog"]], decls: 13, vars: 3, consts: [[4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "full-width"], ["type", "text", "formControlName", "title", "placeholder", "Type a room title", "matInput", ""], ["color", "primary", "formControlName", "isPublic", 1, "d-block", "mb-3"], ["mat-raised-button", ""], ["update", ""]], template: function UpsertRoomDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UpsertRoomDialogComponent_h3_1_Template, 2, 0, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function UpsertRoomDialogComponent_Template_form_ngSubmit_2_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-slide-toggle", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Public ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, UpsertRoomDialogComponent_ng_template_11_Template, 2, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.type === ctx.ActionType.Create);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.upsertForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.type === ctx.ActionType.Create ? "Create" : "Update", " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__.MatSlideToggle, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cHNlcnQtcm9vbS1kaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 9178:
/*!**********************************************************************!*\
  !*** ./src/app/features/room/pages/room-page/room-page.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoomPageComponent": () => (/* binding */ RoomPageComponent)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 3815);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 9765);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 945);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 6782);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 9773);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 5257);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 5435);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 8307);
/* harmony import */ var _messages_components_messages_messages_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../messages/components/messages/messages.component */ 238);
/* harmony import */ var _service_room_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/room.service */ 6594);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _core_socket_main_socket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/socket/main-socket */ 2599);
/* harmony import */ var _auth_service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../auth/service/auth.service */ 2477);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/toolbar */ 2522);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ 6627);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ 7817);
















const _c0 = function (a1) { return ["/direct-message", a1]; };
function RoomPageComponent_div_0_a_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const member_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](3, _c0, member_r2.username));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](member_r2.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", member_r2.online ? "online" : "offline");
} }
const _c1 = function (a0) { return { hide: a0 }; };
function RoomPageComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RoomPageComponent_div_0_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r3.showTotalMembers = !ctx_r3.showTotalMembers; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, RoomPageComponent_div_0_a_7_Template, 4, 5, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "mat-toolbar", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RoomPageComponent_div_0_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r5.areMembersShown = !ctx_r5.areMembersShown; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "app-messages", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](9, _c1, !ctx_r0.areMembersShown));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", ctx_r0.showTotalMembers ? "All" : "Online", " members (", (ctx_r0.showTotalMembers ? ctx_r0.room.members : ctx_r0.onlineMembers).length, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.showTotalMembers ? ctx_r0.room.members : ctx_r0.onlineMembers);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.room.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("type", ctx_r0.MessageType.Room)("room", ctx_r0.room)("messages", ctx_r0.messages)("updateMessages$", ctx_r0.updateMessages$);
} }
class RoomPageComponent {
    constructor(roomService, route, socket, router, authService, changeDetector) {
        this.roomService = roomService;
        this.route = route;
        this.socket = socket;
        this.router = router;
        this.authService = authService;
        this.changeDetector = changeDetector;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
        this.MessageType = _messages_components_messages_messages_component__WEBPACK_IMPORTED_MODULE_1__.MessageType;
        this.areMembersShown = false;
        this.messages = [];
        this.updateMessages$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
        this.showTotalMembers = true;
    }
    get onlineMembers() {
        return this.room.members.filter(user => user.online);
    }
    ngOnInit() {
        // Subscribe to room events
        this.route.params
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.mergeMap)(params => {
            this.roomId = params.id;
            return this.roomService.joinRoom(this.roomId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.take)(1));
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.catchError)(() => this.router.navigate(['/rooms'])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.filter)(room => typeof room !== 'boolean'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.mergeMap)(room => {
            this.room = room;
            this.changeDetector.detectChanges();
            return this.socket.onConnect();
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.tap)(() => {
            this.roomService.subscribeRoom(this.room);
            this.updateMessages$.next();
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$))
            .subscribe();
        (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.interval)(5000)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.filter)(() => this.room != null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.mergeMap)(() => this.roomService.getRoom(this.roomId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.take)(1))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.tap)(room => (this.room = room), () => this.router.navigate(['/rooms'])))
            .subscribe();
        this.roomService
            .onJoinEvent()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$))
            .subscribe(user => {
            this.room.members.push(user);
            this.room = this.roomService.getRoomWithSortedMembers(this.room);
        });
        this.roomService
            .onLeaveEvent()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$))
            .subscribe(user => {
            if (user._id === this.user._id) {
                this.router.navigate(['/rooms']);
                return;
            }
            (0,lodash__WEBPACK_IMPORTED_MODULE_0__.remove)(this.room.members, u => u === user || u._id === user._id);
        });
        this.roomService
            .onUpdateEvent()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$))
            .subscribe(room => (this.room = room));
        this.roomService
            .onDeleteEvent()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$))
            .subscribe(() => this.router.navigate(['/rooms']));
        this.authService.user$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$))
            .subscribe(user => (this.user = user));
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
RoomPageComponent.ɵfac = function RoomPageComponent_Factory(t) { return new (t || RoomPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_service_room_service__WEBPACK_IMPORTED_MODULE_2__.RoomService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_socket_main_socket__WEBPACK_IMPORTED_MODULE_3__.MainSocket), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef)); };
RoomPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: RoomPageComponent, selectors: [["ng-component"]], decls: 1, vars: 1, consts: [["class", "d-flex flex-grow-1", 4, "ngIf"], [1, "d-flex", "flex-grow-1"], [1, "members", "bg-white", "d-flex", "flex-column", "position-relative", "flex-grow-1", 3, "ngClass"], ["role", "button", 1, "top-header", "d-flex", "align-items-center", "overflow-hidden", 3, "click"], [1, "m-0", "px-4", "text-nowrap"], [1, "position-relative", "d-flex", "flex-grow-1"], [1, "position-absolute", "scroll", "w-100"], ["matRipple", "", "class", "\n            w-100\n            px-4\n            py-3\n            d-flex\n            align-items-center\n            justify-content-between\n          ", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "d-flex", "flex-column", "w-100"], ["color", "primary", 1, "toolbar"], ["mat-icon-button", "", "aria-label", "Members menu", 1, "me-2", 3, "click"], [1, "spacer"], ["mat-button", "", "routerLink", "/rooms"], [1, "text-white"], [3, "type", "room", "messages", "updateMessages$"], ["matRipple", "", 1, "w-100", "px-4", "py-3", "d-flex", "align-items-center", "justify-content-between", 3, "routerLink"], [1, "circle", 3, "ngClass"]], template: function RoomPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, RoomPageComponent_div_0_Template, 20, 11, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.room);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__.MatToolbar, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterLinkWithHref, _messages_components_messages_messages_component__WEBPACK_IMPORTED_MODULE_1__.MessagesComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatRipple], styles: [".top-header[_ngcontent-%COMP%] {\n  height: 64px;\n  background-color: rgba(0, 0, 0, 0.04);\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;\n}\n\n.toolbar[_ngcontent-%COMP%] {\n  height: 64px;\n}\n\n.scroll[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow: auto;\n}\n\n.members[_ngcontent-%COMP%] {\n  transition: 0.5s ease width;\n}\n\n@media (min-width: 768px) {\n  .members[_ngcontent-%COMP%] {\n    width: 40%;\n  }\n}\n\n@media (min-width: 1200px) {\n  .members[_ngcontent-%COMP%] {\n    width: 30%;\n  }\n}\n\n@media (max-width: 767.98px) {\n  .members[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n.members.hide[_ngcontent-%COMP%] {\n  width: 0%;\n}\n\n.members[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #444;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.members[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(2n) {\n  background-color: rgba(0, 0, 0, 0.04);\n}\n\n.members[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 100%;\n  display: inline-block;\n}\n\n.members[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  display: inline-block;\n  border-radius: 50%;\n}\n\n.members[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .circle.online[_ngcontent-%COMP%] {\n  background-color: #00b74a;\n}\n\n.members[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .circle.offline[_ngcontent-%COMP%] {\n  background-color: #f93154;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvb20tcGFnZS5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXG5vZGVfbW9kdWxlc1xcYm9vdHN0cmFwXFxzY3NzXFxtaXhpbnNcXF9icmVha3BvaW50cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0UsWUFIVztFQUlYLHFDQUxrQjtFQU1sQix3REFBQTtBQUpGOztBQU9BO0VBQ0UsWUFUVztBQUtiOztBQU9BO0VBQ0UsWUFBQTtFQUNBLGNBQUE7QUFKRjs7QUFPQTtFQWFFLDJCQUFBO0FBaEJGOztBQzhDSTtFRDNDSjtJQUVJLFVBQUE7RUFERjtBQUNGOztBQ3lDSTtFRDNDSjtJQU1JLFVBQUE7RUFBRjtBQUNGOztBQ2lESTtFRHhESjtJQVVJLFdBQUE7RUFDRjtBQUNGOztBQUdFO0VBQ0UsU0FBQTtBQURKOztBQUlFO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQUZKOztBQUlJO0VBQ0UscUNBM0NjO0FBeUNwQjs7QUFLSTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtBQUhOOztBQU1JO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBSk47O0FBTU07RUFDRSx5QkFBQTtBQUpSOztBQU9NO0VBQ0UseUJBQUE7QUFMUiIsImZpbGUiOiJyb29tLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdib290c3RyYXAtZ2xvYmFscyc7XHJcblxyXG4kYnV0dG9uLWJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wNCk7XHJcbiR0b3AtaGVpZ2h0OiA2NHB4O1xyXG5cclxuLnRvcC1oZWFkZXIge1xyXG4gIGhlaWdodDogJHRvcC1oZWlnaHQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJ1dHRvbi1iYWNrZ3JvdW5kO1xyXG4gIGZvbnQ6IDUwMCAyMHB4LzMycHggUm9ib3RvLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4udG9vbGJhciB7XHJcbiAgaGVpZ2h0OiAkdG9wLWhlaWdodDtcclxufVxyXG5cclxuLnNjcm9sbCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4ubWVtYmVycyB7XHJcbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChtZCkge1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICB9XHJcblxyXG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoeGwpIHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgfVxyXG5cclxuICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24obWQpIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlIHdpZHRoO1xyXG5cclxuICAmLmhpZGUge1xyXG4gICAgd2lkdGg6IDAlO1xyXG4gIH1cclxuXHJcbiAgYSB7XHJcbiAgICBjb2xvcjogIzQ0NDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAmOm50aC1jaGlsZCgybikge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYnV0dG9uLWJhY2tncm91bmQ7XHJcbiAgICB9XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB9XHJcblxyXG4gICAgLmNpcmNsZSB7XHJcbiAgICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG5cclxuICAgICAgJi5vbmxpbmUge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hcC1nZXQoJHRoZW1lLWNvbG9ycywgJ3N1Y2Nlc3MnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5vZmZsaW5lIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXAtZ2V0KCR0aGVtZS1jb2xvcnMsICdkYW5nZXInKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIvLyBCcmVha3BvaW50IHZpZXdwb3J0IHNpemVzIGFuZCBtZWRpYSBxdWVyaWVzLlxuLy9cbi8vIEJyZWFrcG9pbnRzIGFyZSBkZWZpbmVkIGFzIGEgbWFwIG9mIChuYW1lOiBtaW5pbXVtIHdpZHRoKSwgb3JkZXIgZnJvbSBzbWFsbCB0byBsYXJnZTpcbi8vXG4vLyAgICAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpXG4vL1xuLy8gVGhlIG1hcCBkZWZpbmVkIGluIHRoZSBgJGdyaWQtYnJlYWtwb2ludHNgIGdsb2JhbCB2YXJpYWJsZSBpcyB1c2VkIGFzIHRoZSBgJGJyZWFrcG9pbnRzYCBhcmd1bWVudCBieSBkZWZhdWx0LlxuXG4vLyBOYW1lIG9mIHRoZSBuZXh0IGJyZWFrcG9pbnQsIG9yIG51bGwgZm9yIHRoZSBsYXN0IGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICRicmVha3BvaW50LW5hbWVzOiAoeHMgc20gbWQgbGcgeGwpKVxuLy8gICAgbWRcbkBmdW5jdGlvbiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMsICRicmVha3BvaW50LW5hbWVzOiBtYXAta2V5cygkYnJlYWtwb2ludHMpKSB7XG4gICRuOiBpbmRleCgkYnJlYWtwb2ludC1uYW1lcywgJG5hbWUpO1xuICBAaWYgbm90ICRuIHtcbiAgICBAZXJyb3IgXCJicmVha3BvaW50IGAjeyRuYW1lfWAgbm90IGZvdW5kIGluIGAjeyRicmVha3BvaW50c31gXCI7XG4gIH1cbiAgQHJldHVybiBpZigkbiA8IGxlbmd0aCgkYnJlYWtwb2ludC1uYW1lcyksIG50aCgkYnJlYWtwb2ludC1uYW1lcywgJG4gKyAxKSwgbnVsbCk7XG59XG5cbi8vIE1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIHNtYWxsZXN0IChmaXJzdCkgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1pbihzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDU3NnB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbWluICE9IDAsICRtaW4sIG51bGwpO1xufVxuXG4vLyBNYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguXG4vLyBUaGUgbWF4aW11bSB2YWx1ZSBpcyByZWR1Y2VkIGJ5IDAuMDJweCB0byB3b3JrIGFyb3VuZCB0aGUgbGltaXRhdGlvbnMgb2Zcbi8vIGBtaW4tYCBhbmQgYG1heC1gIHByZWZpeGVzIGFuZCB2aWV3cG9ydHMgd2l0aCBmcmFjdGlvbmFsIHdpZHRocy5cbi8vIFNlZSBodHRwczovL3d3dy53My5vcmcvVFIvbWVkaWFxdWVyaWVzLTQvI21xLW1pbi1tYXhcbi8vIFVzZXMgMC4wMnB4IHJhdGhlciB0aGFuIDAuMDFweCB0byB3b3JrIGFyb3VuZCBhIGN1cnJlbnQgcm91bmRpbmcgYnVnIGluIFNhZmFyaS5cbi8vIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTc4MjYxXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1tYXgobWQsICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA3NjcuOThweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtYXg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG1heCBhbmQgJG1heCA+IDAsICRtYXggLSAuMDIsIG51bGwpO1xufVxuXG4vLyBSZXR1cm5zIGEgYmxhbmsgc3RyaW5nIGlmIHNtYWxsZXN0IGJyZWFrcG9pbnQsIG90aGVyd2lzZSByZXR1cm5zIHRoZSBuYW1lIHdpdGggYSBkYXNoIGluIGZyb250LlxuLy8gVXNlZnVsIGZvciBtYWtpbmcgcmVzcG9uc2l2ZSB1dGlsaXRpZXMuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeCh4cywgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiXCIgIChSZXR1cm5zIGEgYmxhbmsgc3RyaW5nKVxuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiLXNtXCJcbkBmdW5jdGlvbiBicmVha3BvaW50LWluZml4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gIEByZXR1cm4gaWYoYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cykgPT0gbnVsbCwgXCJcIiwgXCItI3skbmFtZX1cIik7XG59XG5cbi8vIE1lZGlhIG9mIGF0IGxlYXN0IHRoZSBtaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgd2lkZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtaW4ge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIG9mIGF0IG1vc3QgdGhlIG1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBsYXJnZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtYXgge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIHRoYXQgc3BhbnMgbXVsdGlwbGUgYnJlYWtwb2ludCB3aWR0aHMuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgYmV0d2VlbiB0aGUgbWluIGFuZCBtYXggYnJlYWtwb2ludHNcbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWJldHdlZW4oJGxvd2VyLCAkdXBwZXIsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJGxvd2VyLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkdXBwZXIsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGxvd2VyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkdXBwZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbi8vIE1lZGlhIGJldHdlZW4gdGhlIGJyZWFrcG9pbnQncyBtaW5pbXVtIGFuZCBtYXhpbXVtIHdpZHRocy5cbi8vIE5vIG1pbmltdW0gZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LCBhbmQgbm8gbWF4aW11bSBmb3IgdGhlIGxhcmdlc3Qgb25lLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IG9ubHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQsIG5vdCB2aWV3cG9ydHMgYW55IHdpZGVyIG9yIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtb25seSgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiAgYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gICRuZXh0OiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50cyk7XG4gICRtYXg6ICBicmVha3BvaW50LW1heCgkbmV4dCk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuZXh0LCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 9612:
/*!************************************************************************!*\
  !*** ./src/app/features/room/pages/rooms-page/rooms-page.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoomsPageComponent": () => (/* binding */ RoomsPageComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 9765);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 5758);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 5257);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 8307);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 6782);
/* harmony import */ var _components_join_room_dialog_join_room_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/join-room-dialog/join-room-dialog.component */ 9202);
/* harmony import */ var _components_upsert_room_dialog_upsert_room_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/upsert-room-dialog/upsert-room-dialog.component */ 1529);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _service_room_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/room.service */ 6594);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 2238);
/* harmony import */ var _auth_service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../auth/service/auth.service */ 2477);
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/clipboard */ 4785);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ 3738);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/list */ 7746);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4885);
/* harmony import */ var _components_room_item_room_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/room-item/room-item.component */ 163);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/divider */ 1769);

















function RoomsPageComponent_mat_spinner_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "mat-spinner", 7);
} }
function RoomsPageComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-room-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const room_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("memberRooms", ctx_r1.memberRooms)("userRooms", ctx_r1.userRooms)("publicRooms", ctx_r1.publicRooms)("room", room_r4)("user", ctx_r1.user);
} }
function RoomsPageComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-room-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const room_r5 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("memberRooms", ctx_r2.memberRooms)("userRooms", ctx_r2.userRooms)("publicRooms", ctx_r2.publicRooms)("room", room_r5)("user", ctx_r2.user);
} }
function RoomsPageComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-room-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const room_r6 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("memberRooms", ctx_r3.memberRooms)("userRooms", ctx_r3.userRooms)("publicRooms", ctx_r3.publicRooms)("room", room_r6)("user", ctx_r3.user);
} }
class RoomsPageComponent {
    constructor(roomService, dialog, authService, clipboard, router) {
        this.roomService = roomService;
        this.dialog = dialog;
        this.authService = authService;
        this.clipboard = clipboard;
        this.router = router;
        this.publicRooms = [];
        this.userRooms = [];
        this.memberRooms = [];
        this.loading = false;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    }
    ngOnInit() {
        this.loading = true;
        const process = () => (this.loading = false);
        (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.forkJoin)({
            userRooms: this.roomService.getUserRooms().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.take)(1)),
            publicRooms: this.roomService.getPublicRooms().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.take)(1)),
            memberRooms: this.roomService.getRoomsByMember().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.take)(1)),
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.tap)(process, process))
            .subscribe(({ userRooms, publicRooms, memberRooms }) => {
            this.publicRooms = publicRooms;
            this.userRooms = userRooms;
            this.memberRooms = memberRooms;
        });
        this.authService.user$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$))
            .subscribe(user => (this.user = user));
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    openCreateDialog() {
        const dialog = this.dialog.open(_components_upsert_room_dialog_upsert_room_dialog_component__WEBPACK_IMPORTED_MODULE_1__.UpsertRoomDialogComponent, {
            data: {
                type: _components_upsert_room_dialog_upsert_room_dialog_component__WEBPACK_IMPORTED_MODULE_1__.ActionType.Create,
            },
        });
        dialog
            .afterClosed()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.take)(1))
            .subscribe((room) => {
            if (room.isPublic) {
                this.publicRooms.push(room);
            }
            this.userRooms.push(room);
        });
    }
    openJoinRoomDialog() {
        this.dialog.open(_components_join_room_dialog_join_room_dialog_component__WEBPACK_IMPORTED_MODULE_0__.JoinRoomDialogComponent);
    }
}
RoomsPageComponent.ɵfac = function RoomsPageComponent_Factory(t) { return new (t || RoomsPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_service_room_service__WEBPACK_IMPORTED_MODULE_2__.RoomService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_12__.Clipboard), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router)); };
RoomsPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: RoomsPageComponent, selectors: [["ng-component"]], decls: 23, vars: 4, consts: [["class", "position-absolute", "diameter", "30", 4, "ngIf"], [1, "container", "mt-5"], ["mat-card-title", ""], ["mat-button", "", 3, "click"], ["mat-button", "", "routerLink", "/"], ["matSubheader", ""], [4, "ngFor", "ngForOf"], ["diameter", "30", 1, "position-absolute"], [3, "memberRooms", "userRooms", "publicRooms", "room", "user"]], template: function RoomsPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, RoomsPageComponent_mat_spinner_0_Template, 1, 0, "mat-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Rooms");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RoomsPageComponent_Template_button_click_5_listener() { return ctx.openCreateDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Create Room");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RoomsPageComponent_Template_button_click_7_listener() { return ctx.openJoinRoomDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Join Room");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "mat-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Your Rooms");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, RoomsPageComponent_div_14_Template, 3, 5, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "mat-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Joined Rooms");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, RoomsPageComponent_div_18_Template, 3, 5, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "mat-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Public Rooms");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, RoomsPageComponent_div_22_Template, 3, 5, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.userRooms);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.memberRooms);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.publicRooms);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardTitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterLinkWithHref, _angular_material_list__WEBPACK_IMPORTED_MODULE_17__.MatList, _angular_material_list__WEBPACK_IMPORTED_MODULE_17__.MatListSubheaderCssMatStyler, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__.MatSpinner, _components_room_item_room_item_component__WEBPACK_IMPORTED_MODULE_4__.RoomItemComponent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__.MatDivider], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb29tcy1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 96:
/*!**********************************************!*\
  !*** ./src/app/features/room/room.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoomModule": () => (/* binding */ RoomModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _pages_rooms_page_rooms_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/rooms-page/rooms-page.component */ 9612);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/shared.module */ 4466);
/* harmony import */ var _service_room_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/room.service */ 6594);
/* harmony import */ var _components_upsert_room_dialog_upsert_room_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/upsert-room-dialog/upsert-room-dialog.component */ 1529);
/* harmony import */ var _components_join_room_dialog_join_room_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/join-room-dialog/join-room-dialog.component */ 9202);
/* harmony import */ var _pages_room_page_room_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/room-page/room-page.component */ 9178);
/* harmony import */ var _messages_messages_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../messages/messages.module */ 5289);
/* harmony import */ var _components_room_item_room_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/room-item/room-item.component */ 163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);










class RoomModule {
}
RoomModule.ɵfac = function RoomModule_Factory(t) { return new (t || RoomModule)(); };
RoomModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: RoomModule });
RoomModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ providers: [_service_room_service__WEBPACK_IMPORTED_MODULE_2__.RoomService], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _messages_messages_module__WEBPACK_IMPORTED_MODULE_6__.MessagesModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](RoomModule, { declarations: [_pages_rooms_page_rooms_page_component__WEBPACK_IMPORTED_MODULE_0__.RoomsPageComponent,
        _components_upsert_room_dialog_upsert_room_dialog_component__WEBPACK_IMPORTED_MODULE_3__.UpsertRoomDialogComponent,
        _components_join_room_dialog_join_room_dialog_component__WEBPACK_IMPORTED_MODULE_4__.JoinRoomDialogComponent,
        _pages_room_page_room_page_component__WEBPACK_IMPORTED_MODULE_5__.RoomPageComponent,
        _components_room_item_room_item_component__WEBPACK_IMPORTED_MODULE_7__.RoomItemComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _messages_messages_module__WEBPACK_IMPORTED_MODULE_6__.MessagesModule], exports: [_pages_rooms_page_rooms_page_component__WEBPACK_IMPORTED_MODULE_0__.RoomsPageComponent, _pages_room_page_room_page_component__WEBPACK_IMPORTED_MODULE_5__.RoomPageComponent] }); })();


/***/ }),

/***/ 6594:
/*!*******************************************************!*\
  !*** ./src/app/features/room/service/room.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoomService": () => (/* binding */ RoomService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _core_socket_main_socket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/socket/main-socket */ 2599);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 1841);





const { api } = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment;
class RoomService {
    constructor(socket, http) {
        this.socket = socket;
        this.http = http;
    }
    getRoom(roomId) {
        return this.http
            .get(`${api}/room/id/${roomId}`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(this.getRoomWithSortedMembers));
    }
    getPublicRooms() {
        return this.http.get(`${api}/room/public`);
    }
    getRoomsByMember() {
        return this.http.get(`${api}/room/member`);
    }
    getUserRooms() {
        return this.http.get(`${api}/room`);
    }
    createRoom(room) {
        return this.http.post(`${api}/room`, room);
    }
    deleteRoom(room) {
        return this.http.delete(`${api}/room/delete/${room._id}`);
    }
    updateRoom(id, room) {
        return this.http.put(`${api}/room/${id}`, room);
    }
    joinRoom(roomId) {
        return this.http
            .post(`${api}/room/join`, { roomId })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(this.getRoomWithSortedMembers));
    }
    leaveRoom(roomId) {
        return this.http.delete(`${api}/room/leave/${roomId}`);
    }
    subscribeRoom(room) {
        this.socket.emit('room:subscribe', room._id);
    }
    onLeaveEvent() {
        return this.socket.fromEvent('room:leave');
    }
    onJoinEvent() {
        return this.socket.fromEvent('room:join');
    }
    onUpdateEvent() {
        return this.socket
            .fromEvent('room:update')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(this.getRoomWithSortedMembers));
    }
    onDeleteEvent() {
        return this.socket.fromEvent('room:delete');
    }
    getRoomWithSortedMembers(room) {
        room.members = room.members.sort((a, b) => a.online === b.online ? 0 : a.online ? -1 : b.online ? 1 : 0);
        return room;
    }
}
RoomService.ɵfac = function RoomService_Factory(t) { return new (t || RoomService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_core_socket_main_socket__WEBPACK_IMPORTED_MODULE_1__.MainSocket), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient)); };
RoomService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: RoomService, factory: RoomService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2371:
/*!************************************!*\
  !*** ./src/app/features/routes.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _auth_pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth/pages/login-page/login-page.component */ 7550);
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main/main.component */ 2260);
/* harmony import */ var _auth_pages_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/pages/register-page/register-page.component */ 2327);
/* harmony import */ var _auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/guard/auth.guard */ 2364);
/* harmony import */ var _user_pages_settings_page_settings_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user/pages/settings-page/settings-page.component */ 2857);
/* harmony import */ var _user_pages_recover_change_password_page_recover_change_password_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user/pages/recover-change-password-page/recover-change-password-page.component */ 6600);
/* harmony import */ var _room_pages_rooms_page_rooms_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./room/pages/rooms-page/rooms-page.component */ 9612);
/* harmony import */ var _room_pages_room_page_room_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./room/pages/room-page/room-page.component */ 9178);
/* harmony import */ var _user_pages_recover_page_recover_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user/pages/recover-page/recover-page.component */ 9860);
/* harmony import */ var _messages_pages_direct_message_page_direct_message_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./messages/pages/direct-message-page/direct-message-page.component */ 6676);










const routes = [
    { path: '', component: _main_main_component__WEBPACK_IMPORTED_MODULE_1__.MainComponent },
    {
        path: 'login',
        component: _auth_pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_0__.LoginPageComponent,
        canActivate: [_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
        data: {
            requireAuth: false,
        },
    },
    {
        path: 'register',
        component: _auth_pages_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_2__.RegisterPageComponent,
        canActivate: [_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
        data: {
            requireAuth: false,
        },
    },
    {
        path: 'recover',
        pathMatch: 'full',
        component: _user_pages_recover_page_recover_page_component__WEBPACK_IMPORTED_MODULE_8__.RecoverPageComponent,
        canActivate: [_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
        data: {
            requireAuth: false,
        },
    },
    {
        path: 'recover/:code',
        pathMatch: 'full',
        component: _user_pages_recover_change_password_page_recover_change_password_page_component__WEBPACK_IMPORTED_MODULE_5__.RecoverChangePasswordPageComponent,
        canActivate: [_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
        data: {
            requireAuth: false,
        },
    },
    {
        path: 'settings',
        component: _user_pages_settings_page_settings_page_component__WEBPACK_IMPORTED_MODULE_4__.SettingsPageComponent,
        canActivate: [_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
    },
    {
        path: 'rooms',
        component: _room_pages_rooms_page_rooms_page_component__WEBPACK_IMPORTED_MODULE_6__.RoomsPageComponent,
        canActivate: [_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
    },
    {
        path: 'room/:id',
        component: _room_pages_room_page_room_page_component__WEBPACK_IMPORTED_MODULE_7__.RoomPageComponent,
        canActivate: [_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
    },
    {
        path: 'direct-message/:username',
        component: _messages_pages_direct_message_page_direct_message_page_component__WEBPACK_IMPORTED_MODULE_9__.DirectMessagePageComponent,
        canActivate: [_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
    },
    { path: '**', redirectTo: '/' },
];


/***/ }),

/***/ 6600:
/*!************************************************************************************************************!*\
  !*** ./src/app/features/user/pages/recover-change-password-page/recover-change-password-page.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecoverChangePasswordPageComponent": () => (/* binding */ RecoverChangePasswordPageComponent)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 8259);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 9773);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5257);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _service_recover_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/recover.service */ 4446);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 3738);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 8295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 3166);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4885);












function RecoverChangePasswordPageComponent_mat_spinner_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-spinner", 11);
} }
class RecoverChangePasswordPageComponent {
    constructor(formBuilder, recoverService, activatedRoute, router) {
        this.formBuilder = formBuilder;
        this.recoverService = recoverService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.changePasswordForm = this.formBuilder.group({
            password: '',
            confirmPassword: '',
        });
        this.loading = true;
    }
    ngOnInit() {
        this.paramsSubscription = this.activatedRoute.params
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(({ code }) => {
            this.code = code;
            return this.recoverService.validateCode(this.code).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1));
        }))
            .subscribe(() => (this.loading = false), () => this.router.navigate(['/']));
    }
    ngOnDestroy() {
        this.paramsSubscription.unsubscribe();
    }
    submit() {
        if (this.loading) {
            return;
        }
        this.loading = true;
        const clear = () => {
            this.loading = false;
            this.changePasswordForm.patchValue({
                password: '',
                confirmPassword: '',
            });
        };
        this.recoverService
            .changePassword(this.code, this.changePasswordForm.value)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1))
            .subscribe(() => {
            this.loading = false;
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                title: 'Good job!',
                text: 'Your password was sucessfully updated!',
                icon: 'success',
            });
            this.router.navigate(['/login']);
        }, clear);
    }
}
RecoverChangePasswordPageComponent.ɵfac = function RecoverChangePasswordPageComponent_Factory(t) { return new (t || RecoverChangePasswordPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_recover_service__WEBPACK_IMPORTED_MODULE_1__.RecoverService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router)); };
RecoverChangePasswordPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RecoverChangePasswordPageComponent, selectors: [["ng-component"]], decls: 21, vars: 2, consts: [["class", "position-absolute", "diameter", "30", 4, "ngIf"], [1, "container"], ["mat-card-title", ""], ["mat-card-subtitle", ""], [3, "formGroup", "ngSubmit"], [1, "full-width"], ["type", "password", "formControlName", "password", "placeholder", "Type in your new password", "matInput", ""], ["type", "password", "formControlName", "confirmPassword", "placeholder", "Confirm your new password", "matInput", ""], ["align", "end"], ["routerLink", "/", "mat-button", "", "mat-raised-button", ""], ["mat-button", "", "mat-raised-button", "", "color", "primary"], ["diameter", "30", 1, "position-absolute"]], template: function RecoverChangePasswordPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, RecoverChangePasswordPageComponent_mat_spinner_0_Template, 1, 0, "mat-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Change your password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Change your password by completing the form");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function RecoverChangePasswordPageComponent_Template_form_ngSubmit_7_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-card-actions", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " Change password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.changePasswordForm);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardSubtitle, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardActions, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatAnchor, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__.MatSpinner], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNvdmVyLWNoYW5nZS1wYXNzd29yZC1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 9860:
/*!****************************************************************************!*\
  !*** ./src/app/features/user/pages/recover-page/recover-page.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecoverPageComponent": () => (/* binding */ RecoverPageComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8307);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5257);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 8259);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _service_recover_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/recover.service */ 4446);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ 3738);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 8295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 3166);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4885);












function RecoverPageComponent_mat_spinner_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-spinner", 10);
} }
class RecoverPageComponent {
    constructor(formBuilder, recoverService) {
        this.formBuilder = formBuilder;
        this.recoverService = recoverService;
        this.recoverForm = this.formBuilder.group({
            email: '',
        });
        this.loading = false;
    }
    submit() {
        if (this.loading) {
            return;
        }
        this.loading = true;
        const clear = () => {
            this.loading = false;
            this.recoverForm.patchValue({ email: '' });
        };
        this.recoverService
            .recoverPassword(this.recoverForm.value.email)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(clear, clear), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1))
            .subscribe(() => sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            title: 'Good job!',
            text: 'Check your email and change your password!',
            icon: 'success',
        }));
    }
}
RecoverPageComponent.ɵfac = function RecoverPageComponent_Factory(t) { return new (t || RecoverPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_recover_service__WEBPACK_IMPORTED_MODULE_1__.RecoverService)); };
RecoverPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RecoverPageComponent, selectors: [["ng-component"]], decls: 17, vars: 2, consts: [["class", "position-absolute", "diameter", "30", 4, "ngIf"], [1, "container"], ["mat-card-title", ""], ["mat-card-subtitle", ""], [3, "formGroup", "ngSubmit"], [1, "full-width"], ["type", "email", "formControlName", "email", "placeholder", "Type in your email", "matInput", ""], ["align", "end"], ["routerLink", "/", "mat-button", "", "mat-raised-button", ""], ["mat-button", "", "mat-raised-button", "", "color", "primary"], ["diameter", "30", 1, "position-absolute"]], template: function RecoverPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, RecoverPageComponent_mat_spinner_0_Template, 1, 0, "mat-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Forgot my password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Recover your password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function RecoverPageComponent_Template_form_ngSubmit_7_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-card-actions", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Recover");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.recoverForm);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardSubtitle, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardActions, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLinkWithHref, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatAnchor, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__.MatSpinner], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNvdmVyLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 2857:
/*!******************************************************************************!*\
  !*** ./src/app/features/user/pages/settings-page/settings-page.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPageComponent": () => (/* binding */ SettingsPageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 5257);
/* harmony import */ var src_app_shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/components/confirm-dialog/confirm-dialog.component */ 9077);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 8259);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_app_features_user_service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/features/user/service/user.service */ 8521);
/* harmony import */ var src_app_features_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/features/auth/service/auth.service */ 2477);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 2238);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ 3738);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 8295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 3166);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4885);
















function SettingsPageComponent_mat_spinner_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "mat-spinner", 15);
} }
function SettingsPageComponent_mat_form_field_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-form-field", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Current Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
class SettingsPageComponent {
    constructor(formBuilder, userService, authService, dialog) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.authService = authService;
        this.dialog = dialog;
        this.settingsForm = this.formBuilder.group({
            username: '',
            email: '',
            currentPassword: null,
            password: null,
            confirmPassword: null,
        });
        this.loading = false;
    }
    get user() {
        return this.authService.user;
    }
    ngOnInit() {
        const { username, email } = this.authService.user;
        this.settingsForm.patchValue({
            username,
            email,
        });
    }
    updateUsername() {
        const { username } = this.settingsForm.value;
        if (this.loading || this.user.username === username) {
            return;
        }
        this.loading = true;
        this.userService
            .updateUsername(username)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1))
            .subscribe(() => {
            this.authService.user$.next(Object.assign(Object.assign({}, this.authService.user), { username }));
            this.loading = false;
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                title: 'Good job!',
                text: 'Your username was sucessfully updated!',
                icon: 'success',
            });
        }, () => (this.loading = false));
    }
    updateEmail() {
        const { email } = this.settingsForm.value;
        if (this.loading || this.user.email === email) {
            return;
        }
        this.loading = true;
        this.userService
            .updateEmail(email)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1))
            .subscribe(() => {
            this.authService.user$.next(Object.assign(Object.assign({}, this.authService.user), { email }));
            this.loading = false;
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                title: 'Good job!',
                text: 'Your email was sucessfully updated!',
                icon: 'success',
            });
        }, () => (this.loading = false));
    }
    updatePassword() {
        if (this.loading) {
            return;
        }
        this.loading = true;
        const clear = () => {
            this.loading = false;
            this.settingsForm.patchValue({
                currentPassword: null,
                password: null,
                confirmPassword: null,
            });
        };
        const data = this.settingsForm.value;
        this.userService
            .updatePassword(data)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1))
            .subscribe(() => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            clear();
            yield sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                title: 'Good job!',
                text: 'Your password was sucessfully updated!',
                icon: 'success',
            });
            this.openLogoutDialog();
        }), clear);
    }
    openLogoutDialog() {
        const dialog = this.dialog.open(src_app_shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_0__.ConfirmDialogComponent, {
            data: {
                title: 'Global logout',
                description: 'Do you want to logout from all of your devices?',
            },
        });
        dialog
            .afterClosed()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1))
            .subscribe(confirm => {
            if (confirm) {
                this.logoutFromAllDevices();
            }
        });
    }
    logoutFromAllDevices() {
        this.authService
            .logoutFromAllDevices()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1))
            .subscribe(() => sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
            title: 'Good job!',
            text: 'All of your devices were successfully logged out!',
            icon: 'success',
        }));
    }
}
SettingsPageComponent.ɵfac = function SettingsPageComponent_Factory(t) { return new (t || SettingsPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_features_user_service_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_features_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog)); };
SettingsPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: SettingsPageComponent, selectors: [["ng-component"]], decls: 44, vars: 5, consts: [["class", "position-absolute", "diameter", "30", 4, "ngIf"], [1, "container"], ["mat-card-title", ""], ["mat-card-subtitle", ""], [3, "formGroup", "ngSubmit"], [1, "full-width", "mb-1"], ["type", "text", "formControlName", "username", "placeholder", "Type in your username", "matInput", ""], ["align", "end"], ["mat-button", "", "mat-raised-button", "", "color", "primary"], ["type", "email", "formControlName", "email", "placeholder", "Type in your email", "matInput", ""], ["class", "full-width", 4, "ngIf"], [1, "full-width"], ["type", "password", "formControlName", "password", "placeholder", "Type in your new password", "matInput", ""], ["type", "password", "formControlName", "confirmPassword", "placeholder", "Confirm your new password", "matInput", ""], ["routerLink", "/", "mat-button", "", "mat-raised-button", ""], ["diameter", "30", 1, "position-absolute"], ["type", "password", "formControlName", "currentPassword", "placeholder", "Type in your current password", "matInput", ""]], template: function SettingsPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, SettingsPageComponent_mat_spinner_0_Template, 1, 0, "mat-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Update your account");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function SettingsPageComponent_Template_form_ngSubmit_7_listener() { return ctx.updateUsername(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "mat-card-actions", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, " Update username ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function SettingsPageComponent_Template_form_ngSubmit_17_listener() { return ctx.updateEmail(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "mat-card-actions", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, " Update email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function SettingsPageComponent_Template_form_ngSubmit_27_listener() { return ctx.updatePassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, SettingsPageComponent_mat_form_field_30_Template, 4, 0, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "New Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](34, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](38, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "mat-card-actions", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, " Update password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.settingsForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.settingsForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.settingsForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.user.isSocial);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardSubtitle, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLabel, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterLinkWithHref, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatAnchor, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__.MatSpinner], styles: ["h3[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-bottom: 0.2rem;\n}\n\n.mb-1[_ngcontent-%COMP%] {\n  margin-bottom: 1rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmdzLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSw4QkFBQTtBQUNGIiwiZmlsZSI6InNldHRpbmdzLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMyB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBtYXJnaW4tYm90dG9tOiAwLjJyZW07XHJcbn1cclxuXHJcbi5tYi0xIHtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 4446:
/*!**********************************************************!*\
  !*** ./src/app/features/user/service/recover.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecoverService": () => (/* binding */ RecoverService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 1841);



const { api } = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment;
class RecoverService {
    constructor(http) {
        this.http = http;
    }
    recoverPassword(email) {
        return this.http.post(`${api}/recover`, { email });
    }
    validateCode(code) {
        return this.http.get(`${api}/recover/${code}`);
    }
    changePassword(code, body) {
        return this.http.post(`${api}/recover/${code}`, body);
    }
}
RecoverService.ɵfac = function RecoverService_Factory(t) { return new (t || RecoverService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
RecoverService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RecoverService, factory: RecoverService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5511:
/*!***************************************************************!*\
  !*** ./src/app/features/user/service/subscription.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubscriptionService": () => (/* binding */ SubscriptionService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 5917);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 9773);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 2340);
/* harmony import */ var _core_interceptor_error_dialog_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/interceptor/error-dialog.interceptor */ 7025);
/* harmony import */ var _auth_interceptor_auth_token_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth/interceptor/auth-token.interceptor */ 5244);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _notification_service_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../notification/service/notification.service */ 2830);








const { api } = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment;
class SubscriptionService {
    constructor(http, notificationService) {
        this.http = http;
        this.notificationService = notificationService;
    }
    requestSubscription() {
        return this.notificationService
            .requestSubscription()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.mergeMap)(subscription => this.registerSubscription(subscription)));
    }
    registerSubscription(subscription) {
        return this.http.post(`${api}/subscription/web`, {
            subscription,
        });
    }
    delete() {
        const subscription = this.notificationService.getSubscription();
        if (!subscription) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)();
        }
        return this.http.delete(`${api}/subscription/web`, {
            body: {
                subscription,
            },
            headers: {
                [_auth_interceptor_auth_token_interceptor__WEBPACK_IMPORTED_MODULE_2__.AuthTokenInterceptor.skipHeader]: 'true',
                [_core_interceptor_error_dialog_interceptor__WEBPACK_IMPORTED_MODULE_1__.ErrorDialogInterceptor.skipHeader]: 'true',
            },
        });
    }
}
SubscriptionService.ɵfac = function SubscriptionService_Factory(t) { return new (t || SubscriptionService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_notification_service_notification_service__WEBPACK_IMPORTED_MODULE_3__.NotificationService)); };
SubscriptionService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: SubscriptionService, factory: SubscriptionService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8521:
/*!*******************************************************!*\
  !*** ./src/app/features/user/service/user.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 1841);



const { api } = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment;
class UserService {
    constructor(http) {
        this.http = http;
    }
    getUser(username) {
        return this.http.get(`${api}/user/${username}`);
    }
    updateUsername(username) {
        return this.http.put(`${api}/settings/username`, { username });
    }
    updateEmail(email) {
        return this.http.put(`${api}/settings/email`, { email });
    }
    updatePassword(data) {
        return this.http.put(`${api}/settings/password`, data);
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
UserService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4852:
/*!**********************************************!*\
  !*** ./src/app/features/user/user.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserModule": () => (/* binding */ UserModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _pages_settings_page_settings_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/settings-page/settings-page.component */ 2857);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/shared.module */ 4466);
/* harmony import */ var _pages_recover_page_recover_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/recover-page/recover-page.component */ 9860);
/* harmony import */ var _pages_recover_change_password_page_recover_change_password_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/recover-change-password-page/recover-change-password-page.component */ 6600);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);






class UserModule {
}
UserModule.ɵfac = function UserModule_Factory(t) { return new (t || UserModule)(); };
UserModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: UserModule });
UserModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](UserModule, { declarations: [_pages_settings_page_settings_page_component__WEBPACK_IMPORTED_MODULE_0__.SettingsPageComponent,
        _pages_recover_page_recover_page_component__WEBPACK_IMPORTED_MODULE_2__.RecoverPageComponent,
        _pages_recover_change_password_page_recover_change_password_page_component__WEBPACK_IMPORTED_MODULE_3__.RecoverChangePasswordPageComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule], exports: [_pages_settings_page_settings_page_component__WEBPACK_IMPORTED_MODULE_0__.SettingsPageComponent,
        _pages_recover_page_recover_page_component__WEBPACK_IMPORTED_MODULE_2__.RecoverPageComponent,
        _pages_recover_change_password_page_recover_change_password_page_component__WEBPACK_IMPORTED_MODULE_3__.RecoverChangePasswordPageComponent] }); })();


/***/ }),

/***/ 9077:
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/confirm-dialog/confirm-dialog.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmDialogComponent": () => (/* binding */ ConfirmDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 2238);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 1095);




class ConfirmDialogComponent {
    constructor(data, dialogRef) {
        this.dialogRef = dialogRef;
        this.title = (data === null || data === void 0 ? void 0 : data.title) || 'Are you sure?';
        this.description =
            (data === null || data === void 0 ? void 0 : data.description) || 'You are not going to be able to undo this action';
    }
    ngOnInit() { }
    accept() {
        this.dialogRef.close(true);
    }
    close() {
        this.dialogRef.close(false);
    }
}
ConfirmDialogComponent.ɵfac = function ConfirmDialogComponent_Factory(t) { return new (t || ConfirmDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef)); };
ConfirmDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfirmDialogComponent, selectors: [["app-confirm-dialog"]], decls: 9, vars: 2, consts: [["mat-dialog-title", ""], [1, "mat-typography"], ["align", "end"], ["mat-button", "", 3, "click"]], template: function ConfirmDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-dialog-actions", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmDialogComponent_Template_button_click_5_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmDialogComponent_Template_button_click_7_listener() { return ctx.accept(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Accept");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.description, "\n");
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maXJtLWRpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 1696:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/error-dialog/error-dialog.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorDialogComponent": () => (/* binding */ ErrorDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 2238);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 1095);





function ErrorDialogComponent_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.message[0]);
} }
function ErrorDialogComponent_ng_template_4_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const msg_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", msg_r4, " ");
} }
function ErrorDialogComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ErrorDialogComponent_ng_template_4_li_1_Template, 2, 1, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.message);
} }
class ErrorDialogComponent {
    constructor(data) {
        this.title = data.title || 'Error';
        this.message =
            data.message instanceof Array ? data.message : [data.message || ''];
    }
    ngOnInit() { }
}
ErrorDialogComponent.ɵfac = function ErrorDialogComponent_Factory(t) { return new (t || ErrorDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA)); };
ErrorDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorDialogComponent, selectors: [["ng-component"]], decls: 9, vars: 3, consts: [["mat-dialog-title", ""], [1, "mat-typography"], [4, "ngIf", "ngIfElse"], ["multiple", ""], ["align", "end"], ["mat-button", "", "mat-dialog-close", ""], [4, "ngFor", "ngForOf"]], template: function ErrorDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ErrorDialogComponent_p_3_Template, 2, 1, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ErrorDialogComponent_ng_template_4_Template, 2, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-dialog-actions", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message.length === 1)("ngIfElse", _r1);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvci1kaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 793:
/*!****************************************************!*\
  !*** ./src/app/shared/material/material.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialModule": () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 3738);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/grid-list */ 4929);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/input */ 3166);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ 5835);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 2238);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/divider */ 1769);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/list */ 7746);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 6627);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4885);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 8295);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/slide-toggle */ 5396);
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/clipboard */ 4785);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/toolbar */ 2522);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ 7817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

// Angular modules
















class MaterialModule {
}
MaterialModule.ɵfac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(); };
MaterialModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule], _angular_material_input__WEBPACK_IMPORTED_MODULE_2__.MatInputModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__.BrowserAnimationsModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__.MatGridListModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__.MatDividerModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_9__.MatListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__.MatProgressSpinnerModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormFieldModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__.MatSlideToggleModule,
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_14__.ClipboardModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__.MatToolbarModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_16__.MatRippleModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule], exports: [_angular_material_input__WEBPACK_IMPORTED_MODULE_2__.MatInputModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__.BrowserAnimationsModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__.MatGridListModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__.MatDividerModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_9__.MatListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__.MatProgressSpinnerModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormFieldModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__.MatSlideToggleModule,
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_14__.ClipboardModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__.MatToolbarModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_16__.MatRippleModule] }); })();


/***/ }),

/***/ 5328:
/*!**************************************************!*\
  !*** ./src/app/shared/services/sound.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Sound": () => (/* binding */ Sound),
/* harmony export */   "SoundService": () => (/* binding */ SoundService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

var Sound;
(function (Sound) {
    Sound["Message"] = "message-tone";
})(Sound || (Sound = {}));
class SoundService {
    constructor() { }
    playSound(sound) {
        const path = `assets/tones/${sound}.mp3`;
        if (sound) {
            const audio = new Audio(path);
            audio.muted = false;
            audio.play();
        }
    }
}
SoundService.ɵfac = function SoundService_Factory(t) { return new (t || SoundService)(); };
SoundService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SoundService, factory: SoundService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/confirm-dialog/confirm-dialog.component */ 9077);
/* harmony import */ var _components_error_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/error-dialog/error-dialog.component */ 1696);
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./material/material.module */ 793);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);








class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _material_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule,
        ], _material_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_0__.ConfirmDialogComponent, _components_error_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_1__.ErrorDialogComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _material_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule], exports: [_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_0__.ConfirmDialogComponent,
        _components_error_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_1__.ErrorDialogComponent,
        _material_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule] }); })();


/***/ }),

/***/ 7236:
/*!*********************************************!*\
  !*** ./src/app/shared/utils/upsert-item.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateItem": () => (/* binding */ updateItem)
/* harmony export */ });
const updateItem = (arr, predicate, object) => {
    const item = arr.find(predicate);
    if (!item) {
        return;
    }
    Object.assign(item, object);
};


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
    production: false,
    api: 'https://riksmote.herokuapp.com',
    socket: 'https://riksmote.herokuapp.com',
    apps: {
        facebook: '676046816978387',
        google: '847417968911-lim6ak6h6g0p49g2ml6odu3j7a3eeb1h.apps.googleusercontent.com',
        apple: {
            clientId: '!nest-auth.ubbly.club',
            redirectUri: '!https://nest-auth.ubbly.club/',
        },
    },
};
// export const environment = {
//   production: false,
//   api: 'http://localhost:3000',
//   socket: 'http://localhost:3000',
//   apps: {
//     facebook: '513024756601831',
//     google:
//       '331672215174-0hlpm8fhjphiou05ovsd82vglor401ct.apps.googleusercontent.com',
//     apple: {
//       clientId: 'nest-auth.ubbly.club',
//       redirectUri: 'https://nest-auth.ubbly.club/',
//     },
//   },
// };


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map