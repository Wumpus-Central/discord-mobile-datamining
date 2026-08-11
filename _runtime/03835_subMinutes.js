// _runtime/03835_subMinutes.js
import addMinutes from "addMinutes";
import requiredArgs from "requiredArgs";
import toInteger from "toInteger";

if (!addMinutes) {
  let obj = { default: null };
  obj[0] = addMinutes;
  let tmp3 = obj;
} else {
  tmp3 = addMinutes;
}
let c0 = tmp3;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
let closure_1 = tmp5;
if (!toInteger) {
  obj = { default: null };
  obj[0] = toInteger;
  let tmp7 = obj;
} else {
  tmp7 = toInteger;
}

export default function subMinutes(arg0, arg1) {
  tmp5.default(2, arguments);
  return tmp3.default(arg0, -tmp7.default(arg1));
};
export default exports.default;