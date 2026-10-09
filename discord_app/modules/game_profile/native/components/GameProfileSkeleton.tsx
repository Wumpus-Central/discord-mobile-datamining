// discord_app/modules/game_profile/native/components/GameProfileSkeleton.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexportDefault from "../../../reanimated/ReanimatedRexport.tsx";
import GameProfileSkeletonPulse from "GameProfileSkeletonPulse.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5091);
let obj2 = {
  placeholder: { backgroundColor: nativeDefault.colors.ICON_MUTED },
  button: null,
  buttonSm: null,
  buttonMd: null,
};
const obj3 = { backgroundColor: nativeDefault.colors.ICON_MUTED };
obj2.button = { borderRadius: nativeDefault.radii.sm };
let size = { width: 92, height: nativeDefault.space.PX_32, flexShrink: 0 };
obj2.buttonSm = size;
const size1 = { width: "100%", height: nativeDefault.space.PX_40 };
obj2.buttonMd = size1;
let closure_5 = createStyles.createStyles(obj2);
const dependencyMap = { sm: "buttonSm", md: "buttonMd" };
fn(558);
const obj4 = { borderRadius: nativeDefault.radii.sm };
let ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? function GameProfileSkeletonPlaceholder(style) {
      const cResult = c.c(3);
      style = style.style;
      const tmp2 = closure_5();
      if (cResult[0] === style) {
        if (cResult[1] === tmp2.placeholder) {
          let tmp3 = cResult[2];
        }
        return tmp3;
      }
      const obj2 = { style: null };
      const items = [tmp2.placeholder, style];
      obj2.style = items;
      const tmp4 = <View style={null} />;
      cResult[0] = style;
      cResult[1] = tmp2.placeholder;
      cResult[2] = tmp4;
      tmp3 = tmp4;
    }
  : function GameProfileSkeletonPlaceholder(style) {
      const obj = { style: null };
      const items = [closure_5().placeholder, style.style];
      obj.style = items;
      return <View style={null} />;
    };
let closure_7 = tmp4;
ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function GameProfileSkeletonContainer(arg0) {
      const cResult = c.c(6);
      ({ animationDelayMs, children, style } = arg0);
      let num = 0;
      if (undefined !== animationDelayMs) {
        num = animationDelayMs;
      }
      const skeletonPulseStyle = GameProfileSkeletonPulse.useSkeletonPulseStyle(num);
      if (cResult[0] === skeletonPulseStyle) {
        if (cResult[1] === style) {
          let tmp5 = cResult[2];
        }
        if (cResult[3] === children) {
          if (cResult[4] === tmp5) {
            let tmp6 = cResult[5];
          }
          return tmp6;
        }
        const obj2 = {
          style: tmp5,
          accessible: false,
          accessibilityElementsHidden: true,
          importantForAccessibility: "no-hide-descendants",
          children,
        };
        const tmp9 = jsx(ReanimatedRexportDefault.View, {
          style: tmp5,
          accessible: false,
          accessibilityElementsHidden: true,
          importantForAccessibility: "no-hide-descendants",
          children,
        });
        cResult[3] = children;
        cResult[4] = tmp5;
        cResult[5] = tmp9;
        tmp6 = tmp9;
      }
      const items = [style, skeletonPulseStyle];
      cResult[0] = skeletonPulseStyle;
      cResult[1] = style;
      cResult[2] = items;
      tmp5 = items;
      const tmpResult = GameProfileSkeletonPulse;
    }
  : function GameProfileSkeletonContainer(animationDelayMs) {
      let num = animationDelayMs.animationDelayMs;
      if (num === undefined) {
        num = 0;
      }
      ({ children, style } = animationDelayMs);
      const skeletonPulseStyle = GameProfileSkeletonPulse.useSkeletonPulseStyle(num);
      const obj2 = {
        style: null,
        accessible: false,
        accessibilityElementsHidden: true,
        importantForAccessibility: "no-hide-descendants",
        children,
      };
      const items = [style, skeletonPulseStyle];
      obj2.style = items;
      return jsx(ReanimatedRexportDefault.View, {
        style: null,
        accessible: false,
        accessibilityElementsHidden: true,
        importantForAccessibility: "no-hide-descendants",
        children,
      });
    };
size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileSkeleton.tsx");

export default tmp4;
export const SKELETON_CARD_ANIMATION_DELAY_MS = 150;
export const GameProfileSkeletonContainer = tmp3;
export const GameProfileSkeletonButton = ReactCompilerGating.isReactCompilerEnabled()
  ? function GameProfileSkeletonButton(arg0) {
      const cResult = c.c(4);
      ({ size, style } = arg0);
      let str = "md";
      if (undefined !== size) {
        str = size;
      }
      const tmp2 = closure_5();
      if (cResult[0] === style) {
        if (cResult[1] === tmp2.button) {
          if (cResult[2] === tmp3) {
            let tmp4 = cResult[3];
          }
          return tmp4;
        }
      }
      const obj2 = { style: null };
      const items = [tmp2.button, tmp2[dependencyMap[str]], style];
      obj2.style = items;
      const tmp5 = <closure_7 style={null} />;
      cResult[0] = style;
      cResult[1] = tmp2.button;
      cResult[2] = tmp2[dependencyMap[str]];
      cResult[3] = tmp5;
      tmp4 = tmp5;
    }
  : function GameProfileSkeletonButton(size) {
      let str = size.size;
      if (str === undefined) {
        str = "md";
      }
      const tmp = closure_5();
      const obj = { style: null };
      const items = [tmp.button, tmp[dependencyMap[str]], size.style];
      obj.style = items;
      return <closure_7 style={null} />;
    };
