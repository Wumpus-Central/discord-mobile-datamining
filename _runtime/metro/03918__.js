// _runtime/metro/03918__.js
import _typeof from "03650__.js";
import requiredArgs from "../03651_requiredArgs.js";

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

export default function getDecade(arg0) {
  requiredArgs.default(1, arguments);
  return 10 * Math.floor(_typeof.default(arg0).getFullYear() / 10);
};
export default exports.default;