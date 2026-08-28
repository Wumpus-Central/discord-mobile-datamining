// _runtime/03573_code.js
import formatDistance from "02000_formatDistance.js";
import formatRelative from "02003_formatRelative.js";
import buildLocalizeFn from "02004_buildLocalizeFn.js";
import 02006__ from "metro/02006__.js";
import buildFormatLongFn from "03574_buildFormatLongFn.js";

if (!formatDistance) {
  let obj = { default: null };
  obj[0] = formatDistance;
  let tmp3 = obj;
} else {
  tmp3 = formatDistance;
}
if (!formatRelative) {
  obj = { default: null };
  obj[0] = formatRelative;
  let tmp5 = obj;
} else {
  tmp5 = formatRelative;
}
if (!buildLocalizeFn) {
  obj = { default: null };
  obj[0] = buildLocalizeFn;
  let tmp7 = obj;
} else {
  tmp7 = buildLocalizeFn;
}
if (!module_2006) {
  const obj1 = { default: null };
  obj1[0] = module_2006;
  let tmp9 = obj1;
} else {
  tmp9 = module_2006;
}
if (!buildFormatLongFn) {
  const obj2 = { default: null };
  obj2[0] = buildFormatLongFn;
  let tmp11 = obj2;
} else {
  tmp11 = buildFormatLongFn;
}

export default { code: "en-GB", formatDistance: tmp3.default, formatLong: tmp11.default, formatRelative: tmp5.default, localize: tmp7.default, match: tmp9.default, options: { weekStartsOn: 1, firstWeekContainsDate: 4 } };
export default exports.default;