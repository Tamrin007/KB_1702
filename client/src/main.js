import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'

import App from './App.vue'

Vue.use(Buefy)

import AgendaItem from './components/agenda/agendaItem.vue'
Vue.component('AgendaItem', AgendaItem)

import DecisionItem from './components/decision/decisionItem.vue'
Vue.component('DecisionItem', DecisionItem)

new Vue({
  el: '#app',
  render: h => h(App)
})