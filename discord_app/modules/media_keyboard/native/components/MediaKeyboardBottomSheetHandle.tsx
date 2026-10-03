// === Module 10372: MediaKeyboardBottomSheetHandle ===

// Module 10372 (MediaKeyboardBottomSheetHandle)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import useStateFromSharedValue from "useStateFromSharedValue" /* 7941 */;
import native from "native" /* 8567 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardBottomSheetHandle.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((onPress) => {
  const cResult = c.c(7);
  onPress = onPress.onPress;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function l(arg0) {
      return arg0 > 0;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  const derivedStateFromSharedValue = useStateFromSharedValue.useDerivedStateFromSharedValue(onPress.animatedIndex, first);
  if (cResult[1] !== derivedStateFromSharedValue) {
    const intl = util.intl;
    const string = intl.string;
    let iTcuma = util.t;
    if (derivedStateFromSharedValue) {
      iTcuma = iTcuma.iTcuma;
      let stringResult = string(iTcuma);
    } else {
      stringResult = string(iTcuma.dcl9MQ);
    }
    cResult[1] = derivedStateFromSharedValue;
    cResult[2] = stringResult;
  } else {
    if (cResult[3] === cResult[2]) {
      if (cResult[4] === onPress) {
        if (cResult[5] === tmp10) {
          let tmp11 = cResult[6];
        }
        return tmp11;
      }
    }
    const obj2 = { onPress, accessibilityLabel: cResult[2], "aria-hidden": null == onPress };
    const tmp13 = jsx(native.ActionSheetDragHandle, { onPress, accessibilityLabel: cResult[2], "aria-hidden": null == onPress });
    cResult[3] = cResult[2];
    cResult[4] = onPress;
    cResult[5] = null == onPress;
    cResult[6] = tmp13;
    tmp11 = tmp13;
  }
  const tmpResult = useStateFromSharedValue;
}) : ((onPress) => {
  onPress = onPress.onPress;
  const derivedStateFromSharedValue = useStateFromSharedValue.useDerivedStateFromSharedValue(onPress.animatedIndex, (arg0) => arg0 > 0);
  const intl = util.intl;
  const string = intl.string;
  const t = util.t;
  if (derivedStateFromSharedValue) {
    let stringResult = string(t.iTcuma);
  } else {
    stringResult = string(t.dcl9MQ);
  }
  return jsx(native.ActionSheetDragHandle, { onPress, accessibilityLabel: stringResult, "aria-hidden": null == onPress });
}));