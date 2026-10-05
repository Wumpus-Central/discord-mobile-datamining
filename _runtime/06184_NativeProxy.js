// === Module 6184: NativeProxy ===

// Module 6184 (NativeProxy)
import react_nativeDefault from "react-native" /* 6169 */;

const require = globalThis.__r;
let _require, dependencyMap;

let fn;
let obj = {
  createGestureHandler(handlerName, handlerTag, config) {
    _require = handlerName;
    let closure_1 = handlerTag;
    dependencyMap = config;
    let obj = require("selectProperties");
    const result = obj.scheduleOperationToBeFlushed(() => {
      let obj = config;
      const createGestureHandler = react_nativeDefault.createGestureHandler;
      if (!config) {
        obj = {};
      }
      createGestureHandler(handlerName, handlerTag, obj);
    });
  },
  setGestureHandlerConfig(handlerTag, result) {
    _require = handlerTag;
    let closure_1 = result;
    let obj = require("selectProperties");
    result = obj.scheduleOperationToBeFlushed(() => {
      const obj = react_nativeDefault;
      result = obj.setGestureHandlerConfig(handlerTag, closure_1);
    });
  },
  updateGestureHandlerConfig: fn,
  dropGestureHandler(handlerTag) {
    _require = handlerTag;
    let obj = require("selectProperties");
    const result = obj.scheduleOperationToBeFlushed(() => {
      const obj = react_nativeDefault;
      obj.dropGestureHandler(handlerTag);
    });
  },
  configureRelations(arg0, arg1) {
    let closure_0;
    _require = arg0;
    let closure_1 = arg1;
    let obj = require("selectProperties");
    const result = obj.scheduleOperationToBeFlushed(() => {
      const obj = react_nativeDefault;
      obj.configureRelations(closure_0, closure_1);
    });
  },
  installUIRuntimeBindings() {
    const obj = react_nativeDefault;
    return obj.installUIRuntimeBindings();
  }
};
fn = function n(arg0, arg1) {
  const obj = react_nativeDefault;
  const result = obj.updateGestureHandlerConfig(arg0, arg1);
  const obj2 = react_nativeDefault;
  obj2.flushOperations();
};
let obj2 = { updateGestureHandlerConfig: react_nativeDefault.updateGestureHandlerConfig, flushOperations: react_nativeDefault.flushOperations };
fn.__closure = obj2;
fn.__workletHash = 12442858879797;
fn.__initData = { code: "function pnpm_NativeProxyTs1(handlerTag,newConfig){const{updateGestureHandlerConfig,flushOperations}=this.__closure;updateGestureHandlerConfig(handlerTag,newConfig);flushOperations();}" };

export const NativeProxy = obj;