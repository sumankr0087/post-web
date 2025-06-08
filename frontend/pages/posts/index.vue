<template>
    <div class="p-6 max-w-6xl mx-auto">
      <h1 class="text-3xl font-bold mb-4 text-center">All Posts</h1>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <PostCard v-for="post in posts" :key="post.id" :post="post" />
      </div>
    </div>
  </template>
  
  <script>
  import { usePostsStore } from '../../store/posts'
  import PostCard from '~/components/PostCard.vue'
  
  export default {
    components: { PostCard },
  
    data() {
      return {
        posts: [],
      }
    },
  
    async mounted() {
      const store = usePostsStore()
      await store.fetchPosts()
      this.posts = store.posts
    },
  }
  </script>
  