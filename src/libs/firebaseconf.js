import firebase from 'firebase'
// Initialize Firebase
var config = {
    apiKey: "AIzaSyCvywQQO91amvosGYdkdu9TH-UwYWEcuYc",
    authDomain: "https://estudos-fd922.firebaseio.com",
    databaseURL: "https://estudos-fd922.firebaseio.com",
    //projectId: "e-compra",
    storageBucket: "estudos-fd922.appspot.com",
    //messagingSenderId: "244652802581"
}

var firebaseInit = firebase.initializeApp(config)

export default firebaseInit



// var config = {
//     apiKey: "apiKey",
//     authDomain: "projectId.firebaseapp.com",
//     databaseURL: "https://databaseName.firebaseio.com",
//     storageBucket: "bucket.appspot.com"
// };
// firebase.initializeApp(config);

// // Get a reference to the database service
// var database = firebase.database();