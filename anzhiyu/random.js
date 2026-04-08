var posts=["2026/04/08/OP-MIKE/","2026/04/08/hiokokokok/","2026/04/08/这是我的/","2026/04/08/BLOG/","2026/04/08/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };