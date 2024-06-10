import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const UseCase2 = () => {
  return (
    <Box p={4}>
      <VStack spacing={4} align="start">
        <Heading>Use Case 2</Heading>
        <Text fontSize="lg">Description of the second internal tool use case.</Text>
        <Text>This tool provides analytics and insights for better decision making.</Text>
      </VStack>
    </Box>
  );
};

export default UseCase2;