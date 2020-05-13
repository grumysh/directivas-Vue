const app = new Vue({
  el: '#app',
  data() {
    return {
      name: 'Directivas en Vue',
      symbol: '(v-)',
      img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
      changePercent: 10,
      prices: [8400, 7900, 8200, 9000],
      html: '<p>HTML insertado por v-html</p>',
      msg: 'Texto insertado por v-text',
      showPrices: true,
      price: 12,
      color: "f4f4f4",
      inputText: ''
    }
  },
  computed: {
    // Las computed properties son las generadas a partir de los valores de otras propiedades. Son funciones que devuelven un valor.
    title() {
      return `${this.name} ${this.symbol}`
    }
  },
  watch: {
    // Los watchers tienen un comportamiento similar a las computed properties, con la diferencia que estas son funciones que 
    // ejecutan un código. El nombre de la función tiene que corresponder al nombre de una propiedad en data. Recibe dos valores 
    // como parametros, el valor nuevo y el valor viejo.
    price(newValue, oldValue){
      alert("Usando Watchers para saber cuando y como cambia la variable 'price'.\n Valor Nuevo= "+newValue+"\n Valor Anterior= "+oldValue)
    }
  },
  methods: {

    toggleHidePrices() {
      this.showPrices = !this.showPrices;
    }
  }
})