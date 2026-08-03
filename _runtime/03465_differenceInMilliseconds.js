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

export default function differenceInMilliseconds(arg0, arg1) {
  tmp5.default(2, arguments);
  const time = tmp3.default(arg0).getTime();
  const defaultResult1 = tmp3.default(arg0);
  return time - tmp3.default(arg1).getTime();
};
export default exports.default;