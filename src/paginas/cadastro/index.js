import { Component } from "react";
import { Text,View, Button, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native";
import firebase from "../../firebase/firebaseConnection";

export default function Cadastro() {

      const [nome, setNome] = useState("");
      const [nota1, setNota1] = useState("");
      const [nota2, setNota2] = useState("");
      const [nota3, setNota3] = useState("");
      const [imagem, setImagem] = useState("");

      async function Cadastrar() {

        const Alunos = await firebase.database().ref('Alunos');

        const chave = Alunos.push().key;

        Alunos.child(chave).set({
          Nome: nome,
          Nota1: nota1,
          Nota2: nota2,
          Nota3: nota3,
          Imagem: imagem,
        })

      }

      return (
        

        <View style={styles.container}>
          <View>
            <Text style={styles.header}>Cadastro</Text>
            <ScrollView>
                <View style={styles.inputContainer}>
                    <TextInput
                    style={styles.textInput}
                    placeholder="Nome"
                    maxLength={50}
                    onChangeText={(texto) => setNome(texto)}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                    style={styles.textInput}
                    placeholder="Nota 1"
                    onChangeText={(texto) => setNota1(texto)}
                    maxLength={5}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                    style={styles.textInput}
                    placeholder="Nota 2"
                    maxLength={5}
                    onChangeText={(texto) => setNota2(texto)}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                    style={styles.textInput}
                    placeholder="Nota 3"
                    maxLength={5}
                    onChangeText={(texto) => setNota3(texto)}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                    style={styles.textInput}
                    placeholder="Foto de Perfil"
                    maxLength={100}
                    onChangeText={(texto) => setImagem(texto)}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TouchableOpacity 
                        style={styles.saveButton}
                        onPress={Cadastrar}
                    >
                        <Text style={styles.saveButtonText}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
          </View>
        </View>
      );
    }
  
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 45,
      backgroundColor: '#F5FCFF',
    },
    header: {
      fontSize: 25,
      textAlign: 'center',
      margin: 10,
      fontWeight: 'bold'
    }, 
    inputContainer: {
        paddingTop: 15
      },
      textInput: {
        borderColor: '#CCCCCC',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        height: 50,
        fontSize: 25,
        paddingLeft: 20,
        paddingRight: 20
      },
      saveButton: {
        borderWidth: 1,
        borderColor: '#007BFF',
        backgroundColor: '#007BFF',
        padding: 15,
        margin: 5
      },
      saveButtonText: {
        color: '#FFFFFF',
        fontSize: 20,
        textAlign: 'center'
      }
  });
