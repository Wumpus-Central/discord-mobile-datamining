// discord_app/lib/makeDateFormatter.tsx
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
  let longDateFormat;
  let meridiem;
  let months;
  let monthsShort;
  let ordinal;
  let week;
  let weekdays;
  let weekdaysMin;
  let weekdaysShort;
  let obj = format5(3867);
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
  format5 = months;
  if (typeof months === "function") {
    let tmpResult = tmp(3867);
    let dependencyMap = months.bind(tmpResult.localeData());
    let fn = (arg0, arg1) => {
      let closure_0 = arg0;
      return callback({ [closure_0]: () => closure_0 }, arg1);
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
    tmpResult = tmp(3867);
    dependencyMap = monthsShort.bind(tmpResult.localeData());
    let fn2 = (arg0, arg1) => {
      let closure_0 = arg0;
      return callback({ [closure_0]: () => closure_0 }, arg1);
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
  obj[1] = fn2;
  ordinal = "day";
  format5 = weekdays;
  if (typeof weekdays === "function") {
    dependencyMap = weekdays.bind(tmp(3867).localeData());
    let fn3 = (arg0, arg1) => {
      let closure_0 = arg0;
      return callback({ [closure_0]: () => closure_0 }, arg1);
    };
    const tmpResult1 = tmp(3867);
  } else {
    const _Array3 = Array;
    let format3 = weekdays;
    if (!Array.isArray(weekdays)) {
      format3 = weekdays.format;
    }
    format5 = format3;
    fn3 = (arg0) => format5[arg0];
  }
  obj[2] = fn3;
  ordinal = "day";
  format5 = weekdaysShort;
  if (typeof weekdaysShort === "function") {
    dependencyMap = weekdaysShort.bind(tmp(3867).localeData());
    let fn4 = (arg0, arg1) => {
      let closure_0 = arg0;
      return callback({ [closure_0]: () => closure_0 }, arg1);
    };
    const tmpResult2 = tmp(3867);
  } else {
    const _Array4 = Array;
    let format4 = weekdaysShort;
    if (!Array.isArray(weekdaysShort)) {
      format4 = weekdaysShort.format;
    }
    format5 = format4;
    fn4 = (arg0) => format5[arg0];
  }
  obj[3] = fn4;
  ordinal = "day";
  format5 = weekdaysMin;
  if (typeof weekdaysMin === "function") {
    dependencyMap = weekdaysMin.bind(tmp(3867).localeData());
    let fn5 = (arg0, arg1) => {
      let closure_0 = arg0;
      return callback({ [closure_0]: () => closure_0 }, arg1);
    };
    const tmpResult3 = tmp(3867);
  } else {
    const _Array5 = Array;
    format5 = weekdaysMin;
    if (!Array.isArray(weekdaysMin)) {
      format5 = weekdaysMin.format;
    }
    fn5 = (arg0) => format5[arg0];
  }
  obj[4] = fn5;
  obj[5] = meridiem;
  if (typeof ordinal === "string") {
    ordinal = (arg0) => ordinal.replace("%d", "" + arg0);
  }
  obj[6] = ordinal;
  obj[7] = longDateFormat;
  obj[8] = [];
  obj[9] = week;
  return obj;
}
let result = require("__DiscordCreateDateFormatter").fileFinishedImporting("lib/makeDateFormatter.tsx");

export default function makeFormatter(str) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  let _require;
  let _function;
  let tmp = arg1;
  if (arg1 == null) {
    tmp = getLocaleData();
  }
  _require = tmp;
  let result = undefined === arg1 && !flag;
  if (result) {
    result = undefined !== _require("../modules/system_date_format/SystemDateFormatter.native.tsx").makeFormatter;
  }
  if (result) {
    result = _require("../modules/system_date_format/SystemDateFormatter.native.tsx").supportsSystemDateFormatter();
    const obj = _require("../modules/system_date_format/SystemDateFormatter.native.tsx");
  }
  let replaced = str;
  if (!result) {
    _require = str;
    _function = tmp;
    replaced = str.replace(/L[L|T|S]{0,3}/g, (arr) => {
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
  let flag2 = false;
  let flag3 = false;
  let flag4 = false;
  let flag5 = false;
  let flag6 = false;
  let flag7 = false;
  let flag8 = false;
  let flag9 = false;
  let flag10 = false;
  let flag11 = false;
  let flag12 = false;
  let flag13 = false;
  str = replaced;
  let flag14 = false;
  let flag15 = false;
  let flag16 = false;
  let flag17 = false;
  let flag18 = false;
  let flag19 = false;
  let flag20 = false;
  let flag21 = false;
  let flag22 = false;
  let flag23 = false;
  let flag24 = false;
  let flag25 = false;
  if (replaced.length > 0) {
    str.charAt(0);
    while (true) {
      let index = str.indexOf("]");
      if (-1 === index) {
        let arr = items.push("(\"[\")");
        let substr = str.slice(1);
        let tmp27 = flag2;
        let tmp28 = flag3;
        let tmp29 = flag4;
        let tmp30 = flag5;
        let tmp31 = flag6;
        let tmp32 = flag7;
        let tmp33 = flag8;
        let tmp34 = flag9;
        let tmp35 = flag10;
        let tmp36 = flag11;
        let tmp37 = flag12;
        let tmp38 = flag13;
      } else {
        let _JSON = JSON;
        arr = items.push(`(${tmp25(str.slice(1, tmp24))})`);
        substr = str.slice(index + 1);
        tmp27 = flag2;
        tmp28 = flag3;
        tmp29 = flag4;
        tmp30 = flag5;
        tmp31 = flag6;
        tmp32 = flag7;
        tmp33 = flag8;
        tmp34 = flag9;
        tmp35 = flag10;
        tmp36 = flag11;
        tmp37 = flag12;
        tmp38 = flag13;
      }
      do {
        flag2 = tmp27;
        flag3 = tmp28;
        flag4 = tmp29;
        flag5 = tmp30;
        flag6 = tmp31;
        flag7 = tmp32;
        flag8 = tmp33;
        flag9 = tmp34;
        flag10 = tmp35;
        flag11 = tmp36;
        flag12 = tmp37;
        flag13 = tmp38;
        str = substr;
        flag14 = tmp27;
        flag15 = tmp28;
        flag16 = tmp29;
        flag17 = tmp30;
        flag18 = tmp31;
        flag19 = tmp32;
        flag20 = tmp33;
        flag21 = tmp34;
        flag22 = tmp35;
        flag23 = tmp36;
        flag24 = tmp37;
        flag25 = tmp38;
      } while (substr.length <= 0);
    }
  }
  let str2 = "";
  let str3 = "";
  if (flag23) {
    let str4 = str2;
    if (flag) {
      str4 = "UTC";
    }
    const _HermesInternal = HermesInternal;
    str3 = "var _date = d.get" + str4 + "Date();\n";
  }
  let combined = str3;
  if (flag25) {
    let str7 = str2;
    if (flag) {
      str7 = "UTC";
    }
    const _HermesInternal2 = HermesInternal;
    combined = str3 + "var _month = d.get" + str7 + "Month();\n";
  }
  let combined1 = combined;
  if (flag24) {
    let str10 = str2;
    if (flag) {
      str10 = "UTC";
    }
    let str11 = str2;
    if (flag) {
      str11 = "UTC";
    }
    const _HermesInternal3 = HermesInternal;
    combined1 = combined + "var _startOfYear = new Date(d.valueOf());\n_startOfYear.set" + str10 + "Month(0);\n_startOfYear.set" + str11 + "Date(1);\nvar _doy = Math.round((d - _startOfYear) / 864e5) + 1;\n";
  }
  let combined2 = combined1;
  if (flag22) {
    let str15 = str2;
    if (flag) {
      str15 = "UTC";
    }
    const _HermesInternal4 = HermesInternal;
    combined2 = combined1 + "var _day = d.get" + str15 + "Day();\n";
  }
  let combined3 = combined2;
  if (flag19) {
    let str18 = str2;
    if (flag) {
      str18 = "UTC";
    }
    const _HermesInternal5 = HermesInternal;
    combined3 = combined2 + "var _year = d.get" + str18 + "FullYear();\n";
  }
  let combined4 = combined3;
  if (flag18) {
    let str21 = str2;
    if (flag) {
      str21 = "UTC";
    }
    const _HermesInternal6 = HermesInternal;
    combined4 = combined3 + "var _hour = d.get" + str21 + "Hours();\n";
  }
  let combined5 = combined4;
  if (flag17) {
    let str24 = str2;
    if (flag) {
      str24 = "UTC";
    }
    const _HermesInternal7 = HermesInternal;
    combined5 = combined4 + "var _mins = d.get" + str24 + "Minutes();\n";
  }
  let combined6 = combined5;
  if (flag16) {
    let str27 = str2;
    if (flag) {
      str27 = "UTC";
    }
    const _HermesInternal8 = HermesInternal;
    combined6 = combined5 + "var _secs = d.get" + str27 + "Seconds();\n";
  }
  let combined7 = combined6;
  if (flag15) {
    let str30 = str2;
    if (flag) {
      str30 = "UTC";
    }
    const _HermesInternal9 = HermesInternal;
    combined7 = combined6 + "var _ms = d.get" + str30 + "Milliseconds();\n";
  }
  let sum = combined7;
  if (flag14) {
    let str33 = "var _offs = -d.getTimezoneOffset();\nvar _absOffs = _offs < 0 ? -_offs : _offs;\nvar _offH = Math.floor(_absOffs / 60);\nvar _offM = _absOffs % 60;\n";
    if (flag) {
      str33 = "var _offs = 0, _absOffs = 0, _offH = 0, _offM = 0;";
    }
    sum = combined7 + str33;
  }
  let combined8 = sum;
  if (flag21) {
    let str34 = str2;
    const diff = tmp.week.doy - tmp.week.dow;
    if (flag) {
      str34 = "UTC";
    }
    let str35 = str2;
    if (flag) {
      str35 = "UTC";
    }
    let str36 = str2;
    if (flag) {
      str36 = "UTC";
    }
    let str37 = str2;
    if (flag) {
      str37 = "UTC";
    }
    let str38 = str2;
    if (flag) {
      str38 = "UTC";
    }
    let str39 = str2;
    if (flag) {
      str39 = "UTC";
    }
    const _HermesInternal10 = HermesInternal;
    combined8 = sum + `var _wend = ${tmp53};
  var _ddw = ${+tmp.week.doy}` + " - d.get" + str34 + "Day();\nif(_ddw > _wend) _ddw -= 7;\nif(_ddw < _wend - 7) _ddw += 7;\nvar _d2 = new Date(d.valueOf());\n_d2.set" + str35 + "Date(d.get" + str36 + "Date() + _ddw);\nvar _soy2 = new Date(_d2.valueOf());\n_soy2.set" + str37 + "Month(0);\n_soy2.set" + str38 + "Date(1);\nvar _doy2 = Math.round((_d2 - _soy2) / 864e5) + 1;\nvar _week = Math.ceil(_doy2 / 7);\nvar _weekYear = _d2.get" + str39 + "FullYear();\n";
    const tmp54 = +tmp.week.doy;
  }
  let combined9 = combined8;
  if (flag20) {
    let str49 = str2;
    if (flag) {
      str49 = "UTC";
    }
    let str50 = str2;
    if (flag) {
      str50 = "UTC";
    }
    let str51 = str2;
    if (flag) {
      str51 = "UTC";
    }
    let str52 = str2;
    if (flag) {
      str52 = "UTC";
    }
    let str53 = str2;
    if (flag) {
      str53 = "UTC";
    }
    if (flag) {
      str2 = "UTC";
    }
    const _HermesInternal11 = HermesInternal;
    combined9 = combined8 + "var _i_wend = 3;\nvar _i_ddw = 4 - d.get" + str49 + "Day();\nif(_i_ddw > _i_wend) _i_ddw -= 7;\nif(_i_ddw < _i_wend - 7) _i_ddw += 7;\nvar _i_d2 = new Date(d.valueOf());\n_i_d2.set" + str50 + "Date(d.get" + str51 + "Date() + _i_ddw);\nvar _i_soy2 = new Date(_i_d2.valueOf());\n_i_soy2.set" + str52 + "Month(0);\n_i_soy2.set" + str53 + "Date(1);\nvar _i_doy2 = Math.round((_i_d2 - _i_soy2) / 864e5) + 1;\nvar _i_week = Math.ceil(_i_doy2 / 7);\nvar _i_weekYear = _i_d2.get" + str2 + "FullYear();\n";
  }
  _function = new Function("d", "localeData", combined9 + "return (\n\"\" +\n" + items.join(" +\n") + "\n);");
  return (input) => _function(input, closure_0);
};
export { getLocaleData };