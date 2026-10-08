// === Module 4620: ? ===

// Module 4620
import localeToNumber_mod from "localeToNumber" /* 4621 */;
import module_4623 from "module_4623" /* 4623 */;
import module_4624 from "module_4624" /* 4624 */;
import localeToNumber_mod from "module_4622" /* 4622 */;
import date from "module_4625" /* 4625 */;

let localeToNumber = localeToNumber_mod;
if (!localeToNumber) {
  const obj = { default: localeToNumber };
  let tmp3 = obj;
} else {
  tmp3 = localeToNumber;
}
if (!module_4623) {
  const obj2 = { default: module_4623 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4623;
}
if (!module_4624) {
  const obj3 = { default: module_4624 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4624;
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