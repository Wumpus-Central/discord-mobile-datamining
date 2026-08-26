// === Module 3616: code ===

// Module 3616 (code)
import formatDistance from "formatDistance" /* 3617 */;
import buildFormatLongFn from "buildFormatLongFn" /* 3618 */;
import formatRelative from "formatRelative" /* 3619 */;
import buildLocalizeFn from "buildLocalizeFn" /* 3620 */;
import module_3621 from "module_3621" /* 3621 */;

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
if (!module_3621) {
  const obj2 = { default: null };
  obj2[0] = module_3621;
  let tmp11 = obj2;
} else {
  tmp11 = module_3621;
}

export default { code: "ko", formatDistance: tmp3.default, formatLong: tmp5.default, formatRelative: tmp7.default, localize: tmp9.default, match: tmp11.default, options: { weekStartsOn: 0, firstWeekContainsDate: 1 } };
export default exports.default;