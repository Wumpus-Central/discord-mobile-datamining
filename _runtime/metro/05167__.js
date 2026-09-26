// === Module 5167: ? ===

// Module 5167
import _mod5150 from "module_5150" /* 5150 */;


export default function isFullyPopulatedPropertyDescriptor(IsAccessorDescriptor, arg1) {
  let tmp = _mod5150(arg1);
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