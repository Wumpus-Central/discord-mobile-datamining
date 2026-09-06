// === Module 4247: makeDateFormatter ===

// Module 4247 (makeDateFormatter)
import _modDef4153 from "module_4153" /* 4153 */;
import SystemDateFormatter from "SystemDateFormatter" /* 4245 */;
import size from "module_2" /* 2 */;

function defaultMeridiem(arg0, arg1, arg2) {
  if (arg0 < 12) {
    let str2 = "AM";
    if (arg2) {
      str2 = "am";
    }
    let str = str2;
  } else {
    str = "PM";
    if (arg2) {
      str = "pm";
    }
  }
  return str;
}
function getLocaleData() {
  let obj = _modDef4153;
  const _config = obj.localeData()._config;
  ({ months, monthsShort, weekdays, weekdaysShort, weekdaysMin, meridiem } = _config);
  if (undefined === meridiem) {
    meridiem = defaultMeridiem;
  }
  ({ ordinal, week, longDateFormat } = _config);
  if (undefined === week) {
    week = { dow: 0, doy: 6 };
  }
  ordinal = "month";
  let format5 = months;
  if (typeof months === "function") {
    let tmpResult = tmp(4153);
    closure_2 = months.bind(tmpResult.localeData());
    let fn = (arg0, arg1) => {
      closure_0 = arg0;
      return closure_2({ [closure_1_0]: () => closure_0 }, arg1);
    };
  } else {
    const _Array = Array;
    let format = months;
    if (!Array.isArray(months)) {
      format = months.format;
    }
    format5 = format;
    fn = (arg0) => format5[arg0];
  }
  obj = { months: fn, monthsShort: null, weekdays: null, weekdaysShort: null, weekdaysMin: null, meridiem: null, ordinal: null, longDateFormat: null, longFormatters: null, week: null };
  ordinal = "month";
  format5 = monthsShort;
  if (typeof monthsShort === "function") {
    tmpResult = tmp(4153);
    closure_2 = monthsShort.bind(tmpResult.localeData());
    let fn2 = (arg0, arg1) => {
      closure_0 = arg0;
      return closure_2({ [closure_1_0]: () => closure_0 }, arg1);
    };
  } else {
    const _Array2 = Array;
    let format2 = monthsShort;
    if (!Array.isArray(monthsShort)) {
      format2 = monthsShort.format;
    }
    format5 = format2;
    fn2 = (arg0) => format5[arg0];
  }
  obj.monthsShort = fn2;
  ordinal = "day";
  format5 = weekdays;
  if (typeof weekdays === "function") {
    closure_2 = weekdays.bind(tmp(4153).localeData());
    let fn3 = (arg0, arg1) => {
      closure_0 = arg0;
      return closure_2({ [closure_1_0]: () => closure_0 }, arg1);
    };
    const tmpResult1 = tmp(4153);
  } else {
    const _Array3 = Array;
    let format3 = weekdays;
    if (!Array.isArray(weekdays)) {
      format3 = weekdays.format;
    }
    format5 = format3;
    fn3 = (arg0) => format5[arg0];
  }
  obj.weekdays = fn3;
  ordinal = "day";
  format5 = weekdaysShort;
  if (typeof weekdaysShort === "function") {
    closure_2 = weekdaysShort.bind(tmp(4153).localeData());
    let fn4 = (arg0, arg1) => {
      closure_0 = arg0;
      return closure_2({ [closure_1_0]: () => closure_0 }, arg1);
    };
    const tmpResult2 = tmp(4153);
  } else {
    const _Array4 = Array;
    let format4 = weekdaysShort;
    if (!Array.isArray(weekdaysShort)) {
      format4 = weekdaysShort.format;
    }
    format5 = format4;
    fn4 = (arg0) => format5[arg0];
  }
  obj.weekdaysShort = fn4;
  ordinal = "day";
  format5 = weekdaysMin;
  if (typeof weekdaysMin === "function") {
    closure_2 = weekdaysMin.bind(tmp(4153).localeData());
    let fn5 = (arg0, arg1) => {
      closure_0 = arg0;
      return closure_2({ [closure_1_0]: () => closure_0 }, arg1);
    };
    const tmpResult3 = tmp(4153);
  } else {
    const _Array5 = Array;
    format5 = weekdaysMin;
    if (!Array.isArray(weekdaysMin)) {
      format5 = weekdaysMin.format;
    }
    fn5 = (arg0) => format5[arg0];
  }
  obj.weekdaysMin = fn5;
  obj.meridiem = meridiem;
  if (typeof ordinal === "string") {
    ordinal = (arg0) => ordinal.replace("%d", "" + arg0);
  }
  obj.ordinal = ordinal;
  obj.longDateFormat = longDateFormat;
  obj.longFormatters = [];
  obj.week = week;
  return obj;
}
let result = size.fileFinishedImporting("lib/makeDateFormatter.tsx");

export default function makeFormatter(str, arg1) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  str = undefined;
  let _function;
  let tmp = arg1;
  if (arg1 == null) {
    tmp = getLocaleData();
  }
  str = tmp;
  let result = undefined === arg1 && !flag;
  if (result) {
    result = undefined !== SystemDateFormatter.makeFormatter;
  }
  if (result) {
    result = SystemDateFormatter.supportsSystemDateFormatter();
  }
  let replaced = str;
  if (!result) {
    _function = tmp;
    replaced = str.replace(/L[L|T|S]{0,3}/g, (arr, arg1) => {
      if (obj.test(arr)) {
        let LLLL = _function.longDateFormat.LLLL;
      } else {
        if (obj2.test(arr)) {
          LLLL = _function.longDateFormat.LLL + arr.slice(3);
        } else {
          if (obj3.test(arr)) {
            LLLL = _function.longDateFormat.LL + arr.slice(2);
          } else {
            if (obj4.test(arr)) {
              LLLL = _function.longDateFormat.LTS + arr.slice(3);
            } else {
              if (obj5.test(arr)) {
                LLLL = _function.longDateFormat.LT + arr.slice(2);
              } else {
                LLLL = arr;
                if (obj6.test(arr)) {
                  LLLL = arr;
                  if ("[" !== "["[arg1 - 1]) {
                    LLLL = _function.longDateFormat.L + arr.slice(1);
                  }
                }
                obj6 = /^L/;
              }
              obj5 = /^LT/;
            }
            obj4 = /^LTS/;
          }
          obj3 = /^LL/;
        }
        obj2 = /^LLL/;
      }
      return LLLL;
    });
  }
  const items = [];
  str = replaced;
  if (replaced.length > 0) {
    str.charAt(0);
  }
  // // eliminated: always false
  // // eliminated: always false
  // // eliminated: always false
  // // eliminated: always false
  // // eliminated: always false
  // // eliminated: always false
  // // eliminated: always false
  // // eliminated: always false
  // // eliminated: always false
  // // eliminated: always false
  // // eliminated: always false
  // // eliminated: always false
  _function = new Function("d", "localeData", tmp44 + "return (\n\"\" +\n" + items.join(" +\n") + "\n);");
  return (input) => _function(input, closure_0);
};
export { getLocaleData };