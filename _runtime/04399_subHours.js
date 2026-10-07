// _runtime/04399_subHours.js
import module_4118_mod from "metro/04118__.js";
import requiredArgs_mod from "03965_requiredArgs.js";
import module_3968_mod from "metro/03968__.js";

let module_4118 = module_4118_mod;
if (!module_4118) {
  const obj = { default: module_4118 };
  let tmp3 = obj;
} else {
  tmp3 = module_4118;
}
module_4118 = tmp3;
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

export default function subHours(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4118.default(arg0, -module_3968.default(arg1));
};
export default exports.default;