// === Module 1830: react-native ===

// Module 1830 (react-native)
import react_native from "react-native" /* 1647 */;

let fn;
let fn2;
let fn3;
function t() {
  const logger = react_native.logger;
  logger.warn("RNScreensTurboModule has not been found. Check that you have installed `react-native-screens@3.30.0` or newer in your project and rebuilt your app.");
  return c0;
}
let RNScreensTurboModule = global.RNScreensTurboModule;
if (!RNScreensTurboModule) {
  const obj = { code: "function pnpm_RNScreensTurboModuleTs1(){const{logger,defaultReturnValue}=this.__closure;logger.warn('RNScreensTurboModule has not been found. Check that you have installed `react-native-screens@3.30.0` or newer in your project and rebuilt your app.');return defaultReturnValue;}" };
  const obj2 = { startTransition: fn, updateTransition: fn2, finishTransition: fn3 };
  fn = t;
  const obj3 = { topScreenId: -1, belowTopScreenId: -1, canStartTransition: false };
  fn.__closure = { logger: react_native.logger, defaultReturnValue: obj3 };
  fn.__workletHash = 6450550757460;
  fn.__initData = obj;
  fn2 = t;
  const obj4 = { logger: react_native.logger, defaultReturnValue: obj3 };
  fn2.__closure = { logger: react_native.logger, defaultReturnValue: "Array" };
  fn2.__workletHash = 6450550757460;
  fn2.__initData = obj;
  let c0;
  fn3 = t;
  const obj5 = { logger: react_native.logger, defaultReturnValue: "Array" };
  fn3.__closure = { logger: react_native.logger, defaultReturnValue: "Array" };
  fn3.__workletHash = 6450550757460;
  fn3.__initData = obj;
  RNScreensTurboModule = obj2;
  const obj6 = { logger: react_native.logger, defaultReturnValue: "Array" };
}

export { RNScreensTurboModule };