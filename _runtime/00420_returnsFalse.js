// _runtime/00420_returnsFalse.js
import _slicedToArray from "_slicedToArray";
import _objectWithoutProperties from "_objectWithoutProperties";
import "noop";
import noop from "noop";
import { jsx } from "jsxProd";
import { useMergeRefs } from "00334_useMergeRefs.js";
import { __INTERNAL_VIEW_CONFIG } from "metro/00421___INTERNAL_VIEW_CONFIG.js";

let c9;
let error;
let metroImportAll;
const require = arg1;
let closure_3 = ["disabled", "ios_backgroundColor", "onChange", "onValueChange", "style", "thumbColor", "trackColor", "value"];
let closure_4 = ["onTintColor", "tintColor"];
({ useLayoutEffect: error, useRef: metroImportAll, useState: c9 } = noop);
function returnsFalse() {
  return false;
}
function returnsTrue() {
  return true;
}

export default function Switch(ref) {
  let c0;
  let c1;
  let disabled;
  let ios_backgroundColor;
  let onTintColor;
  let style;
  let thumbColor;
  let tintColor;
  let trackColor;
  let value;
  const merged = Object.assign(ref, Object.create(null));
  c0 = undefined;
  let importDefault;
  let dependencyMap;
  let c3;
  let first;
  let callback;
  ({ disabled, ios_backgroundColor, onChange: c0, onValueChange: c1, trackColor, value } = merged);
  dependencyMap = value;
  ({ style, thumbColor } = merged);
  const tmp3 = callback2(merged, c3);
  let _false;
  if (trackColor != null) {
    _false = trackColor.false;
  }
  let _true;
  if (trackColor != null) {
    _true = trackColor.true;
  }
  const tmp6 = callback4(null);
  c3 = tmp6;
  const tmp10 = callback(callback5({ value: null }), 2);
  first = tmp10[0];
  callback = tmp10[1];
  const items = [value, first];
  callback3(() => {
    let tmp2 = null != first.value && first.value !== tmp;
    if (tmp2) {
      const current = _undefined3.current;
      let setNativeProps;
      if (current != null) {
        setNativeProps = current.setNativeProps;
      }
      tmp2 = null != setNativeProps;
    }
    if (tmp2) {
      const Commands = _undefined(_undefined2[5]).Commands;
      Commands.setNativeValue(_undefined3.current, tmp);
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
  let tmp2 = callback2;
  const tmp21 = jsx;
  const tmp7 = importDefault;
  const tmp9 = useMergeRefs(tmp6, ref.ref);
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
  return tmp21(__INTERNAL_VIEW_CONFIG, obj);
};