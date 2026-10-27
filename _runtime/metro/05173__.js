// === Module 5173: ? ===

// Module 5173
import _mod19 from "module_19" /* 19 */;
import _mod5170 from "module_5170" /* 5170 */;

const useContext = _mod19.useContext;

export const usePortalState = (name) => {
  const tmp = useContext(_mod5170.PortalStateContext);
  if (null === tmp) {
    const _Error = Error;
    const error = new Error("'PortalStateContext' cannot be null, please add 'PortalProvider' to the root component.");
    throw error;
  } else {
    return tmp[name] || [];
  }
};