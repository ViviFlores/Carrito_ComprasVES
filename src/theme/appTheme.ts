import { StyleSheet } from "react-native";
import { BUTTON_COLOR, INPUT_COLOR, PRIMARY_COLOR, SECONDARY_COLOR, TERTIARY_COLOR } from "./commons/constants";

export const styles = StyleSheet.create({
    titleHeader: {
        color: SECONDARY_COLOR,
        fontSize: 27,
        paddingHorizontal: 30,
        paddingVertical: 30,
        fontWeight: 'bold'
    },
    bodyContainer: {
        backgroundColor: SECONDARY_COLOR,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 30,
        paddingTop: 40

    },
    titlePrincipal: {
        fontSize: 17,
        fontWeight: 'bold',
        color: TERTIARY_COLOR
    },
    textDescription: {
        fontSize: 15,
        color: TERTIARY_COLOR,
        marginTop: 7
    },
    inputText: {
        backgroundColor: INPUT_COLOR,
        borderRadius: 10,
        marginVertical: 7
    },
    formContainer: {
        marginVertical: 10
    },
    buttonForm: {
        backgroundColor: BUTTON_COLOR,
        paddingVertical: 15,
        borderRadius: 10
    },
    buttonFormText: {
        color: SECONDARY_COLOR,
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 'bold'
    },
    iconPassword: {
        position: 'absolute',
        right: 15,
        bottom: 17
    },
    textRedirect: {
        color: PRIMARY_COLOR,
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 20,
        textAlign: 'center'
    },
    cardContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderStyle: 'solid',
        borderColor: SECONDARY_COLOR,
        borderWidth: 1,
        shadowColor: "#000",
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 2,
        marginBottom: 15
    },
    titleCard: {
        fontSize: 15,
        fontWeight: 'bold',
        color: TERTIARY_COLOR
    },
    imageCard: {
        height: 70,
        width: 70
    },
    iconContainer: {
        flex: 1,
        alignItems: 'flex-end'
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.3)'

    },
    modalProduct: {
        backgroundColor: SECONDARY_COLOR,
        padding: 20,
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        borderRadius: 7
    },
    modalHeader: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        padding: 10
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: TERTIARY_COLOR
    },
    modalImage: {
        height: 200,
        width: 200,
        alignSelf: 'center',
    },
    quantityContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonQuantity: {
        backgroundColor: PRIMARY_COLOR,
        width: 50,
        height: 50,
        borderRadius: 100,
        margin: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonQuantityText: {
        color: SECONDARY_COLOR,
        fontSize: 20,
        fontWeight: 'bold'
    },
    textQuantity: {
        fontSize: 17,
        fontWeight: 'bold',
        color: TERTIARY_COLOR
    },
    buttonAddCart: {
        backgroundColor: BUTTON_COLOR,
        alignItems: 'center',
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 15
    },
    buttonAddCartText: {
        color: SECONDARY_COLOR,
        fontWeight: 'bold'
    }
})