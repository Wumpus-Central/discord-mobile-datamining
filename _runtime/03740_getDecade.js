// _runtime/03740_getDecade.js
import _typeof from "metro/03472__typeof.js";
import requiredArgs from "03473_requiredArgs.js";

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

export default function getDecade(arg0) {
  requiredArgs.default(1, arguments);
  return 10 * Math.floor(_typeof.default(arg0).getFullYear() / 10);
};
export default exports.default;