// _runtime/metro/04017__.js
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

export default function isTuesday(arg0) {
  requiredArgs.default(1, arguments);
  return 2 === _typeof.default(arg0).getDay();
};
export default exports.default;