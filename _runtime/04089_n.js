// === Module 4089: n ===

// Module 4089 (n)
import hooks from "hooks" /* 4075 */;

const fn = function n(moment) {
  function translateSingular(arg0, arg1, arg2, arg3) {
    const parts = dependencyMap[arg2].split("_");
    if (arg1) {
      let first = parts[0];
    } else {
      first = arg3 ? parts[1] : parts[2];
    }
    return first;
  }
  function translate(arg0, arg1, arg2, arg3) {
    const text = `${arg0} `;
    if (1 === arg0) {
      const parts = dependencyMap[arg2[0]].split("_");
      if (arg1) {
        let first = parts[0];
      } else {
        first = arg3 ? parts[1] : parts[2];
      }
      const sum = text + first;
      const str7 = dependencyMap[arg2[0]];
    } else if (arg1) {
      const result = arg0 % 10;
      let tmp10 = result === 0;
      if (result !== 0) {
        let tmp11 = arg0 > 10;
        if (tmp11) {
          tmp11 = arg0 < 20;
        }
        tmp10 = tmp11;
      }
      const parts1 = dependencyMap[arg2].split("_");
      const sum1 = text + (tmp10 ? parts1[1] : parts1[0]);
      const str5 = dependencyMap[arg2];
    } else {
      if (arg3) {
        let sum2 = text + dependencyMap[arg2].split("_")[1];
        const str3 = dependencyMap[arg2];
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
        sum2 = text + (tmp3 ? parts2[1] : parts2[2]);
        const str = dependencyMap[arg2];
      }
      return sum2;
    }
  }
  closure_0 = { ss: "sekund\u0117_sekund\u017Ei\u0173_sekundes", m: "minut\u0117_minut\u0117s_minut\u0119", mm: "minut\u0117s_minu\u010Di\u0173_minutes", h: "valanda_valandos_valand\u0105", hh: "valandos_valand\u0173_valandas", d: "diena_dienos_dien\u0105", dd: "dienos_dien\u0173_dienas", M: "m\u0117nuo_m\u0117nesio_m\u0117nes\u012F", MM: "m\u0117nesiai_m\u0117nesi\u0173_m\u0117nesius", y: "metai_met\u0173_metus", yy: "metai_met\u0173_metus" };
  let obj = { months: null, monthsShort: null, weekdays: null, weekdaysShort: null, weekdaysMin: null, weekdaysParseExact: true, longDateFormat: null, calendar: null, relativeTime: null, dayOfMonthOrdinalParse: null, ordinal: null, week: null };
  obj = { format: "sausio_vasario_kovo_baland\u017Eio_gegu\u017E\u0117s_bir\u017Eelio_liepos_rugpj\u016B\u010Dio_rugs\u0117jo_spalio_lapkri\u010Dio_gruod\u017Eio".split("_"), standalone: "sausis_vasaris_kovas_balandis_gegu\u017E\u0117_bir\u017Eelis_liepa_rugpj\u016Btis_rugs\u0117jis_spalis_lapkritis_gruodis".split("_"), isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/ };
  obj[0] = obj;
  obj[1] = "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_");
  obj = { format: "sekmadien\u012F_pirmadien\u012F_antradien\u012F_tre\u010Diadien\u012F_ketvirtadien\u012F_penktadien\u012F_\u0161e\u0161tadien\u012F".split("_"), standalone: "sekmadienis_pirmadienis_antradienis_tre\u010Diadienis_ketvirtadienis_penktadienis_\u0161e\u0161tadienis".split("_"), isFormat: /dddd HH:mm/ };
  obj[2] = obj;
  obj[3] = "Sek_Pir_Ant_Tre_Ket_Pen_\u0160e\u0161".split("_");
  obj[4] = "S_P_A_T_K_Pn_\u0160".split("_");
  obj[6] = { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY [m.] MMMM D [d.]", LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]", LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]", l: "YYYY-MM-DD", ll: "YYYY [m.] MMMM D [d.]", lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]", llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]" };
  obj[7] = { sameDay: "[\u0160iandien] LT", nextDay: "[Rytoj] LT", nextWeek: "dddd LT", lastDay: "[Vakar] LT", lastWeek: "[Pra\u0117jus\u012F] dddd LT", sameElse: "L" };
  obj[8] = {
    future: "po %s",
    past: "prie\u0161 %s",
    s: function translateSeconds(arg0, arg1, arg2, arg3) {
      let str = "kelios sekund\u0117s";
      if (!arg1) {
        let str2 = "kelias sekundes";
        if (arg3) {
          str2 = "keli\u0173 sekund\u017Ei\u0173";
        }
        str = str2;
      }
      return str;
    },
    ss: translate,
    m: translateSingular,
    mm: translate,
    h: translateSingular,
    hh: translate,
    d: translateSingular,
    dd: translate,
    M: translateSingular,
    MM: translate,
    y: translateSingular,
    yy: translate
  };
  obj[9] = /\d{1,2}-oji/;
  obj[10] = function ordinal(arg0) {
    return arg0 + "-oji";
  };
  obj[11] = { dow: 1, doy: 4 };
  return moment.defineLocale("lt", obj);
};
if (typeof exports === "object") {
  if (undefined !== module) {
    if (typeof require === "function") {
      fn(hooks);
    }
  }
}
if (typeof globalThis.define === "function") {
  if (globalThis.define.amd) {
    globalThis.define(["../moment"], fn);
  }
}
fn(this.moment);