// === Module 4018: code ===

// Module 4018 (code)
import formatDistance from "formatDistance" /* 4019 */;
import buildFormatLongFn from "buildFormatLongFn" /* 4020 */;
import formatRelative from "formatRelative" /* 4021 */;
import buildLocalizeFn from "buildLocalizeFn" /* 4022 */;
import module_4023 from "module_4023" /* 4023 */;

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
if (!buildLocalizeFn) {
  const obj1 = { default: null };
  obj1[0] = buildLocalizeFn;
  let tmp9 = obj1;
} else {
  tmp9 = buildLocalizeFn;
}
if (!module_4023) {
  const obj2 = { default: null };
  obj2[0] = module_4023;
  let tmp11 = obj2;
} else {
  tmp11 = module_4023;
}

export default { code: "vi", formatDistance: tmp3.default, formatLong: tmp5.default, formatRelative: tmp7.default, localize: tmp9.default, match: tmp11.default, options: { weekStartsOn: 1, firstWeekContainsDate: 1 } };
export default exports.default;