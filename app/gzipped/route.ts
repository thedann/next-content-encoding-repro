import { gzipSync } from 'node:zlib'

export const dynamic = 'force-dynamic'

// A Route Handler that returns a body it has gzipped itself, e.g. a large
// sitemap compressed once and cached.
export function GET() {
  const body = gzipSync('<?xml version="1.0"?><urlset></urlset>')

  return new Response(new Uint8Array(body), {
    headers: {
      'Content-Type': 'text/xml',
      'Content-Encoding': 'gzip',
    },
  })
}
