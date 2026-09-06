// === Module 7154: ActionSheetHeaderBar ===

// Module 7154 (ActionSheetHeaderBar)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1477 */;
import useToken from "useToken" /* 4262 */;
import useIsScreenReaderEnabled from "useIsScreenReaderEnabled" /* 4962 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: c3, StyleSheet: closure_4, TouchableWithoutFeedback: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4560);
let closure_10 = createStyles.createStyles((arg0, height, marginBottom) => {
  let obj = { marginBottom };
  if ("floating" === arg0) {
    const rect = { left: 0, right: 0, position: "absolute" };
  }
  obj = { header: null, indicator: null, accessibleDismiss: null };
  const merged = Object.assign(rect);
  obj.header = obj;
  const size = { alignSelf: "center", width: nativeDefault.modules.mobile.SHEET_HANDLE_WIDTH, height: nativeDefault.modules.mobile.SHEET_HANDLE_HEIGHT, borderRadius: nativeDefault.radii.sm, top: nativeDefault.modules.mobile.SHEET_HANDLE_MARGIN_TOP };
  if ("default" === arg0) {
    obj = { backgroundColor: tmp2(576).colors.BACKGROUND_MOD_STRONG };
    let tmp4 = obj;
  } else if ("floating" === arg0) {
    const obj1 = { backgroundColor: tmp2(576).colors.BACKGROUND_MOD_MUTED };
    tmp4 = obj1;
  } else if ("overlay" === arg0) {
    const obj2 = { backgroundColor: tmp2(576).unsafe_rawColors.WHITE };
    const merged1 = Object.assign(tmp2(576).shadows.SHADOW_LOW);
    tmp4 = obj2;
  }
  const merged2 = Object.assign(tmp4);
  obj.indicator = size;
  const obj3 = {};
  const merged3 = Object.assign(absoluteFillObject.absoluteFillObject);
  obj3.height = height;
  obj3.marginTop = -height + marginBottom;
  obj.accessibleDismiss = obj3;
  return obj;
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
  let obj = useToken;
  const tmp3 = closure_10(variant, useWindowDimensionsDefault().height, obj.useToken(nativeDefault.modules.mobile.SHEET_HANDLE_MARGIN_BOTTOM));
  obj = { onPress, onAccessibilityEscape: onPress, "aria-hidden": true, children: null };
  obj = { style: null, children: null };
  const items = [tmp3.header, style];
  obj.style = items;
  const obj1 = { style: null };
  const items1 = [tmp3.indicator, tabStyle];
  obj1.style = items1;
  const isScreenReaderEnabled = obj1.useIsScreenReaderEnabled();
  obj.children = React5(timestampProducer, obj1);
  obj.children = React5(timestampProducer, obj);
  const tmp6 = React5(hasOwnProperty, obj);
  let tmp7 = tmp6;
  if (isScreenReaderEnabled) {
    const obj2 = { children: null };
    const obj3 = { style: tmp3.accessibleDismiss, accessible: true, accessibilityLabel, accessibilityRole: "button", onPress };
    const items2 = [React5(React3, obj3), tmp6];
    obj2.children = items2;
    tmp7 = React7(React6, obj2);
  }
  return tmp7;
};