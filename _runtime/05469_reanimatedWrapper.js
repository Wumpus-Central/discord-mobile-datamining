// === Module 5469: reanimatedWrapper ===

// Module 5469 (reanimatedWrapper)
import _mod1652 from "module_1652" /* 1652 */;
import _mod1705 from "module_1705" /* 1705 */;
import tagMessage from "tagMessage" /* 5431 */;
import ghQueueMicrotask from "ghQueueMicrotask" /* 5458 */;
import NativeProxy2 from "NativeProxy" /* 5470 */;

const require = globalThis.__r;

try {
  const _module = _mod1652;
  try {
    const _module1 = _mod1705;
    if (_module1 != null) {
      let items = [{ code: "(function pnpm_reanimatedWrapperTs1(){})" }];
      _module1.scheduleOnUI((function pnpm_reanimatedWrapperTs1Factory(items) {
        [tmp] = items;
        function pnpm_reanimatedWrapperTs1() {

        }
        pnpm_reanimatedWrapperTs1.__workletHash = 1469700417522;
        pnpm_reanimatedWrapperTs1.__initData = tmp;
        return pnpm_reanimatedWrapperTs1;
      })(items));
    }
    const _module2 = ghQueueMicrotask;
    _module2.ghQueueMicrotask(() => {
      const NativeProxy = NativeProxy2.NativeProxy;
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
      const items1 = [{ code: "(function pnpm_reanimatedWrapperTs2(){let[tagMessage]=this.__closure;console.warn(tagMessage('Please use newer version of react-native-reanimated in order to control state of the gestures.'));})" }, tagMessage.tagMessage];
      _module.setGestureState = (function pnpm_reanimatedWrapperTs2Factory(items1) {
        [tmp, tmp2] = items1;
        function pnpm_reanimatedWrapperTs2() {
          console.warn(require("Please use newer version of react-native-reanimated in order to control state of the gestures."));
        }
        items = [tmp2];
        pnpm_reanimatedWrapperTs2.__closure = items;
        pnpm_reanimatedWrapperTs2.__workletHash = 914102765608;
        pnpm_reanimatedWrapperTs2.__initData = tmp;
        return pnpm_reanimatedWrapperTs2;
      })(items1);
    }
    exports.Reanimated = _module;
  } catch (err) {
  }
} catch (err) {
}