// === Module 3642: code ===

// Module 3642 (code)
import formatDistance from "formatDistance" /* 3643 */;
import buildFormatLongFn from "buildFormatLongFn" /* 3644 */;
import dayAndTimeWithAdjective from "dayAndTimeWithAdjective" /* 3645 */;
import buildLocalizeFn from "buildLocalizeFn" /* 3646 */;
import module_3647 from "module_3647" /* 3647 */;

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
if (!dayAndTimeWithAdjective) {
  obj = { default: null };
  obj[0] = dayAndTimeWithAdjective;
  let tmp7 = obj;
} else {
  tmp7 = dayAndTimeWithAdjective;
}
if (!buildLocalizeFn) {
  const obj1 = { default: null };
  obj1[0] = buildLocalizeFn;
  let tmp9 = obj1;
} else {
  tmp9 = buildLocalizeFn;
}
if (!module_3647) {
  const obj2 = { default: null };
  obj2[0] = module_3647;
  let tmp11 = obj2;
} else {
  tmp11 = module_3647;
}

export default { code: "pl", formatDistance: tmp3.default, formatLong: tmp5.default, formatRelative: tmp7.default, localize: tmp9.default, match: tmp11.default, options: { weekStartsOn: 1, firstWeekContainsDate: 4 } };
export default exports.default;