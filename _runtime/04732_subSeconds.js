// === Module 4732: subSeconds ===

// Module 4732 (subSeconds)
import module_4298_mod from "module_4298" /* 4298 */;
import module_4461_mod from "module_4461" /* 4461 */;
import requiredArgs_mod from "requiredArgs" /* 4295 */;

let module_4298 = module_4298_mod;
if (!module_4298) {
  const obj = { default: module_4298 };
  let tmp3 = obj;
} else {
  tmp3 = module_4298;
}
module_4298 = tmp3;
let module_4461 = module_4461_mod;
if (!module_4461) {
  const obj2 = { default: module_4461 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4461;
}
module_4461 = tmp5;
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
  return module_4461.default(arg0, -module_4298.default(arg1));
};
export default exports.default;