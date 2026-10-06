// _runtime/04333_isWithinInterval.js
import toDate_mod from "03964_toDate.js";
import requiredArgs_mod from "03965_requiredArgs.js";

let tmp3;
let tmp5;
let toDate = toDate_mod;
if (!toDate) {
  tmp3 = { default: toDate };
  const obj = { default: toDate };
} else {
  tmp3 = toDate;
}
toDate = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp5 = { default: requiredArgs };
  const obj2 = { default: requiredArgs };
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isWithinInterval(arg0, start) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = toDate.default(arg0);
  const time = defaultResult1.getTime();
  const defaultResult2 = toDate.default(start.start);
  const time1 = defaultResult2.getTime();
  const defaultResult3 = toDate.default(start.end);
  const time2 = defaultResult3.getTime();
  if (time1 <= time2) {
    return time >= time1 && time <= time2;
  } else {
    const _RangeError = RangeError;
    const self = this;
    const self2 = this;
    const rangeError = new RangeError("Invalid interval");
    throw rangeError;
  }
}
