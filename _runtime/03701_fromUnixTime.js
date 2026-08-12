// _runtime/03701_fromUnixTime.js
import _typeof from "_typeof";
import toInteger from "toInteger";
import requiredArgs from "requiredArgs";

if (!_typeof) {
  let obj = { default: null };
  obj[0] = _typeof;
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
let c0 = tmp3;
if (!toInteger) {
  obj = { default: null };
  obj[0] = toInteger;
  let tmp5 = obj;
} else {
  tmp5 = toInteger;
}
let closure_1 = tmp5;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}

export default function fromUnixTime(arg0) {
  tmp7.default(1, arguments);
  return tmp3.default(1000 * tmp5.default(arg0));
};
export default exports.default;