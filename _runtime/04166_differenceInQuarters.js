// _runtime/04166_differenceInQuarters.js
import _mod4158 from "metro/04158__.js";
import differenceInMonths_mod from "04162_differenceInMonths.js";
import requiredArgs_mod from "03965_requiredArgs.js";

let tmp3;
let tmp5;
let differenceInMonths = differenceInMonths_mod;
if (!differenceInMonths) {
  tmp3 = { default: differenceInMonths };
  const obj = { default: differenceInMonths };
} else {
  tmp3 = differenceInMonths;
}
differenceInMonths = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp5 = { default: requiredArgs };
  const obj2 = { default: requiredArgs };
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function differenceInQuarters(arg0, arg1, roundingMethod) {
  requiredArgs.default(2, arguments);
  const result = differenceInMonths.default(arg0, arg1) / 3;
  roundingMethod = undefined;
  const getRoundingMethod = _mod4158.getRoundingMethod;
  if (null != roundingMethod) {
    roundingMethod = roundingMethod.roundingMethod;
  }
  return getRoundingMethod(roundingMethod)(result);
}
