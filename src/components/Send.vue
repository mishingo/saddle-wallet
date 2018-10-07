<template>
  <section id='signup'>
    <h1>Send {{ currency }}</h1>
    <div class="form">
      <div class="entry">
        <button @click="convert" name="signup">Confirm amount</button>
        <input name="amount" v-model="form.amount">
        <label for="pseudo">Amount to send in {{ currency }}</label>
      </div>
    </div>
  </section>
</template>


<script>
  import Users from '@/js/users'

  export default {
    name: 'signup',
    data () {
      return {
        currency: localStorage.getItem('currency'),
        form: {
          pseudo: undefined
        }
      }
    },
    beforeCreate: function () {
      // console.log('hi im jef')
      Users.init()
    },
    methods: {
      convert: function () {
        console.log('hi I am converting...')
        localStorage.setItem('input', parseFloat(this.form.amount))
        fetch('https://free.currencyconverterapi.com/api/v6/convert?q=USD_' + localStorage.getItem('currency') + '&compact=ultra', {method: 'GET'})
          .then(function (response) {
            return response.json()
          })
          .then(function (myJson) {
            // console.log(JSON.stringify(myJson))
            // var exchangeRate = myJson.USD_COP
            var myCurrency = localStorage.getItem('currency')
            var code = 'USD_' + myCurrency
            console.log(code)
            var exchangeRate = myJson[code]
            console.log('Exchange rate is ' + exchangeRate)
            var usdAmount = localStorage.getItem('input') / exchangeRate
            console.log('You entered ' + myCurrency + ' $' + localStorage.getItem('input'))
            console.log('Amount to be sent in USD $' + usdAmount)
          })
      }
    }
  }
</script>

<style lang="scss" scoped>

  #signup {
    text-align: center;

    .form {
      display: flex;
      flex-direction: column;
      margin: auto;

      .entry {
        display: flex;
        flex-direction: row-reverse;
        justify-content: center;

        label {
          margin-right: 20px
        }

        button {
          margin-left: 20px
        }

      }

    }

  }

</style>
