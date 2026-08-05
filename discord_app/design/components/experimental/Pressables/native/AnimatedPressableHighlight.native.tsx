// discord_app/design/components/experimental/Pressables/native/AnimatedPressableHighlight.native.tsx
import noop from "noop";
import { Pressable } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import set from "set";
import importDefaultResult from "module_4146";
import set from "jsxProd";
import { SPRING_CONFIG } from "../../../../../modules/main_tabs_v2/native/shared_components/util/useIOSPressEffects.tsx";

const require = arg1;
let closure_6 = require("module_4146").createAnimatedComponent(require("PressableBase").PressableHighlight);
const result = set.fileFinishedImporting("design/components/experimental/Pressables/native/AnimatedPressableHighlight.native.tsx");

export const AnimatedPressableHighlight = set.isAndroid() ? (function AnimatedPressableHighlightAndroid(children) {
  const merged = Object.assign(children, Object.create(null));
  let token;
  let obj = merged(3989);
  token = obj.useToken(token(712).colors.MOBILE_ANDROID_BUTTON_BACKGROUND_RIPPLE);
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
  let obj = SPRING_CONFIG /* SPRING_CONFIG */;
  const iOSPressEffects = obj.useIOSPressEffects(4);
  obj = { accessibilityRole: "button", onPressIn: iOSPressEffects.onPressIn, onPressOut: iOSPressEffects.onPressOut };
  const merged1 = Object.assign(merged);
  const items = [iOSPressEffects.pressableStyles, merged.style];
  obj.style = items;
  obj.children = children.children;
  return <closure_6 accessibilityRole="button" onPressIn={iOSPressEffects.onPressIn} onPressOut={iOSPressEffects.onPressOut} />;
});