// _runtime/metro/04567__.js
import module_4349_mod from "04349__.js";
import module_4382_mod from "04382__.js";
import requiredArgs_mod from "../04202_requiredArgs.js";

let module_4349 = module_4349_mod;
if (!module_4349) {
  const obj = { default: module_4349 };
  let tmp3 = obj;
} else {
  tmp3 = module_4349;
}
module_4349 = tmp3;
let module_4382 = module_4382_mod;
if (!module_4382) {
  const obj2 = { default: module_4382 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4382;
}
module_4382 = tmp5;
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
  return module_4382.default(arg0, module_4349.default(Date.now(), 1));
};
export default exports.default;