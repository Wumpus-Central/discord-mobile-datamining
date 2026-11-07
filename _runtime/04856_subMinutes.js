// === Module 4856: subMinutes ===

// Module 4856 (subMinutes)
import module_4585_mod from "module_4585" /* 4585 */;
import requiredArgs_mod from "requiredArgs" /* 4421 */;
import module_4424_mod from "module_4424" /* 4424 */;

let module_4585 = module_4585_mod;
if (!module_4585) {
  const obj = { default: module_4585 };
  let tmp3 = obj;
} else {
  tmp3 = module_4585;
}
module_4585 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_4424 = module_4424_mod;
if (!module_4424) {
  const obj3 = { default: module_4424 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4424;
}
module_4424 = tmp7;

export default function subMinutes(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4585.default(arg0, -module_4424.default(arg1));
};
export default exports.default;