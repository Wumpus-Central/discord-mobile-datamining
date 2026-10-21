// _runtime/metro/04671__.js
import module_4256_mod from "04256__.js";
import _typeof_mod from "04252__.js";
import module_4400_mod from "04400__.js";
import module_4523_mod from "04523__.js";
import requiredArgs_mod from "../04253_requiredArgs.js";

let module_4256 = module_4256_mod;
if (!module_4256) {
  const obj = { default: module_4256 };
  let tmp3 = obj;
} else {
  tmp3 = module_4256;
}
module_4256 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_4400 = module_4400_mod;
if (!module_4400) {
  const obj3 = { default: module_4400 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4400;
}
module_4400 = tmp7;
let module_4523 = module_4523_mod;
if (!module_4523) {
  const obj4 = { default: module_4523 };
  let tmp9 = obj4;
} else {
  tmp9 = module_4523;
}
module_4523 = tmp9;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj5 = { default: requiredArgs };
  let tmp11 = obj5;
} else {
  tmp11 = requiredArgs;
}
requiredArgs = tmp11;

export default function setISODay(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  return module_4400.default(defaultResult1, module_4256.default(arg1) - module_4523.default(defaultResult1));
};
export default exports.default;