<template>
  <div class="page page--gray page--login">

    <header class="header">
      <div class="container">
        <div class="header__wrapper">
          <the-logo-left></the-logo-left>
        </div>
      </div>
    </header>

    <main class="page__main page__main--login">
      <div class="page__login-container container">
        <section class="login">
          <h1 class="login__title">Sign in</h1>
          <form class="login__form form" action="#" method="post" @submit.prevent="submit">
            <div class="login__input-wrapper form__input-wrapper">
              <label class="visually-hidden">E-mail</label>
              <input class="login__input form__input" type="email" name="email" placeholder="Email" required="" v-model.trim="email">
            </div>
            <div class="login__input-wrapper form__input-wrapper">
              <label class="visually-hidden">Password</label>
              <input class="login__input form__input" type="password" name="password" placeholder="Password"
                     required="" v-model="password">
            </div>
            <button class="login__submit form__submit button" type="submit">Sign in</button>
          </form>
        </section>
        <section class="locations locations--login locations--current">
          <div class="locations__item">
            <a class="locations__item-link" href="#">
              <span>Amsterdam</span>
            </a>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script>
import index from '@/store'
import TheLogoLeft from '@/components/UI/TheLogoLeft'

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  provide () {
    return {
      email: 'email'
    }
  },
  inject: ['login'],
  components: { TheLogoLeft },
  computed: {
    isValid () {
      return this.email !== '' && this.password !== ''
    }
  },
  methods: {
    submit () {
      if (this.isValid) {
        index.state.email = this.email
        this.login()
      }
    }
  }
}
</script>

<style scoped>
</style>
