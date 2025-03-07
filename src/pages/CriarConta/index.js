/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Button, Icon } from '@ui-kitten/components';
import Toolbar from '../../components/Toolbar';
import styles from './styles';

export default function CriarConta({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarsenha, setConfirmarSenha] = useState('');

  return (
    <View style={styles.container}>
       <Toolbar title="Criar conta" hasBackButton />
      <Text>Nome completo</Text>
      <TextInput
        style={styles.field}
        value={nome}
        onChangeText={(text) => setNome(text)}
      />
      <Text>E-mail</Text>
      <TextInput
        style={styles.field}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Text>Senha</Text>
      <TextInput
        style={styles.field}
        keyboardType="number-pad"
        secureTextEntry={true}
        value={senha}
        onChangeText={(password) => setSenha(password)}
      />
      <Text>Confirmar senha</Text>
      <TextInput
        style={styles.field}
        keyboardType="number-pad"
        secureTextEntry={true}
        value={confirmarsenha}
        onChangeText={(password) => setConfirmarSenha(password)}
      />
      <Button title="CRIAR CONTA" status='warning' size='small'/>
    </View>
  );
}

