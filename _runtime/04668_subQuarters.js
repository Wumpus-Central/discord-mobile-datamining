// _runtime/04668_subQuarters.js
import module_4235_mod from "metro/04235__.js";
import module_4397_mod from "metro/04397__.js";
import requiredArgs_mod from "04232_requiredArgs.js";

let module_4235 = module_4235_mod;
if (!module_4235) {
  const obj = { default: module_4235 };
  let tmp3 = obj;
} else {
  tmp3 = module_4235;
}
module_4235 = tmp3;
let module_4397 = module_4397_mod;
if (!module_4397) {
  const obj2 = { default: module_4397 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4397;
}
module_4397 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function subQuarters(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4397.default(arg0, -module_4235.default(arg1));
};
export default exports.default;