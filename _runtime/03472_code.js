// _runtime/03472_code.js
import formatDistance from "03473_formatDistance.js";
import buildFormatLongFn from "03474_buildFormatLongFn.js";
import formatRelative from "03475_formatRelative.js";
import buildLocalizeFn from "03482_buildLocalizeFn.js";
import 03483__ from "metro/03483__.js";

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
if (!module_3483) {
  const obj2 = { default: null };
  obj2[0] = module_3483;
  let tmp11 = obj2;
} else {
  tmp11 = module_3483;
}

export default { code: "bg", formatDistance: tmp3.default, formatLong: tmp5.default, formatRelative: tmp7.default, localize: tmp9.default, match: tmp11.default, options: { weekStartsOn: 1, firstWeekContainsDate: 1 } };
export default exports.default;