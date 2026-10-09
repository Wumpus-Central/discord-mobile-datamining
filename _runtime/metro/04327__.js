// === Module 4327: ? ===

// Module 4327
import module_4162_mod from "module_4162" /* 4162 */;
import module_4307_mod from "module_4307" /* 4307 */;
import requiredArgs_mod from "requiredArgs" /* 4159 */;

let module_4162 = module_4162_mod;
if (!module_4162) {
  const obj = { default: module_4162 };
  let tmp3 = obj;
} else {
  tmp3 = module_4162;
}
module_4162 = tmp3;
let module_4307 = module_4307_mod;
if (!module_4307) {
  const obj2 = { default: module_4307 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4307;
}
module_4307 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function addYears(interval, arg1) {
  requiredArgs.default(2, arguments);
  return module_4307.default(interval, 12 * module_4162.default(arg1));
};
export default exports.default;