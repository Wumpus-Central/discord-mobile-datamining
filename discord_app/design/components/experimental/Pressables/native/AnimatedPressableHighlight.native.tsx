// discord_app/design/components/experimental/Pressables/native/AnimatedPressableHighlight.native.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import useToken from "../../../../tokens/native/useToken.tsx";
import useIOSPressEffects from "../../../../../modules/main_tabs_v2/native/shared_components/util/useIOSPressEffects.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import ReanimatedRexport from "../../../../../modules/reanimated/ReanimatedRexport.tsx";

require = fn;
const Pressable = fn(17).Pressable;
const jsx = fn(21).jsx;
let closure_6 = ReanimatedRexport.createAnimatedComponent(fn(5208).PressableHighlight);
const PlatformUtils = fn(1364);
const size = fn(2);
const result = size.fileFinishedImporting(
  "design/components/experimental/Pressables/native/AnimatedPressableHighlight.native.tsx",
);

export const AnimatedPressableHighlight = PlatformUtils.isAndroid()
  ? function AnimatedPressableHighlightAndroid(children) {
      const merged = Object.assign(children, Object.assign({ children: 0 }));
      const token = useToken.useToken(nativeDefault.colors.MOBILE_ANDROID_BUTTON_BACKGROUND_RIPPLE);
      const items = [token];
      let androidRippleConfig = merged.androidRippleConfig;
      let cornerRadius;
      if (androidRippleConfig != null) {
        cornerRadius = androidRippleConfig.cornerRadius;
      }
      items[1] = cornerRadius;
      const obj2 = {
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
        }, items),
      };
      const merged1 = Object.assign(merged);
      obj2.children = children.children;
      return (
        <Pressable
          android_ripple={noop.useMemo(() => {
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
          }, items)}
        />
      );
    }
  : function AnimatedPressableHighlightiOS(children) {
      const merged = Object.assign(children, Object.assign({ children: 0 }));
      const iOSPressEffects = useIOSPressEffects.useIOSPressEffects(4);
      const obj2 = {
        accessibilityRole: "button",
        onPressIn: iOSPressEffects.onPressIn,
        onPressOut: iOSPressEffects.onPressOut,
      };
      const merged1 = Object.assign(merged);
      const items = [iOSPressEffects.pressableStyles, merged.style];
      obj2.style = items;
      obj2.children = children.children;
      return (
        <closure_6
          accessibilityRole="button"
          onPressIn={iOSPressEffects.onPressIn}
          onPressOut={iOSPressEffects.onPressOut}
        />
      );
    };
