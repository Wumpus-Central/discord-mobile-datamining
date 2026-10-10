// === Module 4998: ? ===

// Module 4998
import _mod19 from "module_19" /* 19 */;
import _mod4995 from "module_4995" /* 4995 */;

const useContext = _mod19.useContext;

export const usePortalState = (name) => {
  const tmp = useContext(_mod4995.PortalStateContext);
  if (null === tmp) {
    const _Error = Error;
    const error = new Error("'PortalStateContext' cannot be null, please add 'PortalProvider' to the root component.");
    throw error;
  } else {
    return tmp[name] || [];
  }
};