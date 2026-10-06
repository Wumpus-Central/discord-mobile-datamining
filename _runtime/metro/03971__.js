// _runtime/metro/03971__.js
import buildMatchFn from "../02126_buildMatchFn.js";
import buildMatchPatternFn from "../02127_buildMatchPatternFn.js";

let items;
let items1;
let items2;
let items3;
let items4;
let obj;
let obj10;
let obj11;
let obj12;
let obj13;
let obj14;
let obj15;
let obj3;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
if (!buildMatchFn) {
  obj = { default: buildMatchFn };
  const obj2 = { default: buildMatchFn };
} else {
  obj = buildMatchFn;
}
if (!buildMatchPatternFn) {
  obj3 = { default: buildMatchPatternFn };
  const obj4 = { default: buildMatchPatternFn };
} else {
  obj3 = buildMatchPatternFn;
}
const date = {
  ordinalNumber: obj3.default(obj5),
  era: obj.default(obj6),
  quarter: obj.default(obj8),
  month: obj.default(obj10),
  day: obj.default(obj12),
  dayPeriod: obj.default(obj14),
};
obj6 = {
  matchPatterns: {
    narrow: /^((пр)?н\.?\s?е\.?)/i,
    abbreviated: /^((пр)?н\.?\s?е\.?)/i,
    wide: /^(преди новата ера|новата ера|нова ера)/i,
  },
  defaultMatchWidth: "wide",
  parsePatterns: obj7,
  defaultParseWidth: "any",
};
obj7 = { any: items };
items = [/^п/i, /^н/i];
obj8 = {
  matchPatterns: {
    narrow: /^[1234]/i,
    abbreviated: /^[1234](-?[врт]?o?)? тримес.?/i,
    wide: /^[1234](-?[врт]?о?)? тримесечие/i,
  },
  defaultMatchWidth: "wide",
  parsePatterns: obj9,
  defaultParseWidth: "any",
  valueCallback(arg0) {
    return arg0 + 1;
  },
};
obj9 = { any: items1 };
items1 = [/1/i, /2/i, /3/i, /4/i];
obj10 = {
  matchPatterns: {
    abbreviated: /^(яну|фев|мар|апр|май|юни|юли|авг|сеп|окт|ное|дек)/i,
    wide: /^(януари|февруари|март|април|май|юни|юли|август|септември|октомври|ноември|декември)/i,
  },
  defaultMatchWidth: "wide",
  parsePatterns: obj11,
  defaultParseWidth: "any",
};
obj11 = { any: items2 };
items2 = [/^я/i, /^ф/i, /^мар/i, /^ап/i, /^май/i, /^юн/i, /^юл/i, /^ав/i, /^се/i, /^окт/i, /^но/i, /^де/i];
obj12 = {
  matchPatterns: {
    narrow: /^[нпвсч]/i,
    short: /^(нд|пн|вт|ср|чт|пт|сб)/i,
    abbreviated: /^(нед|пон|вто|сря|чет|пет|съб)/i,
    wide: /^(неделя|понеделник|вторник|сряда|четвъртък|петък|събота)/i,
  },
  defaultMatchWidth: "wide",
  parsePatterns: obj13,
  defaultParseWidth: "any",
};
obj13 = { narrow: items3, any: items4 };
items3 = [/^н/i, /^п/i, /^в/i, /^с/i, /^ч/i, /^п/i, /^с/i];
items4 = [/^н[ед]/i, /^п[он]/i, /^вт/i, /^ср/i, /^ч[ет]/i, /^п[ет]/i, /^с[ъб]/i];
obj14 = {
  matchPatterns: { any: /^(преди о|след о|в по|на о|през|веч|сут|следо)/i },
  defaultMatchWidth: "any",
  parsePatterns: obj15,
  defaultParseWidth: "any",
};
obj15 = {
  any: {
    am: /^преди о/i,
    pm: /^след о/i,
    midnight: /^в пол/i,
    noon: /^на об/i,
    morning: /^сут/i,
    afternoon: /^следо/i,
    evening: /^веч/i,
    night: /^през н/i,
  },
};
obj5 = {
  matchPattern: /^(\d+)(-?[врмт][аи]|-?т?(ен|на)|-?(ев|ева))?/i,
  parsePattern: /\d+/i,
  valueCallback(match) {
    return parseInt(match, 10);
  },
};

export default date;
