// === Module 11340: createEmbeddedAppShimMessageHandler ===

// Module 11340 (createEmbeddedAppShimMessageHandler)
import bridgeProtocol from "bridgeProtocol" /* 11342 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/embedded_apps/shim_host/native/createEmbeddedAppShimMessageHandler.tsx");

export const createEmbeddedAppShimMessageHandler = function createEmbeddedAppShimMessageHandler(id, shellBridgeSecret, arg2) {
  closure_2 = arg2;
  const map = new Map();
  return {
    handleMessage(event) {
      if (null != event) {
        if (typeof event === "object") {
          const _Object = Object;
          hasOwnProperty = Object.prototype.hasOwnProperty;
          const call = hasOwnProperty.call;
          const SHELL_BRIDGE_KEY = id(shellBridgeSecret[1]).SHELL_BRIDGE_KEY;
          if (typeof call === "unknown" ? hasOwnProperty(SHELL_BRIDGE_KEY) : call(event, SHELL_BRIDGE_KEY)) {
            let flag = event[id(undefined, shellBridgeSecret[1]).SHELL_BRIDGE_KEY] !== shellBridgeSecret;
            if (!flag) {
              if ("open" === event.event) {
                const pipeId = event.pipeId;
                const obj = {
                  post(arg0) {
                              closure_2("" + bridgeProtocol.SHELL_BRIDGE_GLOBAL + ".post(" + pipeId + ", " + JSON.stringify(arg0) + ");");
                            },
                  listen(arg0) {
                              const result = map.set(pipeId, arg0);
                            },
                  close() {
                              map.delete(pipeId);
                              closure_2("" + bridgeProtocol.SHELL_BRIDGE_GLOBAL + ".close(" + pipeId + ");");
                            }
                };
                id(shellBridgeSecret[0]).shimPipeOpened(pipeId, obj);
                flag = true;
                const tmp8Result = id(shellBridgeSecret[0]);
              } else {
                value = map.get(event.pipeId);
                flag = true;
                if (value != null) {
                  value(event.message);
                  flag = true;
                }
              }
            }
            return flag;
          }
        }
      }
      return false;
    },
    close() {
      map.clear();
    }
  };
};