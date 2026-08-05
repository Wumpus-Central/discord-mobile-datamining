import { ToPrimitive } from "04544_ToPrimitive.js";
// _runtime/04543_ToPrimitive.js

export default function ToPrimitive(arg0) {
  if (arguments.length > 1) {
    let tmp3 = ToPrimitive /* ToPrimitive */(arg0, arguments[1]);
  } else {
    tmp3 = ToPrimitive /* ToPrimitive */(arg0);
  }
  return tmp3;
};