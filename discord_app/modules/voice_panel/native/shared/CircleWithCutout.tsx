// discord_app/modules/voice_panel/native/shared/CircleWithCutout.tsx
import c from "../../../../../_runtime/00576_c.js";
import inlineStyles from "../../../../../_runtime/08136_inlineStyles.js";
import CircleWithCutoutUtils from "CircleWithCutoutUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const inlineStylesDefault = inlineStyles;

require = fn;
const PixelRatio = fn(17).PixelRatio;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
let closure_5 = PixelRatio.get();
const ReactCompilerGating = fn(558);
let size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/shared/CircleWithCutout.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        const cResult = c.c(26);
        ({ fill, cutoutPositionInDegrees, alignBadgeEdgeWithCircleEdge, badgeRadius, scaleToPixelDensity } = arg0);
        let tmp4 = undefined !== alignBadgeEdgeWithCircleEdge;
        ({ circleRadius, cutoutRadius, enableCutout } = arg0);
        if (tmp4) {
          tmp4 = alignBadgeEdgeWithCircleEdge;
        }
        if (undefined === scaleToPixelDensity) {
          let num = closure_5;
        } else {
          num = 1;
        }
        const result = circleRadius * num;
        const result1 = cutoutRadius * num;
        if (null != badgeRadius) {
          const result2 = badgeRadius * num;
        }
        const result3 = 2 * result;
        if (cResult[0] === result) {
          if (cResult[1] === cutoutPositionInDegrees) {
            let diff = cResult[2];
          }
          if (cResult[3] === result) {
            if (cResult[4] === cutoutPositionInDegrees) {
              let tmp11 = cResult[5];
            }
            if (tmp4) {
              tmp4 = null != result2;
            }
            if (tmp4) {
              diff = 2 * result - result2;
              tmp11 = result2;
            }
            const result4 = 1 / num;
            if (cResult[6] !== result4) {
              const obj2 = { transform: null };
              const obj3 = { scale: result4 };
              const items = [obj3];
              obj2.transform = items;
              cResult[6] = result4;
              cResult[7] = obj2;
              let tmp14 = obj2;
            } else {
              tmp14 = cResult[7];
            }
            if (cResult[8] !== result3) {
              const size = { width: result3, height: result3, fill: "white" };
              const tmp17 = React3(inlineStyles.Rect, size);
              cResult[8] = result3;
              cResult[9] = tmp17;
              let tmp15 = tmp17;
            } else {
              tmp15 = cResult[9];
            }
            if (cResult[10] === diff) {
              if (cResult[11] === tmp11) {
                if (cResult[12] === result1) {
                  let tmp18 = cResult[13];
                }
                if (cResult[14] === tmp15) {
                  if (cResult[15] === tmp18) {
                    let tmp21 = cResult[16];
                  }
                  let str;
                  if (enableCutout) {
                    str = "url(#mask)";
                  }
                  if (cResult[17] === result) {
                    if (cResult[18] === fill) {
                      if (cResult[19] === str) {
                        let tmp25 = cResult[20];
                      }
                      if (cResult[21] === result3) {
                        if (cResult[22] === tmp25) {
                          if (cResult[23] === tmp14) {
                            if (cResult[24] === tmp21) {
                              let tmp28 = cResult[25];
                            }
                            return tmp28;
                          }
                        }
                      }
                      const size1 = { height: result3, width: result3, style: tmp14, children: null };
                      const items1 = [tmp21, tmp25];
                      size1.children = items1;
                      const tmp31 = React4(inlineStylesDefault, size1);
                      cResult[21] = result3;
                      cResult[22] = tmp25;
                      cResult[23] = tmp14;
                      cResult[24] = tmp21;
                      cResult[25] = tmp31;
                      tmp28 = tmp31;
                    }
                  }
                  const obj4 = { cx: result, cy: result, r: result, fill, mask: str };
                  const tmp27 = React3(inlineStyles.Circle, obj4);
                  cResult[17] = result;
                  cResult[18] = fill;
                  cResult[19] = str;
                  cResult[20] = tmp27;
                  tmp25 = tmp27;
                }
                const obj5 = { children: null };
                const obj6 = { id: "mask", children: null };
                const items2 = [tmp15, tmp18];
                obj6.children = items2;
                obj5.children = React4(inlineStyles.Mask, obj6);
                const tmp24 = React3(inlineStyles.Defs, obj5);
                cResult[14] = tmp15;
                cResult[15] = tmp18;
                cResult[16] = tmp24;
                tmp21 = tmp24;
              }
            }
            const obj7 = { cx: diff, cy: tmp11, r: result1, fill: "black" };
            const tmp20 = React3(inlineStyles.Circle, obj7);
            cResult[10] = diff;
            cResult[11] = tmp11;
            cResult[12] = result1;
            cResult[13] = tmp20;
            tmp18 = tmp20;
          }
          const cutoutCenterY = CircleWithCutoutUtils.getCutoutCenterY(result, cutoutPositionInDegrees);
          cResult[3] = result;
          cResult[4] = cutoutPositionInDegrees;
          cResult[5] = cutoutCenterY;
          tmp11 = cutoutCenterY;
          const tmpResult = CircleWithCutoutUtils;
        }
        const cutoutCenterX = CircleWithCutoutUtils.getCutoutCenterX(result, cutoutPositionInDegrees);
        cResult[0] = result;
        cResult[1] = cutoutPositionInDegrees;
        cResult[2] = cutoutCenterX;
        diff = cutoutCenterX;
        const tmpResult2 = CircleWithCutoutUtils;
      }
    : (arg0) => {
        ({ cutoutPositionInDegrees, alignBadgeEdgeWithCircleEdge } = arg0);
        ({ fill, circleRadius, cutoutRadius, enableCutout } = arg0);
        if (alignBadgeEdgeWithCircleEdge === undefined) {
          alignBadgeEdgeWithCircleEdge = false;
        }
        ({ badgeRadius, scaleToPixelDensity } = arg0);
        if (scaleToPixelDensity === undefined) {
          scaleToPixelDensity = true;
        }
        let num = 1;
        if (scaleToPixelDensity) {
          num = closure_5;
        }
        const result = circleRadius * num;
        if (null != badgeRadius) {
          const result1 = badgeRadius * num;
        }
        const result2 = 2 * result;
        const cutoutCenterX = CircleWithCutoutUtils.getCutoutCenterX(result, cutoutPositionInDegrees);
        const cutoutCenterY = CircleWithCutoutUtils.getCutoutCenterY(result, cutoutPositionInDegrees);
        if (alignBadgeEdgeWithCircleEdge) {
          alignBadgeEdgeWithCircleEdge = null != result1;
        }
        let tmp8 = cutoutCenterY;
        let diff = cutoutCenterX;
        if (alignBadgeEdgeWithCircleEdge) {
          diff = 2 * result - result1;
          tmp8 = result1;
        }
        const size = { height: result2, width: result2, style: null, children: null };
        const obj3 = { transform: null };
        const items = [{ scale: 1 / num }];
        obj3.transform = items;
        size.style = obj3;
        const obj4 = { scale: 1 / num };
        const obj5 = { children: null };
        const obj6 = { id: "mask", children: null };
        const items1 = [
          React3(inlineStyles.Rect, { width: result2, height: result2, fill: "white" }),
          React3(inlineStyles.Circle, { cx: diff, cy: tmp8, r: cutoutRadius * num, fill: "black" }),
        ];
        obj6.children = items1;
        obj5.children = React4(inlineStyles.Mask, obj6);
        const items2 = [React3(inlineStyles.Defs, obj5)];
        const obj8 = { cx: result, cy: result, r: result, fill, mask: null };
        let str;
        if (enableCutout) {
          str = "url(#mask)";
        }
        obj8.mask = str;
        items2[1] = React3(inlineStyles.Circle, obj8);
        size.children = items2;
        return React4(inlineStylesDefault, size);
      },
);
export const getBadgeLeft = fn(9078).getBadgeLeft;
export const getBadgeTop = fn(9078).getBadgeTop;
