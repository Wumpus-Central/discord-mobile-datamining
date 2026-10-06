// discord_app/modules/voice_panel/native/shared/CircleWithCutoutUtils.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import inlineStyles from "../../../../../_runtime/08169_inlineStyles.js";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

const inlineStylesDefault = inlineStyles;

let c3;
let closure_4;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let closure_5 = Math.PI / 180;
const tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let circleFillColor;
      let circleRadius;
      let cutoutPositionInDegrees;
      let cutoutRadius;
      let items;
      let items1;
      let obj4;
      const obj = react2;
      const cResult = obj.c(23);
      ({ circleRadius, cutoutRadius, cutoutPositionInDegrees, circleFillColor } = arg0);
      const result = 2 * circleRadius;
      if (cResult[0] === circleRadius) {
        let tmp6;
        if (cResult[1] === cutoutPositionInDegrees) {
          tmp6 = cResult[2];
        }
        if (cResult[3] === circleRadius) {
          let tmp8;
          let tmp12;
          if (cResult[4] === cutoutPositionInDegrees) {
            tmp8 = cResult[5];
          }
          if (cResult[6] !== result) {
            size = { width: result, height: result, fill: "white" };
            const tmp14 = _false(inlineStyles.Rect, size);
            cResult[6] = result;
            cResult[7] = tmp14;
            tmp12 = tmp14;
          } else {
            tmp12 = cResult[7];
          }
          if (cResult[8] === tmp6) {
            if (cResult[9] === tmp8) {
              let tmp15;
              if (cResult[10] === cutoutRadius) {
                tmp15 = cResult[11];
              }
              if (cResult[12] === tmp12) {
                let tmp18;
                if (cResult[13] === tmp15) {
                  tmp18 = cResult[14];
                }
                let str;
                if (tmp4) {
                  str = "url(#mask)";
                }
                if (cResult[15] === circleFillColor) {
                  if (cResult[16] === circleRadius) {
                    let tmp22;
                    if (cResult[17] === str) {
                      tmp22 = cResult[18];
                    }
                    if (cResult[19] === result) {
                      if (cResult[20] === tmp18) {
                        let tmp25;
                        if (cResult[21] === tmp22) {
                          tmp25 = cResult[22];
                        }
                        return tmp25;
                      }
                    }
                    const size1 = { height: result, width: result, children: items };
                    items = [tmp18, tmp22];
                    const tmp28 = React3(inlineStylesDefault, size1);
                    cResult[19] = result;
                    cResult[20] = tmp18;
                    cResult[21] = tmp22;
                    cResult[22] = tmp28;
                    tmp25 = tmp28;
                  }
                }
                const obj2 = { cx: circleRadius, cy: circleRadius, r: circleRadius, fill: circleFillColor, mask: str };
                const tmp24 = _false(inlineStyles.Circle, obj2);
                cResult[15] = circleFillColor;
                cResult[16] = circleRadius;
                cResult[17] = str;
                cResult[18] = tmp24;
                tmp22 = tmp24;
              }
              const obj3 = { children: React3(inlineStyles.Mask, obj4) };
              const Defs = inlineStyles.Defs;
              obj4 = { id: "mask", children: items1 };
              items1 = [tmp12, tmp15];
              const tmp21 = _false(Defs, obj3);
              cResult[12] = tmp12;
              cResult[13] = tmp15;
              cResult[14] = tmp21;
              tmp18 = tmp21;
            }
          }
          const obj5 = { cx: tmp6, cy: tmp8, r: cutoutRadius, fill: "black" };
          const tmp17 = _false(inlineStyles.Circle, obj5);
          cResult[8] = tmp6;
          cResult[9] = tmp8;
          cResult[10] = cutoutRadius;
          cResult[11] = tmp17;
          tmp15 = tmp17;
        }
        const _Math = Math;
        const diff = circleRadius - circleRadius * Math.cos(cutoutPositionInDegrees * closure_5);
        cResult[3] = circleRadius;
        cResult[4] = cutoutPositionInDegrees;
        cResult[5] = diff;
        tmp8 = diff;
      }
      const sum = circleRadius + circleRadius * Math.sin(cutoutPositionInDegrees * closure_5);
      cResult[0] = circleRadius;
      cResult[1] = cutoutPositionInDegrees;
      cResult[2] = sum;
      tmp6 = sum;
    }
  : (arg0) => {
      let Mask;
      let circleFillColor;
      let circleRadius;
      let cutoutPositionInDegrees;
      let cutoutRadius;
      let enableCutout;
      let items;
      let items1;
      let obj2;
      let str;
      ({ circleRadius, cutoutPositionInDegrees } = arg0);
      const result = 2 * circleRadius;
      ({ cutoutRadius, enableCutout, circleFillColor } = arg0);
      const sum = circleRadius + circleRadius * Math.sin(cutoutPositionInDegrees * closure_5);
      const diff = circleRadius - circleRadius * Math.cos(cutoutPositionInDegrees * closure_5);
      size = { height: result, width: result, children: items1 };
      const obj = { children: React3(Mask, obj2) };
      const tmp5 = inlineStylesDefault;
      const Defs = inlineStyles.Defs;
      obj2 = { id: "mask", children: items };
      Mask = inlineStyles.Mask;
      items = [
        _false(inlineStyles.Rect, { width: result, height: result, fill: "white" }),
        _false(inlineStyles.Circle, { cx: sum, cy: diff, r: cutoutRadius, fill: "black" }),
      ];
      items1 = [_false(Defs, obj)];
      const obj3 = { cx: circleRadius, cy: circleRadius, r: circleRadius, fill: circleFillColor, mask: str };
      str = undefined;
      const Circle = inlineStyles.Circle;
      if (enableCutout) {
        str = "url(#mask)";
      }
      items1[1] = _false(Circle, obj3);
      return React3(tmp5, size);
    };
function getCutoutCenterX(result, cutoutPositionInDegrees) {
  return result + result * Math.sin(cutoutPositionInDegrees * closure_5);
}
function getCutoutCenterY(result, cutoutPositionInDegrees) {
  return result - result * Math.cos(cutoutPositionInDegrees * closure_5);
}
let size = size_mod;
let result = size.fileFinishedImporting("modules/voice_panel/native/shared/CircleWithCutoutUtils.tsx");

export default tmp4;
export const getBadgeTop = function getBadgeTop(badgeRadius, buttonRadius, c14) {
  return buttonRadius - buttonRadius * Math.cos(c14 * closure_5) - badgeRadius;
};
export const getBadgeLeft = function getBadgeLeft(badgeRadius, buttonRadius, c14) {
  return buttonRadius + buttonRadius * Math.sin(c14 * closure_5) - badgeRadius;
};
export { getCutoutCenterX };
export { getCutoutCenterY };
