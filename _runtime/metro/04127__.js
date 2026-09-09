// === Module 4127: ? ===

// Module 4127
import localeToNumber from "localeToNumber" /* 4128 */;
import module_4130 from "module_4130" /* 4130 */;
import module_4131 from "module_4131" /* 4131 */;
import localeToNumber from "module_4129" /* 4129 */;
import date from "module_4132" /* 4132 */;

if (!localeToNumber) {
  let obj = { default: localeToNumber };
  let tmp3 = obj;
} else {
  tmp3 = localeToNumber;
}
if (!module_4130) {
  obj = { default: module_4130 };
  let tmp5 = obj;
} else {
  tmp5 = module_4130;
}
if (!module_4131) {
  obj = { default: module_4131 };
  let tmp7 = obj;
} else {
  tmp7 = module_4131;
}
if (!localeToNumber) {
  const obj1 = { default: localeToNumber };
  let tmp9 = obj1;
} else {
  tmp9 = localeToNumber;
}
if (!date) {
  const obj2 = { default: date };
  let tmp11 = obj2;
} else {
  tmp11 = date;
}

export default { code: "hi", formatDistance: tmp3.default, formatLong: tmp5.default, formatRelative: tmp7.default, localize: tmp9.default, match: tmp11.default, options: { weekStartsOn: 0, firstWeekContainsDate: 4 } };
export default exports.default;