import { Flex, Heading } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { Options } from "../components/Options";
import { Separator } from "../components/separator";
import { Slider } from "../components/Slider";

export default function Home() {
  return (
    <Flex direction="column">
      <Header/>
      <Banner/>
      <Options/>
      <Separator/>

      <Heading
        w="100%"
        maxW="1160px"
        mx="auto"
        fontSize={["lg", "3xl", "4xl"]}
        textAlign="center"
        fontWeight="500"
        color="gray.700"
      >
        Vamos nessa?<br/>
        Então escolha seu continente
      </Heading>

      <Slider/>
    </Flex>
  )
}
