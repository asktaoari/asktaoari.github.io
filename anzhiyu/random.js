var posts=["2025/07/12/1.思索很久还是入坑了/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };