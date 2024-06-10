import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const UseCase1 = () => {
  return (
    <Box p={4}>
      <VStack spacing={4} align="start">
        <Heading>Use Case 1</Heading>
        <Text fontSize="lg">Description of the first internal tool use case.</Text>
        <Text>This tool helps in managing tasks efficiently and effectively.</Text>
      </VStack>
    </Box>
  );
};

export default UseCase1;