// _runtime/metro/04349__.js
import module_4350_mod from "04350__.js";
import _typeof_mod from "04199__.js";
import module_4203_mod from "04203__.js";
import requiredArgs_mod from "../04200_requiredArgs.js";
import module_4351_mod from "04351__.js";
import module_4352_mod from "04352__.js";

let module_4350 = module_4350_mod;
if (!module_4350) {
  const obj = { default: module_4350 };
  let tmp3 = obj;
} else {
  tmp3 = module_4350;
}
module_4350 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  let obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_4203 = module_4203_mod;
if (!module_4203) {
  const obj3 = { default: module_4203 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4203;
}
module_4203 = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj4 = { default: requiredArgs };
  let tmp9 = obj4;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;
let module_4351 = module_4351_mod;
if (!module_4351) {
  const obj5 = { default: module_4351 };
  let tmp11 = obj5;
} else {
  tmp11 = module_4351;
}
module_4351 = tmp11;
let module_4352 = module_4352_mod;
if (!module_4352) {
  const obj6 = { default: module_4352 };
  let tmp13 = obj6;
} else {
  tmp13 = module_4352;
}
module_4352 = tmp13;

export default function addBusinessDays(arg0, arg1) {
  let diff;
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  let obj2 = module_4350;
  let defaultResult2 = module_4350.default(defaultResult1);
  const defaultResult3 = module_4203.default(arg1);
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
    defaultResult1.setDate(defaultResult1.getDate() + 7 * module_4203.default(defaultResult3 / 5));
    const _Math = Math;
    let absolute = Math.abs(defaultResult3 % 5);
    if (absolute > 0) {
      do {
        let setDateResult1 = defaultResult1.setDate(defaultResult1.getDate() + num3);
        diff = absolute;
        if (!module_4350.default(defaultResult1)) {
          diff = absolute - 1;
        }
        absolute = diff;
        obj2 = module_4350;
      } while (diff > 0);
    }
    if (defaultResult2) {
      defaultResult2 = obj2.default(defaultResult1);
    }
    if (defaultResult2) {
      defaultResult2 = 0 !== defaultResult3;
    }
    if (defaultResult2) {
      if (module_4352.default(defaultResult1)) {
        let num6 = -1;
        if (num3 < 0) {
          num6 = 2;
        }
        defaultResult1.setDate(defaultResult1.getDate() + num6);
        const date1 = defaultResult1.getDate();
      }
      if (module_4351.default(defaultResult1)) {
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