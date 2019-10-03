import firebase from "../firebase";

export const handleProductUpdate = (productId, status, buyOrRemove) => {
    if(buyOrRemove === 'remove'){
        firebase
            .firestore()
            .collection("breakfast")
            .doc(productId)
            .update({ tobuy: false });
    } else {
        firebase
            .firestore()
            .collection("breakfast")
            .doc(productId)
            .update({ tobuy: status });
    }
        
};
