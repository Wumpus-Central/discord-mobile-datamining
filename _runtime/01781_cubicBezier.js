// _runtime/01781_cubicBezier.js
import CubicBezierEasing from "01782_CubicBezierEasing.js";
import StepsEasing from "01783_StepsEasing.js";
import _mod1784 from "metro/01784__.js";

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
