// discord_app/modules/user_profile/native/UserProfileActivityTimebar.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import useActivityTimer from "../hooks/useActivityTimer.tsx";
import react from "../../../../_runtime/00019_react.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const useActivityTimerDefault = useActivityTimer;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { bar: obj2, progress: obj3, textRow: { flexDirection: "row", justifyContent: "space-between" } };
obj2 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
  borderRadius: nativeDefault.radii.xs,
  height: 4,
  marginBottom: 4,
};
createStyles = createStyles.createStyles;
obj3 = {
  backgroundColor: nativeDefault.colors.ACTIVITY_TIMEBAR_PROGRESS_BACKGROUND,
  borderRadius: nativeDefault.radii.xs,
  height: "100%",
  minWidth: 4,
};
let closure_6 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let duration;
      let elapsed;
      let end;
      let items;
      let items1;
      let items2;
      let start;
      let style;
      const obj = react2;
      const cResult = obj.c(27);
      ({ start, end, style } = arg0);
      const tmp4 = closure_6();
      if (cResult[0] === end) {
        let tmp5;
        let tmp9;
        if (cResult[1] === start) {
          tmp5 = cResult[2];
        }
        const tmp7 = useActivityTimerDefault(tmp5);
        ({ elapsed, duration } = tmp7);
        const text = `${100 * tmp7.percentage}%`;
        if (cResult[3] !== `${100 * tmp7.percentage}%`) {
          const obj2 = { width: text };
          cResult[3] = text;
          cResult[4] = obj2;
          tmp9 = obj2;
        } else {
          tmp9 = cResult[4];
        }
        if (cResult[5] === tmp4.progress) {
          let tmp10;
          if (cResult[6] === tmp9) {
            tmp10 = cResult[7];
          }
          if (cResult[8] === tmp4.bar) {
            let tmp14;
            let tmp18;
            let tmp20;
            let tmp23;
            let tmp25;
            if (cResult[9] === tmp10) {
              tmp14 = cResult[10];
            }
            const textRow = tmp4.textRow;
            if (cResult[11] !== elapsed) {
              const tmpResult = useActivityTimer;
              const formatTimeResult = tmpResult.formatTime(elapsed);
              cResult[11] = elapsed;
              cResult[12] = formatTimeResult;
              tmp18 = formatTimeResult;
            } else {
              tmp18 = cResult[12];
            }
            if (cResult[13] !== tmp18) {
              const obj3 = { variant: "text-xs/normal", tabularNumbers: true, color: "text-subtle", children: tmp18 };
              const tmp22 = React3(Text_Text.Text, obj3);
              cResult[13] = tmp18;
              cResult[14] = tmp22;
              tmp20 = tmp22;
            } else {
              tmp20 = cResult[14];
            }
            if (cResult[15] !== duration) {
              const tmpResult2 = useActivityTimer;
              const formatTimeResult1 = tmpResult2.formatTime(duration);
              cResult[15] = duration;
              cResult[16] = formatTimeResult1;
              tmp23 = formatTimeResult1;
            } else {
              tmp23 = cResult[16];
            }
            if (cResult[17] !== tmp23) {
              const obj4 = { variant: "text-xs/normal", tabularNumbers: true, color: "text-subtle", children: tmp23 };
              const tmp27 = React3(Text_Text.Text, obj4);
              cResult[17] = tmp23;
              cResult[18] = tmp27;
              tmp25 = tmp27;
            } else {
              tmp25 = cResult[18];
            }
            if (cResult[19] === tmp4.textRow) {
              if (cResult[20] === tmp25) {
                let tmp28;
                if (cResult[21] === tmp20) {
                  tmp28 = cResult[22];
                }
                if (cResult[23] === style) {
                  if (cResult[24] === tmp28) {
                    let tmp32;
                    if (cResult[25] === tmp14) {
                      tmp32 = cResult[26];
                    }
                    return tmp32;
                  }
                }
                const obj5 = { style, children: items };
                items = [tmp14, tmp28];
                const tmp35 = hasOwnProperty(View, obj5);
                cResult[23] = style;
                cResult[24] = tmp28;
                cResult[25] = tmp14;
                cResult[26] = tmp35;
                tmp32 = tmp35;
              }
            }
            const obj6 = { style: textRow, children: items1 };
            items1 = [tmp20, tmp25];
            const tmp31 = hasOwnProperty(View, obj6);
            cResult[19] = tmp4.textRow;
            cResult[20] = tmp25;
            cResult[21] = tmp20;
            cResult[22] = tmp31;
            tmp28 = tmp31;
          }
          const obj7 = { style: tmp4.bar, children: tmp10 };
          const tmp17 = React3(View, obj7);
          cResult[8] = tmp4.bar;
          cResult[9] = tmp10;
          cResult[10] = tmp17;
          tmp14 = tmp17;
        }
        const obj8 = { style: items2 };
        items2 = [tmp4.progress, tmp9];
        const tmp13 = React3(View, obj8);
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
    }
  : (arg0) => {
      let duration;
      let elapsed;
      let end;
      let items;
      let items1;
      let items2;
      let obj3;
      let obj7;
      let obj9;
      let start;
      let style;
      ({ start, end, style } = arg0);
      const tmp = closure_6();
      const tmp2 = useActivityTimerDefault({ start, end });
      const obj = { style, children: items1 };
      const obj2 = { style: tmp.bar, children: React3(View, obj3) };
      obj3 = { style: items };
      items = [tmp.progress];
      const obj4 = { width: `${100 * tmp2.percentage}%` };
      items[1] = obj4;
      ({ elapsed, duration } = tmp2);
      items1 = [React3(View, obj2)];
      const obj5 = { style: tmp.textRow, children: items2 };
      const obj6 = {
        variant: "text-xs/normal",
        tabularNumbers: true,
        color: "text-subtle",
        children: obj7.formatTime(elapsed),
      };
      const Text = Text_Text.Text;
      obj7 = useActivityTimer;
      items2 = [React3(Text, obj6)];
      const obj8 = {
        variant: "text-xs/normal",
        tabularNumbers: true,
        color: "text-subtle",
        children: obj9.formatTime(duration),
      };
      const Text2 = Text_Text.Text;
      obj9 = useActivityTimer;
      items2[1] = React3(Text2, obj8);
      items1[1] = hasOwnProperty(View, obj5);
      return hasOwnProperty(View, obj);
    };
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileActivityTimebar.tsx");

export default tmp5;
