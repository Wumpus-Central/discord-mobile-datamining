// _runtime/05345_Background.js
import "noop";
import { Animated } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import { createStandardNavigationFactories } from "01500_createStandardNavigationFactories.js";

const require = arg1;

export const Background = function Background(style) {
  const merged = Object.assign(style, Object.create(null));
  let obj = createStandardNavigationFactories;
  obj = {};
  const merged1 = Object.assign(merged);
  obj = { flex: 1, backgroundColor: obj.useTheme().colors.background };
  const items = [obj, style.style];
  obj.style = items;
  return <Animated.View flex={1} backgroundColor={obj.useTheme().colors.background} />;
};