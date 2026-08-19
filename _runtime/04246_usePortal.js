// _runtime/04246_usePortal.js
import noop from "00019_noop.js";

({ useCallback: obj1, useContext: c3 } = noop);

export const usePortal = (hostName) => {
  let str = hostName;
  if (hostName === undefined) {
    str = "root";
  }
  const tmp = callback2(str(4247).PortalDispatchContext);
  dependencyMap = tmp;
  if (null === tmp) {
    const _Error = Error;
    error = new Error("'PortalDispatchContext' cannot be null, please add 'PortalProvider' to the root component.");
    throw error;
  } else {
    const tmp3 = callback(() => {
      dependencyMap({ type: str(4248).ACTIONS.REGISTER_HOST, hostName: str });
    }, []);
    const tmp5 = callback((portalName, node) => {
      dependencyMap({ type: str(4248).ACTIONS.ADD_UPDATE_PORTAL, hostName: str, portalName, node });
    }, []);
    const obj = { registerHost: null, deregisterHost: null, addPortal: null, updatePortal: null, removePortal: null };
    obj[0] = tmp3;
    obj[1] = callback(() => {
      dependencyMap({ type: str(4248).ACTIONS.DEREGISTER_HOST, hostName: str });
    }, []);
    obj[2] = tmp5;
    obj[3] = tmp5;
    obj[4] = callback((portalName) => {
      dependencyMap({ type: str(4248).ACTIONS.REMOVE_PORTAL, hostName: str, portalName });
    }, []);
    return obj;
  }
};