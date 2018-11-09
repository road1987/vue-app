import { HTTP } from '../../core/http.service'

const URL = {
    GET_QUESTIONS : '/static/data/questions.json'
}

export const QuestionService = {
    getQuestions(){
        return HTTP.get(URL.GET_QUESTIONS);
    }
}