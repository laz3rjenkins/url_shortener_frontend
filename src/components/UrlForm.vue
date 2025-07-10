<template>
  <form @submit.prevent="shorten" class="flex flex-col gap-4">
    <input
        v-model="longUrl"
        type="url"
        placeholder="https://example.com"
        class="px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/30"
        required
    />
    <button
        type="submit"
        class="bg-white text-black font-semibold py-2 rounded-xl hover:bg-gray-200 transition"
    >
      Shorten
    </button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import {shortenUrl} from "../services/api.js";

const longUrl = ref('')

const emit = defineEmits(['url-shortened'])

async function shorten() {
  try {
    const shortUrl = await shortenUrl(longUrl.value)
    emit('url-shortened', shortUrl.shorten_url)
  } catch (error) {
    console.error('Ошибка при сокращении URL:', error)
  }
}
</script>
