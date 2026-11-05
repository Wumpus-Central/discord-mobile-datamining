// _runtime/04863_subYears.js
import module_4427_mod from "metro/04427__.js";
import module_4592_mod from "metro/04592__.js";
import requiredArgs_mod from "04424_requiredArgs.js";

let module_4427 = module_4427_mod;
if (!module_4427) {
  const obj = { default: module_4427 };
  let tmp3 = obj;
} else {
  tmp3 = module_4427;
}
module_4427 = tmp3;
let module_4592 = module_4592_mod;
if (!module_4592) {
  const obj2 = { default: module_4592 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4592;
}
module_4592 = tmp5;
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
  return module_4592.default(arg0, -module_4427.default(arg1));
};
export default exports.default;