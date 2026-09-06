// _runtime/05674_Label.js
import _mod17 from "metro/00017__.js";
import jsxProd from "react/00021_jsxProd.js";
import Text from "05650_Text.js";

const StyleSheet = _mod17.StyleSheet;
const jsx = jsxProd.jsx;
const label = StyleSheet.create({ label: { textAlign: "center", backgroundColor: "transparent" } });

export const Label = function Label(tintColor) {
  tintColor = tintColor.tintColor;
  const merged = Object.assign(tintColor, Object.assign({ tintColor: 0, style: 0 }));
  let obj = { numberOfLines: 1 };
  const merged1 = Object.assign(merged);
  const items = [label.label, ,];
  let tmp4 = null != tintColor;
  if (tmp4) {
    obj = { color: tintColor };
    tmp4 = obj;
  }
  items[1] = tmp4;
  items[2] = tintColor.style;
  obj.style = items;
  return jsx(Text.Text, { numberOfLines: 1 });
};
