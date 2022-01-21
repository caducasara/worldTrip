import { Flex, Heading, Text, Image } from "@chakra-ui/react";

export function Banner() {
  return (
    <Flex
      w="100%"
      h={["163px","250px" ,"250px" , "335px"]}
      bgImage="url('/banner_worldTrip.jpg')"
      bgPosition={["100% 20%", "100% 20%", "100% 30%"]}
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Flex
        w="100%"
        align="center"
        justify={["center", "space-between"]}
        mx="auto"
        px={["4", "10", "15", "20", "36"]}
      >
        <div>
          <Heading
            color="gray.100"
            fontWeight="500"
            fontSize={["xl", "2l", "2xl", "2lx", "4xl"]}
          >
            5 Continentes,<br/>
            infinitas possibilidades.
          </Heading>
          <Text
            color="gray.300"
            mt="5"
            fontSize={["0.8rem","xl"]}
            maxW={["100%", "100%", "100%", "550px"]}
          >
            Chegou a hora de tirar do papel a viagem que voce
            sempre sonhou
          </Text>
        </div>

        <Image
          src="/Airplane.svg"
          w={["300px", "300px", "430px"]}
          display={["none", "none", "block"]}
          alt="Avião amarelo voando entre alfunas nuvens"
          transform="translateY(48px)"
          ml="8"
        />
      </Flex>
    </Flex>
  )
}