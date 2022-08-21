import {
  collection,
  firestoreDB,
  onSnapshot,
  where,
  query,
} from "../utility/fireStore";
import React, { useEffect, useState } from "react";
import { useUserContext } from "../utility/userData";
import MerchantUser from "../components/MerchantUser";

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

function Merchant() {
  const { uid } = useUserContext();
  const [merchantList, setMerchantList] = useState<IMerchantData[]>([]);

  useEffect(() => {
    const merchantDoc = query(
      collection(firestoreDB, "Merchant"),
      where("uid", "==", uid)
    );

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
  }, [uid]);

  return (
    <div>
      <h1>Merchant</h1>
      {merchantList.map((item) => (
        <MerchantUser key={item.id} {...item} />
      ))}
    </div>
  );
}

export default Merchant;
