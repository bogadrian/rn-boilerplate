import React, { useState } from 'react';

import { View, TextInput, StyleSheet, Button, Modal } from 'react-native';

const GoalInput = props => {
  const [entredGoal, setEntredGoal] = useState('');

  const handleChangeText = entredText => {
    setEntredGoal(entredText);
  };
  return (
    <Modal visible={props.modalVisible} animationType="slide">
      <View style={styles.modalStyle}>
        <View>
          <View style={styles.input}>
            <TextInput
              onChangeText={handleChangeText}
              style={styles.textInput}
              value={entredGoal}
            />
          </View>
        </View>
        <View style={styles.buttonElement}>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button
              title="ADD"
              onPress={props.handleButton.bind(this, entredGoal)}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    height: 50,
    width: 250,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    borderBottomWidth: 3,
    borderBottomColor: 'red',
    padding: 20,
    width: 250,
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonElement: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: '60%'
  },
  button: {
    width: '45%'
  }
});

export default GoalInput;
