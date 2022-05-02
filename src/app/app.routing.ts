
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './modules/home/home.module';


export const appRoutes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch: 'full'
  },
  {
    path:'',
    children:[
      {
        path:'home',
        loadChildren: ()=>import('./modules/home/home.module').then(m=>m.HomeModule)
      },
      {
        path:'note/:title',
        loadChildren:()=>import('./modules/note/note.module').then(m=>m.NoteModule)
      }
    ]
  }
];
