// _runtime/04101_formatDistance.js
const f87832 = (arg0, addSuffix) => {
  let one;
  const tmp = addSuffix;
  if (tmp) {
    if (addSuffix.addSuffix) {
      let text1;
      if (addSuffix.comparison) {
        if (addSuffix.comparison > 0) {
          let text;
          if (closure_0.future) {
            let one5;
            const future = closure_0.future;
            if (undefined !== future.one) {
              if (1 === arg0) {
                one5 = future.one;
              }
              text = one5;
            }
            const result = arg0 % 10;
            const result1 = arg0 % 100;
            if (1 === result) {
              if (11 !== result1) {
                const _String14 = String;
                const str30 = future.singularNominative;
                one5 = str30.replace("{{count}}", String(arg0));
              }
            }
            if (2 <= result) {
              if (result <= 4) {
                const _String13 = String;
                const str28 = future.singularGenitive;
                one5 = str28.replace("{{count}}", String(arg0));
              }
            }
            const _String12 = String;
            const str26 = future.pluralGenitive;
            one5 = str26.replace("{{count}}", String(arg0));
          } else {
            let one4;
            const regular3 = closure_0.regular;
            if (undefined !== regular3.one) {
              if (1 === arg0) {
                one4 = regular3.one;
              }
              text = `за ${one4}`;
            }
            const result2 = arg0 % 10;
            const result3 = arg0 % 100;
            if (1 === result2) {
              if (11 !== result3) {
                const _String11 = String;
                const str23 = regular3.singularNominative;
                one4 = str23.replace("{{count}}", String(arg0));
              }
            }
            if (2 <= result2) {
              if (result2 <= 4) {
                const _String10 = String;
                const str21 = regular3.singularGenitive;
                one4 = str21.replace("{{count}}", String(arg0));
              }
            }
            const _String9 = String;
            const str19 = regular3.pluralGenitive;
            one4 = str19.replace("{{count}}", String(arg0));
          }
          text1 = text;
        }
        one = text1;
      }
      if (closure_0.past) {
        let one3;
        const past = closure_0.past;
        if (undefined !== past.one) {
          if (1 === arg0) {
            one3 = past.one;
          }
          text1 = one3;
        }
        const result4 = arg0 % 10;
        const result5 = arg0 % 100;
        if (1 === result4) {
          if (11 !== result5) {
            const _String8 = String;
            const str17 = past.singularNominative;
            one3 = str17.replace("{{count}}", String(arg0));
          }
        }
        if (2 <= result4) {
          if (result4 <= 4) {
            const _String7 = String;
            const str15 = past.singularGenitive;
            one3 = str15.replace("{{count}}", String(arg0));
          }
        }
        const _String6 = String;
        const str13 = past.pluralGenitive;
        one3 = str13.replace("{{count}}", String(arg0));
      } else {
        let one2;
        const regular2 = closure_0.regular;
        if (undefined !== regular2.one) {
          if (1 === arg0) {
            one2 = regular2.one;
          }
          text1 = `${one2} тому`;
        }
        const result6 = arg0 % 10;
        const result7 = arg0 % 100;
        if (1 === result6) {
          if (11 !== result7) {
            const _String5 = String;
            const str10 = regular2.singularNominative;
            one2 = str10.replace("{{count}}", String(arg0));
          }
        }
        if (2 <= result6) {
          if (result6 <= 4) {
            const _String4 = String;
            const str8 = regular2.singularGenitive;
            one2 = str8.replace("{{count}}", String(arg0));
          }
        }
        const _String3 = String;
        const str6 = regular2.pluralGenitive;
        one2 = str6.replace("{{count}}", String(arg0));
      }
    }
    return one;
  }
  const regular = closure_0.regular;
  if (undefined !== regular.one) {
    if (1 === arg0) {
      one = regular.one;
    }
  }
  const result8 = arg0 % 10;
  const result9 = arg0 % 100;
  if (1 === result8) {
    if (11 !== result9) {
      const _String2 = String;
      const str4 = regular.singularNominative;
      one = str4.replace("{{count}}", String(arg0));
    }
  }
  if (2 <= result8) {
    if (result8 <= 4) {
      const _String = String;
      const str2 = regular.singularGenitive;
      one = str2.replace("{{count}}", String(arg0));
    }
  }
  const str = regular.pluralGenitive;
  one = str.replace("{{count}}", String(arg0));
};
const obj = {
  lessThanXSeconds: f87832,
  xSeconds: f87832,
  halfAMinute: function halfAtMinute(arg0, addSuffix) {
    let str = "\u043F\u0456\u0432\u0445\u0432\u0438\u043B\u0438\u043D\u0438";
    if (addSuffix) {
      str = "\u043F\u0456\u0432\u0445\u0432\u0438\u043B\u0438\u043D\u0438";
      if (addSuffix.addSuffix) {
        let str3 = "\u043F\u0456\u0432\u0445\u0432\u0438\u043B\u0438\u043D\u0438 \u0442\u043E\u043C\u0443";
        if (addSuffix.comparison) {
          str3 = "\u043F\u0456\u0432\u0445\u0432\u0438\u043B\u0438\u043D\u0438 \u0442\u043E\u043C\u0443";
          if (addSuffix.comparison > 0) {
            str3 = "\u0437\u0430 \u043F\u0456\u0432\u0445\u0432\u0438\u043B\u0438\u043D\u0438";
          }
        }
        str = str3;
      }
    }
    return str;
  },
  lessThanXMinutes: f87832,
  xMinutes: f87832,
  aboutXHours: f87832,
  xHours: f87832,
  xDays: f87832,
  aboutXWeeks: f87832,
  xWeeks: f87832,
  aboutXMonths: f87832,
  xMonths: f87832,
  aboutXYears: f87832,
  xYears: f87832,
  overXYears: f87832,
  almostXYears: f87832,
};
let closure_0 = {
  regular: {
    one: "\u043C\u0435\u043D\u0448\u0435 \u0441\u0435\u043A\u0443\u043D\u0434\u0438",
    singularNominative: "\u043C\u0435\u043D\u0448\u0435 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0438",
    singularGenitive: "\u043C\u0435\u043D\u0448\u0435 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434",
    pluralGenitive: "\u043C\u0435\u043D\u0448\u0435 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434",
  },
  future: {
    one: "\u043C\u0435\u043D\u0448\u0435, \u043D\u0456\u0436 \u0437\u0430 \u0441\u0435\u043A\u0443\u043D\u0434\u0443",
    singularNominative:
      "\u043C\u0435\u043D\u0448\u0435, \u043D\u0456\u0436 \u0437\u0430 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0443",
    singularGenitive:
      "\u043C\u0435\u043D\u0448\u0435, \u043D\u0456\u0436 \u0437\u0430 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0438",
    pluralGenitive:
      "\u043C\u0435\u043D\u0448\u0435, \u043D\u0456\u0436 \u0437\u0430 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434",
  },
};
closure_0 = {
  regular: {
    singularNominative: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0430",
    singularGenitive: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0438",
    pluralGenitive: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434",
  },
  past: {
    singularNominative: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0443 \u0442\u043E\u043C\u0443",
    singularGenitive: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0438 \u0442\u043E\u043C\u0443",
    pluralGenitive: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434 \u0442\u043E\u043C\u0443",
  },
  future: {
    singularNominative: "\u0437\u0430 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0443",
    singularGenitive: "\u0437\u0430 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0438",
    pluralGenitive: "\u0437\u0430 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434",
  },
};
closure_0 = {
  regular: {
    one: "\u043C\u0435\u043D\u0448\u0435 \u0445\u0432\u0438\u043B\u0438\u043D\u0438",
    singularNominative: "\u043C\u0435\u043D\u0448\u0435 {{count}} \u0445\u0432\u0438\u043B\u0438\u043D\u0438",
    singularGenitive: "\u043C\u0435\u043D\u0448\u0435 {{count}} \u0445\u0432\u0438\u043B\u0438\u043D",
    pluralGenitive: "\u043C\u0435\u043D\u0448\u0435 {{count}} \u0445\u0432\u0438\u043B\u0438\u043D",
  },
  future: {
    one: "\u043C\u0435\u043D\u0448\u0435, \u043D\u0456\u0436 \u0437\u0430 \u0445\u0432\u0438\u043B\u0438\u043D\u0443",
    singularNominative:
      "\u043C\u0435\u043D\u0448\u0435, \u043D\u0456\u0436 \u0437\u0430 {{count}} \u0445\u0432\u0438\u043B\u0438\u043D\u0443",
    singularGenitive:
      "\u043C\u0435\u043D\u0448\u0435, \u043D\u0456\u0436 \u0437\u0430 {{count}} \u0445\u0432\u0438\u043B\u0438\u043D\u0438",
    pluralGenitive:
      "\u043C\u0435\u043D\u0448\u0435, \u043D\u0456\u0436 \u0437\u0430 {{count}} \u0445\u0432\u0438\u043B\u0438\u043D",
  },
};
closure_0 = {
  regular: {
    singularNominative: "{{count}} \u0445\u0432\u0438\u043B\u0438\u043D\u0430",
    singularGenitive: "{{count}} \u0445\u0432\u0438\u043B\u0438\u043D\u0438",
    pluralGenitive: "{{count}} \u0445\u0432\u0438\u043B\u0438\u043D",
  },
  past: {
    singularNominative: "{{count}} \u0445\u0432\u0438\u043B\u0438\u043D\u0443 \u0442\u043E\u043C\u0443",
    singularGenitive: "{{count}} \u0445\u0432\u0438\u043B\u0438\u043D\u0438 \u0442\u043E\u043C\u0443",
    pluralGenitive: "{{count}} \u0445\u0432\u0438\u043B\u0438\u043D \u0442\u043E\u043C\u0443",
  },
  future: {
    singularNominative: "\u0437\u0430 {{count}} \u0445\u0432\u0438\u043B\u0438\u043D\u0443",
    singularGenitive: "\u0437\u0430 {{count}} \u0445\u0432\u0438\u043B\u0438\u043D\u0438",
    pluralGenitive: "\u0437\u0430 {{count}} \u0445\u0432\u0438\u043B\u0438\u043D",
  },
};
closure_0 = {
  regular: {
    singularNominative: "\u0431\u043B\u0438\u0437\u044C\u043A\u043E {{count}} \u0433\u043E\u0434\u0438\u043D\u0438",
    singularGenitive: "\u0431\u043B\u0438\u0437\u044C\u043A\u043E {{count}} \u0433\u043E\u0434\u0438\u043D",
    pluralGenitive: "\u0431\u043B\u0438\u0437\u044C\u043A\u043E {{count}} \u0433\u043E\u0434\u0438\u043D",
  },
  future: {
    singularNominative:
      "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u043D\u043E \u0437\u0430 {{count}} \u0433\u043E\u0434\u0438\u043D\u0443",
    singularGenitive:
      "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u043D\u043E \u0437\u0430 {{count}} \u0433\u043E\u0434\u0438\u043D\u0438",
    pluralGenitive:
      "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u043D\u043E \u0437\u0430 {{count}} \u0433\u043E\u0434\u0438\u043D",
  },
};
closure_0 = {
  regular: {
    singularNominative: "{{count}} \u0433\u043E\u0434\u0438\u043D\u0443",
    singularGenitive: "{{count}} \u0433\u043E\u0434\u0438\u043D\u0438",
    pluralGenitive: "{{count}} \u0433\u043E\u0434\u0438\u043D",
  },
};
closure_0 = {
  regular: {
    singularNominative: "{{count}} \u0434\u0435\u043D\u044C",
    singularGenitive: "{{count}} \u0434\u043Di",
    pluralGenitive: "{{count}} \u0434\u043D\u0456\u0432",
  },
};
closure_0 = {
  regular: {
    singularNominative: "\u0431\u043B\u0438\u0437\u044C\u043A\u043E {{count}} \u0442\u0438\u0436\u043D\u044F",
    singularGenitive: "\u0431\u043B\u0438\u0437\u044C\u043A\u043E {{count}} \u0442\u0438\u0436\u043D\u0456\u0432",
    pluralGenitive: "\u0431\u043B\u0438\u0437\u044C\u043A\u043E {{count}} \u0442\u0438\u0436\u043D\u0456\u0432",
  },
  future: {
    singularNominative:
      "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u043D\u043E \u0437\u0430 {{count}} \u0442\u0438\u0436\u0434\u0435\u043D\u044C",
    singularGenitive:
      "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u043D\u043E \u0437\u0430 {{count}} \u0442\u0438\u0436\u043D\u0456",
    pluralGenitive:
      "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u043D\u043E \u0437\u0430 {{count}} \u0442\u0438\u0436\u043D\u0456\u0432",
  },
};
closure_0 = {
  regular: {
    singularNominative: "{{count}} \u0442\u0438\u0436\u0434\u0435\u043D\u044C",
    singularGenitive: "{{count}} \u0442\u0438\u0436\u043D\u0456",
    pluralGenitive: "{{count}} \u0442\u0438\u0436\u043D\u0456\u0432",
  },
};
closure_0 = {
  regular: {
    singularNominative: "\u0431\u043B\u0438\u0437\u044C\u043A\u043E {{count}} \u043C\u0456\u0441\u044F\u0446\u044F",
    singularGenitive: "\u0431\u043B\u0438\u0437\u044C\u043A\u043E {{count}} \u043C\u0456\u0441\u044F\u0446\u0456\u0432",
    pluralGenitive: "\u0431\u043B\u0438\u0437\u044C\u043A\u043E {{count}} \u043C\u0456\u0441\u044F\u0446\u0456\u0432",
  },
  future: {
    singularNominative:
      "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u043D\u043E \u0437\u0430 {{count}} \u043C\u0456\u0441\u044F\u0446\u044C",
    singularGenitive:
      "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u043D\u043E \u0437\u0430 {{count}} \u043C\u0456\u0441\u044F\u0446\u0456",
    pluralGenitive:
      "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u043D\u043E \u0437\u0430 {{count}} \u043C\u0456\u0441\u044F\u0446\u0456\u0432",
  },
};
closure_0 = {
  regular: {
    singularNominative: "{{count}} \u043C\u0456\u0441\u044F\u0446\u044C",
    singularGenitive: "{{count}} \u043C\u0456\u0441\u044F\u0446\u0456",
    pluralGenitive: "{{count}} \u043C\u0456\u0441\u044F\u0446\u0456\u0432",
  },
};
closure_0 = {
  regular: {
    singularNominative: "\u0431\u043B\u0438\u0437\u044C\u043A\u043E {{count}} \u0440\u043E\u043A\u0443",
    singularGenitive: "\u0431\u043B\u0438\u0437\u044C\u043A\u043E {{count}} \u0440\u043E\u043A\u0456\u0432",
    pluralGenitive: "\u0431\u043B\u0438\u0437\u044C\u043A\u043E {{count}} \u0440\u043E\u043A\u0456\u0432",
  },
  future: {
    singularNominative:
      "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u043D\u043E \u0437\u0430 {{count}} \u0440\u0456\u043A",
    singularGenitive:
      "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u043D\u043E \u0437\u0430 {{count}} \u0440\u043E\u043A\u0438",
    pluralGenitive:
      "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u043D\u043E \u0437\u0430 {{count}} \u0440\u043E\u043A\u0456\u0432",
  },
};
closure_0 = {
  regular: {
    singularNominative: "{{count}} \u0440\u0456\u043A",
    singularGenitive: "{{count}} \u0440\u043E\u043A\u0438",
    pluralGenitive: "{{count}} \u0440\u043E\u043A\u0456\u0432",
  },
};
closure_0 = {
  regular: {
    singularNominative: "\u0431\u0456\u043B\u044C\u0448\u0435 {{count}} \u0440\u043E\u043A\u0443",
    singularGenitive: "\u0431\u0456\u043B\u044C\u0448\u0435 {{count}} \u0440\u043E\u043A\u0456\u0432",
    pluralGenitive: "\u0431\u0456\u043B\u044C\u0448\u0435 {{count}} \u0440\u043E\u043A\u0456\u0432",
  },
  future: {
    singularNominative:
      "\u0431\u0456\u043B\u044C\u0448\u0435, \u043D\u0456\u0436 \u0437\u0430 {{count}} \u0440\u0456\u043A",
    singularGenitive:
      "\u0431\u0456\u043B\u044C\u0448\u0435, \u043D\u0456\u0436 \u0437\u0430 {{count}} \u0440\u043E\u043A\u0438",
    pluralGenitive:
      "\u0431\u0456\u043B\u044C\u0448\u0435, \u043D\u0456\u0436 \u0437\u0430 {{count}} \u0440\u043E\u043A\u0456\u0432",
  },
};
closure_0 = {
  regular: {
    singularNominative: "\u043C\u0430\u0439\u0436\u0435 {{count}} \u0440\u0456\u043A",
    singularGenitive: "\u043C\u0430\u0439\u0436\u0435 {{count}} \u0440\u043E\u043A\u0438",
    pluralGenitive: "\u043C\u0430\u0439\u0436\u0435 {{count}} \u0440\u043E\u043A\u0456\u0432",
  },
  future: {
    singularNominative: "\u043C\u0430\u0439\u0436\u0435 \u0437\u0430 {{count}} \u0440\u0456\u043A",
    singularGenitive: "\u043C\u0430\u0439\u0436\u0435 \u0437\u0430 {{count}} \u0440\u043E\u043A\u0438",
    pluralGenitive: "\u043C\u0430\u0439\u0436\u0435 \u0437\u0430 {{count}} \u0440\u043E\u043A\u0456\u0432",
  },
};

export default function formatDistance(arg0, arg1, arg2) {
  const tmp = arg2 || {};
  return obj[arg0](arg1, tmp);
}
