// === Module 6395: MissingIcon ===

// Module 6395 (MissingIcon)
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import Text from "Text" /* 6369 */;

const StyleSheet = get_ActivityIndicator.StyleSheet;
const jsx = jsxProd.jsx;
const styles = StyleSheet.create({ icon: { backgroundColor: "transparent" } });

export const MissingIcon = function MissingIcon(arg0) {
  ({ color, size, style } = arg0);
  style = [icon.icon, { color, fontSize: size }, ];
  style[2] = style;
  return jsx(Text.Text, { style, children: "\u23F7" });
};