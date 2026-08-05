// _runtime/05255_HeaderTitle.js
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";
import { Link } from "01481_Link.js";

let Platform;
let StyleSheet;
let obj1;
const require = arg1;
({ Animated: obj1, Platform, StyleSheet } = get_ActivityIndicator);
const styles = StyleSheet.create({ title: { fontSize: 20, fontFamily: "sans-serif-medium", fontWeight: "normal" } });

export default function HeaderTitle(tintColor) {
  let text = tintColor.tintColor;
  const merged = Object.assign(tintColor, Object.create(null));
  let obj = Link;
  obj = { accessibilityRole: "header", "aria-level": "1", numberOfLines: 1 };
  const merged1 = Object.assign(merged);
  const items = [title.title, , ];
  if (undefined === text) {
    text = obj.useTheme().colors.text;
  }
  items[1] = { color: text };
  items[2] = tintColor.style;
  obj.style = items;
  return <RN.Text accessibilityRole="header" aria-level="1" numberOfLines={1} />;
};