// === Module 11554: TouchableBackground ===

// Module 11554 (TouchableBackground)
import ThemesDefault from "Themes" /* 712 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import "createCacheKey";

({ View: obj1, Pressable: c3 } = get_ActivityIndicator);
const createCacheKey = { backgroundColor: ThemesDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE };
createCacheKey[0] = createCacheKey;
let closure_5 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("components_native/common/TouchableBackground.tsx");

export default function TouchableBackground(onPressOut) {
  ({ activeBackgroundColor, onPressIn } = onPressOut);
  onPressOut = onPressOut.onPressOut;
  ({ pressableStyle, style, children } = onPressOut);
  const merged = Object.assign(onPressOut, Object.create(null));
  c2 = undefined;
  const tmp2 = callback();
  [tmp4, c2] = onPressIn(onPressOut.useState(false), 2);
  const items = [onPressIn];
  const items1 = [onPressOut];
  callback = onPressOut.useCallback((arg0) => {
    _undefined(true);
    if (onPressIn != null) {
      tmp2(arg0);
    }
  }, items);
  let obj = { accessibilityRole: "button", style: pressableStyle };
  const callback1 = onPressOut.useCallback((arg0) => {
    if (onPressOut != null) {
      tmp(arg0);
    }
    _undefined(false);
  }, items1);
  const merged1 = Object.assign(merged);
  obj.onPressIn = callback;
  obj.onPressOut = callback1;
  const items2 = [style, ];
  if (tmp4) {
    if (activeBackgroundColor == null) {
      activeBackgroundColor = tmp2.default.backgroundColor;
    }
    obj = { backgroundColor: null };
    obj[0] = activeBackgroundColor;
  }
  items2[1] = tmp4;
  obj.children = <c2 style={items2}>{children}</c2>;
  return <closure_3 accessibilityRole="button" style={pressableStyle} />;
};