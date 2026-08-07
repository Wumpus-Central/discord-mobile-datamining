// _runtime/05295_Text.js
import { Text } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import { createStandardNavigationFactories } from "01481_createStandardNavigationFactories.js";


export const Text = function Text(style) {
  let colors;
  let fonts;
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