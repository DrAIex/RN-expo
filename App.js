import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import ImageViewer from './components/ImageViewer';
import Button from './components/Button';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import * as ImagePicker from 'expo-image-picker';
import CircleButton from './components/CircleButton';
import IconButton from './components/IconButton';
import EmojiPicker from "./components/EmojiPicker";
import EmojiList from './components/EmojiList';
import EmojiSticker from './components/EmojiSticker';
import MyCalendar from './components/MyCalendar';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { css, html } from 'react-strict-dom';

const PlaceholderImage = require('./assets/images/background-image.png');

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAppOptions, setShowAppOptions] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [pickedEmoji, setPickedEmoji] = useState(null);
  const [show, setShow] = useState(false);
  // const [counter, setCounter] = useState(0)

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert('You did not select any image.');
    }
  };

  const onReset = () => {
    setShowAppOptions(false);
  };

  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onModalClose = () => {
    setIsModalVisible(false);
    // setCounter(counter + 1)
  };
  const onSaveImageAsync = async () => {
    // we will implement this later
  };


  const selectAndCount = () => {
    setPickedEmoji()
  }


  // const d = counter.toString()
  return (
    <GestureHandlerRootView style={styles.container}>
      {/* <MyCalendar /> */}
       <View style={styles.imageContainer}>
       <ImageViewer
          placeholderImageSource={PlaceholderImage}
          selectedImage={selectedImage}
        />
        {/* {typeof d === 'string' && <Text style={styles.text} > {d } </Text>} */}

        {pickedEmoji && <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />}
      </View>

      {showAppOptions ? (
        <html.div style={styles.optionsContainer}>
          <html.div style={styles.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
          </html.div>
        </html.div>
      ) : (
        <html.div style={styles.footerContainer}>
          <html.button style={styles.button_styling_choose} onClick={pickImageAsync}>
            <html.p>Choose a photo</html.p>
          </html.button>
          <html.button style={styles.button_styling_use} onClick={() => setShowAppOptions(true)}>
            <html.p>Use this photo</html.p>
          </html.button>
        </html.div>
      )}
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} onClick={() => setCounter(counter + 1)} />
      </EmojiPicker>
      <StatusBar style="auto" />
      </GestureHandlerRootView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
    text: {
    color: "#fff",
    fontSize: 20
  },
  button_styling_choose: {
    borderWidth: 4,
    borderColor: 'yellow',
    borderRadius: 18,
    justifyContent: 'center',
    padding: 20,
    margin: 15,
    color: 'white',
    backgroundColor: 'gray'
  },
  button_styling_use: {
    borderWidth: 4,
    borderColor: 'yellow',
    borderRadius: 18,
    justifyContent: 'center',
    padding: 20,
    margin: 15,
    color: 'white'
  }
});


// {showAppOptions ? (
//   <html.div style={styles.optionsContainer}>
//     <html.div style={styles.optionsRow}>
//       <IconButton icon="refresh" label="Reset" onPress={onReset} />
//       <CircleButton onPress={onAddSticker} />
//       <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
//     </html.div>
//   </html.div>
// ) : (
//   <html.div style={styles.footerContainer}>
//     <html.button style={styles.button_styling_choose} onClick={pickImageAsync}>
//       <html.p>Choose a photo</html.p>
//     </html.button>
//     <html.button style={styles.button_styling_use}  onClick={() => setShowAppOptions(true)}>
//       <html.p>Use this photo</html.p>
//     </html.button>
//   </html.div>
// )}