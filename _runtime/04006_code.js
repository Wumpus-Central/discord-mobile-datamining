// === Module 4006: code ===

// Module 4006 (code)
import formatDistance from "formatDistance" /* 4007 */;
import buildFormatLongFn from "buildFormatLongFn" /* 4009 */;
import formatRelative from "formatRelative" /* 4010 */;
import localeToNumber from "localeToNumber" /* 4008 */;
import module_4011 from "module_4011" /* 4011 */;

if (!formatDistance) {
  let obj = { default: null };
  obj[0] = formatDistance;
  let tmp3 = obj;
} else {
  tmp3 = formatDistance;
}
if (!buildFormatLongFn) {
  obj = { default: null };
  obj[0] = buildFormatLongFn;
  let tmp5 = obj;
} else {
  tmp5 = buildFormatLongFn;
}
if (!formatRelative) {
  obj = { default: null };
  obj[0] = formatRelative;
  let tmp7 = obj;
} else {
  tmp7 = formatRelative;
}
if (!localeToNumber) {
  const obj1 = { default: null };
  obj1[0] = localeToNumber;
  let tmp9 = obj1;
} else {
  tmp9 = localeToNumber;
}
if (!module_4011) {
  const obj2 = { default: null };
  obj2[0] = module_4011;
  let tmp11 = obj2;
} else {
  tmp11 = module_4011;
}

export default { code: "hi", formatDistance: tmp3.default, formatLong: tmp5.default, formatRelative: tmp7.default, localize: tmp9.default, match: tmp11.default, options: { weekStartsOn: 0, firstWeekContainsDate: 4 } };
export default exports.default;