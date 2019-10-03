
import{useEffect, useState} from 'react';
import firebase from '../firebase'
export const useProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const unsubscribe = firebase
            .firestore()
            .collection("breakfast")
            .onSnapshot(snapshot => {
                const products = snapshot.docs.map(doc => {
                    return { ...doc.data() };
                });
                setProducts(products);
            });
        return () => unsubscribe();
    }, []);

    return products;
};