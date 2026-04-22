var posts=["2026/04/08/OP-MIKE/","2026/04/22/CAZZO/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };