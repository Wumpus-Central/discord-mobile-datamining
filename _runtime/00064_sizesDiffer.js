// === Module 64: sizesDiffer ===

// Module 64 (sizesDiffer)
let closure_0 = { width: "r", height: "accessibilityRole" };
arg5.default = function sizesDiffer(arg0, arg1) {
  let size = arg0;
  if (!arg0) {
    size = closure_0;
  }
  let size2 = arg1;
  if (!arg1) {
    size2 = closure_0;
  }
  let tmp = size !== size2;
  if (tmp) {
    tmp = size.width !== size2.width || size.height !== size2.height;
    const tmp2 = size.width !== size2.width || size.height !== size2.height;
  }
  return tmp;
};