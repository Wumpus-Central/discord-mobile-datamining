// _runtime/04667_subMinutes.js
import module_4396_mod from "metro/04396__.js";
import requiredArgs_mod from "04232_requiredArgs.js";
import module_4235_mod from "metro/04235__.js";

let module_4396 = module_4396_mod;
if (!module_4396) {
  const obj = { default: module_4396 };
  let tmp3 = obj;
} else {
  tmp3 = module_4396;
}
module_4396 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_4235 = module_4235_mod;
if (!module_4235) {
  const obj3 = { default: module_4235 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4235;
}
module_4235 = tmp7;

export default function subMinutes(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4396.default(arg0, -module_4235.default(arg1));
};
export default exports.default;