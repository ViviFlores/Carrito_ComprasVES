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
}

export const ModalProduct = ({ product, isVisible, setShowModalProduct }: Props) => {
    //hook useWindowDimensions: permite obtener las dimensiones de la ventana
    const { width } = useWindowDimensions();
    //hook useState: permite manejar el estado de la cantidad
    const [quantity, setQuantity] = useState<number>(1);

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
                                onPress={setShowModalProduct} />
                        </View>
                    </View>
                    <View>
                        <Image source={{
                            uri: product.pathImage
                        }}
                            style={styles.modalImage} />
                    </View>
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
                    <TouchableOpacity style={styles.buttonAddCart}>
                        <Text style={styles.buttonAddCartText}>
                            Agregar Carrito
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}
