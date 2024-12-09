import { screenwidth } from "@/constrains/screenDimentions";
import {
  View,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  Dimensions,
  Image,
} from "react-native";
import { CarouselItemProps } from "./types";

export const CarouselItem = ({ item }: CarouselItemProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: item.image }}
        style={styles.item}
        resizeMode="cover"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: screenwidth,
  },
  item: {
    backgroundColor: "gray",
    borderRadius: 10,
    width: screenwidth - 20,
    marginHorizontal: 10,
    height: 200,
  },
});
