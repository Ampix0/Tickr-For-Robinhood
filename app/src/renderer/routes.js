export default [
  {
    path: '/',
    name: 'login-page',
    component: require('components/LoginPageView')
  },
    {
        path: '/dashboard/:authKey',
        name: 'home-page',
        component: require('components/HomePageView')
    },
  {
    path: '*',
    redirect: '/'
  }
]
