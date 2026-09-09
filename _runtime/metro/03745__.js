// === Module 3745: ? ===

// Module 3745
import translateSeconds from "translateSeconds" /* 3746 */;
import module_3747 from "module_3747" /* 3747 */;
import module_3748 from "module_3748" /* 3748 */;
import date from "module_3749" /* 3749 */;
import date from "module_3750" /* 3750 */;

if (!translateSeconds) {
  let obj = { default: translateSeconds };
  let tmp3 = obj;
} else {
  tmp3 = translateSeconds;
}
if (!module_3747) {
  obj = { default: module_3747 };
  let tmp5 = obj;
} else {
  tmp5 = module_3747;
}
if (!module_3748) {
  obj = { default: module_3748 };
  let tmp7 = obj;
} else {
  tmp7 = module_3748;
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