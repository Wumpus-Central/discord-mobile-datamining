// === Module 18784: createEmbeddedAppShimHost ===

// Module 18784 (createEmbeddedAppShimHost)
import protocol from "protocol" /* 18785 */;
import connection from "connection" /* 18786 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/embedded_apps/shim_host/createEmbeddedAppShimHost.tsx");

export const createEmbeddedAppShimHost = function createEmbeddedAppShimHost(state, arg1) {
  ({ onChildState: require, onDisconnect: dependencyMap } = arg1);
  closure_3 = connection.createChildConnector(function handleMessage(type) {
    if (type.type === protocol.ChildToParentEvent.STATE_UPDATED) {
      closure_1_0(type.state);
    } else if (type.type === protocol.ChildToParentEvent.DISCONNECTED) {
      dependencyMap();
    }
  }, function sendParentState() {
    closure_3.dispatch({ type: protocol.ParentToChildEvent.STATE_UPDATED, state });
  });
  return {
    offer(arg0) {
      return closure_3.offer(arg0);
    },
    setParentState(parentState) {
      closure_1 = state;
      const keys = Object.keys(parentState);
      if (!keys.every((item) => parentState[item] === closure_1[item])) {
        state = parentState;
        const obj = { type: protocol.ParentToChildEvent.STATE_UPDATED, state };
        closure_3.dispatch(obj);
      }
    },
    close() {
      closure_3.close();
      dependencyMap();
    }
  };
};