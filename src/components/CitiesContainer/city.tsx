import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

interface CityProps {
  city: string;
  cityImage: string;
  country: string;
  flag: string;
}

export function City({city, country, cityImage, flag}) {
  return (
    <Box
      borderRadius="4px"
      overflow="hidden"
    >
      <Image 
        src={`/city/${cityImage}`}
        w="100%"
        h="170px"
      />
      <Flex
        p="6"
        align="center"
        justify="space-between"
        bg="white"
        border="1px"
        borderColor="yellow.300"
        borderTop="0"
      >
        <Flex
          direction="column"
        >
          <Heading
            fontSize="xl"
            fontWeight="500"
          >
            {city}
          </Heading>
          <Text
            mt="3"
            fontSize="md"
            color="gray.500"
            fontWeight="500"
          >
            {country}
          </Text>
        </Flex>
        <Image 
          src={`/city/${flag}`}
          w="30px"
          h="30px"
          borderRadius="50%"
          objectFit="cover"
        />
      </Flex>
    </Box>
  )
}