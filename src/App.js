import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DELETE_PRODUCT_PENDING, GET_PRODUCT_PENDING, POST_PRODUCT_PENDING, UPDATE_PRODUCT_PENDING, } from './reduxSaga/admin/action';

const App = () => {

  const [data, setdata] = useState({})

  let dispatch = useDispatch();

  let productName = useRef();
  let price = useRef();
  let decs = useRef();

  useEffect(() => {
    dispatch({ type: GET_PRODUCT_PENDING })
  }, [])

  let result = useSelector((state) => state.adminReducer)

  // addproduct

  function addProduct() {
    let products = {
      productName: productName.current.value,
      price: price.current.value,
      decs: decs.current.value
    }
    console.log(products);
    dispatch({ type: POST_PRODUCT_PENDING, payload: products })
  }

  // deleteData

  function deleteData(id) {
    dispatch({ type: DELETE_PRODUCT_PENDING, payload: id })
  }

  function updatedata(val) {
    console.log(val);
    setdata(val)
  }

  let viewhandle = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value })
  }

  let saveData = () => {
    dispatch({ type: UPDATE_PRODUCT_PENDING, payload: data });
  }

  return (
    <>

      Productname : <input type="text" ref={productName} /><br /><br />
      price : <input type="number" ref={price} /><br /><br />
      decs : <input type="text" ref={decs} /><br /><br />
      <button onClick={addProduct}>Add</button><br /><br />

      Productname : <input type="text" name='productName' value={data.productName} onChange={viewhandle} /><br /><br />
      price : <input type="number" name='price' value={data.price} onChange={viewhandle} /><br /><br />
      decs : <input type="text" name='decs' value={data.decs} onChange={viewhandle} /><br /><br />
      <button onClick={saveData}>Add</button><br /><br />


      {
        result.products.map((val, index) => {
          return (
            <>
              <div className="col-3">
                <div className="card">
                  <p>{val.productName}</p>
                  <p>{val.price}</p>
                  <p>{val.decs}</p>
                  <button onClick={() => deleteData(val.id)}>Delete</button><br /><br />
                  <button onClick={() => updatedata(val)}>Update</button>

                </div>
              </div>
            </>
          )
        })
      }
    </>
  )
}

export default App

