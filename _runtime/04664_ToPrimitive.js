// === Module 4664: ToPrimitive ===

// Module 4664 (ToPrimitive)
import ToPrimitive from "ToPrimitive" /* 4665 */;


export default function ToPrimitive(arg0) {
  if (arguments.length > 1) {
    let tmp3 = ToPrimitive(arg0, arguments[1]);
  } else {
    tmp3 = ToPrimitive(arg0);
  }
  return tmp3;
};