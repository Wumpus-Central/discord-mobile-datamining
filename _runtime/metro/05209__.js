// === Module 5209: ? ===

// Module 5209
import _mod19 from "module_19" /* 19 */;
import _mod5206 from "module_5206" /* 5206 */;

const useContext = _mod19.useContext;

export (name) => {
  const tmp = useContext(_mod5206.PortalStateContext);
  if (null === tmp) {
    const _Error = Error;
    const error = new Error("'PortalStateContext' cannot be null, please add 'PortalProvider' to the root component.");
    throw error;
  } else {
    return tmp[name] || [];
  }
}