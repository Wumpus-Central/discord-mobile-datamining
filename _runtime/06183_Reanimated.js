// _runtime/06183_Reanimated.js
import _mod1643 from "metro/01643__.js";
import reactNativeWorkletsCompat from "../discord_app/modules/gesture_handlers/native/reactNativeWorkletsCompat.js";
import tagMessage from "06145_tagMessage.js";
import ghQueueMicrotask from "06172_ghQueueMicrotask.js";
import NativeProxy2 from "06184_NativeProxy.js";

let _module;
try {
  _module = _mod1643;
  try {
    const _module1 = reactNativeWorkletsCompat;
    if (_module1 != null) {
      const fn = function t() {};
      fn.__closure = {};
      fn.__workletHash = 1792171573139;
      fn.__initData = { code: "function pnpm_reanimatedWrapperTs1(){}" };
      _module1.scheduleOnUI(fn);
    }
  } catch (err) {}
  const _module2 = ghQueueMicrotask;
  _module2.ghQueueMicrotask(() => {
    const NativeProxy = NativeProxy2.NativeProxy;
    if (!NativeProxy.installUIRuntimeBindings()) {
      const _console = console;
      const tmpResult = tagMessage;
      warn(
        tmpResult.tagMessage(
          "Failed to install UI runtime bindings. Please report this at https://github.com/software-mansion/react-native-gesture-handler/issues.",
        ),
      );
    }
  });
} catch (err) {}
let useSharedValue;
if (_module != null) {
  useSharedValue = _module.useSharedValue;
}
const setGestureState = undefined === _module || _module.setGestureState;
if (!setGestureState) {
  const fn2 = function o() {
    const obj = tagMessage;
    warn(
      obj.tagMessage("Please use newer version of react-native-reanimated in order to control state of the gestures."),
    );
  };
  let obj = { tagMessage: tagMessage.tagMessage };
  const obj2 = {
    code: "function pnpm_reanimatedWrapperTs2(){const{tagMessage}=this.__closure;console.warn(tagMessage('Please use newer version of react-native-reanimated in order to control state of the gestures.'));}",
  };
  fn2.__closure = obj;
  fn2.__workletHash = 3596069664305;
  fn2.__initData = obj2;
  _module.setGestureState = fn2;
}

export const Reanimated = _module;
