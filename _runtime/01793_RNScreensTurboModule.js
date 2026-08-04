// _runtime/01793_RNScreensTurboModule.js
let c0 = require;
let RNScreensTurboModule = global.RNScreensTurboModule;
if (!RNScreensTurboModule) {
  let obj = { code: "function pnpm_RNScreensTurboModuleTs1(){const{logger,defaultReturnValue}=this.__closure;logger.warn('RNScreensTurboModule has not been found. Check that you have installed `react-native-screens@3.30.0` or newer in your project and rebuilt your app.');return defaultReturnValue;}" };
  obj = { startTransition: null, updateTransition: null, finishTransition: null };
  obj = { topScreenId: -1, belowTopScreenId: -1, canStartTransition: false };
  c0 = obj;
  const fn = function t() {
    const logger = _undefined(1610).logger;
    logger.warn("RNScreensTurboModule has not been found. Check that you have installed `react-native-screens@3.30.0` or newer in your project and rebuilt your app.");
    return _undefined;
  };
  const obj1 = { logger: null, defaultReturnValue: null };
  obj1[0] = require("addLogBoxLog").logger;
  obj1[1] = obj;
  fn.__closure = obj1;
  fn.__workletHash = 6450550757460;
  fn.__initData = obj;
  obj[0] = fn;
  c0 = undefined;
  const fn2 = function t() {
    const logger = _undefined(1610).logger;
    logger.warn("RNScreensTurboModule has not been found. Check that you have installed `react-native-screens@3.30.0` or newer in your project and rebuilt your app.");
    return _undefined;
  };
  const obj2 = { logger: null, defaultReturnValue: "Array" };
  obj2[0] = require("addLogBoxLog").logger;
  fn2.__closure = obj2;
  fn2.__workletHash = 6450550757460;
  fn2.__initData = obj;
  obj[1] = fn2;
  c0 = undefined;
  const fn3 = function t() {
    const logger = _undefined(1610).logger;
    logger.warn("RNScreensTurboModule has not been found. Check that you have installed `react-native-screens@3.30.0` or newer in your project and rebuilt your app.");
    return _undefined;
  };
  const obj3 = { logger: null, defaultReturnValue: "Array" };
  obj3[0] = require("addLogBoxLog").logger;
  fn3.__closure = obj3;
  fn3.__workletHash = 6450550757460;
  fn3.__initData = obj;
  obj[2] = fn3;
  RNScreensTurboModule = obj;
}

export { RNScreensTurboModule };