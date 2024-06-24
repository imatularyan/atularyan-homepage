import { ChakraProvider } from "@chakra-ui/react";
import theme from "../lib/theme";
import Layout from "../components/layouts/main";
import Fonts from "../components/fonts";
import { AnimatePresence } from "framer-motion";

function Website({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout>
        <AnimatePresence
          mode="wait"
          initial={true}
          onExitComplete={() => {
            if (typeof window !== "undefined") {
              window.scrollTo({ top: 0 });
            }
          }}
        >
          <Component {...pageProps} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  );
}

export default Website;
