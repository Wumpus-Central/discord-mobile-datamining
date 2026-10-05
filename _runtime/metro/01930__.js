// _runtime/metro/01930__.js
import expBCP47Syntax2 from "../01931_expBCP47Syntax.js";
import _mod1932 from "01932__.js";

let str2;

let fn;
let obj12;
function CanonicalizeLocaleList(str) {
  let tmp28;
  if (undefined === str) {
    const obj4 = Object.create(List.prototype);
    List();
    return obj4;
  } else {
    const obj5 = Object.create(List.prototype);
    List();
    let tmp47 = str;
    if (typeof str === "string") {
      const items = [str];
      tmp47 = items;
    }
    if (null == tmp47) {
      const _TypeError2 = TypeError;
      const self5 = this;
      const self6 = this;
      const typeError = new TypeError("Cannot convert null or undefined to object");
      throw typeError;
    } else {
      const _Object = Object;
      const ObjectResult = Object(tmp47);
      let num3 = 0;
      const length3 = ObjectResult.length;
      if (0 < length3) {
        while (true) {
          let _String = String;
          let StringResult = String(num3);
          if (StringResult in ObjectResult) {
            let tmp4 = ObjectResult[StringResult];
            if (null == tmp4) {
              break;
            } else {
              if (typeof tmp4 === "string") {
                let _String2 = String;
                str = String(tmp4);
                let expBCP47Syntax = expBCP47Syntax2.expBCP47Syntax;
                let isMatch1 = expBCP47Syntax.test(str);
                if (isMatch1) {
                  let expVariantDupes = expBCP47Syntax2.expVariantDupes;
                  let isMatch = expVariantDupes.test(str);
                  let tmp9 = !isMatch;
                  if (tmp9) {
                    let expSingletonDupes = expBCP47Syntax2.expSingletonDupes;
                    tmp9 = !expSingletonDupes.test(str);
                  }
                  isMatch1 = tmp9;
                }
                if (isMatch1) {
                  let str4 = str.toLowerCase();
                  let parts = str4.split("-");
                  let length = parts.length;
                  let num = 1;
                  if (1 < length) {
                    while (true) {
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
                  let str8 = join.call(parts, "-");
                  let match = str8.match(expBCP47Syntax2.expExtSequences);
                  let tmp17 = match && match.length > 1;
                  let replaced = str8;
                  if (tmp17) {
                    let sorted = match.sort();
                    let _RegExp = RegExp;
                    let replace = str8.replace;
                    let RegExpResult = RegExp(`(?:${tmp14(1931).expExtSequences.source})+`, "i");
                    replaced = replace(RegExpResult, join.call(match, ""));
                  }
                  let str9 = replaced;
                  if (hasOwnProperty.call(obj3.tags, replaced)) {
                    str9 = obj3.tags[replaced];
                  }
                  let parts1 = str9.split("-");
                  let length2 = parts1.length;
                  let num2 = 1;
                  let tmp22 = parts1;
                  let tmp23 = parts1;
                  if (1 < length2) {
                    do {
                      let tmp29;
                      let tmp30;
                      if (hasOwnProperty.call(obj3.subtags, tmp22[num2])) {
                        tmp22[num2] = obj3.subtags[tmp22[num2]];
                        tmp28 = length2;
                        tmp29 = num2;
                        tmp30 = tmp22;
                      } else {
                        tmp28 = length2;
                        tmp29 = num2;
                        tmp30 = tmp22;
                        if (hasOwnProperty.call(obj3.extLang, tmp22[num2])) {
                          tmp22[num2] = obj3.extLang[tmp22[num2]][0];
                          let tmp31 = 1 === num2;
                          if (1 === num2) {
                            tmp31 = obj3.extLang[tmp22[1]][1] === tmp22[0];
                          }
                          let diff = length2;
                          let sum = num2;
                          let callResult = tmp22;
                          if (tmp31) {
                            sum = num2 + 1;
                            diff = length2 - 1;
                            callResult = slice.call(tmp22, num2);
                          }
                          tmp28 = diff;
                          tmp29 = sum;
                          tmp30 = callResult;
                        }
                      }
                      num2 = tmp29 + 1;
                      length2 = tmp28;
                      tmp22 = tmp30;
                      tmp23 = tmp30;
                    } while (num2 < tmp28);
                  }
                  let callResult1 = join.call(tmp23, "-");
                  if (-1 === closure_7.call(obj5, callResult1)) {
                    let callResult2 = push.call(obj5, callResult1);
                  }
                } else {
                  let _RangeError = RangeError;
                  str2 = "'";
                  let self = this;
                  let str3 = "' is not a structurally valid language tag";
                  let self2 = this;
                  let rangeError = new RangeError("'" + str + "' is not a structurally valid language tag");
                  throw rangeError;
                }
              } else if (typeof tmp4 !== "object") {
                break;
              }
              let _TypeError = TypeError;
              let self3 = this;
              let str10 = "String or Object type expected";
              let self4 = this;
              let typeError1 = new TypeError("String or Object type expected");
              throw typeError1;
            }
          }
          num3 = num3 + 1;
        }
      }
      return obj5;
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
    str2 = String(arg1[num]);
    const replaced = str2.replace(re21, "");
    let str3 = replaced;
    while (true) {
      let tmp8;
      while (true) {
        tmp8 = str3;
        if (closure_7.call(arg0, str3) > -1) {
          break;
        } else {
          let lastIndexOfResult = str3.lastIndexOf("-");
          if (lastIndexOfResult < 0) {
            break;
          } else {
            let tmp10 = lastIndexOfResult >= 2 && "-" === str3.charAt(lastIndexOfResult - 2);
            let diff = lastIndexOfResult;
            if (tmp10) {
              diff = lastIndexOfResult - 2;
            }
            str3 = str3.substring(0, diff);
            continue;
          }
        }
      }
      let sum = num + 1;
      tmp = tmp8;
      tmp2 = replaced;
      str = tmp3;
      if (sum >= length) {
        break;
      } else {
        num = sum;
        tmp2 = replaced;
        str = tmp3;
        tmp = tmp8;
        if (tmp) {
          break;
        }
      }
    }
  }
  obj2 = Object.create(Record.prototype);
  const keys = Object.keys();
  if (keys !== undefined) {
    while (keys[-1] !== undefined) {
      let tmp16 = undefined instanceof Record || hasOwnProperty.call(undefined, tmp15);
      if (!tmp16) {
        continue;
      } else {
        obj = { value: undefined[tmp15], enumerable: true, writable: true, configurable: true };
        let tmp18 = fn(obj2, tmp15, obj);
        continue;
      }
      continue;
    }
  }
  if (undefined !== tmp) {
    obj2["[[locale]]"] = tmp;
    const _String2 = String;
    const _String3 = String;
    const StringResult = String(str);
    if (StringResult !== String(tmp2)) {
      obj2["[[extension]]"] = str.match(re21)[0];
      obj2["[[extensionIndex]]"] = str.indexOf("-u-");
    }
  } else {
    obj2["[[locale]]"] = str2;
  }
  return obj2;
}
function ResolveLocale(arg0, arg1, __localeMatcher__, arg3, arg4) {
  if (0 === arg0.length) {
    const _ReferenceError = ReferenceError;
    const self = this;
    const self2 = this;
    const referenceError = new ReferenceError("No locale data has been provided for this object yet.");
    throw referenceError;
  } else {
    let tmp2;
    let length;
    if ("lookup" === __localeMatcher__["[[localeMatcher]]"]) {
      tmp2 = LookupMatcher(arg0, arg1);
    } else {
      tmp2 = LookupMatcher(arg0, arg1);
    }
    if (hasOwnProperty.call(tmp2, "[[extension]]")) {
      const _String = String;
      const prop = tmp2["[[extensionIndex]]"];
      length = split.call(tmp2["[[extension]]"], "-").length;
    }
    obj3 = Object.create(Record.prototype);
    for (const key10030 in undefined) {
      let callResult1 = undefined instanceof Record || hasOwnProperty.call(undefined, key10030);
      if (!callResult1) {
        continue;
      } else {
        obj = { value: undefined[key10030], enumerable: true, writable: true, configurable: true };
        let tmp12 = fn(obj3, key10030, obj);
        continue;
      }
      continue;
    }
    obj3["[[dataLocale]]"] = tmp2["[[locale]]"];
    str2 = "-u";
    let num4 = 0;
    let str8 = "-u";
    if (0 < arg3.length) {
      do {
        let tmp14 = arg3[num4];
        let tmp15 = arg4[str][tmp14];
        let first = tmp15[0];
        let str9 = "";
        let str10 = first;
        if (undefined !== tmp4) {
          let callResult2 = closure_7.call(tmp4, tmp14);
          str9 = "";
          str10 = first;
          if (-1 !== callResult2) {
            if (callResult2 + 1 < length) {
              if (tmp4[callResult2 + 1].length > 2) {
                let tmp20 = tmp4[callResult2 + 1];
                str9 = "";
                str10 = first;
                if (-1 !== closure_7.call(tmp15, tmp20)) {
                  str9 = `-${tmp14}-${tmp20}`;
                  str10 = tmp20;
                }
              }
            }
            str9 = "";
            str10 = first;
            if (-1 !== closure_7(tmp15, "true")) {
              str9 = "";
              str10 = "true";
            }
          }
        }
        let str11 = str9;
        let tmp21 = str10;
        if (hasOwnProperty.call(__localeMatcher__, `[[${tmp14}]]`)) {
          let tmp22 = __localeMatcher__["[[" + tmp14 + "]]"];
          let tmp23 = -1 !== closure_7.call(tmp15, tmp22) && tmp22 !== str10;
          str11 = str9;
          tmp21 = str10;
          if (tmp23) {
            str11 = "";
            tmp21 = tmp22;
          }
        }
        obj3["[[" + tmp14 + "]]"] = tmp21;
        str2 = str2 + str11;
        num4 = num4 + 1;
        str8 = str2;
      } while (num4 < arg3.length);
    }
    let sum1 = str;
    if (str8.length > 2) {
      const sum = str.substring(0, tmp5) + str8;
      sum1 = sum + str.substring(tmp5);
    }
    obj3["[[locale]]"] = sum1;
    return obj3;
  }
}
function LookupSupportedLocales(arg0, arg1) {
  obj = Object.create(List.prototype);
  List();
  let num = 0;
  if (0 < arg1.length) {
    const _String = String;
    const str = String(arg1[num]);
    str2 = str.replace(re21, "");
    do {
      let tmp7;
      while (true) {
        tmp7 = str2;
        if (closure_7.call(arg0, str2) > -1) {
          break;
        } else {
          let lastIndexOfResult = str2.lastIndexOf("-");
          if (lastIndexOfResult < 0) {
            break;
          } else {
            let tmp9 = lastIndexOfResult >= 2 && "-" === str2.charAt(lastIndexOfResult - 2);
            let diff = lastIndexOfResult;
            if (tmp9) {
              diff = lastIndexOfResult - 2;
            }
            str2 = str2.substring(0, diff);
            continue;
          }
        }
      }
      if (undefined !== tmp7) {
        let callResult = push.call(obj, tmp3);
      }
      num = num + 1;
    } while (num < arg1.length);
  }
  return slice.call(obj);
}
class NumberFormatConstructor {
  constructor() {
    const self = this;
    const first = arguments[0];
    const tmp2 = arguments[1];
    if (this) {
      let numberFormat;
      if (self !== obj) {
        if (null == self) {
          const _TypeError = TypeError;
          const self2 = this;
          const self3 = this;
          const typeError = new TypeError("Cannot convert null or undefined to object");
          throw typeError;
        } else {
          const _Object = Object;
          const ObjectResult = Object(self);
          tmp5(ObjectResult, first, tmp2);
          numberFormat = ObjectResult;
        }
      }
      return numberFormat;
    }
    numberFormat = new obj.NumberFormat(first, tmp2);
  }
}
function InitializeNumberFormat(__getInternalProperties, arg1, arg2) {
  let result;
  let tmp28;
  let tmp41;
  if (hasOwnProperty.call(__getInternalProperties, "__getInternalProperties")) {
    result = __getInternalProperties.__getInternalProperties(closure_16);
  } else {
    result = closure_8(null);
  }
  require = result;
  const tmp5 = createRegExpRestore();
  if (true === result["[[initializedIntlObject]]"]) {
    const _TypeError3 = TypeError;
    const self23 = this;
    const self24 = this;
    const typeError = new TypeError("`this` object has already been initialized as an Intl object");
    throw typeError;
  } else {
    let ObjectResult;
    let bound;
    obj = {
      value() {
        if (arguments[0] === closure_16) {
          return require;
        }
      },
    };
    fn(__getInternalProperties, "__getInternalProperties", obj);
    result["[[initializedIntlObject]]"] = true;
    const tmp99 = CanonicalizeLocaleList(arg1);
    if (undefined === arg2) {
      ObjectResult = {};
    } else if (null == arg2) {
      const _TypeError = TypeError;
      const self = this;
      const self2 = this;
      const typeError1 = new TypeError("Cannot convert null or undefined to object");
      throw typeError1;
    } else {
      const _Object = Object;
      ObjectResult = Object(arg2);
    }
    obj2 = Object.create(Record.prototype);
    for (const key10032 in undefined) {
      let callResult = undefined instanceof Record || hasOwnProperty.call(undefined, key10032);
      if (!callResult) {
        continue;
      } else {
        obj3 = { value: undefined[key10032], enumerable: true, writable: true, configurable: true };
        let tmp15 = fn(obj2, key10032, obj3);
        continue;
      }
      continue;
    }
    const obj9 = Object.create(List.prototype);
    List("lookup", "best fit");
    const localeMatcher = ObjectResult.localeMatcher;
    let str4 = "best fit";
    if (undefined !== localeMatcher) {
      const _String = String;
      const StringResult = String(localeMatcher);
      str4 = StringResult;
      if (-1 === closure_7.call(obj9, StringResult)) {
        const _RangeError9 = RangeError;
        const self21 = this;
        const self22 = this;
        const rangeError = new RangeError("'" + StringResult + "' is not an allowed value for `localeMatcher`");
        throw rangeError;
      }
    }
    obj2["[[localeMatcher]]"] = str4;
    const prop = closure_15.NumberFormat["[[localeData]]"];
    ({
      "[[locale]]": tmp3["[[locale]]"],
      "[[nu]]": tmp3["[[numberingSystem]]"],
      "[[dataLocale]]": tmp3["[[dataLocale]]"],
      "[[dataLocale]]": tmp28,
    } = ResolveLocale(
      closure_15.NumberFormat["[[availableLocales]]"],
      tmp99,
      obj2,
      closure_15.NumberFormat["[[relevantExtensionKeys]]"],
      prop,
    ));
    ResolveLocale(
      closure_15.NumberFormat["[[availableLocales]]"],
      tmp99,
      obj2,
      closure_15.NumberFormat["[[relevantExtensionKeys]]"],
      prop,
    );
    const obj10 = Object.create(List.prototype);
    List("decimal", "percent", "currency");
    const style = ObjectResult.style;
    let str8 = "decimal";
    if (undefined !== style) {
      const _String2 = String;
      const StringResult1 = String(style);
      str8 = StringResult1;
      if (-1 === closure_7.call(obj10, StringResult1)) {
        const _RangeError8 = RangeError;
        const self19 = this;
        const self20 = this;
        const rangeError1 = new RangeError("'" + StringResult1 + "' is not an allowed value for `style`");
        throw rangeError1;
      }
    }
    result["[[style]]"] = str8;
    const currency = ObjectResult.currency;
    let StringResult2;
    if (undefined !== currency) {
      const _String3 = String;
      StringResult2 = String(currency);
    }
    if (undefined !== StringResult2) {
      const _String5 = String;
      const StringResult3 = String(StringResult2);
      let diff = tmp103 - 1;
      let str10 = StringResult3;
      let tmp43 = StringResult3;
      if (+StringResult3.length) {
        do {
          let str9 = str10.charAt(diff);
          let tmp35 = str9 >= "a";
          if (tmp35) {
            tmp35 = str9 <= "z";
          }
          let sum1 = str10;
          if (tmp35) {
            let substr = str10.slice(0, diff);
            let sum = substr + str9.toUpperCase();
            sum1 = sum + str10.slice(diff + 1);
          }
          tmp41 = +diff;
          diff = tmp41 - 1;
          str10 = sum1;
          tmp43 = sum1;
        } while (tmp41);
      }
      if (false === regex.test(tmp43)) {
        const _RangeError = RangeError;
        const self3 = this;
        const self4 = this;
        const rangeError2 = new RangeError("'" + StringResult2 + "' is not a valid currency code");
        throw rangeError2;
      }
    }
    if ("currency" === str8) {
      if (undefined === StringResult2) {
        const _TypeError2 = TypeError;
        const self17 = this;
        const self18 = this;
        const typeError2 = new TypeError("Currency code is required when style is currency");
        throw typeError2;
      }
    }
    if ("currency" === str8) {
      const formatted = StringResult2.toUpperCase();
      result["[[currency]]"] = formatted;
    }
    const obj11 = Object.create(List.prototype);
    List("code", "symbol", "name");
    const currencyDisplay = ObjectResult.currencyDisplay;
    let str16 = "symbol";
    if (undefined !== currencyDisplay) {
      const _String4 = String;
      const StringResult4 = String(currencyDisplay);
      str16 = StringResult4;
      if (-1 === closure_7.call(obj11, StringResult4)) {
        const _RangeError7 = RangeError;
        const self15 = this;
        const self16 = this;
        const rangeError3 = new RangeError("'" + StringResult4 + "' is not an allowed value for `currencyDisplay`");
        throw rangeError3;
      }
    }
    if ("currency" === str8) {
      result["[[currencyDisplay]]"] = str16;
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
      const self13 = this;
      const self14 = this;
      const rangeError4 = new RangeError("Value is not a number or outside accepted range");
      throw rangeError4;
    }
    result["[[minimumIntegerDigits]]"] = num7;
    let num8 = 0;
    if ("currency" === str8) {
      num8 = tmp48;
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
      const self11 = this;
      const self12 = this;
      const rangeError5 = new RangeError("Value is not a number or outside accepted range");
      throw rangeError5;
    }
    result["[[minimumFractionDigits]]"] = num8;
    if ("currency" === str8) {
      const _Math3 = Math;
      bound = Math.max(num8, tmp48);
    } else if ("percent" === str8) {
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
      const self9 = this;
      const self10 = this;
      const rangeError6 = new RangeError("Value is not a number or outside accepted range");
      throw rangeError6;
    }
    result["[[maximumFractionDigits]]"] = bound;
    const tmp64 =
      undefined === ObjectResult.minimumSignificantDigits && undefined === ObjectResult.maximumSignificantDigits;
    if (!tmp64) {
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
        const self7 = this;
        const self8 = this;
        const rangeError7 = new RangeError("Value is not a number or outside accepted range");
        throw rangeError7;
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
        const self5 = this;
        const self6 = this;
        const rangeError8 = new RangeError("Value is not a number or outside accepted range");
        throw rangeError8;
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
    ({ positivePattern: tmp3["[[positivePattern]]"], negativePattern: tmp3["[[negativePattern]]"] } =
      prop[tmp28].patterns[str8]);
    result["[[boundFormat]]"] = undefined;
    result["[[initializedNumberFormat]]"] = true;
    if (closure_4) {
      __getInternalProperties.format = GetFormatNumber.call(__getInternalProperties);
    }
    const exp = tmp5.exp;
    const isMatch = exp.test(tmp5.input);
    return __getInternalProperties;
  }
}
class GetFormatNumber {
  constructor() {
    const self = this;
    let tmp = null != this && typeof self === "object";
    if (tmp) {
      let result;
      if (hasOwnProperty.call(self, "__getInternalProperties")) {
        result = self.__getInternalProperties(closure_16);
      } else {
        result = closure_8(null);
      }
      tmp = result;
    }
    if (tmp) {
      if (tmp["[[initializedNumberFormat]]"]) {
        if (undefined === tmp["[[boundFormat]]"]) {
          tmp["[[boundFormat]]"] = obj2.call(function (arg0) {
            return FormatNumber(this, Number(arg0));
          }, self);
        }
        return tmp["[[boundFormat]]"];
      }
    }
    const typeError = new TypeError("`this` value for format() is not an initialized Intl.NumberFormat object.");
    throw typeError;
  }
}
function FormatNumber(numberFormat, diff) {
  let flag3;
  let nan;
  let result;
  let tmp11;
  let tmp13;
  let tmp23;
  let tmp24;
  const tmp = createRegExpRestore();
  if (hasOwnProperty.call(numberFormat, "__getInternalProperties")) {
    result = numberFormat.__getInternalProperties(closure_16);
  } else {
    result = closure_8(null);
  }
  const prop = result["[[numberingSystem]]"];
  const tmp8 =
    closure_15.NumberFormat["[[localeData]]"][result["[[dataLocale]]"]].symbols[prop] ||
    closure_15.NumberFormat["[[localeData]]"][result["[[dataLocale]]"]].symbols.latn;
  if (false === isFinite(diff)) {
    const _isNaN = isNaN;
    if (isNaN(diff)) {
      nan = tmp8.nan;
      flag3 = false;
    } else {
      const infinity = tmp8.infinity;
      flag3 = false;
      nan = infinity;
      if (diff < 0) {
        flag3 = true;
        nan = infinity;
      }
    }
  } else {
    let flag = false;
    let tmp9 = diff;
    if (diff < 0) {
      tmp9 = -diff;
      flag = true;
    }
    let result1 = tmp9;
    if ("percent" === result["[[style]]"]) {
      result1 = tmp9 * 100;
    }
    if (hasOwnProperty.call(result, "[[minimumSignificantDigits]]")) {
      let sum2;
      let str15;
      if (hasOwnProperty.call(result, "[[maximumSignificantDigits]]")) {
        let callResult;
        let num7;
        let sum;
        ({ "[[minimumSignificantDigits]]": tmp23, "[[maximumSignificantDigits]]": tmp24 } = result);
        if (0 === result1) {
          const _Array4 = Array;
          callResult = join.call(Array(tmp24 + 1), "0");
          num7 = 0;
        } else {
          const _Math7 = Math;
          const absolute = Math.abs(result1);
          const _Math8 = Math;
          if (typeof Math.log10 === "function") {
            const _Math = Math;
            const _Math2 = Math;
            num7 = Math.floor(Math.log10(absolute));
          } else {
            const _Math9 = Math;
            const _Math10 = Math;
            const _Math11 = Math;
            const rounded = Math.round(Math.log(absolute) * Math.LOG10E);
            const _Number2 = Number;
            num7 = rounded - (Number(`1e${tmp48}`) > absolute);
          }
          const _Math3 = Math;
          const _Math4 = Math;
          const _Math5 = Math;
          const _Math6 = Math;
          const rounded1 = Math.round(Math.exp(Math.abs(num7 - tmp24 + 1) * Math.LN10));
          callResult = String(Math.round(num7 - tmp24 + 1 < 0 ? result1 * rounded1 : result1 / rounded1));
        }
        if (num7 >= tmp24) {
          const _Array6 = Array;
          sum = callResult + join.call(Array(num7 - tmp24 + 1 + 1), "0");
        } else {
          sum = callResult;
          if (num7 !== tmp24 - 1) {
            let text1;
            if (num7 >= 0) {
              const text = `${arr7.slice(0, num7 + 1)}.`;
              text1 = `${arr7.slice(0, num7 + 1)}.${arr7.slice(num7 + 1)}`;
            } else {
              text1 = callResult;
              if (num7 < 0) {
                const _Array5 = Array;
                const call2 = join.call;
                text1 = `0.${call2(Array(1 - (num7 + 1)), "0")}${arr7}`;
              }
            }
            let substr = text1;
            if (text1.indexOf(".") >= 0) {
              substr = text1;
              if (tmp24 > tmp23) {
                diff = tmp24 - tmp23;
                let str13 = text1;
                if (diff > 0) {
                  let arr9 = text1;
                  str13 = text1;
                  if ("0" === text1.charAt(text1.length - 1)) {
                    const str14 = arr9.slice(0, -1);
                    const diff1 = diff - 1;
                    str13 = str14;
                    while (diff1 > 0) {
                      diff = diff1;
                      arr9 = str14;
                      str13 = str14;
                      if ("0" !== str14.charAt(str14.length - 1)) {
                        break;
                      }
                    }
                  }
                }
                substr = str13;
                if ("." === str13.charAt(str13.length - 1)) {
                  substr = str13.slice(0, -1);
                }
              }
            }
            sum = substr;
          }
        }
        sum2 = sum;
      }
      if (closure_32[prop]) {
        let closure_0 = tmp35[result["[[numberingSystem]]"]];
        const _String2 = String;
        const str16 = String(sum2);
        str15 = str16.replace(/\d/g, (arg0) => closure_0[arg0]);
      } else {
        const _String = String;
        str15 = String(sum2);
      }
      const str17 = str15.replace(/\./g, tmp8.decimal);
      flag3 = flag;
      nan = str17;
      if (true === result["[[useGrouping]]"]) {
        const parts = str17.split(tmp8.decimal);
        const first = parts[0];
        const tmp36 =
          closure_15.NumberFormat["[[localeData]]"][result["[[dataLocale]]"]].patterns.primaryGroupSize || 3;
        const tmp37 =
          closure_15.NumberFormat["[[localeData]]"][result["[[dataLocale]]"]].patterns.secondaryGroupSize || tmp36;
        if (first.length > tmp36) {
          obj3 = Object.create(List.prototype);
          List();
          const diff2 = first.length - tmp36;
          let result2 = diff2 % tmp37;
          const substr1 = first.slice(0, result2);
          if (substr1.length) {
            push.call(obj3, substr1);
          }
          if (result2 < diff2) {
            do {
              let callResult2 = push.call(obj3, first.slice(result2, result2 + tmp37));
              result2 = result2 + tmp37;
            } while (result2 < diff2);
          }
          push.call(obj3, first.slice(diff2));
          parts[0] = join.call(obj3, tmp8.group);
        }
        nan = join.call(parts, tmp8.decimal);
        flag3 = flag;
      }
    }
    ({ "[[minimumIntegerDigits]]": tmp11, "[[maximumFractionDigits]]": tmp13 } = result);
    const _Number = Number;
    const prop1 = result["[[minimumFractionDigits]]"];
    str2 = toFixed.call(result1, tmp13);
    let length = str2.split(".")[0].length;
    let diff3 = tmp13 - prop1;
    const index = str2.indexOf("e");
    let num3 = 0;
    if (index > -1) {
      num3 = str2.slice(index + 1);
    }
    let arr = str2;
    if (num3) {
      const str5 = str2.slice(0, index);
      const replaced = str5.replace(".", "");
      const _Array = Array;
      const call = join.call;
      const _Array2 = Array;
      const text2 = `${call(Array(num3 - (arr2.length - 1) + 1), "0")}.`;
      const sum1 = replaced + (`${call(Array(num3 - (arr2.length - 1) + 1), "0")}.` + join.call(Array(tmp13 + 1), "0"));
      length = sum1.length;
      arr = sum1;
    }
    let arr4 = arr;
    if (diff3 > 0) {
      let arr5 = arr;
      arr4 = arr;
      if ("0" === arr.slice(-1)) {
        const substr2 = arr5.slice(0, -1);
        const diff4 = diff3 - 1;
        arr4 = substr2;
        while (diff4 > 0) {
          diff3 = diff4;
          arr5 = substr2;
          arr4 = substr2;
          if ("0" !== substr2.slice(-1)) {
            break;
          }
        }
      }
    }
    let substr3 = arr4;
    if ("." === arr4.slice(-1)) {
      substr3 = arr4.slice(0, -1);
    }
    let str8;
    if (length < tmp11) {
      const _Array3 = Array;
      str8 = join.call(Array(tmp11 - length + 1), "0");
    }
    if (!str8) {
      str8 = "";
    }
    sum2 = str8 + substr3;
  }
  let str18 = "[[positivePattern]]";
  if (true === flag3) {
    str18 = "[[negativePattern]]";
  }
  const str19 = result[str18];
  const str20 = str19.replace("{number}", nan);
  let replaced1 = str20;
  if ("currency" === result["[[style]]"]) {
    const prop2 = result["[[currency]]"];
    let tmp44 = tmp7.currencies[prop2];
    let tmp45 = prop2;
    if ("symbol" === result["[[currencyDisplay]]"]) {
      if (!tmp44) {
        tmp44 = prop2;
      }
      tmp45 = tmp44;
    }
    replaced1 = str20.replace("{currency}", tmp45);
  }
  const exp = tmp.exp;
  const isMatch = exp.test(tmp.input);
  return replaced1;
}
class DateTimeFormatConstructor {
  constructor() {
    const self = this;
    const first = arguments[0];
    const tmp2 = arguments[1];
    if (this) {
      let dateTimeFormat;
      if (self !== obj) {
        if (null == self) {
          const _TypeError = TypeError;
          const self2 = this;
          const self3 = this;
          const typeError = new TypeError("Cannot convert null or undefined to object");
          throw typeError;
        } else {
          const _Object = Object;
          const ObjectResult = Object(self);
          tmp5(ObjectResult, first, tmp2);
          dateTimeFormat = ObjectResult;
        }
      }
      return dateTimeFormat;
    }
    dateTimeFormat = new obj.DateTimeFormat(first, tmp2);
  }
}
function InitializeDateTimeFormat(prototype, arg1, arg2) {
  let result;
  let tmp29;
  if (hasOwnProperty.call(prototype, "__getInternalProperties")) {
    result = prototype.__getInternalProperties(closure_16);
  } else {
    result = closure_8(null);
  }
  require = result;
  const tmp5 = createRegExpRestore();
  if (true === result["[[initializedIntlObject]]"]) {
    const _TypeError = TypeError;
    const self9 = this;
    const self10 = this;
    const typeError = new TypeError("`this` object has already been initialized as an Intl object");
    throw typeError;
  } else {
    let tmp53;
    let hour122;
    let pattern;
    obj2 = {
      value() {
        if (arguments[0] === closure_16) {
          return require;
        }
      },
    };
    fn(prototype, "__getInternalProperties", obj2);
    result["[[initializedIntlObject]]"] = true;
    const tmp75 = CanonicalizeLocaleList(arg1);
    const tmp77 = ToDateTimeOptions(arg2, "any", "date");
    const obj4 = Object.create(Record.prototype);
    for (const key10016 in undefined) {
      let callResult = undefined instanceof Record || hasOwnProperty.call(undefined, key10016);
      if (!callResult) {
        continue;
      } else {
        obj = { value: undefined[key10016], enumerable: true, writable: true, configurable: true };
        let tmp8 = fn(obj4, key10016, obj);
        continue;
      }
      continue;
    }
    const obj11 = Object.create(List.prototype);
    List("lookup", "best fit");
    const localeMatcher = tmp77.localeMatcher;
    let str3 = "best fit";
    if (undefined !== localeMatcher) {
      const _String = String;
      const StringResult = String(localeMatcher);
      str3 = StringResult;
      if (-1 === closure_7.call(obj11, StringResult)) {
        const _RangeError4 = RangeError;
        const self7 = this;
        const self8 = this;
        const rangeError = new RangeError("'" + StringResult + "' is not an allowed value for `localeMatcher`");
        throw rangeError;
      }
    }
    obj4["[[localeMatcher]]"] = str3;
    const DateTimeFormat = closure_15.DateTimeFormat;
    const prop = DateTimeFormat["[[localeData]]"];
    const tmp20 = ResolveLocale(
      DateTimeFormat["[[availableLocales]]"],
      tmp75,
      obj4,
      DateTimeFormat["[[relevantExtensionKeys]]"],
      prop,
    );
    ({
      "[[locale]]": tmp3["[[locale]]"],
      "[[ca]]": tmp3["[[calendar]]"],
      "[[nu]]": tmp3["[[numberingSystem]]"],
      "[[dataLocale]]": tmp3["[[dataLocale]]"],
    } = tmp20);
    const timeZone = tmp77.timeZone;
    let tmp22 = timeZone;
    const prop1 = tmp20["[[dataLocale]]"];
    if (undefined !== timeZone) {
      let diff = tmp82 - 1;
      let str5 = timeZone;
      let tmp31 = timeZone;
      if (+timeZone.length) {
        do {
          let str4 = str5.charAt(diff);
          let tmp23 = str4 >= "a";
          if (tmp23) {
            tmp23 = str4 <= "z";
          }
          let sum1 = str5;
          if (tmp23) {
            let substr = str5.slice(0, diff);
            let sum = substr + str4.toUpperCase();
            sum1 = sum + str5.slice(diff + 1);
          }
          tmp29 = +diff;
          diff = tmp29 - 1;
          str5 = sum1;
          tmp31 = sum1;
        } while (tmp29);
      }
      tmp22 = tmp31;
      if ("UTC" !== tmp31) {
        const _RangeError3 = RangeError;
        const self5 = this;
        const self6 = this;
        const rangeError1 = new RangeError("timeZone is not supported.");
        throw rangeError1;
      }
    }
    result["[[timeZone]]"] = tmp22;
    obj12 = Object.create(Record.prototype);
    for (const key10081 in undefined) {
      let callResult1 = undefined instanceof Record || hasOwnProperty.call(undefined, key10081);
      if (!callResult1) {
        continue;
      } else {
        let obj13 = { value: undefined[key10081], enumerable: true, writable: true, configurable: true };
        let tmp35 = fn(obj12, key10081, obj13);
        continue;
      }
      continue;
    }
    for (const key10096 in closure_35) {
      if (!hasOwnProperty.call(closure_35, key10096)) {
        continue;
      } else {
        let tmp38 = closure_35[key10096];
        let tmp39 = tmp77[key10096];
        let tmp40;
        if (undefined !== tmp39) {
          let _String2 = String;
          let StringResult1 = String(tmp39);
          tmp40 = StringResult1;
          if (undefined !== tmp38) {
            tmp40 = StringResult1;
            if (-1 === closure_7.call(tmp38, StringResult1)) {
              let _RangeError = RangeError;
              let str9 = "'";
              let str10 = "' is not an allowed value for `";
              let self = this;
              let str11 = "`";
              let self2 = this;
              let rangeError2 = new RangeError(
                "'" + StringResult1 + "' is not an allowed value for `" + key10096 + "`",
              );
              throw rangeError2;
            }
          }
        }
        obj12["[[" + key10096 + "]]"] = tmp40;
        continue;
      }
      continue;
    }
    const formats = tmp44.formats;
    const _Object = Object;
    let dateTimeFormats = formats;
    if ("[object Array]" !== toString.call(formats)) {
      obj3 = _mod1932;
      dateTimeFormats = obj3.createDateTimeFormats(formats);
    }
    const obj14 = Object.create(List.prototype);
    List("basic", "best fit");
    const formatMatcher = tmp77.formatMatcher;
    let str14 = "best fit";
    if (undefined !== formatMatcher) {
      const _String3 = String;
      const StringResult2 = String(formatMatcher);
      str14 = StringResult2;
      if (-1 === closure_7.call(obj14, StringResult2)) {
        const _RangeError2 = RangeError;
        const self3 = this;
        const self4 = this;
        const rangeError3 = new RangeError("'" + StringResult2 + "' is not an allowed value for `formatMatcher`");
        throw rangeError3;
      }
    }
    prop[prop1].formats = dateTimeFormats;
    if ("basic" === str14) {
      tmp53 = calculateScore(obj12, dateTimeFormats);
    } else {
      tmp53 = calculateScore(obj12, dateTimeFormats, true);
    }
    const keys = Object.keys();
    if (keys !== undefined) {
      while (keys[-1] !== undefined) {
        if (!hasOwnProperty.call(closure_35, tmp57)) {
          continue;
        } else {
          if (!hasOwnProperty.call(tmp53, tmp57)) {
            continue;
          } else {
            result["[[" + tmp57 + "]]"] = tmp53[tmp57];
            continue;
          }
          continue;
        }
        continue;
      }
    }
    const hour12 = tmp77.hour12;
    if (undefined !== hour12) {
      const _Boolean = Boolean;
      hour122 = Boolean(hour12);
    }
    if (result["[[hour]]"]) {
      if (undefined === hour122) {
        hour122 = tmp44.hour12;
      }
      result["[[hour12]]"] = hour122;
      if (true === hour122) {
        result["[[hourNo0]]"] = prop[prop1].hourNo0;
        pattern = tmp53.pattern12;
      } else {
        pattern = tmp53.pattern;
      }
    } else {
      pattern = tmp53.pattern;
    }
    result["[[pattern]]"] = pattern;
    result["[[boundFormat]]"] = undefined;
    result["[[initializedDateTimeFormat]]"] = true;
    if (closure_4) {
      prototype.format = GetFormatDateTime.call(prototype);
    }
    const exp = tmp5.exp;
    const isMatch = exp.test(tmp5.input);
    return prototype;
  }
}
function ToDateTimeOptions(arg0, any, date) {
  let tmp2 = null;
  if (undefined !== arg0) {
    if (null == arg0) {
      const _TypeError = TypeError;
      const self = this;
      const self2 = this;
      const typeError = new TypeError("Cannot convert null or undefined to object");
      throw typeError;
    } else {
      const _Object = Object;
      const ObjectResult = Object(arg0);
      obj2 = Object.create(Record.prototype);
      for (const key10004 in undefined) {
        let callResult = undefined instanceof Record || hasOwnProperty.call(undefined, key10004);
        if (!callResult) {
          continue;
        } else {
          obj = { value: undefined[key10004], enumerable: true, writable: true, configurable: true };
          let tmp5 = fn(obj2, key10004, obj);
          continue;
        }
        continue;
      }
      tmp2 = obj2;
      const keys = Object.keys();
      if (keys !== undefined) {
        tmp2 = obj2;
        while (keys[tmp] !== undefined) {
          obj2[tmp8] = ObjectResult[tmp8];
          continue;
        }
      }
    }
  }
  date = closure_8(tmp2);
  let tmp12 = "date" !== any && "any" !== any;
  if (!tmp12) {
    tmp12 = undefined === date.weekday && undefined === date.year && undefined === date.month && undefined === date.day;
  }
  let flag = true;
  if (!tmp12) {
    flag = false;
  }
  let tmp14 = "time" !== any && "any" !== any;
  if (!tmp14) {
    tmp14 = undefined === date.hour && undefined === date.minute && undefined === date.second;
  }
  if (!tmp14) {
    flag = false;
  }
  let tmp16 = !flag;
  let tmp17 = tmp16;
  if (flag) {
    tmp17 = "date" !== date && "all" !== date;
    const tmp18 = "date" !== date && "all" !== date;
  }
  if (!tmp17) {
    date.day = "numeric";
    date.month = "numeric";
    date.year = "numeric";
  }
  if (flag) {
    tmp16 = "time" !== date && "all" !== date;
    const tmp19 = "time" !== date && "all" !== date;
  }
  if (!tmp16) {
    date.second = "numeric";
    date.minute = "numeric";
    date.hour = "numeric";
  }
  return date;
}
function calculateScore(arg0, arg1, arg2) {
  let tmp3;
  let num = -Infinity;
  let num2 = 0;
  let tmp4;
  if (0 < arg1.length) {
    do {
      let tmp5 = arg1[num2];
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
          if (!hasOwnProperty.call(closure_35, tmp12)) {
            continue;
          } else {
            let tmp13 = arg0["[[" + tmp12 + "]]"];
            let tmp14;
            if (hasOwnProperty.call(tmp5, tmp12)) {
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
            let callResult = closure_7.call(items, tmp13);
            let _Math = Math;
            let _Math2 = Math;
            let bound = Math.max(Math.min(closure_7.call(items, tmp14) - callResult, 2), -2);
            let tmp17 = tmp2;
            if (arg2) {
              let tmp18 = ("numeric" !== tmp13 && "2-digit" !== tmp13) || "numeric" === tmp14 || "2-digit" === tmp14;
              if (tmp18) {
                let tmp19 = "numeric" === tmp13 || "2-digit" === tmp13;
                if (!tmp19) {
                  let tmp20 = "2-digit" !== tmp14 && "numeric" !== tmp14;
                  tmp19 = tmp20;
                }
                tmp18 = tmp19;
              }
              tmp17 = tmp18;
            }
            let diff = tmp11;
            if (!tmp17) {
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
    } while (num2 < arg1.length);
  }
  return tmp4;
}
class GetFormatDateTime {
  constructor() {
    const self = this;
    let tmp = null != this && typeof self === "object";
    if (tmp) {
      let result;
      if (hasOwnProperty.call(self, "__getInternalProperties")) {
        result = self.__getInternalProperties(closure_16);
      } else {
        result = closure_8(null);
      }
      tmp = result;
    }
    if (tmp) {
      if (tmp["[[initializedDateTimeFormat]]"]) {
        if (undefined === tmp["[[boundFormat]]"]) {
          tmp["[[boundFormat]]"] = obj2.call(function () {
            let timestamp;
            const _Number = Number;
            if (0 === arguments.length) {
              const _Date = Date;
              timestamp = Date.now();
            } else {
              timestamp = arguments[0];
            }
            return FormatDateTime(this, _Number(timestamp));
          }, self);
        }
        return tmp["[[boundFormat]]"];
      }
    }
    const typeError = new TypeError("`this` value for format() is not an initialized Intl.DateTimeFormat object.");
    throw typeError;
  }
}
function FormatDateTime(__getInternalProperties, arg1) {
  let tmp23;
  function ToLocalTime(arg0, arg1, __timeZone__) {
    let str = __timeZone__;
    const date = new Date(arg0);
    if (!__timeZone__) {
      str = "";
    }
    obj = {
      "[[weekday]]": date[`get${str}` + "Day"](),
      "[[era]]": +date[`get${str}` + "FullYear"]() >= 0,
      "[[year]]": date[`get${str}` + "FullYear"](),
      "[[month]]": date[`get${str}` + "Month"](),
      "[[day]]": date[`get${str}` + "Date"](),
      "[[hour]]": date[`get${str}` + "Hours"](),
      "[[minute]]": date[`get${str}` + "Minutes"](),
      "[[second]]": date[`get${str}` + "Seconds"](),
      "[[inDST]]": false,
    };
    obj2 = Object.create(Record.prototype);
    for (const key10051 in obj) {
      let callResult = obj instanceof Record || hasOwnProperty.call(obj, key10051);
      if (!callResult) {
        continue;
      } else {
        let obj4 = { value: obj[key10051], enumerable: true, writable: true, configurable: true };
        let tmp5 = fn(obj2, key10051, obj4);
        continue;
      }
      continue;
    }
    return obj2;
  }
  if (isFinite(arg1)) {
    let tmp25;
    const result = __getInternalProperties.__getInternalProperties(closure_16);
    const tmp8 = createRegExpRestore();
    const prop = result["[[locale]]"];
    const items = [prop];
    const self3 = this;
    const self4 = this;
    const numberFormat = new obj.NumberFormat(items, { useGrouping: false });
    const items1 = [prop];
    const self5 = this;
    const self6 = this;
    const numberFormat1 = new obj.NumberFormat(items1, { minimumIntegerDigits: 2, useGrouping: false });
    const prop1 = result["[[calendar]]"];
    const tmp18 = ToLocalTime(arg1, 0, result["[[timeZone]]"]);
    const prop2 = result["[[pattern]]"];
    const calendars = closure_15.DateTimeFormat["[[localeData]]"][result["[[dataLocale]]"]].calendars;
    const prop3 = result["[[calendar]]"];
    let replaced = prop2;
    let str17 = prop2;
    const keys = Object.keys();
    if (keys !== undefined) {
      str17 = replaced;
      const str18 = replaced;
      tmp25 = tmp23;
      while (keys[tmp] !== undefined) {
        if (!hasOwnProperty.call(result, "[[" + tmp28 + "]]")) {
          continue;
        } else {
          let diff;
          let tmp33;
          let tmp29 = result["[[" + tmp28 + "]]"];
          let tmp30 = tmp18["[[" + tmp28 + "]]"];
          if ("year" === tmp28) {
            if (tmp30 <= 0) {
              let str;
              diff = 1 - tmp30;
              tmp33 = tmp27;
              if ("numeric" === tmp29) {
                str = FormatNumber(numberFormat, diff);
              } else if ("2-digit" === tmp29) {
                let arr3 = FormatNumber(numberFormat1, diff);
                str = arr3;
                if (arr3.length > 2) {
                  str = str.slice(-2);
                }
              } else if (tmp29 in closure_17) {
                if ("month" === tmp28) {
                  let str21 = "months";
                  str = resolveDateString(calendars, prop3, "months", tmp29, tmp18["[[" + tmp28 + "]]"]);
                } else if ("weekday" === tmp28) {
                  try {
                    let str19 = "days";
                    str = resolveDateString(calendars, prop3, "days", tmp29, tmp18["[[" + tmp28 + "]]"]);
                  } catch (err) {
                    let _Error = Error;
                    let str20 = "Could not find weekday data for locale ";
                    let self7 = this;
                    let self8 = this;
                    let error = new Error("Could not find weekday data for locale " + prop);
                    throw error;
                  }
                } else if ("timeZoneName" === tmp28) {
                  str = "";
                } else {
                  str = tmp18["[[" + tmp28 + "]]"];
                }
              }
              replaced = str18.replace(`{${tmp28}}`, str);
              tmp23 = tmp33;
              continue;
            }
          }
          if ("month" === tmp28) {
            diff = tmp30 + 1;
            tmp33 = tmp27;
          } else {
            let tmp31 = "hour" === tmp28 && true === result["[[hour12]]"];
            diff = tmp30;
            tmp33 = tmp27;
            if (tmp31) {
              let result1 = tmp30 % 12;
              let tmp36 = 0 === result1;
              let tmp35 = tmp18["[[" + tmp28 + "]]"];
              if (0 === result1) {
                tmp36 = true === result["[[hourNo0]]"];
              }
              let num6 = result1;
              if (tmp36) {
                num6 = 12;
              }
              tmp33 = result1 !== tmp35;
              diff = num6;
            }
          }
        }
        continue;
      }
    }
    let replaced1 = str17;
    if (true === result["[[hour12]]"]) {
      let str22 = "am";
      if (tmp25) {
        str22 = "pm";
      }
      const tmp52Result = resolveDateString(calendars, prop3, "dayPeriods", str22);
      replaced1 = str17.replace("{ampm}", tmp52Result);
    }
    const exp = tmp8.exp;
    const isMatch = exp.test(tmp8.input);
    return replaced1;
  } else {
    const _RangeError = RangeError;
    const self = this;
    const self2 = this;
    const rangeError = new RangeError("Invalid valid date passed to format");
    throw rangeError;
  }
}
function resolveDateString(calendars, prop3, days, pm, arg4) {
  if (calendars[prop3]) {
    let tmp;
    let tmp4;
    if (calendars[prop3][days]) {
      tmp = calendars[prop3][days];
    }
    obj = { narrow: ["short", "long"], short: ["long", "narrow"], long: ["short", "narrow"] };
    if (hasOwnProperty.call(tmp, pm)) {
      tmp4 = tmp[pm];
    } else if (hasOwnProperty.call(tmp, obj[pm][0])) {
      tmp4 = tmp[tmp3[0]];
    } else {
      tmp4 = tmp[tmp3[1]];
    }
    let tmp7 = tmp4;
    if (null != arg4) {
      tmp7 = tmp4[arg4];
    }
    return tmp7;
  }
  tmp = calendars.gregory[days];
}
class Record {
  constructor(obj) {
    for (const key10005 in obj) {
      let callResult = obj instanceof Record || hasOwnProperty.call(obj, key10005);
      if (!callResult) {
        continue;
      } else {
        obj = { value: obj[key10005], enumerable: true, writable: true, configurable: true };
        let tmp4 = fn(tmp, key10005, obj);
        continue;
      }
      continue;
    }
  }
}
class List {
  constructor() {
    fn(this, "length", { writable: true, value: 0 });
    if (arguments.length) {
      push.apply(this, slice.call(arguments));
    }
  }
}
function createRegExpRestore() {
  let regExp;
  let tmp4;
  str2 = "";
  const str = RegExp.lastMatch || "";
  if (RegExp.multiline) {
    str2 = "m";
  }
  obj = { input: RegExp.input, exp: regExp };
  obj2 = Object.create(List.prototype);
  List();
  const obj4 = {};
  let num = 1;
  let flag = false;
  do {
    let text = `$${num}`;
    let _RegExp = RegExp;
    tmp4 = RegExp[`$${num}`];
    obj4[`$${num}`] = tmp4;
    if (!tmp4) {
      tmp4 = flag;
    }
    num = num + 1;
    flag = tmp4;
  } while (num <= 9);
  const tmp7 = /[.?*+^$[\]\\(){}|-]/g;
  let str3 = str.replace(tmp7, "\\$&");
  let num2 = 1;
  let tmp8 = str3;
  if (tmp4) {
    do {
      let replaced1;
      let str4 = obj4["$" + num2];
      if (str4) {
        let replaced = str4.replace(tmp7, "\\$&");
        replaced1 = str3.replace(replaced, `(${tmp11})`);
      } else {
        replaced1 = `()${str3}`;
      }
      let callResult = push.call(obj2, replaced1.slice(0, replaced1.indexOf("(") + 1));
      str3 = replaced1.slice(replaced1.indexOf("(") + 1);
      num2 = num2 + 1;
      tmp8 = str3;
    } while (num2 <= 9);
  }
  regExp = new RegExp(join.call(obj2, "") + tmp8, str2);
  return obj;
}
let obj = { __localeSensitiveProtos: obj12 };
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
if (tmp2) {
  let tmp3 = globalThis;
  let _Object = Object;
  tmp2 = !Object.prototype.__defineGetter__;
}
let closure_4 = tmp2;
if (tmp) {
  const _Object2 = Object;
  fn = Object.defineProperty;
} else {
  fn = (prototype, format, get) => {
    if ("get" in get) {
      if (prototype.__defineGetter__) {
        prototype.__defineGetter__(format, get.get);
      }
    }
    const callResult = hasOwnProperty.call(prototype, format) && !("value" in get);
    if (!callResult) {
      prototype[format] = get.value;
    }
  };
}
let closure_7 =
  Array.prototype.indexOf ||
  function (arg0) {
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
  };
let tmp4 =
  Object.create ||
  ((arg0, obj) => {
    class F {
      constructor() {
        return;
      }
    }
    F.prototype = arg0;
    obj = Object.create(F.prototype);
    for (const key10008 in obj) {
      if (!hasOwnProperty.call(obj, key10008)) {
        continue;
      } else {
        let tmp3 = fn(obj, key10008, obj[key10008]);
        class F {
          constructor() {
            return;
          }
        }
      }
      class F {
        constructor() {
          return;
        }
      }
    }
    return obj;
  });
let closure_8 = tmp4;
let obj2 =
  Function.prototype.bind ||
  function (arg0) {
    let closure_0 = arg0;
    const self = this;
    let closure_2 = slice.call(arguments, 1);
    return 1 === this.length
      ? function (arg0) {
          return self.apply(closure_0, concat.call(closure_2, slice.call(arguments)));
        }
      : function () {
          return self.apply(closure_0, concat.call(closure_2, slice.call(arguments)));
        };
  };
function supportedLocalesOf(arg0) {
  const self = this;
  if (hasOwnProperty.call(self, "[[availableLocales]]")) {
    const tmp6 = createRegExpRestore();
    const tmp7 = arguments[1];
    const prop = self["[[availableLocales]]"];
    const tmp10 = CanonicalizeLocaleList(arg0);
    const exp = tmp6.exp;
    const isMatch = exp.test(tmp6.input);
    let tmp12;
    if (undefined !== tmp7) {
      if (null == tmp7) {
        const _TypeError2 = TypeError;
        const self6 = this;
        const self7 = this;
        const typeError = new TypeError("Cannot convert null or undefined to object");
        throw typeError;
      } else {
        const _Object = Object;
        const ObjectResult = Object(tmp7);
        obj2 = Object.create(tmp32.prototype);
        for (const key10028 in ObjectResult) {
          let callResult = ObjectResult instanceof Record || hasOwnProperty.call(ObjectResult, key10028);
          if (!callResult) {
            continue;
          } else {
            obj = { value: ObjectResult[key10028], enumerable: true, writable: true, configurable: true };
            let tmp15 = fn(obj2, key10028, obj);
            continue;
          }
          continue;
        }
        const localeMatcher = obj2.localeMatcher;
        tmp12 = localeMatcher;
        if (undefined !== localeMatcher) {
          const _String = String;
          const StringResult = String(localeMatcher);
          tmp12 = StringResult;
          if ("lookup" !== StringResult) {
            tmp12 = StringResult;
            if ("best fit" !== StringResult) {
              const _RangeError = RangeError;
              const self4 = this;
              const self5 = this;
              const rangeError = new RangeError('matcher should be "lookup" or "best fit"');
              throw rangeError;
            }
          }
        }
      }
    }
    if (undefined !== tmp12) {
      let tmp18;
      if ("best fit" !== tmp12) {
        tmp18 = LookupSupportedLocales(prop, tmp10);
      }
      const keys = Object.keys();
      if (keys !== undefined) {
        while (keys[1] !== undefined) {
          if (!hasOwnProperty.call(tmp18, tmp22)) {
            continue;
          } else {
            let obj4 = { writable: false, configurable: false, value: tmp18[tmp22] };
            let tmp24 = fn(tmp18, tmp22, obj4);
            continue;
          }
          continue;
        }
      }
      fn(tmp18, "length", { writable: false });
      return tmp18;
    }
    tmp18 = LookupSupportedLocales(prop, tmp10);
  } else {
    const _TypeError = TypeError;
    const self2 = this;
    const self3 = this;
    const typeError1 = new TypeError("supportedLocalesOf() is not a constructor");
    throw typeError1;
  }
}
const tmp4Result = tmp4(null);
let closure_15 = tmp4Result;
let closure_16 = Math.random();
let closure_17 = tmp4(null, { narrow: {}, short: {}, long: {} });
let c18 = false;
let c19 = false;
const re20 = /^[A-Z]{3}$/;
const re21 = /-u(?:-[0-9a-z]{2,8})+/gi;
let obj3 = {
  tags: {
    "art-lojban": "jbo",
    "i-ami": "ami",
    "i-bnn": "bnn",
    "i-hak": "hak",
    "i-klingon": "tlh",
    "i-lux": "lb",
    "i-navajo": "nv",
    "i-pwn": "pwn",
    "i-tao": "tao",
    "i-tay": "tay",
    "i-tsu": "tsu",
    "no-bok": "nb",
    "no-nyn": "nn",
    "sgn-BE-FR": "sfb",
    "sgn-BE-NL": "vgt",
    "sgn-CH-DE": "sgg",
    "zh-guoyu": "cmn",
    "zh-hakka": "hak",
    "zh-min-nan": "nan",
    "zh-xiang": "hsn",
    "sgn-BR": "bzs",
    "sgn-CO": "csn",
    "sgn-DE": "gsg",
    "sgn-DK": "dsl",
    "sgn-ES": "ssp",
    "sgn-FR": "fsl",
    "sgn-GB": "bfi",
    "sgn-GR": "gss",
    "sgn-IE": "isg",
    "sgn-IT": "ise",
    "sgn-JP": "jsl",
    "sgn-MX": "mfs",
    "sgn-NI": "ncs",
    "sgn-NL": "dse",
    "sgn-NO": "nsl",
    "sgn-PT": "psr",
    "sgn-SE": "swl",
    "sgn-US": "ase",
    "sgn-ZA": "sfs",
    "zh-cmn": "cmn",
    "zh-cmn-Hans": "cmn-Hans",
    "zh-cmn-Hant": "cmn-Hant",
    "zh-gan": "gan",
    "zh-wuu": "wuu",
    "zh-yue": "yue",
  },
  subtags: {
    BU: "MM",
    DD: "DE",
    FX: "FR",
    TP: "TL",
    YD: "YE",
    ZR: "CD",
    heploc: "alalc97",
    in: "id",
    iw: "he",
    ji: "yi",
    jw: "jv",
    mo: "ro",
    ayx: "nun",
    bjd: "drl",
    ccq: "rki",
    cjr: "mom",
    cka: "cmr",
    cmk: "xch",
    drh: "khk",
    drw: "prs",
    gav: "dev",
    hrr: "jal",
    ibi: "opa",
    kgh: "kml",
    lcq: "ppr",
    mst: "mry",
    myt: "mry",
    sca: "hle",
    tie: "ras",
    tkk: "twm",
    tlw: "weo",
    tnf: "prs",
    ybd: "rki",
    yma: "lrr",
  },
  extLang: {
    aao: ["aao", "ar"],
    abh: ["abh", "ar"],
    abv: ["abv", "ar"],
    acm: ["acm", "ar"],
    acq: ["acq", "ar"],
    acw: ["acw", "ar"],
    acx: ["acx", "ar"],
    acy: ["acy", "ar"],
    adf: ["adf", "ar"],
    ads: ["ads", "sgn"],
    aeb: ["aeb", "ar"],
    aec: ["aec", "ar"],
    aed: ["aed", "sgn"],
    aen: ["aen", "sgn"],
    afb: ["afb", "ar"],
    afg: ["afg", "sgn"],
    ajp: ["ajp", "ar"],
    apc: ["apc", "ar"],
    apd: ["apd", "ar"],
    arb: ["arb", "ar"],
    arq: ["arq", "ar"],
    ars: ["ars", "ar"],
    ary: ["ary", "ar"],
    arz: ["arz", "ar"],
    ase: ["ase", "sgn"],
    asf: ["asf", "sgn"],
    asp: ["asp", "sgn"],
    asq: ["asq", "sgn"],
    asw: ["asw", "sgn"],
    auz: ["auz", "ar"],
    avl: ["avl", "ar"],
    ayh: ["ayh", "ar"],
    ayl: ["ayl", "ar"],
    ayn: ["ayn", "ar"],
    ayp: ["ayp", "ar"],
    bbz: ["bbz", "ar"],
    bfi: ["bfi", "sgn"],
    bfk: ["bfk", "sgn"],
    bjn: ["bjn", "ms"],
    bog: ["bog", "sgn"],
    bqn: ["bqn", "sgn"],
    bqy: ["bqy", "sgn"],
    btj: ["btj", "ms"],
    bve: ["bve", "ms"],
    bvl: ["bvl", "sgn"],
    bvu: ["bvu", "ms"],
    bzs: ["bzs", "sgn"],
    cdo: ["cdo", "zh"],
    cds: ["cds", "sgn"],
    cjy: ["cjy", "zh"],
    cmn: ["cmn", "zh"],
    coa: ["coa", "ms"],
    cpx: ["cpx", "zh"],
    csc: ["csc", "sgn"],
    csd: ["csd", "sgn"],
    cse: ["cse", "sgn"],
    csf: ["csf", "sgn"],
    csg: ["csg", "sgn"],
    csl: ["csl", "sgn"],
    csn: ["csn", "sgn"],
    csq: ["csq", "sgn"],
    csr: ["csr", "sgn"],
    czh: ["czh", "zh"],
    czo: ["czo", "zh"],
    doq: ["doq", "sgn"],
    dse: ["dse", "sgn"],
    dsl: ["dsl", "sgn"],
    dup: ["dup", "ms"],
    ecs: ["ecs", "sgn"],
    esl: ["esl", "sgn"],
    esn: ["esn", "sgn"],
    eso: ["eso", "sgn"],
    eth: ["eth", "sgn"],
    fcs: ["fcs", "sgn"],
    fse: ["fse", "sgn"],
    fsl: ["fsl", "sgn"],
    fss: ["fss", "sgn"],
    gan: ["gan", "zh"],
    gds: ["gds", "sgn"],
    gom: ["gom", "kok"],
    gse: ["gse", "sgn"],
    gsg: ["gsg", "sgn"],
    gsm: ["gsm", "sgn"],
    gss: ["gss", "sgn"],
    gus: ["gus", "sgn"],
    hab: ["hab", "sgn"],
    haf: ["haf", "sgn"],
    hak: ["hak", "zh"],
    hds: ["hds", "sgn"],
    hji: ["hji", "ms"],
    hks: ["hks", "sgn"],
    hos: ["hos", "sgn"],
    hps: ["hps", "sgn"],
    hsh: ["hsh", "sgn"],
    hsl: ["hsl", "sgn"],
    hsn: ["hsn", "zh"],
    icl: ["icl", "sgn"],
    ils: ["ils", "sgn"],
    inl: ["inl", "sgn"],
    ins: ["ins", "sgn"],
    ise: ["ise", "sgn"],
    isg: ["isg", "sgn"],
    isr: ["isr", "sgn"],
    jak: ["jak", "ms"],
    jax: ["jax", "ms"],
    jcs: ["jcs", "sgn"],
    jhs: ["jhs", "sgn"],
    jls: ["jls", "sgn"],
    jos: ["jos", "sgn"],
    jsl: ["jsl", "sgn"],
    jus: ["jus", "sgn"],
    kgi: ["kgi", "sgn"],
    knn: ["knn", "kok"],
    kvb: ["kvb", "ms"],
    kvk: ["kvk", "sgn"],
    kvr: ["kvr", "ms"],
    kxd: ["kxd", "ms"],
    lbs: ["lbs", "sgn"],
    lce: ["lce", "ms"],
    lcf: ["lcf", "ms"],
    liw: ["liw", "ms"],
    lls: ["lls", "sgn"],
    lsg: ["lsg", "sgn"],
    lsl: ["lsl", "sgn"],
    lso: ["lso", "sgn"],
    lsp: ["lsp", "sgn"],
    lst: ["lst", "sgn"],
    lsy: ["lsy", "sgn"],
    ltg: ["ltg", "lv"],
    lvs: ["lvs", "lv"],
    lzh: ["lzh", "zh"],
    max: ["max", "ms"],
    mdl: ["mdl", "sgn"],
    meo: ["meo", "ms"],
    mfa: ["mfa", "ms"],
    mfb: ["mfb", "ms"],
    mfs: ["mfs", "sgn"],
    min: ["min", "ms"],
    mnp: ["mnp", "zh"],
    mqg: ["mqg", "ms"],
    mre: ["mre", "sgn"],
    msd: ["msd", "sgn"],
    msi: ["msi", "ms"],
    msr: ["msr", "sgn"],
    mui: ["mui", "ms"],
    mzc: ["mzc", "sgn"],
    mzg: ["mzg", "sgn"],
    mzy: ["mzy", "sgn"],
    nan: ["nan", "zh"],
    nbs: ["nbs", "sgn"],
    ncs: ["ncs", "sgn"],
    nsi: ["nsi", "sgn"],
    nsl: ["nsl", "sgn"],
    nsp: ["nsp", "sgn"],
    nsr: ["nsr", "sgn"],
    nzs: ["nzs", "sgn"],
    okl: ["okl", "sgn"],
    orn: ["orn", "ms"],
    ors: ["ors", "ms"],
    pel: ["pel", "ms"],
    pga: ["pga", "ar"],
    pks: ["pks", "sgn"],
    prl: ["prl", "sgn"],
    prz: ["prz", "sgn"],
    psc: ["psc", "sgn"],
    psd: ["psd", "sgn"],
    pse: ["pse", "ms"],
    psg: ["psg", "sgn"],
    psl: ["psl", "sgn"],
    pso: ["pso", "sgn"],
    psp: ["psp", "sgn"],
    psr: ["psr", "sgn"],
    pys: ["pys", "sgn"],
    rms: ["rms", "sgn"],
    rsi: ["rsi", "sgn"],
    rsl: ["rsl", "sgn"],
    sdl: ["sdl", "sgn"],
    sfb: ["sfb", "sgn"],
    sfs: ["sfs", "sgn"],
    sgg: ["sgg", "sgn"],
    sgx: ["sgx", "sgn"],
    shu: ["shu", "ar"],
    slf: ["slf", "sgn"],
    sls: ["sls", "sgn"],
    sqk: ["sqk", "sgn"],
    sqs: ["sqs", "sgn"],
    ssh: ["ssh", "ar"],
    ssp: ["ssp", "sgn"],
    ssr: ["ssr", "sgn"],
    svk: ["svk", "sgn"],
    swc: ["swc", "sw"],
    swh: ["swh", "sw"],
    swl: ["swl", "sgn"],
    syy: ["syy", "sgn"],
    tmw: ["tmw", "ms"],
    tse: ["tse", "sgn"],
    tsm: ["tsm", "sgn"],
    tsq: ["tsq", "sgn"],
    tss: ["tss", "sgn"],
    tsy: ["tsy", "sgn"],
    tza: ["tza", "sgn"],
    ugn: ["ugn", "sgn"],
    ugy: ["ugy", "sgn"],
    ukl: ["ukl", "sgn"],
    uks: ["uks", "sgn"],
    urk: ["urk", "ms"],
    uzn: ["uzn", "uz"],
    uzs: ["uzs", "uz"],
    vgt: ["vgt", "sgn"],
    vkk: ["vkk", "ms"],
    vkt: ["vkt", "ms"],
    vsi: ["vsi", "sgn"],
    vsl: ["vsl", "sgn"],
    vsv: ["vsv", "sgn"],
    wuu: ["wuu", "zh"],
    xki: ["xki", "sgn"],
    xml: ["xml", "sgn"],
    xmm: ["xmm", "ms"],
    xms: ["xms", "sgn"],
    yds: ["yds", "sgn"],
    ysl: ["ysl", "sgn"],
    yue: ["yue", "zh"],
    zib: ["zib", "sgn"],
    zlm: ["zlm", "ms"],
    zmi: ["zmi", "ms"],
    zsl: ["zsl", "sgn"],
    zsm: ["zsm", "ms"],
  },
};
let closure_23 = {
  BHD: 3,
  BYR: 0,
  XOF: 0,
  BIF: 0,
  XAF: 0,
  CLF: 4,
  CLP: 0,
  KMF: 0,
  DJF: 0,
  XPF: 0,
  GNF: 0,
  ISK: 0,
  IQD: 3,
  JPY: 0,
  JOD: 3,
  KRW: 0,
  KWD: 3,
  LYD: 3,
  OMR: 3,
  PYG: 0,
  RWF: 0,
  TND: 3,
  UGX: 0,
  UYI: 0,
  VUV: 0,
  VND: 0,
};
let obj4 = { configurable: true, writable: true, value: NumberFormatConstructor };
fn(obj, "NumberFormat", obj4);
fn(obj.NumberFormat, "prototype", { writable: false });
tmp4Result.NumberFormat = { "[[availableLocales]]": [], "[[relevantExtensionKeys]]": ["nu"], "[[localeData]]": {} };
const NumberFormat = obj.NumberFormat;
let obj5 = { configurable: true, writable: true, value: obj2.call(supportedLocalesOf, tmp4Result.NumberFormat) };
fn(NumberFormat, "supportedLocalesOf", obj5);
const obj6 = { configurable: true, get: GetFormatNumber };
fn(obj.NumberFormat.prototype, "format", obj6);
let closure_32 = {
  arab: ["\u0660", "\u0661", "\u0662", "\u0663", "\u0664", "\u0665", "\u0666", "\u0667", "\u0668", "\u0669"],
  arabext: ["\u06F0", "\u06F1", "\u06F2", "\u06F3", "\u06F4", "\u06F5", "\u06F6", "\u06F7", "\u06F8", "\u06F9"],
  bali: ["\u1B50", "\u1B51", "\u1B52", "\u1B53", "\u1B54", "\u1B55", "\u1B56", "\u1B57", "\u1B58", "\u1B59"],
  beng: ["\u09E6", "\u09E7", "\u09E8", "\u09E9", "\u09EA", "\u09EB", "\u09EC", "\u09ED", "\u09EE", "\u09EF"],
  deva: ["\u0966", "\u0967", "\u0968", "\u0969", "\u096A", "\u096B", "\u096C", "\u096D", "\u096E", "\u096F"],
  fullwide: ["\uFF10", "\uFF11", "\uFF12", "\uFF13", "\uFF14", "\uFF15", "\uFF16", "\uFF17", "\uFF18", "\uFF19"],
  gujr: ["\u0AE6", "\u0AE7", "\u0AE8", "\u0AE9", "\u0AEA", "\u0AEB", "\u0AEC", "\u0AED", "\u0AEE", "\u0AEF"],
  guru: ["\u0A66", "\u0A67", "\u0A68", "\u0A69", "\u0A6A", "\u0A6B", "\u0A6C", "\u0A6D", "\u0A6E", "\u0A6F"],
  hanidec: ["\u3007", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D", "\u4E03", "\u516B", "\u4E5D"],
  khmr: ["\u17E0", "\u17E1", "\u17E2", "\u17E3", "\u17E4", "\u17E5", "\u17E6", "\u17E7", "\u17E8", "\u17E9"],
  knda: ["\u0CE6", "\u0CE7", "\u0CE8", "\u0CE9", "\u0CEA", "\u0CEB", "\u0CEC", "\u0CED", "\u0CEE", "\u0CEF"],
  laoo: ["\u0ED0", "\u0ED1", "\u0ED2", "\u0ED3", "\u0ED4", "\u0ED5", "\u0ED6", "\u0ED7", "\u0ED8", "\u0ED9"],
  latn: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  limb: ["\u1946", "\u1947", "\u1948", "\u1949", "\u194A", "\u194B", "\u194C", "\u194D", "\u194E", "\u194F"],
  mlym: ["\u0D66", "\u0D67", "\u0D68", "\u0D69", "\u0D6A", "\u0D6B", "\u0D6C", "\u0D6D", "\u0D6E", "\u0D6F"],
  mong: ["\u1810", "\u1811", "\u1812", "\u1813", "\u1814", "\u1815", "\u1816", "\u1817", "\u1818", "\u1819"],
  mymr: ["\u1040", "\u1041", "\u1042", "\u1043", "\u1044", "\u1045", "\u1046", "\u1047", "\u1048", "\u1049"],
  orya: ["\u0B66", "\u0B67", "\u0B68", "\u0B69", "\u0B6A", "\u0B6B", "\u0B6C", "\u0B6D", "\u0B6E", "\u0B6F"],
  tamldec: ["\u0BE6", "\u0BE7", "\u0BE8", "\u0BE9", "\u0BEA", "\u0BEB", "\u0BEC", "\u0BED", "\u0BEE", "\u0BEF"],
  telu: ["\u0C66", "\u0C67", "\u0C68", "\u0C69", "\u0C6A", "\u0C6B", "\u0C6C", "\u0C6D", "\u0C6E", "\u0C6F"],
  thai: ["\u0E50", "\u0E51", "\u0E52", "\u0E53", "\u0E54", "\u0E55", "\u0E56", "\u0E57", "\u0E58", "\u0E59"],
  tibt: ["\u0F20", "\u0F21", "\u0F22", "\u0F23", "\u0F24", "\u0F25", "\u0F26", "\u0F27", "\u0F28", "\u0F29"],
};
const obj7 = {
  configurable: true,
  writable: true,
  value() {
    obj2 = Object.create(Record.prototype);
    for (const key10006 in undefined) {
      let callResult = undefined instanceof Record || hasOwnProperty.call(undefined, key10006);
      if (!callResult) {
        continue;
      } else {
        obj = { value: undefined[key10006], enumerable: true, writable: true, configurable: true };
        let tmp4 = fn(obj2, key10006, obj);
        continue;
      }
      continue;
    }
    const self = this;
    let tmp5 = null != this && typeof self === "object";
    if (tmp5) {
      let result;
      if (hasOwnProperty.call(self, "__getInternalProperties")) {
        result = self.__getInternalProperties(closure_16);
      } else {
        result = closure_8(null);
      }
      tmp5 = result;
    }
    if (tmp5) {
      if (tmp5["[[initializedNumberFormat]]"]) {
        let num;
        const items = [
          "locale",
          "numberingSystem",
          "style",
          "currency",
          "currencyDisplay",
          "minimumIntegerDigits",
          "minimumFractionDigits",
          "maximumFractionDigits",
          "minimumSignificantDigits",
          "maximumSignificantDigits",
          "useGrouping",
        ];
        for (let num = 0; num < items.length; num = num + 1) {
          let text = `${"[[" + arr[num]}]]`;
          if (hasOwnProperty.call(tmp5, `${"[[" + arr[num]}]]`)) {
            let obj4 = { value: tmp5[`${"[[" + arr[num]}]]`], writable: true, configurable: true, enumerable: true };
            obj2[items[num]] = obj4;
          }
        }
        return closure_8({}, obj2);
      }
    }
    const typeError = new TypeError(
      "`this` value for resolvedOptions() is not an initialized Intl.NumberFormat object.",
    );
    throw typeError;
  },
};
fn(obj.NumberFormat.prototype, "resolvedOptions", obj7);
const obj8 = { configurable: true, writable: true, value: DateTimeFormatConstructor };
fn(obj, "DateTimeFormat", obj8);
fn(DateTimeFormatConstructor, "prototype", { writable: false });
let closure_35 = {
  weekday: ["narrow", "short", "long"],
  era: ["narrow", "short", "long"],
  year: ["2-digit", "numeric"],
  month: ["2-digit", "numeric", "narrow", "short", "long"],
  day: ["2-digit", "numeric"],
  hour: ["2-digit", "numeric"],
  minute: ["2-digit", "numeric"],
  second: ["2-digit", "numeric"],
  timeZoneName: ["short", "long"],
};
tmp4Result.DateTimeFormat = {
  "[[availableLocales]]": [],
  "[[relevantExtensionKeys]]": ["ca", "nu"],
  "[[localeData]]": {},
};
let DateTimeFormat = obj.DateTimeFormat;
let obj9 = { configurable: true, writable: true, value: obj2.call(supportedLocalesOf, tmp4Result.DateTimeFormat) };
fn(DateTimeFormat, "supportedLocalesOf", obj9);
let obj10 = { configurable: true, get: GetFormatDateTime };
fn(obj.DateTimeFormat.prototype, "format", obj10);
let obj11 = {
  writable: true,
  configurable: true,
  value() {
    obj2 = Object.create(Record.prototype);
    for (const key10006 in undefined) {
      let callResult = undefined instanceof Record || hasOwnProperty.call(undefined, key10006);
      if (!callResult) {
        continue;
      } else {
        obj = { value: undefined[key10006], enumerable: true, writable: true, configurable: true };
        let tmp4 = fn(obj2, key10006, obj);
        continue;
      }
      continue;
    }
    const self = this;
    let tmp5 = null != this && typeof self === "object";
    if (tmp5) {
      let result;
      if (hasOwnProperty.call(self, "__getInternalProperties")) {
        result = self.__getInternalProperties(closure_16);
      } else {
        result = closure_8(null);
      }
      tmp5 = result;
    }
    if (tmp5) {
      if (tmp5["[[initializedDateTimeFormat]]"]) {
        let num;
        const items = [
          "locale",
          "calendar",
          "numberingSystem",
          "timeZone",
          "hour12",
          "weekday",
          "era",
          "year",
          "month",
          "day",
          "hour",
          "minute",
          "second",
          "timeZoneName",
        ];
        for (let num = 0; num < items.length; num = num + 1) {
          let text = `${"[[" + arr[num]}]]`;
          if (hasOwnProperty.call(tmp5, `${"[[" + arr[num]}]]`)) {
            let obj4 = { value: tmp5[`${"[[" + arr[num]}]]`], writable: true, configurable: true, enumerable: true };
            obj2[items[num]] = obj4;
          }
        }
        return closure_8({}, obj2);
      }
    }
    const typeError = new TypeError(
      "`this` value for resolvedOptions() is not an initialized Intl.DateTimeFormat object.",
    );
    throw typeError;
  },
};
fn(obj.DateTimeFormat.prototype, "resolvedOptions", obj11);
obj12 = { Number: {}, Date: {} };
obj12.Number.toLocaleString = function () {
  let tmp3;
  let tmp4;
  const self = this;
  if ("[object Number]" !== toString.call(self)) {
    const _TypeError = TypeError;
    const self2 = this;
    const self3 = this;
    const typeError = new TypeError("`this` value must be a number for Number.prototype.toLocaleString()");
    throw typeError;
  } else {
    [tmp3, tmp4] = arguments;
    const tmp5 = NumberFormatConstructor(tmp3, tmp4);
    return FormatNumber(tmp5, self);
  }
};
obj12.Date.toLocaleString = function () {
  const self = this;
  if ("[object Date]" !== toString.call(self)) {
    const _TypeError = TypeError;
    const self2 = this;
    const self3 = this;
    const typeError = new TypeError("`this` value must be a Date instance for Date.prototype.toLocaleString()");
    throw typeError;
  } else {
    const _isNaN = isNaN;
    let str = "Invalid Date";
    if (!isNaN(+self)) {
      const first = arguments[0];
      const tmp6 = ToDateTimeOptions(arguments[1], "any", "all");
      const tmp7 = DateTimeFormatConstructor(first, tmp6);
      str = FormatDateTime(tmp7, tmp);
    }
    return str;
  }
};
obj12.Date.toLocaleDateString = function () {
  const self = this;
  if ("[object Date]" !== toString.call(self)) {
    const _TypeError = TypeError;
    const self2 = this;
    const self3 = this;
    const typeError = new TypeError("`this` value must be a Date instance for Date.prototype.toLocaleDateString()");
    throw typeError;
  } else {
    const _isNaN = isNaN;
    let str = "Invalid Date";
    if (!isNaN(+self)) {
      const first = arguments[0];
      const tmp6 = ToDateTimeOptions(arguments[1], "date", "date");
      const tmp7 = DateTimeFormatConstructor(first, tmp6);
      str = FormatDateTime(tmp7, tmp);
    }
    return str;
  }
};
obj12.Date.toLocaleTimeString = function () {
  const self = this;
  if ("[object Date]" !== toString.call(self)) {
    const _TypeError = TypeError;
    const self2 = this;
    const self3 = this;
    const typeError = new TypeError("`this` value must be a Date instance for Date.prototype.toLocaleTimeString()");
    throw typeError;
  } else {
    const _isNaN = isNaN;
    let str = "Invalid Date";
    if (!isNaN(+self)) {
      const first = arguments[0];
      const tmp6 = ToDateTimeOptions(arguments[1], "time", "time");
      const tmp7 = DateTimeFormatConstructor(first, tmp6);
      str = FormatDateTime(tmp7, tmp);
    }
    return str;
  }
};
let obj13 = {
  writable: true,
  configurable: true,
  value() {
    obj = { writable: true, configurable: true, value: obj12.Number.toLocaleString };
    fn(Number.prototype, "toLocaleString", obj);
    obj2 = { writable: true, configurable: true, value: obj12.Date.toLocaleString };
    fn(Date.prototype, "toLocaleString", obj2);
    for (const key10019 in obj12.Date) {
      if (!hasOwnProperty.call(obj12.Date, key10019)) {
        continue;
      } else {
        let _Date = Date;
        obj3 = { writable: true, configurable: true, value: obj12.Date[key10019] };
        let tmp4 = fn(Date.prototype, key10019, obj3);
        continue;
      }
      continue;
    }
  },
};
fn(obj, "__applyLocaleSensitivePrototypes", obj13);
let obj14 = {
  value(locale) {
    locale = locale.locale;
    const expBCP47Syntax = expBCP47Syntax2.expBCP47Syntax;
    let isMatch1 = expBCP47Syntax.test(locale);
    if (isMatch1) {
      const expVariantDupes = expBCP47Syntax2.expVariantDupes;
      const isMatch = expVariantDupes.test(locale);
      let tmp5 = !isMatch;
      if (tmp5) {
        const expSingletonDupes = expBCP47Syntax2.expSingletonDupes;
        tmp5 = !expSingletonDupes.test(locale);
      }
      isMatch1 = tmp5;
    }
    if (isMatch1) {
      if (locale.number) {
        const items = [locale.locale];
        const parts = str2.split("-");
        const tmp12 = parts.length > 2 && 4 === parts[1].length;
        if (tmp12) {
          push.call(items, `${arr2[0]}-${arr2[2]}`);
        }
        let callResult1 = shift.call(items);
        while (callResult1) {
          let callResult2 = push.call(closure_15.NumberFormat["[[availableLocales]]"], callResult1);
          closure_15.NumberFormat["[[localeData]]"][callResult1] = locale.number;
          if (locale.date) {
            locale.date.nu = locale.number.nu;
            let callResult3 = push.call(closure_15.DateTimeFormat["[[availableLocales]]"], callResult1);
            closure_15.DateTimeFormat["[[localeData]]"][callResult1] = locale.date;
          }
          let callResult4 = shift.call(items);
          callResult1 = callResult4;
        }
        const tmp18 = c18;
        if (!tmp18) {
          InitializeNumberFormat(push.NumberFormat.prototype);
          c18 = true;
        }
        const date = locale.date && !c19;
        if (date) {
          InitializeDateTimeFormat(push.DateTimeFormat.prototype);
          c19 = true;
        }
      } else {
        const _Error2 = Error;
        const self3 = this;
        const self4 = this;
        const error = new Error("Object passed doesn't contain locale data for Intl.NumberFormat");
        throw error;
      }
    } else {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error1 = new Error("Object passed doesn't identify itself with a valid language tag");
      throw error1;
    }
  },
};
fn(obj, "__addLocaleData", obj14);
Record.prototype = tmp4(null);
List.prototype = tmp4(null);

export default obj;
