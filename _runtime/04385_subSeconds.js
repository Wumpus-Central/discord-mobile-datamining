// _runtime/04385_subSeconds.js
import module_3951_mod from "metro/03951__.js";
import module_4114_mod from "metro/04114__.js";
import requiredArgs_mod from "03948_requiredArgs.js";

let module_3951 = module_3951_mod;
if (!module_3951) {
  const obj = { default: module_3951 };
  let tmp3 = obj;
} else {
  tmp3 = module_3951;
}
module_3951 = tmp3;
let module_4114 = module_4114_mod;
if (!module_4114) {
  const obj2 = { default: module_4114 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4114;
}
module_4114 = tmp5;
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
  return module_4114.default(arg0, -module_3951.default(arg1));
};
export default exports.default;