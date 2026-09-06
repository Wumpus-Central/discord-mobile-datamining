// === Module 420: returnsFalse ===

// Module 420 (returnsFalse)
import _modDef334 from "module_334" /* 334 */;
import _mod421 from "module_421" /* 421 */;
import _slicedToArray from "module_32" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import "module_19";

const _modDef421 = _mod421;

require = fn;
let closure_3 = ["disabled", "ios_backgroundColor", "onChange", "onValueChange", "style", "thumbColor", "trackColor", "value"];
let closure_4 = ["onTintColor", "tintColor"];
const noop = fn(19);
({ useLayoutEffect: closure_7, useRef: closure_8, useState: closure_9 } = noop);
const jsx = fn(21).jsx;
function returnsFalse() {
  return false;
}
function returnsTrue() {
  return true;
}

export default function Switch(ref) {
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  c0 = undefined;
  importDefault = undefined;
  ref = undefined;
  let first;
  _slicedToArray = undefined;
  ({ disabled, ios_backgroundColor, onChange: c0, onValueChange: c1, trackColor, value } = merged);
  dependencyMap = value;
  ({ style, thumbColor } = merged);
  const tmp3 = _objectWithoutProperties(merged, ref);
  let _false;
  if (trackColor != null) {
    _false = trackColor.false;
  }
  let _true;
  if (trackColor != null) {
    _true = trackColor.true;
  }
  const tmp6 = closure_8(null);
  ref = tmp6;
  const tmp10 = _slicedToArray(closure_9({ value: null }), 2);
  first = tmp10[0];
  _slicedToArray = tmp10[1];
  const items = [value, first];
  closure_7(() => {
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
      const Commands = _mod421.Commands;
      Commands.setNativeValue(ref.current, tmp);
    }
  }, items);
  ({ onTintColor, tintColor } = tmp3);
  const tmp2Result = _objectWithoutProperties(tmp3, first);
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
  obj = { accessibilityState: tmp16, enabled: true !== disabled, on: true === value, style, thumbTintColor: thumbColor, trackColorForFalse: _false, trackColorForTrue: _true, trackTintColor: null };
  if (true === value) {
    _false = _true;
  }
  obj.trackTintColor = _false;
  obj = {};
  const tmp21 = jsx;
  const tmp9 = _modDef334(tmp6, ref.ref);
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
    closure_5({ value: nativeEvent.nativeEvent.value });
  };
  obj.onResponderTerminationRequest = returnsFalse;
  obj.onStartShouldSetResponder = returnsTrue;
  obj.ref = tmp9;
  return tmp21(_modDef421, obj);
};