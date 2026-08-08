// _runtime/05322_MissingIcon.js
import { StyleSheet } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import { Text } from "05296_Text.js";

const styles = StyleSheet.create({ icon: { backgroundColor: "transparent" } });

export const MissingIcon = function MissingIcon(arg0) {
  let color;
  let size;
  let style;
  ({ color, size, style } = arg0);
  style = [icon.icon, { color, fontSize: size }, ];
  style[2] = style;
  return jsx(Text.Text, { style, children: "\u23F7" });
};