// _runtime/03671_code.js
import formatDistance from "03672_formatDistance.js";
import buildFormatLongFn from "03673_buildFormatLongFn.js";
import dayAndTimeWithAdjective from "03674_dayAndTimeWithAdjective.js";
import buildLocalizeFn from "03675_buildLocalizeFn.js";
import 03676__ from "metro/03676__.js";

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
if (!module_3676) {
  const obj2 = { default: null };
  obj2[0] = module_3676;
  let tmp11 = obj2;
} else {
  tmp11 = module_3676;
}

export default { code: "pl", formatDistance: tmp3.default, formatLong: tmp5.default, formatRelative: tmp7.default, localize: tmp9.default, match: tmp11.default, options: { weekStartsOn: 1, firstWeekContainsDate: 4 } };
export default exports.default;