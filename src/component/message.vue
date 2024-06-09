<script setup lang="ts">
  import { InkTimer } from 'ink-lake';

  defineProps<{ msg: string }>();
</script>

<template>
  <div class="message">
    <span>{{ msg }}</span>
    <span class="i-ep:aim?mask text-yellow-300" />
    <InkTimer autostart :time="30" />
  </div>
</template>

<style scoped lang="scss">
  .message {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 100vh;
    margin: 0 20px;

    color: hsl(198deg 28% 59%);
    font-size: 48px;
  }
</style>
