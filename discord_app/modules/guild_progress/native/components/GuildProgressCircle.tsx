// discord_app/modules/guild_progress/native/components/GuildProgressCircle.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import GuildProgressUtils from "../GuildProgressUtils.tsx";
import ProgressCircleDefault from "../../../premium/native/components/ProgressCircle.tsx";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { wrapper: { position: "relative" }, circle: { position: "absolute" }, progressCircle: obj2 };
obj2 = { color: nativeDefault.colors.BACKGROUND_BRAND };
let closure_6 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let items;
      let percent;
      let style;
      const obj = react2;
      const cResult = obj.c(25);
      ({ percent, style, size } = arg0);
      let num = 32;
      if (undefined !== size) {
        num = size;
      }
      const tmp4 = closure_6();
      const result = num / 2;
      if (cResult[0] === num) {
        let tmp6;
        if (cResult[1] === result) {
          tmp6 = cResult[2];
        }
        if (cResult[3] === tmp6) {
          if (cResult[4] === style) {
            let tmp7;
            if (cResult[5] === tmp4.wrapper) {
              tmp7 = cResult[6];
            }
            if (cResult[7] === tmp6) {
              let tmp8;
              if (cResult[8] === tmp4.circle) {
                tmp8 = cResult[9];
              }
              if (cResult[10] === num) {
                let tmp9;
                if (cResult[11] === tmp8) {
                  tmp9 = cResult[12];
                }
                if (cResult[13] === tmp6) {
                  let tmp14;
                  if (cResult[14] === tmp4.circle) {
                    tmp14 = cResult[15];
                  }
                  if (cResult[16] === percent) {
                    if (cResult[17] === num) {
                      if (cResult[18] === tmp4.progressCircle.color) {
                        let tmp15;
                        if (cResult[19] === tmp14) {
                          tmp15 = cResult[20];
                        }
                        if (cResult[21] === tmp7) {
                          if (cResult[22] === tmp9) {
                            let tmp19;
                            if (cResult[23] === tmp15) {
                              tmp19 = cResult[24];
                            }
                            return tmp19;
                          }
                        }
                        const obj2 = { style: tmp7, children: items };
                        items = [tmp9, tmp15];
                        const tmp22 = hasOwnProperty(View, obj2);
                        cResult[21] = tmp7;
                        cResult[22] = tmp9;
                        cResult[23] = tmp15;
                        cResult[24] = tmp22;
                        tmp19 = tmp22;
                      }
                    }
                  }
                  const obj3 = { style: tmp14, size: num, strokeWidth: 4, color: tmp4.progressCircle.color, percent };
                  const tmp18 = React3(ProgressCircleDefault, obj3);
                  cResult[16] = percent;
                  cResult[17] = num;
                  cResult[18] = tmp4.progressCircle.color;
                  cResult[19] = tmp14;
                  cResult[20] = tmp18;
                  tmp15 = tmp18;
                }
                const items1 = [tmp4.circle, tmp6];
                cResult[13] = tmp6;
                cResult[14] = tmp4.circle;
                cResult[15] = items1;
                tmp14 = items1;
              }
              const obj4 = {
                style: tmp8,
                size: num,
                strokeWidth: 4,
                percent: 100,
                color: GuildProgressUtils.PROGRESS_BACKGROUND_COLOR,
              };
              const tmp12 = ProgressCircleDefault;
              const tmp13 = React3(tmp12, obj4);
              cResult[10] = num;
              cResult[11] = tmp8;
              cResult[12] = tmp13;
              tmp9 = tmp13;
            }
            const items2 = [tmp4.circle, tmp6];
            cResult[7] = tmp6;
            cResult[8] = tmp4.circle;
            cResult[9] = items2;
            tmp8 = items2;
          }
        }
        const items3 = [tmp4.wrapper, style, tmp6];
        cResult[3] = tmp6;
        cResult[4] = style;
        cResult[5] = tmp4.wrapper;
        cResult[6] = items3;
        tmp7 = items3;
      }
      const size1 = { width: num, height: num, borderRadius: result };
      cResult[0] = num;
      cResult[1] = result;
      cResult[2] = size1;
      tmp6 = size1;
    }
  : (size) => {
      let items;
      let items1;
      let items2;
      let items3;
      let percent;
      let style;
      let num = size.size;
      ({ percent, style } = size);
      if (num === undefined) {
        num = 32;
      }
      const tmp = closure_6();
      size = { width: num, height: num, borderRadius: num / 2 };
      const obj = { style: items, children: items2 };
      items = [tmp.wrapper, style, size];
      const obj2 = {
        style: items1,
        size: num,
        strokeWidth: 4,
        percent: 100,
        color: GuildProgressUtils.PROGRESS_BACKGROUND_COLOR,
      };
      items1 = [tmp.circle, size];
      const tmp2 = ProgressCircleDefault;
      items2 = [React3(tmp2, obj2)];
      const obj3 = { style: items3, size: num, strokeWidth: 4, color: tmp.progressCircle.color, percent };
      items3 = [tmp.circle, size];
      items2[1] = React3(ProgressCircleDefault, obj3);
      return hasOwnProperty(View, obj);
    };
let size = size_mod;
let result = size.fileFinishedImporting("modules/guild_progress/native/components/GuildProgressCircle.tsx");

export default tmp4;
