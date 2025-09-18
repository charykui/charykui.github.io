
Charity Chepkirui — Jekyll + Netlify CMS Portfolio (ready-to-deploy)

Contents:
- Jekyll site scaffold
- Netlify CMS config at /admin/config.yml
- netlify.toml for automatic Netlify build
- README with deployment steps

Quick deploy steps:
1. Unzip this package and push the files to your GitHub repo `charykui/charykui.github.io` (replace existing content).
2. Create a free Netlify account and click "Add new site" -> "Import from Git" -> connect to your GitHub repo.
3. Netlify will auto-detect the build using netlify.toml; click Deploy site.
4. In Netlify dashboard -> Site settings -> Identity: enable Identity, then enable Git Gateway.
5. Go to https://<your-netlify-site>.netlify.app/admin to open the CMS. Log in via Identity and invite yourself as an admin user if needed.
6. Edit content in the CMS and publish. Netlify will commit changes to your GitHub repo automatically.

Notes:
- Images uploaded via the CMS will go to images/uploads/
- If your repo branch is other than 'main', update admin/config.yml backend.branch accordingly.
