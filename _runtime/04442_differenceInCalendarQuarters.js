// === Module 4442: differenceInCalendarQuarters ===

// Module 4442 (differenceInCalendarQuarters)
import module_4443_mod from "module_4443" /* 4443 */;
import _typeof_mod from "module_4255" /* 4255 */;
import requiredArgs_mod from "requiredArgs" /* 4256 */;

let module_4443 = module_4443_mod;
if (!module_4443) {
  const obj = { default: module_4443 };
  let tmp3 = obj;
} else {
  tmp3 = module_4443;
}
module_4443 = tmp3;
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
  return 4 * diff + (module_4443.default(defaultResult1) - module_4443.default(defaultResult2));
};
export default exports.default;