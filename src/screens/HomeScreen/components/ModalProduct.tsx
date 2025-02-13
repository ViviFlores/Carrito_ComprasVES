import React, { useState } from 'react';
import { Image, Modal, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { styles } from '../../../theme/appTheme';
import { Product } from '../HomeScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PRIMARY_COLOR } from '../../../theme/commons/constants';

//Definir la interface para las propiedades del componente
interface Props {
    product: Product;
    isVisible: boolean;
    setShowModalProduct: () => void;
    changeStock: (id: number, quantity: number) => void;
}

export const ModalProduct = ({ product, isVisible, setShowModalProduct, changeStock }: Props) => {
    //hook useWindowDimensions: permite obtener las dimensiones de la ventana
    const { width } = useWindowDimensions();
    //hook useState: permite manejar el estado de la cantidad
    const [quantity, setQuantity] = useState<number>(1);

    //Función cerrar modal - modificar el valor de quantity
    const closeModal = (): void => {
        //Cerrar modal
        setShowModalProduct();
        //Modificar el valor de quantity
        setQuantity(1);
    }

    //Función agregar al carrito
    const handleAddProduct = (): void => {
        //Actualizar el stock del producto
        changeStock(product.id, quantity);
        //Cerrar modal
        closeModal();
    }


    return (
        <Modal visible={isVisible} animationType='fade' transparent={true}>
            <View style={styles.modalContainer}>
                <View style={{
                    ...styles.modalProduct,
                    width: width * 0.80
                }}>
                    <View style={styles.modalHeader}>
                        <Text style={styles.modalTitle}>
                            {product.name} - ${product.price.toFixed(2)}
                        </Text>
                        <View style={styles.iconContainer}>
                            <Icon name='cancel'
                                size={23}
                                color={PRIMARY_COLOR}
                                onPress={closeModal} />
                        </View>
                    </View>
                    <View>
                        <Image source={{
                            uri: product.pathImage
                        }}
                            style={styles.modalImage} />
                    </View>
                    {
                        (product.stock === 0)
                            ? <Text style={styles.textStock}>
                                Producto Agotado!
                            </Text>
                            :
                            <View>
                                <View style={styles.quantityContainer}>
                                    <TouchableOpacity style={styles.buttonQuantity}
                                        onPress={() => setQuantity(quantity - 1)}
                                        disabled={quantity === 1}>
                                        <Text style={styles.buttonQuantityText}>-1</Text>
                                    </TouchableOpacity>

                                    <Text style={styles.textQuantity}>{quantity}</Text>

                                    <TouchableOpacity style={styles.buttonQuantity}
                                        onPress={() => setQuantity(quantity + 1)}
                                        disabled={quantity === product.stock}>
                                        <Text style={styles.buttonQuantityText}>+1</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ alignItems: 'center' }}>
                                    <Text style={styles.textQuantity}>
                                        Total: ${(product.price * quantity).toFixed(2)}
                                    </Text>
                                </View>
                                <TouchableOpacity style={styles.buttonAddCart}
                                    onPress={handleAddProduct}>
                                    <Text style={styles.buttonAddCartText}>
                                        Agregar Carrito
                                    </Text>
                                </TouchableOpacity>
                            </View>
                    }
                </View>
            </View>
        </Modal>
    )
}
