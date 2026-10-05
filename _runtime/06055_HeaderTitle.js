// === Module 6055: HeaderTitle ===

// Module 6055 (HeaderTitle)
import Fragment from "Fragment" /* 21 */;
import Link from "Link" /* 1491 */;
import react_native from "react-native" /* 17 */;

let Platform;
let StyleSheet;
let c2;
({ Animated: c2, Platform, StyleSheet } = react_native);
const jsx = Fragment.jsx;
const title = StyleSheet.create({ title: { fontSize: 20 } });

export const HeaderTitle = function HeaderTitle(tintColor) {
  let colors;
  let fonts;
  let text = tintColor.tintColor;
  const style = tintColor.style;
  const merged = Object.assign(tintColor, Object.assign({ tintColor: 0, style: 0 }));
  const obj = Link;
  const theme = obj.useTheme();
  ({ colors, fonts } = theme);
  const Text = RN.Text;
  const merged1 = Object.assign(merged);
  if (undefined === text) {
    text = colors.text;
  }
  const items = [{ color: text }, fonts.medium, title.title, style];
  return <Text role="heading" aria-level="1" numberOfLines={1} style={items} />;
};