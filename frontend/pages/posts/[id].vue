<template>
    <div class="p-6 max-w-3xl mx-auto">
      <NuxtLink to="/posts" class="text-blue-500 underline mb-4 inline-block">← Back to Posts</NuxtLink>
      <div v-if="post" class="bg-white p-6 rounded shadow">
        <h2 class="text-2xl font-bold text-indigo-600 mb-2">{{ post.title }}</h2>
        <p class="text-gray-800">{{ post.body }}</p>
      </div>
      <div v-else>
        <p class="text-center text-gray-600">Loading...</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        post: null,
      }
    },
  
    async mounted() {
      const route = useRoute()
      const id = route.params.id
  
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        this.post = await res.json()
      } catch (e) {
        console.error('Failed to fetch post:', e)
      }
    },
  }
  </script>
  