<template>
  <section id='signup'>
    <h1>Choose your currency</h1>
    <div class="form">
      <div class="entry">
        <button @click="choose" name="choose">Confirm currency</button>
          <select v-model="form.selected">
            <option value='USD'>USD - United States</option>
            <option value='INR'>INR - Indian Rupee</option>
            <option value='CNY'>CNY - Chinese Yuan</option>
            <option value='EUR'>EUR - Euro</option>
            <option value='RUB'>RUB - Russian Ruble</option>
            <option value='COP'>COP - Colombian Peso</option>
            <option value='MXN'>MXN - Mexican Peso</option>
          </select>
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
      Users.init()
    },
    methods: {
      choose: function () {
        console.log('I am choosing your currency...')
        localStorage.setItem('currency', this.form.selected)
        console.log(this.form.selected)
        this.$router.push({ path: 'send' })
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
