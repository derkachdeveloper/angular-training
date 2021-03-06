import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { CoursesService, AuthService } from '../contracts';

import { DurationPipe } from './duration-pipe';
import { OrderByPipe } from './order-by-pipe';
import { TruncateTextPipe } from './truncate-text-pipe';
import { RemoteAuthService } from './auth-service';
import { RemoteCoursesService } from './remote-courses-service';
import { TokenInterceptor } from './token-interceptor';
import { OverlayService, OverlayInterceptor } from './overlay';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    DurationPipe,
    OrderByPipe,
    TruncateTextPipe
  ],
  providers: [
    {
      provide: CoursesService,
      useClass: RemoteCoursesService
    },
    {
      provide: 'remoteHost', useValue: 'http://localhost:3004'
    },
    DurationPipe,
    OrderByPipe,
    TruncateTextPipe,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: OverlayInterceptor,
      multi: true
    },
  ],
  exports: [
    DurationPipe,
    OrderByPipe,
    TruncateTextPipe
  ]
})
export class ServicesModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ServicesModule,
      providers: [
        {
          provide: AuthService, useClass: RemoteAuthService,
        },
        OverlayService
      ]
    };
  }
}
