// === Module 5609: AnimatedPressableHighlight ===

// Module 5609 (AnimatedPressableHighlight)
import SPRING_CONFIG from "SPRING_CONFIG" /* 5610 */;
import closure_3 from "noop" /* 19 */;
import { Pressable } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import set from "set" /* 1115 */;
import importDefaultResult from "module_4296" /* 4296 */;

require = arg1;
let closure_6 = importDefaultResult.createAnimatedComponent(require("PressableBase").PressableHighlight);
const result = set.fileFinishedImporting("design/components/experimental/Pressables/native/AnimatedPressableHighlight.native.tsx");

export const AnimatedPressableHighlight = set.isAndroid() ? (function AnimatedPressableHighlightAndroid(children) {
  const merged = Object.assign(children, Object.create(null));
  let token;
  let obj = merged(4262);
  token = obj.useToken(token(576).colors.MOBILE_ANDROID_BUTTON_BACKGROUND_RIPPLE);
  const items = [token, ];
  let androidRippleConfig = merged.androidRippleConfig;
  let cornerRadius;
  if (androidRippleConfig != null) {
    cornerRadius = androidRippleConfig.cornerRadius;
  }
  items[1] = cornerRadius;
  obj = {
    android_ripple: React.useMemo(() => {
      const obj = { color: token, cornerRadius: null };
      const androidRippleConfig = merged.androidRippleConfig;
      let num;
      if (androidRippleConfig != null) {
        num = androidRippleConfig.cornerRadius;
      }
      if (num == null) {
        num = 12;
      }
      obj[1] = num;
      return obj;
    }, items)
  };
  const merged1 = Object.assign(merged);
  obj.children = children.children;
  return <Pressable android_ripple={React.useMemo(() => {
    const obj = { color: token, cornerRadius: null };
    const androidRippleConfig = merged.androidRippleConfig;
    let num;
    if (androidRippleConfig != null) {
      num = androidRippleConfig.cornerRadius;
    }
    if (num == null) {
      num = 12;
    }
    obj[1] = num;
    return obj;
  }, items)} />;
}) : (function AnimatedPressableHighlightiOS(children) {
  const merged = Object.assign(children, Object.create(null));
  let obj = SPRING_CONFIG;
  const iOSPressEffects = obj.useIOSPressEffects(4);
  obj = { accessibilityRole: "button", onPressIn: iOSPressEffects.onPressIn, onPressOut: iOSPressEffects.onPressOut };
  const merged1 = Object.assign(merged);
  const items = [iOSPressEffects.pressableStyles, merged.style];
  obj.style = items;
  obj.children = children.children;
  return <closure_6 accessibilityRole="button" onPressIn={iOSPressEffects.onPressIn} onPressOut={iOSPressEffects.onPressOut} />;
});