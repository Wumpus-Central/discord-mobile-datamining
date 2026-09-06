// === Module 5676: MissingIcon ===

// Module 5676 (MissingIcon)
import _mod17 from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import Text from "Text" /* 5650 */;

const StyleSheet = _mod17.StyleSheet;
const jsx = jsxProd.jsx;
const icon = StyleSheet.create({ icon: { backgroundColor: "transparent" } });

export const MissingIcon = function MissingIcon(arg0) {
  ({ color, size, style } = arg0);
  const obj = { style: null, children: "\u23F7" };
  const items = [icon.icon, { color, fontSize: size }, style];
  obj.style = items;
  return jsx(Text.Text, { style: null, children: "\u23F7" });
};