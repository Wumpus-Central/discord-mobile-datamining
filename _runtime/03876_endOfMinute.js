// _runtime/03876_endOfMinute.js
import _typeof from "metro/03650__.js";
import requiredArgs from "03651_requiredArgs.js";

if (!_typeof) {
  let obj = { default: _typeof };
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function endOfMinute(arg0) {
  requiredArgs.default(1, arguments);
  const defaultResult1 = _typeof.default(arg0);
  defaultResult1.setSeconds(59, 999);
  return defaultResult1;
};
export default exports.default;