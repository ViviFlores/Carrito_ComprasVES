import React, { useState } from 'react';
import { FlatList, StatusBar, Text, View } from 'react-native';
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../theme/commons/constants';
import { TitleComponent } from '../../components/TitleComponent';
import { BodyComponent } from '../../components/BodyComponent';
import { CardProduct } from './components/CardProduct';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from '../../theme/appTheme';
import { ModalCar } from './components/ModalCar';

//Definir la interface para el arreglo de productos
export interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
    pathImage: string;
}

//Definir la interface para los productos del carrito
export interface CarProduct {
    id: number;
    name: string;
    price: number;
    quantity: number;
    total: number;
}

export const HomeScreen = () => {
    //Definir el arreglo de productos
    const products: Product[] = [
        { id: 1, name: 'Funda de arroz', price: 3.40, stock: 6, pathImage: 'https://www.pronacafoodservice.com/wp-content/uploads/2018/06/8275-arroz-blanco-vitaminas.jpg' },
        { id: 2, name: 'Funda de azucar', price: 1.20, stock: 10, pathImage: 'https://hyzdistribuidora.com.ec/wp-content/uploads/2023/07/TERMINAMesa-de-trabajo-24.png' },
        { id: 3, name: 'Funda de papas', price: 2.00, stock: 0, pathImage: 'https://www.supermercadosantamaria.com/documents/10180/10504/65702_G.jpg' },
        { id: 4, name: 'Funda de fideos', price: 1.00, stock: 4, pathImage: 'https://www.supermercadosantamaria.com/documents/10180/10504/77563_G.jpg' },
        { id: 5, name: 'Funda de sal', price: 0.70, stock: 9, pathImage: 'https://www.supermercadosantamaria.com/documents/10180/10504/31181_G.jpg' },
        { id: 6, name: 'Funda de arroz', price: 3.40, stock: 6, pathImage: 'https://www.pronacafoodservice.com/wp-content/uploads/2018/06/8275-arroz-blanco-vitaminas.jpg' },
        { id: 7, name: 'Funda de azucar', price: 1.20, stock: 10, pathImage: 'https://hyzdistribuidora.com.ec/wp-content/uploads/2023/07/TERMINAMesa-de-trabajo-24.png' },
        { id: 8, name: 'Funda de papas', price: 2.00, stock: 15, pathImage: 'https://www.supermercadosantamaria.com/documents/10180/10504/65702_G.jpg' },
        { id: 9, name: 'Funda de fideos', price: 1.00, stock: 4, pathImage: 'https://www.supermercadosantamaria.com/documents/10180/10504/77563_G.jpg' },
        { id: 10, name: 'Funda de sal', price: 0.70, stock: 9, pathImage: 'https://www.supermercadosantamaria.com/documents/10180/10504/31181_G.jpg' }
    ]

    //hook useState: permitir gestionar los productos
    const [productsState, setProductsState] = useState<Product[]>(products);
    //hook useState: permitir gestionar el carrito de compras
    const [carProducts, setCarProducts] = useState<CarProduct[]>([]);
    //hook useState: permitir visualizar el modal
    const [showModalCar, setShowModalCar] = useState<boolean>(false);


    //Función para actualizar el stock de un producto
    const changeStock = (id: number, quantity: number): void => { //5 - 2 = 3
        //Generar un nuevo arreglos actualizado
        const updateStock = productsState.map(product => product.id === id
            ? { ...product, stock: product.stock - quantity }
            : product);
        //Modificar los valores del arreglo productsState
        setProductsState(updateStock);
        //Llamar a la función addProduct
        addProduct(id, quantity);
    }

    //Funcion para agregar los productos en el carrito
    const addProduct = (id: number, quantity: number) => {  //4
        const product = productsState.find(product => product.id === id);

        //Validar si el producto existe
        if (!product) return;

        //Crear nuevo producto para el carrito
        const newProduct: CarProduct = {
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: quantity,
            total: product.price * quantity
        }

        //Añadir en el arreglo carProducts
        setCarProducts([...carProducts, newProduct]);
        //console.log(carProducts);

    }


    return (
        <View>
            <View>
                <StatusBar backgroundColor={PRIMARY_COLOR} />
                <View style={styles.headerContainer}>
                    <TitleComponent title='Productos' />
                    <View style={{
                        ...styles.iconContainer,
                        paddingHorizontal: 30
                    }} >
                        <Text style={styles.textIconCar}>
                            {carProducts.length}
                        </Text>
                        <Icon name='shopping-cart'
                            size={33}
                            color={SECONDARY_COLOR}
                            onPress={() => setShowModalCar(!showModalCar)} />
                    </View>
                </View>
                <BodyComponent>
                    <FlatList
                        data={productsState}
                        renderItem={({ item }) => <CardProduct product={item} changeStock={changeStock} />}
                        keyExtractor={item => item.id.toString()}
                    />
                </BodyComponent>
            </View>
            <ModalCar isVisible={showModalCar}
                carProducts={carProducts}
                setShowModalCar={() => setShowModalCar(!showModalCar)} />
        </View>
    )
}
