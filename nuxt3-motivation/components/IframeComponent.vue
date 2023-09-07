<template>
    <div>
        <p>
            <select v-model="selectedUrl" @change="updateIframeContent(selectedUrl)">
                <option value="https://jp.infragistics.com/">日本</option>
                <option value="https://www.infragistics.com/">English</option>
                <!-- 他のオプションを追加 -->
            </select>
        </p>
        <iframe ref="myIframe" v-bind:src="selectedUrl"></iframe>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedUrl: 'https://jp.infragistics.com/', // デフォルトのURLを設定
      };
    },
    methods: {
      updateIframeContent(url) {
        // iframeのsrc属性を変更してコンテンツを更新
        this.$refs.myIframe.src = url;
      },
    },
  };
  </script>
  