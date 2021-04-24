import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyChm9hcPQ02TF323ib-NorPOsGatrFvY0Q',
  authDomain: 'photo-gallery-81967.firebaseapp.com',
  projectId: 'photo-gallery-81967',
  storageBucket: 'photo-gallery-81967.appspot.com',
  messagingSenderId: '50113044899',
  appId: '1:50113044899:web:8674c441e7924d499afa16',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
