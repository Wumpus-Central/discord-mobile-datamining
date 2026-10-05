// === Module 13991: formatToParts ===

// Module 13991 (formatToParts)
import _mod13969 from "module_13969" /* 13969 */;
import GetUnsignedRoundingMode from "GetUnsignedRoundingMode" /* 13987 */;
import ToRawFixed2 from "ToRawFixed" /* 13989 */;
import S_UNICODE_REGEX from "S_UNICODE_REGEX" /* 13992 */;
import digitMapping from "digitMapping" /* 13993 */;
import module_1172 from "module_1172" /* 1172 */;

const module_13969 = module_1172.__importDefault(_mod13969);
const regExp = new RegExp("^".concat(S_UNICODE_REGEX.S_UNICODE_REGEX.source));
const regExp1 = new RegExp("".concat(S_UNICODE_REGEX.S_UNICODE_REGEX.source, "$"));
const re5 = /[#0](?:[\.,][#0]+)*/g;

export default function formatToParts(magnitude, numbers, arg2, currencyDisplay) {
  let arr2;
  let arr4;
  let arr6;
  let arr8;
  let compactDisplay;
  let currency2;
  let exponent;
  let formattedString;
  let notation;
  let num9;
  let numberingSystem;
  let roundedNumber;
  let roundedNumber2;
  let sign;
  let sign2;
  let style;
  let tmp14;
  let tmp20;
  let tmp25;
  let tmp30;
  let tmp84;
  let tmp85;
  let unit;
  let unitDisplay;
  ({ sign, exponent } = magnitude);
  ({ notation, style, numberingSystem } = currencyDisplay);
  const first = numbers.numbers.nu[0];
  let tmp3 = null;
  const tmp2 = "compact" === notation && magnitude.magnitude;
  if (tmp2) {
    let arr;
    ({ roundedNumber, sign: sign2 } = magnitude);
    const _String = String;
    const _Math = Math;
    ({ compactDisplay, currencyDisplay } = currencyDisplay);
    const StringResult = String(Math.pow(10, magnitude.magnitude));
    const first1 = numbers.numbers.nu[0];
    if ("currency" === style) {
      let replaced1;
      if ("name" !== currencyDisplay) {
        const currency = numbers.numbers.currency;
        const short = (currency[numberingSystem] || currency[first1]).short;
        let tmp11;
        if (null !== short) {
          if (undefined !== short) {
            tmp11 = short[StringResult];
          }
        }
        replaced1 = null;
        if (tmp11) {
          arr = tmp11[arg2.select(arg2, roundedNumber.toNumber(roundedNumber))] || tmp11.other;
          replaced1 = null;
          tmp11[arg2.select(arg2, roundedNumber.toNumber(roundedNumber))] || tmp11.other;
          if ("0" !== arr) {
            let str7;
            let str6 = arr;
            if (arr.indexOf(";") < 0) {
              const concat = "".concat;
              const combined = "".concat(arr, ";-");
              str6 = combined.concat(arr);
            }
            const parts = str6.split(";");
            [tmp14, arr2] = parts;
            if (0 === sign2) {
              str7 = tmp14;
            } else {
              str7 = arr2;
              if (-1 !== sign2) {
                let replaced;
                if (arr2.indexOf("-") >= 0) {
                  replaced = arr2.replace(/-/g, "+");
                } else {
                  const concat2 = "+".concat;
                  replaced = "+".concat(tmp14);
                }
                str7 = replaced;
              }
            }
            const str12 = str7.replace(/([^\s;\-\+\d¤]+)/g, "{c:$1}");
            replaced1 = str12.replace(/0+/, "0");
          }
        }
      }
      tmp3 = replaced1;
    }
    const decimal = numbers.numbers.decimal;
    replaced1 = null;
    if ((decimal[numberingSystem] || decimal[first1])[compactDisplay][StringResult]) {
      arr = tmp8[arg2.select(arg2, roundedNumber.toNumber(roundedNumber))] || tmp8.other;
    }
  }
  if ("currency" === style) {
    if ("name" !== currencyDisplay.currencyDisplay) {
      if (numbers.currencies[currencyDisplay.currency]) {
        const currencyDisplay2 = currencyDisplay.currencyDisplay;
        if ("code" === currencyDisplay2) {
          currency2 = currencyDisplay.currency;
        } else {
          currency2 = "symbol" === currencyDisplay2 ? tmp17.symbol : tmp17.narrow;
        }
      } else {
        currency2 = currencyDisplay.currency;
      }
    }
  }
  let str16 = tmp3;
  if (!str16) {
    let tmp31;
    if ("decimal" !== style) {
      if ("unit" !== style) {
        numbers = numbers.numbers;
        if ("currency" === style) {
          let tmp26;
          const arr5 = (numbers.currency[numberingSystem] || numbers.numbers.currency[first])[currencyDisplay.currencySign];
          let str27 = arr5;
          if (arr5.indexOf(";") < 0) {
            const concat5 = "".concat;
            const combined1 = "".concat(arr5, ";-");
            str27 = combined1.concat(arr5);
          }
          const parts1 = str27.split(";");
          [tmp25, arr6] = parts1;
          if (0 === sign) {
            tmp26 = tmp25;
          } else {
            tmp26 = arr6;
            if (-1 !== sign) {
              let replaced2;
              if (arr6.indexOf("-") >= 0) {
                replaced2 = arr6.replace(/-/g, "+");
              } else {
                const concat6 = "+".concat;
                replaced2 = "+".concat(tmp25);
              }
              tmp26 = replaced2;
            }
          }
          str16 = tmp26;
        } else {
          let tmp21;
          let str20 = arr3;
          if ((numbers.percent[numberingSystem] || numbers.numbers.percent[first]).indexOf(";") < 0) {
            const concat3 = "".concat;
            const combined2 = "".concat(arr3, ";-");
            str20 = combined2.concat(arr3);
          }
          const parts2 = str20.split(";");
          [tmp20, arr4] = parts2;
          if (0 === sign) {
            tmp21 = tmp20;
          } else {
            tmp21 = arr4;
            if (-1 !== sign) {
              let replaced3;
              if (arr4.indexOf("-") >= 0) {
                replaced3 = arr4.replace(/-/g, "+");
              } else {
                const concat4 = "+".concat;
                replaced3 = "+".concat(tmp20);
              }
              tmp21 = replaced3;
            }
          }
          str16 = tmp21;
        }
      }
    }
    const standard = (numbers.numbers.decimal[numberingSystem] || numbers.numbers.decimal[first]).standard;
    let str34 = standard;
    if (standard.indexOf(";") < 0) {
      const concat7 = "".concat;
      const combined3 = "".concat(standard, ";-");
      str34 = combined3.concat(standard);
    }
    const parts3 = str34.split(";");
    [tmp30, arr8] = parts3;
    if (0 === sign) {
      tmp31 = tmp30;
    } else {
      tmp31 = arr8;
      if (-1 !== sign) {
        let replaced4;
        if (arr8.indexOf("-") >= 0) {
          replaced4 = arr8.replace(/-/g, "+");
        } else {
          const concat8 = "+".concat;
          replaced4 = "+".concat(tmp30);
        }
        tmp31 = replaced4;
      }
    }
    str16 = tmp31;
  }
  const str40 = re5.exec(str16)[0];
  const str41 = str16.replace(re5, "{0}");
  const str42 = str41.replace(/'(.)'/g, "$1");
  let str43 = str42;
  if ("currency" === style) {
    str43 = str42;
    if ("name" !== currencyDisplay.currencyDisplay) {
      const afterInsertBetween = tmp33.currencySpacing.afterInsertBetween;
      let str45 = str42;
      const tmp34 = afterInsertBetween && !regExp1.test(currency2);
      if (tmp34) {
        const concat9 = "\u00A4".concat;
        str45 = str42.replace("\u00A4{0}", "\u00A4".concat(afterInsertBetween, "{0}"));
      }
      const beforeInsertBetween = tmp33.currencySpacing.beforeInsertBetween;
      str43 = str45;
      const tmp36 = beforeInsertBetween && !regExp.test(currency2);
      if (tmp36) {
        const concat10 = "{0}".concat;
        str43 = str45.replace("{0}\u00A4", "{0}".concat(beforeInsertBetween, "\u00A4"));
      }
    }
  }
  const parts4 = str43.split(/({c:[^}]+}|\{0\}|[¤%\-\+])/g);
  const items = [];
  const tmp39 = "compact" !== notation;
  for (let num9 = 0; num9 < parts4.length; num9 = num9 + 1) {
    let str50 = parts4[num9];
    if (str50) {
      if ("{0}" === str50) {
        let items4;
        let push2 = items.push;
        let tmp48 = !tmp3;
        let apply = push2.apply;
        if (!tmp3) {
          let useGrouping = currencyDisplay.useGrouping;
          let tmp49 = null === useGrouping || undefined === useGrouping || useGrouping;
          tmp48 = tmp49;
        }
        let roundingIncrement = currencyDisplay.roundingIncrement;
        let result = GetUnsignedRoundingMode.GetUnsignedRoundingMode(currencyDisplay.roundingMode, tmp40);
        let closure_0;
        ({ formattedString, roundedNumber: roundedNumber2 } = magnitude);
        if (roundedNumber2.isNaN()) {
          let obj = { type: "nan", value: formattedString };
          let items1 = [obj];
          items4 = items1;
        } else if (roundedNumber2.isFinite()) {
          let tmp53 = digitMapping.digitMapping[numberingSystem];
          closure_0 = tmp53;
          let replaced5 = formattedString;
          if (tmp53) {
            replaced5 = formattedString.replace(/\d/g, (arg0) => closure_0[+arg0] || arg0);
          }
          let index = replaced5.indexOf(".");
          let substr1;
          let substr = replaced5;
          if (index > 0) {
            substr = replaced5.slice(0, index);
            substr1 = replaced5.slice(index + 1);
          }
          let flag = true;
          if ("always" !== tmp48) {
            if ("min2" === tmp48) {
              flag = roundedNumber2.greaterThanOrEqualTo(10000);
            } else {
              let tmp57 = "auto" === tmp48 || tmp48;
              flag = false;
              if (tmp57) {
                let tmp58 = tmp39 || roundedNumber2.greaterThanOrEqualTo(10000);
                flag = tmp58;
              }
            }
          }
          let items2 = [];
          if (flag) {
            if (tmp16) {
              if (null != tmp38.currencyGroup) {
                let group = tmp38.currencyGroup;
                let str51 = str40.split(".")[0];
                let parts5 = str51.split(",");
                let num10 = 3;
                if (parts5.length > 1) {
                  num10 = parts5[parts5.length - 1].length;
                }
                let num11 = 3;
                if (parts5.length > 2) {
                  num11 = parts5[parts5.length - 2].length;
                }
                let items3 = [];
                let diff = substr.length - num10;
                if (diff > 0) {
                  let arr7 = items3.push(substr.slice(diff, diff + num10));
                  let diff1 = diff - num11;
                  let tmp64 = diff1;
                  if (diff1 > 0) {
                    do {
                      let arr9 = items3.push(substr.slice(diff1, diff1 + num11));
                      diff1 = diff1 - num11;
                      tmp64 = diff1;
                    } while (diff1 > 0);
                  }
                  let arr10 = items3.push(substr.slice(0, tmp64 + num11));
                } else {
                  let arr11 = items3.push(substr);
                }
                if (items3.length > 0) {
                  do {
                    let obj2 = { type: "integer", value: items3.pop() };
                    let arr12 = items2.push(obj2);
                    if (items3.length > 0) {
                      let obj3 = { type: "group", value: group };
                      let arr13 = items2.push(obj3);
                    }
                  } while (items3.length > 0);
                }
              }
            }
            group = tmp38.group;
          } else {
            let obj4 = { type: "integer", value: substr };
            let arr14 = items2.push(obj4);
          }
          if (undefined !== substr1) {
            if (tmp16) {
              if (null != tmp38.currencyDecimal) {
                let obj6 = { type: "decimal", value: tmp38.currencyDecimal };
                let obj7 = { type: "fraction", value: substr1 };
                let arr15 = items2.push(obj6, obj7);
              }
            }
            let decimal2 = tmp38.decimal;
          }
          if ("scientific" === notation) {
            items4 = items2;
            if (roundedNumber2.isFinite()) {
              let obj8 = { type: "exponentSeparator", value: tmp38.exponential };
              let arr16 = items2.push(obj8);
              let tmp71 = exponent;
              if (exponent < 0) {
                let obj9 = { type: "exponentMinusSign", value: tmp38.minusSign };
                let arr17 = items2.push(obj9);
                tmp71 = -exponent;
              }
              let self = this;
              let self2 = this;
              let ToRawFixed = ToRawFixed2.ToRawFixed;
              let _default1 = new module_13969.default(tmp71);
              let obj10 = { type: "exponentInteger", value: ToRawFixed(_default1, 0, 0, roundingIncrement, result).formattedString };
              let arr18 = items2.push(obj10);
              items4 = items2;
            }
          } else {
            items4 = items2;
          }
        } else {
          let obj11 = { type: "infinity", value: formattedString };
          items4 = [obj11];
        }
        let applyResult = apply(items, items4);
      } else if ("-" === str50) {
        let obj12 = { type: "minusSign", value: tmp38.minusSign };
        let arr19 = items.push(obj12);
      } else if ("+" === str50) {
        let obj13 = { type: "plusSign", value: tmp38.plusSign };
        let arr20 = items.push(obj13);
      } else if ("%" === str50) {
        let obj14 = { type: "percentSign", value: tmp38.percentSign };
        let arr21 = items.push(obj14);
      } else if ("\u00A4" === str50) {
        let obj15 = { type: "currency", value: currency2 };
        let arr43 = items.push(obj15);
      } else {
        let obj5 = /^\{c:/;
        let push = items.push;
        if (obj5.test(str50)) {
          let obj16 = { type: "compact", value: str50.substring(3, str50.length - 1) };
          let arr44 = push(obj16);
        } else {
          let obj17 = { type: "literal", value: str50 };
          let arr45 = push(obj17);
        }
      }
    }
  }
  if ("currency" === style) {
    if ("name" === currencyDisplay.currencyDisplay) {
      let currency3;
      let num18;
      const str61 = (numbers.numbers.currency[numberingSystem] || numbers.numbers.currency[first]).unitPattern;
      if (numbers.currencies[currencyDisplay.currency]) {
        const roundedNumber5 = magnitude.roundedNumber;
        const _default3 = module_13969.default;
        const timesResult = roundedNumber5.times(_default3.pow(10, exponent));
        const displayName = tmp102.displayName;
        currency3 = displayName[arg2.select(arg2, timesResult.toNumber(timesResult))] || displayName.other;
        displayName[arg2.select(arg2, timesResult.toNumber(timesResult))] || displayName.other;
      } else {
        currency3 = currencyDisplay.currency;
      }
      const items5 = [];
      const parts6 = str61.split(/(\{[01]\})/g);
      for (let num18 = 0; num18 < parts6.length; num18 = num18 + 1) {
        let tmp105 = parts6[num18];
        if ("{0}" === tmp105) {
          let push4 = items5.push;
          let applyResult1 = push4.apply(items5, items);
        } else if ("{1}" === tmp105) {
          let obj18 = { type: "currency", value: currency3 };
          let arr46 = items5.push(obj18);
        } else if (tmp105) {
          let obj19 = { type: "literal", value: tmp105 };
          let arr47 = items5.push(obj19);
        }
      }
      return items5;
    } else {
      return items;
    }
  } else if ("unit" === style) {
    let str59;
    let num16;
    ({ unit, unitDisplay } = currencyDisplay);
    if (numbers.units.simple[unit]) {
      const roundedNumber4 = magnitude.roundedNumber;
      const _default2 = module_13969.default;
      const timesResult1 = roundedNumber4.times(_default2.pow(10, exponent));
      str59 = numbers.units.simple[unit][unitDisplay][arg2.select(arg2, timesResult1.toNumber(timesResult1))] || numbers.units.simple[unit][unitDisplay].other;
      numbers.units.simple[unit][unitDisplay][arg2.select(arg2, timesResult1.toNumber(timesResult1))] || numbers.units.simple[unit][unitDisplay].other;
    } else {
      const parts7 = unit.split("-per-");
      [tmp84, tmp85] = parts7;
      const roundedNumber3 = magnitude.roundedNumber;
      const _default = module_13969.default;
      const timesResult2 = roundedNumber3.times(_default.pow(10, exponent));
      const tmp89 = numbers.units.simple[tmp84][unitDisplay][arg2.select(arg2, timesResult2.toNumber(timesResult2))] || numbers.units.simple[tmp84][unitDisplay].other;
      const str53 = numbers.units.simple[tmp85].perUnit[unitDisplay];
      if (str53) {
        str59 = str53.replace("{0}", tmp89);
      } else {
        const str54 = numbers.units.compound.per[unitDisplay];
        const str55 = numbers.units.simple[tmp85][unitDisplay][arg2.select(arg2, 1)] || numbers.units.simple[tmp85][unitDisplay].other;
        const str56 = str54.replace("{0}", tmp89);
        str59 = str56.replace("{1}", str55.replace("{0}", ""));
      }
    }
    const items6 = [];
    const parts8 = str59.split(/(\s*\{0\}\s*)/);
    for (let num16 = 0; num16 < parts8.length; num16 = num16 + 1) {
      let tmp94 = parts8[num16];
      let obj24 = /^(\s*)\{0\}(\s*)$/;
      let match = obj24.exec(tmp94);
      if (match) {
        if (match[1]) {
          let obj20 = { type: "literal", value: match[1] };
          let arr48 = items6.push(obj20);
        }
        let push3 = items6.push;
        let applyResult2 = push3.apply(items6, items);
        if (match[2]) {
          let obj21 = { type: "literal", value: match[2] };
          let arr49 = items6.push(obj21);
        }
      } else if (tmp94) {
        let obj22 = { type: "unit", value: tmp94 };
        let arr50 = items6.push(obj22);
      }
    }
    return items6;
  } else {
    return items;
  }
};