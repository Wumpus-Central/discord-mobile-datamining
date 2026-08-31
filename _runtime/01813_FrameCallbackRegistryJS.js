// _runtime/01813_FrameCallbackRegistryJS.js
import _createClassDefault from "metro/00042__createClass.js";
import isReanimated3 from "01697_isReanimated3.js";
import t from "01814_t.js";
import closure_3 from "metro/00041__classCallCheck.js";

const FrameCallbackRegistryJS = global;
require = arg1;
let closure_4 = { code: "function pnpm_FrameCallbackRegistryJSTs1(){const{callback,callbackId}=this.__closure;global._frameCallbackRegistry.registerFrameCallback(callback,callbackId);}" };
let closure_5 = { code: "function pnpm_FrameCallbackRegistryJSTs2(){const{callbackId}=this.__closure;global._frameCallbackRegistry.unregisterFrameCallback(callbackId);}" };
let closure_6 = { code: "function pnpm_FrameCallbackRegistryJSTs3(){const{callbackId,state}=this.__closure;global._frameCallbackRegistry.manageStateFrameCallback(callbackId,state);}" };
class FrameCallbackRegistryJS {
  constructor() {
    tmp = closure_3(this, FrameCallbackRegistryJS);
    this.nextCallbackId = 0;
    obj = require("t");
    prepareUIRegistryResult = obj.prepareUIRegistry();
    return;
  }
}
const items = [
  {
    key: "registerFrameCallback",
    value: function registerFrameCallback(arg0) {
      closure_0 = arg0;
      if (arg0) {
        const self = this;
        const nextCallbackId = this.nextCallbackId;
        this.nextCallbackId = this.nextCallbackId + 1;
        let obj = nextCallbackId(1697);
        const fn = function c() {
          const result = obj._frameCallbackRegistry.registerFrameCallback(obj, nextCallbackId);
        };
        obj = { callback: null, callbackId: null };
        obj[0] = arg0;
        obj[1] = nextCallbackId;
        fn.__closure = obj;
        fn.__workletHash = 11361563554462;
        fn.__initData = closure_4;
        obj.runOnUI(fn)();
        return nextCallbackId;
      } else {
        return -1;
      }
    }
  },
  {
    key: "unregisterFrameCallback",
    value: function unregisterFrameCallback(callbackId) {
      closure_0 = callbackId;
      const fn = function c() {
        const result = obj._frameCallbackRegistry.unregisterFrameCallback(obj);
      };
      fn.__closure = { callbackId };
      fn.__workletHash = 9182274559334;
      fn.__initData = closure_5;
      isReanimated3.runOnUI(fn)();
    }
  },
  {
    key: "manageStateFrameCallback",
    value: function manageStateFrameCallback(callbackId, state) {
      closure_0 = callbackId;
      const _require = state;
      const fn = function t() {
        const result = obj._frameCallbackRegistry.manageStateFrameCallback(obj, closure_1);
      };
      fn.__closure = { callbackId, state };
      fn.__workletHash = 5244475777443;
      fn.__initData = closure_6;
      require("01697_isReanimated3.js").runOnUI(fn)();
    }
  }
];

export default _createClassDefault(FrameCallbackRegistryJS, items);