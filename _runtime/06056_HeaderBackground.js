// === Module 6056: HeaderBackground ===

// Module 6056 (HeaderBackground)
import Fragment from "Fragment" /* 21 */;
import Link from "Link" /* 1491 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;

let Platform;
let StyleSheet;
let c2;
({ Animated: c2, Platform, StyleSheet } = react_native);
const jsx = Fragment.jsx;
const container = StyleSheet.create({ container: { flex: 1, elevation: 4 } });

export const HeaderBackground = function HeaderBackground(style) {
  let colors;
  let dark;
  style = style.style;
  const merged = Object.assign(style, Object.assign({ style: 0 }));
  const obj = Link;
  const theme = obj.useTheme();
  ({ colors, dark } = theme);
  const items = [container.container, { backgroundColor: colors.card, borderBottomColor: colors.border }, style];
  const View = RN.View;
  const merged1 = Object.assign(merged);
  return <View style={items} />;
};