import Vue from 'vue';

import template from './dashboard.html';
import DashboardService from './../../services/dashboardService.js';

const animation = 'flipInX';
const animationDelay = 25; // in ms

export default Vue.extend({
  template,

  data() {
    return {
      cards: []
    };
  },

  created(){
    this.cards = DashboardService.getCardPageByPage(1);
  },

  methods: {
    // Methods for transitions
    handleBeforeEnter(el) {
      el.style.opacity = 0;
      el.classList.add('animated');
    },

    handleEnter(el) {
      const delay = el.dataset.index * animationDelay;
      setTimeout(() => {
        el.style.opacity = 1;
        el.classList.add(animation);
      }, delay);
    }
  }
});
