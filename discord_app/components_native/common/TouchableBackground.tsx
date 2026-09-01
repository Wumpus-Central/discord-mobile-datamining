// discord_app/components_native/common/TouchableBackground.tsx
import ThemesDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import closure_0 from "../../../_runtime/metro/00032__slicedToArray.js";
import closure_1 from "../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../design/components/Styles/native/createStyles.tsx";

({ View: obj1, Pressable: c3 } = get_ActivityIndicator);
createCacheKey = { default: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE };
createCacheKey[0] = createCacheKey;
let closure_5 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("components_native/common/TouchableBackground.tsx");

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
  const items2 = [style];
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
}
