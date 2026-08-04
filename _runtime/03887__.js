const fn = function _(moment) {
  function relativeTimeWithPlural(arg0, arg1, arg2) {
    if ("m" === arg2) {
      let str5 = "\u043C\u0438\u043D\u0443\u0442\u0443";
      if (arg1) {
        str5 = "\u043C\u0438\u043D\u0443\u0442\u0430";
      }
      let sum = str5;
    } else {
      let str = "\u0441\u0435\u043A\u0443\u043D\u0434\u0443_\u0441\u0435\u043A\u0443\u043D\u0434\u044B_\u0441\u0435\u043A\u0443\u043D\u0434";
      const text = `${arg0} `;
      if (arg1) {
        str = "\u0441\u0435\u043A\u0443\u043D\u0434\u0430_\u0441\u0435\u043A\u0443\u043D\u0434\u044B_\u0441\u0435\u043A\u0443\u043D\u0434";
      }
      const obj = { ss: null, mm: null, hh: "\u0447\u0430\u0441_\u0447\u0430\u0441\u0430_\u0447\u0430\u0441\u043E\u0432", dd: "\u0434\u0435\u043D\u044C_\u0434\u043D\u044F_\u0434\u043D\u0435\u0439", MM: "\u043C\u0435\u0441\u044F\u0446_\u043C\u0435\u0441\u044F\u0446\u0430_\u043C\u0435\u0441\u044F\u0446\u0435\u0432", yy: "\u0433\u043E\u0434_\u0433\u043E\u0434\u0430_\u043B\u0435\u0442" };
      obj[0] = str;
      let str2 = "\u043C\u0438\u043D\u0443\u0442\u0443_\u043C\u0438\u043D\u0443\u0442\u044B_\u043C\u0438\u043D\u0443\u0442";
      if (arg1) {
        str2 = "\u043C\u0438\u043D\u0443\u0442\u0430_\u043C\u0438\u043D\u0443\u0442\u044B_\u043C\u0438\u043D\u0443\u0442";
      }
      obj[1] = str2;
      const parts = obj[arg2].split("_");
      const result = tmp % 10;
      if (result === 1) {
        if (tmp % 100 !== 11) {
          let first = parts[0];
        }
        sum = text + first;
      }
      if (2 <= result) {
        if (result <= 4) {
          const result1 = tmp % 100;
          first = parts[1];
        }
      }
      first = parts[2];
      const str3 = obj[arg2];
    }
    return sum;
  }
  const items = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i];
  let obj = { months: null, monthsShort: null, weekdays: null, weekdaysShort: null, weekdaysMin: null, monthsParse: null, longMonthsParse: null, shortMonthsParse: null, monthsRegex: null, monthsShortRegex: null, monthsStrictRegex: null, monthsShortStrictRegex: null, longDateFormat: null, calendar: null, relativeTime: null, meridiemParse: null, isPM: null, meridiem: null, dayOfMonthOrdinalParse: null, ordinal: null, week: null };
  obj = { format: "\u044F\u043D\u0432\u0430\u0440\u044F_\u0444\u0435\u0432\u0440\u0430\u043B\u044F_\u043C\u0430\u0440\u0442\u0430_\u0430\u043F\u0440\u0435\u043B\u044F_\u043C\u0430\u044F_\u0438\u044E\u043D\u044F_\u0438\u044E\u043B\u044F_\u0430\u0432\u0433\u0443\u0441\u0442\u0430_\u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044F_\u043E\u043A\u0442\u044F\u0431\u0440\u044F_\u043D\u043E\u044F\u0431\u0440\u044F_\u0434\u0435\u043A\u0430\u0431\u0440\u044F".split("_"), standalone: "\u044F\u043D\u0432\u0430\u0440\u044C_\u0444\u0435\u0432\u0440\u0430\u043B\u044C_\u043C\u0430\u0440\u0442_\u0430\u043F\u0440\u0435\u043B\u044C_\u043C\u0430\u0439_\u0438\u044E\u043D\u044C_\u0438\u044E\u043B\u044C_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044C_\u043E\u043A\u0442\u044F\u0431\u0440\u044C_\u043D\u043E\u044F\u0431\u0440\u044C_\u0434\u0435\u043A\u0430\u0431\u0440\u044C".split("_") };
  obj[0] = obj;
  obj = { format: "\u044F\u043D\u0432._\u0444\u0435\u0432\u0440._\u043C\u0430\u0440._\u0430\u043F\u0440._\u043C\u0430\u044F_\u0438\u044E\u043D\u044F_\u0438\u044E\u043B\u044F_\u0430\u0432\u0433._\u0441\u0435\u043D\u0442._\u043E\u043A\u0442._\u043D\u043E\u044F\u0431._\u0434\u0435\u043A.".split("_"), standalone: "\u044F\u043D\u0432._\u0444\u0435\u0432\u0440._\u043C\u0430\u0440\u0442_\u0430\u043F\u0440._\u043C\u0430\u0439_\u0438\u044E\u043D\u044C_\u0438\u044E\u043B\u044C_\u0430\u0432\u0433._\u0441\u0435\u043D\u0442._\u043E\u043A\u0442._\u043D\u043E\u044F\u0431._\u0434\u0435\u043A.".split("_") };
  obj[1] = obj;
  obj[2] = { standalone: "\u0432\u043E\u0441\u043A\u0440\u0435\u0441\u0435\u043D\u044C\u0435_\u043F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A_\u0432\u0442\u043E\u0440\u043D\u0438\u043A_\u0441\u0440\u0435\u0434\u0430_\u0447\u0435\u0442\u0432\u0435\u0440\u0433_\u043F\u044F\u0442\u043D\u0438\u0446\u0430_\u0441\u0443\u0431\u0431\u043E\u0442\u0430".split("_"), format: "\u0432\u043E\u0441\u043A\u0440\u0435\u0441\u0435\u043D\u044C\u0435_\u043F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A_\u0432\u0442\u043E\u0440\u043D\u0438\u043A_\u0441\u0440\u0435\u0434\u0443_\u0447\u0435\u0442\u0432\u0435\u0440\u0433_\u043F\u044F\u0442\u043D\u0438\u0446\u0443_\u0441\u0443\u0431\u0431\u043E\u0442\u0443".split("_"), isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/ };
  obj[3] = "\u0432\u0441_\u043F\u043D_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043F\u0442_\u0441\u0431".split("_");
  obj[4] = "\u0432\u0441_\u043F\u043D_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043F\u0442_\u0441\u0431".split("_");
  obj[5] = items;
  obj[6] = items;
  obj[7] = items;
  obj[8] = /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i;
  obj[9] = /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i;
  obj[10] = /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i;
  obj[11] = /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i;
  obj[12] = { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY \u0433.", LLL: "D MMMM YYYY \u0433., H:mm", LLLL: "dddd, D MMMM YYYY \u0433., H:mm" };
  obj[13] = {
    sameDay: "[\u0421\u0435\u0433\u043E\u0434\u043D\u044F, \u0432] LT",
    nextDay: "[\u0417\u0430\u0432\u0442\u0440\u0430, \u0432] LT",
    lastDay: "[\u0412\u0447\u0435\u0440\u0430, \u0432] LT",
    nextWeek(week) {
      const self = this;
      if (weekResult === this.week()) {
        let str4 = "[\u0412] dddd, [\u0432] LT";
        if (2 === self.day()) {
          str4 = "[\u0412\u043E] dddd, [\u0432] LT";
        }
        return str4;
      } else {
        const dayResult = self.day();
        if (0 === dayResult) {
          return "[\u0412 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0435] dddd, [\u0432] LT";
        } else {
          if (1 !== dayResult) {
            if (2 !== dayResult) {
              if (4 !== dayResult) {
                return "[\u0412 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0443\u044E] dddd, [\u0432] LT";
              }
            }
          }
          return "[\u0412 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439] dddd, [\u0432] LT";
        }
      }
      weekResult = week.week();
    },
    lastWeek(week) {
      const self = this;
      if (weekResult === this.week()) {
        let str4 = "[\u0412] dddd, [\u0432] LT";
        if (2 === self.day()) {
          str4 = "[\u0412\u043E] dddd, [\u0432] LT";
        }
        return str4;
      } else {
        const dayResult = self.day();
        if (0 === dayResult) {
          return "[\u0412 \u043F\u0440\u043E\u0448\u043B\u043E\u0435] dddd, [\u0432] LT";
        } else {
          if (1 !== dayResult) {
            if (2 !== dayResult) {
              if (4 !== dayResult) {
                return "[\u0412 \u043F\u0440\u043E\u0448\u043B\u0443\u044E] dddd, [\u0432] LT";
              }
            }
          }
          return "[\u0412 \u043F\u0440\u043E\u0448\u043B\u044B\u0439] dddd, [\u0432] LT";
        }
      }
      weekResult = week.week();
    },
    sameElse: "L"
  };
  obj[14] = { future: "\u0447\u0435\u0440\u0435\u0437 %s", past: "%s \u043D\u0430\u0437\u0430\u0434", s: "\u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0441\u0435\u043A\u0443\u043D\u0434", ss: relativeTimeWithPlural, m: relativeTimeWithPlural, mm: relativeTimeWithPlural, h: "\u0447\u0430\u0441", hh: relativeTimeWithPlural, d: "\u0434\u0435\u043D\u044C", dd: relativeTimeWithPlural, M: "\u043C\u0435\u0441\u044F\u0446", MM: relativeTimeWithPlural, y: "\u0433\u043E\u0434", yy: relativeTimeWithPlural };
  obj[15] = /ночи|утра|дня|вечера/i;
  obj[16] = function isPM(arg0) {
    return /^(дня|вечера)$/.test(arg0);
  };
  obj[17] = function meridiem(arg0, arg1, arg2) {
    let str = "\u043D\u043E\u0447\u0438";
    if (arg0 >= 4) {
      let str2 = "\u0443\u0442\u0440\u0430";
      if (arg0 >= 12) {
        let str3 = "\u0432\u0435\u0447\u0435\u0440\u0430";
        if (arg0 < 17) {
          str3 = "\u0434\u043D\u044F";
        }
        str2 = str3;
      }
      str = str2;
    }
    return str;
  };
  obj[18] = /\d{1,2}-(й|го|я)/;
  obj[19] = function ordinal(arg0, arg1) {
    if ("M" !== arg1) {
      if ("d" !== arg1) {
        if ("DDD" !== arg1) {
          if ("D" === arg1) {
            return arg0 + "-\u0433\u043E";
          } else {
            if ("w" !== arg1) {
              if ("W" !== arg1) {
                return arg0;
              }
            }
            return arg0 + "-\u044F";
          }
        }
      }
    }
    return arg0 + "-\u0439";
  };
  obj[20] = { dow: 1, doy: 4 };
  return moment.defineLocale("ru", obj);
};
if (typeof exports !== "window") {
  if (undefined !== module) {
    if (typeof require === "find") {
      fn(require("t"));
    }
  }
}
if (typeof globalThis.define !== "three_button_mouse") {
  if (globalThis.define.amd) {
    globalThis.define(["../moment"], fn);
  }
}
fn(this.moment);