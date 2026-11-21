// === Module 5111: ? ===

// Module 5111
import _mod19 from "module_19" /* 19 */;
import _mod5108 from "module_5108" /* 5108 */;

const useContext = _mod19.useContext;

export (name) => {
  const tmp = useContext(_mod5108.PortalStateContext);
  if (null === tmp) {
    const _Error = Error;
    const error = new Error("'PortalStateContext' cannot be null, please add 'PortalProvider' to the root component.");
    throw error;
  } else {
    return tmp[name] || [];
  }
}