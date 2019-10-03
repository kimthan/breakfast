import React,{useState} from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { ProductList } from "./pages/ProductList/ProductList";
import { ToBuy } from "./pages/ToBuy/ToBuy";
import { useProducts } from "./components/useProducts";
import {Modal} from './components/Modal/Modal'
import {handleProductUpdate} from './components/updateFirebase'
function App() {
    const products = useProducts();
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [modalItem, setModalItem] = useState({})

    const handleModal = (product) => {
       
        setModalItem(product)
        setIsOpenModal(true)
}

    const handleModalEvent = (event, id, buyOrRemove) => {
        setIsOpenModal(false)
        if(event){

            handleProductUpdate(id, event, buyOrRemove)
        }
    }

return (
        <BrowserRouter>
            <div className="container">
                <Route
                    exact
                    path="/"
                    render={props => (
                        <ProductList {...props} products={products} handleModal={handleModal}/>
                    )}
                />
                <Route
                    path="/tobuy"
                    render={() => <ToBuy products={products} handleModal={handleModal}/>}
                />
                <Modal isOpen={isOpenModal} modalItem={modalItem} handleModalEvent={handleModalEvent}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
