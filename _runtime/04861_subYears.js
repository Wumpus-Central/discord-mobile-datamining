// _runtime/04861_subYears.js
import module_4425_mod from "metro/04425__.js";
import module_4590_mod from "metro/04590__.js";
import requiredArgs_mod from "04422_requiredArgs.js";

let module_4425 = module_4425_mod;
if (!module_4425) {
  const obj = { default: module_4425 };
  let tmp3 = obj;
} else {
  tmp3 = module_4425;
}
module_4425 = tmp3;
let module_4590 = module_4590_mod;
if (!module_4590) {
  const obj2 = { default: module_4590 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4590;
}
module_4590 = tmp5;
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
  return module_4590.default(arg0, -module_4425.default(arg1));
};
export default exports.default;