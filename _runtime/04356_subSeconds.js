// _runtime/04356_subSeconds.js
import module_3922_mod from "metro/03922__.js";
import module_4085_mod from "metro/04085__.js";
import requiredArgs_mod from "03919_requiredArgs.js";

let module_3922 = module_3922_mod;
if (!module_3922) {
  const obj = { default: module_3922 };
  let tmp3 = obj;
} else {
  tmp3 = module_3922;
}
module_3922 = tmp3;
let module_4085 = module_4085_mod;
if (!module_4085) {
  const obj2 = { default: module_4085 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4085;
}
module_4085 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function subSeconds(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4085.default(arg0, -module_3922.default(arg1));
};
export default exports.default;