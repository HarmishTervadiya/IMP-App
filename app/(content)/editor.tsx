import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useEditorBridge, RichText, Toolbar } from "@10play/tentap-editor";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, useRouter } from "expo-router";

const EditorScreen = () => {

  const router = useRouter()

  const editor = useEditorBridge({
    autofocus: false,
    avoidIosKeyboard: true,
    initialContent,
  });
  return (
    <SafeAreaView style={styles.fullScreen}>
      <View style={styles.topBar}>
        <Ionicons
          name="arrow-back-outline"
          size={25}
          style={styles.backIcon}
          onPress={() => router.back()}
        />
        <TouchableOpacity style={styles.submitBtn}>
          <Text style={styles.submitBtnText}>Submit</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        placeholder="Question Title"
        focusable
        lineBreakStrategyIOS="standard"
        textBreakStrategy="highQuality"
        multiline
        style={styles.inputTitle}
      />
      <RichText editor={editor} showsVerticalScrollIndicator={false}  />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoidingView}
      >
        <Toolbar editor={editor} hidden={false} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "white",
    paddingVertical: 10,
  },
  keyboardAvoidingView: {
    position: "absolute",
    width: "100%",
    bottom: 0,
  },
  inputTitle: {
    marginTop: 10,
    fontSize: 24,
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  backIcon: {
    flexShrink: 0, // Prevent the icon from shrinking
    width: 30, // Set a fixed width for the icon
    height: 30, // Set a fixed height for the icon
  },
  submitBtn: {
    padding: 5,
    borderRadius: 5,
    
  },
  submitBtnText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0091ff",
  },
});

const initialContent = `<p style="color: #c8cfd4">Answer</p>`;

export default EditorScreen;
