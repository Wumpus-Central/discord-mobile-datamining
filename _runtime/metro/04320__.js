// === Module 4320: ? ===

// Module 4320
import module_4306_mod from "module_4306" /* 4306 */;
import requiredArgs_mod from "requiredArgs" /* 3959 */;

let module_4306 = module_4306_mod;
if (!module_4306) {
  const obj = { default: module_4306 };
  let tmp3 = obj;
} else {
  tmp3 = module_4306;
}
module_4306 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisWeek(arg0, arg1) {
  requiredArgs.default(1, arguments);
  return module_4306.default(arg0, Date.now(), arg1);
};
export default exports.default;