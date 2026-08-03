// === Module 3772: subSeconds ===

// Module 3772 (subSeconds)
import toInteger from "toInteger";
import addSeconds from "addSeconds";
import requiredArgs from "requiredArgs";

if (!toInteger) {
  let obj = { default: null };
  obj[0] = toInteger;
  let tmp3 = obj;
} else {
  tmp3 = toInteger;
}
let c0 = tmp3;
if (!addSeconds) {
  obj = { default: null };
  obj[0] = addSeconds;
  let tmp5 = obj;
} else {
  tmp5 = addSeconds;
}
let closure_1 = tmp5;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}

export default function subSeconds(arg0, arg1) {
  tmp7.default(2, arguments);
  return tmp5.default(arg0, -tmp3.default(arg1));
};
export default exports.default;