// === Module 5351: ? ===

// Module 5351
import _mod5334 from "module_5334" /* 5334 */;


export default function isFullyPopulatedPropertyDescriptor(IsAccessorDescriptor, arg1) {
  let tmp = _mod5334(arg1);
  if (tmp) {
    tmp = "[[Enumerable]]" in arg1;
  }
  if (tmp) {
    tmp = "[[Configurable]]" in arg1;
  }
  if (tmp) {
    tmp = IsAccessorDescriptor.IsAccessorDescriptor(arg1) || IsAccessorDescriptor.IsDataDescriptor(arg1);
    const tmp3 = IsAccessorDescriptor.IsAccessorDescriptor(arg1) || IsAccessorDescriptor.IsDataDescriptor(arg1);
  }
  return tmp;
};