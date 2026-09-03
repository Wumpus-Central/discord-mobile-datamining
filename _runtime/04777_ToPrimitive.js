// === Module 4777: ToPrimitive ===

// Module 4777 (ToPrimitive)
import ToPrimitive from "ToPrimitive" /* 4778 */;


export default function ToPrimitive(arg0) {
  if (arguments.length > 1) {
    let tmp3 = ToPrimitive(arg0, arguments[1]);
  } else {
    tmp3 = ToPrimitive(arg0);
  }
  return tmp3;
};