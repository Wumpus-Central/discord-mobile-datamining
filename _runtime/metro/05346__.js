// === Module 5346: ? ===

// Module 5346
import _mod19 from "module_19" /* 19 */;
import _mod5343 from "module_5343" /* 5343 */;

const useContext = _mod19.useContext;

export (name) => {
  const tmp = useContext(_mod5343.PortalStateContext);
  if (null === tmp) {
    const _Error = Error;
    const error = new Error("'PortalStateContext' cannot be null, please add 'PortalProvider' to the root component.");
    throw error;
  } else {
    return tmp[name] || [];
  }
}