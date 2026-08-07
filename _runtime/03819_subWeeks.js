// _runtime/03819_subWeeks.js
import toInteger from "toInteger";
import addWeeks from "addWeeks";
import requiredArgs from "requiredArgs";

if (!toInteger) {
  let obj = { default: null };
  obj[0] = toInteger;
  let tmp3 = obj;
} else {
  tmp3 = toInteger;
}
let c0 = tmp3;
if (!addWeeks) {
  obj = { default: null };
  obj[0] = addWeeks;
  let tmp5 = obj;
} else {
  tmp5 = addWeeks;
}
let closure_1 = tmp5;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}

export default function subWeeks(arg0, arg1) {
  tmp7.default(2, arguments);
  return tmp5.default(arg0, -tmp3.default(arg1));
};
export default exports.default;