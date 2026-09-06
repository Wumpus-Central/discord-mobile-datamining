// _runtime/05650_Text.js
import _mod17 from "metro/00017__.js";
import jsxProd from "react/00021_jsxProd.js";
import Link from "01484_Link.js";

const Text = _mod17.Text;
const jsx = jsxProd.jsx;

export const Text = function Text(style) {
  const merged = Object.assign(style, Object.assign({ style: 0 }));
  let obj = Link;
  const theme = obj.useTheme();
  obj = {};
  ({ colors, fonts } = theme);
  const merged1 = Object.assign(merged);
  obj = { color: colors.text };
  const items = [obj, fonts.regular, style.style];
  obj.style = items;
  return <Text color={colors.text} />;
};
