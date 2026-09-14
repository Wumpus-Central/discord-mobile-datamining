// _runtime/03912_differenceInCalendarQuarters.js
import module_3913_mod from "metro/03913__.js";
import _typeof_mod from "metro/03725__.js";
import requiredArgs_mod from "03726_requiredArgs.js";

let module_3913 = module_3913_mod;
if (!module_3913) {
  const obj = { default: module_3913 };
  let tmp3 = obj;
} else {
  tmp3 = module_3913;
}
module_3913 = tmp3;
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

export default function differenceInCalendarQuarters(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const defaultResult2 = _typeof.default(arg1);
  const fullYear = defaultResult1.getFullYear();
  const diff = fullYear - defaultResult2.getFullYear();
  return 4 * diff + (module_3913.default(defaultResult1) - module_3913.default(defaultResult2));
};
export default exports.default;