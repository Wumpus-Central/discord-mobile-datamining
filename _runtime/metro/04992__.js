// _runtime/metro/04992__.js
import _mod19 from "00019__.js";
import _mod4989 from "04989__.js";

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