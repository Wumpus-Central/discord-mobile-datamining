// === Module 4217: ? ===

// Module 4217
import module_4215_mod from "module_4215" /* 4215 */;
import requiredArgs_mod from "requiredArgs" /* 3965 */;

let module_4215 = module_4215_mod;
if (!module_4215) {
  const obj = { default: module_4215 };
  let tmp3 = obj;
} else {
  tmp3 = module_4215;
}
module_4215 = tmp3;
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
  return module_4215.default(arg0, Date.now(), arg1);
};
export default exports.default;