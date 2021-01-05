const desc = '每天至少一个问题，有关前端，后端，graphql，devops，微服务以及软技能，促进个人职业成长，敲开大厂之门。'
const subBar = require('./menu')

module.exports = {
  base: '/',
  title: '大前端宝典',
  description: desc,
  head: [
    ['link', { rel: 'shortcut icon', href: '/favicon.ico', type: 'image/x-icon' }]
  ],
  themeConfig: {
    sidebar: {...subBar},
    nav: [
      { text: 'house', link: '/house/' },
      { text: '大前端', link: '/front/' },
      { text: '后端', link: '/backend/'}
    ],
    lastUpdated: 'Last Updated',
  }
}