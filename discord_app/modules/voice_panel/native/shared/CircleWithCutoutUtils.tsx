// discord_app/modules/voice_panel/native/shared/CircleWithCutoutUtils.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import inlineStyles from "../../../../../_runtime/06607_inlineStyles.js";
import inlineStylesDefault from "../../../../../_runtime/06607_inlineStyles.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
noopAll;
({ jsx: c3, jsxs: c4 } = jsxProd);
let closure_5 = Math.PI / 180;
let result = require("set").fileFinishedImporting("modules/voice_panel/native/shared/CircleWithCutoutUtils.tsx");

export default function CircleWithCutout(arg0) {
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
  obj1 = { cx: circleRadius, cy: circleRadius, r: circleRadius, fill: circleFillColor, mask: null };
  let str;
  if (enableCutout) {
    str = "url(#mask)";
  }
  obj1[4] = str;
  items1[1] = callback(inlineStyles.Circle, obj1);
  obj[2] = items1;
  return callback2(inlineStylesDefault, obj);
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