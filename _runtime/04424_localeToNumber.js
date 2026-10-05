// _runtime/04424_localeToNumber.js
import buildLocalizeFn from "02124_buildLocalizeFn.js";

let obj;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
const f88187 = (arg0) => locale.locale[arg0];
if (!buildLocalizeFn) {
  obj = { default: buildLocalizeFn };
  const obj2 = { default: buildLocalizeFn };
} else {
  obj = buildLocalizeFn;
}
let closure_0 = {
  locale: {
    1: "\u0967",
    2: "\u0968",
    3: "\u0969",
    4: "\u096A",
    5: "\u096B",
    6: "\u096C",
    7: "\u096D",
    8: "\u096E",
    9: "\u096F",
    0: "\u0966",
  },
  number: {
    "\u0967": "1",
    "\u0968": "2",
    "\u0969": "3",
    "\u096a": "4",
    "\u096b": "5",
    "\u096c": "6",
    "\u096d": "7",
    "\u096e": "8",
    "\u096f": "9",
    "\u0966": "0",
  },
};
const date = {
  ordinalNumber(arg0, arg1) {
    let locale;
    const str = Number(arg0);
    const str2 = str.toString();
    return str2.replace(/\d/g, f88187);
  },
  era: obj.default(obj3),
  quarter: obj.default(obj4),
  month: obj.default(obj5),
  day: obj.default(obj6),
  dayPeriod: obj.default(obj7),
};
obj3 = {
  values: {
    narrow: ["\u0908\u0938\u093E-\u092A\u0942\u0930\u094D\u0935", "\u0908\u0938\u094D\u0935\u0940"],
    abbreviated: ["\u0908\u0938\u093E-\u092A\u0942\u0930\u094D\u0935", "\u0908\u0938\u094D\u0935\u0940"],
    wide: ["\u0908\u0938\u093E-\u092A\u0942\u0930\u094D\u0935", "\u0908\u0938\u0935\u0940 \u0938\u0928"],
  },
  defaultWidth: "wide",
};
obj4 = {
  values: {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["\u0924\u093F1", "\u0924\u093F2", "\u0924\u093F3", "\u0924\u093F4"],
    wide: [
      "\u092A\u0939\u0932\u0940 \u0924\u093F\u092E\u093E\u0939\u0940",
      "\u0926\u0942\u0938\u0930\u0940 \u0924\u093F\u092E\u093E\u0939\u0940",
      "\u0924\u0940\u0938\u0930\u0940 \u0924\u093F\u092E\u093E\u0939\u0940",
      "\u091A\u094C\u0925\u0940 \u0924\u093F\u092E\u093E\u0939\u0940",
    ],
  },
  defaultWidth: "wide",
  argumentCallback(arg0) {
    return arg0 - 1;
  },
};
obj5 = {
  values: {
    narrow: [
      "\u091C",
      "\u092B\u093C",
      "\u092E\u093E",
      "\u0905",
      "\u092E\u0908",
      "\u091C\u0942",
      "\u091C\u0941",
      "\u0905\u0917",
      "\u0938\u093F",
      "\u0905\u0915\u094D\u091F\u0942",
      "\u0928",
      "\u0926\u093F",
    ],
    abbreviated: [
      "\u091C\u0928",
      "\u092B\u093C\u0930",
      "\u092E\u093E\u0930\u094D\u091A",
      "\u0905\u092A\u094D\u0930\u0948\u0932",
      "\u092E\u0908",
      "\u091C\u0942\u0928",
      "\u091C\u0941\u0932",
      "\u0905\u0917",
      "\u0938\u093F\u0924",
      "\u0905\u0915\u094D\u091F\u0942",
      "\u0928\u0935",
      "\u0926\u093F\u0938",
    ],
    wide: [
      "\u091C\u0928\u0935\u0930\u0940",
      "\u092B\u093C\u0930\u0935\u0930\u0940",
      "\u092E\u093E\u0930\u094D\u091A",
      "\u0905\u092A\u094D\u0930\u0948\u0932",
      "\u092E\u0908",
      "\u091C\u0942\u0928",
      "\u091C\u0941\u0932\u093E\u0908",
      "\u0905\u0917\u0938\u094D\u0924",
      "\u0938\u093F\u0924\u0902\u092C\u0930",
      "\u0905\u0915\u094D\u091F\u0942\u092C\u0930",
      "\u0928\u0935\u0902\u092C\u0930",
      "\u0926\u093F\u0938\u0902\u092C\u0930",
    ],
  },
  defaultWidth: "wide",
};
obj6 = {
  values: {
    narrow: ["\u0930", "\u0938\u094B", "\u092E\u0902", "\u092C\u0941", "\u0917\u0941", "\u0936\u0941", "\u0936"],
    short: ["\u0930", "\u0938\u094B", "\u092E\u0902", "\u092C\u0941", "\u0917\u0941", "\u0936\u0941", "\u0936"],
    abbreviated: [
      "\u0930\u0935\u093F",
      "\u0938\u094B\u092E",
      "\u092E\u0902\u0917\u0932",
      "\u092C\u0941\u0927",
      "\u0917\u0941\u0930\u0941",
      "\u0936\u0941\u0915\u094D\u0930",
      "\u0936\u0928\u093F",
    ],
    wide: [
      "\u0930\u0935\u093F\u0935\u093E\u0930",
      "\u0938\u094B\u092E\u0935\u093E\u0930",
      "\u092E\u0902\u0917\u0932\u0935\u093E\u0930",
      "\u092C\u0941\u0927\u0935\u093E\u0930",
      "\u0917\u0941\u0930\u0941\u0935\u093E\u0930",
      "\u0936\u0941\u0915\u094D\u0930\u0935\u093E\u0930",
      "\u0936\u0928\u093F\u0935\u093E\u0930",
    ],
  },
  defaultWidth: "wide",
};
obj7 = {
  values: {
    narrow: {
      am: "\u092A\u0942\u0930\u094D\u0935\u093E\u0939\u094D\u0928",
      pm: "\u0905\u092A\u0930\u093E\u0939\u094D\u0928",
      midnight: "\u092E\u0927\u094D\u092F\u0930\u093E\u0924\u094D\u0930\u093F",
      noon: "\u0926\u094B\u092A\u0939\u0930",
      morning: "\u0938\u0941\u092C\u0939",
      afternoon: "\u0926\u094B\u092A\u0939\u0930",
      evening: "\u0936\u093E\u092E",
      night: "\u0930\u093E\u0924",
    },
    abbreviated: {
      am: "\u092A\u0942\u0930\u094D\u0935\u093E\u0939\u094D\u0928",
      pm: "\u0905\u092A\u0930\u093E\u0939\u094D\u0928",
      midnight: "\u092E\u0927\u094D\u092F\u0930\u093E\u0924\u094D\u0930\u093F",
      noon: "\u0926\u094B\u092A\u0939\u0930",
      morning: "\u0938\u0941\u092C\u0939",
      afternoon: "\u0926\u094B\u092A\u0939\u0930",
      evening: "\u0936\u093E\u092E",
      night: "\u0930\u093E\u0924",
    },
    wide: {
      am: "\u092A\u0942\u0930\u094D\u0935\u093E\u0939\u094D\u0928",
      pm: "\u0905\u092A\u0930\u093E\u0939\u094D\u0928",
      midnight: "\u092E\u0927\u094D\u092F\u0930\u093E\u0924\u094D\u0930\u093F",
      noon: "\u0926\u094B\u092A\u0939\u0930",
      morning: "\u0938\u0941\u092C\u0939",
      afternoon: "\u0926\u094B\u092A\u0939\u0930",
      evening: "\u0936\u093E\u092E",
      night: "\u0930\u093E\u0924",
    },
  },
  defaultWidth: "wide",
  formattingValues: {
    narrow: {
      am: "\u092A\u0942\u0930\u094D\u0935\u093E\u0939\u094D\u0928",
      pm: "\u0905\u092A\u0930\u093E\u0939\u094D\u0928",
      midnight: "\u092E\u0927\u094D\u092F\u0930\u093E\u0924\u094D\u0930\u093F",
      noon: "\u0926\u094B\u092A\u0939\u0930",
      morning: "\u0938\u0941\u092C\u0939",
      afternoon: "\u0926\u094B\u092A\u0939\u0930",
      evening: "\u0936\u093E\u092E",
      night: "\u0930\u093E\u0924",
    },
    abbreviated: {
      am: "\u092A\u0942\u0930\u094D\u0935\u093E\u0939\u094D\u0928",
      pm: "\u0905\u092A\u0930\u093E\u0939\u094D\u0928",
      midnight: "\u092E\u0927\u094D\u092F\u0930\u093E\u0924\u094D\u0930\u093F",
      noon: "\u0926\u094B\u092A\u0939\u0930",
      morning: "\u0938\u0941\u092C\u0939",
      afternoon: "\u0926\u094B\u092A\u0939\u0930",
      evening: "\u0936\u093E\u092E",
      night: "\u0930\u093E\u0924",
    },
    wide: {
      am: "\u092A\u0942\u0930\u094D\u0935\u093E\u0939\u094D\u0928",
      pm: "\u0905\u092A\u0930\u093E\u0939\u094D\u0928",
      midnight: "\u092E\u0927\u094D\u092F\u0930\u093E\u0924\u094D\u0930\u093F",
      noon: "\u0926\u094B\u092A\u0939\u0930",
      morning: "\u0938\u0941\u092C\u0939",
      afternoon: "\u0926\u094B\u092A\u0939\u0930",
      evening: "\u0936\u093E\u092E",
      night: "\u0930\u093E\u0924",
    },
  },
  defaultFormattingWidth: "wide",
};

export const localeToNumber = function localeToNumber(arg0) {
  let number;
  const str = arg0.toString();
  return Number(str.replace(/[१२३४५६७८९०]/g, (arg0) => number.number[arg0]));
};
export const numberToLocale = function numberToLocale(arg0) {
  const str = arg0.toString();
  return str.replace(/\d/g, f88187);
};
export default date;
