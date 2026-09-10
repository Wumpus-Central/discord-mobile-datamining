// _runtime/metro/03991__.js
import _typeof from "03693__.js";
import requiredArgs from "../03694_requiredArgs.js";

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

export default function isFirstDayOfMonth(arg0) {
  requiredArgs.default(1, arguments);
  return 1 === _typeof.default(arg0).getDate();
};
export default exports.default;