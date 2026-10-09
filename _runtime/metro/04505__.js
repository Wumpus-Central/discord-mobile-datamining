// _runtime/metro/04505__.js
import module_4506_mod from "04506__.js";
import requiredArgs_mod from "../04159_requiredArgs.js";

let module_4506 = module_4506_mod;
if (!module_4506) {
  const obj = { default: module_4506 };
  let tmp3 = obj;
} else {
  tmp3 = module_4506;
}
module_4506 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isSameISOWeek(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4506.default(arg0, arg1, { weekStartsOn: 1 });
};
export default exports.default;