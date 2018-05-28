import Home from 'components/Home/home';
import NotFound from 'components/NotFound/notFound';
import Dashboard from 'components/Dashboard/dashboard';

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/dashboard',
    component: Dashboard
  },
  {
    path: '*',
    component: NotFound
  }
];

export default routes;
