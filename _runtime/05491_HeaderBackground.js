// === Module 5491: HeaderBackground ===

// Module 5491 (HeaderBackground)
import noopAll from "noop" /* 19 */;
import createStandardNavigationFactories from "createStandardNavigationFactories" /* 1501 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
({ Animated: obj1, Platform, StyleSheet } = get_ActivityIndicator);
const styles = StyleSheet.create({ container: { flex: 1, elevation: 4 } });

export const HeaderBackground = function HeaderBackground(style) {
  const merged = Object.assign(style, Object.create(null));
  let obj = createStandardNavigationFactories;
  const theme = obj.useTheme();
  ({ colors, dark } = theme);
  obj = { style: items };
  items = [container.container, { backgroundColor: colors.card, borderBottomColor: colors.border }, style.style];
  const merged1 = Object.assign(merged);
  return <RN.View style={items} />;
};