<template>
  <aside class="sidebar">
    <nav class="menu">
      <menu-list :items="sidebar.menus" active-class/>
    </nav>
    <footer class="footer">
      <a class="toggle icon-before icon-circle-left" title="Toggle navigation menu" @click="toggleCollapse"></a>
      <router-link class="copyright" :to="{ name: 'about' }" :title="'About' + sidebar.copyright">&copy; {{ sidebar.copyright }}</router-link>
    </footer>
  </aside>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import MenuList from './menu'

export default {
  name: 'app-sidebar',
  components: { MenuList },
  computed: {
    sidebar () {
      return this.$store.state.sidebar
    }
  },
  methods: mapActions({
    toggleCollapse: 'toggleSidebarCollapse'
  })
}
</script>
