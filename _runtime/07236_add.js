// === Module 7236: add ===

// Module 7236 (add)
function add(s, s2) {
  let diff2;
  let tmp17;
  let tmp28;
  let constructor = s.constructor;
  const precision = constructor.precision;
  if (s.s) {
    if (s2.s) {
      const d = s.d;
      const d1 = s2.d;
      let e = s.e;
      const e2 = s2.e;
      const substr = d.slice();
      const diff = e - e2;
      let tmp8 = e2;
      if (diff) {
        if (diff < 0) {
          let tmp9 = -diff;
          let length = d1.length;
          e = e2;
          let arr4 = substr;
        } else {
          length = substr.length;
          tmp9 = diff;
          arr4 = d1;
        }
        const _Math = Math;
        const rounded = Math.ceil(precision / 7);
        if (rounded > length) {
          let sum = rounded + 1;
        } else {
          sum = length + 1;
        }
        if (tmp9 > sum) {
          arr4.length = 1;
          tmp9 = sum;
        }
        const reversed = arr4.reverse();
        let diff1 = tmp14 - 1;
        if (+tmp9) {
          do {
            let arr = arr4.push(0);
            tmp17 = +diff1;
            diff1 = tmp17 - 1;
          } while (tmp17);
        }
        const reversed1 = arr4.reverse();
        tmp8 = e;
      }
      let length3 = d1.length;
      let tmp19 = d1;
      let arr5 = substr;
      if (substr.length - length3 < 0) {
        tmp19 = substr;
        arr5 = d1;
        length3 = length2;
      }
      let num7 = 0;
      let num8 = 0;
      if (length3) {
        do {
          diff2 = length3 - 1;
          let sum1 = arr5[diff2] + tmp19[diff2] + num7;
          arr5[diff2] = sum1;
          num7 = sum1 / c9 | 0;
          arr5[diff2] = arr5[diff2] % c9;
          num8 = num7;
          length3 = diff2;
        } while (diff2);
      }
      let sum2 = tmp8;
      if (num8) {
        arr5.unshift(num8);
        sum2 = tmp8 + 1;
      }
      let diff3 = arr5.length - 1;
      if (0 == arr5[diff3]) {
        do {
          let arr1 = arr5.pop();
          let diff4 = diff3 - 1;
          diff3 = diff4;
          tmp28 = arr5[diff4];
        } while (0 == tmp28);
      }
      s2.d = arr5;
      s2.e = sum2;
      if (c2) {
        round(s2, precision);
      }
      return s2;
    }
  }
  constructor = s2;
  if (!s2.s) {
    constructor = new constructor(s);
  }
  if (c2) {
    round(constructor, precision);
  }
  return constructor;
}
function digitsToString(arg0) {
  let result1;
  let tmp16;
  const diff = arg0.length - 1;
  const first = arg0[0];
  if (0 < diff) {
    let text = `${tmp2}`;
    let num2 = 1;
    let tmp5 = text;
    if (1 < diff) {
      do {
        let text1 = `${arg0[num2]}`;
        let diff1 = 7 - `${arg0[num2]}`.length;
        let sum = text;
        if (diff1) {
          let diff2 = diff1 - 1;
          let str4 = "";
          let str5 = "";
          if (diff1) {
            do {
              str4 = `0`;
              tmp12 = diff2;
              diff2 = diff2 - 1;
              str5 = str4;
            } while (tmp12);
          }
          sum = text + str5;
        }
        text = sum + text1;
        num2 = num2 + 1;
        tmp5 = text;
      } while (num2 < diff);
    }
    const diff3 = 7 - "" + tmp13.length;
    let tmp3 = tmp13;
    let str = tmp5;
    if (diff3) {
      let diff4 = diff3 - 1;
      let str6 = "";
      let str7 = "";
      if (diff3) {
        do {
          str6 = `0`;
          tmp16 = diff4;
          diff4 = diff4 - 1;
          str7 = str6;
        } while (tmp16);
      }
      str = tmp5 + str7;
      tmp3 = tmp13;
    }
  } else {
    str = "";
    tmp3 = first;
    if (0 === first) {
      return "0";
    }
  }
  let tmp17 = tmp3;
  let tmp18 = tmp3;
  if (tmp3 % 10 === 0) {
    do {
      let result = tmp17 / 10;
      tmp17 = result;
      tmp18 = result;
      result1 = result % 10;
    } while (result1 === 0);
  }
  return str + tmp18;
}
function exp(constructor, arg1) {
  let gteResult;
  let substr;
  let substr1;
  let tmp25;
  let tmp35;
  let tmp41;
  constructor = constructor.constructor;
  const precision = constructor.precision;
  let result = 7 * constructor.e;
  let first = constructor.d[0];
  let tmp3 = result;
  if (first >= 10) {
    do {
      result = result + 1;
      first = first / 10;
      tmp3 = result;
    } while (10 <= first);
  }
  if (16 < tmp3) {
    let result1 = 7 * constructor.e;
    let first1 = constructor.d[0];
    let tmp47 = result1;
    if (first1 >= 10) {
      do {
        result1 = result1 + 1;
        first1 = first1 / 10;
        tmp47 = result1;
      } while (10 <= first1);
    }
    throw Error(c5 + tmp47);
  } else if (constructor.s) {
    let tmp11;
    if (null == undefined) {
      c2 = false;
      tmp11 = precision;
    }
    constructor = new constructor(0.03125);
    let num5 = 0;
    let obj2 = constructor;
    let num6 = 0;
    let tmp16 = constructor;
    if (absResult.gte(0.1)) {
      do {
        let timesResult = obj2.times(constructor);
        num5 = num5 + 5;
        let absResult1 = timesResult.abs();
        obj2 = timesResult;
        num6 = num5;
        tmp16 = timesResult;
        gteResult = absResult1.gte(0.1);
      } while (gteResult);
    }
    const _Math = Math;
    const _Math2 = Math;
    const sum = tmp11 + (Math.log(pow(2, num6)) / Math.LN10 * 2 + 5 | 0);
    const constructor1 = new constructor(Decimal);
    let obj5 = constructor1;
    constructor.precision = sum;
    let num8 = 0;
    let obj6 = constructor1;
    let obj7 = constructor1;
    do {
      tmp25 = round;
      let timesResult1 = obj6.times(tmp16);
      let tmp27 = round(timesResult1, sum);
      let sum1 = num8 + 1;
      let timesResult2 = obj7.times(sum1);
      let plusResult = obj5.plus(f111132(timesResult1, timesResult2, sum));
      let arr = digitsToString(plusResult.d);
      substr = arr.slice(0, sum);
      let arr2 = digitsToString(obj5.d);
      tmp35 = obj5;
      num8 = sum1;
      obj5 = plusResult;
      obj6 = timesResult1;
      obj7 = timesResult2;
      substr1 = arr2.slice(0, sum);
    } while (substr !== substr1);
    let diff = num6 - 1;
    let obj8 = tmp35;
    let tmp37 = tmp35;
    if (num6) {
      do {
        let timesResult3 = obj8.times(obj8);
        let tmp40 = round(timesResult3, sum);
        tmp41 = diff;
        diff = diff - 1;
        obj8 = timesResult3;
        tmp37 = timesResult3;
        tmp25 = round;
      } while (tmp41);
    }
    constructor.precision = precision;
    let tmp25Result = tmp37;
    if (null == undefined) {
      c2 = true;
      tmp25Result = tmp25(tmp37, precision);
    }
    return tmp25Result;
  } else {
    const constructor2 = new constructor(Decimal);
    return constructor2;
  }
}
function ln(s, arg1) {
  let constructor = s.constructor;
  const precision = constructor.precision;
  let num = 1;
  if (s.s < 1) {
    let str7 = "-Infinity";
    if (s.s) {
      str7 = "NaN";
    }
    throw Error(c3 + str7);
  } else if (s.eq(Decimal)) {
    constructor = new constructor(0);
    return constructor;
  } else {
    let tmp2 = arg1;
    if (null == arg1) {
      c2 = false;
      tmp2 = precision;
    }
    if (s.eq(10)) {
      if (tmp4) {
        c2 = true;
      }
      const LN10 = constructor.LN10;
      if (tmp2 > LN10.sd()) {
        c2 = true;
        const _Error2 = Error;
        throw Error("[DecimalError] LN10 precision limit exceeded");
      } else {
        const constructor1 = new constructor(constructor.LN10);
        round(constructor1, tmp2);
        return constructor1;
      }
    } else {
      const sum = tmp2 + 10;
      constructor.precision = sum;
      const str = digitsToString(tmp);
      const charAtResult = str.charAt(0);
      let result = 7 * s.e;
      let first = s.d[0];
      let tmp10 = result;
      if (first >= 10) {
        do {
          result = result + num;
          first = first / 10;
          tmp10 = result;
        } while (10 <= first);
      }
      const _Math = Math;
      if (Math.abs(tmp10) < 1500000000000000) {
        if (charAtResult >= 7) {
          let tmp14 = s;
          let tmp16 = charAtResult;
          let times = str;
          if (num == charAtResult) {
            obj = s;
            let tmp13 = num;
            tmp14 = s;
            tmp16 = charAtResult;
            times = str;
          }
          let result1 = 7 * tmp14.e;
          let first1 = tmp14.d[0];
          let num8 = result1;
          if (first1 >= 10) {
            do {
              result1 = result1 + num;
              first1 = first1 / 10;
              num8 = result1;
            } while (10 <= first1);
          }
          if (tmp16 > num) {
            let constructor2 = new constructor("0." + times);
            const sum1 = num8 + num;
          } else {
            const text = `${tmp16}.`;
            constructor2 = new constructor(`${tmp16}.` + times.slice(num));
          }
          const tmp36 = f111132(constructor2.minus(Decimal), constructor2.plus(Decimal), sum);
          times = tmp36.times;
          round(times(tmp36), sum);
          num = 3;
          num8 = 2;
          const minusResult = constructor2.minus(Decimal);
        } else {
          obj = s;
          tmp13 = num;
        }
        while (true) {
          let timesResult = obj.times(s);
          let str3 = digitsToString(timesResult.d);
          let charAtResult1 = str3.charAt(0);
          let sum2 = tmp13 + num;
          if (charAtResult1 < 7) {
            obj = timesResult;
            tmp13 = sum2;
          }
          tmp14 = timesResult;
          tmp16 = charAtResult1;
          times = str3;
          if (num != charAtResult1) {
            break;
          } else {
            obj = timesResult;
            tmp13 = sum2;
            tmp14 = timesResult;
            tmp16 = charAtResult1;
            times = str3;
            if (str3.charAt(num) <= 3) {
              break;
            }
          }
        }
      } else {
        const sum3 = sum + 2;
        const LN102 = constructor.LN10;
        if (sum3 > LN102.sd()) {
          c2 = true;
          if (precision) {
            constructor.precision = precision;
          }
          const _Error = Error;
          throw Error("[DecimalError] LN10 precision limit exceeded");
        } else {
          const constructor3 = new constructor(constructor.LN10);
          round(constructor3, sum3);
          const text1 = `${tmp7}.`;
          const constructor4 = new constructor(`${tmp7}.` + str.slice(num));
          const timesResult1 = constructor3.times("" + tmp10);
          const plusResult = ln(constructor4, sum - 10).plus(timesResult1);
          constructor.precision = precision;
          if (tmp4) {
            c2 = true;
            round(plusResult, precision);
          }
          return plusResult;
        }
      }
    }
  }
}
function parseDecimal(d, arr) {
  let charCodeAtResult;
  let charCodeAtResult1;
  let sum2;
  let tmp26;
  const index = arr.indexOf(".");
  let replaced = arr;
  if (index > -1) {
    replaced = arr.replace(".", "");
  }
  const searchResult = replaced.search(/e/i);
  if (searchResult > 0) {
    let tmp3 = index;
    if (index < 0) {
      tmp3 = searchResult;
    }
    let length = tmp3 + +replaced.slice(searchResult + 1);
    let substr = replaced.substring(0, searchResult);
  } else {
    substr = replaced;
    length = index;
    if (index < 0) {
      length = replaced.length;
      substr = replaced;
    }
  }
  let num2 = 0;
  let num3 = 0;
  if (48 === substr.charCodeAt(0)) {
    do {
      let sum = num2 + 1;
      num2 = sum;
      num3 = sum;
      charCodeAtResult = substr.charCodeAt(sum);
    } while (48 === charCodeAtResult);
  }
  let tmp6 = length2;
  let tmp7 = length2;
  if (48 === substr.charCodeAt(substr.length - 1)) {
    do {
      let diff = tmp6 - 1;
      tmp6 = diff;
      tmp7 = diff;
      charCodeAtResult1 = substr.charCodeAt(diff - 1);
    } while (48 === charCodeAtResult1);
  }
  const substr1 = substr.slice(num3, tmp7);
  if (substr1) {
    const diff1 = tmp7 - num3;
    const diff2 = length - num3 - 1;
    d.e = floor(diff2 / 7);
    d.d = [];
    const result = (diff2 + 1) % 7;
    let sum1 = result;
    if (diff2 < 0) {
      sum1 = result + 7;
    }
    if (sum1 < diff1) {
      if (sum1) {
        d = d.d;
        arr = d.push(+substr1.slice(0, sum1));
      }
      const diff3 = diff1 - 7;
      let tmp19 = sum1;
      let tmp20 = sum1;
      if (sum1 < diff3) {
        do {
          let d1 = d.d;
          sum2 = tmp19 + 7;
          arr = d1.push(+substr1.slice(tmp19, sum2));
          tmp19 = sum2;
          tmp20 = sum2;
        } while (sum2 < diff3);
      }
      const substr2 = substr1.slice(tmp20);
      let diff4 = 7 - substr2.length;
      let tmp16 = substr2;
    } else {
      diff4 = sum1 - diff1;
      tmp16 = substr1;
    }
    let diff5 = diff4 - 1;
    let text = tmp16;
    let tmp25 = tmp16;
    if (diff4) {
      do {
        text = `${tmp24}0`;
        tmp26 = diff5;
        diff5 = diff5 - 1;
        tmp25 = text;
      } while (tmp26);
    }
    const d2 = d.d;
    d2.push(+tmp25);
    if (c2) {
      const _Error = Error;
      throw Error(c5 + diff2);
    }
  } else {
    d.s = 0;
    d.e = 0;
    d.d = [0];
  }
  return d;
}
function round(d, exponent, arg2) {
  let tmp32;
  d = d.d;
  let first = d[0];
  let num = 1;
  let num2 = 1;
  if (first >= 10) {
    do {
      num = num + 1;
      first = first / 10;
      num2 = num;
    } while (10 <= first);
  }
  const diff = exponent - num2;
  if (diff < 0) {
    let sum = diff + 7;
    let first1 = d[0];
    let num6 = 0;
    let num5 = num2;
    let sum1 = exponent;
  } else {
    const _Math = Math;
    const rounded = Math.ceil((diff + 1) / 7);
    if (rounded >= d.length) {
      return d;
    } else {
      first1 = d[rounded];
      let num4 = 1;
      let result = first1;
      num5 = 1;
      if (first1 >= 10) {
        do {
          num4 = num4 + 1;
          result = result / 10;
          num5 = num4;
        } while (10 <= result);
      }
      sum = diff % 7;
      sum1 = sum - 7 + num5;
      num6 = rounded;
    }
  }
  if (undefined === arg2) {
    if (exponent >= 1) {
      if (d[0]) {
        if (0 === sum) {
          d.length = num6;
          let diff1 = num6 - 1;
          let num14 = 1;
        } else {
          d.length = num6 + 1;
          num14 = pow(10, 7 - sum);
          let num15 = 0;
          if (sum1 > 0) {
            const result1 = first1 / pow(10, num5 - sum1);
            num15 = (result1 % pow(10, sum1) | 0) * num14;
          }
          d[num6] = num15;
          diff1 = num6;
        }
        if (undefined) {
          while (0 != diff1) {
            d[diff1] = d[diff1] + num14;
            if (d[diff1] == c9) {
              let tmp26 = +diff1;
              diff1 = tmp26 - 1;
              d[tmp26] = 0;
              num14 = 1;
              continue;
            }
          }
          const sum2 = d[0] + num14;
          d[0] = sum2;
          if (sum2 == c9) {
            d[0] = 1;
            d.e = d.e + 1;
          }
        }
        let diff2 = d.length - 1;
        if (0 === d[diff2]) {
          do {
            let arr = d.pop();
            let diff3 = diff2 - 1;
            diff2 = diff3;
            tmp32 = d[diff3];
          } while (0 === tmp32);
        }
        if (c2) {
          let result2 = 7 * d.e;
          let first2 = d.d[0];
          let tmp39 = result2;
          if (first2 >= 10) {
            do {
              result2 = result2 + 1;
              first2 = first2 / 10;
              tmp39 = result2;
            } while (10 <= first2);
          }
          throw Error(c5 + tmp39);
        }
        return d;
      }
    }
    if (undefined) {
      let result3 = 7 * d.e;
      let first3 = d.d[0];
      let tmp42 = result3;
      if (first3 >= 10) {
        do {
          result3 = result3 + 1;
          first3 = first3 / 10;
          tmp42 = result3;
        } while (10 <= first3);
      }
      d.length = 1;
      const diff4 = exponent - tmp42 - 1;
      d[0] = pow(10, (7 - diff4 % 7) % 7);
      d.e = floor(-diff4 / 7) || 0;
      const tmp46 = floor(-diff4 / 7) || 0;
    } else {
      d.length = 1;
      d.s = 0;
      d.e = 0;
      d[0] = 0;
    }
    return d;
  } else {
    let tmp14 = pow;
    const tmp47 = pow(10, num5 - sum1 - 1);
    let tmp17 = first1 / tmp47 % 10 | 0;
    const tmp9 = exponent < 0 || undefined !== d[num6 + 1] || first1 % tmp47;
    if (arg2 < 4) {
      if (!tmp17) {
        tmp17 = tmp9;
      }
      if (tmp17) {
        let tmp18 = 0 == arg2;
        if (!tmp18) {
          let num12 = 2;
          if (d.s < 0) {
            num12 = 3;
          }
          tmp18 = arg2 == num12;
        }
        tmp17 = tmp18;
      }
    } else {
      const tmp16 = tmp17 > 5;
      if (5 >= tmp17) {
        const tmp10 = 5 === tmp17;
        if (5 === tmp17) {
          let tmp11 = 4 == arg2 || tmp9;
          if (!tmp11) {
            if (6 != arg2) {
              tmp11 = tmp12;
            } else if (0 < sum) {
              if (sum1 > 0) {
                tmp14 = tmp14(10, num5 - sum1);
                const num10 = first1 / tmp14;
              }
            }
          }
          if (!tmp11) {
            let num11 = 7;
            if (d.s < 0) {
              num11 = 8;
            }
            tmp11 = arg2 == num11;
          }
        }
      }
    }
  }
}
function subtract(s, s2) {
  let diff3;
  let first;
  let tmp20;
  let tmp36;
  let constructor = s.constructor;
  const precision = constructor.precision;
  if (s.s) {
    if (s2.s) {
      d = s.d;
      ({ d, e } = s2);
      let e2 = s.e;
      const substr = d.slice();
      const diff = e2 - e;
      if (diff) {
        if (diff < 0) {
          let tmp13 = -diff;
          let length3 = d.length;
          e2 = e;
          let arr3 = substr;
        } else {
          length3 = substr.length;
          tmp13 = diff;
          arr3 = d;
        }
        const _Math = Math;
        const _Math2 = Math;
        const sum = Math.max(Math.ceil(precision / 7), length3) + 2;
        if (tmp13 > sum) {
          arr3.length = 1;
          tmp13 = sum;
        }
        const reversed = arr3.reverse();
        let diff1 = tmp17 - 1;
        if (+tmp13) {
          do {
            let arr = arr3.push(0);
            tmp20 = +diff1;
            diff1 = tmp20 - 1;
          } while (tmp20);
        }
        const reversed1 = arr3.reverse();
        let tmp9 = tmp12;
        let num4 = tmp13;
        let tmp11 = e2;
      } else {
        let length2 = d.length;
        if (substr.length < length2) {
          length2 = length;
        }
        let num3 = 0;
        tmp9 = tmp8;
        if (0 < length2) {
          while (substr[num3] == d[num3]) {
            num3 = num3 + 1;
            tmp9 = tmp8;
          }
          tmp9 = substr[num3] < d[num3];
        }
        num4 = 0;
        tmp11 = e;
      }
      let arr4 = d;
      let arr5 = substr;
      if (tmp9) {
        s2.s = -s2.s;
        arr4 = substr;
        arr5 = d;
      }
      let diff2 = arr4.length - length4;
      let sum1 = length4;
      let tmp24 = length4;
      if (diff2 > 0) {
        do {
          let tmp25 = +sum1;
          sum1 = tmp25 + 1;
          arr5[tmp25] = 0;
          diff2 = diff2 - 1;
          tmp24 = sum1;
        } while (diff2 > 0);
      }
      let length5 = arr4.length;
      if (length5 > num4) {
        do {
          diff3 = length5 - 1;
          if (arr5[diff3] < arr4[diff3]) {
            let tmp27 = diff3;
            if (diff3) {
              let diff4 = diff3 - 1;
              let tmp29 = diff4;
              tmp27 = diff4;
              if (0 === arr5[diff4]) {
                arr5[tmp29] = 9999999;
                tmp27 = tmp29;
                while (tmp29) {
                  let diff5 = tmp29 - 1;
                  tmp29 = diff5;
                  tmp27 = diff5;
                  if (0 !== arr5[diff5]) {
                    break;
                  }
                }
              }
            }
            arr5[tmp27] = arr5[tmp27] - 1;
            arr5[diff3] = arr5[diff3] + c9;
          }
          arr5[diff3] = arr5[diff3] - arr4[diff3];
          length5 = diff3;
        } while (diff3 > num4);
      }
      let diff6 = tmp24 - 1;
      if (0 === arr5[diff6]) {
        do {
          arr = arr5.pop();
          let diff7 = diff6 - 1;
          diff6 = diff7;
          tmp36 = arr5[diff7];
        } while (0 === tmp36);
      }
      let diff8 = tmp11;
      let tmp38 = tmp11;
      if (0 === arr5[0]) {
        do {
          diff8 = diff8 - 1;
          let arr1 = arr5.shift();
          tmp38 = diff8;
          first = arr5[0];
        } while (0 === first);
      }
      if (arr5[0]) {
        s2.d = arr5;
        s2.e = tmp38;
        constructor = s2;
        if (c2) {
          round(s2, precision);
          constructor = s2;
        }
      } else {
        constructor = new constructor(0);
      }
      return constructor;
    }
  }
  if (s2.s) {
    s2.s = -s2.s;
    let constructor1 = s2;
  } else {
    constructor1 = new constructor(s);
  }
  if (c2) {
    round(constructor1, precision);
  }
  return constructor1;
}
function toString(arg0, arg1, arg2) {
  let tmp13;
  let tmp16;
  let tmp23;
  let tmp27;
  let tmp35;
  let tmp43;
  let result = 7 * arg0.e;
  let first = arg0.d[0];
  let tmp3 = result;
  if (first >= 10) {
    do {
      result = result + 1;
      first = first / 10;
      tmp3 = result;
    } while (10 <= first);
  }
  const arr = digitsToString(arg0.d);
  if (arg1) {
    if (arg2) {
      const diff = arg2 - length;
      if (diff > 0) {
        const text = `${arr.charAt(0)}.`;
        let diff1 = tmp41 - 1;
        let str22 = "";
        let str24 = "";
        const text1 = `${arr.charAt(0)}.${arr.slice(1)}`;
        if (+diff) {
          do {
            str22 = `0`;
            tmp43 = +diff1;
            diff1 = tmp43 - 1;
            str24 = str22;
          } while (tmp43);
        }
        let sum = text1 + str24;
      }
      let str25 = "e+";
      if (tmp3 < 0) {
        str25 = "e";
      }
      let sum1 = sum + str25 + tmp3;
    }
    sum = arr;
    if (length > 1) {
      const text2 = `${arr.charAt(0)}.`;
      sum = `${arr.charAt(0)}.${arr.slice(1)}`;
    }
  } else if (tmp3 < 0) {
    const diff2 = -tmp3 - 1;
    let diff3 = diff2 - 1;
    let str15 = "";
    let str16 = "";
    if (diff2) {
      do {
        str15 = `0`;
        tmp27 = diff3;
        diff3 = diff3 - 1;
        str16 = str15;
      } while (tmp27);
    }
    const _HermesInternal2 = HermesInternal;
    const combined = "0." + str16 + arr;
    let tmp31 = arg2;
    if (arg2) {
      const diff4 = arg2 - length;
      tmp31 = diff4 > 0;
      const tmp30 = diff4;
    }
    sum1 = combined;
    if (tmp31) {
      let diff5 = tmp33 - 1;
      let str18 = "";
      let str19 = "";
      if (+tmp30) {
        do {
          str18 = `0`;
          tmp35 = +diff5;
          diff5 = tmp35 - 1;
          str19 = str18;
        } while (tmp35);
      }
      sum1 = combined + str19;
    }
  } else if (tmp3 >= length) {
    const diff6 = tmp3 + 1 - length;
    let diff7 = diff6 - 1;
    let str8 = "";
    let str9 = "";
    if (diff6) {
      do {
        str8 = `0`;
        tmp16 = diff7;
        diff7 = diff7 - 1;
        str9 = str8;
      } while (tmp16);
    }
    let tmp17 = arg2;
    if (arg2) {
      const diff8 = arg2 - tmp3 - 1;
      tmp17 = diff8 > 0;
      const tmp18 = diff8;
    }
    const sum2 = arr + str9;
    sum1 = sum2;
    if (tmp17) {
      let diff9 = tmp21 - 1;
      let str10 = "";
      let str11 = "";
      if (+tmp18) {
        do {
          str10 = `0`;
          tmp23 = +diff9;
          diff9 = tmp23 - 1;
          str11 = str10;
        } while (tmp23);
      }
      const _HermesInternal = HermesInternal;
      sum1 = sum2 + "." + str11;
    }
  } else {
    const sum3 = tmp3 + 1;
    let text4 = arr;
    if (sum3 < length) {
      const text3 = `${arr.slice(0, tmp45)}.`;
      text4 = `${arr.slice(0, tmp45)}.${arr.slice(tmp45)}`;
    }
    let tmp6 = arg2;
    let tmp7 = sum3;
    if (arg2) {
      const diff10 = arg2 - length;
      tmp6 = diff10 > 0;
      tmp7 = diff10;
    }
    sum1 = text4;
    if (tmp6) {
      let text5 = text4;
      if (sum3 === length) {
        text5 = `${tmp5}.`;
      }
      let diff11 = tmp11 - 1;
      let str3 = "";
      let str5 = "";
      if (+tmp7) {
        do {
          str3 = `0`;
          tmp13 = +diff11;
          diff11 = tmp13 - 1;
          str5 = str3;
        } while (tmp13);
      }
      sum1 = text5 + str5;
    }
  }
  let text6 = sum1;
  if (arg0.s < 0) {
    text6 = `-${tmp9}`;
  }
  return text6;
}
function config(LN10) {
  let tmp;
  let tmp2;
  if (LN10) {
    if (typeof LN10 === "object") {
      const self = this;
      const items = ["precision", 1, 1000000000, "rounding"];
      let num = 0;
      items[4] = 0;
      items[5] = 8;
      items[6] = "toExpNeg";
      items[7] = -Infinity;
      items[8] = 0;
      items[9] = "toExpPos";
      items[10] = 0;
      items[11] = Infinity;
      if (0 < items.length) {
        while (true) {
          tmp = items[num];
          tmp2 = LN10[tmp];
          if (undefined !== tmp2) {
            if (floor(tmp2) !== tmp2) {
              break;
            } else if (tmp2 < items[num + 1]) {
              break;
            } else if (tmp2 > items[num + 2]) {
              break;
            } else {
              self[tmp] = tmp2;
            }
          }
          num = num + 3;
        }
        const _Error = Error;
        throw Error(c4 + tmp + ": " + tmp2);
      }
      LN10 = LN10.LN10;
      if (undefined !== LN10) {
        const _Math = Math;
        if (LN10 != Math.LN10) {
          const _Error2 = Error;
          throw Error(c4 + "LN10: " + LN10);
        } else {
          const _self = new self(LN10);
          self.LN10 = _self;
        }
      }
      return self;
    }
  }
  throw Error("[DecimalError] Object expected");
}
let obj = { precision: 20, rounding: 4, toExpNeg: -7, toExpPos: 21, LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286" };
let Decimal = obj;
let c2 = true;
let c3 = "[DecimalError] ";
let c4 = "[DecimalError] Invalid argument: ";
let c5 = "[DecimalError] Exponent out of range: ";
const re8 = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
let c9 = 10000000;
let closure_10 = floor(1286742750677284.5);
obj = {};
const fn = function() {
  const constructor = new this.constructor(this);
  if (constructor.s) {
    constructor.s = 1;
  }
  return constructor;
};
obj.abs = fn;
obj.absoluteValue = fn;
const fn2 = function(arg0) {
  const self = this;
  const constructor = new this.constructor(arg0);
  if (this.s !== constructor.s) {
    return self.s || -constructor.s;
  } else if (self.e !== constructor.e) {
    let num8 = -1;
    if (self.e > constructor.e ^ self.s < 0) {
      num8 = 1;
    }
    return num8;
  } else {
    let tmp2 = length2;
    if (self.d.length < constructor.d.length) {
      tmp2 = length;
    }
    let num3 = 0;
    if (0 < tmp2) {
      while (self.d[num3] === constructor.d[num3]) {
        num3 = num3 + 1;
      }
      let num6 = -1;
      if (self.d[num3] > constructor.d[num3] ^ self.s < 0) {
        num6 = 1;
      }
      return num6;
    }
    let num4 = 0;
    if (self.d.length !== constructor.d.length) {
      let num5 = -1;
      if (length > length2 ^ self.s < 0) {
        num5 = 1;
      }
      num4 = num5;
    }
    return num4;
  }
};
obj.cmp = fn2;
obj.comparedTo = fn2;
const fn3 = function() {
  let result2;
  const diff = this.d.length - 1;
  const result = 7 * (diff - this.e);
  let tmp3 = this.d[diff];
  let tmp4 = result;
  if (tmp3) {
    let diff1 = result;
    tmp4 = result;
    if (tmp3 % 10 === 0) {
      do {
        diff1 = diff1 - 1;
        let result1 = tmp3 / 10;
        tmp3 = result1;
        tmp4 = diff1;
        result2 = result1 % 10;
      } while (result2 === 0);
    }
  }
  let num3 = 0;
  if (tmp4 >= 0) {
    num3 = tmp4;
  }
  return num3;
};
obj.dp = fn3;
obj.decimalPlaces = fn3;
const fn4 = function(arg0) {
  const constructor = new this.constructor(arg0);
  return f111132(this, constructor);
};
obj.div = fn4;
obj.dividedBy = fn4;
const fn5 = function(arg0) {
  let constructor = this.constructor;
  constructor = new constructor(arg0);
  const tmp2 = f111132(this, constructor, 0, 1);
  round(tmp2, constructor.precision);
  return tmp2;
};
obj.idiv = fn5;
obj.dividedToIntegerBy = fn5;
const fn6 = function(arg0) {
  return !this.cmp(arg0);
};
obj.eq = fn6;
obj.equals = fn6;
obj.exponent = function() {
  let result = 7 * this.e;
  let first = this.d[0];
  let tmp3 = result;
  if (first >= 10) {
    do {
      result = result + 1;
      first = first / 10;
      tmp3 = result;
    } while (10 <= first);
  }
  return tmp3;
};
const fn7 = function(arg0) {
  return this.cmp(arg0) > 0;
};
obj.gt = fn7;
obj.greaterThan = fn7;
const fn8 = function(arg0) {
  return this.cmp(arg0) >= 0;
};
obj.gte = fn8;
obj.greaterThanOrEqualTo = fn8;
const fn9 = function() {
  return this.e > this.d.length - 2;
};
obj.isint = fn9;
obj.isInteger = fn9;
const fn10 = function() {
  return this.s < 0;
};
obj.isneg = fn10;
obj.isNegative = fn10;
const fn11 = function() {
  return this.s > 0;
};
obj.ispos = fn11;
obj.isPositive = fn11;
obj.isZero = function() {
  return 0 === this.s;
};
const fn12 = function(arg0) {
  return this.cmp(arg0) < 0;
};
obj.lt = fn12;
obj.lessThan = fn12;
const fn13 = function(arg0) {
  return this.cmp(arg0) < 1;
};
obj.lte = fn13;
obj.lessThanOrEqualTo = fn13;
const fn14 = function(arg0) {
  const self = this;
  let constructor = this.constructor;
  const precision = constructor.precision;
  const sum = precision + 5;
  if (undefined === arg0) {
    constructor = new constructor(10);
  } else {
    const constructor1 = new constructor(arg0);
    if (constructor1.s >= 1) {
      constructor = constructor1;
    }
    const _Error = Error;
    throw Error("[DecimalError] NaN");
  }
  if (self.s < 1) {
    let str2 = "-Infinity";
    if (self.s) {
      str2 = "NaN";
    }
    throw Error(c3 + str2);
  } else {
    if (self.eq(Decimal)) {
      let constructor2 = new constructor(0);
    } else {
      constructor2 = f111132(ln(self, sum), ln(constructor, sum), sum);
      c2 = true;
      round(constructor2, precision);
      const tmp14 = ln(self, sum);
    }
    return constructor2;
  }
};
obj.log = fn14;
obj.logarithm = fn14;
const fn15 = function(arg0) {
  const self = this;
  const constructor = new this.constructor(arg0);
  if (this.s == constructor.s) {
    let tmp3 = subtract(self, constructor);
  } else {
    constructor.s = -constructor.s;
    tmp3 = add(self, constructor);
  }
  return tmp3;
};
obj.sub = fn15;
obj.minus = fn15;
const fn16 = function(arg0) {
  const self = this;
  let constructor = this.constructor;
  constructor = new constructor(arg0);
  if (constructor.s) {
    if (self.s) {
      c2 = true;
      let minusResult = self.minus(f111132(self, tmp2, 0, 1).times(constructor));
      obj = f111132(self, tmp2, 0, 1);
    } else {
      const constructor1 = new constructor(self);
      minusResult = constructor1;
      round(constructor1, constructor.precision);
    }
    return minusResult;
  } else {
    const _Error = Error;
    throw Error("[DecimalError] NaN");
  }
};
obj.mod = fn16;
obj.modulo = fn16;
const fn17 = function() {
  return exp(this);
};
obj.exp = fn17;
obj.naturalExponential = fn17;
const fn18 = function() {
  return ln(this);
};
obj.ln = fn18;
obj.naturalLogarithm = fn18;
const fn19 = function() {
  const constructor = new this.constructor(this);
  constructor.s = -constructor.s || 0;
  return constructor;
};
obj.neg = fn19;
obj.negated = fn19;
const fn20 = function(arg0) {
  const self = this;
  const constructor = new this.constructor(arg0);
  if (this.s == constructor.s) {
    let tmp3 = add(self, constructor);
  } else {
    constructor.s = -constructor.s;
    tmp3 = subtract(self, constructor);
  }
  return tmp3;
};
obj.add = fn20;
obj.plus = fn20;
const fn21 = function(arg0) {
  let result2;
  if (undefined !== arg0) {
    if (arg0 !== arg0) {
      if (1 !== arg0) {
        if (0 !== arg0) {
          const _Error = Error;
          throw Error(c4 + arg0);
        }
      }
    }
  }
  const self = this;
  let result = 7 * this.e;
  let first = this.d[0];
  let tmp3 = result;
  if (first >= 10) {
    do {
      result = result + 1;
      first = first / 10;
      tmp3 = result;
    } while (10 <= first);
  }
  const diff = self.d.length - 1;
  const sum = 7 * diff + 1;
  let tmp6 = self.d[diff];
  let tmp7 = sum;
  if (tmp6) {
    let diff1 = sum;
    let tmp9 = sum;
    if (tmp6 % 10 === 0) {
      do {
        diff1 = diff1 - 1;
        let result1 = tmp6 / 10;
        tmp6 = result1;
        tmp9 = diff1;
        result2 = result1 % 10;
      } while (result2 === 0);
    }
    let first1 = self.d[0];
    let sum1 = tmp9;
    tmp7 = tmp9;
    if (first1 >= 10) {
      do {
        sum1 = sum1 + 1;
        first1 = first1 / 10;
        tmp7 = sum1;
      } while (10 <= first1);
    }
  }
  let tmp14 = tmp7;
  if (arg0) {
    const sum2 = tmp3 + 1;
    tmp14 = tmp7;
    if (tmp7 < sum2) {
      tmp14 = sum2;
    }
  }
  return tmp14;
};
obj.sd = fn21;
obj.precision = fn21;
const fn22 = function() {
  const self = this;
  let constructor = this.constructor;
  if (this.s < 1) {
    if (self.s) {
      const _Error = Error;
      throw Error("[DecimalError] NaN");
    } else {
      constructor = new constructor(0);
      return constructor;
    }
  } else {
    let result = 7 * self.e;
    let first = self.d[0];
    let num = result;
    if (first >= 10) {
      do {
        result = result + 1;
        first = first / 10;
        num = result;
      } while (10 <= first);
    }
    c2 = false;
    const _Math = Math;
    const str = Math.sqrt(+self);
    if (0 != str) {
      if (str != Infinity) {
        const constructor1 = new constructor(str.toString());
        num = 2;
        const sum = constructor.precision + 3;
      }
    }
    const arr = digitsToString(self.d);
    let text = arr;
    if ((arr.length + num) % 2 === 0) {
      text = `${arr}0`;
    }
    const _Math2 = Math;
    const sqrtResult = Math.sqrt(text);
    let result1 = num < 0;
    if (num >= 0) {
      result1 = num % 2;
    }
    const diff = floor((num + 1) / 2) - result1;
    if (sqrtResult == Infinity) {
      let text1 = `1e${tmp12}`;
    } else {
      const toExponentialResult = sqrtResult.toExponential();
      text1 = toExponentialResult.slice(0, toExponentialResult.indexOf("e") + 1) + diff;
    }
    const constructor2 = new constructor(text1);
    const tmp10 = floor((num + 1) / 2);
  }
};
obj.sqrt = fn22;
obj.squareRoot = fn22;
const fn23 = function(arg0) {
  let tmp12;
  let tmp25;
  const self = this;
  ({ constructor, d } = this);
  constructor = new constructor(arg0);
  d = constructor.d;
  if (this.s) {
    if (constructor.s) {
      constructor.s = constructor.s * self.s;
      const sum = self.e + constructor.e;
      let tmp4 = d;
      let tmp5 = d;
      let tmp6 = length2;
      let tmp7 = length;
      if (d.length < d.length) {
        tmp4 = d;
        tmp5 = d;
        tmp6 = length;
        tmp7 = length2;
      }
      const items = [];
      const sum1 = tmp7 + tmp6;
      let diff = tmp9 - 1;
      if (+sum1) {
        do {
          let arr = items.push(0);
          tmp12 = +diff;
          diff = tmp12 - 1;
        } while (tmp12);
      }
      let diff1 = tmp6 - 1;
      let tmp14;
      if (diff1 >= 0) {
        do {
          let sum2 = tmp7 + diff1;
          let num3 = 0;
          let num4 = 0;
          let tmp17 = sum2;
          if (sum2 > diff1) {
            do {
              let sum3 = items[sum2] + tmp4[diff1] * tmp5[sum2 - diff1 - 1] + num3;
              let tmp19 = +sum2;
              sum2 = tmp19 - 1;
              items[tmp19] = sum3 % c9 | 0;
              num3 = sum3 / c9 | 0;
              num4 = num3;
              tmp17 = sum2;
            } while (sum2 > diff1);
          }
          items[tmp17] = (items[tmp17] + num4) % c9 | 0;
          diff1 = diff1 - 1;
          tmp14 = num4;
        } while (diff1 >= 0);
      }
      let diff2 = sum1 - 1;
      if (!items[diff2]) {
        do {
          arr = items.pop();
          let diff3 = diff2 - 1;
          diff2 = diff3;
          tmp25 = items[diff3];
        } while (!tmp25);
      }
      if (tmp14) {
        let sum4 = sum + 1;
      } else {
        items.shift();
        sum4 = sum;
      }
      constructor.d = items;
      constructor.e = sum4;
      if (c2) {
        round(constructor, constructor.precision);
      }
      return constructor;
    }
  }
  const constructor1 = new constructor(0);
  return constructor1;
};
obj.mul = fn23;
obj.times = fn23;
const fn24 = function(arg0, arg1) {
  let constructor = this.constructor;
  constructor = new constructor(this);
  if (undefined !== arg0) {
    if (arg0 === ~~arg0) {
      if (arg0 >= 0) {
        if (arg0 <= 1000000000) {
          if (undefined === arg1) {
            let rounding = constructor.rounding;
          } else {
            if (arg1 === ~~arg1) {
              if (arg1 >= 0) {
                rounding = arg1;
              }
            }
            const _Error = Error;
            throw Error(c4 + arg1);
          }
          let result = 7 * constructor.e;
          let first = constructor.d[0];
          let tmp7 = result;
          if (first >= 10) {
            do {
              result = result + 1;
              first = first / 10;
              tmp7 = result;
            } while (10 <= first);
          }
          round(constructor, arg0 + tmp7 + 1, rounding);
        }
      }
    }
    const _Error2 = Error;
    throw Error(c4 + arg0);
  }
  return constructor;
};
obj.todp = fn24;
obj.toDecimalPlaces = fn24;
obj.toExponential = function(arg0, arg1) {
  const self = this;
  let constructor = this.constructor;
  if (undefined === arg0) {
    let tmp12 = toString(self, true);
  } else {
    if (arg0 === ~~arg0) {
      if (arg0 >= 0) {
        if (arg0 <= 1000000000) {
          if (undefined === arg1) {
            let rounding = constructor.rounding;
          } else {
            if (arg1 === ~~arg1) {
              if (arg1 >= 0) {
                rounding = arg1;
              }
            }
            const _Error = Error;
            throw Error(c4 + arg1);
          }
          constructor = new constructor(self);
          round(constructor, arg0 + 1, rounding);
          tmp12 = toString(constructor, true, arg0 + 1);
        }
      }
    }
    const _Error2 = Error;
    throw Error(c4 + arg0);
  }
  return tmp12;
};
obj.toFixed = function(arg0, arg1) {
  const self = this;
  let constructor = this.constructor;
  if (undefined === arg0) {
    let text = toString(self);
  } else {
    if (arg0 === ~~arg0) {
      if (arg0 >= 0) {
        if (arg0 <= 1000000000) {
          if (undefined === arg1) {
            let rounding = constructor.rounding;
          } else {
            if (arg1 === ~~arg1) {
              if (arg1 >= 0) {
                rounding = arg1;
              }
            }
            const _Error = Error;
            throw Error(c4 + arg1);
          }
          constructor = new constructor(self);
          let result = 7 * self.e;
          let first = self.d[0];
          let tmp10 = result;
          if (first >= 10) {
            do {
              result = result + 1;
              first = first / 10;
              tmp10 = result;
            } while (10 <= first);
          }
          round(constructor, arg0 + tmp10 + 1, rounding);
          let result1 = 7 * constructor.e;
          let first1 = constructor.d[0];
          let tmp16 = result1;
          if (first1 >= 10) {
            do {
              result1 = result1 + 1;
              first1 = first1 / 10;
              tmp16 = result1;
            } while (10 <= first1);
          }
          const tmp3Result = toString(constructor.abs(), false, arg0 + tmp16 + 1);
          text = tmp3Result;
          if (self.isneg()) {
            text = tmp3Result;
            if (!self.isZero()) {
              text = `-${tmp17}`;
            }
          }
          const absResult = constructor.abs();
        }
      }
    }
    const _Error2 = Error;
    throw Error(c4 + arg0);
  }
  return text;
};
const fn25 = function() {
  let constructor = this.constructor;
  constructor = new constructor(this);
  let result = 7 * this.e;
  let first = this.d[0];
  let tmp5 = result;
  if (first >= 10) {
    do {
      result = result + 1;
      first = first / 10;
      tmp5 = result;
    } while (10 <= first);
  }
  round(constructor, tmp5 + 1, constructor.rounding);
  return constructor;
};
obj.toint = fn25;
obj.toInteger = fn25;
obj.toNumber = function() {
  return +this;
};
const fn26 = function(arg0) {
  const self = this;
  let constructor = this.constructor;
  constructor = new constructor(arg0);
  if (constructor.s) {
    const constructor1 = new constructor(self);
    if (constructor1.s) {
      if (constructor1.eq(Decimal)) {
        return constructor1;
      } else {
        const precision = constructor.precision;
        if (constructor.eq(Decimal)) {
          round(constructor1, precision);
          return constructor1;
        } else {
          const e = constructor.e;
          let diff = constructor.d.length - 1;
          const s = constructor1.s;
          if (e >= diff) {
            let tmp15 = tmp;
            if (tmp < 0) {
              tmp15 = -tmp;
            }
            diff = tmp15;
            if (tmp15 <= 9007199254740991) {
              const constructor2 = new constructor(Decimal);
              const _Math2 = Math;
              const rounded = Math.ceil(precision / 7 + 4);
              c2 = false;
              let tmp26 = constructor2;
              if (tmp15 % 2) {
                const timesResult = constructor2.times(constructor1);
                const d = timesResult.d;
                tmp26 = timesResult;
                if (d.length > rounded) {
                  d.length = rounded;
                  tmp26 = timesResult;
                }
              }
              let tmp29 = floor(tmp15 / 2);
              let obj4 = tmp26;
              let obj5 = constructor1;
              let tmp30 = tmp26;
              if (0 !== tmp29) {
                do {
                  let timesResult1 = obj5.times(obj5);
                  let d1 = timesResult1.d;
                  if (d1.length > rounded) {
                    d1.length = rounded;
                  }
                  let tmp34 = obj4;
                  if (tmp29 % 2) {
                    let timesResult2 = obj4.times(timesResult1);
                    let d2 = timesResult2.d;
                    tmp34 = timesResult2;
                    if (d2.length > rounded) {
                      d2.length = rounded;
                      tmp34 = timesResult2;
                    }
                  }
                  tmp29 = floor(tmp29 / 2);
                  obj4 = tmp34;
                  obj5 = timesResult1;
                  tmp30 = tmp34;
                } while (0 !== tmp29);
              }
              c2 = true;
              if (constructor.s < 0) {
                const constructor3 = new constructor(Decimal);
                let divResult = constructor3.div(tmp30);
              } else {
                round(tmp30, precision);
                divResult = tmp30;
              }
              return divResult;
            }
          } else if (s < 0) {
            const _Error2 = Error;
            throw Error("[DecimalError] NaN");
          }
          let num5 = 1;
          if (s < 0) {
            const _Math = Math;
            num5 = 1;
            if (1 & constructor.d[Math.max(Math, e, diff)]) {
              num5 = -1;
            }
          }
          constructor1.s = 1;
          c2 = true;
          const tmp19 = exp(constructor.times(ln(constructor1, precision + 12)));
          tmp19.s = num5;
          return tmp19;
        }
      }
    } else if (constructor.s < 1) {
      const _Error = Error;
      throw Error("[DecimalError] Infinity");
    } else {
      return constructor1;
    }
  } else {
    const constructor4 = new constructor(Decimal);
    return constructor4;
  }
};
obj.pow = fn26;
obj.toPower = fn26;
obj.toPrecision = function(arg0, arg1) {
  const self = this;
  let constructor = this.constructor;
  if (undefined === arg0) {
    let result = 7 * self.e;
    let first = self.d[0];
    let tmp21 = result;
    if (first >= 10) {
      do {
        result = result + 1;
        first = first / 10;
        tmp21 = result;
      } while (10 <= first);
    }
    let tmp3Result = toString(self, tmp21 <= constructor.toExpNeg || tmp21 >= constructor.toExpPos);
    const tmp22 = tmp21 <= constructor.toExpNeg || tmp21 >= constructor.toExpPos;
  } else {
    if (arg0 === ~~arg0) {
      if (arg0 >= 1) {
        if (arg0 <= 1000000000) {
          if (undefined === arg1) {
            let rounding = constructor.rounding;
          } else {
            if (arg1 === ~~arg1) {
              if (arg1 >= 0) {
                rounding = arg1;
              }
            }
            const _Error = Error;
            throw Error(c4 + arg1);
          }
          constructor = new constructor(self);
          round(constructor, arg0, rounding);
          let result1 = 7 * constructor.e;
          let first1 = constructor.d[0];
          let tmp13 = result1;
          if (first1 >= 10) {
            do {
              result1 = result1 + 1;
              first1 = first1 / 10;
              tmp13 = result1;
            } while (10 <= first1);
          }
          tmp3Result = toString(constructor, arg0 <= tmp13 || tmp13 <= constructor.toExpNeg, arg0);
          const tmp14 = arg0 <= tmp13 || tmp13 <= constructor.toExpNeg;
        }
      }
    }
    const _Error2 = Error;
    throw Error(c4 + arg0);
  }
  return tmp3Result;
};
const fn27 = function(arg0, arg1) {
  const self = this;
  let constructor = this.constructor;
  if (undefined === arg0) {
    ({ precision, rounding } = constructor);
  } else {
    if (arg0 === ~~arg0) {
      if (arg0 >= 1) {
        if (arg0 <= 1000000000) {
          if (undefined === arg1) {
            rounding = constructor.rounding;
            precision = arg0;
          } else {
            if (arg1 === ~~arg1) {
              if (arg1 >= 0) {
                precision = arg0;
                rounding = arg1;
              }
            }
            const _Error = Error;
            throw Error(c4 + arg1);
          }
        }
      }
    }
    const _Error2 = Error;
    throw Error(c4 + arg0);
  }
  constructor = new constructor(self);
  round(constructor, precision, rounding);
  return constructor;
};
obj.tosd = fn27;
obj.toSignificantDigits = fn27;
const fn28 = function() {
  const self = this;
  let result = 7 * this.e;
  let first = this.d[0];
  let tmp3 = result;
  if (first >= 10) {
    do {
      result = result + 1;
      first = first / 10;
      tmp3 = result;
    } while (10 <= first);
  }
  const constructor = self.constructor;
  let tmp5 = tmp3 <= constructor.toExpNeg;
  if (!tmp5) {
    tmp5 = tmp3 >= constructor.toExpPos;
  }
  return toString(self, tmp5);
};
obj.toJSON = fn28;
obj.val = fn28;
obj.valueOf = fn28;
obj.toString = fn28;
const f111132 = (s, s2, arg2, arg3) => {
  let num7;
  let sum;
  let tmp26;
  let tmp33;
  let constructor = s.constructor;
  let num = -1;
  if (s.s == s2.s) {
    num = 1;
  }
  const d = s.d;
  const d1 = s2.d;
  if (s.s) {
    if (s2.s) {
      const diff = s.e - s2.e;
      let length = d1.length;
      constructor = new constructor(num);
      const items = [];
      constructor.d = items;
      let num2 = d[0];
      if (!num2) {
        num2 = 0;
      }
      let num5 = 0;
      let num6 = 0;
      if (d1[0] == num2) {
        do {
          sum = num5 + 1;
          num7 = d[sum];
          if (!num7) {
            num7 = 0;
          }
          num5 = sum;
          num6 = sum;
        } while (d1[sum] == num7);
      }
      let num8 = d[num6];
      if (!num8) {
        num8 = 0;
      }
      let diff1 = diff;
      if (d1[num6] > num8) {
        diff1 = diff - 1;
      }
      if (null == arg2) {
        let precision = constructor.precision;
      } else {
        precision = tmp15;
        if (arg3) {
          let result = 7 * s.e;
          let first = s.d[0];
          let tmp20 = result;
          if (first >= 10) {
            do {
              result = result + 1;
              first = first / 10;
              tmp20 = result;
            } while (10 <= first);
          }
          let result1 = 7 * s2.e;
          let first1 = s2.d[0];
          let tmp23 = result1;
          if (first1 >= 10) {
            do {
              result1 = result1 + 1;
              first1 = first1 / 10;
              tmp23 = result1;
            } while (10 <= first1);
          }
          precision = tmp15 + (tmp20 - tmp23) + 1;
        }
      }
      if (precision < 0) {
        const constructor1 = new constructor(0);
        return constructor1;
      } else {
        if (1 == length) {
          const first2 = d1[0];
          if (0 < length2) {
            const sum1 = tmp122 + 1;
            let diff2 = sum1 - 1;
            let num39 = 0;
            let num40 = 0;
            if (sum1) {
              while (true) {
                let num41 = d[num40];
                let tmp105 = diff2;
                if (!num41) {
                  num41 = 0;
                }
                let sum2 = num39 * c9 + num41;
                items[num40] = sum2 / first2 | 0;
                let tmp109 = sum2 % first2 | 0;
                let sum3 = num40 + 1;
                if (sum3 < length2) {
                  diff2 = diff2 - 1;
                  num39 = tmp109;
                  num40 = sum3;
                  if (!tmp105) {
                    break;
                  }
                } else if (!tmp109) {
                  break;
                }
                break;
              }
            }
          }
        } else {
          let arr4 = d1;
          let arr5 = d;
          let length3 = length2;
          if (1 < (c9 / (d1[0] + 1) | 0)) {
            const substr = d1.slice();
            let diff3 = tmp125 - 1;
            let num11 = 0;
            let num12 = 0;
            if (+d1.length) {
              do {
                let sum4 = substr[diff3] * tmp124 + num11;
                substr[diff3] = sum4 % c9 | 0;
                num11 = sum4 / c9 | 0;
                tmp26 = +diff3;
                diff3 = tmp26 - 1;
                num12 = num11;
              } while (tmp26);
            }
            if (num12) {
              substr.unshift(num12);
            }
            const substr1 = d.slice();
            let diff4 = tmp29 - 1;
            let num13 = 0;
            let num14 = 0;
            if (+d.length) {
              do {
                let sum5 = substr1[diff4] * tmp124 + num13;
                substr1[diff4] = sum5 % c9 | 0;
                num13 = sum5 / c9 | 0;
                tmp33 = +diff4;
                diff4 = tmp33 - 1;
                num14 = num13;
              } while (tmp33);
            }
            if (num14) {
              substr1.unshift(num14);
            }
            length = substr.length;
            length3 = substr1.length;
            arr4 = substr;
            arr5 = substr1;
          }
          const substr2 = arr5.slice(0, length);
          let sum6 = length4;
          let tmp38 = length4;
          if (substr2.length < length) {
            do {
              let tmp39 = +sum6;
              sum6 = tmp39 + 1;
              substr2[tmp39] = 0;
              tmp38 = sum6;
            } while (sum6 < length);
          }
          const substr3 = arr4.slice();
          substr3.unshift(0);
          const first3 = arr4[0];
          let sum7 = first3;
          let sum13 = length;
          let diff10 = tmp122;
          let tmp45 = tmp38;
          let arr9 = substr2;
          let num17 = 0;
          if (arr4[1] >= 5000000) {
            sum7 = first3 + 1;
            sum13 = length;
            diff10 = tmp122;
            tmp45 = tmp38;
            arr9 = substr2;
            num17 = 0;
          }
          while (true) {
            let tmp49 = tmp45;
            if (length != tmp45) {
              let num21 = -1;
              if (length > tmp49) {
                num21 = 1;
              }
              let num19 = num21;
            } else {
              let num18 = 0;
              num19 = 0;
              if (0 < length) {
                while (arr4[num18] == arr9[num18]) {
                  let sum8 = num18 + 1;
                  num18 = sum8;
                  num19 = 0;
                }
                let num20 = -1;
                if (arr4[num18] > arr9[num18]) {
                  num20 = 1;
                }
                num19 = num20;
              }
            }
            if (num19 < 0) {
              let first4 = arr9[0];
              let sum9 = first4;
              if (length != tmp49) {
                let num23 = arr9[1];
                let result2 = first4 * c9;
                if (!num23) {
                  num23 = 0;
                }
                sum9 = result2 + num23;
              }
              let num24 = sum9 / sum7 | 0;
              if (1 < num24) {
                if (num24 >= c9) {
                  num24 = 9999999;
                }
                let substr4 = arr4.slice();
                let tmp60 = +arr4.length;
                let diff5 = tmp60 - 1;
                let num26 = 0;
                let num27 = 0;
                if (tmp60) {
                  do {
                    let sum10 = substr4[diff5] * num24 + num26;
                    substr4[diff5] = sum10 % c9 | 0;
                    num26 = sum10 / c9 | 0;
                    tmp64 = +diff5;
                    diff5 = tmp64 - 1;
                    num27 = num26;
                  } while (tmp64);
                }
                if (num27) {
                  let arr2 = substr4.unshift(num27);
                }
                let length6 = substr4.length;
                let length7 = arr9.length;
                if (length6 != length7) {
                  let num31 = -1;
                  if (length6 > length7) {
                    num31 = 1;
                  }
                  let num29 = num31;
                } else {
                  let num28 = 0;
                  num29 = 0;
                  if (0 < length6) {
                    while (substr4[num28] == arr9[num28]) {
                      let sum11 = num28 + 1;
                      num28 = sum11;
                      num29 = 0;
                    }
                    let num30 = -1;
                    if (substr4[num28] > arr9[num28]) {
                      num30 = 1;
                    }
                    num29 = num30;
                  }
                }
                tmp49 = length7;
                let substr5 = substr4;
                let num25 = num24;
                num19 = num29;
                if (1 === num29) {
                  let tmp68 = arr4;
                  if (length < length6) {
                    tmp68 = substr3;
                  }
                  let tmp69 = +length6;
                  let diff6 = tmp69 - 1;
                  let num32 = 0;
                  if (tmp69) {
                    do {
                      substr4[diff6] = substr4[diff6] - num32;
                      let num33 = 0;
                      if (substr4[diff6] < tmp68[diff6]) {
                        num33 = 1;
                      }
                      substr4[diff6] = num33 * c9 + substr4[diff6] - tmp68[diff6];
                      tmp73 = +diff6;
                      diff6 = tmp73 - 1;
                      num32 = num33;
                    } while (tmp73);
                  }
                  let diff7 = num24 - 1;
                  tmp49 = length7;
                  substr5 = substr4;
                  num25 = diff7;
                  num19 = num29;
                  if (!substr4[0]) {
                    tmp49 = length7;
                    substr5 = substr4;
                    num25 = diff7;
                    num19 = num29;
                    if (substr4.length > 1) {
                      let arr3 = substr4.shift();
                      tmp49 = length7;
                      substr5 = substr4;
                      num25 = diff7;
                      num19 = num29;
                      while (!substr4[0]) {
                        tmp49 = length7;
                        substr5 = substr4;
                        num25 = diff7;
                        num19 = num29;
                        if (substr4.length <= 1) {
                          break;
                        }
                      }
                    }
                  }
                }
              } else {
                num25 = num24;
                if (0 === num24) {
                  num25 = 1;
                  num19 = 1;
                }
                substr5 = arr4.slice();
              }
              if (substr5.length < tmp49) {
                arr4 = substr5.unshift(0);
              }
              let tmp77 = +tmp49;
              let diff8 = tmp77 - 1;
              let num34 = 0;
              if (tmp77) {
                do {
                  arr9[diff8] = arr9[diff8] - num34;
                  num29 = 0;
                  if (arr9[diff8] < substr5[diff8]) {
                    num29 = 1;
                  }
                  arr9[diff8] = num29 * c9 + arr9[diff8] - substr5[diff8];
                  tmp81 = +diff8;
                  diff8 = tmp81 - 1;
                  num34 = num29;
                } while (tmp81);
              }
              if (!arr9[0]) {
                if (arr9.length > 1) {
                  arr5 = arr9.shift();
                  while (!arr9[0]) {
                    if (arr9.length <= 1) {
                      break;
                    }
                  }
                }
              }
              if (-1 === num19) {
                break;
              } else {
                let tmp89 = num25;
                if (tmp83) {
                  let tmp90 = arr4;
                  if (length < tmp49) {
                    tmp90 = substr3;
                  }
                  let tmp91 = +tmp49;
                  let diff9 = tmp91 - 1;
                  num29 = 0;
                  if (tmp91) {
                    do {
                      arr9[diff9] = arr9[diff9] - num29;
                      let num37 = 0;
                      if (arr9[diff9] < tmp90[diff9]) {
                        num37 = 1;
                      }
                      arr9[diff9] = num37 * c9 + arr9[diff9] - tmp90[diff9];
                      tmp95 = +diff9;
                      diff9 = tmp95 - 1;
                      num29 = num37;
                    } while (tmp95);
                  }
                  let sum12 = num25 + 1;
                  tmp89 = sum12;
                  if (!arr9[0]) {
                    tmp89 = sum12;
                    if (arr9.length > 1) {
                      let arr6 = arr9.shift();
                      tmp89 = sum12;
                      while (!arr9[0]) {
                        tmp89 = sum12;
                        if (arr9.length <= 1) {
                          break;
                        }
                      }
                    }
                  }
                }
                let length5 = arr9.length;
                let num22 = tmp89;
                let items1 = arr9;
                let tmp54 = num19;
              }
            } else {
              length5 = tmp49;
              items1 = arr9;
              num22 = 0;
              tmp54 = num19;
              if (0 === num19) {
                items1 = [0];
                length5 = tmp49;
                num22 = 1;
                tmp54 = num19;
              }
            }
            items[num17] = num22;
            if (tmp54) {
              if (items1[0]) {
                let tmp98 = +length5;
                let tmp99 = arr5[sum13] || 0;
                let num38 = tmp98 + 1;
                items1[tmp98] = tmp99;
                let items2 = items1;
                let tmp100 = +sum13;
                if (tmp100 < length3) {
                  num17 = num17 + 1;
                  sum13 = tmp100 + 1;
                  diff10 = diff10 - 1;
                  tmp45 = num38;
                  arr9 = items2;
                }
              }
            }
            items2 = [arr5[sum13]];
            num38 = 1;
          }
          if (length != arr9.length) {
            num29 = -1;
            if (length > length8) {
              num29 = 1;
            }
          } else {
            let num35 = 0;
            if (0 < length) {
              num29 = num35;
              while (arr4[num35] == arr9[num35]) {
                let sum14 = num29 + 1;
                num35 = sum14;
              }
            }
            num29 = -1;
            if (tmp85) {
              num29 = 1;
            }
            tmp85 = arr4[num29] > arr9[num29];
          }
        }
        if (!items[0]) {
          items.shift();
        }
        constructor.e = diff1;
        let sum15 = tmp15;
        if (arg3) {
          let result3 = 7 * constructor.e;
          let first5 = constructor.d[0];
          let tmp116 = result3;
          if (first5 >= 10) {
            do {
              result3 = result3 + 1;
              first5 = first5 / 10;
              tmp116 = result3;
            } while (10 <= first5);
          }
          sum15 = tmp15 + tmp116 + 1;
        }
        round(constructor, sum15);
        return constructor;
      }
    } else {
      const _Error = Error;
      throw Error("[DecimalError] Division by zero");
    }
  } else {
    const constructor2 = new constructor(s);
    return constructor2;
  }
};
function clone(arg0) {
  obj = arg0;
  class Decimal {
    constructor(arg0) {
      self = this;
      tmp = Decimal;
      if (this instanceof Decimal) {
        self.constructor = tmp;
        if (arg0 instanceof tmp) {
          ({ s: self.s, e: self.e, d } = arg0);
          substr = d;
          if (d) {
            substr = d.slice();
          }
          self.d = substr;
          return;
        } else if (typeof arg0 === "number") {
          num4 = 0;
          {
            if (arg0 > 0) {
              num6 = 1;
              self.s = 1;
              str = arg0;
            } else if (arg0 < 0) {
              str = -arg0;
              num5 = -1;
              self.s = -1;
            } else {
              self.s = 0;
              self.e = 0;
              self.d = [0];
              return;
            }
            if (str === ~~str) {
              num7 = 10000000;
              if (str < 10000000) {
                self.e = 0;
                items = [];
                items[0] = str;
                self.d = items;
              }
              return tmp14;
            }
            tmp12 = parseDecimal;
            tmp13 = parseDecimal(self, str.toString());
            tmp14 = self;
          }
        } else if (typeof arg0 !== "string") {
          tmp10 = globalThis;
          _Error2 = Error;
          tmp11 = c4;
          throw Error(c4 + arg0);
        } else {
          num8 = 0;
          num9 = 45;
          if (45 === arg0.charCodeAt(0)) {
            num2 = 1;
            substr1 = arg0.slice(1);
            num3 = -1;
            self.s = -1;
          } else {
            num = 1;
            self.s = 1;
            substr1 = arg0;
          }
          tmp5 = re8;
          if (re8.test(substr1)) {
            tmp8 = parseDecimal;
            tmp9 = parseDecimal(self, substr1);
            return;
          } else {
            tmp6 = globalThis;
            _Error = Error;
            tmp7 = c4;
            throw Error(c4 + substr1);
          }
        }
      } else {
        tmpResult = tmp(arg0);
        tmp3 = tmpResult;
        return tmpResult;
      }
      return;
    }
  }
  Decimal.prototype = obj;
  Decimal.ROUND_UP = 0;
  Decimal.ROUND_DOWN = 1;
  Decimal.ROUND_CEIL = 2;
  Decimal.ROUND_FLOOR = 3;
  Decimal.ROUND_HALF_UP = 4;
  Decimal.ROUND_HALF_DOWN = 5;
  Decimal.ROUND_HALF_EVEN = 6;
  Decimal.ROUND_HALF_CEIL = 7;
  Decimal.ROUND_HALF_FLOOR = 8;
  Decimal.clone = clone;
  Decimal.set = config;
  Decimal.config = config;
  if (undefined === arg0) {
    obj = {};
  }
  if (obj) {
    let items = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"];
    class Decimal {
      constructor(arg0) {
        self = this;
        tmp = Decimal;
        if (this instanceof Decimal) {
          self.constructor = tmp;
          if (arg0 instanceof tmp) {
            ({ s: self.s, e: self.e, d } = arg0);
            substr = d;
            if (d) {
              substr = d.slice();
            }
            self.d = substr;
            return;
          } else if (typeof arg0 === "number") {
            num4 = 0;
            {
              if (arg0 > 0) {
                num6 = 1;
                self.s = 1;
                str = arg0;
              } else if (arg0 < 0) {
                str = -arg0;
                num5 = -1;
                self.s = -1;
              } else {
                self.s = 0;
                self.e = 0;
                self.d = [0];
                return;
              }
              if (str === ~~str) {
                num7 = 10000000;
                if (str < 10000000) {
                  self.e = 0;
                  items = [];
                  items[0] = str;
                  self.d = items;
                }
                return tmp14;
              }
              tmp12 = parseDecimal;
              tmp13 = parseDecimal(self, str.toString());
              tmp14 = self;
            }
          } else if (typeof arg0 !== "string") {
            tmp10 = globalThis;
            _Error2 = Error;
            tmp11 = c4;
            throw Error(c4 + arg0);
          } else {
            num8 = 0;
            num9 = 45;
            if (45 === arg0.charCodeAt(0)) {
              num2 = 1;
              substr1 = arg0.slice(1);
              num3 = -1;
              self.s = -1;
            } else {
              num = 1;
              self.s = 1;
              substr1 = arg0;
            }
            tmp5 = re8;
            if (re8.test(substr1)) {
              tmp8 = parseDecimal;
              tmp9 = parseDecimal(self, substr1);
              return;
            } else {
              tmp6 = globalThis;
              _Error = Error;
              tmp7 = c4;
              throw Error(c4 + substr1);
            }
          }
        } else {
          tmpResult = tmp(arg0);
          tmp3 = tmpResult;
          return tmpResult;
        }
        return;
      }
    }
    if (0 < items.length) {
      class Decimal {
        constructor(arg0) {
          self = this;
          tmp = Decimal;
          if (this instanceof Decimal) {
            self.constructor = tmp;
            if (arg0 instanceof tmp) {
              ({ s: self.s, e: self.e, d } = arg0);
              substr = d;
              if (d) {
                substr = d.slice();
              }
              self.d = substr;
              return;
            } else if (typeof arg0 === "number") {
              num4 = 0;
              {
                if (arg0 > 0) {
                  num6 = 1;
                  self.s = 1;
                  str = arg0;
                } else if (arg0 < 0) {
                  str = -arg0;
                  num5 = -1;
                  self.s = -1;
                } else {
                  self.s = 0;
                  self.e = 0;
                  self.d = [0];
                  return;
                }
                if (str === ~~str) {
                  num7 = 10000000;
                  if (str < 10000000) {
                    self.e = 0;
                    items = [];
                    items[0] = str;
                    self.d = items;
                  }
                  return tmp14;
                }
                tmp12 = parseDecimal;
                tmp13 = parseDecimal(self, str.toString());
                tmp14 = self;
              }
            } else if (typeof arg0 !== "string") {
              tmp10 = globalThis;
              _Error2 = Error;
              tmp11 = c4;
              throw Error(c4 + arg0);
            } else {
              num8 = 0;
              num9 = 45;
              if (45 === arg0.charCodeAt(0)) {
                num2 = 1;
                substr1 = arg0.slice(1);
                num3 = -1;
                self.s = -1;
              } else {
                num = 1;
                self.s = 1;
                substr1 = arg0;
              }
              tmp5 = re8;
              if (re8.test(substr1)) {
                tmp8 = parseDecimal;
                tmp9 = parseDecimal(self, substr1);
                return;
              } else {
                tmp6 = globalThis;
                _Error = Error;
                tmp7 = c4;
                throw Error(c4 + substr1);
              }
            }
          } else {
            tmpResult = tmp(arg0);
            tmp3 = tmpResult;
            return tmpResult;
          }
          return;
        }
      }
    }
  }
  Decimal.config(obj);
  return Decimal;
}
class Decimal {
  constructor(arg0) {
    self = this;
    tmp = Decimal;
    if (this instanceof Decimal) {
      self.constructor = tmp;
      if (global instanceof tmp) {
        ({ s: self.s, e: self.e, d } = global);
        substr = d;
        if (d) {
          substr = d.slice();
        }
        self.d = substr;
        return;
      } else if (typeof global === "number") {
        num4 = 0;
        {
          if (global > 0) {
            num6 = 1;
            self.s = 1;
            str = global;
          } else if (global < 0) {
            str = -global;
            num5 = -1;
            self.s = -1;
          } else {
            self.s = 0;
            self.e = 0;
            self.d = [0];
            return;
          }
          if (str === ~~str) {
            num7 = 10000000;
            if (str < 10000000) {
              self.e = 0;
              items = [];
              items[0] = str;
              self.d = items;
            }
            return tmp14;
          }
          tmp12 = parseDecimal;
          tmp13 = parseDecimal(self, str.toString());
          tmp14 = self;
        }
      } else if (typeof global !== "string") {
        tmp10 = globalThis;
        _Error2 = Error;
        tmp11 = c4;
        throw Error(c4 + global);
      } else {
        num8 = 0;
        num9 = 45;
        if (45 === global.charCodeAt(0)) {
          num2 = 1;
          substr1 = global.slice(1);
          num3 = -1;
          self.s = -1;
        } else {
          num = 1;
          self.s = 1;
          substr1 = global;
        }
        tmp5 = re8;
        if (re8.test(substr1)) {
          tmp8 = parseDecimal;
          tmp9 = parseDecimal(self, substr1);
          return;
        } else {
          tmp6 = globalThis;
          _Error = Error;
          tmp7 = c4;
          throw Error(c4 + substr1);
        }
      }
    } else {
      tmpResult = tmp(global);
      tmp3 = tmpResult;
      return tmpResult;
    }
    return;
  }
}
Decimal.prototype = obj;
let num = 0;
Decimal.ROUND_UP = 0;
Decimal.ROUND_DOWN = 1;
Decimal.ROUND_CEIL = 2;
Decimal.ROUND_FLOOR = 3;
Decimal.ROUND_HALF_UP = 4;
Decimal.ROUND_HALF_DOWN = 5;
Decimal.ROUND_HALF_EVEN = 6;
Decimal.ROUND_HALF_CEIL = 7;
Decimal.ROUND_HALF_FLOOR = 8;
Decimal.clone = clone;
Decimal.set = config;
Decimal.config = config;
let items = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"];
if (0 < items.length) {
  do {
    let tmp = items[num];
    if (!obj.hasOwnProperty(tmp)) {
      obj[tmp] = undefined[tmp];
    }
    num = num + 1;
  } while (num < items.length);
}
Decimal.config(obj);
Decimal.Decimal = Decimal;
Decimal.default = Decimal;
Decimal = Decimal(1);
if (typeof globalThis.define === "function") {
  if (globalThis.define.amd) {
    globalThis.define(() => Decimal);
  }
}
if (undefined !== module) {
  if (module.exports) {
    module.exports = Decimal;
  }
}
this.Decimal = Decimal;