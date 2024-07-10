var posts=["2024/07/07/duck-lite的简陋Java文档/","2024/07/02/如何简单使用hexo框架下的静态博客/","2024/07/07/暑假Java学习路线/","2024/07/08/蒟蒻的算法1--string类型/","2024/07/02/y总 的算法课/","2024/07/09/蒟蒻的数据结构/","2024/07/08/静态的聊天机器人/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };