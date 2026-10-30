// _runtime/metro/04636__.js
import module_4637_mod from "04637__.js";
import requiredArgs_mod from "../04290_requiredArgs.js";

let module_4637 = module_4637_mod;
if (!module_4637) {
  const obj = { default: module_4637 };
  let tmp3 = obj;
} else {
  tmp3 = module_4637;
}
module_4637 = tmp3;
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
  return module_4637.default(arg0, arg1, { weekStartsOn: 1 });
};
export default exports.default;