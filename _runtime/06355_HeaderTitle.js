// === Module 6355: HeaderTitle ===

// Module 6355 (HeaderTitle)
import jsxProd from "jsxProd" /* 21 */;
import createStandardNavigationFactories from "createStandardNavigationFactories" /* 1501 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

({ Animated: obj1, Platform, StyleSheet } = get_ActivityIndicator);
const jsx = jsxProd.jsx;
const styles = StyleSheet.create({ title: { fontSize: 20 } });

export const HeaderTitle = function HeaderTitle(tintColor) {
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