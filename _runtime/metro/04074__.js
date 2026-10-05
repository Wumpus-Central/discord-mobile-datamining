// _runtime/metro/04074__.js
import buildLocalizeFn from "../02124_buildLocalizeFn.js";

let obj;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
if (!buildLocalizeFn) {
  obj = { default: buildLocalizeFn };
  const obj2 = { default: buildLocalizeFn };
} else {
  obj = buildLocalizeFn;
}
const date = {
  ordinalNumber(arg0, arg1) {
    return String(arg0);
  },
  era: obj.default(obj3),
  quarter: obj.default(obj4),
  month: obj.default(obj5),
  day: obj.default(obj6),
  dayPeriod: obj.default(obj7),
};
obj3 = {
  values: {
    narrow: ["\u00CE", "D"],
    abbreviated: ["\u00CE.d.C.", "D.C."],
    wide: ["\u00CEnainte de Cristos", "Dup\u0103 Cristos"],
  },
  defaultWidth: "wide",
};
obj4 = {
  values: {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["T1", "T2", "T3", "T4"],
    wide: ["primul trimestru", "al doilea trimestru", "al treilea trimestru", "al patrulea trimestru"],
  },
  defaultWidth: "wide",
  argumentCallback(arg0) {
    return arg0 - 1;
  },
};
obj5 = {
  values: {
    narrow: ["I", "F", "M", "A", "M", "I", "I", "A", "S", "O", "N", "D"],
    abbreviated: ["ian", "feb", "mar", "apr", "mai", "iun", "iul", "aug", "sep", "oct", "noi", "dec"],
    wide: [
      "ianuarie",
      "februarie",
      "martie",
      "aprilie",
      "mai",
      "iunie",
      "iulie",
      "august",
      "septembrie",
      "octombrie",
      "noiembrie",
      "decembrie",
    ],
  },
  defaultWidth: "wide",
};
obj6 = {
  values: {
    narrow: ["d", "l", "m", "m", "j", "v", "s"],
    short: ["du", "lu", "ma", "mi", "jo", "vi", "s\u00E2"],
    abbreviated: ["dum", "lun", "mar", "mie", "joi", "vin", "s\u00E2m"],
    wide: ["duminic\u0103", "luni", "mar\u021Bi", "miercuri", "joi", "vineri", "s\u00E2mb\u0103t\u0103"],
  },
  defaultWidth: "wide",
};
obj7 = {
  values: {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mn",
      noon: "ami",
      morning: "dim",
      afternoon: "da",
      evening: "s",
      night: "n",
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "miezul nop\u021Bii",
      noon: "amiaz\u0103",
      morning: "diminea\u021B\u0103",
      afternoon: "dup\u0103-amiaz\u0103",
      evening: "sear\u0103",
      night: "noapte",
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "miezul nop\u021Bii",
      noon: "amiaz\u0103",
      morning: "diminea\u021B\u0103",
      afternoon: "dup\u0103-amiaz\u0103",
      evening: "sear\u0103",
      night: "noapte",
    },
  },
  defaultWidth: "wide",
  formattingValues: {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mn",
      noon: "amiaz\u0103",
      morning: "diminea\u021B\u0103",
      afternoon: "dup\u0103-amiaz\u0103",
      evening: "sear\u0103",
      night: "noapte",
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "miezul nop\u021Bii",
      noon: "amiaz\u0103",
      morning: "diminea\u021B\u0103",
      afternoon: "dup\u0103-amiaz\u0103",
      evening: "sear\u0103",
      night: "noapte",
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "miezul nop\u021Bii",
      noon: "amiaz\u0103",
      morning: "diminea\u021B\u0103",
      afternoon: "dup\u0103-amiaz\u0103",
      evening: "sear\u0103",
      night: "noapte",
    },
  },
  defaultFormattingWidth: "wide",
};

export default date;
