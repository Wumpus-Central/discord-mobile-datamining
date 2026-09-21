// === Module 10685: TimestampSuggestionUtils ===

// Module 10685 (TimestampSuggestionUtils)
import util from "util" /* 1115 */;
import _modDef4348 from "module_4348" /* 4348 */;
import _mod10686 from "module_10686" /* 10686 */;
import _slicedToArray from "module_32" /* 32 */;
import LocaleStore from "LocaleStore" /* 2109 */;

require = fn;
let items = ["h:mm:ssa", "h:mm:ss a", "H:mm:ss", "h:mma", "h:mm a", "H:mm", "HHmm", "ha", "h a", "H", "LT", "LTS"];
let items1 = [_modDef4348.ISO_8601];
const items2 = [...items];
HermesBuiltin.arraySpread(new Set(items2), 1);
const size = fn(2);
let result = size.fileFinishedImporting("modules/timestamp_autocomplete/TimestampSuggestionUtils.tsx");

export const preloadTimestampParser = function preloadTimestampParser() {
  _mod10686;
};
export const queryTimestampSuggestions = function queryTimestampSuggestions(arg0) {
  let obj = cloneResult1;
  if (cloneResult1 === undefined) {
    obj = _modDef4348();
  }
  if ("" === arg0) {
    let parsed;
    if (null != null) {
      parsed = null.parse(arg0, obj.toDate());
    }
    if (parsed == null) {
      items = [undefined];
      parsed = items;
    }
    const first = _slicedToArray(parsed, 1)[0];
    let start1;
    if (first != null) {
      start1 = first.start;
    }
    let tmp14 = null != start1;
    if (tmp14) {
      let end;
      if (first != null) {
        end = first.end;
      }
      tmp14 = null == end;
    }
    if (tmp14) {
      tmp14 = first.text === arg0;
    }
    const obj2 = _modDef4348;
    if (tmp14) {
      const start = first.start;
      let invalidResult = obj2(start.date());
      let tmp20 = importDefault;
    } else if (tmp3) {
      invalidResult = obj2.invalid();
      tmp20 = importDefault;
    } else {
      invalidResult = obj2(arg0, items1, true);
      tmp20 = importDefault;
    }
    let str6 = invalidResult.creationData().format;
    let cloneResult = invalidResult;
    if (!tmp22) {
      cloneResult = obj.clone();
      str6 = "YYYYMMDDHHmmss";
    }
    items1 = [];
    if (cloneResult.isValid()) {
      if (tmp14) {
        let obj5 = cloneResult;
        if (tmp14) {
          const start2 = first.start;
          obj5 = cloneResult;
          if (!start2.isCertain("hour")) {
            const _Math = Math;
            const result = Math.round(cloneResult.valueOf() / 900000) * 900000;
            obj5 = tmp20(4348)(result);
          }
        }
        if (tmp14) {
          const start3 = first.start;
          let isCertainResult = start3.isCertain("weekday");
        } else if (str6 != null) {
          isCertainResult = str6.includes("d");
        }
        if (tmp14) {
          const start4 = first.start;
          let isCertainResult1 = start4.isCertain("day");
          if (!isCertainResult1) {
            const start5 = first.start;
            isCertainResult1 = start5.isCertain("month");
          }
          if (!isCertainResult1) {
            const start6 = first.start;
            isCertainResult1 = start6.isCertain("year");
          }
          let hasItem = isCertainResult1;
        } else if (str6 != null) {
          hasItem = str6.includes("D");
        }
        if (tmp14) {
          const start7 = first.start;
          let isCertainResult2 = start7.isCertain("year");
        } else if (str6 != null) {
          isCertainResult2 = str6.includes("Y");
        }
        if (tmp14) {
          const start8 = first.start;
          let isCertainResult3 = start8.isCertain("second");
        } else if (str6 != null) {
          isCertainResult3 = str6.includes("s");
        }
        const str1 = obj5.unix().toString();
        let str19 = "s";
        if (isCertainResult3) {
          str19 = "S";
        }
        if (!hasItem) {
          if (!isCertainResult) {
            const obj3 = { timestamp: str1, format: null };
            let str20 = "t";
            if (isCertainResult3) {
              str20 = "T";
            }
            const obj4 = { mention: null, description: null };
            obj3.format = str20;
            obj4.mention = obj3;
            const intl = util.intl;
            obj4.description = intl.string(util.t.yHv4oJ);
            items1.push(obj4);
            items1.push({});
            let obj6 = { periodType: "day", previousName: util.t.ZdDLO0, currentName: util.t.mbs4NX, nextName: util.t["EqnX/z"] };
          }
          if (null == obj6) {
            let obj7 = {};
          } else {
            cloneResult1 = obj.clone();
            cloneResult1.subtract(1, obj6.periodType);
            const cloneResult2 = obj5.clone();
            cloneResult2.add(1, obj6.periodType);
            if (obj5.isSame(obj, obj6.periodType)) {
              const intl4 = util.intl;
              const stringResult = intl4.string(obj6.currentName);
              let stringResult2 = stringResult;
              if (obj5.isSameOrBefore(obj)) {
                const intl5 = util.intl;
                let stringResult1 = intl5.string(obj6.nextName);
                stringResult2 = stringResult;
              }
            } else if (obj5.isSame(cloneResult1, obj6.periodType)) {
              const intl2 = util.intl;
              stringResult2 = intl2.string(obj6.previousName);
              const intl3 = util.intl;
              stringResult1 = intl3.string(obj6.currentName);
            }
            let str31;
            if (null != stringResult1) {
              str31 = cloneResult2.unix().toString();
              const str21 = cloneResult2.unix();
            }
            obj7 = { adjustedTimestamp: str31, adjustedDescription: stringResult1, unadjustedDescription: stringResult2 };
          }
          ({ adjustedTimestamp, unadjustedDescription } = obj7);
          if (null != adjustedTimestamp) {
            const obj8 = { mention: null, description: null };
            const obj9 = { timestamp: adjustedTimestamp, format: str19 };
            obj8.mention = obj9;
            obj8.description = tmp42;
            items1.push(obj8);
            const obj10 = { mention: null };
            const obj11 = { timestamp: adjustedTimestamp, format: "f" };
            obj10.mention = obj11;
            items1.push(obj10);
            const obj12 = { mention: null };
            const obj13 = { timestamp: adjustedTimestamp, format: "F" };
            obj12.mention = obj13;
            items1.push(obj12);
            const obj14 = { mention: null };
            const obj15 = { timestamp: adjustedTimestamp, format: "R" };
            obj14.mention = obj15;
            items1.push(obj14);
            items1.push({});
          }
          const obj16 = { mention: null, description: null };
          const obj17 = { timestamp: str1, format: str19 };
          obj16.mention = obj17;
          obj16.description = unadjustedDescription;
          items1.push(obj16);
          const obj18 = { mention: null };
          const obj19 = { timestamp: str1, format: "f" };
          obj18.mention = obj19;
          items1.push(obj18);
          const obj20 = { mention: null };
          const obj21 = { timestamp: str1, format: "F" };
          obj20.mention = obj21;
          items1.push(obj20);
          const obj22 = { mention: null };
          const obj23 = { timestamp: str1, format: "R" };
          obj22.mention = obj23;
          items1.push(obj22);
        }
        if (isCertainResult) {
          if (!hasItem) {
            const obj24 = { periodType: "week", previousName: util.t["4uTwgO"], currentName: util.t["6YiNaP"], nextName: util.t.HE4jqH };
            obj6 = obj24;
          }
        }
        if (!isCertainResult2) {
          const obj25 = { periodType: "year", previousName: util.t.R7VMEE, currentName: util.t["U8lK/J"], nextName: util.t.OppVVE };
          obj6 = obj25;
        }
        const str18 = obj5.unix();
      }
    }
    return items1;
  } else {
    const tmp6 = _mod10686;
    locale = LocaleStore.locale;
    if ("en-US" === locale) {
      let en = tmp6.en;
    } else if ("en-GB" === locale) {
      en = tmp6.en.GB;
    } else if ("de" === locale) {
      en = tmp6.de;
    } else if ("fr" === locale) {
      en = tmp6.fr;
    } else if ("ja" === locale) {
      en = tmp6.ja;
    } else if ("nl" === locale) {
      en = tmp6.nl;
    } else if ("ru" === locale) {
      en = tmp6.ru;
    } else if ("it" === locale) {
      en = tmp6.it;
    } else if ("uk" === locale) {
      en = tmp6.uk;
    } else if ("zh-CN" === locale) {
      en = tmp6.zh.hans;
    } else if ("zh-TW" === locale) {
      en = tmp6.zh.hant;
    } else if (locale.startsWith("sv-")) {
      en = tmp6.sv;
    } else if (locale.startsWith("pt-")) {
      en = tmp6.pt;
    } else {
      en = null;
      if (locale.startsWith("es-")) {
        en = tmp6.es;
      }
    }
  }
};