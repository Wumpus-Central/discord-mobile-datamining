import _slicedToArray from "_slicedToArray";
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let obj1;
({ View: obj1, Pressable: c3 } = get_ActivityIndicator);
createCacheKey = { default: null };
createCacheKey = { backgroundColor: require("Themes").colors.INTERACTIVE_BACKGROUND_ACTIVE };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("get ActivityIndicator").fileFinishedImporting("components_native/common/TouchableBackground.tsx");

export default function TouchableBackground(onPressOut) {
  let activeBackgroundColor;
  let c2;
  let children;
  let onPressIn;
  let pressableStyle;
  let style;
  let tmp4;
  ({ activeBackgroundColor, onPressIn } = onPressOut);
  onPressOut = onPressOut.onPressOut;
  ({ pressableStyle, style, children } = onPressOut);
  const merged = Object.assign(onPressOut, Object.create(null));
  c2 = undefined;
  const tmp2 = createCacheKey();
  [tmp4, c2] = onPressIn(onPressOut.useState(false), 2);
  const items = [onPressIn];
  const items1 = [onPressOut];
  const callback = onPressOut.useCallback((arg0) => {
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