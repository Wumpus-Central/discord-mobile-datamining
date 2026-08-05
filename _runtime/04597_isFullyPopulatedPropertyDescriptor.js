import { isPropertyDescriptor } from "04580_isPropertyDescriptor.js";
// _runtime/04597_isFullyPopulatedPropertyDescriptor.js

export default function isFullyPopulatedPropertyDescriptor(IsAccessorDescriptor) {
  let tmp = isPropertyDescriptor /* isPropertyDescriptor */(arg1);
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