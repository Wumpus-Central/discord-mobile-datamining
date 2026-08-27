// _runtime/05461_Background.js
import noopAll from "00019_noop.js";
import createStandardNavigationFactories from "01501_createStandardNavigationFactories.js";
import { Animated } from "00017_get_ActivityIndicator.js";
import { jsx } from "react/00021_jsxProd.js";

require = arg1;
noopAll;

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