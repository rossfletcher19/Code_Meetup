import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MeetupListComponent } from './meetup-list/meetup-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NewMeetupComponent } from './new-meetup/new-meetup.component';
import { AuthComponent } from './auth/auth.component';
import { LessonsListComponent} from './lessons-list/lessons-list.component';

const appRoutes: Routes = [
  {
  path: '',
  component: HomeComponent
  },
  {
  path: 'user-profile',
  component: UserProfileComponent
  },
  {
    path: 'meetup-list',
    component: MeetupListComponent
  },
  {
    path: 'new-meetup',
    component: NewMeetupComponent
  },
  {
    path: 'auth',
    component: AuthComponent
  },
  {
    path: 'lessons-list',
    component: LessonsListComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
