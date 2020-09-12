import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCmMTxJruh_wntzVnsO0RR0eLgmnY1rOuU",
    authDomain: "artistas-a8b24.firebaseapp.com",
    databaseURL: "https://artistas-a8b24.firebaseio.com",
    projectId: "artistas-a8b24",
    storageBucket: "artistas-a8b24.appspot.com",
    messagingSenderId: "887024079681",
    appId: "1:887024079681:web:4eae24236ec935583287c0",
    measurementId: "G-7ETN3WVRTY"
  };
  // Initialize Firebase
  // firebase.initializeApp(firebaseConfig);
  // firebase.analytics();

  // export default firebase;
  firebase.initializeApp(firebaseConfig);

export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;
  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { email, displayName, photoURL } = user;
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        ...additionalData
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return getUserDocument(user.uid);
};
const getUserDocument = async uid => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();
    return {
      uid,
      ...userDocument.data()
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
};

//firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
//export const generateUserDocument;