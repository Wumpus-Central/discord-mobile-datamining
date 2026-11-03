// _runtime/metro/04846__.js
import module_4702_mod from "04702__.js";
import _typeof_mod from "04421__.js";
import requiredArgs_mod from "../04422_requiredArgs.js";
import module_4425_mod from "04425__.js";

let module_4702 = module_4702_mod;
if (!module_4702) {
  const obj = { default: module_4702 };
  let tmp3 = obj;
} else {
  tmp3 = module_4702;
}
module_4702 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;
let module_4425 = module_4425_mod;
if (!module_4425) {
  const obj4 = { default: module_4425 };
  let tmp9 = obj4;
} else {
  tmp9 = module_4425;
}
module_4425 = tmp9;

export default function setWeek(arg0, arg1, arg2) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const diff = module_4702.default(defaultResult1, arg2) - module_4425.default(arg1);
  defaultResult1.setDate(defaultResult1.getDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;