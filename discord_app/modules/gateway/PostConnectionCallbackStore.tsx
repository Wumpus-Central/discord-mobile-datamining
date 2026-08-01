// === Module 6697: processCallbacks ===

// Module 6697 (processCallbacks)
import initialize from "initialize";
import _handleConnectionOpen from "_handleConnectionOpen";
import importDefaultResult from "dispatcher";
import importDefaultResult1 from "dispatcher";
import importDefaultResult2 from "dispatcher";

function processCallbacks() {
  if (null == store.getType()) {
    const item = arr.forEach((arg0) => {
      let initialize = arg0;
      setImmediate(() => callback());
    });
    arr = [];
  }
}
let closure_2 = [];
const subscription = require("dispatcher").subscribe("CONNECTION_OPEN", processCallbacks);
const subscription1 = require("dispatcher").subscribe("CONNECTION_RESUMED", processCallbacks);
const subscription2 = require("dispatcher").subscribe("NUF_COMPLETE", processCallbacks);
const result = require("dispatcher").fileFinishedImporting("modules/gateway/PostConnectionCallbackStore.tsx");

export const addPostConnectionCallback = function addPostConnectionCallback(arg0) {
  if (connectedOrOverlay.isConnectedOrOverlay()) {
    if (null == store.getType()) {
      store = arg0;
      const _setImmediate = setImmediate;
      setImmediate(() => callback());
    }
  }
};