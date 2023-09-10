<template>
    <nav>
        <div class="globalnav__primary clearfix">
            <div class="globalnav__wrapper"><!-- My Account -->
                <div class="globalnav__brand">
                    <a @click="changeIframeSrc(selectedLink)" target="mainPage">
                        <img class="globalnav__logo" src="https://static.infragistics.com/marketing/Website/General/Infragistics-horizontal.svg" alt="Infragistics">
                        <img class="globalnav__logo_abbr" src="https://static.infragistics.com/marketing/Website/General/IG-icon.svg" alt="Infragistics">
                    </a>
                </div>
                <nav class="globalnav__menu-container">
                    <ul class="navigation navigation--navbar navigation--hpad-0 sf-menu sf-js-enabled sf-arrows">
                        <li class="menu-full-width">
                            <a class="navigation__sub-menu sf-with-ul" title="Design and Development" href="/products/ultimate">
                                <span class="hidden-md">{{ design }}</span>
                            </a>
                        </li>
                        <li>
                            <a class="navigation__sub-menu sf-with-ul" title="UX" href="/products/indigo-design">UX</a>
                        </li>
                        <li>
                            <a class="navigation__sub-menu sf-with-ul" title="Business Intelligence" href="https://www.revealbi.io">{{ biTool }}</a>
                        </li>
                        <select @change="updateLink" class="globalnav__national">
                            <option value="jp">日本</option>
                            <option value="kr">한국어</option>
                            <!-- 他のオプションを追加 -->
                        </select>
                    </ul>
                </nav>
            </div>
        </div>
    </nav>
</template>
  
<script>

export default {
  data() {
    return {
      selectedLink: 'https://jp.infragistics.com/', // 初期のリンク
      design : "開発",
      biTool: "BIツール"
    };
  },
  methods: {
    updateLink(event) {

      const iframe = document.getElementById('mainPage');
      
      if (event.target.value  === 'jp') {
        this.selectedLink = "https://jp.infragistics.com/";
        this.design = "開発";
        this.biTool = "BIツール";
      }

      if (event.target.value  === 'kr') {
        this.selectedLink = "https://www.infragistics.co.kr/";
        this.design = "디자인 / 개발";
        this.biTool = "비즈니스 인텔리전스";
      }

        iframe.src = this.selectedLink;
    },
    changeIframeSrc(newSrc) {
      const iframe = document.getElementById('mainPage');
      iframe.src = newSrc;
    },
  },
};
</script>

<style>
.globalnav__national {
  margin: 12px 14px 20px;
}
article, aside, details, figcaption, figure, footer, header, hgroup, nav, section {
  display: block;
}

audio, canvas, video {
  display: inline-block;
}

audio:not([controls]) {
  display: none;
}

[hidden] {
  display: none;
}

html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, font, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
}

html {
  font-size: 100%;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
}

body {
  line-height: 1;
}

ol, ul {
  list-style: none;
}

blockquote, q {
  quotes: none;
}

blockquote:before, blockquote:after, q:before, q:after {
  content: '';
  content: none;
}

:focus {
  outline: 0;
}

ins {
  text-decoration: none;
}

del {
  text-decoration: line-through;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

td {
  vertical-align: top;
}

img {
  max-width: 100%;
}

img {
  border: 0;
  -ms-interpolation-mode: bicubic;
  vertical-align: middle;
}

svg:not(:root) {
  overflow: hidden;
}

figure {
  margin: 0;
}

input:valid, textarea:valid {}

input:invalid, textarea:invalid {}

input[type="text"], input[type="submit"], textarea {
  -webkit-appearance: none;
  -webkit-border-radius: 0px;
}

.chromeframe {
  margin: 0.2em 0;
  background: #ccc;
  color: black;
  padding: 0.2em 0;
}

::selection {
  background: #28245e;
  color: #fff;
}

::-moz-selection {
  background: #28245e;
  color: #fff;
}

img::selection {
  background: transparent;
}

img::-moz-selection {
  background: transparent;
}

html {
  padding-right: 0px !important;
  overflow-y: scroll;
}

#logo {
  margin: 30px 0 30px;
  float: left;
}

#logo a, #logo a img {
  display: block;
}

#header {
  position: relative;
  z-index: 10;
}

#header-inner-wrap.stuck {
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 100;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.44);
  -moz-box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.44);
  -webkit-box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.44);
}

#header-inner-wrap.stuck #logo, #header-inner-wrap.top-animate #logo {
  margin: 20px 0 20px;
  -webkit-transition: margin 0.5s ease;
  -moz-transition: margin 0.5s ease;
  -ms-transition: margin 0.5s ease;
  -o-transition: margin 0.5s ease;
  transition: margin 0.5s ease;
}

#header-inner-wrap.stuck #logo img, #header-inner-wrap.top-animate #logo img {
  -webkit-transition: max-height 0.5s ease;
  -moz-transition: max-height 0.5s ease;
  -ms-transition: max-height 0.5s ease;
  -o-transition: max-height 0.5s ease;
  transition: max-height 0.5s ease;
}

.header-controls {
  float: right;
}

#header-inner-wrap.top-animate #navigation, #header-inner-wrap.top-animate .header-controls, #header-inner-wrap.top-animate .social-media-icons-mid-header, #header-inner-wrap.stuck #navigation, #header-inner-wrap.stuck .header-controls, #header-inner-wrap.stuck .social-media-icons-mid-header {
  line-height: 70px;
  -webkit-transition: line-height 0.5s ease;
  -moz-transition: line-height 0.5s ease;
  -ms-transition: line-height 0.5s ease;
  -o-transition: line-height 0.5s ease;
  transition: line-height 0.5s ease;
}

.search-box-wrapper {
  position: absolute;
  top: 100%;
  right: 0px;
  width: 240px;
  display: none;
  z-index: 1;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.23);
  -moz-box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.23);
  -webkit-box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.23);
  line-height: normal;
  padding: 25px;
  background: #fff;
}

.header-search-controls {
  position: relative;
  float: right;
}

.header-search-controls .search-button {
  margin-left: 0px;
  cursor: pointer;
  color: inherit;
  display: inline-block;
  zoom: 1;
  font-size: 16px;
  line-height: normal;
}

.search-box-wrapper .searchform .search-icon {
  position: absolute;
  top: 0px;
  right: 20px;
  padding: 0px 5px;
  line-height: 97px;
  color: #555 !important;
}

.search-box-wrapper .searchform .s {
  width: 100%;
  box-shadow: none;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  margin-bottom: 0;
}

.header-cart-controls, .menu-controls, .header-search-controls {
  margin-left: 15px;
}

.header-cart-controls:before {
  font-family: 'be-themes';
  font-style: normal;
  font-weight: normal;
  speak: none;
  display: inline-block;
  text-decoration: inherit;
  width: 1em;
  margin-right: 0.2em;
  text-align: center;
  font-variant: normal;
  text-transform: none;
  line-height: 1em;
  margin-left: 0.2em;
  -webkit-font-smoothing: antialiased !important;
}

.header-cart-controls .cart-contents {
  width: 18px;
  height: 18px;
  line-height: 18px;
  display: inline-block;
  border-radius: 50%;
  text-align: center;
  position: absolute;
  top: 50%;
  margin-top: -26px;
  right: -1px;
  font-size: 10px;
  padding: 0 !important;
}

.header-cart-controls .cart-contents span {
  font-weight: bold;
}

.header-cart-controls:before {
  content: '\e940';
  color: #7e7e7e;
}

#header a.icon-shortcode {
  display: inline-block;
}

#header a.icon-shortcode .font-icon {
  margin-bottom: 0px;
  line-height: 27px;
}

body.header-transparent #header #header-inner-wrap.no-transparent, body.sticky-header #header #header-inner-wrap.no-transparent {
  position: fixed;
  top: -300px;
  width: 100%;
  left: 0px;
}

body.header-transparent #header #header-inner-wrap.no-transparent.top-animate, body.sticky-header #header #header-inner-wrap.no-transparent.top-animate {
  top: 0px;
  -webkit-transition: top .50s ease;
  -moz-transition: top .50s ease;
  -o-transition: top .50s ease;
  -ms-transition: top .50s ease;
  -webkit-backface-visibility: hidden;
}

body.header-transparent.admin-bar #header #header-inner-wrap.no-transparent.top-animate, body.sticky-header.admin-bar #header #header-inner-wrap.no-transparent.top-animate {
  top: 32px;
  -webkit-transition: top .50s ease;
  -moz-transition: top .50s ease;
  -o-transition: top .50s ease;
  -ms-transition: top .50s ease;
  -webkit-backface-visibility: hidden;
}

body.header-transparent #header #header-inner-wrap {
  position: absolute;
  top: 0px;
  width: 100%;
  background: transparent;
  box-shadow: none;
}

body.header-transparent #logo img {
  display: none;
}

body.header-transparent #header-inner-wrap.no-transparent.top-animate #logo img.normal-logo, body.header-transparent #header-inner-wrap #logo img.transparent-logo {
  display: block;
}

body.header-transparent #header-inner-wrap.no-transparent.top-animate #logo img.transparent-logo {
  display: none;
}

#header-inner-wrap.transparent {
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
  filter: alpha(opacity=100);
  -moz-opacity: 1;
  -khtml-opacity: 1;
  opacity: 1;
}

#header-inner-wrap.background--dark.transparent #navigation, #header-inner-wrap.background--dark.transparent .header-search-controls .search-button, #header-inner-wrap.background--dark.transparent .header-cart-controls:before, #header-inner-wrap.background--dark.transparent .menu-controls i.font-icon {
  color: #f5f5f5;
  transition: color 0.5s linear;
}

#header-inner-wrap.background--light.transparent #navigation, #header-inner-wrap.background--light.transparent .header-search-controls .search-button, #header-inner-wrap.background--light.transparent .header-cart-controls:before, #header-inner-wrap.background--light.transparent .menu-controls i.font-icon {
  color: #333;
  transition: color 0.5s linear;
}

body.header-transparent #header-inner-wrap.background--dark.transparent #logo img.light-scheme-logo {
  display: block !important;
}

body.header-transparent #header-inner-wrap.background--dark.transparent #logo img.dark-scheme-logo {
  display: none !important;
}

#navigation {
  float: right;
}

#navigation a {
  color: inherit;
  padding: 0px 20px;
  letter-spacing: 2px;
  text-transform: uppercase;
}

#navigation ul li {
  float: left;
  display: inline-block;
  position: relative;
  margin-bottom: 0;
}

#navigation .sub-menu {
  position: absolute;
  width: 200px;
  display: none;
  z-index: 12;
  top: 100%;
  line-height: 32px;
}

#navigation .sub-menu .sub-menu {
  left: 100%;
  top: 0px;
  margin-left: 0;
}

#navigation ul .sub-menu li {
  display: block;
  float: none;
}

#navigation ul .sub-menu li a {
  display: block;
  padding: 5px 20px;
}

.menu-controls i.font-icon {
  font-size: 20px;
  color: #7e7e7e;
  cursor: pointer;
  display: inline-block;
  zoom: 1;
  padding: 0px;
  line-height: normal;
}

.menu-controls i.font-icon:before {
  position: relative;
  top: 2px;
}

#navigation .menu>ul>li.mega {
  position: inherit !important;
}

#navigation .menu>ul>li.mega>ul.sub-menu {
  width: 100%;
  left: 0px;
  padding: 20px 0px;
}

#navigation .menu>ul>li.mega>ul.sub-menu a {
  padding: 5px 20px 5px 20px;
  -webkit-font-smoothing: antialiased !important;
}

#navigation .menu>ul>li.mega>ul>li {
  display: table-cell !important;
  float: none;
  padding: 0px;
  border-right: 1px solid #303030;
  width: 300px;
}

#navigation .menu>ul>li.mega>ul>li:last-child {
  border-right: none;
}

#navigation .menu>ul>li.mega.columns-3>ul>li {
  width: 386px;
}

#navigation .menu>ul>li.mega.columns-4>ul>li {
  width: 290px;
}

#navigation .menu>ul>li.mega.columns-5>ul>li {
  width: 232px;
}

#navigation .menu>ul>li.mega.columns-2>ul>li {
  width: 580px;
}

#navigation .menu>ul>li.mega>ul>li ul {
  display: block !important;
  width: 100%;
  left: 0px !important;
  opacity: 1 !important;
  position: relative !important;
  background: none;
  margin-top: -1px;
}

#navigation .menu>ul>li:last-child a {
  padding-right: 0px;
}

#navigation .sub-menu a {
  letter-spacing: 1px;
}

#navigation .mega.highlight .sub-menu .sf-with-ul {
  font-size: 13px;
  color: #fff;
  padding-bottom: 10px !important;
}

body.header-transparent #navigation .sub-menu {
  top: 80%;
}

body.header-transparent #navigation .sub-menu .sub-menu {
  top: 0px;
}

.sb-slidebar {
  position: fixed;
  width: 280px;
  z-index: 11;
  background: #000;
  height: 100%;
  overflow: auto;
}

.sb-slidebar .sb-right {
  right: -280px;
}

html.csstransforms .sb-slidebar {
  -webkit-transform: translatex(280px);
  -moz-transform: translatex(280px);
  -ms-transform: translatex(280px);
  -o-transform: translatex(280px);
  transform: translatex(280px);
  -webkit-transition: -webkit-transform 400ms ease;
  -moz-transition: -moz-transform 400ms ease;
  -o-transition: -o-transform 400ms ease;
  transition: transform 400ms ease;
}

html.csstransforms .sb-slidebar.sb-right {
  right: 0px;
}

html.csstransforms .sb-slidebar.sb-left {
  -webkit-transform: none;
}

html.csstransforms .sb-slidebar.opened {
  -webkit-transform: translatex(0px);
  -moz-transform: translatex(0px);
  -ms-transform: translatex(0px);
  -o-transform: translatex(0px);
  transform: translatex(0px);
}

html.csstransforms .sb-slidebar.sb-right.opened {
  -webkit-transform: none;
}

html.csstransforms body.slider-bar-opened #main {
  -webkit-transform: translatex(-280px);
  -moz-transform: translatex(-280px);
  -ms-transform: translatex(-280px);
  -o-transform: translatex(-280px);
  transform: translatex(-280px);
}

html.csstransforms #main {
  -webkit-transition: -webkit-transform 400ms ease;
  -moz-transition: -moz-transform 400ms ease;
  -o-transition: -o-transform 400ms ease;
  transition: transform 400ms ease;
}

html.no-csstransforms .sb-slidebar {
  -webkit-transition: right 400ms ease;
  -moz-transition: right 400ms ease;
  -o-transition: right 400ms ease;
  transition: right 400ms ease;
}

html.no-csstransforms .sb-slidebar.opened {
  right: 0px;
}

.left-header .sliderbar-menu-controller .icon-menu {
  display: none;
}

.left-header #main-wrapper {
  margin-left: 280px;
}

.sb-slidebar-content {
  padding: 30px 0px;
}

#slidebar-menu a {
  color: inherit;
  padding: 10px 20px;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.sb-slidebar .menu ul {
  list-style: none;
  margin-bottom: 0px;
  display: block;
  padding: 0px;
  margin-top: 0px;
}

.sb-slidebar .menu ul li {
  margin-bottom: 0px;
}

.sb-slidebar .menu ul li {
  display: block;
  position: relative;
}

#slidebar-menu {
  z-index: 100;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 11px;
  line-height: 50px;
}

.sb-slidebar-content .menu {
  margin-bottom: 50px;
}

#slidebar-menu .sub-menu {
  display: none;
}

#slidebar-menu a {
  padding: 0px 0px 0px 20px;
  border-bottom: 1px solid #303030;
  display: block;
}

#slidebar-menu .sub-menu a {
  padding-left: 35px;
}

#slidebar-menu .sub-menu .sub-menu a {
  padding-left: 50px;
}

.sb-slidebar .widget {
  padding-left: 20px;
  margin-bottom: 40px;
}

#navigation .mobile-sub-menu-controller {
  display: none;
}

#slidebar-menu .mobile-sub-menu-controller {
  display: block;
  position: absolute;
  right: 0px;
  width: 50px;
  top: 0px;
  cursor: pointer;
  font-size: 12px;
  text-align: center;
}

#mobile-menu, #mobile-menu ul {
  list-style: none;
  margin-bottom: 0px;
  display: none;
  padding: 0px;
  margin-top: 0px;
}

#mobile-menu li {
  margin-bottom: 0px;
  line-height: 40px;
  position: relative;
}

#mobile-menu a {
  color: inherit;
  padding: 5px 0px 5px 20px;
  display: block;
  position: relative;
  border-bottom: 1px solid #303030;
}

#mobile-menu .mobile-sub-menu-controller {
  display: inline-block;
  position: absolute;
  right: 0px;
  top: 0px;
  line-height: 51px;
  padding: 0px 15px;
  cursor: pointer;
}

.mobile-nav-controller-wrap {
  display: none;
  float: right;
}

.mobile-nav-controller-wrap .menu-controls {
  margin-left: 0px;
  margin-right: 0px;
}

#footer-wrap {
  padding: 25px 0;
}

#copyright {
  margin-bottom: 0;
  text-align: center;
}

.post-title {
  margin-bottom: 0;
}

.post-title a {
  color: inherit !important;
}

.post-nav {
  padding: 10px 0 20px;
  font-size: 12px;
}

.post-nav ul li {
  margin-bottom: 0;
}

.post-meta {
  float: left;
}

.post-nav .post-meta-sep {
  margin: 0 7px;
}

.pagination_parent {
  margin-bottom: 60px;
}

.pagination a, .pagination span, .pages_list a {
  width: 35px;
  height: 35px;
  line-height: 35px;
  text-align: center;
  margin: 0 16px 0px 0px;
  background: #efefef;
  display: inline-block;
  font-size: 12px;
  border: 1px solid #dedede;
  border-radius: 3px;
  color: #555;
}

.pagination.pagination-ig-default a, .pagination.pagination-ig-default span {
  margin: 0 0 10px;
}

.pagination.pagination-ig-default a:visited {
  color: #555;
}

.pagination.pagination-ig-default a.active {
  background: #0099ff;
  color: #fff;
  border: 1px solid #0099ff;
}

.pagination.pagination-ig-default a:hover, .pagination.pagination-ig-default a.prev:hover, .pagination.pagination-ig-default a.next:hover {
  background: #0099ff;
}

.pages_list a {
  width: auto;
  padding: 0px 10px;
}

embed {
  max-width: 100%;
}

.single-post #content {
  padding-bottom: 50px;
}

.single-post .project_navigation {
  margin-top: 50px;
}

.post-excerpt {
  margin-bottom: 35px;
}

.post-thumb {
  margin-bottom: 35px;
}

.post-thumb img {
  width: 100% !important;
  height: auto !important;
}

.post-thumb.style-2 {
  float: left;
  width: 300px;
  margin-right: 20px;
}

.no-thumb .post-header {
  margin-bottom: 15px;
}

.format-quote .post-content-wrap, .format-link .post-content-wrap {
  padding: 30px;
  background: #efefef;
  border-radius: 10px;
  text-align: center;
  margin-bottom: 35px;
}

.format-quote .post-meta, .format-link .post-meta {
  float: none;
  display: inline;
}

.blog-separator .separator {
  margin-top: 30px;
  margin-bottom: 65px;
}

hr {
  margin-bottom: 60px;
}

.post-tags {
  margin-bottom: 40px;
}

.style2-blog .post-thumb {
  width: 40%;
  margin-right: 5%;
  float: left;
}

.style2-blog .article-details {
  width: 55%;
  float: left;
}

.style2-blog .format-audio .article-details, .style2-blog .format-quote .article-details, .style2-blog .format-link .article-details, .style2-blog .format-audio .post-thumb {
  width: 100%;
}

.style3-blog .blog-separator .separator {
  margin-top: 60px;
  margin-bottom: 65px;
}

.blog-post.element {
  margin-bottom: 65px;
}

.style3-blog .format-quote .post-content-wrap, .style3-blog .format-link .post-content-wrap {
  margin-bottom: 0;
}

.style3-blog .post-title {
  font-size: 13px;
  letter-spacing: 2px;
  line-height: 26px;
}

.form-submit {
  margin-bottom: 0;
}

.commentlist {
  list-style: none;
  padding: 0;
  margin-bottom: 60px;
}

.commentlist li.comment {
  padding: 0;
  margin-bottom: 0;
}

article.comment {
  padding: 27px 30px 30px;
  margin-bottom: 50px;
  background: #efefef;
  position: relative;
  border-radius: 5px;
}

.vcard, .comment-content {
  float: left;
}

.vcard {
  width: 9%;
}

.comment-author-inner {
  display: inline-block;
  text-align: center;
}

.comment-author-inner img {
  height: auto !important;
  border-radius: 50%;
}

.comment-content {
  width: 80%;
  padding-left: 4%;
}

.children {
  list-style: none;
}

#comments-title {
  margin-bottom: 40px;
}

.comment {
  margin-bottom: 30px;
}

.comment-meta {
  margin-bottom: 10px;
}

.comment_text p {
  margin-bottom: 0;
}

#reply-title {
  margin-bottom: 15px;
}

.comment-meta h6.fn {
  margin-bottom: 0;
}

.comment-meta time {
  font-size: 12px;
}

.comment-edit-reply {
  padding: 0;
  margin: 0;
  position: absolute;
  right: 10px;
  bottom: 2px;
}

.comment-edit-reply li {
  margin-bottom: 0;
}

.comment-edit-reply, .children {
  list-style: none !important;
}

.reply {
  display: block;
}

.reply, li.edit-link, span.edit-link {
  font-size: 11px;
  font-style: italic;
}

.comment a {
  text-decoration: none;
}

.children {
  padding-left: 10%;
  margin-bottom: 0;
}

.children .vcard {
  width: 9%;
}

.children .comment-content {
  width: 80%;
  padding-left: 4%;
}

h1, h2, h3, h4, h5, h6 {
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  -moz-osx-font-smoothing: grayscale;
}

h1 {
  margin-bottom: 15px;
  letter-spacing: 3px;
}

h2, h3, h4, h5 {
  margin-bottom: 20px;
}

h6 {
  margin-bottom: 10px;
}

p {
  margin-bottom: 30px;
}

#content, .post-title, .breadcrumbs, #page-title {
  -ms-word-wrap: break-word;
  word-wrap: break-word;
}

.header-breadcrumb {
  font-size: 10px;
  letter-spacing: 1px;
  text-transform: uppercase;
}

a, a:visited, a:hover {
  text-decoration: none;
}

.sidebar-widgets .widget ul li a {
  color: inherit;
}

ul, ol {
  padding-left: 15px;
  line-height: inherit;
  margin: 0px 0px 30px;
}

ul {
  list-style: disc;
}

ol {
  list-style: decimal;
}

ul li, ol li {
  margin-bottom: 15px;
}

ul ul, ol ol {
  margin-top: 15px;
}

dd {
  margin: 0 0 20px;
  line-height: inherit;
}

dt {
  line-height: inherit;
}

nav ul, nav ol {
  list-style: none !important;
  list-style-image: none;
  margin: 0;
  padding: 0;
}

.widget ul {
  margin-bottom: 0;
}

.widget ul li:last-child {
  margin-bottom: 0 !important;
  padding-bottom: 0;
  border: none;
}

code, pre {
  font-family: "Courier New", Courier, monospace;
}

cite {
  font-weight: bold;
}

address {
  display: block;
  line-height: 20px;
  margin: 0 0 20px;
}

pre {
  display: block;
  margin: 10px 0;
  padding: 10px;
  overflow: auto;
}

table {
  border-collapse: collapse;
  margin-bottom: 20px;
}

tr:nth-of-type(odd) {}

th, td {
  border: 1px solid #ddd;
  padding: 9px 20px;
}

th {
  text-transform: uppercase;
}

caption {
  font-size: 11px;
  font-style: italic;
}

sup, sub {
  height: 0;
  font-size: 10px;
  line-height: 1;
  position: relative;
  top: .5ex;
  vertical-align: baseline;
}

sup {
  bottom: 1ex;
}

.wp-caption {
  margin-bottom: 20px;
  max-width: 100% !important;
  padding-top: 6px;
  text-align: center;
}

.wp-caption img {
  width: auto!important;
  height: auto!important;
  max-width: 98%;
}

.wp-caption img, .wp-caption img a {
  border: 0 none;
  margin: 0 !important;
  padding: 0;
}

.wp-caption .wp-caption-text {
  font-size: 11px;
  font-style: italic;
  margin: 0;
  padding: 4px 4px 5px;
}

.gallery-item img {
  width: auto !important;
  height: auto !important;
  border: none !important;
  max-width: 100% !important;
}

.gallery-caption {
  display: block;
  font-style: italic;
  margin-bottom: 0 !important;
  padding: 0 4px 5px;
}

img[class*="align"], img[class*="wp-image-"] {
  height: auto;
}

input[type="text"], input[type="email"], input[type="password"] {
  padding: 0px;
  height: 45px;
  width: 48%;
  margin-bottom: 30px;
  background-color: #efefef;
  border: none;
  color: #555;
  font-size: 10px;
  border: 1px solid #dedede;
  text-indent: 10px;
  letter-spacing: 1px;
  text-transform: uppercase;
}

input[type="submit"], .action-button .be-button {
  border: none;
  cursor: pointer;
  display: inline-block;
  margin: 0px 20px 10px 0;
  text-decoration: none;
  border-radius: 3px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  font-size: 11px;
  line-height: 11px;
  padding: 20px;
  letter-spacing: 3px;
  text-transform: uppercase;
}

.more-link {
  display: block;
  letter-spacing: 4px;
  text-transform: uppercase;
  font-size: 11px;
  -webkit-font-smoothing: subpixel-antialiased;
}

.contact_form .column-block {
  margin-bottom: 25px;
}

.contact_form input[type="text"] {
  width: 48%;
  margin-bottom: 30px !important;
}

.contact_form textarea.txt_area {
  width: 98.3%;
  margin-bottom: 30px !important;
}

.contact_form {
  margin-bottom: 60px;
}

.contact_form_module.contact_form input[type="text"] {
  width: 99%;
}

.gmap {
  margin-bottom: 60px;
  height: 100%;
}

.gmap img {
  max-width: initial !important;
}

.page-template-contact-php #content {
  padding-bottom: 50px;
}

.submit-fieldset {
  position: relative;
}

.contact_loader {
  background: url("/assets/modern/css/img/loader.gif") no-repeat top left;
  display: inline-block;
  width: 25px;
  height: 25px;
  position: absolute;
  display: none;
  top: 15px;
  left: 0;
  margin-left: 100px;
  margin-top: -7px;
}

.widget {
  margin-bottom: 60px;
}

#bottom-widgets .widget {
  margin-bottom: 60px;
}

.sidebar-widgets .widget:last-child {
  margin-bottom: 0;
}

.widget h6 {
  margin-bottom: 15px;
}

#bottom-widgets {
  padding-top: 60px;
  padding-bottom: 60px;
}

#bottom-widgets .column-block {
  margin-bottom: 0;
}

#bottom-widgets-wrap .column-block .widget:last-child {
  margin-bottom: 0;
}

.search-submit {
  display: none !important;
}

.search-button {
  margin-left: -30px;
}

.widget .searchform {
  position: relative;
}

.widget .searchform .search-icon {
  position: absolute;
  top: 0px;
  right: 10px;
  line-height: 47px;
}

.s {
  height: 45px;
  border-radius: 3px;
  background: #fff;
  font-size: 11px;
  z-index: 1000000;
  margin-bottom: 0px;
}

.widget .s {
  width: 97% !important;
}

.not-found {
  padding-top: 100px;
  padding-bottom: 100px;
  text-align: center;
}

.not-found-search {
  width: 350px;
  margin: 0 auto;
}

#igChat .currentTime {
  margin-top: 25px;
}

#igChat .hoursLabel {
  float: left;
  height: 50px;
  display: inline-block;
  line-height: 1.1em;
  margin-right: 10px;
}

#igChat .timeInfo {
  display: inline-block;
  float: left;
  line-height: 1.1em;
}

#igChat .red {
  color: red;
}

.photostream ul {
  list-style: none;
  padding-left: 0;
}

.photostream ul li {
  margin: 0px 15px 15px 0px;
  float: left;
  width: auto;
}

.photostream ul li.last {
  margin-right: 0px;
}

.photostream ul li a {
  display: block;
  position: relative;
}

.photostream ul li a img {
  display: block;
  width: 70px;
  height: 70px;
}

.photostream_overlay {
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100%;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
  filter: alpha(opacity=0);
  -moz-opacity: 0;
  -khtml-opacity: 0;
  opacity: 0;
  -webkit-backface-visibility: hidden;
  -webkit-transition: all 0.2s linear;
  -moz-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  -ms-transition: all 0.2s linear;
  transition: all 0.2s linear;
}

.photostream_overlay:hover {
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=80)";
  filter: alpha(opacity=80);
  -moz-opacity: 0.8;
  -khtml-opacity: 0.8;
  opacity: 0.8;
}

#lang_sel a.lang_sel_sel, #lang_sel a.lang_sel_sel:hover, #lang_sel :hover>a, #lang_sel ul ul :hover>a, #lang_sel ul ul a, #lang_sel ul ul a:visited {
  background-color: transparent;
  color: inherit;
}

#drift-widget-container {
  z-index: 2147483646 !important;
}

#drift-widget {
  bottom: 5px !important;
  right: 5px !important;
}

#back-to-top {
  position: fixed;
  bottom: 100px;
  right: 20px;
  background: #000;
  color: #fff;
  display: block;
  border-radius: 50%;
  font-size: 17px;
  z-index: 5;
  display: none;
  width: 45px;
  height: 45px;
  line-height: 45px;
  text-align: center;
}

@media only screen and (min-width:1280px) {
  .left-header #header {
    display: none;
  }
}

@media only screen and (max-width:1279px) {
  .left-header .sb-left {
    display: none;
  }
  .left-header #main-wrapper {
    margin-left: 0px;
  }
}

@media only screen and (min-width:768px) and (max-width:959px) {
  #header .header-controls {
    width: 250px;
    position: relative;
  }
}

@media only screen and (max-width:960px) {
  #navigation {
    display: none !important;
  }
  #header-inner-wrap.stuck {
    position: relative;
    width: 100%;
    box-shadow: none;
  }
  .mobile-sub-menu-controller {
    display: inline-block;
  }
  body.admin-bar #header-inner-wrap.stuck {
    top: 0px !important;
  }
  .sticky-wrapper {
    height: auto !important;
  }
  #header .header-controls {
    width: 50%;
  }
  .header-contact-wrap {
    padding-top: 5px;
  }
  .header-contact-wrap, #header-top-menu {
    line-height: 25px !important;
  }
  .header-contact-wrap .be-wrap div.left, .header-contact-wrap .be-wrap div.right {
    margin-bottom: 5px;
  }
  .menu-controls {
    display: block !important;
  }
  body.header-transparent #header #header-inner-wrap.no-transparent {
    position: absolute;
    left: auto;
    right: auto;
  }
  body.sticky-header #header #header-inner-wrap.no-transparent {
    position: relative;
    left: auto;
    right: auto;
  }
  .mobile-nav-controller-wrap {
    display: block;
  }
}

@media only screen and (max-width:767px) {
  #header-inner-wrap.stuck {
    position: relative;
    width: 100%;
    box-shadow: none;
  }
  ul.tabs li {
    float: none;
    margin-right: 0px;
    width: 100%;
    margin-left: 0px;
  }
  #header .header-controls {
    width: 40%;
  }
  .header-cart-controls, .menu-controls, .header-search-controls {
    margin-left: 5px;
  }
  .children {
    padding-left: 0%;
  }
  .vcard, .children .vcard {
    width: 25%;
    margin-right: 0;
  }
  .comment-content, .children .comment-content {
    width: 70%;
    padding-left: 4%;
  }
  #footer-widgets {
    width: 270px;
  }
  .no-mobile {
    display: none;
  }
  input[type="text"], input[type="email"], input[type="password"] {
    width: 98%;
  }
  .style2-blog .post-thumb, .style2-blog .article-details {
    width: 100%;
    float: none;
  }
  .gmap-wrapper {
    height: 250px !important;
  }
}

@media only screen and (min-width:480px) and (max-width:767px) {
  .vcard, .children .vcard {
    width: 20%;
  }
  .header-cart-controls, .menu-controls, .header-search-controls {
    margin-left: 10px;
  }
}

.left {
  float: left;
}

.right {
  float: right;
}

.last {
  margin-right: 0 !important;
}

.clear {
  clear: both;
}

.no-margin {
  margin-bottom: 0;
}

.truncate {
  height: 100px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.no-list-style {
  list-style: none;
}

.overlay {
  z-index: 999999;
  position: fixed;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.2);
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
}

.ir {
  background-color: transparent;
  border: 0;
  overflow: hidden;
  *text-indent: -9999px;
}

.ir:before {
  content: "";
  display: block;
  width: 0;
  height: 100%;
}

.hidden {
  display: none !important;
  visibility: hidden;
}

.visuallyhidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}

.visuallyhidden.focusable:active, .visuallyhidden.focusable:focus {
  clip: auto;
  height: auto;
  margin: 0;
  overflow: visible;
  position: static;
  width: auto;
}

.invisible {
  visibility: hidden;
}

.clearfix:before, .clearfix:after {
  content: " ";
  display: table;
}

.clearfix:after {
  clear: both;
}

.clearfix {
  *zoom: 1;
}

@media print {
  * {
    background: transparent !important;
    color: #000 !important;
    box-shadow: none !important;
    text-shadow: none !important;
  }
  a, a:visited {
    text-decoration: underline;
  }
  a[href]:after {
    content: " (" attr(href) ")";
  }
  abbr[title]:after {
    content: " (" attr(title) ")";
  }
  .ir a:after, a[href^="javascript:"]:after, a[href^="#"]:after {
    content: "";
  }
  pre, blockquote {
    border: 1px solid #999;
    page-break-inside: avoid;
  }
  thead {
    display: table-header-group;
  }
  tr, img {
    page-break-inside: avoid;
  }
  img {
    max-width: 100% !important;
  }
  @page {
    margin: 0.5cm;
  }
  p, h2, h3 {
    orphans: 3;
    widows: 3;
  }
  h2, h3 {
    page-break-after: avoid;
  }
}

.loaderWBall {
  position: relative;
  width: 78px;
  height: 78px;
  margin: auto;
}

.loaderWBall .wBall {
  position: absolute;
  width: 74px;
  height: 74px;
  opacity: 0;
  transform: rotate(225deg);
  -o-transform: rotate(225deg);
  -ms-transform: rotate(225deg);
  -webkit-transform: rotate(225deg);
  -moz-transform: rotate(225deg);
  animation: orbit 6.96s infinite;
  -o-animation: orbit 6.96s infinite;
  -ms-animation: orbit 6.96s infinite;
  -webkit-animation: orbit 6.96s infinite;
  -moz-animation: orbit 6.96s infinite;
}

.loaderWBall .wBall .wInnerBall {
  position: absolute;
  width: 10px;
  height: 10px;
  background: #0099ff;
  left: 0;
  top: 0;
  border-radius: 10px;
}

.loaderWBall #wBall_1 {
  animation-delay: 1.52s;
  -o-animation-delay: 1.52s;
  -ms-animation-delay: 1.52s;
  -webkit-animation-delay: 1.52s;
  -moz-animation-delay: 1.52s;
}

.loaderWBall #wBall_2 {
  animation-delay: 0.3s;
  -o-animation-delay: 0.3s;
  -ms-animation-delay: 0.3s;
  -webkit-animation-delay: 0.3s;
  -moz-animation-delay: 0.3s;
}

.loaderWBall #wBall_3 {
  animation-delay: 0.61s;
  -o-animation-delay: 0.61s;
  -ms-animation-delay: 0.61s;
  -webkit-animation-delay: 0.61s;
  -moz-animation-delay: 0.61s;
}

.loaderWBall #wBall_4 {
  animation-delay: 0.91s;
  -o-animation-delay: 0.91s;
  -ms-animation-delay: 0.91s;
  -webkit-animation-delay: 0.91s;
  -moz-animation-delay: 0.91s;
}

.loaderWBall #wBall_5 {
  animation-delay: 1.22s;
  -o-animation-delay: 1.22s;
  -ms-animation-delay: 1.22s;
  -webkit-animation-delay: 1.22s;
  -moz-animation-delay: 1.22s;
}

@keyframes orbit {
  0% {
    opacity: 1;
    z-index: 99;
    transform: rotate(180deg);
    animation-timing-function: ease-out;
  }
  7% {
    opacity: 1;
    transform: rotate(300deg);
    animation-timing-function: linear;
    origin: 0%;
  }
  30% {
    opacity: 1;
    transform: rotate(410deg);
    animation-timing-function: ease-in-out;
    origin: 7%;
  }
  39% {
    opacity: 1;
    transform: rotate(645deg);
    animation-timing-function: linear;
    origin: 30%;
  }
  70% {
    opacity: 1;
    transform: rotate(770deg);
    animation-timing-function: ease-out;
    origin: 39%;
  }
  75% {
    opacity: 1;
    transform: rotate(900deg);
    animation-timing-function: ease-out;
    origin: 70%;
  }
  76% {
    opacity: 0;
    transform: rotate(900deg);
  }
  100% {
    opacity: 0;
    transform: rotate(900deg);
  }
}

@font-face {
  font-family: 'revicons';
  src: url("/assets/modern/font/revicons.eot?5510888");
  src: url("/assets/modern/font/revicons.eot?5510888#iefix") format('embedded-opentype'), url("/assets/modern/font/revicons.woff?5510888") format('woff'), url("/assets/modern/font/revicons.ttf?5510888") format('truetype'), url("/assets/modern/font/revicons.svg?5510888#revicons") format('svg');
  font-weight: normal;
  font-style: normal;
}

[class^="revicon-"]:before, [class*=" revicon-"]:before {
  font-family: "revicons";
  font-style: normal;
  font-weight: normal;
  speak: none;
  display: inline-block;
  text-decoration: inherit;
  width: 1em;
  margin-right: .2em;
  text-align: center;
  font-variant: normal;
  text-transform: none;
  line-height: 1em;
  margin-left: .2em;
}

.revicon-search-1:before {
  content: '\e802';
}

.revicon-pencil-1:before {
  content: '\e831';
}

.revicon-picture-1:before {
  content: '\e803';
}

.revicon-cancel:before {
  content: '\e80a';
}

.revicon-info-circled:before {
  content: '\e80f';
}

.revicon-trash:before {
  content: '\e801';
}

.revicon-left-dir:before {
  content: '\e817';
}

.revicon-right-dir:before {
  content: '\e818';
}

.revicon-down-open:before {
  content: '\e83b';
}

.revicon-left-open:before {
  content: '\e819';
}

.revicon-right-open:before {
  content: '\e81a';
}

.revicon-angle-left:before {
  content: '\e820';
}

.revicon-angle-right:before {
  content: '\e81d';
}

.revicon-left-big:before {
  content: '\e81f';
}

.revicon-right-big:before {
  content: '\e81e';
}

.revicon-magic:before {
  content: '\e807';
}

.revicon-picture:before {
  content: '\e800';
}

.revicon-export:before {
  content: '\e80b';
}

.revicon-cog:before {
  content: '\e832';
}

.revicon-login:before {
  content: '\e833';
}

.revicon-logout:before {
  content: '\e834';
}

.revicon-video:before {
  content: '\e805';
}

.revicon-arrow-combo:before {
  content: '\e827';
}

.revicon-left-open-1:before {
  content: '\e82a';
}

.revicon-right-open-1:before {
  content: '\e82b';
}

.revicon-left-open-mini:before {
  content: '\e822';
}

.revicon-right-open-mini:before {
  content: '\e823';
}

.revicon-left-open-big:before {
  content: '\e824';
}

.revicon-right-open-big:before {
  content: '\e825';
}

.revicon-left:before {
  content: '\e836';
}

.revicon-right:before {
  content: '\e826';
}

.revicon-ccw:before {
  content: '\e808';
}

.revicon-arrows-ccw:before {
  content: '\e806';
}

.revicon-palette:before {
  content: '\e829';
}

.revicon-list-add:before {
  content: '\e80c';
}

.revicon-doc:before {
  content: '\e809';
}

.revicon-left-open-outline:before {
  content: '\e82e';
}

.revicon-left-open-2:before {
  content: '\e82c';
}

.revicon-right-open-outline:before {
  content: '\e82f';
}

.revicon-right-open-2:before {
  content: '\e82d';
}

.revicon-equalizer:before {
  content: '\e83a';
}

.revicon-layers-alt:before {
  content: '\e804';
}

.revicon-popup:before {
  content: '\e828';
}

.tp-caption .frontcorner {
  width: 0;
  height: 0;
  border-left: 40px solid transparent;
  border-right: 0px solid transparent;
  border-top: 40px solid #00A8FF;
  position: absolute;
  left: -40px;
  top: 0px;
}

.tp-caption .backcorner {
  width: 0;
  height: 0;
  border-left: 0px solid transparent;
  border-right: 40px solid transparent;
  border-bottom: 40px solid #00A8FF;
  position: absolute;
  right: 0px;
  top: 0px;
}

.tp-caption .frontcornertop {
  width: 0;
  height: 0;
  border-left: 40px solid transparent;
  border-right: 0px solid transparent;
  border-bottom: 40px solid #00A8FF;
  position: absolute;
  left: -40px;
  top: 0px;
}

.tp-caption .backcornertop {
  width: 0;
  height: 0;
  border-left: 0px solid transparent;
  border-right: 40px solid transparent;
  border-top: 40px solid #00A8FF;
  position: absolute;
  right: 0px;
  top: 0px;
}

.rev_slider_wrapper {
  position: relative;
}

.rev_slider_wrapper>ul {
  visibility: hidden;
}

.rev_slider {
  position: relative;
  overflow: visible;
}

.rev_slider img {
  max-width: none !important;
  -moz-transition: none 0;
  -webkit-transition: none 0;
  -o-transition: none 0;
  transition: none 0;
  margin: 0px;
  padding: 0px;
  border-width: 0px;
  border: none;
  visibility: visible !important;
}

.rev_slider .no-slides-text {
  font-weight: bold;
  text-align: center;
  padding-top: 80px;
}

.rev_slider ul {
  margin: 0px;
  padding: 0px;
  list-style: none !important;
  list-style-type: none;
  background-position: 0px 0px;
}

.rev_slider ul li, .rev_slider>ul>li, .rev_slider>ul>li:before {
  list-style: none !important;
  position: absolute;
  visibility: hidden;
  margin: 0px !important;
  padding: 0px !important;
  overflow-x: visible;
  overflow-y: visible;
  list-style-type: none !important;
  background-image: none;
  background-position: 0px 0px;
  text-indent: 0em;
}

.rev_slider .tp-caption, .rev_slider .caption, {
  position: absolute;
  visibility: hidden;
}

.tp-simpleresponsive img {
  max-width: none;
}

.tp-caption {
  z-index: 1;
}

.tp_inner_padding {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  max-height: none !important;
}

.tp-hide-revslider, .tp-caption.tp-hidden-caption {
  visibility: hidden !important;
  display: none !important;
}

.rev_slider embed, .rev_slider iframe, .rev_slider object, .rev_slider video {
  max-width: none !important;
}

.noFilterClass {
  filter: none !important;
}

.caption.fullscreenvideo {
  left: 0px;
  top: 0px;
  position: absolute;
  width: 100%;
  height: 100%;
}

.caption.fullscreenvideo iframe, .caption.fullscreenvideo video {
  width: 100% !important;
  height: 100% !important;
  display: none
}

.tp-caption.fullscreenvideo {
  left: 0px;
  top: 0px;
  position: absolute;
  width: 100%;
  height: 100%;
}

.tp-caption.fullscreenvideo iframe, .tp-caption.fullscreenvideo iframe video {
  width: 100% !important;
  height: 100% !important;
  display: none;
}

.fullscreenvideo .vjs-loading-spinner {
  visibility: none;
  display: none !important;
  width: 0px;
  height: 0px;
}

.fullscreenvideo .vjs-control-bar.vjs-fade-out, .fullscreenvideo .vjs-control-bar.vjs-fade-in, .fullscreenvideo .vjs-control-bar.vjs-fade-out.vjs-lock-showing, .fullscreenvideo .vjs-control-bar.vjs-fade-in.vjs-lock-showing {
  visibility: hidden !important;
  opacity: 0 !important;
  display: none !important;
  width: 0px;
  height: 0px;
  overflow: hidden;
}

.fullcoveredvideo.video-js, .fullcoveredvideo video {
  background: transparent !important;
}

.fullcoveredvideo .vjs-poster {
  background-position: center center;
  background-size: cover;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
}

.tp-dottedoverlay {
  background-repeat: repeat;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 1;
}

.tp-dottedoverlay.twoxtwo {
  background: url("/assets/modern/assets/gridtile.png")
}

.tp-dottedoverlay.twoxtwowhite {
  background: url("/assets/modern/assets/gridtile_white.png")
}

.tp-dottedoverlay.threexthree {
  background: url("/assets/modern/assets/gridtile_3x3.png")
}

.tp-dottedoverlay.threexthreewhite {
  background: url("/assets/modern/assets/gridtile_3x3_white.png")
}

.fullscreen-container {
  width: 100%;
  position: relative;
  padding: 0;
}

.fullwidthbanner-container {
  width: 100%;
  position: relative;
  padding: 0;
  overflow: hidden;
}

.fullwidthbanner-container .fullwidthabanner {
  width: 100%;
  position: relative;
}

.tp-simpleresponsive .slotholder *, .tp-simpleresponsive img {}

.tp-simpleresponsive .caption, .tp-simpleresponsive .tp-caption {
  position: absolute;
  -webkit-font-smoothing: antialiased !important;
}

.tp-bannershadow {
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -o-user-select: none;
}

.tp-bannershadow.tp-shadow1 {
  background: url("/assets/modern/assets/shadow1.png") no-repeat;
  background-size: 100% 100%;
  width: 890px;
  height: 30px;
  bottom: -30px;
}

.tp-bannershadow.tp-shadow2 {
  background: url("/assets/modern/assets/shadow2.png") no-repeat;
  background-size: 100% 100%;
  width: 890px;
  height: 60px;
  bottom: -60px;
}

.tp-bannershadow.tp-shadow3 {
  background: url("/assets/modern/assets/shadow3.png") no-repeat;
  background-size: 100% 100%;
  width: 890px;
  height: 60px;
  bottom: -60px;
}

.tp-button {
  padding: 6px 13px 5px;
  border-radius: 3px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  height: 30px;
  cursor: pointer;
  color: #fff !important;
  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.6) !important;
  font-size: 15px;
  line-height: 45px !important;
  background: url("/assets/modern/images/gradient/g30.png") repeat-x top;
  font-family: arial, sans-serif;
  font-weight: bold;
  letter-spacing: -1px;
  text-decoration: none;
}

.tp-button.big {
  color: #fff;
  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.6);
  font-weight: bold;
  padding: 9px 20px;
  font-size: 19px;
  line-height: 57px !important;
  background: url("/assets/modern/images/gradient/g40.png") repeat-x top;
}

.purchase:hover, .tp-button:hover, .tp-button.big:hover {
  background-position: bottom, 15px 11px;
}

@media only screen and (min-width:480px) and (max-width:767px) {
  .tp-button {
    padding: 4px 8px 3px;
    line-height: 25px !important;
    font-size: 11px !important;
    font-weight: normal;
  }
  a.tp-button {
    -webkit-transition: none;
    -moz-transition: none;
    -o-transition: none;
    -ms-transition: none;
  }
}

@media only screen and (min-width:0px) and (max-width:479px) {
  .tp-button {
    padding: 2px 5px 2px;
    line-height: 20px !important;
    font-size: 10px !important;
  }
  a.tp-button {
    -webkit-transition: none;
    -moz-transition: none;
    -o-transition: none;
    -ms-transition: none;
  }
}

.tp-button.green, .tp-button:hover.green, .purchase.green, .purchase:hover.green {
  background-color: #21a117;
  -webkit-box-shadow: 0px 3px 0px 0px #104d0b;
  -moz-box-shadow: 0px 3px 0px 0px #104d0b;
  box-shadow: 0px 3px 0px 0px #104d0b;
}

.tp-button.blue, .tp-button:hover.blue, .purchase.blue, .purchase:hover.blue {
  background-color: #1d78cb;
  -webkit-box-shadow: 0px 3px 0px 0px #0f3e68;
  -moz-box-shadow: 0px 3px 0px 0px #0f3e68;
  box-shadow: 0px 3px 0px 0px #0f3e68;
}

.tp-button.red, .tp-button:hover.red, .purchase.red, .purchase:hover.red {
  background-color: #cb1d1d;
  -webkit-box-shadow: 0px 3px 0px 0px #7c1212;
  -moz-box-shadow: 0px 3px 0px 0px #7c1212;
  box-shadow: 0px 3px 0px 0px #7c1212;
}

.tp-button.orange, .tp-button:hover.orange, .purchase.orange, .purchase:hover.orange {
  background-color: #ff7700;
  -webkit-box-shadow: 0px 3px 0px 0px #a34c00;
  -moz-box-shadow: 0px 3px 0px 0px #a34c00;
  box-shadow: 0px 3px 0px 0px #a34c00;
}

.tp-button.darkgrey, .tp-button.grey, .tp-button:hover.darkgrey, .tp-button:hover.grey, .purchase.darkgrey, .purchase:hover.darkgrey {
  background-color: #555;
  -webkit-box-shadow: 0px 3px 0px 0px #222;
  -moz-box-shadow: 0px 3px 0px 0px #222;
  box-shadow: 0px 3px 0px 0px #222;
}

.tp-button.lightgrey, .tp-button:hover.lightgrey, .purchase.lightgrey, .purchase:hover.lightgrey {
  background-color: #888;
  -webkit-box-shadow: 0px 3px 0px 0px #555;
  -moz-box-shadow: 0px 3px 0px 0px #555;
  box-shadow: 0px 3px 0px 0px #555;
}

.tpclear {
  clear: both;
}

.tp-bullets {
  z-index: 1000;
  position: absolute;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
  -moz-opacity: 1;
  -khtml-opacity: 1;
  opacity: 1;
  -webkit-transition: opacity 0.2s ease-out;
  -moz-transition: opacity 0.2s ease-out;
  -o-transition: opacity 0.2s ease-out;
  -ms-transition: opacity 0.2s ease-out;
  -webkit-transform: translateZ(5px);
}

.tp-bullets.hidebullets {
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
  -moz-opacity: 0;
  -khtml-opacity: 0;
  opacity: 0;
}

.tp-bullets.simplebullets.navbar {
  border: 1px solid #666;
  border-bottom: 1px solid #444;
  background: url("/assets/modern/assets/boxed_bgtile.png");
  height: 40px;
  padding: 0px 10px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
}

.tp-bullets.simplebullets.navbar-old {
  background: url("/assets/modern/assets/navigdots_bgtile.png");
  height: 35px;
  padding: 0px 10px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
}

.tp-bullets.simplebullets.round .bullet {
  cursor: pointer;
  position: relative;
  background: url("/assets/modern/assets/bullet.png") no-repeat top left;
  width: 20px;
  height: 20px;
  margin-right: 0px;
  float: left;
  margin-top: 0px;
  margin-left: 3px;
}

.tp-bullets.simplebullets.round .bullet.last {
  margin-right: 3px;
}

.tp-bullets.simplebullets.round-old .bullet {
  cursor: pointer;
  position: relative;
  background: url("/assets/modern/assets/bullets.png") no-repeat bottom left;
  width: 23px;
  height: 23px;
  margin-right: 0px;
  float: left;
  margin-top: 0px;
}

.tp-bullets.simplebullets.round-old .bullet.last {
  margin-right: 0px;
}

.tp-bullets.simplebullets.square .bullet {
  cursor: pointer;
  position: relative;
  background: url("/assets/modern/assets/bullets2.png") no-repeat bottom left;
  width: 19px;
  height: 19px;
  margin-right: 0px;
  float: left;
  margin-top: 0px;
}

.tp-bullets.simplebullets.square .bullet.last {
  margin-right: 0px;
}

.tp-bullets.simplebullets.square-old .bullet {
  cursor: pointer;
  position: relative;
  background: url("/assets/modern/assets/bullets2.png") no-repeat bottom left;
  width: 19px;
  height: 19px;
  margin-right: 0px;
  float: left;
  margin-top: 0px;
}

.tp-bullets.simplebullets.square-old .bullet.last {
  margin-right: 0px;
}

.tp-bullets.simplebullets.navbar .bullet {
  cursor: pointer;
  position: relative;
  background: url("/assets/modern/assets/bullet_boxed.png") no-repeat top left;
  width: 18px;
  height: 19px;
  margin-right: 5px;
  float: left;
  margin-top: 10px;
}

.tp-bullets.simplebullets.navbar .bullet.first {
  margin-left: 0px !important;
}

.tp-bullets.simplebullets.navbar .bullet.last {
  margin-right: 0px !important;
}

.tp-bullets.simplebullets.navbar-old .bullet {
  cursor: pointer;
  position: relative;
  background: url("/assets/modern/assets/navigdots.png") no-repeat bottom left;
  width: 15px;
  height: 15px;
  margin-left: 5px !important;
  margin-right: 5px !important;
  float: left;
  margin-top: 10px;
}

.tp-bullets.simplebullets.navbar-old .bullet.first {
  margin-left: 0px !important;
}

.tp-bullets.simplebullets.navbar-old .bullet.last {
  margin-right: 0px !important;
}

.tp-bullets.simplebullets .bullet:hover, .tp-bullets.simplebullets .bullet.selected {
  background-position: top left;
}

.tp-bullets.simplebullets.round .bullet:hover, .tp-bullets.simplebullets.round .bullet.selected, .tp-bullets.simplebullets.navbar .bullet:hover, .tp-bullets.simplebullets.navbar .bullet.selected {
  background-position: bottom left;
}

.tparrows {
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
  -moz-opacity: 1;
  -khtml-opacity: 1;
  opacity: 1;
  -webkit-transition: opacity 0.2s ease-out;
  -moz-transition: opacity 0.2s ease-out;
  -o-transition: opacity 0.2s ease-out;
  -ms-transition: opacity 0.2s ease-out;
  -webkit-transform: translateZ(5px);
}

.tparrows.hidearrows {
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
  -moz-opacity: 0;
  -khtml-opacity: 0;
  opacity: 0;
}

.tp-leftarrow {
  z-index: 100;
  cursor: pointer;
  position: relative;
  background: url("/assets/modern/assets/large_left.png") no-repeat top left;
  width: 40px;
  height: 40px;
}

.tp-rightarrow {
  z-index: 100;
  cursor: pointer;
  position: relative;
  background: url("/assets/modern/assets/large_right.png") no-repeat top left;
  width: 40px;
  height: 40px;
}

.tp-leftarrow.round {
  z-index: 100;
  cursor: pointer;
  position: relative;
  background: url("/assets/modern/assets/small_left.png") no-repeat top left;
  width: 19px;
  height: 14px;
  margin-right: 0px;
  float: left;
  margin-top: 0px;
}

.tp-rightarrow.round {
  z-index: 100;
  cursor: pointer;
  position: relative;
  background: url("/assets/modern/assets/small_right.png") no-repeat top left;
  width: 19px;
  height: 14px;
  margin-right: 0px;
  float: left;
  margin-top: 0px;
}

.tp-leftarrow.round-old {
  z-index: 100;
  cursor: pointer;
  position: relative;
  background: url("/assets/modern/assets/arrow_left.png") no-repeat top left;
  width: 26px;
  height: 26px;
  margin-right: 0px;
  float: left;
  margin-top: 0px;
}

.tp-rightarrow.round-old {
  z-index: 100;
  cursor: pointer;
  position: relative;
  background: url("/assets/modern/assets/arrow_right.png") no-repeat top left;
  width: 26px;
  height: 26px;
  margin-right: 0px;
  float: left;
  margin-top: 0px;
}

.tp-leftarrow.navbar {
  z-index: 100;
  cursor: pointer;
  position: relative;
  background: url("/assets/modern/assets/small_left_boxed.png") no-repeat top left;
  width: 20px;
  height: 15px;
  float: left;
  margin-right: 6px;
  margin-top: 12px;
}

.tp-rightarrow.navbar {
  z-index: 100;
  cursor: pointer;
  position: relative;
  background: url("/assets/modern/assets/small_right_boxed.png") no-repeat top left;
  width: 20px;
  height: 15px;
  float: left;
  margin-left: 6px;
  margin-top: 12px;
}

.tp-leftarrow.navbar-old {
  z-index: 100;
  cursor: pointer;
  position: relative;
  background: url("/assets/modern/assets/arrowleft.png") no-repeat top left;
  width: 9px;
  height: 16px;
  float: left;
  margin-right: 6px;
  margin-top: 10px;
}

.tp-rightarrow.navbar-old {
  z-index: 100;
  cursor: pointer;
  position: relative;
  background: url("/assets/modern/assets/arrowright.png") no-repeat top left;
  width: 9px;
  height: 16px;
  float: left;
  margin-left: 6px;
  margin-top: 10px;
}

.tp-leftarrow.navbar-old.thumbswitharrow {
  margin-right: 10px;
}

.tp-rightarrow.navbar-old.thumbswitharrow {
  margin-left: 0px;
}

.tp-leftarrow.square {
  z-index: 100;
  cursor: pointer;
  position: relative;
  background: url("/assets/modern/assets/arrow_left2.png") no-repeat top left;
  width: 12px;
  height: 17px;
  float: left;
  margin-right: 0px;
  margin-top: 0px;
}

.tp-rightarrow.square {
  z-index: 100;
  cursor: pointer;
  position: relative;
  background: url("/assets/modern/assets/arrow_right2.png") no-repeat top left;
  width: 12px;
  height: 17px;
  float: left;
  margin-left: 0px;
  margin-top: 0px;
}

.tp-leftarrow.square-old {
  z-index: 100;
  cursor: pointer;
  position: relative;
  background: url("/assets/modern/assets/arrow_left2.png") no-repeat top left;
  width: 12px;
  height: 17px;
  float: left;
  margin-right: 0px;
  margin-top: 0px;
}

.tp-rightarrow.square-old {
  z-index: 100;
  cursor: pointer;
  position: relative;
  background: url("/assets/modern/assets/arrow_right2.png") no-repeat top left;
  width: 12px;
  height: 17px;
  float: left;
  margin-left: 0px;
  margin-top: 0px;
}

.tp-leftarrow.default {
  z-index: 100;
  cursor: pointer;
  position: relative;
  background: url("/assets/modern/assets/large_left.png") no-repeat 0 0;
  width: 40px;
  height: 40px;
}

.tp-rightarrow.default {
  z-index: 100;
  cursor: pointer;
  position: relative;
  background: url("/assets/modern/assets/large_right.png") no-repeat 0 0;
  width: 40px;
  height: 40px;
}

.tp-leftarrow:hover, .tp-rightarrow:hover {
  background-position: bottom left;
}

.tp-bullets.tp-thumbs {
  z-index: 1000;
  position: absolute;
  padding: 3px;
  background-color: #fff;
  width: 500px;
  height: 50px;
  margin-top: -50px;
  vertical-align: top;
}

.tp-bullets.tp-thumbs img {
  vertical-align: top;
}

.fullwidthbanner-container .tp-thumbs {
  padding: 3px;
}

.tp-bullets.tp-thumbs .tp-mask {
  width: 500px;
  height: 50px;
  overflow: hidden;
  position: relative;
}

.tp-bullets.tp-thumbs .tp-mask .tp-thumbcontainer {
  width: 5000px;
  position: absolute;
}

.tp-bullets.tp-thumbs .bullet {
  width: 100px;
  height: 50px;
  cursor: pointer;
  overflow: hidden;
  background: none;
  margin: 0;
  float: left;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";
  -moz-opacity: 0.5;
  -khtml-opacity: 0.5;
  opacity: 0.5;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  -o-transition: all 0.2s ease-out;
  -ms-transition: all 0.2s ease-out;
}

.tp-bullets.tp-thumbs .bullet:hover, .tp-bullets.tp-thumbs .bullet.selected {
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
  -moz-opacity: 1;
  -khtml-opacity: 1;
  opacity: 1;
}

.tp-thumbs img {
  width: 100%;
}

.tp-bannertimer {
  width: 100%;
  height: 10px;
  background: url("/assets/modern/assets/timer.png");
  position: absolute;
  z-index: 200;
  top: 0px;
}

.tp-bannertimer.tp-bottom {
  top: auto;
  bottom: 0px !important;
  height: 5px;
}

.vjs-tech {
  margin-top: 1px
}

.tp-caption .vjs-default-skin .vjs-big-play-button {
  left: 50%;
  top: 50%;
  margin-left: -20px;
  margin-top: -20px;
  width: 40px;
  height: 40px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border: none;
  box-shadow: none;
  text-shadow: none;
  line-height: 30px;
  vertical-align: top;
  padding: 0px;
}

.tp-caption .vjs-default-skin .vjs-big-play-button:before {
  position: absolute;
  top: 0px;
  left: 0px;
  line-height: 40px;
  text-shadow: none !important;
  color: #fff;
  font-size: 18px;
}

.tp-caption .vjs-default-skin:hover .vjs-big-play-button, .vjs-default-skin .vjs-big-play-button:focus {
  box-shadow: none;
  -webkit-box-shadow: none;
}

.tp-simpleresponsive img {
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -o-user-select: none;
}

.tp-caption img {
  background: transparent;
  -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#00FFFFFF,endColorstr=#00FFFFFF)";
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#00FFFFFF, endColorstr=#00FFFFFF);
  zoom: 1;
}

.tp-simpleresponsive ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.tp-simpleresponsive>ul li {
  list-style: none;
  position: absolute;
  visibility: hidden;
}

.caption.slidelink a div, .tp-caption.slidelink a div {
  width: 3000px;
  height: 1500px;
  background: url("/assets/modern/assets/coloredbg.png") repeat;
}

.tp-loader {
  background: url("/assets/modern/assets/loader.gif") no-repeat 10px 10px;
  background-color: #fff;
  margin: -22px -22px;
  top: 50%;
  left: 50%;
  z-index: 10000;
  position: absolute;
  width: 44px;
  height: 44px;
  border-radius: 3px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
}

.be-wrap {
  max-width: 1160px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

.layout-box {
  position: relative;
  width: 1280px;
  margin: 0px auto;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.4);
}

#page-content.content-single-sidebar {
  width: 820px;
}

.left-sidebar-page #page-content, .dual-sidebar-page #page-content {
  float: right;
}

.right-sidebar-page #page-content {
  float: left;
}

#left-sidebar, .right-sidebar-page #page-content {
  margin-right: 80px;
}

#left-sidebar, #right-sidebar {
  margin-bottom: 80px;
}

#content {
  position: static;
  z-index: 2;
}

.page #comments {
  padding: 50px 0;
}

.column-block {
  float: left;
  margin-left: 5%;
  margin-bottom: 60px;
}

.one-col.column-block {
  margin-left: 0px;
  float: none;
}

.one-third {
  width: 30%;
}

.one-fourth {
  width: 21.25%;
}

.one-fifth {
  width: 16%;
}

.one-half {
  width: 47.5%;
}

.two-third {
  width: 65%;
}

.three-fourth {
  width: 73.75%;
}

.be-no-space .one-third {
  width: 33.33%;
}

.be-no-space .one-fourth {
  width: 25%;
}

.be-no-space .one-fifth {
  width: 20%;
}

.be-no-space .one-half {
  width: 50%;
}

.be-no-space .two-third {
  width: 66.68%;
}

.be-no-space .three-fourth {
  width: 75%;
}

.be-no-space {
  display: table;
  margin-bottom: 60px;
}

.be-no-space.zero-bottom {
  margin-bottom: 0;
}

.be-no-space .column-block {
  display: table-cell;
  margin-left: 0px;
  float: none;
  vertical-align: top;
}

.be-column-pad {
  padding: 100px 5%;
}

.one-third.be-column-pad, .one-fourth.be-column-pad, .one-col.be-column-pad, .two-third.be-column-pad, .three-fourth.be-column-pad {
  padding: 100px 5%;
}

.one-half.be-column-pad {
  padding: 100px 15% 100px 5%;
}

.one-half.be-column-pad:first-child {
  padding: 100px 5% 100px 15%;
}

.column-block *:last-child {
  margin-bottom: 0 !important;
}

.be-last-child {
  margin-bottom: 0 !important;
}

.be-row .column-block:first-child {
  margin-left: 0;
}

.be-row.zero-bottom .column-block {
  margin-bottom: 0;
}

.be-section .be-row:last-child .column-block {
  margin-bottom: 0;
}

.be-section .be-row:last-child .column-block h1:last-child, .be-section .be-row:last-child .column-block h2:last-child, .be-section .be-row:last-child .column-block h3:last-child, .be-section .be-row:last-child .column-block h4:last-child, .be-section .be-row:last-child .column-block h5:last-child, .be-section .be-row:last-child .column-block h6:last-child {
  margin-bottom: 0 !important;
}

.be-section .be-row:not(:last-child) .column-block h1:last-child, .be-section .be-row:not(:last-child) .column-block h2:last-child, .be-section .be-row:not(:last-child) .column-block h3:last-child, .be-section .be-row:not(:last-child) .column-block h4:last-child, .be-section .be-row:not(:last-child) .column-block h5:last-child, .be-section .be-row:not(:last-child) .column-block h6:last-child {
  margin-bottom: 30px !important;
}

html body .be-section .be-row .column-block .be-notification *:last-child {
  margin-bottom: 0px !important;
}

.two-third .column-block, .three-fourth .column-block {
  margin-bottom: 0;
}

.be-section.be-video-section .be-section-pad, .be-section.be-bg-overlay {
  position: relative;
}

.be-section {
  overflow: hidden;
}

.be-row {
  z-index: 3;
  position: relative;
}

.be-row.be-no-space {
  width: 100%;
}

.be-bg-video {
  display: none;
  position: absolute;
  width: 100%;
  z-index: 1;
  top: 0;
  left: 0;
}

.be-animate {
  visibility: hidden;
  margin-bottom: 30px;
}

#be-pb-main .be-animate {
  visibility: visible;
}

.be-bg-parallax {
  background-attachment: fixed;
}

.be-bg-cover {
  background-size: cover !important;
  -webkit-background-size: cover !important;
  -moz-background-size: cover !important;
}

.section-overlay {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 2;
  background: #000;
  opacity: 0.8;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=80)";
  filter: alpha(opacity=80);
}

.be-shortcode {
  margin-bottom: 60px;
}

@media only screen and (min-width:960px) and (max-width:1279px) {
  .be-wrap {
    max-width: 980px;
    margin: 0 auto;
  }
  .layout-box {
    width: 100%;
  }
  #page-content.content-single-sidebar {
    width: 700px;
  }
  #left-sidebar, #right-sidebar {
    width: 220px;
  }
  #left-sidebar, .right-sidebar-page #page-content {
    margin-right: 50px;
  }
}

@media only screen and (max-width:1024px) {
  .be-bg-cover {
    background-attachment: scroll !important;
    background-position: center center !important;
  }
}

@media only screen and (min-width:768px) and (max-width:959px) {
  .be-wrap {
    max-width: 740px;
    margin: 0 auto;
  }
  .layout-box {
    width: 100%;
  }
  #page-content.content-single-sidebar {
    width: 500px;
  }
  #left-sidebar, .right-sidebar-page #page-content, .dual-sidebar-page #left-sidebar, #dual-sidebar-wrap {
    margin-right: 40px;
  }
  .content-single-sidebar .column-block {
    width: 100%;
    margin-left: 0;
    float: none;
  }
}

@media only screen and (max-width:767px) {
  .be-wrap {
    max-width: 300px;
    margin: 0 auto;
  }
  .layout-box {
    width: 100%;
    margin: 0;
  }
  #page-content.content-single-sidebar, .right-sidebar-page #page-content {
    float: none;
    margin-right: 0px;
    width: 100%;
    margin-left: 0px;
  }
  .column-block {
    float: none;
    margin-left: 0;
    width: 100%;
  }
  .column-block .column-block {
    margin-bottom: 60px;
  }
  .be-section .be-row:last-child .column-block {
    margin-bottom: 60px;
  }
  .be-section .be-row:last-child .column-block:last-child {
    margin-bottom: 0;
  }
  .be-no-space .column-block {
    width: 100%;
    min-height: 300px;
    display: block;
  }
  #bottom-widgets .column-block {
    margin-bottom: 60px;
  }
}

@media only screen and (min-width:480px) and (max-width:767px) {
  .be-wrap {
    max-width: 440px;
    margin: 0 auto;
  }
}

.header-hero-section {
  overflow: hidden;
  width: 100%;
}

.hero-section-wrap *:last-child {
  margin-bottom: 0px !important;
}

.hero-section-wrap {
  opacity: 0;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
  filter: alpha(opacity=0);
}

.hero-section-inner-wrap {
  display: table;
  width: 100%;
  height: 100%;
}

.hero-section-inner {
  display: table-cell;
  vertical-align: middle;
}

.header-hero-custom-section .be-row {
  height: 100% !important;
}

.hero-section-wrap .special-heading .separator:last-child {
  margin-bottom: 30px !important;
}

.rev_slider_wrapper {
  z-index: 1;
}

.tp-leftarrow, .tp-rightarrow {
  -webkit-transition: margin 0.4s ease-in-out;
  -moz-transition: margin 0.4s ease-in-out;
  -o-transition: margin 0.4s ease-in-out;
  transition: margin 0.4s ease-in-out;
  background: none !important;
  border: 2px solid #fff;
  border-radius: 50%;
}

.tp-leftarrow {
  margin-left: -100px;
}

.tp-rightarrow {
  margin-right: -100px;
}

.rev_slider_wrapper:hover .tp-leftarrow {
  margin-left: 0px;
}

.rev_slider_wrapper:hover .tp-rightarrow {
  margin-right: 15px;
}

.ui-accordion .ui-accordion-header {
  display: block;
  cursor: pointer;
  position: relative;
  padding: 15px 20px;
  min-height: 0;
  margin: 0px;
  margin-top: 25px;
  outline: 0;
  border: 1px solid;
  line-height: normal;
}

.ui-accordion .ui-accordion-header:first-child {
  margin-top: 0;
}

.ui-accordion .ui-accordion-content p:last-child {
  margin-bottom: 0px;
}

.ui-accordion .ui-accordion-header.top-space {
  margin-top: 20px;
}

.ui-accordion .ui-accordion-icons .ui-accordion-icons {
  padding-left: 2.2em;
}

.ui-accordion .ui-accordion-header .ui-accordion-header-icon {
  position: absolute;
  left: .5em;
  top: 50%;
  margin-top: -8px;
}

.ui-accordion .ui-accordion-content {
  padding: 25px;
  border-top: 0;
  overflow: auto;
  background: none;
  border: 1px solid;
  margin-top: -1px;
  font-size: 14px;
}

.ui-accordion-header:before {
  content: '\e816';
  font-family: "be-themes";
  margin-right: 15px;
  font-size: 16px;
  position: relative;
  top: 1px;
}

.ui-accordion-header-active:before {
  content: '\e819';
  font-family: "be-themes";
  margin-right: 15px;
  font-size: 16px;
  position: relative;
  top: 1px;
}

.ui-tabs-nav {
  display: table;
  border-left: 1px solid rgb(222, 222, 222);
}

.animate-number, .animate-number-caption {
  display: block;
  margin-bottom: 10px;
}

.animate-number-wrap {
  text-align: center;
}

.chart-wrap {
  text-align: center;
}

.chart {
  text-align: center;
  position: relative;
  width: 110px;
  height: 110px;
  line-height: 110px;
  margin: 0 auto 10px;
}

.chart canvas {
  position: absolute;
  top: 0;
  left: 0;
}

.chart .percentage {
  letter-spacing: 3px;
}

.style3-blog {
  margin-bottom: 40px;
}

.be-button-wrap {
  display: inline-block;
  margin: 0 20px 10px 0;
}

.be-button-wrap.align-block {
  display: block;
  margin: 0 0 40px 0;
}

.be-button {
  display: inline-block;
  text-decoration: none;
  text-transform: uppercase;
  border-color: transparent;
  transition: 0.3s linear all !important;
  -webkit-transition: 0.3s linear all !important;
  -moz-transition: 0.3s linear all !important;
  -ms-transition: 0.3s linear all !important;
  -o-transition: 0.3s linear all !important;
}

.be-buttton-wrap.block-center .be-button {
  margin: 0px 0px 10px 0;
}

.be-buttton-wrap.block-center .font-icon {
  margin-right: 0px;
}

p .be-button {
  margin-bottom: 0;
}

.be-button.rounded {
  border-radius: 3px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
}

.be-button i {
  margin-right: 1em;
}

.icon-shortcode {
  margin-bottom: 10px;
}

.be-button-wrap.block-left {
  text-align: left;
}

.be-button-wrap.block-center {
  text-align: center;
}

.be-button-wrap.block-right {
  text-align: right;
}

.be-button-wrap.block-right a.be-button {
  margin-right: 0px;
}

.action-content {
  display: inline;
  margin-bottom: 0;
  line-height: 47px;
  margin-right: 40px;
}

.action-button {
  position: relative;
  top: -4px;
}

.carousel-wrap {
  position: relative;
  margin-bottom: 50px;
}

.be-carousel {
  margin: 0;
  padding: 0;
  list-style: none;
  display: block;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
  filter: alpha(opacity=0);
  -moz-opacity: 0;
  -khtml-opacity: 0;
  opacity: 0;
  height: 0px;
  overflow: hidden;
  -webkit-transition: opacity 0.3s ease-in, height 0.3s ease-in;
  -moz-transition: opacity 0.3s ease-in, height 0.3s ease-in;
  -o-transition: opacity 0.3s ease-in, height 0.3s ease-in;
  -ms-transition: opacity 0.3s ease-in, height 0.3s ease-in;
  transition: opacity 0.3s ease-in, height 0.3s ease-in;
}

.be-carousel li {
  float: left;
  margin: 0px 10px;
  display: block;
  position: relative;
}

.portfolio-carousel .be-carousel li {
  margin: 0px 0px;
}

.client-carousel li a {
  display: block;
  text-align: center;
  line-height: 120px;
}

.portfolio-carousel .be-carousel li img {
  width: 100%;
  max-width: 100%;
}

.client-carousel li img {
  vertical-align: middle;
  height: auto !important;
}

.be-carousel-nav {
  position: absolute;
  top: 50%;
  width: 35px;
  height: 35px;
  line-height: 35px;
  font-size: 16px;
  margin-top: -18px;
  text-align: center;
  -webkit-transition: all .6s ease;
  -moz-transition: all .6s ease;
  -o-transition: all .6s ease;
  transition: all .6s ease;
  background: none !important;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  color: #fff !important;
  border: 2px solid #fff;
  display: none;
  opacity: 0;
  -moz-opacity: 0;
}

.portfolio-carousel .be-carousel-nav.prev {
  margin-left: 20px;
}

.portfolio-carousel .be-carousel-nav.next {
  margin-right: 20px;
}

.be-wrap .carousel-wrap .be-carousel-nav.prev {
  left: -44px;
}

.be-wrap .carousel-wrap .be-carousel-nav.next {
  right: -44px;
}

.carousel-wrap .be-carousel-nav.prev, .be-wrap .carousel-wrap.portfolio-carousel .be-carousel-nav.prev {
  left: 0;
  margin-left: 10px;
}

.carousel-wrap .be-carousel-nav.next, .be-wrap .carousel-wrap.portfolio-carousel .be-carousel-nav.next {
  right: 0px;
  margin-right: 10px;
}

.prev:hover, .next:hover {
  transform: scale(1.2);
  -webkit-transform: scale(1.2);
  -moz-transform: scale(1.2);
  -o-transform: scale(1.2);
}

.be-carousel-nav.background--light {
  border-color: #000;
  color: #000 !important;
}

.dropcap .font-icon:before {
  width: auto;
  margin: 0;
}

.dropcap-circle, .dropcap-letter, .dropcap-icon, .dropcap-rounded {
  float: left;
  text-transform: uppercase;
}

.dropcap-circle.small, .dropcap-rounded.small {
  margin-top: 3px;
  font-size: 19px;
  line-height: 50px;
  margin: 0 20px 5px 0;
  width: 50px;
  height: 50px;
  text-align: center;
}

.dropcap-circle {
  border-radius: 50%;
}

.dropcap-rounded {
  border-radius: 3px;
}

.dropcap-letter {
  font-size: 35px;
  margin: 15px 10px 0 0;
}

.dropcap-letter.small {
  font-size: 24px;
  margin: 15px 15px 0 0;
}

.dropcap-circle.big, .dropcap-rounded.big {
  margin-top: 5px;
  font-size: 26px;
  line-height: 70px;
  width: 70px;
  height: 70px;
  margin-right: 20px;
  text-align: center;
}

.dropcap-circle, .dropcap-rounded {
  color: #fff;
}

.gallery-slider-wrap {
  position: fixed;
  width: 100%;
  height: 100%;
  background: #fff;
  top: 0px;
  left: -100%;
  z-index: 15;
  opacity: 0;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
  filter: alpha(opacity=0);
  -moz-opacity: 0;
  -khtml-opacity: 0;
  opacity: 0;
  -webkit-transition: left 0.3s ease-in, opacity 0.3s ease-in;
  -moz-transition: left 0.3s ease-in, opacity 0.3s ease-in;
  -o-transition: left 0.3s ease-in, opacity 0.3s ease-in;
  -ms-transition: left 0.3s ease-in, opacity 0.3s ease-in;
  transition: left 0.3s ease-in, opacity 0.3s ease-in;
}

a.no-link {
  cursor: default;
}

.overflow-hidden {
  overflow: hidden !important;
}

.gallery-slider-content, #gallery-container-wrap, #gallery-container {
  position: relative;
  width: 100%;
  height: 100%;
}

#gallery-container-wrap {
  overflow-x: hidden;
  overflow-y: hidden;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
  filter: alpha(opacity=0);
  -moz-opacity: 0;
  -khtml-opacity: 0;
  opacity: 0;
  transition: opacity 1s ease;
}

#gallery-container {
  white-space: nowrap !important;
  word-wrap: normal;
  font-size: 0;
}

#gallery-container .placeholder {
  width: 100%;
  height: 100%;
  display: inline-block;
  zoom: 1;
  text-align: center;
  position: relative;
}

#gallery-container .placeholder img {
  display: inline-block;
  height: auto;
  width: auto;
  max-height: 100%;
  max-width: 100%;
  vertical-align: middle;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
  filter: alpha(opacity=0);
  -moz-opacity: 0;
  -khtml-opacity: 0;
  opacity: 0;
  display: none;
  -webkit-transition: opacity 0.5s ease-in;
  -moz-transition: opacity 0.5s ease-in;
  -o-transition: opacity 0.5s ease-in;
  -ms-transition: opacity 0.5s ease-in;
  transition: opacity 0.5s ease-in;
}

#gallery-container .placeholder.style1_placehloder {
  width: auto;
  position: relative;
  vertical-align: top;
  height: 100%;
  height: 100% !important;
}

#gallery-container .placeholder.style1_placehloder img {
  height: 100%;
  max-width: none;
}

#gallery-container .placeholder.center {
  vertical-align: top;
}

#gallery-container .placeholder.center .fluid-width-video-wrapper iframe {
  width: 100%!important;
}

.portfolio-item-overlay, .overlay_placeholder {
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  background: #000;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=80)";
  filter: alpha(opacity=80);
  -moz-opacity: 0.8;
  -khtml-opacity: 0.8;
  opacity: 0.8;
  z-index: 1;
}

.placeholder .fluid-width-video-wrapper {
  display: inline-block !important;
  vertical-align: top !important;
  padding: 0px !important;
  margin: 0px !important;
  height: 100% !important;
}

.fluid-width-video-wrapper {
  width: 100%;
  position: relative;
  padding: 0;
}

.fluid-width-video-wrapper, .image-wrap {
  margin-bottom: 40px;
}

.fluid-width-video-wrapper, .fluid-width-video-wrapper iframe, .fluid-width-video-wrapper object, .fluid-width-video-wrapper embed {
  max-width: 100%;
}

.placeholder .fluid-width-video-wrapper iframe.gallery {
  position: relative !important;
  height: 100% !important;
}

#gallery-container .placeholder.center img {
  -webkit-backface-visibility: hidden;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  display: block;
  max-width: none;
  max-height: none;
}

.arrow_prev, .arrow_next, .single_portfolio_info_close, .single_portfolio_close {
  position: absolute;
  top: 50%;
  cursor: pointer;
  z-index: 10;
  margin-top: -20px;
}

.arrow_prev {
  left: 40px;
}

.arrow_next {
  right: 40px;
}

.arrow_next .font-icon, .arrow_prev .font-icon, .single_portfolio_close .font-icon, .single_portfolio_info_close .font-icon, .single_portfolio_back .font-icon {
  display: inline-block;
  text-align: center;
  color: #fff;
  line-height: 38px;
  width: 38px;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border: 2px solid #fff;
  font-size: 14px;
  -webkit-user-select: none;
}

.gallery_content {
  position: absolute;
  top: 0px;
  width: 340px;
  background: #fff;
  word-break: break-word;
  z-index: 3;
  height: 100%;
  left: -340px;
  -webkit-transition: left 0.3s ease;
  -moz-transition: left 0.3s ease;
  -o-transition: left 0.3s ease;
  -ms-transition: left 0.3s ease;
  transition: left 0.3s ease;
}

.gallery_content.show {
  left: 0px;
}

.single_portfolio_info_close {
  right: -40px;
  top: 40px;
}

.single_portfolio_info_close .font-icon {
  border-radius: 0px;
  border: 0px;
  font-size: 16px;
  background: #000;
  padding: 1px 2px 0px 0px;
}

.single_portfolio_close {
  right: 40px;
  top: 60px;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
}

.single_portfolio_close .font-icon {
  font-size: 16px;
}

.single_portfolio_close:hover {
  -webkit-transform: rotate(90deg);
  -moz-transform: rotate(90deg);
  -o-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  transform: rotate(90deg);
}

.arrow_next, .arrow_prev {
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
}

.arrow_next:hover, .arrow_prev:hover {
  transform: scale(1.2);
  -webkit-transform: scale(1.2);
  -moz-transform: scale(1.2);
  -o-transform: scale(1.2);
}

.post-title.gallery-title {
  font-size: 16px;
  text-transform: uppercase;
  color: #000;
  letter-spacing: 2px;
  margin-bottom: 15px;
}

.gallery_scrollable_content {
  margin-bottom: 50px;
}

.gallery_content_area .post-header {
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.gallery_content_area .post-header i {
  margin-right: 20px;
}

.gallery_content_area .post-header li {
  margin-bottom: 10px;
}

.gallery_content_area, .gallery_content_area_wrap {
  height: 100%;
  max-height: 100%;
}

.gallery_content_area_wrap {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding: 30px;
}

.gallery_content .be-section-pad {
  padding: 0 !important;
}

.icon-shortcode .font-icon {
  display: inline-block !important;
  text-align: center;
  margin-right: 10px;
  font-family: "be-themes";
  margin-bottom: 10px;
  transition: 0.3s linear all !important;
  -webkit-transition: 0.3s linear all !important;
  -moz-transition: 0.3s linear all !important;
  -ms-transition: 0.3s linear all !important;
  -o-transition: 0.3s linear all !important;
}

.font-icon.small {
  font-size: 13px;
}

.font-icon.medium {
  font-size: 24px;
}

.font-icon.large {
  font-size: 42px;
}

.font-icon.small {
  width: 35px;
  height: 35px;
  line-height: 35px;
}

.font-icon.medium {
  height: 70px;
  line-height: 70px;
  width: 70px;
}

.font-icon.large {
  width: 100px;
  height: 100px;
  line-height: 100px;
}

.font-icon.small.plain {
  font-size: 30px;
}

.font-icon.medium.plain {
  font-size: 35px;
}

.font-icon.large.plain {
  font-size: 50px;
}

.font-icon.large.plain, .font-icon.medium.plain, .font-icon.small.plain {
  width: 1.5em;
  height: 1em;
  line-height: 1em;
}

.circle {
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
}

.icon-shortcode.block-center, .icon-shortcode.block-center, .icon-shortcode.block-right {
  display: block;
  margin-bottom: 30px;
}

.icon-shortcode.block-left {
  text-align: left;
}

.icon-shortcode.block-center {
  text-align: center;
}

.icon-shortcode.block-right {
  text-align: right;
}

.custom-list {
  list-style: none;
  padding: 0;
}

.custom-list .font-icon {
  font-size: 13px;
  width: 25px;
  height: 25px;
  line-height: 25px;
  border-radius: 50%;
  text-align: center;
  position: absolute;
  left: 0px;
  top: 0px;
  display: block;
}

.custom-list-content {
  margin-bottom: 15px;
  width: auto;
  line-height: 25px;
  position: relative;
}

.custom-list-content-inner {
  padding-left: 40px;
  display: inline-block;
}

.be-notification {
  margin-bottom: 20px;
}

#be-pb-main .be-shortcode, #be-pb-main .be-notification {
  margin-bottom: 0;
}

.success, .wpcf7-response-output.wpcf7-mail-sent-ok {
  background: #26cda4;
  color: #000;
}

.error, .wpcf7-response-output.wpcf7-validation-errors {
  background: #dd6868;
  color: #fff;
}

.be-notification, .wpcf7-response-output.wpcf7-validation-errors, .wpcf7-response-output.wpcf7-mail-sent-ok {
  cursor: default;
  line-height: 20px;
  margin-bottom: 20px;
  padding: 17px 30px 17px 20px;
  border: none;
  text-align: center;
  position: relative;
  border-radius: 2px;
}

.be-notification span.close {
  cursor: pointer;
  margin-top: -7px;
  position: absolute;
  right: 20px;
  top: 50%;
  line-height: 14px;
  width: 15px;
  height: 15px;
  font-size: 14px;
  color: #fff;
}

.pricing-table {
  list-style: none;
  padding: 0;
  border-bottom: none !important;
  background: #fff;
}

.pricing-table li {
  margin: 0;
  padding: 15px;
  text-align: center;
}

.pricing-table li.pricing-button {
  padding: 20px 15px;
}

.pricing-button .button {
  margin: 0;
}

.pricing-price {
  padding: 30px 15px;
}

li.pricing-feature {
  padding: 15px 0;
}

.pricing-table .price {
  font-size: 40px;
  line-height: 50px;
  display: inline-block;
}

.pricing-table .currency {
  font-size: 20px;
}

.pricing-table .pricing-duration {
  display: block;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 13px;
}

.pricing-table.highlight-yes {
  margin-top: -15px;
}

.pricing-table.highlight-yes .pricing-title, .pricing-table.highlight-yes .pricing-button {
  padding: 25px 15px;
}

.related-items {
  margin-bottom: 60px;
}

.related-items .post-nav, .related-items .post-nav h6 {
  margin-bottom: 0;
  padding: 0;
}

.related-items .column-block {
  margin-bottom: 0;
}

.services {
  margin: 0 auto;
  max-width: 700px;
  overflow: hidden;
  list-style: none;
  padding: 0;
  position: relative;
  list-style-type: none;
  opacity: 0;
  position: relative;
}

.service.even {
  float: left;
  padding: 0px 60% 0 0;
}

.service {
  float: right;
  margin: 0 0 10px;
  padding: 0 0 0 60%;
  position: relative;
}

.service .font-icon {
  position: absolute;
  top: 0px;
  display: block;
  right: 50%;
  margin-right: -22px;
  background: #000;
  color: #fff;
  padding: 0px 12px;
  border-radius: 50%;
  z-index: 1;
  line-height: 44px;
  -webkit-transition: background 500ms ease, color 500ms ease;
  -moz-transition: background 500ms ease, color 500ms ease;
  -ms-transition: background 500ms ease, color 500ms ease;
  -o-transition: background 500ms ease, color 500ms ease;
  transition: background 500ms ease, color 500ms ease;
}

.service .font-icon.icon-size-large {
  line-height: 84px;
  margin-right: -42px;
  font-size: 30px;
  padding: 0px 21px;
}

.service .font-icon.icon-size-medium {
  line-height: 68px;
  margin-right: -34px;
  font-size: 20px;
  padding: 0px 20px;
}

.services-outer-wrap span.timeline {
  position: absolute;
  top: 0px;
  right: 50%;
  display: block;
  background: #000;
  height: 100%;
  width: 1px;
  margin-right: -0.5px;
}

.services-outer-wrap {
  position: relative;
}

.service.odd, .service.even {
  margin-bottom: 30px;
}

.skill-bar {
  background: #e2e2e2;
  border-radius: 3px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  height: 30px;
  margin-bottom: 20px;
  position: relative;
}

.expand {
  height: 30px;
  line-height: 30px;
  position: absolute;
  top: 0;
  left: 0;
  width: 0px;
  border-radius: 3px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  transition: all 0.7s linear !important;
}

.skill_name {
  margin-bottom: 5px;
}

.special-heading.align-center {
  text-align: center;
}

.special-heading .separator {
  margin-bottom: 40px;
  width: 15% !important;
  height: 2px;
}

.special-heading .sub-title {
  font-size: 20px;
}

.special-heading.align-left .separator {
  margin: 0;
}

.special-heading-wrap.style2 .separator {
  margin-bottom: 20px;
}

html body .be-section .be-row .special-heading-wrap.style3 .special-h-tag {
  margin-bottom: 20px !important;
}

.be-section .be-row:not(:last-child) .column-block .special-h-tag:last-child {
  margin-bottom: 20px !important;
}

.special-heading-wrap.style3 .caption-wrap {
  text-align: center;
  position: relative;
}

.special-heading-wrap.style3 .caption {
  padding: 0 15px;
  display: inline-block;
  position: relative;
}

.special-heading-wrap.style3 .caption .caption-inner {
  background: #ddd;
}

.special-heading-wrap.style3 .caption .caption-inner:before, .special-heading-wrap.style3 .caption .caption-inner:after {
  content: "";
  position: absolute;
  display: inline-block;
  height: 1px;
  width: 100px;
  left: -100px;
  top: 50%;
  background: inherit;
  margin-top: -1px;
}

.special-heading-wrap.style3 .caption .caption-inner:after {
  right: -100px;
  left: auto;
}

.be-section .be-row:not(:last-child) .column-block .special-heading-wrap.style3 h6.caption:last-child {
  margin-bottom: 0 !important;
}

.tabs {
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
  filter: alpha(opacity=0);
  -moz-opacity: 0;
  -khtml-opacity: 0;
  opacity: 0;
  -webkit-transition: opacity 0.3s ease-in;
  -moz-transition: opacity 0.3s ease-in;
  -o-transition: opacity 0.3s ease-in;
  -ms-transition: opacity 0.3s ease-in;
  transition: opacity 0.3s ease-in;
}

.ui-tabs {
  position: relative;
  margin-bottom: 50px;
}

.ui-tabs .ui-tabs-nav {
  margin: 0;
  padding: 0;
}

.ui-tabs .ui-tabs-nav li {
  list-style: none;
  float: left;
  position: relative;
  top: 0;
  padding: 0;
  margin: 0;
  white-space: nowrap;
}

.ui-tabs .ui-tabs-nav li a {
  float: left;
  padding: 10px 15px;
  text-decoration: none;
  outline: 0;
  border: 1px solid;
  border-left: none;
}

.ui-tabs .ui-tabs-nav li:first-child a {
  border-left: 1px solid;
}

.ui-tabs .ui-tabs-panel p:last-child {
  margin-bottom: 0px;
}

.ui-tabs .ui-tabs-nav li.ui-tabs-selected a, .ui-tabs .ui-tabs-nav li.ui-state-disabled a, .ui-tabs .ui-tabs-nav li.ui-state-processing a {
  cursor: text;
}

.ui-tabs .ui-tabs-nav li a, .ui-tabs.ui-tabs-collapsible .ui-tabs-nav li.ui-tabs-selected a {
  cursor: pointer;
}

.tabs li a.tab-icon:before {
  font-size: 15px;
  width: 25px;
  text-align: left;
}

.ui-tabs .ui-tabs-panel {
  display: block;
  border-width: 0;
  border: 1px solid;
  margin-top: -1px;
  padding: 25px;
}

.ui-tabs .ui-tabs-panel p {
  width: 100%;
}

.testimonial_slide {
  text-align: center;
  font-size: 18px;
  line-height: 35px;
}

.testimonial-author {
  margin-top: 25px;
  font-size: 13px;
  display: block;
  letter-spacing: 3px;
  text-transform: uppercase;
}

.testimonial_author_position {
  margin-right: 10px;
}

.testimonial_controller_wrap {
  list-style: none;
  text-align: center;
  margin-top: 20px;
}

.testimonial_controller_wrap li {
  display: inline-block;
  line-height: 15px;
  zoom: 1;
  margin-right: 6px;
  margin-bottom: 0;
}

.testimonial_controller {
  display: block;
  overflow: hidden;
  position: relative;
  width: 15px;
  -webkit-font-smoothing: antialiased;
}

.testimonial_controller span:before {
  font-family: "be-themes";
  content: '\e924';
  display: inline-block;
  width: 10px;
  height: 10px;
  line-height: 10px;
  font-size: 10px;
}

.testimonial_controller.active span:before {
  content: '\e923';
  width: 13px;
  height: 13px;
  line-height: 13px;
  font-size: 13px;
}

.testimonials_wrap img {
  margin-bottom: 30px;
}

.testimonials_wrap .flex-control-nav.flex-control-paging {
  position: relative !important;
  top: 0px;
  margin: 0px;
  display: block !important;
  opacity: 1 !important;
}

.testimonials_wrap .flex-viewport {
  margin-bottom: 40px;
}

span.subtitle {
  font-size: 11px;
}

.section-skew {
  -webkit-transform: skewY(-4deg);
  -moz-transform: skewY(-4deg);
  -ms-transform: skewY(-4deg);
  -o-transform: skewY(-4deg);
  transform: skewY(-4deg);
  -webkit-transform-origin: 0 0;
  -moz-transform-origin: 0 0;
  -ms-transform-origin: 0 0;
  -o-transform-origin: 0 0;
  transform-origin: 0 0;
  overflow: visible;
}

.section-skew-normal {
  -webkit-transform: skewY(4deg);
  -moz-transform: skewY(4deg);
  -ms-transform: skewY(4deg);
  -o-transform: skewY(4deg);
  transform: skewY(4deg);
  -webkit-transform-origin: 0 0;
  -moz-transform-origin: 0 0;
  -ms-transform-origin: 0 0;
  -o-transform-origin: 0 0;
  transform-origin: 0 0;
}

.title-icon {
  display: inline-block;
  text-align: center;
  float: left;
  margin-right: 30px;
  position: relative;
}

.title-icon.align-right {
  float: right;
  margin-left: 30px;
  margin-right: 0px;
}

.title-icon.circled {
  border: 1px solid;
  border-radius: 50px;
  -moz-border-radius: 50px;
  -webkit-border-radius: 50px;
}

.title-icon.small {
  font-size: 21px;
  width: 30px;
  height: 30px;
  line-height: 30px;
  margin-right: 20px;
}

.title-icon.medium {
  width: 70px;
  height: 70px;
  line-height: 70px;
  font-size: 28px;
}

.title-icon.medium.plain {
  width: 30px;
  height: 30px;
  line-height: 30px;
  font-size: 28px;
}

.title-with-icon {
  padding-left: 80px;
  margin-bottom: 50px;
}

.title-with-icon.small.plain {
  padding-left: 50px;
}

.title-icon.small.circled {
  width: 45px;
  height: 45px;
  line-height: 45px;
}

.title-with-icon.small {
  padding-left: 70px;
}

.title-with-icon.small.align-right {
  padding-right: 70px;
}

.title-icon.small.align-right {
  margin-left: 20px;
}

.title-with-icon.medium {
  padding-left: 100px;
}

.title-with-icon.medium.plain {
  padding-left: 60px;
}

.title-with-icon.align-right {
  padding-right: 80px;
}

.title-with-icon.small.plain.align-right {
  padding-right: 50px;
}

.title-with-icon.medium.align-right {
  padding-right: 100px;
}

.title-with-icon.medium.plain.align-right {
  padding-right: 60px;
}

.title-with-icon.align-right, .title-with-icon.small.plain.align-right, .title-with-icon.medium.align-right, .title-with-icon.medium.plain.align-right {
  padding-left: 0px;
  text-align: right;
}

.team-title {
  margin-bottom: 0px;
}

.team_icons {
  font-size: 13px;
  margin: 0 5px;
  color: inherit;
}

.team-img {
  margin-bottom: 20px;
}

.team_icons i {
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  display: inline-block;
  border: 1px solid;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
}

.isotope, .isotope .isotope-item {
  -webkit-transition-duration: 0.8s;
  -moz-transition-duration: 0.8s;
  -ms-transition-duration: 0.8s;
  -o-transition-duration: 0.8s;
  transition-duration: 0.8s;
}

.isotope {
  -webkit-transition-property: height, width;
  -moz-transition-property: height, width;
  -ms-transition-property: height, width;
  -o-transition-property: height, width;
  transition-property: height, width;
}

.isotope .isotope-item {
  -webkit-transition-property: -webkit-transform, opacity;
  -moz-transition-property: -moz-transform, opacity;
  -ms-transition-property: -ms-transform, opacity;
  -o-transition-property: top, left, opacity;
  transition-property: transform, opacity;
}

.isotope.no-transition, .isotope.no-transition .isotope-item, .isotope .isotope-item.no-transition {
  -webkit-transition-duration: 0s;
  -moz-transition-duration: 0s;
  -ms-transition-duration: 0s;
  -o-transition-duration: 0s;
  transition-duration: 0s;
}

.element {
  float: left;
  margin: 0px 0px 40px 0px;
  overflow: hidden;
}

.two-col .element {
  width: 560px;
}

.three-col .element {
  width: 360px;
}

.three-col .element.wide {
  width: 760px;
}

.four-col .element {
  width: 260px;
}

.four-col .element.wide {
  width: 560px;
}

.full-screen .element {
  width: 19.97%;
  margin: 0px;
}

.full-screen.three-col .element {
  width: 33.34%;
}

.full-screen.three-col .element.wide {
  width: 66.7%;
}

.full-screen.four-col .element {
  width: 25%;
}

.full-screen.four-col .element.wide {
  width: 50%;
}

.full-screen.five-col .element {
  width: 20%;
}

.full-screen.five-col .element.wide {
  width: 40%;
}

.full-screen-gutter {
  margin-right: 40px;
}

.full-screen-gutter .element .element-inner {
  margin-left: 40px;
}

.full-screen-gutter .element {
  margin-bottom: 40px;
}

.element img {
  width: 100%;
}

.portfolio {
  margin-bottom: 50px;
}

.portfolio-container {
  width: 100%;
  overflow: hidden;
}

.portfolio-container .element:last-child, .full-screen.full-screen-gutter .portfolio-container .element {
  margin-bottom: 40px !important;
}

.full-screen .portfolio-container .element {
  margin-bottom: 0px !important;
}

.portfolio-container .thumb-overlay .thumb-icons i {
  line-height: 38px;
  display: block;
}

.portfolio-categories {
  list-style: none;
  padding: 0;
  margin-bottom: 10px;
}

.portfolio-categories li {
  float: left;
  margin-right: 10px;
  margin-bottom: 0;
}

.portfolio-title {
  margin-bottom: 0;
}

.portfolio-title h6 {
  margin-bottom: 5px;
}

.portfolio-title a {
  display: block;
}

.portfolio-content {
  margin-bottom: 20px;
}

.element .one-half, .element .be-button, .element img {
  margin-bottom: 0;
}

.element .be-row, .portfolio.one-col .element {
  margin-bottom: 50px;
}

.three-col .portfolio-title, .four-col .portfolio-title, .two-col .portfolio-title, .related-items .portfolio-title {
  padding: 5px 5px 5px 0;
  margin: 12px 1px 1px !important;
}

.portfolio-content-wrap {
  padding-left: 10px;
}

.portfolio-ovelay-icon {
  color: #fff;
  background: url("/assets/modern/img/plus_icon.png") no-repeat;
  width: 50px;
  height: 50px;
  display: inline-block;
}

.trigger_load_more {
  margin: 50px 0 0 40px;
  text-align: center;
}

.portfolio .pagination_parent {
  margin-top: 40px;
}

.thumb-wrap {
  display: block;
}

.thumb-wrap, .thumb-bg {
  position: relative;
}

.thumb-overlay {
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: none;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding: 10px;
}

.thumb-bg {
  width: 100%;
  height: 100%;
  display: table;
}

.thumb-bg .thumb-icons {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}

.thumb-title {
  text-align: center;
  display: table-cell;
  vertical-align: middle;
  font-size: 20px;
  color: #000;
  font-weight: bold;
}

.popup-gallery {
  display: none;
}

.thumb-bg.act-table {
  display: table
}

.thumb-icons a {
  margin-right: 10px;
  padding: 6px 5px 4px 5px;
  display: inline-block;
  border-radius: 50%;
}

.thumb-icons .font-icon {
  font-size: 16px;
}

.filters .sort {
  padding: 5px 18px 5px 20px;
  cursor: pointer;
  display: inline-block;
}

.filters {
  text-transform: uppercase;
  margin-bottom: 50px;
  font-size: 12px;
  text-align: center;
}

.filters h6 {
  font-weight: 400;
  letter-spacing: 2px;
  font-size: 11px;
  text-transform: uppercase;
  margin-right: 5px;
  margin-bottom: 0;
  display: inline-block;
}

.filters .current_choice {
  border-radius: 3px;
  border: 1px solid;
}

.bubblingG {
  text-align: center;
  width: 50px;
  height: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
  margin: -15px 0px 0px -24px;
  display: none;
  overflow: hidden;
}

.bubblingG span {
  display: inline-block;
  vertical-align: middle;
  width: 6px;
  height: 6px;
  margin: 15px auto;
  background: #3A8C35;
  -moz-border-radius: 30px;
  -moz-animation: bubblingG 0.4s infinite alternate;
  -webkit-border-radius: 30px;
  -webkit-animation: bubblingG 0.4s infinite alternate;
  -ms-border-radius: 30px;
  -ms-animation: bubblingG 0.4s infinite alternate;
  -o-border-radius: 30px;
  -o-animation: bubblingG 0.4s infinite alternate;
  border-radius: 30px;
  animation: bubblingG 0.4s infinite alternate;
}

#bubblingG_1 {
  -moz-animation-delay: 0s;
  -webkit-animation-delay: 0s;
  -ms-animation-delay: 0s;
  -o-animation-delay: 0s;
  animation-delay: 0s;
}

#bubblingG_2 {
  -moz-animation-delay: 0.12s;
  -webkit-animation-delay: 0.12s;
  -ms-animation-delay: 0.12s;
  -o-animation-delay: 0.12s;
  animation-delay: 0.12s;
}

#bubblingG_3 {
  -moz-animation-delay: 0.24s;
  -webkit-animation-delay: 0.24s;
  -ms-animation-delay: 0.24s;
  -o-animation-delay: 0.24s;
  animation-delay: 0.24s;
}

#bubblingG_1_1 {
  -moz-animation-delay: 0s;
  -webkit-animation-delay: 0s;
  -ms-animation-delay: 0s;
  -o-animation-delay: 0s;
  animation-delay: 0s;
}

#bubblingG_2_2 {
  -moz-animation-delay: 0.12s;
  -webkit-animation-delay: 0.12s;
  -ms-animation-delay: 0.12s;
  -o-animation-delay: 0.12s;
  animation-delay: 0.12s;
}

#bubblingG_3_3 {
  -moz-animation-delay: 0.24s;
  -webkit-animation-delay: 0.24s;
  -ms-animation-delay: 0.24s;
  -o-animation-delay: 0.24s;
  animation-delay: 0.24s;
}

@-moz-keyframes bubblingG {
  0% {
    width: 6px;
    height: 6px;
    background-color: #3A8C35;
    -moz-transform: translateY(0);
  }
  100% {
    width: 14px;
    height: 14px;
    background-color: #000000;
    -moz-transform: translateY(-13px);
  }
}

@-webkit-keyframes bubblingG {
  0% {
    width: 6px;
    height: 6px;
    background-color: #3A8C35;
    -webkit-transform: translateY(0);
  }
  100% {
    width: 14px;
    height: 14px;
    background-color: #000000;
    -webkit-transform: translateY(-13px);
  }
}

@-ms-keyframes bubblingG {
  0% {
    width: 6px;
    height: 6px;
    background-color: #3A8C35;
    -ms-transform: translateY(0);
  }
  100% {
    width: 14px;
    height: 14px;
    background-color: #000000;
    -ms-transform: translateY(-13px);
  }
}

@-o-keyframes bubblingG {
  0% {
    width: 6px;
    height: 6px;
    background-color: #3A8C35;
    -o-transform: translateY(0);
  }
  100% {
    width: 14px;
    height: 14px;
    background-color: #000000;
    -o-transform: translateY(-13px);
  }
}

@keyframes bubblingG {
  0% {
    width: 6px;
    height: 6px;
    background-color: #3A8C35;
    transform: translateY(0);
  }
  100% {
    width: 14px;
    height: 14px;
    background-color: #000000;
    transform: translateY(-13px);
  }
}

.page-loader {
  position: fixed;
  z-index: 10;
}

.carousel_bar_area {
  position: absolute;
  bottom: 0px;
  min-width: 70%;
  width: 316px;
  left: 0px;
  right: 0px;
  margin: 0 auto;
  text-align: center;
  min-height: 35px;
  display: block;
  height: 100px;
  overflow: hidden;
  z-index: 5;
  background: url("/assets/modern/images/dots.png") no-repeat center;
}

.carousel_bar_wrap {
  position: absolute;
  bottom: -300px;
  max-width: 100%;
  margin: 0 auto;
  right: 0px;
  left: 0px;
  margin-bottom: 20px;
}

.carousel_bar {
  position: relative;
}

.elastislide-list {
  list-style-type: none;
  display: none;
}

.no-js .elastislide-list {
  display: block;
}

.elastislide-carousel ul li {
  min-width: 20px;
}

.elastislide-wrapper {
  position: relative;
  margin: 0 auto;
  min-height: 36px;
}

.elastislide-wrapper.elastislide-loading {
  background-image: url("/assets/modern/img/default/preloader.gif");
  background-repeat: no-repeat;
  background-position: center center;
}

.elastislide-horizontal {
  padding: 0px;
}

.elastislide-vertical {
  padding: 40px 10px;
}

.elastislide-carousel {
  overflow: hidden;
  position: relative;
}

.elastislide-carousel ul {
  position: relative;
  display: block;
  list-style-type: none;
  padding: 0;
  margin: 0;
  -webkit-backface-visibility: hidden;
  -webkit-transform: translateX(0px);
  -moz-transform: translateX(0px);
  -ms-transform: translateX(0px);
  -o-transform: translateX(0px);
  transform: translateX(0px);
}

.elastislide-horizontal ul {
  white-space: nowrap;
}

.elastislide-carousel ul li {
  margin: 0;
  -webkit-backface-visibility: hidden;
}

.elastislide-horizontal ul li {
  height: 100%;
  display: inline-block;
  margin: 0px 2px;
}

.elastislide-vertical ul li {
  display: block;
}

.elastislide-carousel ul li a {
  display: inline-block;
  width: 100%;
}

.elastislide-carousel ul li a img {
  display: block;
  max-width: 100%;
}

.elastislide-wrapper nav span {
  position: absolute;
  width: 23px;
  height: 23px;
  cursor: pointer;
  opacity: 0.8;
  background: #000;
}

.elastislide-wrapper nav span:hover {
  opacity: 1.0
}

.elastislide-horizontal nav span {
  background-position: 7px 10px;
  top: 50%;
  left: 0px;
  margin-top: -10px!important;
  overflow: hidden;
}

.elastislide-vertical nav span {
  top: 10px;
  left: 50%;
  margin-left: -11px;
  background-position: -17px 5px;
}

.elastislide-horizontal nav span.elastislide-next {
  right: 0px;
  left: auto;
  background-position: 4px 2px;
  top: 50%;
  margin-top: -10px;
  overflow: hidden;
}

.elastislide-vertical nav span.elastislide-next {
  bottom: 10px;
  top: auto;
  background-position: -17px -18px;
}

.elastislide-horizontal nav span {
  width: 20px;
  height: 20px;
  line-height: 20px;
  font-size: 12px;
  margin: 0;
  background: none;
  color: #fff;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border: 2px solid #fff;
}

@media only screen and (min-width:960px) and (max-width:1279px) {
  .two-col .element {
    width: 470px;
  }
  .three-col .element {
    width: 300px;
  }
  .three-col .element.wide {
    width: 640px;
  }
  .four-col .element {
    width: 215px;
  }
  .four-col .element.wide {
    width: 470px;
  }
}

@media only screen and (min-width:768px) and (max-width:959px) {
  .call-to-action {
    padding: 30px 30px;
  }
  .action-content, .action-button {
    float: none;
  }
  .fullscreen-col .element {
    width: 33.4%;
  }
  .two-col .element, .three-col .element, .four-col .element {
    width: 350px;
  }
  .three-col .element.wide, .four-col .element.wide {
    width: 740px;
  }
  .full-screen .element, .full-screen.three-col .element, .full-screen.four-col .element, .full-screen.five-col .element {
    width: 33.4%;
  }
  .full-screen.three-col .element.wide, .full-screen.four-col .element.wide, .full-screen.five-col .element.wide {
    width: 66.7%;
  }
}

@media only screen and (max-width:767px) {
  .call-to-action {
    padding: 30px 0px;
  }
  ul.tabs li {
    width: 298px;
  }
  .action-content, .action-button {
    float: none;
  }
  .action-content {
    display: block;
    margin: 0 0 25px;
  }
  .portfolio-content-wrap {
    padding-left: 0px;
  }
  .related-items .column-block {
    margin-bottom: 40px;
  }
  .service {
    padding: 0px !important;
    margin-bottom: 30px;
    text-align: center !important;
  }
  .service .font-icon {
    position: relative;
    display: block;
    left: auto !important;
    right: auto !important;
    width: 18px;
    height: 42px;
    margin: 0 auto 10px;
  }
  .service .font-icon.icon-size-medium, .service .font-icon.icon-size-large {
    margin: 0 auto 10px;
    height: 60px;
    line-height: 60px;
    padding: 0px;
    width: 60px;
  }
  .services-outer-wrap span.timeline {
    display: none;
  }
  .three-col .element, .four-col .element, .two-col .element {
    width: 300px;
  }
  .full-screen .element, .full-screen.three-col .element, .full-screen.four-col .element, .full-screen.five-col .element {
    width: 100%!important;
  }
  .services .service * {
    text-align: center !important;
  }
  .services .service .font-icon {
    margin-bottom: 20px;
  }
}

@media only screen and (min-width:480px) and (max-width:767px) {
  ul.tabs li {
    width: 438px;
  }
  .three-col .element, .four-col .element, .two-col .element, .three-col .element.wide, .four-col .element.wide, .two-col .element.wide {
    width: 100%;
  }
  .full-screen .element, .full-screen.three-col .element, .full-screen.four-col .element, .full-screen.five-col .element {
    width: 50%!important;
  }
}

body {
  background-color: rgb(255, 255, 255);
  background-color: rgba(255, 255, 255, 1);
}

#header-inner-wrap, body.header-transparent #header #header-inner-wrap.no-transparent {
  background-color: rgb(255, 255, 255);
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
}

body.header-transparent #header #header-inner-wrap {
  -webkit-transition: background .25s ease, box-shadow .25s ease;
  -moz-transition: background .25s ease, box-shadow .25s ease;
  -o-transition: background .25s ease, box-shadow .25s ease;
  transition: background .25s ease, box-shadow .25s ease;
}

#content {
  background-color: rgb(255, 255, 255);
  background-color: rgba(255, 255, 255, 1);
}

#footer {
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 1);
}

.page-title-module-custom {
  background-color: rgb(232, 232, 232);
  background-color: rgba(232, 232, 232, 1);
  padding: 32px 0px;
}

#navigation .sub-menu, #mobile-menu, #mobile-menu ul {
  background-color: #141414;
}

.sb-slidebar {
  background-color: #141414;
}

body {
  color: #7e7e7e;
  line-height: 28px;
  letter-spacing: 0px;
  text-transform: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#navigation {
  color: #8D8D8D;
  line-height: 24px;
  letter-spacing: 2px;
  text-transform: uppercase;
  ;
}

.thumb-title, .full-screen-portfolio-overlay-title {
  color: #000000;
  line-height: 30px;
  letter-spacing: 3px;
  text-transform: uppercase;
  ;
}

#footer {
  color: #868686;
  line-height: 14px;
  letter-spacing: 0px;
  text-transform: none;
}

#navigation .sub-menu, #mobile-menu {
  color: #a2a2a2;
  line-height: 32px;
  letter-spacing: 1px;
  text-transform: uppercase;
}

#slidebar-menu {
  color: #a9a9a9;
  line-height: 50px;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.sb-slidebar .widget {
  color: #9f9f9f;
  line-height: 25px;
  letter-spacing: 0px;
  text-transform: none;
}

.sb-slidebar .widget h6 {
  color: #ffffff;
  line-height: 22px;
  letter-spacing: 2px;
  text-transform: uppercase;
}

#bottom-widgets .widget ul li a, #bottom-widgets a {
  color: inherit;
}

#bottom-widgets .widget ul li a:hover, #bottom-widgets a:hover {
  color: #21a3d4;
}

#mobile-menu a, #navigation .menu>ul>li.mega>ul>li {
  border-color: #303030;
}

#slidebar-menu a {
  border-color: #303030;
}

.page-title-module-custom .header-breadcrumb {
  line-height: 36px;
}

.ui-tabs .ui-tabs-nav li a, .ui-accordion .ui-accordion-header, .skill_name, .be-notification, .wpcf7-response-output.wpcf7-validation-errors, .wpcf7-response-output.wpcf7-mail-sent-ok {
  font-size: 11px;
  letter-spacing: 2px;
  text-transform: uppercase;
}

body #header-inner-wrap.top-animate #navigation, body #header-inner-wrap.top-animate .header-controls, body #header-inner-wrap.stuck #navigation, body #header-inner-wrap.stuck .header-controls {
  -webkit-transition: line-height 0.5s ease;
  -moz-transition: line-height 0.5s ease;
  -ms-transition: line-height 0.5s ease;
  -o-transition: line-height 0.5s ease;
  transition: line-height 0.5s ease;
}

.header-cart-controls .cart-contents {
  background: #141414;
}

.header-cart-controls .cart-contents {
  color: #ffffff;
}

.left-sidebar-page, .right-sidebar-page, .no-sidebar-page .be-section-pad:first-child, .page-template-page-940-php #content, .blog .no-sidebar-page #content-wrap, .portfolio-archives.no-sidebar-page #content-wrap {
  padding-top: 80px;
}

.left-sidebar-page .be-section:first-child, .right-sidebar-page .be-section:first-child, .dual-sidebar-page .be-section:first-child {
  padding-top: 0 !important;
}

.sec-bg {
  background-color: #efefef;
}

.sec-color, .post-meta a, .pagination a, .pagination span, .pages_list a {
  color: #555555;
}

.sec-border {
  border: 1px solid #dedede;
}

.separator {
  border: 0;
  height: 1px;
  color: #dedede;
  background-color: #dedede;
}

.alt-color, li.ui-tabs-active h6 a, #navigation a:hover, #header-top-menu a:hover, #navigation .current-menu-item>a, #slidebar-menu .current-menu-item>a, a, a:visited, .social_media_icons a:hover, .post-title a:hover, .fn a:hover, a.team_icons:hover, .recent-post-title a:hover, .widget_nav_menu ul li.current-menu-item a, .widget_nav_menu ul li.current-menu-item:before, .filters .current_choice, .woocommerce ul.cart_list li a:hover, .woocommerce ul.product_list_widget li a:hover, .woocommerce-page ul.cart_list li a:hover, .woocommerce-page ul.product_list_widget li a:hover, .woocommerce-page .product-categories li a:hover, .woocommerce ul.products li.product .product-meta-data h3:hover, .woocommerce table.cart a.remove:hover, .woocommerce #content table.cart a.remove:hover, .woocommerce-page table.cart a.remove:hover, .woocommerce-page #content table.cart a.remove:hover, td.product-name a:hover, .woocommerce-page #content .quantity .plus:hover, .woocommerce-page #content .quantity .minus:hover, .post-category a:hover {
  color: #21a3d4;
}

.post-title a:hover {
  color: #21a3d4 !important;
}

.alt-bg, input[type="submit"], .tagcloud a:hover, .pagination a:hover, .widget_tag_cloud a:hover, #navigation .sub-menu a:hover, .flex-direction-nav a:hover, .pagination .current, #navigation .sub-menu .current-menu-item>a {
  background-color: #21a3d4;
  transition: 0.2s linear all;
}

.mejs-controls .mejs-time-rail .mejs-time-current, .mejs-controls .mejs-horizontal-volume-slider .mejs-horizontal-volume-current, .woocommerce span.onsale, .woocommerce-page span.onsale, .woocommerce a.add_to_cart_button.button.product_type_simple.added, .woocommerce-page .widget_shopping_cart_content .buttons a.button:hover, .woocommerce nav.woocommerce-pagination ul li span.current, .woocommerce nav.woocommerce-pagination ul li a:hover, .woocommerce nav.woocommerce-pagination ul li a:focus, .woocommerce .button.alt, .woocommerce-page #respond input#submit.alt, .woocommerce .button.alt:hover, .woocommerce-page #respond input#submit.alt:hover, .woocommerce a.button:hover, .woocommerce input.button:hover, .woocommerce-page #content input.button.alt#place_order:hover, .testimonial-flex-slider .flex-control-paging li a.flex-active {
  background: #21a3d4 !important;
}

.tagcloud a:hover, .testimonial-flex-slider .flex-control-paging li a.flex-active, .testimonial-flex-slider .flex-control-paging li a {
  border-color: #21a3d4;
}

.thumb-bg {
  background-color: rgba(33, 163, 212, 0.85);
}

.photostream_overlay, .be-button {
  background-color: #21a3d4;
}

.alt-bg-text-color, input[type="submit"], .tagcloud a:hover, .pagination a:hover, .widget_tag_cloud a:hover, #navigation .sub-menu a:hover, #navigation .sub-menu .menu-item:hover:before, .pagination .current, #navigation .sub-menu .current-menu-item>a, .woocommerce nav.woocommerce-pagination ul li span.current, .woocommerce nav.woocommerce-pagination ul li a:hover, .woocommerce nav.woocommerce-pagination ul li a:focus {
  color: #ffffff !important;
  transition: 0.2s linear all;
}

.be-button {
  color: #ffffff;
  transition: 0.2s linear all;
}

.be-button:visited {
  color: #ffffff;
}

.portfolio-title a {
  color: inherit;
}

@media only screen and (max-width :767px) {
  #hero-section h1, .full-screen-section-wrap h1 {
    font-size: 30px;
    line-height: 40px;
  }
  #hero-section h2, .full-screen-section-wrap h2 {
    font-size: 25px;
    line-height: 35px;
  }
  #hero-section h4, .full-screen-section-wrap h4 {
    font-size: 16px;
    line-height: 30px;
  }
  #hero-section h5, .full-screen-section-wrap h5 {
    font-size: 16px;
    line-height: 30px;
  }
}

#navigation, .header-controls, .mobile-nav-controller-wrap {
  line-height: 135px;
}

body.header-transparent #header-inner-wrap #navigation, body.header-transparent #header-inner-wrap .header-controls, body.header-transparent #header-inner-wrap .mobile-nav-controller-wrap {
  line-height: 135px;
}

body #header-inner-wrap.top-animate #navigation, body #header-inner-wrap.top-animate .header-controls, body #header-inner-wrap.stuck #navigation, body #header-inner-wrap.stuck .header-controls {
  line-height: 115px;
}

@font-face {
  font-family: 'be-themes';
  src: url("/assets/modern/fonts/fontello/be-themes.woff") format('woff'), url("/assets/modern/fonts/fontello/be-themes.ttf") format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'icon2';
  src: url("/assets/modern/fonts/icon2/icon2.woff?97442462") format('woff'), url("/assets/modern/fonts/icon2/icon2.ttf?97442462") format('truetype');
  font-weight: normal;
  font-style: normal;
}

[class^="icon-"]:before, [class*=" icon-"]:before, ul.custom-list li:before {
  font-family: "icon2", "be-themes";
  font-style: normal;
  font-weight: normal;
  speak: none;
  display: inline-block;
  text-decoration: inherit;
  width: 1em;
  margin-right: .2em;
  text-align: center;
  font-variant: normal;
  text-transform: none;
  line-height: 1em;
  margin-left: .2em;
  -webkit-font-smoothing: antialiased !important;
}

.icon-spin1:before {
  content: '\e982';
}

.icon-wallet:before {
  content: '\e981';
}

.icon-spin5:before {
  content: '\e983';
}

.icon-note:before {
  content: '\e800';
}

.icon-note-beamed:before {
  content: '\e801';
}

.icon-music:before {
  content: '\e802';
}

.icon-search:before {
  content: '\e803';
}

.icon-flashlight:before {
  content: '\e804';
}

.icon-mail:before {
  content: '\e805';
}

.icon-heart:before {
  content: '\e806';
}

.icon-heart-empty:before {
  content: '\e807';
}

.icon-star:before {
  content: '\e808';
}

.icon-star-empty:before {
  content: '\e809';
}

.icon-user:before {
  content: '\e80a';
}

.icon-users:before {
  content: '\e80b';
}

.icon-user-add:before {
  content: '\e80c';
}

.icon-video:before {
  content: '\e80d';
}

.icon-picture:before {
  content: '\e80e';
}

.icon-camera:before {
  content: '\e80f';
}

.icon-layout:before {
  content: '\e810';
}

.icon-menu:before {
  content: '\e811';
}

.icon-check:before {
  content: '\e812';
}

.icon-cancel:before {
  content: '\e813';
}

.icon-cancel-circled:before {
  content: '\e814';
}

.icon-cancel-squared:before {
  content: '\e815';
}

.icon-plus:before {
  content: '\e816';
}

.icon-plus-circled:before {
  content: '\e817';
}

.icon-plus-squared:before {
  content: '\e818';
}

.icon-minus:before {
  content: '\e819';
}

.icon-minus-circled:before {
  content: '\e81a';
}

.icon-minus-squared:before {
  content: '\e81b';
}

.icon-help:before {
  content: '\e81c';
}

.icon-help-circled:before {
  content: '\e81d';
}

.icon-info:before {
  content: '\e81e';
}

.icon-info-circled:before {
  content: '\e81f';
}

.icon-back:before {
  content: '\e820';
}

.icon-home:before {
  content: '\e821';
}

.icon-link:before {
  content: '\e822';
}

.icon-attach:before {
  content: '\e823';
}

.icon-lock:before {
  content: '\e824';
}

.icon-lock-open:before {
  content: '\e825';
}

.icon-eye:before {
  content: '\e826';
}

.icon-tag:before {
  content: '\e827';
}

.icon-bookmark:before {
  content: '\e829';
}

.icon-bookmarks:before {
  content: '\e828';
}

.icon-flag:before {
  content: '\e82a';
}

.icon-thumbs-up:before {
  content: '\e82b';
}

.icon-thumbs-down:before {
  content: '\e82c';
}

.icon-download:before {
  content: '\e82d';
}

.icon-upload:before {
  content: '\e82e';
}

.icon-upload-cloud:before {
  content: '\e82f';
}

.icon-reply:before {
  content: '\e830';
}

.icon-reply-all:before {
  content: '\e831';
}

.icon-forward:before {
  content: '\e832';
}

.icon-quote:before {
  content: '\e833';
}

.icon-code:before {
  content: '\e834';
}

.icon-export:before {
  content: '\e835';
}

.icon-pencil:before {
  content: '\e836';
}

.icon-feather:before {
  content: '\e837';
}

.icon-print:before {
  content: '\e838';
}

.icon-retweet:before {
  content: '\e839';
}

.icon-keyboard:before {
  content: '\e83a';
}

.icon-comment:before {
  content: '\e83b';
}

.icon-chat:before {
  content: '\e83c';
}

.icon-bell:before {
  content: '\e83d';
}

.icon-attention:before {
  content: '\e83e';
}

.icon-alert:before {
  content: '\e83f';
}

.icon-vcard:before {
  content: '\e840';
}

.icon-address:before {
  content: '\e841';
}

.icon-location:before {
  content: '\e842';
}

.icon-map:before {
  content: '\e843';
}

.icon-direction:before {
  content: '\e844';
}

.icon-compass:before {
  content: '\e845';
}

.icon-cup:before {
  content: '\e846';
}

.icon-trash:before {
  content: '\e847';
}

.icon-doc:before {
  content: '\e848';
}

.icon-docs:before {
  content: '\e849';
}

.icon-doc-landscape:before {
  content: '\e84a';
}

.icon-doc-text:before {
  content: '\e84b';
}

.icon-doc-text-inv:before {
  content: '\e84c';
}

.icon-newspaper:before {
  content: '\e84d';
}

.icon-book-open:before {
  content: '\e84e';
}

.icon-book:before {
  content: '\e84f';
}

.icon-folder:before {
  content: '\e850';
}

.icon-archive:before {
  content: '\e851';
}

.icon-box:before {
  content: '\e852';
}

.icon-rss:before {
  content: '\e853';
}

.icon-phone:before {
  content: '\e854';
}

.icon-cog:before {
  content: '\e855';
}

.icon-tools:before {
  content: '\e856';
}

.icon-share:before {
  content: '\e857';
}

.icon-shareable:before {
  content: '\e858';
}

.icon-basket:before {
  content: '\e859';
}

.icon-bag:before {
  content: '\e85a';
}

.icon-calendar:before {
  content: '\e85b';
}

.icon-login:before {
  content: '\e85c';
}

.icon-logout:before {
  content: '\e85d';
}

.icon-mic:before {
  content: '\e85e';
}

.icon-mute:before {
  content: '\e85f';
}

.icon-sound:before {
  content: '\e860';
}

.icon-volume:before {
  content: '\e861';
}

.icon-clock:before {
  content: '\e862';
}

.icon-hourglass:before {
  content: '\e863';
}

.icon-lamp:before {
  content: '\e864';
}

.icon-light-down:before {
  content: '\e865';
}

.icon-light-up:before {
  content: '\e866';
}

.icon-adjust:before {
  content: '\e8ea';
}

.icon-block:before {
  content: '\e867';
}

.icon-resize-full:before {
  content: '\e868';
}

.icon-resize-small:before {
  content: '\e869';
}

.icon-popup:before {
  content: '\e86a';
}

.icon-publish:before {
  content: '\e86b';
}

.icon-window:before {
  content: '\e86c';
}

.icon-arrow-combo:before {
  content: '\e86d';
}

.icon-down-circled:before {
  content: '\e86e';
}

.icon-left-circled:before {
  content: '\e86f';
}

.icon-right-circled:before {
  content: '\e870';
}

.icon-up-circled:before {
  content: '\e871';
}

.icon-down-open:before {
  content: '\e872';
}

.icon-left-open:before {
  content: '\e873';
}

.icon-right-open:before {
  content: '\e874';
}

.icon-up-open:before {
  content: '\e875';
}

.icon-down-open-mini:before {
  content: '\e876';
}

.icon-left-open-mini:before {
  content: '\e877';
}

.icon-right-open-mini:before {
  content: '\e878';
}

.icon-up-open-mini:before {
  content: '\e879';
}

.icon-down-open-big:before {
  content: '\e8e9';
}

.icon-left-open-big:before {
  content: '\e87a';
}

.icon-right-open-big:before {
  content: '\e87b';
}

.icon-up-open-big:before {
  content: '\e87c';
}

.icon-down:before {
  content: '\e87d';
}

.icon-left:before {
  content: '\e87e';
}

.icon-right:before {
  content: '\e87f';
}

.icon-up:before {
  content: '\e880';
}

.icon-down-dir:before {
  content: '\e881';
}

.icon-left-dir:before {
  content: '\e882';
}

.icon-right-dir:before {
  content: '\e883';
}

.icon-up-dir:before {
  content: '\e884';
}

.icon-down-bold:before {
  content: '\e885';
}

.icon-left-bold:before {
  content: '\e886';
}

.icon-right-bold:before {
  content: '\e887';
}

.icon-up-bold:before {
  content: '\e888';
}

.icon-down-thin:before {
  content: '\e889';
}

.icon-left-thin:before {
  content: '\e88a';
}

.icon-right-thin:before {
  content: '\e88b';
}

.icon-up-thin:before {
  content: '\e88c';
}

.icon-ccw:before {
  content: '\e88d';
}

.icon-cw:before {
  content: '\e88e';
}

.icon-arrows-ccw:before {
  content: '\e88f';
}

.icon-level-down:before {
  content: '\e890';
}

.icon-level-up:before {
  content: '\e891';
}

.icon-shuffle:before {
  content: '\e892';
}

.icon-loop:before {
  content: '\e893';
}

.icon-switch:before {
  content: '\e894';
}

.icon-play:before {
  content: '\e895';
}

.icon-stop:before {
  content: '\e896';
}

.icon-pause:before {
  content: '\e897';
}

.icon-record:before {
  content: '\e898';
}

.icon-to-end:before {
  content: '\e899';
}

.icon-to-start:before {
  content: '\e89a';
}

.icon-fast-forward:before {
  content: '\e89b';
}

.icon-fast-backward:before {
  content: '\e89c';
}

.icon-progress-0:before {
  content: '\e89d';
}

.icon-progress-1:before {
  content: '\e89e';
}

.icon-progress-2:before {
  content: '\e89f';
}

.icon-progress-3:before {
  content: '\e8a0';
}

.icon-target:before {
  content: '\e8a1';
}

.icon-palette:before {
  content: '\e8a2';
}

.icon-list:before {
  content: '\e8a3';
}

.icon-list-add:before {
  content: '\e8a4';
}

.icon-signal:before {
  content: '\e8a5';
}

.icon-trophy:before {
  content: '\e8a6';
}

.icon-battery:before {
  content: '\e8a7';
}

.icon-back-in-time:before {
  content: '\e8a8';
}

.icon-monitor:before {
  content: '\e8a9';
}

.icon-mobile:before {
  content: '\e8aa';
}

.icon-network:before {
  content: '\e8ab';
}

.icon-cd:before {
  content: '\e8ac';
}

.icon-inbox:before {
  content: '\e8ad';
}

.icon-install:before {
  content: '\e8ae';
}

.icon-globe:before {
  content: '\e8af';
}

.icon-cloud:before {
  content: '\e8b0';
}

.icon-cloud-thunder:before {
  content: '\e8b1';
}

.icon-flash:before {
  content: '\e8b3';
}

.icon-moon:before {
  content: '\e8b4';
}

.icon-flight:before {
  content: '\e8b5';
}

.icon-paper-plane:before {
  content: '\e8b6';
}

.icon-leaf:before {
  content: '\e8b7';
}

.icon-lifebuoy:before {
  content: '\e8b8';
}

.icon-mouse:before {
  content: '\e8b9';
}

.icon-briefcase:before {
  content: '\e8ba';
}

.icon-suitcase:before {
  content: '\e8bb';
}

.icon-dot:before {
  content: '\e8bc';
}

.icon-dot-2:before {
  content: '\e8bd';
}

.icon-spin2:before {
  content: '\e984';
}

.icon-brush:before {
  content: '\e8bf';
}

.icon-magnet:before {
  content: '\e8c0';
}

.icon-infinity:before {
  content: '\e8c1';
}

.icon-erase:before {
  content: '\e8c2';
}

.icon-chart-pie:before {
  content: '\e8c3';
}

.icon-chart-line:before {
  content: '\e8c4';
}

.icon-chart-bar:before {
  content: '\e8c5';
}

.icon-chart-area:before {
  content: '\e8c6';
}

.icon-tape:before {
  content: '\e8b2';
}

.icon-graduation-cap:before {
  content: '\e8c7';
}

.icon-language:before {
  content: '\e8c8';
}

.icon-ticket:before {
  content: '\e8c9';
}

.icon-water:before {
  content: '\e8ca';
}

.icon-droplet:before {
  content: '\e8cb';
}

.icon-air:before {
  content: '\e8cc';
}

.icon-credit-card:before {
  content: '\e8cd';
}

.icon-floppy:before {
  content: '\e8ce';
}

.icon-clipboard:before {
  content: '\e8cf';
}

.icon-megaphone:before {
  content: '\e8d0';
}

.icon-database:before {
  content: '\e8d1';
}

.icon-drive:before {
  content: '\e8d2';
}

.icon-bucket:before {
  content: '\e8d3';
}

.icon-thermometer:before {
  content: '\e8d4';
}

.icon-key:before {
  content: '\e8d5';
}

.icon-flow-cascade:before {
  content: '\e8d6';
}

.icon-flow-branch:before {
  content: '\e8d7';
}

.icon-flow-tree:before {
  content: '\e8d8';
}

.icon-flow-line:before {
  content: '\e8d9';
}

.icon-flow-parallel:before {
  content: '\e8da';
}

.icon-rocket:before {
  content: '\e8db';
}

.icon-gauge:before {
  content: '\e8dc';
}

.icon-traffic-cone:before {
  content: '\e8dd';
}

.icon-cc:before {
  content: '\e8de';
}

.icon-cc-by:before {
  content: '\e8e8';
}

.icon-cc-nc:before {
  content: '\e8df';
}

.icon-cc-nc-eu:before {
  content: '\e8e0';
}

.icon-cc-nc-jp:before {
  content: '\e8e1';
}

.icon-cc-sa:before {
  content: '\e8e2';
}

.icon-cc-nd:before {
  content: '\e8e3';
}

.icon-cc-pd:before {
  content: '\e8e4';
}

.icon-cc-zero:before {
  content: '\e8e5';
}

.icon-cc-share:before {
  content: '\e8e6';
}

.icon-cc-remix:before {
  content: '\e8e7';
}

.icon-duckduckgo:before {
  content: '\e8eb';
}

.icon-aim:before {
  content: '\e8ec';
}

.icon-delicious:before {
  content: '\e8ed';
}

.icon-paypal:before {
  content: '\e8ee';
}

.icon-flattr:before {
  content: '\e8ef';
}

.icon-android:before {
  content: '\e8f0';
}

.icon-eventful:before {
  content: '\e8f1';
}

.icon-smashmag:before {
  content: '\e8f2';
}

.icon-gplus:before {
  content: '\e8f3';
}

.icon-wikipedia:before {
  content: '\e8f4';
}

.icon-lanyrd:before {
  content: '\e8f5';
}

.icon-calendar-1:before {
  content: '\e8f6';
}

.icon-stumbleupon:before {
  content: '\e8f7';
}

.icon-fivehundredpx:before {
  content: '\e8f8';
}

.icon-pinterest:before {
  content: '\e8f9';
}

.icon-bitcoin:before {
  content: '\e8fa';
}

.icon-w3c:before {
  content: '\e8fb';
}

.icon-foursquare:before {
  content: '\e8fc';
}

.icon-html5:before {
  content: '\e8fd';
}

.icon-ie:before {
  content: '\e8fe';
}

.icon-call:before {
  content: '\e8ff';
}

.icon-grooveshark:before {
  content: '\e900';
}

.icon-ninetyninedesigns:before {
  content: '\e901';
}

.icon-forrst:before {
  content: '\e902';
}

.icon-digg:before {
  content: '\e903';
}

.icon-spotify:before {
  content: '\e904';
}

.icon-reddit:before {
  content: '\e905';
}

.icon-guest:before {
  content: '\e906';
}

.icon-gowalla:before {
  content: '\e907';
}

.icon-appstore:before {
  content: '\e908';
}

.icon-blogger:before {
  content: '\e909';
}

.icon-cc-1:before {
  content: '\e90a';
}

.icon-dribbble:before {
  content: '\e90b';
}

.icon-evernote:before {
  content: '\e90c';
}

.icon-flickr:before {
  content: '\e90d';
}

.icon-google:before {
  content: '\e90e';
}

.icon-viadeo:before {
  content: '\e90f';
}

.icon-instapaper:before {
  content: '\e910';
}

.icon-weibo:before {
  content: '\e911';
}

.icon-klout:before {
  content: '\e912';
}

.icon-linkedin:before {
  content: '\e913';
}

.icon-meetup:before {
  content: '\e914';
}

.icon-vk:before {
  content: '\e915';
}

.icon-plancast:before {
  content: '\e916';
}

.icon-disqus:before {
  content: '\e917';
}

.icon-rss-1:before {
  content: '\e918';
}

.icon-skype:before {
  content: '\e919';
}

.icon-twitter:before {
  content: '\e91a';
}

.icon-youtube:before {
  content: '\e91b';
}

.icon-vimeo:before {
  content: '\e91c';
}

.icon-windows:before {
  content: '\e91d';
}

.icon-xing:before {
  content: '\e91e';
}

.icon-yahoo:before {
  content: '\e91f';
}

.icon-chrome:before {
  content: '\e920';
}

.icon-email:before {
  content: '\e921';
}

.icon-macstore:before {
  content: '\e922';
}

.icon-myspace:before {
  content: '\e923';
}

.icon-podcast:before {
  content: '\e924';
}

.icon-amazon:before {
  content: '\e925';
}

.icon-steam:before {
  content: '\e926';
}

.icon-cloudapp:before {
  content: '\e939';
}

.icon-dropbox:before {
  content: '\e938';
}

.icon-ebay:before {
  content: '\e937';
}

.icon-facebook:before {
  content: '\e936';
}

.icon-github:before {
  content: '\e935';
}

.icon-github-circled:before {
  content: '\e934';
}

.icon-googleplay:before {
  content: '\e933';
}

.icon-itunes:before {
  content: '\e932';
}

.icon-plurk:before {
  content: '\e931';
}

.icon-songkick:before {
  content: '\e951';
}

.icon-lastfm:before {
  content: '\e930';
}

.icon-gmail:before {
  content: '\e92f';
}

.icon-pinboard:before {
  content: '\e92e';
}

.icon-openid:before {
  content: '\e92d';
}

.icon-quora:before {
  content: '\e92c';
}

.icon-soundcloud:before {
  content: '\e92b';
}

.icon-tumblr:before {
  content: '\e92a';
}

.icon-eventasaurus:before {
  content: '\e929';
}

.icon-wordpress:before {
  content: '\e928';
}

.icon-yelp:before {
  content: '\e927';
}

.icon-intensedebate:before {
  content: '\e93a';
}

.icon-eventbrite:before {
  content: '\e93b';
}

.icon-scribd:before {
  content: '\e93c';
}

.icon-posterous:before {
  content: '\e93d';
}

.icon-stripe:before {
  content: '\e93e';
}

.icon-opentable:before {
  content: '\e93f';
}

.icon-cart:before {
  content: '\e940';
}

.icon-print-1:before {
  content: '\e941';
}

.icon-angellist:before {
  content: '\e942';
}

.icon-instagram:before {
  content: '\e943';
}

.icon-dwolla:before {
  content: '\e944';
}

.icon-appnet:before {
  content: '\e945';
}

.icon-statusnet:before {
  content: '\e946';
}

.icon-acrobat:before {
  content: '\e947';
}

.icon-drupal:before {
  content: '\e948';
}

.icon-buffer:before {
  content: '\e949';
}

.icon-pocket:before {
  content: '\e94a';
}

.icon-bitbucket:before {
  content: '\e94b';
}

.icon-lego:before {
  content: '\e94c';
}

.icon-login-1:before {
  content: '\e94d';
}

.icon-stackoverflow:before {
  content: '\e94e';
}

.icon-hackernews:before {
  content: '\e94f';
}

.icon-lkdto:before {
  content: '\e950';
}

.icon-music-1:before {
  content: '\e952';
}

.icon-search-1:before {
  content: '\e953';
}

.icon-mail-1:before {
  content: '\e954';
}

.icon-heart-1:before {
  content: '\e955';
}

.icon-star-1:before {
  content: '\e956';
}

.icon-user-1:before {
  content: '\e957';
}

.icon-videocam:before {
  content: '\e958';
}

.icon-camera-1:before {
  content: '\e959';
}

.icon-photo:before {
  content: '\e95a';
}

.icon-attach-1:before {
  content: '\e95b';
}

.icon-lock-1:before {
  content: '\e95c';
}

.icon-eye-1:before {
  content: '\e95d';
}

.icon-tag-1:before {
  content: '\e95e';
}

.icon-thumbs-up-1:before {
  content: '\e95f';
}

.icon-pencil-1:before {
  content: '\e960';
}

.icon-comment-1:before {
  content: '\e961';
}

.icon-location-1:before {
  content: '\e962';
}

.icon-cup-1:before {
  content: '\e963';
}

.icon-trash-1:before {
  content: '\e964';
}

.icon-doc-1:before {
  content: '\e965';
}

.icon-note-1:before {
  content: '\e979';
}

.icon-cog-1:before {
  content: '\e978';
}

.icon-params:before {
  content: '\e977';
}

.icon-calendar-2:before {
  content: '\e976';
}

.icon-sound-1:before {
  content: '\e975';
}

.icon-clock-1:before {
  content: '\e974';
}

.icon-lightbulb:before {
  content: '\e973';
}

.icon-tv:before {
  content: '\e972';
}

.icon-desktop:before {
  content: '\e971';
}

.icon-mobile-1:before {
  content: '\e970';
}

.icon-cd-1:before {
  content: '\e96e';
}

.icon-inbox-1:before {
  content: '\e96f';
}

.icon-globe-1:before {
  content: '\e96d';
}

.icon-cloud-1:before {
  content: '\e96c';
}

.icon-paper-plane-1:before {
  content: '\e96b';
}

.icon-fire:before {
  content: '\e96a';
}

.icon-graduation-cap-1:before {
  content: '\e969';
}

.icon-megaphone-1:before {
  content: '\e968';
}

.icon-database-1:before {
  content: '\e967';
}

.icon-key-1:before {
  content: '\e966';
}

.icon-beaker:before {
  content: '\e97a';
}

.icon-truck:before {
  content: '\e97b';
}

.icon-money:before {
  content: '\e97c';
}

.icon-food:before {
  content: '\e97d';
}

.icon-shop:before {
  content: '\e97e';
}

.icon-diamond:before {
  content: '\e97f';
}

.icon-t-shirt:before {
  content: '\e980';
}

.icon-dot-3:before {
  content: '\e8be';
}

.icon-up-hand:before {
  content: '\e800';
}

.icon-th:before {
  content: '\e801';
}

.icon-grid:before {
  content: '\e802';
}

.icon-barcode:before {
  content: '\e803';
}

.icon-text-width:before {
  content: '\e804';
}

.icon-ok:before {
  content: '\e805';
}

.mfp-bg {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1042;
  overflow: hidden;
  position: fixed;
  background: #0b0b0b;
  opacity: 0.8;
  filter: alpha(opacity=80);
}

.mfp-wrap {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1043;
  position: fixed;
  outline: none !important;
  -webkit-backface-visibility: hidden;
}

.mfp-container {
  text-align: center;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  padding: 0 8px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.mfp-container:before {
  content: '';
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}

.mfp-align-top .mfp-container:before {
  display: none;
}

.mfp-content {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  margin: 0 auto;
  text-align: left;
  z-index: 1045;
}

.mfp-inline-holder .mfp-content, .mfp-ajax-holder .mfp-content {
  width: 100%;
  cursor: auto;
}

.mfp-ajax-cur {
  cursor: progress;
}

.mfp-zoom-out-cur, .mfp-zoom-out-cur .mfp-image-holder .mfp-close {
  cursor: -moz-zoom-out;
  cursor: -webkit-zoom-out;
  cursor: zoom-out;
}

.mfp-zoom {
  cursor: pointer;
  cursor: -webkit-zoom-in;
  cursor: -moz-zoom-in;
  cursor: zoom-in;
}

.mfp-auto-cursor .mfp-content {
  cursor: auto;
}

.mfp-close, .mfp-arrow, .mfp-preloader, .mfp-counter {
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

.mfp-loading.mfp-figure {
  display: none;
}

.mfp-hide {
  display: none !important;
}

.mfp-preloader {
  color: #cccccc;
  position: absolute;
  top: 50%;
  width: auto;
  text-align: center;
  margin-top: -0.8em;
  left: 8px;
  right: 8px;
  z-index: 1044;
}

.mfp-preloader a {
  color: #cccccc;
}

.mfp-preloader a:hover {
  color: white;
}

.mfp-s-ready .mfp-preloader {
  display: none;
}

.mfp-s-error .mfp-content {
  display: none;
}

button.mfp-close, button.mfp-arrow {
  overflow: visible;
  cursor: pointer;
  background: transparent;
  border: 0;
  -webkit-appearance: none;
  display: block;
  padding: 0;
  z-index: 1046;
}

button::-moz-focus-inner {
  padding: 0;
  border: 0;
}

.mfp-close {
  width: 44px;
  height: 44px;
  line-height: 44px;
  position: absolute;
  right: 0;
  top: 0;
  text-decoration: none;
  text-align: center;
  opacity: 0.65;
  padding: 0 0 18px 10px;
  color: white;
  font-style: normal;
  font-size: 28px;
  font-family: Arial, Baskerville, monospace;
}

.mfp-close:hover, .mfp-close:focus {
  opacity: 1;
}

.mfp-close:active {
  top: 1px;
}

.mfp-close-btn-in .mfp-close {
  color: #333333;
}

.mfp-image-holder .mfp-close, .mfp-iframe-holder .mfp-close {
  color: white;
  right: -6px;
  text-align: right;
  padding-right: 6px;
  width: 100%;
}

.mfp-counter {
  position: absolute;
  top: 0;
  right: 0;
  color: #cccccc;
  font-size: 12px;
  line-height: 18px;
}

.mfp-arrow {
  position: absolute;
  opacity: 0.65;
  margin: 0;
  top: 50%;
  margin-top: -55px;
  padding: 0;
  width: 90px;
  height: 110px;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

.mfp-arrow:active {
  margin-top: -54px;
}

.mfp-arrow:hover, .mfp-arrow:focus {
  opacity: 1;
}

.mfp-arrow:before, .mfp-arrow:after, .mfp-arrow .mfp-b, .mfp-arrow .mfp-a {
  content: '';
  display: block;
  width: 0;
  height: 0;
  position: absolute;
  left: 0;
  top: 0;
  margin-top: 35px;
  margin-left: 35px;
  border: solid transparent;
}

.mfp-arrow:after, .mfp-arrow .mfp-a {
  border-top-width: 13px;
  border-bottom-width: 13px;
  top: 8px;
}

.mfp-arrow:before, .mfp-arrow .mfp-b {
  border-top-width: 21px;
  border-bottom-width: 21px;
}

.mfp-arrow-left {
  left: 0;
}

.mfp-arrow-left:after, .mfp-arrow-left .mfp-a {
  border-right: 17px solid white;
  margin-left: 31px;
}

.mfp-arrow-left:before, .mfp-arrow-left .mfp-b {
  margin-left: 25px;
  border-right: 27px solid #3f3f3f;
}

.mfp-arrow-right {
  right: 0;
}

.mfp-arrow-right:after, .mfp-arrow-right .mfp-a {
  border-left: 17px solid white;
  margin-left: 39px;
}

.mfp-arrow-right:before, .mfp-arrow-right .mfp-b {
  border-left: 27px solid #3f3f3f;
}

.mfp-iframe-holder {
  padding-top: 40px;
  padding-bottom: 40px;
}

.mfp-iframe-holder .mfp-content {
  line-height: 0;
  width: 100%;
  max-width: 900px;
}

.mfp-iframe-scaler {
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-top: 56.25%;
}

.mfp-iframe-scaler iframe {
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
  background: black;
}

.mfp-iframe-holder .mfp-close {
  top: -40px;
}

img.mfp-img {
  width: auto;
  max-width: 100%;
  height: auto;
  display: block;
  line-height: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding: 40px 0 40px;
  margin: 0 auto;
}

.mfp-figure:after {
  content: '';
  position: absolute;
  left: 0;
  top: 40px;
  bottom: 40px;
  display: block;
  right: 0;
  width: auto;
  height: auto;
  z-index: -1;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
  background: #444444;
}

.mfp-figure {
  line-height: 0;
}

.mfp-bottom-bar {
  margin-top: -36px;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  cursor: auto;
}

.mfp-title {
  text-align: left;
  line-height: 18px;
  color: #f3f3f3;
  word-break: break-word;
  padding-right: 36px;
}

.mfp-figure small {
  color: #bdbdbd;
  display: block;
  font-size: 12px;
  line-height: 14px;
}

.mfp-image-holder .mfp-content {
  max-width: 100%;
}

.mfp-gallery .mfp-image-holder .mfp-figure {
  cursor: pointer;
}

@media screen and (max-width:800px) and (orientation:landscape), screen and (max-height:300px) {
  .mfp-img-mobile .mfp-image-holder {
    padding-left: 0;
    padding-right: 0;
  }
  .mfp-img-mobile img.mfp-img {
    padding: 0;
  }
  .mfp-img-mobile .mfp-figure:after {
    top: 0;
    bottom: 0;
  }
  .mfp-img-mobile .mfp-bottom-bar {
    background: rgba(0, 0, 0, 0.6);
    bottom: 0;
    margin: 0;
    top: auto;
    padding: 3px 5px;
    position: fixed;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .mfp-img-mobile .mfp-bottom-bar:empty {
    padding: 0;
  }
  .mfp-img-mobile .mfp-counter {
    right: 5px;
    top: 3px;
  }
  .mfp-img-mobile .mfp-close {
    top: 0;
    right: 0;
    width: 35px;
    height: 35px;
    line-height: 35px;
    background: rgba(0, 0, 0, 0.6);
    position: fixed;
    text-align: center;
    padding: 0;
  }
  .mfp-img-mobile .mfp-figure small {
    display: inline;
    margin-left: 5px;
  }
}

@media all and (max-width:900px) {
  .mfp-arrow {
    -webkit-transform: scale(0.75);
    transform: scale(0.75);
  }
  .mfp-arrow-left {
    -webkit-transform-origin: 0;
    transform-origin: 0;
  }
  .mfp-arrow-right {
    -webkit-transform-origin: 100%;
    transform-origin: 100%;
  }
  .mfp-container {
    padding-left: 6px;
    padding-right: 6px;
  }
}

.mfp-ie7 .mfp-img {
  padding: 0;
}

.mfp-ie7 .mfp-bottom-bar {
  width: 600px;
  left: 50%;
  margin-left: -300px;
  margin-top: 5px;
  padding-bottom: 5px;
}

.mfp-ie7 .mfp-container {
  padding: 0;
}

.mfp-ie7 .mfp-content {
  padding-top: 44px;
}

.mfp-ie7 .mfp-close {
  top: 0;
  right: 0;
  padding-top: 0;
}

.white-popup-block {
  background: #FFF;
  padding: 40px 0px 0px 0px;
  text-align: left;
  margin: 40px auto;
  position: relative;
}

.white-popup-block-content {
  margin: 0px 20px 20px 20px;
}

.my-mfp-zoom-in .zoom-anim-dialog {
  opacity: 0;
  -webkit-transition: all 0.2s ease-in-out;
  -moz-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  -webkit-transform: scale(0.8);
  -moz-transform: scale(0.8);
  -ms-transform: scale(0.8);
  -o-transform: scale(0.8);
  transform: scale(0.8);
}

.my-mfp-zoom-in.mfp-ready .zoom-anim-dialog {
  opacity: 1;
  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  -ms-transform: scale(1);
  -o-transform: scale(1);
  transform: scale(1);
}

.my-mfp-zoom-in.mfp-removing .zoom-anim-dialog {
  -webkit-transform: scale(0.8);
  -moz-transform: scale(0.8);
  -ms-transform: scale(0.8);
  -o-transform: scale(0.8);
  transform: scale(0.8);
  opacity: 0;
}

.my-mfp-zoom-in.mfp-bg {
  opacity: 0.001;
  -webkit-transition: opacity 0.3s ease-out;
  -moz-transition: opacity 0.3s ease-out;
  -o-transition: opacity 0.3s ease-out;
  transition: opacity 0.3s ease-out;
}

.my-mfp-zoom-in.mfp-ready.mfp-bg {
  opacity: 0.8;
}

.my-mfp-zoom-in.mfp-removing.mfp-bg {
  opacity: 0;
}

.my-mfp-slide-bottom .zoom-anim-dialog {
  opacity: 0;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  -o-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
  -webkit-transform: translateY(-20px) perspective( 600px) rotateX( 10deg);
  -moz-transform: translateY(-20px) perspective( 600px) rotateX( 10deg);
  -ms-transform: translateY(-20px) perspective( 600px) rotateX( 10deg);
  -o-transform: translateY(-20px) perspective( 600px) rotateX( 10deg);
  transform: translateY(-20px) perspective( 600px) rotateX( 10deg);
}

.my-mfp-slide-bottom.mfp-ready .zoom-anim-dialog {
  opacity: 1;
  -webkit-transform: translateY(0) perspective( 600px) rotateX( 0);
  -moz-transform: translateY(0) perspective( 600px) rotateX( 0);
  -ms-transform: translateY(0) perspective( 600px) rotateX( 0);
  -o-transform: translateY(0) perspective( 600px) rotateX( 0);
  transform: translateY(0) perspective( 600px) rotateX( 0);
}

.my-mfp-slide-bottom.mfp-removing .zoom-anim-dialog {
  opacity: 0;
  -webkit-transform: translateY(-10px) perspective( 600px) rotateX( 10deg);
  -moz-transform: translateY(-10px) perspective( 600px) rotateX( 10deg);
  -ms-transform: translateY(-10px) perspective( 600px) rotateX( 10deg);
  -o-transform: translateY(-10px) perspective( 600px) rotateX( 10deg);
  transform: translateY(-10px) perspective( 600px) rotateX( 10deg);
}

.my-mfp-slide-bottom.mfp-bg {
  opacity: 0.01;
  -webkit-transition: opacity 0.3s ease-out;
  -moz-transition: opacity 0.3s ease-out;
  -o-transition: opacity 0.3s ease-out;
  transition: opacity 0.3s ease-out;
}

.my-mfp-slide-bottom.mfp-ready.mfp-bg {
  opacity: 0.8;
}

.my-mfp-slide-bottom.mfp-removing.mfp-bg {
  opacity: 0;
}

.flex-container a:active, .flexslider a:active, .flex-container a:focus, .flexslider a:focus {
  outline:none;
}
.slides, .flex-control-nav, .flex-direction-nav {
  margin:0;
  padding:0;
  list-style:none;
}
.flexslider li {
  margin-bottom:0;
}
.content-flexslider {
  position:relative;
}
.flexslider {
  margin:0;
  padding:0;
  overflow:hidden;
}
.flexslider .slides>li {
  display:none;
  -webkit-backface-visibility:hidden;
}
.flexslider .slides img {
  width:100%;
  display:block;
}
.flexslider .slides .testimonial_slide img {
  width:auto;
}
.flex-pauseplay span {
  text-transform:capitalize;
}
.slides:after {
  content:".";
  display:block;
  clear:both;
  visibility:hidden;
  line-height:0;
  height:0;
}
html[xmlns] .slides {
  display:block;
}
* html .slides {
  height:1%;
}
.no-js .slides>li:first-child {
  display:block;
}
.flexslider {
  position:relative;
  zoom:1;
}
.flex-viewport {
  max-height:2000px;
}
.loading .flex-viewport {
  max-height:300px;
}
.flexslider .slides {
  zoom:1;
}
.carousel li {
  margin-right:5px
}
.flex-direction-nav a {
  display:block;
  position:absolute;
  top:50%;
  margin-top:-21px;
  cursor:pointer;
  height:38px;
  width:38px;
  line-height:38px;
  -webkit-transition:all .3s ease;
  -moz-transition:all .3s ease;
  -o-transition:all .3s ease;
  transition:all .3s ease;
  background:none;
  border-radius:50%;
  opacity:0;
  text-align:center;
  font-size:20px;
  border:2px solid #fff;
  background:none !important;
}
.tp-leftarrow, .tp-rightarrow {
  display:block;
  cursor:pointer;
  height:38px;
  width:38px;
  line-height:38px;
  -webkit-transition:all .3s ease;
  -moz-transition:all .3s ease;
  -o-transition:all .3s ease;
  transition:all .3s ease;
  background:none;
  border-radius:50%;
  text-align:center;
  font-size:23px;
  border:2px solid #fff;
  background:none !important;
  color:#fff;
  top:50% !important;
}
.tp-bullets.simplebullets.round .bullet {
  background:none;
  border:2px solid #fff;
  width:10px;
  height:10px;
  border-radius:50%;
  -moz-border-radius:50%;
  -webkit-border-radius:50%;
}
.tp-bullets.simplebullets.round .bullet:hover, .tp-bullets.simplebullets.round .bullet.selected, .tp-bullets.simplebullets.navbar .bullet:hover, .tp-bullets.simplebullets.navbar .bullet.selected {
  background:#fff;
  border:2px solid #fff;
}
.flex-direction-nav {
  font-size:19px;
  line-height:40px;
}
.flex-direction-nav.flex-direction-nav-container {
  display:block;
}
.flex-direction-nav .flex-next {
  right:0px;
  color:#fff;
  z-index:100;
}
.flex-direction-nav .flex-next:before, .tp-rightarrow:before {
  content:'\e874';
  font-family:"be-themes";
}
.flex-direction-nav .flex-prev {
  left:0px;
  color:#fff;
  z-index:100;
}
.flex-direction-nav .flex-prev:before, .tp-leftarrow:before {
  content:'\e873';
  font-family:"be-themes";
}
.flex-direction-nav .disabled {
  opacity:0!important;
  filter:alpha(opacity=30);
  cursor:default;
}
.flexslider:hover .flex-next {
  opacity:1;
  right:20px;
}
.flexslider:hover .flex-prev {
  opacity:1;
  left:20px;
}
.flexslider:hover .flex-control-nav {
  opacity:1;
}
.flex-prev:hover, .flex-next:hover, .tp-leftarrow:hover, .tp-rightarrow:hover {
  transform:scale(1.1);
  -webkit-transform:scale(1.1);
  -moz-transform:scale(1.1);
  -o-transform:scale(1.1);
}
.flex-control-nav {
  width:100%;
  position:absolute;
  bottom:10px;
  text-align:center;
  z-index:2;
  opacity:0;
  -webkit-transition:all .6s ease;
  -moz-transition:all .6s ease;
  -o-transition:all .6s ease;
  transition:all .6s ease;
}
.flex-control-nav li {
  margin:0 6px;
  display:inline-block;
  zoom:1;
  *display:inline;
}
.flex-control-paging li a {
  width:7px;
  height:7px;
  display:block;
  cursor:pointer;
  text-indent:-9999px;
  border:1px solid #fff;
  border-radius:50%;
  background:none !important;
}
.testimonial_slider .flex-control-paging li a {
  width:7px;
  height:7px;
  border-width:1px;
}
.flex-control-paging li a.flex-active {
  background:#fff !important;
}
.flex-control-thumbs {
  margin:5px 0 0;
  position:static;
  overflow:hidden;
}
.flex-control-thumbs li {
  width:25%;
  float:left;
  margin:0;
}
.flex-control-thumbs img {
  width:100%;
  display:block;
  opacity:.7;
  cursor:pointer;
}
.flex-control-thumbs img:hover {
  opacity:1;
}
.flex-control-thumbs .active {
  opacity:1;
  cursor:default;
}
.flex-caption {
  width:50%;
  margin:0;
  position:absolute;
  left:30px;
  bottom:30px;
  line-height:18px;
  background:rgba(0, 0, 0, 0.7);
  border:2px solid rgba(0, 0, 0, 0.1);
  padding:10px 20px;
}
.flex-caption h4 {
  margin:0;
  background-image:none !important;
  text-transform:uppercase;
  color:#fff;
}
.flex-direction-nav a, .flex-control-paging li a {
  -webkit-transition:all .6s ease;
  -moz-transition:all .6s ease;
  -o-transition:all .6s ease;
  transition:all .6s ease;
}
.flex-direction-nav a.flex-next.background--light, .flex-direction-nav a.flex-prev.background--light, .flex-control-paging li a.background--light, .tp-rightarrow.background--light {
  border-color:#000;
  color:#000;
}
.flex-control-paging li a.flex-active.background--light {
  background:#000 !important;
}
.flex-loading {
  padding:20px 0px 20px 0px;
  text-align:center;
}
.flex-loading i.font-icon.icon-cog.icon-spin {
  font-size:25px;
}
.icon-spin {
  -webkit-animation:spin 2s infinite linear;
  -moz-animation:spin 2s infinite linear;
  -o-animation:spin 2s infinite linear;
  animation:spin 2s infinite linear;
  display:inline-block;
}
@-moz-keyframes spin {
  0% {
    -moz-transform: rotate(0deg);
  }
  100% {
    -moz-transform: rotate(359deg);
  }
}
@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(359deg);
  }
}
@-o-keyframes spin {
  0% {
    -o-transform: rotate(0deg);
  }
  100% {
    -o-transform: rotate(359deg);
  }
}
@-ms-keyframes spin {
  0% {
    -ms-transform: rotate(0deg);
  }
  100% {
    -ms-transform: rotate(359deg);
  }
}
.mCSB_container {
  width:auto;
  margin-right:25px;
  overflow:hidden;
}
.mCSB_container.mCS_no_scrollbar {
  margin-right:0;
}
.mCS_disabled>.mCustomScrollBox>.mCSB_container.mCS_no_scrollbar, .mCS_destroyed>.mCustomScrollBox>.mCSB_container.mCS_no_scrollbar {
  margin-right:30px;
}
.mCustomScrollBox>.mCSB_scrollTools {
  width:16px;
  height:100%;
  top:0;
  right:0;
}
.mCSB_scrollTools .mCSB_draggerContainer {
  position:absolute;
  top:0;
  left:0;
  bottom:0;
  right:0;
  height:auto;
}
.mCSB_scrollTools a+.mCSB_draggerContainer {
  margin:20px 0;
}
.mCSB_scrollTools .mCSB_draggerRail {
  width:8px;
  height:100%;
  margin:0 auto;
}
.mCSB_scrollTools .mCSB_dragger {
  cursor:pointer;
  width:100%;
  height:30px;
}
.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar {
  width:8px;
  height:100%;
  margin:0 auto;
  text-align:center;
}
.mCSB_scrollTools .mCSB_buttonUp, .mCSB_scrollTools .mCSB_buttonDown {
  display:block;
  position:relative;
  height:20px;
  overflow:hidden;
  margin:0 auto;
  cursor:pointer;
}
.mCSB_scrollTools .mCSB_buttonDown {
  top:100%;
  margin-top:-40px;
}
.mCSB_horizontal>.mCSB_container {
  height:auto;
  margin-right:0;
  margin-bottom:30px;
  overflow:hidden;
}
.mCSB_horizontal>.mCSB_container.mCS_no_scrollbar {
  margin-bottom:0;
}
.mCS_disabled>.mCSB_horizontal>.mCSB_container.mCS_no_scrollbar, .mCS_destroyed>.mCSB_horizontal>.mCSB_container.mCS_no_scrollbar {
  margin-right:0;
  margin-bottom:30px;
}
.mCSB_horizontal.mCustomScrollBox>.mCSB_scrollTools {
  width:100%;
  height:16px;
  top:auto;
  right:auto;
  bottom:0;
  left:0;
  overflow:hidden;
}
.mCSB_horizontal>.mCSB_scrollTools a+.mCSB_draggerContainer {
  margin:0 20px;
}
.mCSB_horizontal>.mCSB_scrollTools .mCSB_draggerRail {
  width:100%;
  height:2px;
  margin:7px 0;
  -webkit-border-radius:10px;
  -moz-border-radius:10px;
  border-radius:10px;
}
.mCSB_horizontal>.mCSB_scrollTools .mCSB_dragger {
  width:30px;
  height:100%;
}
.mCSB_horizontal>.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar {
  width:100%;
  height:4px;
  margin:6px auto;
  -webkit-border-radius:10px;
  -moz-border-radius:10px;
  border-radius:10px;
}
.mCSB_horizontal>.mCSB_scrollTools .mCSB_buttonLeft, .mCSB_horizontal>.mCSB_scrollTools .mCSB_buttonRight {
  display:block;
  position:relative;
  width:20px;
  height:100%;
  overflow:hidden;
  margin:0 auto;
  cursor:pointer;
  float:left;
}
.mCSB_horizontal>.mCSB_scrollTools .mCSB_buttonRight {
  margin-left:-40px;
  float:right;
}
.mCustomScrollBox {
  -ms-touch-action:none;
}
.mCustomScrollBox>.mCSB_scrollTools {
  opacity:0.75;
  filter:"alpha(opacity=75)";
  -ms-filter:"alpha(opacity=75)";
}
.mCustomScrollBox:hover>.mCSB_scrollTools {
  opacity:1;
  filter:"alpha(opacity=100)";
  -ms-filter:"alpha(opacity=100)";
}
.mCSB_scrollTools .mCSB_draggerRail {
  background:#000;
  background:rgba(0, 0, 0, 0.4);
  filter:"alpha(opacity=40)";
  -ms-filter:"alpha(opacity=40)";
}
.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar {
  background:#fff;
  background:rgba(255, 255, 255, 0.75);
  filter:"alpha(opacity=75)";
  -ms-filter:"alpha(opacity=75)";
}
.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar {
  background:rgba(255, 255, 255, 0.85);
  filter:"alpha(opacity=85)";
  -ms-filter:"alpha(opacity=85)";
}
.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar, .mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar {
  background:rgba(255, 255, 255, 0.9);
  filter:"alpha(opacity=90)";
  -ms-filter:"alpha(opacity=90)";
}
.mCSB_scrollTools .mCSB_buttonUp, .mCSB_scrollTools .mCSB_buttonDown, .mCSB_scrollTools .mCSB_buttonLeft, .mCSB_scrollTools .mCSB_buttonRight {
  background-image:url("/assets/modern/mCSB_buttons.png");
  background-repeat:no-repeat;
  opacity:0.4;
  filter:"alpha(opacity=40)";
  -ms-filter:"alpha(opacity=40)";
}
.mCSB_scrollTools .mCSB_buttonUp {
  background-position:0 0;
}
.mCSB_scrollTools .mCSB_buttonDown {
  background-position:0 -20px;
}
.mCSB_scrollTools .mCSB_buttonLeft {
  background-position:0 -40px;
}
.mCSB_scrollTools .mCSB_buttonRight {
  background-position:0 -56px;
}
.mCSB_scrollTools .mCSB_buttonUp:hover, .mCSB_scrollTools .mCSB_buttonDown:hover, .mCSB_scrollTools .mCSB_buttonLeft:hover, .mCSB_scrollTools .mCSB_buttonRight:hover {
  opacity:0.75;
  filter:"alpha(opacity=75)";
  -ms-filter:"alpha(opacity=75)";
}
.mCSB_scrollTools .mCSB_buttonUp:active, .mCSB_scrollTools .mCSB_buttonDown:active, .mCSB_scrollTools .mCSB_buttonLeft:active, .mCSB_scrollTools .mCSB_buttonRight:active {
  opacity:0.9;
  filter:"alpha(opacity=90)";
  -ms-filter:"alpha(opacity=90)";
}
.mCS-dark>.mCSB_scrollTools .mCSB_draggerRail {
  background:#000;
  background:rgba(0, 0, 0, 0.15);
}
.mCS-dark>.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar {
  background:#000;
  background:rgba(0, 0, 0, 0.75);
}
.mCS-dark>.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar {
  background:rgba(0, 0, 0, 0.85);
}
.mCS-dark>.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar, .mCS-dark>.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar {
  background:rgba(0, 0, 0, 0.9);
}
.mCS-dark>.mCSB_scrollTools .mCSB_buttonUp {
  background-position:-80px 0;
}
.mCS-dark>.mCSB_scrollTools .mCSB_buttonDown {
  background-position:-80px -20px;
}
.mCS-dark>.mCSB_scrollTools .mCSB_buttonLeft {
  background-position:-80px -40px;
}
.mCS-dark>.mCSB_scrollTools .mCSB_buttonRight {
  background-position:-80px -56px;
}
.mCS-light-2>.mCSB_scrollTools .mCSB_draggerRail {
  width:4px;
  background:#fff;
  background:rgba(255, 255, 255, 0.1);
  -webkit-border-radius:1px;
  -moz-border-radius:1px;
  border-radius:1px;
}
.mCS-light-2>.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar {
  width:4px;
  background:#fff;
  background:rgba(255, 255, 255, 0.75);
  -webkit-border-radius:1px;
  -moz-border-radius:1px;
  border-radius:1px;
}
.mCS-light-2.mCSB_horizontal>.mCSB_scrollTools .mCSB_draggerRail {
  width:100%;
  height:4px;
  margin:6px 0;
}
.mCS-light-2.mCSB_horizontal>.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar {
  width:100%;
  height:4px;
  margin:6px auto;
}
.mCS-light-2>.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar {
  background:rgba(255, 255, 255, 0.85);
}
.mCS-light-2>.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar, .mCS-light-2>.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar {
  background:rgba(255, 255, 255, 0.9);
}
.mCS-light-2>.mCSB_scrollTools .mCSB_buttonUp {
  background-position:-32px 0;
}
.mCS-light-2>.mCSB_scrollTools .mCSB_buttonDown {
  background-position:-32px -20px;
}
.mCS-light-2>.mCSB_scrollTools .mCSB_buttonLeft {
  background-position:-40px -40px;
}
.mCS-light-2>.mCSB_scrollTools .mCSB_buttonRight {
  background-position:-40px -56px;
}
.mCS-dark-2>.mCSB_scrollTools .mCSB_draggerRail {
  width:4px;
  background:#000;
  background:rgba(0, 0, 0, 0.1);
  -webkit-border-radius:1px;
  -moz-border-radius:1px;
  border-radius:1px;
}
.mCS-dark-2>.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar {
  width:4px;
  background:#000;
  background:rgba(0, 0, 0, 0.75);
  -webkit-border-radius:1px;
  -moz-border-radius:1px;
  border-radius:1px;
}
.mCS-dark-2.mCSB_horizontal>.mCSB_scrollTools .mCSB_draggerRail {
  width:100%;
  height:4px;
  margin:6px 0;
}
.mCS-dark-2.mCSB_horizontal>.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar {
  width:100%;
  height:4px;
  margin:6px auto;
}
.mCS-dark-2>.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar {
  background:rgba(0, 0, 0, 0.85);
}
.mCS-dark-2>.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar, .mCS-dark-2>.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar {
  background:rgba(0, 0, 0, 0.9);
}
.mCS-dark-2>.mCSB_scrollTools .mCSB_buttonUp {
  background-position:-112px 0;
}
.mCS-dark-2>.mCSB_scrollTools .mCSB_buttonDown {
  background-position:-112px -20px;
}
.mCS-dark-2>.mCSB_scrollTools .mCSB_buttonLeft {
  background-position:-120px -40px;
}
.mCS-dark-2>.mCSB_scrollTools .mCSB_buttonRight {
  background-position:-120px -56px;
}
.mCS-light-thick>.mCSB_scrollTools .mCSB_draggerRail {
  width:4px;
  background:#fff;
  background:rgba(255, 255, 255, 0.1);
  -webkit-border-radius:2px;
  -moz-border-radius:2px;
  border-radius:2px;
}
.mCS-light-thick>.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar {
  width:6px;
  background:#fff;
  background:rgba(255, 255, 255, 0.75);
  -webkit-border-radius:2px;
  -moz-border-radius:2px;
  border-radius:2px;
}
.mCS-light-thick.mCSB_horizontal>.mCSB_scrollTools .mCSB_draggerRail {
  width:100%;
  height:4px;
  margin:6px 0;
}
.mCS-light-thick.mCSB_horizontal>.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar {
  width:100%;
  height:6px;
  margin:5px auto;
}
.mCS-light-thick>.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar {
  background:rgba(255, 255, 255, 0.85);
}
.mCS-light-thick>.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar, .mCS-light-thick>.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar {
  background:rgba(255, 255, 255, 0.9);
}
.mCS-light-thick>.mCSB_scrollTools .mCSB_buttonUp {
  background-position:-16px 0;
}
.mCS-light-thick>.mCSB_scrollTools .mCSB_buttonDown {
  background-position:-16px -20px;
}
.mCS-light-thick>.mCSB_scrollTools .mCSB_buttonLeft {
  background-position:-20px -40px;
}
.mCS-light-thick>.mCSB_scrollTools .mCSB_buttonRight {
  background-position:-20px -56px;
}
.mCS-dark-thick>.mCSB_scrollTools .mCSB_draggerRail {
  width:4px;
  background:#000;
  background:rgba(0, 0, 0, 0.1);
  -webkit-border-radius:2px;
  -moz-border-radius:2px;
  border-radius:2px;
}
.mCS-dark-thick>.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar {
  width:6px;
  background:#000;
  background:rgba(0, 0, 0, 0.75);
  -webkit-border-radius:2px;
  -moz-border-radius:2px;
  border-radius:2px;
}
.mCS-dark-thick.mCSB_horizontal>.mCSB_scrollTools .mCSB_draggerRail {
  width:100%;
  height:4px;
  margin:6px 0;
}
.mCS-dark-thick.mCSB_horizontal>.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar {
  width:100%;
  height:6px;
  margin:5px auto;
}
.mCS-dark-thick>.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar {
  background:rgba(0, 0, 0, 0.85);
}
.mCS-dark-thick>.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar, .mCS-dark-thick>.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar {
  background:rgba(0, 0, 0, 0.9);
}
.mCS-dark-thick>.mCSB_scrollTools .mCSB_buttonUp {
  background-position:-96px 0;
}
.mCS-dark-thick>.mCSB_scrollTools .mCSB_buttonDown {
  background-position:-96px -20px;
}
.mCS-dark-thick>.mCSB_scrollTools .mCSB_buttonLeft {
  background-position:-100px -40px;
}
.mCS-dark-thick>.mCSB_scrollTools .mCSB_buttonRight {
  background-position:-100px -56px;
}
.mCS-light-thin>.mCSB_scrollTools .mCSB_draggerRail {
  background:#fff;
  background:rgba(255, 255, 255, 0.1);
}
.mCS-light-thin>.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar {
  width:2px;
}
.mCS-light-thin.mCSB_horizontal>.mCSB_scrollTools .mCSB_draggerRail {
  width:100%;
}
.mCS-light-thin.mCSB_horizontal>.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar {
  width:100%;
  height:2px;
  margin:7px auto;
}
.mCS-dark-thin>.mCSB_scrollTools .mCSB_draggerRail {
  background:#000;
  background:rgba(0, 0, 0, 0.15);
}
.mCS-dark-thin>.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar {
  width:2px;
  background:#000;
  background:rgba(0, 0, 0, 0.75);
}
.mCS-dark-thin.mCSB_horizontal>.mCSB_scrollTools .mCSB_draggerRail {
  width:100%;
}
.mCS-dark-thin.mCSB_horizontal>.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar {
  width:100%;
  height:2px;
  margin:7px auto;
}
.mCS-dark-thin>.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar {
  background:rgba(0, 0, 0, 0.85);
}
.mCS-dark-thin>.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar, .mCS-dark-thin>.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar {
  background:rgba(0, 0, 0, 0.9);
}
.mCS-dark-thin>.mCSB_scrollTools .mCSB_buttonUp {
  background-position:-80px 0;
}
.mCS-dark-thin>.mCSB_scrollTools .mCSB_buttonDown {
  background-position:-80px -20px;
}
.mCS-dark-thin>.mCSB_scrollTools .mCSB_buttonLeft {
  background-position:-80px -40px;
}
.mCS-dark-thin>.mCSB_scrollTools .mCSB_buttonRight {
  background-position:-80px -56px;
}
.content_1>.mCustomScrollBox>.mCSB_scrollTools {
  height:96%;
  top:2%;
}
.content_2 .mCSB_scrollTools .mCSB_draggerRail {
  width:6px;
  box-shadow:1px 1px 1px rgba(255, 255, 255, 0.1);
}
.content_2 .mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar {
  background:rgba(255, 255, 255, 0.4);
  filter:"alpha(opacity=40)";
  -ms-filter:"alpha(opacity=40)";
}
.content_2 .mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar {
  background:rgba(255, 255, 255, 0.5);
  filter:"alpha(opacity=50)";
  -ms-filter:"alpha(opacity=50)";
}
.content_2 .mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar, .content_2 .mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar {
  background:rgba(255, 255, 255, 0.6);
  filter:"alpha(opacity=60)";
  -ms-filter:"alpha(opacity=60)";
}
.content_3>.mCustomScrollBox>.mCSB_scrollTools {
  height:94%;
  top:3%;
}
.content_3 .mCSB_scrollTools .mCSB_draggerRail {
  width:0;
  border-right:1px dashed #09C;
}
.content_3 .mCSB_scrollTools .mCSB_dragger {
  height:11px;
}
.content_3 .mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar {
  width:11px;
  -webkit-border-radius:11px;
  -moz-border-radius:11px;
  border-radius:11px;
  background:#09C;
}
.content_4>.mCustomScrollBox>.mCSB_scrollTools {
  height:94%;
  top:3%;
}
.content_4 .mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar {
  width:8px;
  -webkit-border-radius:2px;
  -moz-border-radius:2px;
  border-radius:2px;
  background:#d0b9a0;
  -webkit-box-shadow:1px 1px 5px rgba(0, 0, 0, 0.5);
  -moz-box-shadow:1px 1px 5px rgba(0, 0, 0, 0.5);
  box-shadow:1px 1px 5px rgba(0, 0, 0, 0.5);
}
.content_4 .mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar, .content_4 .mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar {
  background:#dfcdb9;
}
.content_4 .mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar, .content_4 .mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar {
  -webkit-box-shadow:0 0 3px rgba(0, 0, 0, 0.5);
  -moz-box-shadow:0 0 3px rgba(0, 0, 0, 0.5);
  box-shadow:0 0 3px rgba(0, 0, 0, 0.5);
}
.content_5>.mCustomScrollBox>.mCSB_scrollTools {
  width:98%;
  margin:0 1%;
}
.content_6>.mCustomScrollBox>.mCSB_scrollTools {
  width:88%;
  margin:0 6%;
}
.content_8 .mCSB_scrollTools .mCSB_draggerRail {
  width:0px;
  border-left:1px solid rgba(0, 0, 0, 0.8);
  border-right:1px solid rgba(255, 255, 255, 0.2);
}
.animated {
  -webkit-animation-duration:1s;
  -moz-animation-duration:1s;
  -ms-animation-duration:1s;
  -o-animation-duration:1s;
  animation-duration:1s;
  visibility:visible !important;
}
.animated.hinge {
  -webkit-animation-duration:1s;
  -moz-animation-duration:1s;
  -ms-animation-duration:1s;
  -o-animation-duration:1s;
  animation-duration:1s;
}
@-webkit-keyframes flipInX {
  0% {
    -webkit-transform: perspective(400px) rotateX(90deg);
    opacity: 0;
  }
  40% {
    -webkit-transform: perspective(400px) rotateX(-10deg);
  }
  70% {
    -webkit-transform: perspective(400px) rotateX(10deg);
  }
  100% {
    -webkit-transform: perspective(400px) rotateX(0deg);
    opacity: 1;
  }
}
@-moz-keyframes flipInX {
  0% {
    -moz-transform: perspective(400px) rotateX(90deg);
    opacity: 0;
  }
  40% {
    -moz-transform: perspective(400px) rotateX(-10deg);
  }
  70% {
    -moz-transform: perspective(400px) rotateX(10deg);
  }
  100% {
    -moz-transform: perspective(400px) rotateX(0deg);
    opacity: 1;
  }
}
@-o-keyframes flipInX {
  0% {
    -o-transform: perspective(400px) rotateX(90deg);
    opacity: 0;
  }
  40% {
    -o-transform: perspective(400px) rotateX(-10deg);
  }
  70% {
    -o-transform: perspective(400px) rotateX(10deg);
  }
  100% {
    -o-transform: perspective(400px) rotateX(0deg);
    opacity: 1;
  }
}
@keyframes flipInX {
  0% {
    transform: perspective(400px) rotateX(90deg);
    opacity: 0;
  }
  40% {
    transform: perspective(400px) rotateX(-10deg);
  }
  70% {
    transform: perspective(400px) rotateX(10deg);
  }
  100% {
    transform: perspective(400px) rotateX(0deg);
    opacity: 1;
  }
}
.flipInX {
  -webkit-backface-visibility:visible !important;
  -webkit-animation-name:flipInX;
  -moz-backface-visibility:visible !important;
  -moz-animation-name:flipInX;
  -o-backface-visibility:visible !important;
  -o-animation-name:flipInX;
  backface-visibility:visible !important;
  animation-name:flipInX;
  visibility:visible !important;
}
@-webkit-keyframes flipInY {
  0% {
    -webkit-transform: perspective(400px) rotateY(90deg);
    opacity: 0;
  }
  40% {
    -webkit-transform: perspective(400px) rotateY(-10deg);
  }
  70% {
    -webkit-transform: perspective(400px) rotateY(10deg);
  }
  100% {
    -webkit-transform: perspective(400px) rotateY(0deg);
    opacity: 1;
  }
}
@-moz-keyframes flipInY {
  0% {
    -moz-transform: perspective(400px) rotateY(90deg);
    opacity: 0;
  }
  40% {
    -moz-transform: perspective(400px) rotateY(-10deg);
  }
  70% {
    -moz-transform: perspective(400px) rotateY(10deg);
  }
  100% {
    -moz-transform: perspective(400px) rotateY(0deg);
    opacity: 1;
  }
}
@-o-keyframes flipInY {
  0% {
    -o-transform: perspective(400px) rotateY(90deg);
    opacity: 0;
  }
  40% {
    -o-transform: perspective(400px) rotateY(-10deg);
  }
  70% {
    -o-transform: perspective(400px) rotateY(10deg);
  }
  100% {
    -o-transform: perspective(400px) rotateY(0deg);
    opacity: 1;
  }
}
@keyframes flipInY {
  0% {
    transform: perspective(400px) rotateY(90deg);
    opacity: 0;
  }
  40% {
    transform: perspective(400px) rotateY(-10deg);
  }
  70% {
    transform: perspective(400px) rotateY(10deg);
  }
  100% {
    transform: perspective(400px) rotateY(0deg);
    opacity: 1;
  }
}
.flipInY {
  -webkit-backface-visibility:visible !important;
  -webkit-animation-name:flipInY;
  -moz-backface-visibility:visible !important;
  -moz-animation-name:flipInY;
  -o-backface-visibility:visible !important;
  -o-animation-name:flipInY;
  backface-visibility:visible !important;
  animation-name:flipInY;
}
@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@-moz-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@-o-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.fadeIn {
  -webkit-animation-name:fadeIn;
  -moz-animation-name:fadeIn;
  -o-animation-name:fadeIn;
  animation-name:fadeIn;
}
@-webkit-keyframes fadeInUp {
  0% {
    opacity: 0;
    -webkit-transform: translateY(20px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
  }
}
@-moz-keyframes fadeInUp {
  0% {
    opacity: 0;
    -moz-transform: translateY(20px);
  }
  100% {
    opacity: 1;
    -moz-transform: translateY(0);
  }
}
@-o-keyframes fadeInUp {
  0% {
    opacity: 0;
    -o-transform: translateY(20px);
  }
  100% {
    opacity: 1;
    -o-transform: translateY(0);
  }
}
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.fadeInUp {
  -webkit-animation-name:fadeInUp;
  -moz-animation-name:fadeInUp;
  -o-animation-name:fadeInUp;
  animation-name:fadeInUp;
  visibility:visible;
}
@-webkit-keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
  }
}
@-moz-keyframes fadeInDown {
  0% {
    opacity: 0;
    -moz-transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    -moz-transform: translateY(0);
  }
}
@-o-keyframes fadeInDown {
  0% {
    opacity: 0;
    -o-transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    -o-transform: translateY(0);
  }
}
@keyframes fadeInDown {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.fadeInDown {
  -webkit-animation-name:fadeInDown;
  -moz-animation-name:fadeInDown;
  -o-animation-name:fadeInDown;
  animation-name:fadeInDown;
}
@-webkit-keyframes fadeInLeft {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-20px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
  }
}
@-moz-keyframes fadeInLeft {
  0% {
    opacity: 0;
    -moz-transform: translateX(-20px);
  }
  100% {
    opacity: 1;
    -moz-transform: translateX(0);
  }
}
@-o-keyframes fadeInLeft {
  0% {
    opacity: 0;
    -o-transform: translateX(-20px);
  }
  100% {
    opacity: 1;
    -o-transform: translateX(0);
  }
}
@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(-20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
.fadeInLeft {
  -webkit-animation-name:fadeInLeft;
  -moz-animation-name:fadeInLeft;
  -o-animation-name:fadeInLeft;
  animation-name:fadeInLeft;
}
@-webkit-keyframes fadeInRight {
  0% {
    opacity: 0;
    -webkit-transform: translateX(20px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
  }
}
@-moz-keyframes fadeInRight {
  0% {
    opacity: 0;
    -moz-transform: translateX(20px);
  }
  100% {
    opacity: 1;
    -moz-transform: translateX(0);
  }
}
@-o-keyframes fadeInRight {
  0% {
    opacity: 0;
    -o-transform: translateX(20px);
  }
  100% {
    opacity: 1;
    -o-transform: translateX(0);
  }
}
@keyframes fadeInRight {
  0% {
    opacity: 0;
    transform: translateX(20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
.fadeInRight {
  -webkit-animation-name:fadeInRight;
  -moz-animation-name:fadeInRight;
  -o-animation-name:fadeInRight;
  animation-name:fadeInRight;
}
@-webkit-keyframes slideInDown {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-2000px);
  }
  100% {
    -webkit-transform: translateY(0);
  }
}
@-moz-keyframes slideInDown {
  0% {
    opacity: 0;
    -moz-transform: translateY(-2000px);
  }
  100% {
    -moz-transform: translateY(0);
  }
}
@-o-keyframes slideInDown {
  0% {
    opacity: 0;
    -o-transform: translateY(-2000px);
  }
  100% {
    -o-transform: translateY(0);
  }
}
@keyframes slideInDown {
  0% {
    opacity: 0;
    transform: translateY(-2000px);
  }
  100% {
    transform: translateY(0);
  }
}
.slideInDown {
  -webkit-animation-name:slideInDown;
  -moz-animation-name:slideInDown;
  -o-animation-name:slideInDown;
  animation-name:slideInDown;
}
@-webkit-keyframes slideInLeft {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-2000px);
  }
  100% {
    -webkit-transform: translateX(0);
  }
}
@-moz-keyframes slideInLeft {
  0% {
    opacity: 0;
    -moz-transform: translateX(-2000px);
  }
  100% {
    -moz-transform: translateX(0);
  }
}
@-o-keyframes slideInLeft {
  0% {
    opacity: 0;
    -o-transform: translateX(-2000px);
  }
  100% {
    -o-transform: translateX(0);
  }
}
@keyframes slideInLeft {
  0% {
    opacity: 0;
    transform: translateX(-2000px);
  }
  100% {
    transform: translateX(0);
  }
}
.slideInLeft {
  -webkit-animation-name:slideInLeft;
  -moz-animation-name:slideInLeft;
  -o-animation-name:slideInLeft;
  animation-name:slideInLeft;
}
@-webkit-keyframes slideInRight {
  0% {
    opacity: 0;
    -webkit-transform: translateX(2000px);
  }
  100% {
    -webkit-transform: translateX(0);
  }
}
@-moz-keyframes slideInRight {
  0% {
    opacity: 0;
    -moz-transform: translateX(2000px);
  }
  100% {
    -moz-transform: translateX(0);
  }
}
@-o-keyframes slideInRight {
  0% {
    opacity: 0;
    -o-transform: translateX(2000px);
  }
  100% {
    -o-transform: translateX(0);
  }
}
@keyframes slideInRight {
  0% {
    opacity: 0;
    transform: translateX(2000px);
  }
  100% {
    transform: translateX(0);
  }
}
.slideInRight {
  -webkit-animation-name:slideInRight;
  -moz-animation-name:slideInRight;
  -o-animation-name:slideInRight;
  animation-name:slideInRight;
}
@-webkit-keyframes rollIn {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-100%) rotate(-120deg);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateX(0px) rotate(0deg);
  }
}
@-moz-keyframes rollIn {
  0% {
    opacity: 0;
    -moz-transform: translateX(-100%) rotate(-120deg);
  }
  100% {
    opacity: 1;
    -moz-transform: translateX(0px) rotate(0deg);
  }
}
@-o-keyframes rollIn {
  0% {
    opacity: 0;
    -o-transform: translateX(-100%) rotate(-120deg);
  }
  100% {
    opacity: 1;
    -o-transform: translateX(0px) rotate(0deg);
  }
}
@keyframes rollIn {
  0% {
    opacity: 0;
    transform: translateX(-100%) rotate(-120deg);
  }
  100% {
    opacity: 1;
    transform: translateX(0px) rotate(0deg);
  }
}
.rollIn {
  -webkit-animation-name:rollIn;
  -moz-animation-name:rollIn;
  -o-animation-name:rollIn;
  animation-name:rollIn;
}
@-webkit-keyframes rollOut {
  0% {
    opacity: 1;
    -webkit-transform: translateX(0px) rotate(0deg);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateX(100%) rotate(120deg);
  }
}
@-moz-keyframes rollOut {
  0% {
    opacity: 1;
    -moz-transform: translateX(0px) rotate(0deg);
  }
  100% {
    opacity: 0;
    -moz-transform: translateX(100%) rotate(120deg);
  }
}
@-o-keyframes rollOut {
  0% {
    opacity: 1;
    -o-transform: translateX(0px) rotate(0deg);
  }
  100% {
    opacity: 0;
    -o-transform: translateX(100%) rotate(120deg);
  }
}
@keyframes rollOut {
  0% {
    opacity: 1;
    transform: translateX(0px) rotate(0deg);
  }
  100% {
    opacity: 0;
    transform: translateX(100%) rotate(120deg);
  }
}
.rollOut {
  -webkit-animation-name:rollOut;
  -moz-animation-name:rollOut;
  -o-animation-name:rollOut;
  animation-name:rollOut;
}
.rotates {
  opacity:0;
  -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
  filter:alpha(opacity=0);
  overflow:hidden;
  display:inline-block;
  vertical-align:bottom;
}
.rotating {
  display:inline-block;
  -webkit-transform-style:preserve-3d;
  -moz-transform-style:preserve-3d;
  -ms-transform-style:preserve-3d;
  -o-transform-style:preserve-3d;
  transform-style:preserve-3d;
  -webkit-transform:rotateX(0) rotateY(0) rotateZ(0);
  -moz-transform:rotateX(0) rotateY(0) rotateZ(0);
  -ms-transform:rotateX(0) rotateY(0) rotateZ(0);
  -o-transform:rotateX(0) rotateY(0) rotateZ(0);
  transform:rotateX(0) rotateY(0) rotateZ(0);
  -webkit-transition:0.5s;
  -moz-transition:0.5s;
  -ms-transition:0.5s;
  -o-transition:0.5s;
  transition:0.5s;
  -webkit-transform-origin-x:50%;
}
.rotating.flip {
  position:relative;
}
.rotating .front, .rotating .back {
  left:0;
  top:0;
  -webkit-backface-visibility:hidden;
  -moz-backface-visibility:hidden;
  -ms-backface-visibility:hidden;
  -o-backface-visibility:hidden;
  backface-visibility:hidden;
}
.rotating .front {
  position:absolute;
  display:inline-block;
  -webkit-transform:translate3d(0, 0, 1px);
  -moz-transform:translate3d(0, 0, 1px);
  -ms-transform:translate3d(0, 0, 1px);
  -o-transform:translate3d(0, 0, 1px);
  transform:translate3d(0, 0, 1px);
}
.rotating.flip .front {
  z-index:1;
}
.rotating .back {
  display:block;
  opacity:0;
}
.rotating.spin {
  -webkit-transform:rotate(360deg) scale(0);
  -moz-transform:rotate(360deg) scale(0);
  -ms-transform:rotate(360deg) scale(0);
  -o-transform:rotate(360deg) scale(0);
  transform:rotate(360deg) scale(0);
}
.rotating.flip .back {
  z-index:2;
  display:block;
  opacity:1;
  -webkit-transform:rotateY(180deg) translate3d(0, 0, 0);
  -moz-transform:rotateY(180deg) translate3d(0, 0, 0);
  -ms-transform:rotateY(180deg) translate3d(0, 0, 0);
  -o-transform:rotateY(180deg) translate3d(0, 0, 0);
  transform:rotateY(180deg) translate3d(0, 0, 0);
}
.rotating.flip.up .back {
  -webkit-transform:rotateX(180deg) translate3d(0, 0, 0);
  -moz-transform:rotateX(180deg) translate3d(0, 0, 0);
  -ms-transform:rotateX(180deg) translate3d(0, 0, 0);
  -o-transform:rotateX(180deg) translate3d(0, 0, 0);
  transform:rotateX(180deg) translate3d(0, 0, 0);
}
.rotating.flip.cube .front {
  -webkit-transform:translate3d(0, 0, 100px) scale(0.9, 0.9);
  -moz-transform:translate3d(0, 0, 100px) scale(0.85, 0.85);
  -ms-transform:translate3d(0, 0, 100px) scale(0.85, 0.85);
  -o-transform:translate3d(0, 0, 100px) scale(0.85, 0.85);
  transform:translate3d(0, 0, 100px) scale(0.85, 0.85);
}
.rotating.flip.cube .back {
  -webkit-transform:rotateY(180deg) translate3d(0, 0, 100px) scale(0.9, 0.9);
  -moz-transform:rotateY(180deg) translate3d(0, 0, 100px) scale(0.85, 0.85);
  -ms-transform:rotateY(180deg) translate3d(0, 0, 100px) scale(0.85, 0.85);
  -o-transform:rotateY(180deg) translate3d(0, 0, 100px) scale(0.85, 0.85);
  transform:rotateY(180deg) translate3d(0, 0, 100px) scale(0.85, 0.85);
}
.rotating.flip.cube.up .back {
  -webkit-transform:rotateX(180deg) translate3d(0, 0, 100px) scale(0.9, 0.9);
  -moz-transform:rotateX(180deg) translate3d(0, 0, 100px) scale(0.85, 0.85);
  -ms-transform:rotateX(180deg) translate3d(0, 0, 100px) scale(0.85, 0.85);
  -o-transform:rotateX(180deg) translate3d(0, 0, 100px) scale(0.85, 0.85);
  transform:rotateX(180deg) translate3d(0, 0, 100px) scale(0.85, 0.85);
}
.component {
  margin:0 auto;
  position:relative;
  margin-bottom:40px;
  max-width:100%;
}
.component-small {
  width:650px;
  height:290px;
}
.component-fullwidth {
  width:100%;
  height:100%;
  min-height:200px;
  margin-bottom:0;
  background:#fff;
}
.component-transparent {
  width:900px;
  height:500px;
}
.component>ul {
  width:100%;
  max-width:100%;
  height:100%;
  position:relative;
  list-style:none;
  padding:0;
  margin:0 auto;
}
.component-small>ul {
  width:450px;
}
.component-fullwidth>ul {
  overflow:hidden;
}
.component-transparent>ul {
  width:112px;
}
.component li {
  width:100%;
  height:100%;
  position:absolute;
  top:0;
  left:0;
  pointer-events:none;
  opacity:0;
  z-index:999;
}
.component-fullwidth li {
  overflow:hidden;
}
.component .current {
  opacity:1;
  pointer-events:auto;
  z-index:1000;
}
.component li img {
  display:inline-block;
  max-width:100%;
}
.component nav a {
  position:absolute;
  width:40px;
  height:40px;
  color:#fff;
  outline:none;
  overflow:hidden;
  text-align:center;
  line-height:40px;
  top:50%;
  font-size:16px;
  border-radius:50%;
  border:2px solid #fff;
  transition:all 0.3s ease;
  -webkit-transition:all 0.3s ease;
  -moz-transition:all 0.3s ease;
  -o-transition:all 0.3s ease;
  z-index:100000;
}
.component-small nav a.prev, .component-transparent nav a.prev {
  left:0px;
}
.component-small nav a.next, .component-transparent nav a.next {
  right:0px;
}
.component-fullwidth nav a {
  top:50%;
  left:50%;
  margin-top:-22px;
}
.component-fullwidth nav a.prev {
  left:20px;
}
.component-fullwidth nav a.next {
  right:20px;
  left:auto;
}
.component li .be-slide-bg-holder, .component li .be-slide-bg {
  position:absolute;
  top:0px;
  left:0px;
  width:100%;
  height:100%;
}
.current .be-slider-content-inner {
  display:block;
}
.be-slider-content-inner-wrap.center {
  margin:0 auto;
  text-align:center;
}
@media screen and (max-width:35.5em) {
  .component-small nav a {
    top: 100%;
    margin-top: 10px;
    -webkit-transform: translateY(0%);
    transform: translateY(0%);
  }
  .component-small nav a.prev {
    left: 50%;
    margin-left: -80px;
  }
  .component-small nav a.next {
    margin-left: 20px;
    right: auto;
    left: 50%;
  }
}
.fxSoftScale .navOutNext {
  -webkit-animation:scaleUp 1.5s forwards cubic-bezier(0.7, 0, 0.3, 1);
  animation:scaleUp 1.5s forwards cubic-bezier(0.7, 0, 0.3, 1);
}
.fxSoftScale .navInNext {
  -webkit-animation:scaleDownUp 1.5s forwards cubic-bezier(0.7, 0, 0.3, 1);
  animation:scaleDownUp 1.5s forwards cubic-bezier(0.7, 0, 0.3, 1);
}
.fxSoftScale .navOutPrev {
  -webkit-animation:scaleDown 1.5s forwards cubic-bezier(0.7, 0, 0.3, 1);
  animation:scaleDown 1.5s forwards cubic-bezier(0.7, 0, 0.3, 1);
}
.fxSoftScale .navInPrev {
  -webkit-animation:scaleUpDown 1.5s forwards cubic-bezier(0.7, 0, 0.3, 1);
  animation:scaleUpDown 1.5s forwards cubic-bezier(0.7, 0, 0.3, 1);
}
@-webkit-keyframes scaleUp {
  from {}
  to {
    -webkit-transform: scale(1.2);
    opacity: 0;
  }
}
@keyframes scaleUp {
  from {}
  to {
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
    opacity: 0;
  }
}
@-webkit-keyframes scaleDownUp {
  from {
    opacity: 0;
    -webkit-transform: scale(0.9);
  }
  to {
    opacity: 1;
    -webkit-transform: scale(1);
  }
}
@keyframes scaleDownUp {
  from {
    opacity: 0;
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
@-webkit-keyframes scaleDown {
  from {}
  to {
    opacity: 0;
    -webkit-transform: scale(0.9);
  }
}
@keyframes scaleDown {
  from {}
  to {
    opacity: 0;
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }
}
@-webkit-keyframes scaleUpDown {
  from {
    -webkit-transform: scale(1.2);
  }
  to {
    opacity: 1;
    -webkit-transform: scale(1);
  }
}
@keyframes scaleUpDown {
  from {
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }
  to {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
.fxPressAway .navOutNext {
  -webkit-animation:slideOutScaleRight 1.2s forwards cubic-bezier(0.7, 0, 0.3, 1);
  animation:slideOutScaleRight 1.2s forwards cubic-bezier(0.7, 0, 0.3, 1);
}
.fxPressAway .navInNext {
  opacity:1;
  -webkit-animation:slideInFromLeft 1.2s forwards cubic-bezier(0.7, 0, 0.3, 1);
  animation:slideInFromLeft 1.2s forwards cubic-bezier(0.7, 0, 0.3, 1);
}
.fxPressAway .navOutPrev {
  -webkit-animation:slideOutScaleLeft 1.2s forwards cubic-bezier(0.7, 0, 0.3, 1);
  animation:slideOutScaleLeft 1.2s forwards cubic-bezier(0.7, 0, 0.3, 1);
}
.fxPressAway .navInPrev {
  opacity:1;
  -webkit-animation:slideInFromRight 1.2s forwards cubic-bezier(0.7, 0, 0.3, 1);
  animation:slideInFromRight 1.2s forwards cubic-bezier(0.7, 0, 0.3, 1);
}
@-webkit-keyframes slideOutScaleRight {
  from {}
  to {
    -webkit-transform: translateX(100%) scale(0.9);
    opacity: 0;
  }
}
@keyframes slideOutScaleRight {
  from {}
  to {
    -webkit-transform: translateX(100%) scale(0.9);
    transform: translateX(100%) scale(0.9);
    opacity: 0;
  }
}
@-webkit-keyframes slideInFromLeft {
  from {
    -webkit-transform: translateX(-100%);
  }
  to {
    -webkit-transform: translateX(0);
  }
}
@keyframes slideInFromLeft {
  from {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
  to {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}
@-webkit-keyframes slideOutScaleLeft {
  from {}
  to {
    -webkit-transform: translateX(-100%) scale(0.9);
    opacity: 0;
  }
}
@keyframes slideOutScaleLeft {
  from {}
  to {
    -webkit-transform: translateX(-100%) scale(0.9);
    transform: translateX(-100%) scale(0.9);
    opacity: 0;
  }
}
@-webkit-keyframes slideInFromRight {
  from {
    -webkit-transform: translateX(100%);
  }
  to {
    -webkit-transform: translateX(0);
  }
}
@keyframes slideInFromRight {
  from {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
  to {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}
.fxSideSwing .navOutNext {
  -webkit-animation:slideOutScaleRight 1.2s forwards;
  animation:slideOutScaleRight 1.2s forwards;
  -webkit-animation-timing-function:cubic-bezier(1, 0, 0, 1);
  -webkit-animation-timing-function:cubic-bezier(1, -0.2, 0, 1);
  animation-timing-function:cubic-bezier(1, -0.2, 0, 1);
}
.fxSideSwing .navInNext {
  opacity:1;
  -webkit-animation:slideInFromLeft 1.2s forwards;
  animation:slideInFromLeft 1.2s forwards;
  -webkit-animation-timing-function:cubic-bezier(1, 0, 0, 1);
  -webkit-animation-timing-function:cubic-bezier(1, -0.2, 0, 1);
  animation-timing-function:cubic-bezier(1, -0.2, 0, 1);
}
.fxSideSwing .navOutPrev {
  -webkit-animation:slideOutScaleLeft 1.2s forwards;
  animation:slideOutScaleLeft 1.2s forwards;
  -webkit-animation-timing-function:cubic-bezier(1, 0, 0, 1);
  -webkit-animation-timing-function:cubic-bezier(1, -0.2, 0, 1);
  animation-timing-function:cubic-bezier(1, -0.2, 0, 1);
}
.fxSideSwing .navInPrev {
  opacity:1;
  -webkit-animation:slideInFromRight 1.2s forwards;
  animation:slideInFromRight 1.2s forwards;
  -webkit-animation-timing-function:cubic-bezier(1, 0, 0, 1);
  -webkit-animation-timing-function:cubic-bezier(1, -0.2, 0, 1);
  animation-timing-function:cubic-bezier(1, -0.2, 0, 1);
}
.fxFortuneWheel .itemwrap {
  -webkit-perspective:1600px;
  perspective:1600px;
}
.fxFortuneWheel .navOutNext {
  -webkit-animation:slideOutScaleRight 1.2s forwards cubic-bezier(0.7, 0, 0.3, 1);
  animation:slideOutScaleRight 1.2s forwards cubic-bezier(0.7, 0, 0.3, 1);
}
.fxFortuneWheel .navInNext {
  -webkit-transform-origin:100% 50%;
  transform-origin:100% 50%;
  -webkit-animation:rotateInFromLeft 1.2s forwards cubic-bezier(0.7, 0, 0.3, 1);
  animation:rotateInFromLeft 1.2s forwards cubic-bezier(0.7, 0, 0.3, 1);
}
.fxFortuneWheel .navOutPrev {
  -webkit-animation:slideOutScaleLeft 1.2s forwards cubic-bezier(0.7, 0, 0.3, 1);
  animation:slideOutScaleLeft 1.2s forwards cubic-bezier(0.7, 0, 0.3, 1);
}
.fxFortuneWheel .navInPrev {
  -webkit-transform-origin:0% 50%;
  transform-origin:0% 50%;
  -webkit-animation:rotateInFromRight 1.2s forwards cubic-bezier(0.7, 0, 0.3, 1);
  animation:rotateInFromRight 1.2s forwards cubic-bezier(0.7, 0, 0.3, 1);
}
@-webkit-keyframes rotateInFromLeft {
  from {
    -webkit-transform: translateX(-100%) rotateY(-55deg);
  }
  to {
    -webkit-transform: translateX(0) rotateY(0deg);
    opacity: 1;
  }
}
@keyframes rotateInFromLeft {
  from {
    -webkit-transform: translateX(-100%) rotateY(-55deg);
    transform: translateX(-100%) rotateY(-55deg);
  }
  to {
    -webkit-transform: translateX(0) rotateY(0deg);
    transform: translateX(0) rotateY(0deg);
    opacity: 1;
  }
}
@-webkit-keyframes rotateInFromRight {
  from {
    -webkit-transform: translateX(100%) rotateY(55deg);
  }
  to {
    -webkit-transform: translateX(0) rotateY(0deg);
    opacity: 1;
  }
}
@keyframes rotateInFromRight {
  from {
    -webkit-transform: translateX(100%) rotateY(55deg);
    transform: translateX(100%) rotateY(55deg);
  }
  to {
    -webkit-transform: translateX(0) rotateY(0deg);
    transform: translateX(0) rotateY(0deg);
    opacity: 1;
  }
}
.fxSwipe .navOutNext {
  -webkit-animation:decreaseHeight 0.8s forwards ease-in-out;
  animation:decreaseHeight 0.8s forwards ease-in-out;
}
.fxSwipe .navInNext {
  -webkit-animation:show 0.8s forwards ease-in-out;
  animation:show 0.8s forwards ease-in-out;
}
.fxSwipe .navOutPrev {
  -webkit-animation:hide 0.8s forwards ease-in-out;
  animation:hide 0.8s forwards ease-in-out;
}
.fxSwipe .navInPrev {
  z-index:1001;
  opacity:1;
  -webkit-animation:increaseHeight 0.8s forwards ease-in-out;
  animation:increaseHeight 0.8s forwards ease-in-out;
}
@-webkit-keyframes decreaseHeight {
  from {}
  to {
    height: 0;
  }
}
@keyframes decreaseHeight {
  from {}
  to {
    height: 0;
  }
}
@-webkit-keyframes show {
  0% {
    opacity: 0;
  }
  1%, 100% {
    opacity: 1;
  }
}
@keyframes show {
  0% {
    opacity: 0;
  }
  1%, 100% {
    opacity: 1;
  }
}
@-webkit-keyframes hide {
  0%, 99% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes hide {
  0%, 99% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@-webkit-keyframes increaseHeight {
  from {
    height: 0;
  }
  to {
    height: 100%;
  }
}
@keyframes increaseHeight {
  from {
    height: 0;
  }
  to {
    height: 100%;
  }
}
.fxPushReveal .navOutNext {
  opacity:1;
  -webkit-animation:slideOutBottom 0.7s forwards ease-in-out;
  animation:slideOutBottom 0.7s forwards ease-in-out;
}
.fxPushReveal .navInNext {
  opacity:1;
  -webkit-animation:slideInHalfFromTop 0.7s forwards ease-in-out;
  animation:slideInHalfFromTop 0.7s forwards ease-in-out;
}
.fxPushReveal .navOutPrev {
  opacity:1;
  -webkit-animation:slideOutHalfTop 0.7s forwards ease-in-out;
  animation:slideOutHalfTop 0.7s forwards ease-in-out;
}
.fxPushReveal .navInPrev {
  opacity:1;
  z-index:1001;
  -webkit-animation:slideInFromBottom 0.7s forwards ease-in-out;
  animation:slideInFromBottom 0.7s forwards ease-in-out;
}
@-webkit-keyframes slideOutBottom {
  from {}
  to {
    -webkit-transform: translateY(100%);
  }
}
@keyframes slideOutBottom {
  from {}
  to {
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
  }
}
@-webkit-keyframes slideInHalfFromTop {
  from {
    -webkit-transform: translateY(-50%);
  }
  to {
    -webkit-transform: translateY(0);
  }
}
@keyframes slideInHalfFromTop {
  from {
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
  }
  to {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
@-webkit-keyframes slideOutHalfTop {
  from {}
  to {
    -webkit-transform: translateY(-50%);
  }
}
@keyframes slideOutHalfTop {
  from {}
  to {
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
  }
}
@-webkit-keyframes slideInFromBottom {
  from {
    -webkit-transform: translateY(100%);
  }
  to {
    -webkit-transform: translateY(0);
  }
}
@keyframes slideInFromBottom {
  from {
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
  }
  to {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
.fxSnapIn .navOutNext {
  -webkit-animation:slideOutLeft 0.5s forwards ease-in;
  animation:slideOutLeft 0.5s forwards ease-in;
}
.fxSnapIn .navInNext {
  z-index:1001;
  opacity:1;
  -webkit-animation:slideFromRightFast 0.5s forwards cubic-bezier(0.7, 0, 0.3, 1);
  animation:slideFromRightFast 0.5s forwards cubic-bezier(0.7, 0, 0.3, 1);
}
.fxSnapIn .navOutPrev {
  -webkit-animation:slideOutRight 0.5s forwards ease-in;
  animation:slideOutRight 0.5s forwards ease-in;
}
.fxSnapIn .navInPrev {
  z-index:1001;
  opacity:1;
  -webkit-animation:slideFromLeftFast 0.5s forwards cubic-bezier(0.7, 0, 0.3, 1);
  animation:slideFromLeftFast 0.5s forwards cubic-bezier(0.7, 0, 0.3, 1);
}
.fxSnapIn li::after {
  content:'';
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  opacity:0;
  pointer-events:none;
  background-color:rgba(0, 0, 0, 0.8);
  transition:opacity 0.4s 0.1s ease-in;
}
.fxSnapIn .navOutPrev::after, .fxSnapIn .navOutNext::after {
  opacity:1;
}
@-webkit-keyframes slideOutLeft {
  from {}
  to {
    -webkit-transform: translateX(-10%);
  }
}
@keyframes slideOutLeft {
  from {}
  to {
    -webkit-transform: translateX(-10%);
    transform: translateX(-10%);
  }
}
@-webkit-keyframes slideFromRightFast {
  0%, 50% {
    -webkit-transform: translateX(100%);
  }
  100% {
    -webkit-transform: translateX(0%);
  }
}
@keyframes slideFromRightFast {
  0%, 50% {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
  100% {
    -webkit-transform: translateX(0%);
    transform: translateX(0%);
  }
}
@-webkit-keyframes slideOutRight {
  from {}
  to {
    -webkit-transform: translateX(10%);
  }
}
@keyframes slideOutRight {
  from {}
  to {
    -webkit-transform: translateX(10%);
    transform: translateX(10%);
  }
}
@-webkit-keyframes slideFromLeftFast {
  0%, 50% {
    -webkit-transform: translateX(-100%);
  }
  100% {
    -webkit-transform: translateX(0%);
  }
}
@keyframes slideFromLeftFast {
  0%, 50% {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
  100% {
    -webkit-transform: translateX(0%);
    transform: translateX(0%);
  }
}
.fxLetMeIn .navOutNext {
  -webkit-transform-origin:0% 50%;
  transform-origin:0% 50%;
  -webkit-animation:rotateOutRight 0.5s forwards ease-in-out;
  animation:rotateOutRight 0.5s forwards ease-in-out;
}
.fxLetMeIn .navInNext {
  z-index:1001;
  opacity:1;
  -webkit-animation:slideFromRightFast 0.5s forwards ease;
  animation:slideFromRightFast 0.5s forwards ease;
}
.fxLetMeIn .navOutPrev {
  -webkit-transform-origin:100% 0%;
  transform-origin:100% 0%;
  -webkit-animation:rotateOutLeft 0.5s forwards ease-in-out;
  animation:rotateOutLeft 0.5s forwards ease-in-out;
}
.fxLetMeIn .navInPrev {
  z-index:1001;
  opacity:1;
  -webkit-animation:slideFromLeftFast 0.5s forwards ease;
  animation:slideFromLeftFast 0.5s forwards ease;
}
.fxLetMeIn .navOutPrev::after, .fxLetMeIn .navOutNext::after {
  opacity:1;
}
@-webkit-keyframes rotateOutRight {
  from {}
  to {
    -webkit-transform: rotateY(10deg);
  }
}
@keyframes rotateOutRight {
  from {}
  to {
    -webkit-transform: rotateY(10deg);
    transform: rotateY(10deg);
  }
}
@-webkit-keyframes rotateOutLeft {
  from {}
  to {
    -webkit-transform: rotateY(-10deg);
  }
}
@keyframes rotateOutLeft {
  from {}
  to {
    -webkit-transform: rotateY(-10deg);
    transform: rotateY(-10deg);
  }
}
.fxStickIt .navOutNext {
  -webkit-transform-origin:50% 0%;
  transform-origin:50% 0%;
  -webkit-animation:rotateBottomSideOut 0.8s forwards ease-in;
  animation:rotateBottomSideOut 0.8s forwards ease-in;
}
.fxStickIt .navInNext {
  z-index:1001;
  opacity:1;
  -webkit-animation:slideInFromBottomDelayed 0.8s forwards;
  animation:slideInFromBottomDelayed 0.8s forwards;
}
.fxStickIt .navOutPrev {
  opacity:1;
  -webkit-animation:slideOutToBottom 0.8s forwards;
  animation:slideOutToBottom 0.8s forwards;
}
.fxStickIt .navInPrev {
  -webkit-transform-origin:50% 0%;
  transform-origin:50% 0%;
  -webkit-animation:rotateBottomSideIn 0.8s 0.1s forwards ease-in;
  animation:rotateBottomSideIn 0.8s 0.1s forwards ease-in;
}
@-webkit-keyframes rotateBottomSideOut {
  from {}
  40% {
    -webkit-transform: rotateX(-15deg);
    -webkit-animation-timing-function: ease-out;
  }
  100% {
    opacity: 0;
    -webkit-transform: scale(0.8) translateZ(-200px);
  }
}
@keyframes rotateBottomSideOut {
  from {}
  40% {
    -webkit-transform: rotateX(-15deg);
    transform: rotateX(-15deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  100% {
    opacity: 0;
    -webkit-transform: scale(0.8) translateZ(-200px);
    transform: scale(0.8) translateZ(-200px);
  }
}
@-webkit-keyframes slideInFromBottomDelayed {
  0%, 30% {
    -webkit-transform: translateY(100%);
  }
  100% {
    -webkit-transform: translateY(0);
  }
}
@keyframes slideInFromBottomDelayed {
  0%, 30% {
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
@-webkit-keyframes rotateBottomSideIn {
  0% {
    opacity: 0;
    -webkit-transform: scale(0.8) translateZ(-200px);
  }
  60% {
    -webkit-transform: scale(1) translateZ(0) rotateX(-15deg);
    -webkit-animation-timing-function: ease-out;
  }
  100% {
    opacity: 1;
    -webkit-transform: scale(1) translateZ(0) rotateX(0deg);
  }
}
@keyframes rotateBottomSideIn {
  0% {
    opacity: 0;
    -webkit-transform: scale(0.8) translateZ(-200px);
    transform: scale(0.8) translateZ(-200px);
  }
  60% {
    -webkit-transform: scale(1) translateZ(0) rotateX(-15deg);
    transform: scale(1) translateZ(0) rotateX(-15deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  100% {
    opacity: 1;
    -webkit-transform: scale(1) translateZ(0) rotateX(0deg);
    transform: scale(1) translateZ(0) rotateX(0deg);
  }
}
.fxArchiveMe .navOutNext {
  -webkit-animation:scaleHalfDown 0.7s forwards cubic-bezier(0.7, 0, 0.3, 1);
  animation:scaleHalfDown 0.7s forwards cubic-bezier(0.7, 0, 0.3, 1);
}
.fxArchiveMe .navInNext {
  z-index:1001;
  opacity:1;
  -webkit-animation:slideInFromBottom 0.7s forwards cubic-bezier(0.7, 0, 0.3, 1);
  animation:slideInFromBottom 0.7s forwards cubic-bezier(0.7, 0, 0.3, 1);
}
.fxArchiveMe .navOutPrev {
  -webkit-animation:slideOutToBottom 0.7s forwards cubic-bezier(0.7, 0, 0.3, 1);
  animation:slideOutToBottom 0.7s forwards cubic-bezier(0.7, 0, 0.3, 1);
}
.fxArchiveMe .navInPrev {
  -webkit-animation:scaleHalfUp 0.7s forwards cubic-bezier(0.7, 0, 0.3, 1);
  animation:scaleHalfUp 0.7s forwards cubic-bezier(0.7, 0, 0.3, 1);
}
.fxArchiveMe li::after, .fxArchiveMe .navOutNext::before {
  opacity:1;
}
.fxArchiveMe li::before, .fxArchiveMe li.current::after, .fxArchiveMe .navInNext::after, .fxArchiveMe .navInPrev::after {
  opacity:0;
}
.fxArchiveMe .navInNext::after {
  transition:none;
}
@-webkit-keyframes scaleHalfDown {
  from {}
  to {
    -webkit-transform: scale(0.6);
    opacity: 0;
  }
}
@keyframes scaleHalfDown {
  from {}
  to {
    -webkit-transform: scale(0.6);
    transform: scale(0.6);
    opacity: 0;
  }
}
@-webkit-keyframes slideOutToBottom {
  from {}
  to {
    -webkit-transform: translateY(100%);
  }
}
@keyframes slideOutToBottom {
  from {}
  to {
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
  }
}
@-webkit-keyframes scaleHalfUp {
  from {
    opacity: 0;
    -webkit-transform: scale(0.6);
  }
  to {
    opacity: 1;
    -webkit-transform: scale(1);
  }
}
@keyframes scaleHalfUp {
  from {
    opacity: 0;
    -webkit-transform: scale(0.6);
    transform: scale(0.6);
  }
  to {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
.fxVGrowth .navOutNext {
  -webkit-animation:scaleDown 0.6s forwards cubic-bezier(0.6, 0, 0.4, 1);
  animation:scaleDown 0.6s forwards cubic-bezier(0.6, 0, 0.4, 1);
}
.fxVGrowth .navInNext {
  z-index:1001;
  opacity:1;
  -webkit-transform-origin:50% 100%;
  transform-origin:50% 100%;
  -webkit-animation:maximize 0.6s forwards cubic-bezier(0.6, 0, 0.4, 1);
  animation:maximize 0.6s forwards cubic-bezier(0.6, 0, 0.4, 1);
}
.fxVGrowth .navOutPrev {
  -webkit-animation:scaleDown 0.6s forwards cubic-bezier(0.6, 0, 0.4, 1);
  animation:scaleDown 0.6s forwards cubic-bezier(0.6, 0, 0.4, 1);
}
.fxVGrowth .navInPrev {
  z-index:1001;
  opacity:1;
  -webkit-transform-origin:50% 0%;
  transform-origin:50% 0%;
  -webkit-animation:maximize 0.6s forwards cubic-bezier(0.6, 0, 0.4, 1);
  animation:maximize 0.6s forwards cubic-bezier(0.6, 0, 0.4, 1);
}
@-webkit-keyframes maximize {
  from {
    -webkit-transform: scale(0);
  }
  to {
    -webkit-transform: scale(1);
  }
}
@keyframes maximize {
  from {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  to {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
.fxSlideBehind .navOutNext {
  -webkit-animation:hideLeft 0.8s forwards;
  animation:hideLeft 0.8s forwards;
}
.fxSlideBehind .navInNext {
  -webkit-animation:showRight 0.8s forwards;
  animation:showRight 0.8s forwards;
}
.fxSlideBehind .navOutPrev {
  -webkit-animation:hideRight 0.8s forwards;
  animation:hideRight 0.8s forwards;
}
.fxSlideBehind .navInPrev {
  -webkit-animation:showLeft 0.8s forwards;
  animation:showLeft 0.8s forwards;
}
@-webkit-keyframes hideLeft {
  0% {
    -webkit-transform: translateZ( 0px);
  }
  40% {
    -webkit-transform: translate( 0, -40%) scale( 0.8) rotateX( -20deg);
    z-index: 9999;
  }
  100% {
    opacity: 1;
    -webkit-transform: translateZ( -400px);
  }
}
@keyframes hideLeft {
  0% {
    -webkit-transform: translateZ( 0px);
    transform: translateZ( 0px);
  }
  40% {
    -webkit-transform: translate( 0, -40%) scale( 0.8) rotateX( -20deg);
    transform: translate( 0, -40%) scale( 0.8) rotateX( -20deg);
    z-index: 9999;
  }
  100% {
    opacity: 1;
    -webkit-transform: translateZ( -400px);
    transform: translateZ( -400px);
  }
}
@-webkit-keyframes showRight {
  0% {
    -webkit-transform: translateZ( -400px);
    opacity: 1;
  }
  40% {
    -webkit-transform: translate( 0, 40%) scale( 0.8) rotateX( 20deg);
    opacity: 1;
  }
  41% {
    -webkit-transform: translate( 0, 40%) scale( 0.8) rotateX( 20deg);
    opacity: 1;
    z-index: 9999;
  }
  100% {
    -webkit-transform: translateZ( 0px);
    opacity: 1;
    z-index: 9999;
  }
}
@keyframes showRight {
  0% {
    -webkit-transform: translateZ( -400px);
    transform: translateZ( -400px);
    opacity: 1;
  }
  40% {
    -webkit-transform: translate( 0, 40%) scale( 0.8) rotateX( 20deg);
    transform: translate( 0, 40%) scale( 0.8) rotateX( 20deg);
    opacity: 1;
  }
  41% {
    -webkit-transform: translate( 0, 40%) scale( 0.8) rotateX( 20deg);
    transform: translate( 0, 40%) scale( 0.8) rotateX( 20deg);
    opacity: 1;
    z-index: 9999;
  }
  100% {
    -webkit-transform: translateZ( 0px);
    transform: translateZ( 0px);
    opacity: 1;
    z-index: 9999;
  }
}
@-webkit-keyframes hideRight {
  0% {
    -webkit-transform: translateZ( 0px);
  }
  40% {
    -webkit-transform: translate( 0, 40%) scale( 0.8) rotateX( 20deg);
    z-index: 9999;
  }
  100% {
    opacity: 1;
    -webkit-transform: translateZ( -400px);
  }
}
@keyframes hideRight {
  0% {
    -webkit-transform: translateZ( 0px);
    transform: translateZ( 0px);
  }
  40% {
    -webkit-transform: translate( 0, 40%) scale( 0.8) rotateX( 20deg);
    transform: translate( 0, 40%) scale( 0.8) rotateX( 20deg);
    z-index: 9999;
  }
  100% {
    opacity: 1;
    -webkit-transform: translateZ( -400px);
    transform: translateZ( -400px);
  }
}
@-webkit-keyframes showLeft {
  0% {
    -webkit-transform: translateZ( -400px);
    opacity: 1;
  }
  40% {
    -webkit-transform: translate( 0, -40%) scale( 0.8) rotateX( -20deg);
    opacity: 1;
  }
  41% {
    -webkit-transform: translate( 0, -40%) scale( 0.8) rotateX( -20deg);
    opacity: 1;
    z-index: 9999;
  }
  100% {
    -webkit-transform: translateZ( 0px);
    opacity: 1;
    z-index: 9999;
  }
}
@keyframes showLeft {
  0% {
    -webkit-transform: translateZ( -400px);
    transform: translateZ( -400px);
    opacity: 1;
  }
  40% {
    -webkit-transform: translate( 0, -40%) scale( 0.8) rotateX( -20deg);
    transform: translate( 0, -40%) scale( 0.8) rotateX( -20deg);
    opacity: 1;
  }
  41% {
    -webkit-transform: translate( 0, -40%) scale( 0.8) rotateX( -20deg);
    transform: translate( 0, -40%) scale( 0.8) rotateX( -20deg);
    opacity: 1;
    z-index: 9999;
  }
  100% {
    -webkit-transform: translateZ( 0px);
    transform: translateZ( 0px);
    opacity: 1;
    z-index: 9999;
  }
}
.fxSoftPulse .navOutPrev, .fxSoftPulse .navOutNext {
  -webkit-animation:scaleUpFadeOut 0.8s forwards ease-in;
  animation:scaleUpFadeOut 0.8s forwards ease-in;
}
.fxSoftPulse .navInPrev, .fxSoftPulse .navInNext {
  -webkit-animation:scaleDownFadeIn 0.8s forwards ease-out;
  animation:scaleDownFadeIn 0.8s forwards ease-out;
}
@-webkit-keyframes scaleUpFadeOut {
  from {}
  50% {
    -webkit-transform: scale(1.2);
    opacity: 1;
  }
  75% {
    -webkit-transform: scale(1.1);
    opacity: 0;
  }
  100% {
    -webkit-transform: scale(1);
    opacity: 0;
  }
}
@keyframes scaleUpFadeOut {
  from {}
  50% {
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
    opacity: 1;
  }
  75% {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    opacity: 0;
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 0;
  }
}
@-webkit-keyframes scaleDownFadeIn {
  from {}
  50% {
    opacity: 1;
    -webkit-transform: scale(1.2);
  }
  100% {
    opacity: 1;
    -webkit-transform: scale(1);
  }
}
@keyframes scaleDownFadeIn {
  from {}
  50% {
    opacity: 1;
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }
  100% {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
.fxEarthquake .navOutNext {
  opacity:1;
  -webkit-animation:shakeSlideBottom 1s 0.1s forwards;
  animation:shakeSlideBottom 1s 0.1s forwards;
}
.fxEarthquake .navInNext {
  -webkit-animation:pushFromTop 1s 0.1s forwards;
  animation:pushFromTop 1s 0.1s forwards;
}
.fxEarthquake .navOutPrev {
  opacity:1;
  -webkit-animation:shakeSlideTop 1s 0.1s forwards;
  animation:shakeSlideTop 1s 0.1s forwards;
}
.fxEarthquake .navInPrev {
  opacity:1;
  -webkit-animation:pushFromBottom 1s 0.1s forwards;
  animation:pushFromBottom 1s 0.1s forwards;
}
.fxEarthquake li::after {
  content:'';
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  opacity:0;
  pointer-events:none;
  background-color:rgba(0, 0, 0, 0.3);
  transition:opacity 0.5s;
}
.fxEarthquake .navOutPrev::after, .fxEarthquake .navOutNext::after {
  opacity:1;
}
.fxCliffDiving .navOutNext {
  opacity:1;
  -webkit-animation:rotateOutCircLeft 0.9s forwards cubic-bezier(0.7, 0, 0.3, 1);
  animation:rotateOutCircLeft 0.9s forwards cubic-bezier(0.7, 0, 0.3, 1);
}
.fxCliffDiving .navInNext {
  opacity:1;
  -webkit-animation:rotateInCircRight 0.9s forwards cubic-bezier(0.7, 0, 0.3, 1);
  animation:rotateInCircRight 0.9s forwards cubic-bezier(0.7, 0, 0.3, 1);
}
.fxCliffDiving .navOutPrev {
  opacity:1;
  -webkit-animation:rotateOutCircRight 0.9s forwards cubic-bezier(0.7, 0, 0.3, 1);
  animation:rotateOutCircRight 0.9s forwards cubic-bezier(0.7, 0, 0.3, 1);
}
.fxCliffDiving .navInPrev {
  opacity:1;
  -webkit-animation:rotateInCircLeft 0.9s forwards cubic-bezier(0.7, 0, 0.3, 1);
  animation:rotateInCircLeft 0.9s forwards cubic-bezier(0.7, 0, 0.3, 1);
}
.fxCliffDiving .navOutPrev::after, .fxCliffDiving .navOutNext::after {
  opacity:1;
}
@-webkit-keyframes rotateOutCircLeft {
  from {}
  to {
    -webkit-transform: rotate(-20deg) translateX(-100%);
  }
}
@keyframes rotateOutCircLeft {
  from {}
  to {
    -webkit-transform: rotate(-20deg) translateX(-100%);
    transform: rotate(-20deg) translateX(-100%);
  }
}
@-webkit-keyframes rotateInCircRight {
  from {
    -webkit-transform: rotate(20deg) translateX(100%);
  }
  to {
    -webkit-transform: rotate(0deg) translateX(0);
  }
}
@keyframes rotateInCircRight {
  from {
    -webkit-transform: rotate(20deg) translateX(100%);
    transform: rotate(20deg) translateX(100%);
  }
  to {
    -webkit-transform: rotate(0deg) translateX(0);
    transform: rotate(0deg) translateX(0);
  }
}
@-webkit-keyframes rotateOutCircRight {
  from {}
  to {
    -webkit-transform: rotate(20deg) translateX(100%);
  }
}
@keyframes rotateOutCircRight {
  from {}
  to {
    -webkit-transform: rotate(20deg) translateX(100%);
    transform: rotate(20deg) translateX(100%);
  }
}
@-webkit-keyframes rotateInCircLeft {
  from {
    -webkit-transform: rotate(-20deg) translateX(-100%);
  }
  to {
    -webkit-transform: rotate(0deg) translateX(0);
  }
}
@keyframes rotateInCircLeft {
  from {
    -webkit-transform: rotate(-20deg) translateX(-100%);
    transform: rotate(-20deg) translateX(-100%);
  }
  to {
    -webkit-transform: rotate(0deg) translateX(0);
    transform: rotate(0deg) translateX(0);
  }
}
.woocommerce-checkout .form-row .chosen-container {
  width:100%!important
}
.woocommerce-checkout .form-row .chosen-container-single .chosen-single {
  height:28px;
  line-height:29px
}
.woocommerce-checkout .form-row .chosen-container-single .chosen-single div b {
  background:url("/assets/modern/images/chosen-sprite.png") no-repeat 0 3px!important
}
.woocommerce-checkout .form-row .chosen-container-active .chosen-single-with-drop div b {
  background-position:-18px 4px!important
}
.woocommerce-checkout .form-row .chosen-container-single .chosen-search input {
  line-height:13px;
  width:100%!important;
  -webkit-box-sizing:border-box;
  -moz-box-sizing:border-box;
  box-sizing:border-box
}
.woocommerce-checkout .form-row .chosen-container .chosen-drop {
  width:100%!important;
  -webkit-box-sizing:border-box;
  -moz-box-sizing:border-box;
  box-sizing:border-box
}
@media only screen and (-webkit-min-device-pixel-ratio:2), only screen and (min-resolution:144dpi) {
  .woocommerce-checkout .form-row .chosen-container-single .chosen-single div b {
    background-image: url("/assets/modern/images/chosen-sprite@2x.png")!important;
    background-position: 0 5px!important;
    background-repeat: no-repeat!important;
    background-size: 52px 37px!important
  }
  .woocommerce-checkout .form-row .chosen-container-active .chosen-single-with-drop div b {
    background-position: -18px 5px!important
  }
}
.chosen-container .chosen-results li.active-result {
  display:list-item;
  cursor:pointer
}
.chosen-container .chosen-results li.disabled-result {
  display:list-item;
  color:#ccc;
  cursor:default
}
.chosen-container .chosen-results li.no-results {
  display:list-item;
  background:#f4f4f4
}
.chosen-container .chosen-results li.group-result {
  display:list-item;
  font-weight:700;
  cursor:default
}
.chosen-container .chosen-results li.group-option {
  padding-left:15px
}
.chosen-container-multi .chosen-choices li.search-field {
  margin:0;
  padding:0;
  white-space:nowrap
}
.chosen-container-multi .chosen-choices li.search-field input[type=text] {
  margin:1px 0;
  padding:5px;
  height:15px;
  outline:0;
  border:0!important;
  background:transparent!important;
  box-shadow:none;
  color:#666;
  font-size:100%;
  font-family:sans-serif;
  line-height:normal;
  border-radius:0
}
.chosen-container-multi .chosen-choices li.search-field .default {
  color:#999
}
.chosen-container-multi .chosen-choices li.search-choice {
  position:relative;
  margin:3px 0 3px 5px;
  padding:3px 20px 3px 5px;
  border:1px solid #aaa;
  border-radius:3px;
  background-color:#e4e4e4;
  background-image:-webkit-gradient(linear, 50% 0, 50% 100%, color-stop(20%, #f4f4f4), color-stop(50%, #f0f0f0), color-stop(52%, #e8e8e8), color-stop(100%, #eee));
  background-image:-webkit-linear-gradient(#f4f4f4 20%, #f0f0f0 50%, #e8e8e8 52%, #eee 100%);
  background-image:-moz-linear-gradient(#f4f4f4 20%, #f0f0f0 50%, #e8e8e8 52%, #eee 100%);
  background-image:-o-linear-gradient(#f4f4f4 20%, #f0f0f0 50%, #e8e8e8 52%, #eee 100%);
  background-image:linear-gradient(#f4f4f4 20%, #f0f0f0 50%, #e8e8e8 52%, #eee 100%);
  background-clip:padding-box;
  box-shadow:0 0 2px #fff inset, 0 1px 0 rgba(0, 0, 0, .05);
  color:#333;
  line-height:13px;
  cursor:default
}
.chosen-container-multi .chosen-choices li.search-choice .search-choice-close {
  position:absolute;
  top:4px;
  right:3px;
  display:block;
  width:12px;
  height:12px;
  background:url("/assets/modern/images/chosen-sprite.png") -42px 1px no-repeat;
  font-size:1px
}
.chosen-container-multi .chosen-choices li.search-choice .search-choice-close:hover {
  background-position:-42px -10px
}
.chosen-container-multi .chosen-choices li.search-choice-disabled {
  padding-right:5px;
  border:1px solid #ccc;
  background-color:#e4e4e4;
  background-image:-webkit-gradient(linear, 50% 0, 50% 100%, color-stop(20%, #f4f4f4), color-stop(50%, #f0f0f0), color-stop(52%, #e8e8e8), color-stop(100%, #eee));
  background-image:-webkit-linear-gradient(top, #f4f4f4 20%, #f0f0f0 50%, #e8e8e8 52%, #eee 100%);
  background-image:-moz-linear-gradient(top, #f4f4f4 20%, #f0f0f0 50%, #e8e8e8 52%, #eee 100%);
  background-image:-o-linear-gradient(top, #f4f4f4 20%, #f0f0f0 50%, #e8e8e8 52%, #eee 100%);
  background-image:linear-gradient(top, #f4f4f4 20%, #f0f0f0 50%, #e8e8e8 52%, #eee 100%);
  color:#666
}
.chosen-container-multi .chosen-choices li.search-choice-focus {
  background:#d4d4d4
}
.chosen-container-multi .chosen-choices li.search-choice-focus .search-choice-close {
  background-position:-42px -10px
}
.chosen-container-multi .chosen-drop .result-selected {
  display:list-item;
  color:#ccc;
  cursor:default
}
.chosen-container-active .chosen-choices li.search-field input[type=text] {
  color:#111!important
}
.chosen-disabled {
  opacity:.5!important;
  cursor:default
}
.chosen-disabled .chosen-choices .search-choice .search-choice-close, .chosen-disabled .chosen-single {
  cursor:default
}
.chosen-rtl .chosen-choices li.search-field input[type=text] {
  direction:rtl
}
.chosen-rtl .chosen-choices li.search-choice {
  margin:3px 5px 3px 0;
  padding:3px 5px 3px 19px
}
.chosen-rtl .chosen-choices li.search-choice .search-choice-close {
  right:auto;
  left:4px
}
.chosen-rtl .chosen-results li.group-option {
  padding-right:15px;
  padding-left:0
}
@media only screen and (-webkit-min-device-pixel-ratio:2), only screen and (min-resolution:144dpi) {
  .chosen-container .chosen-results-scroll-down span, .chosen-container .chosen-results-scroll-up span, .chosen-container-multi .chosen-choices .search-choice .search-choice-close, .chosen-container-single .chosen-search input[type=text], .chosen-container-single .chosen-single abbr, .chosen-container-single .chosen-single div b, .chosen-rtl .chosen-search input[type=text] {
    background-image: url("/assets/modern/images/chosen-sprite@2x.png")!important;
    background-size: 52px 37px!important;
    background-repeat: no-repeat!important
  }
}
.my-account .ui-iggrid th.ui-iggrid-header {
  border:none;
  border-bottom:1px solid #ddd;
  text-align:left;
  background:#f3f3f3;
  padding:9px 5px;
  color:#666;
  font-weight:bold;
}
.my-account .ui-iggrid-table tbody>tr>td {
  border-left:none;
  border-right:none;
  padding:9px 5px;
  color:#666;
}
.my-account .ui-iggrid-table tbody>tr {
  cursor:pointer;
}
.my-account .ui-iggrid-table .ui-state-hover {
  background-color:#e5e5e5;
}
.my-account .ui-iggrid-table tr.ui-iggrid-activerow td, .my-account .ui-iggrid-table tr.ui-iggrid-activerow .ui-state-hover {
  background-color:#c6c6c6 !important;
  color:#fff !important;
}
.my-account .ui-iggrid-table tr.ui-iggrid-activerow td a, .my-account .ui-iggrid-table tr.ui-iggrid-activerow .ui-state-hover a {
  color:#fff !important;
}
.my-account .ui-igedit-container {
  width:100% !important
}
.my-account .ui-igeditor-input-container {
  height:33px;
}
.my-account .ui-iggrid-filtercell {
  padding:0 5px;
  border-style:none;
  height:42px;
}
.my-account .ui-iggrid-filtercell .data-filter-editor {
  padding:5px;
}
.my-account .ui-widget {
  font-family:"aktiv-grotesk", sans-serif;
  font-size:100%;
}
.my-account .download-package-grid {
  margin-bottom:0;
}
.my-account .download-package-grid .ui-iggrid-childarea {
  padding-left:33px;
}
.my-account .ui-iggrid .ui-iggrid-tablebody>tr>td:first-child, .ui-iggrid .ui-iggrid-table>tbody>tr>td:first-child, .ui-iggrid thead .ui-iggrid-editingcell:first-child, .ui-iggrid .ui-iggrid-addrow+.ui-iggrid-activerow td:first-child, .ui-iggrid th.ui-iggrid-rowselector-class:first-child {
  border-left:none;
}
.my-account .badge-table {
  margin-bottom:20px !important;
}
.my-account .badge-table>tbody>tr>td {
  padding:0;
  border:none;
}
.my-account .badge-table>tbody>tr>td.cell-padding {
  padding:3px 5px;
}
.my-account .tabItem {
  padding:0;
}
.my-account .ui-widget-header {
  border:none;
  background-color:#ffffff;
}
.my-account .ui-tabs .ui-tabs-nav li.ui-state-default {
  background:#ffffff;
  border:none;
}
.my-account .ui-tabs .ui-tabs-nav li.ui-state-active {
  background:#4897AA;
}
.my-account .ui-tabs-anchor {
  padding:10px 15px !important;
}
.my-account .tabs .ui-tabs-nav li:first-child {
  border-left:1px solid #dedede !important;
}
.my-account .download-package-grid>tbody>tr>td {
  border-style:none;
}
.my-account .download-package-grid>thead {
  display:none;
}
.my-account .ui-widget-content a {
  color:#0099ff;
}
.my-account .right-align {
  text-align:right !important;
}
.my-account .keys-and-downloads .ui-tabs {
  padding:0;
}
.my-account .ui-iggrid td.ui-state-default, .ui-iggrid td.ui-state-highlight, .ui-iggrid td.ui-state-hover {
  font-weight:inherit;
}
.my-account .ui-iggrid-tooltip {
  padding:0;
}
.my-account .gray-color {
  color:#666;
}
#htmlEditors .ui-igPathFinder {
  margin-top:0;
}
#htmlEditors .ui-igPathFinder .ui-button {
  vertical-align:baseline;
}
#htmlEditors .ui-igcombo-field {
  padding:0;
  height:inherit;
  width:inherit;
  margin-bottom:0;
  background-color:white;
  border:none;
  color:black;
  font-size:inherit;
  text-indent:0;
  letter-spacing:0;
  text-transform:none;
}
#ordersGrid_headers {
  width:100%;
}
:root {
  --color-flamingo:#f05a2b;
  --color-tree-poppy:#f59321;
  --color-port-gore:#28245e;
}
html {
  font-size:16px;
}
body {
  color:#262626;
  font-family:"aktiv-grotesk", "Helvetica Neue", "Segoe UI", Helvetica, Arial, sans-serif;
  font-weight:400;
  font-size:16px;
  line-height:1.5em;
  letter-spacing:normal;
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
}
abbr[title], acronym[title] {
  text-decoration:none;
}
h1, h2, h3, h4, h5, h6, .text--h1, .text--h2, .text--h3, .text--h4, .text--h5, .text--h6 {
  font-size:16px;
  font-weight:700;
  line-height:1.5em;
  letter-spacing:normal;
  text-transform:none;
  word-wrap:normal;
}
.text--h1, .text--h2, .text--h3, .text--h4, .text--h5, .text--h6 {
  display:block;
}
h1, .text--h1 {
  color:#262626;
  font-family:"aktiv-grotesk", "Helvetica Neue", "Segoe UI", Helvetica, Arial, sans-serif;
  font-size:4.063rem;
  font-weight:400;
  line-height:1.25em;
}
h2, .text--h2 {
  color:#262626;
  font-family:"aktiv-grotesk", "Helvetica Neue", "Segoe UI", Helvetica, Arial, sans-serif;
  font-size:2.875rem;
  line-height:1.25em;
}
h3, .text--h3 {
  color:#262626;
  font-family:"aktiv-grotesk", "Helvetica Neue", "Segoe UI", Helvetica, Arial, sans-serif;
  font-size:2rem;
  line-height:1.25em;
}
h4, .text--h4 {
  color:#262626;
  font-family:"aktiv-grotesk", "Helvetica Neue", "Segoe UI", Helvetica, Arial, sans-serif;
  font-size:1.375rem;
  line-height:1.25em;
}
h5, .text--h5 {
  color:#262626;
  font-family:"aktiv-grotesk", "Helvetica Neue", "Segoe UI", Helvetica, Arial, sans-serif;
  font-size:1.125rem;
}
h6, .text--h6 {
  color:#262626;
  font-family:"aktiv-grotesk", "Helvetica Neue", "Segoe UI", Helvetica, Arial, sans-serif;
  font-size:1rem;
}
h1.emphasize, h2.emphasize, h3.emphasize, h4.emphasize, h5.emphasize, h6.emphasize, .text--h1.emphasize, .text--h2.emphasize, .text--h3.emphasize, .text--h4.emphasize, .text--h5.emphasize, .text--h6.emphasize {
  font-weight:bold;
}
h1.deemphasize, h2.deemphasize, h3.deemphasize, h4.deemphasize, h5.deemphasize, h6.deemphasize, .text--h1.deemphasize, .text--h2.deemphasize, .text--h3.deemphasize, .text--h4.deemphasize, .text--h5.deemphasize, .text--h6.deemphasize {
  font-weight:normal;
}
.bg--light h1, .bg--light h2, .bg--light h4, .bg--light h3, .bg--light h5, .bg--light h6, .bg--light .text--h1, .bg--light .text--h2, .bg--light .text--h3, .bg--light .text--h4, .bg--light .text--h5, .bg--light .text--h6 {
  color:#262626;
}
[class*="bg--dark"] h1, [class*="bg--dark"] h2, [class*="bg--dark"] h3, [class*="bg--dark"] h4, [class*="bg--dark"] h5, [class*="bg--dark"] h6, [class*="bg--dark"] .text--h1, [class*="bg--dark"] .text--h2, [class*="bg--dark"] .text--h3, [class*="bg--dark"] .text--h4, [class*="bg--dark"] .text--h5, [class*="bg--dark"] .text--h6 {
  color:#f7f7f7;
}
[data-theme*="indigo"] h1, [data-theme*="indigo"] h2, [data-theme*="indigo"] h3, [data-theme*="indigo"] h4, [data-theme*="indigo"] h5, [data-theme*="indigo"] h6, [data-theme*="indigo"] .text--h1, [data-theme*="indigo"] .text--h2, [data-theme*="indigo"] .text--h3, [data-theme*="indigo"] .text--h4, [data-theme*="indigo"] .text--h5, [data-theme*="indigo"] .text--h6 {
  color:var(--color-port-gore);
  font-family:"aktiv-grotesk", "Helvetica Neue", "Segoe UI", Helvetica, Arial, sans-serif;
  font-weight:400;
}
[data-theme*="indigo"] .bg--light h1, [data-theme*="indigo"] .bg--light h2, [data-theme*="indigo"] .bg--light h4, [data-theme*="indigo"] .bg--light h3, [data-theme*="indigo"] .bg--light h5, [data-theme*="indigo"] .bg--light h6, [data-theme*="indigo"] .bg--light .text--h1, [data-theme*="indigo"] .bg--light .text--h2, [data-theme*="indigo"] .bg--light .text--h3, [data-theme*="indigo"] .bg--light .text--h4, [data-theme*="indigo"] .bg--light .text--h5, [data-theme*="indigo"] .bg--light .text--h6 {
  color:var(--color-port-gore);
}
[data-theme*="indigo"] [class*="bg--dark"] h1, [data-theme*="indigo"] [class*="bg--dark"] h2, [data-theme*="indigo"] [class*="bg--dark"] h3, [data-theme*="indigo"] [class*="bg--dark"] h4, [data-theme*="indigo"] [class*="bg--dark"] h5, [data-theme*="indigo"] [class*="bg--dark"] h6, [data-theme*="indigo"] [class*="bg--dark"] .text--h1, [class*="bg--dark"] .text--h2, [data-theme*="indigo"] [class*="bg--dark"] .text--h3, [class*="bg--dark"] .text--h4, [data-theme*="indigo"] [class*="bg--dark"] .text--h5, [class*="bg--dark"] .text--h6 {
  color:#f7f7f7;
}
sup {
  position:relative;
  top:-0.5em;
  font-size:.75em;
}
p {
  color:#262626;
  font-size:1em;
}
.bg--light, .bg--light p, .bg--light .sub-headline {
  color:#262626;
}
.bg--dark, .bg--dark p, .bg--dark .sub-headline {
  color:#b4b4b4;
}
.bg--darker, .bg--darker p, .bg--darker .sub-headline {
  color:#ededed;
}
.bg--light .sub-headline--normal {
  color:#262626;
}
[class*="bg--dark"] .sub-headline--normal {
  color:#f7f7f7;
}
.gate-top {
  position:relative;
  margin-top:-25px;
  z-index:4;
}
.gate-top:before {
  position:absolute;
  content:'';
  top:0;
  left:0;
  right:0;
  width:100%;
  height:120px;
  transform:translateY(-99%);
  -webkit-transform:translateY(-99%);
  background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAB4CAYAAAAzOJiAAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyVpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTBEQUJENzVCODdDMTFFQTlGMDJDNjBFNTZGNjE3NUQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTBEQUJENzZCODdDMTFFQTlGMDJDNjBFNTZGNjE3NUQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozNkFCNTg2MkI4NzgxMUVBOUYwMkM2MEU1NkY2MTc1RCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFMERBQkQ3NEI4N0MxMUVBOUYwMkM2MEU1NkY2MTc1RCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PtMqNcEAAABSSURBVHjalJHBDgAgCEIJ+v9ftmPLYdalKc+cKCJiEEB6aFIayirdmnqgs4H7oYom4Gip6drgIZr9LDoN7pL5Y7A0zX4vNNt113o9sqNI2hJgAD4KBOwY56vcAAAAAElFTkSuQmCC');
  background-repeat:repeat-x;
  z-index:3;
}
.h-group {
  margin-bottom:50px;
}
.h-group>*:first-child {
  margin-bottom:5px;
}
.h-group>*:last-child {
  margin-bottom:0;
}
.h-group--fcspace>*:first-child {
  margin-bottom:1.5rem;
}
.h-group--mar-bottom-lg {
  margin-bottom:100px;
}
.h-group--mar-bottom-md {
  margin-bottom:75px;
}
.h-group--mar-bottom-sm {
  margin-bottom:25px;
}
.h-group--mar-bottom-xs {
  margin-bottom:5px;
}
.h-group--mar-bottom-none {
  margin-bottom:0;
}
.h-group--content-collapse>*:first-child, .h-group--content-collapse>* {
  margin-bottom:0;
}
.emphasize, .font-weight--bold {
  font-weight:bold;
}
[data-theme*="indigo-design"] .emphasize {
  font-weight:600;
}
.deemphasize, .font-weight--normal {
  font-weight:normal;
}
.bg--light h1 .emphasize, .bg--light h2 .emphasize, .bg--light h3 .emphasize, .bg--light h4 .emphasize, .bg--light h5 .emphasize, .bg--light h6 .emphasize, .bg--light text--h1 .emphasize, .bg--light text--h2 .emphasize, .bg--light text--h3 .emphasize, .bg--light text--h4 .emphasize, .bg--light text--h5 .emphasize, .bg--light text--h6 .emphasize, .bg--light .sub-headline--normal .emphasize {
  color:#000;
  font-size:inherit;
  font-weight:bold;
}
[class*="bg--dark"] h1 .emphasize, [class*="bg--dark"] h2 .emphasize, [class*="bg--dark"] h3 .emphasize, [class*="bg--dark"] h4 .emphasize, [class*="bg--dark"] h5 .emphasize, [class*="bg--dark"] h6 .emphasize, [class*="bg--dark"] text--h1 .emphasize, [class*="bg--dark"] text--h2 .emphasize, [class*="bg--dark"] text--h3 .emphasize, [class*="bg--dark"] text--h4 .emphasize, [class*="bg--dark"] text--h5 .emphasize, [class*="bg--dark"] text--h6 .emphasize, [class*="bg--dark"] .sub-headline--normal .emphasize {
  color:#fff;
  font-size:inherit;
  font-weight:bold;
}
.bg--light .emphasize, .bg--light .sub-headline .emphasize {
  color:#000;
}
[class*="bg--dark"] .emphasize, [class*="bg--dark"] .sub-headline .emphasize {
  color:#f7f7f7;
}
.bgColor--white {
  background-color:#fff;
}
.bgColor--cod-gray {
  background-color:#111;
}
.bgColor--mine-shaft-dark {
  background-color:#282828;
}
.bgColor--mine-shaft {
  background-color:#333;
}
.bgColor--dove-gray {
  background-color:#666;
}
.bgColor--gallery {
  background-color:#f5f5f5;
}
.bgColor--gallery-midtone {
  background-color:#edebeb;
}
.bgColor--white-smoke {
  background-color:#f5f5f5;
}
.bgColor--alabaster {
  background-color:#f7f7f7;
}
.bgColor--apple {
  background-color:#4b8636;
}
.bgColor--forest-green {
  background-color:#309331;
}
.bgColor--mountain-meadow {
  background-color:#19AD87;
}
.bgColor--venice-blue {
  background-color:#055b7d;
}
.bgColor--bondi-blue {
  background-color:#0094bf;
}
.bgColor--regal-blue {
  background-color:#004776;
}
.bgColor--azure-radiance {
  background-color:#0099ff;
}
.bgColor--biscay {
  background-color:#1B4561;
}
.bgColor--denim {
  background-color:#1074BD;
}
.bgColor--daintree {
  background-color:#002a3d;
}
.bgColor--cello {
  background-color:#1E425A;
}
.bgColor--havelock-blue {
  background-color:#3E87CE;
}
.bgColor--lochmara {
  background-color:#0072BC;
}
.bgColor--dodger-blue {
  background-color:#2baefa;
}
.bgColor--deep-sapphire {
  background-color:#063563;
}
.bgColor--san-marino {
  background-color:#3F51B5;
}
.bgColor--sapphire {
  background-color:#37459e;
}
.bgColor--jacarta {
  background-color:#2d336d;
}
.bgColor--port-gore {
  background-color:var(--color-port-gore);
}
.bgColor--port-gore-dark {
  background-color:#1B1B4D;
}
.bgColor--gigas {
  background-color:#58358b;
}
.bgColor--eminence {
  background-color:#6c2d74;
}
.bgColor--gamboge {
  background-color:#f49410;
}
.bgColor--tree-poppy {
  background-color:#FCA31C;
}
.bgColor--sunshade {
  background-color:#FFA52D;
}
.bgColor--alizarin-crimson {
  background-color:#e9212c;
}
.bgColor--bright-red {
  background-color:#a70009;
}
.bgColor--lipstick {
  background-color:#b1005d;
}
.bgColor--razzmatazz {
  background-color:#E71576;
}
.bgColor--wine-berry {
  background-color:#3F1835;
}
.bgColor--mulberry-wood {
  background-color:#61054F;
}
.bgColor--camelot {
  background-color:#822d5c;
}
.color--flamingo {
  color:var(--color-flamingo) !important;
}
.color--tree-poppy {
  color:var(--color-tree-poppy) !important;
}
.color--port-gore {
  color:var(--color-port-gore) !important;
}
.arrow--box {
  position:relative;
}
.arrow--daintree-top:before {
  bottom:100%;
  left:50%;
  border:solid transparent;
  content:" ";
  height:0;
  width:0;
  position:absolute;
  pointer-events:none;
  border-bottom-color:#002a3d;
  border-width:30px;
  margin-left:-30px;
}
.arrow--daintree-bottom:before {
  top:100%;
  left:50%;
  border:solid transparent;
  content:" ";
  height:0;
  width:0;
  position:absolute;
  pointer-events:none;
  border-top-color:#002a3d;
  border-width:17px;
  margin-left:-17px;
}
.gradient--product-top-no-img {
  background:-webkit-linear-gradient(top, rgba(40, 40, 40, 1) 0%, rgba(40, 40, 40, 1) 60%, rgba(255, 255, 255, 0.02) 80%, rgba(252, 252, 252, 0) 90%) center top;
  background:linear-gradient(to bottom, rgba(40, 40, 40, 1) 0%, rgba(40, 40, 40, 1) 60%, rgba(255, 255, 255, 0.02) 80%, rgba(252, 252, 252, 0) 90%) center top;
}
.gradient--product-top {
  background:-webkit-linear-gradient(top, rgba(40, 40, 40, 1) 0%, rgba(40, 40, 40, 1) 60%, rgba(255, 255, 255, 0.02) 80%, rgba(252, 252, 252, 0) 90%) center top, url("https://static.infragistics.com/marketing/Website/css/background/perspecivegridcontrols-img-1920.png") no-repeat scroll center bottom;
  background:linear-gradient(to bottom, rgba(40, 40, 40, 1) 0%, rgba(40, 40, 40, 1) 60%, rgba(255, 255, 255, 0.02) 80%, rgba(252, 252, 252, 0) 90%) center top, url("https://static.infragistics.com/marketing/Website/css/background/perspecivegridcontrols-img-1920.png") no-repeat scroll center bottom;
  background-size:100%;
}
.gradient--product-bottom {
  background:-webkit-linear-gradient(top, rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0.02) 21%, rgba(40, 40, 40, 1) 62%, rgba(40, 40, 40, 1) 100%) center top, url("https://static.infragistics.com/marketing/Website/css/background/perspecivegridcontrols-img-1920.png") no-repeat scroll center top;
  background:linear-gradient(to bottom, rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0.02) 21%, rgba(40, 40, 40, 1) 62%, rgba(40, 40, 40, 1) 100%) center top, url("https://static.infragistics.com/marketing/Website/css/background/perspecivegridcontrols-img-1920.png") no-repeat scroll center top;
  background-size:100%;
}
.gradient--white-to-light-gray {
  background:-webkit-linear-gradient(top, #ffffff 0, #e9e9e9 100%);
  background:linear-gradient(to bottom, #ffffff 0, #e9e9e9 100%);
}
.gradient--white-to-light-gray-md {
  background:-webkit-linear-gradient(top, #ffffff 0, #eaebed 16%, #e5e6e8 43%, #dedfe1 99%);
  background:linear-gradient(to bottom, #ffffff 0, #eaebed 16%, #e5e6e8 43%, #dedfe1 99%);
}
.gradient--transparent30-to-black100 {
  background:-webkit-linear-gradient(top, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0.51) 30%, rgba(0, 0, 0, 0.54) 32%, rgba(0, 0, 0, 1) 100%);
  background:linear-gradient(to bottom, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0.51) 30%, rgba(0, 0, 0, 0.54) 32%, rgba(0, 0, 0, 1) 100%);
}
.no-cssgradients .gradient--product-top-no-img {
  background:#282828;
}
.no-cssgradients .gradient--product-top {
  background:#282828 url("https://static.infragistics.com/marketing/Website/css/background/perspecivegridcontrols-img-1920.png") no-repeat scroll center bottom;
  background-size:100%;
}
.no-cssgradients .gradient--product-bottom {
  background:#282828 url("https://static.infragistics.com/marketing/Website/css/background/perspecivegridcontrols-img-1920.png") no-repeat scroll center top;
  background-size:100%;
}
.no-cssgradients .gradient--white-to-light-gray {
  background:#e9e9e9;
}
.no-cssgradients .gradient--transparent30-to-black100 {
  background:#000;
  background:rgba(0, 0, 0, 0.7);
}
.bgImage-bubble {}
.bgImage-bubble--appbuilder {
  background-image:url("https://static.infragistics.com/marketing/Website/products/shared/hero-bubble-border-mask.svg"), url("https://static.infragistics.com/marketing/Website/products/app-builder/app-builder-hero-background-shapes.svg");
  background-color:#6c2d74;
  background-position:center 101%, calc(50%+400px) top;
  background-repeat:no-repeat;
  background-size:101% auto, 800px;
  transition:background-image 0s ease-in-out;
}
.bgImage-bubble--appbuilder-no-mask {
  background-image:url("https://static.infragistics.com/marketing/Website/products/app-builder/app-builder-hero-background-shapes.svg");
  background-color:#6c2d74;
  background-position:calc(50%+400px) top;
  background-repeat:no-repeat;
  background-size:800px;
  transition:background-image 0s ease-in-out;
}
.bgImage-bubble--ignite {
  background-color:#cf4214;
  background-position:center 101%, calc(50%+400px) top;
  background-repeat:no-repeat;
  background-size:101% auto, 800px;
  transition:background-image 0s ease-in-out;
}
.bgImage-bubble--ignite-no-mask {
  background-position:calc(50%+400px) top;
  background-size:800px;
}
.bgImage-bubble--ignite .ui-btn.ui-btn--default, .bgImage-bubble--ignite .ui-btn.ui-btn--default:visited {
  background:#26255f;
  border-color:#26255f;
  color:#fff;
}
.bgImage-bubble--appbuilder .ui-btn.ui-btn--default:hover, .bgImage-bubble--appbuilder .ui-btn.ui-btn--default:focus, .bgImage-bubble--appbuilder .ui-btn.ui-btn--default:focus-visible, .bgImage-bubble--ignite .ui-btn.ui-btn--default:hover, .bgImage-bubble--ignite .ui-btn.ui-btn--default:focus-visible {
  background:transparent;
  border-color:#fff;
  color:#fff;
}
.bgImage-bubble--appbuilder .ui-btn.ui-btn--default[disabled]:hover, .bgImage-bubble--appbuilder .ui-btn.ui-btn--default[disabled]:focus-visible, .bgImage-bubble--ignite .ui-btn.ui-btn--default[disabled]:hover, .bgImage-bubble--ignite .ui-btn.ui-btn--default[disabled]:focus-visible, .bgImage-bubble--appbuilder .ui-btn.ui-btn--default.disabled:hover, .bgImage-bubble--appbuilder .ui-btn.ui-btn--default.disabled:focus-visible, .bgImage-bubble--ignite .ui-btn.ui-btn--default.disabled:hover, .bgImage-bubble--ignite .ui-btn.ui-btn--default.disabled:focus-visible {
  background:#26255f;
  border-color:#26255f;
  color:#fff;
}
.bgImage-bubble--bundle {
  background-image:url("https://static.infragistics.com/marketing/Website/products/shared/hero-bubble-border-mask.svg"), url("https://static.infragistics.com/marketing/Website/products/ignite-ui/shared/ignite-ui-bundle-hero-icons.svg");
}
.bgImage-bubble--angular {
  background-image:url("https://static.infragistics.com/marketing/Website/products/shared/hero-bubble-border-mask.svg"), url("https://static.infragistics.com/marketing/Website/products/Ignite-UI-for-Angular/ignite-ui-angular-hero-icons.svg");
}
.bgImage-bubble--blazor {
  background-image:url("https://static.infragistics.com/marketing/Website/products/shared/hero-bubble-border-mask.svg"), url("https://static.infragistics.com/marketing/Website/products/ignite-ui-blazor/ignite-ui-blazor-hero-icons.svg");
}
.bgImage-bubble--react {
  background-image:url("https://static.infragistics.com/marketing/Website/products/shared/hero-bubble-border-mask.svg"), url("https://static.infragistics.com/marketing/Website/products/ignite-ui-react/ignite-ui-react-hero-icon.svg");
}
.bgImage-bubble--wc {
  background-image:url("https://static.infragistics.com/marketing/Website/products/shared/hero-bubble-border-mask.svg"), url("https://static.infragistics.com/marketing/Website/products/ignite-ui-web-components/ignite-ui-web-components-hero-icon.svg");
}
.bgImage-bubble--jquery {
  background-image:url("https://static.infragistics.com/marketing/Website/products/shared/hero-bubble-border-mask.svg"), url("https://static.infragistics.com/marketing/Website/products/ignite-ui-jquery/ignite-ui-jquery-hero-icon.svg");
}
.bgImage-bubble--aspnet-core {
  background-image:url("https://static.infragistics.com/marketing/Website/products/shared/hero-bubble-border-mask.svg"), url("https://static.infragistics.com/marketing/Website/products/ignite-ui-asp-net-core/ignite-ui-asp-net-core-hero-icon.svg");
}
.bgImage-bubble--aspnet-mvc {
  background-image:url("https://static.infragistics.com/marketing/Website/products/shared/hero-bubble-border-mask.svg"), url("https://static.infragistics.com/marketing/Website/products/ignite-ui-asp-net-mvc/ignite-ui-asp-net-mvc-hero-icon.svg");
}
.bgImage-bubble--bundle-no-mask {
  background-image:url("https://static.infragistics.com/marketing/Website/products/ignite-ui/shared/ignite-ui-bundle-hero-icons.svg");
}
.bgImage-bubble--angular-no-mask {
  background-image:url("https://static.infragistics.com/marketing/Website/products/Ignite-UI-for-Angular/ignite-ui-angular-hero-icons.svg");
}
.bgImage-bubble--blazor-no-mask {
  background-image:url("https://static.infragistics.com/marketing/Website/products/ignite-ui-blazor/ignite-ui-blazor-hero-icons.svg");
}
.bgImage-bubble--react-no-mask {
  background-image:url("https://static.infragistics.com/marketing/Website/products/ignite-ui-react/ignite-ui-react-hero-icon.svg");
}
.bgImage-bubble--wc-no-mask {
  background-image:url("https://static.infragistics.com/marketing/Website/products/ignite-ui-web-components/ignite-ui-web-components-hero-icon.svg");
}
.bgImage-bubble--jquery-core-no-mask {
  background-image:url("https://static.infragistics.com/marketing/Website/products/ignite-ui-jquery/ignite-ui-jquery-hero-icon.svg");
}
.bgImage-bubble--aspnet-core-no-mask {
  background-image:url("https://static.infragistics.com/marketing/Website/products/ignite-ui-asp-net-core/ignite-ui-asp-net-core-hero-icon.svg");
}
.bgImage-bubble--aspnet-mvc-no-mask {
  background-image:url("https://static.infragistics.com/marketing/Website/products/ignite-ui-asp-net-mvc/ignite-ui-asp-net-mvc-hero-icon.svg");
}
@media only screen and (max-width:959px) {
  .bgImage-bubble--appbuilder {
    background-image: url("https://static.infragistics.com/marketing/Website/products/shared/hero-bubble-border-mask.svg");
    background-color: #6c2d74;
    background-position: center 101%;
    background-repeat: no-repeat;
    background-size: 101% auto;
    padding-bottom: 50px!important;
  }
  .bgImage-bubble--ignite, .bgImage-bubble--ignite-no-mask {
    background-color: #cf4214;
    background-position: center 101%;
    background-repeat: no-repeat;
    background-size: 101% auto;
    padding-bottom: 50px!important;
  }
  .bgImage-bubble--bundle, .bgImage-bubble--angular, .bgImage-bubble--blazor, .bgImage-bubble--react, .bgImage-bubble--wc, .bgImage-bubble--jquery, .bgImage-bubble--aspnet-core, .bgImage-bubble--aspnet-mvc {
    background-image: url("https://static.infragistics.com/marketing/Website/products/shared/hero-bubble-border-mask.svg");
  }
}
@media only screen and (max-width:767px) {
  .bgImage-bubble--appbuilder {
    padding-bottom: 25px!important;
  }
  .bgImage-bubble--ignite {
    padding-bottom: 25px!important;
  }
}
@media only screen and (min-width:2250px) {
  .bgImage-bubble--appbuilder {
    background-image: url("https://static.infragistics.com/marketing/Website/products/shared/hero-bubble-border-mask-large.svg"), url("https://static.infragistics.com/marketing/Website/products/app-builder/app-builder-hero-background-shapes.svg");
    background-size: 101% 250px, 800px;
    padding-bottom: 150px!important;
  }
  .bgImage-bubble--ignite {
    background-size: 101% 250px, 800px;
    padding-bottom: 150px!important;
  }
  .bgImage-bubble--appbuilder-no-mask, .bgImage-bubble--ignite-no-mask {
    background-size: 800px;
    padding-bottom: 0!important;
  }
  .bgImage-bubble--bundle {
    background-image: url("https://static.infragistics.com/marketing/Website/products/shared/hero-bubble-border-mask-large.svg"), url("https://static.infragistics.com/marketing/Website/products/ignite-ui/shared/ignite-ui-bundle-hero-icons.svg");
  }
  .bgImage-bubble--angular {
    background-image: url("https://static.infragistics.com/marketing/Website/products/shared/hero-bubble-border-mask-large.svg"), url("https://static.infragistics.com/marketing/Website/products/Ignite-UI-for-Angular/ignite-ui-angular-hero-icons.svg");
  }
  .bgImage-bubble--blazor {
    background-image: url("https://static.infragistics.com/marketing/Website/products/shared/hero-bubble-border-mask-large.svg"), url("https://static.infragistics.com/marketing/Website/products/ignite-ui-blazor/ignite-ui-blazor-hero-icons.svg");
  }
  .bgImage-bubble--react {
    background-image: url("https://static.infragistics.com/marketing/Website/products/shared/hero-bubble-border-mask-large.svg"), url("https://static.infragistics.com/marketing/Website/products/ignite-ui-react/ignite-ui-react-hero-icon.svg");
  }
  .bgImage-bubble--wc {
    background-image: url("https://static.infragistics.com/marketing/Website/products/shared/hero-bubble-border-mask-large.svg"), url("https://static.infragistics.com/marketing/Website/products/ignite-ui-web-components/ignite-ui-web-components-hero-icon.svg");
  }
  .bgImage-bubble--jquery {
    background-image: url("https://static.infragistics.com/marketing/Website/products/shared/hero-bubble-border-mask-large.svg"), url("https://static.infragistics.com/marketing/Website/products/ignite-ui-jquery/ignite-ui-jquery-hero-icon.svg");
  }
  .bgImage-bubble--aspnet-core {
    background-image: url("https://static.infragistics.com/marketing/Website/products/shared/hero-bubble-border-mask-large.svg"), url("https://static.infragistics.com/marketing/Website/products/ignite-ui-asp-net-core/ignite-ui-asp-net-core-hero-icon.svg");
  }
  .bgImage-bubble--aspnet-mvc {
    background-image: url("https://static.infragistics.com/marketing/Website/products/shared/hero-bubble-border-mask-large.svg"), url("https://static.infragistics.com/marketing/Website/products/ignite-ui-asp-net-mvc/ignite-ui-asp-net-mvc-hero-icon.svg");
  }
}
.bgImage--grid-bottom {
  background-image:url("https://static.infragistics.com/marketing/Website/css/background/perspecivegridcontrols-img-1920.png");
  background-repeat:no-repeat;
  background-position:bottom center;
  background-attachment:scroll;
  background-size:100%;
}
.bgImage--grid-bottom[class*="bg--dark"] {
  background-image:url("https://static.infragistics.com/marketing/Website/css/background/perspecivegridcontrols-img-1920.png");
}
.bgImage--featured-grid-bottom, .bgImage--featured-grid-bottom--no-highlight, .bgImage--featured-shareplus, .bgImage--featured-reportplus-embedded, .bgImage--featured-reportplus-embedded-capabilities, .bgImage--featured-newsletter-signup {
  background-color:#213949;
  background-position:center;
  background-repeat:no-repeat;
  background-size:cover;
}
.bgImage--featured-grid-bottom {
  background-image:url("https://static.infragistics.com/marketing/Website/css/background/header-bg-1920.png?v=201704171252");
}
.bgImage--featured-grid-bottom--sm {
  background-image:url("https://static.infragistics.com/marketing/Website/css/background/ignitepillarhero-1920.jpg");
}
.bgImage--featured-grid-bottom--no-highlight {
  background-image:url("https://static.infragistics.com/marketing/Website/css/background/ignite-download-header-1920.jpg");
}
.bgImage--featured-grid-bottom--no-highlight--xs {
  background-image:url("https://static.infragistics.com/marketing/Website/css/background/all-products-header-img-1920.jpg");
}
.bgImage--angled-lines-topleft-botright {
  background-image:url("https://static.infragistics.com/marketing/Website/products/ignite-redesign-172/header-lines-top-left.svg?v=201712071542"), url("https://static.infragistics.com/marketing/Website/products/ignite-redesign-172/header-lines-bottom-right.svg?v=201712071542");
  background-position:top left, bottom right;
  background-repeat:no-repeat;
  background-size:40%;
}
.bgImage--angled-lines-topleft-botright--sm {
  background-size:30%;
}
.bgImage--featured-honeycomb-bottom {
  background-image:url("https://static.infragistics.com/marketing/Website/Consulting/consulting-header-pattern-1600.png?v=201801181544");
  background-position:bottom center;
  background-size:initial;
  background-repeat:repeat no-repeat;
}
.bgImage--featured-shareplus {
  background-image:url("https://static.infragistics.com/marketing/Website/products/shareplus/enterprise/top-header-1920.jpg?v=201706050830");
  background-position:bottom right;
}
.bgImage--featured-shareplus-security {
  background-color:#012A3E;
  background-image:url("https://static.infragistics.com/marketing/Website/products/shareplus/security/security-top-header-1920.jpg?v=201706050830");
  background-position:center center;
}
.bgImage--featured-reportplus-embedded {
  background-image:url("https://static.infragistics.com/marketing/Website/products/reportplus-embedded/redesign/ReportPlus-headerBG-1920.png");
  background-position:bottom right;
}
.bgImage--featured-reportplus-embedded-capabilities {
  background-image:url("https://static.infragistics.com/marketing/Website/products/reportplus-embedded/redesign/Requirements/Requirements-header-BG.jpg");
  background-position:top right;
}
.bgImage--featured-grid-bottom-landing-header {
  background-image:url("https://static.infragistics.com/marketing/Website/css/background/header-background-lp-1920.jpg?v=201712151417");
  background-position:bottom center;
}
.bgImage--featured-grid-bottom-landing-quote {
  background-image:url("https://static.infragistics.com/marketing/Website/css/background/quote-background-1920.jpg?v=201712151417");
  background-position:bottom center;
  background-size:cover;
  background-repeat:no-repeat;
}
.bgImage--featured-newsletter-signup {
  background-image:url("https://static.infragistics.com/marketing/Website/Newsletter-landing-page/header-image.jpg");
  background-position:bottom center;
}
[data-theme*="indigo"] .bgImage--tiles-topright {
  background-image:url("https://static.infragistics.com/marketing/Website/products/indigo-design/2019/indigo-design-transparent-tiles-background.svg");
  background-repeat:no-repeat;
  background-position:125% -100px;
  background-size:1100px 900px;
}
@media only screen and (max-width:1160px) {
  [data-theme*="indigo"] .bgImage--tiles-topright {
    background-size: 70%;
  }
}
@media only screen and (max-width:767px) {
  [data-theme*="indigo"] .bgImage--tiles-topright {
    background-position: 125% -100px;
    background-size: 70%;
  }
}
@media only screen and (min-width:2000px) {
  [data-theme*="indigo"] .bgImage--tiles-topright {
    background-position: 115% -100px;
  }
}
@media only screen and (min-width:2500px) {
  [data-theme*="indigo"] .bgImage--tiles-topright {
    background-position: 95% -100px;
  }
}
@media only screen and (min-width:3000px) {
  [data-theme*="indigo"] .bgImage--tiles-topright {
    background-position: 85% -100px;
  }
}
@media only screen and (min-width:4000px) {
  [data-theme*="indigo"] .bgImage--tiles-topright {
    background-position: 65% -100px;
  }
}
.bgImage--devtools {
  background-image:url("https://static.infragistics.com/marketing/Website/products/shared/infragistics-ultimate-professional-ui-components-ui-controls-web-desktop-mobile-development-background-nopre.svg");
  background-repeat:no-repeat;
  background-position:center 0;
  background-size:2200px 1100px;
  padding-top:50px;
  margin-top:-50px;
}
.bgImage--devtools.bgImage--dt-ignite {
  background-image:url("https://static.infragistics.com/marketing/Website/products/ignite-ui-landing/ignite-ui-hero-background-2-noprerserve-b.svg");
}
@media only screen and (min-width:1900px) {
  .bgImage--devtools {
    background-position: center 0px;
    background-size: 150% 1500px;
    margin-top: -100px;
    padding-top: 100px;
  }
  .bgImage--devtools.bgImage--dt-ignite {
    background-size: 150% 1350px;
  }
}
@media only screen and (max-width:1280px) {
  .bgImage--devtools {
    background-position: center 0;
    background-size: 1800px 1000px;
    margin-top: -100px;
  }
}
@media only screen and (max-width:959px) {
  .bgImage--devtools {
    background-position: center 0;
    background-size: 1800px 800px;
  }
}
@media only screen and (max-width:500px) {
  .bgImage--devtools {
    background-position: center 0;
    background-size: 1400px 700px;
  }
}
.bgImage--ignite {
  background-image:url("https://static.infragistics.com/marketing/Website/products/ignite-ui-landing/ignite-ui-hero-background-2-noprerserve-b.svg");
  background-repeat:no-repeat;
  background-position:center 350px;
  background-size:2200px 1100px;
}
@media only screen and (min-width:1800px) {
  .bgImage--ignite {
    background-position: center 400px;
    background-size: 120% 60%;
  }
}
@media only screen and (max-width:1280px) {
  .bgImage--ignite {
    background-position: center 500px;
    background-size: 1800px 1000px;
  }
}
@media only screen and (max-width:959px) {
  .bgImage--ignite {
    background-position: center 400px;
    background-size: 1800px 900px;
  }
}
@media only screen and (max-width:500px) {
  .bgImage--ignite {
    background-position: center 520px;
    background-size: 1400px 700px;
  }
}
.bgImage--rplus-form-swoosh {
  background:url("/media/442224/try-it-ribbon.png") no-repeat center 0;
  background-size:100%;
}
.bgAngled {
  position:relative;
  overflow:hidden;
  z-index:1;
}
.bgAngled::after {
  background:#fff;
  border:0;
  content:"";
  display:block;
  height:50%;
  position:absolute;
  left:0;
  right:0;
  -webkit-transform:skewY(-6deg);
  -ms-transform:skewY(-6deg);
  transform:skewY(-6deg);
  -webkit-transform-origin:100%;
  -ms-transform-origin:100%;
  transform-origin:100%;
}
.bgAngled--bottom-right {
  padding:50px 0 100px;
}
.bgAngled--bottom-right::after {
  bottom:0;
}
.bgAngled--top-left {
  padding:100px 0 50px;
}
.bgAngled--top-left::after {
  top:-50%;
  -webkit-transform:skewY(-5deg);
  -ms-transform:skewY(-5deg);
  transform:skewY(-5deg);
}
.bgAngled .content.clearfix::after {
  height:50px;
}
@media only screen and (min-width:2100px) {
  .bgAngled::after {
    -webkit-transform: skewY(-3deg);
    -ms-transform: skewY(-3deg);
    transform: skewY(-3deg);
  }
  .bgAngled.bgAngled--bottom-right .content.clearfix::after {
    height: 150px;
  }
}
@media only screen and (min-width:1024px) and (max-width:1280px) {
  .bgAngled {
    padding: 50px 0;
  }
  .bgAngled::after {
    height: 35%;
  }
  .bgAngled.bgAngled--top-left::after {
    top: -35%;
  }
  .bgAngled.bgAngled--bottom-right .content.clearfix::after {
    height: 75px;
  }
}
@media only screen and (min-width:960px) and (max-width:1024px) {
  .bgAngled {
    padding: 50px 0;
  }
  .bgAngled::after {
    height: 35%;
  }
  .bgAngled.bgAngled--top-left::after {
    top: -35%;
  }
  .bgAngled.bgAngled--bottom-right .content.clearfix::after {
    height: 75px;
  }
}
@media only screen and (min-width:768px) and (max-width:960px) {
  .bgAngled {
    padding: 50px 0;
  }
  .bgAngled::after {
    height: 20%;
  }
  .bgAngled.bgAngled--top-left::after {
    top: -20%;
    -webkit-transform: skewY(-3deg);
    -ms-transform: skewY(-3deg);
    transform: skewY(-3deg);
  }
  .bgAngled.bgAngled--bottom-right .content.clearfix::after {
    height: 75px;
  }
}
@media only screen and (max-width:768px) {
  .bgAngled {
    padding: 50px 0;
  }
  .bgAngled::after {
    height: 20%;
  }
  .bgAngled::after {
    height: 20%;
  }
  .bgAngled.bgAngled--top-left::after {
    top: -20%;
    -webkit-transform: skewY(-3deg);
    -ms-transform: skewY(-3deg);
    transform: skewY(-3deg);
  }
  .bgAngled.bgAngled--bottom-right .content.clearfix::after {
    height: 1px;
  }
}
.color--white {
  color:#fff;
}
.color--alto {
  color:#ddd;
}
.color--azure-radiance {
  color:#0099ff;
}
.color--nobel {
  color:#b4b4b4;
}
.color--wine-berry {
  color:#3F1835;
}
.color--mulberry-wood {
  color:#61054F;
}
.color--san-marino {
  color:#3F51B5;
}
.color--froly {
  color:#F26178;
}
.color-jacarta {
  color:#2C295E;
}
.borderColor--azure-radiance {
  color:#0099ff;
}
.margin--secondary-nav {
  margin-top:-55px;
  padding:60px
}
.text--align-left {
  text-align:left;
}
.text--align-right {
  text-align:right;
}
.text--align-center {
  text-align:center;
}
.text--underline {
  text-decoration:underline;
}
.text-transform--none {
  text-transform:none;
}
.text-transform--uppercase {
  text-transform:uppercase;
}
.text-transform--lowercase {
  text-transform:lowercase;
}
.align--center {
  margin-left:auto;
  margin-right:auto;
}
.valign--middle {
  vertical-align:middle;
}
.opacity--0 {
  opacity:0;
}
.opacity--45 {
  opacity:0.45;
}
.opacity--7 {
  opacity:0.7;
}
.opacity--8 {
  opacity:0.8;
}
.filter--grayscale {
  filter:grayscale(1);
}
.z-index--1 {
  z-index:1;
}
.z-index--5 {
  z-index:5;
}
.igvideocontainer {
  text-align:center;
}
.igvideocontainer video {
  max-width:900px;
  width:100%;
}
.hidden, .visible-lg, .visible-md, .visible-sm, .visible-xs, .visible-xxs {
  display:none!important;
}
.hidden--visual {
  border:0;
  clip:rect(0 0 0 0);
  height:1px;
  margin:1px;
  overflow:hidden;
  padding:0;
  position:absolute;
  width:1px;
}
.overflow--hidden, .be-section.overflow--hidden {
  overflow:hidden;
}
.overflow--visible {
  overflow:visible;
}
.p-relative {
  position:relative;
}
.p-absolute {
  position:absolute;
}
.p-fixed {
  position:fixed;
}
.p-static {
  position:static;
}
.p-sticky {
  position:-webkit-sticky;
  position:sticky;
  top:0;
}
.p-sticky:before, .p-sticky:after {
  content:'';
  display:table;
}
.display--block {
  display:block;
}
.display--inline-block {
  display:inline-block;
}
.display--inline {
  display:inline;
}
.display-table {
  display:table;
}
.display-table-row {
  display:table-row;
}
.display-table-cell {
  display:table-cell;
}
.width--auto {
  width:auto;
}
.width--full {
  width:100%;
}
.width--half {
  width:50%;
}
.width--three-quarter {
  width:75%;
}
.mw--800 {
  max-width:800px;
}
.mw--900 {
  max-width:900px;
}
.font-size--lg {
  font-size:1.5em;
}
.font-size--md {
  font-size:1.25em;
}
.font-size--sm {
  font-size:0.75em;
}
.font-size--xs {
  font-size:0.55em;
}
.line-height--normal {
  line-height:normal;
}
.mar-bottom--lg {
  margin-bottom:1.5em;
}
.mar-bottom--md {
  margin-bottom:1.25em;
}
.mar-bottom--sm {
  margin-bottom:0.75em;
}
.mar-bottom--xs {
  margin-bottom:0.5em;
}
.mar-bottom--zero {
  margin-bottom:0;
}
.zero-margin-bottom {
  margin-bottom:0;
}
.zero-margin {
  margin:0;
}
.vmar--xl {
  margin-top:2em;
  margin-bottom:2em;
}
.vmar--lg {
  margin-top:1.5em;
  margin-bottom:1.5em;
}
.vmar--md {
  margin-top:1.5em;
  margin-bottom:1.25em;
}
.vmar--sm {
  margin-top:.75em;
  margin-bottom:.75em;
}
.vmar--xs {
  margin-top:.5em;
  margin-bottom:.5em;
}
.vmar--50 {
  margin-top:50px;
  margin-bottom:50px;
}
.pad--lg {
  padding:1.5em;
}
.pad--md {
  padding:1.25em;
}
.pad--sm {
  padding:.75em;
}
.pad--xs {
  padding:.5em;
}
.vpad--lg {
  padding-top:1.5em;
  padding-bottom:1.5em;
}
.vpad--md {
  padding-top:1.25em;
  padding-bottom:1.25em;
}
.vpad--sm {
  padding-top:.75em;
  padding-bottom:.75em;
}
.vpad--xs {
  padding-top:.5em;
  padding-bottom:.5em;
}
.hpad--lg {
  padding-left:1.5em;
  padding-right:1.5em;
}
.hpad--md {
  padding-left:1.25em;
  padding-right:1.25em;
}
.hpad--sm {
  padding-left:.75em;
  padding-right:.75em;
}
.hpad--xs {
  padding-left:.5em;
  padding-right:.5em;
}
.padding-top-bottom {
  padding:100px 0px !important;
}
.padding-top-bottom-0 {
  padding-top:0px !important;
  padding-bottom:0px !important;
}
.padding-top-bottom-13 {
  padding:13px 0px !important;
}
.padding-top-bottom-20 {
  padding:20px 0px !important;
}
.padding-top-bottom-40 {
  padding:40px 0px !important;
}
.padding-top-bottom-50 {
  padding:50px 0px !important;
}
.padding-top-bottom-60 {
  padding:60px 0px;
}
.padding-top-bottom-70 {
  padding:70px 0px !important;
}
.padding-top-bottom-80 {
  padding:80px 0px !important;
}
.padding-top-bottom-90 {
  padding:90px 0px !important;
}
.padding-top-bottom-100 {
  padding:100px 0 !important;
}
.padding-top-bottom-150 {
  padding:150px 0px !important;
}
.padding-top-bottom-200 {
  padding:200px 0px !important;
}
.padding-top-bottom-300 {
  padding:300px 0px !important;
}
.padding-top-bottom-400 {
  padding:400px 0px !important;
}
.zero-padding {
  padding:0;
}
.zero-padding-bottom {
  padding-bottom:0px !important;
}
.zero-padding-top {
  padding-top:0px !important;
}
.border--circle {
  border-radius:50%;
  overflow:hidden;
}
.border--rounded {
  border-radius:1rem;
  overflow:hidden;
}
.border--rounded-sm {
  border-radius:.75rem;
  overflow:hidden;
}
.border--rounded-xs {
  border-radius:.5rem;
  overflow:hidden;
}
.border--rounded-xxs {
  border-radius:.25rem;
  overflow:hidden;
}
.shadow {
  box-shadow:0px 0px 10px 1px rgba(0, 0, 0, 0.25);
}
.border--bottom {
  border-bottom:2px solid #0099ff;
  padding-bottom:20px;
}
.border--bottom-gray {
  border-bottom-color:#ccc;
}
.border--top {
  border-top:2px solid #0099ff;
  padding-top:20px;
}
.border--left {
  box-sizing:border-box;
  border-left:2px solid #0099ff;
  padding-left:20px;
}
[class*="bg--dark"] .border--left {
  box-sizing:border-box;
  border-left:2px solid #fff;
  padding-left:20px;
}
.border-glow {
  position:relative;
}
.border-glow:before, .border-glow:after {
  background:rgba(0, 153, 256, 1);
  content:'';
  display:block;
  position:absolute;
  z-index:5;
}
.border-glow--top:before {
  background:rgba(0, 153, 256, 0.7);
  width:100%;
  height:1px;
  box-shadow:0px 0px 13px 3px rgba(70, 179, 252, 0.5);
  top:0;
  right:0;
}
.border-glow--top:after {
  background:rgba(0, 153, 256, 1);
  border-radius:50%;
  width:25%;
  max-width:155px;
  height:1px;
  box-shadow:0 0 10px 6px rgba(0, 153, 255, 0.75);
  -webkit-transform:scaleX(1.5);
  -ms-transform:scaleX(1.5);
  transform:scaleX(1.5);
  top:0;
  right:10%;
}
.border-glow--bottom:before {
  background:rgba(0, 153, 256, 0.7);
  width:100%;
  height:1px;
  box-shadow:0px 0px 13px 3px rgba(70, 179, 252, 0.5);
  top:100%;
  left:0;
}
.border-glow--bottom:after {
  background:rgba(0, 153, 256, 1);
  border-radius:50%;
  width:25%;
  max-width:155px;
  height:1px;
  box-shadow:0 0 10px 6px rgba(0, 153, 255, 0.75);
  -webkit-transform:scaleX(1.5);
  -ms-transform:scaleX(1.5);
  transform:scaleX(1.5);
  top:100%;
  left:10%;
}
.border--semi-circle {
  display:block;
  width:100%;
  height:100px;
}
.border--semi-circle::after {
  content:'';
  display:inline-block;
  background:#fff;
  width:105%;
  border-radius:50%;
  height:200px;
  height:250px;
  position:absolute;
  bottom:-160px;
  min-width:1100px;
  left:50%;
  -webkit-transform:translateY(-50%);
  -ms-transform:translateY(-50%);
  transform:translateX(-50%);
}
@media only screen and (max-width:1024px) {
  .border--semi-circle {
    height: 75px;
  }
  .border--semi-circle::after {
    height: 200px;
    bottom: -135px;
  }
}
@media only screen and (max-width:767px) {
  .border--semi-circle {
    height: 50px;
  }
  .border--semi-circle::after {
    height: 200px;
    bottom: -175px;
  }
}
.decor--line:before {
  content:'';
  display:block;
  width:100%;
  max-width:160px;
  border-top:2px solid #0099ff;
  padding-bottom:20px;
}
.decor--line-bottom:after {
  content:'';
  display:block;
  width:100%;
  max-width:160px;
  border-bottom:2px solid #0099ff;
  padding-top:20px;
}
.decor--line--invisible:before {
  opacity:0;
}
.decor--centered:before {
  margin:0 auto;
}
.decor--divider:after {
  content:'';
  display:block;
  border-bottom:2px solid #999;
  padding-top:50px;
  margin-left:auto;
  margin-right:auto;
  width:90%;
}
.decor--divider-mw450:after {
  max-width:450px;
}
.decor--angled-triangle {
  display:block;
  width:0;
  height:0;
  border-style:solid;
}
.decor--angled-triangle.decor--angled-triangle--top-left {
  border-width:0 0 125px 100vw;
  border-color:transparent transparent transparent #fff;
  box-sizing:border-box;
  position:relative;
  top:0;
}
.decor--angled-triangle.decor--angled-triangle--bottom-right {
  border-width:0 0 125px 100vw;
  border-color:transparent transparent #fff transparent;
  box-sizing:border-box;
  position:relative;
  top:0;
}
.decor--ignite-rocket-tl {
  display:block;
  max-width:300px;
  position:absolute;
  top:-50px;
  left:calc(25% - 300px);
}
.decor--ignite-rocket-tl2 {
  display:block;
  max-width:300px;
  position:absolute;
  top:-50px;
  left:calc(25% - 425px);
}
.decor--ignite-rocket-br {
  display:block;
  max-width:200px;
  position:absolute;
  top:0;
  right:calc(25% - 250px);
}
.indigo-border--bottom {
  padding-top:200px;
}
.indigo-border--top {
  padding-top:100px;
}
@media only screen and (max-width:960px) {
  .decor--ignite-rocket-tl, .decor--ignite-rocket-tl2 {
    display: none;
  }
  .decor--ignite-rocket-br {
    right: -15px;
  }
  .indigo-border--bottom {
    padding-top: 100px;
  }
  .indigo-border--top {
    padding-top: 50px;
  }
}
@media only screen and (min-width:2000px) {
  .indigo-border--top {
    padding-top: 175px;
  }
}
@media only screen and (min-width:3000px) {
  .indigo-border--bottom {
    padding-top: 350px;
    margin-top: -50px
  }
  .indigo-border--top {
    padding-top: 300px;
  }
}
@media only screen and (min-width:4000px) {
  .indigo-border--bottom {
    padding-top: 500px;
    margin-top: -150px
  }
}
.txt-rotate>.wrap {
  border-right:0.08em solid rgba(255, 255, 255, 0.45);
}
.chrome-ll img {
  image-rendering:-webkit-optimize-contrast;
}
.img--render-crisp-webkit {
  image-rendering:-webkit-optimize-contrast;
}
.img--render-crisp {
  image-rendering:-moz-crisp-edges;
  image-rendering:-o-crisp-edges;
  image-rendering:-webkit-optimize-contrast;
  image-rendering:crisp-edges;
  -ms-interpolation-mode:nearest-neighbor;
}
.img--round-edges {
  border-radius:4px;
}
.img--circle {
  border-radius:50%;
}
.img--lg-feature {
  display:block;
  margin-left:auto;
  margin-right:auto;
  width:100%;
  max-width:1600px;
}
.img--bordered {
  border:1px solid #ddd;
}
.img--flip-x {
  -webkit-transform:scaleX(-1);
  -ms-transform:scaleX(-1);
  transform:scaleX(-1);
}
.img--flip-y {
  -webkit-transform:scaleY(-1);
  -ms-transform:scaleY(-1);
  transform:scaleY(-1);
}
.img--floating-shadow {
  position:relative;
  margin:0 auto 50px;
  width:90%
}
.img--floating-shadow:after {
  background:url("https://static.infragistics.com/marketing/Website/General/shadow.png?v=201801181644") 0 0 no-repeat;
  background-size:100%;
  content:'';
  display:block;
  width:100%;
  height:45px;
  position:absolute;
  top:102%;
  left:0;
}
.img--no-padding {
  padding:0!important;
}
.img--mar-bottom {
  margin-bottom:30px;
}
@media only screen and (min-width:2048px) and (max-width:4096px) {
  .img--lgx-oversize {
    position: relative;
    width: 190%;
    max-width: 190%;
    min-width: 190%;
  }
  .img--lgx-oversize-left {
    left: -90%;
  }
  @-moz-document url-prefix() {
    .img--lg-oversize {
      min-width: 190%;
    }
  }
}
@media only screen and (min-width:768px) and (max-width:2048px) {
  .img--lg-oversize {
    position: relative;
    width: 180%;
    max-width: 180%;
  }
  .img--lg-oversize-left {
    left: -80%;
  }
  @-moz-document url-prefix() {
    .img--lg-oversize {
      min-width: 180%;
    }
  }
}
@media only screen and (max-width:768px) {
  .img--sm-oversize {
    position: relative;
    width: 120%;
    max-width: 120%;
    min-width: 120%;
  }
  .img--sm-oversize-left {
    left: -20%;
  }
  @-moz-document url-prefix() {
    .img--lg-oversize {
      min-width: 120%;
    }
  }
}
.one-sixth {
  width:12.5%;
}
.columns.columns__2 {
  -webkit-columns:2;
  -moz-columns:2;
  columns:2;
}
.columns.columns__150w {
  -webkit-columns:150px;
  -moz-columns:150px;
  columns:150px;
}
.columns.columns--no-break-inside>* {
  -webkit-column-break-inside:avoid;
  page-break-inside:avoid;
  break-inside:avoid;
}
a, a:visited {
  color:#0099ff;
  font-weight:bold;
  -webkit-transition:all .25s linear;
  transition:all .25s linear;
}
a:hover, a:active {
  color:#047fd1;
}
a img {
  border:none;
}
.ui-link--secondary, .ui-link--secondary:visited {
  color:#666;
}
.ui-link--secondary:hover, .ui-link--secondary:focus {
  color:#0099ff;
}
[class*="bg--dark"] .ui-link--secondary, [class*="bg--dark"] .ui-link--secondary:visited {
  color:#fff;
  text-decoration:underline;
}
[class*="bg--dark"] .ui-link--secondary:hover, [class*="bg--dark"] .ui-link--secondary:focus {
  color:#dedede;
}
[class*="ui-link--opacity-highlight"] {
  -webkit-transition:opacity .4s;
  transition:opacity .4s;
}
.ui-link--opacity-highlight {
  opacity:0.5;
}
.ui-link--opacity-highlight8 {
  opacity:0.8;
}
[class*="ui-link--opacity-highlight"]:hover, [class*="ui-link--opacity-highlight"]:focus {
  opacity:1;
}
.ui-link--shadow-focus {
  -webkit-transition:box-shadow .4s;
  transition:box-shadow .4s;
}
.ui-link--shadow-focus:hover, .ui-link--shadow-focus:focus {
  box-shadow:0 0 25px 1px rgba(0, 0, 0, 0.3);
}
.ui-link--grow {
  -webkit-transition:-webkit-transform .4s;
  transition:-webkit-transform .4s;
  transition:transform .4s;
  transition:transform .4s, -webkit-transform .4s;
}
.ui-link--grow:hover, .ui-link--grow:focus {
  -webkit-transform:scale(1.1);
  -ms-transform:scale(1.1);
  transform:scale(1.1);
}
.ui-link--arrow-right::after {
  content:"\2192";
  display:inline-block;
  margin-left:0.5em;
}
[data-theme*="indigo"]:not(.ui-footer) a:not(.ui-btn):not(.be-button):not(.button):not(.ui-link--secondary), [data-theme*="indigo"]:not(.ui-footer) a:not(.ui-btn):not(.be-button):not(.button):not(.ui-link--secondary):visited {
  color:#00AE88;
}
[data-theme*="indigo"]:not(.ui-footer) a:not(.ui-btn):not(.be-button):not(.button):not(.ui-link--secondary):hover, [data-theme*="indigo"]:not(.ui-footer) a:not(.ui-btn):not(.be-button):not(.button):not(.ui-link--secondary):focus {
  color:#227d6a;
}
.ui-alert {
  background:#f5f5f5;
  border:1px solid #ddd;
  margin:10px auto;
  padding:10px;
}
.ui-alert__headline {
  margin-bottom:15px;
}
.ui-alert--error {
  background:#f3dcdc;
  border:1px solid #f39292;
  color:#ff4545;
}
.ui-alert-blk {
  position:relative;
  background-color:#fff;
  border:none;
  box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.26), 0 1px 1px 0 rgba(0, 0, 0, 0.12), 0 2px 1px -1px rgba(0, 0, 0, 0.08);
  border-radius:0;
  padding:1.5em 1.5em 1.5em 5.5em;
  margin:2em 0;
}
.ui-alert-blk>*:last-child {
  margin-bottom:0;
}
.ui-alert-blk::before {
  position:absolute;
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-pack:center;
  -ms-flex-pack:center;
  justify-content:center;
  -webkit-box-align:center;
  -ms-flex-align:center;
  align-items:center;
  left:0;
  top:0;
  font-family:"icon2", "be-themes";
  font-size:24px;
  font-weight:bold;
  width:72px;
  height:100%;
  z-index:1;
}
.ui-alert-blk--info::before {
  content:'\e81f';
  color:#fff;
  background-color:#49A7E0;
}
.ui-alert-blk--info .ui-alert__headline {
  color:#49A7E0
}
.ui-alert-blk--error::before {
  content:'\e83e';
  color:#fff;
  background-color:#ff4545;
}
.ui-alert-blk--warning::before {
  content:'\e83e';
  color:#fff;
  background-color:#ffc107;
}
.ui-alert-blk--error .ui-alert__headline {
  color:#ff4545
}
.ui-alert-blk.ui-alert-blk--mar-lg {
  margin:2em;
}
.ui-alert-blk.ui-alert-blk--mar-md {
  margin:1.5em;
}
.ui-alert-blk.ui-alert-blk--mar-sm {
  margin:1em;
}
.ui-alert-blk.ui-alert-blk--mar-xs {
  margin:0.5em;
}
.ui-alert-blk--muted::before {
  color:#ABABAC;
  background-color:#F5F5F5;
}
.ui-label {
  border-radius:0;
  display:inline-block;
  font-size:0.75rem;
  font-weight:bold;
  line-height:1.3em;
  margin:5px;
  padding:0.5em 0.75em;
  text-transform:uppercase;
}
.ui-label--dark {
  color:#fff;
}
.ui-label--padding-none {
  padding:0;
}
.ui-label--mar-bottom {
  margin:0 0 10px;
}
.ui-label--vmar-none {
  margin-top:0;
  margin-bottom:0;
}
.navigation__cta.active {
  background:transparent;
  border:1px solid #0099ff;
  color:#0099ff;
}
.ui-btn-group {
  margin:0;
  padding:0;
}
.ui-btn-group-mar--lg .ui-btn {
  margin:1em;
}
.ui-btn-group-mar--md .ui-btn {
  margin:0.75em;
}
.ui-btn-group-mar--sm .ui-btn {
  margin:0.5em;
}
.ui-btn-group-mar--xs .ui-btn {
  margin:0.25em;
}
.ui-btn {
  background-image:none;
  border:1px solid transparent;
  border-radius:0;
  box-sizing:border-box;
  display:inline-block;
  font-size:1rem;
  font-weight:bold;
  line-height:1em;
  margin:5px 0;
  padding:0.75em 1.25em;
  cursor:pointer;
  text-align:center;
  text-decoration:none;
  text-transform:none;
  -webkit-transition:all .4s;
  transition:all .4s;
}
.ui-btn__label {
  display:block;
  font-size:0.857em;
  font-weight:400;
  text-transform:none;
}
.ui-btn.ui-btn--default-white-hvr:hover, .ui-btn.ui-btn--default-white-hvr:focus {
  background:#fff;
}
.ui-btn.ui-btn--default, .ui-btn.ui-btn--default:visited {
  background:#0099ff;
  border-color:#0099ff;
  color:#fff;
}
.ui-btn.ui-btn--default:hover, .ui-btn.ui-btn--default:focus {
  background:transparent;
  border-color:#0099ff;
  color:#0099ff;
}
.ui-btn.ui-btn--secondary, .ui-btn.ui-btn--secondary:visited {
  background:#fff;
  border-color:#fff;
  color:#0099ff;
}
.ui-btn.ui-btn--secondary:hover, .ui-btn.ui-btn--secondary:focus {
  background:transparent;
  border-color:#fff;
  color:#fff;
}
.ui-btn.ui-btn--link, .ui-btn.ui-btn--link:visited {
  border-radius:0;
}
.ui-btn.ui-btn--link:hover, .ui-btn.ui-btn--link:focus {
  text-decoration:underline;
}
.ui-btn--alt-disco, .ui-btn--alt-disco:visited {
  background:#761662;
  border-color:#761662;
  color:#fff;
}
.ui-btn--alt-disco:hover, .ui-btn--alt-disco:focus {
  background:transparent;
  border-color:#761662;
  color:#761662;
}
.ui-btn--alt-venice-blue, .ui-btn--alt-venice-blue:visited {
  background:#055b7d;
  border-color:#055b7d;
  color:#fff;
}
.ui-btn--alt-venice-blue:hover, .ui-btn--alt-venice-blue:focus {
  background:transparent;
  border-color:#055b7d;
  color:#055b7d;
}
.ui-btn--alt-tree-poppy, .ui-btn--alt-tree-poppy:visited {
  background:#FCA31C;
  border-color:#FCA31C;
  color:#fff;
}
.ui-btn--alt-tree-poppy:hover, .ui-btn--alt-tree-poppy:focus {
  background:transparent;
  border-color:#FCA31C;
  color:#FCA31C;
}
.ui-btn--alt-san-marino, .ui-btn--alt-san-marino:visited {
  background:#3f51b5;
  border-color:#3f51b5;
  color:#fff;
}
.ui-btn--alt-san-marino:hover, .ui-btn--alt-san-marino:focus {
  background:transparent;
  border-color:#3f51b5;
  color:#3f51b5;
}
.ui-btn--alt-havelock-blue, .ui-btn--alt-havelock-blue:visited {
  background:#3e87ce;
  border-color:#3e87ce;
  color:#fff;
}
.ui-btn--alt-havelock-blue:hover, .ui-btn--alt-havelock-blue:focus {
  background:transparent;
  border-color:#3e87ce;
  color:#3e87ce;
}
.ui-btn.ui-btn--invert, .ui-btn.ui-btn--invert:hover, .ui-btn.ui-btn--invert:focus {
  background:transparent;
}
.ui-btn.ui-btn--invert.ui-btn--default {
  color:#0099ff;
}
.ui-btn.ui-btn--invert.ui-btn--default:hover, .ui-btn.ui-btn--invert.ui-btn--default:focus {
  background:#0099ff;
  color:#fff;
}
.ui-btn.ui-btn--invert.ui-btn--secondary {
  color:#fff;
}
.ui-btn.ui-btn--invert.ui-btn--secondary:hover, .ui-btn.ui-btn--invert.ui-btn--secondary:focus {
  background:#fff;
  color:#0099ff;
}
.ui-btn.ui-btn--invert.ui-btn--alt-venice-blue {
  color:#055b7d;
}
.ui-btn.ui-btn--invert.ui-btn--alt-venice-blue:hover, .ui-btn.ui-btn--invert.ui-btn--alt-venice-blue:focus {
  background:#055b7d;
  color:#fff;
}
.ui-btn--rounded {
  border-radius:2rem;
}
.ui-btn--circled {
  border-radius:50%;
  padding:0.55rem 0.4rem;
}
.ui-btn[class*="ui-link--opacity-highlight"], .ui-btn.ui-link--shadow-focus, .ui-link--grow {
  -webkit-transition:all .4s;
  transition:all .4s;
}
.ui-btn--lg {
  font-size:1.25rem;
}
.ui-btn--md {
  font-size:1.125rem;
}
.ui-btn--sm {
  font-size:0.875rem;
}
.ui-btn--xs {
  font-size:0.75rem;
}
.ui-btn--pad-lg {
  padding:1.5em 2em;
}
.ui-btn--pad-md {
  padding:1em 1.5em;
}
.ui-btn--mar-lg {
  margin:1em
}
.ui-btn--mar-md {
  margin:0.75em
}
.ui-btn--mar-sm {
  margin:0.5em
}
.ui-btn--mar-xs {
  margin:0.25em
}
.ui-btn--blogs, .ui-btn--blogs:link, .ui-btn--blogs:visited {
  background:#f26a21;
  border-color:#f26a21;
  color:#fff;
}
.ui-btn--twitter, .ui-btn--twitter:link, .ui-btn--twitter:visited {
  background:#55acee;
  border-color:#55acee;
  color:#fff;
}
.ui-btn--linkedin, .ui-btn--linkedin:link, .ui-btn--linkedin:visited {
  background:#006599;
  border-color:#006599;
  color:#fff;
}
.ui-btn--facebook, .ui-btn--facebook:link, .ui-btn--facebook:visited {
  background:#3b5998;
  border-color:#3b5998;
  color:#fff;
}
.ui-btn--blogs:hover, .ui-btn--blogs:focus {
  color:#f26a21;
  border-color:#f26a21;
  background:transparent;
}
.ui-btn--twitter:hover, .ui-btn--twitter:focus {
  color:#55acee;
  border-color:#55acee;
  background:transparent;
}
.ui-btn--linkedin:hover, .ui-btn--linkedin:focus {
  color:#006599;
  border-color:#006599;
  background:transparent;
}
.ui-btn--facebook:hover, .ui-btn--facebook:focus {
  color:#3b5998;
  border-color:#3b5998;
  background:transparent;
}
.ui-btn--stacked .ui-btn {
  display:block;
}
.ui-btn--block {
  display:block;
}
.ui-btn[disabled], .ui-btn.disabled, .ui-btn[disabled]:hover, .ui-btn.disabled:hover, .ui-btn.disabled, .ui-btn[disabled]:focus, .ui-btn.disabled:focus {
  cursor:default;
  opacity:0.65;
  text-decoration:none;
}
.ui-btn.ui-btn--default[disabled]:hover, .ui-btn.ui-btn--default.disabled:hover, .ui-btn.ui-btn--default[disabled]:focus, .ui-btn.ui-btn--default.disabled:focus {
  background:#0099ff;
  border-color:#0099ff;
  color:#fff;
}
.ui-btn.ui-btn--link[disabled]:hover, .ui-btn.ui-btn--link.disabled:hover, .ui-btn.ui-btn--link[disabled]:focus, .ui-btn.ui-btn--link.disabled:focus {
  color:#0099ff;
}
.ui-btn.ui-btn--invert[disabled]:hover, .ui-btn.ui-btn--invert.disabled:hover, .ui-btn.ui-btn--invert[disabled]:focus, .ui-btn.ui-btn--invert.disabled:focus {
  background:transparent;
}
.ui-btn.ui-btn--icon-block {
  background:#333;
  color:#fff;
  display:inline-block;
  font-size:0.875rem;
  line-height:1.3em;
  margin:10px;
  padding:0px;
  text-align:left;
  text-transform:none;
}
.ui-btn.ui-btn--icon-block>span {
  display:table-cell;
  padding:15px;
  vertical-align:middle;
}
.ui-btn.ui-btn--icon-block:hover, .ui-btn.ui-btn--icon-block:focus {
  background:#111;
}
.ui-btn-pillar {
  background:#111;
  border:1px solid #111;
  display:block;
  text-decoration:none;
}
.ui-btn-pillar__wrap {
  display:table;
  margin:0 auto;
  padding:2.5em 1.5em;
}
.ui-btn-pillar__prefix {
  color:#434343;
  display:table-cell;
  font-size:60px;
  font-family:"aktiv-grotesk-thin", "Helvetica Neue", "Segoe UI", Helvetica, Arial, sans-serif;
  font-weight:200;
  padding:10px 10px 0 0;
  vertical-align:top;
}
.ui-btn-pillar__content {
  display:table-cell;
}
.ui-btn-pillar__content>span {
  display:table-row;
}
.ui-btn-pillar__title {
  font-size:24px;
  color:#fff;
}
.ui-btn-pillar__cta {}
.ui-btn-pillar:hover, .ui-btn-pillar:focus {
  border:1px solid #0099ff;
}
.ui-btn-pillar:hover .ui-btn-pillar__prefix, .ui-btn-pillar:focus .ui-btn-pillar__prefix {
  color:#fff;
}
.ui-btn-pillar--active {
  border:1px solid #0099ff;
}
.ui-btn-pillar--active .ui-btn-pillar__prefix {
  color:#fff;
}
.ui-btn--filter {
  background:transparent;
  font-weight:normal;
  text-transform:none;
}
.ui-btn--filter.ui-btn {
  background:transparent;
  border:1px solid transparent;
  color:#666;
}
.ui-btn--filter.ui-btn.ui-btn--default {
  border:1px solid #b4b4b4;
}
.ui-btn--filter.ui-btn:hover, .ui-btn--filter.ui-btn:focus, .ui-btn--filter.ui-btn.ui-btn--default:hover, .ui-btn--filter.ui-btn.ui-btn--default:focus {
  border:1px solid #0099ff;
  color:#0099ff;
}
.ui-btn--filter.ui-btn.ui-btn--active, .ui-btn--filter.ui-btn.ui-btn--default.ui-btn--active {
  border:1px solid #0099ff;
  color:#0099ff;
}
[data-theme*="indigo"] .ui-btn {
  border-radius:2rem;
  padding:1em 1.5em;
  text-transform:none;
}
[data-theme*="indigo"] .ui-btn.ui-btn--default-white-hvr:hover, [data-theme*="indigo"] .ui-btn.ui-btn--default-white-hvr:focus {
  background:#fff;
}
[data-theme*="indigo"] .ui-btn--default, [data-theme*="indigo"] .ui-btn--default:visited {
  background:#00AE88;
  border-color:#00AE88;
  color:#fff;
}
[data-theme*="indigo"] .ui-btn--default:focus, [data-theme*="indigo"] .ui-btn--default:hover {
  background:transparent;
  border-color:#00AE88;
  color:#00AE88;
}
[data-theme*="indigo"] .ui-btn--secondary, [data-theme*="indigo"] .ui-btn--secondary:visited {
  background:#fff;
  border-color:#fff;
  color:#00AE88;
}
[data-theme*="indigo"] .ui-btn--secondary:focus, [data-theme*="indigo"] .ui-btn--secondary:hover {
  background:transparent;
  border-color:#fff;
  color:#fff;
}
[data-theme*="indigo"] .ui-btn.ui-btn--invert, [data-theme*="indigo"] .ui-btn.ui-btn--invert:hover, [data-theme*="indigo"] .ui-btn.ui-btn--invert:focus {
  background:transparent;
}
[data-theme*="indigo"] .ui-btn.ui-btn--invert.ui-btn--default {
  color:#00AE88;
}
[data-theme*="indigo"] .ui-btn.ui-btn--invert.ui-btn--default:hover, [data-theme*="indigo"] .ui-btn.ui-btn--invert.ui-btn--default:focus {
  background:#00AE88;
  color:#fff;
}
[data-theme*="indigo"] .ui-btn.ui-btn--invert.ui-btn--secondary {
  color:#fff;
}
[data-theme*="indigo"] .ui-btn.ui-btn--invert.ui-btn--secondary:hover, [data-theme*="indigo"] .ui-btn.ui-btn--invert.ui-btn--secondary:focus {
  background:#fff;
  color:#00AE88;
}
[data-theme*="indigo"] .ui-btn.ui-btn--link, [data-theme*="indigo"] .ui-btn.ui-btn--link:visited {
  color:#00AE88;
}
[data-theme*="indigo"] .ui-btn.ui-btn--link:hover, [data-theme*="indigo"] .ui-btn.ui-btn--link:active {
  color:#227d6a;
}
[data-theme*="indigo"] .ui-btn-pillar {
  background:#212348;
  border:2px solid #2a2e66;
  color:#ececee;
  cursor:pointer;
}
[data-theme*="indigo"] .ui-btn-pillar:hover, [data-theme*="indigo"] .ui-btn-pillar:focus, [data-theme*="indigo"] .ui-btn-pillar.active {
  border:2px solid #3f51b5;
}
[data-theme*="indigo"] .ui-btn-pillar--blue {
  background:transparent;
  border:2px solid #699cd4;
  color:#ececee;
  cursor:pointer;
}
[data-theme*="indigo"] .ui-btn-pillar--blue:hover, [data-theme*="indigo"] .ui-btn-pillar--blue:focus, [data-theme*="indigo"] .ui-btn-pillar--blue.active {
  border:2px solid #72b3f9;
}
[data-theme*="indigo"] .ui-btn--circled {
  border-radius:50%;
}
[data-theme*="indigo"] .ui-btn.ui-btn--default[disabled]:hover, [data-theme*="indigo"] .ui-btn.ui-btn--default.disabled:hover, [data-theme*="indigo"] .ui-btn.ui-btn--default[disabled]:focus, [data-theme*="indigo"] .ui-btn.ui-btn--default.disabled:focus {
  background:#00AE88;
  border-color:#00AE88;
  color:#fff;
}
.ui-table {
  border-collapse:collapse;
  border:1px solid rgba(0, 0, 0, 0.1);
}
.ui-table tr th, .ui-table tr td {
  border:1px solid rgba(0, 0, 0, 0.1);
  padding:1em;
}
.ui-table--responsive {
  display:block;
  overflow-x:auto;
}
.ui-table.ui-table--border-transparent {
  border-color:rgba(0, 0, 0, 0);
}
.ui-table--striped tbody tr:nth-child(even), .ui-table--striped-odd tbody tr:nth-child(odd) {
  background-color:rgba(0, 0, 0, 0.05);
}
.ui-table--cell-vborder tr td {
  border-width:1px 0 0 0;
}
[class*="bg--dark"] .ui-table {
  border-color:rgba(255, 255, 255, 0.1);
}
[class*="bg--dark"] .ui-table.ui-table--border-transparent {
  border-color:rgba(0, 0, 0, 0);
}
[class*="bg--dark"] .ui-table--striped tbody tr:nth-child(even), [class*="bg--dark"] .ui-table--striped-odd tbody tr:nth-child(odd) {
  background-color:rgba(255, 255, 255, 0.5);
}
[class*="bg--dark"] .ui-table tr th, [class*="bg--dark"] .ui-table tr td {
  border-color:rgba(255, 255, 255, 0.1);
}
[data-cell-border="none"] tr td, [data-cell-border="none"] tr th {
  border:0;
}
[data-cell-valign="top"] tr td, [data-cell-valign="top"] tr th {
  vertical-align:top;
}
[data-cell-valign="middle"] tr td, [data-cell-valign="middle"] tr th {
  vertical-align:middle;
}
[data-cell-halign="left"] tr td:not(.text--align-center):not(.text--align-right), [data-cell-halign="left"] tr th:not(.text--align-center):not(.text--align-right) {
  text-align:left;
}
[data-cell-halign="center"] tr td:not(.text--align-right):not(.text--align-left), [data-cell-halign="center"] tr th:not(.text--align-right):not(.text--align-left) {
  text-align:center;
}
[data-cell-halign="right"] tr td:not(.text--align-center):not(.text--align-left), [data-cell-halign="right"] tr th:not(.text--align-center):not(.text--align-left) {
  text-align:right;
}
[data-cell-padding="none"] tr td, [data-cell-padding="none"] tr th {
  padding:0;
}
[data-cell-padding="xsmall"] tr td, [data-cell-padding="xsmall"] tr th {
  padding:0.25em;
}
[data-cell-padding="small"] tr td, [data-cell-padding="small"] tr th {
  padding:0.5em;
}
[data-cell-padding="medium"] tr td, [data-cell-padding="medium"] tr th {
  padding:1.25em;
}
[data-cell-padding="large"] tr td, [data-cell-padding="large"] tr th {
  padding:1.5em;
}
[data-cell-padding="xlarge"] tr td, [data-cell-padding="xlarge"] tr th {
  padding:2em;
}
@media only screen and (max-width:768px) {
  .ui-table[data-table-type*="compete-desc"] tr td {
    box-sizing: border-box;
    display: block;
    float: left;
    width: 50%;
  }
  .ui-table[data-table-type*="compete-desc"] tr td:first-child {
    width: 100%;
  }
}
.ui-list {
  position:relative;
}
.ui-list--indent {
  margin-left:15px;
}
.ui-list--li-space-lg>li {
  margin-bottom:1.5rem;
}
.ui-list--li-space-md>li {
  margin-bottom:1.25rem;
}
.ui-list--li-space-sm>li {
  margin-bottom:0.5rem;
}
.ui-list--li-space-xs>li {
  margin-bottom:0.25rem;
}
.ui-list--zero-padding {
  padding:0;
}
.ui-list--zero-margin {
  margin:0;
}
.ui-list--li-style {
  list-style:initial;
}
.ui-list--li-style-none {
  list-style:none;
}
.ui-list--ul--inline-block {
  list-style:none;
  padding:0;
  margin:0;
}
.ui-list--ul--inline-block>li {
  display:inline-block;
}
.ui-list--li-pipe-separator>li {
  padding-left:5px;
  padding-right:5px;
  border-right:1px solid #666;
}
.bg--dark .ui-list--li-pipe-separator>li {
  border-right:1px solid #b4b4b4;
}
.bg--darker .ui-list--li-pipe-separator>li {
  border-right:1px solid #ededed;
}
.ui-list--li-pipe-separator>li:last-child {
  border-right:none;
}
.ui-list__ul--colored {
  list-style:none;
  padding:0;
  margin:0;
}
.ui-list__ul--colored>li {
  padding-left:1em;
}
.ui-list__ul--colored>li:before {
  content:"•";
  color:#0099ff;
  font-size:20px;
  position:absolute;
  left:0;
}
.ui-list__ul--colored-default li:before {
  color:#666;
}
.ui-list__ul--colored-alabaster li:before {
  color:#f7f7f7;
}
.ui-list__ul--colored-zest li:before {
  color:#e56d1c;
}
.ui-list__ul--colored-froly li:before {
  color:#F26178;
}
.ui-list__ul--check>li {
  list-style:none;
  background:url("https://static.infragistics.com/marketing/Website/General/checkmark.png?v=201801181644") no-repeat 0 0;
  padding-left:2em;
}
.ui-list__ul--check[data-use-img="false"]>li, .ui-list__ul--check[data-use-css="true"]>li {
  background:none;
  position:relative;
}
.ui-list__ul--check[data-use-css="true"]>li::before {
  border-style:solid;
  border-width:0 3px 3px 0;
  content:'';
  display:block;
  width:5px;
  height:10px;
  position:absolute;
  top:3px;
  left:0.75em;
  -webkit-transform:rotate(35deg);
  -ms-transform:rotate(35deg);
  transform:rotate(35deg);
}
.ui-list__ul--check.ui-list__ul--check--sushi[data-use-css="true"]>li::before {
  border-color:#8bc541;
}
.ui-list__ul--check.ui-list__ul--check--web-orange[data-use-css="true"]>li::before {
  border-color:#ffa502;
}
.ui-list__ul--check--indigo.ui-list__ul--check--deemphasize>li::before {
  opacity:0.2;
}
.ui-list__ul--check--indigo>li::before {
  border:solid #37459e;
  border-width:0 3px 3px 0;
  content:'';
  display:block;
  width:5px;
  height:10px;
  position:absolute;
  top:3px;
  left:0.75em;
  -webkit-transform:rotate(35deg);
  -ms-transform:rotate(35deg);
  transform:rotate(35deg);
}
.ui-list__ul--check--indigo.opacity>li::before {
  opacity:0.2;
}
.ui-list__ul--check>li.ui-list__check--fuchsia-blue.active::before {
  border-color:#8a5be7;
  opacity:1;
}
.ui-list__ul--check>li.ui-list__check--shakespeare.active::before {
  border-color:#499BD1;
  opacity:1;
}
.ui-list__ul--check>li.ui-list__check--mountain-meadow.active::before {
  border-color:#19AD87;
  opacity:1;
}
.ui-list__ul--check>li.ui-list__check--tree-poppy.active::before {
  border-color:#FCA31C;
  opacity:1;
}
.ui-list__ul--check.ui-list__ul--check--white-circle>li::before {
  border:solid #fff;
  border-width:0 2px 2px 0;
  content:'';
  display:block;
  width:4px;
  height:7px;
  position:absolute;
  top:5px;
  left:0.6em;
  -webkit-transform:rotate(35deg);
  -ms-transform:rotate(35deg);
  transform:rotate(35deg);
}
.ui-list__ul--check.ui-list__ul--check--white-circle>li::after {
  border:2px solid #fff;
  border-radius:50%;
  content:'';
  display:block;
  width:20px;
  height:20px;
  position:absolute;
  top:-1px;
  left:0;
}
.ui-list[data-list-type="vertical-step"] {
  border-left:2px solid #ccc;
  list-style:none;
  padding:1em 0;
}
.ui-list[data-list-type="vertical-step"] li {
  position:relative;
  padding-left:1em;
}
.ui-list[data-list-type="vertical-step"] li::before {
  background:#fff;
  border:2px solid #ccc;
  border-radius:50%;
  content:'';
  display:block;
  width:.75em;
  height:.75em;
  position:absolute;
  left:-.55em;
  top:.25em;
}
.ui-list[data-list-type="ol-block"] {
  list-style:none;
  counter-reset:ig-numbered;
  padding-left:2.25rem;
}
.ui-list[data-list-type="ol-block"] li {
  counter-increment:ig-numbered;
  position:relative;
}
.ui-list[data-list-type="ol-block"] li::before {
  content:counter(ig-numbered);
  font-size:1.5rem;
  font-weight:bold;
  position:absolute;
  left:-2.25rem;
  top:6px;
}
.ui-list.ui-list__ol--azure-radiance[data-list-type="ol-block"] li::before {
  background:#0099ff;
  color:#fff;
  padding:.25rem .4rem;
}
.ui-list[data-list-type="video-playlist"] {
  list-style:none;
  margin:0;
  padding:0;
}
.ui-list[data-list-type="video-playlist"] li {
  border-bottom:1px solid #aaa;
  margin:0;
  padding:10px;
}
.ui-list[data-list-type="video-playlist"] li:last-child {
  border-bottom:none;
}
.ui-list[data-list-type="video-playlist"] li.ui-list__divider {
  height:15px;
}
.ui-list[data-list-type="video-playlist"] .ui-list__video {
  display:table;
  width:100%;
}
.ui-list[data-list-type="video-playlist"] .ui-list__video>* {
  display:table-cell;
  vertical-align:middle;
}
.ui-list[data-list-type="video-playlist"] .ui-list__video>.ui-list__video-icon {
  width:35px;
}
.ui-list[data-list-type="video-playlist"] .ui-list__video>.ui-list__video-title {
  font-size:1rem;
  font-weight:400;
  margin:0;
}
.ui-list[data-list-type="video-playlist"] .ui-list__video>.ui-list__video-time {
  width:20%;
  text-align:right;
}
.ui-list[data-list-type="video-playlist"] .ui-list__video .icon.icon-play {
  display:inline-block;
}
.ui-list[data-list-type="video-playlist"] .ui-list__video .icon.icon-play::before {
  border:2px solid #0099ff;
  border-radius:50%;
  font-size:16px;
  width:18px;
  height:18px;
  line-height:18px;
  padding:0 0 0 1px;
}
.ui-list[data-list-type="video-playlist"][data-list-theme="indigo-studio"] a, .ui-list[data-list-type="video-playlist"][data-list-theme="indigo-studio"] a:visited, .ui-list[data-list-type="video-playlist"][data-list-theme="indigo-studio"] .ui-list__video a .icon.icon-play::before, .ui-list[data-list-type="video-playlist"][data-list-theme="indigo-studio"] .ui-list__video a:visited .icon.icon-play::before {
  color:#00AE88;
  border-color:#00AE88;
}
.ui-list[data-list-type="video-playlist"][data-list-theme="indigo-studio"] a:hover, .ui-list[data-list-type="video-playlist"][data-list-theme="indigo-studio"] a:active, .ui-list[data-list-type="video-playlist"][data-list-theme="indigo-studio"] a:focus, .ui-list[data-list-type="video-playlist"][data-list-theme="indigo-studio"] .ui-list__video a:hover .icon.icon-play::before, .ui-list[data-list-type="video-playlist"][data-list-theme="indigo-studio"] .ui-list__video a:active .icon.icon-play::before, .ui-list[data-list-type="video-playlist"][data-list-theme="indigo-studio"] .ui-list__video a:focus .icon.icon-play::before {
  color:#227d6a;
  border-color:#227d6a;
}
.ui-list.ui-list--card ul {
  padding:0;
  margin:0;
  color:var(--color-port-gore);
  font-size:20px;
}
.ui-list.ui-list--card ul li {
  list-style-type:none;
  margin-bottom:10px;
}
.ui-list.ui-list--card ul li:last-child {
  margin-bottom:0;
}
.ui-list.ui-list--diamond {
  padding-left:50px;
  padding-left:35px;
  list-style:none;
}
.ui-list.ui-list--diamond li {
  position:relative;
}
.ui-list.ui-list--diamond li::before {
  content:'';
  position:absolute;
  top:3px;
  left:-30px;
  display:inline-block;
  width:18px;
  height:18px;
  background-color:var(--color-tree-poppy);
  transform:rotate(45deg);
}
@media only screen and (max-width:767px) {
  .ui-list.ui-list--diamond {
    padding-left: 30px;
  }
}
pre {
  color:black;
  background:#f5f2f0;
  text-shadow:0 1px white;
  font-family:monospace;
  text-align:left;
  white-space:pre;
  word-spacing:normal;
  word-break:normal;
  word-wrap:normal;
  line-height:1.5;
  -moz-tab-size:4;
  tab-size:4;
  -webkit-hyphens:none;
  -ms-hyphens:none;
  hyphens:none;
  padding:1em;
  margin:.5em 0 2em;
  overflow:auto;
}
.pre--zero-margin {
  margin:0;
}
.pre--zero-mar-bottom {
  margin-bottom:0;
}
code {
  font-family:Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
}
code[class*="language-"], pre[class*="language-"] {
  color:black;
  background:none;
  text-shadow:0 1px white;
  font-family:Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  text-align:left;
  white-space:pre;
  word-spacing:normal;
  word-break:normal;
  word-wrap:normal;
  line-height:1.5;
  -moz-tab-size:4;
  tab-size:4;
  -webkit-hyphens:none;
  -ms-hyphens:none;
  hyphens:none;
}
pre[class*="language-"]::-moz-selection, pre[class*="language-"] ::-moz-selection, code[class*="language-"]::-moz-selection, code[class*="language-"] ::-moz-selection {
  text-shadow:none;
  background:#b3d4fc;
}
pre[class*="language-"]::selection, pre[class*="language-"] ::selection, code[class*="language-"]::selection, code[class*="language-"] ::selection {
  text-shadow:none;
  background:#b3d4fc;
}
@media print {
  code[class*="language-"], pre[class*="language-"] {
    text-shadow: none;
  }
}
pre[class*="language-"] {
  padding:1em;
  margin:.5em 0 2em;
  overflow:auto;
}
:not(pre)>code[class*="language-"], pre[class*="language-"] {
  background:#f5f2f0;
}
:not(pre)>code[class*="language-"] {
  padding:.1em;
  border-radius:.3em;
  white-space:normal;
}
.token.comment, .token.prolog, .token.doctype, .token.cdata {
  color:slategray;
}
.token.punctuation {
  color:#999;
}
.namespace {
  opacity:.7;
}
.token.property, .token.tag, .token.boolean, .token.number, .token.constant, .token.symbol, .token.deleted {
  color:#905;
}
.token.selector, .token.attr-name, .token.string, .token.char, .token.builtin, .token.inserted {
  color:#690;
}
.token.operator, .token.entity, .token.url, .language-css .token.string, .style .token.string {
  color:#a67f59;
  background:hsla(0, 0%, 100%, .5);
}
.token.atrule, .token.attr-value, .token.keyword {
  color:#07a;
}
.token.function {
  color:#DD4A68;
}
.token.regex, .token.important, .token.variable {
  color:#e90;
}
.token.important, .token.bold {
  font-weight:bold;
}
.token.italic {
  font-style:italic;
}
.token.entity {
  cursor:help;
}
pre.code-toolbar {
  position:relative;
}
pre.code-toolbar>.toolbar {
  position:absolute;
  top:.3em;
  right:.2em;
  -webkit-transition:opacity 0.3s ease-in-out;
  transition:opacity 0.3s ease-in-out;
  opacity:0;
}
pre.code-toolbar:hover>.toolbar {
  opacity:1;
}
pre.code-toolbar>.toolbar .toolbar-item {
  display:inline-block;
}
pre.code-toolbar>.toolbar a {
  cursor:pointer;
}
pre.code-toolbar>.toolbar button {
  background:none;
  border:0;
  color:inherit;
  font:inherit;
  line-height:normal;
  overflow:visible;
  padding:0;
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
}
pre.code-toolbar>.toolbar a, pre.code-toolbar>.toolbar button, pre.code-toolbar>.toolbar span {
  color:#bbb;
  font-size:.8em;
  padding:0 .5em;
  background:#f5f2f0;
  background:rgba(224, 224, 224, 0.2);
  box-shadow:0 2px 0 0 rgba(0, 0, 0, 0.2);
  border-radius:.5em;
}
pre.code-toolbar>.toolbar a:hover, pre.code-toolbar>.toolbar a:focus, pre.code-toolbar>.toolbar button:hover, pre.code-toolbar>.toolbar button:focus, pre.code-toolbar>.toolbar span:hover, pre.code-toolbar>.toolbar span:focus {
  color:inherit;
  text-decoration:none;
}
.disclaimer {
  color:#b4b4b4;
  font-size:0.688rem;
  line-height:1.3em;
}
.disclaimer--mar-lg {
  margin:1em
}
.disclaimer--mar-md {
  margin:0.75em
}
.disclaimer--mar-sm {
  margin:0.5em
}
.disclaimer--mar-xs {
  margin:0.25em
}
.disclaimer--mar-bottom-lg {
  margin-bottom:1em
}
.disclaimer--mar-bottom-md {
  margin-bottom:0.75em
}
.disclaimer--mar-bottom-sm {
  margin-bottom:0.5em
}
.disclaimer--mar-bottom-xs {
  margin-bottom:0.25em
}
hr {
  background:transparent;
  border-top:1px solid #e3e3e3;
  margin:0;
}
.hr--igblue {
  border-top:1px solid #0099ff;
}
.container--video {
  position:relative;
  margin:0 auto;
  width:100%;
  padding-bottom:62.5%;
}
.container--video iframe, .container--video embed, .container--video object {
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
}
.container--video-max70 {
  max-width:70%;
  padding-bottom:39.5%;
}
.ui-form {
  font-size:16px;
}
.ui-form__row {
  margin:5px 0;
}
.ui-form input::placeholder, .ui-form textarea::placeholder {
  color:#ccc;
}
.ui-form label {
  cursor:pointer;
}
.ui-form__label {
  color:#262626;
  display:inline-block;
  font-size:0.875em;
  font-weight:500;
  margin:5px 0;
  padding:0;
  width:auto;
}
.ui-form__label--required::before, .ui-form__label--required::after {
  color:currentColor;
  display:inline-block;
  font-weight:bold;
}
.ui-form__label--required::after {
  content:"*";
  margin-left:4px;
}
.ui-form__label--required-before::before {
  content:"*";
  margin-right:4px;
}
.ui-form__label--required-before::after {
  display:none;
  margin-left:0;
}
.ui-form__field-notes {
  font-size:0.75em;
  opacity:0.8em;
}
.ui-form__required-note {
  font-size:0.75rem;
  margin-bottom:10px;
  display:block;
  position:relative;
  padding-left:8px;
}
.ui-form__required-note::after {
  content:"*";
  position:absolute;
  left:0;
}
.ui-form__required-note::after {
  color:currentColor;
  display:inline-block;
  font-weight:bold;
}
.ui-form .ui-form__input-group {
  display:flex;
  flex-direction:column;
}
.ui-form .ui-form__input-group * {
  order:1;
}
.ui-form .ui-form__input-group label {
  order:0;
}
.ui-form label[for="acceptGDPRFormSubmission"] {
  font-size:0.75rem;
  vertical-align:middle;
  line-height:normal;
  padding-left:32px;
  margin:20px 0 !important;
  position:relative;
  overflow:visible;
}
.ui-form label[for="acceptGDPRFormSubmission"] .label__text {
  display:block;
  margin-top:2px;
}
input:-webkit-autofill, input:-internal-autofill-selected {
  -webkit-box-shadow:0 0 0px 1000px #fff inset !important;
  box-shadow:0 0 0px 1000px #fff inset !important;
}
input[type="text"], input[type="email"], input[type="password"], input[type="tel"], input[type="date"], input[type="number"], input[type="url"], .ui-form input[type="text"], .ui-form input[type="email"], .ui-form input[type="password"], .ui-form input[type="tel"], .ui-form input[type="date"], .ui-form input[type="number"], .ui-form input[type="url"] {
  border:1px solid #dedede;
  box-sizing:border-box;
  box-shadow:none;
  font-size:1rem;
  letter-spacing:normal;
  line-height:normal;
  margin:-2px 0 0;
  padding:5px 0;
  text-indent:0;
  text-transform:none;
  width:100%;
  height:2.25em;
  color:#666;
  border-width:2px !important;
  padding:5px;
  background:white;
}
input[type="text"]:focus, input[type="email"]:focus, input[type="password"]:focus, input[type="tel"]:focus, input[type="date"]:focus, input[type="number"]:focus, input[type="url"]:focus, .ui-form input[type="text"]:focus, .ui-form input[type="email"]:focus, .ui-form input[type="password"]:focus, .ui-form input[type="tel"]:focus, .ui-form input[type="date"]:focus, .ui-form input[type="number"]:focus, .ui-form input[type="url"]:focus {
  background:transparent;
  border-color:#b4b4b4;
  outline:none;
}
textarea, .ui-form textarea {
  background:#fff;
  border:1px solid #dedede;
  box-sizing:border-box;
  color:#555;
  font-size:1rem;
  letter-spacing:normal;
  line-height:normal;
  outline:none;
  padding:5px 10px;
  text-transform:none;
  width:100%;
}
select::-ms-expand, .ui-form select::-ms-expand {
  display:none;
}
.ie9 .ui-form select, .lt-ie10 .ui-form select {
  padding:6px;
}
input[type="text"]:focus~label, input[type="email"]:focus~label, input[type="password"]:focus~label, input[type="tel"]:focus~label, input[type="date"]:focus~label, input[type="number"]:focus~label, input[type="url"]:focus~label, .ui-form input[type="text"]:focus~label, .ui-form input[type="email"]:focus~label, .ui-form input[type="password"]:focus~label, .ui-form input[type="tel"]:focus~label, .ui-form input[type="date"]:focus~label, .ui-form input[type="number"]:focus~label, .ui-form input[type="url"]:focus~label, textarea:focus~label {
  color:#666 !important;
}
.ui-form .ui-form__checkbox-group label.ui-form__checkbox-container {
  margin-right:25px;
}
label.ui-form__checkbox-container {
  cursor:pointer;
  display:inline-block;
  overflow:hidden;
  margin-top:15px;
  padding-left:30px;
  position:relative;
  vertical-align:middle;
}
.ui-form__checkbox-container .ui-form__checkbox {
  background:#f9f9f9;
  border:1px solid #aaa;
  cursor:pointer;
  display:inline-block;
  width:17px;
  height:17px;
  position:absolute;
  left:0;
  top:0;
}
.ui-form__checkbox-container input {
  visibility:hidden;
  position:absolute;
  width:0;
  height:0;
}
.ui-form__checkbox-container .ui-form__checkbox::after {
  border:solid red;
  border-radius:5px;
  border-width:0 3px 3px 0;
  content:"";
  position:absolute;
  left:12px;
  top:12px;
  height:0;
  width:0;
  opacity:1;
  -webkit-transform:rotate(0deg) scale(0);
  -ms-transform:rotate(0deg) scale(0);
  transform:rotate(0deg) scale(0);
}
.ui-form__checkbox-container input:checked~.ui-form__checkbox::after {
  background-color:transparent;
  border:solid #aaa;
  border-radius:0;
  border-width:0 2px 2px 0;
  opacity:1;
  left:5px;
  top:-1px;
  width:6px;
  height:12px;
  -webkit-transform:rotate(37deg) scale(1);
  -ms-transform:rotate(37deg) scale(1);
  transform:rotate(37deg) scale(1);
}
.ui-form__checkbox-container input:checked~.ui-form__checkbox {
  background:#f9f9f9;
  border-radius:0;
  opacity:1;
}
.ui-form__checkbox-container:hover .ui-form__checkbox {
  border-color:#666;
}
.ui-form__checkbox-container:hover .ui-form__checkbox::after {
  border-color:#666 !important;
}
input[type="text"].fieldInvalid~label, input[type="email"].fieldInvalid~label, input[type="password"].fieldInvalid~label, input[type="tel"].fieldInvalid~label, input[type="date"].fieldInvalid~label, input[type="number"].fieldInvalid~label, input[type="url"].fieldInvalid~label, .ui-form input[type="text"].fieldInvalid~label, .ui-form input[type="email"].fieldInvalid~label, .ui-form input[type="password"].fieldInvalid~label, .ui-form input[type="tel"].fieldInvalid~label, .ui-form input[type="date"].fieldInvalid~label, .ui-form input[type="number"].fieldInvalid~label, .ui-form input[type="url"].fieldInvalid~label, textarea.fieldInvalid~label {
  color:red !important;
}
.ui-form .field-validation-error {
  color:red;
  display:block;
  margin:5px 0 !important;
  padding:5px 0;
  font-size:0.75rem;
  line-height:1rem;
}
.ui-form .field-validation-error a, .field-validation-error-msg a {
  color:#ce0707;
  text-decoration:underline;
  font-weight:bold;
}
.ui-form .field-validation-error a:hover, .ui-form .field-validation-error a:focus {
  color:red;
}
.fieldInvalid {
  border-color:red!important;
}
.field-validation-error-msg, .ui-form__errors-block .field-validation-error {
  background:#f7d2d7;
  border-radius:0;
  border:none;
  box-sizing:border-box;
  color:red;
  font-size:12px;
  line-height:1.3em;
  max-width:none;
  margin:10px 0;
  padding:10px;
  box-shadow:none;
  text-shadow:none;
}
input[type="text"][disabled], input[type="email"][disabled], input[type="password"][disabled], input[type="tel"][disabled], input[type="date"][disabled], input[type="number"][disabled], .ui-form input[type="text"][disabled], .ui-form input[type="email"][disabled], .ui-form input[type="password"][disabled], .ui-form input[type="tel"][disabled], .ui-form input[type="date"][disabled], .ui-form input[type="number"][disabled], select[disabled], .ui-form select[disabled] {
  background:#f9f9f9;
  color:#ccc;
  cursor:default;
  border-color:#efefef;
}
.ui-form .ui-form__row-multiple-inputs input {
  margin:5px 0;
}
.ui-form--border-top {
  border-top:1px solid #dedede;
  margin-top:15px;
  padding-top:15px;
}
.ui-form--border-bottom {
  border-bottom:1px solid #dedede;
  margin-bottom:15px;
  padding-bottom:15px;
}
.ui-form.lead-tracker-form label {
  color:#999;
  font-size:0.75rem;
  margin:10px 0 0;
}
.ui-form.lead-tracker-form .column-block {
  margin-bottom:5px;
}
.ui-form.ui-form--single-col .column-block {
  width:100% !important;
  margin-left:0;
  margin-right:0;
}
[class*="bg--dark"] .ui-form.lead-tracker-form label {
  color:#b4b4b4;
}
[class*="bg--darker"] .ui-form.lead-tracker-form label {
  color:#ededed;
}
[class*="bg--dark"] .ui-form__label {
  color:#b4b4b4;
}
[class*="bg--darker"] .ui-form__label {
  color:#ededed;
}
[class*="bg--dark"] .ui-form__label--required::before, [class*="bg--dark"] .ui-form__label--required::after {
  color:#b4b4b4;
}
[class*="bg--darker"] .ui-form__label--required::before, [class*="bg--darker"] .ui-form__label--required::after {
  color:#ededed;
}
[class*="bg--dark"] .ui-form__label--required::before, [class*="bg--dark"] .ui-form__label--required::after {
  color:currentColor;
}
[class*="bg--dark"] .ui-form__links--secondary a, [class*="bg--dark"] .ui-form__links--secondary a:visited {
  color:#ededed !important;
  text-decoration:underline;
}
[class*="bg--dark"] .ui-form__links--secondary a:hover, [class*="bg--dark"] .ui-form__links--secondary a:focus {
  text-decoration:none;
}
[class*="bg--dark"] .ui-form input::placeholder, [class*="bg--dark"] .ui-form textarea::placeholder {
  color:#999;
}
[class*="bg--dark"] .ui-form input[type="text"], [class*="bg--dark"] .ui-form input[type="email"], [class*="bg--dark"] .ui-form input[type="password"], [class*="bg--dark"] .ui-form input[type="tel"], [class*="bg--dark"] .ui-form input[type="date"], [class*="bg--dark"] .ui-form input[type="number"], [class*="bg--dark"] .ui-form input[type="url"] {
  border:1px solid #dedede;
  color:#666;
  border-width:2px !important;
  padding:5px;
  background:white;
}
[class*="bg--dark"] .ui-form input[type="text"]:focus, [class*="bg--dark"] .ui-form input[type="email"]:focus, [class*="bg--dark"] .ui-form input[type="password"]:focus, [class*="bg--dark"] .ui-form input[type="tel"]:focus, [class*="bg--dark"] .ui-form input[type="date"]:focus, [class*="bg--dark"] .ui-form input[type="number"]:focus, [class*="bg--dark"] .ui-form input[type="url"]:focus {
  background:#dedede;
  border-color:#fff;
  color:#666;
}
[class*="bg--dark"] .ui-form input[type="text"]:focus~label, [class*="bg--dark"] .ui-form input[type="email"]:focus~label, [class*="bg--dark"] .ui-form input[type="password"]:focus~label, [class*="bg--dark"] .ui-form input[type="tel"]:focus~label, [class*="bg--dark"] .ui-form input[type="date"]:focus~label, [class*="bg--dark"] .ui-form input[type="number"]:focus~label, [class*="bg--dark"] .ui-form input[type="url"]:focus~label, [class*="bg--dark"] .ui-form textarea:focus~label {
  color:#fff !important;
}
[class*="bg--dark"] .ui-form input[type="text"].fieldInvalid~label, [class*="bg--dark"] .ui-form input[type="email"].fieldInvalid~label, [class*="bg--dark"] .ui-form input[type="password"].fieldInvalid~label, [class*="bg--dark"] .ui-form input[type="tel"].fieldInvalid~label, [class*="bg--dark"] .ui-form input[type="date"].fieldInvalid~label, [class*="bg--dark"] .ui-form input[type="number"].fieldInvalid~label, [class*="bg--dark"] .ui-form input[type="url"].fieldInvalid~label {
  color:#f7a5b0 !important;
}
[class*="bg--dark"] input[type="text"][disabled], [class*="bg--dark"] input[type="email"][disabled], [class*="bg--dark"] input[type="password"][disabled], [class*="bg--dark"] input[type="tel"][disabled], [class*="bg--dark"] input[type="date"][disabled], [class*="bg--dark"] input[type="number"][disabled], [class*="bg--dark"] .ui-form input[type="text"][disabled], [class*="bg--dark"] .ui-form input[type="email"][disabled], [class*="bg--dark"] .ui-form input[type="password"][disabled], [class*="bg--dark"] .ui-form input[type="tel"][disabled], [class*="bg--dark"] .ui-form input[type="date"][disabled], [class*="bg--dark"] .ui-form input[type="number"][disabled], [class*="bg--dark"] select[disabled], [class*="bg--dark"] .ui-form select[disabled] {
  background:#f9f9f9;
  color:#ccc;
  cursor:default;
  border-color:#efefef;
}
.ui-form[data-form-theme*="light-bg-theme"] input[type="text"], .ui-form[data-form-theme*="light-bg-theme"] input[type="email"], .ui-form[data-form-theme*="light-bg-theme"] input[type="password"], .ui-form[data-form-theme*="light-bg-theme"] input[type="tel"], .ui-form[data-form-theme*="light-bg-theme"] input[type="date"], .ui-form[data-form-theme*="light-bg-theme"] input[type="number"], .ui-form[data-form-theme*="light-bg-theme"] input[type="url"] {
  border-color:#999;
  color:#666;
  border-width:2px !important;
  padding:5px;
  background:white;
}
.ui-form[data-form-theme*="light-bg-theme"] input[type="text"]:focus, .ui-form[data-form-theme*="light-bg-theme"] input[type="email"]:focus, .ui-form[data-form-theme*="light-bg-theme"] input[type="password"]:focus, .ui-form[data-form-theme*="light-bg-theme"] input[type="tel"]:focus, .ui-form[data-form-theme*="light-bg-theme"] input[type="date"]:focus, .ui-form input[type="number"]:focus, .ui-form[data-form-theme*="light-bg-theme"] input[type="url"]:focus {
  background:transparent;
  border-color:#333;
}
.ui-form.lead-tracker-form[data-form-label*="light-bg-theme"] label {
  color:#666;
}
.ui-form[data-form-theme*="light-bg-theme"] input[type="text"]:focus~label, .ui-form[data-form-theme*="light-bg-theme"] input[type="email"]:focus~label, .ui-form[data-form-theme*="light-bg-theme"] input[type="password"]:focus~label, .ui-form[data-form-theme*="light-bg-theme"] input[type="tel"]:focus~label, .ui-form[data-form-theme*="light-bg-theme"] input[type="date"]:focus~label, .ui-form[data-form-theme*="light-bg-theme"] input[type="number"]:focus~label, .ui-form[data-form-theme*="light-bg-theme"] input[type="url"]:focus~label, .ui-form[data-form-theme*="light-bg-theme"] textarea:focus~label {
  color:#333 !important;
}
[class*="bg--dark"] [data-form-theme*="ignite"] .fieldInvalid {
  border-color:#fd7539 !important;
}
[class*="bg--dark"] .ui-form[data-form-theme*="ignite"] input[type="text"].fieldInvalid~label, [class*="bg--dark"] .ui-form[data-form-theme*="ignite"] input[type="email"].fieldInvalid~label, [class*="bg--dark"] .ui-form[data-form-theme*="ignite"] input[type="password"].fieldInvalid~label, [class*="bg--dark"] .ui-form[data-form-theme*="ignite"] input[type="tel"].fieldInvalid~label, [class*="bg--dark"] .ui-form[data-form-theme*="ignite"] input[type="date"].fieldInvalid~label, [class*="bg--dark"] .ui-form[data-form-theme*="ignite"] input[type="number"].fieldInvalid~label, [class*="bg--dark"] .ui-form[data-form-theme*="ignite"] input[type="url"].fieldInvalid~label {
  color:#fda78b !important;
}
.ui-form[data-form-theme*="ignite"] input[type="text"], .ui-form[data-form-theme*="ignite"] input[type="email"], .ui-form[data-form-theme*="ignite"] input[type="password"], .ui-form[data-form-theme*="ignite"] input[type="tel"], .ui-form[data-form-theme*="ignite"] input[type="date"], .ui-form[data-form-theme*="ignite"] input[type="number"], .ui-form[data-form-theme*="ignite"] input[type="url"] {
  color:#666;
  border-width:2px !important;
  padding:5px;
  background:white;
}
[class*="bg--dark"] .ui-form[data-form-theme*="ignite"] a:link, [class*="bg--dark"] .ui-form[data-form-theme*="ignite"] a:active, [class*="bg--dark"] .ui-form[data-form-theme*="ignite"] a:visited {
  color:#fff;
  text-decoration:underline;
}
[class*="bg--dark"] .ui-form[data-form-theme*="ignite"] a:hover, [class*="bg--dark"] .ui-form[data-form-theme*="ignite"] a:focus-visible {
  color:#dedede;
}
[data-form-theme*="indigo"] .ui-btn {
  color:#fff;
  background:#00AE88;
  border-color:#00AE88;
}
[data-form-theme*="indigo"] .ui-btn.ui-btn--default[disabled]:hover, [data-form-theme*="indigo"] .ui-btn.ui-btn--default.disabled:hover, [data-form-theme*="indigo"] .ui-btn.ui-btn--default[disabled]:focus, [data-form-theme*="indigo"] .ui-btn.ui-btn--default.disabled:focus {
  background:#00AE88;
  border-color:#00AE88;
  color:#fff;
}
[data-form-theme*="reveal"] .ui-btn {
  color:#fff;
  background:#00AE88;
  border-color:#00AE88;
}
[data-form-theme*="reveal"] .ui-btn.ui-btn--default[disabled]:hover, [data-form-theme*="reveal"] .ui-btn.ui-btn--default.disabled:hover, [data-form-theme*="indigo"] .ui-btn.ui-btn--default[disabled]:focus, [data-form-theme*="indigo"] .ui-btn.ui-btn--default.disabled:focus {
  background:#00AE88;
  border-color:#00AE88;
  color:#fff;
}
[class*="bg--dark"] [data-form-theme="reveal"] .ui-btn {
  border:1px solid #fff;
  color:#fff;
  background:transparent;
}
[class*="bg--dark"] [data-form-theme="reveal"] .ui-btn:hover, [class*="bg--dark"] [data-form-theme="reveal"] .ui-btn:focus {
  border:1px solid #0099ff;
  color:#fff;
  background:#0099ff;
}
[class*="bg--dark"] .ui-form.lead-tracker-form[data-form-theme="reveal"] label {
  color:#fff;
}
[class*="bg--dark"] .ui-form.lead-tracker-form[data-form-theme="reveal"] .ui-form__required-note {
  color:#fff;
}
.loader__container {
  position:relative;
}
.loader__container--fullscreen {
  background:rgba(255, 255, 255, 0.5);
  position:fixed;
  top:0;
  right:0;
  left:0;
  bottom:0;
  width:100%;
  z-index:99999;
}
.loader__container .loader {
  position:absolute;
  margin-left:-15px;
  top:50%;
  left:50%;
  -webkit-transform:translateY(-50%);
  -ms-transform:translateY(-50%);
  transform:translateY(-50%);
}
.loader--bar {
  border:5px solid #555;
  border-top:5px solid #0099ff;
  border-radius:50%;
  color:#fff !important;
  display:block;
  margin:0 auto;
  width:30px;
  height:30px;
  -webkit-animation:spin 2s linear infinite;
  animation:spin 2s linear infinite;
}
[data-theme*="indigo"] .loader--bar {
  border-top:5px solid #37459e;
}
#resend-message {
  color:#666;
}
.bg--dark #resend-message {
  color:#b4b4b4;
}
.bg--darker #resend-message {
  color:#ededed;
}
.icon--title {
  box-sizing:content-box;
  display:inline-block;
  text-align:center;
}
.icon--circled {
  border:1px solid;
  border-radius:50%;
  text-align:center;
}
.icon--bordered-circle {
  border:1px solid;
  border-radius:50%;
  text-align:center;
}
.icon--sm {
  font-size:0.8em;
  line-height:1.2em;
  width:1.2em;
  height:1.2em;
}
.icon--box-sizing {
  box-sizing:content-box!important;
}
.icon--color-sushi::before {
  color:#8bc541;
}
.ytVideo__trigger {
  cursor:pointer;
  position:relative;
}
.ytVideo__trigger.ytVideo--active {
  cursor:default;
}
.ytVideo__trigger .ytVideo__cta {
  font-size:14px;
  position:absolute;
  top:-10px;
  left:0;
}
.ytVideo__trigger .ytVideo__cta .icon-play {
  background:#0099ff;
  color:#fff;
  border-radius:50%;
  display:inline-block;
  font-size:15px;
  line-height:20px;
  width:20px;
  height:20px;
}
.ytVideo__trigger.ytVideo--active .ytVideo__cta {
  display:none;
}
#ta-products.ta-products--1col .be-row {
  max-width:33%;
}
#ta-products.ta-products--2col .be-row {
  max-width:62.5%;
}
#ta-products.ta-products--1col .features-block__item, #ta-products.ta-products--2col .features-block__item {
  max-width:initial;
}
.lt-ie9 .ie-hide, .lt-ie10 .ie-hide {
  display:none;
}
@media screen and (-ms-high-contrast:active), (-ms-high-contrast:none) {
  .ie-hide {
    display: none;
  }
}
@media only screen and (min-width:1280px) {
  .hidden-lg {
    display: none!important;
  }
  .visible-lg {
    display: inherit!important;
  }
  .display--block-lg {
    display: block;
  }
  .display--inline-block-lg {
    display: inline-block;
  }
  .display--inline-lg {
    display: inline;
  }
  .one-half-lg, .one-third-lg, .one-fourth-lg, .two-third-lg, .three-fourth-lg {
    float: left;
    margin-left: 0;
    margin-left: 5%!important;
    margin-bottom: 60px!important;
  }
  .be-row .visible-lg+.column-block, .be-row .one-half-lg:first-child, .be-row .one-third-lg:first-child, .be-row .one-fourth-lg:first-child, .be-row .two-third-lg:first-child, .be-row .three-fourth-lg:first-child {
    margin-left: 0!important;
  }
  .one-col-lg {
    float: none;
    margin-left: 0;
    margin-bottom: 60px!important;
    width: 100%;
  }
  .one-half-lg {
    width: 47.5%;
  }
  .one-third-lg {
    width: 30%;
  }
  .one-fourth-lg {
    width: 21.25%;
  }
  .two-third-lg {
    width: 65%;
  }
  .three-fourth-lg {
    width: 73.75%;
  }
  .one-third.one-half-lg:nth-child(2n+1), .one-fourth.one-half-lg:nth-child(2n+1), .one-fifth.one-half-lg:nth-child(2n+1), .one-fifth.one-third-lg:nth-child(3n+1), .one-sixth.one-half-lg:nth-child(2n+1), .one-sixth.one-third-lg:nth-child(3n+1) {
    margin-left: 0!important;
    clear: both;
  }
  .text--align-left-lg {
    text-align: left;
  }
  .text--align-center-lg {
    text-align: center;
  }
  .text--align-right-lg {
    text-align: right;
  }
  .bgImage--none-lg {
    background-image: none !important;
  }
  .width--full-lg {
    width: 100% !important;
  }
  .zero-padding-lg {
    padding: 0!important;
  }
  .zero-padding-top-lg {
    padding-top: 0!important;
  }
  .zero-padding-bottom-lg {
    padding-bottom: 0!important;
  }
  .zero-padding-left-lg {
    padding-left: 0!important;
  }
  .zero-padding-right-lg {
    padding-right: 0!important;
  }
  .zero-margin-lg {
    margin: 0!important;
  }
  .zero-margin-top-lg {
    margin-top: 0!important;
  }
  .zero-margin-bottom-lg {
    margin-bottom: 0!important;
  }
  .zero-margin-left-lg {
    margin-left: 0!important;
  }
  .zero-margin-right-lg {
    margin-right: 0!important;
  }
  .padding-bottom-xs-lg {
    padding-bottom: 15px!important;
  }
}
@media only screen and (max-width:1280px) and (min-width:960px) {
  .ui-btn--stacked-md .ui-btn {
    display: block;
    margin-left: 0;
    margin-right: 0;
  }
  .ui-btn--stacked-md button.ui-btn {
    width: 100%;
  }
  .hidden-md {
    display: none!important;
  }
  .visible-md {
    display: inherit!important;
  }
  .p-relative--md {
    position: relative;
  }
  .p-static--md {
    position: static;
  }
  .display--block-md {
    display: block;
  }
  .display--inline-block-md {
    display: inline-block;
  }
  .display--inline-md {
    display: inline;
  }
  .columns.columns__1--md {
    -webkit-columns: 1;
    -moz-columns: 1;
    columns: 1;
  }
  .one-half-md, .one-third-md, .one-fourth-md, .two-third-md, .three-fourth-md {
    float: left;
    margin-left: 0;
    margin-left: 5%!important;
    margin-bottom: 60px!important;
  }
  .be-row .visible-md+.column-block, .be-row .one-half-md:first-child, .be-row .one-third-md:first-child, .be-row .one-fourth-md:first-child, .be-row .two-third-md:first-child, .be-row .three-fourth-md:first-child {
    margin-left: 0!important;
  }
  .one-col-md {
    float: none;
    margin-left: 0;
    margin-bottom: 60px!important;
    width: 100%;
  }
  .one-half-md {
    width: 47.5%;
  }
  .one-third-md {
    width: 30%;
  }
  .one-fourth-md {
    width: 21.25%;
  }
  .two-third-md {
    width: 65%;
  }
  .three-fourth-md {
    width: 73.75%;
  }
  .one-third.one-half-md:nth-child(2n+1), .one-fourth.one-half-md:nth-child(2n+1), .one-fifth.one-half-md:nth-child(2n+1), .one-fifth.one-third-md:nth-child(3n+1), .one-sixth.one-half-md:nth-child(2n+1), .one-sixth.one-third-md:nth-child(3n+1) {
    margin-left: 0!important;
    clear: both;
  }
  .line-height--normal-md {
    line-height: normal;
  }
  .text--align-left-md {
    text-align: left;
  }
  .text--align-center-md {
    text-align: center;
  }
  .text--align-right-md {
    text-align: right;
  }
  .bgImage--none-md {
    background-image: none !important;
  }
  .width--full-md {
    width: 100% !important;
  }
  .zero-padding-md {
    padding: 0!important;
  }
  .zero-padding-top-md {
    padding-top: 0!important;
  }
  .zero-padding-bottom-md {
    padding-bottom: 0!important;
  }
  .zero-padding-left-md {
    padding-left: 0!important;
  }
  .zero-padding-right-md {
    padding-right: 0!important;
  }
  .zero-margin-md {
    margin: 0!important;
  }
  .zero-margin-top-md {
    margin-top: 0!important;
  }
  .zero-margin-bottom-md {
    margin-bottom: 0!important;
  }
  .zero-margin-left-md {
    margin-left: 0!important;
  }
  .zero-margin-right-md {
    margin-right: 0!important;
  }
  .padding-bottom-xs-md {
    padding-bottom: 15px!important;
  }
}
@media only screen and (max-width:959px) and (min-width:768px) {
  h1, .text--h1 {
    font-size: 3.25em;
  }
  h2, .text--h2 {
    font-size: 2.5em;
  }
  .display--block-sm {
    display: block;
  }
  .display--inline-block-sm {
    display: inline-block;
  }
  .display--inline-sm {
    display: inline;
  }
  .text--align-left-sm {
    text-align: left;
  }
  .text--align-center-sm {
    text-align: center;
  }
  .text--align-right-sm {
    text-align: right;
  }
  .zero-margin-bottom {
    margin-bottom: 0px !important;
  }
  .padding-top-bottom {
    padding: 0px 0px !important;
  }
  .padding-top-bottom-20 {
    padding: 5px 0px !important;
  }
  .padding-top-bottom-40 {
    padding: 10px 0px !important;
  }
  .padding-top-bottom-70 {
    padding: 70px 0 !important;
  }
  .padding-top-bottom-80 {
    padding: 80px 0 !important;
  }
  .padding-top-bottom-90 {
    padding: 90px 0 !important;
  }
  .padding-top-bottom-100 {
    padding: 100px 0 !important;
  }
  .padding-top-bottom-200 {
    padding: 50px 0px !important;
  }
  .padding-top-bottom-400 {
    padding: 50px 0px !important;
  }
  .columns.columns__1--sm {
    -webkit-columns: 1;
    -moz-columns: 1;
    columns: 1;
  }
  .one-half-sm, .one-third-sm, .one-fourth-sm, .two-third-sm, .three-fourth-sm {
    float: left;
    margin-left: 0;
    margin-left: 5%!important;
    margin-bottom: 60px!important;
  }
  .be-row .visible-sm+.column-block, .be-row .one-half-sm:first-child, .be-row .one-third-sm:first-child, .be-row .one-fourth-sm:first-child, .be-row .two-third-sm:first-child, .be-row .three-fourth-sm:first-child {
    margin-left: 0!important;
  }
  .one-col-sm {
    float: none;
    margin-left: 0;
    margin-bottom: 60px!important;
    width: 100%;
  }
  .one-half-sm {
    width: 47.5%;
  }
  .one-third-sm {
    width: 30%;
  }
  .one-fourth-sm {
    width: 21.25%;
  }
  .two-third-sm {
    width: 65%;
  }
  .three-fourth-sm {
    width: 73.75%;
  }
  .one-third.one-half-sm:nth-child(2n+1), .one-fourth.one-half-sm:nth-child(2n+1), .one-fifth.one-half-sm:nth-child(2n+1), .one-fifth.one-third-sm:nth-child(3n+1), .one-sixth.one-half-sm:nth-child(2n+1), .one-sixth.one-third-sm:nth-child(3n+1) {
    margin-left: 0!important;
    clear: both;
  }
  .hidden-sm {
    display: none!important;
  }
  .visible-sm {
    display: inherit!important;
  }
  .p-relative--sm {
    position: relative;
  }
  .p-static--sm {
    position: static;
  }
  .line-height--normal-sm {
    line-height: normal;
  }
  .ui-btn--stacked-sm .ui-btn {
    display: block;
    margin-left: 0;
    margin-right: 0;
  }
  .ui-btn--stacked-sm button.ui-btn {
    width: 100%;
  }
  .container--video-max70 {
    max-width: 100%;
    padding-bottom: 56%;
  }
  #ta-products.ta-products--1col .be-row, #ta-products.ta-products--2col .be-row {
    max-width: 100%;
  }
  #ta-products.ta-products--1col .features-block__item, #ta-products.ta-products--2col .features-block__item {
    max-width: initial;
  }
  .bgImage--none-sm {
    background-image: none !important;
  }
  .width--full-sm {
    width: 100% !important;
  }
  .zero-padding-sm {
    padding: 0!important;
  }
  .zero-padding-top-sm {
    padding-top: 0!important;
  }
  .zero-padding-bottom-sm {
    padding-bottom: 0!important;
  }
  .zero-padding-left-sm {
    padding-left: 0!important;
  }
  .zero-padding-right-sm {
    padding-right: 0!important;
  }
  .zero-margin-sm {
    margin: 0!important;
  }
  .zero-margin-top-sm {
    margin-top: 0!important;
  }
  .zero-margin-bottom-sm {
    margin-bottom: 0!important;
  }
  .zero-margin-left-sm {
    margin-left: 0!important;
  }
  .zero-margin-right-sm {
    margin-right: 0!important;
  }
  .padding-bottom-xs-sm {
    padding-bottom: 15px!important;
  }
}
@media only screen and (max-width:767px) and (min-width:480px) {
  h1, .text--h1 {
    font-size: 2.75em;
  }
  h2, .text--h2 {
    font-size: 2.125em;
  }
  h3, .text--h3 {
    font-size: 1.75em;
  }
  h4, .text--h4 {
    font-size: 1.375em;
  }
  h5, .text--h5 {
    font-size: 1.125em;
  }
  h6, .text--h6 {
    font-size: 1em;
  }
  .zero-margin-bottom {
    margin-bottom: 0px !important;
  }
  .padding-top-bottom {
    padding: 0px 0px !important;
  }
  .padding-top-bottom-20 {
    padding: 5px 0px !important;
  }
  .padding-top-bottom-40 {
    padding: 10px 0px !important;
  }
  .padding-top-bottom-70 {
    padding: 70px 0 !important;
  }
  .padding-top-bottom-80 {
    padding: 80px 0 !important;
  }
  .padding-top-bottom-90 {
    padding: 90px 0 !important;
  }
  .padding-top-bottom-100 {
    padding: 100px 0 !important;
  }
  .padding-top-bottom-200 {
    padding: 50px 0px !important;
  }
  .padding-top-bottom-400 {
    padding: 50px 0px !important;
  }
  .columns.columns__1--xs {
    -webkit-columns: 1;
    -moz-columns: 1;
    columns: 1;
  }
  .one-sixth {
    width: 100%;
    margin-left: 0!important;
  }
  .one-half-xs, .one-third-xs, .one-fourth-xs, .two-third-xs, .three-fourth-xs {
    float: left;
    margin-left: 0;
    margin-left: 5%!important;
    margin-bottom: 60px!important;
  }
  .be-row .visible-xs+.column-block, .be-row .one-half-xs:first-child, .be-row .one-third-xs:first-child, .be-row .one-fourth-xs:first-child, .be-row .two-third-xs:first-child, .be-row .three-fourth-xs:first-child {
    margin-left: 0!important;
  }
  .one-half-xs {
    width: 47.5%;
  }
  .one-third-xs {
    width: 30%;
  }
  .one-fourth-xs {
    width: 21.25%;
  }
  .two-third-xs {
    width: 65%;
  }
  .three-fourth-xs {
    width: 73.75%;
  }
  .one-third.one-half-xs:nth-child(2n+1), .one-fourth.one-half-xs:nth-child(2n+1), .one-fifth.one-half-xs:nth-child(2n+1), .one-fifth.one-third-xs:nth-child(3n+1), .one-sixth.one-half-xs:nth-child(2n+1), .one-sixth.one-third-xs:nth-child(3n+1) {
    margin-left: 0!important;
    clear: both;
  }
  .hidden-xs {
    display: none!important;
  }
  .visible-xs {
    display: inherit!important;
  }
  .p-relative--xs {
    position: relative;
  }
  .p-static--xs {
    position: static;
  }
  .display--block-xs {
    display: block;
  }
  .display--inline-block-xs {
    display: inline-block;
  }
  .display--inline-xs {
    display: inline;
  }
  .line-height--normal-xs {
    line-height: normal;
  }
  .text--align-left-xs {
    text-align: left;
  }
  .text--align-center-xs {
    text-align: center;
  }
  .text--align-right-xs {
    text-align: right;
  }
  .ui-btn--stacked-xs .ui-btn {
    display: block;
    margin-left: 0;
    margin-right: 0;
  }
  .ui-btn--stacked-xs button.ui-btn {
    width: 100%;
  }
  .ui-btn-pillar {
    margin: 0 0 5px;
  }
  .ui-btn-pillar__wrap {
    margin: 0;
  }
  .decor--angled-triangle.decor--angled-triangle--top-left, .decor--angled-triangle.decor--angled-triangle--bottom-right {
    border-width: 0 0 60px 100vw;
  }
  .container--video-max70 {
    max-width: 100%;
    padding-bottom: 56%;
  }
  #ta-products.ta-products--1col .be-row, #ta-products.ta-products--2col .be-row {
    max-width: 100%;
  }
  #ta-products.ta-products--1col .features-block__item, #ta-products.ta-products--2col .features-block__item {
    max-width: initial;
  }
  .bgImage--none-xs {
    background-image: none !important;
  }
  .width--full-xs {
    width: 100% !important;
  }
  .zero-padding-xs {
    padding: 0!important;
  }
  .zero-padding-top-xs {
    padding-top: 0!important;
  }
  .zero-padding-bottom-xs {
    padding-bottom: 0!important;
  }
  .zero-padding-left-xs {
    padding-left: 0!important;
  }
  .zero-padding-right-xs {
    padding-right: 0!important;
  }
  .zero-margin-xs {
    margin: 0!important;
  }
  .zero-margin-top-xs {
    margin-top: 0!important;
  }
  .zero-margin-bottom-xs {
    margin-bottom: 0!important;
  }
  .zero-margin-left-xs {
    margin-left: 0!important;
  }
  .zero-margin-right-xs {
    margin-right: 0!important;
  }
  .padding-bottom-xs-xs {
    padding-bottom: 15px!important;
  }
}
@media only screen and (max-width:480px) {
  h1, .text--h1 {
    font-size: 2.25em;
  }
  h2, .text--h2 {
    font-size: 2.125em;
  }
  h3, .text--h3 {
    font-size: 1.75em;
  }
  h4, .text--h4 {
    font-size: 1.375em;
  }
  h5, .text--h5 {
    font-size: 1.125em;
  }
  h6, .text--h6 {
    font-size: 1em;
  }
  .zero-margin-bottom {
    margin-bottom: 0px !important;
  }
  .padding-top-bottom {
    padding: 0px 0px !important;
  }
  .padding-top-bottom-20 {
    padding: 5px 0px !important;
  }
  .padding-top-bottom-40 {
    padding: 10px 0px !important;
  }
  .padding-top-bottom-70 {
    padding: 70px 0 !important;
  }
  .padding-top-bottom-80 {
    padding: 80px 0 !important;
  }
  .padding-top-bottom-90 {
    padding: 90px 0 !important;
  }
  .padding-top-bottom-100 {
    padding: 100px 0 !important;
  }
  .padding-top-bottom-200 {
    padding: 50px 0px !important;
  }
  .padding-top-bottom-400 {
    padding: 50px 0px !important;
  }
  .columns.columns__1--xxs {
    -webkit-columns: 1;
    -moz-columns: 1;
    columns: 1;
  }
  .one-sixth {
    width: 100%;
    margin-left: 0!important;
  }
  .one-half-xxs, .one-third-xxs, .one-fourth-xxs, .two-third-xxs, .three-fourth-xxs {
    float: left;
    margin-left: 0;
    margin-left: 5%!important;
    margin-bottom: 60px!important;
  }
  .be-row .visible-xxs+.column-block, .be-row .one-half-xxs:first-child, .be-row .one-third-xxs:first-child, .be-row .one-fourth-xxs:first-child, .be-row .two-third-xxs:first-child, .be-row .three-fourth-xxs:first-child {
    margin-left: 0!important;
  }
  .one-half-xxs {
    width: 47.5%;
  }
  .one-third-xxs {
    width: 30%;
  }
  .one-fourth-xxs {
    width: 21.25%;
  }
  .two-third-xxs {
    width: 65%;
  }
  .three-fourth-xxs {
    width: 73.75%;
  }
  .one-third.one-half-xxs:nth-child(2n+1), .one-fourth.one-half-xxs:nth-child(2n+1), .one-fifth.one-half-xxs:nth-child(2n+1), .one-fifth.one-third-xxs:nth-child(3n+1), .one-sixth.one-half-xxs:nth-child(2n+1), .one-sixth.one-third-xxs:nth-child(3n+1) {
    margin-left: 0!important;
    clear: both;
  }
  .hidden-xxs {
    display: none!important;
  }
  .visible-xxs {
    display: inherit!important;
  }
  .p-relative--xxs {
    position: relative;
  }
  .p-static--xxs {
    position: static;
  }
  .display--block-xxs {
    display: block;
  }
  .display--inline-block-xxs {
    display: inline-block;
  }
  .display--inline-xxs {
    display: inline;
  }
  .line-height--normal-xxs {
    line-height: normal;
  }
  .text--align-left-xxs {
    text-align: left;
  }
  .text--align-center-xxs {
    text-align: center;
  }
  .text--align-right-xxs {
    text-align: right;
  }
  .ui-btn--stacked-xxs .ui-btn {
    display: block;
    margin-left: 0;
    margin-right: 0;
  }
  .ui-btn--stacked-xxs button.ui-btn {
    width: 100%;
  }
  .ui-btn-pillar {
    margin: 0 0 5px;
  }
  .ui-btn-pillar__wrap {
    margin: 0;
  }
  .decor--angled-triangle.decor--angled-triangle--top-left, .decor--angled-triangle.decor--angled-triangle--bottom-right {
    border-width: 0 0 60px 100vw;
  }
  .container--video-max70 {
    max-width: 100%;
    padding-bottom: 56%;
  }
  #ta-products.ta-products--1col .be-row, #ta-products.ta-products--2col .be-row {
    max-width: 100%;
  }
  #ta-products.ta-products--1col .features-block__item, #ta-products.ta-products--2col .features-block__item {
    max-width: initial;
  }
  .bgImage--none-xxs {
    background-image: none !important;
  }
  .width--full-xxs {
    width: 100% !important;
  }
  .zero-padding-xxs {
    padding: 0!important;
  }
  .zero-padding-top-xxs {
    padding-top: 0!important;
  }
  .zero-padding-bottom-xxs {
    padding-bottom: 0!important;
  }
  .zero-padding-left-xxs {
    padding-left: 0!important;
  }
  .zero-padding-right-xxs {
    padding-right: 0!important;
  }
  .zero-margin-xxs {
    margin: 0!important;
  }
  .zero-margin-top-xxs {
    margin-top: 0!important;
  }
  .zero-margin-bottom-xxs {
    margin-bottom: 0!important;
  }
  .zero-margin-left-xxs {
    margin-left: 0!important;
  }
  .zero-margin-right-xxs {
    margin-right: 0!important;
  }
  .padding-bottom-xs-xxs {
    padding-bottom: 15px!important;
  }
}
@media only screen and (min-width:1100px) {
  .bgImage--featured-grid-bottom {
    background-image: url("https://static.infragistics.com/marketing/Website/css/background/header-bg-1920.png?v=201704181552");
  }
  .bgImage--featured-grid-bottom-landing-header {
    background-image: url("https://static.infragistics.com/marketing/Website/css/background/header-background-lp-1920.jpg?v=201712151417");
    background-position: bottom center;
  }
  .bgImage--featured-grid-bottom-landing-quote {
    background-image: url("https://static.infragistics.com/marketing/Website/css/background/quote-background-1920.jpg?v=201712151417");
    background-position: bottom center;
  }
}
@media only screen and (max-width:1100px) and (min-width:768px) {
  .bgImage--featured-grid-bottom {
    background-image: url("https://static.infragistics.com/marketing/Website/css/background/header-bg-1920.png?v=201704181552");
  }
  .gradient--product-top {
    background: -webkit-linear-gradient(top, rgba(40, 40, 40, 1) 0%, rgba(40, 40, 40, 1) 60%, rgba(255, 255, 255, 0.02) 80%, rgba(252, 252, 252, 0) 90%) center top, url("https://static.infragistics.com/marketing/Website/css/background/perspecivegridcontrols-img-1100.png") no-repeat scroll center bottom;
    background: linear-gradient(to bottom, rgba(40, 40, 40, 1) 0%, rgba(40, 40, 40, 1) 60%, rgba(255, 255, 255, 0.02) 80%, rgba(252, 252, 252, 0) 90%) center top, url("https://static.infragistics.com/marketing/Website/css/background/perspecivegridcontrols-img-1100.png") no-repeat scroll center bottom;
  }
  .gradient--product-bottom {
    background: -webkit-linear-gradient(top, rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0.02) 21%, rgba(40, 40, 40, 1) 62%, rgba(40, 40, 40, 1) 100%) center top, url("https://static.infragistics.com/marketing/Website/css/background/perspecivegridcontrols-img-1100.png") no-repeat scroll center top;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0.02) 21%, rgba(40, 40, 40, 1) 62%, rgba(40, 40, 40, 1) 100%) center top, url("https://static.infragistics.com/marketing/Website/css/background/perspecivegridcontrols-img-1100.png") no-repeat scroll center top;
  }
  .no-cssgradients .gradient--product-top {
    background: #282828 url("https://static.infragistics.com/marketing/Website/css/background/perspecivegridcontrols-img-1100.png") no-repeat scroll center bottom;
  }
  .no-cssgradients .gradient--product-bottom {
    background: #282828 url("https://static.infragistics.com/marketing/Website/css/background/perspecivegridcontrols-img-1100.png") no-repeat scroll center top;
  }
  .bgImage--grid-bottom {
    background-image: url("https://static.infragistics.com/marketing/Website/css/background/perspecivegridcontrols-img-1100.png");
  }
  .bgImage--grid-bottom[class*="bg--dark"] {
    background-image: url("https://static.infragistics.com/marketing/Website/css/background/perspecivegridcontrols-img-1100.png");
  }
  .bgImage--featured-grid-bottom-landing-header {
    background-image: url("https://static.infragistics.com/marketing/Website/css/background/header-background-lp-1100.jpg?v=201712151417");
    background-position: bottom center;
  }
  .bgImage--featured-grid-bottom-landing-quote {
    background-image: url("https://static.infragistics.com/marketing/Website/css/background/quote-background-1100.jpg?v=201712151417");
    background-position: bottom center;
  }
}
@media only screen and (max-width:767px) and (min-width:480px) {
  .bgImage--featured-grid-bottom, .bgImage--featured-grid-bottom--sm {
    background: -webkit-linear-gradient(bottom, rgba(0, 72, 118, 1) 0, rgba(0, 72, 118, 1) 30%, rgba(2, 46, 73, 1) 45%, rgba(2, 46, 73, 1) 90%) center top;
    background: linear-gradient(to top, rgba(0, 72, 118, 1) 0, rgba(0, 72, 118, 1) 30%, rgba(2, 46, 73, 1) 45%, rgba(2, 46, 73, 1) 90%) center top;
  }
  .bgImage--featured-grid-bottom--no-highlight, .bgImage--featured-grid-bottom--no-highlight {
    background: -webkit-linear-gradient(top, rgba(13, 59, 75, 1) 0, rgba(13, 59, 75, 1) 50%, rgba(7, 70, 104, 1) 95%, rgba(7, 70, 104, 1) 100%) center top;
    background: linear-gradient(to bottom, rgba(13, 59, 75, 1) 0, rgba(13, 59, 75, 1) 50%, rgba(7, 70, 104, 1) 95%, rgba(7, 70, 104, 1) 100%) center top;
  }
  .bgImage--featured-shareplus-security {
    background: #012A3E;
  }
  .bgImage--none-xs {
    background-image: none !important;
  }
  .gradient--product-top {
    background: -webkit-linear-gradient(top, rgba(40, 40, 40, 1) 0, rgba(40, 40, 40, 1) 70%, rgba(255, 255, 255, 0.02) 90%, rgba(252, 252, 252, 0) 90%) center top, url("https://static.infragistics.com/marketing/Website/css/background/perspecivegridcontrols-img-768.png") no-repeat scroll center bottom;
    background: linear-gradient(to bottom, rgba(40, 40, 40, 1) 0, rgba(40, 40, 40, 1) 70%, rgba(255, 255, 255, 0.02) 90%, rgba(252, 252, 252, 0) 90%) center top, url("https://static.infragistics.com/marketing/Website/css/background/perspecivegridcontrols-img-768.png") no-repeat scroll center bottom;
  }
  .gradient--product-bottom {
    background: -webkit-linear-gradient(top, rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0.02) 21%, rgba(40, 40, 40, 1) 62%, rgba(40, 40, 40, 1) 100%) center top, url("https://static.infragistics.com/marketing/Website/css/background/perspecivegridcontrols-img-768.png") no-repeat scroll center top;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0.02) 21%, rgba(40, 40, 40, 1) 62%, rgba(40, 40, 40, 1) 100%) center top, url("https://static.infragistics.com/marketing/Website/css/background/perspecivegridcontrols-img-768.png") no-repeat scroll center top;
  }
  .no-cssgradients .gradient--product-top {
    background: #282828 url("https://static.infragistics.com/marketing/Website/css/background/perspecivegridcontrols-img-768.png") no-repeat scroll center bottom;
  }
  .no-cssgradients .gradient--product-bottom {
    background: #282828 url("https://static.infragistics.com/marketing/Website/css/background/perspecivegridcontrols-img-768.png") no-repeat scroll center top;
  }
  .bgImage--grid-bottom {
    background-image: url("https://static.infragistics.com/marketing/Website/css/background/perspecivegridcontrols-img-768.png");
  }
  .bgImage--grid-bottom[class*="bg--dark"] {
    background-image: url("https://static.infragistics.com/marketing/Website/css/background/perspecivegridcontrols-img-768.png");
  }
  .bgImage--featured-grid-bottom-landing-quote {
    background-image: none;
  }
  .bgImage--angled-lines-topleft-botright {
    background-image: none;
  }
}
@media only screen and (max-width:479px) {
  .bgImage--featured-grid-bottom, .bgImage--featured-grid-bottom--sm {
    background: -webkit-linear-gradient(bottom, rgba(0, 72, 118, 1) 0, rgba(0, 72, 118, 1) 30%, rgba(2, 46, 73, 1) 45%, rgba(2, 46, 73, 1) 90%) center top;
    background: linear-gradient(to top, rgba(0, 72, 118, 1) 0, rgba(0, 72, 118, 1) 30%, rgba(2, 46, 73, 1) 45%, rgba(2, 46, 73, 1) 90%) center top;
  }
  .bgImage--featured-grid-bottom--no-highlight, .bgImage--featured-grid-bottom--no-highlight {
    background: -webkit-linear-gradient(top, rgba(13, 59, 75, 1) 0, rgba(13, 59, 75, 1) 50%, rgba(7, 70, 104, 1) 95%, rgba(7, 70, 104, 1) 100%) center top;
    background: linear-gradient(to bottom, rgba(13, 59, 75, 1) 0, rgba(13, 59, 75, 1) 50%, rgba(7, 70, 104, 1) 95%, rgba(7, 70, 104, 1) 100%) center top;
  }
  .bgImage--featured-shareplus-security {
    background: #012A3E;
  }
  .bgImage--none-xxs {
    background-image: none !important;
  }
  .gradient--product-top {
    background: -webkit-linear-gradient(top, rgba(40, 40, 40, 1) 0, rgba(40, 40, 40, 1) 90%, rgba(255, 255, 255, 0.02) 95%, rgba(252, 252, 252, 0) 100%) center top;
    background: linear-gradient(to bottom, rgba(40, 40, 40, 1) 0, rgba(40, 40, 40, 1) 90%, rgba(255, 255, 255, 0.02) 95%, rgba(252, 252, 252, 0) 100%) center top;
  }
  .gradient--product-bottom {
    background: -webkit-linear-gradient(top, rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0.02) 21%, rgba(40, 40, 40, 1) 62%, rgba(40, 40, 40, 1) 100%) center top;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0.02) 21%, rgba(40, 40, 40, 1) 62%, rgba(40, 40, 40, 1) 100%) center top;
  }
  .no-cssgradients .gradient--product-top {
    background: #282828 url("https://static.infragistics.com/marketing/Website/css/background/perspecivegridcontrols-img-480.png") no-repeat scroll center bottom;
  }
  .no-cssgradients .gradient--product-bottom {
    background: #282828 url("https://static.infragistics.com/marketing/Website/css/background/perspecivegridcontrols-img-480.png") no-repeat scroll center top;
  }
  .bgImage--grid-bottom {
    background-image: none;
  }
  .bgImage--grid-bottom[class*="bg--dark"] {
    background-image: none;
  }
  .bgImage--featured-grid-bottom-landing-quote {
    background-image: none;
  }
  .bgImage--angled-lines-topleft-botright {
    background-image: none;
  }
}
@media only screen and (-webkit-min-device-pixel-ratio:2) and (min-width:768px), only screen and (min-resolution:192dpi) and (min-width:768px) {
  .bgImage--featured-grid-bottom {
    background-image: url("https://static.infragistics.com/marketing/Website/css/background/header-bg-1920.png?v=201704181552");
  }
  .gradient--product-top {
    background: -webkit-linear-gradient(top, rgba(40, 40, 40, 1) 0%, rgba(40, 40, 40, 1) 60%, rgba(255, 255, 255, 0.02) 80%, rgba(252, 252, 252, 0) 90%) center top, url("https://static.infragistics.com/marketing/Website/css/background/perspecivegridcontrols-img-1920.png") no-repeat scroll center bottom;
    background: linear-gradient(to bottom, rgba(40, 40, 40, 1) 0%, rgba(40, 40, 40, 1) 60%, rgba(255, 255, 255, 0.02) 80%, rgba(252, 252, 252, 0) 90%) center top, url("https://static.infragistics.com/marketing/Website/css/background/perspecivegridcontrols-img-1920.png") no-repeat scroll center bottom;
    background-size: 100%;
  }
  .gradient--product-bottom {
    background: -webkit-linear-gradient(top, rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0.02) 21%, rgba(40, 40, 40, 1) 62%, rgba(40, 40, 40, 1) 100%) center top, url("https://static.infragistics.com/marketing/Website/css/background/perspecivegridcontrols-img-1920.png") no-repeat scroll center top;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0.02) 21%, rgba(40, 40, 40, 1) 62%, rgba(40, 40, 40, 1) 100%) center top, url("https://static.infragistics.com/marketing/Website/css/background/perspecivegridcontrols-img-1920.png") no-repeat scroll center top;
    background-size: 100%;
  }
  .no-cssgradients .gradient--product-top {
    background: #282828 url("https://static.infragistics.com/marketing/Website/css/background/perspecivegridcontrols-img-1920.png") no-repeat scroll center bottom;
    background-size: 100%;
  }
  .no-cssgradients .gradient--product-bottom {
    background: #282828 url("https://static.infragistics.com/marketing/Website/css/background/perspecivegridcontrols-img-1920.png") no-repeat scroll center top;
    background-size: 100%;
  }
  .bgImage--grid-bottom {
    background-image: url("https://static.infragistics.com/marketing/Website/css/background/perspecivegridcontrols-img-1920.png");
    background-size: 100%;
  }
  .bgImage--grid-bottom[class*="bg--dark"] {
    background-image: url("https://static.infragistics.com/marketing/Website/css/background/perspecivegridcontrols-img-1920.png");
    background-size: 100%;
  }
}
@media only screen and (-webkit-min-device-pixel-ratio:2) and (min-width:479px) and (max-width:767px), only screen and (min-resolution:192dpi) and (min-width:479px) and (max-width:767px) {
  .bgImage--featured-grid-bottom, .bgImage--featured-grid-bottom--sm {
    background: -webkit-linear-gradient(bottom, rgba(0, 72, 118, 1) 0, rgba(0, 72, 118, 1) 30%, rgba(2, 46, 73, 1) 45%, rgba(2, 46, 73, 1) 90%) center top;
    background: linear-gradient(to top, rgba(0, 72, 118, 1) 0, rgba(0, 72, 118, 1) 30%, rgba(2, 46, 73, 1) 45%, rgba(2, 46, 73, 1) 90%) center top;
  }
  .bgImage--featured-grid-bottom--no-highlight, .bgImage--featured-grid-bottom--no-highlight {
    background: -webkit-linear-gradient(top, rgba(13, 59, 75, 1) 0, rgba(13, 59, 75, 1) 50%, rgba(7, 70, 104, 1) 95%, rgba(7, 70, 104, 1) 100%) center top;
    background: linear-gradient(to bottom, rgba(13, 59, 75, 1) 0, rgba(13, 59, 75, 1) 50%, rgba(7, 70, 104, 1) 95%, rgba(7, 70, 104, 1) 100%) center top;
  }
  .gradient--product-top {
    background: -webkit-linear-gradient(top, rgba(40, 40, 40, 1) 0, rgba(40, 40, 40, 1) 70%, rgba(255, 255, 255, 0.02) 90%, rgba(252, 252, 252, 0) 90%) center top, url("https://static.infragistics.com/marketing/Website/css/background/perspecivegridcontrols-img-1100.png") no-repeat scroll center bottom;
    background: linear-gradient(to bottom, rgba(40, 40, 40, 1) 0, rgba(40, 40, 40, 1) 70%, rgba(255, 255, 255, 0.02) 90%, rgba(252, 252, 252, 0) 90%) center top, url("https://static.infragistics.com/marketing/Website/css/background/perspecivegridcontrols-img-1100.png") no-repeat scroll center bottom;
  }
  .gradient--product-bottom {
    background: -webkit-linear-gradient(top, rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0.02) 21%, rgba(40, 40, 40, 1) 62%, rgba(40, 40, 40, 1) 100%) center top, url("https://static.infragistics.com/marketing/Website/css/background/perspecivegridcontrols-img-1100.png") no-repeat scroll center top;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0.02) 21%, rgba(40, 40, 40, 1) 62%, rgba(40, 40, 40, 1) 100%) center top, url("https://static.infragistics.com/marketing/Website/css/background/perspecivegridcontrols-img-1100.png") no-repeat scroll center top;
  }
  .no-cssgradients .gradient--product-top {
    background: #282828 url("https://static.infragistics.com/marketing/Website/css/background/perspecivegridcontrols-img-1100.png") no-repeat scroll center bottom;
  }
  .no-cssgradients .gradient--product-bottom {
    background: #282828 url("https://static.infragistics.com/marketing/Website/css/background/perspecivegridcontrols-img-1100.png") no-repeat scroll center top;
  }
  .bgImage--grid-bottom {
    background-image: url("https://static.infragistics.com/marketing/Website/css/background/perspecivegridcontrols-img-1100.png");
  }
  .bgImage--grid-bottom[class*="bg--dark"] {
    background-image: url("https://static.infragistics.com/marketing/Website/css/background/perspecivegridcontrols-img-1100.png");
  }
}
@-webkit-keyframes drawUnderline {
  0% {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }
  20% {
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
  }
  100% {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }
}
@keyframes drawUnderline {
  0% {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }
  20% {
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
  }
  100% {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }
}
@-webkit-keyframes fadeInOverlay {
  0% {
    display: none;
    opacity: 0;
  }
  1% {
    display: block;
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fadeInOverlay {
  0% {
    display: none;
    opacity: 0;
  }
  1% {
    display: block;
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.bgColor--ultimate {
  background:#4991c5;
}
.bgColor--pro {
  background:#004677;
}
.bgColor--ignite {
  background:#f59122;
}
.bgColor--san-marino {
  background-color:#3F51B5;
}
.globalnav {
  font-size:16px;
  height:auto;
  height:76px;
  position:relative;
  z-index:11;
}
.globalnav .emphasize {
  font-weight:bold;
}
.globalnav--with-second-nav {
  height:128px;
}
.globalnav__container {
  position:static;
  top:0;
  width:100%;
}
.globalnav a {
  line-height:1em;
}
.globalnav__container.top-animate {
  -webkit-transition:top 0.50s ease;
  transition:top 0.50s ease;
  top:0;
}
.globalnav__container.stuck {
  position:fixed;
  top:0;
  width:100%;
  z-index:100;
}
.globalnav__wrapper {
  max-width:1170px;
  margin:0 auto;
  position:relative;
}
.globalnav__primary {
  background:#fff;
  border-bottom:thin solid #ccc;
  box-shadow:0 0 0 1px rgba(200, 200, 200, 0);
  height:76px;
  position:relative;
  z-index:3;
}
.globalnav__secondary {
  background:rgba(240, 240, 240, 0.95);
  border-bottom:1px solid #ccc;
  font-weight:400;
  height:52px;
}
.globalnav__secondary .globalnav__menu-container {
  margin:10px 0;
}
.globalnav__secondary .globalnav__wrapper {
  overflow:hidden;
}
.globalnav__brand {
  display:inline-block;
  max-width:200px;
  margin:8px 0;
  width:100%;
}
.globalnav__brand img {
  width:100%;
  max-width:160px;
  cursor: pointer; /* 例: カーソルをポインター（手の形）に変更 */
}
.globalnav__logo {
  display:block;
}
.globalnav__logo_abbr {
  display:none;
}
.globalnav__breadcrumb {
  color:#777;
  display:inline-block;
  font-size:1.125em;
  font-weight:bold;
  position:absolute;
  top:50%;
  -webkit-transform:translateY(-50%);
  -ms-transform:translateY(-50%);
  transform:translateY(-50%);
}
.globalnav__breadcrumb a {
  color:#333;
  text-decoration:none;
}
.globalnav__breadcrumb a:hover, .globalnav__breadcrumb a:focus {
  color:#0099ff;
}
.globalnav__menu-container {
  display:inline-block;
}
.globalnav__callout-text {
  background:#f5f5f5;
  color:#666;
  padding:10px 18px;
}
.globalnav__callout-text a[href^="tel"], .globalnav__callout-text a[href^="tel"]:hover {
  background:transparent;
  border:none!important;
  display:inline-block;
  padding:0!important;
}
.globalnav__secondary .navigation a {
  color:#666;
  font-weight:bold;
}
.globalnav__secondary .navigation a:hover, .globalnav__secondary .navigation a.active {
  color:#0099ff;
}
.globalnav__brand.globalnav__brand--co-brand {
  max-width:100%;
  width:auto;
}
.globalnav__brand.globalnav__brand--co-brand a {
  display:table-cell;
  vertical-align:middle;
  padding-right:10px;
}
.globalnav__brand.globalnav__brand--co-brand a.globalnav__logo--co-brand {
  color:#666;
  border-left:1px solid #666;
  font-size:1.5rem;
  font-family:"AktivGrotesk Local", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  padding-left:10px;
  padding-right:0;
}
.globalnav__mobile-menu {
  display:none;
  float:right;
  background:#fff;
  position:relative;
  z-index:500;
}
.globalnav__menu-toggle {
  display:inline-block;
  float:right;
  margin:15px;
  text-indent:-9999px;
  position:relative;
  width:30px;
  height:30px;
}
.globalnav__menu-toggle span {
  position:relative;
  -webkit-transition:height 0.2s ease;
  transition:height 0.2s ease;
  top:50%;
  -webkit-transform:translateY(-50%);
  -ms-transform:translateY(-50%);
  transform:translateY(-50%);
}
.globalnav__menu-toggle span, .globalnav__menu-toggle span:before, .globalnav__menu-toggle span:after {
  background:#666;
  border-radius:3px;
  content:'';
  display:block;
  width:100%;
  height:4px;
}
.globalnav__menu-toggle span:before, .globalnav__menu-toggle span:after {
  position:absolute;
  left:0;
  -webkit-transform-origin:50% 50%;
  -ms-transform-origin:50% 50%;
  transform-origin:50% 50%;
  -webkit-transition:top 0.2s 0.2s ease, -webkit-transform 0.2s ease;
  transition:top 0.2s 0.2s ease, -webkit-transform 0.2s ease;
  transition:top 0.2s 0.2s ease, transform 0.2s ease;
  transition:top 0.2s 0.2s ease, transform 0.2s ease, -webkit-transform 0.2s ease;
}
.globalnav__menu-toggle span:before {
  top:9px;
}
.globalnav__menu-toggle span:after {
  top:-9px;
}
.globalnav__menu-toggle:hover span, .globalnav__menu-toggle:hover span:before, .globalnav__menu-toggle:hover span:after {
  background:#0099ff;
}
.globalnav__menu-toggle.opened span, .globalnav__menu-toggle.opened span:before, .globalnav__menu-toggle.opened span:after {
  background:#0099ff;
}
.globalnav__menu-toggle.opened span {
  -webkit-transition:height 0.2s 0.2s ease;
  transition:height 0.2s 0.2s ease;
  background:transparent;
  height:0;
}
.globalnav__menu-toggle.opened span:before, .globalnav__menu-toggle.opened span:after {
  -webkit-transition:top 0.2s ease, -webkit-transform 0.2s 0.2s ease;
  transition:top 0.2s ease, -webkit-transform 0.2s 0.2s ease;
  transition:top 0.2s ease, transform 0.2s 0.2s ease;
  transition:top 0.2s ease, transform 0.2s 0.2s ease, -webkit-transform 0.2s 0.2s ease;
  top:0;
}
.globalnav__menu-toggle.opened span:before {
  -webkit-transform:rotate(45deg);
  -ms-transform:rotate(45deg);
  transform:rotate(45deg);
}
.globalnav__menu-toggle.opened span:after {
  -webkit-transform:rotate(-45deg);
  -ms-transform:rotate(-45deg);
  transform:rotate(-45deg);
}
.globalnav__overlay {
  background:rgba(255, 255, 255, 0.65);
  display:none;
  height:100vh;
  position:fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  opacity:0;
  z-index:-10;
  -webkit-animation:fadeInOverlay 0.7s ease;
  animation:fadeInOverlay 0.7s ease;
}
.globalnav__overlay.opened {
  display:block;
  opacity:1;
  z-index:101;
}
.globalnav .navigation .ui-btn {
  background:#0099ff;
  border:1px solid #0099ff;
  color:#fff;
  margin-top:4px;
  padding:8px 14px;
  -webkit-transition:color 250ms linear, background-color 250ms linear;
  transition:color 250ms linear, background-color 250ms linear;
}
.globalnav .navigation .ui-btn:hover, .globalnav .navigation .ui-btn:focus {
  background:transparent;
  border:1px solid #0099ff;
  color:#0099ff;
}
.globalnav .navigation .ui-btn.ui-btn--alt-venice-blue {
  background:#055b7d;
  border:1px solid #055b7d;
}
.globalnav .navigation .ui-btn.ui-btn--alt-venice-blue:hover, .globalnav .navigation .ui-btn.ui-btn--alt-venice-blue:focus {
  background:transparent;
  border:1px solid #055b7d;
  color:#055b7d;
}
.globalnav .navigation .ui-btn.ui-btn--alt-tree-poppy {
  background:#FCA31C;
  border:1px solid #FCA31C;
}
.globalnav .navigation .ui-btn.ui-btn--alt-tree-poppy:hover, .globalnav .navigation .ui-btn.ui-btn--alt-tree-poppy:focus {
  background:transparent;
  border:1px solid #FCA31C;
  color:#FCA31C;
}
.navigation, .navigation ul, .navigation li {
  line-height:1em!important;
  list-style:none;
  margin:0;
  padding:0;
}
.navigation li {
  position:relative;
}
.navigation>li {
  float:left;
}
.navigation a {
  display:block;
  position:relative;
  text-decoration:none;
}
.navigation>li>a, .navigation .navigation__text {
  padding:0.75em 1em;
}
.navigation .navigation__text a {
  display:inline;
  margin:0;
  padding:0;
}
.navigation .navigation__text.deemphasize {
  color:#666;
}
.navigation__mobile-link {
  display:none;
}
.navigation__cta {
  background:#0099ff;
  border:1px solid transparent;
  border-radius:0;
  cursor:pointer;
  font-size:1em;
  font-weight:bold;
  line-height:1em;
  margin-top:-1px;
  padding:0.75em 1em;
  text-transform:none;
  -webkit-transition:all 600ms;
  transition:all 600ms;
}
.navigation__cta:hover {
  background:transparent;
  color:#0099ff;
  border-color:#0099ff;
}
.globalnav__secondary .navigation__cta:first-child {
  margin-left:10px;
}
.globalnav__secondary .navigation .navigation__cta {
  color:#fff;
}
.globalnav__secondary .navigation .navigation__cta:hover, .globalnav__secondary .navigation .navigation__cta:focus {
  color:#0099ff;
}
[data-nav-theme="indigo-studio"] .globalnav__secondary {
  background:rgba(40, 40, 40, 0.85);
  border-bottom:#666;
}
.navigation[data-nav-theme="indigo-studio"] a, [data-nav-theme="indigo-studio"] .globalnav__breadcrumb a {
  color:#fff;
}
.navigation[data-nav-theme="indigo-studio"] a.active, .navigation[data-nav-theme="indigo-studio"] a:hover, .navigation[data-nav-theme="indigo-studio"] a:focus-visible, [data-nav-theme="indigo-studio"] .globalnav__breadcrumb a:hover, [data-nav-theme="indigo-studio"] .globalnav__breadcrumb a:focus {
  color:#00AE88;
}
.navigation[data-nav-theme="indigo-studio"] .navigation__cta {
  background:#00AE88;
  border:2px solid transparent;
  border-radius:2em;
  color:#fff;
  padding:0.75em 1.5em;
  text-transform:initial;
}
.navigation[data-nav-theme="indigo-studio"] .navigation__cta:hover, .navigation[data-nav-theme="indigo-studio"] .navigation__cta:focus {
  background:transparent;
  color:#00AE88;
  border-color:#00AE88;
}
.navigation[data-nav-theme="indigo-studio"] .navigation__cta.navigation__cta--secondary {
  background:transparent;
  border-color:#fff;
  color:#fff;
}
.navigation[data-nav-theme="indigo-studio"] .navigation__cta.navigation__cta--secondary:hover, .navigation[data-nav-theme="indigo-studio"] .navigation__cta.navigation__cta--secondary:focus {
  background:#fff;
  color:#00AE88;
  border-color:#00AE88;
}
.navigation__account {}
.navigation .navigation__account a {
  display:inline-block;
  padding-left:0;
  padding-right:0;
}
.navigation--navbar {
  font-size:0.875rem;
  display:block;
}
.navigation--navbar ul {
  display:none;
  position:absolute;
  top:100%;
  left:50%;
  z-index:99;
  -webkit-transform:translateX(-50%);
  -ms-transform:translateX(-50%);
  transform:translateX(-50%);
}
.navigation--navbar li:hover>ul, .navigation--navbar .sfHover:hover>ul {
  display:block;
}
.navigation--navbar ul ul {
  top:0;
  left:100%;
}
.navigation--navbar.sf-menu {
  float:left;
}
.navigation--navbar.sf-menu ul {
  min-width:12em;
}
.navigation--navbar.sf-menu>li>a {
  background:transparent;
  border-bottom:none;
  border-top:none;
  color:#666;
  font-size:1em;
  font-weight:400;
  padding:12px 14px 20px;
  -webkit-transition:color 250ms linear;
  transition:color 250ms linear;
}
.navigation--navbar.sf-menu>li>a:hover, .navigation--navbar.sf-menu>.sfHover>a {
  background:transparent;
  color:#0099ff;
}
.navigation--navbar.sf-menu a {
  background:#f3f3f3;
  border-bottom:1px solid #dadada;
  border-top:1px solid #fff;
  color:#666;
  font-size:1em;
  font-weight:bold;
  padding:1.3em 1.2em;
  text-decoration:none;
}
.navigation--navbar.sf-menu a:hover {
  background:#e7e7e7;
  color:#333;
}
.navigation--navbar.sf-menu a .deemphasize {
  color:#666;
  font-weight:400;
  font-size:12px;
  margin-top:1px;
  display:block;
}
.navigation--navbar.sf-menu li ul li a {
  padding:1em 1.2em;
}
.navigation--navbar.sf-menu .navigation__callout-link {
  background:#fefefe;
  font-size:1em;
  font-weight:400;
  padding:1.5em 1.2em;
}
.navigation--navbar.sf-menu .navigation__callout-link:hover {
  background:#fafafa;
}
.navigation--navbar.sf-menu .navigation__callout-link .navigation__callout-title {
  display:block;
  font-size:1.7em;
  padding-bottom:10px;
  position:relative;
}
.navigation--navbar.sf-menu .navigation__callout-link .navigation__callout-title:before {
  background:rgba(0, 153, 255, 0.7);
  box-shadow:0 0 2px rgba(0, 153, 255, 0.7);
  content:'';
  position:absolute;
  bottom:0;
  left:0;
  width:100%;
  height:1px;
  visibility:visible;
  -webkit-transform:scaleX(1);
  -ms-transform:scaleX(1);
  transform:scaleX(1);
}
.navigation--navbar.sf-menu .navigation__callout-link:hover .navigation__callout-title:before {
  -webkit-animation:drawUnderline 0.7s ease-out;
  animation:drawUnderline 0.7s ease-out;
}
.navigation--navbar.sf-menu .navigation__callout-link .deemphasize {
  display:block;
  font-size:12px;
  margin-top:8px;
}
.navigation--navbar.sf-menu .navigation__feature-link {
  position:relative;
}
.navigation--navbar.sf-menu .navigation__feature-icon {
  display:inline-block;
  width:1.75em;
  height:1.75em;
  fill:#0099ff;
  position:absolute;
  top:50%;
  right:10px;
  -webkit-transform:translateY(-50%);
  -ms-transform:translateY(-50%);
  transform:translateY(-50%);
}
.navigation--navbar.sf-menu li {
  background:transparent;
  -webkit-transition:background .2s;
  transition:background .2s;
}
.navigation--navbar.sf-menu>li>ul {
  border:1px solid #ccc;
  margin-top:0;
}
.navigation--navbar.sf-menu>li>ul:before, .navigation--navbar.sf-menu>li>ul:after {
  content:'';
  display:block;
  width:0;
  height:0;
  border:solid transparent;
  position:absolute;
  left:50%;
  top:-14px;
  -webkit-transform:translateX(-50%);
  -ms-transform:translateX(-50%);
  transform:translateX(-50%);
}
.navigation--navbar.sf-menu>li>ul:before {
  border-bottom:10px solid #ccc;
  border-left:10px solid transparent;
  border-right:10px solid transparent;
}
.navigation--navbar.sf-menu>li>ul:after {
  border-bottom:10px solid #f3f3f3;
  border-left:10px solid transparent;
  border-right:10px solid transparent;
  top:-12px;
}
.navigation--navbar.sf-menu>li>ul.navigation_sub-menu-featured:before {
  border-bottom:10px solid #ccc;
}
.navigation--navbar.sf-menu>li>ul.navigation_sub-menu-featured:after {
  border-bottom:10px solid #fff;
}
.navigation--navbar.sf-menu ul li {
  width:400px;
}
.navigation--navbar.sf-arrows .sf-with-ul, .navigation--navbar.sf-menu .navigation__sub-menu {
  padding-right:1.5em;
}
.navigation--navbar.sf-arrows .sf-with-ul:after, .navigation--navbar .navigation__sub-menu:after {
  background:transparent;
  border-top:1px solid #666;
  border-left:1px solid #666;
  content:'';
  display:inline-block;
  width:4px;
  height:4px;
  margin-top:-5px;
  position:absolute;
  top:40%;
  right:0.5em;
  -webkit-transform:rotate(-135deg) translateY(-40%);
  -ms-transform:rotate(-135deg) translateY(-40%);
  transform:rotate(-135deg) translateY(-40%);
  -webkit-transform-origin:center center;
  -ms-transform-origin:center center;
  transform-origin:center center;
}
.navigation--navbar.sf-arrows>li>.sf-with-ul:focus:after, .navigation--navbar.sf-arrows>li:hover>.sf-with-ul:after, .navigation--navbar.sf-arrows>.sfHover>.sf-with-ul:after, .navigation--navbar>li>.navigation__sub-menu:focus:after, .navigation--navbar>li:hover>.navigation__sub-menu:after {
  border-top-color:#0099ff;
  border-left-color:#0099ff;
}
.navigation--navbar.sf-arrows ul .sf-with-ul:after, .navigation--navbar ul .navigation__sub-menu:after {
  background:transparent;
  border-top-color:#aaa;
  border-left-color:#aaa;
  -webkit-transform:rotate(135deg);
  -ms-transform:rotate(135deg);
  transform:rotate(135deg);
}
.navigation--navbar.sf-arrows ul li>.sf-with-ul:focus:after, .navigation--navbar.sf-arrows ul li:hover>.sf-with-ul:after, .navigation--navbar.sf-arrows ul .sfHover>.sf-with-ul:after, .navigation--navbar ul li>.navigation__sub-menu:focus:after, .navigation--navbar ul li:hover>.navigation__sub-menu:after {
  border-top-color:#0099ff;
  border-left-color:#0099ff;
}
.navigation--dark a {
  color:#fff;
}
.navigation--dark a:hover {
  color:#0099ff;
}
.navigation--dark .active {
  color:#0099ff;
}
.navigation--hpad-0>li:first-child, .navigation--hpad-0>li:first-child>a:not(.navigation__cta) {
  padding-left:0;
}
.navigation--hpad-0>li:last-child, .navigation--hpad-0>li:last-child>a:not(.navigation__cta):not(.navigation__sub-menu) {
  padding-right:0;
}
.navigation--lg {
  font-size:1.125rem;
}
.navigation--md {
  font-size:1.125rem;
}
.navigation--sm {
  font-size:0.875rem;
}
.navigation--xs {
  font-size:0.75rem;
}
.navigation__cta--lspaced-xs {
  margin-left:5px;
}
.globalnav__search-toggle * {
  box-sizing:content-box;
}
.globalnav__search-toggle {
  background:transparent;
  border:1px solid transparent;
  cursor:pointer;
  display:block;
  width:auto;
  position:absolute;
  right:0;
  top:28px;
  padding:12px;
}
.globalnav__search-toggle.opened {
  background:#f5f5f5;
  border-color:#b4b4b4;
  border-bottom-color:transparent;
  padding:12px 12px 18px;
}
.globalnav__search-toggle .globalnav__search-close {
  display:block;
  text-indent:-9999px;
  position:relative;
  width:15px;
  height:15px;
}
.globalnav__search-toggle.opened svg {
  display:none;
}
.globalnav__search-toggle.opened .globalnav__search-close {
  display:block;
}
.globalnav__search-toggle .globalnav__search-close i {
  background:transparent;
  position:relative;
  top:50%;
  -webkit-transform:translateY(-50%);
  -ms-transform:translateY(-50%);
  transform:translateY(-50%);
}
.globalnav__search-toggle .globalnav__search-close i, .globalnav__search-toggle .globalnav__search-close i:before, .globalnav__search-toggle .globalnav__search-close i:after {
  background:#0099ff;
  border-radius:3px;
  content:'';
  display:block;
  width:100%;
  height:2px;
}
.globalnav__search-toggle .globalnav__search-close i {
  background:transparent;
}
.globalnav__search-toggle .globalnav__search-close i:before {
  -webkit-transform:rotate(45deg);
  -ms-transform:rotate(45deg);
  transform:rotate(45deg);
}
.globalnav__search-toggle .globalnav__search-close i:before, .globalnav__search-toggle .globalnav__search-close i:after {
  position:absolute;
  left:0;
  -webkit-transform-origin:50% 50%;
  -ms-transform-origin:50% 50%;
  transform-origin:50% 50%;
}
.globalnav__search-toggle .globalnav__search-close i:after {
  background:#fff;
  border:2px solid #0099ff;
  border-radius:50%;
  box-sizing:content-box;
  width:7px;
  height:7px;
  top:-8px;
  left:-1px;
  -webkit-transition:all 0.1s ease-in;
  transition:all 0.1s ease-in;
}
.globalnav__search-toggle.opened .globalnav__search-close i:before, .globalnav__search-toggle.opened .globalnav__search-close i:after {
  top:0;
  background:#0099ff;
}
.globalnav__search-toggle.opened .globalnav__search-close i {
  background:transparent;
}
.globalnav__search-toggle.opened .globalnav__search-close i:after {
  -webkit-transform:rotate(-45deg);
  -ms-transform:rotate(-45deg);
  transform:rotate(-45deg);
  background:#0099ff;
  border-color:transparent;
  height:2px;
  border:0px solid transparent;
  width:100%;
  border-radius:3px;
  left:0;
}
.globalnav__search * {
  box-sizing:content-box;
}
.globalnav__search {
  background:#f5f5f5;
  border-bottom:1px solid #b4b4b4;
  display:block;
  width:100%;
  height:55px;
  position:absolute;
  top:0;
  z-index:2;
  -webkit-transition:top 0.2s ease;
  transition:top 0.2s ease;
}
.globalnav__search label {
  display:block;
  margin:0;
}
.globalnav__search--opened {
  top:76px;
}
.globalnav__search-container {
  position:relative;
  overflow:hidden;
  top:50%;
  -webkit-transform:translateY(-50%);
  -ms-transform:translateY(-50%);
  transform:translateY(-50%);
}
.search {
  margin:0 auto;
  position:relative;
  max-width:700px;
  width:100%;
}
.globalnav__search-container .search {
  max-width:100%;
}
.search__input[type="text"] {
  background:#f9f9f9;
  border:1px solid #b4b4b4;
  box-sizing:border-box;
  box-shadow:none;
  color:#666;
  font-size:1rem !important;
  height:2.5em;
  letter-spacing:normal;
  line-height:normal;
  margin:0;
  outline:none;
  padding:5px 10px;
  text-indent:0;
  text-transform:none;
  width:100%;
}
.search__input[type="text"]:focus {
  background:rgba(255, 255, 255, 1);
  border:1px solid #666;
  box-sizing:border-box;
  color:#666;
  padding-right:50px;
  width:100%;
}
.search button[type="submit"] {
  background:#0099ff;
  border:1px solid #0099ff;
  box-sizing:border-box;
  cursor:pointer;
  height:2.5rem;
  width:75px;
  position:absolute;
  top:0;
  right:0;
  margin-top:0;
}
.search button[type="submit"] svg {
  fill:#fff;
  opacity:1;
  width:30%;
  vertical-align:middle;
}
.search button[type="submit"]:hover, .search button[type="submit"]:focus {
  background:#188ad6;
  border-color:#188ad6;
}
.search ::-webkit-input-placeholder {
  color:#b4b4b4;
}
.search :-moz-placeholder {
  color:#b4b4b4;
}
.search ::-moz-placeholder {
  color:#b4b4b4;
}
.search :-ms-input-placeholder {
  color:#b4b4b4;
}
.globalnav[data-nav-theme="indigo-studio"] .navigation--navbar.sf-menu>li>a:not(.ui-btn):hover, .globalnav[data-nav-theme="indigo-studio"] .navigation--navbar.sf-menu>.sfHover>a:not(.ui-btn) {
  color:#3f51b5
}
.globalnav[data-nav-theme="indigo-studio"] .navigation--navbar.sf-arrows .sf-with-ul:after, .globalnav[data-nav-theme="indigo-studio"] .navigation--navbar .navigation__sub-menu:after {
  border-top:1px solid #666;
  border-left:1px solid #666;
}
.globalnav[data-nav-theme="indigo-studio"] .navigation .ui-btn {
  font-weight:bold;
  text-transform:none;
}
@media only screen and (max-width:1450px) and (min-width:1279px) {
  .navigation--navbar>li:last-child>ul {
    left: auto;
    right: 0;
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
  }
  .navigation--navbar>li:last-child>ul:before, .navigation--navbar>li:last-child>ul:after {
    left: auto;
    right: 0;
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
  }
}
@media only screen and (max-width:1279px) and (min-width:960px) {
  .globalnav__wrapper {
    max-width: 980px;
    padding: 0 2%;
  }
  .navigation--navbar {
    font-size: 0.825rem;
  }
  .navigation--navbar.sf-menu>li>a {
    padding: 12px 7px 20px;
  }
  .navigation--navbar.sf-arrows .sf-with-ul, .navigation--navbar.sf-menu .navigation__sub-menu {
    padding-right: 1.25em;
  }
  .globalnav__search-toggle {
    right: 2%;
  }
  .navigation--navbar>li:nth-last-child(-n+2)>ul {
    left: auto;
    right: 0;
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
  }
  .navigation--navbar>li:nth-last-child(-n+2)>ul:before, .navigation--navbar>li:nth-last-child(-n+2)>ul:after {
    left: auto;
    right: 0;
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
  }
}
@media only screen and (max-width:1024px) {
  .navigation--navbar {
    font-size: 0.825rem;
  }
  .globalnav[data-nav-theme="indigo-studio"] .navigation--navbar {
    font-size: 0.75rem;
  }
  .navigation--navbar.sf-menu>li>a {
    padding: 12px 7px 20px;
  }
  .globalnav[data-nav-theme="indigo-studio"] .navigation--navbar.sf-menu>li>a {
    font-size: 0.75rem;
  }
}
@media only screen and (max-width:981px) and (min-width:960px) {
  .navigation--navbar.sf-arrows .sf-with-ul, .navigation--navbar.sf-menu .navigation__sub-menu {
    padding-right: 1em;
  }
  .navigation--navbar.sf-arrows .sf-with-ul:after, .navigation--navbar .navigation__sub-menu:after {
    right: 0.25em;
  }
}
@media only screen and (max-width:960px) and (min-width:768px) {
  .globalnav__wrapper {
    max-width: 100%;
    padding: 0 2%;
  }
  .navigation--navbar.sf-arrows .sf-with-ul:after, .navigation--navbar .navigation__sub-menu:after {
    right: 0;
  }
}
@media only screen and (max-width:960px) {
  .globalnav__section {
    display: none;
  }
  .globalnav__primary .globalnav__brand {
    margin: 20px 0 10px 15px;
  }
  .globalnav__secondary {
    display: none;
  }
  .globalnav__mobile-menu.responsive {
    display: inline-block;
  }
  .globalnav__search--opened {
    top: 60px;
  }
  .globalnav__search-toggle {
    top: 7px;
    right: 80px;
    padding: 9px 9px 13px;
  }
  .globalnav__search-toggle.opened {
    padding: 9px 9px 13px;
  }
  .gstl_50.gssb_c {
    top: 108px!important;
  }
  .globalnav__search-toggle .globalnav__search-close {
    width: 30px;
    height: 30px;
  }
  .globalnav__search-toggle .globalnav__search-close i, .globalnav__search-toggle .globalnav__search-close i:before, .globalnav__search-toggle .globalnav__search-close i:after {
    height: 4px;
  }
  .globalnav__search-toggle .globalnav__search-close i:after {
    border: 3px solid #0099ff;
    width: 15px;
    height: 15px;
    top: -13px;
    left: 1px;
  }
  .globalnav__search-toggle.opened .globalnav__search-close i:after {
    height: 4px;
  }
  .globalnav, .globalnav.globalnav--with-second-nav {
    height: 60px;
  }
  .globalnav__container.stuck {
    position: relative;
  }
  .navigation--navbar.responsive {
    background: #fff;
    border-bottom: 1px solid #ccc;
    display: none;
    width: 100%;
    position: absolute;
    left: 0;
    top: 100%;
    z-index: 501;
  }
  .navigation--navbar.responsive li {
    border-top: 1px solid #eee;
    display: block;
    float: none;
    padding-bottom: 0;
  }
  .navigation--navbar.responsive li a {
    font-size: 1.25em;
    padding-top: 1.3em;
    padding-bottom: 1.3em;
  }
  .navigation--navbar.responsive li ul li a {
    font-size: 1em;
    padding: 1.3em 1.2em;
  }
  .navigation--navbar.responsive.navigation--hpad-0 li a {
    padding-left: 1em;
    padding-right: 1em;
  }
  .navigation--navbar.responsive>li>ul {
    border: none;
    position: static;
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }
  .navigation--navbar.responsive>li>ul:before, .navigation--navbar.responsive>li>ul:after {
    display: none;
  }
  .navigation--navbar.responsive ul li {
    width: 100%;
  }
  .navigation--navbar.sf-arrows.responsive .sf-with-ul:after, .navigation--navbar.responsive .navigation__sub-menu:after {
    width: 10px;
    height: 10px;
    right: 1em;
    margin-top: -10px;
    -webkit-transition: 0.2s linear;
    transition: 0.2s linear;
  }
  .navigation--navbar.responsive .navigation__sub-menu.opened:after {
    margin-top: -5px;
    -webkit-transform: rotate(45deg) translateY(50%);
    -ms-transform: rotate(45deg) translateY(50%);
    transform: rotate(45deg) translateY(50%);
    -webkit-transform-origin: center center;
    -ms-transform-origin: center center;
    transform-origin: center center;
  }
  .navigation--navbar.responsive .navigation__callout-link {
    background: #f3f3f3;
    padding: 1.3em 1em;
  }
  .navigation--navbar.responsive .navigation__mobile-link {
    display: block;
  }
  .navigation--navbar.responsive .navigation__callout-link:hover {
    background: #e7e7e7;
  }
  .navigation--navbar.responsive.sf-menu .navigation__callout-link .navigation__callout-title {
    font-size: 1em;
    font-weight: bold;
  }
  .navigation--navbar.responsive .navigation__callout-link .navigation__callout-title {
    padding-bottom: 0;
  }
  .navigation--navbar.responsive .navigation__callout-title:before, .navigation--navbar.responsive .navigation__callout-link .deemphasize, .navigation--navbar.sf-menu a .deemphasize {
    display: none;
  }
  .navigation--navbar.responsive li:hover ul, .navigation--navbar.responsive li.sfHover:hover ul {
    display: none;
  }
}
@media only screen and (max-width:768px) {
  .globalnav__search-container {
    padding: 0 15px;
  }
  .globalnav__search-toggle {
    right: 60px;
  }
}
@media only screen and (max-width:480px) {
  .globalnav__primary .globalnav__brand {
    margin: 12px 0 6px 15px;
  }
  .globalnav__primary .globalnav__brand img {
    width: 100%;
    max-width: 40px;
  }
  .globalnav__logo {
    display: none;
  }
  .globalnav__logo_abbr {
    display: block;
  }
}
@media only screen and (min-width:960px) and (max-height:768px) {
  .navigation--navbar.sf-menu>li:nth-child(3) .navigation_sub-menu-featured>li:nth-last-child(-n+3):not(:last-child) {
    display: none;
  }
}
@media only screen and (min-width:960px) and (max-height:600px) {
  .navigation--navbar.sf-menu>li:nth-child(3) .navigation_sub-menu-featured>li:nth-last-child(-n+5):not(:last-child) {
    display: none;
  }
}
.wf-active .globalnav__brand.globalnav__brand--co-brand a.globalnav__logo--co-brand, .wf-inactive .globalnav__brand.globalnav__brand--co-brand a.globalnav__logo--co-brand {
  font-family:"aktiv-grotesk", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}
[data-nav-theme="reveal"], [data-nav-theme="reveal"] .globalnav__primary {
  height:60px;
}
[data-nav-theme="reveal"] .globalnav__brand {
  display:inline-block;
  margin:8px 0 8px 10px;
  max-width:75px;
  width:100%;
}
[data-nav-theme="reveal"] .globalnav__brand .globalnav__logo {
  display:block !important;
  max-width:160px;
}
[data-nav-theme="reveal"] .igw-header-nav {
  float:right;
  margin:8px 0 8px 10px;
}
[data-nav-theme="reveal"] .igw-header-nav a {
  color:#fff;
  font-size:0.875rem;
  font-weight:bold;
  margin-top:1px;
  display:block;
  position:relative;
  padding:8px 20px;
}
[data-nav-theme="reveal"] .igw-btn-reveal {
  background:#ec417a;
  border:1px solid transparent;
  border-radius:55px;
  font-weight:bold;
  line-height:1.5;
  margin-top:-1px;
  padding:12px 16px;
  text-transform:uppercase;
  -webkit-transition:all .6s;
  transition:all .6s;
}
[data-nav-theme="reveal"] .igw-header-btn.igw-btn-reveal:hover {
  background:0 0;
  border-color:#ec417a;
  color:#ec417a;
}
@media only screen and (min-width:961px) {
  [data-mega-menu="true"] .globalnav__primary .globalnav__wrapper {
    position: static;
  }
  [data-mega-menu="true"] .globalnav__primary .globalnav__wrapper .small-pad-left {
    padding-left: 7px;
  }
  [data-mega-menu="true"] .globalnav__search-toggle {
    position: relative;
    display: inline;
    float: right;
    top: 0;
    right: 0;
  }
  [data-mega-menu="true"] .navigation--navbar>li {
    position: relative;
  }
  [data-mega-menu="true"] .navigation--navbar>li>a:before {
    content: '';
    position: absolute;
    left: 10%;
    bottom: 0;
    width: 0;
    height: 4px;
    background: #1e93fc;
    -webkit-transition: width 0.3s ease;
    transition: width 0.3s ease;
  }
  [data-mega-menu="true"] .navigation--navbar>li:hover a:before, [data-mega-menu="true"] .navigation--navbar>.sfHover a:before {
    width: 80%;
  }
  [data-mega-menu="true"] .navigation--navbar>li>ul {
    position: absolute;
    left: 50%;
    overflow: hidden;
    min-width: 210px;
    max-width: 300px;
    background: #FFF;
    box-sizing: border-box;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
  }
  [data-mega-menu="true"] .navigation--navbar>li>ul>li {
    position: relative;
    width: auto;
    vertical-align: top;
    box-sizing: border-box;
    font-size: 12px;
  }
  [data-mega-menu="true"] .navigation--navbar li:not(.menu-full-width) ul li:last-child a {
    margin-bottom: 8px;
  }
  [data-mega-menu="true"] .navigation--navbar li ul li a, [data-mega-menu="true"] .navigation--navbar .navigation__callout-link {
    padding: 8px 25px;
    background: none;
    border: none;
    color: #333;
    line-height: 1.5em;
  }
  [data-mega-menu="true"] .navigation--navbar li ul li a:hover, [data-mega-menu="true"] .navigation--navbar .navigation__callout-link:hover {
    color: #0099ff;
    background: none;
  }
  [data-mega-menu="true"] .navigation--navbar li ul li a .deemphasize {
    min-width: 230px;
    white-space: normal;
  }
  [data-mega-menu="true"] .navigation--navbar li ul li:first-child a {
    margin-top: 8px;
  }
  [data-mega-menu="true"] .navigation--navbar.sf-menu .emphasize a {
    font-weight: bold;
  }
  [data-mega-menu="true"] .navigation--navbar.sf-menu .deemphasize a [data-mega-menu="true"] .navigation--navbar.sf-menu .deemphasize {
    font-weight: normal;
  }
  [data-mega-menu="true"] .navigation--navbar>li.menu-full-width {
    position: static;
  }
  [data-mega-menu="true"] .navigation--navbar>li.menu-full-width .small-mar-left {
    margin-left: 8px;
  }
  [data-mega-menu="true"] .navigation--navbar>li.menu-full-width>ul {
    position: absolute;
    min-width: auto;
    max-width: none;
    width: 100%;
    left: 0;
    overflow: hidden;
    background: #FFF;
    box-sizing: border-box;
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
  }
  [data-mega-menu="true"] .navigation--navbar .menu-full-width.sfHover ul {
    display: -webkit-box !important;
    display: -ms-flexbox !important;
    display: flex !important;
  }
  [data-mega-menu="true"] .navigation--navbar>li.menu-full-width>ul:after, [data-mega-menu="true"] .navigation--navbar>li.menu-full-width>ul:before {
    content: '';
    position: relative;
    top: auto;
    right: auto;
    left: auto;
    width: calc(50% - 585px);
    height: auto;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    border: none !important;
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
  }
  [data-mega-menu="true"] .navigation--navbar>li.menu-full-width>ul:before {
    background: #f1f1f1;
  }
  [data-mega-menu="true"] .navigation--navbar>li.menu-full-width>ul>li {
    position: relative;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    max-width: 320px;
    vertical-align: top;
    padding: 25px 50px;
    box-sizing: border-box;
    font-size: 12px;
  }
  [data-mega-menu="true"] .navigation--navbar>li.menu-full-width>ul>li:first-child {
    flex: 2;
    padding: 25px 37px 25px 0;
    max-width: 360px;
    background: #f1f1f1;
  }
  [data-mega-menu="true"] .navigation--navbar>li.menu-full-width>ul>li:last-child {
    padding: 25px 0 25px 50px;
  }
  [data-mega-menu="true"] .navigation--navbar>li.menu-full-width>ul>li:after {
    content: '';
    position: absolute;
    top: 25px;
    right: 0;
    height: calc(100% - 50px);
    border-right: 2px solid #f0f0f0;
  }
  [data-mega-menu="true"] .navigation--navbar>li.menu-full-width>ul>li:first-child:after, [data-mega-menu="true"] .navigation--navbar>li.menu-full-width>ul>li:last-child:after {
    border-right: none;
  }
  [data-mega-menu="true"] .navigation--navbar>li.menu-full-width .navigation__sub-menu--left {
    border: 1px solid #d8d8d8;
    margin: 20px 0 0 0;
    position: relative;
    background: #fff;
  }
  [data-mega-menu="true"] .navigation--navbar>li.menu-full-width .navigation__sub-menu--left>.navigation__sub-menu--left-item {
    padding: 10px 20px 10px 20px;
    border-bottom: 1px solid #d8d8d8;
    min-height: 100px;
  }
  [data-mega-menu="true"] .navigation--navbar>li.menu-full-width .navigation__sub-menu--left>.navigation__sub-menu--left-item:last-child {
    border: none;
  }
  [data-mega-menu="true"] .navigation--navbar>li.menu-full-width .navigation__sub-menu--left .navigation__sub-menu-header {
    position: absolute;
    top: 0;
    right: 50%;
    transform: translate3d(50%, -50%, 0);
    margin: 0;
    padding: 3px 7px;
    font-size: 0.85rem;
    background: #969696;
    color: #fff;
    white-space: nowrap;
    text-transform: uppercase;
  }
  [data-mega-menu="true"] .navigation--navbar>li.menu-full-width .navigation__sub-menu--left .emphasize {
    position: relative;
  }
  [data-mega-menu="true"] .navigation--navbar li.menu-full-width .navigation__sub-menu--left .deemphasize {
    min-width: auto;
    padding: 0 60px 0 0;
  }
  [data-mega-menu="true"] .navigation--navbar>li.menu-full-width .navigation__sub-menu--left .navigation__sub-menu-title {
    font-size: 1.25rem;
    font-weight: normal;
  }
  [data-mega-menu="true"] .navigation--navbar>li.menu-full-width .navigation__sub-menu--left .navigation__sub-menu-price {
    position: absolute;
    box-sizing: content-box;
    color: #fff;
    padding: 10px 8px;
    font-size: 1.425em;
    right: -21px;
    width: 56px;
    text-align: center;
    top: 1.25rem;
  }
  .navigation__sub-menu-header {
    color: #333;
    font-weight: bold;
    font-size: 1rem;
    line-height: 1.5em;
    margin-bottom: 10px;
  }
  [data-mega-menu="true"] .navigation--navbar li.menu-full-width ul li .navigation__sub-menu-header:not(:first-of-type) {
    margin: 30px 0 8px 0;
  }
  [data-mega-menu="true"] .navigation--navbar li.menu-full-width ul li a {
    padding: 8px 0;
  }
  [data-mega-menu="true"] .navigation--navbar li.menu-full-width .deemphasize, [data-mega-menu="true"] .navigation--navbar.sf-menu .menu-full-width a {
    font-weight: normal;
  }
  [data-mega-menu="true"] .navigation--navbar li.menu-full-width .emphasize, [data-mega-menu="true"] .navigation--navbar li.menu-full-width .emphasize a {
    font-weight: bold;
  }
  [data-mega-menu="true"] .navigation--navbar .color--azure-radiance-to-biscay {
    -webkit-transition: color 250ms linear;
    transition: color 250ms linear;
    color: #0099FF;
  }
  [data-mega-menu="true"] .navigation--navbar .color--azure-radiance-to-biscay:hover, [data-mega-menu="true"] .navigation--navbar a:hover .color--azure-radiance-to-biscay {
    color: #1B4561;
  }
}
@media only screen and (max-width:1450px) and (min-width:1279px) {
  [data-mega-menu="true"] .navigation--navbar>li:last-child>ul {
    left: auto;
    right: 0;
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
  }
}
@media only screen and (max-width:1279px) and (min-width:960px) {
  [data-mega-menu="true"] .navigation--navbar>li:last-child>ul {
    left: auto;
    right: 0;
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
  }
  [data-mega-menu="true"] .navigation--navbar>li.menu-full-width>ul:after, [data-mega-menu="true"] .navigation--navbar>li.menu-full-width>ul:before {
    width: calc(50% - 490px);
  }
  [data-mega-menu="true"] .navigation--navbar>li.menu-full-width>ul:after, [data-mega-menu="true"] .navigation--navbar>li.menu-full-width>ul:before {
    -webkit-box-flex: none;
    -ms-flex: none;
    flex: none;
  }
  [data-mega-menu="true"] .navigation--navbar>li.menu-full-width>ul>li {
    padding: 25px 30px;
  }
  [data-mega-menu="true"] .navigation--navbar>li.menu-full-width>ul>li:first-child {
    padding: 25px 30px 25px 0;
  }
  [data-mega-menu="true"] .navigation--navbar>li.menu-full-width>ul>li:last-child {
    padding: 25px 0 25px 30px;
  }
}
@media only screen and (max-width:960px) {
  .responsive-hide {
    display: none;
  }
  [data-mega-menu="true"] .navigation--navbar li ul li>div {
    margin-bottom: 0;
  }
  [data-mega-menu="true"] .navigation--navbar li.menu-full-width ul {
    opacity: 1 !important;
  }
  [data-mega-menu="true"] .navigation--navbar li.menu-full-width ul li .navigation__sub-menu-header {
    display: none !important;
  }
  [data-mega-menu="true"] .navigation--navbar>li.menu-full-width .navigation__sub-menu--left .navigation__sub-menu-price {
    display: none;
  }
}
.globalnav .hidden, .globalnav .visible-lg, .globalnav .visible-md, .globalnav .visible-sm, .globalnav .visible-xs, .globalnav .visible-xxs {
  display:none!important;
}
@media only screen and (min-width:1280px) {
  .globalnav .hidden-lg {
    display: none !important;
  }
  .globalnav .visible-lg {
    display: inherit!important;
  }
}
@media only screen and (max-width:1280px) and (min-width:960px) {
  .globalnav .hidden-md {
    display: none!important;
  }
  .globalnav .visible-md {
    display: inherit!important;
  }
}
@media only screen and (max-width:959px) and (min-width:768px) {
  .globalnav .hidden-sm {
    display: none!important;
  }
  .globalnav .visible-sm {
    display: inherit!important;
  }
}
@media only screen and (max-width:767px) and (min-width:481px) {
  .globalnav .hidden-sm {
    display: none!important;
  }
  .globalnav .visible-sm {
    display: inherit!important;
  }
}
@media only screen and (max-width:480px) {
  .globalnav .hidden-sm {
    display: none!important;
  }
  .globalnav .visible-sm {
    display: inherit!important;
  }
}
.ui-footer {
  background:#111;
  color:#fff;
  font-size:16px;
  font-family:"AktivGrotesk Local", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  line-height:1.5em;
  padding:50px 0;
  position:relative;
  z-index:5;
}
.ui-footer--clearfix:before, .ui-footer--clearfix:after {
  content:'';
  display:table;
}
.ui-footer--clearfix:after {
  clear:both;
}
.ui-footer--glow {
  position:relative;
}
.ui-footer--glow:before, .ui-footer--glow:after {
  background:rgba(0, 153, 256, 1);
  content:'';
  display:block;
  position:absolute;
  z-index:5;
}
.ui-footer--glow:before {
  background:rgba(0, 153, 256, 0.7);
  width:100%;
  height:1px;
  box-shadow:0px 0px 13px 3px rgba(70, 179, 252, 0.5);
  top:0;
  right:0;
}
.ui-footer--glow:after {
  background:rgba(0, 153, 256, 1);
  border-radius:50%;
  width:25%;
  max-width:155px;
  height:1px;
  box-shadow:0 0 10px 6px rgba(0, 153, 255, 0.75);
  -webkit-transform:scaleX(1.5);
  -ms-transform:scaleX(1.5);
  transform:scaleX(1.5);
  top:0;
  right:10%;
}
.ui-footer__wrap {
  max-width:1170px;
  margin:0 auto;
  position:relative;
  z-index:2;
}
.ui-footer__wrap--max-width {
  max-width:800px;
}
.ui-footer .ui-footer__menu ul {
  list-style:none;
  line-height:1.2em;
  margin:0;
  padding:0;
}
.ui-footer .ui-footer__menu ul li {
  position:relative;
  margin-bottom:0;
}
.ui-footer .ui-footer__menu ul li ul {
  margin-top:1px;
  margin-bottom:1px!important;
}
.ui-footer .ui-footer__menu ul li ul:last-child {
  margin-bottom:20px!important;
}
.ui-footer .ui-footer__menu a, .ui-footer .ui-footer__menu a:active, .ui-footer .ui-footer__category {
  display:block;
  font-size:14px;
  padding-top:0.5em;
  text-decoration:none;
}
.ui-footer .ui-footer__category {
  color:#fcfcfc;
  font-weight:bold;
  position:relative;
}
.ui-footer .ui-footer__menu a {
  color:#a7a7a7;
}
.ui-footer .ui-footer__menu a:hover {
  color:#0099ff;
}
.ui-footer__col-one-fourth {
  width:21.25%;
}
.ui-footer__col-one-fifth {
  width:15%;
}
.ui-footer__col-one-fourth:last-child .ui-footer__menu-list ul {}
.ui-footer__col-block {
  float:left;
  margin-left:5%;
  margin-bottom:60px;
}
.ui-footer__col-block.ui-footer__col-one-fourth {
  margin-bottom:15px;
}
.ui-footer .ui-footer__col-one-fourth:first-child, .ui-footer .ui-footer__col-one-fifth:first-child {
  margin-left:0;
}
.ui-footer .ui-footer__wrap:last-child .ui-footer__col-block {
  margin-bottom:0;
}
.ui-footer__icons {
  margin-bottom:30px;
  text-align:center;
}
.ui-footer .ui-footer__icon-link {
  color:#666;
  display:inline-block;
  font-size:22px;
  fill:#666;
  line-height:30px;
  margin-right:20px;
  position:relative;
  text-align:center;
  width:40px;
  height:40px;
}
.ui-footer__icon-link:hover {
  color:#0099ff;
  fill:#0099ff;
}
.ui-footer.ui-footer--ignite {
  padding:50px 0 0;
}
.ui-footer #footer-wrap {
  background:#000;
  color:#868686;
  font-size:14px;
  margin-top:50px;
  padding:25px 0;
  text-align:center;
}
.ui-footer--legal a {
  font-size:0.8em !important;
}
.ui-footer--legal li {
  display:inline-block;
}
.ui-footer[data-theme="reportplus"] {
  background:#116384;
}
.ui-footer[data-theme="reportplus"] .ui-footer__icon-link {
  color:#9ec3d1;
  fill:#9ec3d1;
}
.ui-footer[data-theme="reportplus"] .ui-footer__icon-link:hover, .ui-footer[data-theme="reportplus"] .ui-footer__icon-link:focus {
  color:#043f56;
  fill:#043f56;
}
.ui-footer[data-theme="reportplus"] .ui-footer__category {
  color:#81c9e7;
}
.ui-footer[data-theme="reportplus"] .ui-footer__menu a {
  color:#fff;
}
.ui-footer[data-theme="reportplus"] .ui-footer__menu a:hover, .ui-footer[data-theme="reportplus"] .ui-footer__menu a:focus {
  color:#81c9e7;
}
.ui-footer[data-theme="indigo-studio"] {
  background:#141a42;
}
.ui-footer[data-theme="indigo-studio"] .ui-footer__icon-link {
  color:#727dc7;
  fill:#727dc7;
}
.ui-footer[data-theme="indigo-studio"] .ui-footer__icon-link:hover, .ui-footer[data-theme="indigo-studio"] .ui-footer__icon-link:focus {
  color:#2a387a;
  fill:#2a387a;
}
.ui-footer[data-theme="indigo-studio"] .ui-footer__category {
  color:#727dc7;
}
.ui-footer[data-theme="indigo-studio"] .ui-footer__menu a {
  color:#bfc5db;
}
.ui-footer[data-theme="indigo-studio"] .ui-footer__menu a:hover, .ui-footer[data-theme="indigo-studio"] .ui-footer__menu a:focus {
  color:#727dc7;
}
.ui-footer__wrap--newsletter {
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-orient:horizontal;
  -webkit-box-direction:normal;
  -ms-flex-direction:row;
  flex-direction:row;
  -ms-flex-wrap:wrap;
  flex-wrap:wrap;
}
.ui-footer__wrap--newsletter .ui-footer__menu-block {
  box-sizing:border-box;
  width:68.75%;
  -webkit-box-ordinal-group:1;
  -ms-flex-order:0;
  order:0;
}
.ui-footer__wrap--newsletter .ui-footer__newsletter-block {
  box-sizing:border-box;
  border-left:1px solid #dedede;
  margin-left:2.5%;
  padding-left:2.5%;
  width:26.25%;
  -webkit-box-ordinal-group:2;
  -ms-flex-order:1;
  order:1;
}
.ui-footer__newsletter-block .newsletter__form—alt .ui-footer-newsletter__header>div {
  display:inline-block;
  vertical-align:middle;
  line-height:normal;
  margin:0 0 15px;
}
.ui-footer__newsletter-block .newsletter__form—alt .ui-footer-newsletter__header img {
  box-sizing:border-box;
  padding:5px;
  width:100%;
}
.ui-footer__newsletter-block .newsletter__form—alt .ui-footer-newsletter__header .ui-footer-newsletter__headline {
  color:#fff;
  font-weight:bold;
  font-size:14px;
}
.ui-footer__newsletter-block .newsletter__form—alt .ui-footer-newsletter__header .ui-footer-newsletter__subheadline {
  color:#b4b4b4;
  font-size:12px;
  margin:0;
}
.ui-footer-newsletter__subheadline {
  margin-bottom:30px;
}
.ui-footer__newsletter-updated-block .ui-footer-newsletter__header {
  font-size:1.355rem;
}
.ui-footer__newsletter-updated-block [class*="bg--dark"] .ui-form input[type="email"] {
  cursor:auto;
  padding:20px 15px;
  color:#555;
  background:#FFF;
  border-radius:5px;
}
.ui-footer__newsletter-updated-block .ui-form__checkbox-container {
  display:inline-block;
}
.ui-footer__newsletter-updated-block .ui-form__checkbox {
  top:5px;
  border-radius:5px;
}
.ui-footer__newsletter-updated-block .newsletter__submit-btn-wrap {
  padding-left:32px;
}
.ui-footer__newsletter-updated-block .thankyou__container strong {
  color:#fff;
  display:block;
  margin-bottom:5px;
}
.ui-footer__newsletter-updated-block .ui-form__checkbox-container {
  font-size:0.7rem;
}
.ui-footer__newsletter-updated-block .ui-form__checkbox-container a, .ui-footer__newsletter-updated-block .ui-form__checkbox-container a:visited {
  color:#FFF;
}
.ui-footer .ui-btn.ui-btn--default {
  background:#0099ff;
  border:1px solid #0099ff;
  color:#fff;
  font-size:0.875rem;
  line-height:1em;
  margin:5px 0;
  padding:0.75em 1.25em;
  text-align:center;
  text-decoration:none;
  text-transform:uppercase;
  -webkit-transition:all .4s;
  transition:all .4s;
}
.ui-footer .ui-btn.ui-btn--default:hover {
  background:transparent;
  color:#0099ff;
}
#footer {
  background:#000;
  color:#868686;
  font-family:"AktivGrotesk Local", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight:400;
  text-align:center;
}
#footer #footer-wrap {
  padding:25px 10px;
}
#footer #copyright {
  color:#868686;
  font-size:14px;
}
@media only screen and (max-width:1279px) and (min-width:960px) {
  .ui-footer__wrap {
    max-width: 980px;
    margin: 0 auto;
  }
  .ui-footer__icons {
    margin-bottom: 40px;
  }
}
@media only screen and (max-width:959px) {
  .ui-footer__wrap--newsletter {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
  }
  .ui-footer__wrap--newsletter .ui-footer__menu-block {
    -webkit-box-ordinal-group: 2;
    -ms-flex-order: 1;
    order: 1;
    width: 100%;
  }
  .ui-footer__wrap--newsletter .ui-footer__newsletter-block {
    background: #000;
    border: 1px solid transparent;
    margin: 15px 0;
    -webkit-box-ordinal-group: 1;
    -ms-flex-order: 0;
    order: 0;
    padding: 10px;
    width: 100%;
  }
}
@media only screen and (max-width:959px) and (min-width:768px) {
  .ui-footer__wrap {
    max-width: 740px;
    margin: 0 auto;
  }
  .ui-footer__icons {
    margin-bottom: 40px;
  }
}
@media only screen and (max-width:767px) {
  .ui-footer__wrap {
    max-width: 300px;
    margin: 0 auto;
  }
  .ui-footer__col-block {
    float: none;
    margin-left: 0;
    width: 100%;
  }
  .ui-footer__icons {
    margin-bottom: 40px;
  }
}
@media only screen and (max-width:767px) and (min-width:480px) {
  .ui-footer__wrap {
    max-width: 440px;
    margin: 0 auto;
  }
  .ui-footer__col-block {
    display: inline-block;
    float: none;
    margin-left: 1%;
    vertical-align: top;
    width: 48%;
  }
  .ui-footer__icons {
    margin-bottom: 40px;
  }
}
.wf-active .ui-footer, .wf-active #footer, .wf-inactive .ui-footer, .wf-inactive #footer {
  font-family:"aktiv-grotesk", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}
[class*="link--opacity-highlight"] {
  -webkit-transition:opacity .4s;
  transition:opacity .4s;
}
[class*="link--opacity-highlight"]:hover, [class*="link--opacity-highlight"]:focus {
  opacity:1.0;
}
.link--opacity-highlight {
  opacity:0.5;
}
.link--opacity-highlight8 {
  opacity:0.8;
}
[data-footer-theme="reveal"] {
  padding-top:3rem !important;
  padding-bottom:1rem !important;
  padding-left:2rem !important;
  padding-right:2rem !important;
}
[data-footer-theme="reveal"].bg-gradient--primary {
  background:rgb(236, 65, 122);
  background:linear-gradient(90deg, rgba(251, 179, 101, 1) 0, rgba(236, 65, 122, 1) 40%);
}
@media only screen and (max-width:768px) {
  [data-footer-theme="reveal"][class*="bg-gradient--primary"] {
    background: linear-gradient(90deg, rgba(251, 179, 101, 1) 0, rgba(236, 65, 122, 1) 60%);
  }
}
[data-footer-theme="reveal"].text-white {
  color:#fff !important;
}
[data-footer-theme*="reveal"] h2 {
  color:#fff;
  font-family:"aktiv-grotesk", "Helvetica Neue", "Segoe UI", Helvetica, Arial, sans-serif;
  font-size:2.25rem;
  font-weight:700;
  line-height:1.2;
  margin-bottom:1.5rem !important;
  text-align:center;
}
[data-footer-theme="reveal"]#footer.footer {
  border:0;
  padding:30px 15px 0 !important;
  line-height:1.5;
}
[data-footer-theme="reveal"] .ui-footer__wrap {
  max-width:750px;
  width:100%;
}
[data-footer-theme="reveal"] .ui-footer__wrap .ui-footer__col-one-fourth {
  box-sizing:border-box;
  display:inline-block;
  padding-left:15px;
  padding-right:15px;
  width:100%;
  margin:0;
}
@media (max-width:575px) {
  [data-footer-theme="reveal"] .ui-footer__wrap {
    text-align: center;
  }
}
@media (min-width:576px) {
  [data-footer-theme="reveal"] .ui-footer__wrap .ui-footer__col-one-fourth {
    width: 49%;
  }
}
@media (min-width:768px) {
  [data-footer-theme="reveal"] .ui-footer__wrap .ui-footer__col-one-fourth {
    width: 49%;
  }
}
@media (min-width:992px) {
  [data-footer-theme="reveal"] .ui-footer__wrap .ui-footer__col-one-fourth:first-child {
    width: 39%;
  }
  [data-footer-theme="reveal"] .ui-footer__wrap .ui-footer__col-one-fourth {
    width: 20%;
  }
}
[data-footer-theme*="reveal"] .ui-footer__icons {
  margin-bottom:1rem;
}
[data-footer-theme*="reveal"] .ui-footer__icon-link {
  border:1px solid transparent;
  width:auto;
  height:auto;
  margin:0 8px 0 0;
  padding:4px;
}
[data-footer-theme="reveal"] .ui-footer__category {
  color:#f9cfc5 !important;
  position:relative;
  font-size:1.125rem;
  margin-bottom:0.5rem;
}
[data-footer-theme="reveal"] .ui-footer__category span {
  display:inline-block;
  margin-bottom:2px;
  padding-bottom:8px;
  position:relative;
}
[data-footer-theme="reveal"] .ui-footer__category span::after {
  background:#f9cfc5;
  content:"";
  position:absolute;
  left:0;
  bottom:0;
  height:2px;
  width:32px;
}
[data-footer-theme="reveal"] .ui-footer__menu .menu__link {
  color:#fff;
  display:inline-block;
  position:relative;
  font-size:1rem !important;
  font-weight:700;
  line-height:1.5;
}
[data-footer-theme="reveal"] .ui-footer__menu .menu__link:hover, [data-footer-theme="reveal"] .ui-footer__menu .menu__link:focus {
  color:#efefef;
}
[data-footer-theme="reveal"] .ui-footer__menu .menu__link>span {
  background-image:linear-gradient(currentColor, currentColor);
  background-position:0 100%;
  background-repeat:no-repeat;
  background-size:0 2px;
  padding-bottom:3px;
  transition:background-size .3s;
}
[data-footer-theme="reveal"] .ui-footer__menu .menu__link:hover>span, [data-footer-theme="reveal"] .ui-footer__menu .menu__link:hover>span {
  background-size:100% 2px;
}
[data-footer-theme="reveal"] .footer.footer-copyright {
  padding:0 0 30px;
  background:#000;
  border:0;
}
.footer {
  background:#000;
  color:#666 !important;
  padding:30px 0 0;
  text-align:center;
}
.footer *, .footer *::before, .footer *::after {
  box-sizing:border-box;
}
.footer ol, .footer ul, .footer dl {
  margin-top:0;
  margin-bottom:0;
}
.footer small, .footer .small {
  font-size:80%;
  font-weight:400;
}
.footer .d-block {
  display:block !important;
}
.footer .logo {
  max-width:150px;
  width:100%;
  margin-bottom:15px;
  vertical-align:middle;
  border-style:none;
}
.footer .font-weight-light {
  font-weight:300 !important;
}
.footer .pb-2, .footer .py-2 {
  padding-bottom:0.5rem !important;
}
.footer .mb-0, .footer .my-0 {
  margin-bottom:0 !important;
}
.footer .list-inline {
  padding-left:0;
  list-style:none;
}
.footer .list-inline-item {
  display:inline-block;
  margin-bottom:0;
}
.footer .list-inline-item a {
  line-height:1.5;
}
.footer .list-inline-item:not(:last-child) {
  margin-right:0.5rem;
}
.footer .list-inline--piped li:not(:last-child) {
  margin-right:0;
}
.footer .list-inline--piped li {
  padding:0 !important;
}
.footer .list-inline--piped li:last-child::after {
  display:none;
}
.footer .list-inline--piped li::after {
  content:'|';
  margin:0 10px;
}
.footer a, .footer a:visited {
  color:#888;
  text-decoration:none;
  background-color:transparent;
  -webkit-text-decoration-skip:objects;
}
.footer a:hover, .footer a:focus {
  color:#aaa;
  text-decoration:none;
}
.footer.footer-copyright {
  padding:0 0 30px;
}
.footer.footer-copyright #copyright {
  font-size:0.875em;
  color:#666;
}
@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@-webkit-keyframes drawDecorLine {
  0% {
    width: 0px;
  }
  100% {
    width: 155px;
  }
}
@keyframes drawDecorLine {
  0% {
    width: 0px;
  }
  100% {
    width: 155px;
  }
}
@-webkit-keyframes slowHoverFromBottom {
  0% {
    -webkit-transform: translateY(0%);
    transform: translateY(0%);
  }
  50% {
    -webkit-transform: translateY(-3%);
    transform: translateY(-3%);
  }
}
@keyframes slowHoverFromBottom {
  0% {
    -webkit-transform: translateY(0%);
    transform: translateY(0%);
  }
  50% {
    -webkit-transform: translateY(-3%);
    transform: translateY(-3%);
  }
}
@-webkit-keyframes smoothMove {
  0% {
    top: -25px;
  }
  50% {
    top: 25px;
  }
  100% {
    top: -25px;
  }
}
@-moz-keyframes smoothMove {
  0% {
    top: -25px;
  }
  50% {
    top: 25px;
  }
  100% {
    top: -25px;
  }
}
@-o-keyframes smoothMove {
  0% {
    top: -25px;
  }
  50% {
    top: 25px;
  }
  100% {
    top: -25px;
  }
}
@keyframes smoothMove {
  0% {
    top: -25px;
  }
  50% {
    top: 25px;
  }
  100% {
    top: -25px;
  }
}
@-webkit-keyframes smoothMoveInver {
  0% {
    top: -50px;
  }
  50% {
    top: 50px;
  }
  100% {
    top: -50px;
  }
}
@-moz-keyframes smoothMoveInver {
  0% {
    top: -50px;
  }
  50% {
    top: 50px;
  }
  100% {
    top: -50px;
  }
}
@-o-keyframes smoothMoveInver {
  0% {
    top: -50px;
  }
  50% {
    top: 50px;
  }
  100% {
    top: -50px;
  }
}
@keyframes smoothMoveInver {
  0% {
    top: -50px;
  }
  50% {
    top: 50px;
  }
  100% {
    top: -50px;
  }
}
.smoothMove {
  position:absolute;
  animation:smoothMove 15s ease-out infinite;
  -moz-animation:smoothMove 15s ease-out infinite;
  -ms-animation:smoothMove 15s ease-out infinite;
  -webkit-animation:smoothMove 15s ease-out infinite;
  z-index:1;
}
.smoothMoveInver {
  position:absolute;
  animation:smoothMoveInver 10s ease-out infinite;
  -moz-animation:smoothMoveInver 10s ease-out infinite;
  -ms-animation:smoothMoveInver 10s ease-out infinite;
  -webkit-animation:smoothMoveInver 10s ease-out infinite;
  z-index:1;
}
.animate--hover-bottom--slow {
  -webkit-animation:slowHoverFromBottom 8s ease-in-out infinite;
  animation:slowHoverFromBottom 8s ease-in-out infinite;
}
.decor--line-animate:before {
  -webkit-animation:drawDecorLine 1s ease-in-out;
  animation:drawDecorLine 1s ease-in-out;
}
.decor--line.be-animate {
  visibility:visible;
}
.decor--line.be-animate:before {
  width:0;
}
.decor--line.be-animate.animated:before {
  width:155px;
}
.ui-hello-bar {
  font-size:0.875rem;
  color:#FFF;
  background-color:#309331;
  position:relative;
  top:0;
  box-sizing:border-box;
  top:0;
  padding:.5em;
  text-align:center;
  z-index:11;
  width:100%;
}
.ui-hello-bar__text {
  display:inline-block;
  padding:0 1.25em;
  font-weight:bold;
}
.ui-hello-bar__button, a.ui-hello-bar__button {
  display:inline-block;
  background:#fff;
  border-color:#fff;
  color:#E71576;
  text-transform:none;
}
.ui-hello-bar__button:hover, a.ui-hello-bar__button:hover {
  border-color:#fff;
  color:#fff;
  background:transparent;
}
.ui-hellobar__dismiss {
  cursor:pointer;
  position:absolute;
  right:0;
  top:50%;
  transform:translateY(-50%);
  text-decoration:none;
  text-align:center;
  color:#FFF;
  font-style:normal;
  line-height:normal;
  font-family:Arial, Baskerville, monospace;
  background:transparent;
  border:none;
  font-size:2em;
  padding:10px;
  line-height:0.6em;
}
#hello-bar_cta {
  border:1px solid transparent;
  border-color:#fff;
  border-radius:0;
  box-sizing:border-box;
  background:transparent;
  display:inline-block;
  color:#fff;
  font-size:0.75rem;
  font-weight:bold;
  line-height:1em;
  margin:5px 0;
  padding:0.75em 1.25em;
  cursor:pointer;
  text-align:center;
  text-decoration:none;
  text-transform:none;
  -webkit-transition:all .4s;
  transition:all .4s;
}
#hello-bar_cta:hover, #hello-bar_cta:focus {
  background:#fff;
  color:#0099ff;
}
@media only screen and (max-width:767px) {
  .ui-hello-bar {
    display: none;
  }
}
.breadcrumbs {}
.breadcrumbs ul li, .breadcrumbs ol li {
  display:inline-block;
  font-size:0.75rem;
  margin:0;
}
.breadcrumbs ul li:last-of-type, .breadcrumbs ol li:last-of-type {
  border-right:none;
}
.breadcrumbs li+li::before {
  content:'';
  display:inline-block;
  border-right:.1em solid currentColor;
  height:.8em;
  margin-left:5px;
  margin-right:5px;
  -webkit-transform:rotate(15deg);
  -ms-transform:rotate(15deg);
  transform:rotate(15deg);
}
.breadcrumbs a[aria-current] {
  color:#666;
  cursor:default;
}
.ui-callout {
  padding:50px 0;
  text-align:center;
}
.ui-callout__wrap {
  margin:0 auto;
  max-width:1160px;
}
.ui-callout--padding-lg {
  padding:100px
}
.ui-callout--padding-md {
  padding:75px
}
.ui-callout--padding-35 {
  padding:35px
}
.ui-callout--padding-sm {
  padding:25px
}
.ui-callout--padding-xs {
  padding:10px
}
.ui-callout--secondary-nav {
  margin-top:-55px;
  padding:105px 0 50px;
}
.ui-callout--with-thumbnail .ui-callout__wrap {
  position:relative;
  padding-left:125px;
}
.ui-callout--with-thumbnail .ui-callout__thumbnail {
  position:absolute;
  top:50%;
  left:15px;
  -webkit-transform:translateY(-50%);
  -ms-transform:translateY(-50%);
  transform:translateY(-50%)
}
.ui-callout--indigo {
  padding-top:50px;
}
.ui-callout--indigo .ui-callout__img {
  position:absolute;
  left:0;
  width:100%;
  max-width:300px;
  bottom:-45px;
  left:30px;
}
.ui-callout--indigo .ui-callout__content {
  max-width:600px;
  width:100%;
  left:350px;
  box-sizing:border-box;
  margin:0;
  position:relative;
}
.ui-callout--indigo .ui-callout__img-right {
  position:absolute;
  width:100%;
  max-width:175px;
  bottom:-30px;
  left:875px;
}
@media only screen and (max-width:960px) {
  .ui-callout--indigo .ui-callout__content {
    max-width: 400px;
  }
}
@media only screen and (max-width:768px) {
  .ui-callout--indigo {
    margin-bottom: -95px;
    padding-top: 0;
  }
  .ui-callout--indigo .ui-callout__content {
    max-width: 100%;
    left: 0;
  }
  .ui-callout--indigo .ui-callout__img {
    position: relative;
    bottom: 0;
    left: 0;
  }
}
@media only screen and (max-width:1279px) {
  .ui-callout--indigo .ui-callout__img-right {
    position: absolute;
    left: 775px;
  }
}
@media only screen and (max-width:959px) {
  .ui-callout--indigo .ui-callout__img-right {
    position: absolute;
    left: 625px;
  }
}
@media only screen and (max-width:767px) {
  .ui-callout--indigo .ui-callout__img-right {
    position: relative;
    bottom: 30px;
    left: 125px;
    margin-bottom: 50px;
  }
}
.ui-carousel {}
.ui-carousel--client {
  display:table;
  list-style:none;
  margin:0 auto;
  padding:0;
  opacity:1;
  overflow:hidden;
  -webkit-transition:opacity 0.3s ease-in, height 0.3s ease-in;
  transition:opacity 0.3s ease-in, height 0.3s ease-in;
}
.ui-carousel--client li {
  display:table-cell;
  float:none;
  margin:0 10px;
  padding:2em 2em 0;
  position:relative;
  vertical-align:middle;
}
.ui-carousel__container .slides {
  padding-bottom:10px;
}
.ui-carousel__container .flex-control-nav {
  bottom:-15px!important;
}
.refapp-badge {
  background:rgba(0, 0, 0, 0.2) url("https://static.infragistics.com/marketing/Website/products/donut-chart-graphic.svg") -7px center no-repeat;
  background-size:100%;
  box-shadow:0 0 26px 12px rgba(0, 0, 0, 0.2);
  position:absolute;
  bottom:150px;
  left:0;
  display:inline-block;
  width:300px;
  height:300px;
  border-radius:50%;
}
.refapp-badge__content {
  line-height:1.3em;
  position:absolute;
  top:50%;
  left:50%;
  -webkit-transform:translateX(-50%) translateY(-50%);
  -ms-transform:translateX(-50%) translateY(-50%);
  transform:translateX(-50%) translateY(-50%);
  width:200px;
}
.refapp-badge__content>h3, .refapp-badge__content>h4, .refapp-badge__content>h5, .refapp-badge__content>.text--h3, .refapp-badge__content>.text--h4, .refapp-badge__content p {
  margin-bottom:5px;
}
.refapp-badge--right {
  left:inherit;
  right:25px;
}
.refapp-badge--bottom-per-sm {
  bottom:10%;
}
.tree {
  font-size:16px;
  margin:0 0 0 20px;
  padding-left:15px;
  list-style:none;
  line-height:2em;
}
.tree li {
  position:relative;
}
.tree li:before {
  position:absolute;
  left:-15px;
  top:0;
  content:'';
  display:block;
  border-left:1px solid #ddd;
  height:1em;
  border-bottom:1px solid #ddd;
  width:10px;
}
.tree li:after {
  position:absolute;
  left:-15px;
  bottom:-7px;
  content:'';
  display:block;
  border-left:1px solid #ddd;
  height:100%;
}
.tree li:last-child:after {
  display:none;
}
.tree--lg {
  font-size:1.125rem;
}
.tree--md {
  font-size:1.125rem;
}
.tree--sm {
  font-size:0.875rem;
}
.tree--xs {
  font-size:0.875rem;
}
.search__results-container.search__results-container--cse {
  padding:30px 20px;
}
.search {
  margin:0 auto;
  position:relative;
  max-width:700px;
  width:100%;
}
.search__input[type="text"] {
  color:#666;
  border:1px solid #b4b4b4;
}
.search__input[type="text"]:focus {
  background:rgba(255, 255, 255, 1);
  border:1px solid #666;
  box-sizing:border-box;
  color:#666;
  padding-right:50px;
  width:100%;
}
.search button[type="submit"] {
  background:#0099ff;
  border:1px solid #0099ff;
  box-sizing:border-box;
  cursor:pointer;
  height:2.5rem;
  width:75px;
  position:absolute;
  top:0;
  right:0;
  margin-top:0;
}
.search button[type="submit"] svg {
  fill:#fff;
  opacity:1;
  width:30%;
  vertical-align:middle;
}
.search button[type="submit"]:hover, .search button[type="submit"]:focus {
  background:#188ad6;
  border-color:#188ad6;
}
.search ::-webkit-input-placeholder {
  color:#b4b4b4;
}
.search :-moz-placeholder {
  color:#b4b4b4;
}
.search ::-moz-placeholder {
  color:#b4b4b4;
}
.search :-ms-input-placeholder {
  color:#b4b4b4;
}
.search__facets {
  position:relative;
}
.search__facets::after {
  border-bottom:1px solid #0099ff;
  content:'';
  position:absolute;
  bottom:0;
  display:block;
  width:100%;
  z-index:0;
}
.search__facets>.search__facet {
  background:#f5f5f5;
  border-width:1px solid #ddd;
  border-color:#ddd;
  border-style:solid;
  box-sizing:border-box;
  padding:0.75em 1em;
  cursor:pointer;
  display:inline-block;
  font-size:0.75rem;
  line-height:1.3em;
  margin:0;
  min-width:54px;
  position:relative;
  text-align:center;
  vertical-align:middle;
}
.search__facets>.search__facet.active {
  background:#fff;
  border-color:#0099ff #0099ff transparent;
  z-index:2;
}
.search__facets>.search__facet:hover, .search__facets>.search__facet:focus {
  outline:none;
}
.search__facets>.search__facet.active:hover, .search__facets>.search__facet.active:focus {
  background:#fff;
  border-color:#999 #999 transparent;
}
.search__facets>.search__facet:not(.active):hover, .search__facets>.search__facet:not(.active):focus {
  background:#f7f7f7;
  border-color:#999;
}
.search__results {
  list-style:none;
  padding:0;
  overflow:hidden;
}
.search__results li {
  font-size:1rem;
  margin:0;
  padding:10px 0;
}
.search__results li>[class*="search__results-"] {
  display:block;
}
.search__results .search__results-title {}
.search__results .search__results-link {
  color:#b4b4b4;
  font-size:0.75em;
}
.search__results .search__results-description {
  font-size:0.75em;
}
.search__metadata {
  border-bottom:1px solid #ddd;
  font-size:0.75rem;
  position:relative;
  padding:10px 0;
  overflow:visible;
}
.search__metadata>div {
  display:inline-block;
}
.search__metadata .search__orderby {
  float:right;
}
.search__orderby {
  position:relative;
}
.search__orderby .search__orderby-button {
  background:#f5f5f5;
  border:1px solid #ddd;
  box-sizing:border-box;
  cursor:pointer;
  display:inline-block;
  font-size:0.75rem;
  font-weight:bold;
  min-width:93px;
  line-height:normal;
  padding:5px 20px 5px 10px;
  text-align:center;
  vertical-align:middle;
}
.search__orderby .search__orderby-button::after {
  border-left:3px solid transparent;
  border-right:3px solid transparent;
  border-top:4px solid #666;
  content:'';
  display:inline-block;
  width:0;
  height:0;
  margin:0;
  position:absolute;
  right:10px;
  top:50%;
}
.search__orderby .search__orderby-button:hover, .search__orderby .search__orderby-button:focus {
  background-color:#f9f9f9;
  border-color:#999;
  outline:none;
}
.search__orderby .search__orderby-button:hover::after, .search__orderby .search__orderby-button:focus::after {
  border-color:#000 transparent transparent;
}
.search__orderby .search__orderby-menu {
  background:#fff;
  border:1px solid #ddd;
  position:absolute;
  top:0;
  right:0;
  list-style:none;
  margin:0;
  padding:0;
  min-width:125px;
  max-height:10em;
  overflow-y:auto;
  z-index:100;
}
.search__orderby .search__orderby-menu li {
  box-sizing:border-box;
  cursor:pointer;
  display:block;
  margin-bottom:0;
  padding:5px;
  width:100%;
}
.search__orderby .search__orderby-menu li.active {
  background:#f5f5f5;
}
.search__orderby .search__orderby-menu li:hover, .search__orderby .search__orderby-menu li:focus {
  background:#f7f7f7;
  color:#333;
}
.search__results-container--cse .cse-pagination {
  list-style:none;
  padding:0;
}
.search__results-container--cse .cse-pagination li {
  display:inline-block;
}
.search__results-container--cse .cse-pagination li a {
  border-radius:0;
  border-width:0 0 2px;
  border-bottom:2px solid transparent;
  display:block;
  font-size:1rem;
  line-height:normal;
  margin:2px;
  padding:5px;
  text-decoration:none;
  width:auto;
  height:auto;
}
.search__results-container--cse .cse-pagination li.active a {
  font-weight:bold;
  border-bottom-color:#0099ff;
}
.search__results-container--cse .cse-pagination li:not(.active) a:hover, .search__results-container--cse .cse-pagination li:not(.active) a:focus {
  border-bottom-color:#0099ff;
  color:#0099ff
}
.search__results-container--cse .cse-pagination .cse-pagination__next, .search__results-container--cse .cse-pagination .cse-pagination__prev {
  border:1px solid #ddd;
  color:#999;
  font-size:1.25rem;
  line-height:normal;
  margin:2px;
  padding:5px 10px;
}
.search__results-container--cse .cse-pagination .cse-pagination__next {
  margin-left:5px;
}
.search__results-container--cse .cse-pagination .cse-pagination__prev {
  margin-right:5px;
}
.search__results-container--cse .cse-pagination .cse-pagination__next:hover, .search__results-container--cse .cse-pagination .cse-pagination__next:focus, .search__results-container--cse .cse-pagination .cse-pagination__prev:hover, .search__results-container--cse .cse-pagination .cse-pagination__prev:focus {
  border:1px solid #0099ff;
  color:#0099ff;
}
.search__results-container--cse .cse-pagination .cse-pagination__next.disabled, .search__results-container--cse .cse-pagination .cse-pagination__prev.disabled {
  border-color:#f5f5f5;
  color:#ddd;
  cursor:default;
}
@media only screen and (max-width:760px) {
  .search__metadata>div {
    display: block;
  }
  .search__metadata .search__orderby {
    display: inline-block;
    float: none;
  }
}
@media only screen and (max-width:480px) {
  .search__facets>.search__facet {
    display: block;
    width: 100%;
  }
}
.ui-linkbar a, .ui-linkbar a:active {
  color:#666;
  display:block;
  font-size:1.25rem;
  font-weight:400px;
  padding:15px 10px;
}
.ui-linkbar .icon {
  color:#0099ff;
  font-size:1rem;
  margin-right:5px;
}
.ui-card {
  border:1px solid #dedede;
  box-shadow:0px 0px 20px -2px rgba(0, 0, 0, 0.25);
  box-sizing:border-box;
  margin-bottom:2.5em;
  padding:20px;
  position:relative;
}
.ui-card:focus {
  outline:none;
  box-shadow:0 0 10px rgba(0, 0, 0, 0.4);
}
.ui-card__container {
  overflow:hidden;
}
.ui-card__content-container {
  position:relative;
  padding:20px;
  overflow:hidden;
}
.ui-card header time, .ui-card header .time {
  font-size:13px;
  line-height:normal;
}
.ui-card .ui-card__feature-image {
  margin:0;
}
.ui-card .ui-card__feature-image img {
  display:block;
}
.ui-card--btn {
  padding:0;
}
.ui-card--btn a {
  background:#fff;
  color:#666;
  display:block;
  padding:20px;
}
.ui-card--btn a:hover, .ui-card--btn a:focus {
  background:#f7f7f7;
  display:block;
  padding:20px;
}
.ui-card--vmar-sm {
  margin-bottom:1.5em;
}
.ui-card--vmar-xs {
  margin-bottom:0.5em;
}
.ui-card--lg {
  font-size:1.25rem;
}
.ui-card--md {
  font-size:1.125rem;
}
.ui-card--sm {
  font-size:0.875rem;
}
.ui-card--xs {
  font-size:0.75rem;
}
.features-block--list .features-block__item.ui-card {
  margin-bottom:2.5em!important;
  padding:20px;
}
.features-block--list .features-block__item.ui-card--icon-top {
  padding:50px 20px 20px;
}
.features-block--list .features-block__item.ui-card--icon-bottom {
  padding:20px 20px 50px;
}
.ui-card--featured {
  background:#f5f5f5;
  border-collapse:collapse;
  display:table;
  table-layout:fixed;
  margin-bottom:0;
  padding:0;
  width:100%;
}
.ui-card__featured-body {
  box-sizing:border-box;
  display:table-cell;
  overflow:hidden;
  vertical-align:top;
}
.ui-card--featured-left .ui-card__featured-body--left, .ui-card--featured-right .ui-card__featured-body--right {
  width:70%;
}
.ui-card--featured-left .ui-card__featured-body--right, .ui-card--featured-right .ui-card__featured-body--left {
  overflow:hidden;
  padding:30px 25px;
  width:30%;
}
[data-theme="indigo-studio"] .ui-card--featured {
  background:#3e87ce;
  color:#ececee;
}
[data-theme="indigo-studio"] .ui-card--featured header time, [data-theme="indigo-studio"] .ui-card--featured header .time, [data-theme="indigo-studio"] .ui-card.ui-card--featured .ui-card__body p {
  color:#BCD8F3;
}
[data-theme="indigo-studio"] .ui-card.ui-card--featured h1, [data-theme="indigo-studio"] .ui-card.ui-card--featured h2, [data-theme="indigo-studio"] .ui-card.ui-card--featured h3, [data-theme="indigo-studio"] .ui-card.ui-card--featured h4, [data-theme="indigo-studio"] .ui-card.ui-card--featured h5, [data-theme="indigo-studio"] .ui-card.ui-card--featured h6 {
  color:#fff;
}
[data-theme="indigo-studio"] .ui-card.ui-card--featured .ui-btn {
  background:#fff;
  border-color:#3f51b5;
  color:#3f51b5;
}
[data-theme="indigo-studio"] .ui-card.ui-card--featured .ui-btn:hover, [data-theme="indigo-studio"] .ui-card.ui-card--featured .ui-btn:focus {
  background:#3f51b5;
  border-color:#3f51b5;
  color:#fff;
}
[data-theme="indigo-studio"] .features-block--list .features-block__item .ui-card.pricing-blocks__item--featured {
  transform:scale(1.1);
  padding-top:45px;
  border:1px solid #3f51b5;
  background:#3f51b5;
}
[data-theme*="indigo"] .pricing-blocks__label {
  background:#f05a2b;
}
[data-theme*="indigo"] .pricing-blocks__item--featured .pricing-blocks__label {
  transform:scale(0.9) translateX(-55%);
}
[data-theme="indigo-studio"] .pricing-blocks__item {
  transform:scale(0.9);
}
[data-theme*="indigo"] .pricing-blocks__item--featured .ui-btn--default.ui-btn {
  transform:scale(0.9) translateX(-55%) !important;
}
@media only screen and (max-width:959px) {
  [data-theme="indigo-studio"] .features-block--list .features-block__item .ui-card.pricing-blocks__item--featured {
    transform: scale(1.0);
  }
  [data-theme*="indigo"] .pricing-blocks__item--featured .pricing-blocks__label, [data-theme*="indigo"] .pricing-blocks__item--featured .ui-btn--default.ui-btn {
    transform: scale(1.0) translateX(-50%) !important;
  }
  [data-theme="indigo-studio"] .pricing-blocks__item {
    transform: scale(1.0);
  }
}
.ui-card--nostyle, [data-card-style="false"] {
  border:none;
  padding:0;
}
.ui-card--noborder, [data-card-border="false"] {
  border:none;
}
.ui-card--noshadow {
  box-shadow:none;
}
.ui-card--zero-padding, [data-card-padding="false"] {
  padding:0;
}
.ui-card--zero-padding .ui-card__container, [data-card-padding="false"] .ui-card__container {
  border:none;
  padding:20px;
  overflow:hidden;
}
.ui-card--lc-mb-0 *:last-child {
  margin-bottom:0;
}
.ui-card--bg-white-smoke {
  background:#f5f5f5;
}
.ui-card--cta {}
.ui-card.ui-card--cta {
  position:relative;
  padding-bottom:80px;
}
.ui-card.ui-card--cta .ui-btn {
  position:absolute;
  bottom:30px;
}
.ui-card.ui-card--ctaLink {
  position:relative;
  padding-bottom:45px;
}
.ui-card.ui-card--ctaLink .ui-cta {
  position:absolute;
  left:20px;
  right:20px;
  bottom:15px;
  font-weight:bold;
}
.text--align-center .ui-card.ui-card--cta .ui-btn {
  left:50%;
  -webkit-transform:translateX(-50%);
  -ms-transform:translateX(-50%);
  transform:translateX(-50%);
}
.ui-card--zero-border {
  border:none;
}
.ui-card__icon {
  background:#fff;
  border-radius:50%;
  display:block;
  position:absolute;
  left:50%;
  -webkit-transform:translateX(-50%);
  -ms-transform:translateX(-50%);
  transform:translateX(-50%);
}
.ui-card__icon:before {
  border:1px solid #ccc;
  border-top-color:transparent;
  border-left-color:transparent;
  border-radius:50%;
  content:'';
  display:block;
  width:60px;
  height:60px;
  position:absolute;
  top:0;
  left:0;
}
.ui-card--icon-top {
  padding:50px 20px 20px;
}
.ui-card--icon-bottom {
  padding:20px 20px 50px;
}
.ui-card--icon-top .ui-card__icon {
  top:-32px;
}
.ui-card--icon-top .ui-card__icon:before {
  -webkit-transform:rotate(45deg);
  -ms-transform:rotate(45deg);
  transform:rotate(45deg);
}
.ui-card--icon-bottom .ui-card__icon {
  bottom:-30px;
}
.ui-card--icon-bottom .ui-card__icon:before {
  -webkit-transform:rotate(225deg);
  -ms-transform:rotate(225deg);
  transform:rotate(225deg);
}
.ui-card__icon.ui-card__icon--font {
  box-sizing:border-box;
  color:#0099ff;
  font-size:35px;
  line-height:normal;
  padding:5px;
  width:60px;
  height:60px;
}
.ui-card--podcast, .ui-card--podcast[data-card-padding="false"] .ui-card__content-container, .ui-card--podcast.ui-card--zero-padding .ui-card__content-container {
  padding:20px 20px 275px;
}
.ui-card--podcast[data-card-padding="false"], .ui-card--podcast.ui-card--zero-padding {
  padding:0;
}
.audio--libsyn {
  margin:0;
  position:absolute;
  overflow:hidden;
  left:20px;
  right:20px;
  bottom:95px;
}
.audio--libsyn iframe {
  border:none;
  overflow:hidden;
  width:100%;
}
.audio--libsyn a {
  background:rgba(255, 255, 255, 0.8);
  position:absolute;
  top:0;
  left:0;
  bottom:0;
  right:0;
  width:1px;
  height:1px;
  overflow:hidden;
  text-align:center;
}
.audio--libsyn a:focus {
  width:100%;
  height:100%;
}
.audio--libsyn a span {
  display:block;
  position:relative;
  top:50%;
  -webkit-transform:translateY(-50%);
  -ms-transform:translateY(-50%);
  transform:translateY(-50%);
}
.ui-card--flex {
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-orient:horizontal;
  -webkit-box-direction:normal;
  -ms-flex-flow:row wrap;
  flex-flow:row wrap;
}
.ui-card--flex .ui-card {
  box-sizing:border-box;
  display:inline-block;
  line-height:1.3em;
  margin:0 0 2.5em;
  -webkit-transition:all 150ms;
  transition:all 150ms;
}
.ui-card--flex.ui-card--flex-third .ui-card {
  margin-left:1.5%;
  margin-right:1.5%;
  width:30.3%;
}
.no-flexbox .ui-card--flex .ui-card {
  vertical-align:top;
}
.no-flexbox .ui-card--flex.ui-card--flex-third .ui-card {
  margin-left:1.5%;
  margin-right:1.5%;
}
.ui-card--hoverable {
  background:#f7f7f7;
}
.ui-card--hoverable .ui-btn {
  display:none;
}
.ui-card.ui-card--hoverable:hover, .ui-card.ui-card--hoverable:focus {
  background:#1074BD;
}
.ui-card.ui-card--hoverable:hover time, .ui-card.ui-card--hoverable:focus time, .ui-card.ui-card--hoverable:hover .time, .ui-card.ui-card--hoverable:focus .time, .ui-card.ui-card--hoverable:hover .ui-card__body p, .ui-card.ui-card--hoverable:focus .ui-card__body p {
  color:rgba(247, 247, 247, 0.6);
}
.ui-card.ui-card--hoverable:hover h1, .ui-card.ui-card--hoverable:hover h2, .ui-card.ui-card--hoverable:hover h3, .ui-card.ui-card--hoverable:hover h4, .ui-card.ui-card--hoverable:hover h5, .ui-card.ui-card--hoverable:hover h6, .ui-card.ui-card--hoverable:focus h1, .ui-card.ui-card--hoverable:focus h2, .ui-card.ui-card--hoverable:focus h3, .ui-card.ui-card--hoverable:focus h4, .ui-card.ui-card--hoverable:focus h5, .ui-card.ui-card--hoverable:focus h6 {
  color:#f7f7f7;
}
.ui-card.ui-card--hoverable:hover .ui-btn, .ui-card.ui-card--hoverable:focus .ui-btn {
  background:#fff;
  border-color:1px solid #0099ff;
  color:#0099ff;
  display:inline-block;
}
.ui-card.ui-card--hoverable:hover .ui-btn:hover, .ui-card.ui-card--hoverable:focus .ui-btn:focus {
  background:#0099ff;
  border-color:1px solid #0099ff;
  color:#fff;
}
.touch .ui-card.ui-card--hoverable .ui-btn {
  display:inline-block;
}
[data-theme="indigo-studio"] .ui-card.ui-card--hoverable:hover, [data-theme="indigo-studio"] .ui-card.ui-card--hoverable:focus {
  background:#262851;
  color:#b4bad1;
}
[data-theme="indigo-studio"] .ui-card.ui-card--hoverable:hover .ui-btn, [data-theme="indigo-studio"] .ui-card.ui-card--hoverable:focus .ui-btn {
  background:#3f51b5;
  border-color:#3f51b5;
  color:#ececee;
}
[data-theme="indigo-studio"] .ui-card.ui-card--hoverable:hover .ui-btn:hover, [data-theme="indigo-studio"] .ui-card.ui-card--hoverable:focus .ui-btn:focus {
  background:#fff;
  border-color:#3f51b5;
  color:#3f51b5;
}
.ui-card--icon-list {
  width:100%;
  margin-bottom:50px;
  border-radius:25px;
  background-color:white;
  text-align:left;
  padding:2.5em;
  -webkit-box-shadow:0 0 15px 5px #0000001f;
  box-shadow:0 0 15px 5px #0000001f;
}
.ui-card--icon-list h3 {
  font-weight:bold;
  margin-bottom:15px;
}
.ui-card--icon-list h3 img {
  vertical-align:middle;
  width:36px;
  margin-right:10px;
}
@media only screen and (max-width:767px) {
  .ui-card--icon-list {
    margin: 15px;
  }
  .ui-card--icon-list h3.text--h3 {
    font-size: 1.8em;
  }
}
.ui-card--block-border {
  padding:0 50px;
  border:3px solid var(--color-port-gore);
  border-radius:20px;
}
@media only screen and (max-width:767px) {
  .ui-card--block-border {
    width: auto;
    margin: 0 5%;
    margin-bottom: 50px;
  }
}
.toolbar--share {}
.toolbar--share a {
  display:inline-block;
  -webkit-transition:-webkit-transform linear 200ms;
  transition:-webkit-transform linear 200ms;
  transition:transform linear 200ms;
  transition:transform linear 200ms, -webkit-transform linear 200ms;
}
.toolbar--share a svg {
  box-shadow:1px 10px 1px rgba(0, 0, 0, 0.15);
}
.toolbar--share a svg, .toolbar--share a img {
  padding:10px 0 0;
}
.toolbar--share a:hover, .toolbar--share a:focus {
  -webkit-transform:scale(1.1);
  -ms-transform:scale(1.1);
  transform:scale(1.1);
}
.toolbar--share--sm a {
  width:28px;
}
.toolbar--share--centered {
  text-align:center;
}
.ui-card--podcast .toolbar--share {
  position:absolute;
  bottom:15px;
  left:0;
  right:0;
}
.menu__layout {
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-orient:horizontal;
  -webkit-box-direction:normal;
  -ms-flex-direction:row;
  flex-direction:row;
  -ms-flex-wrap:wrap;
  flex-wrap:wrap;
}
.menu__layout>.column-block {
  -webkit-box-flex:1;
  -ms-flex:1 1 auto;
  flex:1 1 auto;
  margin-bottom:0 !important;
}
.menu__layout>.column-block:first-child {
  width:24.5%;
}
.menu__layout>.column-block:last-child {
  width:70%;
}
.menu__layout>.column-block:first-child .menu {
  padding-top:40px;
  padding-bottom:50px;
}
.menu__layout>.column-block:first-child .menu__fixed-container .menu {
  box-sizing:border-box;
  padding-bottom:0;
  padding-top:0;
}
.menu__layout>.column-block:first-child .menu__fixed-container .menu .menu__list {
  padding-top:40px;
}
.no-flexbox .menu__layout {
  display:table;
}
.no-flexbox .menu__layout>.column-block {
  display:table-cell;
}
.menu {
  font-size:16px;
}
.menu ul {
  list-style:none;
  line-height:1.2em;
  margin:0;
  padding:0;
}
.menu li {
  position:relative;
  margin-bottom:0;
}
.menu a, .menu .menu__category {
  color:#666;
  display:block;
  padding-top:0.75em;
  padding-bottom:0.75em;
  text-decoration:none;
}
.menu .menu__category.menu__toggle {
  cursor:pointer;
}
.menu a:hover, .menu .menu__category.menu__toggle:hover, .menu a:focus, .menu .menu__category.menu__toggle:focus {
  color:#0099ff;
}
.menu .menu__sub {
  margin-top:1px;
  margin-bottom:1px!important;
}
.menu .menu__sub li:last-child {
  margin-bottom:20px !important;
}
.menu .menu__sub a {
  font-weight:normal;
}
.menu .menu__sub.emphasize a, .menu .menu__sub a.emphasize {
  font-weight:bold;
}
.menu__category {
  font-weight:bold;
  position:relative;
}
.menu__text {
  display:inline-block;
}
.menu__fixed-container {}
.menu__fixed-container .menu {
  padding-bottom:0;
  overflow-y:auto;
  width:290px;
}
.no-flexbox .menu__fixed-container {
  position:static !important;
  top:inherit !important;
}
.no-flexbox .menu__fixed-container .menu {
  height:auto !important;
  overflow:visible !important;
}
.menu__close {
  display:block;
  height:1px;
  width:1px;
  position:absolute;
  top:50%;
  right:10px;
}
.menu__close:before, .menu__close:after {
  background:#ccc;
  content:'';
  display:block;
  width:15px;
  height:2px;
  position:absolute;
  right:0;
  -webkit-transition:0.3s;
  transition:0.3s;
}
.menu__close:before {
  -webkit-transform:rotate(220deg);
  -ms-transform:rotate(220deg);
  transform:rotate(220deg);
  width:8px;
  right:5px;
}
.menu__close:after {
  -webkit-transform:rotate(-220deg);
  -ms-transform:rotate(-220deg);
  transform:rotate(-220deg);
  width:8px;
  right:1px;
}
.menu__mobile-toggle:hover .menu__close:before, .menu__mobile-toggle:hover .menu__close:after, .menu__mobile-toggle:focus .menu__close:before, .menu__mobile-toggle:focus .menu__close:after {
  background:#0099ff;
}
.menu__mobile-toggle.menu__link--active .menu__close:before {
  -webkit-transform:rotate(45deg);
  -ms-transform:rotate(45deg);
  transform:rotate(45deg);
  width:15px;
  right:0;
}
.menu__mobile-toggle.menu__link--active .menu__close:after {
  -webkit-transform:rotate(-45deg);
  -ms-transform:rotate(-45deg);
  transform:rotate(-45deg);
  width:15px;
  right:0;
}
.menu__mobile-toggle {
  border:1px solid #ccc;
  color:#666;
  display:none;
  padding:1em;
  background:#fff;
  position:relative;
  text-decoration:none;
}
.bg--dark .menu a {
  color:#b4b4b4;
}
.bg--dark .menu .menu__category {
  color:#fff;
}
.bg--dark .menu a:hover, .bg--dark .menu .menu__category.menu__toggle:hover, .bg--dark .menu a:focus, .bg--dark .menu .menu__category.menu__toggle:focus {
  color:#0099ff;
}
.no-flexbox .menu.menu--mobilize .menu__item:last-child {
  padding-bottom:30px;
}
.menu--collapsible a:after, .menu--dot-hover a:after, .menu--collapsible .menu__category:after {
  background:transparent;
  content:'';
  display:block;
  width:6px;
  height:6px;
  position:absolute;
  top:50%;
  right:10px;
}
.menu--collapsible .menu__sub {
  display:none;
}
.menu--collapsible.menu--collapsible-opened .menu__sub {
  display:block;
}
.menu__toggle, .menu__toggle:after {
  -webkit-transition:-webkit-transform 200ms ease-in-out;
  transition:-webkit-transform 200ms ease-in-out;
  transition:transform 200ms ease-in-out;
  transition:transform 200ms ease-in-out, -webkit-transform 200ms ease-in-out;
}
.menu__toggle:after {
  border-top:2px solid #ccc;
  border-left:2px solid #ccc;
  -webkit-transform:translateY(-60%) rotate(225deg);
  -ms-transform:translateY(-60%) rotate(225deg);
  transform:translateY(-60%) rotate(225deg);
}
.menu__toggle:hover:after, .menu__toggle:focus:after {
  border-top:2px solid #0099ff;
  border-left:2px solid #0099ff;
}
.menu__toggle--collapsed:after {
  -webkit-transform:translateY(-60%) rotate(315deg);
  -ms-transform:translateY(-60%) rotate(315deg);
  transform:translateY(-60%) rotate(315deg);
}
.menu--dot-hover .menu__link:after {
  border-radius:50%;
  -webkit-transform:translateY(-50%);
  -ms-transform:translateY(-50%);
  transform:translateY(-50%);
}
.menu--dot-hover .menu__link:hover:after, .menu--dot-hover .menu__link:focus:after {
  background:#ccc;
}
.menu--collapsible-disable .menu__category:after {
  display:none;
}
.menu--dot-hover.menu--collapsible-disable .menu__category.menu__link--active:after {
  background:#0099ff;
  border:none;
  border-radius:50%;
  display:block;
  -webkit-transform:translateY(-50%);
  -ms-transform:translateY(-50%);
  transform:translateY(-50%);
}
.bg--dark .menu__text--deemphasize, .menu__text--deemphasize {
  color:#aaa;
}
.bg--dark .menu__text--deemphasize {
  color:#f7f7f7;
}
.menu__link--active {
  background:#fff;
  color:#0099ff;
}
.menu a.menu__link.menu__link--active:after {
  background:#0099ff;
}
.menu__mobile-toggle.menu__link--active {
  background:#fff;
  border-color:#0099ff;
}
.menu--link-azure-radiance a {
  color:#0099ff;
}
.menu--bordered-left .menu__item {
  border-left:2px solid #0099ff;
  padding-left:20px;
}
.menu--hpad-25 .menu__category, .menu--hpad-25 a {
  padding-left:25px;
  padding-right:25px;
}
.menu--lg {
  font-size:1.25rem;
}
.menu--md {
  font-size:1.125rem;
}
.menu--sm {
  font-size:0.875rem;
}
.menu--xs {
  font-size:0.75rem;
}
.menu--vpad-lg .menu__text, .menu--vpad-lg a, .menu--vpad-lg .menu__category {
  padding-top:1.25em;
  padding-bottom:1.25em;
}
.menu--vpad-md .menu__text, .menu--vpad-md a, .menu--vpad-md .menu__category {
  padding-top:1em;
  padding-bottom:1em;
}
.menu--vpad-sm .menu__text, .menu--vpad-sm a, .menu--vpad-sm .menu__category {
  padding-top:0.5em;
  padding-bottom:0.5em;
}
.menu--vpad-xs .menu__text, .menu--vpad-xs a, .menu--vpad-xs .menu__category {
  padding-top:0.25em;
  padding-bottom:0.25em;
}
.ui-accordion {}
.ui-accordion .ui-accordion__meta-text {
  font-size:0.688rem;
}
.ui-accordion[] .ui-accordion-header::before, .ui-accordion .ui-accordion__header::before {
  position:absolute;
}
.ui-accordion .ui-accordion-header, .ui-accordion .ui-accordion__header {
  border-color:#ccc;
  margin-top:2px;
}
.ui-accordion .ui-accordion-content, .ui-accordion .ui-accordion__content {
  border-color:#ccc;
}
.ui-accordion[data-accordion-icon="arrows"] .ui-accordion-header::before, .ui-accordion[data-accordion-icon="arrows"] .ui-accordion__header::before {
  content:'\e876';
  font-size:30px;
  height:auto;
}
.ui-accordion[data-accordion-icon="arrows"] .ui-accordion-header.ui-accordion-header-active::before, .ui-accordion[data-accordion-icon="arrows"] .ui-accordion__header.ui-accordion-header-active::before {
  content:'\e879';
}
.ui-accordion[data-accordion-icon="plus-close"] .ui-accordion-header::before, .ui-accordion[data-accordion-icon="plus-close"] .ui-accordion__header::before {
  content:'\e816';
  height:auto;
}
.ui-accordion[data-accordion-icon="plus-close"] .ui-accordion-header.ui-accordion-header-active::before, .ui-accordion[data-accordion-icon="plus-close"] .ui-accordion__header.ui-accordion-header-active::before {
  content:'\e813';
}
.ui-accordion[data-accordion-style="clean"] .ui-accordion-header::before, .ui-accordion[data-accordion-style="clean"] .ui-accordion__header::before {
  font-size:25px;
  position:absolute;
  left:10px;
  top:50%;
  -webkit-transform:translateY(-50%);
  -ms-transform:translateY(-50%);
  transform:translateY(-50%);
  width:30px;
  height:25px;
}
.ui-accordion[data-accordion-style="clean"] {}
.ui-accordion[data-accordion-style="clean"] .ui-accordion-header, .ui-accordion[data-accordion-style="clean"] .ui-accordion__header {
  border-color:#aaa;
  border-style:solid;
  border-width:1px 0 0;
  box-shadow:none;
  font-size:1.125rem;
  font-weight:400;
  letter-spacing:normal;
  margin-top:0 !important;
  overflow:hidden;
  padding:15px 0;
  text-transform:none;
  -webkit-transition:background 250ms linear;
  transition:background 250ms linear;
}
.ui-accordion[data-accordion-style="clean"] .ui-accordion-header:hover, .ui-accordion[data-accordion-style="clean"] .ui-accordion-header:focus, .ui-accordion[data-accordion-style="clean"] .ui-accordion__header:hover, .ui-accordion[data-accordion-style="clean"] .ui-accordion__header:focus {
  background:#f5f5f5;
  cursor:pointer;
}
.ui-accordion[data-accordion-style="clean"] .ui-accordion-header:first-child, .ui-accordion[data-accordion-style="clean"] .ui-accordion__header:first-child {
  border-top:0;
  margin-top:0 !important;
}
.ui-accordion[data-accordion-style="clean"] .ui-accordion-content, .ui-accordion[data-accordion-style="clean"] .ui-accordion__content {
  box-shadow:none;
  border:none;
  padding:25px;
}
.ui-accordion[data-accordion-style="clean"] .ui-accordion-header, .ui-accordion[data-accordion-style="clean"] .ui-accordion__header {
  padding-left:40px !important;
  padding-right:80px !important;
}
.no-flexbox .ui-accordion[data-accordion-style*="clean"] .ui-accordion-header, .no-flexbox .ui-accordion[data-accordion-style*="clean"] .ui-accordion__header {
  display:block;
  padding-top:30px !important;
}
.ui-accordion[data-accordion-type="video"] {}
.ui-accordion[data-accordion-type="video"] .ui-accordion__meta-text {}
.ui-accordion[data-accordion-type="video"] .ui-accordion__header {
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-orient:vertical;
  -webkit-box-direction:normal;
  -ms-flex-direction:column;
  flex-direction:column;
}
.ui-accordion[data-accordion-type="video"] .ui-accordion-header::before {}
.ui-accordion[data-accordion-type="video"] .ui-accordion__header {
  padding-left:0 !important;
  padding-right:0 !important;
}
.ui-accordion[data-accordion-type="video"] .ui-accordion__header .ui-accordion__header-text {
  padding-left:40px;
  padding-right:80px;
  -webkit-box-ordinal-group:2;
  -ms-flex-order:1;
  order:1;
  display:block;
}
.ui-accordion[data-accordion-type="video"] .ui-accordion__header .ui-accordion__video-total {
  padding-left:40px;
  -webkit-box-ordinal-group:1;
  -ms-flex-order:0;
  order:0;
  display:block;
}
.ui-accordion[data-accordion-type="video"] .ui-accordion__header .ui-accordion__video-total-time {
  position:absolute;
  right:5px;
  top:50%;
  -webkit-transform:translateY(-50%);
  -ms-transform:translateY(-50%);
  transform:translateY(-50%);
}
.ui-accordion[data-accordion-type="video"] .ui-accordion__content {
  padding:0;
}
.ui-accordion[data-accordion-type="video"] .ui-accordion__content .ui-list[data-list-type="video-playlist"] {
  margin:10px 0 !important;
}
.ui-accordion[data-accordion-type="video"] .ui-accordion__content .ui-list[data-list-type="video-playlist"] li {
  padding-left:40px;
}
.no-flexbox .ui-accordion[data-accordion-type='video'] .ui-accordion__header .ui-accordion__header-text {
  display:block;
}
.no-flexbox .ui-accordion[data-accordion-type="video"] .ui-accordion__header .ui-accordion__video-total {
  position:absolute;
  left:0;
  top:15px;
}
@media only screen and (max-width:767px) {
  .ui-accordion[data-accordion-type="video"] .ui-accordion__header {
    font-size: 1.25rem;
  }
  .ui-accordion[data-accordion-type="video"] .ui-accordion__header .ui-accordion__header-text {
    padding-left: 40px;
  }
  .ui-accordion[data-accordion-type="video"] .ui-accordion__content .ui-list[data-list-type="video-playlist"] li {
    padding-left: 10px;
  }
}
.ui-accordion[data-accordion-theme="reportplus"] .ui-accordion__header, .ui-accordion[data-accordion-theme="reportplus"] .ui-accordion__header:hover, .ui-accordion[data-accordion-theme="reportplus"] .ui-accordion__header:focus {
  background:transparent;
}
.ui-accordion[data-accordion-theme="reportplus"] .ui-accordion__header::before {
  color:#b4b4b4;
}
.ui-accordion[data-accordion-theme="reportplus"] .ui-accordion__header:hover::before {
  color:#333;
}
.ui-accordion[data-accordion-theme="indigo-studio"] .ui-accordion__header {
  background:#3e87ce;
  color:#fff;
}
.ui-accordion[data-accordion-theme="indigo-studio"] .ui-accordion__header:hover, .ui-accordion[data-accordion-theme="indigo-studio"] .ui-accordion__header:focus {
  background:#3080ce;
  color:#fff;
}
.ui-accordion[data-accordion-theme="indigo-studio"] .ui-accordion__header {
  border-top:none;
  margin-top:3px !important;
}
.ui-accordion[data-accordion-theme="indigo-studio"] .ui-accordion__header::before {
  color:#fff;
  left:20px;
}
.ui-accordion[data-accordion-theme="indigo-studio"] .ui-accordion__header .ui-accordion__header-text {
  padding-left:60px;
  padding-right:100px;
}
.ui-accordion[data-accordion-theme="indigo-studio"] .ui-accordion__header .ui-accordion__video-total {
  padding-left:60px;
}
.ui-accordion[data-accordion-theme="indigo-studio"] .ui-accordion__header .ui-accordion__video-total-time {
  right:20px;
}
@media only screen and (max-width:767px) {
  .ui-accordion[data-accordion-theme="indigo-studio"] .ui-accordion__header::before {
    left: 10px;
  }
  .ui-accordion[data-accordion-theme="indigo-studio"] .ui-accordion__header .ui-accordion__header-text {
    padding-left: 40px;
    padding-right: 80px;
  }
  .ui-accordion[data-accordion-theme="indigo-studio"] .ui-accordion__header .ui-accordion__video-total {
    padding-left: 40px;
  }
  .ui-accordion[data-accordion-theme="indigo-studio"] .ui-accordion__header .ui-accordion__video-total-time {
    right: 10px;
  }
}
.features-hero {
  box-sizing:border-box;
  font-size:16px;
  position:relative;
  padding:60px 0;
  overflow:hidden;
  width:100%;
}
.features-hero h1, .features-hero h2, .features-hero h3, .features-hero h4, .features-hero h5, .features-hero h6 {
  margin:5px 0;
}
.features-hero h1, .features-hero .text--h1 {
  font-family:"aktiv-grotesk", "Helvetica Neue", "Segoe UI", Helvetica, Arial, sans-serif !important;
  font-weight:400;
}
.features-hero h3, .features-hero .text--h3 {
  font-family:"aktiv-grotesk-thin", "Helvetica Neue", "Segoe UI", Helvetica, Arial, sans-serif;
  font-size:200;
}
.features-hero .sub-headline, .features-hero .sub-headline--normal {
  margin-bottom:30px;
}
.features-hero__item {
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-orient:horizontal;
  -webkit-box-direction:normal;
  -ms-flex-direction:row;
  flex-direction:row;
  -ms-flex-wrap:nowrap;
  flex-wrap:nowrap;
}
.features-hero__content {
  -webkit-box-flex:0;
  -ms-flex:none;
  flex:none;
  -webkit-box-ordinal-group:2;
  -ms-flex-order:1;
  order:1;
  position:relative;
  z-index:1;
  width:50%;
}
.features-hero__image {
  -webkit-box-flex:0;
  -ms-flex:none;
  flex:none;
  -webkit-box-ordinal-group:2;
  -ms-flex-order:1;
  order:1;
  position:absolute;
  top:50%;
  right:0;
  z-index:0;
  -webkit-transform:translateY(-50%) translateX(40%);
  -ms-transform:translateY(-50%) translateX(40%);
  transform:translateY(-50%) translateX(40%);
  width:85%;
}
.features-hero__image img {
  width:100%;
}
.features-hero__cta>.ui-btn {
  margin-right:20px;
}
.features-hero__cta>.ui-btn:last-child {
  margin-right:0;
}
.features-hero--vpad-lg {
  padding:100px;
}
.features-hero--vpad-md {
  padding:80px;
}
.features-hero--vpad-sm {
  padding:40px;
}
.features-hero--vpad-xs {
  padding:20px;
}
.features-hero--vpad-none {
  padding-top:0;
  padding-bottom:0;
}
.features-hero--align-right {
  -webkit-box-pack:end;
  -ms-flex-pack:end;
  justify-content:flex-end;
}
.features-hero--align-right .features-hero__image {
  right:inherit;
  left:0;
  -webkit-transform:translateY(-50%) translateX(-50%);
  -ms-transform:translateY(-50%) translateX(-50%);
  transform:translateY(-50%) translateX(-50%);
}
.features-hero--align-left .features-hero__image {
  right:auto;
  left:0;
  -webkit-transform:translateY(-50%) translateX(-45%);
  -ms-transform:translateY(-50%) translateX(-45%);
  transform:translateY(-50%) translateX(-45%);
}
.features-hero--align-left .features-hero__content {
  left:50%;
}
.features-hero--secondary-nav {
  margin-top:-55px;
  padding-top:115px;
}
.features-hero--secondary-nav.features-hero--vpad-lg {
  padding-top:155px;
}
.features-hero--secondary-nav.features-hero--vpad-md {
  padding-top:135px;
}
.features-hero--secondary-nav.features-hero--vpad-sm {
  padding-top:95px;
}
.features-hero--secondary-nav.features-hero--vpad-xs {
  padding-top:75px;
}
.features-hero--three-fourth .features-hero__content {
  width:74%;
}
.features-hero--three-fourth .features-hero__image {
  -webkit-transform:translateY(-50%) translateX(65%);
  -ms-transform:translateY(-50%) translateX(65%);
  transform:translateY(-50%) translateX(65%);
}
.features-hero--home-page .features-hero__content {
  width:85%;
}
.features-hero--home-page .features-hero__image {
  -webkit-transform:translateY(-50%) translateX(72%);
  -ms-transform:translateY(-50%) translateX(72%);
  transform:translateY(-50%) translateX(72%);
}
.features-hero--image-md .features-hero__image {
  -webkit-transform:translateY(-50%) translateX(80%) scale(1.25);
  -ms-transform:translateY(-50%) translateX(80%) scale(1.25);
  transform:translateY(-50%) translateX(80%) scale(1.25);
}
.features-hero--biz-audience {
  background-image:url("https://static.infragistics.com/marketing/Website/products/shareplus/business-teams/colors-960.png");
  background-position:bottom right;
  background-repeat:no-repeat;
  background-size:50% 100%;
}
.features-hero--biz-audience .features-hero__content {
  width:50%;
}
.features-hero--biz-audience .features-hero__image {
  width:74%;
  -webkit-transform:translateY(-50%) translateX(35%);
  -ms-transform:translateY(-50%) translateX(35%);
  transform:translateY(-50%) translateX(35%);
}
.features-hero--biz-teams .features-hero__image {
  -webkit-transform:translateY(-50%) translateX(45%);
  -ms-transform:translateY(-50%) translateX(45%);
  transform:translateY(-50%) translateX(45%);
  width:80%;
}
.features-hero.features-hero--trial {
  padding-top:0;
  padding-bottom:0;
}
.features-hero.features-hero--trial .features-hero__content {
  box-sizing:border-box;
  padding:30px 10px;
  width:70%;
}
.features-hero.features-hero--trial .features-hero__form {
  background:#134359;
  box-sizing:border-box;
  box-shadow:-4px 0px 21px 6px rgba(0, 0, 0, 0.25);
  display:block;
  margin-left:2%;
  -webkit-box-ordinal-group:3;
  -ms-flex-order:2;
  order:2;
  padding:15px;
  position:relative;
  right:0;
  top:0;
  width:28%;
}
.no-flexbox .features-hero--align-right .features-hero__image {
  right:0;
  left:inherit;
  -webkit-transform:translateY(-50%) translateX(50%);
  -ms-transform:translateY(-50%) translateX(50%);
  transform:translateY(-50%) translateX(50%);
}
.no-flexbox .features-hero .features-block.features-block--list.features-block--align-left {
  border-spacing:0;
}
.no-flexbox .features-hero .features-block.features-block--list.features-block--align-left .features-block__item {
  padding:40px 40px 40px 0;
}
.no-flexbox .features-hero--trial .features-hero__content, .no-flexbox .features-hero--trial .features-hero__form {
  display:table-cell;
}
.no-flexbox .features-hero--trial .features-hero__form {
  vertical-align:top;
}
.features-block {
  display:block;
  font-size:16px;
}
.features-block * {
  box-sizing:border-box;
}
.features-block h1, .features-block h2, .features-block h3, .features-block h4, .features-block h5, .features-block h6 {
  margin-top:0;
}
.features-block img {
  width:100%;
}
.features-block img.width--auto {
  width:auto;
}
.features-block hr {
  margin:0;
}
.features-block__item {
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-orient:horizontal;
  -webkit-box-direction:normal;
  -ms-flex-direction:row;
  flex-direction:row;
  -ms-flex-wrap:wrap;
  flex-wrap:wrap;
  padding:40px 0;
}
.features-block__image {
  -webkit-box-flex:1;
  -ms-flex:1 1 auto;
  flex:1 1 auto;
  -webkit-box-ordinal-group:2;
  -ms-flex-order:1;
  order:1;
  padding:0 4%;
  width:50%;
}
.features-block__content {
  -webkit-box-flex:1;
  -ms-flex:1 1 auto;
  flex:1 1 auto;
  -webkit-box-ordinal-group:2;
  -ms-flex-order:1;
  order:1;
  width:50%;
}
.features-block__content img {
  padding:15px 0;
}
.features-block__img--oversize {
  width:125%;
}
.features-block--list {
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -ms-flex-wrap:wrap;
  flex-wrap:wrap;
}
.features-block--list .features-block__item {
  -webkit-box-flex:1;
  -ms-flex:1 1 auto;
  flex:1 1 auto;
  padding:40px 0;
  min-height:1px;
}
.features-block__content--full-width {
  display:block;
  width:100%;
}
.features-block__item--half {
  width:50%;
}
.features-block__item--third {
  width:33%;
}
.features-block__item--fourth {
  width:25%;
}
.features-block--vpad-none .features-block__item {
  padding:0;
}
.features-block--vpad-20 .features-block__item {
  padding:20px 0;
}
.features-block--vpad-40 .features-block__item {
  padding:40px 0;
}
.features-block--vpad-60 .features-block__item {
  padding:60px 0;
}
.features-block--vpad-80 .features-block__item {
  padding:80px 0;
}
.features-block--align-top {
  -webkit-box-align:start;
  -ms-flex-align:start;
  align-items:flex-start;
}
.features-block--align-center {
  -webkit-box-align:center;
  -ms-flex-align:center;
  align-items:center;
}
.features-block--align-stretch {
  -webkit-box-align:stretch;
  -ms-flex-align:stretch;
  align-items:stretch;
}
.features-block--align-items-center {
  justify-content:center
}
.features-block__image--left {
  -webkit-box-ordinal-group:0;
  -ms-flex-order:-1;
  order:-1;
  padding-left:0;
}
.features-block__image--right {
  -webkit-box-ordinal-group:3;
  -ms-flex-order:2;
  order:2;
  padding-right:0;
}
.features-block--list .features-block__item--half {
  margin-left:5%;
  width:47.5%;
}
.features-block--list .features-block__item--two-third {
  margin-left:5%;
  width:65%;
}
.features-block--list .features-block__item--third {
  margin-left:5%;
  width:30%;
}
.features-block--list .features-block__item--fourth {
  margin-left:5%;
  width:21.25%;
}
.features-block--list .features-block__item--three-fourth {
  margin-left:5%;
  width:73.75%;
}
.features-block--list .features-block__item--fifth {
  margin-left:5%;
  width:16%;
}
.features-block--list .features-block__item:first-child, .features-block--list .features-block__item--half:nth-child(2n+1), .features-block--list .features-block__item--third:nth-child(3n+1), .features-block--list .features-block__item--fourth:nth-child(4n+1), .features-block--list .features-block__item--fourth:nth-child(5n+1) .features-block--list-equal-columns .features-block__item--half:nth-child(2n+1), .features-block--list-equal-columns .features-block__item--third:nth-child(3n+1), .features-block--list-equal-columns .features-block__item--fourth:nth-child(4n+1), .features-block--list-equal-columns .features-block__item--fourth:nth-child(5n+1) {
  margin-left:0;
}
.features-block--list-equal-columns .features-block__item--half {
  max-width:47.5%;
}
.features-block--list-equal-columns .features-block__item--two-third {
  max-width:65%;
}
.features-block--list-equal-columns .features-block__item--third {
  max-width:30%;
}
.features-block--list-equal-columns .features-block__item--fourth {
  max-width:21.25%;
}
.features-block--list-equal-columns .features-block__item--three-fourth {
  max-width:73.75%;
}
.features-block--list-equal-columns .features-block__item--fifth {
  max-width:16%;
}
.features-block__item.features-block--border-left, .features-block--list .features-block__item.features-block--border-left {
  border-left:1px solid #0099ff;
  padding-top:0;
  padding-bottom:0;
  padding-left:20px;
  margin-bottom:60px;
}
.features-block__item.features-block--border-left.features-block--border-thick {
  border-left-width:3px;
}
.features-block__item.features-block--border-left.features-block--border-white {
  border-left-color:#fff;
}
.features-block__item.features-block--border-left.features-block--border-sushi {
  border-left-color:#8bc541;
}
.features-block__item.features-block--border-left.features-block--border-milano-red {
  border-left-color:#bf2602;
}
.features-block--icon {
  position:relative;
}
.features-block__icon {
  position:absolute;
}
.features-block--icon.features-block--icon--left {
  padding-left:60px;
}
.features-block--icon.features-block--icon--left .features-block__icon {
  width:40px;
  left:0;
}
.features-block__item--full.features-block--border-left.features-block--icon {
  margin-left:12%;
  width:88%;
  max-width:88%;
}
.features-block__item--half.features-block--border-left.features-block--icon {
  margin-left:12%;
  width:38%;
}
.features-block--border-left .features-block__icon {
  left:-60px;
  top:50%;
  -webkit-transform:translateY(-50%);
  -ms-transform:translateY(-50%);
  transform:translateY(-50%);
}
.features-block--border-left.features-block--icon-md .features-block__icon {
  left:-85px;
  width:75px;
  max-width:75px;
}
.features-block--image-align-bottom.features-block__item--third .features-block__content {
  padding-bottom:260px;
  position:relative;
}
.features-block--image-align-bottom.features-block__item--third .features-block__content img {
  position:absolute;
  bottom:0;
}
.features-block__item.features-block--separator {
  border-left:1px solid #ccc;
  padding-left:2.5%;
  padding-right:0;
  margin-left:0;
}
.features-block__item.features-block--separator-azure-radiance {
  border-color:#0099ff;
}
.features-block__item.features-block--separator-dove-gray {
  border-color:#666;
}
.features-block--list .features-block__item.features-block--separator:first-child {
  border-left:none;
  padding-left:0;
  padding-right:2.5%;
  margin-left:0;
}
.features-block--list .features-block__item.features-block--separator.features-block--cta .ui-cta, .features-block--list .features-block__item.features-block--separator.features-block--cta .ui-btn {
  left:0;
}
.features-block__item.features-block--cta {
  position:relative;
  padding-bottom:60px;
}
.features-block__item.features-block--cta.features-block--cta-pad-sm {
  padding-bottom:30px;
}
.features-block__item.features-block--cta .ui-cta, .features-block__item.features-block--cta .ui-btn {
  position:absolute;
  bottom:10px;
}
.text--align-center .features-block__item.features-block--cta .ui-cta, .text--align-center .features-block__item.features-block--cta .ui-btn {
  left:50%;
  -webkit-transform:translateX(-50%);
  -ms-transform:translateX(-50%);
  transform:translateX(-50%);
}
.features-block__item.features-block--border-left.features-block--cta, .features-block--list .features-block__item.features-block--border-left.features-block--cta {
  padding-bottom:60px;
}
.features-block__item.features-block--cta-block {
  position:relative;
  padding-bottom:125px;
}
.features-block__item.features-block--cta-block .features-block__cta-block {
  position:absolute;
  bottom:0;
}
.text--align-center .features-block__item.features-block--cta-block .features-block__cta-block {
  left:0;
  -webkit-transform:translateX(50%);
  -ms-transform:translateX(50%);
  transform:translateX(50%);
}
.features-block__item.features-block--border-left.features-block--cta-block, .features-block--list .features-block__item.features-block--border-left.features-block--cta-block {
  padding-bottom:125px;
}
.features-block--cta-block .ui-cta, .features-block--cta-block .ui-btn {
  margin:5px;
}
.features-block__item.features-block--cta-block-pad-sm {
  padding-bottom:80px;
}
.features-block__item.features-block--vpad10 {
  padding:10px 0px;
}
.features-block__item.features-block--mar-sm {
  margin-left:2%;
}
.features-block__item--half.features-block--mar-sm {
  width:49%;
  max-width:49%;
}
.features-block__item--third.features-block--mar-sm {
  width:32%;
  max-width:32%;
}
.features-block__item--fourth.features-block--mar-sm {
  width:23.5%;
  max-width:23.5%;
}
.features-block__item--fifth.features-block--mar-sm {
  width:18.4%;
  max-width:18.4%;
}
.features-block--mt-neg-100 {
  margin-top:-100px;
}
.features-block--mt-neg-150 {
  margin-top:-150px;
}
.features-block--mt-pos-100 {
  margin-top:100px;
}
.features-block--mt-pos-150 {
  margin-top:150px;
}
.features-block--mt-neg-250 {
  margin-top:-250px;
}
.features-block--mt-pos-250 {
  margin-top:250px;
}
.features-block--mt-neg-500 {
  margin-top:-500px;
}
.features-block--mt-pos-500 {
  margin-top:500px;
}
@media only screen and (max-width:1200px) {
  .features-block--mt-neg-100--lg {
    margin-top: -100px;
  }
  .features-block--mt-neg-150-lg {
    margin-top: -150px;
  }
  .features-block--mt-0--lg {
    margin-top: 0;
  }
  .features-block--mt-pos-50--lg {
    margin-top: 50px;
  }
  .features-block--mt-pos-100--lg {
    margin-top: 100px;
  }
  .features-block--mt-pos-150--lg {
    margin-top: 150px;
  }
  .features-block--mt-neg-250--lg {
    margin-top: -250px;
  }
  .features-block--mt-pos-250--lg {
    margin-top: 250px;
  }
  .features-block--mt-neg-500--lg {
    margin-top: -500px;
  }
  .features-block--mt-pos-500--lg {
    margin-top: 500px;
  }
}
@media only screen and (max-width:767px) {
  .features-block--mt-neg-100--md {
    margin-top: -100px;
  }
  .features-block--mt-neg-1005-md {
    margin-top: -150px;
  }
  .features-block--mt-0--md {
    margin-top: 0;
  }
  .features-block--mt-pos-50--md {
    margin-top: 50px;
  }
  .features-block--mt-pos-100--md {
    margin-top: 100px;
  }
  .features-block--mt-pos-150--md {
    margin-top: 150px;
  }
  .features-block--mt-neg-250--md {
    margin-top: -250px;
  }
  .features-block--mt-pos-250--md {
    margin-top: 250px;
  }
  .features-block--mt-neg-500--md {
    margin-top: -500px;
  }
  .features-block--mt-pos-500--md {
    margin-top: 500px;
  }
}
.features-block--corporate {}
.features-block--corporate .features-block__item {
  margin-left:10px;
  padding:0;
}
.features-block--corporate .features-block__item.features-block--corporate-details {
  margin-left:0;
  padding:25px;
  text-align:left;
}
.no-flexbox .features-block__image, .no-flexbox .features-block__content {
  display:table-cell;
  vertical-align:top;
}
.no-flexbox .features-block__content--full-width {
  display:block;
  width:100%;
}
.no-flexbox .features-block--align-center>div {
  vertical-align:middle;
}
.no-flexbox .features-block__image--right {
  padding:0 4% 0 0;
}
.no-flexbox .features-block--list {
  display:table;
  border-collapse:separate;
  border-spacing:15px 30px;
  width:100%;
}
.no-flexbox .features-block--list .features-block__item {
  display:table-cell;
  vertical-align:top;
}
.no-flexbox .features-block--list .features-block__item.features-block--align-center {
  vertical-align:middle;
}
.no-flexbox .features-block--list.features-block--icon-container {
  margin-left:5%;
  width:auto;
}
.no-flexbox .features-block__item--full.features-block--border-left.features-block--icon {
  padding-right:10%;
  width:85%;
  max-width:85%;
}
.no-flexbox .features-block__item--half.features-block--border-left.features-block--icon {
  padding-right:10%;
  width:35%;
}
.no-flexbox .features-block__item--full.features-block--border-left.features-block--icon, .no-flexbox .features-block__item--half.features-block--border-left.features-block--icon:last-child {
  padding-right:0;
}
[data-theme="indigo-studio"] .features-block--list .features-block__item--fifth {
  margin-left:1%;
  padding-top:0;
  width:19%
}
[data-theme="indigo-studio"] .features-block--list .features-block__item:first-child {
  margin-left:0;
}
[data-theme="indigo-studio"] .features-block--list .features-block__item .ui-card {
  margin-bottom:0;
}
.no-flexbox [data-theme="indigo-studio"] .features-block--list {
  border-spacing:5px 0;
}
@media only screen and (max-width:959px) and (min-width:768px) {
  [data-theme="indigo-studio"] .features-block--list .features-block__item--fifth {
    width: 32.6%;
    max-width: 100%;
  }
  [data-theme="indigo-studio"] .features-block--list .features-block__item--fifth:nth-child(2n+1) {
    margin-left: 1%;
  }
  [data-theme="indigo-studio"] .features-block--list .features-block__item--fifth:nth-child(3n+1) {
    margin-left: 0;
  }
}
@media only screen and (max-width:767px) {
  [data-theme="indigo-studio"] .features-block--list .features-block__item--fifth {
    margin-left: 0;
    width: 100%;
    max-width: 100%;
  }
}
.story-teaser {
  display:table-row;
  overflow:hidden;
}
.story-teaser__thumbnail, .story-teaser__datetime {
  display:table-cell;
  width:40%;
  padding-right:1em;
  vertical-align:top;
}
.story-teaser__thumbnail img {
  width:100%;
}
.story-teaser__content {
  display:table-cell;
  width:auto;
  padding-right:1em;
  vertical-align:top;
  padding-top:5px;
  padding-bottom:5px;
}
.story-teaser__content>* {
  margin-bottom:5px;
}
.story-teaser__headline-link, .story-teaser__headline-link:visited {
  color:#666;
}
.story-teaser__headline-link:hover, .story-teaser__headline-link:focus {
  color:#999;
  text-decoration:underline;
}
.story-teaser--border-left .story-teaser__content {
  padding-left:20px;
  border-left:1px solid #666;
}
.story-teaser--headline-list>div {
  padding-top:12px;
  padding-bottom:12px;
  vertical-align:middle;
}
.story-teaser--headline-list .story-teaser__datetime {
  color:#b4b4b4;
  width:70px;
}
.story-teaser--align-center>div {
  vertical-align:middle;
}
.tabs .ui-tabs-nav {}
.tabs .ui-tabs-nav li:first-child {
  border-left:none!important;
}
.tabs .ui-tabs-nav li {
  float:none;
  display:inline-block;
  vertical-align:bottom;
}
.tabs .ui-tabs-nav a {
  border:1px solid #666;
  color:#666;
}
.tabs .ui-tabs-nav .ui-state-default a:hover, .tabs .ui-tabs-nav .ui-state-default a:focus {
  border:1px solid #0099ff;
}
.tabs.ui-tabs .ui-tabs-nav .ui-state-active a {
  color:#0099ff;
  border:1px solid #666;
}
.tabs.ui-tabs .ui-tabs-nav .ui-state-active a:hover, .tabs.ui-tabs .ui-tabs-nav .ui-state-active a:focus {
  color:#0099ff;
  border:1px solid #0099ff;
}
.tabs--default .ui-tabs-nav {
  background:#f5f5f5;
  width:100%;
  width:calc(100% - 2px);
  border:1px solid rgb(222, 222, 222);
  padding:0;
}
.tabs--default .ui-tabs-nav .ui-state-default a, .tabs--default .ui-tabs-nav .ui-state-default a:focus {
  color:#555!important;
  border:1px solid transparent;
  border-color:transparent!important;
}
.tabs--default .ui-tabs-nav .ui-state-default a:hover {
  color:#0099ff!important;
}
.tabs--default.ui-tabs .ui-tabs-nav .ui-state-active a {
  background:transparent;
  color:#0099ff!important;
  border-bottom:1px solid #0099ff!important;
}
.tabs--default.ui-tabs .ui-tabs-nav .ui-state-active:focus a {
  border-color:#0099ff !important;
}
.tabs--default.ui-tabs .ui-tabs-panel {
  display:block;
  border-color:rgb(222, 222, 222);
  margin-top:-1px;
  padding:25px;
}
.tabs--buttons .ui-tabs-nav {
  position:relative;
  width:100%;
}
.tabs--buttons .ui-tabs-nav li {
  position:relative;
  z-index:1;
}
.tabs--buttons .ui-tabs-nav .ui-state-default a {
  color:#666!important;
  border:1px solid #b4b4b4;
  font-size:1rem;
  letter-spacing:normal;
  margin:0.5em;
  padding:0.75em 1.25em;
  text-transform:none;
  width:auto;
}
.tabs--buttons .ui-tabs-nav .ui-state-default a:hover, .tabs--buttons .ui-tabs-nav .ui-state-default a:focus {
  color:#0099ff!important;
}
.tabs--buttons.ui-tabs .ui-tabs-nav .ui-state-active a {
  background:transparent;
  color:#0099ff!important;
  border:1px solid #0099ff;
}
.tabs--buttons.ui-tabs .ui-tabs-nav .ui-state-active:focus a {
  border-color:#0099ff !important;
}
.ui-tabs .ui-tabs-nav.tabs__nav--tabfilter li a {
  font-size:0.75rem;
  font-weight:bold;
  letter-spacing:normal;
  text-transform:uppercase;
}
.tabs--default.ui-tabs .ui-tabs-nav.tabs__nav--tabfilter .ui-state-default a {
  border-bottom:3px solid transparent!important;
  padding-left:3rem;
  padding-right:3rem;
}
.tabs--default.ui-tabs .ui-tabs-nav.tabs__nav--tabfilter .ui-state-active a {
  color:#666 !important;
  border-bottom:3px solid #0099ff!important;
}
.tabs--folder .ui-tabs-nav {
  position:relative;
  width:100%;
}
.tabs--folder .ui-tabs-nav li {
  position:relative;
  z-index:1;
}
.tabs--folder .ui-tabs-nav:after {
  content:'';
  display:block;
  width:100%;
  height:0;
  border-bottom:1px solid #dedede;
  position:absolute;
  bottom:0;
  left:0;
  z-index:0;
}
.tabs--folder .ui-tabs-nav .ui-state-default a {
  background:#fff;
  border:1px solid #dedede;
  border-left:1px solid #dedede !important;
  color:#666;
  font-size:1em;
  letter-spacing:normal;
  text-transform:capitalize;
}
.tabs--folder .ui-tabs-nav .ui-state-default a:hover {
  background:#fff;
  border:1px solid #f5f5f5;
  border-left:1px solid #f5f5f5 !important;
}
.tabs--folder.ui-tabs .ui-tabs-nav .ui-state-active a, .tabs--folder.ui-tabs .ui-tabs-nav .ui-state-active a:focus {
  background:#fff;
  border-color:#dedede;
  border-bottom:1px solid transparent;
  color:#666;
}
.tabs--folder.ui-tabs .ui-tabs-nav .ui-state-active a:hover {
  background:#fff;
  border:1px solid #dedede;
  border-left:1px solid #dedede !important;
  border-bottom:1px solid transparent;
  color:#666;
  cursor:default;
}
.tabs--folder.ui-tabs .ui-tabs-nav .ui-state-active:focus a {
  border-color:#000 #000 transparent #000 !important;
  box-shadow:0 -4px 12px -3px rgba(0, 0, 0, 0.25);
}
.tabs--folder.tabs--folder-dark .tabs__panel-container {
  background:#f7f7f7;
}
.tabs--folder.tabs--folder-dark .ui-tabs-nav .ui-state-default a {
  background:#fbfbfb;
}
.tabs--folder.tabs--folder-dark .ui-tabs-nav .ui-state-default a:hover {
  background:#fff;
}
.tabs--folder.tabs--folder-dark.ui-tabs .ui-tabs-nav .ui-state-active a, .tabs--folder.tabs--folder-dark.ui-tabs .ui-tabs-nav .ui-state-active a:focus {
  background:#f7f7f7;
}
.tabs--folder.tabs--folder-dark.ui-tabs .ui-tabs-nav .ui-state-active a:hover {
  background:#f7f7f7;
}
.tabs--folder.tabs--folder-dark.ui-tabs .ui-tabs-nav .ui-state-active:focus a {
  color:#000;
  border-color:#000 #000 transparent #000 !important;
  box-shadow:0 -4px 12px -3px rgba(0, 0, 0, 0.25);
}
[class*="tabs--folder"].ui-tabs .ui-tabs-panel {
  display:block;
  border-color:#dedede;
  margin-top:-1px;
  padding:25px;
}
.tabs--folder.tabs--folder-azure-radiance-bg .ui-tabs-nav {
  background:#0099ff;
}
.tabs--folder.tabs--folder-azure-radiance-bg .ui-tabs-nav .ui-state-default a {
  background:#0099ff;
  border:1px solid #fff;
  border-left:1px solid #fff !important;
  color:#fff;
}
.tabs--folder.tabs--folder-azure-radiance-bg .ui-tabs-nav .ui-state-default a:hover {
  background:#008dea;
}
.tabs--folder.tabs--folder-azure-radiance-bg.ui-tabs .ui-tabs-nav .ui-state-active a, .tabs--folder.tabs--folder-azure-radiance-bg.ui-tabs .ui-tabs-nav .ui-state-active a:focus {
  background:#fff;
  color:#555;
}
.tabs--folder.tabs--folder-azure-radiance-bg.ui-tabs .ui-tabs-nav .ui-state-active a:hover {
  background:#fff;
}
.tabs--folder.tabs--folder-azure-radiance-bg.ui-tabs .ui-tabs-nav .ui-state-active:focus a {
  color:#0099ff;
  box-shadow:0 -4px 12px -3px rgba(0, 0, 0, 0.25);
}
.tabs__nav--centered.ui-tabs-nav, .tabs.tabs__nav--centered .ui-tabs-nav {
  border-left:none;
  text-align:center;
}
.tabs.tabs__nav--centered .ui-tabs-nav li, .tabs__nav--centered.ui-tabs-nav li {
  float:none;
  display:inline-block;
  vertical-align:bottom;
}
.tabs.tabs__nav--centered .ui-tabs-nav li:first-child, .tabs__nav--centered.ui-tabs-nav li:first-child {
  border-left:none!important;
}
.tabs-nav--items-hmar-sm .ui-tabs-nav a {
  margin:0 5px;
}
.tabs-nav--items-min-width-md .ui-tabs-nav a {
  min-width:150px;
}
.tabs__panel--zero-padding .ui-tabs-panel {
  padding:0;
}
.tabs__panel--zero-border .ui-tabs-panel {
  border:none;
}
.ui-tooltip--click {
  background:#f7f7f7;
  border:2px solid #b4b4b4!important;
  box-shadow:none;
  border-radius:0;
  color:#666;
  display:block;
  font-size:13px;
  line-height:1.3em;
  padding:10px;
  z-index:1050;
  max-width:250px;
}
.ui-tooltip--click:after {
  content:'×';
  cursor:pointer;
  display:block;
  font-size:20px;
  position:absolute;
  top:5px;
  right:5px;
}
.ui-tooltip__arrow {
  border-top:10px solid #b4b4b4;
  border-right:15px solid transparent;
  border-left:15px solid transparent;
  display:block;
  margin-left:-10px;
  position:absolute;
  left:50%;
  bottom:-10px;
  width:0;
  height:0;
}
.ui-tooltip__arrow:after {
  border-top:10px solid #f7f7f7;
  border-right:15px solid transparent;
  border-left:15px solid transparent;
  content:'';
  display:block;
  margin-left:-15px;
  position:absolute;
  left:50%;
  bottom:2px;
  width:0;
  height:0;
}
.ui-tooltip__arrow.right {
  border-top:15px solid transparent;
  border-bottom:15px solid transparent;
  border-left:10px solid #b4b4b4;
  border-right:none;
  margin-left:0;
  margin-right:-10px;
  margin-top:-15px;
  top:50%;
  bottom:auto;
  left:auto;
  right:0;
}
.ui-tooltip__arrow.right:after {
  border-top:15px solid transparent;
  border-bottom:15px solid transparent;
  border-left:10px solid #f7f7f7;
  border-right:none;
  margin-left:0;
  margin-right:2px;
  margin-top:-15px;
  top:50%;
  bottom:auto;
  left:auto;
  right:0;
}
.ui-tooltip__arrow.left {
  border-top:15px solid transparent;
  border-bottom:15px solid transparent;
  border-right:10px solid #b4b4b4;
  border-left:none;
  margin-left:-10px;
  margin-top:-15px;
  top:50%;
  bottom:auto;
  left:0;
}
.ui-tooltip__arrow.left:after {
  border-top:15px solid transparent;
  border-bottom:15px solid transparent;
  border-right:10px solid #f7f7f7;
  border-left:none;
  margin-left:2px;
  margin-top:-15px;
  top:50%;
  bottom:auto;
  left:0;
}
.ui-tooltip__arrow.top {
  border-top:none;
  border-bottom:10px solid #b4b4b4;
  top:-10px;
  bottom:auto;
}
.ui-tooltip__arrow.top:after {
  border-top:none;
  border-bottom:10px solid #f7f7f7;
  top:2px;
  bottom:auto;
}
.flexslider {
  background:transparent;
  border:none;
  box-shadow:none;
  padding:0 60px 0;
}
.flexslider__container {
  overflow:hidden;
}
.flexslider__container .flexslider, .flexslider__container .flexslider-controls {
  max-width:100%;
}
.flexslider__container .flexslider ul {
  padding-left:0px;
}
.flexslider__container .flex-control-nav {
  bottom:0;
  position:relative;
}
.flexslider__container .flex-control-nav .flex-active {
  background:#0099ff !important;
  color:#fff;
}
.flexslider__container .flex-control-paging li a {
  overflow:hidden;
}
.flexslider__container .flex-control-paging li button {
  border:1px solid #fff;
  border-radius:50%;
  display:block;
  width:10px;
  height:10px;
  margin:0;
  padding:0;
  overflow:hidden;
  text-indent:-99999px;
}
.flex-direction-nav .flex-prev, .flex-direction-nav .flex-next {
  text-align:center;
}
.flex-direction-nav a.flex-prev::before, .flex-direction-nav button.flex-prev::before, .flex-direction-nav a.flex-next::before, .flex-direction-nav button.flex-next::before {
  font-family:"be-themes";
}
.flex-direction-nav a.flex-prev::before {
  content:'\e873';
}
.flex-direction-nav a.flex-next::before, .flex-direction-nav button.flex-next::before {
  content:'\e874';
}
.flexslider__container .flex-direction-nav a {
  font-size:2em;
  overflow:hidden;
}
.flexslider__container .flex-direction-nav button {
  position:absolute;
  top:50%;
  border:2px solid #0099ff;
  background:transparent;
  border-radius:50%;
  display:block;
  width:38px;
  height:38px;
  line-height:38px;
  font-size:2em;
  z-index:100;
  cursor:pointer;
  -webkit-transition:all .3s ease;
  transition:all .3s ease;
  overflow:hidden;
  opacity:0;
  padding:0;
  margin-top:-19px;
  box-sizing:content-box;
}
.flexslider__container .flex-direction-nav button:hover, .flexslider__container .flex-direction-nav button:focus {
  opacity:1;
}
.flexslider__container .flex-direction-nav button span {
  display:block;
  text-indent:-99999px;
}
.flexslider__container .flexslider .flex-prev {
  color:#0099ff;
  border-color:#0099ff;
  left:10px;
}
.flexslider__container .flexslider .flex-next {
  color:#0099ff;
  border-color:#0099ff;
  right:10px;
}
.flexslider__container .flexslider:hover .flex-prev {
  left:20px;
}
.flexslider__container .flexslider:hover .flex-next {
  right:20px;
}
.flexslider__container[data-padding="none"] .flexslider {
  padding:0;
}
.flexslider__container[data-hpadding="none"] .flexslider {
  padding-left:0;
  padding-right:0;
}
.flexslider--hmar {
  margin-left:60px;
  margin-right:60px;
}
.flexslider--nav-blocks .flex-control-paging li a, .flexslider--nav-blocks .flex-control-paging li button {
  background:transparent;
  border-radius:0;
  border:0;
  box-shadow:none;
  cursor:pointer;
  display:inline;
  width:auto;
  height:auto;
  font-size:0.875rem;
  padding:0.75em;
  text-indent:0;
}
.flexslider--nav-blocks .flex-control-nav li:last-child {
  border:none;
}
.flexslider--nav-blocks .flex-control-nav .flex-active {
  background:#0099ff !important;
  color:#fff;
}
.flexslider--nav-border-bottom .flex-control-nav .flex-active {
  background:transparent!important;
  border-bottom:1px solid #0099ff!important;
  color:#0099ff;
}
.flexslider--nav-border-bottom .flex-control-nav li a:focus, .flexslider--nav-border-bottom .flex-control-nav li button:focus {
  border-bottom:1px solid #0099ff;
  outline:none;
}
.bg--light .flexslider--nav-border-bottom .flex-control-paging li a, .bg--light .flexslider--nav-border-bottom .flex-control-paging li button {
  color:#666;
}
.bg--dark .flexslider--nav-border-bottom .flex-control-paging li a, .bg--dark .flexslider--nav-border-bottom .flex-control-paging li button {
  color:#e7e7e7;
}
.bg--light .flexslider--nav-border-bottom .flex-control-nav .flex-active, .bg--dark .flexslider--nav-border-bottom .flex-control-nav .flex-active {
  color:#0099ff;
  border-bottom:1px solid #0099ff!important;
}
.flexslider--nav-bordered .flex-control-paging li a, .flexslider--nav-bordered .flex-control-paging li button {
  border-color:#0099ff;
}
.flexslider--nav-top .flexslider>.flex-viewport, .flexslider--nav-bottom .flexslider>.flex-viewport, .flexslider--nav-top .flexslider>.flex-control-nav, .flexslider--nav-bottom .flexslider>.flex-control-nav, .flexslider--nav-top .flexslider>.flex-direction-nav, .flexslider--nav-bottom .flexslider>.flex-direction-nav {
  -webkit-box-ordinal-group:2;
  -ms-flex-order:1;
  order:1;
}
.flexslider--nav-top .flexslider, .flexslider--nav-bottom .flexslider {
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-orient:vertical;
  -webkit-box-direction:normal;
  -ms-flex-direction:column;
  flex-direction:column;
}
.flexslider--nav-top .flexslider .flex-control-nav {
  bottom:0;
  margin-bottom:15px;
  -webkit-box-ordinal-group:1;
  -ms-flex-order:0;
  order:0;
  opacity:1;
  width:100%;
}
.flexslider--nav-top .flexslider .flexslider-inner {
  padding:20px 60px 0;
}
.flexslider--nav-bottom .flexslider .flex-control-nav {
  margin-top:15px;
  opacity:1;
  width:100%;
  -webkit-box-ordinal-group:3;
  -ms-flex-order:2;
  order:2
}
.flexslider--nav-bottom .flexslider .flexslider-inner {
  padding:0 60px 20px;
}
.flex-direction-nav--show .flex-direction-nav {
  display:block;
}
.flex-direction-nav--hide .flex-direction-nav {
  display:none;
}
.flex-direction-nav--visible .flex-direction-nav button {
  opacity:1;
}
.flexslider--side-by-side--slider {
  position:relative;
  width:100%;
  max-width:2048px;
}
.flexslider--side-by-side--slider .flexslider {
  padding:0;
  z-index:1;
}
.flexslider--side-by-side--slider .slides>li {
  position:relative;
}
.flexslider--side-by-side--slider .container--story-text {
  line-height:normal;
}
.flexslider--side-by-side--slider .container--read-all {
  padding-bottom:60px;
}
.flexslider--side-by-side--slider .container--read-all a {
  text-decoration:none;
}
.flexslider--side-by-side--slider .slides img {
  object-fit:cover;
  width:100%;
  height:100%;
}
.flexslider--side-by-side--slider .flex-control-nav {
  position:absolute;
  bottom:60px;
  opacity:1;
  right:50%;
  width:50%;
  text-align:left;
  max-width:580px;
}
.flexslider__container .flex-control-paging li a {
  width:12px;
  height:12px;
  border:none;
  background:rgba(255, 255, 255, 0.75) !important;
}
.flexslider--side-by-side--slider .flex-control-nav .flex-active {
  background:#fff !important;
  color:#fff;
}
.flexslider--side-by-side--text {
  width:100%;
  max-width:580px;
}
[data-flexslider-theme="youtube-api"] .flexslider {
  padding:60px 0;
}
[data-flexslider-theme="youtube-api"] .slide-wrap {
  margin:20px
}
[data-flexslider-theme="youtube-api"] .flex-control-nav {
  opacity:1;
}
[data-flexslider-theme="youtube-api"] .flex-control-paging li a {
  background:#CCCCCC !important;
  width:12px;
  height:12px;
}
[data-flexslider-theme="youtube-api"] .flex-control-paging li a.flex-active {
  background:#AFAFAF !important;
}
@media only screen and (max-width:1200px) {
  .flexslider--side-by-side--slider .flex-control-nav {
    right: calc(50% - 1.25em);
  }
}
@media only screen and (max-width:767px) {
  .flexslider--side-by-side--slider .display--block-xs {
    display: block !important;
  }
  .flexslider--side-by-side--text {
    max-width: none;
  }
  .flexslider--side-by-side--slider .container--story-text {
    padding-bottom: 0;
  }
  .flexslider--side-by-side--slider .slides img {
    height: auto;
  }
  .flexslider--side-by-side--slider .container--read-all {
    padding-bottom: 0;
  }
  .flexslider--side-by-side--slider .flex-control-nav {
    opacity: 1;
    position: absolute;
    bottom: 0;
    right: auto;
    text-align: center;
    width: 100%;
    max-width: none;
    padding: 0;
    left: auto;
  }
}
.flexslider--support-refapp-slider .flexslider .slides ul li, .SliderImages ul li {
  display:inline-block;
  float:left;
  padding:0 5px;
  max-width:280px;
  width:100%;
}
.flexslider--feature-case-study .flexslider .flex-control-nav {
  display:block;
  position:absolute;
  bottom:35px !important;
  right:40px;
  opacity:1;
  width:auto;
  z-index:100;
}
.flexslider--feature-case-study .flexslider .flex-control-nav.flex-control-paging a, .flexslider--feature-case-study .flexslider .flex-control-nav.flex-control-paging button {
  background:#111 !important;
  border:1px solid #111;
  width:10px;
  height:10px;
}
.flexslider--feature-case-study .flexslider .flex-control-nav.flex-control-paging a.flex-active, .flexslider--feature-case-study .flexslider .flex-control-nav.flex-control-paging button.flex-active {
  background:#0099ff !important;
}
.flexslider--feature-case-study .flexslider--feature-case-study__img {
  position:absolute;
}
.flexslider--feature-case-study .flexslider--feature-case-study__container {
  box-sizing:border-box;
  margin:25px!important;
  padding:25px;
  min-height:450px;
}
.flexslider--feature-case-study .flex-control-nav li {
  margin:0 4px;
}
.flexslider--feature-case-study .flex-control-nav li button {
  background:#111;
  border:1px solid #111;
  border-radius:50%;
  cursor:pointer;
  display:block;
  width:15px;
  height:15px;
}
.flexslider--mosaic {
  position:relative;
  max-width:1160px;
}
.flexslider__mosaic-content {
  box-sizing:border-box;
  padding:20px;
  position:absolute;
  top:0;
  bottom:0;
  text-align:left;
  line-height:normal;
  width:35.2%;
  overflow:auto;
}
.flexslider__mosaic-content.bg--dark>* {
  color:#f5f5f5!important;
}
.flexslider__mosaic-content--left {
  left:0;
}
.flexslider--mosaic-values {}
.flexslider--mosaic-values .flexslider__mosaic-content {
  font-size:14px;
  bottom:initial;
  height:49.4%;
}
.flexslider--mosaic-locations {}
.flexslider--mosaic-locations .flexslider__mosaic-content {
  font-size:14px;
}
.flexslider--product-slider .flexslider, .flexslider--product-slider.flexslider--nav-top .flexslider {
  padding:0 60px 0;
}
.flexslider--product-slider.flexslider--nav-blocks .flex-control-paging li a, .flexslider--product-slider.flexslider--nav-blocks .flex-control-paging li button {
  padding:0.5em;
}
.flexslider--product-slider .flexslider__more {
  background:rgba(40, 40, 40, 0.75);
  color:#b4b4b4;
  padding:20px 60px 0;
}
[data-flexslider-theme="slider-left-nav"] .flexslider {
  padding:0;
  width:100%;
}
[data-flexslider-theme="slider-left-nav"] .flex-control-nav {
  opacity:1;
  padding-right:0;
  text-align:left;
}
[data-flexslider-theme="slider-left-nav"] .flex-control-nav__title {
  display:block;
  font-weight:bold;
}
[data-flexslider-theme="slider-left-nav"] .flex-control-nav__text {
  font-size:0.875rem;
  line-height:1.3em;
}
[data-flexslider-theme="slider-left-nav"] .flex-control-nav li {
  padding:5px 10px 5px 20px;
  margin:10px 0;
  border-left:2px solid transparent;
  cursor:pointer;
  display:block;
  opacity:0.6;
}
[data-flexslider-theme="slider-left-nav"] .flex-control-nav li:first-child {
  margin-top:0;
}
[data-flexslider-theme="slider-left-nav"] .flex-control-nav li:last-child {
  margin-bottom:0;
}
[data-flexslider-theme="slider-left-nav"] .flex-control-nav li.flex-control-nav--active, [data-flexslider-theme="slider-left-nav"] .flex-control-nav li:hover {
  opacity:1;
  border-color:#0096c0;
}
@media only screen and (max-width:960px) {
  [data-flexslider-theme="slider-left-nav"] .flex-control-nav li .flex-control-nav__text {
    display: none;
  }
}
@media only screen and (max-width:768px) {
  [data-flexslider-theme="slider-left-nav"] .flex-control-nav {
    text-align: center;
  }
  [data-flexslider-theme="slider-left-nav"] .flex-control-nav li {
    border-bottom: 2px solid transparent;
    border-top: none;
    border-left: none;
    display: inline-block;
    font-size: 0.875rem;
    margin: 0 auto;
    padding: 10px;
  }
}
@media screen and (-ms-high-contrast:active), screen and (-ms-high-contrast:none) {
  [data-flexslider-theme="slider-left-nav"] .flexslider .slides {
    overflow-x: auto;
    height: auto;
  }
}
[data-flexslider-theme="slidernav-logos"] .flex-control-nav {
  display:-ms-flexbox;
  display:-webkit-flex;
  display:flex;
  -webkit-flex-direction:row;
  -ms-flex-direction:row;
  flex-direction:row;
  -webkit-flex-wrap:nowrap;
  -ms-flex-wrap:nowrap;
  flex-wrap:nowrap;
  -webkit-justify-content:space-around;
  -ms-flex-pack:distribute;
  justify-content:space-around;
  -webkit-align-items:center;
  -ms-flex-align:center;
  align-items:center;
  max-width:900px;
  margin-left:auto;
  margin-right:auto;
  opacity:1;
  padding-bottom:40px;
}
[data-flexslider-theme="slidernav-logos"] .flex-control-nav li {
  box-sizing:content-box;
  cursor:pointer;
  display:-ms-flexbox;
  display:-webkit-flex;
  display:flex;
  -webkit-flex-wrap:nowrap;
  -ms-flex-wrap:nowrap;
  flex-wrap:nowrap;
  -webkit-align-items:center;
  -ms-flex-align:center;
  align-items:center;
  margin-bottom:30px;
  padding:10px;
  position:relative;
  margin-left:15px;
  margin-right:15px;
  width:100px;
  height:100px;
}
[data-flexslider-theme="slidernav-logos"] .flex-control-nav li span {
  color:#666;
  display:none;
  font-weight:bold;
}
[data-flexslider-theme="slidernav-logos"] .flex-control-nav li.flex-active_c {
  cursor:default;
}
[data-flexslider-theme="slidernav-logos"] .flex-control-nav li * {
  position:relative;
  z-index:1;
}
[data-flexslider-theme="slidernav-logos"] .flex-control-nav li img {
  filter:grayscale(1);
  width:100%;
}
[data-flexslider-theme="slidernav-logos"] .flex-control-nav li.flex-active_c img, [data-flexslider-theme="slidernav-logos"] .flex-control-nav li:hover img, [data-flexslider-theme="slidernav-logos"] .flex-control-nav li:focus img {
  filter:grayscale(0);
}
[data-flexslider-theme="slidernav-logos"] .flex-control-nav li::before {
  background:#888;
  content:'';
  display:inline-block;
  opacity:1;
  position:absolute;
  top:0;
  bottom:0;
  left:0;
  right:0;
}
[data-flexslider-theme="slidernav-logos"] .flex-control-nav li:hover::before, [data-flexslider-theme="slidernav-logos"] .flex-control-nav li:focus::before, [data-flexslider-theme="slidernav-logos"] .flex-control-nav li.flex-active_c::before {
  opacity:0;
}
[data-flexslider-theme="slidernav-logos"] .flex-control-nav li.flex-active_c::after, [data-flexslider-theme="slidernav-logos"] .flex-control-nav li:hover::after, [data-flexslider-theme="slidernav-logos"] .flex-control-nav li:focus::after {
  background:#aaa;
  content:'';
  display:inline-block;
  margin-bottom:-15px;
  position:absolute;
  left:0;
  bottom:0;
  width:100%;
  height:6px;
}
.consulting-experts .flexslider__container .features-block__item {
  padding-bottom:0;
}
.consulting-experts .flexslider__container .flex-control-paging li a, .consulting-testimonials .flexslider__container .flex-control-paging li a, .consulting-experts .flexslider__container .flex-control-paging li button, .consulting-testimonials .flexslider__container .flex-control-paging li button {
  border-color:#0099ff;
}
.consulting-experts .flexslider--nav-top .flexslider {
  padding:20px 0 0;
}
.consulting-experts .flexslider--nav-top .flex-control-nav {
  position:absolute;
  top:0;
  bottom:auto!important;
  opacity:1;
}
.consulting-experts .flexslider--nav-bottom .flex-control-nav {
  position:absolute;
  top:auto;
  bottom:0!important;
  opacity:1;
}
.flexslider[data-flexslider-theme="rplus-feature"] li a img {
  box-shadow:2px 3px 12px 0px rgba(0, 0, 0, 0.31);
  border:1px solid #b4b4b4;
}
.flexslider__control-nav-container[data-flexslider-theme="rplus-feature"] .flex-control-nav {
  background:#eff0f2;
  bottom:0;
  position:relative;
  overflow:hidden;
  opacity:1;
}
.flexslider__control-nav-container[data-flexslider-theme="rplus-feature"] li {
  margin:0 20px;
  overflow:hidden;
  vertical-align:middle;
}
.flexslider__control-nav-container[data-flexslider-theme="rplus-feature"] li a {
  background:transparent !important;
  border:0;
  color:#666;
  display:block;
  box-sizing:border-box;
  width:auto;
  height:auto;
  margin:0;
  padding:30px 20px;
  position:relative;
  font-size:17px;
  text-indent:0;
}
.flexslider__control-nav-container[data-flexslider-theme="rplus-feature"] li a.flex-active {
  border:none!important;
  color:#000;
}
.flexslider__control-nav-container[data-flexslider-theme="rplus-feature"] li a::after {
  content:'';
  display:none;
  width:0;
  height:0;
  border:25px solid transparent;
  border-top:20px solid #dfe0e3;
  position:absolute;
  top:0;
  left:0;
  right:0;
  margin:0 auto;
}
.flexslider__control-nav-container[data-flexslider-theme="rplus-feature"] li a.flex-active::after {
  display:block;
}
.flexslider__container[data-flexslider="rplus-solutions"] .flexslider .flex-prev, .flexslider__container[data-flexslider="rplus-solutions"] .flexslider .flex-next {
  background:rgba(230, 230, 230, 0.75) !important;
  border:1px solid #b4b4b4;
  color:#666;
}
.flexslider__container[data-flexslider="rplus-solutions"] .flexslider .flex-prev {
  left:10px;
}
.flexslider__container[data-flexslider="rplus-solutions"] .flexslider .flex-next {
  right:10px;
}
.flexslider__container[data-flexslider="rplus-solutions"] .flexslider:hover .flex-prev, .flexslider__container[data-flexslider="rplus-solutions"] .flexslider:hover .flex-next {
  opacity:1;
}
.flexslider__container[data-flexslider="rplus-solutions"] .flexslider:hover .flex-prev {
  left:20px;
}
.flexslider__container[data-flexslider="rplus-solutions"] .flexslider:hover .flex-next {
  right:20px;
}
@media only screen and (max-width:1024px) {
  .flexslider__container[data-flexslider="rplus-solutions"] .flexslider:hover .flex-direction-nav {
    display: block;
  }
}
@media only screen and (max-width:960px) {
  .flexslider[data-flexslider-theme="rplus-feature"] {
    padding: 0;
  }
  .flexslider__control-nav-container[data-flexslider-theme="rplus-feature"] li {
    margin: 0 5px;
  }
}
[data-theme="indigo-studio"] .flexslider__container .flex-control-paging li a, [data-theme="indigo-studio"] .flexslider__container .flex-control-paging li button {
  background:#ccc !important;
  border:2px solid #ccc;
  border-radius:50%;
  display:block;
  width:12px;
  height:12px;
}
[data-theme="indigo-studio"] .flexslider__container .flex-control-paging li a:hover, [data-theme="indigo-studio"] .flexslider__container .flex-control-paging li a:focus, [data-theme="indigo-studio"] .flexslider__container .flex-control-paging li button:hover, [data-theme="indigo-studio"] .flexslider__container .flex-control-paging li button:focus {
  border:2px solid #3F51B5;
}
[data-theme="indigo-studio"] .flexslider__container .flex-control-paging li a.flex-active, [data-theme="indigo-studio"] .flexslider__container .flex-control-paging li button.flex-active {
  background:#3F51B5 !important;
  border:2px solid #3F51B5;
}
[data-theme="indigo-studio"] .flexslider__container .flex-direction-nav li a, [data-theme="indigo-studio"] .flexslider__container .flex-direction-nav li button {
  background:#fff;
  border:1px solid #3F51B5;
  color:#3F51B5;
}
[data-theme="indigo-studio"] .flexslider__container .flex-direction-nav li a:hover, [data-theme="indigo-studio"] .flexslider__container .flex-direction-nav li a:focus, [data-theme="indigo-studio"] .flexslider__container .flex-direction-nav li button:hover, [data-theme="indigo-studio"] .flexslider__container .flex-direction-nav li button:focus {
  background:#3F51B5;
  color:#fff;
}
[data-theme="indigo-studio"] .flexslider__container .flexslider li .features-block.ui-card {
  margin:10px !important;
}
@media only screen and (max-width:1024px) {
  [data-theme="indigo-studio"] .flexslider__container {
    overflow: visible;
  }
  [data-theme="indigo-studio"] .flexslider__container .flexslider {
    overflow: visible;
    padding: 0;
  }
  [data-theme="indigo-studio"] .flexslider__container .flex-direction-nav li .flex-prev {
    left: -20px;
  }
  [data-theme="indigo-studio"] .flexslider__container .flexslider:hover li .flex-prev {
    left: -10px;
  }
  [data-theme="indigo-studio"] .flexslider__container .flex-direction-nav li .flex-next {
    right: -20px;
  }
  [data-theme="indigo-studio"] .flexslider__container .flexslider:hover li .flex-next {
    right: -10px;
  }
}
@media only screen and (max-width:480px) {
  [data-theme="indigo-studio"] .flexslider__container .flexslider li div, [data-theme="indigo-studio"] .flexslider__container .flexslider li .features-block.ui-card {
    margin: 0 !important;
  }
}
.indigo-pillar .features-block__content {
  padding:2em .5em 2em 4em !important
}
.indigo-pillar .features-block__image {
  -ms-flex-item-align:start;
  -ms-grid-row-align:start;
  align-self:start;
}
.indigo-pillar .flexslider__indigo-card-bg {
  position:absolute;
  top:50%;
  -webkit-transform:translateY(-50%);
  -ms-transform:translateY(-50%);
  transform:translateY(-50%);
  z-index:-1;
}
@media only screen and (max-width:959px) {
  .indigo-pillar .slides .features-block {
    width: 100% !important;
  }
  .indigo-pillar .features-block__item {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }
  .indigo-pillar .features-block__content, .indigo-pillar .features-block__image {
    width: 100%;
    max-width: 100%;
  }
  .indigo-pillar .features-block__content {
    padding: 2em !important;
  }
  .indigo-pillar .features-block__image.features-block__image--right {
    -webkit-box-ordinal-group: 0;
    -ms-flex-order: -1;
    order: -1;
  }
  .indigo-pillar .features-block__image.features-block__image--left {
    -webkit-box-ordinal-group: 3;
    -ms-flex-order: 2;
    order: 2;
  }
  .indigo-pillar .slides img.flexslider__indigo-card-bg {
    display: none;
  }
}
#indigo-welcome {
  position:relative;
  margin-top:50px;
}
#indigo-welcome__slider {
  position:relative;
  z-index:4;
}
#indigo-welcome__slider-container {
  color:#fff;
  margin-left:0;
  margin-bottom:0;
  position:absolute;
  top:-35px;
  left:-8%;
  width:76%;
}
#indigo-welcome__slider-laptop {
  width:100%;
}
#indigo-welcome__msg {
  overflow:hidden;
}
#indigo-welcome__msg h2, #indigo-welcome__msg p {
  color:#fff;
}
#indigo-welcome__msg a.ui-btn.ui-btn--default {
  background:#fca31c;
  border-color:#fca31c;
  color:#fff;
  text-transform:none;
}
#indigo-welcome__msg a.ui-btn.ui-btn--default:hover, #indigo-welcome__msg a.ui-btn.ui-btn--default:focus {
  background:transparent;
  border-color:#fca31c;
  color:#fca31c;
}
#indigo-welcome__cta {
  overflow:hidden;
  padding:10px;
}
#indigo-welcome__cta p {
  color:#fff;
  font-size:0.875rem;
  line-height:1.3em;
}
#indigo-welcome__cta a {
  color:#6b82ff;
}
#indigo-welcome__cta a:hover, #indigo-welcome__cta a:focus {
  color:#96a5f5;
}
#indigo-welcome .flexslider__container {
  margin:0 auto;
  width:100%;
}
#indigo-welcome .flexslider {
  padding:0 0 40px;
  height:auto!important;
}
#indigo-welcome__slider .flexslider .slides>li {
  position:relative;
}
#indigo-welcome .flexslider__container .flex-control-nav {
  -webkit-box-ordinal-group:4;
  -ms-flex-order:3;
  order:3;
  opacity:1;
  padding:20px 0 0;
}
#indigo-welcome .flexslider__container .flex-control-nav.flex-control-paging {
  margin-top:0;
}
#indigo-welcome .flexslider__container .flex-control-nav.flex-control-paging button {
  cursor:pointer;
  height:14px;
  width:14px;
}
#indigo-welcome .flexslider__container .flex-control-nav.flex-control-paging button.flex-active {
  background:#3F51B5 !important;
  border-color:#93A3ff;
}
#indigo-welcome .flexslider__container .flex-control-nav.flex-control-paging button.flex-active {
  background:#3F51B5 !important;
  border-color:#93A3ff;
}
#indigo-welcome .flexslider__container[data-control-nav-border-theme="dark"] .flex-control-nav.flex-control-paging button {
  border-color:#999;
}
.indigo-slider-badge {
  background:#272a50;
  border:4px solid #fff;
  border-radius:50%;
  color:#fff;
  display:block;
  width:150px;
  height:150px;
  overflow:hidden;
  position:absolute;
  right:0;
  bottom:0;
  text-align:center;
  vertical-align:middle;
}
.indigo-slider-badge>div {
  color:#fff;
  font-size:14px;
  position:absolute;
  top:50%;
  -webkit-transform:translateY(-50%);
  -ms-transform:translateY(-50%);
  transform:translateY(-50%);
  width:100%;
}
@media only screen and (max-width:960px) {
  #indigo-welcome {
    background-size: 65%;
    background-position: 90% 20%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    margin-top: 0;
    padding-top: 0;
  }
  #indigo-welcome__slider-container {
    position: relative;
    left: 0;
    top: 0;
    width: 100%;
  }
  #indigo-welcome__slider {
    display: block;
    position: relative;
    width: 100%;
    -webkit-box-ordinal-group: 2;
    -ms-flex-order: 1;
    order: 1;
    -ms-flex-negative: 0;
    flex-shrink: 0;
  }
  #indigo-welcome__msg {
    overflow: hidden;
    display: block;
    -webkit-box-ordinal-group: 1;
    -ms-flex-order: 0;
    order: 0;
    width: 100%;
  }
  #indigo-welcome__cta {
    -webkit-box-ordinal-group: 3;
    -ms-flex-order: 2;
    order: 2;
  }
  #indigo-welcome__msg>div, #indigo-welcome__cta>div>div {
    float: none;
    width: 100%;
  }
  .indigo-slider-badge {
    border: none;
    border-radius: 0;
    position: relative;
    width: 100%;
    height: auto;
  }
  .indigo-slider-badge>div {
    padding: 10px 0;
    position: relative;
    width: 100%;
    height: auto;
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
  }
}
.no-flexbox .flexslider--nav-top .flexslider {
  padding:80px 60px 40px;
}
.no-flexbox .flexslider--nav-top .flex-control-nav {
  position:absolute;
  top:0;
  bottom:auto!important;
  left:0;
  right:0;
  opacity:1;
}
.no-flexbox .flexslider--nav-bottom .flexslider {
  padding:40px 60px 80px;
}
.no-flexbox .flexslider--nav-bottom .flex-control-nav {
  position:absolute;
  top:auto;
  bottom:0!important;
  left:0;
  right:0;
  opacity:1;
}
.no-flexbox .flexslider--product-slider .flexslider, .no-flexbox .flexslider--product-slider.flexslider--nav-top .flexslider {
  padding:50px 60px 40px;
}
.testimonial blockquote {
  display:inline;
  font-size:1.5em;
  font-style:normal;
  line-height:1.3em;
  margin-bottom:0;
  position:relative;
}
.testimonial blockquote p {
  display:inline;
}
.testimonial blockquote:before {
  color:#b3b3b3;
  content:"“";
  display:inline-block;
  font-size:3em;
  line-height:0;
  position:absolute;
  top:.25em;
  left:-0.5em;
}
.testimonial blockquote:after {
  content:no-close-quote;
}
.testimonial figcaption {
  display:block;
}
.testimonial--color-white blockquote:before {
  color:#fff;
}
.testimonial--color-white blockquote:after {
  color:#fff;
}
.testimonial--color-white blockquote p {
  color:#fff;
}
.testimonial--color-white figcaption {
  color:#fff;
}
.testimonial[data-quote-type="clean"] blockquote {
  display:inline-block;
  margin-bottom:1.2rem;
  padding-left:50px;
}
.testimonial[data-quote-type="clean"] blockquote:before {
  content:'';
  display:block;
  width:40px;
  height:40px;
  background:url("https://download.infragistics.com/marketing/Website/products/ignite-ui-landing/ignite-ui-quote-mark-gray.svg") no-repeat 0 0;
  background-size:100%;
  position:absolute;
  top:0;
  left:0;
}
[class*="bg--dark"] .testimonial[data-quote-type="clean"] blockquote:before {
  background:url("https://static.infragistics.com/marketing/Website/products/ignite-ui-landing/ignite-ui-quote-mark.svg") no-repeat 0 0;
}
.testimonial[data-quote-type="clean"] blockquote:after {
  content:no-close-quote;
  display:none;
}
.testimonial[data-quote-type="clean"] figcaption {
  display:block;
  padding-left:50px;
}
.testimonial[data-quote-type="simple"] {
  font-size:0.75rem;
}
.testimonial[data-quote-type="simple"] blockquote {
  font-size:0.875rem;
}
.testimonial[data-quote-type="simple"] blockquote::before, .testimonial[data-quote-type="simple"] blockquote::after {
  display:none;
}
.testimonial[data-quote-type="simple"] figcaption {
  font-size:0.75rem;
  line-height:1.5em;
  margin-top:0.75rem;
}
.testimonial[data-quote-type="simple"].testimonial--left-border {
  border-left:4px solid #0096c0;
  padding-left:1rem;
}
.chapters-nav--wrap {
  top:150px;
}
.chapters-nav--container {
  max-height:calc(100vh - 200px);
  overflow-y:auto;
}
.ui-thumb {}
.ui-thumb__container {
  display:block;
  position:relative;
}
.ui-thumb__overlay {
  display:none;
  box-sizing:border-box;
  overflow:hidden;
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
}
.ui-thumb:hover .ui-thumb__overlay, .ui-thumb:focus .ui-thumb__overlay {
  display:block;
}
.ui-thumb__bg {
  background-color:rgba(0, 0, 0, 0.75);
  box-sizing:border-box;
  display:table;
  width:100%;
  height:100%;
  position:relative;
  padding:10px;
}
.ui-thumb__content {
  color:#fff;
  display:table-cell;
  vertical-align:middle;
}
.ui-thumb__content>* {
  color:#fff;
}
.ui-thumb__title {
  display:block;
  font-size:1.25em;
  margin-bottom:1em;
}
.ui-thumb__small-details {
  display:block;
  font-size:0.75em;
  line-height:normal;
}
.ui-thumb__bg--azure-radiance {
  background:transparent -webkit-linear-gradient(top, rgba(0, 23, 41, 0.6) 0, rgba(0, 160, 243, 0.6) 100%);
  background:transparent linear-gradient(to bottom, rgba(0, 23, 41, 0.6) 0, rgba(0, 160, 243, 0.6) 100%);
}
.ui-thumb--more-details {
  display:none;
  opacity:0;
}
.ui-thumb__overlay:hover .ui-thumb--more-details, .ui-thumb:focus .ui-thumb__overlay .ui-thumb--more-details {
  display:block;
  opacity:1;
}
.ui-thumb__icon {
  box-shadow:0 0 12px 0 rgba(0, 0, 0, 0.25);
  display:block;
  position:absolute;
  top:50%;
  left:50%;
  -webkit-transform:translate(-50%, -50%);
  -ms-transform:translate(-50%, -50%);
  transform:translate(-50%, -50%);
}
.ui-thumb__icon--play {
  background:rgba(0, 0, 0, 0.7);
  border-radius:10px;
  display:block;
  height:45px;
  width:65px;
  -webkit-transition:background .4s;
  transition:background .4s;
}
.ui-thumb__icon--play::after {
  border-left:20px solid #fff;
  border-top:10px solid transparent;
  border-bottom:10px solid transparent;
  content:'';
  margin-top:-10px;
  margin-left:-8px;
  left:50%;
  top:50%;
  display:block;
  position:absolute;
  width:0;
  height:0;
  -webkit-transition:color .4s;
  transition:color .4s;
}
a:hover .ui-thumb__icon--play, a:focus .ui-thumb__icon--play {
  background:rgba(100, 100, 100, 0.7);
}
[data-theme*="indigo"] .ui-thumb__icon--play {
  background:#fff;
  border-radius:50%;
  width:50px;
  height:50px;
  top:auto;
  bottom:30px;
  -webkit-transform:translateX(-50%);
  -ms-transform:translateX(-50%);
  transform:translateX(-50%);
}
[data-theme*="indigo"] .ui-thumb__icon--play::after {
  border-left:15px solid #3F51B5;
  margin-left:-6px;
}
[data-theme*="indigo"] a:hover .ui-thumb__icon--play, [data-theme*="indigo"] a:focus .ui-thumb__icon--play {
  background:#3F51B5;
}
[data-theme*="indigo"] a:hover .ui-thumb__icon--play::after, [data-theme*="indigo"] a:focus .ui-thumb__icon--play::after {
  border-left-color:#fff;
}
[data-theme*="indigo"] .ui-thumb__icon--play-md {
  width:75px;
  height:75px;
}
[data-theme*="indigo"] .ui-thumb__icon--play-md::after {
  border-left-width:30px;
  border-top-width:20px;
  border-bottom-width:20px;
  margin-top:0;
  margin-left:0;
  top:50%;
  left:50%;
  transform:translate(-30%, -50%);
}
.ui-thumb--locations {}
.ui-thumb--locations .ui-thumb__overlay {
  display:block;
  opacity:1;
}
.ui-thumb--locations .ui-thumb__bg {
  background:transparent;
}
.ui-thumb--locations .ui-thumb__overlay:hover .ui-thumb__bg, .ui-thumb--locations:focus .ui-thumb__overlay .ui-thumb__bg {
  background:transparent -webkit-linear-gradient(top, rgba(0, 23, 41, 0.6) 0, rgba(0, 160, 243, 0.6) 100%);
  background:transparent linear-gradient(to bottom, rgba(0, 23, 41, 0.6) 0, rgba(0, 160, 243, 0.6) 100%);
}
.ui-thumb--locations .ui-thumb__title {
  font-size:24px;
}
.ui-thumb--locations .ui-thumb__small-details {
  font-size:16px;
}
.ui-thumb--locations .ui-thumb__overlay:hover .ui-thumb--less-details, .ui-thumb--locations:focus .ui-thumb__overlay .ui-thumb--less-details {
  display:none;
  opacity:0;
}
.ui-thumb--locations .ui-thumb__overlay:hover .ui-thumb--more-details, .ui-thumb--locations:focus .ui-thumb__overlay .ui-thumb--more-details {
  display:inline-block;
  opacity:1;
}
.ui-thumb--locations .ui-thumb__overlay:hover .ui-thumb--less-details, .ui-thumb--locations:focus .ui-thumb__overlay .ui-thumb--less-details {
  -webkit-animation:fadeOut 0.3s;
  animation:fadeOut 0.3s;
}
.ui-thumb--locations .ui-thumb__overlay:hover .ui-thumb--more-details, .ui-thumb--locations:focus .ui-thumb__overlay .ui-thumb--more-details {
  -webkit-animation:fadeIn 0.3s;
  animation:fadeIn 0.3s;
}
#BambooHR-ATS {}
#BambooHR-ATS * {
  box-sizing:border-box;
}
#BambooHR-Footer {
  display:none;
}
#BambooHR-ATS .BambooHR-ATS-board h2 {
  border-bottom:none !important;
  text-align:center;
  color:#333;
  font-family:"aktiv-grotesk-thin", "Helvetica Neue", "Segoe UI", Helvetica, Arial, sans-serif;
  font-size:2.8125rem;
  font-weight:200;
  line-height:1.25em;
  margin-bottom:15px;
}
#BambooHR-ATS .BambooHR-ATS-board h2::before {
  content:'';
  display:block;
  width:100%;
  max-width:160px;
  border-top:2px solid #0099ff;
  padding-bottom:20px;
  margin:0 auto;
}
#BambooHR-ATS .BambooHR-ATS-board li {
  vertical-align:top;
}
#BambooHR-ATS .BambooHR-ATS-board .BambooHR-ATS-Department-List .BambooHR-ATS-Department-Item {
  display:inline-block;
  width:32.1%;
  margin-left:1.5% !important;
  margin-bottom:0 !important;
}
#BambooHR-ATS .BambooHR-ATS-board .BambooHR-ATS-Department-List .BambooHR-ATS-Department-Item:first-child, #BambooHR-ATS .BambooHR-ATS-board .BambooHR-ATS-Department-List .BambooHR-ATS-Department-Item:nth-child(3n+1) {
  margin-left:0 !important;
}
#BambooHR-ATS .BambooHR-ATS-Department-Header {
  font-size:1.875rem;
  line-height:1.25em;
  margin-bottom:20px;
  color:#333;
}
#BambooHR-ATS .BambooHR-ATS-board a {
  font-weight:normal;
  line-height:normal;
}
#BambooHR-ATS .BambooHR-ATS-board .BambooHR-ATS-Location {
  float:none !important;
  padding-top:0 !important;
  display:block;
  font-size:0.875rem;
  line-height:normal;
}
#BambooHR-ATS .BambooHR-ATS-Jobs-List {
  border-bottom:none;
  padding:0 !important;
}
#BambooHR-ATS .BambooHR-ATS-Jobs-List .BambooHR-ATS-Jobs-Item {
  margin-bottom:20px !important;
}
@media only screen and (max-width:960px) {
  #BambooHR-ATS .BambooHR-ATS-board h2 {
    font-size: 2.5em;
  }
  #BambooHR-ATS .BambooHR-ATS-board .BambooHR-ATS-Department-List .BambooHR-ATS-Department-Item, #BambooHR-ATS .BambooHR-ATS-board .BambooHR-ATS-Department-List .BambooHR-ATS-Department-Item:nth-child(3n+1) {
    width: 48.5%;
    margin-left: 2.5% !important;
  }
  #BambooHR-ATS .BambooHR-ATS-board .BambooHR-ATS-Department-List .BambooHR-ATS-Department-Item:first-child, #BambooHR-ATS .BambooHR-ATS-board .BambooHR-ATS-Department-List .BambooHR-ATS-Department-Item:nth-child(2n+1) {
    margin-left: 0 !important;
  }
}
@media only screen and (max-width:768px) {
  #BambooHR-ATS .BambooHR-ATS-board h2 {
    font-size: 2.125em;
  }
  #BambooHR-ATS .BambooHR-ATS-board .BambooHR-ATS-Department-List .BambooHR-ATS-Department-Item, #BambooHR-ATS .BambooHR-ATS-board .BambooHR-ATS-Department-List .BambooHR-ATS-Department-Item:nth-child(2n+1), #BambooHR-ATS .BambooHR-ATS-board .BambooHR-ATS-Department-List .BambooHR-ATS-Department-Item:nth-child(3n+1) {
    width: 100%;
    margin-left: 0 !important;
  }
}
.ui-timeline {
  position:relative;
}
.ui-timeline--igHistory {
  padding:200px 0;
  overflow:hidden;
}
.ui-timeline--igHistory .ui-timeline__item {
  border-left:1px solid #dedede;
  font-size:14px;
  padding-left:10px;
  padding-bottom:20px;
  position:absolute;
  width:14%;
}
.ui-timeline--igHistory .ui-timeline__item p {
  margin-bottom:5px;
}
.ui-timeline--igHistory .ui-timeline__item.ui-timeline__item--top {
  bottom:53%;
}
.ui-timeline--igHistory .ui-timeline__item.ui-timeline__item--bottom {
  top:54%;
}
.ui-timeline--igHistory .ui-timeline__item.ui-timeline__item--top:after, .ui-timeline--igHistory .ui-timeline__item.ui-timeline__item--bottom:after {
  background:#dedede;
  border-radius:50%;
  content:'';
  display:block;
  width:7px;
  height:7px;
  position:absolute;
  left:-4px;
}
.ui-timeline--igHistory .ui-timeline__item.ui-timeline__item--top:after {
  bottom:0;
}
.ui-timeline--igHistory .ui-timeline__item.ui-timeline__item--bottom:after {
  top:0;
}
.padded-content {
  box-sizing:border-box;
  padding:40px 80px!important;
}
.padded-content .column-block {
  box-sizing:border-box;
  margin-bottom:0 !important;
}
.padded-content--equal {
  padding:40px !important;
}
.mfp-bg {
  top:0;
  right:0;
  bottom:0;
  left:0;
  width:auto;
  height:auto;
}
.mfp-wrap {}
.mfp-container {}
.lightbox {
  font-size:16px;
  font-size:1rem;
  line-height:1.3em;
}
.lightbox.mfp-wrap .mfp-content {
  background:#fff;
  border-radius:5px;
  box-sizing:border-box;
  display:none;
  margin-top:50px;
  margin-bottom:50px;
  padding:0;
  width:75%;
  max-width:1160px;
}
.lightbox.mfp-wrap.mfp-ready .mfp-content {
  display:inline-block;
}
.lightbox.mfp-wrap .mfp-content .mfp-close {
  color:#fff;
  position:absolute;
  top:-42px;
  right:-6px;
  z-index:9999;
}
.lightbox.mfp-wrap .mfp-content .mfp-close:hover, .lightbox.mfp-wrap .mfp-content .mfp-close:focus {
  opacity:0.75;
}
.mfp-content__container {
  box-sizing:border-box;
  width:100%;
}
.lightbox.mfp-fade .mfp-content, .lightbox--blog .mfp-content {
  opacity:0;
  -webkit-transition:all 0.2s ease-in-out;
  transition:all 0.2s ease-in-out;
}
.lightbox.mfp-fade.mfp-bg, .lightbox--blog.mfp-bg {
  opacity:0;
  -webkit-transition:all 0.3s ease-out;
  transition:all 0.3s ease-out;
}
.lightbox.mfp-fade.mfp-wrap {
  opacity:1;
  -webkit-transition:all 0.2s ease-out;
  transition:all 0.2s ease-out;
}
.lightbox.mfp-fade.mfp-ready .mfp-content, .lightbox--blog.mfp-ready .mfp-content {
  opacity:1;
}
.lightbox.mfp-fade.mfp-ready.mfp-bg, .lightbox--blog.mfp-ready.mfp-bg {
  opacity:0.8;
}
.lightbox.mfp-fade.mfp-ready.mfp-wrap {
  opacity:1;
}
.lightbox.mfp-fade.mfp-removing .mfp-content, .lightbox--blog.mfp-removing .mfp-content {
  opacity:0;
}
.lightbox.mfp-fade.mfp-removing.mfp-bg, .lightbox--blog.mfp-removing.mfp-bg {
  opacity:0;
}
.lightbox.mfp-fade.mfp-removing.mfp-wrap {
  opacity:1;
}
.mfp--management {
  height:460px;
}
.mfp--management table {
  height:100%;
}
.mfp--management table td:nth-child(2) {
  background:rgba(255, 255, 255, 0.65);
}
.lightbox .mfp-preloader {
  border:5px solid #555;
  border-top:5px solid #0099ff;
  border-radius:50%;
  color:#fff !important;
  display:block;
  margin:0 auto;
  width:30px;
  height:30px;
  text-indent:-9999px;
  -webkit-animation:spin 2s linear infinite;
  animation:spin 2s linear infinite;
}
.lightbox .mfp-preloader a {
  color:#0099ff!important;
  text-decoration:underline;
}
.lightbox .mfp-preloader a:hover, .lightbox .mfp-preloader a:focus {
  color:#047fd1!important;
}
.lightbox .mfp-s-loading .mfp-preloader {
  display:block;
}
.lightbox .mfp-s-ready .mfp-preloader {
  display:none;
}
.lightbox .mfp-s-error .mfp-preloader {
  border:none;
  -webkit-animation:none;
  animation:none;
  width:auto;
  height:auto;
}
.lightbox--blog.mfp-wrap {
  overflow-y:auto;
}
.lightbox--blog.mfp-wrap .mfp-content .socialwrapper, .lightbox--blog.mfp-wrap .mfp-content .CommonBreadCrumbArea, .lightbox--blog.mfp-wrap .mfp-content .em {
  display:none;
}
.lightbox--blog.mfp-wrap .mfp-content .content_area {
  overflow-x:hidden;
}
.lightbox--blog.mfp-wrap .mfp-content .content_area table {
  word-wrap:break-word;
}
.lightbox--blog.mfp-wrap .mfp-content .content_area a {
  word-wrap:break-word;
}
.lightbox--blog.mfp-wrap .mfp-content h1 {}
.lightbox--blog.mfp-wrap .mfp-content .embed-container {
  position:relative;
  padding-bottom:56.25%;
  height:0;
  overflow:hidden;
  max-width:100%;
}
.lightbox--blog.mfp-wrap .mfp-content .embed-container iframe, .lightbox--blog.mfp-wrap .mfp-content .embed-container object, .lightbox--blog.mfp-wrap .mfp-content .embed-container embed {
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
}
.lightbox--blog.mfp-wrap .mfp-content .post__header .post__publication {
  color:#b4b4b4;
  display:block;
  font-size:0.875rem;
  margin-bottom:20px;
  margin-top:-15px;
}
.lightbox--blog.mfp-wrap .mfp-content .post__header .post__like, .lightbox--blog.mfp-wrap .mfp-content .post__social {
  display:none;
}
.lightbox--blog.mfp-wrap .mfp-content .post__footer .post__social {
  display:none;
}
.lightbox--blog.mfp-wrap .mfp-content .post__taglist {
  list-style:none;
  line-height:1.3em;
  padding-left:0;
  font-size:0.875rem;
}
.lightbox--blog.mfp-wrap .mfp-content .post__taglist::before {
  content:"Tags: ";
}
.lightbox--blog.mfp-wrap .mfp-content .post__taglist .post__tag {
  display:inline-block;
  line-height:1.3em;
  margin:0;
}
.lightbox--blog.mfp-wrap .mfp-content .post__taglist .post__tag::after {
  content:", ";
  display:inline-block;
  margin-right:2px;
}
.lightbox--padding-lg.mfp-wrap .mfp-content__container, .lightbox--padding-lg.lightbox--blog.mfp-wrap .content_area {
  padding:100px 150px;
}
.lightbox--padding-md.mfp-wrap .mfp-content__container, .lightbox--padding-md.lightbox--blog.mfp-wrap .content_area {
  padding:50px;
}
.lightbox.mfp-wrap.mfp-max-width-550 .mfp-content {
  max-width:550px;
}
.noSticky .lightbox.mfp-wrap .grid-header.p-sticky {
  position:relative!important;
  top:0 !important;
  left:0 !important;
}
.noSticky .lightbox.mfp-wrap .grid-container>div {
  display:none!important;
}
.rplus-engagement-overview {
  border-collapse:collapse;
  margin:50px auto 0;
  width:98%;
}
.rplus-engagement-overview tr td img {
  position:absolute;
  left:25px;
  top:25px;
  width:40px;
}
.rplus-engagement-overview tr td {
  border:1px solid #415f6b;
  color:#fff;
  text-align:center;
  padding:0;
  position:relative;
  vertical-align:middle;
  width:40px;
}
.rplus-engagement-overview tr td:first-child {
  padding:25px;
  padding-left:80px;
  text-align:left;
  width:auto;
}
@media only screen and (max-width:960px) and (min-width:768px) {
  .rplus-engagement-overview tr td {
    width: 30px
  }
}
@media only screen and (max-width:767px) {
  .rplus-engagement-overview tr td img {
    display: block;
    position: relative;
    top: auto;
    left: auto;
    margin: 0 auto;
  }
  .rplus-engagement-overview tr td {
    border: none;
    display: none;
  }
  .rplus-engagement-overview tr td:first-child {
    display: table-cell;
    padding: 25px;
    text-align: center;
  }
}
.rplus-pricing.rplus-pricing--embedded {
  border:1px solid #dddddd;
  border-collapse:collapse;
  margin:0 auto;
  height:300px;
  max-width:1180px;
  width:100%;
}
.rplus-pricing.rplus-pricing--embedded>tbody>tr>td {
  height:100%;
}
.rplus-pricing.rplus-pricing--embedded>tbody>tr>td:first-child {
  border-right:1px solid #ddd;
  padding:10px 18px;
  position:relative;
}
.rplus-pricing.rplus-pricing--embedded tr td {
  border:none;
  vertical-align:top;
  padding:0px;
}
.rplus-pricing__subscriptions {
  border-collapse:collapse;
  width:100%;
  height:100%;
}
.rplus-pricing.rplus-pricing--embedded .rplus-pricing__subscriptions tr td {
  border-color:#dddddd;
  border-image:none;
  border-style:solid;
  border-width:0 1px;
  height:100%;
  color:#666666;
  position:relative;
  vertical-align:middle;
}
.rplus-pricing.rplus-pricing--embedded tr td .rplus-pricing__subscriptions>tbody>tr>td {
  height:100%;
  padding-top:50px;
  vertical-align:middle;
}
.rplus-pricing__subscription-label {
  background:#002a3d;
  padding:10px 18px;
  left:0px;
  top:0px;
  right:1px;
  border-bottom-color:#dddddd;
  border-bottom-width:1px;
  border-bottom-style:solid;
  position:absolute;
}
.rplus-pricing__subscription-label::after, .rplus-pricing.rplus-pricing--embedded>tbody>tr>td:first-child::after {
  border-bottom:15px solid transparent;
  border-left:10px solid #dddddd;
  border-top:15px solid transparent;
  content:"";
  display:block;
  height:0;
  margin-top:-15px;
  position:absolute;
  right:-10px;
  top:50%;
  width:0;
  z-index:100;
}
.rplus-pricing.rplus-pricing--embedded>tbody>tr>td:first-child::after {
  top:10px;
  right:-11px;
  margin-top:0;
}
.rplus-pricing__subscriptions>tbody>tr>td:last-child .rplus-pricing__subscription-label::after {
  display:none;
}
.rplus-pricing__yr-one {
  height:100%;
  display:table;
}
.rplus-pricing__yr-one .rplus-pricing__price {
  vertical-align:middle;
  display:table-cell;
}
.rplus-pricing__licenses-container {
  padding:10px 18px;
}
.rplus-pricing__licenses {
  font-size:0.875rem;
  text-align:left;
}
.rplus-pricing__licenses td {
  border:none!important;
}
@media only screen and (max-width:960px) {
  .rplus-pricing.rplus-pricing--embedded {
    text-align: center;
    height: auto;
  }
  .rplus-pricing.rplus-pricing--embedded tr td {
    border: 1px solid #ddd;
    border-width: 1px 0;
    text-align: center;
  }
  .rplus-pricing.rplus-pricing--embedded tr td:first-child, .rplus-pricing.rplus-pricing--embedded tr td:last-child {
    border-width: 0;
  }
  .rplus-pricing.rplus-pricing--embedded>tbody>tr>td {
    display: block;
    width: auto;
    height: auto;
  }
  .rplus-pricing.rplus-pricing--embedded .rplus-pricing__subscriptions {
    height: auto;
  }
  .rplus-pricing.rplus-pricing--embedded .rplus-pricing__subscriptions>tbody>tr>td {
    display: block;
    border-width: 1px 0;
  }
  .rplus-pricing.rplus-pricing--embedded .rplus-pricing__subscriptions tr td {
    border-width: 1px 0 0;
  }
  .rplus-pricing.rplus-pricing--embedded .rplus-pricing__subscription-label {
    border-color: #002a3d;
  }
  .rplus-pricing.rplus-pricing--embedded .rplus-pricing__subscription-label::after, .rplus-pricing.rplus-pricing--embedded>tbody>tr>td:first-child::after, .rplus-pricing__subscriptions>tbody>tr>td:last-child .rplus-pricing__subscription-label::after {
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-top: 10px solid #ddd;
    border-bottom: none;
    display: block;
    right: auto;
    left: 50%;
    top: auto;
    bottom: -10px;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
  }
  .rplus-pricing.rplus-pricing--embedded .rplus-pricing__subscription-label::after, .rplus-pricing__subscriptions>tbody>tr>td:last-child .rplus-pricing__subscription-label::after {
    border-top: 10px solid #002a3d;
  }
  .rplus-pricing__licenses {
    margin: 0 auto;
    max-width: 350px;
    width: 100%;
  }
  .rplus-pricing__licenses tr td {
    text-align: left;
  }
  .rplus-pricing__yr-one, .rplus-pricing__yr-one .rplus-pricing__price {
    height: auto;
    display: block;
    text-align: center;
  }
  .lt-ie10 .rplus-pricing--embedded.rplus-pricing>tbody>tr>td, .rplus-pricing--embedded.rplus-pricing .rplus-pricing__subscriptions>tbody>tr>td {
    box-sizing: border-box;
    float: left;
    width: 100%;
  }
}
.indigo-prototype-workflow {
  border-collapse:collapse;
  margin:50px auto 0;
  width:98%;
}
.indigo-prototype-workflow tr td img {
  position:absolute;
  left:25px;
  top:25px;
  width:40px;
}
.indigo-prototype-workflow tr td {
  border:1px solid #999999;
  color:#fff;
  text-align:center;
  padding:0;
  position:relative;
  vertical-align:middle;
  width:50px;
}
.indigo-prototype-workflow tr td:first-child {
  padding:25px;
  padding-left:80px;
  text-align:left;
  width:auto;
}
@media only screen and (max-width:960px) and (min-width:768px) {
  .indigo-prototype-workflow tr td {
    width: 30px
  }
}
@media only screen and (max-width:767px) {
  .indigo-prototype-workflow tr td img {
    display: block;
    position: relative;
    top: auto;
    left: auto;
    margin: 0 auto;
  }
  .indigo-prototype-workflow tr td {
    border: none;
    display: none;
  }
  .indigo-prototype-workflow tr td:first-child {
    display: table-cell;
    padding: 25px;
    text-align: center;
  }
}
.community-box ul {
  padding-left:0;
  list-style:none;
}
.blogtp .community-box__section {
  list-style:circle initial;
  padding-left:1.5em;
}
.blogtp.blogtp-blogs .community-box__section {
  list-style-image:url("https://static.infragistics.com/marketing/Website/General/blogicon-img.png?v=201801181644");
}
.blogtp.blogtp-podcasts .community-box ul {
  list-style-image:url("https://static.infragistics.com/marketing/Website/General/podcasticon-img.png?v=201801181644");
}
.blogtp .community-box__article {
  display:list-item;
  margin-bottom:2.25em;
}
.blogtp .community-box__article--header {
  width:80%;
  margin-bottom:5px;
}
.blogtp .community-box a {
  color:#f7f7f7;
  float:none;
  font-size:20px;
  display:block!important;
  margin-bottom:5px
}
.blogtp .community-box .macroEllipsis {
  color:#a7a7a7;
}
.blogtp--multi-column .community-box__section {
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-orient:horizontal;
  -webkit-box-direction:normal;
  -ms-flex-flow:row wrap;
  flex-flow:row wrap;
}
.blogtp--multi-column .community-box__article {
  margin-left:5%;
  width:47.5%;
}
.blogtp--multi-column .community-box__article:nth-child(2n+1) {
  margin-left:0;
}
.no-flexbox .blogtp--multi-column .community-box__section {
  display:block;
  padding-left:0;
  width:100%;
}
.no-flexbox .blogtp--multi-column .community-box__article {
  display:block;
  margin-left:2.5%;
  width:95%;
}
.bt__posts {
  width:100%;
}
.bt__post-image img {
  width:100%;
}
.bt__post {
  margin-bottom:2.25em;
}
.bt__post header {
  margin-bottom:1.5rem;
}
.bt__post header h4 {
  margin-bottom:.25rem;
}
.bt__post header h4 a, .bt__post header h4 a:visited {
  color:#666;
  -webkit-transition:color 250ms linear;
  transition:color 250ms linear;
}
.bt__post header h4 a:hover, .bt__post header h4 a:focus {
  color:#0099ff;
}
.bt__post-subheader, .bt__post-subheader time {
  font-size:0.875rem;
}
.bt__post-subheader time::before {
  content:"/";
  display:inline-block;
  margin:0 5px;
}
.bt__content>*:last-child {
  margin-bottom:0;
}
.bt__content {
  margin-bottom:1.5rem;
}
.bt__post--tags {
  margin:0;
  padding:0;
  list-style:none;
}
.bt__post--tags li {
  display:inline-block;
  font-size:0.875em;
  margin-bottom:0;
}
.bt__post--tags li::after {
  content:",";
  display:inline-block;
  width:0.5em;
  height:1em;
  font-size:0.875rem;
  line-height:0.875rem;
  top:0px;
}
.bt__post--tags li:last-child::after {
  opacity:0;
}
[class*="bg--dark"] .bt__post header h4 a, [class*="bg--dark"] .bt__post header h4 a:visited {
  color:#fff;
}
[class*="bg--dark"] .bt__post header h4 a:hover, [class*="bg--dark"] .bt__post header h4 a:focus {
  color:#0099ff;
}
.bt__posts--content-mb-0 .bt__content {
  margin-bottom:0;
}
.bt__posts--tags-d-none .bt__content-wrap footer {
  display:none;
}
.bt__posts[data-blog-type*="blog-list"] .bt__post-image {
  margin-bottom:1em;
}
.bt__posts[data-blog-type*="blog-list"] .bt__post header {
  margin-bottom:.25em;
}
.bt__posts.bt__posts-image-side[data-blog-type*="blog-list"] .bt__post {
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-orient:horizontal;
  -webkit-box-direction:normal;
  -ms-flex-direction:row;
  flex-direction:row;
  -webkit-box-flex:1;
  -ms-flex:1 1 auto;
  flex:1 1 auto;
}
.bt__posts.bt__posts-image-side[data-blog-type*="blog-list"] figure {
  width:33%;
  margin-bottom:0;
}
.bt__posts.bt__posts-image-side[data-blog-type*="blog-list"] .bt__content-wrap {
  width:65%;
  margin-left:2%;
}
.bt__posts[data-blog-type*="blog-list"] .bt__content {
  margin-bottom:0;
}
.bt__posts[data-blog-type*="blog-list"][data-blog-columns] {
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-orient:horizontal;
  -webkit-box-direction:normal;
  -ms-flex-flow:row wrap;
  flex-flow:row wrap;
}
.bt__posts[data-blog-type*="blog-list"][data-blog-columns] .bt__post {
  margin-left:2%;
}
.bt__posts[data-blog-type*="blog-list"][data-blog-columns="2"] .bt__post {
  width:48%;
  max-width:48%;
}
.bt__posts[data-blog-type*="blog-list"][data-blog-columns="3"] .bt__post {
  width:32%;
  max-width:32%;
}
.bt__posts[data-blog-type*="blog-list"][data-blog-columns="2"] .bt__post:nth-child(2n+1), .bt__posts[data-blog-type*="blog-list"][data-blog-columns="3"] .bt__post:nth-child(3n+1) {
  margin-left:0
}
.no-flexbox .bt__posts[data-blog-type*="blog-list"] {
  display:block;
  width:100%;
}
.no-flexbox .bt__posts[data-blog-type*="blog-list"] .bt__post {
  display:block;
  margin-left:0;
  width:100%;
}
.no-flexbox .bt__posts.bt__posts-image-side[data-blog-type*="blog-list"] .bt__post {
  display:table;
}
.no-flexbox .bt__posts.bt__posts-image-side[data-blog-type*="blog-list"] figure, .no-flexbox .bt__posts.bt__posts-image-side[data-blog-type*="blog-list"] .bt__content-wrap {
  display:table-cell;
  vertical-align:top;
}
.no-flexbox .bt__posts.bt__posts-image-side[data-blog-type*="blog-list"] .bt__content-wrap {
  padding:0 5px;
}
@media only screen and (max-width:960px) {
  .bt__posts.bt__posts-image-side[data-blog-type*="blog-list"][data-blog-columns] {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-flow: column nowrap;
    flex-flow: column nowrap;
  }
  .bt__posts.bt__posts-image-side[data-blog-type*="blog-list"][data-blog-columns] .bt__post {
    width: 100%;
    max-width: 100%;
    margin-left: 0;
  }
}
@media only screen and (max-width:960px) and (min-width:768px) {
  .bt__posts[data-blog-type*="blog-list"][data-blog-columns="3"] .bt__post {
    width: 48%;
    max-width: 48%;
  }
  .bt__posts[data-blog-type*="blog-list"][data-blog-columns="3"] .bt__post:nth-child(3n+1) {
    margin-left: 2%;
  }
  .bt__posts[data-blog-type*="blog-list"][data-blog-columns="3"] .bt__post:nth-child(2n+1) {
    margin-left: 0;
  }
}
@media only screen and (max-width:768px) {
  .bt__posts[data-blog-type*="blog-list"][data-blog-columns] {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-flow: column nowrap;
    flex-flow: column nowrap;
  }
  .bt__posts[data-blog-type*="blog-list"][data-blog-columns] .bt__post {
    width: 100%;
    max-width: 100%;
    margin-left: 0;
  }
  .bt__posts.bt__posts-image-side[data-blog-type*="blog-list"][data-blog-columns] .bt__post {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-flow: column nowrap;
    flex-flow: column nowrap;
  }
  .bt__posts.bt__posts-image-side[data-blog-type*="blog-list"][data-blog-columns] .bt__post .bt__post-image, .bt__posts.bt__posts-image-side[data-blog-type*="blog-list"][data-blog-columns] .bt__post .bt__content-wrap {
    display: block;
    width: 100%;
    margin-left: 0;
  }
  .bt__posts.bt__posts-image-side[data-blog-type*="blog-list"][data-blog-columns] .bt__post .bt__post-image {
    margin-bottom: 1em;
  }
}
.bt__posts[data-blog-type*="blog-card"] {
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-orient:horizontal;
  -webkit-box-direction:normal;
  -ms-flex-direction:row;
  flex-direction:row;
  -ms-flex-wrap:wrap;
  flex-wrap:wrap;
}
.bt__posts[data-blog-type*="blog-card"] .bt__post {
  background:#fff;
  box-shadow:0px 0px 20px -2px rgba(0, 0, 0, 0.25);
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-orient:vertical;
  -webkit-box-direction:normal;
  -ms-flex-direction:column;
  flex-direction:column;
  -webkit-box-align:start;
  -ms-flex-align:start;
  align-items:start;
  height:auto;
  overflow:hidden;
  padding:0;
}
.bt__posts[data-blog-type*="blog-card"] .bt__post-image {
  overflow:hidden;
  width:100%;
}
.bt__posts[data-blog-type*="blog-card"] .bt__content-wrap {
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-orient:vertical;
  -webkit-box-direction:normal;
  -ms-flex-direction:column;
  flex-direction:column;
  -webkit-box-flex:1;
  -ms-flex:1 1 auto;
  flex:1 1 auto;
  width:100%;
  box-sizing:border-box;
  padding:20px;
}
.bt__posts[data-blog-type*="blog-card"] a {
  position:relative;
  z-index:1;
}
.bt__posts[data-blog-type*="blog-card"] .bt__post-link {
  position:static;
}
.bt__posts[data-blog-type*="blog-card"] .bt__post-link::before {
  content:'';
  display:block;
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  z-index:1;
}
.bt__posts[data-blog-type*="blog-card"] .bt__content-wrap footer {
  margin-top:auto;
}
.bt__posts[data-blog-type*="blog-card"][data-blog-columns="3"] .bt__post {
  width:31.3%;
  max-width:31.3%;
  margin-left:3%;
}
.bt__posts[data-blog-type*="blog-card"][data-blog-columns="3"] .bt__post:first-child, .bt__posts[data-blog-type*="blog-card"][data-blog-columns="3"] .bt__post:nth-child(3n+1) {
  margin-left:0;
}
.no-flexbox .bt__posts[data-blog-type*="blog-card"] {
  vertical-align:top;
}
.no-flexbox .bt__posts[data-blog-type*="blog-card"] .bt__content-wrap {
  display:block;
}
@media only screen and (max-width:960px) and (min-width:768px) {
  .bt__posts[data-blog-type*="blog-card"][data-blog-columns="3"] .bt__post {
    width: 48.5%;
    max-width: 48.5%;
    margin-left: 3%;
  }
  .bt__posts[data-blog-type*="blog-card"][data-blog-columns="3"] .bt__post:nth-child(3n+1) {
    margin-left: 1.5%;
  }
  .bt__posts[data-blog-type*="blog-card"][data-blog-columns="3"] .bt__post:first-child, .bt__posts[data-blog-type*="blog-card"][data-blog-columns="3"] .bt__post:nth-child(2n+1) {
    margin-left: 0;
  }
}
@media only screen and (max-width:768px) {
  .bt__posts[data-blog-type*="blog-card"][data-blog-columns="3"] .bt__post {
    width: 100%;
    max-width: 100%;
    margin-left: 0;
  }
}
.acct-validation {
  background:#fff;
  font-size:16px;
  margin:50px auto;
  padding:50px;
  overflow:hidden;
  width:60%;
  max-width:500px;
}
.acct-validation__app-logo, .acct-validation__loading, .acct-validation__app-logo, .acct-validation__status {
  display:block;
  margin:0 auto;
}
.acct-validation__app-logo {
  width:200px;
}
.acct-validation__status {
  margin-top:50px;
  margin-bottom:50px
}
.acct-validation__loading {
  width:100px;
  margin-top:50px;
  margin-bottom:50px;
  -webkit-animation-name:spin;
  animation-name:spin;
  -webkit-animation-duration:1s;
  animation-duration:1s;
  -webkit-animation-iteration-count:infinite;
  animation-iteration-count:infinite;
  -webkit-animation-timing-function:linear;
  animation-timing-function:linear;
  opacity:.5;
}
.acct-validation__wait, .acct-validation__text {
  color:#bbb;
}
.acct-validation__text {
  font-size:16px;
  margin-top:50px !important;
  max-width:300px;
}
.acct-validation__stores {
  margin:20px auto 0 auto;
  text-align:center;
}
.acct-validation p {
  text-align:center;
  line-height:1.5;
  margin:0px auto;
}
@media only screen and (min-width:1600px) {
  .features-hero--biz-audience {
    background-image: url("https://static.infragistics.com/marketing/Website/products/shareplus/business-teams/colors-1800.png");
    background-position: bottom right;
    background-repeat: no-repeat;
    background-size: 50% 100%;
  }
}
@media only screen and (max-width:1279px) and (min-width:960px) {
  .ui-callout__wrap {
    max-width: 980px;
  }
  .features-hero__content {}
  .features-hero__image {
    width: 80%;
  }
  .features-hero--biz-audience {
    background-image: url("https://static.infragistics.com/marketing/Website/products/shareplus/business-teams/colors-1800.png");
    background-position: bottom right;
    background-repeat: no-repeat;
    background-size: 50% 100%;
  }
  .no-flexbox .features-block--list.features-block--icon-container {
    margin-left: 60px;
    width: auto;
    max-width: auto;
  }
  .no-flexbox .features-block__item--full.features-block--border-left.features-block--icon:last-child {
    padding-right: 0;
  }
  .no-flexbox .features-block__item--half.features-block--border-left.features-block--icon:last-child {
    padding-right: 0;
  }
  .flex-direction-nav--show .flex-direction-nav {
    display: block;
  }
  .menu__fixed-container .menu {
    width: 245px;
  }
  .mfp--management {
    font-size: 13px;
  }
}
@media only screen and (max-width:959px) and (min-width:768px) {
  .ui-callout__wrap {
    max-width: 740px;
  }
  .ui-callout--secondary-nav {
    margin-top: 0;
    padding: 50px 0;
  }
  .menu__fixed-container .menu {
    width: 185px;
  }
  .padded-content {
    padding: 40px!important;
  }
  .padded-content .one-half, .padded-content .one-third, .padded-content .two-third {
    width: 100%;
    margin-left: 0!important;
  }
  .refapp-badge {
    bottom: 75px;
  }
  .refapp-badge--bottom-per-sm {
    bottom: 10%;
  }
  .features-hero__content {
    width: 55%;
  }
  .features-hero__image {
    width: 80%;
  }
  .features-hero--secondary-nav {
    margin-top: 0;
    padding-top: 60px;
  }
  .features-hero--vpad-lg, .features-hero--vpad-md {
    padding: 60px;
  }
  .features-hero--secondary-nav.features-hero--vpad-lg {
    margin-top: 0;
    padding-top: 60px;
  }
  .features-hero--secondary-nav.features-hero--vpad-md {
    margin-top: 0;
    padding-top: 60px;
  }
  .features-hero--secondary-nav.features-hero--vpad-sm {
    margin-top: 0;
  }
  .features-hero--secondary-nav.features-hero--vpad-xs {
    margin-top: 0;
  }
  .features-hero--three-fourth .features-hero__content {
    width: 74%;
  }
  .features-hero--home-page .features-hero__content .features-block__item--half, .features-hero--home-page .features-hero__content .features-block__item--third, .features-hero--home-page .features-hero__content .features-block__item--fourth {
    margin-left: 0;
    width: 100%;
    max-width: 100%;
  }
  .features-hero.features-hero--trial {
    background: #022b3f !important;
    padding-bottom: 40px;
  }
  .features-hero.features-hero--trial .features-hero__item {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }
  .features-hero.features-hero--trial .features-hero__content {
    width: 100%;
  }
  .features-hero.features-hero--trial .features-hero__form {
    background: #134359;
    box-shadow: none;
    display: block;
    margin-left: 0;
    -webkit-box-ordinal-group: 2;
    -ms-flex-order: 1;
    order: 1;
    padding: 15px;
    position: relative;
    right: 0;
    top: 0;
    width: 100%;
  }
  .features-block--list .features-block__item {
    width: 50%;
    max-width: 50%;
  }
  .features-block--list .features-block__item--two-third {
    width: 62.5%;
    max-width: 62.5%;
  }
  .features-block--list .features-block__item--third {
    width: 30%;
    max-width: 30%;
  }
  .features-block--list .features-block__item--half-sm, .features-block--list .features-block__item--half, .features-block--list .features-block__item--fourth, .features-block--list .features-block__item--fifth {
    width: 47.5%;
    max-width: 47.5%;
  }
  .features-block__item--half.features-block--mar-sm {
    width: 49%;
    max-width: 49%;
  }
  .features-block__item--third.features-block--mar-sm {
    width: 32%;
    max-width: 32%;
  }
  .features-block__item--fourth.features-block--mar-sm {
    width: 23.5%;
    max-width: 23.5%;
  }
  .features-block__item--fifth.features-block--mar-sm {
    width: 18.4%;
    max-width: 18.4%;
  }
  .features-block--list .features-block__item--half-sm:nth-child(2n+1), .features-block--list .features-block__item--fourth:nth-child(2n+1), .features-block--list .features-block__item--fifth:nth-child(2n+1) {
    margin-left: 0;
  }
  .features-block--list .features-block__item--third.features-block__item--half-sm:nth-child(3n+1) {
    margin-left: auto;
  }
  .features-block--list .features-block__item.features-block--separator.features-block__item--fourth:nth-child(2n+1), .features-block--list .features-block__item.features-block--separator.features-block__item--fifth:nth-child(2n+1) {
    border-left: none;
    padding-left: 0;
    padding-right: 2.5%;
    margin-left: 0;
  }
  .features-block--image-align-bottom.features-block__item--third .features-block__content {
    padding-bottom: 200px;
    position: relative;
  }
  .features-block--image-align-bottom.features-block__item--third .features-block__content img {
    position: absolute;
    bottom: 0;
  }
  .features-block--stack-sm {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }
  .features-block--stack-sm .features-block__item--half, .features-block--stack-sm .features-block__item--third, .features-block--stack-sm .features-block__item--fourth, .features-block--stack-sm .features-block__item--fifth {
    margin-left: 0;
    width: 100%;
    max-width: 100%;
  }
  .features-block--stack-sm .features-block__img--oversize {
    width: 100%;
  }
  .features-block--border-left.features-block--icon-md .features-block__icon {
    left: -75px;
    width: 65px;
    max-width: 65px;
  }
  .no-flexbox .features-block--list .features-block__item {
    display: block;
    margin-left: 0;
    width: 100%;
    max-width: 100%;
  }
  .no-flexbox .features-block--list .features-block__image, .no-flexbox .features-block--list .features-block__content {
    display: block;
    width: 100%;
  }
  .no-flexbox .features-block__item--full.features-block--border-left.features-block--icon, .no-flexbox .features-block__item--half.features-block--border-left.features-block--icon {
    display: block;
    box-sizing: border-box;
    width: 90%;
    max-width: auto;
  }
  .ui-card--flex.ui-card--flex-third .ui-card {
    margin-left: 1.25%;
    margin-right: 1.25%;
    width: 47.5%;
  }
  .ui-card.ui-card--featured .ui-card__featured-body {
    display: block;
    width: 100%;
  }
  .no-flexbox .ui-card--flex.ui-card--flex-third .ui-card {
    margin-left: 0.8%;
    margin-right: 0.8%;
  }
  .flexslider--nav-top .flexslider {
    padding: 0 0 40px;
  }
  .flexslider--nav-blocks.fleslider--nav-fulltext .flex-control-paging li a, .flexslider--nav-blocks.fleslider--nav-fulltext .flex-control-paging li button {
    font-size: 0.75rem;
    padding: 0.25em;
  }
  .flexslider--nav-top.fleslider--nav-fulltext .flex-control-nav li {
    margin-bottom: 6px;
  }
  .flex-direction-nav--show .flex-direction-nav {
    display: block;
  }
  .flexslider--feature-case-study .flexslider--feature-case-study__img {
    position: relative;
    margin-bottom: -150px;
  }
  .flexslider--feature-case-study .flexslider .flex-control-nav {
    bottom: 10px !important;
  }
  .flexslider--feature-case-study ul li .one-half {
    float: none;
    margin: 0;
    width: 100%;
  }
  .flexslider--feature-case-study .flexslider--feature-case-study__container {
    margin: 0!important;
    min-height: 0;
    width: 100%;
  }
  .flexslider__mosaic-content {
    font-size: 0.85em;
  }
  .flexslider__mosaic-content h4 {
    font-size: 1.5em;
  }
  .flexslider--mosaic-values {}
  .flexslider--mosaic-values .flexslider__mosaic-content {
    bottom: 0;
    height: auto !important;
  }
  .flexslider--mosaic-locations {}
  .flexslider--mosaic-locations .flexslider__mosaic-content {
    margin-bottom: 10px;
    position: relative;
    bottom: initial;
    width: 100%;
  }
  .flexslider--hmar {
    margin-left: 0;
    margin-right: 0;
  }
  .flexslider--product-slider .flexslider, .flexslider--product-slider.flexslider--nav-top .flexslider {
    padding: 0 30px 40px;
  }
  .flexslider--product-slider .flexslider__more {
    padding: 20px 20px 0;
  }
  .no-flexbox .flexslider--nav-top .flexslider {
    padding: 80px 0 40px;
  }
  .no-flexbox .flexslider--product-slider .flexslider, .no-flexbox .flexslider--product-slider.flexslider--nav-top .flexslider {
    padding: 50px 30px 40px;
  }
  .tabs--buttons .ui-tabs-nav .ui-state-default a {
    font-size: 0.875em;
  }
  .tabs--folder .ui-tabs-nav .ui-state-default a {
    font-size: 0.75em;
  }
  .ui-thumb--locations .ui-thumb__title {
    font-size: 16px;
  }
  .ui-thumb--locations .ui-thumb__small-details {
    font-size: 12px;
  }
  .ui-timeline--igHistory {
    padding: 250px 0;
  }
  .lightbox--padding-lg.mfp-wrap .mfp-content__container, .lightbox--padding-lg.lightbox--blog.mfp-wrap .content_area {
    padding: 50px 75px;
  }
  .mfp--management {
    background-image: none !important;
    height: auto;
  }
  .mfp--management table td:nth-child(2) {
    background: rgba(255, 255, 255, 0.65);
  }
}
@media only screen and (max-width:767px) and (min-width:480px) {
  .features-hero__content .features-hero__employee {
    width: 85%!important;
  }
  .features-hero__employee .testimonial blockquote {
    line-height: 1em;
  }
  .features-hero__employee p {
    font-size: .75em;
  }
  .ui-callout__wrap {
    max-width: 440px;
  }
  .features-block--stack-xs {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }
  .features-block--stack-xs .features-block__item--half, .features-block--stack-xs .features-block__item--third, .features-block--stack-xs .features-block__item--fourth, .features-block--stack-xs .features-block__item--fifth {
    margin-left: 0;
    width: 100%;
    max-width: 100%;
  }
  .features-block--stack-xs .features-block__img--oversize {
    width: 100%;
  }
  .tabs--folder .ui-tabs-nav .ui-state-default a {
    font-size: 0.65em;
    padding: 5px 10px;
    box-sizing: border-box;
  }
  .lightbox.mfp-wrap .mfp-content {
    width: 85%;
  }
  .lightbox--padding-lg.mfp-wrap .mfp-content__container, .lightbox--padding-lg.lightbox--blog.mfp-wrap .content_area {
    padding: 50px 75px;
  }
}
@media only screen and (max-width:767px) {
  .ui-callout__wrap {
    max-width: 300px;
  }
  .ui-callout--secondary-nav {
    margin-top: 0;
    padding: 50px 0;
  }
  .ui-carousel--client {
    display: block;
  }
  .ui-carousel--client li {
    display: inline-block;
  }
  .padded-content {
    padding: 20px!important;
  }
  .menu__layout>.column-block:first-child {
    margin-top: 40px;
  }
  .menu__layout>.column-block:first-child, .menu__layout>.column-block:last-child {
    width: 100%;
  }
  .menu__mobile-toggle {
    display: block;
  }
  .menu__layout>.column-block:first-child .menu {
    display: none;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .menu__fixed-container {
    margin: 0;
    position: relative;
    width: 100%;
  }
  .menu__fixed-container .menu {
    width: 100%;
  }
  .menu.menu--mobilize {
    width: 100%;
    padding-bottom: 20px;
  }
  .menu--mobilize .menu__item:last-child {
    margin-bottom: 20px;
  }
  .menu--mobilize .menu__sub {
    display: block!important;
  }
  .menu--mobilize .menu__category:hover:not(a), .menu--mobilize .menu__category.menu__toggle:hover, .menu--mobilize .menu__category:focus:not(a), .menu--mobilize .menu__category.menu__toggle:focus {
    color: #666;
    cursor: auto;
  }
  .menu--mobilize.menu--collapsible-disable .menu__category.menu__toggle:hover, .menu--mobilize.menu--collapsible-disable .menu__category.menu__toggle:focus {
    color: #0099ff;
    cursor: pointer;
  }
  .menu--mobilize .menu__toggle:after, .menu--mobilize .menu__toggle:hover:after, .menu--mobilize .menu__toggle:focus:after {
    display: none!important;
  }
  .no-flexbox .menu__layout>.column-block {
    display: block;
    width: 100%;
  }
  .refapp-badge {
    position: relative;
    bottom: auto;
    width: 225px;
    height: 225px;
  }
  .refapp-badge__content {
    font-size: 0.85em;
    width: 60%;
  }
  .refapp-badge__content>p {
    margin-bottom: 10px;
  }
  .refapp-badge--bottom-per-sm {
    bottom: 0;
  }
  .refapp-badge--right {
    right: 0;
  }
  .flexslider--nav-top .flexslider {
    padding: 0 0 40px;
  }
  .flexslider--nav-top .flexslider .flexslider-inner {
    padding: 20px 0 0;
  }
  .flexslider--nav-blocks.flexslider--nav-fulltext .flex-control-paging li a, .flexslider--nav-blocks.flexslider--nav-fulltext .flex-control-paging li button {
    font-size: 0.75rem;
    padding: 0.25em;
  }
  .flexslider--nav-top.flexslider--nav-fulltext .flex-control-nav li {
    margin-bottom: 6px;
  }
  .flex-direction-nav--show .flex-direction-nav {
    display: block;
  }
  .flexslider--product-slider .flexslider, .flexslider--product-slider.flexslider--nav-top .flexslider {
    padding: 0 15px 40px;
  }
  .flexslider--product-slider.fleslider--nav-fulltext .flexslider, .flexslider--product-slider.flexslider--nav-top.flexslider--nav-fulltext .flexslider {
    padding: 0 15px 40px;
  }
  .flexslider--product-slider .flexslider__more {
    padding: 20px 20px 0;
  }
  .consulting-experts .flexslider--nav-top .flexslider {
    padding: 20px 0 20px;
  }
  .flexslider--feature-case-study .flexslider--feature-case-study__img {
    position: relative;
    margin-bottom: -150px;
  }
  .flexslider--feature-case-study .flexslider .flex-control-nav {
    bottom: 10px !important;
  }
  .flexslider--feature-case-study ul li .one-half {
    float: none;
    margin: 0;
    width: 100%;
  }
  .flexslider--feature-case-study .flexslider--feature-case-study__container {
    margin: 0!important;
    min-height: 0;
    width: 100%;
  }
  .flexslider__mosaic-content {
    display: block;
    position: relative;
    left: 0;
    bottom: initial;
    margin-bottom: 10px;
    width: 100%;
    height: auto !important;
  }
  [data-flexslider-theme="slidernav-logos"] .flex-control-nav {
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    padding-bottom: 20px;
    text-align: left;
  }
  [data-flexslider-theme="slidernav-logos"] .flex-control-nav li {
    color: #666;
    font-weight: bold;
    padding: 8px;
    height: auto;
    width: auto;
    box-sizing: border-box;
    background: transparent !important;
    margin-bottom: 15px;
    font-size: 0.75rem;
  }
  [data-flexslider-theme="slidernav-logos"] .flex-control-nav li::before {
    background: transparent;
  }
  [data-flexslider-theme="slidernav-logos"] .flex-control-nav li.flex-active_c::after, [data-flexslider-theme="slidernav-logos"] .flex-control-nav li:hover::after, [data-flexslider-theme="slidernav-logos"] .flex-control-nav li:focus::after {
    height: 3px;
    margin-bottom: -8px;
  }
  [data-flexslider-theme="slidernav-logos"] .flex-control-nav li img {
    display: none;
  }
  [data-flexslider-theme="slidernav-logos"] .flex-control-nav li span {
    display: block;
  }
  .flexslider--hmar {
    margin-left: 0;
    margin-right: 0;
  }
  .no-flexbox .flexslider--nav-top .flexslider {
    padding: 80px 0 40px;
  }
  .no-flexbox .flexslider--product-slider .flexslider, .no-flexbox .flexslider--product-slider.flexslider--nav-top .flexslider {
    padding: 50px 15px 40px;
  }
  .no-flexbox .flexslider--product-slider.fleslider--nav-fulltext .flexslider, .no-flexbox .flexslider--product-slider.flexslider--nav-top.flexslider--nav-fulltext .flexslider {
    padding: 90px 15px 40px;
  }
  .features-hero__item {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }
  .features-hero__content {
    width: 100%;
  }
  .features-hero__image {
    position: relative;
    top: 0;
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
    width: 100%;
  }
  .features-hero__image--top {
    -webkit-box-ordinal-group: 1;
    -ms-flex-order: 0;
    order: 0;
    padding-bottom: 20px;
  }
  .features-hero__image--bottom {
    -webkit-box-ordinal-group: 3;
    -ms-flex-order: 2;
    order: 2;
    padding-top: 20px;
  }
  .features-hero__image--crop-bottom {
    margin-bottom: -200px;
  }
  .features-hero--align-right .features-hero__image {
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
  }
  .features-hero--vpad-lg, .features-hero--vpad-md {
    padding: 60px;
  }
  .features-hero--secondary-nav {
    margin-top: 0;
    padding-top: 60px;
  }
  .features-hero--secondary-nav.features-hero--vpad-lg {
    margin-top: 0;
    padding-top: 60px;
  }
  .features-hero--secondary-nav.features-hero--vpad-md {
    margin-top: 0;
    padding-top: 60px;
  }
  .features-hero--secondary-nav.features-hero--vpad-sm {
    margin-top: 0;
  }
  .features-hero--secondary-nav.features-hero--vpad-xs {
    margin-top: 0;
  }
  .features-hero--three-fourth .features-hero__content, .features-hero--home-page .features-hero__content {
    width: 100%;
  }
  .features-hero--three-fourth .features-hero__image, .features-hero--home-page .features-hero__image {
    margin-bottom: -200px;
    position: relative;
    top: 0;
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
    width: 100%;
  }
  .features-hero--align-left .features-hero__image {
    position: relative;
    top: 0;
    right: auto;
    left: auto;
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
    width: 100%;
  }
  .features-hero--align-left .features-hero__content {
    left: auto;
  }
  .features-hero--biz-audience {
    background-image: url("https://static.infragistics.com/marketing/Website/products/shareplus/business-teams/colors-960.png");
    background-size: 50%;
  }
  .features-hero--biz-audience .features-hero__content {
    width: 100%;
  }
  .features-hero--biz-audience .features-hero__image {
    margin-bottom: -100px;
    width: 90%;
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
  }
  .features-hero--biz-teams .features-hero__image {
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
    width: 100%;
  }
  .features-hero.features-hero--trial {
    background: #022b3f !important;
    padding-bottom: 40px;
  }
  .features-hero.features-hero--trial .features-hero__item {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }
  .features-hero.features-hero--trial .features-hero__content {
    width: 100%;
  }
  .features-hero.features-hero--trial .features-hero__form {
    background: #134359;
    box-shadow: none;
    display: block;
    margin-left: 0;
    -webkit-box-ordinal-group: 2;
    -ms-flex-order: 1;
    order: 1;
    padding: 15px;
    position: relative;
    right: 0;
    top: 0;
    width: 100%;
  }
  .no-flexbox .features-hero {
    display: block;
  }
  .no-flexbox .features-hero__content {
    display: block;
  }
  .no-flexbox .features-hero__image, .no-flexbox .features-hero--align-right .features-hero__image {
    display: block;
    position: relative;
    top: 0;
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
  }
  .no-flexbox .features-hero__image--top {
    padding-top: 20px;
  }
  .features-block {
    -ms-flex-direction: column;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
  }
  .features-block__image {
    -webkit-box-ordinal-group: 0;
    -ms-flex-order: -1;
    order: -1;
    padding: 15px 0;
  }
  .features-block__image, .features-block__content {
    width: 100%;
  }
  .features-block__img--oversize {
    width: 100%;
  }
  .features-block__item--third, .features-block__item--fourth {
    width: 50%;
  }
  .features-block--vpad-none .features-block__item, .features-block--vpad-60 .features-block__item, .features-block--vpad-80 .features-block__item {
    padding: 40px 0;
  }
  .features-block--list {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }
  .features-block--list .features-block__item {
    width: 100%;
  }
  .features-block__item--half.features-block--mar-sm, .features-block__item--third.features-block--mar-sm, .features-block__item--fourth.features-block--mar-sm, .features-block__item--fifth.features-block--mar-sm {
    margin-left: 0;
    width: 100%;
    max-width: 100%;
  }
  .features-block--list .features-block__item--half, .features-block--list .features-block__item--two-third, .features-block--list .features-block__item--third, .features-block--list .features-block__item--fourth, .features-block--list .features-block__item--fifth, .features-block--list-equal-columns .features-block__item--half, .features-block--list-equal-columns .features-block__item--two-third, .features-block--list-equal-columns .features-block__item--third, .features-block--list-equal-columns .features-block__item--fourth, .features-block--list-equal-columns .features-block__item--fifth {
    margin-left: 0;
    width: 100%;
    max-width: 100%;
  }
  .features-block--list .features-block__item.features-block--separator {
    border-left: none;
    padding-left: 0;
    padding-right: 0;
    margin-left: 0;
  }
  .features-block--list .features-block__item.features-block--separator:first-child {
    padding-top: 0;
  }
  .features-block__item--full.features-block--border-left.features-block--icon, .features-block__item--half.features-block--border-left.features-block--icon {
    width: 90%;
    max-width: auto;
  }
  .features-block__item--half.features-block--border-left.features-block--icon.features-block--icon-md {
    margin-left: 20%;
    width: 80%;
    max-width: auto;
  }
  .features-block--border-left.features-block--icon-md .features-block__icon {
    left: -75px;
    width: 60px;
    max-width: 60px;
  }
  .features-block__item.features-block--cta-block {
    position: relative;
    padding-bottom: inherit;
  }
  .features-block__item.features-block--cta-block .features-block__cta-block {
    position: relative;
    bottom: 0;
  }
  .text--align-center .features-block__item.features-block--cta-block .features-block__cta-block {
    left: 0;
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
  }
  .features-block__item.features-block--border-left.features-block--cta-block, .features-block--list .features-block__item.features-block--border-left.features-block--cta-block {
    padding-bottom: inherit;
  }
  .features-block__item.features-block--cta.zero-padding-top, .features-block__item.features-block--cta-block.zero-padding-top {
    margin-top: 30px;
  }
  .features-block__item.features-blocks--cta.zero-padding-top:first-child, .features-block__item.features-blocks--cta-block.zero-padding-top:first-child {
    margin-top: 0;
  }
  .features-block--image-align-bottom.features-block__item--third .features-block__content {
    padding-bottom: 0;
  }
  .features-block--image-align-bottom.features-block__item--third .features-block__content img {
    position: relative;
  }
  .no-flexbox .features-block__image, .no-flexbox .features-block__content {
    display: block;
    width: 100%;
  }
  .no-flexbox .features-block__image {
    padding: 15px 0;
  }
  .no-flexbox .features-block--list .features-block__item {
    display: block;
    width: 100%;
  }
  .no-flexbox .features-block--list.features-block--icon-container {
    margin-left: 0;
  }
  .no-flexbox .features-block__item--full.features-block--border-left.features-block--icon, .no-flexbox .features-block__item--half.features-block--border-left.features-block--icon {
    display: block;
    margin-left: 60px;
    width: 90%;
    max-width: auto;
  }
  .ui-card.ui-card--featured .ui-card__featured-body {
    display: block;
    width: 100%;
  }
  .ui-card--flex.ui-card--flex-third .ui-card {
    width: 98%;
  }
  .tabs--buttons .ui-tabs-nav .ui-state-default {
    box-sizing: border-box;
    overflow: hidden;
    padding: 3px 5px;
    width: 100%;
  }
  .tabs--buttons .ui-tabs-nav .ui-state-default a {
    box-sizing: border-box;
    display: block;
    font-size: 0.875em;
    margin: 0;
    width: 100%;
  }
  .tabs--folder .ui-tabs-nav .ui-state-default a {
    font-size: 0.65em;
    padding: 5px 10px;
    box-sizing: border-box;
  }
  .tabs-nav--items-hmar-sm .ui-tabs-nav a {
    margin: 0;
  }
  .tabs-nav--items-min-width-md .ui-tabs-nav a {
    min-width: auto;
  }
  .ui-timeline--igHistory {
    padding: 0;
    overflow: visible;
  }
  .ui-timeline--igHistory .ui-timeline__item {
    font-size: 14px;
    padding: 10px;
    position: relative;
    left: 0 !important;
    top: initial !important;
    bottom: initial !important;
    width: 100%;
  }
  .ui-timeline--igHistory .ui-timeline__item>* {
    margin-bottom: 5px;
  }
  .ui-timeline--igHistory .ui-timeline__item.ui-timeline__item--top:after, .ui-timeline--igHistory .ui-timeline__item.ui-timeline__item--bottom:after {
    top: 50% !important;
    bottom: initial !important;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }
  .lightbox.mfp-wrap .mfp-content {
    width: 90%;
  }
  .lightbox--padding-lg.mfp-wrap .mfp-content__container, .lightbox--padding-lg.lightbox--blog.mfp-wrap .content_area {
    padding: 50px;
  }
  .lightbox--padding-md.mfp-wrap .mfp-content__container, .lightbox--padding-md.lightbox--blog.mfp-wrap .content_area {
    padding: 25px;
  }
  .mfp--management {
    background-image: none !important;
    height: auto;
  }
  .mfp--management table td:nth-child(2) {
    background: rgba(255, 255, 255, 0.65);
  }
  .blogtp--multi-column .community-box ul {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-flow: column wrap;
    flex-flow: column wrap;
  }
  .blogtp--multi-column .community-box ul li {
    margin-left: 0%;
    width: 100%;
  }
  figure.testimonial {
    padding-left: 30px;
  }
}
@media only screen and (max-width:480px) {
  .features-hero--image-md .features-hero__image {
    margin-bottom: -150px;
  }
  .features-hero--biz-audience {
    background-image: url("https://static.infragistics.com/marketing/Website/products/shareplus/business-teams/colors-480.png");
  }
  .features-block__item--half.features-block--border-left.features-block--icon.features-block--icon-md {
    margin-left: 20%;
    width: 80%;
    max-width: auto;
  }
  .features-block--border-left.features-block--icon-md .features-block__icon {
    left: -55px;
    width: 45px;
    max-width: 45px;
  }
  .no-flexbox .features-block__item--full.features-block--border-left.features-block--icon, .no-flexbox .features-block__item--half.features-block--border-left.features-block--icon {
    display: block;
    box-sizing: border-box;
    width: 80%;
    max-width: auto;
  }
  .ui-callout--with-thumbnail .ui-callout__wrap {
    position: relative;
    padding-left: 0;
  }
  .ui-callout--with-thumbnail .ui-callout__thumbnail {
    position: relative;
    left: 50%;
    margin: 0 auto 20px;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
  }
  .testimonial {
    padding-left: 20px;
  }
  .testimonial blockquote {
    font-size: 1.2em;
  }
  .testimonial blockquote:before {
    font-size: 2em;
  }
  .testimonial figcaption {
    font-size: 0.75em;
  }
  .refapp-badge {
    background-position: -3px center;
    width: 150px;
    height: 150px;
  }
  .refapp-badge__content>h4, .refapp-badge__content>.text--h4 {
    font-size: 14px;
  }
  .refapp-badge__content {
    font-size: 0.65em;
  }
  .story-teaser__content .sub-headline.text--h5 {
    font-size: 1em;
  }
  .tabs--folder .ui-tabs-nav li {
    display: block;
  }
  .tabs--folder .ui-tabs-nav .ui-state-default a {
    border: 1px solid #dedede!important;
    display: block;
    width: 100%;
    box-sizing: border-box;
  }
  .tabs--folder .ui-tabs-nav .ui-state-active a {
    background: #dedede !important;
    border: 1px solid #dedede!important;
    display: block;
    width: 100%;
  }
  .tabs--folder.tabs--folder-azure-radiance-bg .ui-tabs-nav .ui-state-default a {
    border: 1px solid #fff!important;
    display: block;
    width: 100%;
    box-sizing: border-box;
  }
  .tabs--folder.tabs--folder-azure-radiance-bg .ui-tabs-nav .ui-state-active a {
    background: #fff !important;
    border: 1px solid #fff!important;
    display: block;
    width: 100%;
  }
  .consulting-experts .flexslider--nav-top .flexslider {
    padding: 20px 0 20px;
  }
  .consulting-testimonials .flexslider {
    padding: 40px 0 0;
  }
  .flexslider--product-slider .flexslider__more {
    padding: 20px 0 0;
  }
}
.hero-feature.hero-feature-rplus-server .hero-feature-bg {
  background:transparent url("https://static.infragistics.com/marketing/Website/products/reportplus/server/server-top-header.png?v=201801260900") no-repeat scroll left bottom;
  background-size:60%;
  overflow:hidden;
}
.hero-feature.hero-feature-rplus-server div .one-third .action-button {
  margin-bottom:5px;
  margin-left:5px;
}
.hero-feature.hero-feature-rplus-server div .one-third .action-button:first-child {
  margin-left:0;
}
.gdpr-block {
  display:none;
  top:auto;
  bottom:0;
  width:100%;
  box-sizing:border-box;
  z-index:2147483640;
}
.gdpr-block .features-block {
  max-width:1170px;
  width:calc(100% - 130px);
  margin:0 auto;
  box-sizing:border-box;
  padding:0 300px 0 0;
}
@media only screen and (max-width:960px) {
  .gdpr-block {
    top: 0;
    bottom: auto;
    z-index: 9;
  }
  .gdpr-block-sticky {
    position: absolute;
    top: 60px;
  }
  .gdpr-block .features-block {
    display: block;
    font-size: 14px;
    width: 100%;
    padding: 0;
  }
  .gdpr-block .features-block>div {
    box-sizing: border-box;
    width: 100%;
    max-width: 100%;
    padding: 15px 0 0 0;
    text-align: left;
  }
}
.cover-prompt {
  display:table;
  top:0;
  left:0;
  width:100%;
  height:100%;
  z-index:1043;
  position:fixed;
  outline:none !important;
}
.cover-prompt:after {
  content:"";
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background:#0b0b0b;
  opacity:0.8;
}
.cover-wrapper {
  display:table-cell;
  vertical-align:middle;
}
.marketo-prompt {
  position:relative;
  display:table;
  margin:0 auto;
  padding:10px 15px;
  box-sizing:border-box;
  min-width:380px;
  z-index:9999;
}
.prompt-title {
  margin-bottom:30px;
}
.prompt-text {
  margin-bottom:60px;
}
.marketo-prompt hr {
  width:100%;
  position:absolute;
  left:0;
  box-sizing:border-box;
}
.buttons-wrap {
  padding-top:10px;
}
.prompt-yes {
  margin-right:10px;
}
.chevron-badge {
  background-color:#0099ff;
  height:100px;
  position:relative;
  width:150px;
  z-index:5;
}
.chevron-badge::before {
  border-bottom:35px solid #0099ff;
  border-left:75px solid transparent;
  border-right:75px solid transparent;
  content:"";
  height:0;
  left:0;
  position:absolute;
  top:100px;
  width:0;
  transform:rotate(180deg);
}
.chevron-badge__img {
  position:absolute;
  top:10px;
  right:20px;
  display:block;
  width:110px;
}
.chevron-badge--right {
  position:absolute;
  left:71%;
  top:0;
}
.chevron-badge--right-center {
  position:absolute;
  left:53%;
  top:0;
}
.chevron-badge--center {
  position:absolute;
  left:50%;
  transform:translateX(-50%);
  top:0;
}
@media only screen and (max-width:1645px) {
  .chevron-badge--right {
    left: 78% !important;
  }
}
[class*="chevron-badge--"].chevron-badge--secondary-nav {
  top:55px;
}
[class*="chevron-badge--"].chevron-badge--secondary-nav {
  top:55px;
}
@media (max-width:960px) {
  [class*="chevron-badge--"].chevron-badge--secondary-nav {
    top: 0;
  }
}
.be-section {
  overflow:visible;
}
.pricing-blocks {
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-orient:horizontal;
  -webkit-box-direction:normal;
  -ms-flex-direction:row;
  flex-direction:row;
  -ms-flex-wrap:nowrap;
  flex-wrap:nowrap;
  -webkit-box-align:stretch;
  -ms-flex-align:stretch;
  align-items:stretch;
  text-align:center;
  width:100%;
}
.pricing-blocks.pricing-blocks--align-left {
  text-align:left;
}
.pricing-blocks__item--featured {
  box-shadow:0 0 12px 2px rgba(0, 0, 0, 0.3);
  transform:none;
}
.pricing-blocks__item--featured .pricing-blocks__label {
  font-size:0.75rem;
}
.pricing-blocks__item {
  -webkit-box-flex:1;
  -ms-flex:1 1 auto;
  flex:1 1 auto;
  -webkit-box-ordinal-group:2;
  -ms-flex-order:1;
  order:1;
  overflow:hidden;
  padding:40px 0;
  position:relative;
  border:1px solid #ccc;
}
.pricing-blocks__item::before {
  background:#4991c5;
  content:'';
  display:inline-block;
  width:100%;
  height:4px;
  position:absolute;
  top:0;
  left:0;
  right:0;
}
[data-theme*="indigo"] .pricing-blocks__item::before {
  display:none;
}
.pricing-blocks--half {
  width:48%;
  margin-left:1%;
  margin-right:1%;
}
.pricing-blocks--third {
  width:30%;
  margin-left:1%;
  margin-right:1%;
}
.pricing-blocks--fourth {
  width:25%;
  margin-left:1%;
  margin-right:1%;
}
.pricing-blocks__product-details {
  padding:0 1.5rem 1rem;
}
.pricing-blocks__product-details .ui-form {
  margin-top:13px;
  margin-bottom:10px;
}
.pricing-blocks__product {
  display:block;
  font-size:1.5rem;
  margin-bottom:10px;
  line-height:normal;
}
.pricing-blocks__opts-wrap {
  position:relative;
}
.pricing-blocks__price-container {
  border-bottom:1px solid #ccc;
  color:#666;
  padding:0 1.5rem 1.5rem;
  text-align:center;
}
.pricing-blocks__price {
  display:block;
  font-size:2.75rem;
  margin-bottom:0.75rem;
  line-height:1em;
  color:#333;
}
[data-theme*="indigo"] .pricing-blocks__price {
  color:inherit;
}
.pricing-blocks__price>span {
  display:inline-block;
  margin:5px 0;
}
.pricing-blocks__price>.pricing-blocks__price-original {
  font-size:0.85em;
}
.pricing-blocks__subtitle {
  display:block;
  font-size:0.875rem;
  margin-bottom:0;
  line-height:normal;
}
.pricing-blocks__content {
  font-size:0.875rem;
  line-height:1.46em;
  margin-top:15px;
  padding-left:0;
}
.pricing-blocks__no-opts-msg {
  display:none;
  font-size:0.875rem;
  position:absolute;
  top:60%;
  left:20px;
  right:20px;
  text-align:center;
}
[data-product="70"] .pricing-blocks__no-opts-msg, [data-product="03"] .pricing-blocks__no-opts-msg {
  display:block;
}
.pricing-blocks__tags .pricing-blocks__tag {
  border-radius:2px;
  display:inline-block;
  position:relative;
  left:0;
  top:auto;
  margin:3px 5px 10px!important;
  -webkit-transform:none;
  -ms-transform:none;
  transform:none;
}
.pricing-blocks__tags .pricing-blocks__tag:first-child {
  margin-left:0 !important;
}
.pricing-blocks__tag {
  background:#666;
  color:#fff;
  font-size:0.7rem;
  line-height:1.3em;
  padding:3px 6px;
  border-radius:2px;
}
.pricing-blocks__label {
  background:#4991c5;
  color:#fff;
  font-size:0.75rem;
  font-weight:bold;
  padding:0.5em 1em;
  line-height:1.3em;
  position:absolute;
  top:0;
  left:50%;
  text-transform:uppercase;
  -webkit-transform:translateX(-50%);
  -ms-transform:translateX(-50%);
  transform:translateX(-50%);
  white-space:nowrap;
}
[data-product="91"] .pricing-blocks__label, [data-pricing-theme="ultimate"] .pricing-blocks__label, .pricing-blocks__item[data-product="91"]::before, .pricing-blocks__item[data-pricing-theme="ultimate"]::before, .pricing-blocks__tag {
  background:#0099ff;
}
[data-product="92"] .pricing-blocks__label, [data-pricing-theme="professional"] .pricing-blocks__label, .pricing-blocks__item[data-product="92"]::before, .pricing-blocks__item[data-pricing-theme="professional"]::before, .pricing-blocks__tag {
  background:#004677;
}
[data-product="40"] .pricing-blocks__label, [data-product="A4"] .pricing-blocks__label, [data-product="A7"] .pricing-blocks__label, [data-product="A9"] .pricing-blocks__label, [data-product="B0"] .pricing-blocks__label, [data-product="B1"] .pricing-blocks__label, [data-product="B2"] .pricing-blocks__label, [data-product="B3"] .pricing-blocks__label, [data-pricing-theme="ignite"] .pricing-blocks__label, .pricing-blocks__item[data-product="40"]::before, .pricing-blocks__item[data-product="A4"]::before, .pricing-blocks__item[data-product="A7"]::before, .pricing-blocks__item[data-product="A9"]::before, .pricing-blocks__item[data-product="B0"]::before, .pricing-blocks__item[data-product="B1"]::before, .pricing-blocks__item[data-product="B2"]::before, .pricing-blocks__item[data-product="B3"]::before, .pricing-blocks__item[data-pricing-theme="ignite"]::before, [data-pricing-theme="ignite"] .pricing-blocks__tag {
  background:#f59122;
}
[data-pricing-theme="indigo"] .pricing-blocks__label, .pricing-blocks__item[data-pricing-theme="indigo"]::before, [data-pricing-theme="indigo"] .pricing-blocks__tag {
  background:#303ba6;
}
[data-pricing-theme="reveal"] .pricing-blocks__label, .pricing-blocks__item[data-pricing-theme="reveal"]::before, [data-pricing-theme="reveal"] .pricing-blocks__tag {
  background:#ec417a;
}
[data-pricing-theme="slingshot"] .pricing-blocks__label, .pricing-blocks__item[data-pricing-theme="slingshot"]::before, [data-pricing-theme="slingshot"] .pricing-blocks__tag {
  background:#5b88c6;
}
.pricing-blocks__item[data-pricing-theme="devtools"]::before, [data-pricing-theme="devtools"] .pricing-blocks__tag {
  background:#1182b2;
}
.pricing-blocks.pricing-blocks--wrap {
  -ms-flex-wrap:wrap;
  flex-wrap:wrap;
}
.pricing-blocks--wrap .pricing-blocks--third {
  max-width:30%;
  margin-bottom:30px;
  margin-left:1.5%;
  margin-right:1.5%;
}
.pricing-blocks--wrap .pricing-blocks--third:last-child {
  margin-bottom:30px!important;
}
.pricing-blocks--wrap .pricing-blocks--fourth {
  max-width:25%;
  margin-bottom:30px;
  margin-left:1.5%;
  margin-right:1.5%;
}
.pricing-blocks--wrap .pricing-blocks--fourth:last-child {
  margin-bottom:30px!important;
}
.pricing-blocks__item.condensed {
  padding-top:1rem;
  padding-bottom:1rem;
}
.pricing-blocks__item.condensed .pricing-blocks__price-container {
  border-bottom:none;
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-align:center;
  -ms-flex-align:center;
  align-items:center;
  padding-top:0;
}
.pricing-blocks__item.condensed .pricing-blocks__item-wrap {
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-orient:vertical;
  -webkit-box-direction:normal;
  -ms-flex-direction:column;
  flex-direction:column;
  height:100%;
}
.pricing-blocks__item.condensed .pricing-blocks__content {
  font-size:0.8125rem;
}
.pricing-blocks__item.condensed .pricing-blocks__product-details {
  margin-bottom:auto;
  padding:0 1.5rem 0.75rem;
}
.pricing-blocks__item.condensed .pricing-blocks__price {
  font-size:2rem;
  margin:0.25rem 0;
  text-align:left;
}
.pricing-blocks__item.condensed .pricing-blocks__subtitle {
  font-size:0.75rem;
  margin:0.25rem 0 0.25rem 1rem;
  line-height:1.55em;
  text-align:left;
}
.pricing-blocks__item.condensed .pricing-blocks__product {
  font-size:1rem;
  font-weight:bold;
}
.pricing-blocks__item.condensed .disclaimer {
  display:block;
  font-size:0.75rem;
  color:#666;
  margin:1rem auto 0;
  text-align:center;
}
.pricing-blocks__item.condensed .pricing-blocks__cta-group {
  padding:0 1.5rem;
}
.pricing-blocks__item.condensed .ui-btn {
  display:block;
  margin:0;
  padding:0.875rem 1.25rem;
}
.pricing-blocks__item.condensed .ui-btn.ui-btn--default.ui-btn--invert {
  color:#666;
  border-color:#b4b4b4;
}
.pricing-blocks__item.condensed .ui-btn.ui-btn--default.ui-btn--invert:hover, .pricing-blocks__item.condensed .ui-btn.ui-btn--default.ui-btn--invert:focus {
  color:#fff;
  border-color:#0099ff;
}
.pricing-blocks__allproducts-wrap, .pricing-blocks__item[data-align-price="true"] .pricing-blocks__item-wrap {
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-orient:vertical;
  -webkit-box-direction:normal;
  -ms-flex-direction:column;
  flex-direction:column;
  height:100%;
}
.pricing-blocks__allproducts-wrap .pricing-blocks__product-details {
  margin-bottom:auto;
}
.pricing-blocks__item[data-align-price="true"] {}
.pricing-blocks__item[data-align-price="true"] .pricing-blocks__opts-wrap {
  margin-top:auto !important;
  min-height:325px;
}
.pricing-blocks__item[data-align-price="true"][data-product="ALL"] .pricing-blocks__opts-wrap {
  min-height:auto;
}
.pricing-blocks__options-headline {
  font-size:0.875rem;
  font-weight:bold;
  margin:1.5rem 1.5rem 0;
  text-transform:uppercase;
}
.pricing-blocks__options-mult-user-msg {
  margin:0.5rem 1.5rem 0;
  display:block;
  box-sizing:content-box;
  font-size:0.8rem;
  font-weight:bold;
  color:#149D79 !important;
  line-height:1.25rem;
  width:auto!important;
}
.pricing-blocks__options, .pricing-blocks__options:last-child {
  box-sizing:border-box;
  margin:5px 0 !important;
  padding:0.5rem 1.5rem;
  position:relative;
  text-align:left;
}
.pricing-blocks__options[data-option="subscriptionType"]::before {
  content:"";
  display:block;
  position:absolute;
  bottom:0;
  left:1.5rem;
  right:1.5rem;
  border-top:1px solid #ccc;
  height:1px;
}
.pricing-blocks__select:focus {
  outline:1px auto currentColor;
  outline-offset:2px;
}
.pricing-blocks__checkbox-item, .pricing-blocks__checkbox-item:last-child {
  cursor:pointer;
  display:block;
  line-height:1.3em;
  margin:5px 0 !important;
  padding:3px 7px 3px 30px;
  position:relative;
}
.pricing-blocks__checkbox-item input {
  position:absolute;
  visibility:hidden;
}
.pricing-blocks__checkbox-label {
  font-size:15px;
  vertical-align:middle;
}
.pricing-blocks__checkbox-label .pricing-blocks__checkbox-price {
  box-sizing:border-box;
  font-weight:bold;
}
.pricing-blocks__checkbox-label .pricing-blocks__checkbox-price span {
  font-weight:bold;
}
html[lang="ja"] .pricing-blocks__checkbox-label .pricing-blocks__checkbox-price {
  width:100px;
}
.pricing-blocks__checkbox-label .pricing-blocks__checkbox-details {
  box-sizing:border-box;
  display:inline-block;
  margin-right:0.75rem;
  min-width:60px;
}
.pricing-blocks__checkbox-label .pricing-blocks__checkbox-details .pricing-blocks__ck-discount, .pricing-blocks__checkbox-label .pricing-blocks__checkbox-price .pricing-blocks__ck-discount {
  background:#19AD87;
  border-radius:2px;
  color:#fff;
  display:inline-block;
  font-size:0.75rem;
  font-weight:bold;
  line-height:1.3em;
  margin-left:10px;
  padding:3px 6px;
}
.pricing-blocks__options[data-option="supportType"] .pricing-blocks__checkbox-details {
  display:inline-block;
}
.pricing-blocks__options[data-option="subscriptionType"] .pricing-blocks__checkbox {
  border-radius:50%;
  width:17px;
  height:17px;
}
.pricing-blocks__checkbox {
  background:transparent;
  border:1px solid #fff;
  cursor:pointer;
  position:absolute;
  top:50%;
  left:5px;
  -webkit-transform:translateY(-50%);
  -ms-transform:translateY(-50%);
  transform:translateY(-50%);
  width:16px;
  height:16px;
}
.pricing-blocks__checkbox:after {
  border:2px solid #fff;
  border-top:none;
  border-right:none;
  content:'';
  position:absolute;
  top:4px;
  left:3px;
  opacity:0;
  width:9px;
  height:4px;
  -webkit-transform:rotate(-45deg);
  -ms-transform:rotate(-45deg);
  transform:rotate(-45deg);
}
.pricing-blocks__checkbox-item input[type=radio]:checked+.pricing-blocks__checkbox {
  background:#0099ff;
  border-color:#0099ff;
}
.pricing-blocks__checkbox-item input[type=radio]:checked+.pricing-blocks__checkbox:after {
  border-color:#fff;
}
.pricing-blocks__checkbox-item input[type=checkbox]:checked+.pricing-blocks__checkbox:after {
  border-color:#666;
}
.pricing-blocks__checkbox-item input[type=checkbox]:checked+.pricing-blocks__checkbox, .pricing-blocks__checkbox-item input[type=checkbox]:checked+.pricing-blocks__checkbox:after, .pricing-blocks__checkbox-item input[type=checkbox]:checked+.pricing-blocks__checkbox-label+.pricing-blocks__checkbox-label, .pricing-blocks__checkbox-item input[type=radio]:checked+.pricing-blocks__checkbox, .pricing-blocks__checkbox-item input[type=radio]:checked+.pricing-blocks__checkbox:after, .pricing-blocks__checkbox-item input[type=radio]:checked+.pricing-blocks__checkbox-label+.pricing-blocks__checkbox-label {
  opacity:1;
}
.pricing-blocks__icon--light, .pricing-blocks__icon--dark {
  display:inline-block;
  vertical-align:middle;
  position:relative;
}
.pricing-blocks__icon--light svg, .pricing-blocks__icon--dark svg {
  width:20px;
  height:20px;
  opacity:0.5;
  line-height:normal;
  position:absolute;
  top:50%;
  margin-top:-10px;
}
.pricing-blocks__icon--light .icon, .pricing-blocks__icon--dark .icon {
  border-radius:50%;
  margin-left:10px;
  padding:2px;
}
.pricing-blocks__icon--light, .pricing-blocks__icon--light:hover, .pricing-blocks__icon--light, .pricing-blocks__icon--light:focus {
  color:#666;
}
.pricing-blocks__icon--dark, .pricing-blocks__icon--dark:hover, .pricing-blocks__icon--dark, .pricing-blocks__icon--dark:focus {
  color:#fff;
}
.pricing-blocks__icon--light .icon {
  border:1px solid #666;
  font-size:0.75rem;
}
.pricing-blocks__icon--dark .icon {
  border:1px solid #fff;
  font-size:0.75rem;
}
.pricing-blocks--fullwrap .be-wrap {
  max-width:1160px;
  margin:0 auto;
}
.pricing-blocks--container-xs {
  margin:0 auto;
  max-width:45%;
}
.pricing-blocks--container-sm {
  margin:0 auto;
  max-width:50%;
}
.pricing-blocks--container-md {
  margin:0 auto;
  max-width:75%;
}
.pricing-blocks--queued * {
  opacity:0;
  -webkit-transition:opacity 2s linear;
  transition:opacity 2s linear;
}
.pricing-blocks--queued .loader, .pricing-blocks--queued .loader--bar {
  opacity:1;
}
.pricing-blocks.bg--light {
  color:#666;
}
.pricing-blocks.bg--light .pricing-blocks__subtitle {
  color:inherit
}
.pricing-blocks.bg--dark, .pricing-blocks.bg--dark p {
  color:#f7f7f7;
}
.pricing-blocks.bg--dark .pricing-blocks__subtitle {
  color:rgba(247, 247, 247, 0.6);
}
.pricing-blocks.bg--dark .pricing-blocks__content.ui-list__ul--colored {
  color:#f7f7f7;
}
.pricing-blocks.bg--dark .pricing-blocks__content.ui-list__ul--colored li:before {
  color:#f7f7f7;
}
.pricing-blocks.bg--light .pricing-blocks__content.ui-list__ul--colored {
  color:#666;
}
.pricing-blocks.bg--light .pricing-blocks__content.ui-list__ul--colored li:before {
  color:#0099ff;
}
.pricing-blocks.bg--dark .pricing-blocks__checkbox-item:hover, .pricing-blocks.bg--dark .pricing-blocks__checkbox-item:focus {
  background:rgba(255, 255, 255, 0.1);
}
.pricing-blocks.bg--light .pricing-blocks__checkbox-item:hover, .pricing-blocks.bg--light .pricing-blocks__checkbox-item:focus {
  background:rgba(155, 155, 155, 0.1);
}
.pricing-blocks.bg--dark .pricing-blocks__checkbox-label {
  color:#fff;
}
.pricing-blocks.bg--light .pricing-blocks__checkbox-label {
  color:#666;
}
.pricing-blocks.bg--dark .pricing-blocks__checkbox, .pricing-blocks.bg--dark .pricing-blocks__checkbox:after {
  border-color:#fff;
}
.pricing-blocks.bg--light .pricing-blocks__checkbox, .pricing-blocks.bg--light .pricing-blocks__checkbox:after {
  border-color:#ccc;
}
.pricing-blocks .pricing-blocks__checkbox:focus {
  box-shadow:0px 0px 2px 3px rgba(0, 0, 0, 0.25);
}
.pricing-blocks.bg--light .loader--bar {
  border:5px solid rgba(0, 0, 0, 0.25);
  border-top:5px solid #0099ff;
}
.pricing-blocks.bg--dark .loader--bar {
  border:5px solid rgba(0, 0, 0, 0.25);
  border-top:5px solid #b4b4b4;
}
.pricing-blocks__price--slash .pricing-blocks__price-original {
  opacity:0.25;
  text-decoration:line-through;
}
.pricing-blocks--vmar-feature {
  margin-top:50px;
  margin-bottom:50px;
}
.pricing-blocks__item.pricing-blocks--cta p, .pricing-blocks__item.pricing-blocks--cta-group p {
  margin-bottom:0;
}
.pricing-blocks__item.pricing-blocks--cta {
  position:relative;
  padding-bottom:80px;
}
.pricing-blocks__item.pricing-blocks--cta .ui-btn {
  position:absolute;
  left:20px;
  right:20px;
  bottom:24px;
  padding:1rem 1.25rem;
}
.pricing-blocks__item.pricing-blocks--cta:not(.pricing-blocks__item--featured) .ui-btn {
  background:transparent;
  color:#0099ff;
}
.pricing-blocks__item.pricing-blocks--cta:not(.pricing-blocks__item--featured) .ui-btn:hover, .pricing-blocks__item.pricing-blocks--cta:not(.pricing-blocks__item--featured) .ui-btn:focus {
  background:#0099ff;
  color:#fff;
}
.pricing-blocks__item.pricing-blocks--cta-group {
  position:relative;
  padding-bottom:100px;
}
.pricing-blocks__item.pricing-blocks--cta-group .pricing-blocks__cta-group {
  position:absolute;
  left:50%;
  bottom:25px;
  -webkit-transform:translateX(-50%);
  -ms-transform:translateX(-50%);
  transform:translateX(-50%);
  width:100%;
}
.pricing-blocks__cta-group .ui-btn {
  margin:5px;
}
.no-flexbox .pricing-blocks {
  display:table;
}
.no-flexbox .pricing-blocks__item {
  display:table-cell;
  vertical-align:top;
}
@media only screen and (max-width:1279px) and (min-width:960px) {
  .pricing-blocks--container-sm, .pricing-blocks--container-md {
    max-width: 100%;
  }
  .pricing-blocks.bg--dark .pricing-blocks__options[data-option="supportType"] {
    border-top: none;
  }
  .pricing-blocks.bg--light .pricing-blocks__options[data-option="supportType"] {
    border-top: none;
  }
  .pricing-blocks__checkbox-item {
    box-sizing: border-box;
    display: block;
    margin: 5px 0;
    padding: 8px 7px 8px 30px;
    width: 100%;
  }
  .pricing-blocks__checkbox-label {
    font-size: 15px;
  }
  .pricing-blocks__checkbox-label .pricing-blocks__checkbox-details .pricing-blocks__ck-discount, .pricing-blocks__checkbox-label .pricing-blocks__checkbox-price .pricing-blocks__ck-discount {
    font-size: 0.7rem;
    margin-left: 0;
  }
  .pricing-blocks__item[data-align-price="true"] .pricing-blocks__opts-wrap {
    min-height: 360px;
  }
  .pricing-blocks--wrap .pricing-blocks--fourth {
    max-width: 46%;
    margin-left: 1.75%;
    margin-right: 1.75%;
  }
}
@media only screen and (max-width:959px) and (min-width:768px) {
  .pricing-blocks--container-sm, .pricing-blocks--container-md {
    max-width: 100%;
  }
  .pricing-blocks.bg--dark .pricing-blocks__options[data-option="supportType"] {
    border-top: none;
  }
  .pricing-blocks.bg--light .pricing-blocks__options[data-option="supportType"] {
    border-top: none;
  }
  .pricing-blocks__checkbox-item {
    box-sizing: border-box;
    display: block;
    margin: 5px 0;
    padding: 8px 7px 8px 30px;
    width: 100%;
  }
  .pricing-blocks__checkbox-label {
    font-size: 15px;
  }
  .pricing-blocks--wrap .pricing-blocks--third, .pricing-blocks--wrap .pricing-blocks--fourth {
    max-width: 46%;
    margin-left: 1.75%;
    margin-right: 1.75%;
  }
}
@media only screen and (max-width:767px) {
  .pricing-blocks {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }
  .pricing-blocks__item {
    box-sizing: border-box;
    width: 98%;
    margin-bottom: 2rem;
  }
  .pricing-blocks .pricing-blocks__item:last-child {
    margin-bottom: 0;
  }
  .pricing-blocks--fullwrap .be-wrap {
    max-width: 100%;
  }
  .pricing-blocks--vmar-feature {
    margin-top: 0;
    margin-bottom: 0;
  }
  .pricing-blocks--container-sm, .pricing-blocks--container-md {
    max-width: 100%;
  }
  .pricing-blocks.bg--dark .pricing-blocks__options[data-option="supportType"] {
    border-top: none;
  }
  .pricing-blocks.bg--light .pricing-blocks__options[data-option="supportType"] {
    border-top: none;
  }
  .pricing-blocks__checkbox-item {
    box-sizing: border-box;
    display: block;
    margin: 5px 0;
    padding: 8px 7px 8px 30px;
    width: 100%;
  }
  .pricing-blocks__checkbox-label {
    font-size: 15px;
  }
  .pricing-blocks--wrap .pricing-blocks--third, .pricing-blocks--wrap .pricing-blocks--fourth {
    max-width: 100%;
  }
  .pricing-blocks--wrap .pricing-blocks--third:last-child, .pricing-blocks--wrap .pricing-blocks--fourth:last-child {
    margin-bottom: 0!important;
  }
  .pricing-blocks__no-opts-msg {
    position: relative;
    top: 0;
    left: auto;
    right: auto;
    padding: 1.5rem 1.5rem 0.5rem;
  }
  .no-flexbox .pricing-blocks__item {
    display: block;
    width: 100%;
  }
}
@media only screen and (max-width:970px) {
  .pricing-blocks__checkbox-label .pricing-blocks__checkbox-details {
    display: inline;
  }
  .pricing-blocks__options[data-option="supportType"] .pricing-blocks__checkbox-details {
    display: inline-block;
  }
  .pricing-blocks__checkbox-label .pricing-blocks__checkbox-details .pricing-blocks__ck-discount, .pricing-blocks__checkbox-label .pricing-blocks__checkbox-price .pricing-blocks__ck-discount {
    font-size: 0.7rem;
    margin-left: 0;
  }
  .pricing-blocks__item[data-align-price="true"] .pricing-blocks__opts-wrap {
    min-height: 400px;
  }
}
@media only screen and (max-width:768px) {
  .pricing-blocks__checkbox-label .pricing-blocks__checkbox-details {
    display: inline;
  }
  .pricing-blocks__options[data-option="supportType"] .pricing-blocks__checkbox-details {
    display: inline-block;
  }
  .pricing-blocks__checkbox-label .pricing-blocks__checkbox-details .pricing-blocks__ck-discount, .pricing-blocks__checkbox-label .pricing-blocks__checkbox-price .pricing-blocks__ck-discount {
    font-size: 0.7rem;
    margin-left: 0;
  }
  .pricing-blocks__item[data-align-price="true"] .pricing-blocks__opts-wrap {
    min-height: auto;
  }
}
@media only screen and (max-width:479px) {
  .pricing-blocks__options[data-option="supportType"] .pricing-blocks__checkbox-details {
    display: block;
  }
  .pricing-blocks__options[data-option="supportType"] .tooltip {
    position: absolute;
    bottom: 0;
    right: 0;
  }
  .pricing-blocks__checkbox-label .pricing-blocks__checkbox-details .pricing-blocks__ck-discount, .pricing-blocks__checkbox-label .pricing-blocks__checkbox-price .pricing-blocks__ck-discount {
    font-size: 0.7rem;
    margin-left: 0;
  }
}
.ui-event {
  margin-top:40px;
  margin-bottom:40px;
}
.ui-event__container {
  margin-top:40px;
  margin-bottom:40px;
  overflow:hidden;
}
.ui-event__container .ui-event {
  margin:0;
}
.ui-event_date-filter-headline {
  margin-left:1.5%;
  margin-right:1.5%;
}
.ui-events__no-events {
  margin:0 0 40px;
  padding:10px;
  width:100%;
}
.ui-event__filters {
  border:none;
  margin-left:1.5%;
  margin-right:1.5%;
}
.ui-event__filters legend {
  margin:5px 0;
}
.ui-event__filters label, .ui-event__filters .label {
  cursor:pointer;
  display:inline;
  margin:5px 1em 5px 0;
  padding:0;
}
.ui-event__filters label input, .ui-event__filters label input~span {
  opacity:0.75;
}
.ui-event__filters label input:checked, .ui-event__filters label input:checked~span {
  opacity:1;
}
.ui-event .ui-event__headline {
  margin:0;
}
.ui-event header .ui-event__headline {
  margin-bottom:20px;
}
.ui-event figure img {
  width:100%;
}
.ui-event .ui-card__content-container {
  overflow:visible;
}
.ui-event .ui-label {
  position:absolute;
  left:-5px;
  top:-20px;
}
.ui-event__details {
  list-style:none;
  margin:0;
  padding:0;
}
.ui-event__details li {
  border-right:1px solid #666;
  display:inline-block;
  margin:0;
  padding:0 10px;
}
.ui-event__details li:first-child {
  padding-left:0;
}
.ui-event__details li:last-child {
  border-right:none;
}
.ui-event__details--sm {
  font-size:0.9em;
}
.ui-event__details a {
  text-transform:capitalize;
}
.ui-event_description {
  margin-top:30px;
}
.ui-event__summary {
  margin-bottom:30px;
}
.ui-event__summary p:last-type-of {
  margin-bottom:0;
}
.ui-event__register {
  background:#1b4e6f;
}
.ui-event__register h4 {
  background:#213949;
  margin:0;
  padding:15px;
}
.ui-event__register p {
  color:#fff;
}
.ui-event__register-form {
  color:#fff;
  font-family:"aktiv-grotesk", "Open Sans", sans-serif;
  padding:15px;
}
.ui-event__register-form * {
  color:#fff;
  font-family:"aktiv-grotesk", "Open Sans", sans-serif;
}
.ui-event__more .ui-event__section:last-of-type {
  margin-bottom:50px !important;
}
.ui-event__share {
  padding:15px;
}
.ui-event__share li a {
  width:30px;
}
.ui-event__speakers {
  padding:15px;
}
.ui-event__speakers .ui-event__speaker {
  border-top:1px solid #b4b4b4;
  overflow:hidden;
  padding-top:15px;
}
.ui-event__speakers .ui-event__speaker:first-of-type {
  border-top:none;
}
.ui-event__speakers .ui-event__speaker img {
  float:left;
  max-width:115px;
  margin-top:0;
  margin-right:15px;
}
.ui-event__container .ui-event__yt-subscribe-container {
  display:inline-block;
  float:right;
  font-size:0.9em;
  margin:0.25em;
  padding:0.75em 1.25em;
  text-transform:none;
}
.ui-event__container .ui-event__yt-subscribe-container #___ytsubscribe_0 {
  margin-left:1em !important;
  -webkit-transform:translateY(25%);
  -ms-transform:translateY(25%);
  transform:translateY(25%);
}
.ui-event__container .ui-event__yt-subscribe-container #___ytsubscribe_0 .fluid-width-video-wrapper {
  margin:0;
  padding:0!important;
}
.ui-event__feature-container {
  background:#666 center center no-repeat;
  background-size:cover;
  overflow-x:hidden;
}
.ui-event__feature-container .be-row {
  padding-top:50px;
  padding-bottom:50px;
}
.ui-event__feature-container .be-row .one-half {
  margin-left:50%;
}
.ui-event__feature {
  background:rgba(0, 0, 0, 0.3);
  box-sizing:border-box;
  padding:15px;
}
.ui-event__feature .ui-btn.ui-btn--default:hover {
  border-color:#fff;
  color:#fff;
}
.ui-event__feature-headline {
  margin-bottom:20px;
}
#webinar-listing {
  margin-left:-1%;
  margin-right:-1%;
}
.ui-webinar__library {}
.ui-webinar__library article {
  border-bottom:1px solid #e3e3e3;
  margin:20px 0;
  padding:20px 0;
}
.ui-webinar__library article:last-of-type {
  border-bottom:none;
}
.ui-webinar__library article figure {
  margin:0;
}
.be-section .ui-webinar__library .be-row .column-block .h-group h4 {
  margin-bottom:5px !important;
}
.ui-webinar__library a {
  display:block;
}
.ui-webinar__library figure {
  position:relative;
}
.ui-webinar__library figure .ui-webinar__icon--play {
  background:rgba(0, 0, 0, 0.7);
  border-radius:10px;
  display:block;
  width:65px;
  height:45px;
  margin-left:-32px;
  margin-top:-22px;
  position:absolute;
  left:50%;
  top:50%;
}
.ui-webinar__library figure .ui-webinar__icon--play:after {
  border-left:20px solid #fff;
  border-top:10px solid transparent;
  border-bottom:10px solid transparent;
  content:'';
  margin-top:-10px;
  margin-left:-8px;
  position:absolute;
  left:50%;
  top:50%;
  display:block;
  width:0;
  height:0;
}
.ui-webinar__library a:hover .ui-webinar__icon--play {
  background:rgba(100, 100, 100, 0.7);
}
.ui-webinar__library .ui-event__details li {
  vertical-align:middle;
}
.ui-webinar__library .ui-event__details li:nth-child(2) {
  width:70%;
}
#webinar-listing .ui-events__no-events {
  margin-left:1%;
  margin-right:1%;
}
.ui-event__container--zero-margin-bottom {
  margin-bottom:0;
}
@media only screen and (max-width:980px) {
  .ui-event__container .ui-event__yt-subscribe-container {
    box-sizing: border-box;
    display: block;
    float: none;
    width: 100%;
  }
}
@media (max-width:960px) {
  .ui-event__feature-container {
    min-height: auto;
  }
  .ui-event__feature-container .be-row {
    padding: 0;
    max-width: 100%;
    width: 100%;
  }
  .ui-event__feature-container .be-row .one-half {
    margin-left: 0;
    width: 100%;
  }
  .ui-event__feature {
    background: rgba(0, 0, 0, 0.5);
    padding: 25px;
  }
}
@media screen and (min-width:768px) and (max-width:959px) {
  .ui-event__details {
    font-size: 0.9em;
  }
  #webinar-listing {
    margin-left: -1.25%;
    margin-right: -1.25%;
  }
  #webinar-listing .ui-events__no-events {
    margin-left: 1.25%;
    margin-right: 1.25%;
  }
}
@media screen and (max-width:767px) {
  #webinar-listing {
    margin-left: 0;
    margin-right: 0;
  }
  #webinar-listing .ui-events__no-events {
    margin-left: 0;
    margin-right: 0;
  }
  .ui-webinar__library .ui-event__details li {
    border-bottom: 1px solid #b4b4b4;
    border-right: none;
    box-sizing: border-box;
    display: block;
    padding: 10px;
    width: 100%;
  }
  .ui-webinar__library .ui-event__details li:last-child {
    border-bottom: none;
  }
  .ui-webinar__library .ui-event__details li:nth-child(2) {
    width: 100%;
  }
}
@media screen and (min-width:481px) and (max-width:767px) {
  .ui-event__details {
    font-size: 0.9em;
  }
}
@media screen and (max-width:480px) {
  .ui-event__details {
    font-size: 1em;
  }
  .ui-event__details li {
    border-right: none;
    display: block;
    padding: 0;
  }
}
.grid-parent {
  margin-bottom:0;
}
.grid-parent i {
  color:#ddd;
  cursor:default;
  font-size:16px;
}
.grid-parent i.color--azure-radiance {
  color:#0099ff;
}
.grid-items i {
  color:#0099ff;
  font-size:16px;
}
a.grid-link {
  color:#0099ff;
  text-decoration:none;
  display:block;
  font-size:16px;
}
a.grid-link:hover {
  opacity:.7;
  text-decoration:none;
}
.grid-container ul {
  list-style-type:none;
}
.grid-container .cd-accordion-menu.animated label::before {
  opacity:.8;
}
.grid-container .cd-accordion-menu.animated ul label::before {
  opacity:.4;
}
.grid-container h3, .grid-container .h3 {
  display:inline-block;
  font-size:18px;
  background-color:transparent;
  padding:8px 10px 8px 20px;
  font-weight:500;
  position:relative;
  color:#333;
}
.grid-container h4, .grid-container .h4 {
  display:inline-block;
  font-size:16px;
  background-color:transparent;
  padding:8px 10px 8px 20px;
  font-weight:500;
  position:relative;
  color:#666;
}
.popup-link {
  font-size:14px;
  color:#0099ff;
  text-decoration:none;
}
.popup-link:hover {
  opacity:.7;
  text-decoration:none;
}
.grid-items .popup-link {
  margin-left:10px;
}
.grid-container table {
  border-collapse:collapse;
  border:none;
  margin-bottom:0;
  width:100%;
}
.grid-header-container {
  height:90px;
}
.grid-parent-container {
  height:40px;
}
table.grid-header tr:first-child td {
  background-color:#fff;
  border-color:#e2e2e2;
  font-size:20px;
  font-weight:500;
  color:#333;
  padding:10px;
}
table.grid-header {
  position:-webkit-sticky;
  position:sticky;
  top:130px;
  width:100%!important;
  max-width:1170px;
  width:calc(100% - 1px)!important;
  z-index:6;
}
.grid-container-no-secondnav table.grid-header {
  top:75px;
}
table.grid-header.grid-header--sm tr:first-child td {
  font-size:12px;
}
.mfp-content table.grid-header.grid-header--sm tr:first-child td {
  font-size:12px;
}
.mfp-content table.grid-header {
  top:0;
}
table.grid-header:before, table.grid-header:after {
  content:'';
  display:table;
}
table.grid-header tr:last-child td {
  background-color:#f3f3f3;
  border-color:#e2e2e2;
  font-size:14px;
  line-height:1.3em;
  font-weight:500;
  color:#666;
}
.grid-container--10col table.grid-header tr:last-child td {
  font-size:12px;
}
table.grid-header tr td {
  width:auto;
  text-align:center;
  font-weight:bold;
  font-weight:normal;
  border-top:1px solid #e2e2e2 !important;
}
table.grid-header tr:first-child td:first-child {
  background-color:#fff;
  border:none;
  border-bottom:1px solid #e2e2e2;
  border-top:none !important;
}
table.grid-header tr.grid-header-spacer td {
  width:90px;
  text-align:center;
  font-weight:bold;
}
.grid-container--2col table.grid-header tr.grid-header-spacer td, .grid-container--3col table.grid-header tr.grid-header-spacer td {
  width:15%;
}
.grid-container--6col table.grid-header tr.grid-header-spacer td {
  width:115px;
}
table.grid-header tr.grid-header-spacer td:first-child {
  width:auto;
  text-align:center;
  font-weight:bold;
}
.grid-container table tr td {
  border:none;
  padding:5px;
  width:90px;
  text-align:center;
  border:1px solid #e2e2e2;
  border-top:none;
  box-sizing:border-box;
  vertical-align:middle;
}
.grid-container.grid-container--2col table tr td, .grid-container.grid-container--3col table tr td {
  width:15%;
}
.grid-container.grid-container--6col table tr td {
  width:115px;
}
.grid-container table tr td:first-child {
  width:auto;
  text-align:left;
}
.grid-container {
  width:100%;
  max-width:1170px;
  margin:0 auto;
}
table.grid-items {
  border-bottom:1px solid #e2e2e2;
}
table.grid-items tr td {
  font-size:16px;
  color:#888888;
  padding:10px 10px;
  border-bottom:none;
}
table.grid-items tr:nth-child(odd) {
  background:#f7f7f7;
}
table.grid-items tr td:first-child {
  padding-left:30px;
}
.cd-accordion-menu {
  padding-left:0;
}
.cd-accordion-menu ul {
  display:none;
  margin:0;
  padding-left:0;
}
.cd-accordion-menu li {
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none;
  margin-bottom:0;
  padding-left:0;
}
.cd-accordion-menu input[type=checkbox] {
  position:absolute;
  opacity:0;
}
.cd-accordion-menu label, .cd-accordion-menu span.h3, .cd-accordion-menu span.h4 {
  cursor:pointer!important;
}
.cd-accordion-menu label::before, .cd-accordion-menu label::after, .cd-accordion-menu a::after, .cd-accordion-menu span.h3::before, .cd-accordion-menu span.h3::after, .cd-accordion-menu span.h4::before, .cd-accordion-menu span.h4::after {
  content:'';
  display:inline-block;
  width:10px;
  height:10px;
  position:absolute;
  top:50%;
  -webkit-transform:translateY(-50%);
  -ms-transform:translateY(-50%);
  transform:translateY(-50%);
}
.cd-accordion-menu label::before, .cd-accordion-menu span.h3::before, .cd-accordion-menu span.h4::before {
  background:transparent;
  border-top:2px solid #666;
  border-left:2px solid #666;
  content:'';
  display:block;
  width:6px;
  height:6px;
  postion:absolute;
  top:50%;
  left:0;
}
.cd-accordion-menu label::before, .cd-accordion-menu span.h3::before, .cd-accordion-menu span.h4::before {
  left:0;
  background-position:0 0;
  -webkit-transform:translateY(-50%) rotate(-225deg);
  -ms-transform:translateY(-50%) rotate(-225deg);
  transform:translateY(-50%) rotate(-225deg);
}
.cd-accordion-menu .grid-parent-no-sub label::before {
  display:none;
}
.cd-accordion-menu input[type=checkbox]:checked+label::before, .cd-accordion-menu input[type=checkbox]:checked+span.h3::before, .cd-accordion-menu input[type=checkbox]:checked+span.h4::before {
  -webkit-transform:translateY(-50%) rotate(-135deg);
  -ms-transform:translateY(-50%) rotate(-135deg);
  transform:translateY(-50%) rotate(-135deg);
}
.cd-accordion-menu input[type=checkbox]:checked+label+ul, .cd-accordion-menu input[type=checkbox]:checked+label:nth-of-type(n)+ul, .cd-accordion-menu input[type=checkbox]:checked+span.h3+ul, .cd-accordion-menu input[type=checkbox]:checked+span.h3:nth-of-type(n)+ul, .cd-accordion-menu input[type=checkbox]:checked+span.h4+ul, .cd-accordion-menu input[type=checkbox]:checked+span.h4:nth-of-type(n)+ul {
  display:block;
}
.cd-accordion-menu ul label::before, .cd-accordion-menu ul span.h3::before, .cd-accordion-menu ul span.h4::before {
  left:0;
}
.cd-accordion-menu ul label::after, .cd-accordion-menu ul span.h3::after, .cd-accordion-menu ul span.h4::after, .cd-accordion-menu ul a::after {
  left:0;
}
.cd-accordion-menu.animated label::before, .cd-accordion-menu.animated span.h3::before, .cd-accordion-menu.animated span.h4::before {
  -webkit-transition:-webkit-transform 0.3s;
  transition:-webkit-transform 0.3s;
  transition:transform 0.3s;
  transition:transform 0.3s, -webkit-transform 0.3s;
}
.grid-container.grid--mw-lg, .grid-header.grid--mw-lg {
  width:calc(100vw - 80px);
  max-width:1400px;
}
.grid-container--14col table.grid-header tr.grid-header-spacer td:first-child {
  width:auto;
}
.grid-container--14col table.grid-header tr.grid-header-spacer td {
  font-size:0.75rem;
  width:75px;
}
.grid-container--14col table tr td {
  width:75px;
}
.mfp-content .grid-header, .mfp-content .grid-container {
  margin:0;
  max-width:100%;
}
.mfp-content table.grid-header tr:last-child td {
  font-size:12px;
}
.mfp-content table.grid-header tr:first-child td {
  font-size:16px;
}
.mfp-content .grid-container--10col table.grid-header tr:last-child td {
  font-size:10px;
}
.mfp-content .grid-container table tr td, .mfp-content table.grid-header tr.grid-header-spacer td {
  padding:5px 3px;
  width:70px;
}
.mfp-content .grid-container table tr td:first-child {
  padding-left:10px;
  width:auto;
  overflow-wrap:break-word;
  word-break:break-all;
}
.mfp-content .grid-container.grid-container--14col table tr td, .mfp-content .grid-container--14col table.grid-header tr.grid-header-spacer td {
  padding:5px 3px;
  width:55px;
}
.mfp-content .grid-container--14col table.grid-header tr:last-child td {
  font-size:10px;
}
.mfp-content .grid-container.grid-container--14col table tr td:first-child {
  padding-left:10px;
  width:auto;
  overflow-wrap:break-word;
  word-break:break-all;
}
.mfp-content .grid-fallback {
  display:none;
}
@media screen and (min-width:1100px) and (max-width:1299px) {
  .mfp-content table.grid-header tr:last-child td {
    font-size: 12px;
  }
  .mfp-content .grid-container table tr td, .mfp-content table.grid-header tr.grid-header-spacer td {
    width: 60px;
  }
  .mfp-content .grid-container table tr td:first-child {
    width: auto;
  }
  .grid-container table tr td {
    padding: 5px 3px;
  }
  .grid-container--6col table.grid-header tr:last-child td {
    font-size: 12px;
  }
  .grid-container--6col.grid-container h3, .grid-container--9col.grid-container .h3 {
    font-size: 16px;
  }
  .grid-container--6col.grid-container h4, .grid-container--6col.grid-container .h4, .grid-container--6col table.grid-items tr td {
    font-size: 14px;
  }
  .grid-container--9col table.grid-header tr:last-child td {
    font-size: 12px;
  }
  .grid-container--9col.grid-container h3, .grid-container--9col.grid-container .h3 {
    font-size: 16px;
  }
  .grid-container--9col.grid-container h4, .grid-container--9col.grid-container .h4, .grid-container--9col table.grid-items tr td {
    font-size: 14px;
  }
  .grid-container--10col table.grid-header tr:last-child td {
    font-size: 12px;
  }
  .grid-container--10col.grid-container h3, .grid-container--10col.grid-container .h3 {
    font-size: 16px;
  }
  .grid-container--10col.grid-container h4, .grid-container--10col.grid-container .h4, .grid-container--10col table.grid-items tr td {
    font-size: 14px;
  }
  .mfp-content .grid-container--10col table.grid-header tr:last-child td {
    font-size: 7px;
  }
  .grid-container--14col table.grid-header tr:last-child td {
    font-size: 12px;
  }
  .grid-container--14col.grid-container h3, .grid-container--14col.grid-container .h3 {
    font-size: 16px;
  }
  .grid-container--14col.grid-container h4, .grid-container--14col.grid-container .h4, .grid-container--14col table.grid-items tr td {
    font-size: 12px;
  }
  .grid-container--14col table.grid-header tr.grid-header-spacer td {
    width: 65px;
  }
  .grid-container--14col table tr td {
    width: 65px;
  }
  .mfp-content .grid-container--14col table.grid-header tr:first-child td {
    font-size: 10px;
  }
  .mfp-content .grid-container--14col table.grid-header tr.grid-header-spacer td {
    font-size: 8px;
  }
  .mfp-content .grid-container.grid-container--14col table tr td, .mfp-content .grid-container.grid-container--14col table tr td, .mfp-content .grid-container--14col table.grid-header tr.grid-header-spacer td {
    padding: 5px 0;
    width: 40px;
  }
  .mfp-content .grid-container--14col table.grid-header tr:first-child td {
    font-size: 11px;
  }
  .mfp-content .grid-container--14col table.grid-header tr:last-child td {
    font-size: 7px;
  }
  .mfp-content .grid-container.grid-container--14col table tr td:first-child {
    padding-left: 10px;
    width: auto;
  }
  .mfp-content table.grid-header.grid-header--sm tr:first-child td {
    font-size: 10px;
  }
}
@media screen and (min-width:960px) and (max-width:1099px) {
  .mfp-content table.grid-header tr:last-child td {
    font-size: 10px;
  }
  .mfp-content .grid-container table tr td, .mfp-content table.grid-header tr.grid-header-spacer td {
    width: 55px;
  }
  .mfp-content .grid-container table tr td:first-child {
    width: auto;
  }
  .grid-container table tr td {
    padding: 5px 3px;
  }
  .grid-container--9col .grid-header tr.grid-header-spacer td {
    width: 115px;
  }
  .grid-container--9col table tr td {
    width: 70px;
  }
  .grid-container--9col table.grid-header tr:last-child td {
    font-size: 12px;
  }
  .grid-container--9col.grid-container h3, .grid-container--9col.grid-container .h3 {
    font-size: 16px;
  }
  .grid-container--9col.grid-container h4, .grid-container--9col.grid-container .h4, .grid-container--9col table.grid-items tr td {
    font-size: 14px;
  }
  .grid-container--9col .grid-header tr.grid-header-spacer td {
    width: 70px;
  }
  .grid-container--9col table tr td {
    width: 70px;
  }
  .grid-container--9col table.grid-header tr:last-child td {
    font-size: 12px;
  }
  .grid-container--9col.grid-container h3, .grid-container--9col.grid-container .h3 {
    font-size: 16px;
  }
  .grid-container--9col.grid-container h4, .grid-container--9col.grid-container .h4, .grid-container--9col table.grid-items tr td {
    font-size: 14px;
  }
  .mfp-content .grid-container--9col table.grid-header tr:last-child td {
    font-size: 10px;
  }
  .mfp-content .grid-container--9col.grid-container h4, .mfp-content .grid-container--9col.grid-container .h4, .mfp-content .grid-container--9col table.grid-items tr td {
    font-size: 12px;
  }
  .mfp-content .grid-container--9col table tr td:first-child {
    padding-left: 10px;
  }
  .mfp-content .grid-container--9col table tr td, .mfp-content .grid-container--9col table.grid-header tr.grid-header-spacer td {
    width: 55px;
  }
  .mfp-content .grid-container--9col table.grid-header tr.grid-header-spacer td:first-child {
    width: auto;
  }
  .grid-container--10col .grid-header tr.grid-header-spacer td {
    width: 70px;
  }
  .grid-container--10col table tr td {
    width: 70px;
  }
  .grid-container--10col table.grid-header tr:last-child td {
    font-size: 9px;
  }
  .grid-container--10col.grid-container h3, .grid-container--10col.grid-container .h3 {
    font-size: 16px;
  }
  .grid-container--10col.grid-container h4, .grid-container--10col.grid-container .h4, .grid-container--10col table.grid-items tr td {
    font-size: 14px;
  }
  .mfp-content .grid-container--10col table.grid-header tr:last-child td {
    font-size: 7px;
  }
  .mfp-content .grid-container--10col.grid-container h4, .mfp-content .grid-container--10col.grid-container .h4, .mfp-content .grid-container--10col table.grid-items tr td {
    font-size: 12px;
  }
  .mfp-content .grid-container--10col table tr td:first-child {
    padding-left: 10px;
  }
  .mfp-content .grid-container--10col table tr td, .mfp-content .grid-container--10col table.grid-header tr.grid-header-spacer td {
    width: 55px;
  }
  .mfp-content .grid-container--10col table.grid-header tr.grid-header-spacer td:first-child {
    width: auto;
  }
  .grid-container--14col table.grid-header tr.grid-header-spacer td {
    width: 60px;
  }
  .grid-container--14col table tr td {
    width: 60px;
  }
  .grid-container--14col table.grid-header tr:last-child td {
    font-size: 9px;
  }
  .grid-container--14col.grid-container h3, .grid-container--14col.grid-container .h3 {
    font-size: 16px;
  }
  .grid-container--14col.grid-container h4, .grid-container--14col.grid-container .h4, .grid-container--14col table.grid-items tr td {
    font-size: 14px;
  }
  .grid-container--14col table.grid-header tr.grid-header-spacer td {
    width: 55px;
  }
  .grid-container--14col table tr td {
    width: 55px;
  }
  .grid-container--14col table.grid-header.grid-header--sm tr:first-child td {
    font-size: 11px;
  }
  .mfp-content .grid-container--14col table.grid-items tr td {
    font-size: 12px;
  }
  .mfp-content .grid-container--14col table.grid-header tr:first-child td {
    font-size: 10px;
  }
  .mfp-content .grid-container--14col table.grid-header tr.grid-header-spacer td {
    font-size: 8px;
  }
  .mfp-content .grid-container.grid-container--14col table tr td, .mfp-content .grid-container--14col table.grid-header tr.grid-header-spacer td {
    padding: 5px 0;
    width: 40px;
  }
  .mfp-content .grid-container--14col table.grid-header tr:first-child td {
    font-size: 11px;
  }
  .mfp-content .grid-container--14col table.grid-header tr:last-child td {
    font-size: 7px;
  }
  .mfp-content .grid-container.grid-container--14col table tr td:first-child {
    padding-left: 10px;
    width: auto;
  }
  .mfp-content table.grid-header.grid-header--sm tr:first-child td {
    font-size: 10px;
  }
}
@media screen and (min-width:960px) and (max-width:1299px) {}
@media screen and (max-width:960px) {
  .mfp-content table.grid-header tr:last-child td {
    font-size: 10px;
    width: 12.5%;
  }
  .mfp-content .grid-container table tr td {
    border-top: 1px solid #e2e2e2;
    display: block;
    float: left;
    width: 12.5%;
  }
  .mfp-content .grid-container table tr td:first-child {
    width: 100%;
  }
  .mfp-content table.grid-header tr td:first-child {
    display: none;
  }
  .mfp-content table.grid-header tr td {
    display: table-cell;
    float: none;
    width: 12.5%;
  }
  .grid-container table tr td {
    padding: 5px 3px;
  }
  .mfp-content .grid-container--9col table tr td:first-child {
    padding-left: 10px;
    width: 100%;
  }
  .mfp-content .grid-container--9col table tr td, .mfp-content .grid-container--9col table.grid-header tr.grid-header-spacer td {
    width: 11.1%;
  }
  .mfp-content .grid-container--10col table.grid-header tr:last-child td {
    font-size: 7px;
  }
  .mfp-content .grid-container--10col table tr td:first-child {
    padding-left: 10px;
    width: 100%;
  }
  .mfp-content .grid-container--10col table tr td, .mfp-content .grid-container--10col table.grid-header tr.grid-header-spacer td {
    width: 10%;
  }
}
@media screen and (max-width:959px) {
  .grid-container.grid-container--14col {
    display: none;
  }
  .mfp-content .grid-container.grid-container--14col {
    display: block;
  }
  .mfp-content .grid-container.grid-container--14col .grid-header, .mfp-content .grid-container.grid-container--14col .grid-items {
    display: none;
  }
  .mfp-content .grid-container.grid-container--14col .grid-fallback {
    display: block
  }
}
@media screen and (min-width:768px) and (max-width:960px) {
  table.grid-header {
    max-width: 100%!important;
  }
  .grid-header-container {
    height: 85px;
  }
  .grid-parent-container {
    height: 50px;
  }
  table.grid-header, .grid-container--3col table.grid-header, table.grid-header, .grid-container--2col table.grid-header {
    top: 0;
  }
  table.grid-header tr.grid-header-spacer td {
    width: 65px;
    text-align: center;
    font-weight: bold;
    font-size: 12px;
  }
  .grid-container table tr td {
    padding: 5px;
    width: 65px;
  }
  .grid-container--2col table.grid-header tr.grid-header-spacer td, .grid-container.grid-container--2col table tr td, .grid-container--3col table.grid-header tr.grid-header-spacer td, .grid-container.grid-container--3col table tr td {
    width: 15%;
  }
  .grid-container.grid-container--2col table tr td:first-child, .grid-container.grid-container--3col table tr td:first-child {
    width: auto
  }
  .grid-container h3, .grid-container .h3 {
    font-size: 16px;
  }
  .grid-container h4, .grid-container .h4 {
    font-size: 14px;
  }
  .grid-container table tr td {
    padding: 5px 3px;
  }
  .grid-container--6col .grid-header tr.grid-header-spacer td {
    width: 110px;
  }
  .grid-container--6col table tr td {
    width: 110px;
  }
  .grid-container--6col.grid-container h4, .grid-container--6col.grid-container .h4, .grid-container--6col table.grid-items tr td {
    font-size: 12px;
  }
  .grid-container--9col .grid-header tr.grid-header-spacer td {
    width: 65px;
  }
  .grid-container--9col table tr td {
    width: 65px;
  }
  .grid-container--9col table.grid-header tr:last-child td {
    font-size: 16px;
  }
  .grid-container--9col table.grid-header tr:last-child td {
    font-size: 10px;
  }
  .grid-container--9col.grid-container h3, .grid-container--9col.grid-container .h3 {
    font-size: 14px;
  }
  .grid-container--9col.grid-container h4, .grid-container--9col.grid-container .h4, .grid-container--9col table.grid-items tr td {
    font-size: 12px;
  }
  .grid-container--10col .grid-header tr.grid-header-spacer td {
    width: 65px;
  }
  .grid-container--10col table tr td {
    width: 65px;
  }
  .grid-container--10col table.grid-header tr:last-child td {
    font-size: 8px;
  }
  .grid-container--10col.grid-container h3, .grid-container--10col.grid-container .h3 {
    font-size: 14px;
  }
  .grid-container--10col.grid-container h4, .grid-container--10col.grid-container .h4, .grid-container--10col table.grid-items tr td {
    font-size: 12px;
  }
  .mfp-content .xxs-hide {
    display: none;
  }
}
@media screen and (max-width:768px) and (min-width:480px) {
  table.grid-header tr td, table.grid-header tr.grid-header-spacer td {
    font-size: 12px;
  }
  .grid-header-container {
    height: 85px;
  }
  .grid-parent-container {
    height: 50px;
  }
}
@media screen and (max-width:768px) {
  .grid-container {
    width: 99%;
  }
  table.grid-header, .grid-container--2col table.grid-header, table.grid-header, .grid-container--3col table.grid-header {
    top: 0;
    width: 100%!important;
  }
  table.grid-header tr.grid-header-spacer td:first-child {
    display: none;
  }
  .grid-container table tr td {
    display: block;
    float: left;
    width: 12.5%;
    text-align: center;
    border-top: 1px solid #e2e2e2;
    border-right: none;
  }
  .grid-container table tr td:first-child, .grid-container table tr td:last-child {
    border-right: 1px solid #e2e2e2;
  }
  .grid-container table tr td:first-child {
    display: block;
    width: 100%;
    border-bottom: none;
  }
  .grid-container ul.cd-accordion-menu ul li {
    padding-left: 0;
  }
  table.grid-header tr:first-child td:first-child {
    display: none;
  }
  table.grid-header tr td {
    display: table-cell;
    float: none;
  }
  table.grid-header tr.grid-header-spacer td {
    width: 12.5%;
    text-align: center;
    font-weight: bold;
    display: table-cell;
    float: none;
  }
  .grid-container table tr td {
    padding: 5px 3px;
  }
  table.grid-header tr.grid-header-spacer td span.xs-hide {
    display: none;
  }
  .grid-container--2col table.grid-header tr.grid-header-spacer td, .grid-container.grid-container--2col table tr td {
    width: 50%;
  }
  .grid-container--3col table.grid-header tr.grid-header-spacer td, .grid-container.grid-container--3col table tr td {
    width: 33.3%;
  }
  .grid-container.grid-container--2col table tr td:first-child, .grid-container.grid-container--3col table tr td:first-child {
    width: 100%;
  }
  .grid-container--6col .grid-header tr.grid-header-spacer td {
    width: 16.66%;
  }
  .grid-container--6col table tr td {
    width: 16.66%;
  }
  .grid-container--6col table.grid-header tr:last-child td {
    font-size: 16px;
  }
  .grid-container--6col table.grid-header tr:last-child td {
    font-size: 10px;
  }
  .grid-container--6col.grid-container h3, .grid-container--6col.grid-container .h3 {
    font-size: 14px;
  }
  .grid-container--6col.grid-container h4, .grid-container--6col.grid-container .h4, .grid-container--6col table.grid-items tr td {
    font-size: 12px;
    padding: 5px 10px;
  }
  .grid-container--9col .grid-header tr.grid-header-spacer td {
    width: 11.1%;
  }
  .grid-container--9col table tr td {
    width: 11.1%;
  }
  .grid-container--9col table.grid-header tr:last-child td {
    font-size: 16px;
  }
  .grid-container--9col table.grid-header tr:last-child td {
    font-size: 10px;
  }
  .grid-container--9col.grid-container h3, .grid-container--9col.grid-container .h3 {
    font-size: 14px;
  }
  .grid-container--9col.grid-container h4, .grid-container--9col.grid-container .h4, .grid-container--9col table.grid-items tr td {
    font-size: 12px;
    padding: 5px 10px;
  }
  .grid-container--10col .grid-header tr.grid-header-spacer td {
    width: 10%;
  }
  .grid-container--10col table tr td {
    width: 10%;
  }
  .grid-container--10col table.grid-header tr:first-child td {
    font-size: 16px;
  }
  .grid-container--10col table.grid-header tr:last-child td {
    font-size: 8px;
  }
  .grid-container--10col.grid-container h3, .grid-container--10col.grid-container .h3 {
    font-size: 14px;
  }
  .grid-container--10col.grid-container h4, .grid-container--10col.grid-container .h4, .grid-container--10col table.grid-items tr td {
    font-size: 12px;
    padding: 5px 10px;
  }
  .mfp-content .xxs-hide {
    display: none;
  }
  .grid-container .grid-requirements table tr td {
    border: none;
  }
  .grid-container .grid-requirements table tr td:first-child {
    border: 1px solid #e2e2e2;
    border-top: none;
  }
}
@media screen and (max-width:480px) {
  .grid-header-container {
    height: 82px;
  }
  .grid-parent-container {
    height: 50px;
  }
  table.grid-header tr:first-child td {
    font-size: 13px;
    display: inline-block;
    float: left;
    border-bottom: 0;
    padding: 5px;
  }
  table.grid-header tr.grid-header-spacer td {
    font-size: 8px;
  }
  table.grid-header tr.grid-header-spacer td {
    padding: 5px 0;
    font-weight: 400;
  }
  table.grid-header tr.grid-header-spacer td span.xxs-hide {
    display: none;
  }
  .grid-container--9col .grid-parent i, .grid-container--9col .grid-items i {
    font-size: 12px;
  }
  .grid-container--9col table.grid-header tr.grid-header-spacer td {
    font-size: 8px;
  }
  .grid-container--9col.grid-container h4, .grid-container--9col.grid-container .h4, .grid-container--9col table.grid-items tr td {
    padding: 5px;
  }
  .grid-container--10col .grid-parent i, .grid-container--10col .grid-items i {
    font-size: 12px;
  }
  .grid-container--10col table.grid-header tr.grid-header-spacer td {
    font-size: 8px;
  }
  .grid-container--10col.grid-container h4, .grid-container--10col.grid-container .h4, .grid-container--10col table.grid-items tr td {
    padding: 5px;
    height: 31px;
  }
  .grid-container--10col table.grid-header tr:first-child td {
    display: table-cell;
    float: none;
    font-size: 12px;
  }
  .grid-container--10col table.grid-header tr:first-child td:first-child {
    display: none;
  }
  .grid-container--10col table.grid-items tr td {
    height: 38px;
  }
  .grid-container--10col table.grid-header tr:first-child td[colspan="2"] {
    width: 20%;
  }
  .grid-container--10col table.grid-header tr:first-child td[colspan="4"] {
    width: 40%;
  }
  .mfp-content .grid-container--10col table.grid-header tr:first-child td {
    font-size: 11px;
  }
  .mfp-content .grid-container--10col table.grid-header tr.grid-header-spacer td {
    font-size: 6px;
  }
  .lightbox--padding-md.mfp-wrap .grid-container--10col.mfp-content__container {
    padding: 10px;
  }
}
.grid-container.grid-container--pricing table {
  background-color:#fff;
}
.grid-container.grid-container--pricing table tr td {
  border:none;
  border-bottom:1px solid #e2e2e2;
  font-size:0.875rem;
  padding:10px;
  vertical-align:middle;
  border-top:none !important;
  font-weight:normal;
}
.grid-container.grid-container--pricing .grid-header {}
.grid-container--pricing .grid-header tr.pricing-grid-header-spacer {
  border-bottom:1px solid #e2e2e2;
}
.grid-container--pricing .grid-header tr.grid-header-spacer td:first-child {
  text-align:left;
}
.grid-container--pricing .grid-header tr:last-child td {
  background:initial;
  font-weight:normal;
}
.grid-container--pricing .grid-header tr td.featured, .grid-container--pricing tr td.featured {
  background:#f5f5f5;
}
.grid-container--pricing .grid-header tr:first-child td.featured {
  background:#0099ff;
  color:#fff;
}
.grid-container.grid-container--pricing.grid-container--3col table.grid-header tr.pricing-grid-header-spacer td, .grid-container.grid-container--pricing.grid-container--3col table tr td {
  width:25%;
}
.grid-container.grid-container--pricing .grid-container__icon {
  background:#19ad87;
  border-radius:50%;
  display:inline-block;
  width:10px;
  height:10px;
  position:relative;
  padding:6px;
  text-align:center;
}
.grid-container.grid-container--pricing .grid-container__icon .icon {
  color:#fff;
  text-align:center;
  position:absolute;
  top:-1px;
  left:1px;
  width:100%;
}
@media screen and (max-width:768px) {
  .grid-container.grid-container--pricing.grid-container--pricing.grid-container--3col table tr td {
    width: 25%;
    display: table-cell;
    float: none;
  }
}
@media screen and (max-width:480px) {
  .grid-container.grid-container--pricing.grid-container--pricing.grid-container--3col .grid-header tr td, .grid-container.grid-container--pricing.grid-container--pricing.grid-container--3col table tr td:first-child {
    font-size: 0.6rem;
    line-height: 1.3em;
  }
}
.frame {
  position:relative;
  background-color:#f5f5f5;
  background-image:url("https://static.infragistics.com/marketing/Website/Consulting/Process/process-background.jpg");
  background-size:cover;
  width:100%;
}
.frame>ul {
  list-style:none;
  padding-left:0px;
}
.frame-item {
  box-sizing:border-box;
  display:block;
  width:100%;
  min-height:300px;
  padding:60px;
  position:relative;
  margin-bottom:0px;
  text-align:left;
}
.frame-item:after {
  position:absolute;
  content:'';
  width:100%;
  height:2px;
  bottom:0;
  left:0;
  background-color:#fff;
}
.frame-content {
  box-sizing:border-box;
  width:47.5%;
}
.frame-content .consulting-icon svg {
  width:30px;
  height:30px;
  margin:0 10px -3px 0;
}
.frame-content .consulting-icon svg * {
  -webkit-transition:fill 300ms linear;
  transition:fill 300ms linear;
}
.frame-content .frame-title {
  color:#666;
  display:inline-block;
  font-size:35px;
  margin:0;
  -webkit-transition:color 250ms linear;
  transition:color 250ms linear;
}
.frame-content .frame-item-text {
  color:#fff;
  padding-left:45px;
  opacity:0;
  -webkit-transition:opacity 250ms linear;
  transition:opacity 250ms linear;
}
.item-image {
  display:inline-block;
  position:absolute;
  top:0;
  bottom:0;
  right:0;
  width:50%;
  height:100%;
  background-repeat:no-repeat;
  background-size:100% 100%;
  background-size:cover;
  background-position:center center;
  opacity:0;
  -webkit-transition:opacity 250ms linear;
  transition:opacity 250ms linear;
}
.frame-item:hover, .frame-item:focus {
  background:#1c4360;
  background:-webkit-linear-gradient(top, #1c4360 0%, #0c73ad 99%);
  background:linear-gradient(to bottom, #1c4360 0%, #0c73ad 99%);
  filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#1c4360', endColorstr='#0c73ad', GradientType=0);
}
.frame-item:hover .frame-item-text, .frame-item:focus .frame-item-text, .frame-item:hover .item-image, .frame-item:focus .item-image {
  opacity:1;
}
.frame-item:hover .frame-title, .frame-item:focus .frame-title {
  color:#fff;
}
.frame-item:hover .frame-content .consulting-icon svg *, .frame-item:focus .frame-content .consulting-icon svg * {
  fill:#fff;
}
.consulting-icon svg {
  width:40px;
  height:auto;
}
.services__work {
  background:#fff;
  margin-bottom:10px;
  overflow:hidden;
  position:relative;
}
.services__work.services__work--with-image .services__work-image {
  position:absolute;
  top:50%;
  left:50%;
  -webkit-transform:translateY(-50%) translateX(-50%);
  -ms-transform:translateY(-50%) translateX(-50%);
  transform:translateY(-50%) translateX(-50%);
  width:100%;
}
.services__work-content-container {
  height:100%;
  margin:60px auto;
}
.services__work-content {
  background:rgba(255, 255, 255, 0.9);
  box-sizing:border-box;
  padding:25px;
  width:50%;
}
.services__work-content-container--left .services__work-content {
  margin-left:0%;
}
.services__work-content-container--right .services__work-content {
  margin-left:50%;
}
.services__work-list {
  list-style:none;
  padding-left:0;
}
@media only screen and (max-width:1100px) {
  .services__work-content-container {}
  .services__work-content-container--left .services__work-content, .services__work-content-container--right .services__work-content {
    margin-left: 0%;
    width: 100%;
  }
  .services__work--with-bgimage {
    background-repeat: no-repeat;
    background-position: top center!important;
    background-size: 100%!important;
  }
  .services__work--with-bgimage .services__work-content-container {
    margin: 0;
    padding-top: 30%;
    max-width: 100%;
  }
  .services__work--with-image .services__work-content-container {
    margin: 0;
    width: 100%;
    max-width: 100%;
  }
  .services__work.services__work--with-image .services__work-image {
    position: relative;
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
    left: 0;
  }
}
@media only screen and (max-width:960px) {
  .frame {
    background-image: none;
  }
  .frame-content {
    width: 100%;
  }
  .frame-content .frame-item-text {
    color: #666;
    opacity: 1;
    padding-left: 0px;
  }
  .frame-item:hover .frame-item-text, .frame-item:focus .frame-item-text {
    color: #fff;
  }
  .item-image {
    display: block;
    position: relative;
    width: 100%;
    height: auto;
    padding-top: 62.5%;
    opacity: 1;
  }
}
@media only screen and (max-width:768px) {
  .services__work-content-container {
    margin: 20px;
    max-width: 100%;
  }
  .services__work--with-bgimage {
    background-repeat: no-repeat;
    background-position: top center!important;
    background-size: 100%!important;
  }
  .services__work--with-bgimage .services__work-content-container {
    margin: 0;
    padding-top: 30%;
    max-width: 100%;
  }
  .services__work--with-image .services__work-content-container {
    margin: 0;
    width: 100%;
    max-width: 100%;
  }
  .frame-content .frame-item-text {
    padding-left: 0px;
  }
}
[data-theme="slingshot-a"] .features-hero {
  padding:100px 0 300px;
}
[data-theme="slingshot-a"] .features-hero__overlap {
  margin-top:-275px;
}
[data-theme="slingshot-b"] .features-hero {
  padding:450px 0 175px;
}
[data-theme="slingshot-b"] .features-hero__overlap {
  margin-top:-175px;
}
[data-theme="slingshot-b"] .slingshot-header {
  background:rgba(255, 255, 255, 0.95);
  padding:15px;
  position:absolute;
  top:0;
  left:0;
  right:0;
  text-align:center;
  z-index:2;
}
[data-theme="slingshot-b"] .slingshot-header img {
  max-width:200px;
  width:100%;
}
@media only screen and (max-width:768px) {
  [data-theme="slingshot-a"] .features-hero {
    padding: 50px 0 150px;
  }
  [data-theme="slingshot-a"] .features-hero__overlap {
    margin-top: -125px;
  }
  [data-theme="slingshot-b"] .features-hero {
    padding: 50px 0 150px;
  }
  [data-theme="slingshot-b"] .features-hero__overlap {
    margin-top: -125px;
  }
  [data-theme="slingshot-b"] .slingshot-header {
    position: relative;
  }
  [data-theme="slingshot-b"] .slingshot-header img {
    max-width: 125px;
  }
}
[data-theme*="slingshot"] h1, [data-theme*="slingshot"] h2, [data-theme*="slingshot"] h3, [data-theme*="slingshot"] h4, [data-theme*="slingshot"] h5, [data-theme*="slingshot"] h6, [data-theme*="slingshot"] .text--h1, [data-theme*="slingshot"] .text--h2, [data-theme*="slingshot"] .text--h3, [data-theme*="slingshot"] .text--h4, [data-theme*="slingshot"] .text--h5, .text--h6 {
  font-family:"aktiv-grotesk", "Helvetica Neue", "Segoe UI", Helvetica, Arial, sans-serif;
}
[data-theme*="slingshot"] h1, [data-theme*="slingshot"] .text--h1 {
  font-size:4.688rem;
  font-weight:700;
  line-height:1.25em;
}
[data-theme*="slingshot"] h2, [data-theme*="slingshot"] .text--h2 {
  font-size:2.8125rem;
  font-weight:700;
  line-height:1.25em;
}
[data-theme*="slingshot"] h3, [data-theme*="slingshot"] .text--h3 {
  font-size:2rem;
  font-weight:400;
  line-height:1.25em;
}
[data-theme*="slingshot"] h4, [data-theme*="slingshot"] .text--h4 {
  font-size:1.5rem;
  font-weight:400;
  line-height:1.25em;
}
[data-theme*="slingshot"] h5, [data-theme*="slingshot"] .text--h5 {
  font-size:1.25rem;
  font-weight:400;
}
[data-theme*="slingshot"] h6, [data-theme*="slingshot"] .text--h6 {
  font-size:1rem;
  font-weight:400;
}
@media only screen and (max-width:959px) and (min-width:768px) {
  [data-theme*="slingshot"] h1, [data-theme*="slingshot"] .text--h1 {
    font-size: 3em;
  }
  [data-theme*="slingshot"] h2, [data-theme*="slingshot"] .text--h2 {
    font-size: 2.5em;
  }
}
@media only screen and (max-width:767px) and (min-width:480px) {
  [data-theme*="slingshot"] h1, [data-theme*="slingshot"] .text--h1 {
    font-size: 3em;
  }
  [data-theme*="slingshot"] h2, [data-theme*="slingshot"] .text--h2 {
    font-size: 2.25em;
  }
  [data-theme*="slingshot"] h3, [data-theme*="slingshot"] .text--h3 {
    font-size: 1.8rem;
  }
  [data-theme*="slingshot"] h4, [data-theme*="slingshot"] .text--h4 {
    font-size: 1.4em;
  }
  [data-theme*="slingshot"] h5, [data-theme*="slingshot"] .text--h5 {
    font-size: 1.25em;
  }
  [data-theme*="slingshot"] h6, [data-theme*="slingshot"] .text--h6 {
    font-size: 1em;
  }
}
@media only screen and (max-width:480px) {
  [data-theme*="slingshot"] h1, [data-theme*="slingshot"] .text--h1 {
    font-size: 2.5em;
  }
  [data-theme*="slingshot"] h2, [data-theme*="slingshot"] .text--h2 {
    font-size: 2em;
  }
  [data-theme*="slingshot"] h3, [data-theme*="slingshot"] .text--h3 {
    font-size: 1.8rem;
  }
  [data-theme*="slingshot"] h4, [data-theme*="slingshot"] .text--h4 {
    font-size: 1.4em;
  }
  [data-theme*="slingshot"] h5, [data-theme*="slingshot"] .text--h5 {
    font-size: 1.25em;
  }
  [data-theme*="slingshot"] h6, [data-theme*="slingshot"] .text--h6 {
    font-size: 1em;
  }
}
[data-theme="slingshot-a"] .bgImage--slingshot {
  background-color:#20216e;
  background-image:url("https://download.infragistics.com/marketing/Website/products/slingshot/landing-page/business-teams-slingshot-hero-white-space.svg"), url("https://download.infragistics.com/marketing/Website/products/slingshot/landing-page/business-teams-slingshot-clouds.svg"), linear-gradient(180deg, #20226f 40%, rgb(53, 69, 255) 100%);
  background-size:102%, cover, 100%;
  background-position:center 102%, center 100%, 0 0;
  background-repeat:no-repeat;
}
[data-theme="slingshot-b"] .bgImage--slingshot {
  background-color:#999;
  background-image:url("https://download.infragistics.com/marketing/Website/products/slingshot/landing-page/business-teams-slingshot-hero-white-space-b.svg"), linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.45) 70%), url("https://static.infragistics.com/marketing/Website/products/slingshot/landing-page/slingshot-header-b-1600.jpg");
  background-size:101% auto, 100%, cover;
  background-position:center 100.5%, top center, top center;
  background-repeat:no-repeat;
}
@media only screen and (max-width:767px) {
  [data-theme="slingshot-b"] .bgImage--slingshot {
    background-image: url("https://download.infragistics.com/marketing/Website/products/slingshot/landing-page/business-teams-slingshot-hero-white-space-b.svg"), linear-gradient(180deg, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55) 70%), url("https://static.infragistics.com/marketing/Website/products/slingshot/landing-page/slingshot-header-b-1600.jpg");
    background-size: 101% auto, 100%, cover;
    background-position: center 100.5%, top center, top center;
    background-repeat: no-repeat;
  }
}
@media only screen and (min-width:1920px) {
  [data-theme="slingshot-a"] .bgImage--slingshot {
    background-color: #20216e;
    background: url("https://download.infragistics.com/marketing/Website/products/slingshot/landing-page/business-teams-slingshot-hero-white-space.svg"), url("https://download.infragistics.com/marketing/Website/products/slingshot/landing-page/business-teams-slingshot-clouds-new.svg"), linear-gradient(180deg, #20226f 40%, rgb(53, 69, 255) 100%);
    background-size: 102%, 101% 144%, 100%;
    background-position: center 102%, center 100%, 0 0;
    background-repeat: no-repeat, repeat-x, no-repeat;
  }
  [data-theme="slingshot-b"] .bgImage--slingshot {
    background-color: #999;
    background-image: url("https://download.infragistics.com/marketing/Website/products/slingshot/landing-page/business-teams-slingshot-hero-white-space-b.svg"), linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.45) 70%), url("https://static.infragistics.com/marketing/Website/products/slingshot/landing-page/slingshot-header-b-1600.jpg");
    background-size: 101% auto, 1920px auto, 1920px auto;
    background-position: center 100.5%, top center, top center;
    background-repeat: no-repeat;
  }
}
[data-theme*="slingshot"] .ui-btn {
  border-radius:2rem;
  padding:1em 1.5em;
  text-transform:capitalize;
}
[data-theme*="slingshot"] .ui-btn.ui-btn--default-white-hvr:hover, [data-theme*="slingshot"] .ui-btn.ui-btn--default-white-hvr:focus {
  background:#fff;
}
[data-theme="slingshot-a"] .ui-btn--default, [data-theme="slingshot-a"] .ui-btn--default:visited {
  background:#4bc560;
  border-color:#4bc560;
  color:#fff;
}
[data-theme="slingshot-a"] .ui-btn--default:focus, [data-theme="slingshot-a"] .ui-btn--default:hover {
  background:transparent;
  border-color:#4bc560;
  color:#4bc560;
}
[data-theme="slingshot-b"] .ui-btn--default, [data-theme="slingshot-b"] .ui-btn--default:visited {
  background:#d81a60;
  border-color:#d81a60;
  color:#fff;
}
[data-theme="slingshot-b"] .ui-btn--default:focus, [data-theme="slingshot-b"] .ui-btn--default:hover {
  background:transparent;
  border-color:#d81a60;
  color:#d81a60;
}
[data-theme*="slingshot"] .features-block__item.features-block--separator {
  padding-left:4%;
}
[data-theme*="slingshot"] .features-block--list .features-block__item.features-block--separator:first-child {
  padding-right:4%;
}
@media only screen and (max-width:767px) {
  [data-theme*="slingshot"] .features-block__item.features-block--separator {
    padding-left: 0;
    padding-right: 0;
  }
  [data-theme*="slingshot"] .features-block--list .features-block__item.features-block--separator:first-child {
    padding-top: 0;
  }
}
@media only screen and (max-width:767px) {
  [data-theme*="indigo-design"] .features-block__item--half, [data-theme*="indigo-design"] .features-block__item--third, [data-theme*="indigo-design"] .features-block__item--fourth {
    width: 100% !important;
  }
}
[data-theme*="indigo-design"] p.text--h4 {
  line-height:1.5em;
}
[data-theme*="indigo-design"] .accentuate {
  font-weight:600;
}
@media only screen and (max-width:480px) {
  [data-theme*="indigo-design"] .text--h1 {
    font-size: 0.625em;
  }
  [data-theme*="indigo-design"] .text--h3 {
    font-size: 2rem;
  }
}
.features-indigo {
  min-height:calc(100vh - 5vh);
  min-height:auto;
}
.features-indigo.bgImage—indigo-horz-slash {
  padding-top:30px;
  background:url("https://static.infragistics.com/marketing/Website/products/indigo-design/2022/section-1-hero/desktop_screen-hero.png"), url("https://static.infragistics.com/marketing/Website/products/indigo-design/2022/section-1-hero/mockup_my-profile-screen.png"), url("https://static.infragistics.com/marketing/Website/products/indigo-design/2022/section-1-hero/rectangle.svg"), url("https://static.infragistics.com/marketing/Website/products/indigo-design/2022/section-1-hero/rectangle-2.svg"), url("https://static.infragistics.com/marketing/Website/products/indigo-design/2022/section-1-hero/rectangle-3.svg");
  background-color:var(--color-flamingo);
  background-repeat:no-repeat;
  background-position:right bottom, 64% 0%, 16% 25%, 0% 100%, left top;
  background-size:27%, 47%, 8%, 27%, 10%;
}
@media only screen and (min-width:2048px) and (max-width:4096px) {
  .features-indigo.bgImage—indigo-horz-slash {
    background-size: 24%, 42%, 8%, 22%, 8%;
  }
}
@media only screen and (max-width:768px) {
  .features-indigo.bgImage—indigo-horz-slash {
    background-position: right bottom, 100% -15%, 44% 58%, 0% 130%, left top;
    background-size: 30%, 52%, 20%, 40%, 20%;
  }
}
@media only screen and (max-width:480px) {
  .features-indigo.bgImage—indigo-horz-slash {
    background-position: right bottom, 200% -20%, 42% 60%, left bottom, left top;
    background-size: 40%, 80%, 40%, 40%, 40%;
  }
}
.features-indigo .image-group img {
  width:30%;
}
.features-indigo .image-group img:first-child {
  padding-right:15px;
  margin-right:15px;
  border-right:2px solid white;
}
.features-indigo .hgroup {
  margin-top:35vh;
}
.features-indigo .hgroup h1 {
  font-size:5rem;
  font-weight:bold;
  margin-bottom:0.3em;
}
.features-indigo .hgroup h2 {
  font-size:4rem;
}
@media only screen and (max-width:959px) and (min-width:768px) {
  .features-indigo .hgroup h1, .features-indigo .hgroup .text--h1 {
    font-size: 4.063rem;
  }
}
@media only screen and (max-width:767px) and (min-width:480px) {
  .features-indigo .hgroup h1, .features-indigo .hgroup .text--h1 {
    font-size: 2rem;
  }
}
@media only screen and (max-width:767px) {
  .bgImage--tiles-heroheader {
    background-position: 0;
  }
  .features-indigo {
    min-height: auto;
  }
  .features-indigo .hgroup {
    margin-top: 0;
  }
  .features-indigo .hgroup h1 {
    font-size: 2rem;
  }
  .features-indigo .hgroup h2 {
    font-size: 1.125rem;
  }
}
.container-accelerate_app header {
  margin-bottom:50px;
}
.container-accelerate_app figure {
  position:relative;
  min-height:50vh;
}
.container-accelerate_app figure img {
  position:absolute;
}
.container-accelerate_app figure img:nth-child(1) {
  top:0;
  left:0;
}
.container-accelerate_app figure img:nth-child(2) {
  top:0;
  left:30%;
}
.container-accelerate_app figure img:nth-child(3) {
  top:0;
  left:calc(50% - 160px);
  width:345px;
  z-index:3;
}
.container-accelerate_app figure img:nth-child(4) {
  top:0;
  right:370px;
}
.container-accelerate_app figure img:nth-child(5) {
  top:150px;
  right:0;
}
@media only screen and (max-width:767px) {
  .container-accelerate_app figure img:nth-child(1) {
    width: 70%;
  }
  .container-accelerate_app figure img:nth-child(2) {
    width: 30%;
    left: 0;
  }
  .container-accelerate_app figure img:nth-child(3) {
    left: 27%;
    width: 50%;
  }
  .container-accelerate_app figure img:nth-child(4) {
    right: 5%;
    width: 22%;
  }
  .container-accelerate_app figure img:nth-child(5) {
    width: 90%;
  }
}
@media only screen and (max-width:500px) {
  .container-accelerate_app figure img:nth-child(1), .container-accelerate_app figure img:nth-child(5) {
    width: 50%;
  }
}
.container-components_list.bgImage—indigo-horz-slash {
  padding-top:50px;
  padding-bottom:180px;
  background-image:url("https://static.infragistics.com/marketing/Website/products/indigo-design/2022/section-3--components-list/background.svg");
  background-repeat:no-repeat;
  background-position:center top;
  background-size:cover;
}
@media only screen and (min-width:2048px) and (max-width:4096px) {
  .container-components_list.bgImage—indigo-horz-slash {
    padding: 15% 0;
    background-position: center;
  }
}
@media only screen and (max-width:767px) {
  .container-components_list.bgImage—indigo-horz-slash {
    padding-bottom: 65px;
  }
  .container-components_list .width--three-quarter {
    width: 100%;
  }
  .container-components_list figure img {
    width: 50%;
  }
  .container-components_list figure img:nth-child(2) {
    width: 30%;
    left: 20%;
  }
  .container-components_list figure img:nth-child(3) {
    width: 250px;
    left: calc(50% - 100px);
  }
  .container-components_list figure img:nth-child(4) {
    width: 30%;
    right: 10%;
  }
  .container-components_list .features-block__item {
    padding-top: 0;
    padding-bottom: 0;
  }
}
.container-scope header {
  margin-bottom:100px;
}
@media only screen and (max-width:767px) {
  .container-scope header {
    margin-bottom: 50px;
  }
}
.container-theming {
  background:url("https://static.infragistics.com/marketing/Website/products/indigo-design/2022/section-4--benefits/shapes/rectangle-large.svg"), url("https://static.infragistics.com/marketing/Website/products/indigo-design/2022/section-4--benefits/shapes/rectangle-small.svg"), url("https://static.infragistics.com/marketing/Website/products/indigo-design/2022/section-4--benefits/shapes/rectangle-medium.svg"), url("https://static.infragistics.com/marketing/Website/products/indigo-design/2022/section-4--benefits/shapes/rectangle-extra-large-invert2.svg");
  background-repeat:no-repeat;
  background-position:right top, 85% top, 20% 100%, -8% 90%;
}
.theming_options {
  margin:0 5%;
}
.theming_options img {
  flex:1;
  width:35%;
}
.theming_options div:nth-child(1) {
  text-align:left;
}
.theming_options div:nth-child(2) {
  text-align:right;
}
.theming_options div:nth-child(1) img {
  margin-right:8%;
}
.theming_options div:nth-child(2) img {
  margin-left:8%;
}
@media only screen and (max-width:767px) {
  .container-theming {
    background-repeat: no-repeat;
    background-position: right top, 25% top, 50% 50%, 450% 133%;
  }
  .theming_options {
    margin: 0;
  }
  .theming_options img {
    margin: 0 !important;
    padding-bottom: 25px;
    width: 49%;
  }
}
.container-plugin {
  margin-bottom:100px;
}
@media only screen and (max-width:767px) {
  .container-plugin {
    text-align: center;
    margin-bottom: 0;
  }
}
.container-benefits {
  padding-top:80px;
  padding-bottom:700px;
  background:url("https://static.infragistics.com/marketing/Website/products/indigo-design/2022/section-4--benefits/shapes/rectangle-large.svg"), url("https://static.infragistics.com/marketing/Website/products/indigo-design/2022/section-4--benefits/shapes/rectangle-small.svg"), url("https://static.infragistics.com/marketing/Website/products/indigo-design/2022/section-4--benefits/shapes/rectangle-medium.svg"), url("https://static.infragistics.com/marketing/Website/products/indigo-design/2022/section-4--benefits/shapes/rectangle-extra-large-invert2.svg"), url("https://static.infragistics.com/marketing/Website/products/indigo-design/2022/section-4--benefits/shapes/rectangle-extra-large.svg");
  background-repeat:no-repeat;
  background-position:right top, 85% top, 25% 70%, left 100%, right 100%;
}
@media only screen and (max-width:767px) {
  .container-benefits {
    padding-bottom: 0;
    background-repeat: no-repeat;
    background-position: right top, 25% top, 64% 40%, left 61%, right 100%;
  }
}
@media only screen and (max-width:480px) {
  .container-benefits {
    background-position: right top, 25% top, 64% 40%, 340% 61%, right 100%;
  }
}
.container-mockups.bgImage—indigo-horz-slash .features-block__item {
  width:calc(100%+9.5%);
  position:relative;
  left:-9.5%;
}
.container-mockups .p--r {
  padding-right:10%;
}
.container-mockups h2 {
  margin-top:0;
  margin-top:1.875em;
}
@media only screen and (max-width:1600px) {
  .container-mockups.bgImage—indigo-horz-slash {
    padding-top: 350px;
  }
}
.container-mockups.bgImage—indigo-horz-slash {
  padding-bottom:150px;
  background:url("https://static.infragistics.com/marketing/Website/products/indigo-design/2022/section-5--mockups/rectangle-shapes/rectangle-large.svg"), url("https://static.infragistics.com/marketing/Website/products/indigo-design/2022/section-5--mockups/rectangle-shapes/rectangle-madium.svg"), url("https://static.infragistics.com/marketing/Website/products/indigo-design/2022/section-5--mockups/rectangle-shapes/rectangle-small.svg"), url("https://static.infragistics.com/marketing/Website/products/indigo-design/2022/section-5--mockups/background.svg");
  background-repeat:no-repeat;
  background-position:104% 16%, 81% 9%, 82% 31%, center;
  background-size:auto, auto, auto, contain;
  overflow-x:hidden;
}
@media screen and (min-width:1900px) {
  .container-mockups.bgImage—indigo-horz-slash {
    background-size: auto, auto, auto, cover;
  }
}
@media only screen and (max-width:767px) {
  .container-mockups .features-block__content {
    margin: 0 10%;
  }
  .container-mockups .p--r {
    padding-right: 0;
  }
  .container-mockups.bgImage—indigo-horz-slash {
    padding-top: 0px;
    padding-bottom: 0;
    margin-bottom: 40px;
    margin-top: -50px;
    background-repeat: no-repeat;
    background-position: 430% 20%, 78% -5%, 21% 18%, center;
    background-size: 25%, 25%, 25%, cover;
  }
  .container-mockups.bgImage—indigo-horz-slash .features-block__item--third, .container-mockups.bgImage—indigo-horz-slash .features-block__item--fourth {
    width: 25% !important;
  }
  .container-mockups.bgImage—indigo-horz-slash .features-block__item--half {
    width: 50% !important;
  }
}
.container-sketch.bgImage—indigo-horz-slash {
  padding-top:130px;
  padding-bottom:130px;
  background:url("https://static.infragistics.com/marketing/Website/products/indigo-design/2022/section-7--ui-kit-to-real-app/rectangle-copy-13.svg"), url("https://static.infragistics.com/marketing/Website/products/indigo-design/2022/section-7--ui-kit-to-real-app/rectangle-copy-12.svg"), url("https://static.infragistics.com/marketing/Website/products/indigo-design/2022/section-7--ui-kit-to-real-app/rectangle-copy-12.svg"), url("https://static.infragistics.com/marketing/Website/products/indigo-design/2022/section-7--ui-kit-to-real-app/rectangle-copy-12.svg");
  background-position:100% 70%, 0 60%, 5% 85%, 95% 20%;
  background-repeat:no-repeat;
}
.container-sketch .sketch-items .item--app-mockup {
  width:80%;
  margin-top:50%;
}
.container-sketch .sketch-items .item--ui-kit-screen {
  width:80%;
}
.container-sketch .sketch-items .item--enabled {
  bottom:14%;
  right:12%;
  width:10%;
}
.container-sketch .sketch-items .item--floating-date-picker {
  top:12%;
  left:18%;
  width:18%;
  z-index:3;
}
.container-sketch .sketch-items .item--adobe-xd-logo {
  top:20%;
  left:45%;
  width:5%;
  z-index:3;
}
.container-sketch .sketch-items .item--floating-dialog {
  bottom:2%;
  right:24%;
  width:20%;
}
.container-sketch .sketch-items .item--floating-nav-drawer {
  width:32%;
  top:28%;
  right:31%;
}
.container-sketch .sketch-items .item--path-up {
  top:20%;
  left:9%;
  width:65%;
}
.container-sketch .sketch-items .item--path-down {
  bottom:12%;
  right:9%;
  width:55%
}
.container-sketch .sketch-items .item--floating-avatar {
  bottom:20%;
  right:43%;
  width:10%;
}
.container-sketch .sketch-items .item--floating-card {
  top:50%;
  right:0%;
  width:27%;
}
.container-sketch .sketch-items .item--sketch-logo {
  bottom:11%;
  right:50%;
  width:5%;
}
@media only screen and (max-width:767px) {
  .container-sketch .features-block__item--half {
    width: 50% !important;
  }
}
.container-responsive.bgImage—indigo-horz-slash {
  padding-top:300px;
  padding-bottom:230px;
  padding-top:17%;
  padding-bottom:12%;
  background:url("https://static.infragistics.com/marketing/Website/products/indigo-design/2022/section-8--responsive/rectangle-shapes/rectangle-extra-large.svg"), url("https://static.infragistics.com/marketing/Website/products/indigo-design/2022/section-8--responsive/rectangle-shapes/rectangle-large.svg"), url("https://static.infragistics.com/marketing/Website/products/indigo-design/2022/section-8--responsive/rectangle-shapes/rectangle-medium.svg"), url("https://static.infragistics.com/marketing/Website/products/indigo-design/2022/section-8--responsive/rectangle-shapes/rectangle-small.svg"), url("https://static.infragistics.com/marketing/Website/products/indigo-design/2022/section-8--responsive/background.svg");
  background-position:100% 70%, 0 60%, 5% 85%, 95% 20%, center;
  background-repeat:no-repeat;
  background-size:auto, auto, auto, auto, cover;
}
.container-responsive h2 {
  margin-top:25px;
}
@media only screen and (max-width:767px) {
  .container-responsive {
    padding: 0 5%;
  }
  .container-responsive.bgImage—indigo-horz-slash {
    padding-top: 100px;
    padding-bottom: 100px;
    background-position: 1550% 50%, 0 30%, 10% 80%, 100% 20%, center;
    background-repeat: no-repeat;
  }
  .container-responsive img {
    margin-bottom: 25px;
  }
}
.container-app_builder.bgImage—indigo-horz-slash {
  padding-top:200px;
  padding-bottom:200px;
  background:url("https://static.infragistics.com/marketing/Website/products/indigo-design/2022/section-9--app-builder/shapes/rectangle-small.svg"), url("https://static.infragistics.com/marketing/Website/products/indigo-design/2022/section-9--app-builder/shapes/rectangle-medium.svg"), url("https://static.infragistics.com/marketing/Website/products/indigo-design/2022/section-9--app-builder/shapes/rectangle-small.svg"), url("https://static.infragistics.com/marketing/Website/products/indigo-design/2022/section-9--app-builder/shapes/rectangle-large.svg"), url("https://static.infragistics.com/marketing/Website/products/indigo-design/2022/section-9--app-builder/shapes/rectangle-medium.svg"), url("https://static.infragistics.com/marketing/Website/products/indigo-design/2022/section-9--app-builder/shapes/rectangle-small.svg");
  background-position:10% 0%, -8% 16%, 85% 0%, 100% 0%, 23% 70%, 15% 100%;
  background-repeat:no-repeat;
}
.container-app_builder .logo_img {
  width:270px;
  margin-bottom:20px;
}
.container-app_builder .separation {
  margin-bottom:100px;
}
@media only screen and (max-width:767px) {
  .container-app_builder.bgImage—indigo-horz-slash {
    padding-top: 50px;
    padding-bottom: 200px;
    margin-bottom: 100px;
    background-position: -35% 0, 20% 20%, 110% 0%, 200% 40%, 40% 100%, -65% 100%;
    background-repeat: no-repeat;
  }
  .container-app_builder .separation {
    margin-bottom: 50px;
  }
}
.container-user_testing.bgImage—indigo-horz-slash {
  padding-top:15%;
  margin-bottom:5%;
  padding-top:15%;
  padding-bottom:7%;
  margin-bottom:4%;
  background:url("https://static.infragistics.com/marketing/Website/products/indigo-design/2022/section-10--user-testing/cloud-2.svg"), url("https://static.infragistics.com/marketing/Website/products/indigo-design/2022/section-10--user-testing/cloud-1.svg"), url("https://static.infragistics.com/marketing/Website/products/indigo-design/2022/section-10--user-testing/background.svg");
  background-position:100% 90%, 60% 100%, top center;
  background-repeat:no-repeat;
  background-size:auto, auto, cover;
}
.container-user_testing .image {
  margin-right:210px;
}
@media only screen and (max-width:959px) and (min-width:768px) {
  .flexslider--hmar {
    margin-left: 60px;
    margin-right: 60px;
  }
}
@media only screen and (max-width:767px) {
  .container-user_testing.bgImage—indigo-horz-slash {
    padding-top: 150px;
    padding-bottom: 50px;
    background-size: auto, auto, cover;
    background-position: 110% 90%, 850% 100%, top center;
    background-repeat: no-repeat;
  }
  .container-user_testing img {
    margin-bottom: 25px;
  }
  .container-user_testing {
    padding: 0 5%;
  }
  .container-user_testing .image {
    margin: 0;
    margin-top: -30px;
  }
  .container-user_testing .image img {
    margin-right: 0;
    margin-bottom: 0;
  }
}
.container-latest_release {
  margin-bottom:5em;
}
.container-final_mockup.bgImage—indigo-horz-slash {
  position:relative;
  padding-top:300px;
  background:url("https://static.infragistics.com/marketing/Website/products/indigo-design/2022/section-12--final-mockup/shapes/rectangle-small.svg"), url("https://static.infragistics.com/marketing/Website/products/indigo-design/2022/section-12--final-mockup/shapes/rectangle-large.svg"), url("https://static.infragistics.com/marketing/Website/products/indigo-design/2022/section-12--final-mockup/background.svg");
  background-position:10% 50%, 28% 57%, center;
  background-repeat:no-repeat;
  background-size:auto, auto, cover;
}
.container-final_mockup .calendar, .container-final_mockup .list {
  position:absolute;
  top:0;
}
.container-final_mockup .monitor {
  width:80%;
  width:auto;
  height:75vh;
}
.container-final_mockup .calendar {
  right:0;
  width:25%;
  margin:5% 11% 0 0;
}
.container-final_mockup .list {
  left:0;
  margin:33% 0 0 25%;
}
.container-final_mockup .final_mockup--logo {
  margin-bottom:150px;
}
@media only screen and (max-width:767px) {
  .container-final_mockup.bgImage—indigo-horz-slash {
    margin-bottom: 0;
    background-position: 10% 10%, 255% 35%, center;
    background-repeat: no-repeat;
    background-size: auto, auto, cover;
  }
  .container-final_mockup.bgImage—indigo-horz-slash {
    padding-top: 100px;
  }
  .container-final_mockup .monitor {
    width: 100%;
  }
  .container-final_mockup .calendar {
    width: 40%;
    margin: 12% 0 0 0;
  }
  .container-final_mockup .list {
    width: 50%;
    margin: 35% 0 0 0;
  }
  .container-final_mockup .final_mockup--logo {
    width: 80%;
    margin-bottom: 70px;
  }
}
</style>