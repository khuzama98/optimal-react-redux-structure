
import API from '../_common/services/api'

export const services = {

    getForces() {
        return API.get(`/forces`)
    },

    getCategories(){
        return API.get(`/crime-categories`)
    },

    getCrimes(data){
        return API.post(`/crime-categories`,data)
    }
}