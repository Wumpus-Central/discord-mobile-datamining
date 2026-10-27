// === Module 4424: ? ===

// Module 4424
import module_4259_mod from "module_4259" /* 4259 */;
import module_4404_mod from "module_4404" /* 4404 */;
import requiredArgs_mod from "requiredArgs" /* 4256 */;

let module_4259 = module_4259_mod;
if (!module_4259) {
  const obj = { default: module_4259 };
  let tmp3 = obj;
} else {
  tmp3 = module_4259;
}
module_4259 = tmp3;
let module_4404 = module_4404_mod;
if (!module_4404) {
  const obj2 = { default: module_4404 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4404;
}
module_4404 = tmp5;
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
  return module_4404.default(interval, 12 * module_4259.default(arg1));
};
export default exports.default;