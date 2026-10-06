// discord_app/modules/timestamp_autocomplete/TimestampSuggestionUtils.tsx
import intl6 from "../../intl/index.native.tsx";
import _modDef4467 from "../../../_runtime/metro/04467__.js";
import en2 from "../../../_runtime/10168_en.js";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import LocaleStore from "../user_settings/LocaleStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

let items = ["h:mm:ssa", "h:mm:ss a", "H:mm:ss", "h:mma", "h:mm a", "H:mm", "HHmm", "ha", "h a", "H", "LT", "LTS"];
let items1 = [_modDef4467.ISO_8601];
const items2 = [...items];
const set = new Set(items2);
HermesBuiltin.arraySpread(items1, set, 1);
let result = size.fileFinishedImporting("modules/timestamp_autocomplete/TimestampSuggestionUtils.tsx");

export const preloadTimestampParser = function preloadTimestampParser() {
  en2;
};
export const queryTimestampSuggestions = function queryTimestampSuggestions(arg0) {
  let adjustedTimestamp;
  let cloneResult1;
  let intl;
  let invalidResult;
  let obj11;
  let obj13;
  let obj15;
  let obj17;
  let obj19;
  let obj21;
  let obj23;
  let obj9;
  let str20;
  let tmp19;
  let unadjustedDescription;
  let obj = cloneResult1;
  if (cloneResult1 === undefined) {
    obj = _modDef4467();
  }
  let tmp4 = null;
  if ("" !== arg0) {
    let en;
    const tmp7 = en2;
    const locale = LocaleStore.locale;
    if ("en-US" === locale) {
      en = tmp7.en;
    } else if ("en-GB" === locale) {
      en = tmp7.en.GB;
    } else if ("de" === locale) {
      en = tmp7.de;
    } else if ("fr" === locale) {
      en = tmp7.fr;
    } else if ("ja" === locale) {
      en = tmp7.ja;
    } else if ("nl" === locale) {
      en = tmp7.nl;
    } else if ("ru" === locale) {
      en = tmp7.ru;
    } else if ("it" === locale) {
      en = tmp7.it;
    } else if ("uk" === locale) {
      en = tmp7.uk;
    } else if ("zh-CN" === locale) {
      en = tmp7.zh.hans;
    } else if ("zh-TW" === locale) {
      en = tmp7.zh.hant;
    } else if (locale.startsWith("sv-")) {
      en = tmp7.sv;
    } else if (locale.startsWith("pt-")) {
      en = tmp7.pt;
    } else {
      en = null;
      if (locale.startsWith("es-")) {
        en = tmp7.es;
      }
    }
    tmp4 = en;
  }
  let parsed;
  if (tmp4 != null) {
    parsed = tmp4.parse(arg0, obj.toDate());
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
  let tmp13 = null != start1;
  if (tmp13) {
    let end;
    if (first != null) {
      end = first.end;
    }
    tmp13 = null == end;
  }
  if (tmp13) {
    tmp13 = first.text === arg0;
  }
  const obj2 = _modDef4467;
  if (tmp13) {
    const start = first.start;
    invalidResult = obj2(start.date());
    tmp19 = importDefault;
  } else if ("" === arg0) {
    invalidResult = obj2.invalid();
    tmp19 = importDefault;
  } else {
    invalidResult = obj2(arg0, items1, true);
    tmp19 = importDefault;
  }
  let str6 = invalidResult.creationData().format;
  let cloneResult = invalidResult;
  const tmp21 = "" !== arg0 || invalidResult.isValid();
  if (!tmp21) {
    cloneResult = obj.clone();
    str6 = "YYYYMMDDHHmmss";
  }
  items1 = [];
  if (cloneResult.isValid()) {
    if (tmp13) {
      let isCertainResult;
      let hasItem;
      let isCertainResult2;
      let isCertainResult3;
      let obj6;
      let obj5 = cloneResult;
      if (tmp13) {
        const start2 = first.start;
        obj5 = cloneResult;
        if (!start2.isCertain("hour")) {
          const _Math = Math;
          const result = Math.round(cloneResult.valueOf() / 900000) * 900000;
          obj5 = tmp19(4467)(result);
        }
      }
      if (tmp13) {
        const start3 = first.start;
        isCertainResult = start3.isCertain("weekday");
      } else if (str6 != null) {
        isCertainResult = str6.includes("d");
      }
      if (tmp13) {
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
        hasItem = isCertainResult1;
      } else if (str6 != null) {
        hasItem = str6.includes("D");
      }
      if (tmp13) {
        const start7 = first.start;
        isCertainResult2 = start7.isCertain("year");
      } else if (str6 != null) {
        isCertainResult2 = str6.includes("Y");
      }
      if (tmp13) {
        const start8 = first.start;
        isCertainResult3 = start8.isCertain("second");
      } else if (str6 != null) {
        isCertainResult3 = str6.includes("s");
      }
      const str18 = obj5.unix();
      const str1 = str18.toString();
      let str19 = "s";
      if (isCertainResult3) {
        str19 = "S";
      }
      if (!hasItem) {
        let obj7;
        if (!isCertainResult) {
          const obj3 = { timestamp: str1, format: str20 };
          str20 = "t";
          const push = items1.push;
          if (isCertainResult3) {
            str20 = "T";
          }
          const obj4 = { mention: obj3, description: intl.string(intl6.t.yHv4oJ) };
          intl = intl6.intl;
          push(obj4);
          items1.push({});
          obj6 = {
            periodType: "day",
            previousName: intl6.t.ZdDLO0,
            currentName: intl6.t.mbs4NX,
            nextName: intl6.t["EqnX/z"],
          };
        }
        if (null == obj6) {
          obj7 = {};
        } else {
          let stringResult2;
          let stringResult1;
          cloneResult1 = obj.clone();
          cloneResult1.subtract(1, obj6.periodType);
          const cloneResult2 = obj5.clone();
          cloneResult2.add(1, obj6.periodType);
          if (obj5.isSame(obj, obj6.periodType)) {
            const intl4 = intl6.intl;
            const stringResult = intl4.string(obj6.currentName);
            stringResult2 = stringResult;
            if (obj5.isSameOrBefore(obj)) {
              const intl5 = intl6.intl;
              stringResult1 = intl5.string(obj6.nextName);
              stringResult2 = stringResult;
            }
          } else if (obj5.isSame(cloneResult1, obj6.periodType)) {
            const intl2 = intl6.intl;
            stringResult2 = intl2.string(obj6.previousName);
            const intl3 = intl6.intl;
            stringResult1 = intl3.string(obj6.currentName);
          }
          let str31;
          if (null != stringResult1) {
            const str21 = cloneResult2.unix();
            str31 = str21.toString();
          }
          obj7 = { adjustedTimestamp: str31, adjustedDescription: stringResult1, unadjustedDescription: stringResult2 };
        }
        ({ adjustedTimestamp, unadjustedDescription } = obj7);
        if (null != adjustedTimestamp) {
          const obj8 = { mention: obj9, description: tmp41 };
          obj9 = { timestamp: adjustedTimestamp, format: str19 };
          items1.push(obj8);
          const obj10 = { mention: obj11 };
          obj11 = { timestamp: adjustedTimestamp, format: "f" };
          items1.push(obj10);
          const obj12 = { mention: obj13 };
          obj13 = { timestamp: adjustedTimestamp, format: "F" };
          items1.push(obj12);
          const obj14 = { mention: obj15 };
          obj15 = { timestamp: adjustedTimestamp, format: "R" };
          items1.push(obj14);
          items1.push({});
        }
        const obj16 = { mention: obj17, description: unadjustedDescription };
        obj17 = { timestamp: str1, format: str19 };
        items1.push(obj16);
        const obj18 = { mention: obj19 };
        obj19 = { timestamp: str1, format: "f" };
        items1.push(obj18);
        const obj20 = { mention: obj21 };
        obj21 = { timestamp: str1, format: "F" };
        items1.push(obj20);
        const obj22 = { mention: obj23 };
        obj23 = { timestamp: str1, format: "R" };
        items1.push(obj22);
      }
      if (isCertainResult) {
        if (!hasItem) {
          obj6 = {
            periodType: "week",
            previousName: intl6.t["4uTwgO"],
            currentName: intl6.t["6YiNaP"],
            nextName: intl6.t.HE4jqH,
          };
          const obj24 = {
            periodType: "week",
            previousName: intl6.t["4uTwgO"],
            currentName: intl6.t["6YiNaP"],
            nextName: intl6.t.HE4jqH,
          };
        }
      }
      if (!isCertainResult2) {
        obj6 = {
          periodType: "year",
          previousName: intl6.t.R7VMEE,
          currentName: intl6.t["U8lK/J"],
          nextName: intl6.t.OppVVE,
        };
        const obj25 = {
          periodType: "year",
          previousName: intl6.t.R7VMEE,
          currentName: intl6.t["U8lK/J"],
          nextName: intl6.t.OppVVE,
        };
      }
    }
  }
  return items1;
};
