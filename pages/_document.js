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
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Atul Aryan, a freelance full-stack developer based in India. Specialized in technologies like HTML, CSS, JavaScript, React, EJS, Parel, Next.js, Three.js, Python, Tailwind CSS, Chakra UI, Vite, Redux, React Native, MongoDB, Jest, Node.js, and more. Providing top-notch website development, app development, and software development services. Based in Pune, Maharashtra, with roots in Bihar, Patna." />
          <meta name="keywords" content="Atul Aryan, developer, engineer, Pune, Bihar, Patna, software engineer, technologies, development, website development, app development, software development, HTML, CSS, JavaScript, React, EJS, Parel, Next.js, Three.js, Python, Tailwind CSS, Chakra UI, Vite, Redux, React Native, MongoDB, Jest, Node.js" />
          <meta name="author" content="Atul Aryan" />
          <meta property="og:title" content="Atul Aryan - Freelance Full-stack Developer" />
          <meta property="og:description" content="Atul Aryan, a freelance full-stack developer based in India. Specialized in technologies like HTML, CSS, JavaScript, React, EJS, Parel, Next.js, Three.js, Python, Tailwind CSS, Chakra UI, Vite, Redux, React Native, MongoDB, Jest, Node.js, and more. Providing top-notch website development, app development, and software development services." />
          <meta property="og:url" content="https://www.atularyan.online/" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="" />
          <meta property="og:locale" content="en_US" />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
          <link rel="canonical" href="https://www.atularyan.online/" />
          <link rel="icon" href="/favicon.ico" />
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
