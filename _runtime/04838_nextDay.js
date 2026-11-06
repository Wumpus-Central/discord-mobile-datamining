// === Module 4838: nextDay ===

// Module 4838 (nextDay)
import module_4598_mod from "module_4598" /* 4598 */;
import module_4713_mod from "module_4713" /* 4713 */;
import requiredArgs_mod from "requiredArgs" /* 4451 */;

let module_4598 = module_4598_mod;
if (!module_4598) {
  const obj = { default: module_4598 };
  let tmp3 = obj;
} else {
  tmp3 = module_4598;
}
module_4598 = tmp3;
let module_4713 = module_4713_mod;
if (!module_4713) {
  const obj2 = { default: module_4713 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4713;
}
module_4713 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function nextDay(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const diff = arg1 - module_4713.default(arg0);
  let sum = diff;
  if (diff <= 0) {
    sum = diff + 7;
  }
  return module_4598.default(arg0, sum);
};
export default exports.default;