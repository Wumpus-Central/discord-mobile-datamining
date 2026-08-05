// _runtime/04158_usePortal.js
import noop from "noop";

let c3;
let obj1;
({ useCallback: obj1, useContext: c3 } = noop);

export const usePortal = () => {
  let str = arg0;
  if (arg0 === undefined) {
    str = "root";
  }
  let dependencyMap;
  const tmp = callback2(str(4159).PortalDispatchContext);
  dependencyMap = tmp;
  if (null === tmp) {
    const _Error = Error;
    const error = new Error("'PortalDispatchContext' cannot be null, please add 'PortalProvider' to the root component.");
    throw error;
  } else {
    const tmp3 = callback(() => {
      _undefined({ type: str(_undefined[2]).ACTIONS.REGISTER_HOST, hostName: str });
    }, []);
    const tmp5 = callback((portalName, node) => {
      _undefined({ type: str(_undefined[2]).ACTIONS.ADD_UPDATE_PORTAL, hostName: str, portalName, node });
    }, []);
    const obj = { registerHost: null, deregisterHost: null, addPortal: null, updatePortal: null, removePortal: null };
    obj[0] = tmp3;
    obj[1] = callback(() => {
      _undefined({ type: str(_undefined[2]).ACTIONS.DEREGISTER_HOST, hostName: str });
    }, []);
    obj[2] = tmp5;
    obj[3] = tmp5;
    obj[4] = callback((portalName) => {
      _undefined({ type: str(_undefined[2]).ACTIONS.REMOVE_PORTAL, hostName: str, portalName });
    }, []);
    return obj;
  }
};