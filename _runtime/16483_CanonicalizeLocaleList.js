// _runtime/16483_CanonicalizeLocaleList.js
import RegExpResult1 from "RegExpResult1" /* 16484 */;
import createDateTimeFormat from "createDateTimeFormat" /* 16485 */;

require = arg1;
const dependencyMap = arg6;
function CanonicalizeLocaleList(str) {
  if (undefined === str) {
    obj = Object.create(List.prototype);
    List();
    return obj;
  } else {
    obj = Object.create(List.prototype);
    List();
    let tmp67 = str;
    if (typeof str === "string") {
      const items = [str];
      tmp67 = items;
    }
    if (null == tmp67) {
      const _TypeError2 = TypeError;
      const typeError = new TypeError("Cannot convert null or undefined to object");
      throw typeError;
    } else {
      const _Object = Object;
      const ObjectResult = Object(tmp67);
      let num3 = 0;
      if (0 < ObjectResult.length) {
        while (true) {
          let _String = String;
          let StringResult = String(num3);
          let tmp3 = num3;
          if (StringResult in ObjectResult) {
            let tmp4 = ObjectResult[StringResult];
            if (null == tmp4) {
              break;
            } else {
              if (typeof tmp4 === "string") {
                let _String2 = String;
                str = String(tmp4);
                let tmp5 = require;
                let tmp6 = dependencyMap;
                let expBCP47Syntax = RegExpResult1.expBCP47Syntax;
                let isMatch = expBCP47Syntax.test(str);
                if (isMatch) {
                  let expVariantDupes = tmp5(16484).expVariantDupes;
                  isMatch = expVariantDupes.test(str);
                  let tmp9 = !isMatch;
                  if (!isMatch) {
                    let expSingletonDupes = tmp5(16484).expSingletonDupes;
                    tmp9 = !expSingletonDupes.test(str);
                  }
                  isMatch = tmp9;
                }
                if (isMatch) {
                  let str4 = str.toLowerCase();
                  let parts = str4.split("-");
                  let length = parts.length;
                  let num = 1;
                  if (1 < length) {
                    while (true) {
                      let tmp14 = num;
                      if (2 === parts[num].length) {
                        let str7 = parts[num];
                        parts[num] = str7.toUpperCase();
                      } else if (4 === parts[num].length) {
                        let str5 = parts[num];
                        let str6 = str5.charAt(0);
                        let arr2 = parts[num];
                        let formatted = str6.toUpperCase();
                        parts[num] = formatted + arr2.slice(1);
                      } else {
                        if (1 === parts[num].length) {
                          if ("x" !== parts[num]) {
                            break;
                          }
                        }
                        break;
                      }
                      num = num + 1;
                      if (num >= length) {
                        break;
                      }
                    }
                  }
                  let tmp16 = join;
                  let call = join.call;
                  let str8 = typeof call === "unknown" ? tmp16("-") : call(parts, "-");
                  let tmp17 = require;
                  let tmp18 = dependencyMap;
                  let match = str8.match(RegExpResult1.expExtSequences);
                  let tmp19 = str8;
                  let tmp20 = match;
                  if (match) {
                    tmp20 = match.length > 1;
                  }
                  let tmp21 = str8;
                  if (!tmp20) {
                    let tmp25 = hasOwnProperty;
                    let call3 = hasOwnProperty.call;
                    let tags = closure_22.tags;
                    let tmp26 = closure_22;
                    let str9 = tmp19;
                    if (typeof call3 === "unknown" ? tmp25(tmp19) : call3(tags, tmp19)) {
                      str9 = tmp26.tags[tmp19];
                    }
                    let parts1 = str9.split("-");
                    let length2 = parts1.length;
                    let num2 = 1;
                    let tmp27 = parts1;
                    let tmp28 = parts1;
                    if (1 < length2) {
                      while (true) {
                        let tmp29 = hasOwnProperty;
                        let call4 = hasOwnProperty.call;
                        let tmp30 = closure_22;
                        let subtags = closure_22.subtags;
                        let tmp31 = tmp27[num2];
                        let tmp32 = length2;
                        let tmp33 = num2;
                        let tmp34 = tmp27;
                        if (typeof call4 === "unknown" ? tmp29(tmp31) : call4(subtags, tmp31)) {
                          tmp27[num2] = tmp30.subtags[tmp27[num2]];
                          let tmp36 = length2;
                          let tmp37 = num2;
                          let tmp38 = tmp27;
                        } else {
                          let call5 = tmp29.call;
                          let extLang = tmp30.extLang;
                          let tmp35 = tmp27[num2];
                          tmp36 = length2;
                          tmp37 = num2;
                          tmp38 = tmp27;
                          if (typeof call5 === "unknown" ? tmp29(tmp35) : call5(extLang, tmp35)) {
                            tmp27[num2] = tmp30.extLang[tmp27[num2]][0];
                            let tmp39 = 1 === num2;
                            if (1 === num2) {
                              tmp39 = tmp30.extLang[tmp27[1]][1] === tmp27[0];
                            }
                            let tmp40 = length2;
                            let tmp41 = num2;
                            let tmp42 = tmp27;
                            if (tmp39) {
                              break;
                            } else {
                              tmp36 = tmp32;
                              tmp37 = tmp33;
                              tmp38 = tmp34;
                            }
                          }
                        }
                        num2 = tmp37 + 1;
                        length2 = tmp36;
                        tmp27 = tmp38;
                        tmp28 = tmp38;
                        continue;
                      }
                      let tmp43 = slice;
                      let call6 = slice.call;
                      let sum = num2 + 1;
                      let diff = length2 - 1;
                      let tmp46 = typeof call6 === "unknown" ? tmp43(num2) : call6(tmp27, num2);
                    }
                    let tmp47 = join;
                    let call7 = join.call;
                    let tmp48 = typeof call7 === "unknown" ? tmp47("-") : call7(tmp28, "-");
                    let tmp49 = closure_7;
                    let call8 = closure_7.call;
                    if (-1 === (typeof call8 === "unknown" ? tmp49(tmp48) : call8(obj, tmp48))) {
                      let tmp50 = push;
                      let call9 = push.call;
                      if (typeof call9 === "unknown") {
                        let tmp50Result = tmp50(tmp48);
                      } else {
                        let call9Result = call9(obj, tmp48);
                      }
                    }
                  } else {
                    let sorted = match.sort();
                    let _RegExp = RegExp;
                    let call2 = tmp16.call;
                    let RegExpResult = RegExp(`(?:${tmp17(16484).expExtSequences.source})+`, "i");
                    let replaced = str8.replace(RegExpResult, typeof call2 === "unknown" ? tmp16("") : call2(match, ""));
                  }
                } else {
                  let _RangeError = RangeError;
                  let str2 = "'";
                  let tmp10 = new.target;
                  let str3 = "' is not a structurally valid language tag";
                  let tmp11 = new.target;
                  let rangeError = new RangeError("'" + str + "' is not a structurally valid language tag");
                  let tmp13 = rangeError;
                  throw rangeError;
                }
              } else if (typeof tmp4 !== "object") {
                break;
              }
              let _TypeError = TypeError;
              let tmp52 = new.target;
              let str10 = "String or Object type expected";
              let tmp53 = new.target;
              let typeError1 = new TypeError("String or Object type expected");
              let tmp55 = typeError1;
              throw typeError1;
            }
          }
          num3 = num3 + 1;
        }
      }
      return obj;
    }
  }
}
function LookupMatcher(arg0, arg1) {
  let str;
  let tmp2;
  let num = 0;
  let tmp;
  if (0 < arg1.length) {
    const _String = String;
    const replaced = String(arg1[num]).replace(closure_21, "");
    let str3 = replaced;
    while (true) {
      while (true) {
        let tmp7 = closure_7;
        let call = closure_7.call;
        let tmp8 = str3;
        let tmp9 = str3;
        if ((typeof call === "unknown" ? tmp7(str3) : call(arg0, str3)) > -1) {
          break;
        } else {
          let lastIndexOfResult = str3.lastIndexOf("-");
          if (lastIndexOfResult < 0) {
            break;
          } else {
            let tmp11 = lastIndexOfResult >= 2 && "-" === str3.charAt(lastIndexOfResult - 2);
            let diff = lastIndexOfResult;
            if (tmp11) {
              diff = lastIndexOfResult - 2;
            }
            str3 = str3.substring(0, diff);
            continue;
          }
        }
      }
      let sum = num + 1;
      tmp = tmp9;
      tmp2 = replaced;
      str = tmp3;
      if (sum >= length) {
        break;
      } else {
        num = sum;
        tmp2 = replaced;
        str = tmp3;
        tmp = tmp9;
        if (tmp9) {
          break;
        }
      }
    }
    const str2 = String(arg1[num]);
  }
  obj = Object.create(Record.prototype);
  const keys = Object.keys();
  if (keys !== undefined) {
    while (keys[-1] !== undefined) {
      let tmp24 = tmp16;
      let tmp25 = Record;
      let tmp26 = undefined instanceof Record;
      if (tmp26) {
        if (!tmp26) {
          continue;
        } else {
          let tmp19 = fn;
          obj = { value: null, enumerable: true, writable: true, configurable: true };
          obj[0] = undefined[tmp16];
          let tmp20 = fn(obj, tmp16, obj);
          continue;
        }
        continue;
      } else {
        let tmp17 = hasOwnProperty;
        let call2 = hasOwnProperty.call;
        let tmp18 = typeof call2 === "unknown" ? tmp17(tmp16) : call2(undefined, tmp16);
      }
    }
  }
  if (undefined !== tmp) {
    obj["[[locale]]"] = tmp;
    const _String2 = String;
    const _String3 = String;
    if (StringResult !== String(tmp2)) {
      obj["[[extension]]"] = str.match(closure_21)[0];
      obj["[[extensionIndex]]"] = str.indexOf("-u-");
    }
    StringResult = String(str);
  } else {
    obj["[[locale]]"] = closure_2;
  }
  return obj;
}
function ResolveLocale(arg0, arg1, __localeMatcher__) {
  if (0 === arg0.length) {
    const _ReferenceError = ReferenceError;
    const referenceError = new ReferenceError("No locale data has been provided for this object yet.");
    throw referenceError;
  } else {
    if ("lookup" === __localeMatcher__["[[localeMatcher]]"]) {
      let tmp2 = LookupMatcher(arg0, arg1);
    } else {
      tmp2 = LookupMatcher(arg0, arg1);
    }
    const call = hasOwnProperty.call;
    if (typeof call === "unknown") {
      let callResult = tmp4("[[extension]]");
    } else {
      callResult = call(tmp2, "[[extension]]");
    }
    if (!callResult) {
      obj = Object.create(Record.prototype);
      for (const key10033 in undefined) {
        let tmp37 = key10033;
        let tmp38 = Record;
        let tmp39 = undefined instanceof Record;
        if (tmp39) {
          if (!tmp39) {
            continue;
          } else {
            let tmp13 = fn;
            obj = { value: null, enumerable: true, writable: true, configurable: true };
            obj[0] = undefined[key10033];
            let tmp14 = fn(obj, key10033, obj);
            continue;
          }
          continue;
        } else {
          let tmp10 = hasOwnProperty;
          let call3 = hasOwnProperty.call;
          if (typeof call3 === "unknown") {
            let call3Result = tmp10(key10033);
          } else {
            call3Result = call3(undefined, key10033);
          }
          let tmp12 = call3Result;
        }
      }
      obj["[[dataLocale]]"] = str;
      let str4 = "-u";
      let num4 = 0;
      let str10 = "-u";
      if (0 < arg3.length) {
        do {
          let tmp16 = arg3[num4];
          let tmp17 = arg4[str][tmp16];
          let first = tmp17[0];
          let tmp19 = closure_7;
          let tmp20 = num4;
          let tmp21 = str4;
          let str11 = "";
          let tmp22 = first;
          // // eliminated: always false
          let tmp23 = hasOwnProperty;
          let call4 = hasOwnProperty.call;
          let text = `${"[[" + tmp16}]]`;
          let str12 = str11;
          let tmp25 = tmp22;
          if (typeof call4 === "unknown" ? tmp23(`${"[[" + tmp16}]]`) : call4(__localeMatcher__, `${"[[" + tmp16}]]`)) {
            let tmp26 = __localeMatcher__["[[" + tmp16 + "]]"];
            let call5 = tmp19.call;
            let tmp27 = -1 !== (typeof call5 === "unknown" ? tmp19(tmp26) : call5(tmp17, tmp26)) && tmp26 !== tmp22;
            str12 = str11;
            tmp25 = tmp22;
            if (tmp27) {
              str12 = "";
              tmp25 = tmp26;
            }
          }
          obj["[[" + tmp16 + "]]"] = tmp25;
          str4 = str4 + str12;
          num4 = num4 + 1;
          str10 = str4;
        } while (num4 < length2);
      }
      let sum1 = str;
      if (str10.length > 2) {
        const sum = str.substring(0, undefined) + str10;
        sum1 = sum + str.substring(undefined);
      }
      obj["[[locale]]"] = sum1;
      return obj;
    } else {
      __extension__ = tmp2["[[extension]]"];
      const _String = String;
      const call2 = split.call;
      if (typeof call2 === "unknown") {
        let parts = split("-");
      } else {
        parts = call2(__extension__, "-");
      }
      __extensionIndex__ = tmp2["[[extensionIndex]]"];
    }
    tmp4 = hasOwnProperty;
  }
}
function LookupSupportedLocales(arg0, arg1) {
  obj = Object.create(List.prototype);
  List();
  let num = 0;
  if (0 < arg1.length) {
    const _String = String;
    let str2 = String(arg1[num]).replace(closure_21, "");
    do {
      while (true) {
        let tmp6 = closure_7;
        let call = closure_7.call;
        let tmp7 = str2;
        let tmp8 = str2;
        if ((typeof call === "unknown" ? tmp6(str2) : call(arg0, str2)) > -1) {
          break;
        } else {
          let lastIndexOfResult = str2.lastIndexOf("-");
          if (lastIndexOfResult < 0) {
            break;
          } else {
            let tmp10 = lastIndexOfResult >= 2 && "-" === str2.charAt(lastIndexOfResult - 2);
            let diff = lastIndexOfResult;
            if (tmp10) {
              diff = lastIndexOfResult - 2;
            }
            str2 = str2.substring(0, diff);
            continue;
          }
        }
      }
      if (undefined !== tmp8) {
        let tmp12 = push;
        let call2 = push.call;
        if (typeof call2 === "unknown") {
          let tmp12Result = tmp12(tmp3);
        } else {
          let call2Result = call2(obj, tmp3);
        }
      }
      num = num + 1;
    } while (num < length);
    const str = String(arg1[num]);
  }
  const call3 = slice.call;
  return typeof call3 === "unknown" ? slice() : call3(obj);
}
class NumberFormatConstructor {
  constructor() {
    self = this;
    first = arguments[0];
    tmp2 = arguments[1];
    if (this) {
      tmp3 = closure_3;
      if (self !== closure_3) {
        tmp6 = null;
        if (null == self) {
          tmp10 = globalThis;
          _TypeError = TypeError;
          tmp11 = new.target;
          str = "Cannot convert null or undefined to object";
          tmp12 = new.target;
          typeError = new TypeError("Cannot convert null or undefined to object");
          tmp14 = typeError;
          throw typeError;
        } else {
          tmp7 = globalThis;
          _Object = Object;
          ObjectResult = Object(self);
          tmp5Result = tmp5(ObjectResult, first, tmp2);
          numberFormat = ObjectResult;
        }
      }
      return numberFormat;
    }
    numberFormat = new closure_3.NumberFormat(first, tmp2);
    return;
  }
}
function InitializeNumberFormat(__getInternalProperties) {
  let tmp48;
  let typeError = hasOwnProperty;
  const call = hasOwnProperty.call;
  if (typeof call === "unknown") {
    let typeErrorResult = typeError("__getInternalProperties");
  } else {
    typeErrorResult = call(__getInternalProperties, "__getInternalProperties");
  }
  if (typeErrorResult) {
    let result = __getInternalProperties.__getInternalProperties(closure_16);
  } else {
    result = callback(null);
  }
  require = result;
  const tmp7 = createRegExpRestore();
  if (true === result["[[initializedIntlObject]]"]) {
    typeError = globalThis;
    const _TypeError3 = TypeError;
    typeError = new.target;
    typeError = new.target;
    typeError = new TypeError("`this` object has already been initialized as an Intl object");
    throw typeError;
  } else {
    typeError = arg1;
    typeError = arg2;
    typeError = fn;
    obj = { value: null };
    obj[0] = function value() {
      if (arguments[0] === closure_1_16) {
        return closure_0;
      }
    };
    typeError = fn(__getInternalProperties, "__getInternalProperties", obj);
    result["[[initializedIntlObject]]"] = true;
    typeError = CanonicalizeLocaleList;
    typeError = CanonicalizeLocaleList(arg1);
    if (undefined === arg2) {
      let ObjectResult = {};
    } else if (null == arg2) {
      const _TypeError = TypeError;
      const typeError1 = new TypeError("Cannot convert null or undefined to object");
      throw typeError1;
    } else {
      const _Object = Object;
      ObjectResult = Object(arg2);
    }
    obj = Object.create(Record.prototype);
    for (const key10032 in undefined) {
      typeError = key10032;
      typeError = Record;
      typeError = undefined instanceof Record;
      if (typeError) {
        if (!typeError) {
          continue;
        } else {
          let tmp20 = fn;
          obj1 = { value: null, enumerable: true, writable: true, configurable: true };
          obj1[0] = undefined[key10032];
          let tmp21 = fn(obj, key10032, obj1);
          continue;
        }
        continue;
      } else {
        let tmp17 = hasOwnProperty;
        let call2 = hasOwnProperty.call;
        if (typeof call2 === "unknown") {
          let call2Result = tmp17(key10032);
        } else {
          call2Result = call2(undefined, key10032);
        }
        let tmp19 = call2Result;
      }
    }
    List("lookup", "best fit");
    const localeMatcher = ObjectResult.localeMatcher;
    let str5 = "best fit";
    if (undefined !== localeMatcher) {
      const _String = String;
      const StringResult = String(localeMatcher);
      const call3 = closure_7.call;
      str5 = StringResult;
      if (-1 === (typeof call3 === "unknown" ? tmp27(StringResult) : call3(obj2, StringResult))) {
        const _RangeError9 = RangeError;
        typeError = new.target;
        typeError = new.target;
        typeError = new RangeError("'" + StringResult + "' is not an allowed value for `localeMatcher`");
        throw typeError;
      }
      tmp27 = closure_7;
    }
    obj["[[localeMatcher]]"] = str5;
    __localeData__ = closure_15.NumberFormat["[[localeData]]"];
    obj2 = Object.create(List.prototype);
    ({ [[locale]]: tmp5["[[locale]]"], [[nu]]: tmp5["[[numberingSystem]]"], [[dataLocale]]: tmp5["[[dataLocale]]"], [[dataLocale]]: tmp34 } = ResolveLocale(closure_15.NumberFormat["[[availableLocales]]"], typeError, obj, closure_15.NumberFormat["[[relevantExtensionKeys]]"], __localeData__));
    const tmp33 = ResolveLocale(closure_15.NumberFormat["[[availableLocales]]"], typeError, obj, closure_15.NumberFormat["[[relevantExtensionKeys]]"], __localeData__);
    List("decimal", "percent", "currency");
    const style = ObjectResult.style;
    let str9 = "decimal";
    if (undefined !== style) {
      const _String2 = String;
      const StringResult1 = String(style);
      const call4 = closure_7.call;
      str9 = StringResult1;
      if (-1 === (typeof call4 === "unknown" ? tmp39(StringResult1) : call4(obj3, StringResult1))) {
        const _RangeError8 = RangeError;
        typeError = new.target;
        typeError = new.target;
        typeError = new RangeError("'" + StringResult1 + "' is not an allowed value for `style`");
        throw typeError;
      }
      tmp39 = closure_7;
    }
    result["[[style]]"] = str9;
    const currency = ObjectResult.currency;
    let StringResult2;
    if (undefined !== currency) {
      const _String3 = String;
      StringResult2 = String(currency);
    }
    if (undefined !== StringResult2) {
      typeError = globalThis;
      const _String5 = String;
      const StringResult3 = String(StringResult2);
      typeError = +StringResult3.length;
      let diff = typeError - 1;
      let str11 = StringResult3;
      let tmp50 = StringResult3;
      if (typeError) {
        do {
          let str10 = str11.charAt(diff);
          let tmp42 = str10 >= "a";
          let tmp43 = diff;
          let tmp44 = str11;
          if (tmp42) {
            tmp42 = str10 <= "z";
          }
          let sum1 = str11;
          if (tmp42) {
            let substr = str11.slice(0, diff);
            let sum = substr + str10.toUpperCase();
            sum1 = sum + str11.slice(diff + 1);
          }
          tmp48 = +diff;
          diff = tmp48 - 1;
          str11 = sum1;
          tmp50 = sum1;
        } while (tmp48);
      }
      if (false === regex.test(tmp50)) {
        const _RangeError = RangeError;
        const rangeError = new RangeError("'" + StringResult2 + "' is not a valid currency code");
        throw rangeError;
      }
    }
    if ("currency" === str9) {
      if (undefined === StringResult2) {
        typeError = globalThis;
        const _TypeError2 = TypeError;
        typeError = new.target;
        typeError = new.target;
        typeError = new TypeError("Currency code is required when style is currency");
        throw typeError;
      }
    }
    if ("currency" === str9) {
      const formatted = StringResult2.toUpperCase();
      result["[[currency]]"] = formatted;
      let num4 = 2;
      if (undefined !== dependencyMap[formatted]) {
        num4 = dependencyMap[formatted];
      }
    }
    obj3 = Object.create(List.prototype);
    List("code", "symbol", "name");
    const currencyDisplay = ObjectResult.currencyDisplay;
    let str17 = "symbol";
    if (undefined !== currencyDisplay) {
      const _String4 = String;
      const StringResult4 = String(currencyDisplay);
      const call5 = closure_7.call;
      str17 = StringResult4;
      if (-1 === (typeof call5 === "unknown" ? tmp63(StringResult4) : call5(obj4, StringResult4))) {
        const _RangeError7 = RangeError;
        typeError = new.target;
        typeError = new.target;
        typeError = new RangeError("'" + StringResult4 + "' is not an allowed value for `currencyDisplay`");
        throw typeError;
      }
      tmp63 = closure_7;
    }
    if ("currency" === str9) {
      result["[[currencyDisplay]]"] = str17;
    }
    const minimumIntegerDigits = ObjectResult.minimumIntegerDigits;
    let num7 = 1;
    if (undefined !== minimumIntegerDigits) {
      const _Number = Number;
      const NumberResult = Number(minimumIntegerDigits);
      const _isNaN = isNaN;
      if (!isNaN(NumberResult)) {
        if (NumberResult >= 1) {
          if (NumberResult <= 21) {
            const _Math5 = Math;
            num7 = Math.floor(NumberResult);
          }
        }
      }
      const _RangeError6 = RangeError;
      typeError = new.target;
      typeError = new RangeError("Value is not a number or outside accepted range");
      throw typeError;
    }
    result["[[minimumIntegerDigits]]"] = num7;
    let num8 = 0;
    if ("currency" === str9) {
      num8 = tmp57;
    }
    const minimumFractionDigits = ObjectResult.minimumFractionDigits;
    if (undefined !== minimumFractionDigits) {
      const _Number2 = Number;
      const NumberResult1 = Number(minimumFractionDigits);
      const _isNaN2 = isNaN;
      if (!isNaN(NumberResult1)) {
        if (NumberResult1 >= 0) {
          if (NumberResult1 <= 20) {
            const _Math6 = Math;
            num8 = Math.floor(NumberResult1);
          }
        }
      }
      const _RangeError5 = RangeError;
      const rangeError1 = new RangeError("Value is not a number or outside accepted range");
      throw rangeError1;
    }
    result["[[minimumFractionDigits]]"] = num8;
    if ("currency" === str9) {
      const _Math3 = Math;
      let bound = Math.max(num8, tmp57);
    } else if ("percent" === str9) {
      const _Math2 = Math;
      bound = Math.max(num8, 0);
    } else {
      const _Math = Math;
      bound = Math.max(num8, 3);
    }
    const maximumFractionDigits = ObjectResult.maximumFractionDigits;
    if (undefined !== maximumFractionDigits) {
      const _Number3 = Number;
      const NumberResult2 = Number(maximumFractionDigits);
      const _isNaN3 = isNaN;
      if (!isNaN(NumberResult2)) {
        if (NumberResult2 >= num8) {
          if (NumberResult2 <= 20) {
            const _Math7 = Math;
            bound = Math.floor(NumberResult2);
          }
        }
      }
      const _RangeError4 = RangeError;
      const rangeError2 = new RangeError("Value is not a number or outside accepted range");
      throw rangeError2;
    }
    result["[[maximumFractionDigits]]"] = bound;
    if (!tmp74) {
      const minimumSignificantDigits = ObjectResult.minimumSignificantDigits;
      let num10 = 1;
      if (undefined !== minimumSignificantDigits) {
        const _Number4 = Number;
        const NumberResult3 = Number(minimumSignificantDigits);
        const _isNaN4 = isNaN;
        if (!isNaN(NumberResult3)) {
          if (NumberResult3 >= 1) {
            if (NumberResult3 <= 21) {
              const _Math8 = Math;
              num10 = Math.floor(NumberResult3);
            }
          }
        }
        const _RangeError3 = RangeError;
        const rangeError3 = new RangeError("Value is not a number or outside accepted range");
        throw rangeError3;
      }
      const maximumSignificantDigits = ObjectResult.maximumSignificantDigits;
      let num12 = 21;
      if (undefined !== maximumSignificantDigits) {
        const _Number5 = Number;
        const NumberResult4 = Number(maximumSignificantDigits);
        const _isNaN5 = isNaN;
        if (!isNaN(NumberResult4)) {
          if (NumberResult4 >= num10) {
            if (NumberResult4 <= 21) {
              const _Math4 = Math;
              num12 = Math.floor(NumberResult4);
            }
          }
        }
        const _RangeError2 = RangeError;
        const rangeError4 = new RangeError("Value is not a number or outside accepted range");
        throw rangeError4;
      }
      result["[[minimumSignificantDigits]]"] = num10;
      result["[[maximumSignificantDigits]]"] = num12;
    }
    const useGrouping = ObjectResult.useGrouping;
    let flag2 = true;
    if (undefined !== useGrouping) {
      const _Boolean = Boolean;
      flag2 = Boolean(useGrouping);
    }
    result["[[useGrouping]]"] = flag2;
    ({ positivePattern: tmp5["[[positivePattern]]"], negativePattern: tmp5["[[negativePattern]]"] } = __localeData__[tmp34].patterns[str9]);
    result["[[boundFormat]]"] = undefined;
    result["[[initializedNumberFormat]]"] = true;
    if (!closure_4) {
      const exp = tmp7.exp;
      const isMatch = exp.test(tmp7.input);
      return __getInternalProperties;
    } else {
      const call6 = GetFormatNumber.call;
      __getInternalProperties.format = typeof call6 === "unknown" ? GetFormatNumber() : call6(__getInternalProperties);
      const tmp89 = GetFormatNumber;
    }
    obj4 = Object.create(List.prototype);
    tmp74 = undefined === ObjectResult.minimumSignificantDigits && undefined === ObjectResult.maximumSignificantDigits;
  }
}
class GetFormatNumber {
  constructor() {
    self = this;
    tmp = null != this && typeof self === "object";
    if (!tmp) {
      if (tmp) {
        if (tmp["[[initializedNumberFormat]]"]) {
          if (undefined !== tmp["[[boundFormat]]"]) {
            return tmp["[[boundFormat]]"];
          } else {
            tmp13 = f64193;
            call2 = f64193.call;
            fn = function(arg0) {
              return callback(this, Number(arg0));
            };
            tmp["[[boundFormat]]"] = typeof call2 === "unknown" ? tmp13(self) : call2(fn, self);
          }
        }
      }
      tmp8 = globalThis;
      _TypeError = TypeError;
      tmp9 = new.target;
      str2 = "`this` value for format() is not an initialized Intl.NumberFormat object.";
      tmp10 = new.target;
      typeError = new TypeError("`this` value for format() is not an initialized Intl.NumberFormat object.");
      tmp12 = typeError;
      throw typeError;
    } else {
      tmp2 = hasOwnProperty;
      call = hasOwnProperty.call;
      if (typeof call === "unknown") {
        str = "__getInternalProperties";
        tmp2Result = tmp2("__getInternalProperties");
      } else {
        str3 = "__getInternalProperties";
        tmp2Result = call(self, "__getInternalProperties");
      }
      if (tmp2Result) {
        tmp6 = closure_16;
        result = self.__getInternalProperties(closure_16);
      } else {
        tmp4 = f64192;
        result = f64192(null);
      }
      tmp7 = result;
    }
    return;
  }
}
function FormatNumber(numberFormat, diff) {
  const tmp = createRegExpRestore();
  const call = hasOwnProperty.call;
  if (typeof call === "unknown") {
    let callResult = tmp2("__getInternalProperties");
  } else {
    callResult = call(numberFormat, "__getInternalProperties");
  }
  if (callResult) {
    let result = numberFormat.__getInternalProperties(closure_16);
  } else {
    result = callback(null);
  }
  __numberingSystem__ = result["[[numberingSystem]]"];
  const tmp9 = closure_15.NumberFormat["[[localeData]]"][result["[[dataLocale]]"]].symbols[__numberingSystem__] || closure_15.NumberFormat["[[localeData]]"][result["[[dataLocale]]"]].symbols.latn;
  if (false === isFinite(diff)) {
    const _isNaN = isNaN;
    if (isNaN(diff)) {
      let nan = tmp9.nan;
      let flag3 = false;
    } else {
      const infinity = tmp9.infinity;
      flag3 = false;
      nan = infinity;
      if (diff < 0) {
        flag3 = true;
        nan = infinity;
      }
    }
  } else {
    let flag = false;
    let tmp10 = diff;
    if (diff < 0) {
      tmp10 = -diff;
      flag = true;
    }
    let result1 = tmp10;
    if ("percent" === result["[[style]]"]) {
      result1 = tmp10 * 100;
    }
    const call2 = tmp2.call;
    if (typeof call2 === "unknown") {
      let tmp2Result = tmp2("[[minimumSignificantDigits]]");
    } else {
      tmp2Result = call2(result, "[[minimumSignificantDigits]]");
    }
    if (tmp2Result) {
      const call3 = tmp2.call;
      if (typeof call3 === "unknown") {
        let tmp2Result1 = tmp2("[[maximumSignificantDigits]]");
      } else {
        tmp2Result1 = call3(result, "[[maximumSignificantDigits]]");
      }
      if (tmp2Result1) {
        ({ [[minimumSignificantDigits]]: tmp34, [[maximumSignificantDigits]]: tmp35 } = result);
        if (0 === result1) {
          const call8 = join.call;
          const _Array4 = Array;
          if (typeof call8 === "unknown") {
            let call8Result = tmp38("0");
          } else {
            call8Result = call8(ArrayResult, "0");
          }
          ArrayResult = Array(tmp35 + 1);
          tmp38 = join;
        } else {
          const _Math7 = Math;
          const absolute = Math.abs(result1);
          const _Math8 = Math;
          if (typeof Math.log10 === "function") {
            const _Math = Math;
            const _Math2 = Math;
            let rounded = Math.floor(Math.log10(absolute));
          } else {
            const _Math9 = Math;
            const _Math10 = Math;
            const _Math11 = Math;
            const rounded1 = Math.round(Math.log(absolute) * Math.LOG10E);
            const _Number2 = Number;
            rounded = rounded1 - (Number(`1e${tmp76}`) > absolute);
          }
          const _Math3 = Math;
          const _Math4 = Math;
          const _Math5 = Math;
          const _Math6 = Math;
          const rounded2 = Math.round(Math.exp(Math.abs(rounded - tmp35 + 1) * Math.LN10));
          const StringResult = String(Math.round(rounded - tmp35 + 1 < 0 ? result1 * rounded2 : result1 / rounded2));
          if (rounded < tmp35) {
            let tmp50 = StringResult;
            if (rounded !== tmp35 - 1) {
              if (rounded >= 0) {
                const text = `${arr7.slice(0, tmp36 + 1)}.`;
                let text1 = `${arr7.slice(0, tmp36 + 1)}.${arr7.slice(tmp36 + 1)}`;
              } else {
                text1 = StringResult;
                if (rounded < 0) {
                  const call9 = join.call;
                  const _Array5 = Array;
                  if (typeof call9 === "unknown") {
                    tmp42("0");
                  } else {
                    call9(ArrayResult1, "0");
                  }
                  text1 = `0.${tmp44}${arr7}`;
                  ArrayResult1 = Array(1 - (rounded + 1));
                  tmp42 = join;
                }
              }
              let substr = text1;
              if (text1.indexOf(".") >= 0) {
                substr = text1;
                if (tmp35 > tmp34) {
                  diff = tmp35 - tmp34;
                  let str21 = text1;
                  if (diff > 0) {
                    let arr9 = text1;
                    str21 = text1;
                    if ("0" === text1.charAt(text1.length - 1)) {
                      const str22 = arr9.slice(0, -1);
                      const diff1 = diff - 1;
                      str21 = str22;
                      while (diff1 > 0) {
                        diff = diff1;
                        arr9 = str22;
                        str21 = str22;
                        if ("0" !== str22.charAt(str22.length - 1)) {
                          break;
                        }
                      }
                    }
                  }
                  substr = str21;
                  if ("." === str21.charAt(str21.length - 1)) {
                    substr = str21.slice(0, -1);
                  }
                }
              }
              tmp50 = substr;
            }
          }
          const call10 = join.call;
          const _Array6 = Array;
          if (typeof call10 === "unknown") {
            let call10Result = tmp51("0");
          } else {
            call10Result = call10(ArrayResult2, "0");
          }
          const sum = StringResult + call10Result;
          ArrayResult2 = Array(rounded - tmp35 + 1 + 1);
          tmp51 = join;
        }
      }
    }
    ({ [[minimumIntegerDigits]]: tmp14, [[maximumFractionDigits]]: tmp15 } = result);
    const _Number = Number;
    const call4 = toFixed.call;
    const str5 = typeof call4 === "unknown" ? toFixed(tmp15) : call4(result1, tmp15);
    const length = str5.split(".")[0].length;
    let diff2 = tmp15 - result["[[minimumFractionDigits]]"];
    const index = str5.indexOf("e");
    let num3 = 0;
    if (index > -1) {
      num3 = str5.slice(index + 1);
    }
    if (!num3) {
      let arr4 = arr;
      if (diff2 > 0) {
        let arr5 = arr;
        arr4 = arr;
        if ("0" === arr.slice(-1)) {
          const substr1 = arr5.slice(0, -1);
          const diff3 = diff2 - 1;
          arr4 = substr1;
          while (diff3 > 0) {
            diff2 = diff3;
            arr5 = substr1;
            arr4 = substr1;
            if ("0" !== substr1.slice(-1)) {
              break;
            }
          }
        }
      }
      let substr2 = arr4;
      if ("." === arr4.slice(-1)) {
        substr2 = arr4.slice(0, -1);
      }
      if (length >= tmp14) {
        const sum1 = str13 + substr2;
        if (table[__numberingSystem__]) {
          closure_0 = tmp56[result["[[numberingSystem]]"]];
          const _String2 = String;
          let str24 = String(sum1).replace(/\d/g, (arg0) => table[arg0]);
          const str25 = String(sum1);
        } else {
          const _String = String;
          str24 = String(sum1);
        }
        const str26 = str24.replace(/\./g, tmp9.decimal);
        flag3 = flag;
        nan = str26;
        if (true === result["[[useGrouping]]"]) {
          const parts = str26.split(tmp9.decimal);
          const first = parts[0];
          if (first.length <= (tmp8.patterns.primaryGroupSize || 3)) {
            const call15 = join.call;
            const decimal = tmp9.decimal;
            nan = typeof call15 === "unknown" ? join(decimal) : call15(parts, decimal);
            flag3 = flag;
            const tmp70 = join;
          } else {
            obj = Object.create(List.prototype);
            List();
            const diff4 = first.length - tmp57;
            let result2 = diff4 % tmp58;
            const substr3 = first.slice(0, result2);
            if (substr3.length) {
              const call11 = push.call;
              if (typeof call11 === "unknown") {
                tmp59(substr3);
              } else {
                call11(obj, substr3);
              }
              tmp59 = push;
            }
            if (result2 < diff4) {
              do {
                let tmp61 = push;
                let call12 = push.call;
                let substr4 = first.slice(result2, result2 + tmp58);
                let tmp63 = result2;
                if (typeof call12 === "unknown") {
                  let tmp61Result = tmp61(substr4);
                } else {
                  let call12Result = call12(obj, substr4);
                }
                result2 = result2 + tmp58;
              } while (result2 < diff4);
            }
            const call13 = push.call;
            const substr5 = first.slice(diff4);
            if (typeof call13 === "unknown") {
              tmp66(substr5);
            } else {
              call13(obj, substr5);
            }
            const call14 = join.call;
            const group = tmp9.group;
            parts[0] = typeof call14 === "unknown" ? join(group) : call14(obj, group);
            tmp66 = push;
            const tmp69 = join;
          }
        }
      } else {
        const call7 = join.call;
        const _Array3 = Array;
        if (typeof call7 === "unknown") {
          let call7Result = tmp29("0");
        } else {
          call7Result = call7(ArrayResult3, "0");
        }
        ArrayResult3 = Array(tmp14 - length + 1);
        tmp29 = join;
      }
    } else {
      const replaced = str5.slice(0, index).replace(".", "");
      const call5 = join.call;
      const _Array = Array;
      const str8 = str5.slice(0, index);
      if (typeof call5 === "unknown") {
        tmp19("0");
      } else {
        call5(ArrayResult4, "0");
      }
      const call6 = tmp19.call;
      const _Array2 = Array;
      const text2 = `${tmp21}.`;
      ArrayResult4 = Array(num3 - (replaced.length - 1) + 1);
      if (typeof call6 === "unknown") {
        let tmp19Result = tmp19("0");
      } else {
        tmp19Result = call6(ArrayResult5, "0");
      }
      const sum2 = replaced + (text2 + tmp19Result);
      ArrayResult5 = Array(tmp15 + 1);
    }
  }
  let str27 = "[[positivePattern]]";
  if (true === flag3) {
    str27 = "[[negativePattern]]";
  }
  const str29 = result[str27].replace("{number}", nan);
  let replaced1 = str29;
  if ("currency" === result["[[style]]"]) {
    __currency__ = result["[[currency]]"];
    let tmp72 = tmp8.currencies[__currency__];
    let tmp73 = __currency__;
    if ("symbol" === result["[[currencyDisplay]]"]) {
      if (!tmp72) {
        tmp72 = __currency__;
      }
      tmp73 = tmp72;
    }
    replaced1 = str29.replace("{currency}", tmp73);
  }
  const exp = tmp.exp;
  const isMatch = exp.test(tmp.input);
  return replaced1;
}
class DateTimeFormatConstructor {
  constructor() {
    self = this;
    first = arguments[0];
    tmp2 = arguments[1];
    if (this) {
      tmp3 = closure_3;
      if (self !== closure_3) {
        tmp6 = null;
        if (null == self) {
          tmp10 = globalThis;
          _TypeError = TypeError;
          tmp11 = new.target;
          str = "Cannot convert null or undefined to object";
          tmp12 = new.target;
          typeError = new TypeError("Cannot convert null or undefined to object");
          tmp14 = typeError;
          throw typeError;
        } else {
          tmp7 = globalThis;
          _Object = Object;
          ObjectResult = Object(self);
          tmp5Result = tmp5(ObjectResult, first, tmp2);
          dateTimeFormat = ObjectResult;
        }
      }
      return dateTimeFormat;
    }
    dateTimeFormat = new closure_3.DateTimeFormat(first, tmp2);
    return;
  }
}
function InitializeDateTimeFormat(prototype) {
  let tmp32;
  let tmp = hasOwnProperty;
  const call = hasOwnProperty.call;
  if (typeof call === "unknown") {
    let callResult = tmp("__getInternalProperties");
  } else {
    callResult = call(prototype, "__getInternalProperties");
  }
  if (callResult) {
    let result = prototype.__getInternalProperties(closure_16);
  } else {
    result = callback(null);
  }
  require = result;
  const tmp7 = createRegExpRestore();
  if (true === result["[[initializedIntlObject]]"]) {
    const _TypeError = TypeError;
    const typeError = new TypeError("`this` object has already been initialized as an Intl object");
    throw typeError;
  } else {
    obj = { value: null };
    obj[0] = function value() {
      if (arguments[0] === closure_1_16) {
        return closure_0;
      }
    };
    fn(prototype, "__getInternalProperties", obj);
    result["[[initializedIntlObject]]"] = true;
    const tmp95 = CanonicalizeLocaleList(arg1);
    const tmp97 = ToDateTimeOptions(arg2, "any", "date");
    obj = Object.create(Record.prototype);
    for (const key10016 in undefined) {
      tmp = key10016;
      tmp = Record;
      tmp = undefined instanceof Record;
      if (tmp) {
        if (!tmp) {
          continue;
        } else {
          let tmp11 = fn;
          obj = { value: null, enumerable: true, writable: true, configurable: true };
          obj[0] = undefined[key10016];
          let tmp12 = fn(obj, key10016, obj);
          continue;
        }
        continue;
      } else {
        let tmp8 = hasOwnProperty;
        let call2 = hasOwnProperty.call;
        if (typeof call2 === "unknown") {
          let call2Result = tmp8(key10016);
        } else {
          call2Result = call2(undefined, key10016);
        }
        let tmp10 = call2Result;
      }
    }
    List("lookup", "best fit");
    const localeMatcher = tmp97.localeMatcher;
    let str4 = "best fit";
    if (undefined !== localeMatcher) {
      const _String = String;
      const StringResult = String(localeMatcher);
      const call3 = closure_7.call;
      str4 = StringResult;
      if (-1 === (typeof call3 === "unknown" ? tmp18(StringResult) : call3(obj1, StringResult))) {
        const _RangeError4 = RangeError;
        const rangeError = new RangeError("'" + StringResult + "' is not an allowed value for `localeMatcher`");
        throw rangeError;
      }
      tmp18 = closure_7;
    }
    obj["[[localeMatcher]]"] = str4;
    const DateTimeFormat = closure_15.DateTimeFormat;
    __localeData__ = DateTimeFormat["[[localeData]]"];
    const tmp24 = ResolveLocale(DateTimeFormat["[[availableLocales]]"], tmp95, obj, DateTimeFormat["[[relevantExtensionKeys]]"], __localeData__);
    ({ [[locale]]: tmp5["[[locale]]"], [[ca]]: tmp5["[[calendar]]"], [[nu]]: tmp5["[[numberingSystem]]"], [[dataLocale]]: tmp5["[[dataLocale]]"] } = tmp24);
    const timeZone = tmp97.timeZone;
    let tmp25 = timeZone;
    if (undefined !== timeZone) {
      tmp = +timeZone.length;
      let diff = tmp - 1;
      let str6 = timeZone;
      let tmp34 = timeZone;
      if (tmp) {
        do {
          let str5 = str6.charAt(diff);
          let tmp26 = str5 >= "a";
          let tmp27 = diff;
          let tmp28 = str6;
          if (tmp26) {
            tmp26 = str5 <= "z";
          }
          let sum1 = str6;
          if (tmp26) {
            let substr = str6.slice(0, diff);
            let sum = substr + str5.toUpperCase();
            sum1 = sum + str6.slice(diff + 1);
          }
          tmp32 = +diff;
          diff = tmp32 - 1;
          str6 = sum1;
          tmp34 = sum1;
        } while (tmp32);
      }
      tmp25 = tmp34;
      if ("UTC" !== tmp34) {
        const _RangeError3 = RangeError;
        const rangeError1 = new RangeError("timeZone is not supported.");
        throw rangeError1;
      }
    }
    result["[[timeZone]]"] = tmp25;
    let obj2 = Object.create(Record.prototype);
    for (const key10081 in undefined) {
      tmp = key10081;
      tmp = Record;
      tmp = undefined instanceof Record;
      if (tmp) {
        if (!tmp) {
          continue;
        } else {
          let tmp39 = fn;
          let obj3 = { value: null, enumerable: true, writable: true, configurable: true };
          obj3[0] = undefined[key10081];
          let tmp40 = fn(obj2, key10081, obj3);
          continue;
        }
        continue;
      } else {
        let tmp36 = hasOwnProperty;
        let call4 = hasOwnProperty.call;
        if (typeof call4 === "unknown") {
          let call4Result = tmp36(key10081);
        } else {
          call4Result = call4(undefined, key10081);
        }
        let tmp38 = call4Result;
      }
    }
    for (const key10096 in closure_35) {
      tmp = key10096;
      tmp = hasOwnProperty;
      let call10 = hasOwnProperty.call;
      tmp = closure_35;
      if (typeof call10 === "unknown") {
        let tmpResult = tmp(key10096);
      } else {
        tmpResult = call10(tmp, key10096);
      }
      if (!tmpResult) {
        continue;
      } else {
        let tmp44 = tmp[key10096];
        let tmp45 = tmp97[key10096];
        let tmp46;
        if (undefined !== tmp45) {
          let _String2 = String;
          let StringResult1 = String(tmp45);
          tmp46 = StringResult1;
          if (undefined !== tmp44) {
            let tmp48 = closure_7;
            let call5 = closure_7.call;
            if (typeof call5 === "unknown") {
              let call5Result = tmp48(StringResult1);
            } else {
              call5Result = call5(tmp44, StringResult1);
            }
            tmp46 = StringResult1;
            if (-1 === call5Result) {
              let _RangeError = RangeError;
              let str10 = "'";
              let str11 = "' is not an allowed value for `";
              let tmp50 = new.target;
              let str12 = "`";
              let tmp51 = new.target;
              let rangeError2 = new RangeError("'" + StringResult1 + "' is not an allowed value for `" + key10096 + "`");
              let tmp53 = rangeError2;
              throw rangeError2;
            }
          }
        }
        obj2["[[" + key10096 + "]]"] = tmp46;
        continue;
      }
      continue;
    }
    const formats = tmp54.formats;
    const _Object = Object;
    const call6 = toString.call;
    let dateTimeFormats = formats;
    if ("[object Array]" !== (typeof call6 === "unknown" ? toString() : call6(formats))) {
      obj2 = createDateTimeFormat;
      dateTimeFormats = obj2.createDateTimeFormats(formats);
    }
    obj1 = Object.create(List.prototype);
    const tmp98 = Record;
    List("basic", "best fit");
    const formatMatcher = tmp97.formatMatcher;
    let str15 = "best fit";
    if (undefined !== formatMatcher) {
      const _String3 = String;
      const StringResult2 = String(formatMatcher);
      const call7 = closure_7.call;
      str15 = StringResult2;
      if (-1 === (typeof call7 === "unknown" ? tmp62(StringResult2) : call7(obj4, StringResult2))) {
        const _RangeError2 = RangeError;
        const rangeError3 = new RangeError("'" + StringResult2 + "' is not an allowed value for `formatMatcher`");
        throw rangeError3;
      }
      tmp62 = closure_7;
    }
    __localeData__[tmp24["[[dataLocale]]"]].formats = dateTimeFormats;
    if ("basic" === str15) {
      let tmp64 = calculateScore(obj2, dateTimeFormats);
    } else {
      tmp64 = calculateScore(obj2, dateTimeFormats, true);
    }
    const keys = Object.keys();
    if (keys !== undefined) {
      while (keys[-1] !== undefined) {
        tmp = tmp68;
        tmp = hasOwnProperty;
        let call11 = hasOwnProperty.call;
        tmp = closure_35;
        if (!(typeof call11 === "unknown" ? tmp(tmp68) : call11(tmp, tmp68))) {
          continue;
        } else {
          let call8 = tmp.call;
          if (!(typeof call8 === "unknown" ? tmp(tmp68) : call8(tmp64, tmp68))) {
            continue;
          } else {
            result["[[" + tmp68 + "]]"] = tmp64[tmp68];
            continue;
          }
          continue;
        }
        continue;
      }
    }
    const hour12 = tmp97.hour12;
    if (undefined !== hour12) {
      const _Boolean = Boolean;
      let hour122 = Boolean(hour12);
    }
    if (result["[[hour]]"]) {
      if (undefined === hour122) {
        hour122 = tmp54.hour12;
      }
      result["[[hour12]]"] = hour122;
      if (true === hour122) {
        result["[[hourNo0]]"] = tmp54.hourNo0;
        let pattern = tmp64.pattern12;
      } else {
        pattern = tmp64.pattern;
      }
    } else {
      pattern = tmp64.pattern;
    }
    result["[[pattern]]"] = pattern;
    result["[[boundFormat]]"] = undefined;
    result["[[initializedDateTimeFormat]]"] = true;
    if (!closure_4) {
      const exp = tmp7.exp;
      const isMatch = exp.test(tmp7.input);
      return prototype;
    } else {
      const call9 = GetFormatDateTime.call;
      prototype.format = typeof call9 === "unknown" ? GetFormatDateTime() : call9(prototype);
      const tmp70 = GetFormatDateTime;
    }
    obj4 = Object.create(List.prototype);
  }
}
function ToDateTimeOptions(arg0, any, date) {
  let tmp2 = null;
  if (undefined !== arg0) {
    if (null == arg0) {
      const _TypeError = TypeError;
      const typeError = new TypeError("Cannot convert null or undefined to object");
      throw typeError;
    } else {
      const _Object = Object;
      const ObjectResult = Object(arg0);
      obj = Object.create(Record.prototype);
      for (const key10004 in undefined) {
        let tmp29 = key10004;
        let tmp30 = Record;
        let tmp31 = undefined instanceof Record;
        if (tmp31) {
          if (!tmp31) {
            continue;
          } else {
            let tmp6 = fn;
            obj = { value: null, enumerable: true, writable: true, configurable: true };
            obj[0] = undefined[key10004];
            let tmp7 = fn(obj, key10004, obj);
            continue;
          }
          continue;
        } else {
          let tmp3 = hasOwnProperty;
          let call = hasOwnProperty.call;
          if (typeof call === "unknown") {
            let callResult = tmp3(key10004);
          } else {
            callResult = call(undefined, key10004);
          }
          let tmp5 = callResult;
        }
      }
      tmp2 = obj;
      const keys = Object.keys();
      if (keys !== undefined) {
        tmp2 = obj;
        while (keys[tmp] !== undefined) {
          let tmp32 = tmp10;
          obj[tmp10] = ObjectResult[tmp10];
          continue;
        }
      }
    }
  }
  const tmp16 = callback(tmp2);
  let tmp17 = "date" !== any;
  if (tmp17) {
    tmp17 = "any" !== any;
  }
  if (!tmp17) {
    tmp17 = undefined === tmp16.weekday && undefined === tmp16.year && undefined === tmp16.month && undefined === tmp16.day;
    const tmp18 = undefined === tmp16.weekday && undefined === tmp16.year && undefined === tmp16.month && undefined === tmp16.day;
  }
  let flag = true;
  if (!tmp17) {
    flag = false;
  }
  let tmp19 = "time" !== any;
  if (tmp19) {
    tmp19 = "any" !== any;
  }
  if (!tmp19) {
    tmp19 = undefined === tmp16.hour && undefined === tmp16.minute && undefined === tmp16.second;
    const tmp20 = undefined === tmp16.hour && undefined === tmp16.minute && undefined === tmp16.second;
  }
  if (!tmp19) {
    flag = false;
  }
  let tmp21 = !flag;
  let tmp22 = tmp21;
  if (flag) {
    let tmp23 = "date" !== date;
    if (tmp23) {
      tmp23 = "all" !== date;
    }
    tmp22 = tmp23;
  }
  if (!tmp22) {
    tmp16.day = "numeric";
    tmp16.month = "numeric";
    tmp16.year = "numeric";
  }
  if (flag) {
    let tmp24 = "time" !== date;
    if (tmp24) {
      tmp24 = "all" !== date;
    }
    tmp21 = tmp24;
  }
  if (!tmp21) {
    tmp16.second = "numeric";
    tmp16.minute = "numeric";
    tmp16.hour = "numeric";
  }
  return tmp16;
}
function calculateScore(arg0, arg1, arg2) {
  let num = -Infinity;
  let num2 = 0;
  let tmp4;
  if (0 < arg1.length) {
    do {
      let tmp5 = arg1[num2];
      let tmp6 = closure_35;
      let tmp7 = num2;
      let tmp8 = num;
      let tmp9 = tmp3;
      let num3 = 0;
      let num4 = 0;
      let keys = Object.keys();
      if (keys !== undefined) {
        let tmp11 = num3;
        num4 = num3;
        let tmp12 = keys[tmp];
        while (tmp12 !== undefined) {
          let tmp23 = tmp12;
          let tmp24 = hasOwnProperty;
          let call4 = hasOwnProperty.call;
          let tmp25 = closure_35;
          if (!(typeof call4 === "unknown" ? tmp24(tmp12) : call4(tmp25, tmp12))) {
            continue;
          } else {
            let tmp13 = arg0["[[" + tmp12 + "]]"];
            let call = tmp24.call;
            let tmp14;
            if (typeof call === "unknown" ? tmp24(tmp12) : call(tmp5, tmp12)) {
              tmp14 = tmp5[tmp12];
            }
            if (undefined === tmp13) {
              if (undefined !== tmp14) {
                num3 = tmp11 - 20;
                continue;
              }
            }
            if (undefined !== tmp13) {
              if (undefined === tmp14) {
                num3 = tmp11 - 120;
                continue;
              }
            }
            let items = ["2-digit", "numeric", "narrow", "short", "long"];
            let tmp15 = closure_7;
            let call2 = closure_7.call;
            let call3 = tmp15.call;
            let tmp16 = typeof call2 === "unknown" ? tmp15(tmp13) : call2(items, tmp13);
            let _Math = Math;
            let _Math2 = Math;
            let bound = Math.max(Math.min((typeof call3 === "unknown" ? tmp15(tmp14) : call3(items, tmp14)) - tmp16, 2), -2);
            let tmp18 = tmp2;
            if (arg2) {
              let tmp19 = "numeric" !== tmp13 && "2-digit" !== tmp13 || "numeric" === tmp14 || "2-digit" === tmp14;
              if (tmp19) {
                let tmp20 = "numeric" === tmp13 || "2-digit" === tmp13;
                if (!tmp20) {
                  let tmp21 = "2-digit" !== tmp14 && "numeric" !== tmp14;
                  tmp20 = tmp21;
                }
                tmp19 = tmp20;
              }
              tmp18 = tmp19;
            }
            let diff = tmp11;
            if (!tmp18) {
              diff = tmp11 - 8;
            }
            if (2 === bound) {
              num3 = diff - 6;
              continue;
            } else {
              if (1 === bound) {
                num3 = diff - 3;
                continue;
              } else {
                if (-1 === bound) {
                  num3 = diff - 6;
                  continue;
                } else {
                  num3 = diff;
                  if (-2 !== bound) {
                    continue;
                  } else {
                    num3 = diff - 8;
                    continue;
                  }
                  continue;
                }
                continue;
              }
              continue;
            }
            continue;
          }
          continue;
        }
      }
      if (tmp8 < num4) {
        tmp8 = num4;
        tmp9 = tmp5;
      }
      num2 = num2 + 1;
      num = tmp8;
      tmp3 = tmp9;
      tmp4 = tmp9;
    } while (num2 < length);
  }
  return tmp4;
}
class GetFormatDateTime {
  constructor() {
    self = this;
    tmp = null != this && typeof self === "object";
    if (!tmp) {
      if (tmp) {
        if (tmp["[[initializedDateTimeFormat]]"]) {
          if (undefined !== tmp["[[boundFormat]]"]) {
            return tmp["[[boundFormat]]"];
          } else {
            tmp13 = f64193;
            call2 = f64193.call;
            fn = function() {
              if (0 === arguments.length) {
                const _Date = Date;
                let timestamp = Date.now();
              } else {
                timestamp = arguments[0];
              }
              return closure_39(this, Number(timestamp));
            };
            tmp["[[boundFormat]]"] = typeof call2 === "unknown" ? tmp13(self) : call2(fn, self);
          }
        }
      }
      tmp8 = globalThis;
      _TypeError = TypeError;
      tmp9 = new.target;
      str2 = "`this` value for format() is not an initialized Intl.DateTimeFormat object.";
      tmp10 = new.target;
      typeError = new TypeError("`this` value for format() is not an initialized Intl.DateTimeFormat object.");
      tmp12 = typeError;
      throw typeError;
    } else {
      tmp2 = hasOwnProperty;
      call = hasOwnProperty.call;
      if (typeof call === "unknown") {
        str = "__getInternalProperties";
        tmp2Result = tmp2("__getInternalProperties");
      } else {
        str3 = "__getInternalProperties";
        tmp2Result = call(self, "__getInternalProperties");
      }
      if (tmp2Result) {
        tmp6 = closure_16;
        result = self.__getInternalProperties(closure_16);
      } else {
        tmp4 = f64192;
        result = f64192(null);
      }
      tmp7 = result;
    }
    return;
  }
}
function FormatDateTime(__getInternalProperties, arg1) {
  let tmp27;
  if (isFinite(arg1)) {
    const result = __getInternalProperties.__getInternalProperties(closure_16);
    const tmp12 = createRegExpRestore();
    __locale__ = result["[[locale]]"];
    const items = [__locale__];
    const numberFormat = new obj.NumberFormat(items, { useGrouping: false });
    const items1 = [__locale__];
    const numberFormat1 = new obj.NumberFormat(items1, { minimumIntegerDigits: 2, useGrouping: false });
    __calendar__ = result["[[calendar]]"];
    const tmp24 = (function ToLocalTime(arg0, arg1, __timeZone__) {
      let str = __timeZone__;
      const date = new Date(arg0);
      if (!__timeZone__) {
        str = "";
      }
      obj = { "[[weekday]]": date[`get${str}` + "Day"](), "[[era]]": +date[`get${str}` + "FullYear"]() >= 0, "[[year]]": date[`get${str}` + "FullYear"](), "[[month]]": date[`get${str}` + "Month"](), "[[day]]": date[`get${str}` + "Date"](), "[[hour]]": date[`get${str}` + "Hours"](), "[[minute]]": date[`get${str}` + "Minutes"](), "[[second]]": date[`get${str}` + "Seconds"](), "[[inDST]]": false };
      obj = Object.create(ctor.prototype);
      for (const key10051 in obj) {
        let tmp8 = key10051;
        let tmp9 = ctor;
        let tmp10 = obj instanceof ctor;
        if (tmp10) {
          if (!tmp10) {
            continue;
          } else {
            let tmp6 = callback;
            obj = { value: null, enumerable: true, writable: true, configurable: true };
            obj[0] = obj[key10051];
            let tmp7 = callback(obj, key10051, obj);
            continue;
          }
          continue;
        } else {
          let tmp3 = closure_5;
          let call = closure_5.call;
          if (typeof call === "unknown") {
            let callResult = tmp3(key10051);
          } else {
            callResult = call(obj, key10051);
          }
          let tmp5 = callResult;
        }
      }
      return obj;
    })(arg1, 0, result["[[timeZone]]"]);
    __pattern__ = result["[[pattern]]"];
    const calendars = closure_15.DateTimeFormat["[[localeData]]"][result["[[dataLocale]]"]].calendars;
    __calendar__2 = result["[[calendar]]"];
    let replaced = __pattern__;
    let str17 = __pattern__;
    const keys = Object.keys();
    if (keys !== undefined) {
      str17 = replaced;
      while (keys[tmp] !== undefined) {
        let tmp64 = tmp32;
        let tmp65 = hasOwnProperty;
        let call = hasOwnProperty.call;
        let text = `${"[[" + tmp32}]]`;
        if (!(typeof call === "unknown" ? tmp65(`${"[[" + tmp32}]]`) : call(result, `${"[[" + tmp32}]]`))) {
          continue;
        } else {
          let tmp33 = result["[[" + tmp32 + "]]"];
          let tmp34 = tmp24["[[" + tmp32 + "]]"];
          if ("year" === tmp32) {
            if (tmp34 <= 0) {
              let diff = 1 - tmp34;
              let tmp37 = tmp31;
              if ("numeric" === tmp33) {
                let tmp54 = FormatNumber;
                let str = FormatNumber(numberFormat, diff);
              } else if ("2-digit" === tmp33) {
                let tmp52 = FormatNumber;
                let arr3 = FormatNumber(numberFormat1, diff);
                str = arr3;
                if (arr3.length > 2) {
                  let tmp53 = str;
                  str = str.slice(-2);
                }
              } else {
                let tmp67 = closure_17;
                if (tmp33 in closure_17) {
                  if ("month" === tmp32) {
                    let tmp48 = resolveDateString;
                    let num8 = 0;
                    let tmp49 = calendars;
                    let tmp50 = __calendar__2;
                    let str21 = "months";
                    let tmp51 = tmp33;
                    str = resolveDateString(calendars, __calendar__2, "months", tmp33, tmp24["[[" + tmp32 + "]]"]);
                  } else if ("weekday" === tmp32) {
                    try {
                      let tmp40 = resolveDateString;
                      let num7 = 0;
                      let tmp41 = calendars;
                      let tmp42 = __calendar__2;
                      let str19 = "days";
                      let tmp43 = tmp33;
                      str = resolveDateString(calendars, __calendar__2, "days", tmp33, tmp24["[[" + tmp32 + "]]"]);
                    } catch (err) {
                      let str20 = "Could not find weekday data for locale ";
                      let tmp44 = new.target;
                      let tmp45 = new.target;
                      error = new tmp3.Error("Could not find weekday data for locale " + tmp2);
                      let tmp47 = error;
                      throw error;
                    }
                  } else if ("timeZoneName" === tmp32) {
                    str = "";
                  } else {
                    str = tmp24["[[" + tmp32 + "]]"];
                  }
                }
              }
              let tmp55 = str;
              replaced = str18.replace(`{${tmp32}}`, str);
              tmp27 = tmp37;
              continue;
            }
          }
          if ("month" === tmp32) {
            diff = tmp34 + 1;
            tmp37 = tmp31;
          } else {
            let tmp35 = "hour" === tmp32 && true === result["[[hour12]]"];
            diff = tmp34;
            tmp37 = tmp31;
            if (tmp35) {
              let result1 = tmp34 % 12;
              let tmp39 = 0 === result1;
              if (0 === result1) {
                tmp39 = true === result["[[hourNo0]]"];
              }
              let num6 = result1;
              if (tmp39) {
                num6 = 12;
              }
              tmp37 = result1 !== tmp24["[[" + tmp32 + "]]"];
              diff = num6;
            }
          }
        }
        continue;
      }
      str18 = replaced;
      const tmp29 = tmp27;
    }
    let replaced1 = str17;
    if (true === result["[[hour12]]"]) {
      let str22 = "am";
      if (tmp29) {
        str22 = "pm";
      }
      const tmp57Result = resolveDateString(calendars, __calendar__2, "dayPeriods", str22);
      replaced1 = str17.replace("{ampm}", tmp57Result);
      const tmp57 = resolveDateString;
    }
    const exp = tmp12.exp;
    const isMatch = exp.test(tmp12.input);
    return replaced1;
  } else {
    const _RangeError = RangeError;
    const rangeError = new RangeError("Invalid valid date passed to format");
    throw rangeError;
  }
}
function resolveDateString(calendars, __calendar__2, days, arg3, arg4) {
  if (calendars[__calendar__2]) {
    if (calendars[__calendar__2][days]) {
      let tmp = calendars[__calendar__2][days];
    }
    obj = { narrow: null, short: null, long: null };
    obj[0] = ["short", "long"];
    obj[1] = ["long", "narrow"];
    obj[2] = ["short", "narrow"];
    const call = hasOwnProperty.call;
    if (typeof call === "unknown" ? hasOwnProperty(arg3) : call(tmp, arg3)) {
      let tmp6 = tmp[arg3];
    } else {
      const call2 = tmp3.call;
      const first = obj[arg3][0];
      if (typeof call2 === "unknown" ? tmp3(first) : call2(tmp, first)) {
        tmp6 = tmp[tmp5[0]];
      } else {
        tmp6 = tmp[tmp5[1]];
      }
    }
    let tmp9 = tmp6;
    if (null != arg4) {
      tmp9 = tmp6[arg4];
    }
    return tmp9;
  }
  tmp = calendars.gregory[days];
}
class Record {
  constructor(arg0) {
    for (const key10005 in arg0) {
      tmp7 = key10005;
      tmp8 = Record;
      tmp9 = arg0 instanceof Record;
      if (tmp9) {
        if (!tmp9) {
          continue;
        } else {
          tmp5 = f64190;
          obj = { value: null, enumerable: true, writable: true, configurable: true };
          obj[0] = arg0[key10005];
          tmp6 = f64190(tmp, key10005, obj);
          continue;
        }
        continue;
      } else {
        tmp2 = hasOwnProperty;
        call = hasOwnProperty.call;
        if (typeof call === "unknown") {
          tmp2Result = tmp2(key10005);
        } else {
          tmp2Result = call(arg0, key10005);
        }
        tmp4 = tmp2Result;
      }
    }
    return;
  }
}
class List {
  constructor() {
    tmp = f64190(this, "length", { writable: true, value: 0 });
    if (!arguments.length) {
      return;
    } else {
      tmp3 = slice;
      call = slice.call;
      tmp2 = push;
      if (typeof call === "unknown") {
        tmp4 = arguments;
        tmp3Result = tmp3();
      } else {
        tmp7 = arguments;
        tmp8 = arguments;
        tmp3Result = call(arguments);
      }
      applyResult = push.apply(this, tmp3Result);
    }
    return;
  }
}
function createRegExpRestore() {
  let tmp4;
  let str2 = "";
  if (RegExp.multiline) {
    str2 = "m";
  }
  obj = { input: RegExp.input };
  obj = Object.create(List.prototype);
  List();
  obj = {};
  let num = 1;
  let flag = false;
  do {
    let text = `$${num}`;
    let _RegExp = RegExp;
    tmp4 = RegExp[`$${num}`];
    obj[`$${num}`] = tmp4;
    let tmp5 = num;
    let tmp6 = flag;
    if (!tmp4) {
      tmp4 = flag;
    }
    num = num + 1;
    flag = tmp4;
  } while (num <= 9);
  const tmp7 = /[.?*+^$[\]\\(){}|-]/g;
  let str3 = RegExp.lastMatch || "".replace(tmp7, "\\$&");
  let num2 = 1;
  let tmp8 = str3;
  if (tmp4) {
    do {
      let str4 = obj["$" + num2];
      let tmp9 = num2;
      let tmp10 = str3;
      if (str4) {
        let replaced = str4.replace(tmp7, "\\$&");
        let replaced1 = str3.replace(replaced, `(${tmp11})`);
      } else {
        replaced1 = `()${str3}`;
      }
      let tmp12 = push;
      let call = push.call;
      let substr = replaced1.slice(0, replaced1.indexOf("(") + 1);
      if (typeof call === "unknown") {
        let tmp12Result = tmp12(substr);
      } else {
        let callResult = call(obj, substr);
      }
      str3 = replaced1.slice(replaced1.indexOf("(") + 1);
      num2 = num2 + 1;
      tmp8 = str3;
    } while (num2 <= 9);
  }
  const call2 = join.call;
  const regExp = new RegExp((typeof call2 === "unknown" ? join("") : call2(obj, "")) + tmp8, str2);
  obj.exp = regExp;
  return obj;
}
let obj = {};
let tmp = (() => {
  try {
    obj = {};
    const _Object = Object;
    Object.defineProperty(obj, "a", {});
    return "a" in obj;
  } catch (err) {
    return false;
  }
})();
let tmp2 = !tmp;
if (!tmp) {
  let _Object = Object;
  tmp2 = !Object.prototype.__defineGetter__;
}
let closure_4 = tmp2;
if (tmp) {
  const _Object2 = Object;
  let fn = Object.defineProperty;
} else {
  fn = (prototype, format, get) => {
    if ("get" in get) {
      if (prototype.__defineGetter__) {
        prototype.__defineGetter__(format, get.get);
      }
    }
    const call = hasOwnProperty.call;
    let tmp2 = typeof call === "unknown" ? hasOwnProperty(format) : call(prototype, format);
    if (tmp2) {
      tmp2 = !("value" in get);
    }
    if (!tmp2) {
      prototype[format] = get.value;
    }
  };
}
let closure_7 = Array.prototype.indexOf || (function(arg0) {
  const self = this;
  if (this.length) {
    let sum = arguments[1] || 0;
    if (sum < self.length) {
      while (self[sum] !== arg0) {
        sum = sum + 1;
      }
      return sum;
    }
    return -1;
  } else {
    return -1;
  }
});
let tmp4 = Object.create || ((arg0, obj) => {
  class F {
    constructor() {
      return;
    }
  }
  F.prototype = arg0;
  obj = Object.create(F.prototype);
  for (const key10008 in arg1) {
    let tmp5 = key10008;
    let tmp6 = hasOwnProperty;
    class F {
      constructor() {
        return;
      }
    }
    if (typeof tmp7 === "unknown") {
      let tmp7Result = tmp6(key10008);
    } else {
      tmp7Result = tmp7(arg1, key10008);
    }
    if (!tmp7Result) {
      continue;
    } else {
      let tmp3 = fn;
      let tmp4 = fn(obj, key10008, arg1[key10008]);
      class F {
        constructor() {
          return;
        }
      }
    }
    continue;
  }
  return obj;
});
let closure_8 = tmp4;
let tmp5 = Function.prototype.bind || (function(arg0) {
  closure_0 = arg0;
  const self = this;
  let call = slice.call;
  if (typeof call === "unknown") {
    let callResult = slice(1);
  } else {
    callResult = call(arguments, 1);
  }
  closure_2 = callResult;
  return 1 === this.length ? ((arg0) => {
    const call = closure_1_10.call;
    const call2 = closure_1_9.call;
    if (typeof call2 === "unknown") {
      let call2Result = closure_1_9();
    } else {
      call2Result = call2(arguments);
    }
    return self.apply(closure_0, typeof call === "unknown" ? closure_1_10(call2Result) : call(closure_2, call2Result));
  }) : (() => {
    const call = closure_1_10.call;
    const call2 = closure_1_9.call;
    if (typeof call2 === "unknown") {
      let call2Result = closure_1_9();
    } else {
      call2Result = call2(arguments);
    }
    return self.apply(closure_0, typeof call === "unknown" ? closure_1_10(call2Result) : call(closure_2, call2Result));
  });
});
function supportedLocalesOf(arg0) {
  const self = this;
  const call = hasOwnProperty.call;
  if (typeof call === "unknown") {
    let callResult = hasOwnProperty("[[availableLocales]]");
  } else {
    callResult = call(self, "[[availableLocales]]");
  }
  if (callResult) {
    const tmp10 = createRegExpRestore();
    const tmp11 = arguments[1];
    __availableLocales__ = self["[[availableLocales]]"];
    const tmp13 = CanonicalizeLocaleList(arg0);
    const exp = tmp10.exp;
    const isMatch = exp.test(tmp10.input);
    let tmp15;
    if (undefined !== tmp11) {
      if (null == tmp11) {
        const _TypeError2 = TypeError;
        const typeError = new TypeError("Cannot convert null or undefined to object");
        throw typeError;
      } else {
        const _Object = Object;
        const ObjectResult = Object(tmp11);
        obj = Object.create(tmp41.prototype);
        for (const key10028 in ObjectResult) {
          let tmp47 = key10028;
          let tmp48 = Record;
          let tmp49 = ObjectResult instanceof Record;
          if (tmp49) {
            if (!tmp49) {
              continue;
            } else {
              let tmp19 = fn;
              obj = { value: null, enumerable: true, writable: true, configurable: true };
              obj[0] = ObjectResult[key10028];
              let tmp20 = fn(obj, key10028, obj);
              continue;
            }
            continue;
          } else {
            let tmp16 = hasOwnProperty;
            let call2 = hasOwnProperty.call;
            if (typeof call2 === "unknown") {
              let call2Result = tmp16(key10028);
            } else {
              call2Result = call2(ObjectResult, key10028);
            }
            let tmp18 = call2Result;
          }
        }
        const localeMatcher = obj.localeMatcher;
        tmp15 = localeMatcher;
        if (undefined !== localeMatcher) {
          const _String = String;
          const StringResult = String(localeMatcher);
          tmp15 = StringResult;
          if ("lookup" !== StringResult) {
            tmp15 = StringResult;
            if ("best fit" !== StringResult) {
              const _RangeError = RangeError;
              const rangeError = new RangeError("matcher should be \"lookup\" or \"best fit\"");
              throw rangeError;
            }
          }
        }
      }
    }
    if (undefined !== tmp15) {
      if ("best fit" !== tmp15) {
        let tmp23 = LookupSupportedLocales(__availableLocales__, tmp13);
      }
      const keys = Object.keys();
      if (keys !== undefined) {
        while (keys[1] !== undefined) {
          let tmp50 = tmp27;
          let tmp51 = hasOwnProperty;
          let call3 = hasOwnProperty.call;
          if (!(typeof call3 === "unknown" ? tmp51(tmp27) : call3(tmp23, tmp27))) {
            continue;
          } else {
            let tmp28 = fn;
            obj = { writable: false, configurable: false, value: null };
            obj[2] = tmp23[tmp27];
            let tmp29 = fn(tmp23, tmp27, obj);
            continue;
          }
          continue;
        }
      }
      fn(tmp23, "length", { writable: false });
      return tmp23;
    }
    tmp23 = LookupSupportedLocales(__availableLocales__, tmp13);
  } else {
    const _TypeError = TypeError;
    const typeError1 = new TypeError("supportedLocalesOf() is not a constructor");
    throw typeError1;
  }
}
let closure_14 = tmp5;
const tmp4Result = tmp4(null);
let closure_15 = tmp4Result;
let closure_16 = Math.random();
let closure_17 = tmp4(null, { narrow: {}, short: {}, long: {} });
let c18 = false;
let c19 = false;
const re20 = /^[A-Z]{3}$/;
const re21 = /-u(?:-[0-9a-z]{2,8})+/gi;
let closure_22 = { tags: { "art-lojban": "jbo", "i-ami": "ami", "i-bnn": "bnn", "i-hak": "hak", "i-klingon": "tlh", "i-lux": "lb", "i-navajo": "nv", "i-pwn": "pwn", "i-tao": "tao", "i-tay": "tay", "i-tsu": "tsu", "no-bok": "nb", "no-nyn": "nn", "sgn-BE-FR": "sfb", "sgn-BE-NL": "vgt", "sgn-CH-DE": "sgg", "zh-guoyu": "cmn", "zh-hakka": "hak", "zh-min-nan": "nan", "zh-xiang": "hsn", "sgn-BR": "bzs", "sgn-CO": "csn", "sgn-DE": "gsg", "sgn-DK": "dsl", "sgn-ES": "ssp", "sgn-FR": "fsl", "sgn-GB": "bfi", "sgn-GR": "gss", "sgn-IE": "isg", "sgn-IT": "ise", "sgn-JP": "jsl", "sgn-MX": "mfs", "sgn-NI": "ncs", "sgn-NL": "dse", "sgn-NO": "nsl", "sgn-PT": "psr", "sgn-SE": "swl", "sgn-US": "ase", "sgn-ZA": "sfs", "zh-cmn": "cmn", "zh-cmn-Hans": "cmn-Hans", "zh-cmn-Hant": "cmn-Hant", "zh-gan": "gan", "zh-wuu": "wuu", "zh-yue": "yue" }, subtags: { BU: "MM", DD: "DE", FX: "FR", TP: "TL", YD: "YE", ZR: "CD", heploc: "alalc97", in: "id", iw: "he", ji: "yi", jw: "jv", mo: "ro", ayx: "nun", bjd: "drl", ccq: "rki", cjr: "mom", cka: "cmr", cmk: "xch", drh: "khk", drw: "prs", gav: "dev", hrr: "jal", ibi: "opa", kgh: "kml", lcq: "ppr", mst: "mry", myt: "mry", sca: "hle", tie: "ras", tkk: "twm", tlw: "weo", tnf: "prs", ybd: "rki", yma: "lrr" }, extLang: { aao: ["aao", "ar"], abh: ["abh", "ar"], abv: ["abv", "ar"], acm: ["acm", "ar"], acq: ["acq", "ar"], acw: ["acw", "ar"], acx: ["acx", "ar"], acy: ["acy", "ar"], adf: ["adf", "ar"], ads: ["ads", "sgn"], aeb: ["aeb", "ar"], aec: ["aec", "ar"], aed: ["aed", "sgn"], aen: ["aen", "sgn"], afb: ["afb", "ar"], afg: ["afg", "sgn"], ajp: ["ajp", "ar"], apc: ["apc", "ar"], apd: ["apd", "ar"], arb: ["arb", "ar"], arq: ["arq", "ar"], ars: ["ars", "ar"], ary: ["ary", "ar"], arz: ["arz", "ar"], ase: ["ase", "sgn"], asf: ["asf", "sgn"], asp: ["asp", "sgn"], asq: ["asq", "sgn"], asw: ["asw", "sgn"], auz: ["auz", "ar"], avl: ["avl", "ar"], ayh: ["ayh", "ar"], ayl: ["ayl", "ar"], ayn: ["ayn", "ar"], ayp: ["ayp", "ar"], bbz: ["bbz", "ar"], bfi: ["bfi", "sgn"], bfk: ["bfk", "sgn"], bjn: ["bjn", "ms"], bog: ["bog", "sgn"], bqn: ["bqn", "sgn"], bqy: ["bqy", "sgn"], btj: ["btj", "ms"], bve: ["bve", "ms"], bvl: ["bvl", "sgn"], bvu: ["bvu", "ms"], bzs: ["bzs", "sgn"], cdo: ["cdo", "zh"], cds: ["cds", "sgn"], cjy: ["cjy", "zh"], cmn: ["cmn", "zh"], coa: ["coa", "ms"], cpx: ["cpx", "zh"], csc: ["csc", "sgn"], csd: ["csd", "sgn"], cse: ["cse", "sgn"], csf: ["csf", "sgn"], csg: ["csg", "sgn"], csl: ["csl", "sgn"], csn: ["csn", "sgn"], csq: ["csq", "sgn"], csr: ["csr", "sgn"], czh: ["czh", "zh"], czo: ["czo", "zh"], doq: ["doq", "sgn"], dse: ["dse", "sgn"], dsl: ["dsl", "sgn"], dup: ["dup", "ms"], ecs: ["ecs", "sgn"], esl: ["esl", "sgn"], esn: ["esn", "sgn"], eso: ["eso", "sgn"], eth: ["eth", "sgn"], fcs: ["fcs", "sgn"], fse: ["fse", "sgn"], fsl: ["fsl", "sgn"], fss: ["fss", "sgn"], gan: ["gan", "zh"], gds: ["gds", "sgn"], gom: ["gom", "kok"], gse: ["gse", "sgn"], gsg: ["gsg", "sgn"], gsm: ["gsm", "sgn"], gss: ["gss", "sgn"], gus: ["gus", "sgn"], hab: ["hab", "sgn"], haf: ["haf", "sgn"], hak: ["hak", "zh"], hds: ["hds", "sgn"], hji: ["hji", "ms"], hks: ["hks", "sgn"], hos: ["hos", "sgn"], hps: ["hps", "sgn"], hsh: ["hsh", "sgn"], hsl: ["hsl", "sgn"], hsn: ["hsn", "zh"], icl: ["icl", "sgn"], ils: ["ils", "sgn"], inl: ["inl", "sgn"], ins: ["ins", "sgn"], ise: ["ise", "sgn"], isg: ["isg", "sgn"], isr: ["isr", "sgn"], jak: ["jak", "ms"], jax: ["jax", "ms"], jcs: ["jcs", "sgn"], jhs: ["jhs", "sgn"], jls: ["jls", "sgn"], jos: ["jos", "sgn"], jsl: ["jsl", "sgn"], jus: ["jus", "sgn"], kgi: ["kgi", "sgn"], knn: ["knn", "kok"], kvb: ["kvb", "ms"], kvk: ["kvk", "sgn"], kvr: ["kvr", "ms"], kxd: ["kxd", "ms"], lbs: ["lbs", "sgn"], lce: ["lce", "ms"], lcf: ["lcf", "ms"], liw: ["liw", "ms"], lls: ["lls", "sgn"], lsg: ["lsg", "sgn"], lsl: ["lsl", "sgn"], lso: ["lso", "sgn"], lsp: ["lsp", "sgn"], lst: ["lst", "sgn"], lsy: ["lsy", "sgn"], ltg: ["ltg", "lv"], lvs: ["lvs", "lv"], lzh: ["lzh", "zh"], max: ["max", "ms"], mdl: ["mdl", "sgn"], meo: ["meo", "ms"], mfa: ["mfa", "ms"], mfb: ["mfb", "ms"], mfs: ["mfs", "sgn"], min: ["min", "ms"], mnp: ["mnp", "zh"], mqg: ["mqg", "ms"], mre: ["mre", "sgn"], msd: ["msd", "sgn"], msi: ["msi", "ms"], msr: ["msr", "sgn"], mui: ["mui", "ms"], mzc: ["mzc", "sgn"], mzg: ["mzg", "sgn"], mzy: ["mzy", "sgn"], nan: ["nan", "zh"], nbs: ["nbs", "sgn"], ncs: ["ncs", "sgn"], nsi: ["nsi", "sgn"], nsl: ["nsl", "sgn"], nsp: ["nsp", "sgn"], nsr: ["nsr", "sgn"], nzs: ["nzs", "sgn"], okl: ["okl", "sgn"], orn: ["orn", "ms"], ors: ["ors", "ms"], pel: ["pel", "ms"], pga: ["pga", "ar"], pks: ["pks", "sgn"], prl: ["prl", "sgn"], prz: ["prz", "sgn"], psc: ["psc", "sgn"], psd: ["psd", "sgn"], pse: ["pse", "ms"], psg: ["psg", "sgn"], psl: ["psl", "sgn"], pso: ["pso", "sgn"], psp: ["psp", "sgn"], psr: ["psr", "sgn"], pys: ["pys", "sgn"], rms: ["rms", "sgn"], rsi: ["rsi", "sgn"], rsl: ["rsl", "sgn"], sdl: ["sdl", "sgn"], sfb: ["sfb", "sgn"], sfs: ["sfs", "sgn"], sgg: ["sgg", "sgn"], sgx: ["sgx", "sgn"], shu: ["shu", "ar"], slf: ["slf", "sgn"], sls: ["sls", "sgn"], sqk: ["sqk", "sgn"], sqs: ["sqs", "sgn"], ssh: ["ssh", "ar"], ssp: ["ssp", "sgn"], ssr: ["ssr", "sgn"], svk: ["svk", "sgn"], swc: ["swc", "sw"], swh: ["swh", "sw"], swl: ["swl", "sgn"], syy: ["syy", "sgn"], tmw: ["tmw", "ms"], tse: ["tse", "sgn"], tsm: ["tsm", "sgn"], tsq: ["tsq", "sgn"], tss: ["tss", "sgn"], tsy: ["tsy", "sgn"], tza: ["tza", "sgn"], ugn: ["ugn", "sgn"], ugy: ["ugy", "sgn"], ukl: ["ukl", "sgn"], uks: ["uks", "sgn"], urk: ["urk", "ms"], uzn: ["uzn", "uz"], uzs: ["uzs", "uz"], vgt: ["vgt", "sgn"], vkk: ["vkk", "ms"], vkt: ["vkt", "ms"], vsi: ["vsi", "sgn"], vsl: ["vsl", "sgn"], vsv: ["vsv", "sgn"], wuu: ["wuu", "zh"], xki: ["xki", "sgn"], xml: ["xml", "sgn"], xmm: ["xmm", "ms"], xms: ["xms", "sgn"], yds: ["yds", "sgn"], ysl: ["ysl", "sgn"], yue: ["yue", "zh"], zib: ["zib", "sgn"], zlm: ["zlm", "ms"], zmi: ["zmi", "ms"], zsl: ["zsl", "sgn"], zsm: ["zsm", "ms"] } };
let closure_23 = { BHD: 3, BYR: 0, XOF: 0, BIF: 0, XAF: 0, CLF: 4, CLP: 0, KMF: 0, DJF: 0, XPF: 0, GNF: 0, ISK: 0, IQD: 3, JPY: 0, JOD: 3, KRW: 0, KWD: 3, LYD: 3, OMR: 3, PYG: 0, RWF: 0, TND: 3, UGX: 0, UYI: 0, VUV: 0, VND: 0 };
obj = { configurable: true, writable: true, value: NumberFormatConstructor };
fn(obj, "NumberFormat", obj);
fn(obj.NumberFormat, "prototype", { writable: false });
tmp4Result.NumberFormat = { "[[availableLocales]]": [], "[[relevantExtensionKeys]]": ["nu"], "[[localeData]]": {} };
let call = tmp5.call;
const NumberFormat = tmp4Result.NumberFormat;
obj = { configurable: true, writable: true, value: typeof call === "unknown" ? tmp5(NumberFormat) : call(supportedLocalesOf, NumberFormat) };
fn(obj.NumberFormat, "supportedLocalesOf", obj);
fn(obj.NumberFormat.prototype, "format", { configurable: true, get: GetFormatNumber });
let closure_32 = { arab: ["\u0660", "\u0661", "\u0662", "\u0663", "\u0664", "\u0665", "\u0666", "\u0667", "\u0668", "\u0669"], arabext: ["\u06F0", "\u06F1", "\u06F2", "\u06F3", "\u06F4", "\u06F5", "\u06F6", "\u06F7", "\u06F8", "\u06F9"], bali: ["\u1B50", "\u1B51", "\u1B52", "\u1B53", "\u1B54", "\u1B55", "\u1B56", "\u1B57", "\u1B58", "\u1B59"], beng: ["\u09E6", "\u09E7", "\u09E8", "\u09E9", "\u09EA", "\u09EB", "\u09EC", "\u09ED", "\u09EE", "\u09EF"], deva: ["\u0966", "\u0967", "\u0968", "\u0969", "\u096A", "\u096B", "\u096C", "\u096D", "\u096E", "\u096F"], fullwide: ["\uFF10", "\uFF11", "\uFF12", "\uFF13", "\uFF14", "\uFF15", "\uFF16", "\uFF17", "\uFF18", "\uFF19"], gujr: ["\u0AE6", "\u0AE7", "\u0AE8", "\u0AE9", "\u0AEA", "\u0AEB", "\u0AEC", "\u0AED", "\u0AEE", "\u0AEF"], guru: ["\u0A66", "\u0A67", "\u0A68", "\u0A69", "\u0A6A", "\u0A6B", "\u0A6C", "\u0A6D", "\u0A6E", "\u0A6F"], hanidec: ["\u3007", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D", "\u4E03", "\u516B", "\u4E5D"], khmr: ["\u17E0", "\u17E1", "\u17E2", "\u17E3", "\u17E4", "\u17E5", "\u17E6", "\u17E7", "\u17E8", "\u17E9"], knda: ["\u0CE6", "\u0CE7", "\u0CE8", "\u0CE9", "\u0CEA", "\u0CEB", "\u0CEC", "\u0CED", "\u0CEE", "\u0CEF"], laoo: ["\u0ED0", "\u0ED1", "\u0ED2", "\u0ED3", "\u0ED4", "\u0ED5", "\u0ED6", "\u0ED7", "\u0ED8", "\u0ED9"], latn: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], limb: ["\u1946", "\u1947", "\u1948", "\u1949", "\u194A", "\u194B", "\u194C", "\u194D", "\u194E", "\u194F"], mlym: ["\u0D66", "\u0D67", "\u0D68", "\u0D69", "\u0D6A", "\u0D6B", "\u0D6C", "\u0D6D", "\u0D6E", "\u0D6F"], mong: ["\u1810", "\u1811", "\u1812", "\u1813", "\u1814", "\u1815", "\u1816", "\u1817", "\u1818", "\u1819"], mymr: ["\u1040", "\u1041", "\u1042", "\u1043", "\u1044", "\u1045", "\u1046", "\u1047", "\u1048", "\u1049"], orya: ["\u0B66", "\u0B67", "\u0B68", "\u0B69", "\u0B6A", "\u0B6B", "\u0B6C", "\u0B6D", "\u0B6E", "\u0B6F"], tamldec: ["\u0BE6", "\u0BE7", "\u0BE8", "\u0BE9", "\u0BEA", "\u0BEB", "\u0BEC", "\u0BED", "\u0BEE", "\u0BEF"], telu: ["\u0C66", "\u0C67", "\u0C68", "\u0C69", "\u0C6A", "\u0C6B", "\u0C6C", "\u0C6D", "\u0C6E", "\u0C6F"], thai: ["\u0E50", "\u0E51", "\u0E52", "\u0E53", "\u0E54", "\u0E55", "\u0E56", "\u0E57", "\u0E58", "\u0E59"], tibt: ["\u0F20", "\u0F21", "\u0F22", "\u0F23", "\u0F24", "\u0F25", "\u0F26", "\u0F27", "\u0F28", "\u0F29"] };
fn(obj.NumberFormat.prototype, "resolvedOptions", {
  configurable: true,
  writable: true,
  value() {
    obj = Object.create(Record.prototype);
    for (const key10006 in undefined) {
      let tmp23 = key10006;
      let tmp24 = Record;
      let tmp25 = undefined instanceof Record;
      if (tmp25) {
        if (!tmp25) {
          continue;
        } else {
          let tmp5 = fn;
          obj = { value: null, enumerable: true, writable: true, configurable: true };
          obj[0] = undefined[key10006];
          let tmp6 = fn(obj, key10006, obj);
          continue;
        }
        continue;
      } else {
        let tmp2 = hasOwnProperty;
        let call = hasOwnProperty.call;
        if (typeof call === "unknown") {
          let callResult = tmp2(key10006);
        } else {
          callResult = call(undefined, key10006);
        }
        let tmp4 = callResult;
      }
    }
    const self = this;
    if (!(null != this && typeof self === "object")) {
      if (tmp7) {
        if (tmp7["[[initializedNumberFormat]]"]) {
          const items = ["locale", "numberingSystem", "style", "currency", "currencyDisplay", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "useGrouping"];
          let num = 0;
          if (0 < items.length) {
            do {
              let tmp19 = hasOwnProperty;
              let call3 = hasOwnProperty.call;
              let text = `${"[[" + arr[num]}]]`;
              let tmp21 = num;
              if (typeof call3 === "unknown" ? tmp19(`${"[[" + arr[num]}]]`) : call3(tmp7, `${"[[" + arr[num]}]]`)) {
                obj = { value: null, writable: true, configurable: true, enumerable: true };
                obj[0] = tmp7[`${"[[" + arr[num]}]]`];
                obj[items[num]] = obj;
              }
              num = num + 1;
            } while (num < length);
          }
          return callback({}, obj);
        }
      }
      const _TypeError = TypeError;
      const typeError = new TypeError("`this` value for resolvedOptions() is not an initialized Intl.NumberFormat object.");
      throw typeError;
    } else {
      const call2 = hasOwnProperty.call;
      if (typeof call2 === "unknown") {
        let call2Result = tmp8("__getInternalProperties");
      } else {
        call2Result = call2(self, "__getInternalProperties");
      }
      if (call2Result) {
        let result = self.__getInternalProperties(closure_16);
      } else {
        result = callback(null);
      }
      tmp8 = hasOwnProperty;
    }
  }
});
fn(obj, "DateTimeFormat", { configurable: true, writable: true, value: DateTimeFormatConstructor });
fn(DateTimeFormatConstructor, "prototype", { writable: false });
let closure_35 = { weekday: ["narrow", "short", "long"], era: ["narrow", "short", "long"], year: ["2-digit", "numeric"], month: ["2-digit", "numeric", "narrow", "short", "long"], day: ["2-digit", "numeric"], hour: ["2-digit", "numeric"], minute: ["2-digit", "numeric"], second: ["2-digit", "numeric"], timeZoneName: ["short", "long"] };
tmp4Result.DateTimeFormat = { "[[availableLocales]]": [], "[[relevantExtensionKeys]]": ["ca", "nu"], "[[localeData]]": {} };
let call2 = tmp5.call;
let DateTimeFormat = tmp4Result.DateTimeFormat;
fn(obj.DateTimeFormat, "supportedLocalesOf", { configurable: true, writable: true, value: typeof call2 === "unknown" ? tmp5(DateTimeFormat) : call2(supportedLocalesOf, DateTimeFormat) });
fn(obj.DateTimeFormat.prototype, "format", { configurable: true, get: GetFormatDateTime });
fn(obj.DateTimeFormat.prototype, "resolvedOptions", {
  writable: true,
  configurable: true,
  value() {
    obj = Object.create(Record.prototype);
    for (const key10006 in undefined) {
      let tmp23 = key10006;
      let tmp24 = Record;
      let tmp25 = undefined instanceof Record;
      if (tmp25) {
        if (!tmp25) {
          continue;
        } else {
          let tmp5 = fn;
          obj = { value: null, enumerable: true, writable: true, configurable: true };
          obj[0] = undefined[key10006];
          let tmp6 = fn(obj, key10006, obj);
          continue;
        }
        continue;
      } else {
        let tmp2 = hasOwnProperty;
        let call = hasOwnProperty.call;
        if (typeof call === "unknown") {
          let callResult = tmp2(key10006);
        } else {
          callResult = call(undefined, key10006);
        }
        let tmp4 = callResult;
      }
    }
    const self = this;
    if (!(null != this && typeof self === "object")) {
      if (tmp7) {
        if (tmp7["[[initializedDateTimeFormat]]"]) {
          const items = ["locale", "calendar", "numberingSystem", "timeZone", "hour12", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName"];
          let num = 0;
          if (0 < items.length) {
            do {
              let tmp19 = hasOwnProperty;
              let call3 = hasOwnProperty.call;
              let text = `${"[[" + arr[num]}]]`;
              let tmp21 = num;
              if (typeof call3 === "unknown" ? tmp19(`${"[[" + arr[num]}]]`) : call3(tmp7, `${"[[" + arr[num]}]]`)) {
                obj = { value: null, writable: true, configurable: true, enumerable: true };
                obj[0] = tmp7[`${"[[" + arr[num]}]]`];
                obj[items[num]] = obj;
              }
              num = num + 1;
            } while (num < length);
          }
          return callback({}, obj);
        }
      }
      const _TypeError = TypeError;
      const typeError = new TypeError("`this` value for resolvedOptions() is not an initialized Intl.DateTimeFormat object.");
      throw typeError;
    } else {
      const call2 = hasOwnProperty.call;
      if (typeof call2 === "unknown") {
        let call2Result = tmp8("__getInternalProperties");
      } else {
        call2Result = call2(self, "__getInternalProperties");
      }
      if (call2Result) {
        let result = self.__getInternalProperties(closure_16);
      } else {
        result = callback(null);
      }
      tmp8 = hasOwnProperty;
    }
  }
});
const obj7 = { Number: {}, Date: {} };
obj.__localeSensitiveProtos = obj7;
obj7.Number.toLocaleString = function() {
  const self = this;
  const call = toString.call;
  if ("[object Number]" !== (typeof call === "unknown" ? toString() : call(self))) {
    const _TypeError = TypeError;
    const typeError = new TypeError("`this` value must be a number for Number.prototype.toLocaleString()");
    throw typeError;
  } else {
    [tmp3, tmp4] = arguments;
    const tmp5 = NumberFormatConstructor(tmp3, tmp4);
    return FormatNumber(tmp5, self);
  }
};
obj7.Date.toLocaleString = function() {
  const self = this;
  const call = toString.call;
  if ("[object Date]" !== (typeof call === "unknown" ? toString() : call(self))) {
    const _TypeError = TypeError;
    const typeError = new TypeError("`this` value must be a Date instance for Date.prototype.toLocaleString()");
    throw typeError;
  } else {
    const _isNaN = isNaN;
    let str = "Invalid Date";
    if (!isNaN(+self)) {
      const tmp6 = DateTimeFormatConstructor(arguments[0], ToDateTimeOptions(arguments[1], "any", "all"));
      str = FormatDateTime(tmp6, tmp);
      const tmp5 = ToDateTimeOptions(arguments[1], "any", "all");
    }
    return str;
  }
};
obj7.Date.toLocaleDateString = function() {
  const self = this;
  const call = toString.call;
  if ("[object Date]" !== (typeof call === "unknown" ? toString() : call(self))) {
    const _TypeError = TypeError;
    const typeError = new TypeError("`this` value must be a Date instance for Date.prototype.toLocaleDateString()");
    throw typeError;
  } else {
    const _isNaN = isNaN;
    let str = "Invalid Date";
    if (!isNaN(+self)) {
      const tmp6 = DateTimeFormatConstructor(arguments[0], ToDateTimeOptions(arguments[1], "date", "date"));
      str = FormatDateTime(tmp6, tmp);
      const tmp5 = ToDateTimeOptions(arguments[1], "date", "date");
    }
    return str;
  }
};
obj7.Date.toLocaleTimeString = function() {
  const self = this;
  const call = toString.call;
  if ("[object Date]" !== (typeof call === "unknown" ? toString() : call(self))) {
    const _TypeError = TypeError;
    const typeError = new TypeError("`this` value must be a Date instance for Date.prototype.toLocaleTimeString()");
    throw typeError;
  } else {
    const _isNaN = isNaN;
    let str = "Invalid Date";
    if (!isNaN(+self)) {
      const tmp6 = DateTimeFormatConstructor(arguments[0], ToDateTimeOptions(arguments[1], "time", "time"));
      str = FormatDateTime(tmp6, tmp);
      const tmp5 = ToDateTimeOptions(arguments[1], "time", "time");
    }
    return str;
  }
};
fn(obj, "__applyLocaleSensitivePrototypes", {
  writable: true,
  configurable: true,
  value() {
    obj = { writable: true, configurable: true, value: obj7.Number.toLocaleString };
    fn(Number.prototype, "toLocaleString", obj);
    obj = { writable: true, configurable: true, value: obj7.Date.toLocaleString };
    fn(Date.prototype, "toLocaleString", obj);
    for (const key10019 in obj7.Date) {
      let tmp6 = key10019;
      let tmp7 = hasOwnProperty;
      let call = hasOwnProperty.call;
      let _Date2 = obj7.Date;
      let tmp8 = obj7;
      if (typeof call === "unknown") {
        let callResult = tmp7(key10019);
      } else {
        callResult = call(_Date2, key10019);
      }
      if (!callResult) {
        continue;
      } else {
        let tmp4 = fn;
        let _Date = Date;
        obj = { writable: true, configurable: true, value: null };
        obj[2] = tmp8.Date[key10019];
        let tmp5 = fn(Date.prototype, key10019, obj);
        continue;
      }
      continue;
    }
  }
});
fn(obj, "__addLocaleData", {
  value(locale) {
    let tmp22;
    locale = locale.locale;
    const expBCP47Syntax = RegExpResult1.expBCP47Syntax;
    let isMatch = expBCP47Syntax.test(locale);
    if (isMatch) {
      const expVariantDupes = tmp(16484).expVariantDupes;
      isMatch = expVariantDupes.test(locale);
      let tmp5 = !isMatch;
      if (!isMatch) {
        const expSingletonDupes = tmp(16484).expSingletonDupes;
        tmp5 = !expSingletonDupes.test(locale);
      }
      isMatch = tmp5;
    }
    if (isMatch) {
      const str2 = locale.locale;
      if (locale.number) {
        const items = [str2];
        const parts = str2.split("-");
        let tmp16 = parts.length > 2;
        if (tmp16) {
          tmp16 = 4 === parts[1].length;
        }
        if (tmp16) {
          const call = push.call;
          const text = `${arr2[0]}-${arr2[2]}`;
          if (typeof call === "unknown") {
            tmp17(text);
          } else {
            call(items, text);
          }
          tmp17 = push;
        }
        const call2 = shift.call;
        let tmp21 = typeof call2 === "unknown" ? shift() : call2(items);
        if (tmp21) {
          while (true) {
            tmp22 = push;
            let call3 = push.call;
            let date = closure_15;
            __availableLocales__ = closure_15.NumberFormat["[[availableLocales]]"];
            let tmp23 = tmp21;
            if (typeof call3 === "unknown") {
              let tmp22Result = tmp22(tmp21);
            } else {
              let call3Result = call3(__availableLocales__, tmp21);
            }
            date.NumberFormat["[[localeData]]"][tmp21] = locale.number;
            if (locale.date) {
              break;
            } else {
              let tmp26 = shift;
              let call5 = shift.call;
              let tmp27 = typeof call5 === "unknown" ? tmp26() : call5(items);
              tmp21 = tmp27;
            }
          }
          locale.date.nu = locale.number.nu;
          const call4 = tmp22.call;
          __localeData__ = date.DateTimeFormat["[[availableLocales]]"];
          if (typeof call4 === "unknown") {
            tmp22(tmp21);
          } else {
            call4(__localeData__, tmp21);
          }
          __localeData__ = date.DateTimeFormat["[[localeData]]"];
          date = locale.date;
          __localeData__[tmp21] = date;
        }
        if (!c18) {
          InitializeNumberFormat(obj.NumberFormat.prototype);
          c18 = true;
        }
        let date2 = locale.date;
        if (date2) {
          date2 = !c19;
        }
        if (date2) {
          InitializeDateTimeFormat(obj.DateTimeFormat.prototype);
          c19 = true;
        }
      } else {
        const _Error2 = Error;
        error = new Error("Object passed doesn't contain locale data for Intl.NumberFormat");
        throw error;
      }
    } else {
      const _Error = Error;
      const error1 = new Error("Object passed doesn't identify itself with a valid language tag");
      throw error1;
    }
  }
});
Record.prototype = tmp4(null);
List.prototype = tmp4(null);
arg5.default = obj;