<template>
  <div class="chat container">
    <h2 class="center pink-text text-darken-3">Chat {{ name }}</h2>
    <div class="card">
      <div class="card-content">
        <ul class="messages">
          <li>
            <span class="pink-text text-darken-3">Name</span>
            <span class="grey-text">message</span>
            <span class="grey-text time">time</span>
          </li>
        </ul>
      </div>
      <div class="cart-action">
        <input type="text">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chat',
  props: [ 'name' ],
  data() {
    return {

    }
  }
}
</script>

<style>
.chat h2 {
  font-size: 2.6em;
  margin-bottom: 40px;
}
</style>