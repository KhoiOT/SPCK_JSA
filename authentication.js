import {
    getAuth,
    createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { firebaseConfig } from "./config.js";

const app = initializeApp(firebaseConfig);
const auth = await getAuth(app);
const register = async (email, password) => {
    try { let user = await createUserWithEmailAndPassword(auth, email, password); }
    catch (error) { console.log(error); }

}
export { register };


