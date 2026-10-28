// === Module 4643: ? ===

// Module 4643
import module_4632_mod from "module_4632" /* 4632 */;
import requiredArgs_mod from "requiredArgs" /* 4288 */;

let module_4632 = module_4632_mod;
if (!module_4632) {
  const obj = { default: module_4632 };
  let tmp3 = obj;
} else {
  tmp3 = module_4632;
}
module_4632 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisHour(arg0) {
  requiredArgs.default(1, arguments);
  return module_4632.default(Date.now(), arg0);
};
export default exports.default;