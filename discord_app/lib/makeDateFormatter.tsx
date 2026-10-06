// discord_app/lib/makeDateFormatter.tsx
import _modDef4467 from "../../_runtime/metro/04467__.js";
import SystemDateFormatter from "../modules/system_date_format/SystemDateFormatter.native.tsx";
import size from "../../_runtime/metro/00002__.js";

function defaultMeridiem(arg0, arg1, arg2) {
  let str;
  if (arg0 < 12) {
    let str2 = "AM";
    if (arg2) {
      str2 = "am";
    }
    str = str2;
  } else {
    str = "PM";
    if (arg2) {
      str = "pm";
    }
  }
  return str;
}
function getLocaleData() {
  let fn;
  let fn2;
  let fn3;
  let fn4;
  let fn5;
  let longDateFormat;
  let meridiem;
  let months;
  let monthsShort;
  let ordinal;
  let week;
  let weekdays;
  let weekdaysMin;
  let weekdaysShort;
  const f89070 = (arg0, arg1) => {
    let closure_0 = arg0;
    const obj = { [closure_1_0]: () => closure_0 };
    return closure_2(obj, arg1);
  };
  const f89071 = (arg0) => weekdaysMin[arg0];
  let obj = _modDef4467;
  const _config = obj.localeData()._config;
  ({ months, monthsShort, weekdays, weekdaysShort, weekdaysMin, meridiem } = _config);
  if (undefined === meridiem) {
    meridiem = defaultMeridiem;
  }
  ({ ordinal, week, longDateFormat } = _config);
  if (undefined === week) {
    week = { dow: 0, doy: 6 };
  }
  let month = "month";
  if (typeof months === "function") {
    const tmpResult = _modDef4467;
    let closure_2 = months.bind(tmpResult.localeData());
    fn = f89070;
  } else {
    const _Array = Array;
    let format = months;
    if (!Array.isArray(months)) {
      format = months.format;
    }
    months = format;
    fn = f89071;
  }
  month = "month";
  const obj2 = {
    months: fn,
    monthsShort: fn2,
    weekdays: fn3,
    weekdaysShort: fn4,
    weekdaysMin: fn5,
    meridiem,
    ordinal,
    longDateFormat,
    longFormatters: [],
    week,
  };
  if (typeof monthsShort === "function") {
    const tmpResult5 = _modDef4467;
    closure_2 = monthsShort.bind(tmpResult5.localeData());
    fn2 = f89070;
  } else {
    const _Array2 = Array;
    let format2 = monthsShort;
    if (!Array.isArray(monthsShort)) {
      format2 = monthsShort.format;
    }
    monthsShort = format2;
    fn2 = f89071;
  }
  let day = "day";
  if (typeof weekdays === "function") {
    const tmpResult6 = _modDef4467;
    closure_2 = weekdays.bind(tmpResult6.localeData());
    fn3 = f89070;
  } else {
    const _Array3 = Array;
    let format3 = weekdays;
    if (!Array.isArray(weekdays)) {
      format3 = weekdays.format;
    }
    weekdays = format3;
    fn3 = f89071;
  }
  day = "day";
  if (typeof weekdaysShort === "function") {
    const tmpResult7 = _modDef4467;
    closure_2 = weekdaysShort.bind(tmpResult7.localeData());
    fn4 = f89070;
  } else {
    const _Array4 = Array;
    let format4 = weekdaysShort;
    if (!Array.isArray(weekdaysShort)) {
      format4 = weekdaysShort.format;
    }
    weekdaysShort = format4;
    fn4 = f89071;
  }
  day = "day";
  if (typeof weekdaysMin === "function") {
    const tmpResult8 = _modDef4467;
    closure_2 = weekdaysMin.bind(tmpResult8.localeData());
    fn5 = f89070;
  } else {
    const _Array5 = Array;
    let format5 = weekdaysMin;
    if (!Array.isArray(weekdaysMin)) {
      format5 = weekdaysMin.format;
    }
    weekdaysMin = format5;
    fn5 = f89071;
  }
  if (typeof ordinal === "string") {
    ordinal = (arg0) => ordinal.replace("%d", "" + arg0);
  }
  return obj2;
}
let result = size.fileFinishedImporting("lib/makeDateFormatter.tsx");

export default function makeFormatter(str, arg1) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  let closure_0;
  let _function;
  let tmp = arg1;
  if (arg1 == null) {
    tmp = getLocaleData();
  }
  closure_0 = tmp;
  let result = undefined === arg1 && !flag && undefined !== SystemDateFormatter.makeFormatter;
  if (result) {
    let obj = SystemDateFormatter;
    result = obj.supportsSystemDateFormatter();
  }
  let replaced = str;
  if (!result) {
    closure_0 = str;
    let closure_1 = tmp;
    replaced = str.replace(/L[L|T|S]{0,3}/g, (arr, arg1) => {
      let LLLL;
      const obj = /^LLLL/;
      if (obj.test(arr)) {
        LLLL = closure_1.longDateFormat.LLLL;
      } else {
        const obj2 = /^LLL/;
        if (obj2.test(arr)) {
          LLLL = closure_1.longDateFormat.LLL + arr.slice(3);
        } else {
          const obj3 = /^LL/;
          if (obj3.test(arr)) {
            LLLL = closure_1.longDateFormat.LL + arr.slice(2);
          } else {
            const obj4 = /^LTS/;
            if (obj4.test(arr)) {
              LLLL = closure_1.longDateFormat.LTS + arr.slice(3);
            } else {
              const obj5 = /^LT/;
              if (obj5.test(arr)) {
                LLLL = closure_1.longDateFormat.LT + arr.slice(2);
              } else {
                LLLL = arr;
                const obj6 = /^L/;
                if (obj6.test(arr)) {
                  LLLL = arr;
                  if ("[" !== closure_0[arg1 - 1]) {
                    LLLL = closure_1.longDateFormat.L + arr.slice(1);
                  }
                }
              }
            }
          }
        }
      }
      return LLLL;
    });
  }
  const items = [];
  if (replaced.length > 0) {
    replaced.charAt(0);
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
  _function = new Function("d", "localeData", tmp44 + 'return (\n"" +\n' + items.join(" +\n") + "\n);");
  return (input) => _function(input, closure_0);
}
export { getLocaleData };
