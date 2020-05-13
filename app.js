const app = new Vue({
  el: '#app',
  data() {
    return {
      name: 'Directivas en Vue',
      img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
      changePercent: 10,
      prices: [8400, 7900, 8200, 9000],
      html: '<p>HTML insertado por v-html</p>',
      msg: 'Texto insertado por v-text',
      showPrices: true,
    }
  },
  methods: {
    toggleHidePrices() {
      this.showPrices = !this.showPrices;
    }
  }
})