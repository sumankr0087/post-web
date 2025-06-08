<template>
    <div class="bg-white p-4 rounded-lg shadow hover:shadow-md transition cursor-pointer">
      <NuxtLink :to="`/posts/${post.id}`">
        <h2 class="text-xl font-bold text-indigo-600">{{ post.title }}</h2>
        <p class="text-gray-700 mt-2">{{ post.body.slice(0, 100) }}...</p>
      </NuxtLink>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      post: {
        type: Object,
        required: true,
      },
    },
  }
  </script>
  