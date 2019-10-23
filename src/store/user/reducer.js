import type from "./Constants"


const initialState = {
    
    getForces: {},
    getCategories: {},
    getCrimes: {}
    
}

export function user(state = initialState, action) {

    switch (action.type) {
        case `${type.GET_FORCES}_REQUEST`:
            return {
                ...state,
                    getForces: {
                        ...state.getForces,
                        loading: true
                    }
            }
        case `${type.GET_FORCES}_SUCCESS`:
            return {
                ...state,
                    getForces: {
                        ...state.getForces,
                        data: action.payload,
                        loading: false,
                        success: true,
                    },
                
            }
        case `${type.GET_FORCES}_FAILED`:
            return {
                ...state,
                    getForces: {
                        ...state.getForces,
                        loading: false,
                        success: false,
                        error: action.error
                    },

            }

        case `${type.GET_CATEGORIES}_REQUEST`:
            return {
                ...state,
                    getCategories: {
                        ...state.getCategories,
                        loading: true
                    },
                
            }
        
        case `${type.GET_CATEGORIES}_SUCCESS`:
            return {
                ...state,
                    getCategories: {
                        ...state.getCategories,
                        data: action.payload,
                        loading: false,
                        success: true,
                    },

            }
        
        case `${type.GET_CATEGORIES}_FAILED`:
            return {
                ...state,
                    getCategories: {
                        ...state.getCategories,
                        loading: false,
                        success: false,
                        error: action.error
                    },
                
            }
        


        case `${type.GET_CRIMES}_REQUEST`:
            return {
                ...state,
                    getCrimes: {
                        ...state.getCrimes,
                        loading: true
                    },
                
            }
        case `${type.GET_CRIMES}_SUCCESS`:
            return {
                ...state,
                    getCrimes: {
                        ...state.getCrimes,
                        data: action.payload.data,
                        loading: false,
                        success: true,
                    },

            }
        case `${type.GET_CRIMES}_FAILED`:
            return {
                ...state,
                    getCrimes: {
                        ...state.getCrimes,
                        loading: false,
                        success: false,
                        error: action.error
                    },

            }
        default:
            return state
    }
}

