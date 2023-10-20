import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebase";
const auth = getAuth(app);

export const NewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("Ocurrio un error " + errorMessage)
      console.log(error);
      // ..
    });
}