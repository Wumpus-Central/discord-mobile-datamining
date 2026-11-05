// === Module 4588: ? ===

// Module 4588
import module_4427_mod from "module_4427" /* 4427 */;
import module_4578_mod from "module_4578" /* 4578 */;
import requiredArgs_mod from "requiredArgs" /* 4424 */;

let module_4427 = module_4427_mod;
if (!module_4427) {
  const obj = { default: module_4427 };
  let tmp3 = obj;
} else {
  tmp3 = module_4427;
}
module_4427 = tmp3;
let module_4578 = module_4578_mod;
if (!module_4578) {
  const obj2 = { default: module_4578 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4578;
}
module_4578 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;
let c3 = 60000;

export default function addMinutes(interval, arg1) {
  requiredArgs.default(2, arguments);
  return module_4578.default(interval, module_4427.default(arg1) * c3);
};
export default exports.default;