fetch('posts/posts.json')
  .then(response => response.json())
  .then(posts => {
    let blogList = document.getElementById('blog-list');
    posts.forEach(p => {
      let div = document.createElement('div');
      div.innerHTML = `<h3>${p.title}</h3><p>${p.excerpt}</p><a href="posts/${p.file}">Read more</a>`;
      blogList.appendChild(div);
    });
  });