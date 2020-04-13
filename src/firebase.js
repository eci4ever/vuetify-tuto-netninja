import firebase from "firebase/app";
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
apiKey: "AIzaSyBUjT3IYjovoCn5r79D1rWxjlIvoFedFN4",
authDomain: "vuetify-basic-8fa27.firebaseapp.com",
databaseURL: "https://vuetify-basic-8fa27.firebaseio.com",
projectId: "vuetify-basic-8fa27",
storageBucket: "vuetify-basic-8fa27.appspot.com",
messagingSenderId: "1046911393666",
appId: "1:1046911393666:web:c90ce8a00d37d5d484799b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

//db.settings({ timestampsInSnapshots: true})

export default db
