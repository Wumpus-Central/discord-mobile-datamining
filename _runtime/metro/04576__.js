// _runtime/metro/04576__.js
import module_4160_mod from "04160__.js";
import _typeof_mod from "04156__.js";
import module_4428_mod from "04428__.js";
import requiredArgs_mod from "../04157_requiredArgs.js";

let module_4160 = module_4160_mod;
if (!module_4160) {
  const obj = { default: module_4160 };
  let tmp3 = obj;
} else {
  tmp3 = module_4160;
}
module_4160 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_4428 = module_4428_mod;
if (!module_4428) {
  const obj3 = { default: module_4428 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4428;
}
module_4428 = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj4 = { default: requiredArgs };
  let tmp9 = obj4;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function setISOWeek(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const diff = module_4428.default(defaultResult1) - module_4160.default(arg1);
  defaultResult1.setDate(defaultResult1.getDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;