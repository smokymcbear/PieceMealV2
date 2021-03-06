//Search Bar
import React from 'react';
import {
    Content,
    Card,
    CardItem,
    Text,
    Icon,
    Right,
    Button
} from 'native-base';

const SearchBar = ({ ingredients, recipes }) => {
  return (
    <Content>
      {ingredients.map((ingredient) => (
        <Card>
             <CardItem>
                   <Text>{ ingredient.name }</Text>
                 <Right>
                   <Button><Icon name="ios-arrow-forward" /></Button>
                 </Right>
             </CardItem>
         </Card>
      ))}

      {recipes.map((recipe) => (
        <Card>
             <CardItem>
                   <Text>{ recipe.name }</Text>
                 <Right>
                   <Button><Icon name="ios-arrow-forward" /></Button>
                 </Right>
             </CardItem>
         </Card>
      ))}
    </Content>
)};

export default SearchBar;
