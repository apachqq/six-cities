<template>
  <form class="places__sorting" action="#" method="get">
    <span class="places__sorting-caption">Sort by&nbsp;</span>
    <span class="places__sorting-type" tabindex="0" @click="this.invisibly = !this.invisibly">
                  Name
                  <svg class="places__sorting-arrow" width="7" height="4">
                    <use xlink:href="#icon-arrow-select"></use>
                  </svg>
                </span>
    <ul class="places__options places__options--custom places__options--opened" :class="{sort: invisibly}">
      <li class="places__option" tabindex="0" @click="$emit('name')">Name</li>
      <li class="places__option" tabindex="0" @click="$emit('lowToHigh')">Price: low to high</li>
      <li class="places__option" tabindex="0" @click="$emit('highToLow')">Price: high to low</li>
      <li class="places__option" tabindex="0" @click="$emit('topRatedFirst')">Top rated first</li>
    </ul>
  </form>
</template>

<script>
export default {
  data () {
    return {
      invisibly: true
    }
  }
}
</script>

<style scoped>
  .sort {
    display: none;
  }
</style>
