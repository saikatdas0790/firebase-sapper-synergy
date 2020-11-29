import firebase from "firebase/app";
import config from "./firebase-config";
import "firebase/auth";

firebase.initializeApp(config);

export default firebase;
