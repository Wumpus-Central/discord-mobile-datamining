// === Module 4313: ? ===

// Module 4313
import module_4129_mod from "module_4129" /* 4129 */;
import requiredArgs_mod from "requiredArgs" /* 3949 */;

let module_4129 = module_4129_mod;
if (!module_4129) {
  const obj = { default: module_4129 };
  let tmp3 = obj;
} else {
  tmp3 = module_4129;
}
module_4129 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isToday(arg0) {
  requiredArgs.default(1, arguments);
  return module_4129.default(arg0, Date.now());
};
export default exports.default;