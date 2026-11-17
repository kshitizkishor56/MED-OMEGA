# Deploy

## Cloudflare Pages

1. Push this project to a private GitHub repository for a source backup.
2. In Cloudflare Pages, import the repository and select Vite (or None).
3. Set build command `npm run build` and build output directory `dist`.
4. Deploy and open its HTTPS URL once while online so the service worker caches the shell.
5. For updates, commit and push; the PWA updates on a later launch.

No environment variables, API keys, or backend services are needed. Keep personal backup files out of source control.
