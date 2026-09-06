// === Module 1823: RNScreensTurboModule ===

// Module 1823 (RNScreensTurboModule)
import _mod1640 from "module_1640" /* 1640 */;

let c0 = require;
let RNScreensTurboModule = global.RNScreensTurboModule;
if (!RNScreensTurboModule) {
  let obj = { code: "function pnpm_RNScreensTurboModuleTs1(){const{logger,defaultReturnValue}=this.__closure;logger.warn('RNScreensTurboModule has not been found. Check that you have installed `react-native-screens@3.30.0` or newer in your project and rebuilt your app.');return defaultReturnValue;}" };
  obj = { startTransition: null, updateTransition: null, finishTransition: null };
  obj = { topScreenId: -1, belowTopScreenId: -1, canStartTransition: false };
  const fn = function t() {
    const logger = _undefined(1640).logger;
    logger.warn("RNScreensTurboModule has not been found. Check that you have installed `react-native-screens@3.30.0` or newer in your project and rebuilt your app.");
    return c0;
  };
  const obj1 = { logger: _mod1640.logger, defaultReturnValue: obj };
  fn.__closure = obj1;
  fn.__workletHash = 6450550757460;
  fn.__initData = obj;
  obj.startTransition = fn;
  const fn2 = function t() {
    const logger = _undefined(1640).logger;
    logger.warn("RNScreensTurboModule has not been found. Check that you have installed `react-native-screens@3.30.0` or newer in your project and rebuilt your app.");
    return c0;
  };
  const obj2 = { logger: _mod1640.logger, defaultReturnValue: "a" };
  fn2.__closure = obj2;
  fn2.__workletHash = 6450550757460;
  fn2.__initData = obj;
  obj.updateTransition = fn2;
  c0 = undefined;
  const fn3 = function t() {
    const logger = _undefined(1640).logger;
    logger.warn("RNScreensTurboModule has not been found. Check that you have installed `react-native-screens@3.30.0` or newer in your project and rebuilt your app.");
    return c0;
  };
  const obj3 = { logger: _mod1640.logger, defaultReturnValue: "a" };
  fn3.__closure = obj3;
  fn3.__workletHash = 6450550757460;
  fn3.__initData = obj;
  obj.finishTransition = fn3;
  RNScreensTurboModule = obj;
}

export { RNScreensTurboModule };