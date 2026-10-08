// discord_app/modules/guild_progress/native/components/GuildProgressCircle.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import GuildProgressUtils from "../GuildProgressUtils.tsx";
import ProgressCircleDefault from "../../../premium/native/components/ProgressCircle.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5090);
let obj2 = {
  wrapper: { position: "relative" },
  circle: { position: "absolute" },
  progressCircle: { color: nativeDefault.colors.BACKGROUND_BRAND },
};
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { color: nativeDefault.colors.BACKGROUND_BRAND };
let size = fn(2);
let result = size.fileFinishedImporting("modules/guild_progress/native/components/GuildProgressCircle.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function GuildProgressCircle(arg0) {
      const cResult = c.c(25);
      ({ percent, style, size } = arg0);
      let num = 32;
      if (undefined !== size) {
        num = size;
      }
      const tmp4 = closure_6();
      const result = num / 2;
      if (cResult[0] === num) {
        if (cResult[1] === result) {
          let tmp6 = cResult[2];
        }
        if (cResult[3] === tmp6) {
          if (cResult[4] === style) {
            if (cResult[5] === tmp4.wrapper) {
              let tmp7 = cResult[6];
            }
            if (cResult[7] === tmp6) {
              if (cResult[8] === tmp4.circle) {
                let tmp8 = cResult[9];
              }
              if (cResult[10] === num) {
                if (cResult[11] === tmp8) {
                  let tmp9 = cResult[12];
                }
                if (cResult[13] === tmp6) {
                  if (cResult[14] === tmp4.circle) {
                    let tmp14 = cResult[15];
                  }
                  if (cResult[16] === percent) {
                    if (cResult[17] === num) {
                      if (cResult[18] === tmp4.progressCircle.color) {
                        if (cResult[19] === tmp14) {
                          let tmp15 = cResult[20];
                        }
                        if (cResult[21] === tmp7) {
                          if (cResult[22] === tmp9) {
                            if (cResult[23] === tmp15) {
                              let tmp19 = cResult[24];
                            }
                            return tmp19;
                          }
                        }
                        const obj2 = { style: tmp7, children: null };
                        const items = [tmp9, tmp15];
                        obj2.children = items;
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
                  const tmp18 = React4(ProgressCircleDefault, obj3);
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
              const tmp13 = React4(ProgressCircleDefault, obj4);
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
  : function GuildProgressCircle(size) {
      let num = size.size;
      ({ percent, style } = size);
      if (num === undefined) {
        num = 32;
      }
      const tmp = closure_6();
      size = { width: num, height: num, borderRadius: num / 2 };
      const obj = { style: null, children: null };
      const items = [tmp.wrapper, style, size];
      obj.style = items;
      const obj2 = {
        style: null,
        size: num,
        strokeWidth: 4,
        percent: 100,
        color: GuildProgressUtils.PROGRESS_BACKGROUND_COLOR,
      };
      const items1 = [tmp.circle, size];
      obj2.style = items1;
      const items2 = [React4(ProgressCircleDefault, obj2)];
      const obj3 = { style: null, size: num, strokeWidth: 4, color: tmp.progressCircle.color, percent };
      const items3 = [tmp.circle, size];
      obj3.style = items3;
      items2[1] = React4(ProgressCircleDefault, obj3);
      obj.children = items2;
      return hasOwnProperty(View, obj);
    };
