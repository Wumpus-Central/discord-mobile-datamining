// _runtime/metro/04037__.js
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

export default function isPast(date) {
  requiredArgs.default(1, arguments);
  const time = _typeof.default(date).getTime();
  return time < Date.now();
};
export default exports.default;