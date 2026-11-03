// _runtime/metro/04844__.js
import module_4425_mod from "04425__.js";
import _typeof_mod from "04421__.js";
import module_4834_mod from "04834__.js";
import requiredArgs_mod from "../04422_requiredArgs.js";

let module_4425 = module_4425_mod;
if (!module_4425) {
  const obj = { default: module_4425 };
  let tmp3 = obj;
} else {
  tmp3 = module_4425;
}
module_4425 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_4834 = module_4834_mod;
if (!module_4834) {
  const obj3 = { default: module_4834 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4834;
}
module_4834 = tmp7;
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
  const diff = module_4425.default(arg1) - (Math.floor(defaultResult1.getMonth() / 3) + 1);
  return module_4834.default(defaultResult1, defaultResult1.getMonth() + 3 * diff);
};
export default exports.default;