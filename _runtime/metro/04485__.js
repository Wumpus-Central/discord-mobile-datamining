// === Module 4485: ? ===

// Module 4485
import _mod4467 from "module_4467" /* 4467 */;

let obj3;
let obj4;
function lastWeek() {
  let str;
  const self = this;
  if (0 === this.day()) {
    str = "[\u00DAltimo] dddd [\u00E0s] LT";
  } else {
    str = "[\u00DAltima] dddd [\u00E0s] LT";
  }
  return str;
}
if (typeof exports === "object") {
  if (undefined !== module) {
    if (typeof require === "function") {
      const _module = _mod4467;
      let obj2 = { months: "janeiro_fevereiro_mar\u00E7o_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"), monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"), weekdays: "domingo_segunda-feira_ter\u00E7a-feira_quarta-feira_quinta-feira_sexta-feira_s\u00E1bado".split("_"), weekdaysShort: "dom_seg_ter_qua_qui_sex_s\u00E1b".split("_"), weekdaysMin: "do_2\u00AA_3\u00AA_4\u00AA_5\u00AA_6\u00AA_s\u00E1".split("_"), weekdaysParseExact: true, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY [\u00E0s] HH:mm", LLLL: "dddd, D [de] MMMM [de] YYYY [\u00E0s] HH:mm" }, calendar: obj3, relativeTime: { future: "em %s", past: "h\u00E1 %s", s: "poucos segundos", ss: "%d segundos", m: "um minuto", mm: "%d minutos", h: "uma hora", hh: "%d horas", d: "um dia", dd: "%d dias", M: "um m\u00EAs", MM: "%d meses", y: "um ano", yy: "%d anos" }, dayOfMonthOrdinalParse: /\d{1,2}º/, ordinal: "%d\u00BA", invalidDate: "Data inv\u00E1lida" };
      let str = "janeiro_fevereiro_mar\u00E7o_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro";
      const split = "janeiro_fevereiro_mar\u00E7o_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split;
      const defineLocale = _module.defineLocale;
      const split2 = "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split;
      const split3 = "domingo_segunda-feira_ter\u00E7a-feira_quarta-feira_quinta-feira_sexta-feira_s\u00E1bado".split;
      const split4 = "dom_seg_ter_qua_qui_sex_s\u00E1b".split;
      const split5 = "do_2\u00AA_3\u00AA_4\u00AA_5\u00AA_6\u00AA_s\u00E1".split;
      obj3 = { sameDay: "[Hoje \u00E0s] LT", nextDay: "[Amanh\u00E3 \u00E0s] LT", nextWeek: "dddd [\u00E0s] LT", lastDay: "[Ontem \u00E0s] LT", lastWeek, sameElse: "L" };
      defineLocale("pt-br", obj2);
    }
  }
}
if (typeof globalThis.define === "function") {
  const define2 = globalThis.define;
  if (globalThis.define.amd) {
    globalThis.define(["../moment"], function t(defineLocale) {
      let obj2;
      const obj = { months: "janeiro_fevereiro_mar\u00E7o_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"), monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"), weekdays: "domingo_segunda-feira_ter\u00E7a-feira_quarta-feira_quinta-feira_sexta-feira_s\u00E1bado".split("_"), weekdaysShort: "dom_seg_ter_qua_qui_sex_s\u00E1b".split("_"), weekdaysMin: "do_2\u00AA_3\u00AA_4\u00AA_5\u00AA_6\u00AA_s\u00E1".split("_"), weekdaysParseExact: true, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY [\u00E0s] HH:mm", LLLL: "dddd, D [de] MMMM [de] YYYY [\u00E0s] HH:mm" }, calendar: obj2, relativeTime: { future: "em %s", past: "h\u00E1 %s", s: "poucos segundos", ss: "%d segundos", m: "um minuto", mm: "%d minutos", h: "uma hora", hh: "%d horas", d: "um dia", dd: "%d dias", M: "um m\u00EAs", MM: "%d meses", y: "um ano", yy: "%d anos" }, dayOfMonthOrdinalParse: /\d{1,2}º/, ordinal: "%d\u00BA", invalidDate: "Data inv\u00E1lida" };
      obj2 = { sameDay: "[Hoje \u00E0s] LT", nextDay: "[Amanh\u00E3 \u00E0s] LT", nextWeek: "dddd [\u00E0s] LT", lastDay: "[Ontem \u00E0s] LT", lastWeek, sameElse: "L" };
      return defineLocale.defineLocale("pt-br", obj);
    });
  }
}
const moment = this.moment;
let obj = { months: "janeiro_fevereiro_mar\u00E7o_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"), monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"), weekdays: "domingo_segunda-feira_ter\u00E7a-feira_quarta-feira_quinta-feira_sexta-feira_s\u00E1bado".split("_"), weekdaysShort: "dom_seg_ter_qua_qui_sex_s\u00E1b".split("_"), weekdaysMin: "do_2\u00AA_3\u00AA_4\u00AA_5\u00AA_6\u00AA_s\u00E1".split("_"), weekdaysParseExact: true, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY [\u00E0s] HH:mm", LLLL: "dddd, D [de] MMMM [de] YYYY [\u00E0s] HH:mm" }, calendar: obj4, relativeTime: { future: "em %s", past: "h\u00E1 %s", s: "poucos segundos", ss: "%d segundos", m: "um minuto", mm: "%d minutos", h: "uma hora", hh: "%d horas", d: "um dia", dd: "%d dias", M: "um m\u00EAs", MM: "%d meses", y: "um ano", yy: "%d anos" }, dayOfMonthOrdinalParse: /\d{1,2}º/, ordinal: "%d\u00BA", invalidDate: "Data inv\u00E1lida" };
obj4 = { sameDay: "[Hoje \u00E0s] LT", nextDay: "[Amanh\u00E3 \u00E0s] LT", nextWeek: "dddd [\u00E0s] LT", lastDay: "[Ontem \u00E0s] LT", lastWeek, sameElse: "L" };
moment.defineLocale("pt-br", obj);