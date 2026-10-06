// _runtime/metro/04428__.js
import formatDistance from "../04429_formatDistance.js";
import buildFormatLongFn from "../04431_buildFormatLongFn.js";
import formatRelative from "../04432_formatRelative.js";
import localeToNumber from "../04430_localeToNumber.js";
import date from "04433__.js";

let tmp11;
let tmp3;
let tmp5;
let tmp7;
let tmp9;
if (!formatDistance) {
  tmp3 = { default: formatDistance };
  const obj = { default: formatDistance };
} else {
  tmp3 = formatDistance;
}
if (!buildFormatLongFn) {
  tmp5 = { default: buildFormatLongFn };
  const obj2 = { default: buildFormatLongFn };
} else {
  tmp5 = buildFormatLongFn;
}
if (!formatRelative) {
  tmp7 = { default: formatRelative };
  const obj3 = { default: formatRelative };
} else {
  tmp7 = formatRelative;
}
if (!localeToNumber) {
  tmp9 = { default: localeToNumber };
  const obj4 = { default: localeToNumber };
} else {
  tmp9 = localeToNumber;
}
if (!date) {
  tmp11 = { default: date };
  const obj5 = { default: date };
} else {
  tmp11 = date;
}

export default {
  code: "hi",
  formatDistance: tmp3.default,
  formatLong: tmp5.default,
  formatRelative: tmp7.default,
  localize: tmp9.default,
  match: tmp11.default,
  options: { weekStartsOn: 0, firstWeekContainsDate: 4 },
};
