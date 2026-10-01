// === Module 4200: ? ===

// Module 4200
import module_4198_mod from "module_4198" /* 4198 */;
import requiredArgs_mod from "requiredArgs" /* 3948 */;

let module_4198 = module_4198_mod;
if (!module_4198) {
  const obj = { default: module_4198 };
  let tmp3 = obj;
} else {
  tmp3 = module_4198;
}
module_4198 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function formatDistanceToNowStrict(arg0, arg1) {
  requiredArgs.default(1, arguments);
  return module_4198.default(arg0, Date.now(), arg1);
};
export default exports.default;