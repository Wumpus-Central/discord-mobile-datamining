// _runtime/metro/04072__.js
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

export default function isPast(date) {
  requiredArgs.default(1, arguments);
  const time = _typeof.default(date).getTime();
  return time < Date.now();
};
export default exports.default;