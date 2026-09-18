// _runtime/metro/04234__.js
import module_3815_mod from "03815__.js";
import _typeof_mod from "03811__.js";
import module_4224_mod from "04224__.js";
import requiredArgs_mod from "../03812_requiredArgs.js";

let module_3815 = module_3815_mod;
if (!module_3815) {
  const obj = { default: module_3815 };
  let tmp3 = obj;
} else {
  tmp3 = module_3815;
}
module_3815 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_4224 = module_4224_mod;
if (!module_4224) {
  const obj3 = { default: module_4224 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4224;
}
module_4224 = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj4 = { default: requiredArgs };
  let tmp9 = obj4;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function setQuarter(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const diff = module_3815.default(arg1) - (Math.floor(defaultResult1.getMonth() / 3) + 1);
  return module_4224.default(defaultResult1, defaultResult1.getMonth() + 3 * diff);
};
export default exports.default;