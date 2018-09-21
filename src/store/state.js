import { axios, storage } from '../utils'

const state = {
  /**
   * 客户端会话信息
   * @type {Object}
   * TODO: storage - local or session
   */
  session: storage.get('wedn_net_session_info') || {},

  /**
   * 顶部工具栏
   * @type {Object}
   */
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
        text: 'New',
        icon: 'plus',
        name: 'new',
        params: { type: 'blog' },
        children: [
          { text: 'Post', name: 'new', params: { type: 'blog' } },
          { text: 'Media', name: 'upload' },
          { text: 'Page', name: 'new', params: { type: 'page' } },
          { text: 'User', name: 'users' }
        ]
      },
      // Component Pages
      {
        text: 'Components',
        icon: 'lab',
        name: 'components',
        children: [
          { text: 'Icons', name: 'components-icons' },
          { text: 'Button', name: 'components-button' },
          { text: 'Table', name: 'components-table' }
        ]
      },
      // Demo Pages
      {
        text: 'Demo',
        icon: 'magic-wand',
        name: 'demo',
        children: [
          { text: 'Data', name: 'demo-data' },
          { text: 'Params', name: 'demo-params', params: { name: '汪磊' } },
          { text: 'Vuex', name: 'demo-vuex' },
          { text: 'I18n', name: 'demo-i18n' },
          { divider: true },
          { text: 'Proxy', name: 'demo-proxy' },
          { text: 'CORS', name: 'demo-cors' },
          { divider: true },
          { text: 'NotFound', path: '/hello-world' }
        ]
      }
    ]
  },

  /**
   * 侧边导航栏
   * @type {Object}
   */
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
    collapse: storage.get('wedn_net_sidebar_collapse'),

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
  },

  // ==================== DEMO ====================

  /**
   * 计数器
   * @type {Number}
   */
  count: storage.get('wedn_net_demo_count') || 0
}

if (state.session && state.session.token) {
  // init axios headers
  axios.defaults.headers.Authorization = `Bearer ${state.session.token}`
}

export default state
