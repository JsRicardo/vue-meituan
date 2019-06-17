import axios from '@/axios'

let api = {
    getSearchHotWord(params){
        return axios.get('/api/meituan/header/searchHotWords.json', params)
    },
    searchList(){
        return axios.get('/api/meituan/header/search.json')
    },
    getMenuList(){
        return axios.get('/api/meituan/index/nav.json')
    },
    getResultsByKeywords(){
        return axios.get('/api/meituan/index/resultsByKeywords.json')
    },
    login(params){
        return axios.get('/api/meituan/login', params)
    },
    regester(){
        return axios.get('/api/meituan/register')
    }
}

export default api