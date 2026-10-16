// _runtime/metro/04671__.js
import module_4262_mod from "04262__.js";
import _typeof_mod from "04258__.js";
import module_4523_mod from "04523__.js";
import requiredArgs_mod from "../04259_requiredArgs.js";

let module_4262 = module_4262_mod;
if (!module_4262) {
  const obj = { default: module_4262 };
  let tmp3 = obj;
} else {
  tmp3 = module_4262;
}
module_4262 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_4523 = module_4523_mod;
if (!module_4523) {
  const obj3 = { default: module_4523 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4523;
}
module_4523 = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj4 = { default: requiredArgs };
  let tmp9 = obj4;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function setMonth(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const defaultResult2 = module_4262.default(arg1);
  const fullYear = defaultResult1.getFullYear();
  const date1 = new Date(0);
  date1.setFullYear(fullYear, defaultResult2, 15);
  date1.setHours(0, 0, 0, 0);
  defaultResult1.setMonth(defaultResult2, Math.min(defaultResult1.getDate(), module_4523.default(date1)));
  return defaultResult1;
};
export default exports.default;