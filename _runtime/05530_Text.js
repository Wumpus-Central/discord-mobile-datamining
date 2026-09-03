// === Module 5530: Text ===

// Module 5530 (Text)
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createStandardNavigationFactories from "createStandardNavigationFactories" /* 1499 */;

const Text = get_ActivityIndicator.Text;
const jsx = jsxProd.jsx;

export const Text = function Text(style) {
  const merged = Object.assign(style, Object.create(null));
  let obj = createStandardNavigationFactories;
  const theme = obj.useTheme();
  obj = {};
  ({ colors, fonts } = theme);
  const merged1 = Object.assign(merged);
  obj = { color: colors.text };
  const items = [obj, fonts.regular, style.style];
  obj.style = items;
  return <Text color={colors.text} />;
};