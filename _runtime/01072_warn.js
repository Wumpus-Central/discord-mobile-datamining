// _runtime/01072_warn.js
import noop from "metro/00019__.js";

get_ActivityIndicator = fn(17);
({ UIManager, View: closure_1 } = get_ActivityIndicator);
const RNSentryReplayMask = "RNSentryReplayMask";
const RNSentryReplayUnmask = "RNSentryReplayUnmask";
function warn(arg0) {}
class MaskFallback {
  constructor(arg0) {
    if (typeof warn === "function") {
      tmp = global;
      str = "Mask";
      Mask = "Mask";
      tmp2 = globalThis;
      _setTimeout = setTimeout;
      num = 0;
      timerId = setTimeout(() => {
        console.warn(
          "[SentrySessionReplay] " +
            Unmask +
            " component is not supported on the current platform. If " +
            Unmask +
            " should be supported, please ensure that the application build is up to date.",
        );
      }, 0);
      tmp4 = closure_0;
      tmp5 = View;
      _Object = Object;
      return closure_0.createElement(View, Object.assign({}, global));
    } else {
      str2 = "Trying to call a non-function";
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const module_867 = fn(867);
if (!module_867.isExpoGo()) {
  const hasViewManagerConfig = UIManager.hasViewManagerConfig;
  if (null !== hasViewManagerConfig) {
    if (undefined !== hasViewManagerConfig) {
      const call = hasViewManagerConfig.call;
      typeof call === "unknown" ? hasViewManagerConfig("RNSentryReplayMask") : call(UIManager, "RNSentryReplayMask");
    }
  }
  if (undefined) {
    let value = fn(65).get("RNSentryReplayMask", () => ({ uiViewClassName: RNSentryReplayMask }));
    const obj2 = fn(65);
  }
  class UnmaskFallback {
    constructor(arg0) {
      if (typeof warn === "function") {
        tmp = global;
        str = "Unmask";
        Unmask = "Unmask";
        tmp2 = globalThis;
        _setTimeout = setTimeout;
        num = 0;
        timerId = setTimeout(() => {
          console.warn(
            "[SentrySessionReplay] " +
              Unmask +
              " component is not supported on the current platform. If " +
              Unmask +
              " should be supported, please ensure that the application build is up to date.",
          );
        }, 0);
        tmp4 = closure_0;
        tmp5 = View;
        _Object = Object;
        return closure_0.createElement(View, Object.assign({}, global));
      } else {
        str2 = "Trying to call a non-function";
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
  if (!obj3.isExpoGo()) {
    const hasViewManagerConfig2 = UIManager.hasViewManagerConfig;
    if (null !== hasViewManagerConfig2) {
      if (undefined !== hasViewManagerConfig2) {
        const call2 = hasViewManagerConfig2.call;
        typeof call2 === "unknown"
          ? hasViewManagerConfig2("RNSentryReplayUnmask")
          : call2(UIManager, "RNSentryReplayUnmask");
      }
    }
    if (undefined) {
      value = fn(65).get("RNSentryReplayUnmask", () => ({ uiViewClassName: RNSentryReplayUnmask }));
      const obj4 = fn(65);
    }
    class UnmaskFallback {
      constructor(arg0) {
        if (typeof warn === "function") {
          tmp = global;
          str = "Unmask";
          Unmask = "Unmask";
          tmp2 = globalThis;
          _setTimeout = setTimeout;
          num = 0;
          timerId = setTimeout(() => {
            console.warn(
              "[SentrySessionReplay] " +
                Unmask +
                " component is not supported on the current platform. If " +
                Unmask +
                " should be supported, please ensure that the application build is up to date.",
            );
          }, 0);
          tmp4 = closure_0;
          tmp5 = View;
          _Object = Object;
          return closure_0.createElement(View, Object.assign({}, global));
        } else {
          str2 = "Trying to call a non-function";
          throw new TypeError("Trying to call a non-function");
        }
      }
    }
    exports.Unmask = value;
    exports.MaskFallback = MaskFallback;
    exports.UnmaskFallback = UnmaskFallback;
  }
  const debug2 = fn(682).debug;
  const _HermesInternal = HermesInternal;
  debug2.warn("[SentrySessionReplay] Can't load " + "RNSentryReplayUnmask" + ".");
  value = UnmaskFallback;
  obj3 = fn(867);
}
const debug = fn(682).debug;
debug.warn("[SentrySessionReplay] Can't load " + "RNSentryReplayMask" + ".");
