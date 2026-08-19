// === Module 420: returnsFalse ===

// Module 420 (returnsFalse)
import noopAll from "noop" /* 19 */;
import useMergeRefsDefault from "useMergeRefs" /* 334 */;
import __INTERNAL_VIEW_CONFIGDefault from "__INTERNAL_VIEW_CONFIG" /* 421 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = fn;
let closure_3 = ["disabled", "ios_backgroundColor", "onChange", "onValueChange", "style", "thumbColor", "trackColor", "value"];
let closure_4 = ["onTintColor", "tintColor"];
noopAll;
({ useLayoutEffect: error, useRef: closure_8, useState: c9 } = noop);
function returnsFalse() {
  return false;
}
function returnsTrue() {
  return true;
}

export default function Switch(ref) {
  const merged = Object.assign(ref, Object.create(null));
  c0 = undefined;
  importDefault = undefined;
  closure_3 = undefined;
  let first;
  let callback;
  ({ disabled, ios_backgroundColor, onChange: c0, onValueChange: c1, trackColor, value } = merged);
  dependencyMap = value;
  ({ style, thumbColor } = merged);
  const tmp3 = callback2(merged, closure_3);
  let _false;
  if (trackColor != null) {
    _false = trackColor.false;
  }
  let _true;
  if (trackColor != null) {
    _true = trackColor.true;
  }
  const tmp6 = callback4(null);
  closure_3 = tmp6;
  const tmp10 = callback(callback5({ value: null }), 2);
  first = tmp10[0];
  callback = tmp10[1];
  const items = [value, first];
  callback3(() => {
    let tmp2 = null != first.value && first.value !== tmp;
    if (tmp2) {
      const current = ref.current;
      let setNativeProps;
      if (current != null) {
        setNativeProps = current.setNativeProps;
      }
      tmp2 = null != setNativeProps;
    }
    if (tmp2) {
      const Commands = _undefined(_undefined2[5]).Commands;
      Commands.setNativeValue(ref.current, tmp);
    }
  }, items);
  ({ onTintColor, tintColor } = tmp3);
  const tmp2Result = callback2(tmp3, first);
  const accessibilityState = tmp2Result.accessibilityState;
  if (null == disabled) {
    disabled = undefined;
    if (accessibilityState != null) {
      disabled = accessibilityState.disabled;
    }
  }
  let disabled1;
  if (accessibilityState != null) {
    disabled1 = accessibilityState.disabled;
  }
  let tmp16 = accessibilityState;
  if (disabled !== disabled1) {
    let obj = {};
    const merged1 = Object.assign(accessibilityState);
    obj.disabled = disabled;
    tmp16 = obj;
  }
  obj = { accessibilityState: tmp16, enabled: true !== disabled, on: tmp20, style, thumbTintColor: thumbColor, trackColorForFalse: _false, trackColorForTrue: _true, trackTintColor: null };
  if (true === value) {
    _false = _true;
  }
  obj[7] = _false;
  obj = {};
  const tmp9 = useMergeRefsDefault(tmp6, ref.ref);
  const merged2 = Object.assign(tmp2Result);
  const merged3 = Object.assign(obj);
  let str = merged.accessibilityRole;
  if (str == null) {
    str = "switch";
  }
  obj.accessibilityRole = str;
  obj.onChange = function onChange(nativeEvent) {
    if (c0 != null) {
      tmp(nativeEvent);
    }
    if (c1 != null) {
      tmp3(nativeEvent.nativeEvent.value);
    }
    callback({ value: nativeEvent.nativeEvent.value });
  };
  obj.onResponderTerminationRequest = returnsFalse;
  obj.onStartShouldSetResponder = returnsTrue;
  obj.ref = tmp9;
  return jsx(__INTERNAL_VIEW_CONFIGDefault, {});
};