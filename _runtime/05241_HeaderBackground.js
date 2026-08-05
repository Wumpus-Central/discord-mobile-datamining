// _runtime/05241_HeaderBackground.js
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";
import { Link } from "01481_Link.js";

let Platform;
let StyleSheet;
let obj1;
const require = arg1;
({ Animated: obj1, Platform, StyleSheet } = get_ActivityIndicator);
const styles = StyleSheet.create({ container: { flex: 1, elevation: 4 } });

export default function HeaderBackground(style) {
  const merged = Object.assign(style, Object.create(null));
  let obj = Link;
  const colors = obj.useTheme().colors;
  obj = { style: items };
  items = [container.container, { backgroundColor: colors.card, borderBottomColor: colors.border, shadowColor: colors.border }, style.style];
  const merged1 = Object.assign(merged);
  return <RN.View style={items} />;
};