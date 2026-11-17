# MED-OMEGA 3.0

An offline-first medical learning PWA for turning your own PrePG screenshots into study records and active recall. Data stays in browser IndexedDB. There is no account, server database, or automatic ChatGPT transfer.

## Develop and build

```sh
npm install
npm run dev
npm run test
npm run build
npm run preview
```

Production output is `dist/`. Deploy it as a static HTTPS site; see [DEPLOY.md](DEPLOY.md).

## Workflow

Add screenshots from Photos or Files, select one in the Vault, copy its prompt, open ChatGPT, attach the screenshot manually, and paste the response. Import accepts a JSON object or `BEGIN_MED_OMEGA_RECORD` / `END_MED_OMEGA_RECORD` block. Validate, review/edit fields, then save to create flashcards. AI output is not guaranteed valid or medically correct.

## Privacy and limits

Screenshots and records stay in local browser storage and are not uploaded by MED-OMEGA. Never share identifiable patient information. Clinical education requires verification against current references and qualified supervision. Browser storage can be evicted, especially on iOS: export backups regularly. Offline launch works after the app shell has been loaded online and cached; initial installation and updates need connectivity.

## Future API adapter

An optional future adapter should be an explicit user initiated server route, with provider credentials held only server-side, clear consent before image transfer, scoped retention, and a transparent disclosure. No API key or API inference is included in this release.
