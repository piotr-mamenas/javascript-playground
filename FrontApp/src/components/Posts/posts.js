import Vue from 'vue';

import { postsResource } from 'src/util/resources';
import template from './posts.html';



export default Vue.extend({
  template,

  data() {
    return {
      postsFilter: '',
      posts: []
    };
  },

  computed: {
    filteredPosts() {
      return this.posts.filter((post) => post.title.toLowerCase().indexOf(this.postsFilter.toLowerCase()) !== -1);
    }
  },

  created(){
    this.fetchPosts();
  },

  methods: {
    fetchPosts(){

    },

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
