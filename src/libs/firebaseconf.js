import firebase from 'firebase'
// Initialize Firebase
var config = {
    apiKey: "AIzaSyCvywQQO91amvosGYdkdu9TH-UwYWEcuYc",
    authDomain: "https://estudos-fd922.firebaseio.com",
    databaseURL: "https://estudos-fd922.firebaseio.com",
    storageBucket: "estudos-fd922.appspot.com",
}

var firebaseInit = firebase.initializeApp(config)

export default firebaseInit
