// === Module 4330: ? ===

// Module 4330
import module_4112_mod from "module_4112" /* 4112 */;
import module_4145_mod from "module_4145" /* 4145 */;
import requiredArgs_mod from "requiredArgs" /* 3965 */;

let module_4112 = module_4112_mod;
if (!module_4112) {
  const obj = { default: module_4112 };
  let tmp3 = obj;
} else {
  tmp3 = module_4112;
}
module_4112 = tmp3;
let module_4145 = module_4145_mod;
if (!module_4145) {
  const obj2 = { default: module_4145 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4145;
}
module_4145 = tmp5;
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
  return module_4145.default(arg0, module_4112.default(Date.now(), 1));
};
export default exports.default;