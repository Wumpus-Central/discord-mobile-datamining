// _runtime/05547_HeaderBackground.js
import noopAll from "00019_noop.js";
import createStandardNavigationFactories from "01499_createStandardNavigationFactories.js";
import get_ActivityIndicator from "00017_get_ActivityIndicator.js";
import { jsx } from "react/00021_jsxProd.js";

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
