// discord_app/modules/media_keyboard/native/components/MediaKeyboardBottomSheetHandle.tsx
import util from "../../../../intl/index.native.tsx";
import useStateFromSharedValue from "../../../reanimated/native/useStateFromSharedValue.tsx";
import native from "../../../../design/components/experimental/native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/media_keyboard/native/components/MediaKeyboardBottomSheetHandle.tsx",
);

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
  return jsx(native.ActionSheetDragHandle, {
    onPress,
    accessibilityLabel: stringResult,
    "aria-hidden": null == onPress,
  });
});
