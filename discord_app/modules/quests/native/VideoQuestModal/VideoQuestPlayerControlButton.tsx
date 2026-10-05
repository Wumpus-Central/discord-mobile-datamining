// === Module 14846: VideoQuestPlayerControlButton ===

// Module 14846 (VideoQuestPlayerControlButton)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import VisualEffectViewDefault from "VisualEffectView" /* 5773 */;
import Pressables from "Pressables" /* 5909 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4890 */;
import module_683 from "module_683" /* 683 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let alphaResult;
let obj2;
let obj3;
let closure_3 = ["style", "children"];
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { disabled: { opacity: 0.5 }, container: obj2, blur: obj3 };
createStyles = createStyles.createStyles;
obj2 = { borderRadius: nativeDefault.radii.round, overflow: "hidden" };
obj3 = { backgroundColor: alphaResult.hex(), padding: nativeDefault.space.PX_12 };
const importDefaultResultResult = module_683(nativeDefault.unsafe_rawColors.BLACK);
alphaResult = importDefaultResultResult.alpha(0.5);
let closure_6 = createStyles(obj);
const memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let children;
  let style;
  let tmp4;
  let tmp5;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(15);
  if (cResult[0] !== arg0) {
    ({ style, children } = arg0);
    const tmp9 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = children;
    cResult[2] = tmp9;
    cResult[3] = style;
    tmp6 = style;
    tmp5 = tmp9;
    tmp4 = children;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
  }
  const tmp10 = closure_6();
  if (cResult[4] === tmp6) {
    if (cResult[5] === tmp10.container) {
      let tmp12;
      if (cResult[6] === (tmp5.disabled && tmp10.disabled)) {
        tmp12 = cResult[7];
      }
      if (cResult[8] === tmp4) {
        let tmp13;
        if (cResult[9] === tmp10.blur) {
          tmp13 = cResult[10];
        }
        if (cResult[11] === tmp5) {
          if (cResult[12] === tmp12) {
            let tmp17;
            if (cResult[13] === tmp13) {
              tmp17 = cResult[14];
            }
            return tmp17;
          }
        }
        const PressableOpacity = Pressables.PressableOpacity;
        const merged = Object.assign(tmp5);
        const tmp22 = <PressableOpacity style={tmp12}>{tmp13}</PressableOpacity>;
        cResult[11] = tmp5;
        cResult[12] = tmp12;
        cResult[13] = tmp13;
        cResult[14] = tmp22;
        tmp17 = tmp22;
      }
      const tmp16 = jsx(VisualEffectViewDefault, { style: tmp10.blur, blurAmount: 0.2, blurStyle: "default", blurTheme: "dark", children: tmp4 });
      cResult[8] = tmp4;
      cResult[9] = tmp10.blur;
      cResult[10] = tmp16;
      tmp13 = tmp16;
    }
  }
  const items = [tmp10.container, tmp5.disabled && tmp10.disabled, tmp6];
  cResult[4] = tmp6;
  cResult[5] = tmp10.container;
  cResult[6] = tmp5.disabled && tmp10.disabled;
  cResult[7] = items;
  tmp12 = items;
}) : ((arg0) => {
  let children;
  let style;
  ({ style, children } = arg0);
  const merged = Object.assign(arg0, Object.assign({ style: 0, children: 0 }));
  const tmp2 = closure_6();
  const items = [tmp2.container, , ];
  let disabled = merged.disabled;
  const PressableOpacity = Pressables.PressableOpacity;
  if (disabled) {
    disabled = tmp2.disabled;
  }
  items[1] = disabled;
  items[2] = style;
  const merged1 = Object.assign(merged);
  return <PressableOpacity style={items}>{jsx(VisualEffectViewDefault, { style: tmp2.blur, blurAmount: 0.2, blurStyle: "default", blurTheme: "dark", children })}</PressableOpacity>;
}));
const result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestPlayerControlButton.tsx");

export const VideoQuestPlayerControlButton = memoResult;