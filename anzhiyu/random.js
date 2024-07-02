var posts=["2024/07/02/test静态博客/","2024/07/02/hello/","2024/07/02/y总 的算法课/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };