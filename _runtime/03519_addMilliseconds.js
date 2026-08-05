// _runtime/03519_addMilliseconds.js
import toInteger from "toInteger";
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";

if (!toInteger) {
  let obj = { default: null };
  obj[0] = toInteger;
  let tmp3 = obj;
} else {
  tmp3 = toInteger;
}
let c0 = tmp3;
if (!_typeof) {
  obj = { default: null };
  obj[0] = _typeof;
  let tmp5 = obj;
} else {
  tmp5 = _typeof;
}
let closure_1 = tmp5;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}

export default function addMilliseconds(arg0, arg1) {
  tmp7.default(2, arguments);
  const time = tmp5.default(arg0).getTime();
  const defaultResult1 = tmp5.default(arg0);
  return new Date(time + tmp3.default(arg1));
};
export default exports.default;