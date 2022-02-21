import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
apiKey: "AIzaSyCnIka9JsZqh_EO3N6qnEczTxNwe3jcSCU",
  authDomain: "e-library-2f79f.firebaseapp.com",
  projectId: "e-library-2f79f",
  storageBucket: "e-library-2f79f.appspot.com",
  messagingSenderId: "1071625053913",
  appId: "1:1071625053913:web:95b7f604d50d00406480c8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
