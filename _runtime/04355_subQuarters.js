// _runtime/04355_subQuarters.js
import module_3922_mod from "metro/03922__.js";
import module_4084_mod from "metro/04084__.js";
import requiredArgs_mod from "03919_requiredArgs.js";

let module_3922 = module_3922_mod;
if (!module_3922) {
  const obj = { default: module_3922 };
  let tmp3 = obj;
} else {
  tmp3 = module_3922;
}
module_3922 = tmp3;
let module_4084 = module_4084_mod;
if (!module_4084) {
  const obj2 = { default: module_4084 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4084;
}
module_4084 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function subQuarters(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4084.default(arg0, -module_3922.default(arg1));
};
export default exports.default;