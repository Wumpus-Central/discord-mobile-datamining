// _runtime/05350_ToPrimitive.js
import ToPrimitive2 from "05351_ToPrimitive.js";

export default function ToPrimitive(arg0) {
  let tmp3;
  if (arguments.length > 1) {
    tmp3 = ToPrimitive2(arg0, arguments[1]);
  } else {
    tmp3 = ToPrimitive2(arg0);
  }
  return tmp3;
}
