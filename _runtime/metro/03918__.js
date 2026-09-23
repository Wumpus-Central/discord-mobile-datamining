// _runtime/metro/03918__.js
import 02119__ from "02119__.js";
import 02120__ from "02120__.js";

if (!module_2119) {
  const obj2 = { default: module_2119 };
  let obj = obj2;
} else {
  obj = module_2119;
}
if (!module_2120) {
  const obj4 = { default: module_2120 };
  let obj3 = obj4;
} else {
  obj3 = module_2120;
}
const date = {
  ordinalNumber: obj3.default({
    matchPattern: /^(\d+)(-?[врмт][аи]|-?т?(ен|на)|-?(ев|ева))?/i,
    parsePattern: /\d+/i,
    valueCallback(match) {
      return parseInt(match, 10);
    }
  }),
  era: null,
  quarter: null,
  month: null,
  day: null,
  dayPeriod: null
};
const obj6 = { matchPatterns: { narrow: /^((пр)?н\.?\s?е\.?)/i, abbreviated: /^((пр)?н\.?\s?е\.?)/i, wide: /^(преди новата ера|новата ера|нова ера)/i }, defaultMatchWidth: "wide", parsePatterns: null, defaultParseWidth: "any" };
const obj7 = { any: null };
const items = [/^п/i, /^н/i];
obj7.any = items;
obj6.parsePatterns = obj7;
date.era = obj.default(obj6);
const obj8 = {
  matchPatterns: { narrow: /^[1234]/i, abbreviated: /^[1234](-?[врт]?o?)? тримес.?/i, wide: /^[1234](-?[врт]?о?)? тримесечие/i },
  defaultMatchWidth: "wide",
  parsePatterns: null,
  defaultParseWidth: "any",
  valueCallback(arg0) {
    return arg0 + 1;
  }
};
const obj9 = { any: null };
const items1 = [/1/i, /2/i, /3/i, /4/i];
obj9.any = items1;
obj8.parsePatterns = obj9;
date.quarter = obj.default(obj8);
const obj10 = { matchPatterns: { abbreviated: /^(яну|фев|мар|апр|май|юни|юли|авг|сеп|окт|ное|дек)/i, wide: /^(януари|февруари|март|април|май|юни|юли|август|септември|октомври|ноември|декември)/i }, defaultMatchWidth: "wide", parsePatterns: null, defaultParseWidth: "any" };
const obj11 = { any: null };
const items2 = [/^я/i, /^ф/i, /^мар/i, /^ап/i, /^май/i, /^юн/i, /^юл/i, /^ав/i, /^се/i, /^окт/i, /^но/i, /^де/i];
obj11.any = items2;
obj10.parsePatterns = obj11;
date.month = obj.default(obj10);
const obj12 = { matchPatterns: { narrow: /^[нпвсч]/i, short: /^(нд|пн|вт|ср|чт|пт|сб)/i, abbreviated: /^(нед|пон|вто|сря|чет|пет|съб)/i, wide: /^(неделя|понеделник|вторник|сряда|четвъртък|петък|събота)/i }, defaultMatchWidth: "wide", parsePatterns: null, defaultParseWidth: "any" };
const obj13 = { narrow: null, any: null };
const items3 = [/^н/i, /^п/i, /^в/i, /^с/i, /^ч/i, /^п/i, /^с/i];
obj13.narrow = items3;
const items4 = [/^н[ед]/i, /^п[он]/i, /^вт/i, /^ср/i, /^ч[ет]/i, /^п[ет]/i, /^с[ъб]/i];
obj13.any = items4;
obj12.parsePatterns = obj13;
date.day = obj.default(obj12);
const obj14 = { matchPatterns: { any: /^(преди о|след о|в по|на о|през|веч|сут|следо)/i }, defaultMatchWidth: "any", parsePatterns: { any: { am: /^преди о/i, pm: /^след о/i, midnight: /^в пол/i, noon: /^на об/i, morning: /^сут/i, afternoon: /^следо/i, evening: /^веч/i, night: /^през н/i } }, defaultParseWidth: "any" };
date.dayPeriod = obj.default(obj14);

export default date;
export default exports.default;