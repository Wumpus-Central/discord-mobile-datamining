// _runtime/05354_HeaderBackground.js
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";
import { createStandardNavigationFactories } from "01500_createStandardNavigationFactories.js";

let Platform;
let StyleSheet;
let obj1;
const require = arg1;
({ Animated: obj1, Platform, StyleSheet } = get_ActivityIndicator);
const styles = StyleSheet.create({ container: { flex: 1, elevation: 4 } });

export const HeaderBackground = function HeaderBackground(style) {
  let colors;
  let dark;
  const merged = Object.assign(style, Object.create(null));
  let obj = createStandardNavigationFactories;
  const theme = obj.useTheme();
  ({ colors, dark } = theme);
  obj = { style: items };
  items = [container.container, { backgroundColor: colors.card, borderBottomColor: colors.border }, style.style];
  const merged1 = Object.assign(merged);
  return <RN.View style={items} />;
};