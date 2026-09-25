// _runtime/metro/13893__.js
import _mod13856 from "13856__.js";
import getOwnPropertyDescriptor_mod from "13836__.js";

let getOwnPropertyDescriptor = getOwnPropertyDescriptor_mod;
if (getOwnPropertyDescriptor) {
  const _Object = Object;
  getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
}
const tmp = _mod13856(prototype, "name");
let tmp2 = tmp;
if (tmp) {
  tmp2 = "something" === function something() {}.name;
}
let tmp3 = tmp;
if (tmp) {
  const _module = getOwnPropertyDescriptor;
  let tmp5 = !_module;
  if (_module) {
    tmp5 = getOwnPropertyDescriptor && getOwnPropertyDescriptor(prototype, "name").configurable;
    const tmp6 = getOwnPropertyDescriptor && getOwnPropertyDescriptor(prototype, "name").configurable;
  }
  tmp3 = tmp5;
}

export default { EXISTS: tmp, PROPER: tmp2, CONFIGURABLE: tmp3 };
