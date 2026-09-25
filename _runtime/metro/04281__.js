// === Module 4281: ? ===

// Module 4281
import module_4063_mod from "module_4063" /* 4063 */;
import module_4096_mod from "module_4096" /* 4096 */;
import requiredArgs_mod from "requiredArgs" /* 3916 */;

let module_4063 = module_4063_mod;
if (!module_4063) {
  const obj = { default: module_4063 };
  let tmp3 = obj;
} else {
  tmp3 = module_4063;
}
module_4063 = tmp3;
let module_4096 = module_4096_mod;
if (!module_4096) {
  const obj2 = { default: module_4096 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4096;
}
module_4096 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function isTomorrow(arg0) {
  requiredArgs.default(1, arguments);
  return module_4096.default(arg0, module_4063.default(Date.now(), 1));
};
export default exports.default;