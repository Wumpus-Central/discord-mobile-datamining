// _runtime/metro/04517__.js
import _mod19 from "00019__.js";
import _mod4514 from "04514__.js";

const useContext = _mod19.useContext;

export const usePortalState = (name) => {
  const tmp = useContext(_mod4514.PortalStateContext);
  if (null === tmp) {
    const _Error = Error;
    const error = new Error("'PortalStateContext' cannot be null, please add 'PortalProvider' to the root component.");
    throw error;
  } else {
    return tmp[name] || [];
  }
};
