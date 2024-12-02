import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp } from "../types";

const NewNoteButton: React.FC = () => {
  const navigation = useNavigation<ScreenNavigationProp>();
  return (
    <Pressable
      onPress={() => navigation.navigate("EditNote", { noteId: undefined })}
    >
      <FontAwesome name="pencil-square-o" size={30} color="#ffb703" />
    </Pressable>
  );
};

export default NewNoteButton;

const styles = StyleSheet.create({});
