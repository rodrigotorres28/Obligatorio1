import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

import LargeHorizontalButton from "./LargeHorizontalButton";

interface CheckoutDetailsProps {
  totalPrice: number;
}

const CheckoutDetails = ({ totalPrice }: CheckoutDetailsProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.horizontalContainer}>
        <Text style={styles.totalText}>Total:</Text>
        <Text style={styles.totalValue}>{totalPrice.toFixed(2)}</Text>
      </View>
      <View>
        <LargeHorizontalButton
          text="Checkout"
          buttonColor="#4C2DE8"
          textColor="white"
        />
      </View>
    </View>
  );
};

export default CheckoutDetails;

const styles = StyleSheet.create({
  container: {},
  horizontalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    paddingBottom: 32,
    alignItems: "flex-end",
  },
  totalText: {
    fontSize: 22,
    fontWeight: "500",
  },
  totalValue: {
    fontSize: 32,
    fontWeight: "700",
  },
});