// discord_app/modules/voice_panel/native/shared/CircleWithCutout.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import inlineStyles from "../../../../../_runtime/08136_inlineStyles.js";
import CircleWithCutoutUtils from "CircleWithCutoutUtils.tsx";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

const inlineStylesDefault = inlineStyles;

let c3;
let closure_4;
const PixelRatio = react_native.PixelRatio;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let closure_5 = PixelRatio.get();
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        let alignBadgeEdgeWithCircleEdge;
        let badgeRadius;
        let circleRadius;
        let cutoutPositionInDegrees;
        let cutoutRadius;
        let enableCutout;
        let fill;
        let items;
        let items1;
        let items2;
        let num;
        let obj6;
        let result2;
        let scaleToPixelDensity;
        const obj = react2;
        const cResult = obj.c(26);
        ({ fill, cutoutPositionInDegrees, alignBadgeEdgeWithCircleEdge, badgeRadius, scaleToPixelDensity } = arg0);
        let tmp4 = undefined !== alignBadgeEdgeWithCircleEdge;
        ({ circleRadius, cutoutRadius, enableCutout } = arg0);
        if (tmp4) {
          tmp4 = alignBadgeEdgeWithCircleEdge;
        }
        if (undefined === scaleToPixelDensity) {
          num = closure_5;
        } else {
          num = 1;
        }
        const result = circleRadius * num;
        const result1 = cutoutRadius * num;
        if (null != badgeRadius) {
          result2 = badgeRadius * num;
        }
        const result3 = 2 * result;
        if (cResult[0] === result) {
          let diff;
          if (cResult[1] === cutoutPositionInDegrees) {
            diff = cResult[2];
          }
          if (cResult[3] === result) {
            let tmp11;
            let tmp14;
            let tmp15;
            if (cResult[4] === cutoutPositionInDegrees) {
              tmp11 = cResult[5];
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
              const obj2 = { transform: items };
              items = [{ scale: result4 }];
              const obj3 = { scale: result4 };
              cResult[6] = result4;
              cResult[7] = obj2;
              tmp14 = obj2;
            } else {
              tmp14 = cResult[7];
            }
            if (cResult[8] !== result3) {
              size = { width: result3, height: result3, fill: "white" };
              const tmp17 = _false(inlineStyles.Rect, size);
              cResult[8] = result3;
              cResult[9] = tmp17;
              tmp15 = tmp17;
            } else {
              tmp15 = cResult[9];
            }
            if (cResult[10] === diff) {
              if (cResult[11] === tmp11) {
                let tmp18;
                if (cResult[12] === result1) {
                  tmp18 = cResult[13];
                }
                if (cResult[14] === tmp15) {
                  let tmp21;
                  if (cResult[15] === tmp18) {
                    tmp21 = cResult[16];
                  }
                  let str;
                  if (enableCutout) {
                    str = "url(#mask)";
                  }
                  if (cResult[17] === result) {
                    if (cResult[18] === fill) {
                      let tmp25;
                      if (cResult[19] === str) {
                        tmp25 = cResult[20];
                      }
                      if (cResult[21] === result3) {
                        if (cResult[22] === tmp25) {
                          if (cResult[23] === tmp14) {
                            let tmp28;
                            if (cResult[24] === tmp21) {
                              tmp28 = cResult[25];
                            }
                            return tmp28;
                          }
                        }
                      }
                      const size1 = { height: result3, width: result3, style: tmp14, children: items1 };
                      items1 = [tmp21, tmp25];
                      const tmp31 = React3(inlineStylesDefault, size1);
                      cResult[21] = result3;
                      cResult[22] = tmp25;
                      cResult[23] = tmp14;
                      cResult[24] = tmp21;
                      cResult[25] = tmp31;
                      tmp28 = tmp31;
                    }
                  }
                  const obj4 = { cx: result, cy: result, r: result, fill, mask: str };
                  const tmp27 = _false(inlineStyles.Circle, obj4);
                  cResult[17] = result;
                  cResult[18] = fill;
                  cResult[19] = str;
                  cResult[20] = tmp27;
                  tmp25 = tmp27;
                }
                const obj5 = { children: React3(inlineStyles.Mask, obj6) };
                const Defs = inlineStyles.Defs;
                obj6 = { id: "mask", children: items2 };
                items2 = [tmp15, tmp18];
                const tmp24 = _false(Defs, obj5);
                cResult[14] = tmp15;
                cResult[15] = tmp18;
                cResult[16] = tmp24;
                tmp21 = tmp24;
              }
            }
            const obj7 = { cx: diff, cy: tmp11, r: result1, fill: "black" };
            const tmp20 = _false(inlineStyles.Circle, obj7);
            cResult[10] = diff;
            cResult[11] = tmp11;
            cResult[12] = result1;
            cResult[13] = tmp20;
            tmp18 = tmp20;
          }
          const tmpResult = CircleWithCutoutUtils;
          const cutoutCenterY = tmpResult.getCutoutCenterY(result, cutoutPositionInDegrees);
          cResult[3] = result;
          cResult[4] = cutoutPositionInDegrees;
          cResult[5] = cutoutCenterY;
          tmp11 = cutoutCenterY;
        }
        const tmpResult2 = CircleWithCutoutUtils;
        const cutoutCenterX = tmpResult2.getCutoutCenterX(result, cutoutPositionInDegrees);
        cResult[0] = result;
        cResult[1] = cutoutPositionInDegrees;
        cResult[2] = cutoutCenterX;
        diff = cutoutCenterX;
      }
    : (arg0) => {
        let Mask;
        let alignBadgeEdgeWithCircleEdge;
        let badgeRadius;
        let circleRadius;
        let cutoutPositionInDegrees;
        let cutoutRadius;
        let enableCutout;
        let fill;
        let items;
        let items1;
        let items2;
        let obj3;
        let obj6;
        let result1;
        let scaleToPixelDensity;
        let str;
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
          result1 = badgeRadius * num;
        }
        const result2 = 2 * result;
        const obj = CircleWithCutoutUtils;
        const cutoutCenterX = obj.getCutoutCenterX(result, cutoutPositionInDegrees);
        const obj2 = CircleWithCutoutUtils;
        const cutoutCenterY = obj2.getCutoutCenterY(result, cutoutPositionInDegrees);
        if (alignBadgeEdgeWithCircleEdge) {
          alignBadgeEdgeWithCircleEdge = null != result1;
        }
        let tmp8 = cutoutCenterY;
        let diff = cutoutCenterX;
        if (alignBadgeEdgeWithCircleEdge) {
          diff = 2 * result - result1;
          tmp8 = result1;
        }
        size = { height: result2, width: result2, style: obj3, children: items2 };
        obj3 = { transform: items };
        items = [];
        const obj4 = { scale: 1 / num };
        items[0] = obj4;
        const obj5 = { children: React3(Mask, obj6) };
        const tmp11 = inlineStylesDefault;
        const Defs = inlineStyles.Defs;
        obj6 = { id: "mask", children: items1 };
        Mask = inlineStyles.Mask;
        items1 = [_false(inlineStyles.Rect, { width: result2, height: result2, fill: "white" })];
        const obj7 = { cx: diff, cy: tmp8, r: cutoutRadius * num, fill: "black" };
        items1[1] = _false(inlineStyles.Circle, obj7);
        items2 = [_false(Defs, obj5)];
        const obj8 = { cx: result, cy: result, r: result, fill, mask: str };
        str = undefined;
        const Circle = inlineStyles.Circle;
        if (enableCutout) {
          str = "url(#mask)";
        }
        items2[1] = _false(Circle, obj8);
        return React3(tmp11, size);
      },
);
let size = size_mod;
let result = size.fileFinishedImporting("modules/voice_panel/native/shared/CircleWithCutout.tsx");

export default memoResult;
export const getBadgeLeft = CircleWithCutoutUtils.getBadgeLeft;
export const getBadgeTop = CircleWithCutoutUtils.getBadgeTop;
