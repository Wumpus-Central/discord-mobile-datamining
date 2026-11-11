// _runtime/metro/04691__.js
import module_4526_mod from "04526__.js";
import module_4671_mod from "04671__.js";
import requiredArgs_mod from "../04523_requiredArgs.js";

let module_4526 = module_4526_mod;
if (!module_4526) {
  const obj = { default: module_4526 };
  let tmp3 = obj;
} else {
  tmp3 = module_4526;
}
module_4526 = tmp3;
let module_4671 = module_4671_mod;
if (!module_4671) {
  const obj2 = { default: module_4671 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4671;
}
module_4671 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function addYears(interval, arg1) {
  requiredArgs.default(2, arguments);
  return module_4671.default(interval, 12 * module_4526.default(arg1));
};
export default exports.default;