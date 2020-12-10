import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { HomeComponent } from './home/home.component';
import { RepositoryBoxComponent } from './shared/repository-box/repository-box.component';

@NgModule({
  declarations: [
    AppComponent,
    RepositoriesComponent,
    HomeComponent,
    RepositoryBoxComponent
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