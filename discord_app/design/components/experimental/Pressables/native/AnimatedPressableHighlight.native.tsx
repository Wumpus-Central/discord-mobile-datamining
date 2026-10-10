// discord_app/design/components/experimental/Pressables/native/AnimatedPressableHighlight.native.tsx
import c from "../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import useToken from "../../../../tokens/native/useToken.tsx";
import useIOSPressEffects from "../../../../../modules/main_tabs_v2/native/shared_components/util/useIOSPressEffects.tsx";
import _objectWithoutProperties from "../../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import ReanimatedRexport from "../../../../../modules/reanimated/ReanimatedRexport.tsx";

require = fn;
let closure_3 = ["children"];
let closure_4 = ["children"];
const Pressable = fn(17).Pressable;
const jsx = fn(21).jsx;
let closure_9 = ReanimatedRexport.createAnimatedComponent(fn(6184).PressableHighlight);
let ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? function AnimatedPressableHighlightiOS(children) {
      const cResult = c.c(12);
      if (cResult[0] !== children) {
        children = children.children;
        const tmp8 = _objectWithoutProperties(children, closure_3);
        cResult[0] = children;
        cResult[1] = children;
        cResult[2] = tmp8;
        let tmp5 = tmp8;
        let tmp4 = children;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
      }
      const iOSPressEffects = useIOSPressEffects.useIOSPressEffects(4);
      ({ onPressIn, onPressOut, pressableStyles } = iOSPressEffects);
      if (cResult[3] === pressableStyles) {
        if (cResult[4] === tmp5.style) {
          let tmp10 = cResult[5];
        }
        if (cResult[6] === tmp4) {
          if (cResult[7] === onPressIn) {
            if (cResult[8] === onPressOut) {
              if (cResult[9] === tmp5) {
                if (cResult[10] === tmp10) {
                  let tmp11 = cResult[11];
                }
                return tmp11;
              }
            }
          }
        }
        const obj2 = { accessibilityRole: "button", onPressIn, onPressOut };
        const merged = Object.assign(tmp5);
        obj2.style = tmp10;
        obj2.children = tmp4;
        const tmp17 = <closure_9 accessibilityRole="button" onPressIn={onPressIn} onPressOut={onPressOut} />;
        cResult[6] = tmp4;
        cResult[7] = onPressIn;
        cResult[8] = onPressOut;
        cResult[9] = tmp5;
        cResult[10] = tmp10;
        cResult[11] = tmp17;
        tmp11 = tmp17;
      }
      const items = [pressableStyles, tmp5.style];
      cResult[3] = pressableStyles;
      cResult[4] = tmp5.style;
      cResult[5] = items;
      tmp10 = items;
      const tmpResult = useIOSPressEffects;
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
        <closure_9
          accessibilityRole="button"
          onPressIn={iOSPressEffects.onPressIn}
          onPressOut={iOSPressEffects.onPressOut}
        />
      );
    };
ReactCompilerGating = fn(558);
const PlatformUtils = fn(1382);
if (PlatformUtils.isAndroid()) {
  tmp2 = tmp3;
}
const size = fn(2);
const result = size.fileFinishedImporting(
  "design/components/experimental/Pressables/native/AnimatedPressableHighlight.native.tsx",
);

export const AnimatedPressableHighlight = tmp2;
