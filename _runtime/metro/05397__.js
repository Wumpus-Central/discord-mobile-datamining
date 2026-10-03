// === Module 5397: ? ===

// Module 5397
import _mod5380 from "module_5380" /* 5380 */;


export default function isFullyPopulatedPropertyDescriptor(IsAccessorDescriptor, arg1) {
  let tmp = _mod5380(arg1);
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