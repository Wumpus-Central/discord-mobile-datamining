// === Module 3991: ? ===

// Module 3991
import _typeof_mod from "module_3725" /* 3725 */;
import module_3992_mod from "module_3992" /* 3992 */;
import requiredArgs_mod from "requiredArgs" /* 3726 */;

let _typeof = _typeof_mod;
if (!_typeof) {
  const obj = { default: _typeof };
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
let module_3992 = module_3992_mod;
if (!module_3992) {
  const obj2 = { default: module_3992 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3992;
}
module_3992 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function getDaysInYear(arg0) {
  requiredArgs.default(1, arguments);
  const defaultResult1 = _typeof.default(arg0);
  if ("Invalid Date" === String(date)) {
    return NaN;
  } else {
    let num = 365;
    if (module_3992.default(defaultResult1)) {
      num = 366;
    }
    return num;
  }
  date = new Date(defaultResult1);
};
export default exports.default;