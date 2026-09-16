// _runtime/04162_subMinutes.js
import module_3891_mod from "metro/03891__.js";
import requiredArgs_mod from "03727_requiredArgs.js";
import module_3730_mod from "metro/03730__.js";

let module_3891 = module_3891_mod;
if (!module_3891) {
  const obj = { default: module_3891 };
  let tmp3 = obj;
} else {
  tmp3 = module_3891;
}
module_3891 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_3730 = module_3730_mod;
if (!module_3730) {
  const obj3 = { default: module_3730 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3730;
}
module_3730 = tmp7;

export default function subMinutes(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3891.default(arg0, -module_3730.default(arg1));
};
export default exports.default;