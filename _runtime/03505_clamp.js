// _runtime/03505_clamp.js
import _typeof from "_typeof";
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

export default function clamp(arg0, arg1) {
  let end;
  let start;
  ({ start, end } = arg1);
  tmp7.default(2, arguments);
  const items = [arg0, start];
  const items1 = [tmp3.default(items), end];
  return tmp5.default(items1);
};
export default exports.default;