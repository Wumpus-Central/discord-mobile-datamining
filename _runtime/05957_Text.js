// _runtime/05957_Text.js
import _mod17 from "metro/00017__.js";
import jsxProd from "react/00021_jsxProd.js";
import Link from "01485_Link.js";

const Text = _mod17.Text;
const jsx = jsxProd.jsx;

export const Text = function Text(style) {
  const merged = Object.assign(style, Object.assign({ style: 0 }));
  const theme = Link.useTheme();
  const obj2 = {};
  ({ colors, fonts } = theme);
  const merged1 = Object.assign(merged);
  const items = [{ color: colors.text }, fonts.regular, style.style];
  obj2.style = items;
  return <Text />;
};
