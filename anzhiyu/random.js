var posts=["2026/04/08/BLOG/","2026/04/08/hello-world/","2026/04/08/这是我的/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };