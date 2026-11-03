// _runtime/04858_subQuarters.js
import module_4425_mod from "metro/04425__.js";
import module_4587_mod from "metro/04587__.js";
import requiredArgs_mod from "04422_requiredArgs.js";

let module_4425 = module_4425_mod;
if (!module_4425) {
  const obj = { default: module_4425 };
  let tmp3 = obj;
} else {
  tmp3 = module_4425;
}
module_4425 = tmp3;
let module_4587 = module_4587_mod;
if (!module_4587) {
  const obj2 = { default: module_4587 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4587;
}
module_4587 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function subQuarters(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4587.default(arg0, -module_4425.default(arg1));
};
export default exports.default;