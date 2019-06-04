import HomePage from './pages/Home';
import AboutPage from './pages/About';

const routerConfig = [
  {
    path: '/about',
    component: AboutPage,
  },
  {
    path: '/',
    component: HomePage,
  },
];

export default routerConfig;
