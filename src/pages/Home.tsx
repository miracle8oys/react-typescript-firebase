import { collection, firestoreDB, onSnapshot } from "../utility/fireStore";
import React, { useEffect, useState } from "react";
import MerchantList from "../components/MerchantList";

interface IMerchantData {
  id: string;
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

function Home() {
  const [merchantList, setMerchantList] = useState<IMerchantData[]>([]);

  useEffect(() => {
    const merchantDoc = collection(firestoreDB, "Merchant");

    const unsubscribe = onSnapshot(merchantDoc, (snapshot) => {
      setMerchantList(
        snapshot.docs.map((item) => ({
          id: item.id,
          name: item.data().name,
          address: item.data().name,
          desc: item.data().name,
          pic: item.data().name,
          uid: item.data().name,
          status: {
            isOpen: item.data().status.isOpen,
            capacity: item.data().status.capacity,
            currentClient: item.data().status.currentClient,
          },
        }))
      );
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      <h1>Home</h1>
      {merchantList.map((item) => (
        <MerchantList key={item.id} {...item} />
      ))}
    </div>
  );
}

export default Home;
