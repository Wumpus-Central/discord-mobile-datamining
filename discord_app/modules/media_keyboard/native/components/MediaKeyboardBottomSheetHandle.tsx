// === Module 10655: ? ===

// Module 10655
import getSystemLocale from "getSystemLocale" /* 1233 */;
import map from "map" /* 8584 */;
import TwinButtons from "TwinButtons" /* 8998 */;
import { jsx } from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
const memoResult = importAllResult.memo(function MediaKeyboardBottomSheetHandle(onPress) {
  onPress = onPress.onPress;
  let obj = map;
  const derivedStateFromSharedValue = obj.useDerivedStateFromSharedValue(onPress.animatedIndex, (arg0) => arg0 > 0);
  const intl = getSystemLocale.intl;
  const string = intl.string;
  const t = getSystemLocale.t;
  if (derivedStateFromSharedValue) {
    let stringResult = string(t.iTcuma);
  } else {
    stringResult = string(t.dcl9MQ);
  }
  obj = { onPress, accessibilityLabel: stringResult, "aria-hidden": null == onPress };
  return jsx(TwinButtons.ActionSheetDragHandle, { onPress, accessibilityLabel: stringResult, "aria-hidden": null == onPress });
});
const result = require("set").fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardBottomSheetHandle.tsx");

export default memoResult;