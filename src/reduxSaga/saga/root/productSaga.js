const { takeLatest } = require("redux-saga/effects");
const { handle_get_product, handle_post_product, handle_delete_product, handle_update_product } = require("../admin/manageProduct");
const { GET_PRODUCT_PENDING, POST_PRODUCT_PENDING, DELETE_PRODUCT_PENDING, UPDATE_PRODUCT_PENDING } = require("../../admin/action");


function* handle_get_product_saga() {
    yield takeLatest(GET_PRODUCT_PENDING, handle_get_product);
}

function* handle_post_product_saga() {
    yield takeLatest(POST_PRODUCT_PENDING, handle_post_product)
}

function* handle_delete_product_saga() {
    yield takeLatest(DELETE_PRODUCT_PENDING, handle_delete_product)
}

function* handle_update_product_saga(){
    yield takeLatest(UPDATE_PRODUCT_PENDING,handle_update_product)
}

export { handle_get_product_saga, handle_post_product_saga,handle_delete_product_saga,handle_update_product_saga }