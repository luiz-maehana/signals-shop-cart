import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ListComponent } from './components/list/list.component';
import { SelectedProductComponent } from './components/selected-product/selected-product.component';
import { ShopCartComponent } from './components/shop-cart/shop-cart.component';
import { HomeComponent } from './components/home/home.component';
import { EmptyMessageComponent } from './empty-message/empty-message.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    SelectedProductComponent,
    ShopCartComponent,
    HomeComponent,
    EmptyMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
