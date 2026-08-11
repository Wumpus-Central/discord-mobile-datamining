// _runtime/03757_isThisMinute.js
import isSameMinute from "isSameMinute";
import requiredArgs from "requiredArgs";

if (!isSameMinute) {
  let obj = { default: null };
  obj[0] = isSameMinute;
  let tmp3 = obj;
} else {
  tmp3 = isSameMinute;
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

export default function isThisMinute(arg0) {
  tmp5.default(1, arguments);
  return tmp3.default(Date.now(), arg0);
};
export default exports.default;