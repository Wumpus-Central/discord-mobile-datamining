// === Module 5344: ? ===

// Module 5344
import _mod19 from "module_19" /* 19 */;
import _mod5341 from "module_5341" /* 5341 */;

const useContext = _mod19.useContext;

export (name) => {
  const tmp = useContext(_mod5341.PortalStateContext);
  if (null === tmp) {
    const _Error = Error;
    const error = new Error("'PortalStateContext' cannot be null, please add 'PortalProvider' to the root component.");
    throw error;
  } else {
    return tmp[name] || [];
  }
}