// === Module 4154: ? ===

// Module 4154
import _mod4153 from "module_4153" /* 4153 */;

const fn = function t(moment) {
  function translate(arg0, arg1, arg2, arg3) {
    const text = `${arg0} `;
    switch (arg2) {
      case "s":
        if (arg1) {
          let str20 = "p\u00E1r sekund";
        } else {
          str20 = "p\u00E1r sekundami";
        }
        return str20;
      case "ss":
        if (!arg1) {
          if (!arg3) {
            let text1 = `${tmp}sekundami`;
          }
          return text1;
        }
        let tmp13 = arg0 > 1;
        if (tmp13) {
          tmp13 = arg0 < 5;
        }
        if (tmp13) {
          tmp13 = 1 !== ~~arg0 / 10;
        }
        let str19 = "sekund";
        if (tmp13) {
          str19 = "sekundy";
        }
        text1 = text + str19;
      break;
      case "m":
        let str16 = "minuta";
        if (!arg1) {
          let str17 = "minutou";
          if (arg3) {
            str17 = "minutu";
          }
          str16 = str17;
        }
        return str16;
      case "mm":
        if (!arg1) {
          if (!arg3) {
            let text2 = `${tmp}minutami`;
          }
          return text2;
        }
        let tmp11 = arg0 > 1;
        if (tmp11) {
          tmp11 = arg0 < 5;
        }
        if (tmp11) {
          tmp11 = 1 !== ~~arg0 / 10;
        }
        let str15 = "minut";
        if (tmp11) {
          str15 = "minuty";
        }
        text2 = text + str15;
      break;
      case "h":
        let str12 = "hodina";
        if (!arg1) {
          let str13 = "hodinou";
          if (arg3) {
            str13 = "hodinu";
          }
          str12 = str13;
        }
        return str12;
      case "hh":
        if (!arg1) {
          if (!arg3) {
            let text3 = `${tmp}hodinami`;
          }
          return text3;
        }
        let tmp9 = arg0 > 1;
        if (tmp9) {
          tmp9 = arg0 < 5;
        }
        if (tmp9) {
          tmp9 = 1 !== ~~arg0 / 10;
        }
        let str11 = "hodin";
        if (tmp9) {
          str11 = "hodiny";
        }
        text3 = text + str11;
      break;
      case "d":
        if (arg1) {
          let str9 = "den";
        } else {
          str9 = "dnem";
        }
        return str9;
      case "dd":
        if (!arg1) {
          if (!arg3) {
            let text4 = `${tmp}dny`;
          }
          return text4;
        }
        let tmp7 = arg0 > 1;
        if (tmp7) {
          tmp7 = arg0 < 5;
        }
        if (tmp7) {
          tmp7 = 1 !== ~~arg0 / 10;
        }
        let str8 = "dn\u00ED";
        if (tmp7) {
          str8 = "dny";
        }
        text4 = text + str8;
      break;
      case "M":
        if (arg1) {
          let str6 = "m\u011Bs\u00EDc";
        } else {
          str6 = "m\u011Bs\u00EDcem";
        }
        return str6;
      case "MM":
        if (!arg1) {
          if (!arg3) {
            let text5 = `${tmp}měsíci`;
          }
          return text5;
        }
        let tmp5 = arg0 > 1;
        if (tmp5) {
          tmp5 = arg0 < 5;
        }
        if (tmp5) {
          tmp5 = 1 !== ~~arg0 / 10;
        }
        let str5 = "m\u011Bs\u00EDc\u016F";
        if (tmp5) {
          str5 = "m\u011Bs\u00EDce";
        }
        text5 = text + str5;
      break;
      case "y":
        if (arg1) {
          let str3 = "rok";
        } else {
          str3 = "rokem";
        }
        return str3;
      case "yy":
        if (!arg1) {
          if (!arg3) {
            let text6 = `${tmp}lety`;
          }
          return text6;
        }
        let tmp3 = arg0 > 1;
        if (tmp3) {
          tmp3 = arg0 < 5;
        }
        if (tmp3) {
          tmp3 = 1 !== ~~arg0 / 10;
        }
        let str2 = "let";
        if (tmp3) {
          str2 = "roky";
        }
        text6 = text + str2;
      break;
      default:
    }
  }
  let obj = { standalone: "leden_\u00FAnor_b\u0159ezen_duben_kv\u011Bten_\u010Derven_\u010Dervenec_srpen_z\u00E1\u0159\u00ED_\u0159\u00EDjen_listopad_prosinec".split("_"), format: "ledna_\u00FAnora_b\u0159ezna_dubna_kv\u011Btna_\u010Dervna_\u010Dervence_srpna_z\u00E1\u0159\u00ED_\u0159\u00EDjna_listopadu_prosince".split("_"), isFormat: /DD?[o.]?(\[[^\[\]]*\]|\s)+MMMM/ };
  const items = [/^led/i, /^úno/i, /^bře/i, /^dub/i, /^kvě/i, /^(čvn|červen$|června)/i, /^(čvc|červenec|července)/i, /^srp/i, /^zář/i, /^říj/i, /^lis/i, /^pro/i];
  const tmp = /^(leden|únor|březen|duben|květen|červenec|července|červen|června|srpen|září|říjen|listopad|prosinec|led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i;
  obj = {
    months: obj,
    monthsShort: "led_\u00FAno_b\u0159e_dub_kv\u011B_\u010Dvn_\u010Dvc_srp_z\u00E1\u0159_\u0159\u00EDj_lis_pro".split("_"),
    monthsRegex: tmp,
    monthsShortRegex: tmp,
    monthsStrictRegex: /^(leden|ledna|února|únor|březen|března|duben|dubna|květen|května|červenec|července|červen|června|srpen|srpna|září|říjen|října|listopadu|listopad|prosinec|prosince)/i,
    monthsShortStrictRegex: /^(led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i,
    monthsParse: items,
    longMonthsParse: items,
    shortMonthsParse: items,
    weekdays: "ned\u011Ble_pond\u011Bl\u00ED_\u00FAter\u00FD_st\u0159eda_\u010Dtvrtek_p\u00E1tek_sobota".split("_"),
    weekdaysShort: "ne_po_\u00FAt_st_\u010Dt_p\u00E1_so".split("_"),
    weekdaysMin: "ne_po_\u00FAt_st_\u010Dt_p\u00E1_so".split("_"),
    longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd D. MMMM YYYY H:mm", l: "D. M. YYYY" },
    calendar: {
      sameDay: "[dnes v] LT",
      nextDay: "[z\u00EDtra v] LT",
      nextWeek() {
        const dayResult = this.day();
        if (0 === dayResult) {
          return "[v ned\u011Bli v] LT";
        } else {
          if (1 !== dayResult) {
            if (2 !== dayResult) {
              if (3 === dayResult) {
                return "[ve st\u0159edu v] LT";
              } else if (4 === dayResult) {
                return "[ve \u010Dtvrtek v] LT";
              } else if (5 === dayResult) {
                return "[v p\u00E1tek v] LT";
              } else if (6 === dayResult) {
                return "[v sobotu v] LT";
              }
            }
          }
          return "[v] dddd [v] LT";
        }
      },
      lastDay: "[v\u010Dera v] LT",
      lastWeek() {
        const dayResult = this.day();
        if (0 === dayResult) {
          return "[minulou ned\u011Bli v] LT";
        } else {
          if (1 !== dayResult) {
            if (2 !== dayResult) {
              if (3 === dayResult) {
                return "[minulou st\u0159edu v] LT";
              } else {
                if (4 !== dayResult) {
                  if (5 !== dayResult) {
                    if (6 === dayResult) {
                      return "[minulou sobotu v] LT";
                    }
                  }
                }
                return "[minul\u00FD] dddd [v] LT";
              }
            }
          }
          return "[minul\u00E9] dddd [v] LT";
        }
      },
      sameElse: "L"
    },
    relativeTime: { future: "za %s", past: "p\u0159ed %s", s: translate, ss: translate, m: translate, mm: translate, h: translate, hh: translate, d: translate, dd: translate, M: translate, MM: translate, y: translate, yy: translate },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: "%d.",
    week: { dow: 1, doy: 4 }
  };
  ({ split, split: split2 } = "ne_po_\u00FAt_st_\u010Dt_p\u00E1_so");
  return moment.defineLocale("cs", obj);
};
if (typeof exports === "object") {
  if (undefined !== module) {
    if (typeof require === "function") {
      fn(_mod4153);
    }
  }
}
if (typeof globalThis.define === "function") {
  if (globalThis.define.amd) {
    globalThis.define(["../moment"], fn);
  }
}
fn(this.moment);