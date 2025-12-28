
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { toast } from "react-toastify";
const firebaseConfig = {
  apiKey: "AIzaSyBp_WrWmgI8Af33XF7lwtFHpQwsnZqiriw",
  authDomain: "netflix-clone-798de.firebaseapp.com",
  projectId: "netflix-clone-798de",
  storageBucket: "netflix-clone-798de.firebasestorage.app",
  messagingSenderId: "155532936346",
  appId: "1:155532936346:web:b6c56ec4161a3247d70b23",
  measurementId: "G-1Y5GMHV5LV"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
 
const signUp = async(name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    } catch (error) {
        console.error(error);
        toast.error(error.code.split('/')[1].split('-').join(' '));
    }
};

const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(' '))
    }   
};

const logout = () => {
    signOut(auth);
}

export { auth, db, signUp, login, logout };