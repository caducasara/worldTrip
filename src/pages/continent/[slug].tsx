import { Flex } from "@chakra-ui/react";
import { CitiesContainer } from "../../components/CitiesContainer";
import { Content } from "../../components/Content";
import { ContinentBanner } from "../../components/ContinentBanner";
import { Header } from "../../components/Header";

export default function Continent() {
  return (
    <Flex
      direction="column"
    >
      <Header/>
      <ContinentBanner/>

      <Flex
        direction="column"
        w="100%"
        maxWidth="1160px"
        mx="auto"
        mb="100"
        px="1rem"
      >
        <Content/>
        <CitiesContainer />
      </Flex>
    </Flex>
  )
}