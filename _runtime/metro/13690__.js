// _runtime/metro/13690__.js
import _mod13691 from "13691__.js";
import _mod13692 from "13692__.js";
import _mod13756 from "13756__.js";
import e from "../01161_e.js";

function addLikelySubtags(arr3) {
  const parseUnicodeLocaleIdResult = _mod13756.parseUnicodeLocaleId(arr3);
  ({ lang, script, region, variants } = parseUnicodeLocaleIdResult.lang);
  if (script) {
    if (region) {
      const obj = { lang, script, region, variants: [] };
      const tmp4 = _mod13756.likelySubtags[_mod13756.emitUnicodeLanguageId(undefined, obj)];
      if (tmp4) {
        const result = _mod13756.parseUnicodeLanguageId(tmp4);
        if (undefined === variants) {
          variants = [];
        }
        if (result) {
          const obj2 = { lang: null, script: null, region: null, variants: null };
          ({ lang: obj17.lang, script: obj17.script, region: obj17.region } = result);
          const tmpResult = e;
          obj2.variants = tmpResult.__spreadArray(e.__spreadArray([], variants, true), result.variants, true);
          let obj3 = obj2;
          const tmpResult8 = e;
        } else {
          obj3 = { lang: "und", script: "Array", region: "isArray", variants };
        }
        parseUnicodeLocaleIdResult.lang = obj3;
        return _mod13756.emitUnicodeLocaleId(parseUnicodeLocaleIdResult);
      }
    }
  }
  if (script) {
    const obj4 = { lang, script, variants: [] };
    const tmp5 = _mod13756.likelySubtags[_mod13756.emitUnicodeLanguageId(undefined, obj4)];
    if (tmp5) {
      const result1 = _mod13756.parseUnicodeLanguageId(tmp5);
      let items = variants;
      if (undefined === variants) {
        items = [];
      }
      if (result1) {
        const obj5 = { lang: null, script: null, region: null, variants: null };
        ({ lang: obj13.lang, script: obj13.script } = result1);
        if (!region) {
          region = result1.region;
        }
        obj5.region = region;
        const tmpResult9 = e;
        obj5.variants = tmpResult9.__spreadArray(e.__spreadArray([], items, true), result1.variants, true);
        let obj6 = obj5;
        const tmpResult10 = e;
      } else {
        obj6 = { lang: "und", script: "r", region, variants: items };
      }
      parseUnicodeLocaleIdResult.lang = obj6;
      return _mod13756.emitUnicodeLocaleId(parseUnicodeLocaleIdResult);
    }
  }
  if (region) {
    const obj7 = { lang, region, variants: [] };
    const tmp6 = _mod13756.likelySubtags[_mod13756.emitUnicodeLanguageId(undefined, obj7)];
    if (tmp6) {
      const result2 = _mod13756.parseUnicodeLanguageId(tmp6);
      let items1 = variants;
      if (undefined === variants) {
        items1 = [];
      }
      if (result2) {
        const obj8 = { lang: result2.lang, script: null, region: null, variants: null };
        if (!script) {
          script = result2.script;
        }
        obj8.script = script;
        obj8.region = result2.region;
        const tmpResult11 = e;
        obj8.variants = tmpResult11.__spreadArray(e.__spreadArray([], items1, true), result2.variants, true);
        let obj9 = obj8;
        const tmpResult12 = e;
      } else {
        obj9 = { lang: "und", script, region: "Array", variants: items1 };
      }
      parseUnicodeLocaleIdResult.lang = obj9;
      return _mod13756.emitUnicodeLocaleId(parseUnicodeLocaleIdResult);
    }
  }
  let tmp7 = _mod13756.likelySubtags[lang];
  if (!tmp7) {
    const obj10 = { lang: "und", script, variants: [] };
    tmp7 = _mod13756.likelySubtags[_mod13756.emitUnicodeLanguageId(undefined, obj10)];
  }
  if (tmp7) {
    const result3 = _mod13756.parseUnicodeLanguageId(tmp7);
    let items2 = variants;
    if (undefined === variants) {
      items2 = [];
    }
    const obj11 = { lang: null, script: null, region: null, variants: null };
    if (result3) {
      obj11.lang = result3.lang;
      let script2 = script;
      if (!script) {
        script2 = result3.script;
      }
      obj11.script = script2;
      let region2 = region;
      if (!region) {
        region2 = result3.region;
      }
      obj11.region = region2;
      const tmpResult13 = e;
      obj11.variants = tmpResult13.__spreadArray(e.__spreadArray([], items2, true), result3.variants, true);
      let tmp14 = obj11;
      const tmpResult14 = e;
    } else {
      obj11.lang = "und";
      obj11.script = script;
      obj11.region = region;
      obj11.variants = items2;
      tmp14 = obj11;
    }
    parseUnicodeLocaleIdResult.lang = tmp14;
    return _mod13756.emitUnicodeLocaleId(parseUnicodeLocaleIdResult);
  } else {
    const _Error = Error;
    const error = new Error("No match for addLikelySubtags");
    throw error;
  }
}
const module_13691 = e.__importDefault(_mod13691);
const re3 = /^[a-z0-9]{3,8}$/i;
const relevantExtensionKeys = ["ca", "co", "hc", "kf", "kn", "nu", "fw"];
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
          arr1 = items.push("caseFirst");
        }
        str4 = "kn";
        if (prop.indexOf("kn") > -1) {
          str5 = "numeric";
          arr8 = items.push("numeric");
        }
        tmp11 = arg0;
        if (undefined === arg0) {
          tmp162 = globalThis;
          _TypeError3 = TypeError;
          tmp163 = new.target;
          str43 = "First argument to Intl.Locale constructor can't be empty or missing";
          tmp164 = new.target;
          typeError = new TypeError("First argument to Intl.Locale constructor can't be empty or missing");
          tmp166 = typeError;
          throw typeError;
        } else {
          if (typeof arg0 !== "string") {
            if (typeof arg0 !== "object") {
              tmp157 = globalThis;
              _TypeError2 = TypeError;
              tmp158 = new.target;
              str42 = "tag must be a string or object";
              tmp159 = new.target;
              typeError1 = new TypeError("tag must be a string or object");
              tmp161 = typeError1;
              throw typeError1;
            }
          }
          if (typeof arg0 === "object") {
            tmp167 = closure_2;
            defaultResult = closure_2.default(arg0);
            if (defaultResult) {
              tmp12 = closure_0;
              tmp13 = closure_1;
              str6 = "initializedLocale";
              if (closure_0(closure_1[2]).HasOwnProperty(defaultResult, "initializedLocale")) {
                locale = defaultResult.locale;
              }
              tmp14 = arg1;
              tmp15 = closure_2;
              defaultResult1 = closure_2.default(self, items);
              tmp17 = closure_0;
              tmp18 = closure_1;
              result = closure_0(closure_1[2]).CoerceOptionsToObject(arg1);
              tmp20 = closure_0;
              tmp21 = closure_1;
              str7 = "language tag must be a string";
              invariantResult = closure_0(closure_1[2]).invariant(
                typeof locale === "string",
                "language tag must be a string",
              );
              tmp23 = closure_0;
              tmp24 = closure_1;
              tmp25 = closure_0;
              tmp26 = closure_1;
              tmp27 = globalThis;
              _RangeError = RangeError;
              str8 = "malformed language tag";
              invariantResult1 = closure_0(closure_1[2]).invariant(
                closure_0(closure_1[3]).isStructurallyValidLanguageTag(locale),
                "malformed language tag",
                RangeError,
              );
              tmp29 = closure_0;
              tmp30 = closure_1;
              str9 = "string";
              str10 = "language";
              tmp31 = result;
              str11 = "string";
              GetOptionResult = closure_0(closure_1[2]).GetOption(result, "language", "string", undefined, undefined);
              tmp33 = undefined !== GetOptionResult;
              tmp34 = locale;
              if (tmp33) {
                tmp35 = closure_0;
                tmp36 = closure_1;
                tmp37 = closure_0;
                tmp38 = closure_1;
                _RangeError2 = RangeError;
                str12 = "Malformed unicode_language_subtag";
                invariantResult2 = closure_0(closure_1[2]).invariant(
                  closure_0(closure_1[3]).isUnicodeLanguageSubtag(GetOptionResult),
                  "Malformed unicode_language_subtag",
                  RangeError,
                );
              }
              tmp40 = closure_0;
              tmp41 = closure_1;
              str13 = "script";
              tmp42 = result;
              str14 = "string";
              GetOptionResult1 = closure_0(closure_1[2]).GetOption(result, "script", "string", undefined, undefined);
              tmp44 = undefined !== GetOptionResult1;
              if (tmp44) {
                tmp45 = closure_0;
                tmp46 = closure_1;
                tmp47 = closure_0;
                tmp48 = closure_1;
                _RangeError3 = RangeError;
                str15 = "Malformed unicode_script_subtag";
                invariantResult3 = closure_0(closure_1[2]).invariant(
                  closure_0(closure_1[3]).isUnicodeScriptSubtag(GetOptionResult1),
                  "Malformed unicode_script_subtag",
                  RangeError,
                );
              }
              tmp50 = closure_0;
              tmp51 = closure_1;
              str16 = "region";
              tmp52 = result;
              str17 = "string";
              GetOptionResult2 = closure_0(closure_1[2]).GetOption(result, "region", "string", undefined, undefined);
              tmp54 = undefined !== GetOptionResult2;
              if (tmp54) {
                tmp55 = closure_0;
                tmp56 = closure_1;
                tmp57 = closure_0;
                tmp58 = closure_1;
                _RangeError4 = RangeError;
                str18 = "Malformed unicode_region_subtag";
                invariantResult4 = closure_0(closure_1[2]).invariant(
                  closure_0(closure_1[3]).isUnicodeRegionSubtag(GetOptionResult2),
                  "Malformed unicode_region_subtag",
                  RangeError,
                );
              }
              tmp60 = closure_0;
              tmp61 = closure_1;
              result1 = closure_0(closure_1[3]).parseUnicodeLanguageId(locale);
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
              tmp63 = closure_0;
              tmp64 = closure_1;
              tmp65 = closure_0;
              tmp66 = closure_1;
              obj = closure_0(closure_1[0]);
              tmp67 = closure_0;
              tmp68 = closure_1;
              obj2 = closure_0(closure_1[0]);
              tmp69 = closure_0;
              tmp70 = closure_1;
              obj1 = { lang: null };
              obj1.lang = result1;
              _Object = Object;
              tmp71 = null;
              obj5 = Object.create(null);
              tmp73 = closure_0;
              tmp74 = closure_1;
              str19 = "calendar";
              tmp75 = result;
              str20 = "string";
              GetOptionResult3 = closure_0(closure_1[2]).GetOption(result, "calendar", "string", undefined, undefined);
              if (undefined !== GetOptionResult3) {
                tmp77 = re5;
                if (!re5.test(GetOptionResult3)) {
                  _RangeError5 = RangeError;
                  tmp78 = new.target;
                  str21 = "invalid calendar";
                  tmp79 = new.target;
                  rangeError = new RangeError("invalid calendar");
                  tmp81 = rangeError;
                  throw rangeError;
                }
              }
              obj5.ca = GetOptionResult3;
              tmp82 = closure_0;
              tmp83 = closure_1;
              str22 = "collation";
              tmp84 = result;
              str23 = "string";
              GetOptionResult4 = closure_0(closure_1[2]).GetOption(result, "collation", "string", undefined, undefined);
              if (undefined !== GetOptionResult4) {
                tmp86 = re5;
                if (!re5.test(GetOptionResult4)) {
                  _RangeError6 = RangeError;
                  tmp87 = new.target;
                  str24 = "invalid collation";
                  tmp88 = new.target;
                  rangeError1 = new RangeError("invalid collation");
                  tmp90 = rangeError1;
                  throw rangeError1;
                }
              }
              obj5.co = GetOptionResult4;
              tmp91 = closure_0;
              tmp92 = closure_1;
              str25 = "firstDayOfWeek";
              tmp93 = result;
              str26 = "string";
              GetOptionResult5 = closure_0(closure_1[2]).GetOption(
                result,
                "firstDayOfWeek",
                "string",
                undefined,
                undefined,
              );
              tmp95 = GetOptionResult5;
              if (undefined !== GetOptionResult5) {
                tmp96 = closure_7;
                tmp97 = closure_7[+GetOptionResult5];
                tmp98 = re3;
                tmp95 = tmp97;
                if (!re3.test(tmp97)) {
                  _RangeError7 = RangeError;
                  tmp99 = new.target;
                  str27 = "Invalid firstDayOfWeek";
                  tmp100 = new.target;
                  rangeError2 = new RangeError("Invalid firstDayOfWeek");
                  tmp102 = rangeError2;
                  throw rangeError2;
                }
              }
              obj5.fw = tmp95;
              tmp103 = closure_0;
              tmp104 = closure_1;
              str28 = "hourCycle";
              tmp105 = result;
              str29 = "string";
              obj5.hc = closure_0(closure_1[2]).GetOption(
                result,
                "hourCycle",
                "string",
                ["h11", "h12", "h23", "h24"],
                undefined,
              );
              tmp106 = closure_0;
              tmp107 = closure_1;
              str30 = "caseFirst";
              tmp108 = result;
              obj5.kf = closure_0(closure_1[2]).GetOption(
                result,
                "caseFirst",
                "string",
                ["upper", "lower", "false"],
                undefined,
              );
              tmp109 = closure_0;
              tmp110 = closure_1;
              str31 = "boolean";
              str32 = "numeric";
              tmp111 = result;
              GetOptionResult6 = closure_0(closure_1[2]).GetOption(result, "numeric", "boolean", undefined, undefined);
              StringResult = undefined;
              if (undefined !== GetOptionResult6) {
                _String = String;
                StringResult = String(GetOptionResult6);
              }
              obj5.kn = StringResult;
              tmp114 = closure_0;
              tmp115 = closure_1;
              str33 = "numberingSystem";
              tmp116 = result;
              str34 = "string";
              GetOptionResult7 = closure_0(closure_1[2]).GetOption(
                result,
                "numberingSystem",
                "string",
                undefined,
                undefined,
              );
              if (undefined !== GetOptionResult7) {
                tmp118 = re5;
                if (!re5.test(GetOptionResult7)) {
                  _RangeError8 = RangeError;
                  tmp119 = new.target;
                  str35 = "Invalid numberingSystem";
                  tmp120 = new.target;
                  rangeError3 = new RangeError("Invalid numberingSystem");
                  tmp122 = rangeError3;
                  throw rangeError3;
                }
              }
              obj5.nu = GetOptionResult7;
              items1 = [];
              tmp123 = closure_0;
              tmp124 = closure_1;
              parseUnicodeLocaleIdResult = closure_0(closure_1[3]).parseUnicodeLocaleId(
                Intl.getCanonicalLocales(
                  closure_0(closure_1[3]).emitUnicodeLocaleId(
                    obj.__assign(obj2.__assign({}, closure_0(closure_1[3]).parseUnicodeLocaleId(locale)), obj1),
                  ),
                )[0],
              );
              extensions = parseUnicodeLocaleIdResult.extensions;
              num2 = 0;
              num3 = 1;
              str36 = "u";
              num4 = 0;
              arr5 = items1;
              tmp127 = undefined;
              if (0 < extensions.length) {
                do {
                  tmp128 = extensions[num4];
                  tmp129 = num4;
                  keywords = items1;
                  tmp130 = tmp126;
                  tmp131 = items1;
                  if ("u" === tmp128.type) {
                    _Array = Array;
                    if (Array.isArray(tmp128.keywords)) {
                      keywords = tmp128.keywords;
                    }
                    tmp131 = keywords;
                    tmp130 = tmp128;
                  }
                  num4 = num4 + 1;
                  items1 = tmp131;
                  tmp126 = tmp130;
                  arr5 = tmp131;
                  tmp127 = tmp130;
                } while (num4 < extensions.length);
              }
              _Object2 = Object;
              obj6 = Object.create(null);
              str37 = "Value for ";
              str38 = " must be a string";
              str39 = "";
              str40 = " must be in options";
              for (let num5 = 0; num5 < prop.length; num5 = num5 + 1) {
                tmp133 = prop[num5];
                tmp134 = num5;
                num6 = 0;
                tmp138 = undefined;
                if (0 < arr5.length) {
                  do {
                    tmp139 = arr5[num6];
                    tmp140 = num6;
                    tmp141 = tmp135;
                    tmp142 = tmp136;
                    if (tmp139[0] === tmp133) {
                      tmp142 = tmp139[1];
                      tmp141 = tmp139;
                    }
                    num6 = num6 + 1;
                    tmp135 = tmp141;
                    tmp136 = tmp142;
                    tmp137 = tmp141;
                    tmp138 = tmp142;
                  } while (num6 < arr5.length);
                }
                tmp143 = closure_0;
                tmp144 = closure_1;
                concat = "".concat;
                tmp145 = tmp133 in obj5;
                invariantResult5 = closure_0(closure_1[2]).invariant(tmp145, "".concat(tmp133, " must be in options"));
                tmp147 = obj5[tmp133];
                if (undefined !== tmp147) {
                  tmp148 = closure_0;
                  tmp149 = closure_1;
                  concat2 = "Value for ".concat;
                  invariantResult6 = closure_0(closure_1[2]).invariant(
                    typeof tmp147 === "string",
                    "Value for ".concat(tmp133, " must be a string"),
                  );
                  if (tmp137) {
                    tmp137[1] = tmp147;
                    tmp138 = tmp147;
                  } else {
                    items2 = [,];
                    items2[0] = tmp133;
                    items2[1] = tmp147;
                    arr9 = arr5.push(items2);
                    tmp138 = tmp147;
                  }
                }
                obj6[tmp133] = tmp138;
              }
              if (tmp127) {
                tmp127.keywords = arr5;
              } else if (arr5.length) {
                extensions1 = parseUnicodeLocaleIdResult.extensions;
                obj7 = { type: "u", keywords: null, attributes: null };
                obj7.keywords = arr5;
                obj7.attributes = [];
                arr10 = extensions1.push(obj7);
              }
              _Intl2 = Intl;
              tmp153 = closure_0;
              tmp154 = closure_1;
              obj6.locale = Intl.getCanonicalLocales(
                closure_0(closure_1[3]).emitUnicodeLocaleId(parseUnicodeLocaleIdResult),
              )[0];
              ({
                locale: tmp16.locale,
                ca: tmp16.calendar,
                co: tmp16.collation,
                fw: tmp16.firstDayOfWeek,
                hc: tmp16.hourCycle,
              } = obj6);
              if (prop.indexOf("kf") > -1) {
                defaultResult1.caseFirst = obj6.kf;
              }
              if (prop.indexOf("kn") > -1) {
                tmp155 = closure_0;
                tmp156 = closure_1;
                str41 = "true";
                defaultResult1.numeric = closure_0(closure_1[2]).SameValue(obj6.kn, "true");
              }
              defaultResult1.numberingSystem = obj6.nu;
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
        typeError2 = new TypeError("Intl.Locale must be called with 'new'");
        tmp7 = typeError2;
        throw typeError2;
      }
      return;
    }
    maximize() {
      try {
        tmp3 = Locale;
        tmp4 = addLikelySubtags;
        num = 0;
        tmp5 = addLikelySubtags(tmp2);
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
        tmp4 = (function removeLikelySubtags(arr3) {
          const tmp2 = closure_1_6(arr3);
          if (tmp2) {
            const obj = Locale(1161);
            const obj3 = { variants: [] };
            const result = Locale(13756).emitUnicodeLanguageId(
              obj.__assign(Locale(1161).__assign({}, Locale(13756).parseUnicodeLanguageId(tmp2)), obj3),
            );
            const parseUnicodeLocaleIdResult = Locale(13756).parseUnicodeLocaleId(arr3);
            ({ lang, script, region, variants } = parseUnicodeLocaleIdResult.lang);
            const obj4 = { lang, variants: [] };
            if (closure_1_6(Locale(13756).emitUnicodeLanguageId(obj4)) === result) {
              const tmp3Result = Locale(1161);
              const tmp3Result6 = Locale(1161);
              if (undefined === variants) {
                variants = [];
              }
              if (!lang) {
                lang = "und";
              }
              const obj5 = { lang: null };
              const obj6 = { lang, script: "Array", region: "isArray", variants };
              obj5.lang = obj6;
              let emitUnicodeLocaleIdResult = Locale(13756).emitUnicodeLocaleId(
                tmp3Result.__assign(Locale(1161).__assign({}, parseUnicodeLocaleIdResult), obj5),
              );
              const __assignResult = Locale(1161).__assign({}, parseUnicodeLocaleIdResult);
            } else {
              if (region) {
                const obj7 = { lang, region, variants: [] };
                if (closure_1_6(Locale(13756).emitUnicodeLanguageId(obj7)) === result) {
                  const tmp3Result7 = Locale(1161);
                  let items = variants;
                  const tmp3Result8 = Locale(1161);
                  if (undefined === variants) {
                    items = [];
                  }
                  let str2 = lang;
                  if (!lang) {
                    str2 = "und";
                  }
                  const obj8 = { lang: null };
                  const obj9 = { lang: str2, script: "r", region, variants: items };
                  obj8.lang = obj9;
                  emitUnicodeLocaleIdResult = Locale(13756).emitUnicodeLocaleId(
                    tmp3Result7.__assign(Locale(1161).__assign({}, parseUnicodeLocaleIdResult), obj8),
                  );
                  const __assignResult1 = Locale(1161).__assign({}, parseUnicodeLocaleIdResult);
                }
              }
              emitUnicodeLocaleIdResult = arr3;
              if (script) {
                const obj10 = { lang, script, variants: [] };
                emitUnicodeLocaleIdResult = arr3;
                if (closure_1_6(Locale(13756).emitUnicodeLanguageId(obj10)) === result) {
                  const tmp3Result9 = Locale(1161);
                  let items1 = variants;
                  const tmp3Result10 = Locale(1161);
                  if (undefined === variants) {
                    items1 = [];
                  }
                  let str = lang;
                  if (!lang) {
                    str = "und";
                  }
                  const obj11 = { lang: null };
                  const obj12 = { lang: str, script, region: "Array", variants: items1 };
                  obj11.lang = obj12;
                  emitUnicodeLocaleIdResult = Locale(13756).emitUnicodeLocaleId(
                    tmp3Result9.__assign(Locale(1161).__assign({}, parseUnicodeLocaleIdResult), obj11),
                  );
                  const __assignResult2 = Locale(1161).__assign({}, parseUnicodeLocaleIdResult);
                }
              }
            }
            return emitUnicodeLocaleIdResult;
          } else {
            return arr3;
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
      return closure_1_2.default(this).locale;
    }
    getCalendars() {
      self = this;
      defaultResult = closure_1_2.default(this);
      calendar = defaultResult.calendar;
      region = undefined;
      if ("root" !== defaultResult.locale) {
        region = self.maximize().region;
      }
      calendarPreferenceDataForRegion = Locale(closure_1_1[4]).getCalendarPreferenceDataForRegion(region);
      if (undefined !== calendar) {
        items = [];
        items[0] = calendar;
        calendarPreferenceDataForRegion = items;
      }
      return Array.from(calendarPreferenceDataForRegion);
    }
    getCollations() {
      defaultResult = closure_1_2.default(this);
      collation = defaultResult.collation;
      supportedValuesOfResult = Locale(closure_1_1[5]).supportedValuesOf("collation", defaultResult.locale);
      found = supportedValuesOfResult.filter((item) => {
        let tmp = "standard" !== item;
        if (tmp) {
          tmp = "search" !== item;
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
      obj = closure_1_2;
      defaultResult = closure_1_2.default(this);
      tmp2 = Locale;
      tmp3 = closure_1_1;
      if (Locale(closure_1_1[2]).HasOwnProperty(defaultResult, "initializedLocale")) {
        defaultResult1 = obj.default(self);
        ({ hourCycle, locale } = defaultResult1);
        str2 = "root";
        region = undefined;
        if ("root" !== locale) {
          region = self.maximize().region;
        }
        hourCyclesPreferenceDataForLocaleOrRegion = tmp2(tmp3[4]).getHourCyclesPreferenceDataForLocaleOrRegion(
          locale,
          region,
        );
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
      defaultResult = closure_1_2.default(this);
      numberingSystem = defaultResult.numberingSystem;
      tmp2 = Locale;
      tmp3 = closure_1_1;
      tmp4 = Locale(closure_1_1[6]).numberingSystems[defaultResult.locale];
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
      tmp2 = closure_1_1;
      region = Locale(closure_1_1[3]).parseUnicodeLanguageId(closure_1_2.default(this).locale).region;
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
      str1 = str.toString();
      tmp3 = Locale;
      tmp4 = closure_1_1;
      str2 = "ltr";
      if ("right-to-left" === Locale(closure_1_1[7]).characterOrders[str1]) {
        str2 = "rtl";
      }
      dataProperty = tmp3(tmp4[2]).createDataProperty(obj, "direction", str2);
      return obj;
    }
    getWeekInfo() {
      self = this;
      obj1 = Object.create(Object.prototype);
      obj = closure_1_2;
      defaultResult = closure_1_2.default(this);
      tmp3 = Locale;
      tmp4 = closure_1_1;
      if (Locale(closure_1_1[2]).HasOwnProperty(defaultResult, "initializedLocale")) {
        str2 = "root";
        region = undefined;
        if ("root" !== obj.default(self).locale) {
          region = self.maximize().region;
        }
        weekDataForRegion = tmp3(tmp4[4]).getWeekDataForRegion(region);
        str3 = "firstDay";
        dataProperty = tmp3(tmp4[2]).createDataProperty(obj1, "firstDay", weekDataForRegion.firstDay);
        str4 = "weekend";
        dataProperty1 = tmp3(tmp4[2]).createDataProperty(obj1, "weekend", weekDataForRegion.weekend);
        str5 = "minimalDays";
        dataProperty2 = tmp3(tmp4[2]).createDataProperty(obj1, "minimalDays", weekDataForRegion.minimalDays);
        firstDayOfWeek = defaultResult.firstDayOfWeek;
        if (undefined !== firstDayOfWeek) {
          obj1.firstDay = firstDayOfWeek;
        }
        return obj1;
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
  Object.defineProperty(Locale.prototype, "baseName", {
    get() {
      return Locale(13756).emitUnicodeLanguageId(
        Locale(13756).parseUnicodeLanguageId(module_13691.default(this).locale),
      );
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(Locale.prototype, "calendar", {
    get() {
      return module_13691.default(this).calendar;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(Locale.prototype, "collation", {
    get() {
      return module_13691.default(this).collation;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(Locale.prototype, "caseFirst", {
    get() {
      return module_13691.default(this).caseFirst;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(Locale.prototype, "numeric", {
    get() {
      return module_13691.default(this).numeric;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(Locale.prototype, "numberingSystem", {
    get() {
      return module_13691.default(this).numberingSystem;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(Locale.prototype, "language", {
    get() {
      return Locale(13756).parseUnicodeLanguageId(module_13691.default(this).locale).lang;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(Locale.prototype, "script", {
    get() {
      return Locale(13756).parseUnicodeLanguageId(module_13691.default(this).locale).script;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(Locale.prototype, "region", {
    get() {
      return Locale(13756).parseUnicodeLanguageId(module_13691.default(this).locale).region;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(Locale.prototype, "firstDayOfWeek", {
    get() {
      const defaultResult = module_13691.default(this);
      if (Locale(13692).HasOwnProperty(defaultResult, "initializedLocale")) {
        return defaultResult.firstDayOfWeek;
      } else {
        const _TypeError = TypeError;
        const typeError = new TypeError("Error uninitialized locale");
        throw typeError;
      }
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(Locale.prototype, "hourCycle", {
    get() {
      const defaultResult = module_13691.default(this);
      if (Locale(13692).HasOwnProperty(defaultResult, "initializedLocale")) {
        return defaultResult.hourCycle;
      } else {
        const _TypeError = TypeError;
        const typeError = new TypeError("Error uninitialized locale");
        throw typeError;
      }
    },
    enumerable: false,
    configurable: true,
  });
  Locale.relevantExtensionKeys = relevantExtensionKeys;
  Locale.polyfilled = true;
  return Locale;
})();
try {
  const _Symbol = Symbol;
  if (typeof Symbol !== "undefined") {
    let _Object2 = Object;
    const _Symbol2 = Symbol;
    Object.defineProperty(tmp2.prototype, Symbol.toStringTag, {
      value: "Intl.Locale",
      writable: false,
      enumerable: false,
      configurable: true,
    });
  }
  let _Object = Object;
  Object.defineProperty(tmp2.prototype.constructor, "length", {
    value: 1,
    writable: false,
    enumerable: false,
    configurable: true,
  });
  exports.default = tmp2;
} catch (err) {}

export const Locale = tmp2;
