// _runtime/01909_FrameCallbackRegistryJS.js
import _createClassDefault from "metro/00042__createClass.js";
import _mod1708 from "metro/01708__.js";
import _classCallCheck from "metro/00041__classCallCheck.js";

const FrameCallbackRegistryJS = global;
require = arg1;
let closure_4 = {
  code: "(function pnpm_FrameCallbackRegistryJSTs1(){let[callback,callbackId]=this.__closure;global._frameCallbackRegistry.registerFrameCallback(callback,callbackId);})",
};
let closure_5 = {
  code: "(function pnpm_FrameCallbackRegistryJSTs2(){let[callbackId]=this.__closure;global._frameCallbackRegistry.unregisterFrameCallback(callbackId);})",
};
let closure_6 = {
  code: "(function pnpm_FrameCallbackRegistryJSTs3(){let[callbackId,state]=this.__closure;global._frameCallbackRegistry.manageStateFrameCallback(callbackId,state);})",
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
  value: function registerFrameCallback(arg0) {
    if (arg0) {
      const self = this;
      this.nextCallbackId = this.nextCallbackId + 1;
      items = [closure_4, arg0, this.nextCallbackId];
      c0 = undefined;
      _require = undefined;
      [tmp5, tmp6, tmp7] = items;
      function pnpm_FrameCallbackRegistryJSTs1() {
        const result = FrameCallbackRegistryJS._frameCallbackRegistry.registerFrameCallback(c0, c1);
      }
      const items1 = [tmp6, tmp7];
      pnpm_FrameCallbackRegistryJSTs1.__closure = items1;
      pnpm_FrameCallbackRegistryJSTs1.__workletHash = 1727987270919;
      pnpm_FrameCallbackRegistryJSTs1.__initData = tmp5;
      require("metro/01708__.js").scheduleOnUI(pnpm_FrameCallbackRegistryJSTs1);
      return this.nextCallbackId;
    } else {
      return -1;
    }
  },
};
let items = [
  entry,
  {
    key: "unregisterFrameCallback",
    value: function unregisterFrameCallback(arg0) {
      items = [closure_5, arg0];
      c0 = undefined;
      [tmp, tmp2] = items;
      function pnpm_FrameCallbackRegistryJSTs2() {
        const result = FrameCallbackRegistryJS._frameCallbackRegistry.unregisterFrameCallback(c0);
      }
      const items1 = [tmp2];
      pnpm_FrameCallbackRegistryJSTs2.__closure = items1;
      pnpm_FrameCallbackRegistryJSTs2.__workletHash = 16252844434239;
      pnpm_FrameCallbackRegistryJSTs2.__initData = tmp;
      _mod1708.scheduleOnUI(pnpm_FrameCallbackRegistryJSTs2);
    },
  },
  {
    key: "manageStateFrameCallback",
    value: function manageStateFrameCallback(arg0, arg1) {
      items = [closure_6, arg0, arg1];
      c0 = undefined;
      _require = undefined;
      [tmp, tmp2, tmp3] = items;
      function pnpm_FrameCallbackRegistryJSTs3() {
        const result = FrameCallbackRegistryJS._frameCallbackRegistry.manageStateFrameCallback(c0, c1);
      }
      const items1 = [tmp2, tmp3];
      pnpm_FrameCallbackRegistryJSTs3.__closure = items1;
      pnpm_FrameCallbackRegistryJSTs3.__workletHash = 10816624609914;
      pnpm_FrameCallbackRegistryJSTs3.__initData = tmp;
      require("metro/01708__.js").scheduleOnUI(pnpm_FrameCallbackRegistryJSTs3);
    },
  },
];

export default _createClassDefault(FrameCallbackRegistryJS, items);
