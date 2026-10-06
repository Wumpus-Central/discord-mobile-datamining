// === Module 14978: QuestDockBlurredContentBackground ===

// Module 14978 (QuestDockBlurredContentBackground)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import VisualEffectViewAnimatedDefault from "VisualEffectViewAnimated" /* 5779 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const StyleSheet = react_native.StyleSheet;
const jsx = Fragment.jsx;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let blurTheme;
  let layoutAnimatedStyle;
  let layoutAnimation;
  let opacityAnimatedStyle;
  const obj = react2;
  const cResult = obj.c(8);
  ({ layoutAnimatedStyle, opacityAnimatedStyle, layoutAnimation, blurTheme } = arg0);
  let str = "dark";
  if (undefined !== blurTheme) {
    str = blurTheme;
  }
  let str2 = "rgba(255, 255, 255, 0.1)";
  let str3 = "rgba(255, 255, 255, 0.1)";
  if ("dark" === str) {
    str3 = "rgba(38, 39, 50, 0.65)";
  }
  if ("dark" === str) {
    str2 = "rgba(38, 39, 50, 0.1)";
  }
  if (cResult[0] === layoutAnimatedStyle) {
    let tmp4;
    if (cResult[1] === opacityAnimatedStyle) {
      tmp4 = cResult[2];
    }
    if (cResult[3] === str3) {
      if (cResult[4] === layoutAnimation) {
        if (cResult[5] === tmp4) {
          let tmp5;
          if (cResult[6] === str2) {
            tmp5 = cResult[7];
          }
          return tmp5;
        }
      }
    }
    const tmp8 = jsx(VisualEffectViewAnimatedDefault, { nativeID: "quest-dock-blurred-background", tintColor: str2, blurAmount: 0.5, blurTheme: "dark", android_fallbackColor: str3, style: tmp4, layout: layoutAnimation });
    cResult[3] = str3;
    cResult[4] = layoutAnimation;
    cResult[5] = tmp4;
    cResult[6] = str2;
    cResult[7] = tmp8;
    tmp5 = tmp8;
  }
  const items = [StyleSheet.absoluteFillObject, layoutAnimatedStyle, opacityAnimatedStyle];
  cResult[0] = layoutAnimatedStyle;
  cResult[1] = opacityAnimatedStyle;
  cResult[2] = items;
  tmp4 = items;
}) : ((blurTheme) => {
  let layoutAnimatedStyle;
  let layoutAnimation;
  let opacityAnimatedStyle;
  blurTheme = blurTheme.blurTheme;
  let str = "dark";
  ({ layoutAnimatedStyle, opacityAnimatedStyle, layoutAnimation } = blurTheme);
  if (undefined !== blurTheme) {
    str = blurTheme;
  }
  const items = [str];
  const items1 = [str];
  const memo = react.useMemo(() => {
    str = "rgba(255, 255, 255, 0.1)";
    if ("dark" === str) {
      str = "rgba(38, 39, 50, 0.65)";
    }
    return str;
  }, items);
  const memo1 = react.useMemo(() => {
    str = "rgba(255, 255, 255, 0.1)";
    if ("dark" === str) {
      str = "rgba(38, 39, 50, 0.1)";
    }
    return str;
  }, items1);
  const items2 = [StyleSheet.absoluteFillObject, layoutAnimatedStyle, opacityAnimatedStyle];
  return jsx(VisualEffectViewAnimatedDefault, { nativeID: "quest-dock-blurred-background", tintColor: memo1, blurAmount: 0.5, blurTheme: "dark", android_fallbackColor: memo, style: items2, layout: layoutAnimation });
}));
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockBlurredContentBackground.tsx");

export default memoResult;