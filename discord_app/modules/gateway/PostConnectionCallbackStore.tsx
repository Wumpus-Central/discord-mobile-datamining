// === Module 4493: processCallbacks ===

// Module 4493 (processCallbacks)
import initialize from "initialize" /* 4494 */;
import _handleConnectionOpen from "_handleConnectionOpen" /* 4495 */;
import importDefaultResult from "dispatcher" /* 709 */;

function processCallbacks() {
  if (null == store.getType()) {
    const item = arr.forEach((item, index) => {
      closure_0 = item;
      setImmediate(() => item());
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
const result = require("obj132").fileFinishedImporting("modules/gateway/PostConnectionCallbackStore.tsx");

export const addPostConnectionCallback = function addPostConnectionCallback(arg0) {
  if (connectedOrOverlay.isConnectedOrOverlay()) {
    if (null == store.getType()) {
      store = arg0;
      const _setImmediate = setImmediate;
      setImmediate(() => item());
    }
  }
};