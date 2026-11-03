// _runtime/01778_cubicBezier.js
import CubicBezierEasing from "01779_CubicBezierEasing.js";
import StepsEasing from "01780_StepsEasing.js";
import _mod1781 from "metro/01781__.js";

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
  const linearEasing = new _mod1781.LinearEasing(items);
  return linearEasing;
}
export const CubicBezierEasing = CubicBezierEasing.CubicBezierEasing;
export const LinearEasing = _mod1781.LinearEasing;
export const StepsEasing = StepsEasing.StepsEasing;
