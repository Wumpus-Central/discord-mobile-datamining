// _runtime/05381_Label.js
import { StyleSheet } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import { Text } from "05357_Text.js";

const styles = StyleSheet.create({ label: { textAlign: "center", backgroundColor: "transparent" } });

export const Label = function Label(tintColor) {
  tintColor = tintColor.tintColor;
  const merged = Object.assign(tintColor, Object.create(null));
  let obj = { numberOfLines: 1 };
  const merged1 = Object.assign(merged);
  const items = [label.label, , ];
  let tmp4 = null != tintColor;
  if (tmp4) {
    obj = { color: null };
    obj[0] = tintColor;
    tmp4 = obj;
  }
  items[1] = tmp4;
  items[2] = tintColor.style;
  obj.style = items;
  return jsx(Text.Text, { numberOfLines: 1 });
};