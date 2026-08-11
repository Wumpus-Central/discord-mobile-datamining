// _runtime/03626_endOfQuarter.js
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

export default function endOfQuarter(arg0) {
  tmp5.default(1, arguments);
  const defaultResult1 = tmp3.default(arg0);
  const month = defaultResult1.getMonth();
  defaultResult1.setMonth(month - month % 3 + 3, 0);
  defaultResult1.setHours(23, 59, 59, 999);
  return defaultResult1;
};
export default exports.default;