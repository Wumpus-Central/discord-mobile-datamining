// _runtime/metro/13980__.js
import getInternalSlots2 from "../13981_getInternalSlots.js";
import _mod13982 from "13982__.js";
import _mod14046 from "14046__.js";
import 01172__ from "01172__.js";

let collation, found, num, obj1, supportedValuesOfResult, tmp;

function addLikelySubtags(locale) {
  let __spreadArray2;
  let __spreadArray3;
  let __spreadArray4;
  let lang;
  let region;
  let script;
  let tmpResult10;
  let tmpResult12;
  let tmpResult8;
  let variants;
  const parseUnicodeLocaleIdResult = _mod14046.parseUnicodeLocaleId(locale);
  ({ lang, script, region, variants } = parseUnicodeLocaleIdResult.lang);
  if (script) {
    if (region) {
      const obj = { lang, script, region, variants: [] };
      const tmp4 = _mod14046.likelySubtags[_mod14046.emitUnicodeLanguageId(undefined, obj)];
      if (tmp4) {
        let obj3;
        const result = _mod14046.parseUnicodeLanguageId(tmp4);
        if (undefined === variants) {
          variants = [];
        }
        if (result) {
          ({ lang: obj14.lang, script: obj14.script, region: obj14.region } = result);
          const obj2 = { lang: null, script: null, region: null, variants: __spreadArray4(tmpResult8.__spreadArray([], variants, true), result.variants, true) };
          __spreadArray4 = module_1172.__spreadArray;
          module_1172;
          obj3 = obj2;
          tmpResult8 = module_1172;
        } else {
          obj3 = { lang: "und", script: "Array", region: "parent", variants };
        }
        parseUnicodeLocaleIdResult.lang = obj3;
        return _mod14046.emitUnicodeLocaleId(parseUnicodeLocaleIdResult);
      }
    }
  }
  if (script) {
    const obj4 = { lang, script, variants: [] };
    const tmp5 = _mod14046.likelySubtags[_mod14046.emitUnicodeLanguageId(undefined, obj4)];
    if (tmp5) {
      let obj6;
      const result1 = _mod14046.parseUnicodeLanguageId(tmp5);
      let items = variants;
      if (undefined === variants) {
        items = [];
      }
      if (result1) {
        ({ lang: obj11.lang, script: obj11.script } = result1);
        const obj5 = { lang: null, script: null, region, variants: __spreadArray3(tmpResult10.__spreadArray([], items, true), result1.variants, true) };
        if (!region) {
          region = result1.region;
        }
        __spreadArray3 = module_1172.__spreadArray;
        module_1172;
        obj6 = obj5;
        tmpResult10 = module_1172;
      } else {
        obj6 = { lang: "und", script: "r", region, variants: items };
      }
      parseUnicodeLocaleIdResult.lang = obj6;
      return _mod14046.emitUnicodeLocaleId(parseUnicodeLocaleIdResult);
    }
  }
  if (region) {
    const obj7 = { lang, region, variants: [] };
    const tmp6 = _mod14046.likelySubtags[_mod14046.emitUnicodeLanguageId(undefined, obj7)];
    if (tmp6) {
      let obj9;
      const result2 = _mod14046.parseUnicodeLanguageId(tmp6);
      let items1 = variants;
      if (undefined === variants) {
        items1 = [];
      }
      if (result2) {
        const obj8 = { lang: result2.lang, script, region: result2.region, variants: __spreadArray2(tmpResult12.__spreadArray([], items1, true), result2.variants, true) };
        if (!script) {
          script = result2.script;
        }
        __spreadArray2 = module_1172.__spreadArray;
        module_1172;
        obj9 = obj8;
        tmpResult12 = module_1172;
      } else {
        obj9 = { lang: "und", script, region: "Array", variants: items1 };
      }
      parseUnicodeLocaleIdResult.lang = obj9;
      return _mod14046.emitUnicodeLocaleId(parseUnicodeLocaleIdResult);
    }
  }
  let tmp7 = _mod14046.likelySubtags[lang];
  if (!tmp7) {
    const obj10 = { lang: "und", script, variants: [] };
    tmp7 = _mod14046.likelySubtags[_mod14046.emitUnicodeLanguageId(undefined, obj10)];
  }
  if (tmp7) {
    let tmp12;
    const result3 = _mod14046.parseUnicodeLanguageId(tmp7);
    let items2 = variants;
    if (undefined === variants) {
      items2 = [];
    }
    const obj12 = { lang: null, script: null, region: null, variants: null };
    if (result3) {
      obj12.lang = result3.lang;
      obj12.script = script || result3.script;
      obj12.region = region || result3.region;
      const __spreadArray = module_1172.__spreadArray;
      module_1172;
      const tmpResult14 = module_1172;
      obj12.variants = __spreadArray(tmpResult14.__spreadArray([], items2, true), result3.variants, true);
      tmp12 = obj12;
    } else {
      obj12.lang = "und";
      obj12.script = script;
      obj12.region = region;
      obj12.variants = items2;
      tmp12 = obj12;
    }
    parseUnicodeLocaleIdResult.lang = tmp12;
    return _mod14046.emitUnicodeLocaleId(parseUnicodeLocaleIdResult);
  } else {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("No match for addLikelySubtags");
    throw error;
  }
}
const getInternalSlots = module_1172.__importDefault(getInternalSlots2);
const re3 = /^[a-z0-9]{3,8}$/i;
const relevantExtensionKeys = ["ca", "co", "hc", "kf", "kn", "nu", "fw"];
const re5 = /^[a-z0-9]{3,8}(-[a-z0-9]{3,8})*$/i;
let closure_7 = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
let tmp2 = (() => {
  class Locale {
    constructor(locale, arg1) {
      let tmp118;
      let tmp127;
      let tmp128;
      const self = this;
      let constructor;
      if (this) {
        if (self instanceof Locale) {
          constructor = self.constructor;
        }
      }
      if (constructor) {
        const prop = Locale.relevantExtensionKeys;
        const items = ["initializedLocale", "locale", "calendar", "collation", "hourCycle", "numberingSystem"];
        if (prop.indexOf("kf") > -1) {
          items.push("caseFirst");
        }
        if (prop.indexOf("kn") > -1) {
          items.push("numeric");
        }
        if (undefined === locale) {
          const _TypeError3 = TypeError;
          const self14 = this;
          const self15 = this;
          const typeError = new TypeError("First argument to Intl.Locale constructor can't be empty or missing");
          throw typeError;
        } else {
          if (typeof locale !== "string") {
            if (typeof locale !== "object") {
              const _TypeError2 = TypeError;
              const self12 = this;
              const self13 = this;
              const typeError1 = new TypeError("tag must be a string or object");
              throw typeError1;
            }
          }
          if (typeof locale === "object") {
            const defaultResult = getInternalSlots.default(locale);
            if (defaultResult) {
              let num5;
              if (_mod13982.HasOwnProperty(defaultResult, "initializedLocale")) {
                locale = defaultResult.locale;
              }
              const defaultResult1 = getInternalSlots.default(self, items);
              const result = _mod13982.CoerceOptionsToObject(arg1);
              _mod13982.invariant(typeof locale === "string", "language tag must be a string");
              const _RangeError = RangeError;
              _mod13982.invariant(_mod14046.isStructurallyValidLanguageTag(locale), "malformed language tag", RangeError);
              const GetOptionResult = _mod13982.GetOption(result, "language", "string", undefined, undefined);
              if (undefined !== GetOptionResult) {
                const _RangeError2 = RangeError;
                _mod13982.invariant(_mod14046.isUnicodeLanguageSubtag(GetOptionResult), "Malformed unicode_language_subtag", RangeError);
              }
              const GetOptionResult1 = _mod13982.GetOption(result, "script", "string", undefined, undefined);
              if (undefined !== GetOptionResult1) {
                const _RangeError3 = RangeError;
                _mod13982.invariant(_mod14046.isUnicodeScriptSubtag(GetOptionResult1), "Malformed unicode_script_subtag", RangeError);
              }
              const GetOptionResult2 = _mod13982.GetOption(result, "region", "string", undefined, undefined);
              if (undefined !== GetOptionResult2) {
                const _RangeError4 = RangeError;
                _mod13982.invariant(_mod14046.isUnicodeRegionSubtag(GetOptionResult2), "Malformed unicode_region_subtag", RangeError);
              }
              const result1 = _mod14046.parseUnicodeLanguageId(locale);
              if (undefined !== GetOptionResult) {
                result1.lang = GetOptionResult;
              }
              if (undefined !== GetOptionResult1) {
                result1.script = GetOptionResult1;
              }
              if (undefined !== GetOptionResult2) {
                result1.region = GetOptionResult2;
              }
              const _Intl = Intl;
              const emitUnicodeLocaleId = _mod14046.emitUnicodeLocaleId;
              const __assign = module_1172.__assign;
              module_1172;
              const _Object = Object;
              const obj2 = { lang: result1 };
              const obj = module_1172;
              const first = getCanonicalLocales(emitUnicodeLocaleId(__assign(obj.__assign({}, _mod14046.parseUnicodeLocaleId(locale)), obj2)))[0];
              const obj3 = Object.create(null);
              const GetOptionResult3 = _mod13982.GetOption(result, "calendar", "string", undefined, undefined);
              if (undefined !== GetOptionResult3) {
                if (!re5.test(GetOptionResult3)) {
                  const _RangeError5 = RangeError;
                  const self4 = this;
                  const self5 = this;
                  const rangeError = new RangeError("invalid calendar");
                  throw rangeError;
                }
              }
              obj3.ca = GetOptionResult3;
              const GetOptionResult4 = _mod13982.GetOption(result, "collation", "string", undefined, undefined);
              if (undefined !== GetOptionResult4) {
                if (!re5.test(GetOptionResult4)) {
                  const _RangeError6 = RangeError;
                  const self6 = this;
                  const self7 = this;
                  const rangeError1 = new RangeError("invalid collation");
                  throw rangeError1;
                }
              }
              obj3.co = GetOptionResult4;
              const GetOptionResult5 = _mod13982.GetOption(result, "firstDayOfWeek", "string", undefined, undefined);
              let tmp91 = GetOptionResult5;
              if (undefined !== GetOptionResult5) {
                tmp91 = tmp93;
                if (!re3.test(closure_7[+GetOptionResult5])) {
                  const _RangeError7 = RangeError;
                  const self8 = this;
                  const self9 = this;
                  const rangeError2 = new RangeError("Invalid firstDayOfWeek");
                  throw rangeError2;
                }
              }
              obj3.fw = tmp91;
              obj3.hc = _mod13982.GetOption(result, "hourCycle", "string", ["h11", "h12", "h23", "h24"], undefined);
              obj3.kf = _mod13982.GetOption(result, "caseFirst", "string", ["upper", "lower", "false"], undefined);
              const GetOptionResult6 = _mod13982.GetOption(result, "numeric", "boolean", undefined, undefined);
              let StringResult;
              if (undefined !== GetOptionResult6) {
                const _String = String;
                StringResult = String(GetOptionResult6);
              }
              obj3.kn = StringResult;
              const GetOptionResult7 = _mod13982.GetOption(result, "numberingSystem", "string", undefined, undefined);
              if (undefined !== GetOptionResult7) {
                if (!re5.test(GetOptionResult7)) {
                  const _RangeError8 = RangeError;
                  const self10 = this;
                  const self11 = this;
                  const rangeError3 = new RangeError("Invalid numberingSystem");
                  throw rangeError3;
                }
              }
              obj3.nu = GetOptionResult7;
              let items1 = [];
              const parseUnicodeLocaleIdResult = _mod14046.parseUnicodeLocaleId(first);
              const extensions = parseUnicodeLocaleIdResult.extensions;
              let num4 = 0;
              let arr5 = items1;
              let tmp119;
              if (0 < extensions.length) {
                do {
                  let tmp120 = extensions[num4];
                  let keywords = items1;
                  let tmp122 = tmp118;
                  let tmp123 = items1;
                  if ("u" === tmp120.type) {
                    let _Array = Array;
                    if (Array.isArray(tmp120.keywords)) {
                      keywords = tmp120.keywords;
                    }
                    tmp123 = keywords;
                    tmp122 = tmp120;
                  }
                  num4 = num4 + 1;
                  items1 = tmp123;
                  tmp118 = tmp122;
                  arr5 = tmp123;
                  tmp119 = tmp122;
                } while (num4 < extensions.length);
              }
              const _Object2 = Object;
              const obj7 = Object.create(null);
              for (let num5 = 0; num5 < prop.length; num5 = num5 + 1) {
                let tmp129;
                let tmp125 = prop[num5];
                let num6 = 0;
                let tmp130;
                if (0 < arr5.length) {
                  do {
                    let tmp131 = arr5[num6];
                    let tmp133 = tmp127;
                    let tmp134 = tmp128;
                    if (tmp131[0] === tmp125) {
                      tmp134 = tmp131[1];
                      tmp133 = tmp131;
                    }
                    num6 = num6 + 1;
                    tmp127 = tmp133;
                    tmp128 = tmp134;
                    tmp129 = tmp133;
                    tmp130 = tmp134;
                  } while (num6 < arr5.length);
                }
                let concat = "".concat;
                let tmp137 = tmp125 in obj3;
                let invariantResult5 = _mod13982.invariant(tmp137, "".concat(tmp125, " must be in options"));
                let tmp139 = obj3[tmp125];
                if (undefined !== tmp139) {
                  let concat2 = "Value for ".concat;
                  let invariantResult6 = _mod13982.invariant(typeof tmp139 === "string", "Value for ".concat(tmp125, " must be a string"));
                  if (tmp129) {
                    tmp129[1] = tmp139;
                    tmp130 = tmp139;
                  } else {
                    let items2 = [tmp125, tmp139];
                    let arr3 = arr5.push(items2);
                    tmp130 = tmp139;
                  }
                }
                obj7[tmp125] = tmp130;
              }
              if (tmp119) {
                tmp119.keywords = arr5;
              } else if (arr5.length) {
                const extensions1 = parseUnicodeLocaleIdResult.extensions;
                const obj8 = { type: "u", keywords: arr5, attributes: [] };
                extensions1.push(obj8);
              }
              const _Intl2 = Intl;
              obj7.locale = Intl.getCanonicalLocales(_mod14046.emitUnicodeLocaleId(parseUnicodeLocaleIdResult))[0];
              ({ locale: tmp14.locale, ca: tmp14.calendar, co: tmp14.collation, fw: tmp14.firstDayOfWeek, hc: tmp14.hourCycle } = obj7);
              if (prop.indexOf("kf") > -1) {
                defaultResult1.caseFirst = obj7.kf;
              }
              if (prop.indexOf("kn") > -1) {
                defaultResult1.numeric = _mod13982.SameValue(obj7.kn, "true");
              }
              defaultResult1.numberingSystem = obj7.nu;
            }
          }
          locale = locale.toString();
        }
      } else {
        const _TypeError = TypeError;
        const self2 = this;
        const self3 = this;
        const typeError2 = new TypeError("Intl.Locale must be called with 'new'");
        throw typeError2;
      }
    }
    maximize() {
      const locale = getInternalSlots.default(this).locale;
      try {
        const tmp3 = addLikelySubtags(locale);
        const obj = Object.create(Locale.prototype);
        Locale(tmp3);
        return obj;
      } catch (err) {
        const obj2 = Object.create(Locale.prototype);
        Locale(locale);
        return obj2;
      }
    }
    minimize() {
      locale = closure_2.default(this).locale;
      try {
        tmp = Locale;
        num = 0;
        tmp2 = (function removeLikelySubtags(locale) {
          let lang;
          let obj11;
          let obj5;
          let obj8;
          let region;
          let script;
          let tmp11;
          let tmp14;
          let variants;
          const tmp2 = closure_1_6(locale);
          if (tmp2) {
            let emitUnicodeLocaleId3Result;
            const emitUnicodeLanguageId = Locale(closure_1_1[3]).emitUnicodeLanguageId;
            const __assign = Locale(closure_1_1[0]).__assign;
            Locale(closure_1_1[0]);
            const obj2 = { variants: [] };
            const obj = Locale(closure_1_1[0]);
            const result = emitUnicodeLanguageId(__assign(obj.__assign({}, Locale(closure_1_1[3]).parseUnicodeLanguageId(tmp2)), obj2));
            const parseUnicodeLocaleIdResult = Locale(closure_1_1[3]).parseUnicodeLocaleId(locale);
            ({ lang, script, region, variants } = parseUnicodeLocaleIdResult.lang);
            const obj3 = { lang, variants: [] };
            if (closure_1_6(Locale(closure_1_1[3]).emitUnicodeLanguageId(obj3)) === result) {
              const emitUnicodeLocaleId3 = Locale(closure_1_1[3]).emitUnicodeLocaleId;
              const __assign4 = Locale(closure_1_1[0]).__assign;
              Locale(closure_1_1[0]);
              const tmp3Result6 = Locale(closure_1_1[0]);
              const __assignResult = tmp3Result6.__assign({}, parseUnicodeLocaleIdResult);
              if (undefined === variants) {
                variants = [];
              }
              if (!lang) {
                lang = "und";
              }
              const obj4 = { lang: obj5 };
              obj5 = { lang, script: "Array", region: "parent", variants };
              emitUnicodeLocaleId3Result = emitUnicodeLocaleId3(__assign4(__assignResult, obj4));
            } else {
              if (region) {
                const obj6 = { lang, region, variants: [] };
                if (closure_1_6(Locale(closure_1_1[3]).emitUnicodeLanguageId(obj6)) === result) {
                  const emitUnicodeLocaleId2 = Locale(closure_1_1[3]).emitUnicodeLocaleId;
                  const __assign3 = Locale(closure_1_1[0]).__assign;
                  Locale(closure_1_1[0]);
                  let items = variants;
                  const tmp3Result8 = Locale(closure_1_1[0]);
                  const __assignResult1 = tmp3Result8.__assign({}, parseUnicodeLocaleIdResult);
                  if (undefined === variants) {
                    items = [];
                  }
                  const obj7 = { lang: obj8 };
                  obj8 = { lang: tmp14, script: "r", region, variants: items };
                  tmp14 = lang || "und";
                  emitUnicodeLocaleId3Result = emitUnicodeLocaleId2(__assign3(__assignResult1, obj7));
                }
              }
              emitUnicodeLocaleId3Result = locale;
              if (script) {
                emitUnicodeLocaleId3Result = locale;
                const obj9 = { lang, script, variants: [] };
                if (closure_1_6(Locale(closure_1_1[3]).emitUnicodeLanguageId(obj9)) === result) {
                  const emitUnicodeLocaleId = Locale(closure_1_1[3]).emitUnicodeLocaleId;
                  const __assign2 = Locale(closure_1_1[0]).__assign;
                  Locale(closure_1_1[0]);
                  let items1 = variants;
                  const tmp3Result10 = Locale(closure_1_1[0]);
                  const __assignResult2 = tmp3Result10.__assign({}, parseUnicodeLocaleIdResult);
                  if (undefined === variants) {
                    items1 = [];
                  }
                  const obj10 = { lang: obj11 };
                  obj11 = { lang: tmp11, script, region: "Array", variants: items1 };
                  tmp11 = lang || "und";
                  emitUnicodeLocaleId3Result = emitUnicodeLocaleId(__assign2(__assignResult2, obj10));
                }
              }
            }
            return emitUnicodeLocaleId3Result;
          } else {
            return locale;
          }
        })(locale);
        obj = Object.create(Locale.prototype);
        tmp4 = Locale(tmp2);
        return obj;
      } catch (err) {
        tmp5 = Locale;
        obj1 = Object.create(Locale.prototype);
        tmp7 = Locale(locale);
        return obj1;
      }
      return;
    }
    toString() {
      return getInternalSlots.default(this).locale;
    }
    getCalendars() {
      const self = this;
      const defaultResult = getInternalSlots.default(this);
      const calendar = defaultResult.calendar;
      let region;
      if ("root" !== defaultResult.locale) {
        region = self.maximize().region;
      }
      let calendarPreferenceDataForRegion = Locale(dependencyMap[4]).getCalendarPreferenceDataForRegion(region);
      if (undefined !== calendar) {
        const items = [calendar];
        calendarPreferenceDataForRegion = items;
      }
      return Array.from(calendarPreferenceDataForRegion);
    }
    getCollations() {
      defaultResult = closure_1_2.default(this);
      collation = defaultResult.collation;
      supportedValuesOfResult = Locale(closure_1_1[5]).supportedValuesOf("collation", defaultResult.locale);
      found = supportedValuesOfResult.filter((item) => "standard" !== item && "search" !== item);
      sorted = found.sort();
      tmp3 = found;
      if (undefined !== collation) {
        items = [];
        items[0] = collation;
        tmp3 = items;
      }
      return Array.from(tmp3);
    }
    getHourCycles() {
      let hourCycle;
      let locale;
      const self = this;
      const defaultResult = getInternalSlots.default(this);
      if (Locale(dependencyMap[2]).HasOwnProperty(defaultResult, "initializedLocale")) {
        ({ hourCycle, locale } = getInternalSlots.default(self));
        let region;
        getInternalSlots.default(self);
        if ("root" !== locale) {
          region = self.maximize().region;
        }
        let hourCyclesPreferenceDataForLocaleOrRegion = Locale(dependencyMap[4]).getHourCyclesPreferenceDataForLocaleOrRegion(locale, region);
        if (undefined !== hourCycle) {
          const items = [hourCycle];
          hourCyclesPreferenceDataForLocaleOrRegion = items;
        }
        const _Array = Array;
        return Array.from(hourCyclesPreferenceDataForLocaleOrRegion);
      } else {
        const _TypeError = TypeError;
        const self2 = this;
        const self3 = this;
        const typeError = new TypeError("Error uninitialized locale");
        throw typeError;
      }
    }
    getNumberingSystems() {
      let __spreadArrayResult;
      const defaultResult = getInternalSlots.default(this);
      const numberingSystem = defaultResult.numberingSystem;
      const language = this.language;
      const tmp4 = Locale(dependencyMap[6]).numberingSystems[defaultResult.locale] ?? Locale(dependencyMap[6]).numberingSystems[language];
      const items = [];
      if (tmp4) {
        const tmp2Result = Locale(dependencyMap[0]);
        __spreadArrayResult = tmp2Result.__spreadArray(items, tmp4, true);
      } else {
        __spreadArrayResult = items;
      }
      if (undefined !== numberingSystem) {
        const items1 = [numberingSystem];
        __spreadArrayResult = items1;
      }
      return Array.from(__spreadArrayResult);
    }
    getTimeZones() {
      const region = Locale(dependencyMap[3]).parseUnicodeLanguageId(getInternalSlots.default(this).locale).region;
      let arr;
      if (region) {
        const timeZonePreferenceForRegion = Locale(dependencyMap[4]).getTimeZonePreferenceForRegion(region);
        const sorted = timeZonePreferenceForRegion.sort();
        const _Array = Array;
        arr = Array.from(timeZonePreferenceForRegion);
      }
      return arr;
    }
    getTextInfo() {
      const obj = Object.create(Object.prototype);
      let str2 = "ltr";
      const str = this.minimize();
      const str1 = str.toString();
      if ("right-to-left" === Locale(dependencyMap[7]).characterOrders[str1]) {
        str2 = "rtl";
      }
      const dataProperty = Locale(dependencyMap[2]).createDataProperty(obj, "direction", str2);
      return obj;
    }
    getWeekInfo() {
      const self = this;
      const obj2 = Object.create(Object.prototype);
      const defaultResult = getInternalSlots.default(this);
      if (Locale(dependencyMap[2]).HasOwnProperty(defaultResult, "initializedLocale")) {
        let region;
        if ("root" !== getInternalSlots.default(self).locale) {
          region = self.maximize().region;
        }
        const weekDataForRegion = Locale(dependencyMap[4]).getWeekDataForRegion(region);
        const weekend = weekDataForRegion.weekend;
        const dataProperty = Locale(dependencyMap[2]).createDataProperty(obj2, "firstDay", weekDataForRegion.firstDay);
        const dataProperty1 = Locale(dependencyMap[2]).createDataProperty(obj2, "weekend", weekend);
        const dataProperty2 = Locale(dependencyMap[2]).createDataProperty(obj2, "minimalDays", weekDataForRegion.minimalDays);
        const firstDayOfWeek = defaultResult.firstDayOfWeek;
        if (undefined !== firstDayOfWeek) {
          obj2.firstDay = firstDayOfWeek;
        }
        return obj2;
      } else {
        const _TypeError = TypeError;
        const self2 = this;
        const self3 = this;
        const typeError = new TypeError("Error uninitialized locale");
        throw typeError;
      }
    }
  }
  let obj = {
    get() {
      const locale = getInternalSlots.default(this).locale;
      return Locale(dependencyMap[3]).emitUnicodeLanguageId(Locale(dependencyMap[3]).parseUnicodeLanguageId(locale));
    },
    enumerable: false,
    configurable: true
  };
  Object.defineProperty(Locale.prototype, "baseName", obj);
  let obj2 = {
    get() {
      return getInternalSlots.default(this).calendar;
    },
    enumerable: false,
    configurable: true
  };
  Object.defineProperty(Locale.prototype, "calendar", obj2);
  let obj3 = {
    get() {
      return getInternalSlots.default(this).collation;
    },
    enumerable: false,
    configurable: true
  };
  Object.defineProperty(Locale.prototype, "collation", obj3);
  let obj4 = {
    get() {
      return getInternalSlots.default(this).caseFirst;
    },
    enumerable: false,
    configurable: true
  };
  Object.defineProperty(Locale.prototype, "caseFirst", obj4);
  let obj5 = {
    get() {
      return getInternalSlots.default(this).numeric;
    },
    enumerable: false,
    configurable: true
  };
  Object.defineProperty(Locale.prototype, "numeric", obj5);
  let obj6 = {
    get() {
      return getInternalSlots.default(this).numberingSystem;
    },
    enumerable: false,
    configurable: true
  };
  Object.defineProperty(Locale.prototype, "numberingSystem", obj6);
  let obj7 = {
    get() {
      return Locale(dependencyMap[3]).parseUnicodeLanguageId(getInternalSlots.default(this).locale).lang;
    },
    enumerable: false,
    configurable: true
  };
  Object.defineProperty(Locale.prototype, "language", obj7);
  let obj8 = {
    get() {
      return Locale(dependencyMap[3]).parseUnicodeLanguageId(getInternalSlots.default(this).locale).script;
    },
    enumerable: false,
    configurable: true
  };
  Object.defineProperty(Locale.prototype, "script", obj8);
  let obj9 = {
    get() {
      return Locale(dependencyMap[3]).parseUnicodeLanguageId(getInternalSlots.default(this).locale).region;
    },
    enumerable: false,
    configurable: true
  };
  Object.defineProperty(Locale.prototype, "region", obj9);
  let obj10 = {
    get() {
      const defaultResult = getInternalSlots.default(this);
      if (Locale(dependencyMap[2]).HasOwnProperty(defaultResult, "initializedLocale")) {
        return defaultResult.firstDayOfWeek;
      } else {
        const _TypeError = TypeError;
        const self = this;
        const self2 = this;
        const typeError = new TypeError("Error uninitialized locale");
        throw typeError;
      }
    },
    enumerable: false,
    configurable: true
  };
  Object.defineProperty(Locale.prototype, "firstDayOfWeek", obj10);
  let obj11 = {
    get() {
      const defaultResult = getInternalSlots.default(this);
      if (Locale(dependencyMap[2]).HasOwnProperty(defaultResult, "initializedLocale")) {
        return defaultResult.hourCycle;
      } else {
        const _TypeError = TypeError;
        const self = this;
        const self2 = this;
        const typeError = new TypeError("Error uninitialized locale");
        throw typeError;
      }
    },
    enumerable: false,
    configurable: true
  };
  Object.defineProperty(Locale.prototype, "hourCycle", obj11);
  Locale.relevantExtensionKeys = relevantExtensionKeys;
  Locale.polyfilled = true;
  return Locale;
})();
try {
  const _Symbol = Symbol;
  if (typeof Symbol !== "undefined") {
    let _Object2 = Object;
    const _Symbol2 = Symbol;
    Object.defineProperty(tmp2.prototype, Symbol.toStringTag, { value: "Intl.Locale", writable: false, enumerable: false, configurable: true });
  }
  let _Object = Object;
  let str = "length";
  Object.defineProperty(tmp2.prototype.constructor, "length", { value: 1, writable: false, enumerable: false, configurable: true });
  exports.default = tmp2;
} catch (err) {
}
const Locale_export = tmp2;

export { Locale_export as Locale };