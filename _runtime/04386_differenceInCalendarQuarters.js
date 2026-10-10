// === Module 4386: differenceInCalendarQuarters ===

// Module 4386 (differenceInCalendarQuarters)
import module_4387_mod from "module_4387" /* 4387 */;
import _typeof_mod from "module_4199" /* 4199 */;
import requiredArgs_mod from "requiredArgs" /* 4200 */;

let module_4387 = module_4387_mod;
if (!module_4387) {
  const obj = { default: module_4387 };
  let tmp3 = obj;
} else {
  tmp3 = module_4387;
}
module_4387 = tmp3;
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
  return 4 * diff + (module_4387.default(defaultResult1) - module_4387.default(defaultResult2));
};
export default exports.default;