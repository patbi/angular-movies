import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareModalComponent } from './share-modal.component';
import { MAT_DIALOG_DATA, MatFormFieldModule, MatDialogRef, MatInputModule, MatSnackBarModule, MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../../shared.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import {Observable} from 'rxjs/Observable';

const translations: any = {'foo': 'bar'};

class FakeLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    return Observable.of(translations);
  }
}

describe('ShareModalComponent', () => {
  let component: ShareModalComponent;
  let fixture: ComponentFixture<ShareModalComponent>;

  const matDialogRef = jasmine.createSpyObj('MatDialogRef', ['afterClose']);
  const matDialogData = jasmine.createSpyObj('MAT_DIALOG_DATA', ['']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatSnackBarModule,
        TranslateModule.forRoot({
          loader: {provide: TranslateLoader, useClass: FakeLoader},
        })
      ],
      declarations: [ ShareModalComponent ],
      providers: [
        { provide: MatDialogRef, useValue: matDialogRef },
        { provide: MAT_DIALOG_DATA, useValue: matDialogData }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
