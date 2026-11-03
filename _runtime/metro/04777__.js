// === Module 4777: ? ===

// Module 4777
import module_4766_mod from "module_4766" /* 4766 */;
import requiredArgs_mod from "requiredArgs" /* 4422 */;

let module_4766 = module_4766_mod;
if (!module_4766) {
  const obj = { default: module_4766 };
  let tmp3 = obj;
} else {
  tmp3 = module_4766;
}
module_4766 = tmp3;
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
  return module_4766.default(Date.now(), arg0);
};
export default exports.default;