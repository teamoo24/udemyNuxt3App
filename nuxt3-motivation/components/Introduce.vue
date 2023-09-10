<template>
    <div id="introduce">
        各ボタンをクリックすると内容が表示されます。(클릭시 내용이 표시 됩니다)
        <div class="accordion-main">
            <div class="accordion-item" v-for="(item, index) in accordionItems" :key="index">
                <div class="accordion-header" @click="toggleAccordion(index)">
                {{ item.title }}
                <span :class="{'accordion-icon': true, 'open': item.open}">
                    <i class="fas fa-chevron-down"></i>
                </span>
                </div>
                <div class="accordion-content" v-show="item.open">
                {{ item.content }}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      accordionItems: [
        { title: '志望動機（日本語）', content: 'まず、一番目理由はは私は韓国人であり、ネイティブレベルで韓国語を話すことができ、韓国語対応のウェブサイトやコンテンツの提供や市場の拡大と顧客基盤の強化をしたいと思ったためです。二番目はNuxtなどのフレームワークを駆使して、会社のウェブサイトを保守し、改善した経験を元にサイトパフォーマンスの最適化などの成果を上げました。 また、ウェブ開発のトレンドに対する関心と学習意欲を持っており、最新技術を導入して会社のwebアプリのパフォーマンスを強化したいと思ったからです。これらの特技を通じて、会社のビジョンを実現し、競争力を高めるお手伝いをできる自信があります。上記の技術を使い、貴社に役に立つと思い現在のページを作りました。簡単なプロジェクトではありますが、会社に入社し活躍できる証明となると助かります。', 
        open: false },
        { title: '지망동기（한국어）', content: '먼저 첫 번째 이유는 저는 한국인이어서 원어민 수준에서 한국어를 말할 수 있고, 한국어 지원 웹사이트 및 콘텐츠 제공과 시장 확대와 고객 기반 강화를 하고 싶었기 때문입니다. 두 번째는 Nuxt 등의 프레임워크를 구사하여 회사 웹사이트를 보수하고 개선한 경험을 바탕으로 사이트 퍼포먼스 최적화 등의 성과를 올렸습니다. 또한 웹 개발 트렌드에 대한 관심과 학습 의욕을 가지고 있으며 최신 기술을 도입하여 회사 웹 사이트의 성능을 강화하고자 했기 때문입니다. 이러한 기술력을 통하여 회사의 비전을 실현하고 경쟁력을 높이는 데 도움을 줄수 있다고 생각하였습니다. 위의 기술을 사용하여 귀사에 도움이 될 것이라 생각하여 현재 페이지를 만들었습니다. 간단한 프로젝트이긴 하지만, 회사에 입사해서 활약할 수 있다는것이 증명이 되었다면 감사하겠습니다.', open: false },
        { title: 'ページ説明（日本語）', content: 'ナビゲーションバーのselectによってサイトの言語を変えられる簡単なページです。既存のwebページとは違い、selectの操作でサイトの言語をページ移動なしで変えることが出来ます。ページが読み込まれる過程が省略されているように感じることで、お客様からwebアプリを使うときに離脱率を減らせると思い、作りました。サイトの言語対応はiframeを移動させる感じで実装してみました。', open: false },
        { title: '페이지 설명（한국어）', content: '네비게이션 바의 select에 따라 사이트 언어를 바꿀 수 있는 간단한 페이지입니다. 기존 웹페이지와는 달리 select 조작으로 사이트 언어를 페이지 이동 없이 바꿀 수 있습니다. 페이지가 불러오는 과정이 생략된 것처럼 느껴짐으로써 고객이 웹 사이트를 사용할 때 이탈률을 줄일 수 있을 것 같아 만들었습니다. 사이트 언어 지원은 iframe을 이동하는 식으로 구현하여 보았습니다.', open: false },
        // 他のセクションを追加
      ],
    };
  },
  methods: {
    toggleAccordion(index) {
      this.accordionItems[index].open = !this.accordionItems[index].open;
    },
  },
};
</script>

<style>
    #introduce {
        display: block;
        width: 100%;
        max-width: 1170px;
        margin: 0 auto;
        position: relative;
    }

    h2 {
        font-size: 24px;
        margin-bottom: 10px;
    }
    
    p {
        font-size: 16px;
        line-height: 1.5;
    }

    .section {
        margin-bottom: 20px;
    }

    .highlight {
        font-weight: bold;
    }
    .accordion {
        font-family: Arial, sans-serif;
    }

    .accordion-item {
        border: 1px solid #ddd;
        margin-bottom: 10px;
        background-color: #f9f9f9;
    }

    .accordion-header {
        padding: 10px;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .accordion-icon {
        transition: transform 0.3s;
    }

    .accordion-icon.open {
        transform: rotate(180deg);
    }

    .accordion-content {
        padding: 10px;
    }
</style>