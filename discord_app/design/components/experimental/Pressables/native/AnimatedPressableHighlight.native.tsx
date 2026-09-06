// === Module 5609: AnimatedPressableHighlight ===

// Module 5609 (AnimatedPressableHighlight)
import nativeDefault from "native" /* 576 */;
import useToken from "useToken" /* 4262 */;
import useIOSPressEffects from "useIOSPressEffects" /* 5610 */;
import noop from "module_19" /* 19 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;

require = fn;
const Pressable = fn(17).Pressable;
const jsx = fn(21).jsx;
let closure_6 = ReanimatedRexport.createAnimatedComponent(fn(5123).PressableHighlight);
const PlatformUtils = fn(1115);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/experimental/Pressables/native/AnimatedPressableHighlight.native.tsx");

export const AnimatedPressableHighlight = PlatformUtils.isAndroid() ? (function AnimatedPressableHighlightAndroid(children) {
  const merged = Object.assign(children, Object.assign({ children: 0 }));
  let obj = useToken;
  const token = obj.useToken(nativeDefault.colors.MOBILE_ANDROID_BUTTON_BACKGROUND_RIPPLE);
  const items = [token, ];
  let androidRippleConfig = merged.androidRippleConfig;
  let cornerRadius;
  if (androidRippleConfig != null) {
    cornerRadius = androidRippleConfig.cornerRadius;
  }
  items[1] = cornerRadius;
  obj = {
    android_ripple: noop.useMemo(() => {
      const obj = { color: token, cornerRadius: null };
      const androidRippleConfig = merged.androidRippleConfig;
      let num;
      if (androidRippleConfig != null) {
        num = androidRippleConfig.cornerRadius;
      }
      if (num == null) {
        num = 12;
      }
      obj.cornerRadius = num;
      return obj;
    }, items)
  };
  const merged1 = Object.assign(merged);
  obj.children = children.children;
  return <Pressable android_ripple={noop.useMemo(() => {
    const obj = { color: token, cornerRadius: null };
    const androidRippleConfig = merged.androidRippleConfig;
    let num;
    if (androidRippleConfig != null) {
      num = androidRippleConfig.cornerRadius;
    }
    if (num == null) {
      num = 12;
    }
    obj.cornerRadius = num;
    return obj;
  }, items)} />;
}) : (function AnimatedPressableHighlightiOS(children) {
  const merged = Object.assign(children, Object.assign({ children: 0 }));
  let obj = useIOSPressEffects;
  const iOSPressEffects = obj.useIOSPressEffects(4);
  obj = { accessibilityRole: "button", onPressIn: iOSPressEffects.onPressIn, onPressOut: iOSPressEffects.onPressOut };
  const merged1 = Object.assign(merged);
  const items = [iOSPressEffects.pressableStyles, merged.style];
  obj.style = items;
  obj.children = children.children;
  return <closure_6 accessibilityRole="button" onPressIn={iOSPressEffects.onPressIn} onPressOut={iOSPressEffects.onPressOut} />;
});