// === Module 5366: ? ===

// Module 5366
import _mod19 from "module_19" /* 19 */;
import _mod5363 from "module_5363" /* 5363 */;

const useContext = _mod19.useContext;

export (name) => {
  const tmp = useContext(_mod5363.PortalStateContext);
  if (null === tmp) {
    const _Error = Error;
    const error = new Error("'PortalStateContext' cannot be null, please add 'PortalProvider' to the root component.");
    throw error;
  } else {
    return tmp[name] || [];
  }
}