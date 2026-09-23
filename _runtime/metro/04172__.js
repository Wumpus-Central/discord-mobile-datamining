// _runtime/metro/04172__.js
import _typeof_mod from "03911__.js";
import module_3915_mod from "03915__.js";
import requiredArgs_mod from "../03912_requiredArgs.js";

let _typeof = _typeof_mod;
if (!_typeof) {
  const obj = { default: _typeof };
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
let module_3915 = module_3915_mod;
if (!module_3915) {
  const obj2 = { default: module_3915 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3915;
}
module_3915 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function fromUnixTime(arg0) {
  requiredArgs.default(1, arguments);
  return _typeof.default(1000 * module_3915.default(arg0));
};
export default exports.default;