// _runtime/metro/04622__.js
import module_4205_mod from "04205__.js";
import _typeof_mod from "04201__.js";
import requiredArgs_mod from "../04202_requiredArgs.js";

let module_4205 = module_4205_mod;
if (!module_4205) {
  const obj = { default: module_4205 };
  let tmp3 = obj;
} else {
  tmp3 = module_4205;
}
module_4205 = tmp3;
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

export default function setMilliseconds(module_4205, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(module_4205);
  defaultResult1.setMilliseconds(module_4205.default(arg1));
  return defaultResult1;
};
export default exports.default;