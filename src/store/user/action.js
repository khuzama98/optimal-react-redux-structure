import promiseActionCreator from '../_helpers/promiseActionCreator'
import type from "./Constants"
import { services } from './services';



export default {

    getForces() {
        return promiseActionCreator(services.getForces(), type.GET_FORCES)
    },

    getCategories(){
        return promiseActionCreator(services.getCategories(), type.GET_CATEGORIES)
    },

    getCrimes(data){
        return promiseActionCreator(services.getCrimes(data), type.GET_CRIMES)
    }
}