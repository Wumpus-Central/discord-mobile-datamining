// === Module 5948: PostConnectionCallbackStore ===

// Module 5948 (PostConnectionCallbackStore)
import NewUserStore from "NewUserStore" /* 5949 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5436 */;
import Dispatcher_mod from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

function processCallbacks() {
  if (null == NewUserStore.getType()) {
    const item = closure_2.forEach((item) => {
      setImmediate(() => item());
    });
    closure_2 = [];
  }
}
let closure_2 = [];
let Dispatcher = Dispatcher_mod;
const subscription = Dispatcher.subscribe("CONNECTION_OPEN", processCallbacks);
Dispatcher = Dispatcher_mod;
const subscription1 = Dispatcher.subscribe("CONNECTION_RESUMED", processCallbacks);
Dispatcher = Dispatcher_mod;
const subscription2 = Dispatcher.subscribe("NUF_COMPLETE", processCallbacks);
const result = size.fileFinishedImporting("modules/gateway/PostConnectionCallbackStore.tsx");

export const addPostConnectionCallback = function addPostConnectionCallback(arg0) {
  if (GatewayConnectionStore.isConnectedOrOverlay()) {
    if (null == NewUserStore.getType()) {
      let closure_0 = arg0;
      const _setImmediate = setImmediate;
      setImmediate(() => item());
    }
  }
  closure_2.push(arg0);
};