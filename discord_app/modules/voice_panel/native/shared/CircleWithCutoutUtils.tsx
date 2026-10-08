// === Module 10687: CircleWithCutoutUtils ===

// Module 10687 (CircleWithCutoutUtils)
import c from "c" /* 576 */;
import inlineStyles from "inlineStyles" /* 7550 */;
import noop from "module_19" /* 19 */;

const inlineStylesDefault = inlineStyles;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
let closure_5 = Math.PI / 180;
const ReactCompilerGating = fn(558);
function getCutoutCenterX(result, cutoutPositionInDegrees) {
  return result + result * Math.sin(cutoutPositionInDegrees * closure_5);
}
function getCutoutCenterY(result, cutoutPositionInDegrees) {
  return result - result * Math.cos(cutoutPositionInDegrees * closure_5);
}
let size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/shared/CircleWithCutoutUtils.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function CircleWithCutout(arg0) {
  const cResult = c.c(23);
  ({ circleRadius, cutoutRadius, cutoutPositionInDegrees, circleFillColor } = arg0);
  const result = 2 * circleRadius;
  if (cResult[0] === circleRadius) {
    if (cResult[1] === cutoutPositionInDegrees) {
      let tmp6 = cResult[2];
    }
    if (cResult[3] === circleRadius) {
      if (cResult[4] === cutoutPositionInDegrees) {
        let tmp8 = cResult[5];
      }
      if (cResult[6] !== result) {
        const size = { width: result, height: result, fill: "white" };
        const tmp14 = React3(inlineStyles.Rect, size);
        cResult[6] = result;
        cResult[7] = tmp14;
        let tmp12 = tmp14;
      } else {
        tmp12 = cResult[7];
      }
      if (cResult[8] === tmp6) {
        if (cResult[9] === tmp8) {
          if (cResult[10] === cutoutRadius) {
            let tmp15 = cResult[11];
          }
          if (cResult[12] === tmp12) {
            if (cResult[13] === tmp15) {
              let tmp18 = cResult[14];
            }
            let str;
            if (tmp4) {
              str = "url(#mask)";
            }
            if (cResult[15] === circleFillColor) {
              if (cResult[16] === circleRadius) {
                if (cResult[17] === str) {
                  let tmp22 = cResult[18];
                }
                if (cResult[19] === result) {
                  if (cResult[20] === tmp18) {
                    if (cResult[21] === tmp22) {
                      let tmp25 = cResult[22];
                    }
                    return tmp25;
                  }
                }
                const size1 = { height: result, width: result, children: null };
                const items = [tmp18, tmp22];
                size1.children = items;
                const tmp28 = React4(inlineStylesDefault, size1);
                cResult[19] = result;
                cResult[20] = tmp18;
                cResult[21] = tmp22;
                cResult[22] = tmp28;
                tmp25 = tmp28;
              }
            }
            const obj2 = { cx: circleRadius, cy: circleRadius, r: circleRadius, fill: circleFillColor, mask: str };
            const tmp24 = React3(inlineStyles.Circle, obj2);
            cResult[15] = circleFillColor;
            cResult[16] = circleRadius;
            cResult[17] = str;
            cResult[18] = tmp24;
            tmp22 = tmp24;
          }
          const obj3 = { children: null };
          const obj4 = { id: "mask", children: null };
          const items1 = [tmp12, tmp15];
          obj4.children = items1;
          obj3.children = React4(inlineStyles.Mask, obj4);
          const tmp21 = React3(inlineStyles.Defs, obj3);
          cResult[12] = tmp12;
          cResult[13] = tmp15;
          cResult[14] = tmp21;
          tmp18 = tmp21;
        }
      }
      const obj5 = { cx: tmp6, cy: tmp8, r: cutoutRadius, fill: "black" };
      const tmp17 = React3(inlineStyles.Circle, obj5);
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
}) : (function CircleWithCutout(arg0) {
  ({ circleRadius, cutoutPositionInDegrees } = arg0);
  const result = 2 * circleRadius;
  ({ cutoutRadius, enableCutout, circleFillColor } = arg0);
  const sum = circleRadius + circleRadius * Math.sin(cutoutPositionInDegrees * closure_5);
  const diff = circleRadius - circleRadius * Math.cos(cutoutPositionInDegrees * closure_5);
  const size = { height: result, width: result, children: null };
  const obj = { children: null };
  const obj2 = { id: "mask", children: null };
  const items = [React3(inlineStyles.Rect, { width: result, height: result, fill: "white" }), React3(inlineStyles.Circle, { cx: sum, cy: diff, r: cutoutRadius, fill: "black" })];
  obj2.children = items;
  obj.children = React4(inlineStyles.Mask, obj2);
  const items1 = [React3(inlineStyles.Defs, obj), ];
  const obj3 = { cx: circleRadius, cy: circleRadius, r: circleRadius, fill: circleFillColor, mask: null };
  let str;
  if (enableCutout) {
    str = "url(#mask)";
  }
  obj3.mask = str;
  items1[1] = React3(inlineStyles.Circle, obj3);
  size.children = items1;
  return React4(inlineStylesDefault, size);
});
export const getBadgeTop = function getBadgeTop(badgeRadius, buttonRadius, c14) {
  return buttonRadius - buttonRadius * Math.cos(c14 * closure_5) - badgeRadius;
};
export const getBadgeLeft = function getBadgeLeft(badgeRadius, buttonRadius, c14) {
  return buttonRadius + buttonRadius * Math.sin(c14 * closure_5) - badgeRadius;
};
export { getCutoutCenterX };
export { getCutoutCenterY };