// === Module 4022: compareDesc ===

// Module 4022 (compareDesc)
import _typeof_mod from "module_3845" /* 3845 */;
import requiredArgs_mod from "requiredArgs" /* 3846 */;

let _typeof = _typeof_mod;
if (!_typeof) {
  const obj = { default: _typeof };
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function compareDesc(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const time = defaultResult1.getTime();
  const diff = time - _typeof.default(arg1).getTime();
  let num = -1;
  if (diff <= 0) {
    let num2 = 1;
    if (diff >= 0) {
      num2 = diff;
    }
    num = num2;
  }
  return num;
};
export default exports.default;