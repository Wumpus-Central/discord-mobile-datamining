// _runtime/01766_FrameCallbackRegistryJS.js
import _classCallCheck from "_classCallCheck";
import _createClass from "_createClass";

const FrameCallbackRegistryJS = global;
const require = arg1;
let closure_4 = { code: "function pnpm_FrameCallbackRegistryJSTs1(){const{callback,callbackId}=this.__closure;global._frameCallbackRegistry.registerFrameCallback(callback,callbackId);}" };
let closure_5 = { code: "function pnpm_FrameCallbackRegistryJSTs2(){const{callbackId}=this.__closure;global._frameCallbackRegistry.unregisterFrameCallback(callbackId);}" };
let closure_6 = { code: "function pnpm_FrameCallbackRegistryJSTs3(){const{callbackId,state}=this.__closure;global._frameCallbackRegistry.manageStateFrameCallback(callbackId,state);}" };
class FrameCallbackRegistryJS {
  constructor() {
    tmp = outer1_3(this, FrameCallbackRegistryJS);
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
      let closure_0 = arg0;
      if (arg0) {
        const self = this;
        const nextCallbackId = this.nextCallbackId;
        this.nextCallbackId = this.nextCallbackId + 1;
        let obj = nextCallbackId(1650);
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
      let closure_0 = callbackId;
      const fn = function c() {
        const result = obj._frameCallbackRegistry.unregisterFrameCallback(obj);
      };
      fn.__closure = { callbackId };
      fn.__workletHash = 9182274559334;
      fn.__initData = closure_5;
      require(1650) /* isReanimated3 */.runOnUI(fn)();
    }
  },
  {
    key: "manageStateFrameCallback",
    value: function manageStateFrameCallback(callbackId, state) {
      let closure_0 = callbackId;
      const _require = state;
      const fn = function t() {
        const result = obj._frameCallbackRegistry.manageStateFrameCallback(obj, closure_1);
      };
      fn.__closure = { callbackId, state };
      fn.__workletHash = 5244475777443;
      fn.__initData = closure_6;
      _require(1650).runOnUI(fn)();
    }
  }
];

export default _createClass(FrameCallbackRegistryJS, items);