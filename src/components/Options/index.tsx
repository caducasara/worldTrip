import { Grid, GridItem } from "@chakra-ui/react";
import { Option } from "./Option"

export function Options() {
  return (
    <Grid
      templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]}
      w="100%"
      justify="space-between"
      align="center"
      mt={["10", "32"]}
      mx="auto"
      maxW="1160px"
      gap={[1, 5]}
    >
      <GridItem>
        <Option icon="cocktail 1" title="vida noturna"/>
      </GridItem>

      <GridItem>
        <Option icon="surf 1" title="praia"/>
      </GridItem>

      <GridItem>
        <Option icon="building 1" title="moderno"/>
      </GridItem>

      <GridItem>
        <Option icon="museum 1" title="clássico"/>
      </GridItem>

      <GridItem colSpan={[2, 2, 2, 1]}>
        <Option icon="earth 1" title="e mais ..."/>
      </GridItem>
    </Grid>
  )
}