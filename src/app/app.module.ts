import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollageComponent } from './collage/collage.component';
import { HighlightComponent } from './highlight/highlight.component';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { HighlighterNumberDirective } from './highlight/highlighter-number.directive';

@NgModule({
  declarations: [
    AppComponent,
    CollageComponent,
    HighlightComponent,
    HighlighterNumberDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
