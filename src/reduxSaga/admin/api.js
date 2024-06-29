import axios from "axios";
import { BASE_URL, DELETE_PRODUCT, GET_PRODUCT, POST_PRODUCT, UPDATE_PRODUCT } from "../constant";


let get_product = async (action) => {
    // console.log(action,"api");

    let { data, status } = await axios.get(BASE_URL + GET_PRODUCT);
    // console.log(res,"getapi");
    return { data, status }
}

let post_product = async (action) => {
    console.log(action, "post api");

    let { data, status } = await axios.post(BASE_URL + POST_PRODUCT, action.payload)
    return { data, status }
}

let delete_product = async (action) => {
    let { data, status } = await axios.delete(BASE_URL + DELETE_PRODUCT + action.payload)
    // console.log(res);
    return { data, status }
}

let update_product = async (action) => {
    let { data, status } = await axios.put(BASE_URL + UPDATE_PRODUCT + action.payload.id, action.payload);
    // console.log(res);
    return { data, status }
}

export { get_product, post_product, delete_product, update_product }