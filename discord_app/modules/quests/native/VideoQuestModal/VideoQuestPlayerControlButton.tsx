// === Module 14846: VideoQuestPlayerControlButton ===

// Module 14846 (VideoQuestPlayerControlButton)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import VisualEffectViewDefault from "VisualEffectView" /* 5773 */;
import Pressables from "Pressables" /* 5909 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import n from "module_683" /* 683 */;

require = fn;
let closure_3 = ["style", "children"];
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let obj = { disabled: { opacity: 0.5 }, container: { borderRadius: nativeDefault.radii.round, overflow: "hidden" }, blur: null };
const obj4 = { backgroundColor: null, padding: null };
let obj3 = { borderRadius: nativeDefault.radii.round, overflow: "hidden" };
const importDefaultResultResult = n(nativeDefault.unsafe_rawColors.BLACK);
obj4.backgroundColor = n(nativeDefault.unsafe_rawColors.BLACK).alpha(0.5).hex();
obj4.padding = nativeDefault.space.PX_12;
obj.blur = obj4;
let closure_6 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
const alphaResult = n(nativeDefault.unsafe_rawColors.BLACK).alpha(0.5);
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestPlayerControlButton.tsx");

export const VideoQuestPlayerControlButton = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(15);
  if (cResult[0] !== arg0) {
    ({ style, children } = arg0);
    const tmp9 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = children;
    cResult[2] = tmp9;
    cResult[3] = style;
    let tmp6 = style;
    let tmp5 = tmp9;
    let tmp4 = children;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
  }
  const tmp10 = closure_6();
  if (cResult[4] === tmp6) {
    if (cResult[5] === tmp10.container) {
      if (cResult[6] === tmp11) {
        let tmp12 = cResult[7];
      }
      if (cResult[8] === tmp4) {
        if (cResult[9] === tmp10.blur) {
          let tmp13 = cResult[10];
        }
        if (cResult[11] === tmp5) {
          if (cResult[12] === tmp12) {
            if (cResult[13] === tmp13) {
              let tmp17 = cResult[14];
            }
            return tmp17;
          }
        }
        const obj2 = { style: tmp12 };
        const merged = Object.assign(tmp5);
        obj2.children = tmp13;
        const tmp22 = jsx(Pressables.PressableOpacity, { style: tmp12 });
        cResult[11] = tmp5;
        cResult[12] = tmp12;
        cResult[13] = tmp13;
        cResult[14] = tmp22;
        tmp17 = tmp22;
      }
      const obj3 = { style: tmp10.blur, blurAmount: 0.2, blurStyle: "default", blurTheme: "dark", children: tmp4 };
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
  ({ style, children } = arg0);
  const merged = Object.assign(arg0, Object.assign({ style: 0, children: 0 }));
  const tmp2 = closure_6();
  const items = [tmp2.container, , ];
  let disabled = merged.disabled;
  if (disabled) {
    disabled = tmp2.disabled;
  }
  const obj = { style: items };
  items[1] = disabled;
  items[2] = style;
  const merged1 = Object.assign(merged);
  obj.children = jsx(VisualEffectViewDefault, { style: tmp2.blur, blurAmount: 0.2, blurStyle: "default", blurTheme: "dark", children });
  return jsx(Pressables.PressableOpacity, { style: items });
}));