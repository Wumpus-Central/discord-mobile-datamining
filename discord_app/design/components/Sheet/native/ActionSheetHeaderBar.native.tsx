// === Module 5937: ActionSheetHeaderBar ===

// Module 5937 (ActionSheetHeaderBar)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1493 */;
import map from "map" /* 4197 */;
import SCREEN_READER_ENABLED_GETTER from "SCREEN_READER_ENABLED_GETTER" /* 4915 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
noopAll;
({ Pressable: c3, StyleSheet: c4, TouchableWithoutFeedback: c5, View: closure_6 } = get_ActivityIndicator);
({ jsx: error, Fragment: closure_8, jsxs: c9 } = jsxProd);
let closure_10 = createCacheKey.createStyles((arg0, height, marginBottom) => {
  let obj = { marginBottom };
  if ("floating" === arg0) {
    obj = { left: 0, right: 0, position: "absolute" };
  }
  obj = { header: null, indicator: null, accessibleDismiss: null };
  const merged = Object.assign(obj);
  obj[0] = obj;
  if ("default" === arg0) {
    const obj2 = { backgroundColor: null };
    obj2[0] = tmp2(712).colors.BACKGROUND_MOD_STRONG;
    let tmp4 = obj2;
  } else if ("floating" === arg0) {
    const obj3 = { backgroundColor: null };
    obj3[0] = tmp2(712).colors.BACKGROUND_MOD_MUTED;
    tmp4 = obj3;
  } else if ("overlay" === arg0) {
    const obj4 = { backgroundColor: null };
    obj4[0] = tmp2(712).unsafe_rawColors.WHITE;
    const merged1 = Object.assign(tmp2(712).shadows.SHADOW_LOW);
    tmp4 = obj4;
  }
  const merged2 = Object.assign(tmp4);
  obj[1] = { alignSelf: "center", width: ThemesDefault.modules.mobile.SHEET_HANDLE_WIDTH, height: ThemesDefault.modules.mobile.SHEET_HANDLE_HEIGHT, borderRadius: ThemesDefault.radii.sm, top: ThemesDefault.modules.mobile.SHEET_HANDLE_MARGIN_TOP };
  const obj5 = {};
  const merged3 = Object.assign(absoluteFillObject.absoluteFillObject);
  obj5.height = height;
  obj5.marginTop = -height + marginBottom;
  obj[2] = obj5;
  return obj;
});
const result = require("set").fileFinishedImporting("design/components/Sheet/native/ActionSheetHeaderBar.native.tsx");

export const ActionSheetHeaderBar = function ActionSheetHeaderBar(accessibilityLabel) {
  accessibilityLabel = accessibilityLabel.accessibilityLabel;
  if (accessibilityLabel === undefined) {
    const intl = getSystemLocale.intl;
    accessibilityLabel = intl.string(getSystemLocale.t.WAI6xu);
  }
  ({ onPress, variant, style, tabStyle } = accessibilityLabel);
  if (variant === undefined) {
    variant = "default";
  }
  let obj = map;
  const tmp3 = callback3(variant, useWindowDimensionsDefault().height, obj.useToken(ThemesDefault.modules.mobile.SHEET_HANDLE_MARGIN_BOTTOM));
  obj1 = SCREEN_READER_ENABLED_GETTER;
  obj = { onPress, onAccessibilityEscape: onPress, "aria-hidden": true, children: null };
  obj = { style: items, children: null };
  items = [tmp3.header, style];
  const items1 = [tmp3.indicator, tabStyle];
  const isScreenReaderEnabled = obj1.useIsScreenReaderEnabled();
  obj[1] = callback(closure_6, { style: items1 });
  obj[3] = callback(closure_6, obj);
  const tmp6 = callback(closure_5, obj);
  let tmp7 = tmp6;
  if (isScreenReaderEnabled) {
    obj1 = { children: null };
    const obj2 = { style: null, accessible: true, accessibilityLabel: null, accessibilityRole: "button", onPress: null };
    obj2[0] = tmp3.accessibleDismiss;
    obj2[2] = accessibilityLabel;
    obj2[4] = onPress;
    const items2 = [callback(closure_3, obj2), tmp6];
    obj1[0] = items2;
    tmp7 = callback2(closure_8, obj1);
  }
  return tmp7;
};