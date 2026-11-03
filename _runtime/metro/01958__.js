// _runtime/metro/01958__.js
import _mod1665 from "01665__.js";
import _mod1705 from "01705__.js";

let items = [
  {
    code: "(function setNativePropsNative_Pnpm_setNativePropsNativeTs1(animatedRef,updates){let[RuntimeKind,logger,processColorsInProps]=this.__closure;if(globalThis.__RUNTIME_KIND===RuntimeKind.ReactNative){logger.warn('setNativeProps() can only be used on the UI runtime.');return;}const shadowNodeWrapper=animatedRef.value;processColorsInProps(updates);global._updateProps([{shadowNodeWrapper:shadowNodeWrapper,updates:updates}]);})",
  },
  _mod1705.RuntimeKind,
  _mod1665.logger,
  _mod1665.processColorsInProps,
];
let c0;
let c1;
let c2;
[tmp2, tmp3, tmp4, tmp5] = items;
let setNativePropsJest = function setNativePropsNative(value, updates) {
  if (globalThis.__RUNTIME_KIND !== _undefined.ReactNative) {
    _undefined3(updates);
    const obj = { shadowNodeWrapper: value.value, updates };
    items = [obj];
    _undefined._updateProps(items);
  } else {
    _undefined2.warn("setNativeProps() can only be used on the UI runtime.");
  }
};
const items1 = [tmp3, tmp4, tmp5];
setNativePropsJest.__closure = items1;
setNativePropsJest.__workletHash = 9620176991482;
setNativePropsJest.__initData = tmp2;
if (_mod1665.IS_JEST) {
  setNativePropsJest = function setNativePropsJest() {
    const logger = _undefined2(_undefined3[1]).logger;
    logger.warn("setNativeProps() is not supported with Jest.");
  };
}

export const setNativeProps = setNativePropsJest;
