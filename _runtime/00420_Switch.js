// === Module 420: Switch ===

// Module 420 (Switch)
import Fragment from "Fragment" /* 21 */;
import useMergeRefsDefault from "useMergeRefs" /* 334 */;
import _mod421 from "module_421" /* 421 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import "react";
import react from "react" /* 19 */;

let dependencyMap, importDefault;

let c9;
let metroImportAll;
let metroImportDefault;
let tmp7;
const _modDef421 = tmp7(421);
let closure_3 = ["disabled", "ios_backgroundColor", "onChange", "onValueChange", "style", "thumbColor", "trackColor", "value"];
let closure_4 = ["onTintColor", "tintColor"];
let _slicedToArray = _slicedToArray_mod;
({ useLayoutEffect: metroImportDefault, useRef: metroImportAll, useState: c9 } = react);
const jsx = Fragment.jsx;
function returnsFalse() {
  return false;
}
function returnsTrue() {
  return true;
}

export default function Switch(ref) {
  let c0;
  let c1;
  let c2;
  let closure_5;
  let disabled;
  let first;
  let ios_backgroundColor;
  let onTintColor;
  let style;
  let thumbColor;
  let tintColor;
  let trackColor;
  let value;
  ref = ref.ref;
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  c0 = undefined;
  importDefault = undefined;
  ref = undefined;
  first = undefined;
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
  const tmp9 = useMergeRefsDefault(tmp6, ref);
  [first, _slicedToArray] = closure_9({ value: null });
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
      Commands.setNativeValue(ref.current, true === c2);
    }
  }, items);
  ({ onTintColor, tintColor } = tmp3);
  const tmp2Result = _objectWithoutProperties(tmp3, first);
  const accessibilityState = tmp2Result.accessibilityState;
  if (null == disabled) {
    let disabled1;
    if (accessibilityState != null) {
      disabled1 = accessibilityState.disabled;
    }
    disabled = disabled1;
  }
  let disabled2;
  if (accessibilityState != null) {
    disabled2 = accessibilityState.disabled;
  }
  let tmp16 = accessibilityState;
  if (disabled !== disabled2) {
    let obj = { disabled };
    const merged1 = Object.assign(accessibilityState);
    tmp16 = obj;
  }
  const obj2 = { accessibilityState: tmp16, enabled: true !== disabled, on: true === value, style, thumbTintColor: thumbColor, trackColorForFalse: _false, trackColorForTrue: _true, trackTintColor: _false };
  if (true === value) {
    _false = _true;
  }
  _modDef421;
  const merged2 = Object.assign(tmp2Result);
  const merged3 = Object.assign(obj2);
  let str = merged.accessibilityRole;
  if (str == null) {
    str = "switch";
  }
  return <tmp7Result accessibilityRole={str} onChange={function onChange(nativeEvent) {
    if (c0 != null) {
      tmp(nativeEvent);
    }
    if (c1 != null) {
      tmp3(nativeEvent.nativeEvent.value);
    }
    const obj = { value: nativeEvent.nativeEvent.value };
    closure_5(obj);
  }} onResponderTerminationRequest={returnsFalse} onStartShouldSetResponder={returnsTrue} ref={tmp9} />;
};