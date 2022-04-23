<template>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">

        <the-logo-left></the-logo-left>

        <nav class="header__nav">
          <ul class="header__nav-list">
            <li class="header__nav-item user">
              <a class="header__nav-link header__nav-link--profile" href="#">
                <div class="header__avatar-wrapper user__avatar-wrapper">
                </div>
                <span class="header__user-name user__name">{{ email }}</span>
              </a>
            </li>
            <li class="header__nav-item">
              <a class="header__nav-link" href="#">
                <span class="header__signout" @click.prevent="logout">Sign out</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
import index from '@/store'
import TheLogoLeft from '@/components/UI/TheLogoLeft'

export default {
  data () {
    return {
      email: index.state.email
    }
  },
  inject: ['logout'],
  components: { TheLogoLeft }
}
</script>

<style scoped>
</style>
