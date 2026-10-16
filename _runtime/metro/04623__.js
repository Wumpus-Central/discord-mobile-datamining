// === Module 4623: ? ===

// Module 4623
import module_4439_mod from "module_4439" /* 4439 */;
import requiredArgs_mod from "requiredArgs" /* 4259 */;

let module_4439 = module_4439_mod;
if (!module_4439) {
  const obj = { default: module_4439 };
  let tmp3 = obj;
} else {
  tmp3 = module_4439;
}
module_4439 = tmp3;
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
  return module_4439.default(arg0, Date.now());
};
export default exports.default;