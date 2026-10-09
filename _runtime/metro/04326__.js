// === Module 4326: ? ===

// Module 4326
import module_4162_mod from "module_4162" /* 4162 */;
import module_4306_mod from "module_4306" /* 4306 */;
import requiredArgs_mod from "requiredArgs" /* 4159 */;

let module_4162 = module_4162_mod;
if (!module_4162) {
  const obj = { default: module_4162 };
  let tmp3 = obj;
} else {
  tmp3 = module_4162;
}
module_4162 = tmp3;
let module_4306 = module_4306_mod;
if (!module_4306) {
  const obj2 = { default: module_4306 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4306;
}
module_4306 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function addWeeks(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4306.default(arg0, 7 * module_4162.default(arg1));
};
export default exports.default;