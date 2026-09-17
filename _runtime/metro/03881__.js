// _runtime/metro/03881__.js
import _typeof_mod from "03728__.js";
import requiredArgs_mod from "../03729_requiredArgs.js";

let _typeof = _typeof_mod;
if (!_typeof) {
  const obj = { default: _typeof };
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isSaturday(arg0) {
  requiredArgs.default(1, arguments);
  return 6 === _typeof.default(arg0).getDay();
};
export default exports.default;