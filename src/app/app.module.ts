import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NoteContainerComponent } from './note-container/note-container.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from './shared/date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NoteContainerComponent,
    DatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
