// _runtime/metro/04072__.js
import _typeof_mod from "03811__.js";
import module_3815_mod from "03815__.js";
import requiredArgs_mod from "../03812_requiredArgs.js";

let _typeof = _typeof_mod;
if (!_typeof) {
  const obj = { default: _typeof };
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
let module_3815 = module_3815_mod;
if (!module_3815) {
  const obj2 = { default: module_3815 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3815;
}
module_3815 = tmp5;
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
  return _typeof.default(1000 * module_3815.default(arg0));
};
export default exports.default;