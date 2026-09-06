// === Module 4963: Backdrop ===

// Module 4963 (Backdrop)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import native from "native" /* 4271 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4296 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: c3, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let closure_6 = {};
fn(4560);
let createStyles = { fill: StyleSheet.absoluteFillObject, backdrop: null, backdropOpaque: null, accessibilityDismiss: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM };
createStyles.backdrop = createStyles;
createStyles.backdropOpaque = { backgroundColor: nativeDefault.colors.MOBILE_BACKGROUND_SCRIM_OPAQUE };
createStyles.accessibilityDismiss = { position: "absolute", top: 0, left: 0, right: 0, height: 16 };
let closure_7 = createStyles.createStyles(createStyles);
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
  let obj = { onPress: onDismiss, "aria-hidden": true };
  obj = { style: null, pointerEvents: "box-none", animatedProps, children: null };
  const items = [backgroundColor.fill, style];
  obj.style = items;
  let tmp4 = null != onDismiss;
  if (tmp4) {
    const obj1 = { style: null, onPress: null, accessibilityRole: "button", accessibilityLabel: null, "aria-hidden": null };
    const items1 = [backgroundColor.accessibilityDismiss, , ];
    const obj2 = { top: useSafeAreaInsetsDefault().top };
    items1[1] = obj2;
    items1[2] = accessibleDismissStyle;
    obj1.style = items1;
    obj1.onPress = onDismiss;
    obj1.accessibilityLabel = accessibilityLabel;
    obj1["aria-hidden"] = animatedProps["aria-hidden"];
    tmp4 = React4(React3, obj1);
  }
  const items2 = [tmp4, ];
  if ("none" !== str) {
    const obj3 = {};
    const merged = Object.assign(obj);
    obj3.style = backgroundColor.fill;
    if ("none" === str) {
      let num = 0;
      const obj4 = { blurAmount: num, style: backgroundColor.fill, blurTheme: obj.useThemeContext().theme, tintColor: backgroundColor.backdrop.backgroundColor, android_fallbackColor: null };
      backgroundColor = backgroundColor.backdrop.backgroundColor;
      obj4.android_fallbackColor = backgroundColor;
      obj3.children = tmp7(tmp15, obj4);
    } else if ("subtle" !== str) {
      num = 0.25;
    }
    num = 0.05;
  } else {
    const obj5 = {};
    const merged1 = Object.assign(obj);
    const items3 = [backgroundColor.fill, flag ? backgroundColor.backdropOpaque : backgroundColor.backdrop];
    obj5.style = items3;
    items2[1] = tmp7(tmp8, obj5);
    obj.children = items2;
    return hasOwnProperty(ReanimatedRexportDefault.View, obj);
  }
};