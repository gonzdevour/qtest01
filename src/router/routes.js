
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/todo.vue') },
      { path: '/help', component: () => import('src/pages/help.vue') },
      { path: '/phaser', component: () => import('src/pages/phaser.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
