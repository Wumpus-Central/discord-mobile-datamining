// === Module 7261: ActionSheetHeaderBar ===

// Module 7261 (ActionSheetHeaderBar)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1478 */;
import useToken from "useToken" /* 4341 */;
import useIsScreenReaderEnabled from "useIsScreenReaderEnabled" /* 5046 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: c3, StyleSheet: closure_4, TouchableWithoutFeedback: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4639);
let closure_10 = createStyles.createStyles((arg0, height, marginBottom) => {
  if ("floating" === arg0) {
    const rect = { left: 0, right: 0, position: "absolute" };
  }
  const obj2 = { header: null, indicator: null, accessibleDismiss: null };
  const merged = Object.assign(rect);
  obj2.header = { marginBottom };
  const size = { alignSelf: "center", width: nativeDefault.modules.mobile.SHEET_HANDLE_WIDTH, height: nativeDefault.modules.mobile.SHEET_HANDLE_HEIGHT, borderRadius: nativeDefault.radii.sm, top: nativeDefault.modules.mobile.SHEET_HANDLE_MARGIN_TOP };
  if ("default" === arg0) {
    const obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
    let tmp4 = obj3;
  } else if ("floating" === arg0) {
    const obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
    tmp4 = obj4;
  } else if ("overlay" === arg0) {
    const obj5 = { backgroundColor: nativeDefault.unsafe_rawColors.WHITE };
    const merged1 = Object.assign(nativeDefault.shadows.SHADOW_LOW);
    tmp4 = obj5;
  }
  const merged2 = Object.assign(tmp4);
  obj2.indicator = size;
  const obj6 = {};
  const merged3 = Object.assign(absoluteFillObject.absoluteFillObject);
  obj6.height = height;
  obj6.marginTop = -height + marginBottom;
  obj2.accessibleDismiss = obj6;
  return obj2;
});
let size = fn(2);
const result = size.fileFinishedImporting("design/components/Sheet/native/ActionSheetHeaderBar.native.tsx");

export const ActionSheetHeaderBar = function ActionSheetHeaderBar(accessibilityLabel) {
  accessibilityLabel = accessibilityLabel.accessibilityLabel;
  if (accessibilityLabel === undefined) {
    const intl = util.intl;
    accessibilityLabel = intl.string(util.t.WAI6xu);
  }
  ({ onPress, variant, style, tabStyle } = accessibilityLabel);
  if (variant === undefined) {
    variant = "default";
  }
  const tmp3 = closure_10(variant, useWindowDimensionsDefault().height, useToken.useToken(nativeDefault.modules.mobile.SHEET_HANDLE_MARGIN_BOTTOM));
  const obj3 = { onPress, onAccessibilityEscape: onPress, "aria-hidden": true, children: null };
  const obj4 = { style: null, children: null };
  const items = [tmp3.header, style];
  obj4.style = items;
  const obj5 = { style: null };
  const items1 = [tmp3.indicator, tabStyle];
  obj5.style = items1;
  const isScreenReaderEnabled = useIsScreenReaderEnabled.useIsScreenReaderEnabled();
  obj4.children = React5(timestampProducer, obj5);
  obj3.children = React5(timestampProducer, obj4);
  const tmp6 = React5(hasOwnProperty, obj3);
  let tmp7 = tmp6;
  if (isScreenReaderEnabled) {
    const obj6 = { children: null };
    const obj7 = { style: tmp3.accessibleDismiss, accessible: true, accessibilityLabel, accessibilityRole: "button", onPress };
    const items2 = [React5(React3, obj7), tmp6];
    obj6.children = items2;
    tmp7 = React7(React6, obj6);
  }
  return tmp7;
};