// === Module 6738: ? ===

// Module 6738
let fn;
let fn10;
let fn11;
let fn12;
let fn13;
let fn14;
let fn15;
let fn16;
let fn17;
let fn18;
let fn19;
let fn2;
let fn20;
let fn21;
let fn22;
let fn23;
let fn24;
let fn25;
let fn26;
let fn27;
let fn28;
let fn3;
let fn4;
let fn5;
let fn6;
let fn7;
let fn8;
let fn9;
function add(s, s2) {
  let diff2;
  let tmp16;
  let tmp27;
  const constructor = s.constructor;
  const precision = constructor.precision;
  if (s.s) {
    if (s2.s) {
      const d = s.d;
      const d1 = s2.d;
      let e = s.e;
      const e2 = s2.e;
      const substr = d.slice();
      const diff = e - e2;
      let tmp7 = e2;
      if (diff) {
        let tmp8;
        let length;
        let arr4;
        let sum;
        if (diff < 0) {
          tmp8 = -diff;
          length = d1.length;
          e = e2;
          arr4 = substr;
        } else {
          length = substr.length;
          tmp8 = diff;
          arr4 = d1;
        }
        const _Math = Math;
        const rounded = Math.ceil(precision / 7);
        if (rounded > length) {
          sum = rounded + 1;
        } else {
          sum = length + 1;
        }
        if (tmp8 > sum) {
          arr4.length = 1;
          tmp8 = sum;
        }
        const reversed = arr4.reverse();
        let diff1 = tmp13 - 1;
        if (+tmp8) {
          do {
            let arr = arr4.push(0);
            tmp16 = +diff1;
            diff1 = tmp16 - 1;
          } while (tmp16);
        }
        const reversed1 = arr4.reverse();
        tmp7 = e;
      }
      let length3 = d1.length;
      let tmp18 = d1;
      let arr5 = substr;
      if (substr.length - length3 < 0) {
        tmp18 = substr;
        arr5 = d1;
        length3 = length2;
      }
      let num7 = 0;
      let num8 = 0;
      if (length3) {
        do {
          diff2 = length3 - 1;
          let sum1 = arr5[diff2] + tmp18[diff2] + num7;
          arr5[diff2] = sum1;
          num7 = sum1 / c9 | 0;
          arr5[diff2] = arr5[diff2] % c9;
          num8 = num7;
          length3 = diff2;
        } while (diff2);
      }
      let sum2 = tmp7;
      if (num8) {
        arr5.unshift(num8);
        sum2 = tmp7 + 1;
      }
      let diff3 = arr5.length - 1;
      if (0 == arr5[diff3]) {
        do {
          let arr3 = arr5.pop();
          let diff4 = diff3 - 1;
          diff3 = diff4;
          tmp27 = arr5[diff4];
        } while (0 == tmp27);
      }
      s2.d = arr5;
      s2.e = sum2;
      if (c2) {
        round(s2, precision);
      }
      return s2;
    }
  }
  let constructor1 = s2;
  if (!s2.s) {
    const self = this;
    const self2 = this;
    constructor1 = new constructor(s);
  }
  if (c2) {
    round(constructor1, precision);
  }
  return constructor1;
}
function digitsToString(arg0) {
  let result1;
  let str;
  let tmp12;
  let tmp16;
  let tmp3;
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
    const diff3 = 7 - ("" + tmp13).length;
    tmp3 = tmp13;
    str = tmp5;
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
function exp(constructor1, arg1) {
  let gteResult;
  let substr;
  let substr1;
  let tmp19;
  let tmp29;
  let tmp35;
  const constructor = constructor1.constructor;
  const precision = constructor.precision;
  let result = 7 * constructor1.e;
  let first = constructor1.d[0];
  let tmp3 = result;
  if (first >= 10) {
    do {
      result = result + 1;
      first = first / 10;
      tmp3 = result;
    } while (10 <= first);
  }
  if (16 < tmp3) {
    let result1 = 7 * constructor1.e;
    let first1 = constructor1.d[0];
    let tmp41 = result1;
    const _Error = Error;
    if (first1 >= 10) {
      do {
        result1 = result1 + 1;
        first1 = first1 / 10;
        tmp41 = result1;
      } while (10 <= first1);
    }
    throw _Error(c5 + tmp41);
  } else if (constructor1.s) {
    let tmp9;
    if (null == undefined) {
      c2 = false;
      tmp9 = precision;
    }
    const self3 = this;
    const self4 = this;
    constructor1 = new constructor(0.03125);
    let num5 = 0;
    obj2 = constructor1;
    let num6 = 0;
    let tmp12 = constructor1;
    const absResult = constructor1.abs();
    if (absResult.gte(0.1)) {
      do {
        let timesResult = obj2.times(constructor1);
        num5 = num5 + 5;
        let absResult1 = timesResult.abs();
        obj2 = timesResult;
        num6 = num5;
        tmp12 = timesResult;
        gteResult = absResult1.gte(0.1);
      } while (gteResult);
    }
    const _Math = Math;
    const _Math2 = Math;
    const sum = tmp9 + (Math.log(pow(2, num6)) / Math.LN10 * 2 + 5 | 0);
    const self5 = this;
    const self6 = this;
    const constructor2 = new constructor(_window);
    let obj5 = constructor2;
    constructor.precision = sum;
    let num8 = 0;
    let obj6 = constructor2;
    let obj7 = constructor2;
    do {
      tmp19 = round;
      let timesResult1 = obj6.times(tmp12);
      let tmp21 = round(timesResult1, sum);
      let sum1 = num8 + 1;
      let timesResult2 = obj7.times(sum1);
      let plusResult = obj5.plus(f137659(timesResult1, timesResult2, sum));
      let arr = digitsToString(plusResult.d);
      substr = arr.slice(0, sum);
      let arr2 = digitsToString(obj5.d);
      tmp29 = obj5;
      num8 = sum1;
      obj5 = plusResult;
      obj6 = timesResult1;
      obj7 = timesResult2;
      substr1 = arr2.slice(0, sum);
    } while (substr !== substr1);
    let diff = num6 - 1;
    let obj8 = tmp29;
    let tmp31 = tmp29;
    if (num6) {
      do {
        let timesResult3 = obj8.times(obj8);
        let tmp34 = round(timesResult3, sum);
        tmp35 = diff;
        diff = diff - 1;
        obj8 = timesResult3;
        tmp31 = timesResult3;
        tmp19 = round;
      } while (tmp35);
    }
    constructor.precision = precision;
    let tmp19Result = tmp31;
    if (null == undefined) {
      c2 = true;
      tmp19Result = tmp19(tmp31, precision);
    }
    return tmp19Result;
  } else {
    const self = this;
    const self2 = this;
    const constructor3 = new constructor(_window);
    return constructor3;
  }
}
function ln(s, arg1) {
  const constructor = s.constructor;
  const precision = constructor.precision;
  if (s.s < 1) {
    let str8 = "-Infinity";
    const _Error4 = Error;
    if (s.s) {
      str8 = "NaN";
    }
    throw _Error4(c3 + str8);
  } else if (s.eq(_window)) {
    const self13 = this;
    const self14 = this;
    const constructor1 = new constructor(0);
    return constructor1;
  } else {
    let tmp2 = arg1;
    if (null == arg1) {
      c2 = false;
      tmp2 = precision;
    }
    if (s.eq(10)) {
      if (null == arg1) {
        c2 = true;
      }
      const LN102 = constructor.LN10;
      if (tmp2 > LN102.sd()) {
        c2 = true;
        const _Error3 = Error;
        throw Error("[DecimalError] LN10 precision limit exceeded");
      } else {
        const self11 = this;
        const self12 = this;
        const constructor2 = new constructor(constructor.LN10);
        round(constructor2, tmp2);
        return constructor2;
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
          result = result + 1;
          first = first / 10;
          tmp10 = result;
        } while (10 <= first);
      }
      const _Math = Math;
      if (Math.abs(tmp10) < 1500000000000000) {
        let obj;
        let num5;
        let tmp13;
        let num6;
        let tmp14;
        let arr;
        if (charAtResult >= 7) {
          let constructor3;
          let sum1;
          tmp13 = s;
          num6 = 1;
          tmp14 = charAtResult;
          arr = str;
          if (1 == charAtResult) {
            obj = s;
            num5 = 1;
            tmp13 = s;
            num6 = 1;
            tmp14 = charAtResult;
            arr = str;
          }
          let result1 = 7 * tmp13.e;
          let first1 = tmp13.d[0];
          let tmp21 = result1;
          if (first1 >= 10) {
            do {
              result1 = result1 + 1;
              first1 = first1 / 10;
              tmp21 = result1;
            } while (10 <= first1);
          }
          if (tmp14 > 1) {
            const self3 = this;
            const self4 = this;
            constructor3 = new constructor("0." + arr);
            sum1 = tmp21 + 1;
          } else {
            const text = `${tmp14}.`;
            const self = this;
            const self2 = this;
            constructor3 = new constructor(`${tmp14}.` + arr.slice(1));
            sum1 = tmp21;
          }
          const minusResult = constructor3.minus(_window);
          const obj3 = f137659(minusResult, constructor3.plus(_window), sum);
          const timesResult = obj3.times(obj3);
          round(timesResult, sum);
          let num9 = 3;
          let obj4 = obj3;
          let obj5 = obj3;
          const timesResult1 = obj5.times(timesResult);
          round(timesResult1, sum);
          const self5 = this;
          const self6 = this;
          const plus = obj4.plus;
          const constructor4 = new constructor(num9);
          const plusResult = plus(f137659(timesResult1, constructor4, sum));
          const arr2 = digitsToString(plusResult.d);
          const substr = arr2.slice(0, sum);
          const arr3 = digitsToString(obj4.d);
          while (substr !== arr3.slice(0, sum)) {
            num9 = num9 + 2;
            obj4 = plusResult;
            obj5 = timesResult1;
            continue;
          }
          const timesResult2 = obj4.times(2);
          let plus2Result = timesResult2;
          if (0 !== sum1) {
            const sum2 = sum + 2;
            const LN10 = constructor.LN10;
            const plus2 = timesResult2.plus;
            if (sum2 > LN10.sd()) {
              c2 = true;
              if (precision) {
                constructor.precision = precision;
              }
              const _Error2 = Error;
              throw Error("[DecimalError] LN10 precision limit exceeded");
            } else {
              const self7 = this;
              const self8 = this;
              const constructor5 = new constructor(constructor.LN10);
              round(constructor5, sum2);
              plus2Result = plus2(constructor5.times("" + sum1));
            }
          }
          const self9 = this;
          const self10 = this;
          const constructor6 = new constructor(num6);
          const tmp34Result = f137659(plus2Result, constructor6, sum);
          constructor.precision = precision;
          if (null == arg1) {
            c2 = true;
            round(tmp34Result, precision);
          }
          return tmp34Result;
        } else {
          obj = s;
          num5 = 1;
        }
        while (true) {
          let timesResult3 = obj.times(s);
          let str3 = digitsToString(timesResult3.d);
          let charAtResult1 = str3.charAt(0);
          let sum3 = num5 + 1;
          if (charAtResult1 < 7) {
            obj = timesResult3;
            num5 = sum3;
          }
          tmp13 = timesResult3;
          num6 = sum3;
          tmp14 = charAtResult1;
          arr = str3;
          if (1 != charAtResult1) {
            break;
          } else {
            obj = timesResult3;
            num5 = sum3;
            tmp13 = timesResult3;
            num6 = sum3;
            tmp14 = charAtResult1;
            arr = str3;
            if (str3.charAt(1) <= 3) {
              break;
            }
          }
        }
      } else {
        const sum4 = sum + 2;
        const LN103 = constructor.LN10;
        if (sum4 > LN103.sd()) {
          c2 = true;
          if (precision) {
            constructor.precision = precision;
          }
          const _Error = Error;
          throw Error("[DecimalError] LN10 precision limit exceeded");
        } else {
          const self15 = this;
          const self16 = this;
          const constructor7 = new constructor(constructor.LN10);
          round(constructor7, sum4);
          const text1 = `${tmp7}.`;
          const self17 = this;
          const self18 = this;
          const timesResult4 = constructor7.times("" + tmp10);
          const constructor8 = new constructor(`${tmp7}.` + str.slice(1));
          const obj8 = ln(constructor8, sum - 10);
          const plusResult1 = obj8.plus(timesResult4);
          constructor.precision = precision;
          if (null == arg1) {
            c2 = true;
            round(plusResult1, precision);
          }
          return plusResult1;
        }
      }
    }
  }
}
function parseDecimal(d, arr) {
  let charCodeAtResult;
  let charCodeAtResult1;
  let length;
  let substr;
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
    length = tmp3 + +replaced.slice(searchResult + 1);
    substr = replaced.substring(0, searchResult);
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
    let diff4;
    let tmp16;
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
          let arr2 = d1.push(+substr1.slice(tmp19, sum2));
          tmp19 = sum2;
          tmp20 = sum2;
        } while (sum2 < diff3);
      }
      const substr2 = substr1.slice(tmp20);
      diff4 = 7 - substr2.length;
      tmp16 = substr2;
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
  let first1;
  let num5;
  let num6;
  let sum;
  let sum1;
  let tmp30;
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
    sum = diff + 7;
    first1 = d[0];
    num6 = 0;
    num5 = num2;
    sum1 = exponent;
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
  let tmp9;
  if (undefined !== arg2) {
    let tmp15;
    const tmp46 = pow(10, num5 - sum1 - 1);
    let tmp16 = first1 / tmp46 % 10 | 0;
    const tmp10 = exponent < 0 || undefined !== d[num6 + 1] || first1 % tmp46;
    if (arg2 < 4) {
      if (!tmp16) {
        tmp16 = tmp10;
      }
      if (tmp16) {
        let tmp17 = 0 == arg2;
        if (!tmp17) {
          let num12 = 2;
          if (d.s < 0) {
            num12 = 3;
          }
          tmp17 = arg2 == num12;
        }
        tmp16 = tmp17;
      }
      tmp15 = tmp16;
    } else {
      tmp15 = tmp16 > 5;
      if (5 >= tmp16) {
        let tmp11 = 5 === tmp16;
        if (5 === tmp16) {
          let tmp12 = 4 == arg2 || tmp10;
          if (!tmp12) {
            let tmp13 = 6 == arg2;
            if (tmp13) {
              let tmp14;
              if (0 < sum) {
                let num10 = 0;
                if (sum1 > 0) {
                  num10 = first1 / pow(10, num5 - sum1);
                }
                tmp14 = num10;
              } else {
                tmp14 = d[num6 - 1];
              }
              tmp13 = tmp14 % 10 & 1;
            }
            tmp12 = tmp13;
          }
          if (!tmp12) {
            let num11 = 7;
            if (d.s < 0) {
              num11 = 8;
            }
            tmp12 = arg2 == num11;
          }
          tmp11 = tmp12;
        }
        tmp15 = tmp11;
      }
    }
    tmp9 = tmp15;
  }
  if (exponent >= 1) {
    if (d[0]) {
      let diff1;
      let num14;
      if (0 === sum) {
        d.length = num6;
        diff1 = num6 - 1;
        num14 = 1;
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
      if (tmp9) {
        while (0 != diff1) {
          d[diff1] = d[diff1] + num14;
          if (d[diff1] == c9) {
            let tmp24 = +diff1;
            diff1 = tmp24 - 1;
            d[tmp24] = 0;
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
          tmp30 = d[diff3];
        } while (0 === tmp30);
      }
      if (c2) {
        let result2 = 7 * d.e;
        let first2 = d.d[0];
        let tmp37 = result2;
        const _Error = Error;
        if (first2 >= 10) {
          do {
            result2 = result2 + 1;
            first2 = first2 / 10;
            tmp37 = result2;
          } while (10 <= first2);
        }
        throw _Error(c5 + tmp37);
      }
      return d;
    }
  }
  if (tmp9) {
    let result3 = 7 * d.e;
    let first3 = d.d[0];
    let tmp40 = result3;
    if (first3 >= 10) {
      do {
        result3 = result3 + 1;
        first3 = first3 / 10;
        tmp40 = result3;
      } while (10 <= first3);
    }
    d.length = 1;
    const diff4 = exponent - tmp40 - 1;
    d[0] = pow(10, (7 - diff4 % 7) % 7);
    d.e = floor(-diff4 / 7) || 0;
    floor(-diff4 / 7) || 0;
  } else {
    d.length = 1;
    d.s = 0;
    d.e = 0;
    d[0] = 0;
  }
  return d;
}
function subtract(s, s2) {
  let constructor2;
  let d;
  let diff3;
  let e;
  let first;
  let tmp19;
  let tmp35;
  const constructor = s.constructor;
  const precision = constructor.precision;
  if (s.s) {
    if (s2.s) {
      let tmp8;
      let num4;
      let tmp10;
      let constructor1;
      const d1 = s.d;
      ({ d, e } = s2);
      let e2 = s.e;
      const substr = d1.slice();
      const diff = e2 - e;
      if (diff) {
        let tmp12;
        let length3;
        let arr3;
        if (diff < 0) {
          tmp12 = -diff;
          length3 = d.length;
          e2 = e;
          arr3 = substr;
        } else {
          length3 = substr.length;
          tmp12 = diff;
          arr3 = d;
        }
        const _Math = Math;
        const _Math2 = Math;
        const sum = Math.max(Math.ceil(precision / 7), length3) + 2;
        if (tmp12 > sum) {
          arr3.length = 1;
          tmp12 = sum;
        }
        const reversed = arr3.reverse();
        let diff1 = tmp16 - 1;
        if (+tmp12) {
          do {
            let arr = arr3.push(0);
            tmp19 = +diff1;
            diff1 = tmp19 - 1;
          } while (tmp19);
        }
        const reversed1 = arr3.reverse();
        tmp8 = tmp11;
        num4 = tmp12;
        tmp10 = e2;
      } else {
        let length2 = d.length;
        if (substr.length < length2) {
          length2 = length;
        }
        let num3 = 0;
        tmp8 = tmp7;
        if (0 < length2) {
          while (substr[num3] == d[num3]) {
            num3 = num3 + 1;
            tmp8 = tmp7;
          }
          tmp8 = substr[num3] < d[num3];
        }
        num4 = 0;
        tmp10 = e;
      }
      let arr4 = d;
      let arr5 = substr;
      if (tmp8) {
        s2.s = -s2.s;
        arr4 = substr;
        arr5 = d;
      }
      let diff2 = arr4.length - length4;
      let sum1 = length4;
      let tmp23 = length4;
      if (diff2 > 0) {
        do {
          let tmp24 = +sum1;
          sum1 = tmp24 + 1;
          arr5[tmp24] = 0;
          diff2 = diff2 - 1;
          tmp23 = sum1;
        } while (diff2 > 0);
      }
      let length5 = arr4.length;
      if (length5 > num4) {
        do {
          diff3 = length5 - 1;
          if (arr5[diff3] < arr4[diff3]) {
            let tmp26 = diff3;
            if (tmp26) {
              let diff4 = diff3 - 1;
              let tmp28 = diff4;
              tmp26 = diff4;
              if (0 === arr5[diff4]) {
                arr5[tmp28] = 9999999;
                tmp26 = tmp28;
                while (tmp28) {
                  let diff5 = tmp28 - 1;
                  tmp28 = diff5;
                  tmp26 = diff5;
                  if (0 !== arr5[diff5]) {
                    break;
                  }
                }
              }
            }
            arr5[tmp26] = arr5[tmp26] - 1;
            arr5[diff3] = arr5[diff3] + c9;
          }
          arr5[diff3] = arr5[diff3] - arr4[diff3];
          length5 = diff3;
        } while (diff3 > num4);
      }
      let diff6 = tmp23 - 1;
      if (0 === arr5[diff6]) {
        do {
          let arr2 = arr5.pop();
          let diff7 = diff6 - 1;
          diff6 = diff7;
          tmp35 = arr5[diff7];
        } while (0 === tmp35);
      }
      let diff8 = tmp10;
      let tmp37 = tmp10;
      if (0 === arr5[0]) {
        do {
          diff8 = diff8 - 1;
          let arr8 = arr5.shift();
          tmp37 = diff8;
          first = arr5[0];
        } while (0 === first);
      }
      if (arr5[0]) {
        s2.d = arr5;
        s2.e = tmp37;
        constructor1 = s2;
        if (c2) {
          round(s2, precision);
          constructor1 = s2;
        }
      } else {
        const self3 = this;
        const self4 = this;
        constructor1 = new constructor(0);
      }
      return constructor1;
    }
  }
  if (s2.s) {
    s2.s = -s2.s;
    constructor2 = s2;
  } else {
    const self = this;
    const self2 = this;
    constructor2 = new constructor(s);
  }
  if (c2) {
    round(constructor2, precision);
  }
  return constructor2;
}
function toString(arg0, arg1, arg2) {
  let sum1;
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
    let sum;
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
        sum = text1 + str24;
      }
      let str25 = "e+";
      if (tmp3 < 0) {
        str25 = "e";
      }
      sum1 = sum + str25 + tmp3;
    }
    sum = arr;
    if (arr.length > 1) {
      const text2 = `${arr.charAt(0)}.`;
      sum = `${arr.charAt(0)}.${arr.slice(1)}`;
    }
  } else if (tmp3 < 0) {
    let tmp30;
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
    if (tmp31) {
      const diff4 = arg2 - length;
      tmp31 = diff4 > 0;
      tmp30 = diff4;
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
  } else if (tmp3 >= arr.length) {
    let tmp18;
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
    if (tmp17) {
      const diff8 = arg2 - tmp3 - 1;
      tmp17 = diff8 > 0;
      tmp18 = diff8;
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
    if (sum3 < arr.length) {
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
      if (sum3 === arr.length) {
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
  let tmp2;
  let tmp3;
  const tmp = LN10;
  if (tmp) {
    if (typeof LN10 === "object") {
      const self3 = this;
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
          tmp2 = items[num];
          tmp3 = LN10[tmp2];
          if (undefined !== tmp3) {
            if (floor(tmp3) !== tmp3) {
              break;
            } else if (tmp3 < items[num + 1]) {
              break;
            } else if (tmp3 > items[num + 2]) {
              break;
            } else {
              self3[tmp2] = tmp3;
            }
          }
          num = num + 3;
        }
        const _Error = Error;
        throw Error(c4 + tmp2 + ": " + tmp3);
      }
      LN10 = LN10.LN10;
      if (undefined !== LN10) {
        const _Math = Math;
        if (LN10 != Math.LN10) {
          const _Error2 = Error;
          throw Error(c4 + "LN10: " + LN10);
        } else {
          const self = this;
          const self2 = this;
          const self31 = new self3(LN10);
          self3.LN10 = self31;
        }
      }
      return self3;
    }
  }
  throw Error("[DecimalError] Object expected");
}
let obj = { precision: 20, rounding: 4, toExpNeg: -7, toExpPos: 21, LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286" };
Decimal = obj;
let c2 = true;
let c3 = "[DecimalError] ";
let c4 = "[DecimalError] Invalid argument: ";
let c5 = "[DecimalError] Exponent out of range: ";
const re8 = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
let c9 = 10000000;
let closure_10 = floor(1286742750677284.5);
let obj2 = {
  abs: fn,
  absoluteValue: fn,
  cmp: fn2,
  comparedTo: fn2,
  dp: fn3,
  decimalPlaces: fn3,
  div: fn4,
  dividedBy: fn4,
  idiv: fn5,
  dividedToIntegerBy: fn5,
  eq: fn6,
  equals: fn6,
  exponent: function() {
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
  },
  gt: fn7,
  greaterThan: fn7,
  gte: fn8,
  greaterThanOrEqualTo: fn8,
  isint: fn9,
  isInteger: fn9,
  isneg: fn10,
  isNegative: fn10,
  ispos: fn11,
  isPositive: fn11,
  isZero: function() {
    return 0 === this.s;
  },
  lt: fn12,
  lessThan: fn12,
  lte: fn13,
  lessThanOrEqualTo: fn13,
  log: fn14,
  logarithm: fn14,
  sub: fn15,
  minus: fn15,
  mod: fn16,
  modulo: fn16,
  exp: fn17,
  naturalExponential: fn17,
  ln: fn18,
  naturalLogarithm: fn18,
  neg: fn19,
  negated: fn19,
  add: fn20,
  plus: fn20,
  sd: fn21,
  precision: fn21,
  sqrt: fn22,
  squareRoot: fn22,
  mul: fn23,
  times: fn23,
  todp: fn24,
  toDecimalPlaces: fn24,
  toExponential: function(arg0, arg1) {
    let tmp10;
    const self = this;
    const constructor = this.constructor;
    if (undefined === arg0) {
      tmp10 = toString(self, true);
    } else {
      if (arg0 === ~(~arg0)) {
        if (arg0 >= 0) {
          if (arg0 <= 1000000000) {
            let rounding;
            if (undefined === arg1) {
              rounding = constructor.rounding;
            } else {
              if (arg1 === ~(~arg1)) {
                if (arg1 >= 0) {
                  rounding = arg1;
                }
              }
              const _Error = Error;
              throw Error(c4 + arg1);
            }
            const self2 = this;
            const self3 = this;
            const constructor1 = new constructor(self);
            round(constructor1, arg0 + 1, rounding);
            tmp10 = toString(constructor1, true, arg0 + 1);
          }
        }
      }
      const _Error2 = Error;
      throw Error(c4 + arg0);
    }
    return tmp10;
  },
  toFixed: function(arg0, arg1) {
    let text;
    const self = this;
    const constructor = this.constructor;
    if (undefined === arg0) {
      text = toString(self);
    } else {
      if (arg0 === ~(~arg0)) {
        if (arg0 >= 0) {
          if (arg0 <= 1000000000) {
            let rounding;
            if (undefined === arg1) {
              rounding = constructor.rounding;
            } else {
              if (arg1 === ~(~arg1)) {
                if (arg1 >= 0) {
                  rounding = arg1;
                }
              }
              const _Error = Error;
              throw Error(c4 + arg1);
            }
            const self2 = this;
            const self3 = this;
            const constructor1 = new constructor(self);
            let result = 7 * self.e;
            let first = self.d[0];
            let tmp8 = result;
            if (first >= 10) {
              do {
                result = result + 1;
                first = first / 10;
                tmp8 = result;
              } while (10 <= first);
            }
            round(constructor1, arg0 + tmp8 + 1, rounding);
            let result1 = 7 * constructor1.e;
            let first1 = constructor1.d[0];
            let tmp14 = result1;
            const absResult = constructor1.abs();
            if (first1 >= 10) {
              do {
                result1 = result1 + 1;
                first1 = first1 / 10;
                tmp14 = result1;
              } while (10 <= first1);
            }
            const tmp3Result = toString(absResult, false, arg0 + tmp14 + 1);
            text = tmp3Result;
            if (self.isneg()) {
              text = tmp3Result;
              if (!self.isZero()) {
                text = `-${tmp15}`;
              }
            }
          }
        }
      }
      const _Error2 = Error;
      throw Error(c4 + arg0);
    }
    return text;
  },
  toint: fn25,
  toInteger: fn25,
  toNumber: function() {
    return +this;
  },
  pow: fn26,
  toPower: fn26,
  toPrecision: function(arg0, arg1) {
    let tmp3Result;
    const self = this;
    const constructor = this.constructor;
    if (undefined === arg0) {
      let result = 7 * self.e;
      let first = self.d[0];
      let tmp19 = result;
      if (first >= 10) {
        do {
          result = result + 1;
          first = first / 10;
          tmp19 = result;
        } while (10 <= first);
      }
      const tmp20 = tmp19 <= constructor.toExpNeg || tmp19 >= constructor.toExpPos;
      tmp3Result = toString(self, tmp20);
    } else {
      if (arg0 === ~(~arg0)) {
        if (arg0 >= 1) {
          if (arg0 <= 1000000000) {
            let rounding;
            if (undefined === arg1) {
              rounding = constructor.rounding;
            } else {
              if (arg1 === ~(~arg1)) {
                if (arg1 >= 0) {
                  rounding = arg1;
                }
              }
              const _Error = Error;
              throw Error(c4 + arg1);
            }
            const self2 = this;
            const self3 = this;
            const constructor1 = new constructor(self);
            round(constructor1, arg0, rounding);
            let result1 = 7 * constructor1.e;
            let first1 = constructor1.d[0];
            let tmp11 = result1;
            if (first1 >= 10) {
              do {
                result1 = result1 + 1;
                first1 = first1 / 10;
                tmp11 = result1;
              } while (10 <= first1);
            }
            const tmp12 = arg0 <= tmp11 || tmp11 <= constructor.toExpNeg;
            tmp3Result = toString(constructor1, tmp12, arg0);
          }
        }
      }
      const _Error2 = Error;
      throw Error(c4 + arg0);
    }
    return tmp3Result;
  },
  tosd: fn27,
  toSignificantDigits: fn27,
  toJSON: fn28,
  val: fn28,
  valueOf: fn28,
  toString: fn28
};
fn = function() {
  const constructor = new this.constructor(this);
  if (constructor.s) {
    constructor.s = 1;
  }
  return constructor;
};
fn2 = function(arg0) {
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
      if (self.d.length > constructor.d.length ^ self.s < 0) {
        num5 = 1;
      }
      num4 = num5;
    }
    return num4;
  }
};
fn3 = function() {
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
fn4 = function(arg0) {
  const constructor = new this.constructor(arg0);
  return f137659(this, constructor);
};
fn5 = function(arg0) {
  const constructor = this.constructor;
  const constructor1 = new constructor(arg0);
  const tmp2 = f137659(this, constructor1, 0, 1);
  round(tmp2, constructor.precision);
  return tmp2;
};
fn6 = function(arg0) {
  return !this.cmp(arg0);
};
fn7 = function(arg0) {
  return this.cmp(arg0) > 0;
};
fn8 = function(arg0) {
  return this.cmp(arg0) >= 0;
};
fn9 = function() {
  return this.e > this.d.length - 2;
};
fn10 = function() {
  return this.s < 0;
};
fn11 = function() {
  return this.s > 0;
};
fn12 = function(arg0) {
  return this.cmp(arg0) < 0;
};
fn13 = function(arg0) {
  return this.cmp(arg0) < 1;
};
fn14 = function(arg0) {
  let constructor1;
  const self = this;
  const constructor = this.constructor;
  const precision = constructor.precision;
  const sum = precision + 5;
  if (undefined === arg0) {
    const self4 = this;
    const self5 = this;
    constructor1 = new constructor(10);
  } else {
    const self2 = this;
    const self3 = this;
    const constructor2 = new constructor(arg0);
    if (constructor2.s >= 1) {
      constructor1 = constructor2;
    }
    const _Error = Error;
    throw Error("[DecimalError] NaN");
  }
  if (self.s < 1) {
    let str2 = "-Infinity";
    const _Error2 = Error;
    if (self.s) {
      str2 = "NaN";
    }
    throw _Error2(c3 + str2);
  } else {
    let constructor3;
    if (self.eq(_window)) {
      const self6 = this;
      const self7 = this;
      constructor3 = new constructor(0);
    } else {
      const tmp10 = ln(self, sum);
      constructor3 = f137659(tmp10, ln(constructor1, sum), sum);
      c2 = true;
      round(constructor3, precision);
    }
    return constructor3;
  }
};
fn15 = function(arg0) {
  let tmp3;
  const self = this;
  const constructor = new this.constructor(arg0);
  if (this.s == constructor.s) {
    tmp3 = subtract(self, constructor);
  } else {
    constructor.s = -constructor.s;
    tmp3 = add(self, constructor);
  }
  return tmp3;
};
fn16 = function(arg0) {
  const self = this;
  const constructor = this.constructor;
  const precision = constructor.precision;
  const constructor1 = new constructor(arg0);
  if (constructor1.s) {
    let minusResult;
    if (self.s) {
      c2 = true;
      const obj = f137659(self, tmp2, 0, 1);
      minusResult = self.minus(obj.times(constructor1));
    } else {
      const self2 = this;
      const self3 = this;
      const constructor2 = new constructor(self);
      minusResult = constructor2;
      round(constructor2, precision);
    }
    return minusResult;
  } else {
    const _Error = Error;
    throw Error("[DecimalError] NaN");
  }
};
fn17 = function() {
  return exp(this);
};
fn18 = function() {
  return ln(this);
};
fn19 = function() {
  const constructor = new this.constructor(this);
  constructor.s = -constructor.s || 0;
  return constructor;
};
fn20 = function(arg0) {
  let tmp3;
  const self = this;
  const constructor = new this.constructor(arg0);
  if (this.s == constructor.s) {
    tmp3 = add(self, constructor);
  } else {
    constructor.s = -constructor.s;
    tmp3 = subtract(self, constructor);
  }
  return tmp3;
};
fn21 = function(arg0) {
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
fn22 = function() {
  let arr4;
  let obj4;
  let substr;
  let substr1;
  let timesResult;
  let tmp20;
  const self = this;
  const constructor = this.constructor;
  if (this.s < 1) {
    if (self.s) {
      const _Error = Error;
      throw Error("[DecimalError] NaN");
    } else {
      const self6 = this;
      const self7 = this;
      const constructor1 = new constructor(0);
      return constructor1;
    }
  } else {
    let text1;
    let result = 7 * self.e;
    let first = self.d[0];
    let tmp3 = result;
    if (first >= 10) {
      do {
        result = result + 1;
        first = first / 10;
        tmp3 = result;
      } while (10 <= first);
    }
    c2 = false;
    const _Math = Math;
    const str = Math.sqrt(+self);
    if (0 != str) {
      let constructor2;
      if (str != Infinity) {
        const self2 = this;
        const self3 = this;
        constructor2 = new constructor(str.toString());
      }
      const precision = constructor.precision;
      const sum = precision + 3;
      let sum1 = sum;
      do {
        let plusResult = constructor2.plus(f137659(self, constructor2, sum1 + 2));
        timesResult = plusResult.times(0.5);
        let arr3 = digitsToString(constructor2.d);
        substr = arr3.slice(0, sum1);
        arr4 = digitsToString(timesResult.d);
        tmp20 = sum1;
        obj4 = constructor2;
        substr1 = arr4.slice(0, sum1);
        constructor2 = timesResult;
      } while (substr !== substr1);
      const substr2 = arr4.slice(tmp20 - 3, tmp20 + 1);
      if (sum == tmp20) {
        if ("4999" == substr2) {
          round(obj4, precision + 1, 0);
          let tmp22 = obj4;
          const timesResult1 = obj4.times(obj4);
          if (!timesResult1.eq(self)) {
            sum1 = tmp20 + 4;
            constructor2 = timesResult;
          }
          c2 = true;
          round(tmp22, precision);
          return tmp22;
        }
      }
      tmp22 = timesResult;
    }
    const arr = digitsToString(self.d);
    let text = arr;
    if ((arr.length + tmp3) % 2 === 0) {
      text = `${arr}0`;
    }
    const _Math2 = Math;
    const sqrtResult = Math.sqrt(text);
    let result1 = tmp3 < 0;
    const tmp8 = floor((tmp3 + 1) / 2);
    if (tmp3 >= 0) {
      result1 = tmp3 % 2;
    }
    const diff = tmp8 - result1;
    if (sqrtResult == Infinity) {
      text1 = `1e${tmp10}`;
    } else {
      const toExponentialResult = sqrtResult.toExponential();
      text1 = toExponentialResult.slice(0, toExponentialResult.indexOf("e") + 1) + diff;
    }
    const self4 = this;
    const self5 = this;
    constructor2 = new constructor(text1);
  }
};
fn23 = function(arg0) {
  let constructor;
  let d;
  let tmp12;
  let tmp25;
  const self = this;
  ({ constructor, d } = this);
  const constructor1 = new constructor(arg0);
  const d1 = constructor1.d;
  if (this.s) {
    if (constructor1.s) {
      let sum4;
      constructor1.s = constructor1.s * self.s;
      const sum = self.e + constructor1.e;
      let tmp4 = d1;
      let tmp5 = d;
      let tmp6 = length2;
      let tmp7 = length;
      if (d.length < d1.length) {
        tmp4 = d;
        tmp5 = d1;
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
          let arr2 = items.pop();
          let diff3 = diff2 - 1;
          diff2 = diff3;
          tmp25 = items[diff3];
        } while (!tmp25);
      }
      if (tmp14) {
        sum4 = sum + 1;
      } else {
        items.shift();
        sum4 = sum;
      }
      constructor1.d = items;
      constructor1.e = sum4;
      if (c2) {
        round(constructor1, constructor.precision);
      }
      return constructor1;
    }
  }
  const constructor2 = new constructor(0);
  return constructor2;
};
fn24 = function(arg0, arg1) {
  const constructor = this.constructor;
  const constructor1 = new constructor(this);
  if (undefined !== arg0) {
    if (arg0 === ~(~arg0)) {
      if (arg0 >= 0) {
        if (arg0 <= 1000000000) {
          let rounding;
          if (undefined === arg1) {
            rounding = constructor.rounding;
          } else {
            if (arg1 === ~(~arg1)) {
              if (arg1 >= 0) {
                rounding = arg1;
              }
            }
            const _Error = Error;
            throw Error(c4 + arg1);
          }
          let result = 7 * constructor1.e;
          let first = constructor1.d[0];
          let tmp7 = result;
          if (first >= 10) {
            do {
              result = result + 1;
              first = first / 10;
              tmp7 = result;
            } while (10 <= first);
          }
          round(constructor1, arg0 + tmp7 + 1, rounding);
        }
      }
    }
    const _Error2 = Error;
    throw Error(c4 + arg0);
  }
  return constructor1;
};
fn25 = function() {
  const constructor = this.constructor;
  const constructor1 = new constructor(this);
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
  round(constructor1, tmp5 + 1, constructor.rounding);
  return constructor1;
};
fn26 = function(arg0) {
  const self = this;
  const constructor = this.constructor;
  const constructor1 = new constructor(arg0);
  if (constructor1.s) {
    const self4 = this;
    const self5 = this;
    const constructor2 = new constructor(self);
    if (constructor2.s) {
      if (constructor2.eq(_window)) {
        return constructor2;
      } else {
        const precision = constructor.precision;
        if (constructor1.eq(_window)) {
          round(constructor2, precision);
          return constructor2;
        } else {
          const e = constructor1.e;
          let diff = constructor1.d.length - 1;
          const s = constructor2.s;
          if (e >= diff) {
            let tmp11 = tmp;
            if (+constructor1 < 0) {
              tmp11 = -tmp;
            }
            diff = tmp11;
            if (tmp11 <= 9007199254740991) {
              let divResult;
              const self6 = this;
              const self7 = this;
              const constructor3 = new constructor(_window);
              const _Math2 = Math;
              const rounded = Math.ceil(precision / 7 + 4);
              c2 = false;
              let tmp20 = constructor3;
              if (tmp11 % 2) {
                const timesResult = constructor3.times(constructor2);
                const d = timesResult.d;
                tmp20 = timesResult;
                if (d.length > rounded) {
                  d.length = rounded;
                  tmp20 = timesResult;
                }
              }
              let tmp23 = floor(tmp11 / 2);
              let obj4 = tmp20;
              let obj5 = constructor2;
              let tmp24 = tmp20;
              if (0 !== tmp23) {
                do {
                  let timesResult1 = obj5.times(obj5);
                  let d1 = timesResult1.d;
                  if (d1.length > rounded) {
                    d1.length = rounded;
                  }
                  let tmp28 = obj4;
                  if (tmp23 % 2) {
                    let timesResult2 = obj4.times(timesResult1);
                    let d2 = timesResult2.d;
                    tmp28 = timesResult2;
                    if (d2.length > rounded) {
                      d2.length = rounded;
                      tmp28 = timesResult2;
                    }
                  }
                  tmp23 = floor(tmp23 / 2);
                  obj4 = tmp28;
                  obj5 = timesResult1;
                  tmp24 = tmp28;
                } while (0 !== tmp23);
              }
              c2 = true;
              if (constructor1.s < 0) {
                const self8 = this;
                const self9 = this;
                const constructor4 = new constructor(_window);
                divResult = constructor4.div(tmp24);
              } else {
                round(tmp24, precision);
                divResult = tmp24;
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
            if (1 & constructor1.d[Math.max(Math, e, diff)]) {
              num5 = -1;
            }
          }
          constructor2.s = 1;
          c2 = true;
          const tmp15 = exp(constructor1.times(ln(constructor2, precision + 12)));
          tmp15.s = num5;
          return tmp15;
        }
      }
    } else if (constructor1.s < 1) {
      const _Error = Error;
      throw Error("[DecimalError] Infinity");
    } else {
      return constructor2;
    }
  } else {
    const self2 = this;
    const self3 = this;
    const constructor5 = new constructor(_window);
    return constructor5;
  }
};
fn27 = function(arg0, arg1) {
  let precision;
  let rounding;
  const self = this;
  const constructor = this.constructor;
  if (undefined === arg0) {
    ({ precision, rounding } = constructor);
  } else {
    if (arg0 === ~(~arg0)) {
      if (arg0 >= 1) {
        if (arg0 <= 1000000000) {
          if (undefined === arg1) {
            rounding = constructor.rounding;
            precision = arg0;
          } else {
            if (arg1 === ~(~arg1)) {
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
  const constructor1 = new constructor(self);
  round(constructor1, precision, rounding);
  return constructor1;
};
fn28 = function() {
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
  const tmp5 = tmp3 <= constructor.toExpNeg || tmp3 >= constructor.toExpPos;
  return toString(self, tmp5);
};
const f137659 = function(s, s2, arg2, arg3) {
  let num7;
  let tmp11;
  let tmp25;
  let tmp32;
  let tmp63;
  let tmp72;
  let tmp80;
  let tmp91;
  const constructor = s.constructor;
  let num = -1;
  if (s.s == s2.s) {
    num = 1;
  }
  const d = s.d;
  const d1 = s2.d;
  if (s.s) {
    if (s2.s) {
      let precision;
      const diff = s.e - s2.e;
      let length = d1.length;
      const self3 = this;
      const self4 = this;
      const constructor1 = new constructor(num);
      const items = [];
      constructor1.d = items;
      let num2 = d[0];
      const first = d1[0];
      if (!num2) {
        num2 = 0;
      }
      let num5 = 0;
      let num6 = 0;
      if (first == num2) {
        do {
          let sum = num5 + 1;
          num7 = d[sum];
          tmp11 = d1[sum];
          if (!num7) {
            num7 = 0;
          }
          num5 = sum;
          num6 = sum;
        } while (tmp11 == num7);
      }
      let num8 = d[num6];
      const tmp12 = d1[num6];
      if (!num8) {
        num8 = 0;
      }
      let diff1 = diff;
      if (tmp12 > num8) {
        diff1 = diff - 1;
      }
      if (null == arg2) {
        precision = constructor.precision;
      } else {
        precision = tmp14;
        if (arg3) {
          let result = 7 * s.e;
          let first1 = s.d[0];
          let tmp19 = result;
          if (first1 >= 10) {
            do {
              result = result + 1;
              first1 = first1 / 10;
              tmp19 = result;
            } while (10 <= first1);
          }
          let result1 = 7 * s2.e;
          let first2 = s2.d[0];
          let tmp22 = result1;
          if (first2 >= 10) {
            do {
              result1 = result1 + 1;
              first2 = first2 / 10;
              tmp22 = result1;
            } while (10 <= first2);
          }
          precision = tmp14 + (tmp19 - tmp22) + 1;
        }
      }
      if (precision < 0) {
        const self5 = this;
        const self6 = this;
        const constructor2 = new constructor(0);
        return constructor2;
      } else {
        if (1 == length) {
          const first3 = d1[0];
          if (0 < d.length) {
            const sum1 = tmp116 + 1;
            let diff2 = sum1 - 1;
            let num43 = 0;
            let num44 = 0;
            if (sum1) {
              while (true) {
                let num45 = d[num44];
                let tmp101 = diff2;
                if (!num45) {
                  num45 = 0;
                }
                let sum2 = num43 * c9 + num45;
                items[num44] = sum2 / first3 | 0;
                let tmp105 = sum2 % first3 | 0;
                let sum3 = num44 + 1;
                if (sum3 < length2) {
                  diff2 = diff2 - 1;
                  num43 = tmp105;
                  num44 = sum3;
                  if (!tmp101) {
                    break;
                  }
                } else if (!tmp105) {
                  break;
                }
                break;
              }
            }
          }
        } else {
          let arr5 = d1;
          let arr6 = d;
          let length4 = length2;
          if (1 < (c9 / (d1[0] + 1) | 0)) {
            const length11 = d1.length;
            const substr = d1.slice();
            let diff3 = tmp119 - 1;
            let num11 = 0;
            let num12 = 0;
            if (+length11) {
              do {
                let sum4 = substr[diff3] * tmp118 + num11;
                substr[diff3] = sum4 % c9 | 0;
                num11 = sum4 / c9 | 0;
                tmp25 = +diff3;
                diff3 = tmp25 - 1;
                num12 = num11;
              } while (tmp25);
            }
            if (num12) {
              substr.unshift(num12);
            }
            const length3 = d.length;
            const substr1 = d.slice();
            let diff4 = tmp28 - 1;
            let num13 = 0;
            let num14 = 0;
            if (+length3) {
              do {
                let sum5 = substr1[diff4] * tmp118 + num13;
                substr1[diff4] = sum5 % c9 | 0;
                num13 = sum5 / c9 | 0;
                tmp32 = +diff4;
                diff4 = tmp32 - 1;
                num14 = num13;
              } while (tmp32);
            }
            if (num14) {
              substr1.unshift(num14);
            }
            length = substr.length;
            length4 = substr1.length;
            arr5 = substr;
            arr6 = substr1;
          }
          const substr2 = arr6.slice(0, length);
          let sum6 = length5;
          let tmp37 = length5;
          if (substr2.length < length) {
            do {
              let tmp38 = +sum6;
              sum6 = tmp38 + 1;
              substr2[tmp38] = 0;
              tmp37 = sum6;
            } while (sum6 < length);
          }
          const substr3 = arr5.slice();
          substr3.unshift(0);
          const first4 = arr5[0];
          let sum7 = first4;
          let sum14 = length;
          let diff10 = tmp116;
          let tmp44 = tmp37;
          let arr9 = substr2;
          let num17 = 0;
          if (arr5[1] >= 5000000) {
            sum7 = first4 + 1;
            sum14 = length;
            diff10 = tmp116;
            tmp44 = tmp37;
            arr9 = substr2;
            num17 = 0;
          }
          while (true) {
            let num19;
            let length6;
            let num22;
            let items1;
            let tmp53;
            let tmp48 = tmp44;
            let tmp47 = diff10;
            if (length != tmp44) {
              let num21 = -1;
              if (length > tmp48) {
                num21 = 1;
              }
              num19 = num21;
            } else {
              let num18 = 0;
              num19 = 0;
              if (0 < length) {
                while (arr5[num18] == arr9[num18]) {
                  let sum8 = num18 + 1;
                  num18 = sum8;
                  num19 = 0;
                }
                let num20 = -1;
                if (arr5[num18] > arr9[num18]) {
                  num20 = 1;
                }
                num19 = num20;
              }
            }
            if (num19 < 0) {
              let substr5;
              let num25;
              let first5 = arr9[0];
              let sum9 = first5;
              if (length != tmp48) {
                let num23 = arr9[1];
                let result2 = first5 * c9;
                if (!num23) {
                  num23 = 0;
                }
                sum9 = result2 + num23;
              }
              let num24 = sum9 / sum7 | 0;
              if (1 < num24) {
                let num29;
                if (num24 >= c9) {
                  num24 = 9999999;
                }
                let length7 = arr5.length;
                let substr4 = arr5.slice();
                let tmp59 = +length7;
                let diff5 = tmp59 - 1;
                let num26 = 0;
                let num27 = 0;
                if (tmp59) {
                  do {
                    let sum10 = substr4[diff5] * num24 + num26;
                    substr4[diff5] = sum10 % c9 | 0;
                    num26 = sum10 / c9 | 0;
                    tmp63 = +diff5;
                    diff5 = tmp63 - 1;
                    num27 = num26;
                  } while (tmp63);
                }
                if (num27) {
                  let arr4 = substr4.unshift(num27);
                }
                let length8 = substr4.length;
                let length9 = arr9.length;
                if (length8 != length9) {
                  let num31 = -1;
                  if (length8 > length9) {
                    num31 = 1;
                  }
                  num29 = num31;
                } else {
                  let num28 = 0;
                  num29 = 0;
                  if (0 < length8) {
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
                tmp48 = length9;
                substr5 = substr4;
                num25 = num24;
                num19 = num29;
                if (1 === num29) {
                  let tmp67 = arr5;
                  if (length < length8) {
                    tmp67 = substr3;
                  }
                  let tmp68 = +length8;
                  let diff6 = tmp68 - 1;
                  let num32 = 0;
                  if (tmp68) {
                    do {
                      substr4[diff6] = substr4[diff6] - num32;
                      let num33 = 0;
                      if (substr4[diff6] < tmp67[diff6]) {
                        num33 = 1;
                      }
                      substr4[diff6] = num33 * c9 + substr4[diff6] - tmp67[diff6];
                      tmp72 = +diff6;
                      diff6 = tmp72 - 1;
                      num32 = num33;
                    } while (tmp72);
                  }
                  let diff7 = num24 - 1;
                  tmp48 = length9;
                  substr5 = substr4;
                  num25 = diff7;
                  num19 = num29;
                  if (!substr4[0]) {
                    tmp48 = length9;
                    substr5 = substr4;
                    num25 = diff7;
                    num19 = num29;
                    if (substr4.length > 1) {
                      let arr7 = substr4.shift();
                      tmp48 = length9;
                      substr5 = substr4;
                      num25 = diff7;
                      num19 = num29;
                      while (!substr4[0]) {
                        tmp48 = length9;
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
                substr5 = arr5.slice();
              }
              if (substr5.length < tmp48) {
                let arr8 = substr5.unshift(0);
              }
              let tmp76 = +tmp48;
              let diff8 = tmp76 - 1;
              let num34 = 0;
              if (tmp76) {
                do {
                  arr9[diff8] = arr9[diff8] - num34;
                  let num35 = 0;
                  if (arr9[diff8] < substr5[diff8]) {
                    num35 = 1;
                  }
                  arr9[diff8] = num35 * c9 + arr9[diff8] - substr5[diff8];
                  tmp80 = +diff8;
                  diff8 = tmp80 - 1;
                  num34 = num35;
                } while (tmp80);
              }
              if (!arr9[0]) {
                if (arr9.length > 1) {
                  let arr10 = arr9.shift();
                  while (!arr9[0]) {
                    if (arr9.length <= 1) {
                      break;
                    }
                  }
                }
              }
              let tmp82 = -1 === num19;
              if (-1 === num19) {
                let num37;
                let length10 = arr9.length;
                if (length != length10) {
                  let num39 = -1;
                  if (length > length10) {
                    num39 = 1;
                  }
                  num37 = num39;
                } else {
                  let num36 = 0;
                  num37 = 0;
                  if (0 < length) {
                    while (arr5[num36] == arr9[num36]) {
                      let sum12 = num36 + 1;
                      num36 = sum12;
                      num37 = 0;
                    }
                    let num38 = -1;
                    if (arr5[num36] > arr9[num36]) {
                      num38 = 1;
                    }
                    num37 = num38;
                  }
                }
                tmp82 = num37 < 1;
                num19 = num37;
                tmp48 = length10;
              }
              let tmp85 = num25;
              if (tmp82) {
                let tmp86 = arr5;
                if (length < tmp48) {
                  tmp86 = substr3;
                }
                let tmp87 = +tmp48;
                let diff9 = tmp87 - 1;
                let num40 = 0;
                if (tmp87) {
                  do {
                    arr9[diff9] = arr9[diff9] - num40;
                    let num41 = 0;
                    if (arr9[diff9] < tmp86[diff9]) {
                      num41 = 1;
                    }
                    arr9[diff9] = num41 * c9 + arr9[diff9] - tmp86[diff9];
                    tmp91 = +diff9;
                    diff9 = tmp91 - 1;
                    num40 = num41;
                  } while (tmp91);
                }
                let sum13 = num25 + 1;
                tmp85 = sum13;
                if (!arr9[0]) {
                  tmp85 = sum13;
                  if (arr9.length > 1) {
                    let arr11 = arr9.shift();
                    tmp85 = sum13;
                    while (!arr9[0]) {
                      tmp85 = sum13;
                      if (arr9.length <= 1) {
                        break;
                      }
                    }
                  }
                }
              }
              length6 = arr9.length;
              num22 = tmp85;
              items1 = arr9;
              tmp53 = num19;
            } else {
              length6 = tmp48;
              items1 = arr9;
              num22 = 0;
              tmp53 = num19;
              if (0 === num19) {
                items1 = [0];
                length6 = tmp48;
                num22 = 1;
                tmp53 = num19;
              }
            }
            items[num17] = num22;
            if (tmp53) {
              if (items1[0]) {
                let tmp94 = +length6;
                let tmp95 = arr6[sum14] || 0;
                let num42 = tmp94 + 1;
                items1[tmp94] = tmp95;
                let items2 = items1;
                let tmp96 = +sum14;
                if (tmp96 < length4) {
                  num17 = num17 + 1;
                  sum14 = tmp96 + 1;
                  diff10 = diff10 - 1;
                  tmp44 = num42;
                  arr9 = items2;
                  if (tmp47) {
                    continue;
                  } else {
                    break;
                  }
                  break;
                } else if (undefined === items2[0]) {
                  break;
                }
                break;
              }
            }
            items2 = [arr6[sum14]];
            num42 = 1;
          }
        }
        if (!items[0]) {
          items.shift();
        }
        constructor1.e = diff1;
        let sum15 = tmp14;
        if (arg3) {
          let result3 = 7 * constructor1.e;
          let first6 = constructor1.d[0];
          let tmp112 = result3;
          if (first6 >= 10) {
            do {
              result3 = result3 + 1;
              first6 = first6 / 10;
              tmp112 = result3;
            } while (10 <= first6);
          }
          sum15 = tmp14 + tmp112 + 1;
        }
        round(constructor1, sum15);
        return constructor1;
      }
    } else {
      const _Error = Error;
      throw Error("[DecimalError] Division by zero");
    }
  } else {
    const self = this;
    const self2 = this;
    const constructor3 = new constructor(s);
    return constructor3;
  }
};
function clone(arg0) {
  let obj = arg0;
  class Decimal {
    constructor(arg0) {
      self = this;
      tmp = Decimal;
      if (this instanceof Decimal) {
        self.constructor = tmp;
        if (arg0 instanceof tmp) {
          ({ s: self.s, e: self.e, d } = arg0);
          tmp15 = d && d.slice();
          self.d = tmp15;
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
            if (str === ~(~str)) {
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
            substr = arg0.slice(1);
            num3 = -1;
            self.s = -1;
          } else {
            num = 1;
            self.s = 1;
            substr = arg0;
          }
          tmp5 = re8;
          if (re8.test(substr)) {
            tmp8 = parseDecimal;
            tmp9 = parseDecimal(self, substr);
            return;
          } else {
            tmp6 = globalThis;
            _Error = Error;
            tmp7 = c4;
            throw Error(c4 + substr);
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
  Decimal.prototype = obj2;
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
            tmp15 = d && d.slice();
            self.d = tmp15;
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
              if (str === ~(~str)) {
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
              substr = arg0.slice(1);
              num3 = -1;
              self.s = -1;
            } else {
              num = 1;
              self.s = 1;
              substr = arg0;
            }
            tmp5 = re8;
            if (re8.test(substr)) {
              tmp8 = parseDecimal;
              tmp9 = parseDecimal(self, substr);
              return;
            } else {
              tmp6 = globalThis;
              _Error = Error;
              tmp7 = c4;
              throw Error(c4 + substr);
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
              tmp15 = d && d.slice();
              self.d = tmp15;
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
                if (str === ~(~str)) {
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
                substr = arg0.slice(1);
                num3 = -1;
                self.s = -1;
              } else {
                num = 1;
                self.s = 1;
                substr = arg0;
              }
              tmp5 = re8;
              if (re8.test(substr)) {
                tmp8 = parseDecimal;
                tmp9 = parseDecimal(self, substr);
                return;
              } else {
                tmp6 = globalThis;
                _Error = Error;
                tmp7 = c4;
                throw Error(c4 + substr);
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
  constructor(num) {
    let d;
    let tmp14;
    const self = this;
    if (this instanceof Decimal) {
      self.constructor = Decimal;
      if (num instanceof Decimal) {
        ({ s: self.s, e: self.e, d } = num);
        self.d = d && d.slice();
        d && d.slice();
      } else if (typeof num === "number") {
        {
          let str;
          if (num > 0) {
            self.s = 1;
            str = num;
          } else if (num < 0) {
            str = -num;
            self.s = -1;
          } else {
            self.s = 0;
            self.e = 0;
            self.d = [0];
          }
          if (str === ~(~str)) {
            if (str < 10000000) {
              self.e = 0;
              const items = [str];
              self.d = items;
            }
            return tmp14;
          }
          parseDecimal(self, str.toString());
          tmp14 = self;
        }
      } else if (typeof num !== "string") {
        const _Error2 = Error;
        throw Error(c4 + num);
      } else {
        let substr;
        if (45 === num.charCodeAt(0)) {
          substr = num.slice(1);
          self.s = -1;
        } else {
          self.s = 1;
          substr = num;
        }
        if (re8.test(substr)) {
          parseDecimal(self, substr);
        } else {
          const _Error = Error;
          throw Error(c4 + substr);
        }
      }
    } else {
      const tmpResult = Decimal(num);
      return tmpResult;
    }
  }
}
Decimal.prototype = obj2;
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
    let tmp2 = num;
    if (!obj.hasOwnProperty(tmp)) {
      obj[tmp] = undefined[tmp];
    }
    num = num + 1;
  } while (num < items.length);
}
Decimal.config(obj);
Decimal.Decimal = Decimal;
Decimal.default = Decimal;
const _window = Decimal(1);
Decimal(1);
if (typeof globalThis.define === "function") {
  const define2 = globalThis.define;
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