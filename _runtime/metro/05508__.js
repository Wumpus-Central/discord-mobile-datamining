// === Module 5508: ? ===

// Module 5508
import _mod19 from "module_19" /* 19 */;
import _mod5505 from "module_5505" /* 5505 */;

const useContext = _mod19.useContext;

export (name) => {
  const tmp = useContext(_mod5505.PortalStateContext);
  if (null === tmp) {
    const _Error = Error;
    const error = new Error("'PortalStateContext' cannot be null, please add 'PortalProvider' to the root component.");
    throw error;
  } else {
    return tmp[name] || [];
  }
}