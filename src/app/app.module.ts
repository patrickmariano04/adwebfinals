import { NgModule } from '@angular/core';
import { BrowserModule, platformBrowser } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { BadgeComponent } from './badge/badge.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatBadgeModule } from '@angular/material/badge';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
  MatNativeDateModule,
  MAT_DATE_FORMATS,
  DateAdapter,
  MAT_NATIVE_DATE_FORMATS,
} from '@angular/material/core';
import { NativeDateAdapter } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { ChipsComponent } from './chips/chips.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SpinnerComponent } from './spinner/spinner.component';
import {MatRadioModule} from '@angular/material/radio';
import { CardComponent } from './card/card.component';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';



@NgModule({
  declarations: [
    AppComponent,
    DatepickerComponent,
    BadgeComponent,
    ChipsComponent,
    SpinnerComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    MatDatepickerModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatTabsModule,
    MatBadgeModule,
    MatDividerModule, 
    MatChipsModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatCardModule,
    MatProgressBarModule,
    
    
  ],
  providers: [
    { provide: DateAdapter, useClass: NativeDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: MAT_NATIVE_DATE_FORMATS },
  ],
  bootstrap: [AppComponent, DatepickerComponent, BadgeComponent, ChipsComponent, SpinnerComponent, CardComponent],
})
export class AppModule {}
