// _runtime/metro/05215__.js
import _mod19 from "00019__.js";
import _mod5212 from "05212__.js";

const useContext = _mod19.useContext;

export (name) => {
  const tmp = useContext(_mod5212.PortalStateContext);
  if (null === tmp) {
    const _Error = Error;
    const error = new Error("'PortalStateContext' cannot be null, please add 'PortalProvider' to the root component.");
    throw error;
  } else {
    return tmp[name] || [];
  }
}