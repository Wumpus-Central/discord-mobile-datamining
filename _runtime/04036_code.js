// _runtime/04036_code.js
import formatDistance from "04037_formatDistance.js";
import buildFormatLongFn from "04039_buildFormatLongFn.js";
import formatRelative from "04040_formatRelative.js";
import localeToNumber from "04038_localeToNumber.js";
import 04041__ from "metro/04041__.js";

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
if (!module_4041) {
  const obj2 = { default: null };
  obj2[0] = module_4041;
  let tmp11 = obj2;
} else {
  tmp11 = module_4041;
}

export default { code: "hi", formatDistance: tmp3.default, formatLong: tmp5.default, formatRelative: tmp7.default, localize: tmp9.default, match: tmp11.default, options: { weekStartsOn: 0, firstWeekContainsDate: 4 } };
export default exports.default;