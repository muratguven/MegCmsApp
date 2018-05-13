import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { HeadingComponent } from './heading/heading.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CoreComponent,
    HeadingComponent
]
})
export class CoreModule { }
