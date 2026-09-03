// === Module 5704: ? ===

// Module 5704
import cancelAnimation from "cancelAnimation" /* 1652 */;
import _mod4216 from "module_4216" /* 4216 */;
import tagMessage from "tagMessage" /* 5666 */;
import _mod5693 from "module_5693" /* 5693 */;
import n from "n" /* 5705 */;

try {
  const _module = cancelAnimation;
  try {
    const _module1 = _mod4216;
    if (_module1 != null) {
      const fn = function t() {

      };
      fn.__closure = {};
      fn.__workletHash = 1792171573139;
      fn.__initData = { code: "function pnpm_reanimatedWrapperTs1(){}" };
      _module1.scheduleOnUI(fn);
    }
    const _module2 = _mod5693;
    _module2.ghQueueMicrotask(() => {
      const NativeProxy = n.NativeProxy;
      if (!NativeProxy.installUIRuntimeBindings()) {
        const _console = console;
        console.warn(tagMessage.tagMessage("Failed to install UI runtime bindings. Please report this at https://github.com/software-mansion/react-native-gesture-handler/issues."));
        const tmpResult = tagMessage;
      }
    });
    let useSharedValue;
    if (_module != null) {
      useSharedValue = _module.useSharedValue;
    }
    let setGestureState = undefined === _module;
    if (!setGestureState) {
      setGestureState = _module.setGestureState;
    }
    if (!setGestureState) {
      const fn2 = function o() {
        console.warn(tagMessage.tagMessage("Please use newer version of react-native-reanimated in order to control state of the gestures."));
      };
      let obj = { tagMessage: null };
      obj = { code: "function pnpm_reanimatedWrapperTs2(){const{tagMessage}=this.__closure;console.warn(tagMessage('Please use newer version of react-native-reanimated in order to control state of the gestures.'));}" };
      obj[0] = tagMessage.tagMessage;
      fn2.__closure = obj;
      fn2.__workletHash = 3596069664305;
      fn2.__initData = obj;
      _module.setGestureState = fn2;
    }
    exports.Reanimated = _module;
  } catch (err) {
  }
} catch (err) {
}