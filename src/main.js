import Vue from 'vue'
import App from './App.vue'
import ScrollAnimation from './directives/scrollanimation'

/*
 Register the object here globally as directive, 
 similar if you register a component. 
 But now with Vue.directive, instead of component.
 With this you can use v-scrollanimation 
 in your whole application on each element.
*/
Vue.directive('scrollanimation', ScrollAnimation);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
