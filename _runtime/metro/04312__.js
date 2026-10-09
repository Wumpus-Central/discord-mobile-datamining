// _runtime/metro/04312__.js
import module_4162_mod from "04162__.js";
import module_4313_mod from "04313__.js";
import requiredArgs_mod from "../04159_requiredArgs.js";

let module_4162 = module_4162_mod;
if (!module_4162) {
  const obj = { default: module_4162 };
  let tmp3 = obj;
} else {
  tmp3 = module_4162;
}
module_4162 = tmp3;
let module_4313 = module_4313_mod;
if (!module_4313) {
  const obj2 = { default: module_4313 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4313;
}
module_4313 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;
let c3 = 3600000;

export default function addHours(interval, arg1) {
  requiredArgs.default(2, arguments);
  return module_4313.default(interval, module_4162.default(arg1) * c3);
};
export default exports.default;