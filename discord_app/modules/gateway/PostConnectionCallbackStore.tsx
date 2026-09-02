// === Module 5577: processCallbacks ===

// Module 5577 (processCallbacks)
import closure_0 from "initialize" /* 5578 */;
import closure_1 from "_handleConnectionOpen" /* 5229 */;
import importDefaultResult from "dispatcher" /* 706 */;

function processCallbacks() {
  if (null == store.getType()) {
    const item = arr.forEach((arg0) => {
      closure_0 = arg0;
      setImmediate(() => callback());
    });
    arr = [];
  }
}
let closure_2 = [];
const subscription = importDefaultResult.subscribe("CONNECTION_OPEN", processCallbacks);
const subscription1 = importDefaultResult.subscribe("CONNECTION_RESUMED", processCallbacks);
const importDefaultResult1 = importDefaultResult;
const subscription2 = importDefaultResult.subscribe("NUF_COMPLETE", processCallbacks);
const importDefaultResult2 = importDefaultResult;
const result = require("set").fileFinishedImporting("modules/gateway/PostConnectionCallbackStore.tsx");

export const addPostConnectionCallback = function addPostConnectionCallback(arg0) {
  if (connectedOrOverlay.isConnectedOrOverlay()) {
    if (null == store.getType()) {
      store = arg0;
      const _setImmediate = setImmediate;
      setImmediate(() => callback());
    }
  }
};