// _runtime/03920_t.js
if (typeof exports === "object") {
  if (undefined !== module) {
    if (typeof require === "function") {
      const _module = require("t");
      let obj = { months: null, monthsShort: null, weekdays: null, weekdaysShort: null, weekdaysMin: null, weekdaysParseExact: true, longDateFormat: null, calendar: null, relativeTime: null, dayOfMonthOrdinalParse: null, ordinal: "%d\u00BA" };
      const split = "janeiro_fevereiro_mar\u00E7o_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split;
      obj[0] = "janeiro_fevereiro_mar\u00E7o_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_");
      const split2 = "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split;
      obj[1] = "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_");
      const split3 = "Domingo_Segunda-feira_Ter\u00E7a-feira_Quarta-feira_Quinta-feira_Sexta-feira_S\u00E1bado".split;
      obj[2] = "Domingo_Segunda-feira_Ter\u00E7a-feira_Quarta-feira_Quinta-feira_Sexta-feira_S\u00E1bado".split("_");
      const split4 = "Dom_Seg_Ter_Qua_Qui_Sex_S\u00E1b".split;
      obj[3] = "Dom_Seg_Ter_Qua_Qui_Sex_S\u00E1b".split("_");
      const split5 = "Do_2\u00AA_3\u00AA_4\u00AA_5\u00AA_6\u00AA_S\u00E1".split;
      obj[4] = "Do_2\u00AA_3\u00AA_4\u00AA_5\u00AA_6\u00AA_S\u00E1".split("_");
      obj[6] = { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY [\u00E0s] HH:mm", LLLL: "dddd, D [de] MMMM [de] YYYY [\u00E0s] HH:mm" };
      obj = { sameDay: "[Hoje \u00E0s] LT", nextDay: "[Amanh\u00E3 \u00E0s] LT", nextWeek: "dddd [\u00E0s] LT", lastDay: "[Ontem \u00E0s] LT", lastWeek: null, sameElse: "L" };
      obj[4] = function lastWeek() {
        const self = this;
        if (0 === this.day()) {
          let str = "[\u00DAltimo] dddd [\u00E0s] LT";
        } else {
          str = "[\u00DAltima] dddd [\u00E0s] LT";
        }
        return str;
      };
      obj[7] = obj;
      obj[8] = { future: "em %s", past: "h\u00E1 %s", s: "poucos segundos", ss: "%d segundos", m: "um minuto", mm: "%d minutos", h: "uma hora", hh: "%d horas", d: "um dia", dd: "%d dias", M: "um m\u00EAs", MM: "%d meses", y: "um ano", yy: "%d anos" };
      obj[9] = /\d{1,2}º/;
      _module.defineLocale("pt-br", obj);
    }
  }
}
if (typeof globalThis.define === "function") {
  if (globalThis.define.amd) {
    globalThis.define(["../moment"], function s(defineLocale) {
      obj = { months: "janeiro_fevereiro_mar\u00E7o_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"), monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"), weekdays: "Domingo_Segunda-feira_Ter\u00E7a-feira_Quarta-feira_Quinta-feira_Sexta-feira_S\u00E1bado".split("_"), weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_S\u00E1b".split("_"), weekdaysMin: "Do_2\u00AA_3\u00AA_4\u00AA_5\u00AA_6\u00AA_S\u00E1".split("_"), weekdaysParseExact: true, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY [\u00E0s] HH:mm", LLLL: "dddd, D [de] MMMM [de] YYYY [\u00E0s] HH:mm" }, calendar: obj, relativeTime: { future: "em %s", past: "h\u00E1 %s", s: "poucos segundos", ss: "%d segundos", m: "um minuto", mm: "%d minutos", h: "uma hora", hh: "%d horas", d: "um dia", dd: "%d dias", M: "um m\u00EAs", MM: "%d meses", y: "um ano", yy: "%d anos" }, dayOfMonthOrdinalParse: /\d{1,2}º/, ordinal: "%d\u00BA" };
      obj = {
        sameDay: "[Hoje \u00E0s] LT",
        nextDay: "[Amanh\u00E3 \u00E0s] LT",
        nextWeek: "dddd [\u00E0s] LT",
        lastDay: "[Ontem \u00E0s] LT",
        lastWeek() {
          const self = this;
          if (0 === this.day()) {
            let str = "[\u00DAltimo] dddd [\u00E0s] LT";
          } else {
            str = "[\u00DAltima] dddd [\u00E0s] LT";
          }
          return str;
        },
        sameElse: "L"
      };
      return defineLocale.defineLocale("pt-br", obj);
    });
  }
}
const moment = this.moment;
obj = { months: "janeiro_fevereiro_mar\u00E7o_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"), monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"), weekdays: "Domingo_Segunda-feira_Ter\u00E7a-feira_Quarta-feira_Quinta-feira_Sexta-feira_S\u00E1bado".split("_"), weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_S\u00E1b".split("_"), weekdaysMin: "Do_2\u00AA_3\u00AA_4\u00AA_5\u00AA_6\u00AA_S\u00E1".split("_"), weekdaysParseExact: true, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY [\u00E0s] HH:mm", LLLL: "dddd, D [de] MMMM [de] YYYY [\u00E0s] HH:mm" }, calendar: obj1, relativeTime: { future: "em %s", past: "h\u00E1 %s", s: "poucos segundos", ss: "%d segundos", m: "um minuto", mm: "%d minutos", h: "uma hora", hh: "%d horas", d: "um dia", dd: "%d dias", M: "um m\u00EAs", MM: "%d meses", y: "um ano", yy: "%d anos" }, dayOfMonthOrdinalParse: /\d{1,2}º/, ordinal: "%d\u00BA" };
moment.defineLocale("pt-br", obj);