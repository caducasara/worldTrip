import { Grid, Heading } from "@chakra-ui/react";
import { City } from "./city";

export function CitiesContainer() {
  return (
    <>
      <Heading
        fontWeigth="500"
        fontSize={["2xl", "4xl"]}
        mb="10"
      >
        Cidades +100
      </Heading>
      <Grid
        templateColumns={["1fr", "1fr 1fr", "repeat(3, 1fr)", "repeat(4, 1fr)"]}
        gap={["20px", "45px"]}
        alignItens="center"
        justifyContent="center"
        px={["30px", "0"]}
      >
        <City 
          city="Londres" 
          country="Reino Unido" 
          cityImage="kingdon.jpg" 
          flag="flagKingdon.png"
        />

        <City 
          city="Paris" 
          country="França" 
          cityImage="paris.jpg" 
          flag="flagFranca.png"
        />

        <City 
          city="Roma" 
          country="Italia" 
          cityImage="roma.jpg" 
          flag="flagItalia.png"
        />

        <City 
          city="Londres" 
          country="Reino Unido" 
          cityImage="kingdon.jpg" 
          flag="flagKingdon.png"
        />

        <City 
          city="Paris" 
          country="França" 
          cityImage="paris.jpg" 
          flag="flagFranca.png"
        />

        <City 
          city="Roma" 
          country="Italia" 
          cityImage="roma.jpg" 
          flag="flagItalia.png"
        />
      </Grid>
    </>
  )
}