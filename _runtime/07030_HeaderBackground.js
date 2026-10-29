// === Module 7030: HeaderBackground ===

// Module 7030 (HeaderBackground)
import Link from "Link" /* 1504 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Animated: c2, Platform, StyleSheet } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const container = StyleSheet.create({ container: { flex: 1, elevation: 4 } });

export function HeaderBackground(style) {
  const merged = Object.assign(style, Object.assign({ style: 0 }));
  const theme = Link.useTheme();
  ({ colors, dark } = theme);
  const obj2 = { style: null };
  const items = [container.container, { backgroundColor: colors.card, borderBottomColor: colors.border }, style.style];
  obj2.style = items;
  const merged1 = Object.assign(merged);
  return <RN.View style={null} />;
}