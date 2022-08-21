import { useContext, createContext } from "react";
import { UserInfo } from "firebase/auth";

export const defaultData = {
  displayName: null,
  email: null,
  phoneNumber: null,
  photoURL: null,
  providerId: "",
  uid: "",
};

export const UserContext = createContext<UserInfo>(defaultData);

export const useUserContext = () => useContext(UserContext);
