// === Module 4112: ? ===

// Module 4112
import module_3968_mod from "module_3968" /* 3968 */;
import _typeof_mod from "module_3964" /* 3964 */;
import requiredArgs_mod from "requiredArgs" /* 3965 */;

let module_3968 = module_3968_mod;
if (!module_3968) {
  const obj = { default: module_3968 };
  let tmp3 = obj;
} else {
  tmp3 = module_3968;
}
module_3968 = tmp3;
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

export default function addDays(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const defaultResult2 = module_3968.default(arg1);
  if (isNaN(defaultResult2)) {
    const _Date = Date;
    const date = new Date(NaN);
    return date;
  } else if (defaultResult2) {
    defaultResult1.setDate(defaultResult1.getDate() + defaultResult2);
    return defaultResult1;
  } else {
    return defaultResult1;
  }
};
export default exports.default;