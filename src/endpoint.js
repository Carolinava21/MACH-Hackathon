import { db } from "./firestore"
// The Cloud Functions for Firebase SDK to create Cloud Functions and set up triggers.
const functions = require('firebase-functions/v1');

// The Firebase Admin SDK to access Firestore.
const admin = require("firebase-admin");
admin.initializeApp();

/**
 *  name,
    lastName,
    id,
    phone,
    email,
    password
 */
export const register = async (args) =>{
    const docRef = await addDoc(collection(db, "users"), args);
    return docRef;
}

