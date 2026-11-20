// === Module 4992: ? ===

// Module 4992
import _mod19 from "module_19" /* 19 */;
import _mod4989 from "module_4989" /* 4989 */;

const useContext = _mod19.useContext;

export (name) => {
  const tmp = useContext(_mod4989.PortalStateContext);
  if (null === tmp) {
    const _Error = Error;
    const error = new Error("'PortalStateContext' cannot be null, please add 'PortalProvider' to the root component.");
    throw error;
  } else {
    return tmp[name] || [];
  }
}