<template>
  <div class="mt-6 bg-white/20 p-4 rounded-xl text-white flex justify-between items-center">
    <span class="truncate">{{ url }}</span>
    <button @click="copy" class="ml-4 px-3 py-1 bg-white text-black rounded-lg hover:bg-gray-100">Copy</button>
  </div>
</template>

<script setup>
const props = defineProps({
  url: String
})

function copy() {
  navigator.clipboard.writeText(props.url)
  alert('Copied to clipboard!')
}
</script>
