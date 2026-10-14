// === Module 4639: subSeconds ===

// Module 4639 (subSeconds)
import module_4205_mod from "module_4205" /* 4205 */;
import module_4368_mod from "module_4368" /* 4368 */;
import requiredArgs_mod from "requiredArgs" /* 4202 */;

let module_4205 = module_4205_mod;
if (!module_4205) {
  const obj = { default: module_4205 };
  let tmp3 = obj;
} else {
  tmp3 = module_4205;
}
module_4205 = tmp3;
let module_4368 = module_4368_mod;
if (!module_4368) {
  const obj2 = { default: module_4368 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4368;
}
module_4368 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function subSeconds(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4368.default(arg0, -module_4205.default(arg1));
};
export default exports.default;