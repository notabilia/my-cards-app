import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MockComponent } from 'ng2-mock-component';
import { OccasionsPage } from './occasions.page';

describe('OccasionsPage', () => {
  let component: OccasionsPage;
  let fixture: ComponentFixture<OccasionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        OccasionsPage,
        MockComponent({selector: 'app-coming-soon'})
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OccasionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display coming soon component', () => {
    const comingSoonComponent = fixture.debugElement.query(By.css('app-coming-soon'));
    expect(comingSoonComponent).toBeTruthy();
  });
});
