// === Module 1083: ? ===

// Module 1083
import _mod65 from "module_65" /* 65 */;
import _mod693 from "module_693" /* 693 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import module_878 from "module_878" /* 878 */;

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