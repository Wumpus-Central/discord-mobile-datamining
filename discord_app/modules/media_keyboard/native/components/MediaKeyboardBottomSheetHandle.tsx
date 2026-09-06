// === Module 10641: MediaKeyboardBottomSheetHandle ===

// Module 10641 (MediaKeyboardBottomSheetHandle)
import util from "util" /* 1114 */;
import useStateFromSharedValue from "useStateFromSharedValue" /* 8265 */;
import native from "native" /* 8902 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardBottomSheetHandle.tsx");

export default noop.memo(function MediaKeyboardBottomSheetHandle(onPress) {
  onPress = onPress.onPress;
  let obj = useStateFromSharedValue;
  const derivedStateFromSharedValue = obj.useDerivedStateFromSharedValue(onPress.animatedIndex, (arg0) => arg0 > 0);
  const intl = util.intl;
  const string = intl.string;
  const t = util.t;
  if (derivedStateFromSharedValue) {
    let stringResult = string(t.iTcuma);
  } else {
    stringResult = string(t.dcl9MQ);
  }
  obj = { onPress, accessibilityLabel: stringResult, "aria-hidden": null == onPress };
  return jsx(native.ActionSheetDragHandle, { onPress, accessibilityLabel: stringResult, "aria-hidden": null == onPress });
});