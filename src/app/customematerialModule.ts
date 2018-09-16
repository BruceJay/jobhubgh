import { NgModule } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatStepperModule} from '@angular/material/stepper';
import {

  MatButtonModule,MatCardModule,MatFormFieldModule,MatInputModule,MatSelectModule,
  MatDatepickerModule,MatNativeDateModule,MatIconModule,MatToolbarModule,MatMenuModule,
  MatTabsModule
}
 from '@angular/material';

@NgModule({

imports: [
  FlexLayoutModule,MatButtonModule, MatDatepickerModule,
  MatCardModule,MatFormFieldModule,MatInputModule,MatSelectModule,
  MatNativeDateModule,MatIconModule,MatStepperModule,MatToolbarModule,MatMenuModule,MatTabsModule
],

exports: [
  FlexLayoutModule,MatButtonModule,MatCardModule, MatDatepickerModule,
  MatFormFieldModule,MatInputModule,MatSelectModule,
  MatNativeDateModule,MatIconModule,MatStepperModule,MatToolbarModule,MatMenuModule,MatTabsModule
]
})
export class CustomeMaterialModule{

}
