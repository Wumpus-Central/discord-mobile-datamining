// _runtime/metro/04575__.js
import module_4425_mod from "04425__.js";
import module_4576_mod from "04576__.js";
import requiredArgs_mod from "../04422_requiredArgs.js";

let module_4425 = module_4425_mod;
if (!module_4425) {
  const obj = { default: module_4425 };
  let tmp3 = obj;
} else {
  tmp3 = module_4425;
}
module_4425 = tmp3;
let module_4576 = module_4576_mod;
if (!module_4576) {
  const obj2 = { default: module_4576 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4576;
}
module_4576 = tmp5;
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
  return module_4576.default(interval, module_4425.default(arg1) * c3);
};
export default exports.default;