// === Module 5220: Background ===

// Module 5220 (Background)
import "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;

export default function Background(style) {
  const merged = Object.assign(style, Object.create(null));
  let obj = require(1481) /* Link */;
  obj = {};
  const merged1 = Object.assign(merged);
  obj = { flex: 1, backgroundColor: obj.useTheme().colors.background };
  const items = [obj, style.style];
  obj.style = items;
  return <View flex={1} backgroundColor={obj.useTheme().colors.background} />;
};