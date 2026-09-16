// _runtime/metro/04145__.js
import module_3730_mod from "03730__.js";
import _typeof_mod from "03726__.js";
import module_3874_mod from "03874__.js";
import module_3997_mod from "03997__.js";
import requiredArgs_mod from "../03727_requiredArgs.js";

let module_3730 = module_3730_mod;
if (!module_3730) {
  const obj = { default: module_3730 };
  let tmp3 = obj;
} else {
  tmp3 = module_3730;
}
module_3730 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_3874 = module_3874_mod;
if (!module_3874) {
  const obj3 = { default: module_3874 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3874;
}
module_3874 = tmp7;
let module_3997 = module_3997_mod;
if (!module_3997) {
  const obj4 = { default: module_3997 };
  let tmp9 = obj4;
} else {
  tmp9 = module_3997;
}
module_3997 = tmp9;
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
  return module_3874.default(defaultResult1, module_3730.default(arg1) - module_3997.default(defaultResult1));
};
export default exports.default;