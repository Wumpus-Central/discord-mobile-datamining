// _runtime/metro/06033__.js
import react_native from "../00017_react-native.js";
import Fragment from "../react/00021_Fragment.js";
import Link from "../01491_Link.js";
import react from "../00019_react.js";

const Animated = react_native.Animated;
const jsx = Fragment.jsx;

export const Background = function Background(style) {
  style = style.style;
  const merged = Object.assign(style, Object.assign({ style: 0 }));
  const obj = Link;
  const colors = obj.useTheme().colors;
  const View = Animated.View;
  const merged1 = Object.assign(merged);
  const items = [,];
  const obj3 = { flex: 1, backgroundColor: colors.background };
  items[0] = obj3;
  items[1] = style;
  return <View style={items} />;
};
