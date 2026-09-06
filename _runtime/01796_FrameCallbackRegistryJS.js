// _runtime/01796_FrameCallbackRegistryJS.js
import _createClassDefault from "metro/00042__createClass.js";
import runOnRuntime from "01680_runOnRuntime.js";
import _classCallCheck from "metro/00041__classCallCheck.js";

const FrameCallbackRegistryJS = global;
require = arg1;
const __initData = {
  code: "function pnpm_FrameCallbackRegistryJSTs1(){const{callback,callbackId}=this.__closure;global._frameCallbackRegistry.registerFrameCallback(callback,callbackId);}",
};
const __initData2 = {
  code: "function pnpm_FrameCallbackRegistryJSTs2(){const{callbackId}=this.__closure;global._frameCallbackRegistry.unregisterFrameCallback(callbackId);}",
};
const __initData3 = {
  code: "function pnpm_FrameCallbackRegistryJSTs3(){const{callbackId,state}=this.__closure;global._frameCallbackRegistry.manageStateFrameCallback(callbackId,state);}",
};
class FrameCallbackRegistryJS {
  constructor() {
    tmp = closure_3(this, FrameCallbackRegistryJS);
    this.nextCallbackId = 0;
    obj = closure_1(c2[2]);
    prepareUIRegistryResult = obj.prepareUIRegistry();
    return;
  }
}
const entry = {
  key: "registerFrameCallback",
  value: function registerFrameCallback(callback) {
    if (callback) {
      const self = this;
      this.nextCallbackId = this.nextCallbackId + 1;
      nextCallbackId(1680);
      const fn = function c() {
        const result = FrameCallbackRegistryJS._frameCallbackRegistry.registerFrameCallback(closure_0, nextCallbackId);
      };
      const obj = { callback, callbackId: this.nextCallbackId };
      fn.__closure = obj;
      fn.__workletHash = 11361563554462;
      fn.__initData = __initData;
      obj.runOnUI(fn)();
      return this.nextCallbackId;
    } else {
      return -1;
    }
  },
};
const items = [
  entry,
  {
    key: "unregisterFrameCallback",
    value: function unregisterFrameCallback(callbackId) {
      closure_0 = callbackId;
      const fn = function c() {
        const result = FrameCallbackRegistryJS._frameCallbackRegistry.unregisterFrameCallback(closure_0);
      };
      fn.__closure = { callbackId };
      fn.__workletHash = 9182274559334;
      fn.__initData = __initData2;
      runOnRuntime.runOnUI(fn)();
    },
  },
  {
    key: "manageStateFrameCallback",
    value: function manageStateFrameCallback(callbackId, state) {
      closure_0 = callbackId;
      _require = state;
      const fn = function t() {
        const result = FrameCallbackRegistryJS._frameCallbackRegistry.manageStateFrameCallback(closure_0, closure_1);
      };
      fn.__closure = { callbackId, state };
      fn.__workletHash = 5244475777443;
      fn.__initData = __initData3;
      require("runOnRuntime").runOnUI(fn)();
    },
  },
];

export default _createClassDefault(FrameCallbackRegistryJS, items);
