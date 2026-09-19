// _runtime/05880_HeaderBackground.js
import Link from "01485_Link.js";
import noop from "metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ Animated: c2, Platform, StyleSheet } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const container = StyleSheet.create({ container: { flex: 1, elevation: 4 } });

export const HeaderBackground = function HeaderBackground(style) {
  const merged = Object.assign(style, Object.assign({ style: 0 }));
  const theme = Link.useTheme();
  ({ colors, dark } = theme);
  const obj2 = { style: null };
  const items = [container.container, { backgroundColor: colors.card, borderBottomColor: colors.border }, style.style];
  obj2.style = items;
  const merged1 = Object.assign(merged);
  return <RN.View style={null} />;
};
