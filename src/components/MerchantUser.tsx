import { firestoreDB, doc, updateDoc, increment } from "../utility/fireStore";

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

type IStatus = "INCREASE" | "DECREASE";

function MerchantUser(props: IMerchantData) {
  const updateCurrentClient = async (merchantId: string, status: IStatus) => {
    const merchantDoc = doc(firestoreDB, "Merchant", merchantId);

    if (status === "INCREASE") {
      await updateDoc(merchantDoc, {
        "status.currentClient": increment(1),
      });
    }

    if (status === "DECREASE") {
      await updateDoc(merchantDoc, {
        "status.currentClient": increment(-1),
      });
    }
  };

  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.status.capacity}</p>
      <p>{props.status.currentClient}</p>

      <button onClick={() => updateCurrentClient(props.id, "INCREASE")}>
        Increase
      </button>
      <button onClick={() => updateCurrentClient(props.id, "DECREASE")}>
        Done
      </button>
    </div>
  );
}

export default MerchantUser;
