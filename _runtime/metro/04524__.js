// _runtime/metro/04524__.js
import module_4306_mod from "04306__.js";
import module_4339_mod from "04339__.js";
import requiredArgs_mod from "../04159_requiredArgs.js";

let module_4306 = module_4306_mod;
if (!module_4306) {
  const obj = { default: module_4306 };
  let tmp3 = obj;
} else {
  tmp3 = module_4306;
}
module_4306 = tmp3;
let module_4339 = module_4339_mod;
if (!module_4339) {
  const obj2 = { default: module_4339 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4339;
}
module_4339 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function isTomorrow(arg0) {
  requiredArgs.default(1, arguments);
  return module_4339.default(arg0, module_4306.default(Date.now(), 1));
};
export default exports.default;