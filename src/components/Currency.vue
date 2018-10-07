<template>
  <section id='signup'>
    <h1>Choose your currency</h1>
    <div class="form">
      <div class="entry">
        <button @click="convert" name="signup">Confirm currency</button>
        <p>
          <select v-model="selected">
          <option>one</option>
          <option>two</option>
          </select>
          {{selected}}
        </p>
        <label for="pseudo"></label>
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
        form: {
          pseudo: undefined
        }
      }
    },
    beforeCreate: function () {
      console.log('hi im jef')
      Users.init()
    },
    methods: {
      convert: function () {
        console.log('hi I am converting...')
        localStorage.setItem('input', parseFloat(this.form.amount))
        fetch('https://free.currencyconverterapi.com/api/v6/convert?q=USD_COP&compact=ultra', {method: 'GET'})
          .then(function (response) {
            return response.json()
          })
          .then(function (myJson) {
            // console.log(JSON.stringify(myJson))
            var exchangeRate = myJson.USD_COP
            console.log('Exchange rate is ' + exchangeRate)
            var usdAmount = localStorage.getItem('input') / exchangeRate
            console.log('You entered COP $' + localStorage.getItem('input'))
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
