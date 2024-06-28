import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';
import Script from 'next/script';
import theme from '../lib/theme';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Atul Aryan",
  "jobTitle": "Freelance Full-stack Developer",
  "url": "https://www.atularyan.online/",
  "sameAs": [
    "https://github.com/imatularyan",
    "https://www.linkedin.com/in/atularyan/",
    "https://twitter.com/Imatularyan"
  ],
  "worksFor": {
    "@type": "Organization",
    "name": "Freelancer"
  },
  "description": "Atul Aryan, a freelance full-stack developer based in India, specializing in HTML, CSS, JavaScript, React, EJS, Parel, Next.js, Three.js, Python, Tailwind CSS, Chakra UI, Vite, Redux, React Native, MongoDB, Jest, Node.js, and more. Visit for portfolio and contact information."
};

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="description" content="Atul Aryan, a freelance full-stack developer based in India, specializing in HTML, CSS, JavaScript, React, EJS, Parel, Next.js, Three.js, Python, Tailwind CSS, Chakra UI, Vite, Redux, React Native, MongoDB, Jest, Node.js, and more. Visit for portfolio and contact information." />
          <Script async src="https://www.googletagmanager.com/gtag/js?id=G-XHPN86NW6K"></Script>
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-XHPN86NW6K');
              `
            }}
          />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
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
