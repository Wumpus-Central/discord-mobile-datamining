// _runtime/04464_subMilliseconds.js
import module_4386_mod from "metro/04386__.js";
import requiredArgs_mod from "04232_requiredArgs.js";
import module_4235_mod from "metro/04235__.js";

let module_4386 = module_4386_mod;
if (!module_4386) {
  const obj = { default: module_4386 };
  let tmp3 = obj;
} else {
  tmp3 = module_4386;
}
module_4386 = tmp3;
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

export default function subMilliseconds(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4386.default(arg0, -module_4235.default(arg1));
};
export default exports.default;