// _runtime/05499_MissingIcon.js
import get_ActivityIndicator from "00017_get_ActivityIndicator.js";
import jsxProd from "react/00021_jsxProd.js";
import Text from "05473_Text.js";

const StyleSheet = get_ActivityIndicator.StyleSheet;
const jsx = jsxProd.jsx;
const styles = StyleSheet.create({ icon: { backgroundColor: "transparent" } });

export const MissingIcon = function MissingIcon(arg0) {
  ({ color, size, style } = arg0);
  style = [icon.icon, { color, fontSize: size }, ];
  style[2] = style;
  return jsx(Text.Text, { style, children: "\u23F7" });
};