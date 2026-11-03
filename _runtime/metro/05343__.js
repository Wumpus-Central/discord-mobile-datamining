// === Module 5343: ? ===

// Module 5343
import _mod19 from "module_19" /* 19 */;
import _mod5340 from "module_5340" /* 5340 */;

const useContext = _mod19.useContext;

export (name) => {
  const tmp = useContext(_mod5340.PortalStateContext);
  if (null === tmp) {
    const _Error = Error;
    const error = new Error("'PortalStateContext' cannot be null, please add 'PortalProvider' to the root component.");
    throw error;
  } else {
    return tmp[name] || [];
  }
}