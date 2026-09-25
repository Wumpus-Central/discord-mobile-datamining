// === Module 4355: subYears ===

// Module 4355 (subYears)
import module_3919_mod from "module_3919" /* 3919 */;
import module_4084_mod from "module_4084" /* 4084 */;
import requiredArgs_mod from "requiredArgs" /* 3916 */;

let module_3919 = module_3919_mod;
if (!module_3919) {
  const obj = { default: module_3919 };
  let tmp3 = obj;
} else {
  tmp3 = module_3919;
}
module_3919 = tmp3;
let module_4084 = module_4084_mod;
if (!module_4084) {
  const obj2 = { default: module_4084 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4084;
}
module_4084 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function subYears(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4084.default(arg0, -module_3919.default(arg1));
};
export default exports.default;