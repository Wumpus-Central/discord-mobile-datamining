// _runtime/07479_MissingIcon.js
import _mod17 from "metro/00017__.js";
import jsxProd from "react/00021_jsxProd.js";
import Text from "07453_Text.js";

const StyleSheet = _mod17.StyleSheet;
const jsx = jsxProd.jsx;
const icon = StyleSheet.create({ icon: { backgroundColor: "transparent" } });

export function MissingIcon(arg0) {
  ({ color, size, style } = arg0);
  const obj = { style: null, children: "\u23F7" };
  items = [icon.icon, { color, fontSize: size }, style];
  obj.style = items;
  return jsx(Text.Text, { style: null, children: "\u23F7" });
}
