// _runtime/03833_isThisSecond.js
import isSameSecond from "isSameSecond";
import requiredArgs from "requiredArgs";

if (!isSameSecond) {
  let obj = { default: null };
  obj[0] = isSameSecond;
  let tmp3 = obj;
} else {
  tmp3 = isSameSecond;
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

export default function isThisSecond(arg0) {
  tmp5.default(1, arguments);
  return tmp3.default(Date.now(), arg0);
};
export default exports.default;