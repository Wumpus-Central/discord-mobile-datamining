// _runtime/metro/04614__.js
import module_4298_mod from "04298__.js";
import _typeof_mod from "04294__.js";
import module_4530_mod from "04530__.js";
import requiredArgs_mod from "../04295_requiredArgs.js";

let module_4298 = module_4298_mod;
if (!module_4298) {
  const obj = { default: module_4298 };
  let tmp3 = obj;
} else {
  tmp3 = module_4298;
}
module_4298 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_4530 = module_4530_mod;
if (!module_4530) {
  const obj3 = { default: module_4530 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4530;
}
module_4530 = tmp7;
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
  const diff = module_4530.default(defaultResult1) - module_4298.default(arg1);
  defaultResult1.setUTCDate(defaultResult1.getUTCDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;