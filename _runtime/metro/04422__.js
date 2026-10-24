// _runtime/metro/04422__.js
import module_4258_mod from "04258__.js";
import module_4402_mod from "04402__.js";
import requiredArgs_mod from "../04255_requiredArgs.js";

let module_4258 = module_4258_mod;
if (!module_4258) {
  const obj = { default: module_4258 };
  let tmp3 = obj;
} else {
  tmp3 = module_4258;
}
module_4258 = tmp3;
let module_4402 = module_4402_mod;
if (!module_4402) {
  const obj2 = { default: module_4402 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4402;
}
module_4402 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function addWeeks(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4402.default(arg0, 7 * module_4258.default(arg1));
};
export default exports.default;