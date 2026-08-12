// _runtime/03591_isWeekend.js
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

export default function isWeekend(arg0) {
  tmp5.default(1, arguments);
  const day = tmp3.default(arg0).getDay();
  tmp3 = 0 === day;
  if (!tmp3) {
    tmp3 = 6 === day;
  }
  return tmp3;
};
export default exports.default;