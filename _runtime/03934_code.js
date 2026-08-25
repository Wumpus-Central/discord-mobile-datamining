// === Module 3934: code ===

// Module 3934 (code)
import formatDistance from "formatDistance" /* 3935 */;
import buildFormatLongFn from "buildFormatLongFn" /* 3936 */;
import formatRelative from "formatRelative" /* 3937 */;
import buildLocalizeFn from "buildLocalizeFn" /* 3938 */;
import module_3939 from "module_3939" /* 3939 */;

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
if (!module_3939) {
  const obj2 = { default: null };
  obj2[0] = module_3939;
  let tmp11 = obj2;
} else {
  tmp11 = module_3939;
}

export default { code: "zh-TW", formatDistance: tmp3.default, formatLong: tmp5.default, formatRelative: tmp7.default, localize: tmp9.default, match: tmp11.default, options: { weekStartsOn: 1, firstWeekContainsDate: 4 } };
export default exports.default;