// _runtime/13481_addLikelySubtags.js
import e from "e";
import getInternalSlots from "getInternalSlots";
import { isStructurallyValidLanguageTag } from "13547_isStructurallyValidLanguageTag.js";

function addLikelySubtags(locale) {
  let lang;
  let region;
  let script;
  let variants;
  const parseUnicodeLocaleIdResult = isStructurallyValidLanguageTag.parseUnicodeLocaleId(locale);
  ({ lang, script, region, variants } = parseUnicodeLocaleIdResult.lang);
  if (script) {
    if (region) {
      let obj = { lang: null, script: null, region: null, variants: null };
      obj[0] = lang;
      obj[1] = script;
      obj[2] = region;
      obj[3] = [];
      const tmp4 = tmp(13547).likelySubtags[tmp(undefined, 13547).emitUnicodeLanguageId(undefined, obj)];
      if (tmp4) {
        const result = tmp(13547).parseUnicodeLanguageId(tmp4);
        if (undefined === variants) {
          variants = [];
        }
        if (result) {
          obj = { lang: null, script: null, region: null, variants: null };
          ({ lang: obj17[0], script: obj17[1], region: obj17[2] } = result);
          let tmpResult = tmp(1281);
          tmpResult = tmp(1281);
          obj[3] = tmpResult.__spreadArray(tmpResult.__spreadArray([], variants, true), result.variants, true);
        } else {
          obj = { lang: null, script: "Array", region: "options", variants: true };
          obj[0] = "und";
          obj[3] = variants;
        }
        parseUnicodeLocaleIdResult.lang = obj;
        return tmp(13547).emitUnicodeLocaleId(parseUnicodeLocaleIdResult);
      }
    }
  }
  if (script) {
    const obj1 = { lang: null, script: null, variants: null };
    obj1[0] = lang;
    obj1[1] = script;
    obj1[2] = [];
    const tmp5 = tmp(13547).likelySubtags[tmp(undefined, 13547).emitUnicodeLanguageId(undefined, obj1)];
    if (tmp5) {
      const result1 = tmp(13547).parseUnicodeLanguageId(tmp5);
      let items = variants;
      if (undefined === variants) {
        items = [];
      }
      if (result1) {
        const obj2 = { lang: null, script: null, region: null, variants: null };
        ({ lang: obj13[0], script: obj13[1] } = result1);
        if (!region) {
          region = result1.region;
        }
        obj2[2] = region;
        const tmpResult1 = tmp(1281);
        obj2[3] = tmpResult1.__spreadArray(tmp(1281).__spreadArray([], items, true), result1.variants, true);
        let obj3 = obj2;
        const tmpResult2 = tmp(1281);
      } else {
        obj3 = { lang: null, script: "r", region: "ct", variants: null };
        obj3[0] = "und";
        obj3[2] = region;
        obj3[3] = items;
      }
      parseUnicodeLocaleIdResult.lang = obj3;
      return tmp(13547).emitUnicodeLocaleId(parseUnicodeLocaleIdResult);
    }
  }
  if (region) {
    const obj4 = { lang: null, region: null, variants: null };
    obj4[0] = lang;
    obj4[1] = region;
    obj4[2] = [];
    const tmp6 = tmp(13547).likelySubtags[tmp(undefined, 13547).emitUnicodeLanguageId(undefined, obj4)];
    if (tmp6) {
      const result2 = tmp(13547).parseUnicodeLanguageId(tmp6);
      let items1 = variants;
      if (undefined === variants) {
        items1 = [];
      }
      if (result2) {
        const obj5 = { lang: null, script: null, region: null, variants: null };
        obj5[0] = result2.lang;
        if (!script) {
          script = result2.script;
        }
        obj5[1] = script;
        obj5[2] = result2.region;
        const tmpResult3 = tmp(1281);
        obj5[3] = tmpResult3.__spreadArray(tmp(1281).__spreadArray([], items1, true), result2.variants, true);
        let obj6 = obj5;
        const tmpResult4 = tmp(1281);
      } else {
        obj6 = { lang: null, script: null, region: "Array", variants: "ClipPath" };
        obj6[0] = "und";
        obj6[1] = script;
        obj6[3] = items1;
      }
      parseUnicodeLocaleIdResult.lang = obj6;
      return tmp(13547).emitUnicodeLocaleId(parseUnicodeLocaleIdResult);
    }
  }
  let tmp7 = tmp(13547).likelySubtags[lang];
  if (!tmp7) {
    const obj7 = { lang: "und", script: null, variants: null };
    obj7[1] = script;
    obj7[2] = [];
    tmp7 = tmp(13547).likelySubtags[tmp(undefined, 13547).emitUnicodeLanguageId(undefined, obj7)];
  }
  if (tmp7) {
    const result3 = tmp(13547).parseUnicodeLanguageId(tmp7);
    let items2 = variants;
    if (undefined === variants) {
      items2 = [];
    }
    const obj8 = { lang: null, script: null, region: null, variants: null };
    if (result3) {
      obj8[0] = result3.lang;
      let script2 = script;
      if (!script) {
        script2 = result3.script;
      }
      obj8[1] = script2;
      let region2 = region;
      if (!region) {
        region2 = result3.region;
      }
      obj8[2] = region2;
      const tmpResult5 = tmp(1281);
      obj8[3] = tmpResult5.__spreadArray(tmp(1281).__spreadArray([], items2, true), result3.variants, true);
      let tmp14 = obj8;
      const tmpResult6 = tmp(1281);
    } else {
      obj8[0] = "und";
      obj8[1] = script;
      obj8[2] = region;
      obj8[3] = items2;
      tmp14 = obj8;
    }
    parseUnicodeLocaleIdResult.lang = tmp14;
    return tmp(13547).emitUnicodeLocaleId(parseUnicodeLocaleIdResult);
  } else {
    const _Error = Error;
    const error = new Error("No match for addLikelySubtags");
    throw error;
  }
}
const re3 = /^[a-z0-9]{3,8}$/i;
let closure_4 = ["ca", "co", "hc", "kf", "kn", "nu", "fw"];
const re5 = /^[a-z0-9]{3,8}(-[a-z0-9]{3,8})*$/i;
let closure_7 = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
let tmp2 = (() => {
  class Locale {
    constructor(arg0, arg1) {
      self = this;
      constructor = undefined;
      if (this) {
        tmp2 = Locale;
        if (self instanceof Locale) {
          constructor = self.constructor;
        }
      }
      if (constructor) {
        tmp8 = Locale;
        prop = Locale.relevantExtensionKeys;
        items = ["initializedLocale", "locale", "calendar", "collation", "hourCycle", "numberingSystem"];
        str2 = "kf";
        num = -1;
        if (prop.indexOf("kf") > -1) {
          str3 = "caseFirst";
          arr = items.push("caseFirst");
        }
        str4 = "kn";
        if (prop.indexOf("kn") > -1) {
          str5 = "numeric";
          arr1 = items.push("numeric");
        }
        tmp11 = arg0;
        if (undefined === arg0) {
          constructor = globalThis;
          _TypeError3 = TypeError;
          constructor = new.target;
          str43 = "First argument to Intl.Locale constructor can't be empty or missing";
          constructor = new.target;
          constructor = new TypeError("First argument to Intl.Locale constructor can't be empty or missing");
          throw constructor;
        } else {
          if (typeof arg0 !== "string") {
            if (typeof arg0 !== "object") {
              constructor = globalThis;
              _TypeError2 = TypeError;
              constructor = new.target;
              str42 = "tag must be a string or object";
              constructor = new.target;
              constructor = new TypeError("tag must be a string or object");
              throw constructor;
            }
          }
          if (typeof arg0 === "object") {
            constructor = outer1_2;
            constructor = outer1_2.default(arg0);
            if (constructor) {
              tmp12 = Locale;
              tmp13 = outer1_1;
              str6 = "initializedLocale";
              if (Locale(outer1_1[2]).HasOwnProperty(constructor, "initializedLocale")) {
                locale = constructor.locale;
              }
              tmp14 = arg1;
              tmp15 = outer1_2;
              defaultResult = outer1_2.default(self, items);
              tmp17 = Locale;
              tmp18 = outer1_1;
              result = Locale(outer1_1[2]).CoerceOptionsToObject(arg1);
              tmp20 = Locale;
              tmp21 = outer1_1;
              str7 = "language tag must be a string";
              invariantResult = Locale(outer1_1[2]).invariant(typeof locale === "string", "language tag must be a string");
              tmp23 = Locale;
              tmp24 = outer1_1;
              tmp25 = Locale;
              tmp26 = outer1_1;
              tmp27 = globalThis;
              _RangeError = RangeError;
              str8 = "malformed language tag";
              invariantResult1 = Locale(outer1_1[2]).invariant(Locale(outer1_1[3]).isStructurallyValidLanguageTag(locale), "malformed language tag", RangeError);
              tmp29 = Locale;
              tmp30 = outer1_1;
              str9 = "string";
              str10 = "language";
              tmp31 = result;
              str11 = "string";
              GetOptionResult = Locale(outer1_1[2]).GetOption(result, "language", "string", undefined, undefined);
              tmp33 = undefined !== GetOptionResult;
              tmp34 = locale;
              if (tmp33) {
                tmp35 = Locale;
                tmp36 = outer1_1;
                tmp37 = Locale;
                tmp38 = outer1_1;
                _RangeError2 = RangeError;
                str12 = "Malformed unicode_language_subtag";
                invariantResult2 = Locale(outer1_1[2]).invariant(Locale(outer1_1[3]).isUnicodeLanguageSubtag(GetOptionResult), "Malformed unicode_language_subtag", RangeError);
              }
              tmp40 = Locale;
              tmp41 = outer1_1;
              str13 = "script";
              tmp42 = result;
              str14 = "string";
              GetOptionResult1 = Locale(outer1_1[2]).GetOption(result, "script", "string", undefined, undefined);
              tmp44 = undefined !== GetOptionResult1;
              if (tmp44) {
                tmp45 = Locale;
                tmp46 = outer1_1;
                tmp47 = Locale;
                tmp48 = outer1_1;
                _RangeError3 = RangeError;
                str15 = "Malformed unicode_script_subtag";
                invariantResult3 = Locale(outer1_1[2]).invariant(Locale(outer1_1[3]).isUnicodeScriptSubtag(GetOptionResult1), "Malformed unicode_script_subtag", RangeError);
              }
              tmp50 = Locale;
              tmp51 = outer1_1;
              str16 = "region";
              tmp52 = result;
              str17 = "string";
              GetOptionResult2 = Locale(outer1_1[2]).GetOption(result, "region", "string", undefined, undefined);
              tmp54 = undefined !== GetOptionResult2;
              if (tmp54) {
                tmp55 = Locale;
                tmp56 = outer1_1;
                tmp57 = Locale;
                tmp58 = outer1_1;
                _RangeError4 = RangeError;
                str18 = "Malformed unicode_region_subtag";
                invariantResult4 = Locale(outer1_1[2]).invariant(Locale(outer1_1[3]).isUnicodeRegionSubtag(GetOptionResult2), "Malformed unicode_region_subtag", RangeError);
              }
              tmp60 = Locale;
              tmp61 = outer1_1;
              result1 = Locale(outer1_1[3]).parseUnicodeLanguageId(locale);
              if (tmp33) {
                result1.lang = GetOptionResult;
              }
              if (tmp44) {
                result1.script = GetOptionResult1;
              }
              if (tmp54) {
                result1.region = GetOptionResult2;
              }
              _Intl = Intl;
              tmp63 = Locale;
              tmp64 = outer1_1;
              tmp65 = Locale;
              tmp66 = outer1_1;
              obj = Locale(outer1_1[0]);
              tmp67 = Locale;
              tmp68 = outer1_1;
              obj2 = Locale(outer1_1[0]);
              tmp69 = Locale;
              tmp70 = outer1_1;
              obj = { lang: null };
              obj[0] = result1;
              _Object = Object;
              tmp71 = null;
              obj1 = Object.create(null);
              tmp73 = Locale;
              tmp74 = outer1_1;
              str19 = "calendar";
              tmp75 = result;
              str20 = "string";
              GetOptionResult3 = Locale(outer1_1[2]).GetOption(result, "calendar", "string", undefined, undefined);
              if (undefined !== GetOptionResult3) {
                tmp77 = outer1_5;
                if (!outer1_5.test(GetOptionResult3)) {
                  _RangeError5 = RangeError;
                  tmp78 = new.target;
                  str21 = "invalid calendar";
                  tmp79 = new.target;
                  rangeError = new RangeError("invalid calendar");
                  tmp81 = rangeError;
                  throw rangeError;
                }
              }
              obj1.ca = GetOptionResult3;
              tmp82 = Locale;
              tmp83 = outer1_1;
              str22 = "collation";
              tmp84 = result;
              str23 = "string";
              GetOptionResult4 = Locale(outer1_1[2]).GetOption(result, "collation", "string", undefined, undefined);
              if (undefined !== GetOptionResult4) {
                tmp86 = outer1_5;
                if (!outer1_5.test(GetOptionResult4)) {
                  _RangeError6 = RangeError;
                  tmp87 = new.target;
                  str24 = "invalid collation";
                  tmp88 = new.target;
                  rangeError1 = new RangeError("invalid collation");
                  tmp90 = rangeError1;
                  throw rangeError1;
                }
              }
              obj1.co = GetOptionResult4;
              tmp91 = Locale;
              tmp92 = outer1_1;
              str25 = "firstDayOfWeek";
              tmp93 = result;
              str26 = "string";
              GetOptionResult5 = Locale(outer1_1[2]).GetOption(result, "firstDayOfWeek", "string", undefined, undefined);
              tmp95 = GetOptionResult5;
              if (undefined !== GetOptionResult5) {
                tmp96 = outer1_7;
                tmp97 = outer1_7[+GetOptionResult5];
                tmp98 = outer1_3;
                tmp95 = tmp97;
                if (!outer1_3.test(tmp97)) {
                  _RangeError7 = RangeError;
                  tmp99 = new.target;
                  str27 = "Invalid firstDayOfWeek";
                  constructor = new.target;
                  constructor = new RangeError("Invalid firstDayOfWeek");
                  throw constructor;
                }
              }
              obj1.fw = tmp95;
              constructor = Locale;
              constructor = outer1_1;
              str28 = "hourCycle";
              constructor = result;
              str29 = "string";
              obj1.hc = Locale(outer1_1[2]).GetOption(result, "hourCycle", "string", ["h11", "h12", "h23", "h24"], undefined);
              constructor = Locale;
              constructor = outer1_1;
              str30 = "caseFirst";
              constructor = result;
              obj1.kf = Locale(outer1_1[2]).GetOption(result, "caseFirst", "string", ["upper", "lower", "false"], undefined);
              constructor = Locale;
              constructor = outer1_1;
              str31 = "boolean";
              str32 = "numeric";
              constructor = result;
              constructor = Locale(outer1_1[2]).GetOption(result, "numeric", "boolean", undefined, undefined);
              constructor = undefined;
              if (undefined !== constructor) {
                _String = String;
                constructor = String(constructor);
              }
              obj1.kn = constructor;
              constructor = Locale;
              constructor = outer1_1;
              str33 = "numberingSystem";
              constructor = result;
              str34 = "string";
              constructor = Locale(outer1_1[2]).GetOption(result, "numberingSystem", "string", undefined, undefined);
              if (undefined !== constructor) {
                constructor = outer1_5;
                if (!outer1_5.test(constructor)) {
                  _RangeError8 = RangeError;
                  constructor = new.target;
                  str35 = "Invalid numberingSystem";
                  constructor = new.target;
                  constructor = new RangeError("Invalid numberingSystem");
                  throw constructor;
                }
              }
              obj1.nu = constructor;
              items1 = [];
              constructor = Locale;
              constructor = outer1_1;
              constructor = Locale(outer1_1[3]).parseUnicodeLocaleId(Intl.getCanonicalLocales(Locale(outer1_1[3]).emitUnicodeLocaleId(obj.__assign(obj2.__assign({}, Locale(outer1_1[3]).parseUnicodeLocaleId(locale)), obj)))[0]);
              extensions = constructor.extensions;
              num2 = 0;
              num3 = 1;
              str36 = "u";
              num4 = 0;
              arr5 = items1;
              constructor = undefined;
              if (0 < extensions.length) {
                do {
                  constructor = extensions[num4];
                  constructor = num4;
                  keywords = items1;
                  constructor = items1;
                  if ("u" === constructor.type) {
                    _Array = Array;
                    if (Array.isArray(constructor.keywords)) {
                      keywords = constructor.keywords;
                    }
                    constructor = keywords;
                  }
                  num4 = num4 + 1;
                  items1 = constructor;
                  arr5 = constructor;
                } while (num4 < extensions.length);
              }
              _Object2 = Object;
              constructor = Object.create(null);
              str37 = "Value for ";
              str38 = " must be a string";
              str39 = "";
              str40 = " must be in options";
              for (let num5 = 0; num5 < prop.length; num5 = num5 + 1) {
                constructor = prop[num5];
                constructor = num5;
                num6 = 0;
                constructor = undefined;
                if (0 < arr5.length) {
                  do {
                    constructor = arr5[num6];
                    constructor = num6;
                    if (constructor[0] === constructor) {
                      constructor = constructor[1];
                    }
                    num6 = num6 + 1;
                  } while (num6 < arr5.length);
                }
                constructor = Locale;
                constructor = outer1_1;
                concat = "".concat;
                constructor = constructor in obj1;
                constructor = Locale(outer1_1[2]).invariant(constructor, "".concat(constructor, " must be in options"));
                constructor = obj1[constructor];
                if (undefined !== constructor) {
                  constructor = Locale;
                  constructor = outer1_1;
                  concat2 = "Value for ".concat;
                  constructor = Locale(outer1_1[2]).invariant(typeof constructor === "string", "Value for ".concat(constructor, " must be a string"));
                  if (constructor) {
                    constructor[1] = constructor;
                  } else {
                    items2 = [, ];
                    items2[0] = constructor;
                    items2[1] = constructor;
                    constructor = arr5.push(items2);
                  }
                }
                constructor[constructor] = constructor;
              }
              if (constructor) {
                constructor.keywords = arr5;
              } else if (arr5.length) {
                extensions1 = constructor.extensions;
                obj2 = { type: "u", keywords: null, attributes: null };
                obj2[1] = arr5;
                obj2[2] = [];
                constructor = extensions1.push(obj2);
              }
              _Intl2 = Intl;
              constructor = Locale;
              constructor = outer1_1;
              constructor.locale = Intl.getCanonicalLocales(Locale(outer1_1[3]).emitUnicodeLocaleId(constructor))[0];
              ({ locale: tmp16.locale, ca: tmp16.calendar, co: tmp16.collation, fw: tmp16.firstDayOfWeek, hc: tmp16.hourCycle } = constructor);
              if (prop.indexOf("kf") > -1) {
                defaultResult.caseFirst = constructor.kf;
              }
              if (prop.indexOf("kn") > -1) {
                constructor = Locale;
                constructor = outer1_1;
                str41 = "true";
                defaultResult.numeric = Locale(outer1_1[2]).SameValue(constructor.kn, "true");
              }
              defaultResult.numberingSystem = constructor.nu;
              return;
            }
          }
          locale = arg0.toString();
        }
      } else {
        tmp3 = globalThis;
        _TypeError = TypeError;
        tmp4 = new.target;
        str = "Intl.Locale must be called with 'new'";
        tmp5 = new.target;
        typeError = new TypeError("Intl.Locale must be called with 'new'");
        tmp7 = typeError;
        throw typeError;
      }
      return;
    }
    maximize() {
      try {
        tmp3 = Locale;
        tmp4 = outer1_6;
        num = 0;
        tmp5 = outer1_6(tmp2);
        obj = Object.create(Locale.prototype);
        tmp7 = Locale(tmp5);
        return obj;
      } catch (err) {
        tmp8 = Locale;
        obj1 = Object.create(Locale.prototype);
        tmp10 = Locale(tmp);
        return obj1;
      }
      return;
    }
    minimize() {
      try {
        tmp3 = Locale;
        num = 0;
        tmp4 = (function removeLikelySubtags(locale) {
          let lang;
          let region;
          let script;
          let variants;
          const tmp2 = callback2(locale);
          if (tmp2) {
            let obj = callback(1281);
            let obj1 = callback(1281);
            obj = { variants: null };
            obj[0] = [];
            const result = callback(13547).emitUnicodeLanguageId(obj.__assign(obj1.__assign({}, callback(13547).parseUnicodeLanguageId(tmp2)), obj));
            const parseUnicodeLocaleIdResult = callback(13547).parseUnicodeLocaleId(locale);
            ({ lang, script, region, variants } = parseUnicodeLocaleIdResult.lang);
            obj = { lang: null, variants: null };
            obj[0] = lang;
            obj[1] = [];
            if (tmp(callback(13547).emitUnicodeLanguageId(obj)) === result) {
              let tmp3Result = tmp3(1281);
              tmp3Result = tmp3(1281);
              if (undefined === variants) {
                variants = [];
              }
              if (!lang) {
                lang = "und";
              }
              obj1 = { lang: null };
              const obj2 = { lang: null, script: "Array", region: "options", variants: true };
              obj2[0] = lang;
              obj2[3] = variants;
              obj1[0] = obj2;
              let emitUnicodeLocaleIdResult = tmp3(13547).emitUnicodeLocaleId(tmp3Result.__assign(tmp3Result.__assign({}, parseUnicodeLocaleIdResult), obj1));
              const __assignResult = tmp3Result.__assign({}, parseUnicodeLocaleIdResult);
            } else {
              if (region) {
                const obj3 = { lang: null, region: null, variants: null };
                obj3[0] = lang;
                obj3[1] = region;
                obj3[2] = [];
                if (tmp(tmp3(13547).emitUnicodeLanguageId(obj3)) === result) {
                  const tmp3Result1 = tmp3(1281);
                  let items = variants;
                  const tmp3Result2 = tmp3(1281);
                  if (undefined === variants) {
                    items = [];
                  }
                  let str2 = lang;
                  if (!lang) {
                    str2 = "und";
                  }
                  const obj4 = { lang: null };
                  const obj5 = { lang: null, script: "r", region: "ct", variants: null };
                  obj5[0] = str2;
                  obj5[2] = region;
                  obj5[3] = items;
                  obj4[0] = obj5;
                  emitUnicodeLocaleIdResult = tmp3(13547).emitUnicodeLocaleId(tmp3Result1.__assign(tmp3(1281).__assign({}, parseUnicodeLocaleIdResult), obj4));
                  const __assignResult1 = tmp3(1281).__assign({}, parseUnicodeLocaleIdResult);
                }
              }
              emitUnicodeLocaleIdResult = locale;
              if (script) {
                const obj6 = { lang: null, script: null, variants: null };
                obj6[0] = lang;
                obj6[1] = script;
                obj6[2] = [];
                emitUnicodeLocaleIdResult = locale;
                if (tmp(tmp3(13547).emitUnicodeLanguageId(obj6)) === result) {
                  const tmp3Result3 = tmp3(1281);
                  let items1 = variants;
                  const tmp3Result4 = tmp3(1281);
                  if (undefined === variants) {
                    items1 = [];
                  }
                  let str = lang;
                  if (!lang) {
                    str = "und";
                  }
                  const obj7 = { lang: null };
                  const obj8 = { lang: null, script: null, region: "Array", variants: "ClipPath" };
                  obj8[0] = str;
                  obj8[1] = script;
                  obj8[3] = items1;
                  obj7[0] = obj8;
                  emitUnicodeLocaleIdResult = tmp3(13547).emitUnicodeLocaleId(tmp3Result3.__assign(tmp3(1281).__assign({}, parseUnicodeLocaleIdResult), obj7));
                  const __assignResult2 = tmp3(1281).__assign({}, parseUnicodeLocaleIdResult);
                }
              }
            }
            return emitUnicodeLocaleIdResult;
          } else {
            return locale;
          }
        })(tmp2);
        obj = Object.create(Locale.prototype);
        tmp6 = Locale(tmp4);
        return obj;
      } catch (err) {
        tmp7 = Locale;
        obj1 = Object.create(Locale.prototype);
        tmp9 = Locale(tmp);
        return obj1;
      }
      return;
    }
    toString() {
      return closure_2.default(this).locale;
    }
    getCalendars() {
      self = this;
      defaultResult = closure_2.default(this);
      calendar = defaultResult.calendar;
      region = undefined;
      if ("root" !== defaultResult.locale) {
        region = self.maximize().region;
      }
      calendarPreferenceDataForRegion = Locale(closure_1[4]).getCalendarPreferenceDataForRegion(region);
      if (undefined !== calendar) {
        items = [];
        items[0] = calendar;
        calendarPreferenceDataForRegion = items;
      }
      return Array.from(calendarPreferenceDataForRegion);
    }
    getCollations() {
      defaultResult = closure_2.default(this);
      collation = defaultResult.collation;
      supportedValuesOfResult = Locale(closure_1[5]).supportedValuesOf("collation", defaultResult.locale);
      found = supportedValuesOfResult.filter((arg0) => {
        let tmp = "standard" !== arg0;
        if (tmp) {
          tmp = "search" !== arg0;
        }
        return tmp;
      });
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
      self = this;
      obj = closure_2;
      defaultResult = closure_2.default(this);
      tmp2 = Locale;
      tmp3 = closure_1;
      if (Locale(closure_1[2]).HasOwnProperty(defaultResult, "initializedLocale")) {
        defaultResult1 = obj.default(self);
        ({ hourCycle, locale } = defaultResult1);
        str2 = "root";
        region = undefined;
        if ("root" !== locale) {
          region = self.maximize().region;
        }
        hourCyclesPreferenceDataForLocaleOrRegion = tmp2(tmp3[4]).getHourCyclesPreferenceDataForLocaleOrRegion(locale, region);
        if (undefined !== hourCycle) {
          items = [];
          items[0] = hourCycle;
          hourCyclesPreferenceDataForLocaleOrRegion = items;
        }
        tmp12 = globalThis;
        _Array = Array;
        return Array.from(hourCyclesPreferenceDataForLocaleOrRegion);
      } else {
        tmp4 = globalThis;
        _TypeError = TypeError;
        tmp5 = new.target;
        str = "Error uninitialized locale";
        tmp6 = new.target;
        typeError = new TypeError("Error uninitialized locale");
        tmp8 = typeError;
        throw typeError;
      }
    }
    getNumberingSystems() {
      defaultResult = closure_2.default(this);
      numberingSystem = defaultResult.numberingSystem;
      tmp2 = Locale;
      tmp3 = closure_1;
      tmp4 = Locale(closure_1[6]).numberingSystems[defaultResult.locale];
      if (null === tmp4) {
        tmp4 = tmp2(tmp3[6]).numberingSystems[this.language];
      }
      items = [];
      if (tmp4) {
        tmp2Result = tmp2(tmp3[0]);
        flag = true;
        __spreadArrayResult = tmp2Result.__spreadArray(items, tmp4, true);
      } else {
        __spreadArrayResult = items;
      }
      if (undefined !== numberingSystem) {
        items1 = [];
        items1[0] = numberingSystem;
        __spreadArrayResult = items1;
      }
      return Array.from(__spreadArrayResult);
    }
    getTimeZones() {
      tmp = Locale;
      tmp2 = closure_1;
      region = Locale(closure_1[3]).parseUnicodeLanguageId(closure_2.default(this).locale).region;
      arr = undefined;
      if (region) {
        timeZonePreferenceForRegion = tmp(tmp2[4]).getTimeZonePreferenceForRegion(region);
        sorted = timeZonePreferenceForRegion.sort();
        tmp5 = globalThis;
        _Array = Array;
        arr = Array.from(timeZonePreferenceForRegion);
      }
      return arr;
    }
    getTextInfo() {
      obj = Object.create(Object.prototype);
      str = this.minimize();
      str = str.toString();
      tmp3 = Locale;
      tmp4 = closure_1;
      str2 = "ltr";
      if ("right-to-left" === Locale(closure_1[7]).characterOrders[str]) {
        str2 = "rtl";
      }
      dataProperty = tmp3(tmp4[2]).createDataProperty(obj, "direction", str2);
      return obj;
    }
    getWeekInfo() {
      self = this;
      obj = Object.create(Object.prototype);
      obj = closure_2;
      defaultResult = closure_2.default(this);
      tmp3 = Locale;
      tmp4 = closure_1;
      if (Locale(closure_1[2]).HasOwnProperty(defaultResult, "initializedLocale")) {
        str2 = "root";
        region = undefined;
        if ("root" !== obj.default(self).locale) {
          region = self.maximize().region;
        }
        weekDataForRegion = tmp3(tmp4[4]).getWeekDataForRegion(region);
        str3 = "firstDay";
        dataProperty = tmp3(tmp4[2]).createDataProperty(obj, "firstDay", weekDataForRegion.firstDay);
        str4 = "weekend";
        dataProperty1 = tmp3(tmp4[2]).createDataProperty(obj, "weekend", weekDataForRegion.weekend);
        str5 = "minimalDays";
        dataProperty2 = tmp3(tmp4[2]).createDataProperty(obj, "minimalDays", weekDataForRegion.minimalDays);
        firstDayOfWeek = defaultResult.firstDayOfWeek;
        if (undefined !== firstDayOfWeek) {
          obj.firstDay = firstDayOfWeek;
        }
        return obj;
      } else {
        _TypeError = TypeError;
        tmp5 = new.target;
        str = "Error uninitialized locale";
        tmp6 = new.target;
        typeError = new TypeError("Error uninitialized locale");
        tmp8 = typeError;
        throw typeError;
      }
    }
  }
  let obj = {
    get() {
      return Locale(13547).emitUnicodeLanguageId(Locale(13547).parseUnicodeLanguageId(closure_2.default(this).locale));
    },
    enumerable: false,
    configurable: true
  };
  Object.defineProperty(Locale.prototype, "baseName", obj);
  obj = {
    get() {
      return closure_2.default(this).calendar;
    },
    enumerable: false,
    configurable: true
  };
  Object.defineProperty(Locale.prototype, "calendar", obj);
  obj = {
    get() {
      return closure_2.default(this).collation;
    },
    enumerable: false,
    configurable: true
  };
  Object.defineProperty(Locale.prototype, "collation", obj);
  Object.defineProperty(Locale.prototype, "caseFirst", {
    get() {
      return closure_2.default(this).caseFirst;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Locale.prototype, "numeric", {
    get() {
      return closure_2.default(this).numeric;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Locale.prototype, "numberingSystem", {
    get() {
      return closure_2.default(this).numberingSystem;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Locale.prototype, "language", {
    get() {
      return Locale(13547).parseUnicodeLanguageId(closure_2.default(this).locale).lang;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Locale.prototype, "script", {
    get() {
      return Locale(13547).parseUnicodeLanguageId(closure_2.default(this).locale).script;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Locale.prototype, "region", {
    get() {
      return Locale(13547).parseUnicodeLanguageId(closure_2.default(this).locale).region;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Locale.prototype, "firstDayOfWeek", {
    get() {
      const defaultResult = closure_2.default(this);
      if (Locale(13483).HasOwnProperty(defaultResult, "initializedLocale")) {
        return defaultResult.firstDayOfWeek;
      } else {
        const _TypeError = TypeError;
        const typeError = new TypeError("Error uninitialized locale");
        throw typeError;
      }
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Locale.prototype, "hourCycle", {
    get() {
      const defaultResult = closure_2.default(this);
      if (Locale(13483).HasOwnProperty(defaultResult, "initializedLocale")) {
        return defaultResult.hourCycle;
      } else {
        const _TypeError = TypeError;
        const typeError = new TypeError("Error uninitialized locale");
        throw typeError;
      }
    },
    enumerable: false,
    configurable: true
  });
  Locale.relevantExtensionKeys = closure_4;
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
  Object.defineProperty(tmp2.prototype.constructor, "length", { value: 1, writable: false, enumerable: false, configurable: true });
  exports.default = tmp2;
} catch (err) {
}

export const Locale = tmp2;