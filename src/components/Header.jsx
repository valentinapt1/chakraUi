import { Box, Heading, Button, Flex, Stack } from "@chakra-ui/react";
import foto from "../sources/images/foto.jpg"

function Header() {
  

    return (
      <>
       <Box 
      h= "40vh"
      bg= "white"
      foto={`url(${foto})`}
      bgRepeat="no-repeat"
      bgSize="cover"
      >
        <Flex
          direction="column"
          alignItems="center"
          justify="center"
          h="100%"
          bg="rgb(0 0 0 / 50%)"
        >
           <Heading
           color= "white"
           textTransform="uppercase"
           textAlign="center"
           fontWeight="light"
           letterSpacing="5px"
        >
            Domina el terreno 
        </Heading>
        <Stack
          direction={{ base: "column", md: "row"}}
          spacing="40px"
          mt="30px"
        >
        <Button
        variant="outline"
        size="lg"
        textTransform="uppercase"
        fontWeight="light"
        borderRadius="0"
        color="white"
        letterSpacing="1px"
        _hover={{
          color:"white",
          bg: "white"
        }}
        >
          Ver detalles
        </Button>
        <Button
        variant="outline"
        size="lg"
        textTransform="uppercase"
        fontWeight="light"
        borderRadius="0"
        color="white"
        letterSpacing="1px"
        _hover={{
          color:"black",
          bg: "white"
        }}
        >
          Ver video
        </Button>    
      </Stack>
        </Flex>
      </Box>
      </>
    )
  }
  
  export default Header
  