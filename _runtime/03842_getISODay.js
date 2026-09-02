// _runtime/03842_getISODay.js
import _typeof from "metro/03571__typeof.js";
import requiredArgs from "03572_requiredArgs.js";

if (!_typeof) {
  let obj = { default: null };
  obj[0] = _typeof;
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function getISODay(arg0) {
  requiredArgs.default(1, arguments);
  let num = _typeof.default(arg0).getDay();
  if (0 === num) {
    num = 7;
  }
  return num;
};
export default exports.default;