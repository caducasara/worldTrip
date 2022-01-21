import { Flex, Text, Heading, Popover, PopoverTrigger, Icon, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverBody } from "@chakra-ui/react";
import { RiInformationLine } from "react-icons/ri";

export function Infos() {
  return (
    <Flex
      align="center"
      justifyContent="space-around"
    >
      <Flex 
        direction="column"
        justifyContent="center"
        align={["flex-start", "flex-start", "center"]}
      >
        <Heading
          fontSize={["2xl", "5xl"]}
          color="yellow.400"
          fontWeight="500"
        > 
          50 
        </Heading>

        <Text
          fontWeight="500"
          fontSize={["md", "xl"]}
          color="gray.700"
        >
          Paises
        </Text>
      </Flex>

      <Flex 
        direction="column"
        justifyContent="center"
        align={["flex-start", "flex-start", "center"]}
      >
        <Heading
          fontSize={["2xl", "5xl"]}
          color="yellow.400"
          fontWeight="500"
        > 
          60 
        </Heading>

        <Text
          fontWeight="500"
          fontSize={["md", "xl"]}
          color="gray.700"
        >
          línguas
        </Text>
      </Flex>

      <Flex 
        direction="column"
        justifyContent="center"
        align={["flex-start", "flex-start", "center"]}
      >
        <Heading
          fontSize={["2xl", "5xl"]}
          color="yellow.400"
          fontWeight="500"
        > 
          27 
        </Heading>

        <Text
          fontWeight="500"
          fontSize={["md", "xl"]}
          color="gray.700"
        >
          cidades +100
          <Popover>
            <PopoverTrigger>
              <span>
                <Icon
                  as={RiInformationLine}
                  cursor="pointer"
                  ml="1"
                  color="gray.400"
                  w={["10px", '16px']}
                  h={["10px", '16px']}
                />
              </span>
            </PopoverTrigger>
            <PopoverContent
              bg="gray.700"
              color="yellow.400"
            >
              <PopoverArrow
                bg="gray.700"
              />
              <PopoverCloseButton 
                color="red"
              />
              <PopoverBody
                fontSize="lg"
                fontWeight="400"
              >
                Argentina, Brasil, Portugal, França, Alemanha, Canadá
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Text>
      </Flex>
    </Flex>
  )
}