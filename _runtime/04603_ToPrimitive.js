// _runtime/04603_ToPrimitive.js
import { ToPrimitive } from "04604_ToPrimitive.js";

export default function ToPrimitive(arg0) {
  if (arguments.length > 1) {
    let tmp3 = ToPrimitive(arg0, arguments[1]);
  } else {
    tmp3 = ToPrimitive(arg0);
  }
  return tmp3;
};