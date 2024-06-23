import { Box, Heading, Text, Link, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import Image from "next/image";

const MotionBox = motion(Box);

function SpinningBox() {
  const mesh = useRef();

  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={mesh} position={[0, 0, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

export default function Home() {
  return (
    <VStack spacing={8} align="center">
      <Heading as="h1" size="2xl" mt={4} mb={6}>
        ✨Hi there, it's Atul!✨
      </Heading>
      <Text fontSize="xl">Here's some stuff about me:</Text>
      <Box>
        <Text>🔭 Working on react-native applications</Text>
        <Text>🛠️ Improving JavaScript and DSA</Text>
        <Text>🌱 Interested in proficient web application development</Text>
      </Box>
      <Link href="https://github.com/imatularyan" isExternal>
        <MotionBox
          p={5}
          shadow="md"
          borderWidth="1px"
          whileHover={{ scale: 1.05 }}
        >
          <Heading fontSize="xl">GitHub Profile</Heading>
          <Text mt={4}>Check out my GitHub projects!</Text>
        </MotionBox>
      </Link>
      <Box>
        <Image
          src="https://github-readme-stats.vercel.app/api?username=imatularyan&custom_title=My%20Github%20Stats!&theme=vue&count_private=true&include_all_commits=true&show_icons=true&cache_seconds=1800"
          alt="GitHub Stats"
          width={500}
          height={200}
        />
        <Image
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=imatularyan&custom_title=Which%20languages%20I%20use%20the%20most?&theme=vue&hide=ampl,tex&layout=compact&langs_count=6&cache_seconds=1800"
          alt="Top Languages"
          width={500}
          height={200}
        />
      </Box>
      <Box width="100%" height="400px">
        <Canvas>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <SpinningBox />
          <OrbitControls />
        </Canvas>
      </Box>
    </VStack>
  );
}
