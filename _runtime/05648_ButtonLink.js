// === Module 5648: ButtonLink ===

// Module 5648 (ButtonLink)
import Link from "Link" /* 1484 */;
import ColorDefault from "Color" /* 5640 */;
import _mod5649 from "module_5649" /* 5649 */;
import Text from "Text" /* 5650 */;
import noop from "module_19" /* 19 */;

require = fn;
function ButtonLink(arg0) {
  ({ screen, params, action, href } = arg0);
  const merged = Object.assign(arg0, Object.assign({ screen: 0, params: 0, action: 0, href: 0 }));
  let obj = Link;
  const linkProps = obj.useLinkProps({ screen, params, action, href });
  obj = {};
  const merged1 = Object.assign(merged);
  const merged2 = Object.assign(linkProps);
  return <ButtonBase />;
}
function ButtonBase(variant) {
  let str = variant.variant;
  if (str === undefined) {
    str = "tinted";
  }
  ({ color, android_ripple } = variant);
  ({ style, children } = variant);
  const merged = Object.assign(variant, Object.assign({ variant: 0, color: 0, android_ripple: 0, style: 0, children: 0 }));
  let obj = Link;
  const theme = obj.useTheme();
  if (color == null) {
    color = theme.colors.primary;
  }
  if ("plain" === str) {
    let str3 = "transparent";
    let tmp5 = color;
  } else if ("tinted" === str) {
    const obj4 = ColorDefault(color);
    str3 = ColorDefault(color).fade(0.85).string();
    tmp5 = color;
    const fadeResult = ColorDefault(color).fade(0.85);
  } else if ("filled" === str) {
    let str4 = "white";
    if (!obj11.isDark()) {
      let obj1 = tmp9(5640)(color);
      str4 = obj1.darken(0.71).string();
      const darkenResult = obj1.darken(0.71);
    }
    tmp5 = str4;
    str3 = color;
    obj11 = ColorDefault(color);
    tmp9 = importDefault;
  }
  obj = {};
  const merged1 = Object.assign(merged);
  obj = { radius: 40, color: null };
  const obj8 = ColorDefault(tmp5);
  obj.color = ColorDefault(tmp5).fade(0.85).string();
  const merged2 = Object.assign(android_ripple);
  obj.android_ripple = obj;
  obj.pressOpacity = 1;
  obj.hoverEffect = { color: tmp5 };
  const items = [{ backgroundColor: str3 }, closure_6.button, style];
  obj.style = items;
  obj1 = { style: null, children };
  const items1 = [{ color: tmp5 }, theme.fonts.regular, closure_6.text];
  obj1.style = items1;
  obj.children = jsx(Text.Text, { style: null, children });
  return jsx(_mod5649.PlatformPressable, { radius: 40, color: null });
}
get_ActivityIndicator = fn(17);
({ Platform, StyleSheet } = get_ActivityIndicator);
const jsx = fn(21).jsx;
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