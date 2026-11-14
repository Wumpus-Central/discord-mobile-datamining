// === Module 1781: cubicBezier ===

// Module 1781 (cubicBezier)
import CubicBezierEasing from "CubicBezierEasing" /* 1782 */;
import StepsEasing from "StepsEasing" /* 1783 */;
import _mod1784 from "module_1784" /* 1784 */;


export function cubicBezier(items, y1, x2, y2) {
  const cubicBezierEasing = new CubicBezierEasing.CubicBezierEasing(items, y1, x2, y2);
  return cubicBezierEasing;
}
export function steps(stepsNumber) {
  let str = arg1;
  if (arg1 === undefined) {
    str = "jump-end";
  }
  const stepsEasing = new StepsEasing.StepsEasing(stepsNumber, str);
  return stepsEasing;
}
export function linear() {
  items = [...arguments];
  const linearEasing = new _mod1784.LinearEasing(items);
  return linearEasing;
}
export const CubicBezierEasing = CubicBezierEasing.CubicBezierEasing;
export const LinearEasing = _mod1784.LinearEasing;
export const StepsEasing = StepsEasing.StepsEasing;