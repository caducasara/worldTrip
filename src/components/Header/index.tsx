import { Flex, Grid, Icon, Image } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { RiArrowLeftSLine } from 'react-icons/ri'

export function Header() {
  const { asPath } = useRouter()
  const notHome = asPath !== "/"

  return (
    <Flex 
      as="header" 
      bg="white" 
      w="100%" 
      px="2%" 
      h={["50px","100px"]} 
      align="center"
      justify="center"
    >
      <Grid
        h="100%"
        w="100%"
        mx="auto"
        maxW="1160px"
        alignItems="center"
        templateColumns="repeat(3, 1fr)"
        justifyContent="center"
      >

        {notHome && (
          <Link href="/">
            <a>
              <Icon as={RiArrowLeftSLine} fontSize={[20, 32]} gridColumn="1"/>
            </a>
          </Link>
        )}

        <Image
        w={["81px","184px"]}
          src="/logo.svg"
          alt="worldtrip"
          justifySelf="center"
          gridColumn="2"
        />
      </Grid>
    </Flex>
  )
}