import { call, put } from "redux-saga/effects";
import { delete_product, get_product, post_product, update_product } from "../../admin/api";
import { DELETE_PRODUCT_ERROR, DELETE_PRODUCT_SECCESS, GET_PRODUCT_ERROR, GET_PRODUCT_SECCESS, POST_PRODUCT_ERROR, POST_PRODUCT_SECCESS, UPDATE_PRODUCT_ERROR, UPDATE_PRODUCT_SECCESS } from "../../admin/action";


function* handle_get_product(action) {
    // console.log(action, "from manage");

    // console.log(res);
    try {
        let { data, status } = yield call(get_product, action);
        if (status === 200) {
            yield put({ type: GET_PRODUCT_SECCESS, payload: data })
        }
    } catch (error) {
        yield put({ type: GET_PRODUCT_ERROR, payload: error })
    }
}

function* handle_post_product(action) {
    console.log(action, "manage");

    // console.log(res);
    try {
        let { data, status } = yield call(post_product, action)
        if (status === 201) {
            yield put({ type: POST_PRODUCT_SECCESS, payload: data })
        }

    } catch (error) {
        yield put({ type: POST_PRODUCT_ERROR, payload: error })
    }
}

function* handle_delete_product(action) {
    // console.log(res);
    try {
        let { data, status } = yield call(delete_product, action)
        if (status === 200) {
            yield put({ type: DELETE_PRODUCT_SECCESS, payload: data })
        }
    } catch (error) {
        yield put({ type: DELETE_PRODUCT_ERROR, payload: error })
    }
}

function* handle_update_product(action) {
    let { data, status } = yield call(update_product, action);
    // console.log(res,"manage");
    try {
        if (status === 200) {
            yield put({ type: UPDATE_PRODUCT_SECCESS, payload: data })
        }
    } catch (error) {
        yield put({ type: UPDATE_PRODUCT_ERROR, payload: error })
    }
}

export { handle_get_product, handle_post_product, handle_delete_product, handle_update_product };