import { PixelRatio } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import importAllResult from "noop";

let c3;
let c4;
const require = arg1;
({ jsx: c3, jsxs: c4 } = jsxProd);
let closure_5 = PixelRatio.get();
const memoResult = require("noop").memo(function CircleWithCutout(arg0) {
  let alignBadgeEdgeWithCircleEdge;
  let badgeRadius;
  let circleRadius;
  let cutoutPositionInDegrees;
  let cutoutRadius;
  let enableCutout;
  let fill;
  let scaleToPixelDensity;
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
  let obj = require(10729) /* CircleWithCutout */;
  const cutoutCenterX = obj.getCutoutCenterX(result, cutoutPositionInDegrees);
  let obj1 = require(10729) /* CircleWithCutout */;
  const cutoutCenterY = obj1.getCutoutCenterY(result, cutoutPositionInDegrees);
  if (alignBadgeEdgeWithCircleEdge) {
    alignBadgeEdgeWithCircleEdge = null != result1;
  }
  let tmp8 = cutoutCenterY;
  let diff = cutoutCenterX;
  if (alignBadgeEdgeWithCircleEdge) {
    diff = 2 * result - result1;
    tmp8 = result1;
  }
  obj = { height: result2, width: result2, style: { transform: items }, children: null };
  obj = { scale: 1 / num };
  items = [obj];
  obj1 = { children: null };
  const obj2 = { id: "mask", children: null };
  const items1 = [callback(require(8196) /* inlineStyles */.Rect, { width: result2, height: result2, fill: "white" }), callback(require(8196) /* inlineStyles */.Circle, { cx: diff, cy: tmp8, r: cutoutRadius * num, fill: "black" })];
  obj2[1] = items1;
  obj1[0] = callback2(require(8196) /* inlineStyles */.Mask, obj2);
  const items2 = [callback(require(8196) /* inlineStyles */.Defs, obj1), ];
  const obj4 = { cx: result, cy: result, r: result, fill, mask: null };
  let str;
  if (enableCutout) {
    str = "url(#mask)";
  }
  obj4[4] = str;
  items2[1] = callback(require(8196) /* inlineStyles */.Circle, obj4);
  obj[3] = items2;
  return callback2(importDefault(8196), obj);
});
let result = require("jsxProd").fileFinishedImporting("modules/voice_panel/native/shared/CircleWithCutout.tsx");

export default memoResult;
export const getBadgeLeft = require("CircleWithCutout").getBadgeLeft;
export const getBadgeTop = require("CircleWithCutout").getBadgeTop;