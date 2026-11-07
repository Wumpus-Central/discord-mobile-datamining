// === Module 5336: ? ===

// Module 5336
import _mod19 from "module_19" /* 19 */;
import _mod5333 from "module_5333" /* 5333 */;

const useContext = _mod19.useContext;

export (name) => {
  const tmp = useContext(_mod5333.PortalStateContext);
  if (null === tmp) {
    const _Error = Error;
    const error = new Error("'PortalStateContext' cannot be null, please add 'PortalProvider' to the root component.");
    throw error;
  } else {
    return tmp[name] || [];
  }
}