// _runtime/metro/01083__.js
import _mod65 from "00065__.js";
import _mod693 from "00693__.js";
import react from "../00019_react.js";
import react_native from "../00017_react-native.js";
import 00878__ from "00878__.js";

let UIManager;
let map;
({ UIManager, View: map } = react_native);
const RNSentryReplayMask = "RNSentryReplayMask";
const RNSentryReplayUnmask = "RNSentryReplayUnmask";
function warn(arg0) {

}
class MaskFallback {
  constructor(arg0) {
    if (typeof warn === "function") {
      const Mask_str = "Mask";
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        console.warn("[SentrySessionReplay] " + Unmask + " component is not supported on the current platform. If " + Unmask + " should be supported, please ensure that the application build is up to date.");
      }, 0);
      const _Object = Object;
      return <map {...Object.assign({}, arg0)} />;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
if (!module_878.isExpoGo()) {
  const hasViewManagerConfig = UIManager.hasViewManagerConfig;
  let callResult;
  if (null !== hasViewManagerConfig) {
    if (undefined !== hasViewManagerConfig) {
      callResult = hasViewManagerConfig.call(UIManager, "RNSentryReplayMask");
    }
  }
  if (callResult) {
    const _module2 = _mod65;
    const value = _module2.get("RNSentryReplayMask", () => ({ uiViewClassName: RNSentryReplayMask }));
  }
  class UnmaskFallback {
    constructor(arg0) {
      if (typeof warn === "function") {
        const Unmask = "Unmask";
        const _setTimeout = setTimeout;
        const timerId = setTimeout(() => {
          console.warn("[SentrySessionReplay] " + Unmask + " component is not supported on the current platform. If " + Unmask + " should be supported, please ensure that the application build is up to date.");
        }, 0);
        const _Object = Object;
        return <map {...Object.assign({}, arg0)} />;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
  const _module3 = module_878;
  if (!_module3.isExpoGo()) {
    let value2;
    const hasViewManagerConfig2 = UIManager.hasViewManagerConfig;
    let callResult1;
    if (null !== hasViewManagerConfig2) {
      if (undefined !== hasViewManagerConfig2) {
        callResult1 = hasViewManagerConfig2.call(UIManager, "RNSentryReplayUnmask");
      }
    }
    if (callResult1) {
      const _module4 = _mod65;
      value2 = _module4.get("RNSentryReplayUnmask", () => ({ uiViewClassName: RNSentryReplayUnmask }));
    }
    class UnmaskFallback {
      constructor(arg0) {
        if (typeof warn === "function") {
          const Unmask = "Unmask";
          const _setTimeout = setTimeout;
          const timerId = setTimeout(() => {
            console.warn("[SentrySessionReplay] " + Unmask + " component is not supported on the current platform. If " + Unmask + " should be supported, please ensure that the application build is up to date.");
          }, 0);
          const _Object = Object;
          return <map {...Object.assign({}, arg0)} />;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
    }
    exports.Unmask = value2;
    exports.MaskFallback = MaskFallback;
    exports.UnmaskFallback = UnmaskFallback;
  }
  const debug2 = _mod693.debug;
  const _HermesInternal = HermesInternal;
  debug2.warn("[SentrySessionReplay] Can't load " + "RNSentryReplayUnmask" + ".");
  value2 = UnmaskFallback;
}
const debug = _mod693.debug;
debug.warn("[SentrySessionReplay] Can't load " + "RNSentryReplayMask" + ".");