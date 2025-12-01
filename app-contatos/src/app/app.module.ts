import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

// --- IMPORTAÇÕES NOVAS (MODULAR) ---
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideDatabase, getDatabase } from '@angular/fire/database';

const firebaseConfig = {
  apiKey: "AIzaSyA0qDGem92yNNLfCEcJqUzRavtsW8M1HNo",
  authDomain: "projeto-contatos-6a891.firebaseapp.com",
  databaseURL: "https://projeto-contatos-6a891-default-rtdb.firebaseio.com",
  projectId: "projeto-contatos-6a891",
  storageBucket: "projeto-contatos-6a891.firebasestorage.app",
  messagingSenderId: "55614799854",
  appId: "1:55614799854:web:c896d526acb0a6f06f18ff"
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    // --- INICIALIZAÇÃO NOVA ---
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideDatabase(() => getDatabase())
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}