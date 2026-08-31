// === Module 3625: translateSeconds ===

// Module 3625 (translateSeconds)
let closure_0 = { xseconds_other: "sekund\u0117_sekund\u017Ei\u0173_sekundes", xminutes_one: "minut\u0117_minut\u0117s_minut\u0119", xminutes_other: "minut\u0117s_minu\u010Di\u0173_minutes", xhours_one: "valanda_valandos_valand\u0105", xhours_other: "valandos_valand\u0173_valandas", xdays_one: "diena_dienos_dien\u0105", xdays_other: "dienos_dien\u0173_dienas", xweeks_one: "savait\u0117_savait\u0117s_savait\u0119", xweeks_other: "savait\u0117s_savai\u010Di\u0173_savaites", xmonths_one: "m\u0117nuo_m\u0117nesio_m\u0117nes\u012F", xmonths_other: "m\u0117nesiai_m\u0117nesi\u0173_m\u0117nesius", xyears_one: "metai_met\u0173_metus", xyears_other: "metai_met\u0173_metus", about: "apie", over: "daugiau nei", almost: "beveik", lessthan: "ma\u017Eiau nei" };
function translateSeconds(arg0, arg1, arg2, arg3) {
  let str = "kelios sekund\u0117s";
  if (arg1) {
    let str2 = "kelias sekundes";
    if (arg3) {
      str2 = "keli\u0173 sekund\u017Ei\u0173";
    }
    str = str2;
  }
  return str;
}
function translateSingular(arg0, arg1, arg2, arg3) {
  const parts = dependencyMap[arg2].split("_");
  if (!arg1) {
    return parts[0];
  }
}
function translate(arg0, arg1, arg2, arg3) {
  const text = `${arg0} `;
  if (1 === arg0) {
    if (typeof translateSingular !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const parts = dependencyMap[arg2].split("_");
    if (!arg1) {
      const sum = text + parts[0];
    }
    const str7 = dependencyMap[arg2];
  } else if (arg1) {
    if (arg3) {
      let sum1 = text + dependencyMap[arg2].split("_")[1];
      const str5 = dependencyMap[arg2];
    } else {
      const result = arg0 % 10;
      let tmp8 = result === 0;
      if (result !== 0) {
        let tmp9 = arg0 > 10;
        if (tmp9) {
          tmp9 = arg0 < 20;
        }
        tmp8 = tmp9;
      }
      const parts1 = dependencyMap[arg2].split("_");
      sum1 = text + (tmp8 ? parts1[1] : parts1[2]);
      const str3 = dependencyMap[arg2];
    }
  } else {
    const result1 = arg0 % 10;
    let tmp3 = result1 === 0;
    if (result1 !== 0) {
      let tmp4 = arg0 > 10;
      if (tmp4) {
        tmp4 = arg0 < 20;
      }
      tmp3 = tmp4;
    }
    const parts2 = dependencyMap[arg2].split("_");
    return text + (tmp3 ? parts2[1] : parts2[0]);
  }
}
let closure_2 = { lessThanXSeconds: { one: translateSeconds, other: translate }, xSeconds: { one: translateSeconds, other: translate }, halfAMinute: "pus\u0117 minut\u0117s", lessThanXMinutes: { one: translateSingular, other: translate }, xMinutes: { one: translateSingular, other: translate }, aboutXHours: { one: translateSingular, other: translate }, xHours: { one: translateSingular, other: translate }, xDays: { one: translateSingular, other: translate }, aboutXWeeks: { one: translateSingular, other: translate }, xWeeks: { one: translateSingular, other: translate }, aboutXMonths: { one: translateSingular, other: translate }, xMonths: { one: translateSingular, other: translate }, aboutXYears: { one: translateSingular, other: translate }, xYears: { one: translateSingular, other: translate }, overXYears: { one: translateSingular, other: translate }, almostXYears: { one: translateSingular, other: translate } };

export default function formatDistance(str, play, comparison) {
  const match = str.match(/about|over|almost|lessthan/i);
  if (match) {
    str = str.replace(match[0], "");
  }
  comparison = undefined;
  if (null != comparison) {
    comparison = comparison.comparison;
  }
  let tmp3 = undefined !== comparison;
  if (tmp3) {
    tmp3 = comparison.comparison > 0;
  }
  if (typeof table[str] === "string") {
    let text = obj;
    if (match) {
      text = `${closure_0[str5.toLowerCase(str5)]} ${obj}`;
    }
    let tmp16 = text;
    if (null != comparison) {
      tmp16 = text;
      if (comparison.addSuffix) {
        if (!comparison.comparison) {
          let text1 = `prieš ${tmp14}`;
        }
        text1 = `po ${tmp14}`;
      }
    }
    return tmp16;
  } else if (1 === play) {
    let addSuffix;
    if (null != comparison) {
      addSuffix = comparison.addSuffix;
    }
    str = str.toLowerCase();
    let oneResult = obj.one(play, true === addSuffix, `${str}_one`, tmp3);
  } else {
    let addSuffix1;
    if (null != comparison) {
      addSuffix1 = comparison.addSuffix;
    }
    oneResult = obj.other(play, true === addSuffix1, `${str.toLowerCase()}_other`, tmp3);
  }
};
export default exports.default;