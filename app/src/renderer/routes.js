export default [
  {
    path: '/',
    name: 'login-page',
    component: require('components/LoginPageView')
  },
  {
    path: '*',
    redirect: '/'
  }
]
