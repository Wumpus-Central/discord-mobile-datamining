// _runtime/metro/03913__.js
import _typeof from "03725__.js";
import requiredArgs from "../03726_requiredArgs.js";

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

export default function getQuarter(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(_typeof.default(arg0).getMonth() / 3) + 1;
};
export default exports.default;