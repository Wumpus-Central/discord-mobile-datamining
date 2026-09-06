// discord_app/modules/gateway/PostConnectionCallbackStore.tsx
import NewUserStore from "../nuf/NewUserStore.tsx";
import GatewayConnectionStore from "GatewayConnectionStore.tsx";
import Dispatcher from "../../Dispatcher.tsx";

function processCallbacks() {
  if (null == NewUserStore.getType()) {
    const item = closure_2.forEach((item) => {
      setImmediate(() => item());
    });
    closure_2 = [];
  }
}
let closure_2 = [];
const subscription = Dispatcher.subscribe("CONNECTION_OPEN", processCallbacks);
const subscription1 = Dispatcher.subscribe("CONNECTION_RESUMED", processCallbacks);
const subscription2 = Dispatcher.subscribe("NUF_COMPLETE", processCallbacks);
const size = fn(2);
const result = size.fileFinishedImporting("modules/gateway/PostConnectionCallbackStore.tsx");

export const addPostConnectionCallback = function addPostConnectionCallback(arg0) {
  if (GatewayConnectionStore.isConnectedOrOverlay()) {
    if (null == NewUserStore.getType()) {
      closure_0 = arg0;
      const _setImmediate = setImmediate;
      setImmediate(() => item());
    }
  }
  closure_2.push(arg0);
};
