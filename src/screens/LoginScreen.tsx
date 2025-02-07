import React, { useState } from 'react';
import { Alert, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { TitleComponent } from '../components/TitleComponent';
import { PRIMARY_COLOR } from '../theme/commons/constants';
import { BodyComponent } from '../components/BodyComponent';
import { styles } from '../theme/appTheme';
import { InputComponent } from '../components/InputComponent';
import { ButtonComponent } from '../components/ButtonComponent';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { User } from '../navigator/StackNavigator';

//Definir interface para las propiedas
interface Props {
    users: User[];
}

//Definir interface para el objeto del formulario
interface LoginForm {
    email: string;
    password: string;
}

export const LoginScreen = ({ users }: Props) => {
    //hook useState: permite manejar el estado del formulario
    const [loginForm, setLoginForm] = useState<LoginForm>({
        email: '',
        password: ''
    });

    //hook useState: permitir manejar el estado del password
    const [hiddenPassword, setHiddenPassword] = useState<boolean>(true);

    //hook useNavigation: permite navegar entre pantallas
    const navigation = useNavigation();

    //Función para captura y cambiar los campos del formulario
    const handleChange = (name: string, value: string): void => { //password, 123456
        //console.log(name, value);
        //Modificar el estado del formulario
        setLoginForm({ ...loginForm, [name]: value });
    }

    //Función para validar el usuario
    const verifyUser = (): User | undefined => {
        const existUser = users.find(user => user.email === loginForm.email && user.password === loginForm.password);
        return existUser;
    }

    //Función para iniciar sesión
    const handleLogin = (): void => {
        //Validar que el formulario esté lleno
        if (loginForm.email === '' || loginForm.password === '') {
            Alert.alert('Error', 'Todos los campos son obligatorios');
            return;
        }
        //Validar que el usuario exista
        if (!verifyUser()) {
            Alert.alert('Error', 'Usuario y/o contraseña incorrecta');
            return;
        }

        //Navegación a la pantalla Home
        navigation.dispatch(CommonActions.navigate({name:'Home'}));
        //console.log(loginForm);
    }

    return (
        <View>
            <StatusBar backgroundColor={PRIMARY_COLOR} />
            <TitleComponent title='Iniciar Sesión' />
            <BodyComponent>
                <Text style={styles.titlePrincipal}>
                    Bienvenido de nuevo
                </Text>
                <Text style={styles.textDescription}>
                    Realiza tus compras de manera rápida y segura
                </Text>
                <View style={styles.formContainer}>
                    <InputComponent placeholder='Correo'
                        keyboardType='email-address'
                        handleChange={handleChange}
                        name={'email'} />
                    <InputComponent placeholder='Contraseña'
                        handleChange={handleChange}
                        name={'password'}
                        isPassword={hiddenPassword} />
                    <Icon name={(hiddenPassword)
                        ? 'visibility'
                        : 'visibility-off'}
                        size={20}
                        color={PRIMARY_COLOR}
                        style={styles.iconPassword}
                        onPress={() => setHiddenPassword(!hiddenPassword)} />
                </View>
                <ButtonComponent title='Iniciar' handleSendInfo={handleLogin} />
                <TouchableOpacity
                    onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Register' }))}>
                    <Text style={styles.textRedirect}>
                        No tienes una cuenta? Regístrate ahora
                    </Text>
                </TouchableOpacity>
            </BodyComponent>
        </View>
    )
}

