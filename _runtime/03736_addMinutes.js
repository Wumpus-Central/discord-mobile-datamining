// _runtime/03736_addMinutes.js
import toInteger from "03575_toInteger.js";
import addMilliseconds from "03726_addMilliseconds.js";
import requiredArgs from "03572_requiredArgs.js";

if (!toInteger) {
  let obj = { default: null };
  obj[0] = toInteger;
  let tmp3 = obj;
} else {
  tmp3 = toInteger;
}
toInteger = tmp3;
if (!addMilliseconds) {
  obj = { default: null };
  obj[0] = addMilliseconds;
  let tmp5 = obj;
} else {
  tmp5 = addMilliseconds;
}
addMilliseconds = tmp5;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;
let c3 = 60000;

export default function addMinutes(interval, arg1, byhour, byminute) {
  requiredArgs.default(2, arguments);
  return addMilliseconds.default(interval, toInteger.default(arg1) * c3);
};
export default exports.default;