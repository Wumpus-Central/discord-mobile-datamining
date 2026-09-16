// _runtime/metro/03882__.js
import module_3730_mod from "03730__.js";
import module_3883_mod from "03883__.js";
import module_3886_mod from "03886__.js";
import requiredArgs_mod from "../03727_requiredArgs.js";

let module_3730 = module_3730_mod;
if (!module_3730) {
  const obj = { default: module_3730 };
  let tmp3 = obj;
} else {
  tmp3 = module_3730;
}
module_3730 = tmp3;
let module_3883 = module_3883_mod;
if (!module_3883) {
  const obj2 = { default: module_3883 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3883;
}
module_3883 = tmp5;
let module_3886 = module_3886_mod;
if (!module_3886) {
  const obj3 = { default: module_3886 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3886;
}
module_3886 = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj4 = { default: requiredArgs };
  let tmp9 = obj4;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function addISOWeekYears(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3886.default(arg0, module_3883.default(arg0) + module_3730.default(arg1));
};
export default exports.default;