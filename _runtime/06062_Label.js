// === Module 6062: Label ===

// Module 6062 (Label)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import Text2 from "Text" /* 6038 */;

const StyleSheet = react_native.StyleSheet;
const jsx = Fragment.jsx;
const label = StyleSheet.create({ label: { textAlign: "center", backgroundColor: "transparent" } });

export const Label = function Label(tintColor) {
  tintColor = tintColor.tintColor;
  const style = tintColor.style;
  const merged = Object.assign(tintColor, Object.assign({ tintColor: 0, style: 0 }));
  const Text = Text2.Text;
  const merged1 = Object.assign(merged);
  const items = [label.label, , ];
  let tmp4 = null != tintColor;
  if (tmp4) {
    tmp4 = { color: tintColor };
    const obj2 = { color: tintColor };
  }
  items[1] = tmp4;
  items[2] = style;
  return <Text numberOfLines={1} style={items} />;
};