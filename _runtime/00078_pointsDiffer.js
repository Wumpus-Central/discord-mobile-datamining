// === Module 78: pointsDiffer ===

// Module 78 (pointsDiffer)
let closure_0 = { x: "r", y: "accessibilityRole" };
arg5.default = function pointsDiffer(arg0, arg1) {
  let point = arg0;
  if (!arg0) {
    point = closure_0;
  }
  let point2 = arg1;
  if (!arg1) {
    point2 = closure_0;
  }
  let tmp = point !== point2;
  if (tmp) {
    tmp = point.x !== point2.x || point.y !== point2.y;
  }
  return tmp;
};