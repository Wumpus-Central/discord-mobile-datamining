// _runtime/metro/06111__.js
import cancelAnimation from "../01637_cancelAnimation.js";
import reactNativeWorkletsCompat from "../../discord_app/modules/gesture_handlers/native/reactNativeWorkletsCompat.js";
import tagMessage from "../06073_tagMessage.js";
import ghQueueMicrotask from "../06100_ghQueueMicrotask.js";
import _mod6112 from "06112__.js";

try {
  const _module = cancelAnimation;
  try {
    const _module1 = reactNativeWorkletsCompat;
    if (_module1 != null) {
      const fn = function t() {};
      fn.__closure = {};
      fn.__workletHash = 1792171573139;
      fn.__initData = { code: "function pnpm_reanimatedWrapperTs1(){}" };
      _module1.scheduleOnUI(fn);
    }
    const _module2 = ghQueueMicrotask;
    _module2.ghQueueMicrotask(() => {
      const NativeProxy = _mod6112.NativeProxy;
      if (!NativeProxy.installUIRuntimeBindings()) {
        const _console = console;
        console.warn(
          tagMessage.tagMessage(
            "Failed to install UI runtime bindings. Please report this at https://github.com/software-mansion/react-native-gesture-handler/issues.",
          ),
        );
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
        console.warn(
          tagMessage.tagMessage(
            "Please use newer version of react-native-reanimated in order to control state of the gestures.",
          ),
        );
      };
      const obj = { tagMessage: tagMessage.tagMessage };
      fn2.__closure = obj;
      fn2.__workletHash = 3596069664305;
      fn2.__initData = {
        code: "function pnpm_reanimatedWrapperTs2(){const{tagMessage}=this.__closure;console.warn(tagMessage('Please use newer version of react-native-reanimated in order to control state of the gestures.'));}",
      };
      _module.setGestureState = fn2;
      const obj2 = {
        code: "function pnpm_reanimatedWrapperTs2(){const{tagMessage}=this.__closure;console.warn(tagMessage('Please use newer version of react-native-reanimated in order to control state of the gestures.'));}",
      };
    }
    exports.Reanimated = _module;
  } catch (err) {}
} catch (err) {}
