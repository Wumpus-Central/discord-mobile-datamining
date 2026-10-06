// === Module 4760: ? ===

// Module 4760
import ACTIONS from "ACTIONS" /* 4762 */;
import react from "react" /* 19 */;

let dependencyMap;

let c2;
let c3;
({ useCallback: c2, useContext: c3 } = react);

export const usePortal = function() {
  let closure_1;
  let str = hostName;
  if (hostName === undefined) {
    str = "root";
  }
  const tmp = closure_3(str(4761).PortalDispatchContext);
  dependencyMap = tmp;
  if (null === tmp) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("'PortalDispatchContext' cannot be null, please add 'PortalProvider' to the root component.");
    throw error;
  } else {
    const tmp3 = closure_2(() => {
      const obj = { type: ACTIONS.ACTIONS.REGISTER_HOST, hostName: str };
      closure_1(obj);
    }, []);
    const tmp4 = closure_2(() => {
      const obj = { type: ACTIONS.ACTIONS.DEREGISTER_HOST, hostName: str };
      closure_1(obj);
    }, []);
    const tmp5 = closure_2((portalName, node) => {
      const obj = { type: ACTIONS.ACTIONS.ADD_UPDATE_PORTAL, hostName: str, portalName, node };
      closure_1(obj);
    }, []);
    let obj = {
      registerHost: tmp3,
      deregisterHost: tmp4,
      addPortal: tmp5,
      updatePortal: tmp5,
      removePortal: closure_2((portalName) => {
          const obj = { type: ACTIONS.ACTIONS.REMOVE_PORTAL, hostName: str, portalName };
          closure_1(obj);
        }, [])
    };
    return obj;
  }
};