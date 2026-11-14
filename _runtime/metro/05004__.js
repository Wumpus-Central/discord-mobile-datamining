// _runtime/metro/05004__.js
import module_4589_mod from "04589__.js";
import _typeof_mod from "04585__.js";
import module_4733_mod from "04733__.js";
import module_4856_mod from "04856__.js";
import requiredArgs_mod from "../04586_requiredArgs.js";

let module_4589 = module_4589_mod;
if (!module_4589) {
  const obj = { default: module_4589 };
  let tmp3 = obj;
} else {
  tmp3 = module_4589;
}
module_4589 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_4733 = module_4733_mod;
if (!module_4733) {
  const obj3 = { default: module_4733 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4733;
}
module_4733 = tmp7;
let module_4856 = module_4856_mod;
if (!module_4856) {
  const obj4 = { default: module_4856 };
  let tmp9 = obj4;
} else {
  tmp9 = module_4856;
}
module_4856 = tmp9;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj5 = { default: requiredArgs };
  let tmp11 = obj5;
} else {
  tmp11 = requiredArgs;
}
requiredArgs = tmp11;

export default function setISODay(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  return module_4733.default(defaultResult1, module_4589.default(arg1) - module_4856.default(defaultResult1));
};
export default exports.default;