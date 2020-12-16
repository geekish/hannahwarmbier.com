<template>
  <div id="app" class="">
    <div class="fixed top-0 right-0 m-6">
      <ToggleTheme />
    </div>
    <div class="p-8 md:p-12">
      <header class="">
        <img class="rounded-full w-32 h-32 ring-4 ring-gray-400 dark:ring-gray-700" src="./assets/profile.png" alt="Ancient photo of Hannah Warmbier" title="Das me!">
        <div class="mt-6">
          <h1 class="text-3xl leading-tight font-medium text-gray-700 dark:text-gray-300">Hannah Warmbier</h1>
          <p class="text-2xl leading-tight text-gray-500 dark:text-gray-600">
            Also known as <a class="text-gray-600 dark:text-gray-500 dark:hover:text-violet-300 hl-amber-100 hover:hl-amber-200 dark:bg-none dark:hover:bg-none" href="https://github.com/geekish">@geekish</a>
          </p>
        </div>
      </header>
      <p class="my-4 text-xl leading-relaxed text-gray-600 dark:text-gray-500">
        <strong class="text-gray-700 dark:text-gray-400">Currently</strong><br>
        engaged 💍 <br>
        full time parent 👩‍👧<br>
        freelance web developer 👩‍💻<br>
        blogging at <a class="text-gray-700 dark:text-gray-300 dark:hover:text-violet-300 hl-teal-100 hover:hl-teal-200 dark:bg-none dark:hover:bg-none" href="">geekish.dev</a> 🖋
      </p>
      <nav class="flex items-start space-x-2 text-gray-500">
        <a href="https://instagram.com/hannahwarmbier">
          <svg xmlns="http://www.w3.org/2000/svg" class="text-gray-500 dark:text-gray-700 hover:text-pink-600 dark:hover:text-pink-600 h-7 w-7" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <rect x="4" y="4" width="16" height="16" rx="4" />
            <circle cx="12" cy="12" r="3" />
            <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
          </svg>
        </a>
        <a href="https://pinterest.com/hannahwarmbier">
          <svg xmlns="http://www.w3.org/2000/svg" class="text-gray-500 dark:text-gray-700 hover:text-red-600 dark:hover:text-red-600 h-7 w-7" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <line x1="8" y1="20" x2="12" y2="11" />
            <path d="M10.7 14c.437 1.263 1.43 2 2.55 2c2.071 0 3.75 -1.554 3.75 -4a5 5 0 1 0 -9.7 1.7" />
            <circle cx="12" cy="12" r="9" />
          </svg>
        </a>
        <a href="https://reddit.com/u/geekishly">
          <svg xmlns="http://www.w3.org/2000/svg" class="text-gray-500 dark:text-gray-700 hover:text-orange-600 dark:hover:text-orange-600 h-7 w-7" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M12 8c2.648 0 5.028 .826 6.675 2.14a2.5 2.5 0 0 1 2.326 4.36c0 3.59 -4.03 6.5 -9 6.5c-4.875 0 -8.845 -2.8 -9 -6.294l-1 -.206a2.5 2.5 0 0 1 2.326 -4.36c1.646 -1.313 4.026 -2.14 6.674 -2.14z" />
            <path d="M12 8l1 -5l6 1" />
            <circle cx="19" cy="4" r="1" />
            <circle cx="9" cy="13" r=".5" fill="currentColor" />
            <circle cx="15" cy="13" r=".5" fill="currentColor" />
            <path d="M10 17c.667 .333 1.333 .5 2 .5s1.333 -.167 2 -.5" />
          </svg>
        </a>
        <a href="https://twitter.com/hannahwarmbier">
          <svg xmlns="http://www.w3.org/2000/svg" class="text-gray-500 dark:text-gray-700 hover:text-lightBlue-500 dark:hover:text-lightBlue-500 h-7 w-7" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
          </svg>
        </a>
      </nav>
    </div>
  </div>
</template>

<script>
import twemoji from 'twemoji'
import ToggleTheme from '@/components/ToggleTheme'

export default {
  name: 'App',
  components: { ToggleTheme },
  mounted () {
    twemoji.parse(this.$el)
  }
}
</script>
