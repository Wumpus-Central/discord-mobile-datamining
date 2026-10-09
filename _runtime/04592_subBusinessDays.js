// _runtime/04592_subBusinessDays.js
import module_4308_mod from "metro/04308__.js";
import requiredArgs_mod from "04159_requiredArgs.js";
import module_4162_mod from "metro/04162__.js";

let module_4308 = module_4308_mod;
if (!module_4308) {
  const obj = { default: module_4308 };
  let tmp3 = obj;
} else {
  tmp3 = module_4308;
}
module_4308 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_4162 = module_4162_mod;
if (!module_4162) {
  const obj3 = { default: module_4162 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4162;
}
module_4162 = tmp7;

export default function subBusinessDays(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4308.default(arg0, -module_4162.default(arg1));
};
export default exports.default;