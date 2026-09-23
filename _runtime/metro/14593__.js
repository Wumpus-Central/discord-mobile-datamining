// === Module 14593: ? ===

// Module 14593
import digitsToString2 from "digitsToString" /* 14571 */;
import GetUnsignedRoundingMode from "GetUnsignedRoundingMode" /* 14589 */;
import ToRawFixed from "ToRawFixed" /* 14591 */;
import S_UNICODE_REGEX from "S_UNICODE_REGEX" /* 14594 */;
import e from "e" /* 1161 */;

const digitsToString = e.__importDefault(digitsToString2);
const regExp = new RegExp("^".concat(S_UNICODE_REGEX.S_UNICODE_REGEX.source));
const regExp1 = new RegExp("".concat(S_UNICODE_REGEX.S_UNICODE_REGEX.source, "$"));
const re5 = /[#0](?:[\.,][#0]+)*/g;

export default function formatToParts(magnitude, numbers, arg2, currencyDisplay) {
  ({ sign, exponent } = magnitude);
  ({ notation, style, numberingSystem } = currencyDisplay);
  const first = numbers.numbers.nu[0];
  let tmp3 = null;
  if (tmp2) {
    ({ roundedNumber, sign: sign2 } = magnitude);
    const _String = String;
    const _Math = Math;
    ({ compactDisplay, currencyDisplay } = currencyDisplay);
    const StringResult = String(Math.pow(10, magnitude.magnitude));
    const first1 = numbers.numbers.nu[0];
    if ("currency" === style) {
      if ("name" !== currencyDisplay) {
        const currency = numbers.numbers.currency;
        const short = currency[numberingSystem] || currency[first1].short;
        let tmp11;
        if (null !== short) {
          if (undefined !== short) {
            tmp11 = short[StringResult];
          }
        }
        let tmp9 = null;
        if (tmp11) {
          let arr = tmp11[arg2.select(arg2, roundedNumber.toNumber(roundedNumber))] || tmp11.other;
          tmp9 = null;
          if ("0" !== arr) {
            let str6 = arr;
            if (arr.indexOf(";") < 0) {
              const concat = "".concat;
              const combined = "".concat(arr, ";-");
              str6 = combined.concat(arr);
            }
            const parts = str6.split(";");
            [tmp14, arr2] = parts;
            if (0 === sign2) {
              let str7 = tmp14;
            } else {
              str7 = arr2;
              if (-1 !== sign2) {
                if (arr2.indexOf("-") >= 0) {
                  let replaced = arr2.replace(/-/g, "+");
                } else {
                  const concat2 = "+".concat;
                  replaced = "+".concat(tmp14);
                }
                str7 = replaced;
              }
            }
            tmp14 = /0+/;
            const replaced1 = str7.replace(/([^\s;\-\+\d¤]+)/g, "{c:$1}").replace(tmp14, "0");
            const str12 = str7.replace(/([^\s;\-\+\d¤]+)/g, "{c:$1}");
          }
          const tmp12 = tmp11[arg2.select(arg2, roundedNumber.toNumber(roundedNumber))] || tmp11.other;
        }
        const tmp10 = currency[numberingSystem] || currency[first1];
      }
      tmp3 = tmp9;
    }
    const decimal = numbers.numbers.decimal;
    tmp9 = null;
    if (decimal[numberingSystem] || decimal[first1][compactDisplay][StringResult]) {
      arr = tmp8[arg2.select(arg2, roundedNumber.toNumber(roundedNumber))] || tmp8.other;
    }
    const tmp7 = decimal[numberingSystem] || decimal[first1];
  }
  if ("currency" === style) {
    if ("name" !== currencyDisplay.currencyDisplay) {
      if (numbers.currencies[currencyDisplay.currency]) {
        const currencyDisplay2 = currencyDisplay.currencyDisplay;
        if ("code" === currencyDisplay2) {
          let currency2 = currencyDisplay.currency;
        } else {
          currency2 = "symbol" === currencyDisplay2 ? tmp18.symbol : tmp18.narrow;
        }
      } else {
        currency2 = currencyDisplay.currency;
      }
    }
  }
  let str16 = tmp3;
  if (!tmp3) {
    if ("decimal" !== style) {
      if ("unit" !== style) {
        numbers = numbers.numbers;
        if (tmp17) {
          const arr5 = numbers.currency[numberingSystem] || numbers.numbers.currency[first][currencyDisplay.currencySign];
          let str27 = arr5;
          if (arr5.indexOf(";") < 0) {
            const concat5 = "".concat;
            const combined1 = "".concat(arr5, ";-");
            str27 = combined1.concat(arr5);
          }
          const parts1 = str27.split(";");
          [tmp26, arr6] = parts1;
          if (0 === sign) {
            let tmp27 = tmp26;
          } else {
            tmp27 = arr6;
            if (-1 !== sign) {
              if (arr6.indexOf("-") >= 0) {
                let replaced2 = arr6.replace(/-/g, "+");
              } else {
                const concat6 = "+".concat;
                replaced2 = "+".concat(tmp26);
              }
              tmp27 = replaced2;
            }
          }
          str16 = tmp27;
          const tmp24 = numbers.currency[numberingSystem] || numbers.numbers.currency[first];
        } else {
          let str20 = arr3;
          if (numbers.percent[numberingSystem] || numbers.numbers.percent[first].indexOf(";") < 0) {
            const concat3 = "".concat;
            const combined2 = "".concat(arr3, ";-");
            str20 = combined2.concat(arr3);
          }
          const parts2 = str20.split(";");
          [tmp21, arr4] = parts2;
          if (0 === sign) {
            let tmp22 = tmp21;
          } else {
            tmp22 = arr4;
            if (-1 !== sign) {
              if (arr4.indexOf("-") >= 0) {
                let replaced3 = arr4.replace(/-/g, "+");
              } else {
                const concat4 = "+".concat;
                replaced3 = "+".concat(tmp21);
              }
              tmp22 = replaced3;
            }
          }
          str16 = tmp22;
        }
      }
    }
    const standard = numbers.numbers.decimal[numberingSystem] || numbers.numbers.decimal[first].standard;
    let str34 = standard;
    if (standard.indexOf(";") < 0) {
      const concat7 = "".concat;
      const combined3 = "".concat(standard, ";-");
      str34 = combined3.concat(standard);
    }
    const parts3 = str34.split(";");
    [tmp31, arr8] = parts3;
    if (0 === sign) {
    } else if (-1 !== sign) {
      if (arr8.indexOf("-") >= 0) {
        let replaced4 = arr8.replace(/-/g, "+");
      } else {
        const concat8 = "+".concat;
        replaced4 = "+".concat(tmp31);
      }
    }
    const tmp29 = numbers.numbers.decimal[numberingSystem] || numbers.numbers.decimal[first];
  }
  const str40 = re5.exec(str16)[0];
  tmp2 = "compact" === notation && magnitude.magnitude;
  const str42 = str16.replace(re5, "{0}").replace(/'(.)'/g, "$1");
  let str43 = str42;
  if ("currency" === style) {
    str43 = str42;
    if ("name" !== currencyDisplay.currencyDisplay) {
      const afterInsertBetween = tmp35.currencySpacing.afterInsertBetween;
      let tmp36 = afterInsertBetween;
      if (afterInsertBetween) {
        tmp36 = !regExp1.test(currency2);
      }
      let str45 = str42;
      if (tmp36) {
        const concat9 = "\u00A4".concat;
        str45 = str42.replace("\u00A4{0}", "\u00A4".concat(afterInsertBetween, "{0}"));
      }
      const beforeInsertBetween = tmp35.currencySpacing.beforeInsertBetween;
      let tmp38 = beforeInsertBetween;
      if (beforeInsertBetween) {
        tmp38 = !regExp.test(currency2);
      }
      str43 = str45;
      if (tmp38) {
        const concat10 = "{0}".concat;
        str43 = str45.replace("{0}\u00A4", "{0}".concat(beforeInsertBetween, "\u00A4"));
      }
    }
  }
  const parts4 = str43.split(/({c:[^}]+}|\{0\}|[¤%\-\+])/g);
  const items = [];
  let num9 = 0;
  if (0 < parts4.length) {
    while (true) {
      let str50 = parts4[num9];
      if (str50) {
        if ("{0}" === str50) {
          break;
        } else if ("-" === str50) {
          let obj = { type: "minusSign", value: tmp40.minusSign };
          let arr7 = items.push(obj);
        } else if ("+" === str50) {
          let obj2 = { type: "plusSign", value: tmp40.plusSign };
          let arr9 = items.push(obj2);
        } else if ("%" === str50) {
          let obj3 = { type: "percentSign", value: tmp40.percentSign };
          let arr10 = items.push(obj3);
        } else if ("\u00A4" === str50) {
          let obj4 = { type: "currency", value: currency2 };
          let arr11 = items.push(obj4);
        } else {
          let obj5 = /^\{c:/;
          let push = items.push;
          if (obj5.test(str50)) {
            let obj6 = { type: "compact", value: str50.substring(3, str50.length - 1) };
            let arr12 = push(obj6);
          } else {
            let obj7 = { type: "literal", value: str50 };
            let arr13 = push(obj7);
          }
        }
      }
      num9 = num9 + 1;
    }
    const push2 = items.push;
    let items2 = !tmp3;
    if (!tmp3) {
      const useGrouping = currencyDisplay.useGrouping;
      items2 = null === useGrouping || undefined === useGrouping || useGrouping;
      const tmp50 = null === useGrouping || undefined === useGrouping || useGrouping;
    }
    const roundingIncrement = currencyDisplay.roundingIncrement;
    let obj8 = dependencyMap;
    let formattedString = GetUnsignedRoundingMode.GetUnsignedRoundingMode(currencyDisplay.roundingMode, tmp42);
    value = undefined;
    ({ formattedString: formattedString2, roundedNumber: roundedNumber2 } = magnitude);
    if (roundedNumber2.isNaN()) {
      obj8 = { type: "nan", value: formattedString2 };
      formattedString2 = [obj8];
      let items1 = formattedString2;
      push2.apply(items, items1);
    } else if (!roundedNumber2.isFinite()) {
      const obj9 = { type: "infinity", value: formattedString2 };
      items1 = [obj9];
    }
    value = value(14595).digitMapping[numberingSystem];
    let replaced5 = formattedString2;
    if (value) {
      value = (arg0) => fn[+arg0] || arg0;
      replaced5 = formattedString2.replace(/\d/g, value);
    }
    const index = replaced5.indexOf(".");
    let substr1;
    let substr = replaced5;
    if (index > 0) {
      substr = replaced5.slice(0, index);
      substr1 = replaced5.slice(index + 1);
    }
    let flag = true;
    if ("always" !== items2) {
      if ("min2" === items2) {
        flag = roundedNumber2.greaterThanOrEqualTo(10000);
      } else {
        flag = false;
        if (tmp54) {
          let greaterThanOrEqualToResult = tmp41;
          if (!tmp41) {
            greaterThanOrEqualToResult = roundedNumber2.greaterThanOrEqualTo(10000);
          }
          flag = greaterThanOrEqualToResult;
        }
        tmp54 = "auto" === items2 || items2;
      }
    }
    obj8 = [];
    if (flag) {
      if (tmp17) {
        if (null != tmp40.currencyGroup) {
          const parts5 = str40.split(".")[0].split(",");
          let num10 = 3;
          if (parts5.length > 1) {
            num10 = parts5[parts5.length - 1].length;
          }
          let num11 = 3;
          if (parts5.length > 2) {
            num11 = parts5[parts5.length - 2].length;
          }
          items2 = [];
          const diff = substr.length - num10;
          if (diff > 0) {
            items2.push(substr.slice(diff, diff + num10));
            let diff1 = diff - num11;
            let tmp61 = diff1;
            if (diff1 > 0) {
              do {
                let arr15 = items2.push(substr.slice(diff1, diff1 + num11));
                diff1 = diff1 - num11;
                tmp61 = diff1;
              } while (diff1 > 0);
            }
            items2.push(substr.slice(0, tmp61 + num11));
          } else {
            items2.push(substr);
          }
          if (items2.length > 0) {
            do {
              let obj10 = { type: "integer", value: items2.pop() };
              let arr18 = obj8.push(obj10);
              if (items2.length > 0) {
                let obj11 = { type: "group", value };
                let arr19 = obj8.push(obj11);
              }
            } while (items2.length > 0);
          }
          const str51 = str40.split(".")[0];
        }
      }
      value = tmp40.group;
    } else {
      const obj12 = { type: "integer", value: substr };
      obj8.push(obj12);
    }
    if (undefined === substr1) {
      if ("scientific" === notation) {
        items1 = obj8;
        if (roundedNumber2.isFinite()) {
          const obj13 = { type: "exponentSeparator", value: tmp40.exponential };
          obj8.push(obj13);
          value = exponent;
          if (exponent < 0) {
            const obj14 = { type: "exponentMinusSign", value: tmp40.minusSign };
            obj8.push(obj14);
            value = -exponent;
          }
          items2 = new.target;
          const _default1 = new digitsToString.default(value);
          const obj15 = { type: "exponentInteger", value: null };
          formattedString = ToRawFixed.ToRawFixed(_default1, 0, 0, roundingIncrement, formattedString).formattedString;
          obj15.value = formattedString;
          obj8.push(obj15);
          items1 = obj8;
        }
      } else {
        items1 = obj8;
      }
    } else {
      if (!tmp17) {
        const obj16 = { type: "decimal", value: tmp40.decimal };
        const obj17 = { type: "fraction", value: substr1 };
        obj8.push(obj16, obj17);
      }
      const currencyDecimal = tmp40.currencyDecimal;
    }
  }
  if ("currency" === style) {
    if ("name" === currencyDisplay.currencyDisplay) {
      if (numbers.currencies[currencyDisplay.currency]) {
        const roundedNumber5 = magnitude.roundedNumber;
        const timesResult = roundedNumber5.times(digitsToString.default.pow(10, exponent));
        const displayName = tmp99.displayName;
        let currency3 = displayName[arg2.select(arg2, timesResult.toNumber(timesResult))] || displayName.other;
        const _default3 = digitsToString.default;
        const tmp101 = displayName[arg2.select(arg2, timesResult.toNumber(timesResult))] || displayName.other;
      } else {
        currency3 = currencyDisplay.currency;
      }
      const items3 = [];
      const parts6 = numbers.numbers.currency[numberingSystem] || numbers.numbers.currency[first].unitPattern.split(/(\{[01]\})/g);
      for (let num18 = 0; num18 < parts6.length; num18 = num18 + 1) {
        let tmp102 = parts6[num18];
        if ("{0}" === tmp102) {
          let push4 = items3.push;
          let applyResult1 = push4.apply(items3, items);
        } else if ("{1}" === tmp102) {
          let obj18 = { type: "currency", value: currency3 };
          let arr46 = items3.push(obj18);
        } else if (tmp102) {
          let obj19 = { type: "literal", value: tmp102 };
          let arr47 = items3.push(obj19);
        }
      }
      return items3;
    } else {
      return items;
    }
  } else if ("unit" === style) {
    ({ unit, unitDisplay } = currencyDisplay);
    if (numbers.units.simple[unit]) {
      const roundedNumber4 = magnitude.roundedNumber;
      const timesResult1 = roundedNumber4.times(digitsToString.default.pow(10, exponent));
      let str59 = numbers.units.simple[unit][unitDisplay][arg2.select(arg2, timesResult1.toNumber(timesResult1))] || numbers.units.simple[unit][unitDisplay].other;
      const _default2 = digitsToString.default;
      const tmp90 = numbers.units.simple[unit][unitDisplay][arg2.select(arg2, timesResult1.toNumber(timesResult1))] || numbers.units.simple[unit][unitDisplay].other;
    } else {
      const parts7 = unit.split("-per-");
      [tmp81, tmp82] = parts7;
      const roundedNumber3 = magnitude.roundedNumber;
      const timesResult2 = roundedNumber3.times(digitsToString.default.pow(10, exponent));
      const tmp86 = numbers.units.simple[tmp81][unitDisplay][arg2.select(arg2, timesResult2.toNumber(timesResult2))] || numbers.units.simple[tmp81][unitDisplay].other;
      const str53 = numbers.units.simple[tmp82].perUnit[unitDisplay];
      if (str53) {
        str59 = str53.replace("{0}", tmp86);
      } else {
        const str55 = numbers.units.simple[tmp82][unitDisplay][arg2.select(arg2, 1)] || numbers.units.simple[tmp82][unitDisplay].other;
        str59 = numbers.units.compound.per[unitDisplay].replace("{0}", tmp86).replace("{1}", str55.replace("{0}", ""));
        const str56 = numbers.units.compound.per[unitDisplay].replace("{0}", tmp86);
      }
      const _default = digitsToString.default;
    }
    const items4 = [];
    const parts8 = str59.split(/(\s*\{0\}\s*)/);
    for (let num16 = 0; num16 < parts8.length; num16 = num16 + 1) {
      let tmp91 = parts8[num16];
      let obj23 = /^(\s*)\{0\}(\s*)$/;
      let match = obj23.exec(tmp91);
      if (match) {
        if (match[1]) {
          let obj20 = { type: "literal", value: match[1] };
          let arr48 = items4.push(obj20);
        }
        let push3 = items4.push;
        let applyResult2 = push3.apply(items4, items);
        if (match[2]) {
          let obj21 = { type: "literal", value: match[2] };
          let arr49 = items4.push(obj21);
        }
      } else if (tmp91) {
        let obj22 = { type: "unit", value: tmp91 };
        let arr50 = items4.push(obj22);
      }
    }
    return items4;
  } else {
    return items;
  }
  const str41 = str16.replace(re5, "{0}");
};