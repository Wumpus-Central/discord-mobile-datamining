// _runtime/05249_Background.js
import "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import { Link } from "01481_Link.js";

const require = arg1;

export default function Background(style) {
  const merged = Object.assign(style, Object.create(null));
  let obj = Link /* Link */;
  obj = {};
  const merged1 = Object.assign(merged);
  obj = { flex: 1, backgroundColor: obj.useTheme().colors.background };
  const items = [obj, style.style];
  obj.style = items;
  return <View flex={1} backgroundColor={obj.useTheme().colors.background} />;
};