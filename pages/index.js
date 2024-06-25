import {
  Box,
  Container,
  Heading,
  useColorModeValue,
  Button,
  Link,
  List,
  ListItem,
} from "@chakra-ui/react";
import Image from "next/image";
import Layout from "../components/layouts/article";
import Section from "../components/Section";
import Paragraph from "../components/Paragraph";
import NextLink from "next/link";
import { ChevronRightIcon, EmailIcon } from "@chakra-ui/icons";
import { BioSection, BioYear } from "../components/Bio";
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoLinkedin,
} from "react-icons/io5";

const Home = () => (
  <Layout>
    <Container pt="16px">
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        css={{ backdropFilter: "blur(10px)" }}
      >
        Hello, I&apos;m a software engineer based in India!
      </Box>
      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Atul Aryan
          </Heading>
          <p>Tech Craftsman ( Developer / Problem Solver )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src="/images/atul.jpg"
              alt="Profile image"
              width={100}
              height={100}
            />
          </Box>
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Atul Aryan is a freelance and a full-stack developer based in India
          with a passion for building enterprise websites and digital services.
          He has a knack for all things launching products, from planning and
          designing all the way to solving real-life problems with code. When
          not online, he enjoys exploring new technologies and working on
          personal projects. Currently, he is engaged in developing an
          enterprise website for a major client. He also publishes content for
          marketing his services and shares insights on his blog and social
          media channels.
        </Paragraph>
        {/* <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My portfolio
          </Button>
        </Box> */}
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1998</BioYear>
          Born in Bihar, India.
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          Completed the Bachelor&apos;s Program in the Graduate School of
          Computer Science at Maharashtra Institute of Technology
        </BioSection>
        <BioSection>
          <BioYear>2023 to present</BioYear>
          Working as a freelancer
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/imatularyan" target="_blank">
              <Button
                variant="ghost"
                colorScheme="green"
                leftIcon={<IoLogoGithub />}
              >
                @imatularyan
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/atularyan/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="green"
                leftIcon={<IoLogoLinkedin />}
              >
                @atularyan
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://x.com/Imatularyan" target="_blank">
              <Button
                variant="ghost"
                colorScheme="green"
                leftIcon={<IoLogoTwitter />}
              >
                @imatularyan
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.instagram.com/imatularyan/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="green"
                leftIcon={<IoLogoInstagram />}
              >
                @imatularyan
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
);

export default Home;
