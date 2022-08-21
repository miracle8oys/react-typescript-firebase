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
function MerchantList(props: IMerchantData) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.status.capacity}</p>
      <p>{props.status.currentClient}</p>
    </div>
  );
}

export default MerchantList;
