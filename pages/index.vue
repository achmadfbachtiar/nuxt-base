<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        sample
      </h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
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
      "detail"
    ]),
  },
  data() {
    return {
      listArray: [],
      detailObject: {}
    }
  },
  fetch() {
    this.getList()
    this.getDetail()
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
    getDetail() {
      this.$store.dispatch('sample/getDetail', {
        id: 'id'
      })
      .then(() => {
      })
      .catch((error) => {
      })
    },
    create() {
      const payload = {
        name: 'Name',
      }

      this.$store.dispatch('sample/create', payload)
      .then(() => {
      })
      .catch((error) => {
      })
    },
    update() {
      const data = {
        id: this.data.id,
        payload: {
          name: 'Name Update',
        }
      }
      this.$store.dispatch('sample/update', data)
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
      this.listArray = newState
    },
    detail(newState) {
      this.detailObject = newState
    }
  },
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
