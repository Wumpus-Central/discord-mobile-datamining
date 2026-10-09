// === Module 4505: ? ===

// Module 4505
import module_4506_mod from "module_4506" /* 4506 */;
import requiredArgs_mod from "requiredArgs" /* 4159 */;

let module_4506 = module_4506_mod;
if (!module_4506) {
  const obj = { default: module_4506 };
  let tmp3 = obj;
} else {
  tmp3 = module_4506;
}
module_4506 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isSameISOWeek(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4506.default(arg0, arg1, { weekStartsOn: 1 });
};
export default exports.default;