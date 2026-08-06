// discord_app/modules/voice_panel/native/shared/CircleWithCutoutUtils.tsx
import "noop";
import jsxProd from "jsxProd";
import { inlineStyles } from "../../../../../_runtime/07758_inlineStyles.js";

let c3;
let c4;
const require = arg1;
({ jsx: c3, jsxs: c4 } = jsxProd);
let closure_5 = Math.PI / 180;
let result = require("inlineStyles").fileFinishedImporting("modules/voice_panel/native/shared/CircleWithCutoutUtils.tsx");

export default function CircleWithCutout(arg0) {
  let circleFillColor;
  let circleRadius;
  let cutoutPositionInDegrees;
  let cutoutRadius;
  let enableCutout;
  ({ circleRadius, cutoutPositionInDegrees } = arg0);
  const result = 2 * circleRadius;
  ({ cutoutRadius, enableCutout, circleFillColor } = arg0);
  const sum = circleRadius + circleRadius * Math.sin(cutoutPositionInDegrees * closure_5);
  const diff = circleRadius - circleRadius * Math.cos(cutoutPositionInDegrees * closure_5);
  let obj = { height: result, width: result, children: null };
  obj = { children: null };
  obj = { id: "mask", children: null };
  const items = [callback(inlineStyles.Rect, { width: result, height: result, fill: "white" }), callback(inlineStyles.Circle, { cx: sum, cy: diff, r: cutoutRadius, fill: "black" })];
  obj[1] = items;
  obj[0] = callback2(inlineStyles.Mask, obj);
  const items1 = [callback(inlineStyles.Defs, obj), ];
  const obj1 = { cx: circleRadius, cy: circleRadius, r: circleRadius, fill: circleFillColor, mask: null };
  let str;
  if (enableCutout) {
    str = "url(#mask)";
  }
  obj1[4] = str;
  items1[1] = callback(inlineStyles.Circle, obj1);
  obj[2] = items1;
  return callback2(inlineStyles, obj);
};
export const getBadgeTop = function getBadgeTop(badgeRadius, buttonRadius, arg2) {
  return buttonRadius - buttonRadius * Math.cos(arg2 * closure_5) - badgeRadius;
};
export const getBadgeLeft = function getBadgeLeft(badgeRadius, buttonRadius, arg2) {
  return buttonRadius + buttonRadius * Math.sin(arg2 * closure_5) - badgeRadius;
};
export const getCutoutCenterX = function getCutoutCenterX(result, cutoutPositionInDegrees) {
  return result + result * Math.sin(cutoutPositionInDegrees * closure_5);
};
export const getCutoutCenterY = function getCutoutCenterY(result, cutoutPositionInDegrees) {
  return result - result * Math.cos(cutoutPositionInDegrees * closure_5);
};