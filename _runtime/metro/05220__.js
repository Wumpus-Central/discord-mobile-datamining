// === Module 5220: ? ===

// Module 5220
import _mod19 from "module_19" /* 19 */;
import _mod5217 from "module_5217" /* 5217 */;

const useContext = _mod19.useContext;

export (name) => {
  const tmp = useContext(_mod5217.PortalStateContext);
  if (null === tmp) {
    const _Error = Error;
    const error = new Error("'PortalStateContext' cannot be null, please add 'PortalProvider' to the root component.");
    throw error;
  } else {
    return tmp[name] || [];
  }
}