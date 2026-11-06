// === Module 4914: ? ===

// Module 4914
import localeToNumber_mod from "localeToNumber" /* 4915 */;
import module_4917 from "module_4917" /* 4917 */;
import module_4918 from "module_4918" /* 4918 */;
import localeToNumber_mod from "module_4916" /* 4916 */;
import date from "module_4919" /* 4919 */;

let localeToNumber = localeToNumber_mod;
if (!localeToNumber) {
  const obj = { default: localeToNumber };
  let tmp3 = obj;
} else {
  tmp3 = localeToNumber;
}
if (!module_4917) {
  const obj2 = { default: module_4917 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4917;
}
if (!module_4918) {
  const obj3 = { default: module_4918 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4918;
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