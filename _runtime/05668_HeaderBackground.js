// _runtime/05668_HeaderBackground.js
import Link from "01484_Link.js";
import noop from "metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ Animated: c2, Platform, StyleSheet } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const container = StyleSheet.create({ container: { flex: 1, elevation: 4 } });

export const HeaderBackground = function HeaderBackground(style) {
  const merged = Object.assign(style, Object.assign({ style: 0 }));
  let obj = Link;
  const theme = obj.useTheme();
  ({ colors, dark } = theme);
  obj = { style: null };
  const items = [container.container, { backgroundColor: colors.card, borderBottomColor: colors.border }, style.style];
  obj.style = items;
  const merged1 = Object.assign(merged);
  return <RN.View style={null} />;
};
