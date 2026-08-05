// _runtime/03533_addYears.js
import toInteger from "toInteger";
import addMonths from "addMonths";
import requiredArgs from "requiredArgs";

if (!toInteger) {
  let obj = { default: null };
  obj[0] = toInteger;
  let tmp3 = obj;
} else {
  tmp3 = toInteger;
}
let c0 = tmp3;
if (!addMonths) {
  obj = { default: null };
  obj[0] = addMonths;
  let tmp5 = obj;
} else {
  tmp5 = addMonths;
}
let closure_1 = tmp5;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}

export default function addYears(interval) {
  tmp7.default(2, arguments);
  return tmp5.default(interval, 12 * tmp3.default(arg1));
};
export default exports.default;