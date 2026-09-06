// _runtime/metro/03657__.js
import 02035__ from "02035__.js";
import 02036__ from "02036__.js";

if (!module_2035) {
  let obj = { default: module_2035 };
} else {
  obj = module_2035;
}
if (!module_2036) {
  obj = { default: module_2036 };
  let obj2 = obj;
} else {
  obj2 = module_2036;
}
const date = {
  ordinalNumber: obj2.default({
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
obj2 = { matchPatterns: { narrow: /^((пр)?н\.?\s?е\.?)/i, abbreviated: /^((пр)?н\.?\s?е\.?)/i, wide: /^(преди новата ера|новата ера|нова ера)/i }, defaultMatchWidth: "wide", parsePatterns: null, defaultParseWidth: "any" };
const obj3 = { any: null };
const items = [/^п/i, /^н/i];
obj3.any = items;
obj2.parsePatterns = obj3;
date.era = obj.default(obj2);
const obj4 = {
  matchPatterns: { narrow: /^[1234]/i, abbreviated: /^[1234](-?[врт]?o?)? тримес.?/i, wide: /^[1234](-?[врт]?о?)? тримесечие/i },
  defaultMatchWidth: "wide",
  parsePatterns: null,
  defaultParseWidth: "any",
  valueCallback(arg0) {
    return arg0 + 1;
  }
};
const obj5 = { any: null };
const items1 = [/1/i, /2/i, /3/i, /4/i];
obj5.any = items1;
obj4.parsePatterns = obj5;
date.quarter = obj.default(obj4);
const obj6 = { matchPatterns: { abbreviated: /^(яну|фев|мар|апр|май|юни|юли|авг|сеп|окт|ное|дек)/i, wide: /^(януари|февруари|март|април|май|юни|юли|август|септември|октомври|ноември|декември)/i }, defaultMatchWidth: "wide", parsePatterns: null, defaultParseWidth: "any" };
const obj7 = { any: null };
const items2 = [/^я/i, /^ф/i, /^мар/i, /^ап/i, /^май/i, /^юн/i, /^юл/i, /^ав/i, /^се/i, /^окт/i, /^но/i, /^де/i];
obj7.any = items2;
obj6.parsePatterns = obj7;
date.month = obj.default(obj6);
const obj8 = { matchPatterns: { narrow: /^[нпвсч]/i, short: /^(нд|пн|вт|ср|чт|пт|сб)/i, abbreviated: /^(нед|пон|вто|сря|чет|пет|съб)/i, wide: /^(неделя|понеделник|вторник|сряда|четвъртък|петък|събота)/i }, defaultMatchWidth: "wide", parsePatterns: null, defaultParseWidth: "any" };
const obj9 = { narrow: null, any: null };
const items3 = [/^н/i, /^п/i, /^в/i, /^с/i, /^ч/i, /^п/i, /^с/i];
obj9.narrow = items3;
const items4 = [/^н[ед]/i, /^п[он]/i, /^вт/i, /^ср/i, /^ч[ет]/i, /^п[ет]/i, /^с[ъб]/i];
obj9.any = items4;
obj8.parsePatterns = obj9;
date.day = obj.default(obj8);
const obj10 = { matchPatterns: { any: /^(преди о|след о|в по|на о|през|веч|сут|следо)/i }, defaultMatchWidth: "any", parsePatterns: { any: { am: /^преди о/i, pm: /^след о/i, midnight: /^в пол/i, noon: /^на об/i, morning: /^сут/i, afternoon: /^следо/i, evening: /^веч/i, night: /^през н/i } }, defaultParseWidth: "any" };
date.dayPeriod = obj.default(obj10);

export default date;
export default exports.default;