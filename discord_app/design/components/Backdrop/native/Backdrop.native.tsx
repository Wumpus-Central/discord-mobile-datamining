import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let StyleSheet;
let c4;
let c5;
let closure_6;
const require = arg1;
({ Pressable: c4, StyleSheet } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = {};
createCacheKey = { fill: StyleSheet.absoluteFillObject, backdrop: null, backdropOpaque: null, accessibilityDismiss: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_SCRIM };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { backgroundColor: require("Themes").colors.MOBILE_BACKGROUND_SCRIM_OPAQUE };
createCacheKey[3] = { position: "absolute", top: 0, left: 0, right: 0, height: 16 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { backgroundColor: require("Themes").colors.MOBILE_BACKGROUND_SCRIM_OPAQUE };
const result = require("jsxProd").fileFinishedImporting("design/components/Backdrop/native/Backdrop.native.tsx");

export const Backdrop = function Backdrop(animatedProps) {
  let accessibilityLabel;
  let accessibleDismissStyle;
  let onDismiss;
  let style;
  animatedProps = animatedProps.animatedProps;
  ({ style, accessibleDismissStyle } = animatedProps);
  if (animatedProps === undefined) {
    animatedProps = closure_7;
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
    const intl = backgroundColor2(1236).intl;
    accessibilityLabel = intl.string(backgroundColor2(1236).t.WAI6xu);
  }
  backgroundColor2 = undefined;
  let backgroundColor = createCacheKey();
  let obj = backgroundColor2(3905);
  backgroundColor2 = backgroundColor.backdrop.backgroundColor;
  const items = [backgroundColor2];
  obj = { onPress: onDismiss, "aria-hidden": true };
  const memo = React.useMemo(() => backgroundColor2(outer1_2[8]).hexToRgbaString(backgroundColor2), items);
  obj = { style: items1, pointerEvents: "box-none", animatedProps, children: null };
  items1 = [backgroundColor.fill, style];
  let tmp5 = null != onDismiss;
  if (tmp5) {
    const obj1 = { style: null, onPress: null, accessibilityRole: "button", accessibilityLabel: null, "aria-hidden": null };
    const items2 = [backgroundColor.accessibilityDismiss, , ];
    const obj2 = { top: null };
    obj2[0] = importDefault(1581)().top;
    items2[1] = obj2;
    items2[2] = accessibleDismissStyle;
    obj1[0] = items2;
    obj1[1] = onDismiss;
    obj1[3] = accessibilityLabel;
    obj1[4] = animatedProps["aria-hidden"];
    tmp5 = callback(closure_4, obj1);
  }
  const items3 = [tmp5, ];
  if ("none" !== str) {
    const obj3 = {};
    const merged = Object.assign(obj);
    obj3.style = backgroundColor.fill;
    if ("none" === str) {
      let num = 0;
      const obj4 = { blurAmount: null, style: null, blurTheme: null, blurTintRgba: null, android_fallbackColor: null };
      obj4[0] = num;
      obj4[1] = backgroundColor.fill;
      obj4[2] = obj.useThemeContext().theme;
      obj4[3] = memo;
      backgroundColor = backgroundColor.backdrop.backgroundColor;
      obj4[4] = backgroundColor;
      obj3.children = tmp8(tmp16, obj4);
    } else if ("subtle" !== str) {
      num = 0.25;
    }
    num = 0.05;
  } else {
    const obj5 = {};
    const merged1 = Object.assign(obj);
    const items4 = [backgroundColor.fill, flag ? backgroundColor.backdropOpaque : backgroundColor.backdrop];
    obj5.style = items4;
    items3[1] = tmp8(tmp9, obj5);
    obj[3] = items3;
    return closure_6(importDefault(4054).View, obj);
  }
};