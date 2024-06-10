import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const UseCase3 = () => {
  return (
    <Box p={4}>
      <VStack spacing={4} align="start">
        <Heading>Use Case 3</Heading>
        <Text fontSize="lg">Description of the third internal tool use case.</Text>
        <Text>This tool streamlines communication and collaboration within teams.</Text>
      </VStack>
    </Box>
  );
};

export default UseCase3;