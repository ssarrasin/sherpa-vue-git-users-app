import Details from './pages/Details/index.vue';
import Home from './pages/Home/index.vue';

export default [{
  path: '/:page?',
  name: 'Home',
  component: Home,
  props: true
}, {
  path: '/user/:login',
  name: 'Details',
  component: Details
}];