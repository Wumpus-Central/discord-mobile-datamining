// === Module 3925: buildLocalizeFn ===

// Module 3925 (buildLocalizeFn)
import buildLocalizeFn from "buildLocalizeFn" /* 2003 */;

if (!buildLocalizeFn) {
  let obj = { default: null };
  obj[0] = buildLocalizeFn;
} else {
  obj = buildLocalizeFn;
}
obj = {
  ordinalNumber(arg0, unit) {
    const NumberResult = Number(arg0);
    unit = undefined;
    if (null != unit) {
      unit = unit.unit;
    }
    if ("quarter" === unit) {
      if (1 === NumberResult) {
        return "I";
      } else if (2 === NumberResult) {
        return "II";
      } else if (3 === NumberResult) {
        return "III";
      } else if (4 === NumberResult) {
        return "IV";
      }
    } else if ("day" === unit) {
      if (1 === NumberResult) {
        return "th\u1EE9 2";
      } else if (2 === NumberResult) {
        return "th\u1EE9 3";
      } else if (3 === NumberResult) {
        return "th\u1EE9 4";
      } else if (4 === NumberResult) {
        return "th\u1EE9 5";
      } else if (5 === NumberResult) {
        return "th\u1EE9 6";
      } else if (6 === NumberResult) {
        return "th\u1EE9 7";
      } else if (7 === NumberResult) {
        return "ch\u1EE7 nh\u1EADt";
      }
    } else if ("week" === unit) {
      let str5 = "th\u1EE9 nh\u1EA5t";
      if (1 !== NumberResult) {
        str5 = `thứ ${tmp}`;
      }
      return str5;
    } else if ("dayOfYear" === unit) {
      let str4 = "\u0111\u1EA7u ti\u00EAn";
      if (1 !== NumberResult) {
        str4 = `thứ ${tmp}`;
      }
      return str4;
    }
    return String(NumberResult);
  },
  era: obj.default({ values: { narrow: ["TCN", "SCN"], abbreviated: ["tr\u01B0\u1EDBc CN", "sau CN"], wide: ["tr\u01B0\u1EDBc C\u00F4ng Nguy\u00EAn", "sau C\u00F4ng Nguy\u00EAn"] }, defaultWidth: "wide" }),
  quarter: obj.default(obj1),
  month: obj.default({ values: { narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], abbreviated: ["Thg 1", "Thg 2", "Thg 3", "Thg 4", "Thg 5", "Thg 6", "Thg 7", "Thg 8", "Thg 9", "Thg 10", "Thg 11", "Thg 12"], wide: ["Th\u00E1ng M\u1ED9t", "Th\u00E1ng Hai", "Th\u00E1ng Ba", "Th\u00E1ng T\u01B0", "Th\u00E1ng N\u0103m", "Th\u00E1ng S\u00E1u", "Th\u00E1ng B\u1EA3y", "Th\u00E1ng T\u00E1m", "Th\u00E1ng Ch\u00EDn", "Th\u00E1ng M\u01B0\u1EDDi", "Th\u00E1ng M\u01B0\u1EDDi M\u1ED9t", "Th\u00E1ng M\u01B0\u1EDDi Hai"] }, defaultWidth: "wide", formattingValues: { narrow: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"], abbreviated: ["thg 1", "thg 2", "thg 3", "thg 4", "thg 5", "thg 6", "thg 7", "thg 8", "thg 9", "thg 10", "thg 11", "thg 12"], wide: ["th\u00E1ng 01", "th\u00E1ng 02", "th\u00E1ng 03", "th\u00E1ng 04", "th\u00E1ng 05", "th\u00E1ng 06", "th\u00E1ng 07", "th\u00E1ng 08", "th\u00E1ng 09", "th\u00E1ng 10", "th\u00E1ng 11", "th\u00E1ng 12"] }, defaultFormattingWidth: "wide" }),
  day: obj.default({ values: { narrow: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"], short: ["CN", "Th 2", "Th 3", "Th 4", "Th 5", "Th 6", "Th 7"], abbreviated: ["CN", "Th\u1EE9 2", "Th\u1EE9 3", "Th\u1EE9 4", "Th\u1EE9 5", "Th\u1EE9 6", "Th\u1EE9 7"], wide: ["Ch\u1EE7 Nh\u1EADt", "Th\u1EE9 Hai", "Th\u1EE9 Ba", "Th\u1EE9 T\u01B0", "Th\u1EE9 N\u0103m", "Th\u1EE9 S\u00E1u", "Th\u1EE9 B\u1EA3y"] }, defaultWidth: "wide" }),
  dayPeriod: obj.default({ values: { narrow: { am: "am", pm: "pm", midnight: "n\u1EEDa \u0111\u00EAm", noon: "tr", morning: "sg", afternoon: "ch", evening: "t\u1ED1i", night: "\u0111\u00EAm" }, abbreviated: { am: "AM", pm: "PM", midnight: "n\u1EEDa \u0111\u00EAm", noon: "tr\u01B0a", morning: "s\u00E1ng", afternoon: "chi\u1EC1u", evening: "t\u1ED1i", night: "\u0111\u00EAm" }, wide: { am: "SA", pm: "CH", midnight: "n\u1EEDa \u0111\u00EAm", noon: "tr\u01B0a", morning: "s\u00E1ng", afternoon: "chi\u1EC1u", evening: "t\u1ED1i", night: "\u0111\u00EAm" } }, defaultWidth: "wide", formattingValues: { narrow: { am: "am", pm: "pm", midnight: "n\u1EEDa \u0111\u00EAm", noon: "tr", morning: "sg", afternoon: "ch", evening: "t\u1ED1i", night: "\u0111\u00EAm" }, abbreviated: { am: "AM", pm: "PM", midnight: "n\u1EEDa \u0111\u00EAm", noon: "tr\u01B0a", morning: "s\u00E1ng", afternoon: "chi\u1EC1u", evening: "t\u1ED1i", night: "\u0111\u00EAm" }, wide: { am: "SA", pm: "CH", midnight: "n\u1EEDa \u0111\u00EAm", noon: "gi\u1EEFa tr\u01B0a", morning: "v\u00E0o bu\u1ED5i s\u00E1ng", afternoon: "v\u00E0o bu\u1ED5i chi\u1EC1u", evening: "v\u00E0o bu\u1ED5i t\u1ED1i", night: "v\u00E0o ban \u0111\u00EAm" } }, defaultFormattingWidth: "wide" })
};

export default obj;
export default exports.default;