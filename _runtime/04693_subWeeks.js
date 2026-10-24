// === Module 4693: subWeeks ===

// Module 4693 (subWeeks)
import module_4258_mod from "module_4258" /* 4258 */;
import module_4422_mod from "module_4422" /* 4422 */;
import requiredArgs_mod from "requiredArgs" /* 4255 */;

let module_4258 = module_4258_mod;
if (!module_4258) {
  const obj = { default: module_4258 };
  let tmp3 = obj;
} else {
  tmp3 = module_4258;
}
module_4258 = tmp3;
let module_4422 = module_4422_mod;
if (!module_4422) {
  const obj2 = { default: module_4422 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4422;
}
module_4422 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function subWeeks(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4422.default(arg0, -module_4258.default(arg1));
};
export default exports.default;