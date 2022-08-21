import { useState } from "react";
import { useUserContext } from "../utility/userData";
import { firestoreDB, addDoc, collection } from "../utility/fireStore";
import {
  uploadBytes,
  ref,
  firebaseStorage,
  getDownloadURL,
} from "../utility/firebaseStorage";

interface IMerchantData {
  name: string;
  address: string;
  desc: string;
  pic: string;
  uid: string;
  status: {
    isOpen: boolean;
    capacity: number;
    currentClient: number;
  };
}

function Register() {
  const [name, setName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [capacity, setCapacity] = useState<number>(0);
  const [pic, setPic] = useState<FileList | null>(null);

  const { uid } = useUserContext();

  const handleSubmit = async () => {
    try {
      const profileRef = ref(firebaseStorage, "Profile/" + uid);

      if (pic) {
        uploadBytes(profileRef, pic?.[0]).then((snapshot) => {
          getDownloadURL(snapshot.ref).then((url) => {
            storageUpload(url);
          });
        });
      } else {
        storageUpload(
          "https://firebasestorage.googleapis.com/v0/b/shoping-queue.appspot.com/o/Profile%2Fdefault.png?alt=media&token=50df661f-a78f-4cf4-b456-37aadefc6337"
        );
      }
    } catch (err) {
      console.log(err);
    }
  };

  const storageUpload = async (img: string) => {
    try {
      const newData: IMerchantData = {
        address,
        name,
        uid,
        pic: img,
        desc,
        status: {
          capacity: capacity,
          currentClient: 0,
          isOpen: true,
        },
      };
      await addDoc(collection(firestoreDB, "Merchant"), newData);
    } catch (err) {}
  };

  return (
    <div className="grid justify-center py-32 gap-5">
      <h1>Merchant Register</h1>
      <div>
        <div>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Merchant Name"
          />
        </div>
        <div>
          <input
            onChange={(e) => setAddress(e.target.value)}
            type="text"
            placeholder="Address"
          />
        </div>
        <div>
          <input
            onChange={(e) => setCapacity(e.target.valueAsNumber)}
            type="number"
            placeholder="Capacity"
          />
        </div>
        <div>
          <input onChange={(e) => setPic(e.target.files)} type="file" />
        </div>
        <div>
          <textarea
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Description"
          ></textarea>
        </div>
        <div>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Register;
