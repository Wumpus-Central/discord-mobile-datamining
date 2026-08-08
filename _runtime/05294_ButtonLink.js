// _runtime/05294_ButtonLink.js
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";
import { createStandardNavigationFactories } from "01481_createStandardNavigationFactories.js";
import { Color } from "05286_Color.js";
import { Animated } from "05295_Animated.js";
import { Text } from "05296_Text.js";

let Platform;
let StyleSheet;
const require = arg1;
function ButtonLink(arg0) {
  let action;
  let href;
  let params;
  let screen;
  ({ screen, params, action, href } = arg0);
  const merged = Object.assign(arg0, Object.create(null));
  let obj = createStandardNavigationFactories;
  const linkProps = obj.useLinkProps({ screen, params, action, href });
  obj = {};
  const merged1 = Object.assign(merged);
  const merged2 = Object.assign(linkProps);
  return <ButtonBase />;
}
function ButtonBase(variant) {
  let android_ripple;
  let children;
  let color;
  let style;
  let str = variant.variant;
  if (str === undefined) {
    str = "tinted";
  }
  ({ color, android_ripple } = variant);
  ({ style, children } = variant);
  const merged = Object.assign(variant, Object.create(null));
  let obj = createStandardNavigationFactories;
  const theme = obj.useTheme();
  if (color == null) {
    color = theme.colors.primary;
  }
  if ("plain" === str) {
    let str3 = "transparent";
    let tmp5 = color;
  } else if ("tinted" === str) {
    const obj4 = Color(color);
    str3 = Color(color).fade(0.85).string();
    tmp5 = color;
    const fadeResult = Color(color).fade(0.85);
  } else if ("filled" === str) {
    let str4 = "white";
    if (!obj10.isDark()) {
      const obj2 = tmp9(5286)(color);
      str4 = tmp9(5286)(color).darken(0.71).string();
      const darkenResult = tmp9(5286)(color).darken(0.71);
    }
    tmp5 = str4;
    str3 = color;
    obj10 = Color(color);
    tmp9 = importDefault;
  }
  obj = {};
  const merged1 = Object.assign(merged);
  obj = { radius: 40, color: null };
  const obj8 = Color(tmp5);
  obj[1] = Color(tmp5).fade(0.85).string();
  const merged2 = Object.assign(android_ripple);
  obj.android_ripple = obj;
  obj.pressOpacity = 1;
  obj.hoverEffect = { color: tmp5 };
  const items = [{ backgroundColor: str3 }, closure_6.button, style];
  obj.style = items;
  const items1 = [{ color: tmp5 }, theme.fonts.regular, closure_6.text];
  obj.children = jsx(Text.Text, { style: items1, children });
  return jsx(Animated.PlatformPressable, { radius: 40, color: null });
}
({ Platform, StyleSheet } = get_ActivityIndicator);
const styles = StyleSheet.create({ button: { paddingHorizontal: 24, paddingVertical: 10, borderRadius: 40, borderCurve: "continuous" }, text: { fontSize: 14, lineHeight: 20, letterSpacing: 0.1, textAlign: "center" } });

export const Button = function Button(arg0) {
  if (!("screen" in arg0)) {
    if (!("action" in arg0)) {
      let tmp2 = ButtonBase;
    }
    const obj = {};
    const merged = Object.assign(arg0);
    return tmp(tmp2, obj);
  }
  tmp2 = ButtonLink;
};