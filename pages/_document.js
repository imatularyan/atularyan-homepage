// _document.js

import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";
import theme from "../lib/theme";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Atul Aryan",
  jobTitle: "Freelance Full-stack Developer",
  url: "https://www.atularyan.online/",
  sameAs: [
    "https://github.com/imatularyan",
    "https://www.linkedin.com/in/atularyan/",
    "https://twitter.com/Imatularyan",
    "https://instagram.com/Imatularyan",
    "https://facebook.com/Imatularyan",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Freelancer",
  },
  description:
    "Atul Aryan, a freelance full-stack developer based in India, specializing in HTML, CSS, JavaScript, React, EJS, Parel, Next.js, Three.js, Python, Tailwind CSS, Chakra UI, Vite, Redux, React Native, MongoDB, Jest, Node.js, and more. Visit for portfolio and contact information.",
};

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="description"
            content="Atul Aryan, a freelance full-stack developer based in India, specializing in HTML, CSS, JavaScript, React, EJS, Parel, Next.js, Three.js, Python, Tailwind CSS, Chakra UI, Vite, Redux, React Native, MongoDB, Jest, Node.js, and more. Visit for portfolio and contact information."
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
