<template>
  <div>
    <NuxtLayout>
      <Introduce></Introduce>
      <iframe id="mainPage" name="mainPage" src="https://jp.infragistics.com/"></iframe>
    </NuxtLayout>
  </div>
</template>

<script>
import IframeComponent from '@/components/IframeComponent.vue';
import Introduce from '@/components/Introduce.vue';

export default {
  components: {
    IframeComponent,
    Introduce,
  },
};
</script>

<style>
  #mainPage {
    display: block;
    width: 100%;
    max-width: 1170px;
    margin: 0 auto;
    position: relative;
    height: 100vh;
  }
</style>
