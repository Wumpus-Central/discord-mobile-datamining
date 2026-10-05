// _runtime/metro/06036__.js
import Fragment from "../react/00021_Fragment.js";
import Link from "../01491_Link.js";
import ColorDefault from "../06028_Color.js";
import PlatformPressable2 from "../06037_PlatformPressable.js";
import Text from "../06038_Text.js";
import react from "../00019_react.js";
import react_native from "../00017_react-native.js";

let Platform;
let StyleSheet;
function ButtonLink(arg0) {
  let action;
  let href;
  let params;
  let screen;
  ({ screen, params, action, href } = arg0);
  const merged = Object.assign(arg0, Object.assign({ screen: 0, params: 0, action: 0, href: 0 }));
  const obj = Link;
  const linkProps = obj.useLinkProps({ screen, params, action, href });
  const merged1 = Object.assign(merged);
  const merged2 = Object.assign(linkProps);
  return <ButtonBase />;
}
function ButtonBase(variant) {
  let android_ripple;
  let children;
  let color;
  let fadeResult1;
  let str3;
  let style;
  let tmp5;
  let str = variant.variant;
  if (str === undefined) {
    str = "tinted";
  }
  ({ color, android_ripple } = variant);
  ({ style, children } = variant);
  const merged = Object.assign(
    variant,
    Object.assign({ variant: 0, color: 0, android_ripple: 0, style: 0, children: 0 }),
  );
  const obj = Link;
  const theme = obj.useTheme();
  const fonts = theme.fonts;
  if (color == null) {
    color = theme.colors.primary;
  }
  if ("plain" === str) {
    str3 = "transparent";
    tmp5 = color;
  } else if ("tinted" === str) {
    const obj4 = ColorDefault(color);
    const fadeResult = obj4.fade(0.85);
    str3 = fadeResult.string();
    tmp5 = color;
  } else if ("filled" === str) {
    let str4 = "white";
    const obj11 = ColorDefault(color);
    if (!obj11.isDark()) {
      const obj2 = ColorDefault(color);
      const darkenResult = obj2.darken(0.71);
      str4 = darkenResult.string();
    }
    tmp5 = str4;
    str3 = color;
  }
  const PlatformPressable = PlatformPressable2.PlatformPressable;
  const merged1 = Object.assign(merged);
  const obj5 = { radius: 40, color: fadeResult1.string() };
  const obj8 = ColorDefault(tmp5);
  fadeResult1 = obj8.fade(0.85);
  const merged2 = Object.assign(android_ripple);
  const items = [{ backgroundColor: str3 }, closure_6.button, style];
  const items1 = [{ color: tmp5 }, fonts.regular, closure_6.text];
  return (
    <PlatformPressable android_ripple={obj5} pressOpacity={1} hoverEffect={{ color: tmp5 }} style={items}>
      {jsx(Text.Text, { style: items1, children })}
    </PlatformPressable>
  );
}
({ Platform, StyleSheet } = react_native);
const jsx = Fragment.jsx;
const styles = StyleSheet.create({
  button: { paddingHorizontal: 24, paddingVertical: 10, borderRadius: 40, borderCurve: "continuous" },
  text: { fontSize: 14, lineHeight: 20, letterSpacing: 0.1, textAlign: "center" },
});

export const Button = function Button(arg0) {
  if (!("screen" in arg0)) {
    let tmp2;
    if (!("action" in arg0)) {
      tmp2 = ButtonBase;
    }
    const obj = {};
    const merged = Object.assign(arg0);
    return tmp(tmp2, obj);
  }
  tmp2 = ButtonLink;
};
