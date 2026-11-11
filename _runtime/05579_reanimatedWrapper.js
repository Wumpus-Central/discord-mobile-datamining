// === Module 5579: reanimatedWrapper ===

// Module 5579 (reanimatedWrapper)
import _mod1652 from "module_1652" /* 1652 */;
import _mod1705 from "module_1705" /* 1705 */;
import _mod1823 from "module_1823" /* 1823 */;
import tagMessage from "tagMessage" /* 5539 */;
import installUIRuntimeBindings from "installUIRuntimeBindings" /* 5580 */;

try {
  const _module = _mod1705;
  try {
    const _module1 = _mod1652;
    if (undefined !== _module) {
      const _module2 = installUIRuntimeBindings;
      const result = _module2.installUIRuntimeBindings(_module.getUIRuntimeHolder);
    }
    let setGestureState = undefined === _module1;
    if (!setGestureState) {
      setGestureState = _module1.setGestureState;
    }
    if (!setGestureState) {
      let items = [{ code: "(function pnpm_reanimatedWrapperTs1(){let[tagMessage]=this.__closure;console.warn(tagMessage('Please use newer version of react-native-reanimated in order to control state of the gestures.'));})" }, tagMessage.tagMessage];
      _module1.setGestureState = (function pnpm_reanimatedWrapperTs1Factory(items) {
        [tmp, tmp2] = items;
        function pnpm_reanimatedWrapperTs1() {
          console.warn(closure_1_0("Please use newer version of react-native-reanimated in order to control state of the gestures."));
        }
        items = [tmp2];
        pnpm_reanimatedWrapperTs1.__closure = items;
        pnpm_reanimatedWrapperTs1.__workletHash = 3441713308075;
        pnpm_reanimatedWrapperTs1.__initData = tmp;
        return pnpm_reanimatedWrapperTs1;
      })(items);
    }
    let closure_0 = false;
    try {
      const _default = _mod1823.default;
      let _refreshComponentRef;
      if (_default != null) {
        const prototype = _default.prototype;
        if (prototype != null) {
          _refreshComponentRef = prototype._refreshComponentRef;
        }
      }
      closure_0 = typeof _refreshComponentRef === "function";
      exports.reanimatedRefreshesAnimatableRef = function reanimatedRefreshesAnimatableRef() {
        return closure_0;
      };
      exports.Reanimated = _module1;
      exports.Worklets = _module;
    } catch (err) {
    }
  } catch (err) {
  }
} catch (err) {
}