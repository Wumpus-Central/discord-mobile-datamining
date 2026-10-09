// === Module 4585: ? ===

// Module 4585
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

export default function setYear(date, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(date);
  if (isNaN(defaultResult1.getTime())) {
    const _Date = Date;
    date = new Date(NaN);
    return date;
  } else {
    defaultResult1.setFullYear(defaultResult2);
    return defaultResult1;
  }
  defaultResult2 = module_4162.default(arg1);
};
export default exports.default;