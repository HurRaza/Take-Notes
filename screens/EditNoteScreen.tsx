import { Button, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import NoteTakingInput from "../components/NoteTakingInput";
import { deleteNote, saveNote } from "../services/noteStoreService";
import { useNavigation, useRoute } from "@react-navigation/native";
import { EditScreenRouteProp, ScreenNavigationProp } from "../types";
import { DeleteNote } from "../components/DeleteNote";

const EditNoteScreen: React.FC = () => {
  const route = useRoute<EditScreenRouteProp>();
  const navigation = useNavigation<ScreenNavigationProp>();
  const noteId = route.params.noteId;

  useLayoutEffect(()=>{
    navigation.setOptions({
        headerTitle: noteId ? "Edit Note" : "New Note",
        headerRight: ()=> <DeleteNote noteId={noteId ?? ""}/>,
    })
  },[navigation])

  return <NoteTakingInput noteId={noteId} />;
};

export default EditNoteScreen;

const styles = StyleSheet.create({});
