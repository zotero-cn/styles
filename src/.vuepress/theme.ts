import { hopeTheme } from "vuepress-theme-hope";


export default hopeTheme({
  // hostname: "https://zotero-cn.github.io",

  author: {
    name: "Zotero-Chinese",
    url: "https://zotro-cn.github.io",
  },

  iconAssets: "//at.alicdn.com/t/font_2410206_vuzkjonf4s9.css",
  iconPrefix: "iconfont icon-",

  logo: "/logo.png",

  repo: "https://github.com/zotero-cn/styles",

  repoDisplay: false,

  docsDir: "docs",

  displayFooter: true,
  copyright: "Copyright © 2022-present Zotero Chinese",

  navbar: [
    "/",
    {
      text: "全部样式",
      link: "/article/",
    },
    {
      text: "样式类型",
      link: "/category/",
    },
    {
      text: "所属领域",
      link: "/tag/",
    },
    {
      text: "CSL 中文文档",
      icon: 'blog',
      link: "https://zotero-cn.github.io/csl-doc-chinese/",
    },
  ],
  sidebar: false,


  plugins: {
    blog: true,

    // feed: {
    //   atom: true,
    //   json: true,
    //   rss: true,
    // },

    mdEnhance: {
      align: true,
      // codetabs: true,
      // demo: true,
      flowchart: true,
      footnote: true,
      imageMark: true,
      presentation: true,
      sub: true,
      sup: true,
      // tex: true,
      vpre: true,
    },

  },
  blog:{
    sidebarDisplay: 'none',
    articlePerPage: 100,
  },
  // pure: true,
});
