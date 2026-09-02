// === Module 1204: warn ===

// Module 1204 (warn)
import closure_0 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import isHermesEnabled from "isHermesEnabled" /* 999 */;
import { debug } from "registerSpanErrorInstrumentation" /* 814 */;

({ UIManager, View: closure_1 } = get_ActivityIndicator);
const RNSentryReplayMask = "RNSentryReplayMask";
const RNSentryReplayUnmask = "RNSentryReplayUnmask";
function warn(arg0) {

}
class MaskFallback {
  constructor(arg0) {
    if (typeof warn !== "function") {
      str = "Trying to call a non-function";
      throwTypeErrorResult = HermesBuiltin.throwTypeError();
    }
    Mask = "Mask";
    timerId = setTimeout(() => {
      console.warn("[SentrySessionReplay] " + Unmask + " component is not supported on the current platform. If " + Unmask + " should be supported, please ensure that the application build is up to date.");
    }, 0);
    return Mask.createElement(View, Object.assign({}, global));
  }
}
if (!isHermesEnabled.isExpoGo()) {
  const hasViewManagerConfig = UIManager.hasViewManagerConfig;
  if (null !== hasViewManagerConfig) {
    if (undefined !== hasViewManagerConfig) {
      const call = hasViewManagerConfig.call;
      typeof call === "unknown" ? hasViewManagerConfig("RNSentryReplayMask") : call(UIManager, "RNSentryReplayMask");
    }
  }
  if (undefined) {
    let value = require("setRuntimeConfigProvider").get("RNSentryReplayMask", () => ({ uiViewClassName: RNSentryReplayMask }));
    const obj2 = require("setRuntimeConfigProvider");
  }
  class UnmaskFallback {
    constructor(arg0) {
      if (typeof warn !== "function") {
        str = "Trying to call a non-function";
        throwTypeErrorResult = HermesBuiltin.throwTypeError();
      }
      Unmask = "Unmask";
      timerId = setTimeout(() => {
        console.warn("[SentrySessionReplay] " + Unmask + " component is not supported on the current platform. If " + Unmask + " should be supported, please ensure that the application build is up to date.");
      }, 0);
      return Unmask.createElement(View, Object.assign({}, global));
    }
  }
  if (!obj3.isExpoGo()) {
    const hasViewManagerConfig2 = UIManager.hasViewManagerConfig;
    if (null !== hasViewManagerConfig2) {
      if (undefined !== hasViewManagerConfig2) {
        const call2 = hasViewManagerConfig2.call;
        typeof call2 === "unknown" ? hasViewManagerConfig2("RNSentryReplayUnmask") : call2(UIManager, "RNSentryReplayUnmask");
      }
    }
    if (undefined) {
      value = require("setRuntimeConfigProvider").get("RNSentryReplayUnmask", () => ({ uiViewClassName: RNSentryReplayUnmask }));
      const obj4 = require("setRuntimeConfigProvider");
    }
    class UnmaskFallback {
      constructor(arg0) {
        if (typeof warn !== "function") {
          str = "Trying to call a non-function";
          throwTypeErrorResult = HermesBuiltin.throwTypeError();
        }
        Unmask = "Unmask";
        timerId = setTimeout(() => {
          console.warn("[SentrySessionReplay] " + Unmask + " component is not supported on the current platform. If " + Unmask + " should be supported, please ensure that the application build is up to date.");
        }, 0);
        return Unmask.createElement(View, Object.assign({}, global));
      }
    }
    exports.Unmask = value;
    exports.MaskFallback = MaskFallback;
    exports.UnmaskFallback = UnmaskFallback;
  }
  const debug2 = require("registerSpanErrorInstrumentation").debug;
  const _HermesInternal = HermesInternal;
  debug2.warn("[SentrySessionReplay] Can't load " + "RNSentryReplayUnmask" + ".");
  value = UnmaskFallback;
  obj3 = require("isHermesEnabled");
}
debug.warn("[SentrySessionReplay] Can't load " + "RNSentryReplayMask" + ".");