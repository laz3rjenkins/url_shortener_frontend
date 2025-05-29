<template>
  <main class="min-h-screen justify-between flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-4">
    <div class="w-full max-w-md bg-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20">
      <h1 class="text-3xl font-semibold mb-4 text-center text-white">🔗 Shorten Your URL</h1>
      <UrlForm @url-shortened="handleShortened" />
      <ShortenedLink v-if="shortUrl" :url="shortUrl" />
    </div>

    <Footer />
  </main>
</template>

<script setup>
import { ref } from 'vue'
import UrlForm from './components/UrlForm.vue'
import ShortenedLink from './components/ShortenedLink.vue'
import Footer from "./components/Footer.vue";

const shortUrl = ref('')

function handleShortened(url) {
  shortUrl.value = url
}
</script>
