import * as React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image, ImageSourcePropType } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from "../state/cartSlice";
import { RootState } from "../state/store";

interface AddMultipleButtonProps {
  product: { name: string; price: number; imagePath: ImageSourcePropType; id: number };
}

const AddMultipleButton = ({ product }: AddMultipleButtonProps) => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state: RootState)  => state.cart.items.find(item => item.product.id === product.id));

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(product.id));
  };

  if (!cartItem || cartItem.quantity === 0) {
    return (
      <TouchableOpacity onPress={handleAddToCart} style={styles.buttonAdd}>
        <Text style={styles.textAdd}>Add</Text>
      </TouchableOpacity>
    );
  } else {
    return (
      <View style={styles.multipleAddContainer}>
        <TouchableOpacity onPress={handleRemoveFromCart} style={styles.buttonsPlusMinus}>
          <MaterialCommunityIcons
            style={{ alignSelf: "center" }}
            name="minus"
            color="black"
            size={16}
          />
        </TouchableOpacity>
        <Text style={{minWidth: 20, alignSelf: "center", textAlign: "center"}}>{cartItem.quantity}</Text>
        <TouchableOpacity onPress={handleAddToCart} style={styles.buttonsPlusMinus}>
          <MaterialCommunityIcons
            style={{ alignSelf: "center" }}
            name="plus"
            color="black"
            size={16}
          />
        </TouchableOpacity>
      </View>
    );
  }
};


export default AddMultipleButton;

const styles = StyleSheet.create({
  buttonAdd: {
    borderWidth: 2,
    borderColor: "#5C3EDB",
    borderRadius: 33/2,
    width: 97,
    height: 33,
    justifyContent: "center",
  },
  multipleAddContainer: {
    borderWidth: 2,
    borderColor: "#F3F3F3",
    borderRadius: 33/2,
    width: 97,
    height: 33,
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  buttonsPlusMinus: {
    justifyContent: "center",
    alignContent: "center",
    minWidth: 25,
  },
  textAdd: {
    fontWeight: "700",
    fontSize: 16,
    color: "#5C3EDB",
    alignSelf: "center",
  },
});
