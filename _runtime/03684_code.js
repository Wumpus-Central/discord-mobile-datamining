// === Module 3684: code ===

// Module 3684 (code)
import formatDistance from "formatDistance" /* 3685 */;
import buildFormatLongFn from "buildFormatLongFn" /* 3686 */;
import formatRelative from "formatRelative" /* 3687 */;
import buildLocalizeFn from "buildLocalizeFn" /* 3986 */;
import module_3987 from "module_3987" /* 3987 */;

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
if (!module_3987) {
  const obj2 = { default: null };
  obj2[0] = module_3987;
  let tmp11 = obj2;
} else {
  tmp11 = module_3987;
}

export default { code: "uk", formatDistance: tmp3.default, formatLong: tmp5.default, formatRelative: tmp7.default, localize: tmp9.default, match: tmp11.default, options: { weekStartsOn: 1, firstWeekContainsDate: 1 } };
export default exports.default;