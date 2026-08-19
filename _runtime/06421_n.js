// _runtime/06421_n.js
import RNGestureHandlerModuleDefault from "06406_RNGestureHandlerModule.js";

const require = arg1;
importDefault = fn;
let dependencyMap = arg6;
fn = function n(arg0) {
  const result = RNGestureHandlerModuleDefault.updateGestureHandlerConfig(arg0, arg1);
  RNGestureHandlerModuleDefault.flushOperations();
};
let obj = { updateGestureHandlerConfig: require("RNGestureHandlerModule").updateGestureHandlerConfig, flushOperations: require("RNGestureHandlerModule").flushOperations };
fn.__closure = obj;
fn.__workletHash = 12442858879797;
fn.__initData = { code: "function pnpm_NativeProxyTs1(handlerTag,newConfig){const{updateGestureHandlerConfig,flushOperations}=this.__closure;updateGestureHandlerConfig(handlerTag,newConfig);flushOperations();}" };
obj[2] = fn;
obj[3] = function dropGestureHandler(handlerTag) {
  const _require = handlerTag;
  const result = require("06408_transformIntoHandlerTags.js").scheduleOperationToBeFlushed(() => {
    RNGestureHandlerModuleDefault.dropGestureHandler(closure_0);
  });
};
obj[4] = function configureRelations(arg0, arg1) {
  const _require = arg0;
  closure_1 = arg1;
  const result = require("06408_transformIntoHandlerTags.js").scheduleOperationToBeFlushed(() => {
    callback(dependencyMap[1]).configureRelations(closure_0, callback);
  });
};
obj[5] = function installUIRuntimeBindings() {
  return RNGestureHandlerModuleDefault.installUIRuntimeBindings();
};
arg5.NativeProxy = obj;