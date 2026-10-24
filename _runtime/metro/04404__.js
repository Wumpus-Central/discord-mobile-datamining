// _runtime/metro/04404__.js
import module_4405_mod from "04405__.js";
import _typeof_mod from "04254__.js";
import module_4258_mod from "04258__.js";
import requiredArgs_mod from "../04255_requiredArgs.js";
import module_4406_mod from "04406__.js";
import module_4407_mod from "04407__.js";

let module_4405 = module_4405_mod;
if (!module_4405) {
  const obj = { default: module_4405 };
  let tmp3 = obj;
} else {
  tmp3 = module_4405;
}
module_4405 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  let obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_4258 = module_4258_mod;
if (!module_4258) {
  const obj3 = { default: module_4258 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4258;
}
module_4258 = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj4 = { default: requiredArgs };
  let tmp9 = obj4;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;
let module_4406 = module_4406_mod;
if (!module_4406) {
  const obj5 = { default: module_4406 };
  let tmp11 = obj5;
} else {
  tmp11 = module_4406;
}
module_4406 = tmp11;
let module_4407 = module_4407_mod;
if (!module_4407) {
  const obj6 = { default: module_4407 };
  let tmp13 = obj6;
} else {
  tmp13 = module_4407;
}
module_4407 = tmp13;

export default function addBusinessDays(arg0, arg1) {
  let diff;
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  let obj2 = module_4405;
  let defaultResult2 = module_4405.default(defaultResult1);
  const defaultResult3 = module_4258.default(arg1);
  if (isNaN(defaultResult3)) {
    const _Date = Date;
    const date = new Date(NaN);
    return date;
  } else {
    let num3 = 1;
    const hours = defaultResult1.getHours();
    if (defaultResult3 < 0) {
      num3 = -1;
    }
    defaultResult1.setDate(defaultResult1.getDate() + 7 * module_4258.default(defaultResult3 / 5));
    const _Math = Math;
    let absolute = Math.abs(defaultResult3 % 5);
    if (absolute > 0) {
      do {
        let setDateResult1 = defaultResult1.setDate(defaultResult1.getDate() + num3);
        diff = absolute;
        if (!module_4405.default(defaultResult1)) {
          diff = absolute - 1;
        }
        absolute = diff;
        obj2 = module_4405;
      } while (diff > 0);
    }
    if (defaultResult2) {
      defaultResult2 = obj2.default(defaultResult1);
    }
    if (defaultResult2) {
      defaultResult2 = 0 !== defaultResult3;
    }
    if (defaultResult2) {
      if (module_4407.default(defaultResult1)) {
        let num6 = -1;
        if (num3 < 0) {
          num6 = 2;
        }
        defaultResult1.setDate(defaultResult1.getDate() + num6);
        const date1 = defaultResult1.getDate();
      }
      if (module_4406.default(defaultResult1)) {
        let num7 = -2;
        if (num3 < 0) {
          num7 = 1;
        }
        defaultResult1.setDate(defaultResult1.getDate() + num7);
        const date2 = defaultResult1.getDate();
      }
    }
    defaultResult1.setHours(hours);
    return defaultResult1;
  }
};
export default exports.default;