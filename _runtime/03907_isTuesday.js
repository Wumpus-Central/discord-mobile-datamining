// _runtime/03907_isTuesday.js
import _typeof from "metro/03540__typeof.js";
import requiredArgs from "03541_requiredArgs.js";

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

export default function isTuesday(arg0) {
  requiredArgs.default(1, arguments);
  return 2 === _typeof.default(arg0).getDay();
};
export default exports.default;