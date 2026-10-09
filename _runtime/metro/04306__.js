// === Module 4306: ? ===

// Module 4306
import module_4162_mod from "module_4162" /* 4162 */;
import _typeof_mod from "module_4158" /* 4158 */;
import requiredArgs_mod from "requiredArgs" /* 4159 */;

let module_4162 = module_4162_mod;
if (!module_4162) {
  const obj = { default: module_4162 };
  let tmp3 = obj;
} else {
  tmp3 = module_4162;
}
module_4162 = tmp3;
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
  const defaultResult2 = module_4162.default(arg1);
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