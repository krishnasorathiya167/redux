import { DELETE_PRODUCT_ERROR, DELETE_PRODUCT_PENDING, DELETE_PRODUCT_SECCESS, GET_PRODUCT_ERROR, GET_PRODUCT_PENDING, GET_PRODUCT_SECCESS, POST_PRODUCT_ERROR, POST_PRODUCT_PENDING, POST_PRODUCT_SECCESS, UPDATE_PRODUCT_ERROR, UPDATE_PRODUCT_PENDING, UPDATE_PRODUCT_SECCESS } from "./action";


let initialState = {
    products: [],
    isLoading: false,
    isError: null,
}

let adminReducer = (state = initialState, action) => {
    console.log(action, "reducer");

    switch (action.type) {
        case (GET_PRODUCT_PENDING,
            POST_PRODUCT_PENDING,DELETE_PRODUCT_PENDING,
            UPDATE_PRODUCT_PENDING
        ): {
                return {
                    ...state,
                    isLoading: true,
                };
            }
        case GET_PRODUCT_SECCESS: {
            return {
                isLoading: false,
                products: action.payload
            }
        }
        case POST_PRODUCT_SECCESS: {
            return {
                isLoading: false,
                products: state.products.concat(action.payload),
            }
        }

        //delete
        case DELETE_PRODUCT_SECCESS:{
            return{
                isLoading:false,
                products:state.products.filter((val)=>val.id!=action.payload.id)
            }
        }

        // update
        case UPDATE_PRODUCT_SECCESS:{
            return{
                isLoading:false,
                products:state.products.map((val)=>val.id==action.payload.id?{...action.payload}:val)
            }
        }

        case (GET_PRODUCT_ERROR, POST_PRODUCT_ERROR,DELETE_PRODUCT_ERROR,UPDATE_PRODUCT_ERROR): {
            return {
                isLoading: false,
                isError: action.payload
            }
        }
        default: {
            return {
                ...state,
            }
        }
    }
}

export default adminReducer;