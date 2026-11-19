// === Module 4990: ? ===

// Module 4990
import _mod19 from "module_19" /* 19 */;
import _mod4987 from "module_4987" /* 4987 */;

const useContext = _mod19.useContext;

export (name) => {
  const tmp = useContext(_mod4987.PortalStateContext);
  if (null === tmp) {
    const _Error = Error;
    const error = new Error("'PortalStateContext' cannot be null, please add 'PortalProvider' to the root component.");
    throw error;
  } else {
    return tmp[name] || [];
  }
}