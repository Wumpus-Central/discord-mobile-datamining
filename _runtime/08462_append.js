// === Module 8462: append ===

// Module 8462 (append)
function append(arg0, arg1, arg2, arg3, arg4, arg5) {
  let tmp = 1 !== arg0;
  if (!tmp) {
    tmp = 0 !== arg1;
  }
  if (!tmp) {
    tmp = 0 !== arg2;
  }
  if (!tmp) {
    tmp = 1 !== arg3;
  }
  if (tmp) {
    if (c8) {
      c8 = false;
      c2 = arg0;
      c3 = arg1;
      c4 = arg2;
      c5 = arg3;
      closure_6 = arg4;
      closure_7 = arg5;
    } else {
      if (tmp) {
        c2 = tmp4 * arg0 + tmp6 * arg1;
        c3 = tmp5 * arg0 + tmp7 * arg1;
        c4 = tmp4 * arg2 + tmp6 * arg3;
        c5 = tmp5 * arg2 + tmp7 * arg3;
      }
      if (tmp2) {
        closure_6 = tmp4 * arg4 + tmp6 * arg5 + closure_6;
        closure_7 = tmp5 * arg4 + tmp7 * arg5 + closure_7;
      }
    }
  }
}
let closure_0 = Math.PI / 180;
let items = [1, 0, 0, 1, 0, 0];
let c2 = 1;
let c3 = 0;
let c4 = 0;
let c5 = 1;
let closure_6 = 0;
let closure_7 = 0;
let c8 = true;

export const identity = items;
export function reset() {
  if (!c8) {
    c5 = 1;
    c2 = 1;
    closure_7 = 0;
    closure_6 = 0;
    c4 = 0;
    c3 = 0;
    c8 = true;
  }
}
export function toArray() {
  if (!c8) {
    items = [c2, c3, c4, c5, closure_6, closure_7];
  }
  return items;
}
export { append };
export const appendTransform = function appendTransform(arg0, arg1, scaleX, scaleY, rotation, skewX, skewY, originX, originY) {
  let num2 = 1;
  let num3 = 0;
  if (rotation % 360) {
    const result = rotation * closure_0;
    const _Math = Math;
    num2 = Math.cos(result);
    const _Math2 = Math;
    num3 = Math.sin(result);
  }
  const result1 = num2 * scaleX;
  const result2 = num3 * scaleX;
  const result3 = -num3 * scaleY;
  const result4 = num2 * scaleY;
  if (!skewX) {
    if (!skewY) {
      append(result1, result2, result3, result4, arg0, arg1);
    }
    let tmp19 = originX;
    if (!originX) {
      tmp19 = originY;
    }
    if (tmp19) {
      closure_6 = closure_6 - (originX * c2 + originY * c4);
      closure_7 = closure_7 - (originX * c3 + originY * c5);
      c8 = false;
    }
  }
  const tanResult = Math.tan(skewY * closure_0);
  const tanResult1 = Math.tan(skewX * closure_0);
  append(result1 + tanResult1 * result2, tanResult * result1 + result2, result3 + tanResult1 * result4, tanResult * result3 + result4, arg0, arg1);
};