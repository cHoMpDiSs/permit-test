import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
       <Head>
          {/* Global meta tags */}
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Ali Permit Practice" />
          <meta name="author" content="Jordon Marchesano" />
          <title>Ali Permit Practice</title>

          {/* Add any other global tags like fonts or external scripts */}
        </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
