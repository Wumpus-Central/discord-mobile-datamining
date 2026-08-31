// _runtime/03906_isThursday.js
import _typeof from "metro/03542__typeof.js";
import requiredArgs from "03543_requiredArgs.js";

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

export default function isThursday(arg0) {
  requiredArgs.default(1, arguments);
  return 4 === _typeof.default(arg0).getDay();
};
export default exports.default;