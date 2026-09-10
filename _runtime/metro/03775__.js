// === Module 3775: ? ===

// Module 3775
import translateSeconds from "translateSeconds" /* 3776 */;
import module_3777 from "module_3777" /* 3777 */;
import module_3778 from "module_3778" /* 3778 */;
import date from "module_3779" /* 3779 */;
import date from "module_3780" /* 3780 */;

if (!translateSeconds) {
  let obj = { default: translateSeconds };
  let tmp3 = obj;
} else {
  tmp3 = translateSeconds;
}
if (!module_3777) {
  obj = { default: module_3777 };
  let tmp5 = obj;
} else {
  tmp5 = module_3777;
}
if (!module_3778) {
  obj = { default: module_3778 };
  let tmp7 = obj;
} else {
  tmp7 = module_3778;
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