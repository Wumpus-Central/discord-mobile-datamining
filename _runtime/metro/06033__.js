// === Module 6033: ? ===

// Module 6033
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import Link from "Link" /* 1491 */;
import react from "react" /* 19 */;

const Animated = react_native.Animated;
const jsx = Fragment.jsx;

export const Background = function Background(style) {
  style = style.style;
  const merged = Object.assign(style, Object.assign({ style: 0 }));
  const obj = Link;
  const colors = obj.useTheme().colors;
  const View = Animated.View;
  const merged1 = Object.assign(merged);
  const items = [, ];
  const obj3 = { flex: 1, backgroundColor: colors.background };
  items[0] = obj3;
  items[1] = style;
  return <View style={items} />;
};