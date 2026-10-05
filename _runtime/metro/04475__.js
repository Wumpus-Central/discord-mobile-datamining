// === Module 4475: ? ===

// Module 4475
import _mod4461 from "module_4461" /* 4461 */;

const fn = function n(moment) {
  let obj4;
  function translateSingular(arg0, arg1, arg2, arg3) {
    let first;
    const str = closure_0[arg2];
    const parts = str.split("_");
    const tmp2 = arg1;
    if (tmp2) {
      first = parts[0];
    } else {
      first = arg3 ? parts[1] : parts[2];
    }
    return first;
  }
  function translate(arg0, arg1, arg2, arg3) {
    let sum;
    const text = `${arg0} `;
    if (1 === arg0) {
      let first;
      const str7 = closure_0[arg2[0]];
      const parts = str7.split("_");
      if (arg1) {
        first = parts[0];
      } else {
        first = arg3 ? parts[1] : parts[2];
      }
      sum = text + first;
    } else if (arg1) {
      const result = arg0 % 10;
      let tmp10 = result === 0;
      if (!tmp10) {
        tmp10 = arg0 > 10 && arg0 < 20;
        const tmp11 = arg0 > 10 && arg0 < 20;
      }
      const str5 = closure_0[arg2];
      const parts1 = str5.split("_");
      sum = text + (tmp10 ? parts1[1] : parts1[0]);
    } else if (arg3) {
      const str3 = closure_0[arg2];
      sum = text + str3.split("_")[1];
    } else {
      const result1 = arg0 % 10;
      let tmp3 = result1 === 0;
      if (!tmp3) {
        tmp3 = arg0 > 10 && arg0 < 20;
        const tmp4 = arg0 > 10 && arg0 < 20;
      }
      const str = closure_0[arg2];
      const parts2 = str.split("_");
      sum = text + (tmp3 ? parts2[1] : parts2[2]);
    }
    return sum;
  }
  let closure_0 = { ss: "sekund\u0117_sekund\u017Ei\u0173_sekundes", m: "minut\u0117_minut\u0117s_minut\u0119", mm: "minut\u0117s_minu\u010Di\u0173_minutes", h: "valanda_valandos_valand\u0105", hh: "valandos_valand\u0173_valandas", d: "diena_dienos_dien\u0105", dd: "dienos_dien\u0173_dienas", M: "m\u0117nuo_m\u0117nesio_m\u0117nes\u012F", MM: "m\u0117nesiai_m\u0117nesi\u0173_m\u0117nesius", y: "metai_met\u0173_metus", yy: "metai_met\u0173_metus" };
  const defineLocale = moment.defineLocale;
  const obj = {
    months: { format: "sausio_vasario_kovo_baland\u017Eio_gegu\u017E\u0117s_bir\u017Eelio_liepos_rugpj\u016B\u010Dio_rugs\u0117jo_spalio_lapkri\u010Dio_gruod\u017Eio".split("_"), standalone: "sausis_vasaris_kovas_balandis_gegu\u017E\u0117_bir\u017Eelis_liepa_rugpj\u016Btis_rugs\u0117jis_spalis_lapkritis_gruodis".split("_"), isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/ },
    monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
    weekdays: { format: "sekmadien\u012F_pirmadien\u012F_antradien\u012F_tre\u010Diadien\u012F_ketvirtadien\u012F_penktadien\u012F_\u0161e\u0161tadien\u012F".split("_"), standalone: "sekmadienis_pirmadienis_antradienis_tre\u010Diadienis_ketvirtadienis_penktadienis_\u0161e\u0161tadienis".split("_"), isFormat: /dddd HH:mm/ },
    weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_\u0160e\u0161".split("_"),
    weekdaysMin: "S_P_A_T_K_Pn_\u0160".split("_"),
    weekdaysParseExact: true,
    longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY [m.] MMMM D [d.]", LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]", LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]", l: "YYYY-MM-DD", ll: "YYYY [m.] MMMM D [d.]", lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]", llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]" },
    calendar: { sameDay: "[\u0160iandien] LT", nextDay: "[Rytoj] LT", nextWeek: "dddd LT", lastDay: "[Vakar] LT", lastWeek: "[Pra\u0117jus\u012F] dddd LT", sameElse: "L" },
    relativeTime: obj4,
    dayOfMonthOrdinalParse: /\d{1,2}-oji/,
    ordinal(arg0) {
      return arg0 + "-oji";
    },
    week: { dow: 1, doy: 4 }
  };
  ({ format: "sausio_vasario_kovo_baland\u017Eio_gegu\u017E\u0117s_bir\u017Eelio_liepos_rugpj\u016B\u010Dio_rugs\u0117jo_spalio_lapkri\u010Dio_gruod\u017Eio".split("_"), standalone: "sausis_vasaris_kovas_balandis_gegu\u017E\u0117_bir\u017Eelis_liepa_rugpj\u016Btis_rugs\u0117jis_spalis_lapkritis_gruodis".split("_"), isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/ });
  ({ format: "sekmadien\u012F_pirmadien\u012F_antradien\u012F_tre\u010Diadien\u012F_ketvirtadien\u012F_penktadien\u012F_\u0161e\u0161tadien\u012F".split("_"), standalone: "sekmadienis_pirmadienis_antradienis_tre\u010Diadienis_ketvirtadienis_penktadienis_\u0161e\u0161tadienis".split("_"), isFormat: /dddd HH:mm/ });
  obj4 = {
    future: "po %s",
    past: "prie\u0161 %s",
    s: function translateSeconds(arg0, arg1, arg2, arg3) {
      let str = "kelios sekund\u0117s";
      const tmp = arg1;
      if (!tmp) {
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
  return defineLocale("lt", obj);
};
if (typeof exports === "object") {
  if (undefined !== module) {
    if (typeof require === "function") {
      fn(_mod4461);
    }
  }
}
if (typeof globalThis.define === "function") {
  const define2 = globalThis.define;
  if (globalThis.define.amd) {
    globalThis.define(["../moment"], fn);
  }
}
fn(this.moment);