import * as React from "react";
import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  ImageSourcePropType,
  useWindowDimensions,
  ViewToken,
  ColorValue,
} from "react-native";

export interface CarouselSlide {
  image: ImageSourcePropType;
  title: string;
  overTitle: string;
  textColor: ColorValue;
}

interface CarouselProps {
  slides: CarouselSlide[];
}

const horizontalMargin = 18;
const aspectRatio = 339 / 162;

const Carousel = ({ slides }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const screenWidth = useWindowDimensions().width;
  const imageWidth = screenWidth - horizontalMargin * 2;
  const imageHeight = imageWidth / aspectRatio;

  const handleViewableItemsChanged = ({
    viewableItems,
  }: {
    viewableItems: ViewToken[];
  }) => {
    if (viewableItems && viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index || 0);
    }
  };

  return (
    <View>
      <FlatList
        data={slides}
        renderItem={({ item }) => (
          <View style={styles.slideContainer}>
            <Image
              style={[
                styles.slideImage,
                {
                  width: imageWidth,
                  height: imageHeight,
                },
              ]}
              source={item.image}
            />
            <View style={styles.textContainer}>
              <Text style={[styles.overTitle, { color: item.textColor }]}>
                {item.overTitle}
              </Text>
              <Text style={[styles.title, { color: item.textColor }]}>
                {item.title}
              </Text>
            </View>
          </View>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={screenWidth}
        decelerationRate="fast"
        onViewableItemsChanged={handleViewableItemsChanged}
        viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
      />
      <View style={styles.pageControlContainer}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[
              styles.pageIndicator,
              index === currentIndex ? styles.currentPageIndicator : null,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  slideContainer: {
    alignItems: "center",
    marginHorizontal: horizontalMargin,
  },
  slideImage: {
    borderRadius: 4,
  },
  textContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    paddingHorizontal: 18,
    paddingBottom: 27,
  },
  title: {
    fontWeight: "700",
    fontSize: 22,
    color: "#FFFFFF",
  },
  overTitle: {
    fontWeight: "400",
    fontSize: 14,
    color: "#FFFFFF",
    marginBottom: 3,
  },
  pageControlContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 16,
  },
  pageIndicator: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#DBD6D9",
    marginHorizontal: 3,
  },
  currentPageIndicator: {
    backgroundColor: "#50546D",
  },
});
