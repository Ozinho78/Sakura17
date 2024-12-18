import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { ImprintComponent } from './imprint/imprint.component';

export const routes: Routes = [
  { path: '', component: MainContentComponent },        // MaintContent muss nicht unter app-component geladen werden
  { path: 'imprint', component: ImprintComponent },
];
