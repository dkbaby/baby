var app1 = new Vue({
  el: '.wrap',
  data: {
    timePeriod : [
      { text: 'JavaScript 배우기' },
      { text: 'Vue 배우기' },
      { text: 'Vue 배우기' },
      { text: 'Vue 배우기' },
      { text: 'Vue 배우기' },
      { text: 'Vue 배우기' },
      { text: 'Vue 배우기' },
      { text: 'Vue 배우기' },
      { text: 'Vue 배우기' },
      { text: 'Vue 배우기' },
      { text: 'Vue 배우기' },
      { text: '무언가 멋진 것을 만들기' }
    ],
    isActive: false
  },
  methods:{
    myFilter: function(){
      this.isActive = !this.isActive;
    },
    isEven :function(){
      return this.index % 2 != 0 ? true: false
    }
  },
  computed: {

  }
})
