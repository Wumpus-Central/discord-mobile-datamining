// === Module 4369: ? ===

// Module 4369
import module_4205_mod from "module_4205" /* 4205 */;
import module_4349_mod from "module_4349" /* 4349 */;
import requiredArgs_mod from "requiredArgs" /* 4202 */;

let module_4205 = module_4205_mod;
if (!module_4205) {
  const obj = { default: module_4205 };
  let tmp3 = obj;
} else {
  tmp3 = module_4205;
}
module_4205 = tmp3;
let module_4349 = module_4349_mod;
if (!module_4349) {
  const obj2 = { default: module_4349 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4349;
}
module_4349 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function addWeeks(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4349.default(arg0, 7 * module_4205.default(arg1));
};
export default exports.default;