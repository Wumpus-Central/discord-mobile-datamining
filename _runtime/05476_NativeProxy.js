// === Module 5476: NativeProxy ===

// Module 5476 (NativeProxy)
import RNGestureHandlerModuleDefault from "RNGestureHandlerModule" /* 5459 */;

const require = arg1;
let obj = {
  createGestureHandler(Handler, handlerTag, config) {
    _require = Handler;
    closure_1 = handlerTag;
    dependencyMap = config;
    const result = require("transformIntoHandlerTags").scheduleOperationToBeFlushed(() => {
      let obj2 = closure_2;
      if (!closure_2) {
        obj2 = {};
      }
      RNGestureHandlerModuleDefault.createGestureHandler(closure_0, closure_1, obj2);
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
  installUIRuntimeBindings: null
};
const items = [{ code: "(function pnpm_NativeProxyTs1(handlerTag,newConfig){let[updateGestureHandlerConfig,flushOperations]=this.__closure;updateGestureHandlerConfig(handlerTag,newConfig);flushOperations();})" }, RNGestureHandlerModuleDefault.updateGestureHandlerConfig, RNGestureHandlerModuleDefault.flushOperations];
let closure_129_0;
let closure_129_1;
[tmp2, tmp3, tmp4] = items;
function pnpm_NativeProxyTs1(arg0, arg1) {
  require(arg0, arg1);
  importDefault();
}
const items1 = [tmp3, tmp4];
pnpm_NativeProxyTs1.__closure = items1;
pnpm_NativeProxyTs1.__workletHash = 15385858546028;
pnpm_NativeProxyTs1.__initData = tmp2;
obj.updateGestureHandlerConfig = pnpm_NativeProxyTs1;
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