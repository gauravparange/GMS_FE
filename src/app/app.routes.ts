import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/login/login')
        .then(m => m.Login)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'admin',
    loadComponent: () =>
      import('./layout/admin-layout/main-layout/main-layout')
        .then(m => m.MainLayout),

    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {

        path: 'dashboard',
        data: { title: 'Dashboard' },
        loadComponent: () =>
          import('./features/admin/dashboard/dashboard')
            .then(m => m.Dashboard)
      },
      {
        path: 'members',
        data: { title: 'Members' },
        loadComponent: () =>
          import('./features/admin/members/member-list/member-list')
            .then(m => m.MemberList)
      },
      {
        path: 'members/add',
        data: { title: 'Add Member' },
        loadComponent: () =>
          import('./features/admin/members/member-form/member-form')
            .then(m => m.MemberForm)
      },
      {
        path: 'members/edit/:id',
        data: { title: 'Edit Member' },
        loadComponent: () =>
          import('./features/admin/members/member-form/member-form')
            .then(m => m.MemberForm)
      }
    ]
  }

];