// _runtime/metro/06699__.js
import RNGestureHandlerModuleDefault from "../06684_RNGestureHandlerModule.js";

const require = arg1;
importDefault = fn;
let dependencyMap = arg6;
let obj = {
  createGestureHandler(Handler, handlerTag, config) {
    _require = Handler;
    closure_1 = handlerTag;
    dependencyMap = config;
    const result = require("transformIntoHandlerTags").scheduleOperationToBeFlushed(() => {
      let obj = closure_2;
      if (!closure_2) {
        obj = {};
      }
      obj.createGestureHandler(closure_0, closure_1, obj);
    });
  },
  setGestureHandlerConfig(handlerTag, result) {
    _require = handlerTag;
    closure_1 = result;
    result = require("transformIntoHandlerTags").scheduleOperationToBeFlushed(() => {
      result = RNGestureHandlerModuleDefault.setGestureHandlerConfig(closure_0, closure_1);
    });
  },
  updateGestureHandlerConfig: null,
  dropGestureHandler: null,
  configureRelations: null,
  installUIRuntimeBindings: null,
};
fn = function n(arg0, arg1) {
  const result = RNGestureHandlerModuleDefault.updateGestureHandlerConfig(arg0, arg1);
  RNGestureHandlerModuleDefault.flushOperations();
};
obj = { updateGestureHandlerConfig: fn(6684).updateGestureHandlerConfig, flushOperations: fn(6684).flushOperations };
fn.__closure = obj;
fn.__workletHash = 12442858879797;
fn.__initData = {
  code: "function pnpm_NativeProxyTs1(handlerTag,newConfig){const{updateGestureHandlerConfig,flushOperations}=this.__closure;updateGestureHandlerConfig(handlerTag,newConfig);flushOperations();}",
};
obj.updateGestureHandlerConfig = fn;
obj.dropGestureHandler = function dropGestureHandler(handlerTag) {
  _require = handlerTag;
  const result = require("transformIntoHandlerTags").scheduleOperationToBeFlushed(() => {
    RNGestureHandlerModuleDefault.dropGestureHandler(closure_0);
  });
};
obj.configureRelations = function configureRelations(arg0, arg1) {
  _require = arg0;
  closure_1 = arg1;
  const result = require("transformIntoHandlerTags").scheduleOperationToBeFlushed(() => {
    RNGestureHandlerModuleDefault.configureRelations(closure_0, closure_1);
  });
};
obj.installUIRuntimeBindings = function installUIRuntimeBindings() {
  return RNGestureHandlerModuleDefault.installUIRuntimeBindings();
};

export const NativeProxy = obj;
