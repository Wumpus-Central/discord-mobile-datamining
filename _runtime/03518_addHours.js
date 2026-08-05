// _runtime/03518_addHours.js
import toInteger from "toInteger";
import addMilliseconds from "addMilliseconds";
import requiredArgs from "requiredArgs";

if (!toInteger) {
  let obj = { default: null };
  obj[0] = toInteger;
  let tmp3 = obj;
} else {
  tmp3 = toInteger;
}
let c0 = tmp3;
if (!addMilliseconds) {
  obj = { default: null };
  obj[0] = addMilliseconds;
  let tmp5 = obj;
} else {
  tmp5 = addMilliseconds;
}
let closure_1 = tmp5;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
let c3 = 3600000;

export default function addHours(interval, arg1, byhour) {
  tmp7.default(2, arguments);
  return tmp5.default(interval, tmp3.default(arg1) * c3);
};
export default exports.default;