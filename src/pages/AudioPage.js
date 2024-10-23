import React, { useEffect, useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import Voice from 'react-native-voice';

const AudioPage = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');

  useEffect(() => {
    Voice.onSpeechResults = (event) => {
      const { value } = event;
      if (value && value.length > 0) {
        setTranscript((prev) => prev + ' ' + value[0]);
      }
    };

    Voice.onSpeechEnd = () => {
      setIsListening(false);
    };

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const startListening = async () => {
    setTranscript('');
    setIsListening(true);
    try {
      await Voice.start('es-ES'); // Cambia 'es-ES' por el idioma que desees
    } catch (error) {
      console.error(error);
    }
  };

  const stopListening = async () => {
    setIsListening(false);
    try {
      await Voice.stop();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transcripción de Audio</Text>
      <TextInput
        style={styles.input}
        value={transcript}
        multiline
        placeholder="Habla para transcribir..."
        editable={false}
      />
      <Button
        title={isListening ? "Detener" : "Grabar"}
        onPress={isListening ? stopListening : startListening}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 200,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
  },
});

export default AudioPage;
