// _runtime/metro/03800__.js
import 03801__ from "03801__.js";
import _typeof from "03650__.js";
import 03654__ from "03654__.js";
import requiredArgs from "../03651_requiredArgs.js";
import 03802__ from "03802__.js";
import 03803__ from "03803__.js";

if (!module_3801) {
  let obj = { default: module_3801 };
  let tmp3 = obj;
} else {
  tmp3 = module_3801;
}
module_3801 = tmp3;
if (!_typeof) {
  obj = { default: _typeof };
  let tmp5 = obj;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
if (!module_3654) {
  obj = { default: module_3654 };
  let tmp7 = obj;
} else {
  tmp7 = module_3654;
}
module_3654 = tmp7;
if (!requiredArgs) {
  const obj1 = { default: requiredArgs };
  let tmp9 = obj1;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;
if (!module_3802) {
  let obj2 = { default: module_3802 };
  let tmp11 = obj2;
} else {
  tmp11 = module_3802;
}
module_3802 = tmp11;
if (!module_3803) {
  let obj3 = { default: module_3803 };
  let tmp13 = obj3;
} else {
  tmp13 = module_3803;
}
module_3803 = tmp13;

export default function addBusinessDays(arg0, arg1) {
  let diff;
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  let obj2 = module_3801;
  let defaultResult2 = module_3801.default(defaultResult1);
  const defaultResult3 = module_3654.default(arg1);
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
    defaultResult1.setDate(defaultResult1.getDate() + 7 * obj3.default(defaultResult3 / 5));
    const _Math = Math;
    let absolute = Math.abs(defaultResult3 % 5);
    if (absolute > 0) {
      do {
        let setDateResult1 = defaultResult1.setDate(defaultResult1.getDate() + num3);
        let tmp9 = module_3801;
        diff = absolute;
        if (!module_3801.default(defaultResult1)) {
          diff = absolute - 1;
        }
        absolute = diff;
        obj2 = tmp9;
      } while (diff > 0);
    }
    if (defaultResult2) {
      defaultResult2 = obj2.default(defaultResult1);
    }
    if (defaultResult2) {
      defaultResult2 = 0 !== defaultResult3;
    }
    if (defaultResult2) {
      if (module_3803.default(defaultResult1)) {
        let num6 = -1;
        if (num3 < 0) {
          num6 = 2;
        }
        defaultResult1.setDate(defaultResult1.getDate() + num6);
        const date1 = defaultResult1.getDate();
      }
      if (module_3802.default(defaultResult1)) {
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
  obj3 = module_3654;
};
export default exports.default;