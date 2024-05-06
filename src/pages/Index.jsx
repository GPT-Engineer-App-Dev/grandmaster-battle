import { Box, Flex, Text, Button, useToast } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const toast = useToast();
  const [gameState, setGameState] = useState("waiting"); // 'waiting', 'playing', 'finished'
  const [playerTurn, setPlayerTurn] = useState("white"); // 'white', 'black'

  const handleStartGame = () => {
    setGameState("playing");
    toast({
      title: "Game Started",
      description: "You are playing as white.",
      status: "info",
      duration: 5000,
      isClosable: true,
    });
  };

  const handleMove = () => {
    // This function would handle the move logic
    setPlayerTurn(playerTurn === "white" ? "black" : "white");
  };

  const handleEndGame = () => {
    setGameState("finished");
    toast({
      title: "Game Over",
      description: "Thanks for playing!",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Flex direction="column" align="center" justify="center" h="100vh">
      <Box as="nav" p="4" w="full" bg="gray.200">
        <Text fontSize="xl">Online Chess Game</Text>
      </Box>
      <Flex direction="column" align="center" justify="center" flexGrow={1}>
        <Box id="chess-board" w="80vw" h="80vw" maxW="500px" maxH="500px" bg="gray.100" mb="4">
          {/* Chess board would be implemented here */}
          <Text>{`Player turn: ${playerTurn}`}</Text>
        </Box>
        {gameState === "waiting" && (
          <Button colorScheme="blue" onClick={handleStartGame}>
            Start Game
          </Button>
        )}
        {gameState === "playing" && (
          <Button colorScheme="orange" onClick={handleMove}>
            Make Move
          </Button>
        )}
        {gameState === "finished" && (
          <Button colorScheme="green" onClick={() => setGameState("waiting")}>
            Play Again
          </Button>
        )}
      </Flex>
    </Flex>
  );
};

export default Index;