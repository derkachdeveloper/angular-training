import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserModule, By } from '@angular/platform-browser';
import { Component } from '@angular/core';

import { CourseListItemComponent } from './course-list-item.component';
import { MinPostfixPipe } from '../min-postfix-pipe/min-postfix.pipe';
import { TruncateTextPipe } from '../truncate-text/truncate-text.pipe';
import { ICourse } from '../../models/course';

@Component({
  selector: 'app-test-host',
  template: `
    <app-course-list-item
      [course]="stupidCourse"
      (delete)="onDeleteCourse($event)"
    >
    </app-course-list-item>
  `
})
class TestHostComponent {
  stupidCourse: ICourse = {
    id: 128,
    title: 'title value',
    creationDate: new Date(1992, 8, 12),
    durationMin: 20,
    description: 'some desc'
  };

  deletedCourse: ICourse;

  onDeleteCourse(toDelete: ICourse) {
    this.deletedCourse = toDelete;
  }
}

describe('CourseListItemComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserModule],
      declarations: [
        TestHostComponent,
        CourseListItemComponent,
        MinPostfixPipe,
        TruncateTextPipe
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  describe('rendering tests', () => {

    it('content rendered correctly', () => {
      // arrange
      const titleElem = fixture.debugElement.query(By.css('.title'));
      const durationElem = fixture.debugElement.query(By.css('.duration'));
      const createdElem = fixture.debugElement.query(By.css('.created'));
      const descElem = fixture.debugElement.query(By.css('.desc'));

      // assert
      expect(titleElem.nativeElement.innerText).toBe(component.stupidCourse.title);
      expect(durationElem.nativeElement.innerText).toBe(`${component.stupidCourse.durationMin}min`);
      expect(createdElem.nativeElement.innerText).toBe('12.09.1992');
      expect(descElem.nativeElement.innerText).toBe(component.stupidCourse.description);
    });

  });

  describe('event tests', () => {
    it('delete event works', () => {
      // arrange
      const deleteButton = fixture.debugElement.queryAll(By.css('.buttons button'))[1];

      // act
      deleteButton.triggerEventHandler('click', null);

      // assert
      expect(component.deletedCourse).toBe(component.stupidCourse);
    });
  });
});
