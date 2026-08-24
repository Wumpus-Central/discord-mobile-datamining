// _runtime/04250_usePortalState.js
import noop from "00019_noop.js";
import createContext from "04247_createContext.js";

const useContext = noop.useContext;

export const usePortalState = (arg0) => {
  const tmp = useContext(createContext.PortalStateContext);
  if (null === tmp) {
    const _Error = Error;
    error = new Error("'PortalStateContext' cannot be null, please add 'PortalProvider' to the root component.");
    throw error;
  } else {
    return tmp[arg0] || [];
  }
};