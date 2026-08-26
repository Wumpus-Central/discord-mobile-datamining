// === Module 3546: buildLocalizeFn ===

// Module 3546 (buildLocalizeFn)
import buildLocalizeFn from "buildLocalizeFn" /* 2004 */;

if (!buildLocalizeFn) {
  let obj = { default: null };
  obj[0] = buildLocalizeFn;
} else {
  obj = buildLocalizeFn;
}
obj = {
  ordinalNumber(arg0, unit) {
    const NumberResult = Number(arg0);
    if (null != unit) {
      unit = unit.unit;
    }
    if (0 === NumberResult) {
      let str49 = "\u0435\u0432\u043E";
      if ("quarter" !== unit) {
        let tmp9 = "year" === unit;
        if (!tmp9) {
          tmp9 = "week" === unit;
        }
        if (!tmp9) {
          tmp9 = "minute" === unit;
        }
        if (!tmp9) {
          tmp9 = "second" === unit;
        }
        let str55 = "\u0435\u0432";
        if (tmp9) {
          str55 = "\u0435\u0432\u0430";
        }
        str49 = str55;
      }
      return "-" + str49;
    } else if (NumberResult % 1000 === 0) {
      let str41 = "\u043D\u043E";
      if ("quarter" !== unit) {
        let tmp8 = "year" === unit;
        if (!tmp8) {
          tmp8 = "week" === unit;
        }
        if (!tmp8) {
          tmp8 = "minute" === unit;
        }
        if (!tmp8) {
          tmp8 = "second" === unit;
        }
        let str47 = "\u0435\u043D";
        if (tmp8) {
          str47 = "\u043D\u0430";
        }
        str41 = str47;
      }
      return NumberResult + "-" + str41;
    } else if (NumberResult % 100 === 0) {
      let str33 = "\u0442\u043D\u043E";
      if ("quarter" !== unit) {
        let tmp7 = "year" === unit;
        if (!tmp7) {
          tmp7 = "week" === unit;
        }
        if (!tmp7) {
          tmp7 = "minute" === unit;
        }
        if (!tmp7) {
          tmp7 = "second" === unit;
        }
        let str39 = "\u0442\u0435\u043D";
        if (tmp7) {
          str39 = "\u0442\u043D\u0430";
        }
        str33 = str39;
      }
      return NumberResult + "-" + str33;
    } else {
      const result = NumberResult % 100;
      if (20 < result) {
        const result1 = result % 10;
        if (1 === result1) {
          let str25 = "\u0432\u043E";
          if ("quarter" !== unit) {
            let tmp6 = "year" === unit;
            if (!tmp6) {
              tmp6 = "week" === unit;
            }
            if (!tmp6) {
              tmp6 = "minute" === unit;
            }
            if (!tmp6) {
              tmp6 = "second" === unit;
            }
            let str31 = "\u0432\u0438";
            if (tmp6) {
              str31 = "\u0432\u0430";
            }
            str25 = str31;
          }
          return NumberResult + "-" + str25;
        } else if (2 === result1) {
          let str17 = "\u0440\u043E";
          if ("quarter" !== unit) {
            let tmp5 = "year" === unit;
            if (!tmp5) {
              tmp5 = "week" === unit;
            }
            if (!tmp5) {
              tmp5 = "minute" === unit;
            }
            if (!tmp5) {
              tmp5 = "second" === unit;
            }
            let str23 = "\u0440\u0438";
            if (tmp5) {
              str23 = "\u0440\u0430";
            }
            str17 = str23;
          }
          return NumberResult + "-" + str17;
        } else {
          let str9 = "\u043C\u043E";
          if ("quarter" !== unit) {
            let tmp4 = "year" === unit;
            if (!tmp4) {
              tmp4 = "week" === unit;
            }
            if (!tmp4) {
              tmp4 = "minute" === unit;
            }
            if (!tmp4) {
              tmp4 = "second" === unit;
            }
            let str15 = "\u043C\u0438";
            if (tmp4) {
              str15 = "\u043C\u0430";
            }
            str9 = str15;
          }
          return NumberResult + "-" + str9;
        }
      }
      let str = "\u0442\u043E";
      if ("quarter" !== unit) {
        let tmp3 = "year" === unit;
        if (!tmp3) {
          tmp3 = "week" === unit;
        }
        if (!tmp3) {
          tmp3 = "minute" === unit;
        }
        if (!tmp3) {
          tmp3 = "second" === unit;
        }
        let str7 = "\u0442\u0438";
        if (tmp3) {
          str7 = "\u0442\u0430";
        }
        str = str7;
      }
      return NumberResult + "-" + str;
    }
  },
  era: obj.default({ values: { narrow: ["\u043F\u0440.\u043D.\u0435.", "\u043D.\u0435."], abbreviated: ["\u043F\u0440\u0435\u0434\u0438 \u043D. \u0435.", "\u043D. \u0435."], wide: ["\u043F\u0440\u0435\u0434\u0438 \u043D\u043E\u0432\u0430\u0442\u0430 \u0435\u0440\u0430", "\u043D\u043E\u0432\u0430\u0442\u0430 \u0435\u0440\u0430"] }, defaultWidth: "wide" }),
  quarter: obj.default(obj1),
  month: obj.default({ values: { abbreviated: ["\u044F\u043D\u0443", "\u0444\u0435\u0432", "\u043C\u0430\u0440", "\u0430\u043F\u0440", "\u043C\u0430\u0439", "\u044E\u043D\u0438", "\u044E\u043B\u0438", "\u0430\u0432\u0433", "\u0441\u0435\u043F", "\u043E\u043A\u0442", "\u043D\u043E\u0435", "\u0434\u0435\u043A"], wide: ["\u044F\u043D\u0443\u0430\u0440\u0438", "\u0444\u0435\u0432\u0440\u0443\u0430\u0440\u0438", "\u043C\u0430\u0440\u0442", "\u0430\u043F\u0440\u0438\u043B", "\u043C\u0430\u0439", "\u044E\u043D\u0438", "\u044E\u043B\u0438", "\u0430\u0432\u0433\u0443\u0441\u0442", "\u0441\u0435\u043F\u0442\u0435\u043C\u0432\u0440\u0438", "\u043E\u043A\u0442\u043E\u043C\u0432\u0440\u0438", "\u043D\u043E\u0435\u043C\u0432\u0440\u0438", "\u0434\u0435\u043A\u0435\u043C\u0432\u0440\u0438"] }, defaultWidth: "wide" }),
  day: obj.default({ values: { narrow: ["\u041D", "\u041F", "\u0412", "\u0421", "\u0427", "\u041F", "\u0421"], short: ["\u043D\u0434", "\u043F\u043D", "\u0432\u0442", "\u0441\u0440", "\u0447\u0442", "\u043F\u0442", "\u0441\u0431"], abbreviated: ["\u043D\u0435\u0434", "\u043F\u043E\u043D", "\u0432\u0442\u043E", "\u0441\u0440\u044F", "\u0447\u0435\u0442", "\u043F\u0435\u0442", "\u0441\u044A\u0431"], wide: ["\u043D\u0435\u0434\u0435\u043B\u044F", "\u043F\u043E\u043D\u0435\u0434\u0435\u043B\u043D\u0438\u043A", "\u0432\u0442\u043E\u0440\u043D\u0438\u043A", "\u0441\u0440\u044F\u0434\u0430", "\u0447\u0435\u0442\u0432\u044A\u0440\u0442\u044A\u043A", "\u043F\u0435\u0442\u044A\u043A", "\u0441\u044A\u0431\u043E\u0442\u0430"] }, defaultWidth: "wide" }),
  dayPeriod: obj.default({ values: { wide: { am: "\u043F\u0440\u0435\u0434\u0438 \u043E\u0431\u044F\u0434", pm: "\u0441\u043B\u0435\u0434 \u043E\u0431\u044F\u0434", midnight: "\u0432 \u043F\u043E\u043B\u0443\u043D\u043E\u0449", noon: "\u043D\u0430 \u043E\u0431\u044F\u0434", morning: "\u0441\u0443\u0442\u0440\u0438\u043D\u0442\u0430", afternoon: "\u0441\u043B\u0435\u0434\u043E\u0431\u0435\u0434", evening: "\u0432\u0435\u0447\u0435\u0440\u0442\u0430", night: "\u043F\u0440\u0435\u0437 \u043D\u043E\u0449\u0442\u0430" } }, defaultWidth: "wide" })
};

export default obj;
export default exports.default;