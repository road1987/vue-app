<template src="./list.component.html">
</template>

<script>
import { QuestionService as questionServ } from '../shared/question.service'

export default {
  name: 'qustions-list',
  data () {
    return {
      questions: []
    }
  },
  created () {
    questionServ.getQuestions()
    .then((resp) => {
      this.questions = resp;
    })
  },
  methods: {
    showSideMenu(){
      this.$parent.showSideMenu();
    }
  }
}
</script>

<style scoped src="./list.component.scss" lang="scss">
</style>
