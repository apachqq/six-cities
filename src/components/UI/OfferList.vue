<template>
  <card-item
    v-for="offer in offers"
    :key="offer.id"
    :offer="offer"
  ></card-item>
</template>

<script>
import CardItem from './CardItem'

export default {
  props: {
    offers: {
      type: Array
    }
  },
  components: { CardItem }
}
</script>

<style scoped>
</style>
