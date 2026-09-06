// _runtime/03750_code.js
import formatDistance from "03751_formatDistance.js";
import buildFormatLongFn from "03752_buildFormatLongFn.js";
import dayAndTimeWithAdjective from "03753_dayAndTimeWithAdjective.js";
import buildLocalizeFn from "03754_buildLocalizeFn.js";
import 03755__ from "metro/03755__.js";

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
if (!module_3755) {
  const obj2 = { default: null };
  obj2[0] = module_3755;
  let tmp11 = obj2;
} else {
  tmp11 = module_3755;
}

export default { code: "pl", formatDistance: tmp3.default, formatLong: tmp5.default, formatRelative: tmp7.default, localize: tmp9.default, match: tmp11.default, options: { weekStartsOn: 1, firstWeekContainsDate: 4 } };
export default exports.default;