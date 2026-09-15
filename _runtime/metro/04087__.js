// === Module 4087: ? ===

// Module 4087
import module_4079_mod from "module_4079" /* 4079 */;
import requiredArgs_mod from "requiredArgs" /* 3729 */;

let module_4079 = module_4079_mod;
if (!module_4079) {
  const obj = { default: module_4079 };
  let tmp3 = obj;
} else {
  tmp3 = module_4079;
}
module_4079 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisMonth(arg0) {
  requiredArgs.default(1, arguments);
  return module_4079.default(Date.now(), arg0);
};
export default exports.default;