var posts=["2024/07/07/java第一节(hello java)/","2024/07/02/y总 的算法课/","2024/07/05/大物复习补考流程/","2024/07/02/如何简单使用hexo框架下的静态博客/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };