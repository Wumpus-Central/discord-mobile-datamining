// _runtime/04689_subHours.js
import module_4408_mod from "metro/04408__.js";
import requiredArgs_mod from "04255_requiredArgs.js";
import module_4258_mod from "metro/04258__.js";

let module_4408 = module_4408_mod;
if (!module_4408) {
  const obj = { default: module_4408 };
  let tmp3 = obj;
} else {
  tmp3 = module_4408;
}
module_4408 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_4258 = module_4258_mod;
if (!module_4258) {
  const obj3 = { default: module_4258 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4258;
}
module_4258 = tmp7;

export default function subHours(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4408.default(arg0, -module_4258.default(arg1));
};
export default exports.default;