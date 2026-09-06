// === Module 9499: CircleWithCutoutUtils ===

// Module 9499 (CircleWithCutoutUtils)
import inlineStyles from "inlineStyles" /* 8453 */;
import noop from "module_19" /* 19 */;

const inlineStylesDefault = inlineStyles;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
let closure_5 = Math.PI / 180;
let size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/shared/CircleWithCutoutUtils.tsx");

export default function CircleWithCutout(arg0) {
  ({ circleRadius, cutoutPositionInDegrees } = arg0);
  const result = 2 * circleRadius;
  ({ cutoutRadius, enableCutout, circleFillColor } = arg0);
  const sum = circleRadius + circleRadius * Math.sin(cutoutPositionInDegrees * closure_5);
  const diff = circleRadius - circleRadius * Math.cos(cutoutPositionInDegrees * closure_5);
  const size = { height: result, width: result, children: null };
  let obj = { children: null };
  obj = { id: "mask", children: null };
  const items = [React3(inlineStyles.Rect, { width: result, height: result, fill: "white" }), React3(inlineStyles.Circle, { cx: sum, cy: diff, r: cutoutRadius, fill: "black" })];
  obj.children = items;
  obj.children = React4(inlineStyles.Mask, obj);
  const items1 = [React3(inlineStyles.Defs, obj), ];
  const obj1 = { cx: circleRadius, cy: circleRadius, r: circleRadius, fill: circleFillColor, mask: null };
  let str;
  if (enableCutout) {
    str = "url(#mask)";
  }
  obj1.mask = str;
  items1[1] = React3(inlineStyles.Circle, obj1);
  size.children = items1;
  return React4(inlineStylesDefault, size);
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