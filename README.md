# short-it

A simple URL shortener service built with Cloudflare Workers and KV storage.

## Running

First, install dependencies with:

```
npm install
npm install -g wrangler@latest
```

You can run the project locally by using:

```
wrangler dev --local
```

## Seeding the data

You will need a Cloudflare account for this. Then, you need to create two KV namespaces:

```
wrangler kv:namespace create SHORT_URLS
wrangler kv:namespace create SHORT_URLS --preview
```

Then, add some data to both namespaces:

```
wrangler kv:key put --binding SHORT_URLS "/blog" "https://pragmaticpineapple.com/" --preview false
wrangler kv:key put --binding SHORT_URLS "/blog" "https://pragmaticpineapple.com/" --preview
```

Now, when you run `wrangler dev` and visit http://localhost:8787/blog, you will get redirected to https://pragmaticpineapple.com/

## Contributing

All PRs and suggestions are welcome
