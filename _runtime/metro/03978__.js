// === Module 3978: ? ===

// Module 3978
import module_3815_mod from "module_3815" /* 3815 */;
import module_3966_mod from "module_3966" /* 3966 */;
import requiredArgs_mod from "requiredArgs" /* 3812 */;

let module_3815 = module_3815_mod;
if (!module_3815) {
  const obj = { default: module_3815 };
  let tmp3 = obj;
} else {
  tmp3 = module_3815;
}
module_3815 = tmp3;
let module_3966 = module_3966_mod;
if (!module_3966) {
  const obj2 = { default: module_3966 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3966;
}
module_3966 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function addSeconds(interval, arg1) {
  requiredArgs.default(2, arguments);
  return module_3966.default(interval, 1000 * module_3815.default(arg1));
};
export default exports.default;