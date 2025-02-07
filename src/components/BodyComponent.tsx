import React, { ReactNode } from 'react';
import { Text, useWindowDimensions, View } from 'react-native';
import { styles } from '../theme/appTheme';

//Definir la interfaz de las propiedades
interface Props{
    children: ReactNode; //permite recibir cualquier tipo de elemento
}

export const BodyComponent = ({children}: Props) => {
    //hook useWindowDimensions: permite obtener las dimensiones de la pantalla
    const { height } = useWindowDimensions();
    return (
        <View style={{
            ...styles.bodyContainer,
            height: height * 0.88
        }}>
            {children}
        </View>
    )
}
