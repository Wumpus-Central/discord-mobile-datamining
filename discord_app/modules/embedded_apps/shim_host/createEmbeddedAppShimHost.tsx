// === Module 19383: createEmbeddedAppShimHost ===

// Module 19383 (createEmbeddedAppShimHost)
import _mod12 from "module_12" /* 12 */;
import protocol from "protocol" /* 19379 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let result = size.fileFinishedImporting("modules/embedded_apps/shim_host/createEmbeddedAppShimHost.tsx");

export function createEmbeddedAppShimHost(arg0) {
  ({ onConnect: require, onMessage } = arg0);
  const map = new Map();
  closure_3 = require("connection").createChildConnector(onMessage, () => {
    map.clear();
    require(obj2);
  });
  const obj2 = {
    offer(arg0) {
      return closure_3.offer(arg0);
    },
    dispatch(type) {
      if (!obj.isEqual(map.get(type.type), type)) {
        const result = map.set(type.type, type);
        closure_3.dispatch(type);
      }
      obj = _mod12;
    },
    close() {
      closure_3.close();
      onMessage({ type: protocol.ChildToParentEvent.DISCONNECTED });
    }
  };
  return obj2;
}