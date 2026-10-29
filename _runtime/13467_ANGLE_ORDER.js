// _runtime/13467_ANGLE_ORDER.js
const exports = arg5;
let c1 = 0.000001;
let closure_2 = Math.PI / 180;
let closure_3 = 180 / Math.PI;

export function equals(arg0, arg1) {
  if (arguments.length > 2) {
    if (undefined !== arguments[2]) {
      let tmp = arguments[2];
    }
    const _Math = Math;
    const _Math2 = Math;
    const _Math3 = Math;
    const absolute = Math.abs(arg0 - arg1);
    const _Math4 = Math;
    const absolute1 = Math.abs(arg0);
    return absolute <= tmp * Math.max(1, absolute1, Math.abs(arg1));
  }
  tmp = c1;
}
export function round(arg0) {
  if (arg0 >= 0) {
    const _Math3 = Math;
    let rounded = Math.round(arg0);
  } else if (arg0 % 0.5 === 0) {
    const _Math2 = Math;
    rounded = Math.floor(arg0);
  } else {
    const _Math = Math;
    rounded = Math.round(arg0);
  }
  return rounded;
}
export function setMatrixArrayType(ARRAY_TYPE) {
  exports.ARRAY_TYPE = ARRAY_TYPE;
}
export function toDegree(arg0) {
  return arg0 * closure_3;
}
export function toRadian(arg0) {
  return arg0 * closure_2;
}
export const EPSILON = 0.000001;
export const ARRAY_TYPE = typeof Float32Array !== "undefined" ? Float32Array : Array;
export const RANDOM = Math.random;
export const ANGLE_ORDER = "zyx";
