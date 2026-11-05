// === Module 6668: ? ===

// Module 6668
import _mod6651 from "module_6651" /* 6651 */;


export default function isFullyPopulatedPropertyDescriptor(IsAccessorDescriptor, arg1) {
  let tmp = _mod6651(arg1);
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