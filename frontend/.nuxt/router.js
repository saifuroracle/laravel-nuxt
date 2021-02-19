import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _668cdfea = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _68edeae6 = () => interopDefault(import('..\\pages\\pages.vue' /* webpackChunkName: "pages/pages" */))
const _671aee1e = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _0311ecf4 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/login",
    component: _668cdfea,
    name: "login"
  }, {
    path: "/pages",
    component: _68edeae6,
    name: "pages"
  }, {
    path: "/register",
    component: _671aee1e,
    name: "register"
  }, {
    path: "/",
    component: _0311ecf4,
    name: "index"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
