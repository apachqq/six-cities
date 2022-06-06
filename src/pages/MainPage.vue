<template>
  <div class="page page--gray page--main">

    <the-header></the-header>

    <main class="page__main page__main--index">
      <h1 class="visually-hidden">Cities</h1>
      <div class="tabs">
        <section class="locations container">
          <ul class="locations__list tabs__list">
            <li class="locations__item">
              <a class="locations__item-link tabs__item" href="#">
                <span>Paris</span>
              </a>
            </li>
            <li class="locations__item">
              <a class="locations__item-link tabs__item" href="#">
                <span>Cologne</span>
              </a>
            </li>
            <li class="locations__item">
              <a class="locations__item-link tabs__item" href="#">
                <span>Brussels</span>
              </a>
            </li>
            <li class="locations__item">
              <a class="locations__item-link tabs__item tabs__item--active">
                <span>Amsterdam</span>
              </a>
            </li>
            <li class="locations__item">
              <a class="locations__item-link tabs__item" href="#">
                <span>Hamburg</span>
              </a>
            </li>
            <li class="locations__item">
              <a class="locations__item-link tabs__item" href="#">
                <span>Dusseldorf</span>
              </a>
            </li>
          </ul>
        </section>
      </div>
      <div class="cities">
        <div class="cities__places-container container">
          <section class="cities__places places">
            <h2 class="visually-hidden">Places</h2>
            <b class="places__found">{{ offers.length }} places to stay in {{ city }}</b>

            <the-sorting
              @lowToHigh="lowToHigh"
              @highToLow="highToLow"
            ></the-sorting>

            <div class="cities__places-list places__list tabs__content">

              <offer-list :offers="offers"></offer-list>

            </div>
          </section>
          <div class="cities__right-section">
            <section class="cities__map map"></section>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import OfferList from '@/components/UI/OfferList'
import TheSorting from '@/components/UI/TheSorting'
import { offers } from '@/mocks/offers'
import index from '@/store'

export default {
  inject: ['logout'],
  data () {
    return {
      offers: offers,
      city: index.state.city
    }
  },
  methods: {
    lowToHigh () {
      this.offers.sort((offer1, offer2) => {
        return offer1.price - offer2.price
      })
    },
    highToLow () {
      this.offers.sort((offer1, offer2) => {
        return offer2.price - offer1.price
      })
    }
  },
  components: { OfferList, TheSorting }
}
</script>

<style scoped>
</style>
