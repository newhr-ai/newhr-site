// Country-based language redirect for newhr.ai
//
// Runs on `/` only. Decision flow:
//   1. If the visitor has an `nh_lang` cookie (set when they manually picked
//      a language via the TR/EN toggle), respect it.
//   2. Otherwise, use Netlify's geo data: redirect non-TR visitors to /en/.
//   3. TR visitors (or unknown country) see the Turkish site at /.
//
// The Edge Function only handles the root path. Pages under /en/ and the
// Turkish sub-pages are served statically as before.
export default async (request, context) => {
  const url = new URL(request.url);

  if (url.pathname !== "/") return;

  const cookies = request.headers.get("cookie") || "";
  const match = cookies.match(/(?:^|;\s*)nh_lang=(tr|en)/);

  if (match) {
    if (match[1] === "en") {
      return Response.redirect(new URL("/en/", request.url), 302);
    }
    // Explicit TR choice — serve as-is.
    return;
  }

  const country = context.geo && context.geo.country && context.geo.country.code;
  if (country && country !== "TR") {
    return Response.redirect(new URL("/en/", request.url), 302);
  }
};

export const config = { path: "/" };
