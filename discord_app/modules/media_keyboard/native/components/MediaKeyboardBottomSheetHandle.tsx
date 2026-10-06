// === Module 10385: MediaKeyboardBottomSheetHandle ===

// Module 10385 (MediaKeyboardBottomSheetHandle)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import intl2 from "intl" /* 1126 */;
import useStateFromSharedValue from "useStateFromSharedValue" /* 7952 */;
import native from "native" /* 8602 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let onPress;

const jsx = Fragment.jsx;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((onPress) => {
  let first;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(7);
  onPress = onPress.onPress;
  const animatedIndex = onPress.animatedIndex;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function l(arg0) {
      return arg0 > 0;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  const tmpResult = useStateFromSharedValue;
  const derivedStateFromSharedValue = tmpResult.useDerivedStateFromSharedValue(animatedIndex, first);
  if (cResult[1] !== derivedStateFromSharedValue) {
    let stringResult;
    const intl = intl2.intl;
    const string = intl.string;
    const t = intl2.t;
    if (derivedStateFromSharedValue) {
      stringResult = string(t.iTcuma);
    } else {
      stringResult = string(t.dcl9MQ);
    }
    cResult[1] = derivedStateFromSharedValue;
    cResult[2] = stringResult;
    tmp6 = stringResult;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] === tmp6) {
    if (cResult[4] === onPress) {
      let tmp9;
      if (cResult[5] === null == onPress) {
        tmp9 = cResult[6];
      }
      return tmp9;
    }
  }
  const tmp10 = jsx(native.ActionSheetDragHandle, { onPress, accessibilityLabel: tmp6, "aria-hidden": null == onPress });
  cResult[3] = tmp6;
  cResult[4] = onPress;
  cResult[5] = null == onPress;
  cResult[6] = tmp10;
  tmp9 = tmp10;
}) : ((onPress) => {
  let stringResult;
  onPress = onPress.onPress;
  const animatedIndex = onPress.animatedIndex;
  const obj = useStateFromSharedValue;
  const derivedStateFromSharedValue = obj.useDerivedStateFromSharedValue(animatedIndex, (arg0) => arg0 > 0);
  const intl = intl2.intl;
  const string = intl.string;
  const t = intl2.t;
  if (derivedStateFromSharedValue) {
    stringResult = string(t.iTcuma);
  } else {
    stringResult = string(t.dcl9MQ);
  }
  return jsx(native.ActionSheetDragHandle, { onPress, accessibilityLabel: stringResult, "aria-hidden": null == onPress });
}));
const result = size.fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardBottomSheetHandle.tsx");

export default memoResult;