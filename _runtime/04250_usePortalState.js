// === Module 4250: usePortalState ===

// Module 4250 (usePortalState)
import noop from "noop" /* 19 */;
import createContext from "createContext" /* 4247 */;

const useContext = noop.useContext;

export const usePortalState = (name) => {
  const tmp = useContext(createContext.PortalStateContext);
  if (null === tmp) {
    const _Error = Error;
    error = new Error("'PortalStateContext' cannot be null, please add 'PortalProvider' to the root component.");
    throw error;
  } else {
    return tmp[name] || [];
  }
};