# Next.js 16.4.5 strips `Content-Encoding` from Route Handler responses

`app/gzipped/route.ts` returns a body it gzipped itself, with `Content-Encoding: gzip`.

```bash
npm install
npm run build
npm start
curl -s -D - -o /dev/null -H 'Accept-Encoding: gzip' http://localhost:3000/gzipped
```

- **16.4.5:** `content-encoding` is missing, but the body is still gzip (starts with `1f 8b`). Clients get binary data labelled `text/xml`.
- **16.4.3:** `content-encoding: gzip` is sent and clients decode the body.
