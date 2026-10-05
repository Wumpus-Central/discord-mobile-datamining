// === Module 6049: HeaderIcon ===

// Module 6049 (HeaderIcon)
import Fragment from "Fragment" /* 21 */;
import Link from "Link" /* 1491 */;
import react_native from "react-native" /* 17 */;

let Platform;
let StyleSheet;
let c2;
({ Image: c2, Platform, StyleSheet } = react_native);
const jsx = Fragment.jsx;
const styles = StyleSheet.create({ icon: { width: 24, height: 24, margin: 3 }, flip: { transform: "scaleX(-1)" } });

export const HeaderIcon = function HeaderIcon(arg0) {
  let source;
  let style;
  ({ source, style } = arg0);
  const merged = Object.assign(arg0, Object.assign({ source: 0, style: 0 }));
  const obj = Link;
  const colors = obj.useTheme().colors;
  const items = [closure_4.icon, , ];
  const obj2 = Link;
  const flip = "rtl" === obj2.useLocale().direction && closure_4.flip;
  items[1] = flip;
  items[2] = style;
  const merged1 = Object.assign(merged);
  return <React2 source={source} resizeMode="contain" fadeDuration={0} tintColor={colors.text} style={items} />;
};
export const ICON_SIZE = 24;
export const ICON_MARGIN = 3;