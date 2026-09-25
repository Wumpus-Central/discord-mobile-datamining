// _runtime/04303_nextDay.js
import module_4063_mod from "metro/04063__.js";
import module_4178_mod from "metro/04178__.js";
import requiredArgs_mod from "03916_requiredArgs.js";

let module_4063 = module_4063_mod;
if (!module_4063) {
  const obj = { default: module_4063 };
  let tmp3 = obj;
} else {
  tmp3 = module_4063;
}
module_4063 = tmp3;
let module_4178 = module_4178_mod;
if (!module_4178) {
  const obj2 = { default: module_4178 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4178;
}
module_4178 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function nextDay(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const diff = arg1 - module_4178.default(arg0);
  let sum = diff;
  if (diff <= 0) {
    sum = diff + 7;
  }
  return module_4063.default(arg0, sum);
};
export default exports.default;