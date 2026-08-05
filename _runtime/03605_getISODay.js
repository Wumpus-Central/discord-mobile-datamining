// _runtime/03605_getISODay.js
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";

if (!_typeof) {
  let obj = { default: null };
  obj[0] = _typeof;
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
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

export default function getISODay(arg0) {
  tmp5.default(1, arguments);
  let num = tmp3.default(arg0).getDay();
  if (0 === num) {
    num = 7;
  }
  return num;
};
export default exports.default;