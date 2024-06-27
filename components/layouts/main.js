import { Box, Container } from "@chakra-ui/react";
import Head from "next/head";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Main = ({ children }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Atul's homepage" />
        <meta name="author" content="Atul Aryan" />
        <meta name="twitter:title" content="Atul Aryan" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@imatularyan" />
        <meta name="twitter:creator" content="@imatularyan" />
        <meta property="og:site_name" content="Atul Aryan" />
        <meta property="og:title" content="Atul Aryan" />
        <meta property="og:type" content="website" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <title>Atul Aryan - Homepage</title>
      </Head>
      <Navbar />
      <Container maxW="container.md" pt={14}>
        {children}
        <Footer />
      </Container>
    </Box>
  );
};

export default Main;
