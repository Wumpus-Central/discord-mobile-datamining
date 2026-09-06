// _runtime/04823_ToPrimitive.js
import ToPrimitive from "04824_ToPrimitive.js";

export default function ToPrimitive(arg0) {
  if (arguments.length > 1) {
    let tmp3 = ToPrimitive(arg0, arguments[1]);
  } else {
    tmp3 = ToPrimitive(arg0);
  }
  return tmp3;
}
