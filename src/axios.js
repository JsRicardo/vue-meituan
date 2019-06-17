
import Axios from 'axios'

Axios.defaults.baseURL = 'http://api.duyiedu.com'
Axios.interceptors.request.use(function (config) {
    config.params = {
        ...config.params,
        appkey: 'Ricaro_1553001629957'
    }
    return config
}, function (err) {
    return Promise.reject(err)
})

export default Axios