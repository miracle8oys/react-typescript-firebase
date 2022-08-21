import app from "../config/firebaseConfig";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseStorage = getStorage(app);

export { firebaseStorage, ref, uploadBytes, getDownloadURL };
