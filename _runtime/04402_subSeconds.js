// _runtime/04402_subSeconds.js
import module_3968_mod from "metro/03968__.js";
import module_4131_mod from "metro/04131__.js";
import requiredArgs_mod from "03965_requiredArgs.js";

let module_3968 = module_3968_mod;
if (!module_3968) {
  const obj = { default: module_3968 };
  let tmp3 = obj;
} else {
  tmp3 = module_3968;
}
module_3968 = tmp3;
let module_4131 = module_4131_mod;
if (!module_4131) {
  const obj2 = { default: module_4131 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4131;
}
module_4131 = tmp5;
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
  return module_4131.default(arg0, -module_3968.default(arg1));
};
export default exports.default;