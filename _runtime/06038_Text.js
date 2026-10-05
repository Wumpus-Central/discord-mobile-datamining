// === Module 6038: Text ===

// Module 6038 (Text)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import Link from "Link" /* 1491 */;

const Text = react_native.Text;
const jsx = Fragment.jsx;
const Text_export = function Text(style) {
  let colors;
  let fonts;
  style = style.style;
  const merged = Object.assign(style, Object.assign({ style: 0 }));
  const obj = Link;
  const theme = obj.useTheme();
  ({ colors, fonts } = theme);
  const merged1 = Object.assign(merged);
  const items = [, , ];
  const obj3 = { color: colors.text };
  items[0] = obj3;
  items[1] = fonts.regular;
  items[2] = style;
  return <Text style={items} />;
};

export { Text_export as Text };