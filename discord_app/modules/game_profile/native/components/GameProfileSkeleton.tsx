// === Module 8419: GameProfileSkeleton ===

// Module 8419 (GameProfileSkeleton)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4618 */;
import GameProfileSkeletonPulse from "GameProfileSkeletonPulse" /* 8420 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let obj2;
let size;
let size1;
const View = react_native.View;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { placeholder: obj2, button: { borderRadius: nativeDefault.radii.sm }, buttonSm: size, buttonMd: size1 };
createStyles = createStyles.createStyles;
obj2 = { backgroundColor: nativeDefault.colors.ICON_MUTED };
({ borderRadius: nativeDefault.radii.sm });
size = { width: 92, height: nativeDefault.space.PX_32, flexShrink: 0 };
size1 = { width: "100%", height: nativeDefault.space.PX_40 };
let closure_5 = createStyles(obj);
let closure_6 = { sm: "buttonSm", md: "buttonMd" };
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let animationDelayMs;
  let children;
  let style;
  const obj = react2;
  const cResult = obj.c(6);
  ({ animationDelayMs, children, style } = arg0);
  let num = 0;
  if (undefined !== animationDelayMs) {
    num = animationDelayMs;
  }
  const tmpResult = GameProfileSkeletonPulse;
  const skeletonPulseStyle = tmpResult.useSkeletonPulseStyle(num);
  if (cResult[0] === skeletonPulseStyle) {
    let tmp5;
    if (cResult[1] === style) {
      tmp5 = cResult[2];
    }
    if (cResult[3] === children) {
      let tmp6;
      if (cResult[4] === tmp5) {
        tmp6 = cResult[5];
      }
      return tmp6;
    }
    const tmp9 = jsx(ReanimatedRexportDefault.View, { style: tmp5, accessible: false, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children });
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
}) : ((animationDelayMs) => {
  let children;
  let style;
  let num = animationDelayMs.animationDelayMs;
  if (num === undefined) {
    num = 0;
  }
  ({ children, style } = animationDelayMs);
  const obj = GameProfileSkeletonPulse;
  const skeletonPulseStyle = obj.useSkeletonPulseStyle(num);
  const items = [style, skeletonPulseStyle];
  return jsx(ReanimatedRexportDefault.View, { style: items, accessible: false, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children });
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((style) => {
  const obj = react2;
  const cResult = obj.c(3);
  style = style.style;
  const tmp2 = closure_5();
  if (cResult[0] === style) {
    let tmp3;
    if (cResult[1] === tmp2.placeholder) {
      tmp3 = cResult[2];
    }
    return tmp3;
  }
  const items = [tmp2.placeholder, style];
  const tmp4 = <View style={items} />;
  cResult[0] = style;
  cResult[1] = tmp2.placeholder;
  cResult[2] = tmp4;
  tmp3 = tmp4;
}) : ((style) => {
  style = style.style;
  const items = [closure_5().placeholder, style];
  return <View style={items} />;
});
let closure_7 = tmp5;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let style;
  const obj = react2;
  const cResult = obj.c(4);
  ({ size, style } = arg0);
  let str = "md";
  if (undefined !== size) {
    str = size;
  }
  const tmp2 = closure_5();
  if (cResult[0] === style) {
    if (cResult[1] === tmp2.button) {
      let tmp4;
      if (cResult[2] === tmp2[closure_6[str]]) {
        tmp4 = cResult[3];
      }
      return tmp4;
    }
  }
  const items = [tmp2.button, tmp2[closure_6[str]], style];
  const tmp5 = <closure_7 style={items} />;
  cResult[0] = style;
  cResult[1] = tmp2.button;
  cResult[2] = tmp2[closure_6[str]];
  cResult[3] = tmp5;
  tmp4 = tmp5;
}) : ((size) => {
  let str = size.size;
  if (str === undefined) {
    str = "md";
  }
  const style = size.style;
  const tmp = closure_5();
  const items = [tmp.button, tmp[closure_6[str]], style];
  return <closure_7 style={items} />;
});
size = size_mod;
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileSkeleton.tsx");

export default tmp5;
export const SKELETON_CARD_ANIMATION_DELAY_MS = 150;
export const GameProfileSkeletonContainer = tmp4;
export const GameProfileSkeletonButton = tmp6;