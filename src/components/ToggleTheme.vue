<template>
  <button class="text-gray-500 hover:text-violet-600 dark:text-gray-100 dark:hover:text-yellow-200 focus:outline-none" @click="toggleTheme">
    <svg v-if="theme === 'dark'" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" width="44" height="44" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <circle cx="12" cy="12" r="4" />
      <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
    </svg>
    <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
      <path d="M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2" />
      <path d="M19 11h2m-1 -1v2" />
    </svg>
  </button>
</template>

<script>
export default {
  name: "ToggleTheme",
  data () {
    return {
      theme: 'light',
    }
  },
  methods: {
    initTheme() {
      if (window.__theme) {
        this.theme = window.__theme
      }
    },
    toggleTheme () {
      if (this.theme === 'light')
        this.darkMode()
      else if (this.theme === 'dark')
        this.lightMode()
    },
    darkMode () {
      window.__setPreferredTheme('dark')
      this.theme = 'dark'
    },
    lightMode () {
      window.__setPreferredTheme('light')
      this.theme = 'light'
    },
  },
  mounted () {
    this.initTheme()
  }
}
</script>
