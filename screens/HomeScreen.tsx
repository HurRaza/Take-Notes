import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp } from "../types";
import SavedNotesList from "../components/SavedNotesList";

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<ScreenNavigationProp>();

  return (
    <>
      <SavedNotesList />
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
