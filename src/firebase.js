import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {

    apiKey: "AIzaSyCOScgU_h3dRoTuCH0TnWyFrXrrm3Sn_EQ",

    authDomain: "crud-react-c19ef.firebaseapp.com",

    projectId: "crud-react-c19ef",

    storageBucket: "crud-react-c19ef.appspot.com",

    messagingSenderId: "477947646988",

    appId: "1:477947646988:web:af3e5fd128070d4a920a29"

};

const firebaseapp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseapp);

export { db }