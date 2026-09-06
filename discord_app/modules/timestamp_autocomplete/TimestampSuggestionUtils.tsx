// discord_app/modules/timestamp_autocomplete/TimestampSuggestionUtils.tsx
import util from "../../intl/index.native.tsx";
import _modDef4153 from "../../../_runtime/metro/04153__.js";
import _mod10426 from "../../../_runtime/metro/10426__.js";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import LocaleStore from "../user_settings/LocaleStore.tsx";

require = fn;
let items = ["h:mm:ssa", "h:mm:ss a", "H:mm:ss", "h:mma", "h:mm a", "H:mm", "HHmm", "ha", "h a", "H", "LT", "LTS"];
let items1 = [_modDef4153.ISO_8601];
const items2 = [...items];
HermesBuiltin.arraySpread(new Set(items2), 1);
const size = fn(2);
let result = size.fileFinishedImporting("modules/timestamp_autocomplete/TimestampSuggestionUtils.tsx");

export const preloadTimestampParser = function preloadTimestampParser() {
  _mod10426;
};
export const queryTimestampSuggestions = function queryTimestampSuggestions(arg0, cloneResult1) {
  let obj = cloneResult1;
  if (cloneResult1 === undefined) {
    obj = _modDef4153();
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
    let start;
    if (first != null) {
      start = first.start;
    }
    let tmp14 = null != start;
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
    let obj1 = _modDef4153;
    if (tmp14) {
      start = first.start;
      let invalidResult = obj1(start.date());
      let tmp20 = tmp16;
    } else if (tmp3) {
      invalidResult = obj1.invalid();
      tmp20 = tmp16;
    } else {
      invalidResult = obj1(arg0, items1, true);
      tmp20 = tmp16;
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
        let obj4 = cloneResult;
        if (tmp14) {
          const start2 = first.start;
          obj4 = cloneResult;
          if (!start2.isCertain("hour")) {
            const _Math = Math;
            const result = Math.round(cloneResult.valueOf() / 900000) * 900000;
            obj4 = tmp20(4153)(result);
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
        let str = obj4.unix().toString();
        let str19 = "s";
        if (isCertainResult3) {
          str19 = "S";
        }
        if (!hasItem) {
          if (!isCertainResult) {
            obj = { timestamp: str, format: null };
            let str20 = "t";
            if (isCertainResult3) {
              str20 = "T";
            }
            obj = { mention: null, description: null, format: str20 };
            obj.mention = obj;
            const intl = util.intl;
            obj.description = intl.string(util.t.yHv4oJ);
            items1.push(obj);
            items1.push({});
            obj1 = {
              periodType: "day",
              previousName: util.t.ZdDLO0,
              currentName: util.t.mbs4NX,
              nextName: util.t["EqnX/z"],
            };
          }
          if (null == obj1) {
            let obj2 = {};
          } else {
            cloneResult1 = obj.clone();
            cloneResult1.subtract(1, obj1.periodType);
            const cloneResult2 = obj4.clone();
            cloneResult2.add(1, obj1.periodType);
            if (obj4.isSame(obj, obj1.periodType)) {
              const intl4 = util.intl;
              const stringResult = intl4.string(obj1.currentName);
              let stringResult2 = stringResult;
              if (obj4.isSameOrBefore(obj)) {
                const intl5 = tmp39(1114).intl;
                let stringResult1 = intl5.string(obj1.nextName);
                stringResult2 = stringResult;
              }
              tmp39 = require;
            } else if (obj4.isSame(cloneResult1, obj1.periodType)) {
              const intl2 = util.intl;
              stringResult2 = intl2.string(obj1.previousName);
              const intl3 = util.intl;
              stringResult1 = intl3.string(obj1.currentName);
            }
            let str1;
            if (null != stringResult1) {
              str1 = cloneResult2.unix().toString();
              const str21 = cloneResult2.unix();
            }
            obj2 = {
              adjustedTimestamp: str1,
              adjustedDescription: stringResult1,
              unadjustedDescription: stringResult2,
            };
          }
          ({ adjustedTimestamp, unadjustedDescription } = obj2);
          if (null != adjustedTimestamp) {
            const obj3 = { mention: null, description: null };
            obj4 = { timestamp: adjustedTimestamp, format: str19 };
            obj3.mention = obj4;
            obj3.description = tmp42;
            items1.push(obj3);
            const obj5 = { mention: null };
            const obj6 = { timestamp: adjustedTimestamp, format: "f" };
            obj5.mention = obj6;
            items1.push(obj5);
            const obj7 = { mention: null };
            const obj8 = { timestamp: adjustedTimestamp, format: "F" };
            obj7.mention = obj8;
            items1.push(obj7);
            const obj9 = { mention: null };
            const obj10 = { timestamp: adjustedTimestamp, format: "R" };
            obj9.mention = obj10;
            items1.push(obj9);
            items1.push({});
          }
          const obj11 = { mention: null, description: null };
          const obj12 = { timestamp: str, format: str19 };
          obj11.mention = obj12;
          obj11.description = unadjustedDescription;
          items1.push(obj11);
          const obj13 = { mention: null };
          const obj14 = { timestamp: str, format: "f" };
          obj13.mention = obj14;
          items1.push(obj13);
          const obj15 = { mention: null };
          const obj16 = { timestamp: str, format: "F" };
          obj15.mention = obj16;
          items1.push(obj15);
          const obj17 = { mention: null };
          const obj18 = { timestamp: str, format: "R" };
          obj17.mention = obj18;
          items1.push(obj17);
        }
        if (isCertainResult) {
          if (!hasItem) {
            const obj19 = {
              periodType: "week",
              previousName: util.t["4uTwgO"],
              currentName: util.t["6YiNaP"],
              nextName: util.t.HE4jqH,
            };
            obj1 = obj19;
          }
        }
        if (!isCertainResult2) {
          const obj20 = {
            periodType: "year",
            previousName: util.t.R7VMEE,
            currentName: util.t["U8lK/J"],
            nextName: util.t.OppVVE,
          };
          obj1 = obj20;
        }
        const str18 = obj4.unix();
      }
    }
    return items1;
  } else {
    const tmp6 = _mod10426;
    locale = LocaleStore.locale;
    str = "en-US";
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
