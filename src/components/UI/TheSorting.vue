<template>
  <form class="places__sorting" action="#" method="get">
    <span class="places__sorting-caption">Sort by&nbsp;</span>
    <span class="places__sorting-type" tabindex="0" @click="this.invisibly = !this.invisibly">
                  Popular
                  <svg class="places__sorting-arrow" width="7" height="4">
                    <use xlink:href="#icon-arrow-select"></use>
                  </svg>
                </span>
    <ul class="places__options places__options--custom places__options--opened" :class="{sort: invisibly}">
      <li class="places__option places__option--active" tabindex="0">Popular</li>
      <li class="places__option" tabindex="0" @click="lowToHigh">Price: low to high</li>
      <li class="places__option" tabindex="0">Price: high to low</li>
      <li class="places__option" tabindex="0">Top rated first</li>
    </ul>
  </form>
</template>

<script>
import { offers } from '../../mocks/offers'

export default {
  data () {
    return {
      invisibly: true
    }
  },
  methods: {
    lowToHigh () {
      offers.forEach(offer => {
        console.log(offer)
      })
    }
  }
}
</script>

<style scoped>
  .sort {
    display: none;
  }
</style>
