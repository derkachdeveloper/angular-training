import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PageComponent } from './page';
import { PageHeaderComponent } from './page-header';
import { PageFooterComponent } from './page-footer';
import { LogoComponent } from './logo';
import { PageBreadcrumbComponent } from './page-breadcrumb';
import { CourseListItemComponent } from './course-list-item';
import { FreshCourseSelectionDirective } from './fresh-course-selection-directive';
import { NoDataForEmptyDirective } from './no-data-for-empty-directive';
import { ServicesModule } from '../services';
import { SpinnerComponent } from './spinner';
import { OverlayLayoutComponent } from './overlay-layout';
import { DateControlComponent } from './date-control';
import { RemoteAuthorsComponent } from './remote-authors';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    ServicesModule.forRoot()
  ],
  declarations: [
    FreshCourseSelectionDirective,
    PageComponent,
    PageHeaderComponent,
    PageFooterComponent,
    LogoComponent,
    PageBreadcrumbComponent,
    CourseListItemComponent,
    FreshCourseSelectionDirective,
    NoDataForEmptyDirective,
    NoDataForEmptyDirective,
    SpinnerComponent,
    OverlayLayoutComponent,
    DateControlComponent,
    RemoteAuthorsComponent
  ],
  providers: [
    DatePipe
  ],
  exports: [
    SpinnerComponent,
    PageComponent,
    PageBreadcrumbComponent,
    CourseListItemComponent,
    FreshCourseSelectionDirective,
    NoDataForEmptyDirective,
    OverlayLayoutComponent,
    DateControlComponent,
    RemoteAuthorsComponent
  ]
})
export class ComponentsModule { }
