// _runtime/metro/04438__.js
import _mod19 from "00019__.js";
import _mod4435 from "04435__.js";

const useContext = _mod19.useContext;

export const usePortalState = (arg0) => {
  const tmp = useContext(_mod4435.PortalStateContext);
  if (null === tmp) {
    const _Error = Error;
    const error = new Error("'PortalStateContext' cannot be null, please add 'PortalProvider' to the root component.");
    throw error;
  } else {
    return tmp[arg0] || [];
  }
};
