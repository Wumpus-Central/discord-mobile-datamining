// === Module 5115: ? ===

// Module 5115
import _mod19 from "module_19" /* 19 */;
import _mod5112 from "module_5112" /* 5112 */;

const useContext = _mod19.useContext;

export (name) => {
  const tmp = useContext(_mod5112.PortalStateContext);
  if (null === tmp) {
    const _Error = Error;
    const error = new Error("'PortalStateContext' cannot be null, please add 'PortalProvider' to the root component.");
    throw error;
  } else {
    return tmp[name] || [];
  }
}