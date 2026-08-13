// _runtime/04218_usePortalState.js
import { useContext } from "noop";
import { createContext } from "04215_createContext.js";


export const usePortalState = (arg0) => {
  const tmp = useContext(createContext.PortalStateContext);
  if (null === tmp) {
    const _Error = Error;
    const error = new Error("'PortalStateContext' cannot be null, please add 'PortalProvider' to the root component.");
    throw error;
  } else {
    return tmp[arg0] || [];
  }
};