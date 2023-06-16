import {
  Center,
  Image,
  Input,
  SimpleGrid,
  VStack,
  Box,
  Heading,
} from "@chakra-ui/react";
import { useState } from "react";
import Cards from "../components/Cards";
export const RecipeListPage = ({ recipes, clickFn }) => {
  const [searchField, setSearchField] = useState("");

  const filteredRecipes = recipes.filter((recipe) => {
    const text = Object.values(recipe).flat().join(" ").replace(/-/g, " ");

    return text.toLowerCase().includes(searchField.toLowerCase());
  });
  const handleSearchChanges = (event) => {
    return setSearchField(event.target.value);
  };

  return (
    <Center mb="3rem" w="100%">
      <VStack>
        <Box w="100%" position="relative">
          <Box>
            <Image
              src="https://images.pexels.com/photos/10455982/pexels-photo-10455982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="pizza"
              objectFit="cover"
              w="100%"
              h="30rem"
              mb="3rem"
            />
          </Box>
        </Box>
        <Box position="absolute" top="12rem" left="25%" w="60%">
          <Center>
            <Heading size="lg" mb="1rem" color={"green.800"}>
              Find a Recipe
            </Heading>
          </Center>
          <Input
            bg="white"
            m="auto"
            placeholder="Search Recipes"
            onChange={handleSearchChanges}
            h="3rem"
          />
        </Box>
        <SimpleGrid
          columns={[1, 2, 3, 4]}
          gap={5}
          transition="all 0.3s ease"
          spacingX={5}
          w="80%"
        >
          {filteredRecipes.map((recipe) => (
            <Cards
              clickFn={clickFn}
              key={recipe.label}
              recipe={recipe}
              minHeight="250px"
            />
          ))}
        </SimpleGrid>
      </VStack>
    </Center>
  );
};
