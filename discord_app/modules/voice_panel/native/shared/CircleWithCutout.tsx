// discord_app/modules/voice_panel/native/shared/CircleWithCutout.tsx
import inlineStyles from "../../../../../_runtime/08453_inlineStyles.js";
import CircleWithCutoutUtils from "CircleWithCutoutUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const inlineStylesDefault = inlineStyles;

require = fn;
const PixelRatio = fn(17).PixelRatio;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
let closure_5 = PixelRatio.get();
let size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/shared/CircleWithCutout.tsx");

export default noop.memo(function CircleWithCutout(arg0) {
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
  let obj = CircleWithCutoutUtils;
  const cutoutCenterX = obj.getCutoutCenterX(result, cutoutPositionInDegrees);
  let obj1 = CircleWithCutoutUtils;
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
  const size = { height: result2, width: result2, style: null, children: null };
  obj = { transform: null };
  obj = { scale: 1 / num };
  const items = [obj];
  obj.transform = items;
  size.style = obj;
  obj1 = { children: null };
  const obj2 = { id: "mask", children: null };
  const items1 = [
    React3(inlineStyles.Rect, { width: result2, height: result2, fill: "white" }),
    React3(inlineStyles.Circle, { cx: diff, cy: tmp8, r: cutoutRadius * num, fill: "black" }),
  ];
  obj2.children = items1;
  obj1.children = React4(inlineStyles.Mask, obj2);
  const items2 = [React3(inlineStyles.Defs, obj1)];
  const obj4 = { cx: result, cy: result, r: result, fill, mask: null };
  let str;
  if (enableCutout) {
    str = "url(#mask)";
  }
  obj4.mask = str;
  items2[1] = React3(inlineStyles.Circle, obj4);
  size.children = items2;
  return React4(inlineStylesDefault, size);
});
export const getBadgeLeft = fn(9499).getBadgeLeft;
export const getBadgeTop = fn(9499).getBadgeTop;
