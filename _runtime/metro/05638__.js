// _runtime/metro/05638__.js
import Link from "../01484_Link.js";
import noop from "00019__.js";

require = fn;
const Animated = fn(17).Animated;
const jsx = fn(21).jsx;

export const Background = function Background(style) {
  const merged = Object.assign(style, Object.assign({ style: 0 }));
  let obj = {};
  const merged1 = Object.assign(merged);
  obj = { flex: 1, backgroundColor: obj.useTheme().colors.background };
  const items = [obj, style.style];
  obj.style = items;
  return <Animated.View flex={1} backgroundColor={obj.useTheme().colors.background} />;
};
