import Head from "next/head";
import NavBar from "../Navbar";
import { Box, Container } from "@chakra-ui/react";
import Footer from "../Footer";

const Main = ({ children }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Atul's homepage" />
        <meta name="author" content="Atul Aryan" />
        <meta name="author" content="Digiworld Nexus" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Atul Aryan" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@imatularyan" />
        <meta name="twitter:creator" content="@imatularyan" />
        <meta name="twitter:image" content="" />
        <meta property="og:site_name" content="Atul Aryan" />
        <meta name="og:title" content="Atul Aryan" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="" />
        <title>Atul Aryan - Homepage</title>
      </Head>
      <NavBar />
      <Container maxW="container.md" pt={14}>
        {children}
        <Footer />
      </Container>
    </Box>
  );
};

export default Main;
