// discord_app/modules/media_keyboard/native/components/MediaKeyboardBottomSheetHandle.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import useGradientBottom from "../../../client_themes/native/ClientThemesOverrides.tsx";
import TwinButtons from "../../../../design/components/experimental/native.tsx";
import map from "../../../reanimated/native/useStateFromSharedValue.tsx";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { DRAG_HANDLE } from "../MediaKeyboardConstants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";
import importAllResult from "../../../../../_runtime/00019_noop.js";

require = arg1;
({ Pressable: c3, View: c4, StyleSheet } = get_ActivityIndicator);
let obj = { headerHandleWrap: null, dragHandleBar: null };
obj = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj.backgroundColor = "transparent";
obj.height = DRAG_HANDLE.slotHeight;
obj.alignItems = "center";
obj.bottom = undefined;
obj[0] = obj;
createCacheKey = { backgroundColor: DRAG_HANDLE.barColor, borderRadius: ThemesDefault.radii.xs, marginTop: DRAG_HANDLE.barMarginTop, height: DRAG_HANDLE.barHeight, width: DRAG_HANDLE.barWidth };
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
    let tmp8Result = tmp8(TwinButtons.ActionSheetDragHandle, obj);
  } else {
    obj = { accessibilityLabel: null, accessibilityRole: "button", "aria-hidden": null, style: null, onPress: null, children: null };
    obj[0] = stringResult;
    obj[2] = null == onPress;
    const items = [tmp.headerHandleWrap, gradientBottom];
    obj[3] = items;
    obj[4] = onPress;
    obj1 = { style: null };
    obj1[0] = tmp.dragHandleBar;
    obj[5] = tmp8(closure_4, obj1);
    tmp8Result = tmp8(closure_3, obj);
  }
  return tmp8Result;
});
const result = require("set").fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardBottomSheetHandle.tsx");

export default memoResult;