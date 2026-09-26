// === Module 4714: ? ===

// Module 4714
import _mod19 from "module_19" /* 19 */;
import _mod4711 from "module_4711" /* 4711 */;

const useContext = _mod19.useContext;

export const usePortalState = (name) => {
  const tmp = useContext(_mod4711.PortalStateContext);
  if (null === tmp) {
    const _Error = Error;
    const error = new Error("'PortalStateContext' cannot be null, please add 'PortalProvider' to the root component.");
    throw error;
  } else {
    return tmp[name] || [];
  }
};