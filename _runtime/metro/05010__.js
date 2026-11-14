// === Module 5010: ? ===

// Module 5010
import module_4866_mod from "module_4866" /* 4866 */;
import _typeof_mod from "module_4585" /* 4585 */;
import requiredArgs_mod from "requiredArgs" /* 4586 */;
import module_4589_mod from "module_4589" /* 4589 */;

let module_4866 = module_4866_mod;
if (!module_4866) {
  const obj = { default: module_4866 };
  let tmp3 = obj;
} else {
  tmp3 = module_4866;
}
module_4866 = tmp3;
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
let module_4589 = module_4589_mod;
if (!module_4589) {
  const obj4 = { default: module_4589 };
  let tmp9 = obj4;
} else {
  tmp9 = module_4589;
}
module_4589 = tmp9;

export default function setWeek(arg0, arg1, arg2) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const diff = module_4866.default(defaultResult1, arg2) - module_4589.default(arg1);
  defaultResult1.setDate(defaultResult1.getDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;