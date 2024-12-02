import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { getAllNotes, Note } from "../services/noteStoreService";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp } from "../types";

const SavedNotesList: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const navigation = useNavigation<ScreenNavigationProp>();

  useFocusEffect(() => {
    getAllNotes().then((result) => setNotes(result.notes));
  });

  return (
    <View style={styles.container}>
      <ScrollView>
        {notes.map((note) => (
          <Pressable
            key={note.id}
            onPress={() => navigation.navigate("EditNote", { noteId: note.id })}
          >
            <View style={styles.row}>
              <Text style={styles.note}>
                {note.text.length === 0 ? "(Blank notes)" : note.text}
              </Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default SavedNotesList;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
  },
  row: {
    width: "100%",
    height: 90,
    borderBottomWidth: 1,
    borderBottomColor: "#e6e6e6",
    alignSelf: "center",
    flex: 1,
    justifyContent: "center",
  },
  note: {
    paddingVertical: 20,
    width: "100%",
    fontSize: 16,
    paddingLeft: 20,
  },
});
