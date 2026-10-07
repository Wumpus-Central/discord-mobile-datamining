// _runtime/04400_subMinutes.js
import module_4129_mod from "metro/04129__.js";
import requiredArgs_mod from "03965_requiredArgs.js";
import module_3968_mod from "metro/03968__.js";

let module_4129 = module_4129_mod;
if (!module_4129) {
  const obj = { default: module_4129 };
  let tmp3 = obj;
} else {
  tmp3 = module_4129;
}
module_4129 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_3968 = module_3968_mod;
if (!module_3968) {
  const obj3 = { default: module_3968 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3968;
}
module_3968 = tmp7;

export default function subMinutes(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4129.default(arg0, -module_3968.default(arg1));
};
export default exports.default;