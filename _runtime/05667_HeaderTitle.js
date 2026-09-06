// _runtime/05667_HeaderTitle.js
import jsxProd from "react/00021_jsxProd.js";
import Link from "01484_Link.js";
import get_ActivityIndicator from "metro/00017__.js";

({ Animated: c2, Platform, StyleSheet } = get_ActivityIndicator);
const jsx = jsxProd.jsx;
const title = StyleSheet.create({ title: { fontSize: 20 } });

export const HeaderTitle = function HeaderTitle(tintColor) {
  let text = tintColor.tintColor;
  const merged = Object.assign(tintColor, Object.assign({ tintColor: 0, style: 0 }));
  let obj = Link;
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
