import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Login() {
    const navigation = useNavigation();

    const nav = () => {
        navigation.navigate('Cadastro'); // Navega para a tela 'Cadastro'
    };

    return (
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <Text style={styles.bienvindo}>Bien vindo!!</Text>
            </View>
            <View style={styles.containerForm}>
                <Text style={styles.title}>Email</Text>
                <TextInput style={styles.input} maxLength={30} />
                <Text style={styles.title}>Senha</Text>
                <TextInput style={styles.input} maxLength={24} />
                <TouchableOpacity style={styles.buttonPass} >
                    <Text style={styles.textPass}>Esqueci a senha</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonTxt}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonRegister} onPress={nav} >
                    <Text style={styles.textRegister}>Não possui conta? Cadastre-se</Text>
                </TouchableOpacity>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}
export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'darkcyan',
    },
    containerHeader: {
        marginTop: '13%',
        marginBottom: '12%',
        paddingStart: '5%'
    },
    bienvindo: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white',
    },
    containerForm: {
        backgroundColor: 'white',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%', //delimita o padding da esquerda para responsividade
        paddingEnd: '5%', //delimita o padding da direita para responsividade
    },
    title: {
        fontSize: 20,
        marginTop: 28,
    },
    input: { //padrão de botão em app
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
    },
    button: {
        backgroundColor: 'darkcyan',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 14,
    },
    buttonTxt: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    buttonRegister: {
        width: '70%',
        borderRadius: 4,
        marginHorizontal: '15%',
        paddingVertical: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 14,
    },
    textRegister: {
        color: '#a1a1a1',

    },
    buttonPass: {
        borderRadius: 4,
        paddingVertical: 8,
        alignItems: 'left',
        justifyContent: 'center',
        width: '30%'
    },
    textPass: {
        color: '#a1a1a1',

    }
});
