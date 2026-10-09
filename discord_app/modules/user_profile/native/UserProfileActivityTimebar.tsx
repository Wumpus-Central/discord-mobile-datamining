// === Module 13095: UserProfileActivityTimebar ===

// Module 13095 (UserProfileActivityTimebar)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 5087 */;
import useActivityTimer from "useActivityTimer" /* 13096 */;
import noop from "module_19" /* 19 */;

const useActivityTimerDefault = useActivityTimer;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5091);
let obj2 = { bar: { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderRadius: nativeDefault.radii.xs, height: 4, marginBottom: 4 }, progress: null, textRow: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderRadius: nativeDefault.radii.xs, height: 4, marginBottom: 4 };
obj2.progress = { backgroundColor: nativeDefault.colors.ACTIVITY_TIMEBAR_PROGRESS_BACKGROUND, borderRadius: nativeDefault.radii.xs, height: "100%", minWidth: 4 };
obj2.textRow = { flexDirection: "row", justifyContent: "space-between" };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { backgroundColor: nativeDefault.colors.ACTIVITY_TIMEBAR_PROGRESS_BACKGROUND, borderRadius: nativeDefault.radii.xs, height: "100%", minWidth: 4 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileActivityTimebar.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfileActivityTimebar(arg0) {
  const cResult = c.c(27);
  ({ start, end, style } = arg0);
  const tmp4 = closure_6();
  if (cResult[0] === end) {
    if (cResult[1] === start) {
      let tmp5 = cResult[2];
    }
    const tmp7 = useActivityTimerDefault(tmp5);
    ({ elapsed, duration } = tmp7);
    const text = `${100 * tmp7.percentage}%`;
    if (cResult[3] !== `${100 * tmp7.percentage}%`) {
      const obj2 = { width: text };
      cResult[3] = text;
      cResult[4] = obj2;
      let tmp9 = obj2;
    } else {
      tmp9 = cResult[4];
    }
    if (cResult[5] === tmp4.progress) {
      if (cResult[6] === tmp9) {
        let tmp10 = cResult[7];
      }
      if (cResult[8] === tmp4.bar) {
        if (cResult[9] === tmp10) {
          let tmp14 = cResult[10];
        }
        if (cResult[11] !== elapsed) {
          const formatTimeResult = useActivityTimer.formatTime(elapsed);
          cResult[11] = elapsed;
          cResult[12] = formatTimeResult;
          let tmp18 = formatTimeResult;
          const tmpResult = useActivityTimer;
        } else {
          tmp18 = cResult[12];
        }
        if (cResult[13] !== tmp18) {
          const obj3 = { variant: "text-xs/normal", tabularNumbers: true, color: "text-subtle", children: tmp18 };
          const tmp22 = React4(Text_Text.Text, obj3);
          cResult[13] = tmp18;
          cResult[14] = tmp22;
          let tmp20 = tmp22;
        } else {
          tmp20 = cResult[14];
        }
        if (cResult[15] !== duration) {
          const formatTimeResult1 = useActivityTimer.formatTime(duration);
          cResult[15] = duration;
          cResult[16] = formatTimeResult1;
          let tmp23 = formatTimeResult1;
          const tmpResult2 = useActivityTimer;
        } else {
          tmp23 = cResult[16];
        }
        if (cResult[17] !== tmp23) {
          const obj4 = { variant: "text-xs/normal", tabularNumbers: true, color: "text-subtle", children: tmp23 };
          const tmp27 = React4(Text_Text.Text, obj4);
          cResult[17] = tmp23;
          cResult[18] = tmp27;
          let tmp25 = tmp27;
        } else {
          tmp25 = cResult[18];
        }
        if (cResult[19] === tmp4.textRow) {
          if (cResult[20] === tmp25) {
            if (cResult[21] === tmp20) {
              let tmp28 = cResult[22];
            }
            if (cResult[23] === style) {
              if (cResult[24] === tmp28) {
                if (cResult[25] === tmp14) {
                  let tmp32 = cResult[26];
                }
                return tmp32;
              }
            }
            const obj5 = { style, children: null };
            const items = [tmp14, tmp28];
            obj5.children = items;
            const tmp35 = hasOwnProperty(View, obj5);
            cResult[23] = style;
            cResult[24] = tmp28;
            cResult[25] = tmp14;
            cResult[26] = tmp35;
            tmp32 = tmp35;
          }
        }
        const obj6 = { style: tmp4.textRow, children: null };
        const items1 = [tmp20, tmp25];
        obj6.children = items1;
        const tmp31 = hasOwnProperty(View, obj6);
        cResult[19] = tmp4.textRow;
        cResult[20] = tmp25;
        cResult[21] = tmp20;
        cResult[22] = tmp31;
        tmp28 = tmp31;
      }
      const obj7 = { style: tmp4.bar, children: tmp10 };
      const tmp17 = React4(View, obj7);
      cResult[8] = tmp4.bar;
      cResult[9] = tmp10;
      cResult[10] = tmp17;
      tmp14 = tmp17;
    }
    const obj8 = { style: null };
    const items2 = [tmp4.progress, tmp9];
    obj8.style = items2;
    const tmp13 = React4(View, obj8);
    cResult[5] = tmp4.progress;
    cResult[6] = tmp9;
    cResult[7] = tmp13;
    tmp10 = tmp13;
  }
  const obj9 = { start, end };
  cResult[0] = end;
  cResult[1] = start;
  cResult[2] = obj9;
  tmp5 = obj9;
}) : (function UserProfileActivityTimebar(arg0) {
  ({ start, end, style } = arg0);
  const tmp = closure_6();
  const tmp2 = useActivityTimerDefault({ start, end });
  const obj = { style, children: null };
  const obj2 = { style: tmp.bar, children: null };
  const obj3 = { style: null };
  const items = [tmp.progress, { width: `${100 * tmp2.percentage}%` }];
  obj3.style = items;
  ({ elapsed, duration } = tmp2);
  obj2.children = React4(View, obj3);
  const items1 = [React4(View, obj2), ];
  const obj5 = { style: tmp.textRow, children: null };
  const obj6 = { variant: "text-xs/normal", tabularNumbers: true, color: "text-subtle", children: useActivityTimer.formatTime(elapsed) };
  const items2 = [React4(Text_Text.Text, obj6), ];
  const obj8 = { variant: "text-xs/normal", tabularNumbers: true, color: "text-subtle", children: null };
  const obj4 = { width: `${100 * tmp2.percentage}%` };
  obj8.children = useActivityTimer.formatTime(duration);
  items2[1] = React4(Text_Text.Text, obj8);
  obj5.children = items2;
  items1[1] = hasOwnProperty(View, obj5);
  obj.children = items1;
  return hasOwnProperty(View, obj);
});