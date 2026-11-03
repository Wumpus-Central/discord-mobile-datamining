// _runtime/metro/04587__.js
import module_4425_mod from "04425__.js";
import module_4570_mod from "04570__.js";
import requiredArgs_mod from "../04422_requiredArgs.js";

let module_4425 = module_4425_mod;
if (!module_4425) {
  const obj = { default: module_4425 };
  let tmp3 = obj;
} else {
  tmp3 = module_4425;
}
module_4425 = tmp3;
let module_4570 = module_4570_mod;
if (!module_4570) {
  const obj2 = { default: module_4570 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4570;
}
module_4570 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function addQuarters(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4570.default(arg0, 3 * module_4425.default(arg1));
};
export default exports.default;