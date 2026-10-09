// _runtime/04597_subWeeks.js
import module_4162_mod from "metro/04162__.js";
import module_4326_mod from "metro/04326__.js";
import requiredArgs_mod from "04159_requiredArgs.js";

let module_4162 = module_4162_mod;
if (!module_4162) {
  const obj = { default: module_4162 };
  let tmp3 = obj;
} else {
  tmp3 = module_4162;
}
module_4162 = tmp3;
let module_4326 = module_4326_mod;
if (!module_4326) {
  const obj2 = { default: module_4326 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4326;
}
module_4326 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function subWeeks(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4326.default(arg0, -module_4162.default(arg1));
};
export default exports.default;