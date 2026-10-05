// _runtime/04041_formatDistance.js
let closure_0 = {
  xseconds_other: "sekund\u0117_sekund\u017Ei\u0173_sekundes",
  xminutes_one: "minut\u0117_minut\u0117s_minut\u0119",
  xminutes_other: "minut\u0117s_minu\u010Di\u0173_minutes",
  xhours_one: "valanda_valandos_valand\u0105",
  xhours_other: "valandos_valand\u0173_valandas",
  xdays_one: "diena_dienos_dien\u0105",
  xdays_other: "dienos_dien\u0173_dienas",
  xweeks_one: "savait\u0117_savait\u0117s_savait\u0119",
  xweeks_other: "savait\u0117s_savai\u010Di\u0173_savaites",
  xmonths_one: "m\u0117nuo_m\u0117nesio_m\u0117nes\u012F",
  xmonths_other: "m\u0117nesiai_m\u0117nesi\u0173_m\u0117nesius",
  xyears_one: "metai_met\u0173_metus",
  xyears_other: "metai_met\u0173_metus",
  about: "apie",
  over: "daugiau nei",
  almost: "beveik",
  lessthan: "ma\u017Eiau nei",
};
function translateSeconds(arg0, arg1, arg2, arg3) {
  let str = "kelios sekund\u0117s";
  const tmp = arg1;
  if (tmp) {
    let str2 = "kelias sekundes";
    if (arg3) {
      str2 = "keli\u0173 sekund\u017Ei\u0173";
    }
    str = str2;
  }
  return str;
}
function translateSingular(arg0, arg1, arg2, arg3) {
  let first;
  const str = closure_0[arg2];
  const parts = str.split("_");
  const tmp2 = arg1;
  if (tmp2) {
    first = arg3 ? parts[1] : parts[2];
  } else {
    first = parts[0];
  }
  return first;
}
function translate(arg0, arg1, arg2, arg3) {
  let sum;
  const text = `${arg0} `;
  if (1 === arg0) {
    if (typeof translateSingular === "function") {
      let first;
      const str7 = closure_0[arg2];
      const parts = str7.split("_");
      if (arg1) {
        first = arg3 ? parts[1] : parts[2];
      } else {
        first = parts[0];
      }
      sum = text + first;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else if (arg1) {
    let sum1;
    if (arg3) {
      const str5 = closure_0[arg2];
      sum1 = text + str5.split("_")[1];
    } else {
      const result = arg0 % 10;
      let tmp9 = result === 0;
      if (!tmp9) {
        tmp9 = arg0 > 10 && arg0 < 20;
        const tmp10 = arg0 > 10 && arg0 < 20;
      }
      const str3 = closure_0[arg2];
      const parts1 = str3.split("_");
      sum1 = text + (tmp9 ? parts1[1] : parts1[2]);
    }
    sum = sum1;
  } else {
    const result1 = arg0 % 10;
    let tmp3 = result1 === 0;
    if (!tmp3) {
      tmp3 = arg0 > 10 && arg0 < 20;
      const tmp4 = arg0 > 10 && arg0 < 20;
    }
    const str = closure_0[arg2];
    const parts2 = str.split("_");
    sum = text + (tmp3 ? parts2[1] : parts2[0]);
  }
  return sum;
}
const obj = {
  lessThanXSeconds: { one: translateSeconds, other: translate },
  xSeconds: { one: translateSeconds, other: translate },
  halfAMinute: "pus\u0117 minut\u0117s",
  lessThanXMinutes: { one: translateSingular, other: translate },
  xMinutes: { one: translateSingular, other: translate },
  aboutXHours: { one: translateSingular, other: translate },
  xHours: { one: translateSingular, other: translate },
  xDays: { one: translateSingular, other: translate },
  aboutXWeeks: { one: translateSingular, other: translate },
  xWeeks: { one: translateSingular, other: translate },
  aboutXMonths: { one: translateSingular, other: translate },
  xMonths: { one: translateSingular, other: translate },
  aboutXYears: { one: translateSingular, other: translate },
  xYears: { one: translateSingular, other: translate },
  overXYears: { one: translateSingular, other: translate },
  almostXYears: { one: translateSingular, other: translate },
};

export default function formatDistance(str, play, comparison) {
  const match = str.match(/about|over|almost|lessthan/i);
  if (match) {
    str = str.replace(match[0], "");
  }
  comparison = undefined;
  if (null != comparison) {
    comparison = comparison.comparison;
  }
  let tmp5 = tmp4;
  if (typeof obj[str] !== "string") {
    let oneResult;
    if (1 === play) {
      let addSuffix;
      const one = tmp4.one;
      if (null != comparison) {
        addSuffix = comparison.addSuffix;
      }
      oneResult = one(play, true === addSuffix, `${str.toLowerCase()}_one`, tmp3);
    } else {
      let addSuffix1;
      const other = tmp4.other;
      if (null != comparison) {
        addSuffix1 = comparison.addSuffix;
      }
      oneResult = other(play, true === addSuffix1, `${str.toLowerCase()}_other`, tmp3);
    }
    tmp5 = oneResult;
  }
  let text = tmp5;
  if (match) {
    text = `${closure_0[str5.toLowerCase(str5)]} ${tmp5}`;
  }
  let tmp17 = text;
  if (null != comparison) {
    tmp17 = text;
    if (comparison.addSuffix) {
      if (comparison.comparison) {
        let text1;
        if (comparison.comparison > 0) {
          text1 = `po ${tmp15}`;
        }
        tmp17 = text1;
      }
      text1 = `prieš ${tmp15}`;
    }
  }
  return tmp17;
}
