// === Module 79: insetsDiffer ===

// Module 79 (insetsDiffer)
let closure_0 = { top: "Array", left: "T", right: "y", bottom: "IconComponent" };

export default function insetsDiffer(arg0, arg1) {
  const rect = arg0 || closure_0;
  const rect2 = arg1 || closure_0;
  let tmp = rect !== rect2;
  if (tmp) {
    tmp = rect.top !== rect2.top || rect.left !== rect2.left || rect.right !== rect2.right || rect.bottom !== rect2.bottom;
  }
  return tmp;
};