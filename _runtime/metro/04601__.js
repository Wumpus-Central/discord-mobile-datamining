// _runtime/metro/04601__.js
import _mod19 from "00019__.js";
import _mod4598 from "04598__.js";

const useContext = _mod19.useContext;

export const usePortalState = (name) => {
  const tmp = useContext(_mod4598.PortalStateContext);
  if (null === tmp) {
    const _Error = Error;
    const error = new Error("'PortalStateContext' cannot be null, please add 'PortalProvider' to the root component.");
    throw error;
  } else {
    return tmp[name] || [];
  }
};
