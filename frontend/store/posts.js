import { defineStore } from 'pinia'

export const usePostsStore = defineStore('posts', {
  state: () => ({
    posts: [],
    cacheTimestamp: null,
  }),

  actions: {
    async fetchPosts() {
      const now = new Date().getTime()
      if (this.cacheTimestamp && (now - this.cacheTimestamp < 15 * 60 * 1000)) return

      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json()
        this.posts = data
        this.cacheTimestamp = now
      } catch (error) {
        console.error('Error fetching posts:', error)
      }
    }
  }
})
