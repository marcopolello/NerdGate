import firebase from "firebase/app";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAmfXlilEIXn3g8QBB6C8U3vXM6Pe47SRc",
    authDomain: "fireblog-a6f39.firebaseapp.com",
    projectId: "fireblog-a6f39",
    storageBucket: "fireblog-a6f39.appspot.com",
    messagingSenderId: "545818733029",
    appId: "1:545818733029:web:71e7382e1f67b29478670c",
    measurementId: "G-YSQHJ80XYM"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {timestamp};
export default firebaseApp.firestore();