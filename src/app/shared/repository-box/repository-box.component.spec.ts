import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositoryBoxComponent } from './repository-box.component';

describe('RepositoryBoxComponent', () => {
  let component: RepositoryBoxComponent;
  let fixture: ComponentFixture<RepositoryBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepositoryBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositoryBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
