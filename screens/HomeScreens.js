import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import Carousel from "../components/Carousel";
import FoodTypes from "../components/FoodTypes";
import QuickFood from "../components/QuickFood";
import { Ionicons } from "@expo/vector-icons";
import hotels from "../data/hotels";
import MenuItem from "../components/MenuItem";

const HomeScreens = () => {
  const data = hotels;
  return (
    <ScrollView>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderWidth: 1,
          marginTop:40,
          margin:10,
          padding: 10,
          borderColor: "#C0C0C0",
          borderRadius: 90,
        }}
      >
        <TextInput
          style={{ fontSize: 15 }}
          placeholder="Search for Restaurant item or more"
        />
        <AntDesign name="search1" size={24} color="#E52850" />
      </View>

      {/* Image slider components */}
      <Carousel />

      {/* Food Item types */}
      <FoodTypes />

      {/* Quick food components */}
      <QuickFood />

      {/* Filter buttons */}

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Pressable
          style={{
            marginHorizontal: 10,
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#D0D0D0",
            padding: 8,
            borderRadius: 20,
            justifyContent: "center",
            width: 120,
          }}
        >
          <Text style={{ marginRight: 6 }}>Filter</Text>
          <Ionicons name="filter" size={20} color="black" />
        </Pressable>
        <Pressable
          style={{
            marginHorizontal: 10,
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#D0D0D0",
            padding: 10,
            borderRadius: 20,
            justifyContent: "center",
            width: 120,
          }}
        >
          <Text>Sort by Rating</Text>
        </Pressable>
        <Pressable
          style={{
            marginHorizontal: 10,
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#D0D0D0",
            padding: 10,
            borderRadius: 20,
            justifyContent: "center",
          }}
        >
          <Text>Sort by Price</Text>
        </Pressable>
      </View>
      {data.map((item, index) => (
        <MenuItem key={index} item={item} />
      ))}
    </ScrollView>
  );
};

export default HomeScreens;

const styles = StyleSheet.create({});
