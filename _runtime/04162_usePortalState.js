// _runtime/04162_usePortalState.js
import { useContext } from "noop";


export const usePortalState = (arg0) => {
  const tmp = useContext(require(4159) /* createContext */.PortalStateContext);
  if (null === tmp) {
    const _Error = Error;
    const error = new Error("'PortalStateContext' cannot be null, please add 'PortalProvider' to the root component.");
    throw error;
  } else {
    return tmp[arg0] || [];
  }
};