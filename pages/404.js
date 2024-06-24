import {
  Container,
  Divider,
  Heading,
  Text,
  Box,
  Button,
} from "@chakra-ui/react";
import NextLink from "next/link";

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1">Not Found</Heading>
      <Text>The page you&apos;re looking for is not found.</Text>
      <Divider my={6} />
      <Box my={6} textAlign="center">
        <Button as={NextLink} href="/" colorScheme="teal">
          Return to home
        </Button>
      </Box>
    </Container>
  );
};

export default NotFound;
