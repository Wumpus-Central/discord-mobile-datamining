// _runtime/01965_RNScreensTurboModule.js
import _mod1665 from "metro/01665__.js";

require = arg1;
const dependencyMap = arg6;
let closure_2 = {
  code: "(function pnpm_RNScreensTurboModuleTs1(){let[logger,defaultReturnValue]=this.__closure;logger.warn('RNScreensTurboModule has not been found. Check that you have installed `react-native-screens@3.30.0` or newer in your project and rebuilt your app.');return defaultReturnValue;})",
};
RNScreensTurboModule = RNScreensTurboModule.RNScreensTurboModule;
if (!RNScreensTurboModule) {
  function noopFactory(arg0) {
    items = [closure_2, _mod1665.logger, arg0];
    c0 = undefined;
    c1 = undefined;
    [tmp, tmp2, tmp3] = items;
    function pnpm_RNScreensTurboModuleTs1() {
      _undefined.warn(
        "RNScreensTurboModule has not been found. Check that you have installed `react-native-screens@3.30.0` or newer in your project and rebuilt your app.",
      );
      return c1;
    }
    const items1 = [tmp2, tmp3];
    pnpm_RNScreensTurboModuleTs1.__closure = items1;
    pnpm_RNScreensTurboModuleTs1.__workletHash = 2287509312493;
    pnpm_RNScreensTurboModuleTs1.__initData = tmp;
    return pnpm_RNScreensTurboModuleTs1;
  }
  const obj = {
    startTransition: noopFactory({ topScreenId: -1, belowTopScreenId: -1, canStartTransition: false }),
    updateTransition: noopFactory(),
    finishTransition: noopFactory(),
  };
  RNScreensTurboModule = obj;
}

export { RNScreensTurboModule };
