// === Module 5577: n ===

// Module 5577 (n)
const require = arg1;
const module = arg2;
let dependencyMap = arg6;
let obj = {
  createGestureHandler(closure_0, handlerTag, config) {
    const _require = closure_0;
    closure_1 = handlerTag;
    dependencyMap = config;
    const result = _require(5564).scheduleOperationToBeFlushed(() => {
      let obj = handlerTag(table[1]);
      obj = table;
      if (!table) {
        obj = {};
      }
      obj.createGestureHandler(closure_0, handlerTag, obj);
    });
  },
  setGestureHandlerConfig(handlerTag, closure_1) {
    const _require = handlerTag;
    let result = _require(5564).scheduleOperationToBeFlushed(() => {
      const result = callback(closure_1_2[1]).setGestureHandlerConfig(closure_0, callback);
    });
  },
  updateGestureHandlerConfig: null,
  dropGestureHandler: null,
  configureRelations: null,
  installUIRuntimeBindings: null
};
const fn = function n(arg0, arg1) {
  const result = module(5562).updateGestureHandlerConfig(arg0, arg1);
  const obj = module(5562);
  module(5562).flushOperations();
};
obj = { updateGestureHandlerConfig: require("RNGestureHandlerModule").updateGestureHandlerConfig, flushOperations: require("RNGestureHandlerModule").flushOperations };
fn.__closure = obj;
fn.__workletHash = 12442858879797;
fn.__initData = { code: "function pnpm_NativeProxyTs1(handlerTag,newConfig){const{updateGestureHandlerConfig,flushOperations}=this.__closure;updateGestureHandlerConfig(handlerTag,newConfig);flushOperations();}" };
obj[2] = fn;
obj[3] = function dropGestureHandler(handlerTag) {
  const _require = handlerTag;
  const result = _require(5564).scheduleOperationToBeFlushed(() => {
    closure_1_1(closure_1_2[1]).dropGestureHandler(closure_0);
  });
};
obj[4] = function configureRelations(arg0, arg1) {
  const _require = arg0;
  closure_1 = arg1;
  const result = _require(5564).scheduleOperationToBeFlushed(() => {
    callback(closure_1_2[1]).configureRelations(closure_0, callback);
  });
};
obj[5] = function installUIRuntimeBindings() {
  return module(5562).installUIRuntimeBindings();
};
arg5.NativeProxy = obj;