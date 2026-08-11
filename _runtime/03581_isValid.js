// _runtime/03581_isValid.js
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

export default function isValid(num) {
  tmp7.default(1, arguments);
  if (!tmp3.default(num)) {
    if (typeof num !== "number") {
      return false;
    }
  }
  return !isNaN(Number(tmp5.default(num)));
};
export default exports.default;