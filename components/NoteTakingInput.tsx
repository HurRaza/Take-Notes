import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { getNote, saveNote } from "../services/noteStoreService";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp } from "../types";
import { SaveNote } from "./SaveNote";

type Props = {
  noteId: string | undefined;
};

const NoteTakingInput: React.FC<Props> = ({ noteId }) => {
  const [text, setText] = useState<string>("");
  const navigation = useNavigation<ScreenNavigationProp>();

  
  useEffect(() => {
    if (noteId) {
      getNote(noteId).then((result) => setText(result?.text ?? ""));
    }
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <SaveNote id={noteId ?? ""} text={text}/>,
    });
  }, [navigation, text, noteId]);

  return (
    <>
      <TextInput
        multiline={true}
        style={styles.input}
        value={text}
        onChangeText={setText}
        autoFocus={true}
      />
    </>
  );
};

export default NoteTakingInput;

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#ffb70342",
    width: "100%",
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 20,
  },
});
