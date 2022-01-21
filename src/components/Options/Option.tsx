import { Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

interface OptionPorps {
  icon: string;
  title: string;
}

export function Option({icon, title}: OptionPorps) {

  const isMobileVersion = useBreakpointValue({
    base: false,
    sm: true
  })

  return (
    <Flex
      direction={['row', 'column']}
      align="center"
      justify="center"
    >
      {isMobileVersion 
      ? 
      <Image 
        src={`/icons/${icon}.svg`}
        w="85px"
        h="85px"
        mb="6"
      />
      : 
      <Text
        color="yelloy.400"
        fontSize="18px"
        mr="2"
      >
        •
      </Text>
      }

      <Text
        fontWeight="600"
        fontSize={["18px", "xl", "2xl"]}
        color="gray.700"
      >
        {title}
      </Text>
    </Flex>
  )
}