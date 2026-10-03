// _runtime/04396_subSeconds.js
import module_3962_mod from "metro/03962__.js";
import module_4125_mod from "metro/04125__.js";
import requiredArgs_mod from "03959_requiredArgs.js";

let module_3962 = module_3962_mod;
if (!module_3962) {
  const obj = { default: module_3962 };
  let tmp3 = obj;
} else {
  tmp3 = module_3962;
}
module_3962 = tmp3;
let module_4125 = module_4125_mod;
if (!module_4125) {
  const obj2 = { default: module_4125 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4125;
}
module_4125 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function subSeconds(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4125.default(arg0, -module_3962.default(arg1));
};
export default exports.default;