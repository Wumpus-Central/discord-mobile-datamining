// _runtime/metro/04399__.js
import module_4235_mod from "04235__.js";
import module_4379_mod from "04379__.js";
import requiredArgs_mod from "../04232_requiredArgs.js";

let module_4235 = module_4235_mod;
if (!module_4235) {
  const obj = { default: module_4235 };
  let tmp3 = obj;
} else {
  tmp3 = module_4235;
}
module_4235 = tmp3;
let module_4379 = module_4379_mod;
if (!module_4379) {
  const obj2 = { default: module_4379 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4379;
}
module_4379 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function addWeeks(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4379.default(arg0, 7 * module_4235.default(arg1));
};
export default exports.default;