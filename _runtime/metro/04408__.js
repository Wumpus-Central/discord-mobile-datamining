// === Module 4408: ? ===

// Module 4408
import module_4404_mod from "module_4404" /* 4404 */;
import requiredArgs_mod from "requiredArgs" /* 4157 */;

let module_4404 = module_4404_mod;
if (!module_4404) {
  const obj = { default: module_4404 };
  let tmp3 = obj;
} else {
  tmp3 = module_4404;
}
module_4404 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function formatDistanceToNow(arg0, arg1) {
  requiredArgs.default(1, arguments);
  return module_4404.default(arg0, Date.now(), arg1);
};
export default exports.default;