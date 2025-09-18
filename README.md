# Portfolio - Charity Chepkirui (Polished)

This portfolio is a polished, ready-to-deploy static site.

## How to edit

### Blog posts
- Add `.md` files to `posts/` and update `posts/posts.json` with `title`, `date`, and `file`.
- Example entry in `posts/posts.json`:
```
{ "title": "My Post", "date": "2025-09-10", "file": "my-post.md" }
```

### Certificates
- Drop certificate files into `certs/`.
- Edit `certs/certs.json` to add metadata:
```
[
  {"title":"Cert Name","file":"file.pdf","verify":"https://link-to-verify"}
]
```

### Resume
- Replace `docs/resume.pdf` with your CV (same filename).

### Deployment
- Upload the contents of this folder to GitHub and enable GitHub Pages, or connect the repo to Netlify/Vercel for CI deploys.

Enjoy!
