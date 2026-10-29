// _runtime/metro/04608__.js
import module_4292_mod from "04292__.js";
import _typeof_mod from "04288__.js";
import module_4524_mod from "04524__.js";
import requiredArgs_mod from "../04289_requiredArgs.js";

let module_4292 = module_4292_mod;
if (!module_4292) {
  const obj = { default: module_4292 };
  let tmp3 = obj;
} else {
  tmp3 = module_4292;
}
module_4292 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_4524 = module_4524_mod;
if (!module_4524) {
  const obj3 = { default: module_4524 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4524;
}
module_4524 = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj4 = { default: requiredArgs };
  let tmp9 = obj4;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function setUTCISOWeek(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const diff = module_4524.default(defaultResult1) - module_4292.default(arg1);
  defaultResult1.setUTCDate(defaultResult1.getUTCDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;