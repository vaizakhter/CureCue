import { Dimensions, SafeAreaView, StyleSheet, View } from "react-native";
import Header from "../common/header";
import IntroSection from "./helper/IntroSection";

//@ts-ignore
import { Carousel } from "react-native-curecue-components";
import { CarouselItem } from "./helper/CarouselItem";
import { carouselData } from "@/constrains/mockData";
import { screenwidth } from "@/constrains/screenDimentions";
import SearchBar from "./helper/SearchBar";

const Home = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        backgroundColor: "white",
        width: "100%",
      }}
    >
      <View style={styles.body}>
        <Header />
        <IntroSection />
      </View>
      <Carousel
        CarouselItem={CarouselItem}
        items={carouselData}
        carouselStyle={styles.container}
        itemStyle={styles.item}
        itemWidth={screenwidth}
        snapInterval={screenwidth}
      />
      <View style={styles.body}>
        <SearchBar />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    width: screenwidth,
    height: 200,
    marginTop: 15,
  },
  body: { margin: 10 },
  item: {
    backgroundColor: "red",
    borderRadius: 10,
    padding: 10,
    width: screenwidth - 20,
    marginHorizontal: 10,
    height: 300,
  },
  carouselContainer: {
    width: "90%",
    overflow: "hidden",
  },
});
