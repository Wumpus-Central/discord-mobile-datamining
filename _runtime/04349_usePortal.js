// _runtime/04349_usePortal.js
import noop from "00019_noop.js";

({ useCallback: obj1, useContext: c3 } = noop);

export const usePortal = () => {
  let str = arg0;
  if (arg0 === undefined) {
    str = "root";
  }
  dependencyMap = undefined;
  const tmp = callback2(str(4350).PortalDispatchContext);
  dependencyMap = tmp;
  if (null === tmp) {
    const _Error = Error;
    error = new Error("'PortalDispatchContext' cannot be null, please add 'PortalProvider' to the root component.");
    throw error;
  } else {
    const tmp3 = callback(() => {
      dependencyMap({ type: str(4351).ACTIONS.REGISTER_HOST, hostName: str });
    }, []);
    const tmp5 = callback((portalName, node) => {
      dependencyMap({ type: str(4351).ACTIONS.ADD_UPDATE_PORTAL, hostName: str, portalName, node });
    }, []);
    const obj = { registerHost: null, deregisterHost: null, addPortal: null, updatePortal: null, removePortal: null };
    obj[0] = tmp3;
    obj[1] = callback(() => {
      dependencyMap({ type: str(4351).ACTIONS.DEREGISTER_HOST, hostName: str });
    }, []);
    obj[2] = tmp5;
    obj[3] = tmp5;
    obj[4] = callback((portalName) => {
      dependencyMap({ type: str(4351).ACTIONS.REMOVE_PORTAL, hostName: str, portalName });
    }, []);
    return obj;
  }
};