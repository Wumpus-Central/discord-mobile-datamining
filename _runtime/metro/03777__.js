// === Module 3777: ? ===

// Module 3777
import translateSeconds from "translateSeconds" /* 3778 */;
import module_3779 from "module_3779" /* 3779 */;
import module_3780 from "module_3780" /* 3780 */;
import date from "module_3781" /* 3781 */;
import date from "module_3782" /* 3782 */;

if (!translateSeconds) {
  let obj = { default: translateSeconds };
  let tmp3 = obj;
} else {
  tmp3 = translateSeconds;
}
if (!module_3779) {
  obj = { default: module_3779 };
  let tmp5 = obj;
} else {
  tmp5 = module_3779;
}
if (!module_3780) {
  obj = { default: module_3780 };
  let tmp7 = obj;
} else {
  tmp7 = module_3780;
}
if (!date) {
  const obj1 = { default: date };
  let tmp9 = obj1;
} else {
  tmp9 = date;
}
if (!date) {
  const obj2 = { default: date };
  let tmp11 = obj2;
} else {
  tmp11 = date;
}

export default { code: "lt", formatDistance: tmp3.default, formatLong: tmp5.default, formatRelative: tmp7.default, localize: tmp9.default, match: tmp11.default, options: { weekStartsOn: 1, firstWeekContainsDate: 4 } };
export default exports.default;