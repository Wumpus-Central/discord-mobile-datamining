// _runtime/01824_RNScreensTurboModule.js
import _mod1641 from "metro/01641__.js";

let c0 = require;
let RNScreensTurboModule = global.RNScreensTurboModule;
if (!RNScreensTurboModule) {
  const obj = {
    code: "function pnpm_RNScreensTurboModuleTs1(){const{logger,defaultReturnValue}=this.__closure;logger.warn('RNScreensTurboModule has not been found. Check that you have installed `react-native-screens@3.30.0` or newer in your project and rebuilt your app.');return defaultReturnValue;}",
  };
  const obj2 = { startTransition: null, updateTransition: null, finishTransition: null };
  const obj3 = { topScreenId: -1, belowTopScreenId: -1, canStartTransition: false };
  const fn = function t() {
    const logger = _undefined(1641).logger;
    logger.warn(
      "RNScreensTurboModule has not been found. Check that you have installed `react-native-screens@3.30.0` or newer in your project and rebuilt your app.",
    );
    return c0;
  };
  const obj4 = { logger: _mod1641.logger, defaultReturnValue: obj3 };
  fn.__closure = obj4;
  fn.__workletHash = 6450550757460;
  fn.__initData = obj;
  obj2.startTransition = fn;
  const fn2 = function t() {
    const logger = _undefined(1641).logger;
    logger.warn(
      "RNScreensTurboModule has not been found. Check that you have installed `react-native-screens@3.30.0` or newer in your project and rebuilt your app.",
    );
    return c0;
  };
  const obj5 = { logger: _mod1641.logger, defaultReturnValue: "Array" };
  fn2.__closure = obj5;
  fn2.__workletHash = 6450550757460;
  fn2.__initData = obj;
  obj2.updateTransition = fn2;
  c0 = undefined;
  const fn3 = function t() {
    const logger = _undefined(1641).logger;
    logger.warn(
      "RNScreensTurboModule has not been found. Check that you have installed `react-native-screens@3.30.0` or newer in your project and rebuilt your app.",
    );
    return c0;
  };
  const obj6 = { logger: _mod1641.logger, defaultReturnValue: "Array" };
  fn3.__closure = obj6;
  fn3.__workletHash = 6450550757460;
  fn3.__initData = obj;
  obj2.finishTransition = fn3;
  RNScreensTurboModule = obj2;
}

export { RNScreensTurboModule };
