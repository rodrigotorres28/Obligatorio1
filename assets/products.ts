import { ImageSourcePropType } from "react-native";

export interface Product {
  name: string;
  price: number;
  imagePath: ImageSourcePropType;
  id: number;
}

export interface ProductsCategory {
  id : number
  categoryName : string
  data : Product[]
}

export const products = [
    {
      "id": 0,
      "categoryName": "Fruits",
      "data": [
        {"name": "GrapeFruit", "price": 45, "imagePath": require("../assets/productImages/Grapefruit.png"), "id": 0},
        {"name": "Kiwi", "price": 12, "imagePath": require("../assets/productImages/Kiwi.png"), "id": 1},
        {"name": "Watermelon", "price": 20, "imagePath": require("../assets/productImages/Watermelon.png"), "id": 2},
        {"name": "Strawberry", "price": 25, "imagePath": require("../assets/productImages/RandomFood.png"), "id": 3},
        {"name": "Pineapple", "price": 30, "imagePath": require("../assets/productImages/RandomFood.png"), "id": 4}
      ]
    },
    {
      "id": 1,
      "categoryName": "Vegetables",
      "data": [
        {"name": "Avocado", "price": 10, "imagePath": require("../assets/productImages/Avocado.png"), "id": 5},
        {"name": "Cucumber", "price": 15, "imagePath": require("../assets/productImages/Cucumber.png"), "id": 6},
        {"name": "Tomato", "price": 18, "imagePath": require("../assets/productImages/RandomFood.png"), "id": 7},
        {"name": "Spinach", "price": 13, "imagePath": require("../assets/productImages/RandomFood.png"), "id": 8},
        {"name": "Bell Pepper", "price": 20, "imagePath": require("../assets/productImages/RandomFood.png"), "id": 9}
      ]
    },
    {
      "id": 2,
      "categoryName": "Dairy",
      "data": [
        {"name": "Milk", "price": 8, "imagePath": require("../assets/productImages/RandomFood.png"), "id": 10},
        {"name": "Cheese", "price": 20, "imagePath": require("../assets/productImages/RandomFood.png"), "id": 11},
        {"name": "Yogurt", "price": 15, "imagePath": require("../assets/productImages/RandomFood.png"), "id": 12},
        {"name": "Butter", "price": 17, "imagePath": require("../assets/productImages/RandomFood.png"), "id": 13}
      ]
    },
    {
      "id": 3,
      "categoryName": "Grains",
      "data": [
        {"name": "Bread", "price": 12, "imagePath": require("../assets/productImages/RandomFood.png"), "id": 14},
        {"name": "Rice", "price": 25, "imagePath": require("../assets/productImages/RandomFood.png"), "id": 15},
        {"name": "Pasta", "price": 18, "imagePath": require("../assets/productImages/RandomFood.png"), "id": 16}
      ]
    },
    {
      "id": 4,
      "categoryName": "Meat",
      "data": [
        {"name": "Chicken Breast", "price": 25, "imagePath": require("../assets/productImages/RandomFood.png"), "id": 17},
        {"name": "Beef Steak", "price": 35, "imagePath": require("../assets/productImages/RandomFood.png"), "id": 18},
        {"name": "Pork Chop", "price": 30, "imagePath": require("../assets/productImages/RandomFood.png"), "id": 19},
        {"name": "Salmon Fillet", "price": 40, "imagePath": require("../assets/productImages/RandomFood.png"), "id": 20}
      ]
    }
  ];
