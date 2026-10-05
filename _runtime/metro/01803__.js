// === Module 1803: ? ===

// Module 1803
import _createClassDefault from "_createClass" /* 42 */;
import startMapper from "startMapper" /* 1687 */;
import prepareUIRegistry from "prepareUIRegistry" /* 1804 */;
import _classCallCheck from "_classCallCheck" /* 41 */;

const require = globalThis.__r;
let _require;

const __initData = { code: "function pnpm_FrameCallbackRegistryJSTs1(){const{callback,callbackId}=this.__closure;global._frameCallbackRegistry.registerFrameCallback(callback,callbackId);}" };
const __initData2 = { code: "function pnpm_FrameCallbackRegistryJSTs2(){const{callbackId}=this.__closure;global._frameCallbackRegistry.unregisterFrameCallback(callbackId);}" };
const __initData3 = { code: "function pnpm_FrameCallbackRegistryJSTs3(){const{callbackId,state}=this.__closure;global._frameCallbackRegistry.manageStateFrameCallback(callbackId,state);}" };
class FrameCallbackRegistryJS {
  constructor() {
    _classCallCheck(this, FrameCallbackRegistryJS);
    this.nextCallbackId = 0;
    const obj = prepareUIRegistry;
    obj.prepareUIRegistry();
  }
}
const entry = {
  key: "registerFrameCallback",
  value: function registerFrameCallback(callback) {
    if (callback) {
      const self = this;
      const nextCallbackId = this.nextCallbackId;
      this.nextCallbackId = this.nextCallbackId + 1;
      const fn = function c() {
        const _frameCallbackRegistry = global._frameCallbackRegistry;
        const result = _frameCallbackRegistry.registerFrameCallback(callback, nextCallbackId);
      };
      const obj2 = { callback, callbackId: nextCallbackId };
      fn.__closure = obj2;
      fn.__workletHash = 11361563554462;
      fn.__initData = __initData;
      const obj = nextCallbackId(1687);
      obj.runOnUI(fn)();
      return nextCallbackId;
    } else {
      return -1;
    }
  }
};
const items = [
  entry,
  {
    key: "unregisterFrameCallback",
    value: function unregisterFrameCallback(callbackId) {
      let closure_0 = callbackId;
      const fn = function c() {
        const _frameCallbackRegistry = global._frameCallbackRegistry;
        const result = _frameCallbackRegistry.unregisterFrameCallback(callbackId);
      };
      fn.__closure = { callbackId };
      fn.__workletHash = 9182274559334;
      fn.__initData = __initData2;
      const obj = startMapper;
      obj.runOnUI(fn)();
    }
  },
  {
    key: "manageStateFrameCallback",
    value: function manageStateFrameCallback(callbackId, state) {
      let closure_0 = callbackId;
      _require = state;
      const fn = function t() {
        const _frameCallbackRegistry = global._frameCallbackRegistry;
        const result = _frameCallbackRegistry.manageStateFrameCallback(callbackId, state);
      };
      fn.__closure = { callbackId, state };
      fn.__workletHash = 5244475777443;
      fn.__initData = __initData3;
      const obj = require("startMapper");
      obj.runOnUI(fn)();
    }
  }
];

export default _createClassDefault(FrameCallbackRegistryJS, items);