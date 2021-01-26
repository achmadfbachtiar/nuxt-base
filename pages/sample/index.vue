<template>
  <div class="container">
    <div>
      <h1>
        SAMPLE
      </h1>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  components: {
  },
  computed: {
    ...mapState("sample", [
      "list",
    ]),
  },
  data() {
    return {
      data: []
    }
  },
  fetch() {
    this.getList()
  },
  mounted() {
  },
  methods: {
    getList() {
      const params = {
        page: 1,
        limit: 20
      }
      this.$store.dispatch('sample/getList', params)
      .then(() => {
      })
      .catch((error) => {
      })
    },
    delete() {
      const data = {
        id: 'id',
      }
      this.$store.dispatch('sample/update', data)
      .then(() => {
      })
      .catch((error) => {
      })
    }
  },
  watch: {
    list(newState) {
      this.data = newState
    }
  },
  filters: {
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
