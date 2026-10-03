// _runtime/metro/04276__.js
import module_3962_mod from "03962__.js";
import _typeof_mod from "03958__.js";
import module_4198_mod from "04198__.js";
import requiredArgs_mod from "../03959_requiredArgs.js";

let module_3962 = module_3962_mod;
if (!module_3962) {
  const obj = { default: module_3962 };
  let tmp3 = obj;
} else {
  tmp3 = module_3962;
}
module_3962 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_4198 = module_4198_mod;
if (!module_4198) {
  const obj3 = { default: module_4198 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4198;
}
module_4198 = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj4 = { default: requiredArgs };
  let tmp9 = obj4;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function setUTCWeek(arg0, arg1, arg2) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const diff = module_4198.default(defaultResult1, arg2) - module_3962.default(arg1);
  defaultResult1.setUTCDate(defaultResult1.getUTCDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;