// === Module 5257: Backdrop ===

// Module 5257 (Backdrop)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1612 */;
import native from "native" /* 4533 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4559 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: c3, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let closure_6 = {};
const createStyles = fn(4827);
let obj2 = { fill: StyleSheet.absoluteFillObject, backdrop: { backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM }, backdropOpaque: null, accessibilityDismiss: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM };
obj2.backdropOpaque = { backgroundColor: nativeDefault.colors.MOBILE_BACKGROUND_SCRIM_OPAQUE };
obj2.accessibilityDismiss = { position: "absolute", top: 0, left: 0, right: 0, height: 16 };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Backdrop/native/Backdrop.native.tsx");

export const Backdrop = function Backdrop(animatedProps) {
  animatedProps = animatedProps.animatedProps;
  ({ style, accessibleDismissStyle } = animatedProps);
  if (animatedProps === undefined) {
    animatedProps = closure_6;
  }
  let flag = animatedProps.opaque;
  if (flag === undefined) {
    flag = false;
  }
  let str = animatedProps.blur;
  if (str === undefined) {
    str = "none";
  }
  ({ onDismiss, accessibilityLabel } = animatedProps);
  if (accessibilityLabel === undefined) {
    const intl = util.intl;
    accessibilityLabel = intl.string(util.t.WAI6xu);
  }
  let backgroundColor = closure_7();
  const obj2 = { onPress: onDismiss, "aria-hidden": true };
  const obj3 = { style: null, pointerEvents: "box-none", animatedProps, children: null };
  const items = [backgroundColor.fill, style];
  obj3.style = items;
  let tmp4 = null != onDismiss;
  if (tmp4) {
    const obj4 = { style: null, onPress: null, accessibilityRole: "button", accessibilityLabel: null, "aria-hidden": null };
    const items1 = [backgroundColor.accessibilityDismiss, , ];
    const obj5 = { top: useSafeAreaInsetsDefault().top };
    items1[1] = obj5;
    items1[2] = accessibleDismissStyle;
    obj4.style = items1;
    obj4.onPress = onDismiss;
    obj4.accessibilityLabel = accessibilityLabel;
    obj4["aria-hidden"] = animatedProps["aria-hidden"];
    tmp4 = React4(React3, obj4);
  }
  const items2 = [tmp4, ];
  if ("none" !== str) {
    const obj6 = {};
    const merged = Object.assign(obj2);
    obj6.style = backgroundColor.fill;
    if ("none" === str) {
      let num = 0;
      const obj7 = { blurAmount: num, style: backgroundColor.fill, blurTheme: obj.useThemeContext().theme, tintColor: backgroundColor.backdrop.backgroundColor, android_fallbackColor: null };
      backgroundColor = backgroundColor.backdrop.backgroundColor;
      obj7.android_fallbackColor = backgroundColor;
      obj6.children = React4(tmp15, obj7);
    } else if ("subtle" !== str) {
      num = 0.25;
    }
    num = 0.05;
  } else {
    const obj8 = {};
    const merged1 = Object.assign(obj2);
    const items3 = [backgroundColor.fill, flag ? backgroundColor.backdropOpaque : backgroundColor.backdrop];
    obj8.style = items3;
    items2[1] = React4(tmp8, obj8);
    obj3.children = items2;
    return hasOwnProperty(ReanimatedRexportDefault.View, obj3);
  }
  obj = native;
};