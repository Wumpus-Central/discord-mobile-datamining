// === Module 10275: ? ===

// Module 10275
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import useGradientBottom from "useGradientBottom" /* 8501 */;
import TwinButtons from "TwinButtons" /* 8811 */;
import map from "map" /* 8995 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { DRAG_HANDLE } from "DRAG_HANDLE" /* 1624 */;
import { jsx } from "jsxProd" /* 21 */;
import "createCacheKey";
import importAllResult from "noop" /* 19 */;

require = fn;
({ Pressable: c3, View: c4, StyleSheet } = get_ActivityIndicator);
let obj = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj.backgroundColor = "transparent";
obj.height = DRAG_HANDLE.slotHeight;
obj.alignItems = "center";
obj.bottom = undefined;
obj[0] = obj;
const createCacheKey = { backgroundColor: DRAG_HANDLE.barColor, borderRadius: ThemesDefault.radii.xs, marginTop: DRAG_HANDLE.barMarginTop, height: DRAG_HANDLE.barHeight, width: DRAG_HANDLE.barWidth };
obj[1] = createCacheKey;
let closure_6 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function MediaKeyboardBottomSheetHandle(onPress) {
  onPress = onPress.onPress;
  const tmp = callback();
  let obj = useGradientBottom;
  const gradientBottom = obj.useGradientBottom();
  obj1 = map;
  const derivedStateFromSharedValue = obj1.useDerivedStateFromSharedValue(onPress.animatedIndex, (arg0) => arg0 > 0);
  const intl = getSystemLocale.intl;
  const string = intl.string;
  const t = getSystemLocale.t;
  if (derivedStateFromSharedValue) {
    let stringResult = string(t.iTcuma);
  } else {
    stringResult = string(t.dcl9MQ);
  }
  if (tmp5) {
    obj = { onPress: null, accessibilityLabel: null, "aria-hidden": null };
    obj[0] = onPress;
    obj[1] = stringResult;
    obj[2] = null == onPress;
    let tmp8Result = jsx(TwinButtons.ActionSheetDragHandle, { onPress: null, accessibilityLabel: null, "aria-hidden": null });
  } else {
    obj = { accessibilityLabel: null, accessibilityRole: "button", "aria-hidden": null, style: null, onPress: null, children: null };
    obj[0] = stringResult;
    obj[2] = null == onPress;
    const items = [tmp.headerHandleWrap, gradientBottom];
    obj[3] = items;
    obj[4] = onPress;
    obj1 = { style: null };
    obj1[0] = tmp.dragHandleBar;
    obj[5] = <closure_4 style={null} />;
    tmp8Result = <closure_3 accessibilityLabel={null} accessibilityRole="button" aria-hidden={null} style={null} onPress={null}>{null}</closure_3>;
  }
  return tmp8Result;
});
const result = require("obj132").fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardBottomSheetHandle.tsx");

export default memoResult;