// === Module 4434: ? ===

// Module 4434
import ACTIONS from "ACTIONS" /* 4436 */;
import noop from "module_19" /* 19 */;

({ useCallback: c2, useContext: c3 } = noop);

export const usePortal = () => {
  let str = hostName;
  if (hostName === undefined) {
    str = "root";
  }
  const tmp = closure_3(str(4435).PortalDispatchContext);
  dependencyMap = tmp;
  if (null === tmp) {
    const _Error = Error;
    const error = new Error("'PortalDispatchContext' cannot be null, please add 'PortalProvider' to the root component.");
    throw error;
  } else {
    const tmp3 = closure_2(() => {
      closure_1({ type: ACTIONS.ACTIONS.REGISTER_HOST, hostName: str });
    }, []);
    const tmp5 = closure_2((portalName, node) => {
      closure_1({ type: ACTIONS.ACTIONS.ADD_UPDATE_PORTAL, hostName: str, portalName, node });
    }, []);
    const obj = {
      registerHost: tmp3,
      deregisterHost: closure_2(() => {
          closure_1({ type: ACTIONS.ACTIONS.DEREGISTER_HOST, hostName: str });
        }, []),
      addPortal: tmp5,
      updatePortal: tmp5,
      removePortal: closure_2((portalName) => {
          closure_1({ type: ACTIONS.ACTIONS.REMOVE_PORTAL, hostName: str, portalName });
        }, [])
    };
    return obj;
  }
};