var posts=["2024/07/02/hello/","2024/07/02/test静态博客/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };