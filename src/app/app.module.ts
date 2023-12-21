import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptModule, registerElement } from '@nativescript/angular'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ItemsComponent } from './item/items.component'
import { ItemDetailComponent } from './item/item-detail.component'

import { LineChart } from '@nativescript-community/ui-chart/charts';

import { install } from '@nativescript-community/ui-chart';
install();


registerElement('LineChart', () => LineChart);


@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, AppRoutingModule],
  declarations: [AppComponent, ItemsComponent, ItemDetailComponent],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
