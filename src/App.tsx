import * as React from "react"
import {
  ChakraProvider,
  Box,
  Grid,
  GridItem,
  theme,
} from "@chakra-ui/react"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box padding={24}>
      <Grid
        h='200px'
        templateRows='repeat(2, 1fr)'
        templateColumns='repeat(5, 1fr)'
        gap={4}
      >
        <GridItem rowSpan={2} colSpan={1} bg='tomato' />
        <GridItem colSpan={2} bg='papayawhip' />
        <GridItem colSpan={2} bg='papayawhip' />
        <GridItem colSpan={4} bg='tomato' />
      </Grid>
    </Box>
  </ChakraProvider>
) 
