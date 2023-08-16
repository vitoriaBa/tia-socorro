import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}> Bolos da Socorro</Text>
      <ScrollView>
        <View style={styles.cxFoto}>
          <Image
            style={styles.img}
            resizeMode="strech"
            source={require('./assets/bolodeabacaxi.jpg')}
          />
          <Text style={styles.subtitulo}>bolo de abacaxi de com amora caramelizado para seu chazinho da tarte perfeito por:<Text style={styles.preco}>R$20.00</Text></Text>
        </View>
        <View style={styles.cxFoto}>
          <Image
            style={styles.img}
            resizeMode="strech"
            source={require('./assets/bolodecoracao.jpg')}
          />
          <Text style={styles.subtitulo}>bolinho de fuba com coraçoes e cobertura de brigateiro de morango por:  <Text style={styles.preco}> R$22.99</Text></Text>
        </View>
        <View style={styles.cxFoto}>
          <Image
            style={styles.img}
            resizeMode="strech"
            source={require('./assets/bolodelimao.jpg')}
          />
     <Text style={styles.subtitulo}>bolo de limão com corpertura de muse de limão por apenas: <Text style={styles.preco}>R$24.99</Text></Text>
        </View>
        <View style={styles.cxFoto}>
          <Image
            style={styles.img}
            resizeMode="strech"
            source={require('./assets/bolodepacoca.jpg')}
          />
          <Text style={styles.subtitulo}>bolo de Paçoca de Festa Junina. Ele tem a massa de canela com amentoin e cobertura de brigateiro de paçoca por: <Text style={styles.preco}>R$34.99</Text></Text>
          <View style={styles.butomcompra}></View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff9966',

  },
  paragraph: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: 'bolder',
    textAlign: 'center',
    color: '#e62e00',
    borderWidth: 3,
    borderLeftColor:'#ff9966',
    borderRightColor:'#ff9966',
    borderColor:'#d9d9d9'
  },
  img: {
    width: 250,
    height: 200,
    borderRadius: 50,
    paddingTop: 40,
  },

  cxFoto: {
    flex: 1,
    backgroundColor: '#ffdd99',
    margintop: 20,
    margin: 10,
    paddingTop:10,
    alignItems: "center",
    borderRadius: 50,
    width: 300,
    height: 320
  },
  subtitulo: {
    fontSize: 16,
    margin: 10,
    color: '#00004d',
  },
  preco:{
   color:'#336600',
  },
butomcompra:{
 width:2,
 height:22,
 backgroundColor:'black'
}
});
