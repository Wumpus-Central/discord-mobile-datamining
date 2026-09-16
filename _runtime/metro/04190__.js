// === Module 4190: ? ===

// Module 4190
import localeToNumber_mod from "localeToNumber" /* 4191 */;
import module_4193 from "module_4193" /* 4193 */;
import module_4194 from "module_4194" /* 4194 */;
import localeToNumber_mod from "module_4192" /* 4192 */;
import date from "module_4195" /* 4195 */;

let localeToNumber = localeToNumber_mod;
if (!localeToNumber) {
  const obj = { default: localeToNumber };
  let tmp3 = obj;
} else {
  tmp3 = localeToNumber;
}
if (!module_4193) {
  const obj2 = { default: module_4193 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4193;
}
if (!module_4194) {
  const obj3 = { default: module_4194 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4194;
}
let localeToNumber = localeToNumber_mod;
if (!localeToNumber) {
  const obj4 = { default: localeToNumber };
  let tmp9 = obj4;
} else {
  tmp9 = localeToNumber;
}
if (!date) {
  const obj5 = { default: date };
  let tmp11 = obj5;
} else {
  tmp11 = date;
}

export default { code: "hi", formatDistance: tmp3.default, formatLong: tmp5.default, formatRelative: tmp7.default, localize: tmp9.default, match: tmp11.default, options: { weekStartsOn: 0, firstWeekContainsDate: 4 } };
export default exports.default;