import React, { useState } from 'react';
import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react';
import { useReactToPrint } from 'react-to-print';

const Result = () => {
  const [selectedSentences, setSelectedSentences] = useState([]);
  const reportRef = React.useRef();

  const handleSentenceClick = (sentence) => {
    setSelectedSentences((prev) => [...prev, sentence]);
  };

  const handlePrint = useReactToPrint({
    content: () => reportRef.current,
  });

  const sentences = [
    "Sentence 1 from the radiological report.",
    "Sentence 2 from the radiological report.",
    "Sentence 3 from the radiological report.",
    "Sentence 4 from the radiological report.",
  ];

  return (
    <Container maxW="container.lg" py={10}>
      <Heading mb={6}>Generate Structured Radiological Report</Heading>
      <VStack spacing={4} align="stretch">
        {sentences.map((sentence, index) => (
          <Box
            key={index}
            p={4}
            bg="gray.100"
            borderRadius="md"
            cursor="pointer"
            onClick={() => handleSentenceClick(sentence)}
          >
            <Text>{sentence}</Text>
          </Box>
        ))}
      </VStack>
      <Button mt={6} colorScheme="blue" onClick={handlePrint}>
        Print Report
      </Button>
      <Box ref={reportRef} mt={10} p={4} border="1px solid" borderColor="gray.300" borderRadius="md">
        <Heading size="md" mb={4}>Selected Sentences</Heading>
        {selectedSentences.length > 0 ? (
          selectedSentences.map((sentence, index) => (
            <Text key={index} mb={2}>{sentence}</Text>
          ))
        ) : (
          <Text>No sentences selected.</Text>
        )}
      </Box>
    </Container>
  );
};

export default Result;