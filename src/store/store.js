import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    session: {},
    header: {
      /**
       * 站点名称
       * @type {String}
       */
      name: 'WEDN.NET',

      /**
       * 顶部菜单
       * @type {Array}
       */
      menus: [
        {
          text: '0',
          icon: 'bubble',
          name: 'comments'
        },
        {
          text: 'Settings',
          icon: 'equalizer',
          name: 'options',
          params: { type: 'general' },
          children: [
            { text: 'General', name: 'options', params: { type: 'general' } },
            { divider: true },
            { text: 'Write', name: 'options', params: { type: 'writing' } },
            { text: 'Read', name: 'options', params: { type: 'reading' } },
            { text: 'Discuss', name: 'options', params: { type: 'discussion' } },
            { text: 'Media', name: 'options', params: { type: 'media' } },
            { text: 'Permalink', name: 'options', params: { type: 'permalink' } }
          ]
        }
      ]
    },
    sidebar: {
      /**
       * 版权所属
       * @type {String}
       */
      copyright: 'WEDN.NET',

      /**
       * 是否收起边栏
       * @type {Boolean}
       */
      // collapse: storage.get('wedn_net_sidebar_collapse'),

      /**
       * 侧边菜单
       * @type {Array}
       */
      menus: [
        {
          title: 'Actions'
        },
        {
          text: 'Comments',
          icon: 'bubbles',
          name: 'comments'
        },
        {
          divider: true
        },
        {
          text: 'Settings',
          icon: 'equalizer',
          name: 'options',
          params: { type: 'general' },
          children: [
            { text: 'General', name: 'options', params: { type: 'general' } },
            { divider: true },
            { text: 'Write', name: 'options', params: { type: 'writing' } },
            { text: 'Read', name: 'options', params: { type: 'reading' } },
            { text: 'Discuss', name: 'options', params: { type: 'discussion' } },
            { text: 'Media', name: 'options', params: { type: 'media' } },
            { text: 'Permalink', name: 'options', params: { type: 'permalink' } }
          ]
        }
      ]
    }
  },
  mutations: {

  },
  actions: {
    createToken ({ commit }, { username, password }) {
      return TokenService.post({
        username: username.trim(),
        password: password.trim()
      })
        .then(res => {
          commit('CHANGE_SESSION', { token: res.data.token })
          return res.data.token
        })
    }
  }
})
