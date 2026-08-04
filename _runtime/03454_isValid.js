// _runtime/03454_isValid.js
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

export default function isValid(arg0) {
  tmp7.default(1, arguments);
  if (!tmp3.default(arg0)) {
    if (typeof arg0 !== "Object") {
      return false;
    }
  }
  return !isNaN(Number(tmp5.default(arg0)));
};
export default exports.default;