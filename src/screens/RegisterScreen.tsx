import React, { useState } from 'react';
import { Alert, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { PRIMARY_COLOR } from '../theme/commons/constants';
import { TitleComponent } from '../components/TitleComponent';
import { BodyComponent } from '../components/BodyComponent';
import { styles } from '../theme/appTheme';
import { InputComponent } from '../components/InputComponent';
import { ButtonComponent } from '../components/ButtonComponent';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { User } from '../navigator/StackNavigator';

//Definir interface para las propiedas
interface Props {
    users: User[];
    addUser: (user: User) => void;
}

//Definir interface para el objeto del formulario
interface RegisterForm {
    name: string;
    email: string;
    password: string;
}

export const RegisterScreen = ({ users, addUser }: Props) => {
    //hook useState: permite manejar el estado del formulario
    const [registerForm, setRegisterForm] = useState<RegisterForm>({
        name: '',
        email: '',
        password: ''
    });

    //hook useNavigation: permite navegar entre pantallas
    const navigation = useNavigation();

    //Función para captura y cambiar los campos del formulario
    const handleChange = (name: string, value: string): void => {
        //console.log(name, value);
        //Modificar el estado del formulario
        setRegisterForm({ ...registerForm, [name]: value });
    }

    //Validar que el usuario exista
    const verifyUser = (): User | undefined => {
        const existUser = users.find(user => user.email === registerForm.email)
        return existUser;
    }

    //Función para generar los ids de los nuevos usuarios
    const getIdNewUser = (): number => {
        const getIdUser = users.map(user => user.id);  //[1,2,3]
        return Math.max(...getIdUser) + 1; //(1,2,3)
    }

    //Función para registrar el usuario
    const handleRegister = () => {
        //Validar que el formulario esté lleno
        if (registerForm.name === '' || registerForm.email === '' || registerForm.password === '') {
            Alert.alert('Error', 'Todos los campos son obligatorios');
            return;
        }

        //Validar que el usuario no exista
        if (verifyUser()) {
            Alert.alert('Error', 'El correo ya existe');
            return;
        }

        //Crear el nuevo usuario (objeto) al arreglo
        const newUser: User = {
            id: getIdNewUser(),
            name: registerForm.name,
            email: registerForm.email,
            password: registerForm.password
        }

        //Añadir el nuevo usuario al arreglo
        addUser(newUser);
        Alert.alert('Registro', 'Usuario registrado con éxito');
        navigation.goBack();
        //console.log(registerForm);
    }

    return (
        <View>
            <StatusBar backgroundColor={PRIMARY_COLOR} />
            <TitleComponent title='Regístrate' />
            <BodyComponent>
                <Text style={styles.titlePrincipal}>
                    Estás muy cerca
                </Text>
                <Text style={styles.textDescription}>
                    Realiza tus compras de manera rápida y segura
                </Text>
                <View style={styles.formContainer}>
                    <InputComponent placeholder='Nombre'
                        handleChange={handleChange}
                        name={'name'} />
                    <InputComponent placeholder='Correo'
                        keyboardType='email-address'
                        handleChange={handleChange}
                        name={'email'} />
                    <InputComponent placeholder='Contraseña'
                        handleChange={handleChange}
                        name={'password'} />
                </View>
                <ButtonComponent title='Registrar' handleSendInfo={handleRegister} />
                <TouchableOpacity
                    onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Login' }))}>
                    <Text style={styles.textRedirect}>
                        Ya tienes una cuenta? Iniciar Sesión ahora
                    </Text>
                </TouchableOpacity>
            </BodyComponent>
        </View>
    )
}
