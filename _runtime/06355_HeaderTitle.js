// _runtime/06355_HeaderTitle.js
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";
import { createStandardNavigationFactories } from "01501_createStandardNavigationFactories.js";

let Platform;
let StyleSheet;
let obj1;
({ Animated: obj1, Platform, StyleSheet } = get_ActivityIndicator);
const styles = StyleSheet.create({ title: { fontSize: 20 } });

export const HeaderTitle = function HeaderTitle(tintColor) {
  let colors;
  let fonts;
  let text = tintColor.tintColor;
  const merged = Object.assign(tintColor, Object.create(null));
  let obj = createStandardNavigationFactories;
  const theme = obj.useTheme();
  obj = { role: "heading", "aria-level": "1", numberOfLines: 1 };
  ({ colors, fonts } = theme);
  const merged1 = Object.assign(merged);
  if (undefined === text) {
    text = colors.text;
  }
  const items = [{ color: text }, fonts.medium, title.title, tintColor.style];
  obj.style = items;
  return <RN.Text role="heading" aria-level="1" numberOfLines={1} />;
};