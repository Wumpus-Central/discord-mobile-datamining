// === Module 4709: differenceInCalendarQuarters ===

// Module 4709 (differenceInCalendarQuarters)
import module_4710_mod from "module_4710" /* 4710 */;
import _typeof_mod from "module_4522" /* 4522 */;
import requiredArgs_mod from "requiredArgs" /* 4523 */;

let module_4710 = module_4710_mod;
if (!module_4710) {
  const obj = { default: module_4710 };
  let tmp3 = obj;
} else {
  tmp3 = module_4710;
}
module_4710 = tmp3;
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
  return 4 * diff + (module_4710.default(defaultResult1) - module_4710.default(defaultResult2));
};
export default exports.default;