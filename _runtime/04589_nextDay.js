// _runtime/04589_nextDay.js
import module_4349_mod from "metro/04349__.js";
import module_4464_mod from "metro/04464__.js";
import requiredArgs_mod from "04202_requiredArgs.js";

let module_4349 = module_4349_mod;
if (!module_4349) {
  const obj = { default: module_4349 };
  let tmp3 = obj;
} else {
  tmp3 = module_4349;
}
module_4349 = tmp3;
let module_4464 = module_4464_mod;
if (!module_4464) {
  const obj2 = { default: module_4464 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4464;
}
module_4464 = tmp5;
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
  const diff = arg1 - module_4464.default(arg0);
  let sum = diff;
  if (diff <= 0) {
    sum = diff + 7;
  }
  return module_4349.default(arg0, sum);
};
export default exports.default;