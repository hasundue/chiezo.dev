import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>chiezo.dev</title>
        <link
          rel="stylesheet"
          href="https://esm.sh/simpledotcss@v2.2.0/simple.min.css"
        />
      </Head>
      <div>
        <h2>chiezo.dev</h2>
        <p>Powered by:</p>
        <ul>
          <li><a href="https://deno.land/deploy">Deno Deploy</a></li>
          <li><a href="https://fresh.deno.dev">Fresh</a></li>
          <li><a href="https://simplecss.org">Simple.css</a></li>
        </ul>
        <p>
          <a href="https://github.com/hasundue/chiezo.dev">Source (GitHub)</a><br />
        </p>
      </div>
    </>
  );
}
