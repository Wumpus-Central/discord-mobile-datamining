// === Module 13987: ? ===

// Module 13987
let arr1, formatted, items3, powResult, replaced1, tmp34, tmp47, tmp50, tmp51, tmp54, tmp57, tmp58, tmp59, tmp65, tmp66, tmp69, tmp70;

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
let fn29;
let fn3;
let fn30;
let fn31;
let fn32;
let fn33;
let fn34;
let fn35;
let fn36;
let fn37;
let fn38;
let fn39;
let fn4;
let fn40;
let fn41;
let fn42;
let fn43;
let fn5;
let fn6;
let fn7;
let fn8;
let fn9;
let self = this;
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
        sum = text;
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
function checkRoundingDigits(d, precision, rounding, arg3) {
  let num3;
  let tmp10;
  let diff = precision;
  let first = d[0];
  let tmp3 = precision;
  if (first >= 10) {
    do {
      diff = diff - 1;
      first = first / 10;
      tmp3 = diff;
    } while (10 <= first);
  }
  const diff1 = tmp3 - 1;
  if (diff1 < 0) {
    sum = diff1 + 7;
    num3 = 0;
  } else {
    const _Math = Math;
    num3 = Math.ceil((diff1 + 1) / 7);
    sum = diff1 % 7;
  }
  const tmp8 = pow(10, 7 - sum);
  if (null == arg3) {
    if (sum < 3) {
      let tmp21;
      if (0 === sum) {
        tmp21 = tmp9 / 100 | 0;
      } else {
        tmp21 = tmp9;
        if (1 === sum) {
          tmp21 = tmp9 / 10 | 0;
        }
      }
      let tmp22 = rounding < 4 && 99999 === tmp21;
      if (!tmp22) {
        tmp22 = rounding > 3 && 49999 === tmp21;
        const tmp23 = rounding > 3 && 49999 === tmp21;
      }
      if (!tmp22) {
        tmp22 = 50000 === tmp21;
      }
      if (!tmp22) {
        tmp22 = 0 === tmp21;
      }
      tmp10 = tmp22;
    } else {
      let tmp16 = rounding < 4 && tmp9 + 1 == tmp8;
      if (!tmp16) {
        tmp16 = rounding > 3 && tmp9 + 1 === tmp8 / 2;
        const tmp17 = rounding > 3 && tmp9 + 1 === tmp8 / 2;
      }
      if (tmp16) {
        const tmp18 = d[num3 + 1] / tmp8 / 100 | 0;
        tmp16 = tmp18 === pow(10, sum - 2) - 1;
      }
      if (!tmp16) {
        const result = tmp8 / 2;
        tmp16 = (tmp9 === result || 0 === tmp9) && !(d[num3 + 1] / tmp8 / 100 | 0);
        const tmp20 = (tmp9 === result || 0 === tmp9) && !(d[num3 + 1] / tmp8 / 100 | 0);
      }
      tmp10 = tmp16;
    }
  } else if (sum < 4) {
    let tmp13;
    if (0 === sum) {
      tmp13 = tmp9 / 1000 | 0;
    } else if (1 === sum) {
      tmp13 = tmp9 / 100 | 0;
    } else {
      tmp13 = tmp9;
      if (2 === sum) {
        tmp13 = tmp9 / 10 | 0;
      }
    }
    let tmp14 = (arg3 || rounding < 4) && 9999 === tmp13;
    if (!tmp14) {
      tmp14 = !arg3 && rounding > 3 && 4999 === tmp13;
      const tmp15 = !arg3 && rounding > 3 && 4999 === tmp13;
    }
    tmp10 = tmp14;
  } else {
    tmp10 = (arg3 || rounding < 4) && tmp9 + 1 == tmp8;
    if (!tmp10) {
      tmp10 = !arg3 && rounding > 3 && tmp9 + 1 === tmp8 / 2;
      const tmp11 = !arg3 && rounding > 3 && tmp9 + 1 === tmp8 / 2;
    }
    if (tmp10) {
      const tmp12 = d[num3 + 1] / tmp8 / 1000 | 0;
      tmp10 = tmp12 === pow(10, sum - 3) - 1;
    }
  }
  return tmp10;
}
function convertBase(replaced, c19, c192) {
  let tmp5;
  const items = [0];
  const length = replaced.length;
  for (let num = 0; num < length; num = num + 1) {
    let num2;
    let tmp2 = +items.length;
    let diff = tmp2 - 1;
    if (tmp2) {
      do {
        items[diff] = items[diff] * c19;
        tmp5 = +diff;
        diff = tmp5 - 1;
      } while (tmp5);
    }
    let indexOf = "0123456789abcdef".indexOf;
    items[0] = items[0] + "0123456789abcdef".indexOf(replaced.charAt(num));
    for (let num2 = 0; num2 < items.length; num2 = num2 + 1) {
      if (items[num2] > tmp) {
        sum = num2 + 1;
        if (undefined === items[sum]) {
          items[sum] = 0;
        }
        items[sum] = items[sum] + (items[num2] / c19 | 0);
        items[num2] = items[num2] % c19;
      }
    }
  }
  return items.reverse();
}
function finalise(constructor1, precision, rounding, flag) {
  let tmp11;
  let tmp38;
  const constructor = constructor1.constructor;
  if (null != precision) {
    const d = constructor1.d;
    if (d) {
      let num6;
      let sum3;
      let num8;
      let num10;
      let num9;
      let first = d[0];
      let num3 = 1;
      let num4 = 1;
      if (first >= 10) {
        do {
          num3 = num3 + 1;
          first = first / 10;
          num4 = num3;
        } while (10 <= first);
      }
      let tmp2 = flag;
      const diff = precision - num4;
      if (diff < 0) {
        let tmp23;
        sum = diff + 7;
        const first1 = d[0];
        num9 = first1 / pow(10, num4 - precision - 1) % 10 | 0;
        num10 = 0;
        num6 = first1;
        sum3 = precision;
        num8 = num4;
        if (!tmp2) {
          tmp2 = precision < 0;
        }
        if (!tmp2) {
          tmp2 = undefined !== d[num10 + 1];
        }
        if (!tmp2) {
          let result = num6;
          if (sum3 >= 0) {
            result = num6 % pow(10, num8 - sum3 - 1);
          }
          tmp2 = result;
        }
        if (rounding < 4) {
          if (!num9) {
            num9 = tmp2;
          }
          if (num9) {
            let tmp24 = 0 == rounding;
            if (!tmp24) {
              let num16 = 2;
              if (constructor1.s < 0) {
                num16 = 3;
              }
              tmp24 = rounding == num16;
            }
            num9 = tmp24;
          }
          tmp23 = num9;
        } else {
          tmp23 = num9 > 5;
          if (5 >= num9) {
            let tmp18 = 5 === num9;
            if (5 === num9) {
              let tmp19 = 4 == rounding || tmp2;
              if (!tmp19) {
                let tmp20 = 6 == rounding;
                if (tmp20) {
                  let tmp21;
                  if (0 < sum) {
                    let num14 = 0;
                    if (sum3 > 0) {
                      num14 = num6 / pow(10, num8 - sum3);
                    }
                    tmp21 = num14;
                  } else {
                    tmp21 = d[num10 - 1];
                  }
                  tmp20 = tmp21 % 10 & 1;
                }
                tmp19 = tmp20;
              }
              if (!tmp19) {
                let num15 = 7;
                if (constructor1.s < 0) {
                  num15 = 8;
                }
                tmp19 = rounding == num15;
              }
              tmp18 = tmp19;
            }
            tmp23 = tmp18;
          }
        }
        if (precision >= 1) {
          if (d[0]) {
            let diff1;
            let num18;
            if (0 === sum) {
              d.length = num10;
              diff1 = num10 - 1;
              num18 = 1;
            } else {
              d.length = num10 + 1;
              num18 = pow(10, 7 - sum);
              let num19 = 0;
              if (sum3 > 0) {
                const result1 = num6 / pow(10, num8 - sum3);
                num19 = (result1 % pow(10, sum3) | 0) * num18;
              }
              d[num10] = num19;
              diff1 = num10;
            }
            if (tmp23) {
              while (0 != diff1) {
                d[diff1] = d[diff1] + num18;
                if (d[diff1] == c19) {
                  let tmp31 = +diff1;
                  diff1 = tmp31 - 1;
                  d[tmp31] = 0;
                  num18 = 1;
                  continue;
                }
              }
              let first2 = d[0];
              let num20 = 1;
              let num21 = 1;
              if (first2 >= 10) {
                do {
                  num20 = num20 + 1;
                  first2 = first2 / 10;
                  num21 = num20;
                } while (10 <= first2);
              }
              let sum1 = d[0] + num18;
              d[0] = sum1;
              let num22 = 1;
              let num23 = 1;
              if (sum1 >= 10) {
                do {
                  num22 = num22 + 1;
                  sum1 = sum1 / 10;
                  num23 = num22;
                } while (10 <= sum1);
              }
              if (num21 !== num23) {
                constructor1.e = constructor1.e + 1;
                if (d[0] == c19) {
                  d[0] = 1;
                }
              }
            }
            let diff2 = d.length - 1;
            if (0 === d[diff2]) {
              do {
                let arr = d.pop();
                let diff3 = diff2 - 1;
                diff2 = diff3;
                tmp38 = d[diff3];
              } while (0 === tmp38);
            }
          }
        }
        d.length = 0;
        if (tmp23) {
          const diff4 = precision - (constructor1.e + 1);
          d[0] = pow(10, (7 - diff4 % 7) % 7);
          constructor1.e = -diff4 || 0;
        } else {
          constructor1.e = 0;
          d[0] = 0;
        }
        return constructor1;
      } else {
        const _Math = Math;
        const rounded = Math.ceil((diff + 1) / 7);
        if (rounded >= d.length) {
          if (tmp2) {
            let sum2 = tmp8 + 1;
            if (+d.length <= rounded) {
              do {
                let arr3 = d.push(0);
                tmp11 = +sum2;
                sum2 = tmp11 + 1;
              } while (tmp11 <= rounded);
            }
            const result2 = diff % 7;
            sum3 = result2 - 7 + 1;
            num10 = rounded;
            num6 = 0;
            num9 = 0;
            sum = result2;
            num8 = 1;
          }
        } else {
          num6 = d[rounded];
          let result3 = num6;
          let num7 = 1;
          num8 = 1;
          if (num6 >= 10) {
            do {
              num7 = num7 + 1;
              result3 = result3 / 10;
              num8 = num7;
            } while (10 <= result3);
          }
          sum = diff % 7;
          sum3 = sum - 7 + num8;
          num9 = 0;
          if (sum3 >= 0) {
            num9 = num6 / pow(10, num8 - sum3 - 1) % 10 | 0;
          }
          num10 = rounded;
        }
      }
    } else {
      return constructor1;
    }
  }
  if (c8) {
    if (constructor1.e > constructor.maxE) {
      constructor1.d = null;
      constructor1.e = NaN;
    } else if (constructor1.e < constructor.minE) {
      constructor1.e = 0;
      constructor1.d = [0];
    }
  }
  return constructor1;
}
function finiteToString(constructor1, arg1, precision) {
  let tmp14;
  let tmp17;
  let tmp24;
  let tmp28;
  let tmp36;
  let tmp44;
  if (constructor1.isFinite()) {
    let sum1;
    const e = constructor1.e;
    const arr = digitsToString(constructor1.d);
    if (arg1) {
      if (precision) {
        const diff = precision - length;
        if (diff > 0) {
          const text = `${arr.charAt(0)}.`;
          let diff1 = tmp42 - 1;
          let str22 = "";
          let str24 = "";
          const text1 = `${arr.charAt(0)}.${arr.slice(1)}`;
          if (+diff) {
            do {
              str22 = `0`;
              tmp44 = +diff1;
              diff1 = tmp44 - 1;
              str24 = str22;
            } while (tmp44);
          }
          sum = text1 + str24;
        }
        let str25 = "e+";
        if (constructor1.e < 0) {
          str25 = "e";
        }
        sum1 = sum + str25 + constructor1.e;
      }
      sum = arr;
      if (arr.length > 1) {
        const text2 = `${arr.charAt(0)}.`;
        sum = `${arr.charAt(0)}.${arr.slice(1)}`;
      }
    } else if (e < 0) {
      let tmp31;
      const diff2 = -e - 1;
      let diff3 = diff2 - 1;
      let str15 = "";
      let str16 = "";
      if (diff2) {
        do {
          str15 = `0`;
          tmp28 = diff3;
          diff3 = diff3 - 1;
          str16 = str15;
        } while (tmp28);
      }
      const _HermesInternal2 = HermesInternal;
      const combined = "0." + str16 + arr;
      let tmp32 = precision;
      if (tmp32) {
        const diff4 = precision - length;
        tmp32 = diff4 > 0;
        tmp31 = diff4;
      }
      sum1 = combined;
      if (tmp32) {
        let diff5 = tmp34 - 1;
        let str18 = "";
        let str19 = "";
        if (+tmp31) {
          do {
            str18 = `0`;
            tmp36 = +diff5;
            diff5 = tmp36 - 1;
            str19 = str18;
          } while (tmp36);
        }
        sum1 = combined + str19;
      }
    } else if (e >= arr.length) {
      let tmp19;
      const diff6 = e + 1 - length;
      let diff7 = diff6 - 1;
      let str8 = "";
      let str9 = "";
      if (diff6) {
        do {
          str8 = `0`;
          tmp17 = diff7;
          diff7 = diff7 - 1;
          str9 = str8;
        } while (tmp17);
      }
      let tmp18 = precision;
      if (tmp18) {
        const diff8 = precision - e - 1;
        tmp18 = diff8 > 0;
        tmp19 = diff8;
      }
      const sum2 = arr + str9;
      sum1 = sum2;
      if (tmp18) {
        let diff9 = tmp22 - 1;
        let str10 = "";
        let str11 = "";
        if (+tmp19) {
          do {
            str10 = `0`;
            tmp24 = +diff9;
            diff9 = tmp24 - 1;
            str11 = str10;
          } while (tmp24);
        }
        const _HermesInternal = HermesInternal;
        sum1 = sum2 + "." + str11;
      }
    } else {
      const sum3 = e + 1;
      let text4 = arr;
      if (sum3 < arr.length) {
        const text3 = `${arr.slice(0, tmp45)}.`;
        text4 = `${arr.slice(0, tmp45)}.${arr.slice(tmp45)}`;
      }
      let tmp7 = precision;
      let tmp8 = sum3;
      if (precision) {
        const diff10 = precision - length;
        tmp7 = diff10 > 0;
        tmp8 = diff10;
      }
      sum1 = text4;
      if (tmp7) {
        let text5 = text4;
        if (e + 1 === arr.length) {
          text5 = `${tmp6}.`;
        }
        let diff11 = tmp12 - 1;
        let str3 = "";
        let str5 = "";
        if (+tmp8) {
          do {
            str3 = `0`;
            tmp14 = +diff11;
            diff11 = tmp14 - 1;
            str5 = str3;
          } while (tmp14);
        }
        sum1 = text5 + str5;
      }
    }
    return sum1;
  } else {
    const _String = String;
    return String(constructor1.s * constructor1.s / 0);
  }
}
function intPow(constructor, constructor1, diff, precision) {
  let tmp3;
  let tmp8;
  obj = constructor1;
  let tmp = diff;
  obj2 = new constructor(1);
  const rounded = Math.ceil(precision / 7 + 4);
  c8 = false;
  while (true) {
    let result = tmp % 2;
    flag = tmp3;
    tmp8 = obj2;
    if (result) {
      let timesResult = obj2.times(obj);
      let d1 = timesResult.d;
      let flag2;
      if (d1.length > rounded) {
        d1.length = rounded;
        flag2 = true;
      }
      result = flag2;
      tmp8 = timesResult;
    }
    if (result) {
      flag = true;
    }
    let tmp11 = floor(tmp / 2);
    if (0 === tmp11) {
      break;
    } else {
      let timesResult1 = obj.times(obj);
      let d2 = timesResult1.d;
      obj2 = tmp8;
      tmp3 = flag;
      tmp = tmp11;
      obj = timesResult1;
      if (d2.length <= rounded) {
        continue;
      } else {
        d2.length = rounded;
        obj2 = tmp8;
        tmp3 = flag;
        tmp = tmp11;
        obj = timesResult1;
        continue;
      }
      continue;
    }
  }
  diff = tmp8.d.length - 1;
  if (flag) {
    flag = 0 === tmp8.d[diff];
  }
  if (flag) {
    const d = tmp8.d;
    d[diff] = d[diff] + 1;
  }
  c8 = true;
  return tmp8;
}
function naturalExponential(constructor1, precision) {
  let e;
  let num19;
  let rounding;
  let tmp33;
  let tmp35;
  const constructor = constructor1.constructor;
  ({ rounding, precision } = constructor);
  if (constructor1.d) {
    if (constructor1.d[0]) {
      if (constructor1.e <= 17) {
        let tmp = precision;
        if (null == precision) {
          c8 = false;
          tmp = precision;
        }
        self = this;
        const self2 = this;
        constructor1 = new constructor(0.03125);
        let num6 = 0;
        obj = constructor1;
        let num7 = 0;
        let tmp4 = constructor1;
        if (constructor1.e > -2) {
          do {
            let timesResult = obj.times(constructor1);
            num6 = num6 + 5;
            obj = timesResult;
            num7 = num6;
            tmp4 = timesResult;
            e = timesResult.e;
          } while (e > -2);
        }
        const _Math = Math;
        const _Math2 = Math;
        const tmp8 = Math.log(pow(2, num7)) / Math.LN10 * 2 + 5 | 0;
        sum = tmp + tmp8;
        const self3 = this;
        const self4 = this;
        const constructor2 = new constructor(1);
        obj2 = constructor2;
        constructor.precision = sum;
        let num13 = 0;
        let num14 = 0;
        let obj3 = constructor2;
        let obj4 = constructor2;
        while (true) {
          let tmp13 = finalise;
          let timesResult1 = obj3.times(tmp4);
          let tmp15 = finalise(timesResult1, sum, 1);
          let sum1 = num13 + 1;
          let timesResult2 = obj4.times(sum1);
          let plusResult = obj2.plus(f143737(timesResult1, timesResult2, sum, 1));
          let arr = digitsToString(plusResult.d);
          let substr = arr.slice(0, sum);
          let arr2 = digitsToString(obj2.d);
          let num16 = sum1;
          let sum3 = num14;
          let tmp29 = sum;
          if (substr === arr2.slice(0, sum)) {
            let obj5 = obj2;
            let diff = tmp11;
            tmp35 = obj2;
            if (num7) {
              do {
                let timesResult3 = obj5.times(obj5);
                let tmp32 = finalise(timesResult3, sum, 1);
                obj5 = timesResult3;
                tmp33 = diff;
                diff = diff - 1;
                tmp35 = timesResult3;
                tmp13 = finalise;
              } while (tmp33);
            }
            if (null != precision) {
              break;
            } else {
              if (num14 < 3) {
                if (checkRoundingDigits(tmp35.d, sum - tmp8, rounding, tmp25)) {
                  let sum2 = sum + 10;
                  constructor.precision = sum2;
                  let self5 = this;
                  let self6 = this;
                  let constructor3 = new constructor(1);
                  plusResult = constructor3;
                  sum3 = num14 + 1;
                  num16 = 0;
                  tmp29 = sum2;
                  timesResult1 = constructor3;
                  timesResult2 = constructor3;
                }
              }
              constructor.precision = precision;
              let flag2 = true;
              c8 = true;
              let flag3 = true;
              return tmp13(tmp35, precision, rounding, true);
            }
          }
          num13 = num16;
          num14 = sum3;
          sum = tmp29;
          obj2 = plusResult;
          obj3 = timesResult1;
          obj4 = timesResult2;
          continue;
        }
        constructor.precision = precision;
        return tmp35;
      }
    }
  }
  if (constructor1.d) {
    let num21 = 1;
    if (constructor1.d[0]) {
      let num23 = Infinity;
      if (constructor1.s < 0) {
        num23 = 0;
      }
      num21 = num23;
    }
    num19 = num21;
  } else {
    num19 = NaN;
    if (constructor1.s) {
      let num20 = 0;
      if (constructor1.s >= 0) {
        num20 = constructor1;
      }
      num19 = num20;
    }
  }
  const constructor4 = new constructor(num19);
  return constructor4;
}
function naturalLogarithm(self, sum) {
  let constructor;
  let d;
  let num20;
  let precision;
  let rounding;
  let tmp32;
  ({ d, constructor } = self);
  ({ rounding, precision } = constructor);
  if (self.s >= 0) {
    if (d) {
      if (d[0]) {
        let tmp4 = sum;
        if (null == sum) {
          c8 = false;
          tmp4 = precision;
        }
        sum = tmp4 + 10;
        constructor.precision = sum;
        const str = digitsToString(d);
        const charAtResult = str.charAt(0);
        const _Math = Math;
        const e = self.e;
        if (Math.abs(e) < 1500000000000000) {
          let num5;
          let tmp14;
          let num7;
          let tmp15;
          let arr;
          if (charAtResult >= 7) {
            let constructor1;
            let sum1;
            tmp14 = self;
            num7 = 1;
            tmp15 = charAtResult;
            arr = str;
            if (1 == charAtResult) {
              obj = self;
              num5 = 1;
              tmp14 = self;
              num7 = 1;
              tmp15 = charAtResult;
              arr = str;
            }
            const e2 = tmp14.e;
            if (tmp15 > 1) {
              const self3 = this;
              const self4 = this;
              constructor1 = new constructor("0." + arr);
              sum1 = e2 + 1;
            } else {
              const text = `${tmp15}.`;
              self = this;
              const self2 = this;
              constructor1 = new constructor(`${tmp15}.` + arr.slice(1));
              sum1 = e2;
            }
            const minusResult = constructor1.minus(1);
            const obj3 = f143737(minusResult, constructor1.plus(1), sum, 1);
            const timesResult = obj3.times(obj3);
            finalise(timesResult, sum, 1);
            let num13 = 3;
            let tmp30 = timesResult;
            let tmp31 = sum;
            let obj4 = obj3;
            let obj5 = obj3;
            while (true) {
              let timesResult1 = obj5.times(tmp30);
              let tmp35 = finalise(timesResult1, tmp31, 1);
              let self5 = this;
              let self6 = this;
              let plus = obj4.plus;
              let constructor2 = new constructor(num13);
              let plusResult = plus(f143737(timesResult1, constructor2, tmp31, 1));
              let arr2 = digitsToString(plusResult.d);
              let substr = arr2.slice(0, tmp31);
              let arr3 = digitsToString(obj4.d);
              let tmp45 = tmp30;
              let num16 = num13;
              let tmp49 = tmp31;
              let num17 = tmp32;
              if (substr === arr3.slice(0, tmp31)) {
                let timesResult2 = obj4.times(2);
                let tmp50Result = timesResult2;
                if (0 !== sum1) {
                  let sum2 = tmp31 + 2;
                  if (sum2 > closure_20) {
                    break;
                  } else {
                    let self13 = this;
                    let self14 = this;
                    let constructor3 = new constructor(cloneResult1);
                    let flag8 = true;
                    let tmp33Result = finalise(constructor3, sum2, 1, true);
                    tmp50Result = tmp50(constructor3.times("" + sum1));
                  }
                }
                let self7 = this;
                let self8 = this;
                let constructor4 = new constructor(num7);
                let tmp37Result = f143737(tmp50Result, constructor4, tmp46, 1);
                if (null != sum) {
                  constructor.precision = precision;
                  return tmp37Result;
                } else if (checkRoundingDigits(tmp37Result.d, tmp31 - 10, rounding, tmp48)) {
                  let sum3 = tmp31 + 10;
                  constructor.precision = sum3;
                  let minusResult1 = constructor1.minus(1);
                  let tmp37Result2 = f143737(minusResult1, constructor1.plus(1), sum3, 1);
                  let timesResult3 = tmp37Result2.times(tmp37Result2);
                  let tmp33Result3 = finalise(timesResult3, sum3, 1);
                  tmp45 = timesResult3;
                  tmp49 = sum3;
                  plusResult = tmp37Result2;
                  num17 = 1;
                  timesResult1 = tmp37Result2;
                  num16 = 1;
                } else {
                  constructor.precision = precision;
                  c8 = true;
                  let flag5 = true;
                  let tmp33Result4 = finalise(tmp37Result, precision, rounding, true);
                  return tmp37Result;
                }
              }
              num13 = num16 + 2;
              tmp30 = tmp45;
              tmp31 = tmp49;
              obj4 = plusResult;
              tmp32 = num17;
              obj5 = timesResult1;
              continue;
            }
            c8 = true;
            if (precision) {
              constructor.precision = precision;
            }
            const _Error2 = Error;
            throw Error(c10);
          } else {
            num5 = 1;
            obj = self;
          }
          while (true) {
            let timesResult4 = obj.times(self);
            let str2 = digitsToString(timesResult4.d);
            let charAtResult1 = str2.charAt(0);
            let sum4 = num5 + 1;
            if (charAtResult1 < 7) {
              obj = timesResult4;
              num5 = sum4;
            }
            tmp14 = timesResult4;
            num7 = sum4;
            tmp15 = charAtResult1;
            arr = str2;
            if (1 != charAtResult1) {
              break;
            } else {
              obj = timesResult4;
              num5 = sum4;
              tmp14 = timesResult4;
              num7 = sum4;
              tmp15 = charAtResult1;
              arr = str2;
              if (str2.charAt(1) <= 3) {
                break;
              }
            }
          }
        } else {
          const sum5 = sum + 2;
          if (sum5 > closure_20) {
            c8 = true;
            if (precision) {
              constructor.precision = precision;
            }
            const _Error = Error;
            throw Error(c10);
          } else {
            const self9 = this;
            const self10 = this;
            const constructor5 = new constructor(cloneResult1);
            finalise(constructor5, sum5, 1, true);
            const text1 = `${tmp7}.`;
            const self11 = this;
            const self12 = this;
            const timesResult5 = constructor5.times("" + e);
            const constructor6 = new constructor(`${tmp7}.` + str.slice(1));
            const obj8 = naturalLogarithm(constructor6, sum - 10);
            const plusResult1 = obj8.plus(timesResult5);
            constructor.precision = precision;
            if (null == sum) {
              c8 = true;
              finalise(plusResult1, precision, rounding, true);
            }
            return plusResult1;
          }
        }
      }
    }
  }
  if (!d) {
    let num22 = NaN;
    if (1 == self.s) {
      let num23 = 0;
      if (!d) {
        num23 = self;
      }
      num22 = num23;
    }
    num20 = num22;
  } else {
    num20 = -Infinity;
  }
  const constructor7 = new constructor(num20);
  return constructor7;
}
function parseDecimal(d, arr) {
  let charCodeAtResult;
  let charCodeAtResult1;
  let length;
  let substr;
  let sum2;
  let tmp25;
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
      sum = num2 + 1;
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
    let tmp15;
    const diff1 = tmp7 - num3;
    const diff2 = length - num3 - 1;
    d.e = diff2;
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
      let tmp18 = sum1;
      let tmp19 = sum1;
      if (sum1 < diff3) {
        do {
          let d1 = d.d;
          sum2 = tmp18 + 7;
          let arr2 = d1.push(+substr1.slice(tmp18, sum2));
          tmp18 = sum2;
          tmp19 = sum2;
        } while (sum2 < diff3);
      }
      const substr2 = substr1.slice(tmp19);
      diff4 = 7 - substr2.length;
      tmp15 = substr2;
    } else {
      diff4 = sum1 - diff1;
      tmp15 = substr1;
    }
    let diff5 = diff4 - 1;
    let text = tmp15;
    let tmp24 = tmp15;
    if (diff4) {
      do {
        text = `${tmp23}0`;
        tmp25 = diff5;
        diff5 = diff5 - 1;
        tmp24 = text;
      } while (tmp25);
    }
    const d2 = d.d;
    d2.push(+tmp24);
    if (c8) {
      if (d.e > d.constructor.maxE) {
        d.d = null;
        d.e = NaN;
      } else if (d.e < d.constructor.minE) {
        d.e = 0;
        d.d = [0];
      }
    }
  } else {
    d.e = 0;
    d.d = [0];
  }
  return d;
}
function taylorSeries(constructor, arg1, timesResult, constructor1, arg4) {
  let plusResult1;
  let tmp = arg1;
  const precision = constructor.precision;
  const rounded = Math.ceil(precision / 7);
  c8 = false;
  timesResult = timesResult.times(timesResult);
  obj = new constructor(constructor1);
  obj2 = constructor1;
  while (true) {
    let plusResult;
    let timesResult1 = obj.times(timesResult);
    sum = tmp + 1;
    self = this;
    let self2 = this;
    let tmp7 = new constructor(tmp * sum);
    let obj3 = f143737(timesResult1, tmp7, precision, 1);
    if (arg4) {
      plusResult = obj2.plus(obj3);
    } else {
      plusResult = obj2.minus(obj3);
    }
    let sum1 = sum + 1;
    let timesResult2 = obj3.times(timesResult);
    let sum2 = sum1 + 1;
    let sum3 = sum2 + 1;
    let self3 = this;
    let self4 = this;
    let tmp16 = new constructor(sum1 * sum2);
    let tmp4Result = f143737(timesResult2, tmp16, precision, 1);
    plusResult1 = plusResult.plus(tmp4Result);
    obj = tmp4Result;
    obj2 = plusResult1;
    tmp = sum3;
    if (undefined === plusResult1.d[rounded]) {
      continue;
    } else {
      let tmp25 = rounded;
      if (plusResult1.d[rounded] === plusResult.d[rounded]) {
        let tmp23 = +rounded;
        let diff = tmp23 - 1;
        tmp25 = diff;
        if (tmp23) {
          tmp25 = diff;
          while (plusResult1.d[diff] === plusResult.d[diff]) {
            let tmp27 = +diff;
            diff = tmp27 - 1;
            tmp25 = diff;
            if (!tmp27) {
              break;
            }
          }
        }
      }
      obj = tmp4Result;
      obj2 = plusResult1;
      tmp = sum3;
      if (-1 == tmp25) {
        break;
      }
    }
    continue;
  }
  c8 = true;
  plusResult1.d.length = rounded + 1;
  return plusResult1;
}
function toLessThanHalfPi(constructor, self) {
  const precision = constructor.precision;
  if (precision > closure_21) {
    const _Error = Error;
    throw Error(c10);
  } else {
    self = this;
    const self2 = this;
    const obj5 = new constructor(cloneResult2);
    let num6 = 1;
    finalise(obj5, precision, 1, true);
    const timesResult = obj5.times(0.5);
    const absResult = self.abs();
    if (absResult.lte(timesResult)) {
      if (self.s < 0) {
        num6 = 4;
      }
      return absResult;
    } else {
      let obj3;
      const divToIntResult = absResult.divToInt(obj5);
      if (divToIntResult.isZero()) {
        obj3 = absResult;
      } else {
        const minusResult = absResult.minus(divToIntResult.times(obj5));
        const tmp2 = num6 & divToIntResult.d[divToIntResult.d.length - num6];
        if (minusResult.lte(timesResult)) {
          if (tmp2) {
          }
          return minusResult;
        } else {
          obj3 = minusResult;
        }
      }
      const minusResult1 = obj3.minus(obj5);
      return minusResult1.abs();
    }
  }
}
function toStringBinary(isFinite, c19, arg2, arg3) {
  let d;
  let e;
  let precision;
  let result1;
  let rounding;
  let sum2;
  let sum6;
  let tmp20;
  let tmp55;
  let tmp6;
  let tmp60;
  let tmp74;
  const constructor = isFinite.constructor;
  if (undefined !== arg2) {
    if (arg2 === ~(~arg2)) {
      if (arg2 >= 1) {
        if (arg2 <= 1000000000) {
          if (undefined === arg3) {
            rounding = constructor.rounding;
            precision = arg2;
          } else {
            if (arg3 === ~(~arg3)) {
              if (arg3 >= 0) {
                precision = arg2;
                rounding = arg3;
              }
            }
            const _Error = Error;
            throw Error(c9 + arg3);
          }
        }
      }
    }
    const _Error2 = Error;
    throw Error(c9 + arg2);
  } else {
    ({ precision, rounding } = constructor);
  }
  if (isFinite.isFinite()) {
    let str3;
    let tmp21;
    let num4 = c19;
    let diff = precision;
    if (undefined !== arg2) {
      if (16 === c19) {
        diff = 4 * precision - 3;
        num4 = 2;
      } else {
        num4 = 2;
        diff = precision;
        if (8 === c19) {
          diff = 3 * precision - 2;
          num4 = 2;
        }
      }
    }
    const arr = finiteToString(isFinite);
    const index = arr.indexOf(".");
    let tmp12 = arr;
    if (index >= 0) {
      const replaced = arr.replace(".", "");
      self = this;
      const self2 = this;
      const constructor1 = new constructor(1);
      constructor1.e = replaced.length - index;
      constructor1.d = convertBase(finiteToString(constructor1), 10, num4);
      constructor1.e = constructor1.d.length;
      tmp12 = replaced;
    }
    const arr3 = convertBase(tmp12, 10, num4);
    let diff1 = length - 1;
    if (0 == arr3[diff1]) {
      do {
        let arr2 = arr3.pop();
        let diff2 = diff1 - 1;
        diff1 = diff2;
        tmp20 = arr3[diff2];
      } while (0 == tmp20);
    }
    if (arr3[0]) {
      let tmp31;
      let tmp32;
      let tmp35;
      if (index < 0) {
        e = length - 1;
        d = arr3;
        tmp31 = isFinite;
      } else {
        const self3 = this;
        const self4 = this;
        const constructor2 = new constructor(isFinite);
        constructor2.d = arr3;
        constructor2.e = arr3.length;
        tmp31 = f143737(constructor2, tmp11, diff, rounding, 0, num4);
        ({ d, e } = tmp31);
        tmp32 = flag;
      }
      if (!tmp32) {
        tmp32 = undefined !== d[diff + 1];
      }
      if (rounding < 4) {
        let tmp39 = undefined !== tmp33 || tmp32;
        if (tmp39) {
          let tmp40 = 0 === rounding;
          if (!tmp40) {
            let num22 = 2;
            if (tmp31.s < 0) {
              num22 = 3;
            }
            tmp40 = rounding === num22;
          }
          tmp39 = tmp40;
        }
        tmp35 = tmp39;
      } else {
        const result = num4 / 2;
        tmp35 = tmp33 > result;
        if (!tmp35) {
          let tmp36 = tmp33 === result;
          if (tmp36) {
            let tmp37 = 4 === rounding || tmp32;
            if (!tmp37) {
              tmp37 = 6 === rounding && 1 & d[diff - 1];
              const tmp38 = 6 === rounding && 1 & d[diff - 1];
            }
            if (!tmp37) {
              let num21 = 7;
              if (tmp31.s < 0) {
                num21 = 8;
              }
              tmp37 = rounding === num21;
            }
            tmp36 = tmp37;
          }
          tmp35 = tmp36;
        }
      }
      d.length = diff;
      let tmp41 = e;
      if (tmp35) {
        let diff3 = diff - 1;
        sum = d[diff3] + 1;
        d[diff3] = sum;
        const diff4 = num4 - 1;
        let tmp45 = e;
        tmp41 = e;
        if (sum > diff4) {
          do {
            d[diff3] = 0;
            let sum1 = tmp45;
            if (!diff3) {
              sum1 = tmp45 + 1;
              let arr6 = d.unshift(1);
            }
            let diff5 = diff3 - 1;
            sum2 = d[diff5] + 1;
            d[diff5] = sum2;
            tmp45 = sum1;
            diff3 = diff5;
            tmp41 = sum1;
          } while (sum2 > diff4);
        }
      }
      let tmp52 = length2;
      let tmp53 = length2;
      if (!d[d.length - 1]) {
        do {
          let diff6 = tmp52 - 1;
          tmp52 = diff6;
          tmp53 = diff6;
          tmp55 = d[diff6 - 1];
        } while (!tmp55);
      }
      let str4 = "";
      let num25 = 0;
      let str6 = "";
      if (0 < tmp53) {
        do {
          let charAt = "0123456789abcdef".charAt;
          str4 = `${"0123456789abcdef".charAt(d[num25])}`;
          num25 = num25 + 1;
          str6 = str4;
        } while (num25 < tmp53);
      }
      if (undefined !== arg2) {
        let str10 = str6;
        if (tmp53 > 1) {
          if (16 !== c19) {
            if (8 !== c19) {
              const text = `${str6.charAt(0)}.`;
              str10 = `${str6.charAt(0)}.${str6.slice(1)}`;
            }
          }
          let num27 = 3;
          if (16 === c19) {
            num27 = 4;
          }
          let diff7 = tmp53 - 1;
          let text1 = str6;
          let tmp67 = str6;
          if (diff7 % num27) {
            do {
              text1 = `${tmp66}0`;
              let sum3 = diff7 + 1;
              diff7 = sum3;
              tmp67 = text1;
              result1 = sum3 % num27;
            } while (result1);
          }
          const arr4 = convertBase(tmp67, num4, c19);
          let tmp71 = length3;
          let tmp72 = length3;
          if (!arr4[arr4.length - 1]) {
            do {
              let diff8 = tmp71 - 1;
              tmp71 = diff8;
              tmp72 = diff8;
              tmp74 = arr4[diff8 - 1];
            } while (!tmp74);
          }
          let str12 = "1.";
          let num28 = 1;
          str10 = "1.";
          if (1 < tmp72) {
            do {
              let charAt2 = "0123456789abcdef".charAt;
              str12 = `1.${"0123456789abcdef".charAt(arr4[num28])}`;
              num28 = num28 + 1;
              str10 = str12;
            } while (num28 < tmp72);
          }
        }
        let str13 = "p+";
        if (tmp41 < 0) {
          str13 = "p";
        }
        str3 = str10 + str13 + tmp41;
        tmp21 = tmp31;
      } else if (tmp41 < 0) {
        let sum4 = tmp41 + 1;
        let text2 = str6;
        let tmp63 = str6;
        while (sum4) {
          text2 = `0${tmp62}`;
          sum4 = sum4 + 1;
          tmp63 = text2;
        }
        str3 = `0.${tmp63}`;
        tmp21 = tmp31;
      } else {
        const sum5 = tmp41 + 1;
        if (sum5 > tmp53) {
          let diff9 = tmp57 - 1;
          let text3 = str6;
          str3 = str6;
          tmp21 = tmp31;
          if (+sum5 - tmp53) {
            do {
              text3 = `${tmp59}0`;
              tmp60 = +diff9;
              diff9 = tmp60 - 1;
              str3 = text3;
              tmp21 = tmp31;
            } while (tmp60);
          }
        } else {
          str3 = str6;
          tmp21 = tmp31;
          if (sum5 < tmp53) {
            const text4 = `${str6.slice(0, tmp56)}.`;
            str3 = `${str6.slice(0, tmp56)}.${str6.slice(tmp56)}`;
            tmp21 = tmp31;
          }
        }
      }
    } else {
      str3 = "0";
      if (undefined !== arg2) {
        str3 = "0p+0";
      }
      tmp21 = isFinite;
    }
    let str14 = "0x";
    if (16 !== c19) {
      let str15 = "0b";
      if (2 !== c19) {
        let str16 = "";
        if (8 === c19) {
          str16 = "0o";
        }
        str15 = str16;
      }
      str14 = str15;
    }
    sum6 = str14 + str3;
    tmp6 = tmp21;
  } else {
    const _String = String;
    sum6 = String(isFinite.s * isFinite.s / 0);
    tmp6 = isFinite;
  }
  let text5 = sum6;
  if (tmp6.s < 0) {
    text5 = `-${tmp5}`;
  }
  return text5;
}
function abs(arg0) {
  obj = new this(arg0);
  return obj.abs();
}
function acos(arg0) {
  obj = new this(arg0);
  return obj.acos();
}
function acosh(arg0) {
  obj = new this(arg0);
  return obj.acosh();
}
function add(arg0, arg1) {
  obj = new this(arg0);
  return obj.plus(arg1);
}
function asin(arg0) {
  obj = new this(arg0);
  return obj.asin();
}
function asinh(arg0) {
  obj = new this(arg0);
  return obj.asinh();
}
function atan(arg0) {
  obj = new this(arg0);
  return obj.atan();
}
function atanh(arg0) {
  obj = new this(arg0);
  return obj.atanh();
}
function atan2(result2, result22) {
  let precision;
  let rounding;
  self = this;
  obj = new this(result2);
  obj2 = new this(result2);
  ({ precision, rounding } = this);
  sum = precision + 4;
  if (obj.s) {
    let atanResult1;
    if (obj2.s) {
      let _self4;
      if (!obj.d) {
        if (!obj2.d) {
          if (sum > closure_21) {
            const _Error = Error;
            throw Error(c10);
          } else {
            const self2 = this;
            const self3 = this;
            const _self = new self(cloneResult2);
            finalise(_self, sum, 1, true);
            let num3 = 0.75;
            const times = _self.times;
            if (obj2.s > 0) {
              num3 = 0.25;
            }
            const timesResult = times(num3);
            timesResult.s = obj.s;
            atanResult1 = timesResult;
          }
        }
      }
      if (obj2.d) {
        if (!obj.isZero()) {
          if (obj.d) {
            if (!obj2.isZero()) {
              if (obj2.s < 0) {
                self.precision = sum;
                self.rounding = 1;
                const atanResult = self.atan(f143737(obj, obj2, sum, 1));
                if (sum > closure_21) {
                  const _Error2 = Error;
                  throw Error(c10);
                } else {
                  let minusResult;
                  const self4 = this;
                  const self5 = this;
                  const _self1 = new self(cloneResult2);
                  finalise(_self1, sum, 1, true);
                  self.precision = precision;
                  self.rounding = rounding;
                  if (obj.s < 0) {
                    minusResult = atanResult.minus(_self1);
                  } else {
                    minusResult = atanResult.plus(_self1);
                  }
                  atanResult1 = minusResult;
                }
              } else {
                atanResult1 = self.atan(f143737(tmp, tmp3, sum, 1));
              }
            }
          }
          if (sum > closure_21) {
            const _Error3 = Error;
            throw Error(c10);
          } else {
            const self6 = this;
            const self7 = this;
            const _self2 = new self(cloneResult2);
            finalise(_self2, sum, 1, true);
            const timesResult1 = _self2.times(0.5);
            timesResult1.s = obj.s;
            atanResult1 = timesResult1;
          }
        }
      }
      if (obj2.s < 0) {
        if (precision > closure_21) {
          const _Error4 = Error;
          throw Error(c10);
        } else {
          const self10 = this;
          const self11 = this;
          const _self3 = new self(cloneResult2);
          finalise(_self3, precision, rounding, true);
          _self4 = _self3;
        }
      } else {
        const self8 = this;
        const self9 = this;
        _self4 = new self(0);
      }
      _self4.s = obj.s;
      atanResult1 = _self4;
    }
    return atanResult1;
  }
  atanResult1 = new self(NaN);
}
function cbrt(arg0) {
  obj = new this(arg0);
  return obj.cbrt();
}
function ceil(endImportTime) {
  const tmp = new this(endImportTime);
  finalise(tmp, tmp.e + 1, 2);
  return tmp;
}
function clamp(arg0, arg1, arg2) {
  obj = new this(arg0);
  return obj.clamp(arg1, arg2);
}
function config(defaults) {
  let tmp2;
  let tmp5;
  const tmp = defaults;
  if (tmp) {
    if (typeof defaults === "object") {
      self = this;
      const items = ["precision", 1, 1000000000, "rounding", 0, 8, "toExpNeg", -9000000000000000, 0, "toExpPos", 0, 9000000000000000, "maxE", 0, 9000000000000000, "minE", -9000000000000000, 0, "modulo", 0, 9];
      num = 0;
      if (0 < items.length) {
        while (true) {
          tmp2 = items[num];
          if (tmp14) {
            self[tmp2] = obj[tmp2];
          }
          tmp5 = defaults[tmp2];
          if (undefined !== tmp5) {
            if (floor(tmp5) !== tmp5) {
              break;
            } else if (tmp5 < items[num + 1]) {
              break;
            } else if (tmp5 > items[num + 2]) {
              break;
            } else {
              self[tmp2] = tmp5;
            }
          }
          num = num + 3;
        }
        const _Error = Error;
        throw Error(c9 + tmp2 + ": " + tmp5);
      }
      if (true === defaults.defaults) {
        self.crypto = obj.crypto;
      }
      const _crypto = defaults.crypto;
      if (undefined !== _crypto) {
        if (true !== _crypto) {
          if (false !== _crypto) {
            if (0 !== _crypto) {
              if (1 !== _crypto) {
                const _Error3 = Error;
                throw Error(c9 + "crypto: " + _crypto);
              }
            }
          }
        }
        if (_crypto) {
          const _crypto2 = crypto;
          if (typeof crypto !== "undefined") {
            if (crypto) {
              const _crypto3 = crypto;
              if (!crypto.getRandomValues) {
                const _crypto4 = crypto;
              }
              self.crypto = true;
            }
          }
          const _Error2 = Error;
          throw Error(c11);
        } else {
          self.crypto = false;
        }
      }
      return self;
    }
  }
  throw Error("[DecimalError] Object expected");
}
function cos(sharedValue) {
  obj = new this(sharedValue);
  return obj.cos();
}
function cosh(arg0) {
  obj = new this(arg0);
  return obj.cosh();
}
function div(sqrtResult, sqrtResult2) {
  obj = new this(sqrtResult);
  return obj.div(sqrtResult);
}
function exp(arg0) {
  obj = new this(arg0);
  return obj.exp();
}
function floor(arg0) {
  const tmp = new this(arg0);
  finalise(tmp, tmp.e + 1, 3);
  return tmp;
}
function hypot() {
  self = this;
  num = 0;
  const tmp = new this(0);
  obj = tmp;
  c8 = false;
  obj2 = tmp;
  if (0 < arguments.length) {
    while (true) {
      let plusResult;
      let self2 = this;
      let self3 = this;
      let _self = new self(arguments[num]);
      if (_self.d) {
        plusResult = obj;
        if (obj.d) {
          plusResult = obj.plus(_self.times(_self));
        }
      } else {
        plusResult = _self;
        if (_self.s) {
          break;
        }
      }
      num = num + 1;
      obj = plusResult;
      obj2 = plusResult;
    }
    c8 = true;
    const self4 = this;
    const self5 = this;
    const _self1 = new self(Infinity);
    return _self1;
  }
  c8 = true;
  return obj2.sqrt();
}
function isDecimalInstance(toStringTag) {
  flag = toStringTag instanceof map;
  if (!flag) {
    flag = toStringTag && toStringTag.toStringTag === c12;
    const tmp = toStringTag && toStringTag.toStringTag === c12;
  }
  if (!flag) {
    flag = false;
  }
  return flag;
}
function ln(arg0) {
  obj = new this(arg0);
  return obj.ln();
}
function log(arg0, arg1) {
  obj = new this(arg0);
  return obj.log(arg1);
}
function log2(arg0) {
  obj = new this(arg0);
  return obj.log(2);
}
function log10(absolute) {
  obj = new this(absolute);
  return obj.log(10);
}
function max() {
  const tmp = new this(arguments[0]);
  let tmp2 = tmp;
  num = 1;
  let tmp3 = tmp;
  if (1 < arguments.length) {
    self = this;
    const self2 = this;
    const tmp4 = new this(arguments[num]);
    obj = tmp2;
    tmp3 = tmp4;
    while (tmp4.s) {
      let cmpResult = obj.cmp(tmp4);
      let tmp8 = cmpResult === -1;
      if (!tmp8) {
        let tmp9 = 0 === cmpResult && obj.s === -1;
        tmp8 = tmp9;
      }
      if (tmp8) {
        obj = tmp4;
      }
      num = num + 1;
      tmp2 = obj;
      tmp3 = obj;
      if (num >= arguments.length) {
        break;
      }
    }
  }
  return tmp3;
}
function min() {
  const tmp = new this(arguments[0]);
  let tmp2 = tmp;
  num = 1;
  let tmp3 = tmp;
  if (1 < arguments.length) {
    self = this;
    const self2 = this;
    const tmp4 = new this(arguments[num]);
    obj = tmp2;
    tmp3 = tmp4;
    while (tmp4.s) {
      let cmpResult = obj.cmp(tmp4);
      let tmp8 = cmpResult === 1;
      if (!tmp8) {
        let tmp9 = 0 === cmpResult && obj.s === 1;
        tmp8 = tmp9;
      }
      if (tmp8) {
        obj = tmp4;
      }
      num = num + 1;
      tmp2 = obj;
      tmp3 = obj;
      if (num >= arguments.length) {
        break;
      }
    }
  }
  return tmp3;
}
function mod(arg0, arg1) {
  obj = new this(arg0);
  return obj.mod(arg1);
}
function mul(arg0, arg1) {
  obj = new this(arg0);
  return obj.mul(arg1);
}
function pow(sum, exponent) {
  obj = new this(sum);
  return obj.pow(exponent);
}
function random(arg0) {
  let first;
  let items1;
  let num2;
  let num26;
  let precision;
  let sum2;
  let sum3;
  let tmp33;
  self = this;
  const tmp = new this(1);
  if (undefined === arg0) {
    precision = self.precision;
  } else {
    if (arg0 === ~(~arg0)) {
      if (arg0 >= 1) {
        precision = arg0;
      }
    }
    const _Error = Error;
    throw Error(c9 + arg0);
  }
  const items = [];
  const rounded = Math.ceil(precision / 7);
  if (self.crypto) {
    const _crypto = crypto;
    const _crypto2 = crypto;
    if (crypto.getRandomValues) {
      const _Uint32Array = Uint32Array;
      const self2 = this;
      const self3 = this;
      const getRandomValues = _crypto2.getRandomValues;
      const uint32Array = new Uint32Array(rounded);
      const randomValues = getRandomValues(uint32Array);
      let num18 = 0;
      num2 = 0;
      if (0 < rounded) {
        do {
          let tmp18 = randomValues[num18];
          if (tmp18 >= 4290000000) {
            let _crypto5 = crypto;
            let _Uint32Array2 = Uint32Array;
            let self4 = this;
            let self5 = this;
            let getRandomValues2 = crypto.getRandomValues;
            let uint32Array1 = new Uint32Array(1);
            randomValues[num18] = getRandomValues2(uint32Array1)[0];
            sum = num18;
          } else {
            sum = num18 + 1;
            items[num18] = tmp18 % 10000000;
          }
          num18 = sum;
          num2 = sum;
        } while (sum < rounded);
      }
    } else if (_crypto2.randomBytes) {
      const _crypto3 = crypto;
      const result = rounded * 4;
      const randomBytesResult = crypto.randomBytes(result);
      let num14 = 0;
      if (0 < result) {
        do {
          let sum1 = randomBytesResult[num14] + (randomBytesResult[num14 + 1] << 8) + (randomBytesResult[num14 + 2] << 16) + ((127 & randomBytesResult[num14 + 3]) << 24);
          if (sum1 >= 2140000000) {
            let _crypto4 = crypto;
            let randomBytesResult1 = crypto.randomBytes(4);
            let copyResult = randomBytesResult1.copy(randomBytesResult, num14);
            sum2 = num14;
          } else {
            let arr = items.push(sum1 % 10000000);
            sum2 = num14 + 4;
          }
          num14 = sum2;
        } while (sum2 < result);
      }
      num2 = result / 4;
    } else {
      const _Error2 = Error;
      throw Error(c11);
    }
  } else {
    num2 = 0;
    let num4 = 0;
    if (0 < rounded) {
      do {
        sum3 = num4 + 1;
        let _Math = Math;
        items[num4] = 10000000 * Math.random() | 0;
        num4 = sum3;
        num2 = sum3;
      } while (sum3 < rounded);
    }
  }
  const result1 = precision % 7;
  const diff = num2 - 1;
  const tmp26 = items[diff] && result1;
  if (tmp26) {
    const tmp28 = pow(10, 7 - result1);
    items[diff] = (items[diff] / tmp28 | 0) * tmp28;
  }
  let tmp29 = diff;
  let tmp30 = diff;
  if (0 === items[diff]) {
    do {
      let arr2 = items.pop();
      let diff1 = tmp29 - 1;
      tmp29 = diff1;
      tmp30 = diff1;
      tmp33 = items[diff1];
    } while (0 === tmp33);
  }
  if (tmp30 < 0) {
    items1 = [0];
    num26 = 0;
  } else {
    let num21 = -1;
    let num22 = -1;
    if (0 === items[0]) {
      do {
        let arr5 = items.shift();
        num21 = num21 - 7;
        num22 = num21;
        first = items[0];
      } while (0 === first);
    }
    let first1 = items[0];
    let num24 = 1;
    let num25 = 1;
    if (first1 >= 10) {
      do {
        num24 = num24 + 1;
        first1 = first1 / 10;
        num25 = num24;
      } while (10 <= first1);
    }
    items1 = items;
    num26 = num22;
    if (num25 < 7) {
      num26 = num22 - (7 - num25);
      items1 = items;
    }
  }
  tmp.e = num26;
  tmp.d = items1;
  return tmp;
}
function round(arg0) {
  const tmp = new this(arg0);
  finalise(tmp, tmp.e + 1, this.rounding);
  return tmp;
}
function sign(arg0) {
  let tmp2;
  const tmp = new this(arg0);
  if (tmp.d) {
    let num2;
    if (tmp.d[0]) {
      num2 = tmp.s;
    } else {
      num2 = 0;
    }
    tmp2 = num2;
  } else {
    tmp2 = tmp.s || NaN;
  }
  return tmp2;
}
function sin(arg0) {
  obj = new this(arg0);
  return obj.sin();
}
function sinh(arg0) {
  obj = new this(arg0);
  return obj.sinh();
}
function sqrt(items) {
  obj = new this(items);
  return obj.sqrt();
}
function sub(arg0, arg1) {
  obj = new this(arg0);
  return obj.sub(arg1);
}
function sum() {
  self = this;
  const tmp = new this(arguments[0]);
  c8 = false;
  let tmp2 = tmp;
  if (tmp.s) {
    obj = tmp;
    let num2 = 1;
    tmp2 = tmp;
    if (1 < arguments.length) {
      const plusResult = obj.plus(arguments[num2]);
      tmp2 = plusResult;
      while (plusResult.s) {
        num2 = num2 + 1;
        obj = plusResult;
        tmp2 = plusResult;
        if (num2 >= arguments.length) {
          break;
        }
      }
    }
  }
  c8 = true;
  finalise(tmp2, self.precision, self.rounding);
  return tmp2;
}
function tan(arg0) {
  obj = new this(arg0);
  return obj.tan();
}
function tanh(arg0) {
  obj = new this(arg0);
  return obj.tanh();
}
function trunc(arg0) {
  const tmp = new this(arg0);
  finalise(tmp, tmp.e + 1, 1);
  return tmp;
}
let cloneResult1 = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058";
let cloneResult2 = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789";
let obj = { precision: 20, rounding: 4, modulo: 1, toExpNeg: -7, toExpPos: 21, minE: -9000000000000000, maxE: 9000000000000000, crypto: false };
let c8 = true;
let c9 = "[DecimalError] Invalid argument: ";
let c10 = "[DecimalError] Precision limit exceeded";
let c11 = "[DecimalError] crypto unavailable";
let c12 = "[object Decimal]";
floor = Math.floor;
pow = Math.pow;
const re15 = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i;
const re16 = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i;
const re17 = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i;
const re18 = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
let c19 = 10000000;
let closure_20 = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058".length - 1;
let closure_21 = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789".length - 1;
let obj2 = {
  toStringTag: "[object Decimal]",
  abs: fn,
  absoluteValue: fn,
  ceil: function() {
    const constructor = new this.constructor(this);
    finalise(constructor, this.e + 1, 2);
    return constructor;
  },
  clamp: fn2,
  clampedTo: fn2,
  cmp: fn3,
  comparedTo: fn3,
  cos: fn4,
  cosine: fn4,
  cbrt: fn5,
  cubeRoot: fn5,
  dp: fn6,
  decimalPlaces: fn6,
  div: fn7,
  dividedBy: fn7,
  divToInt: fn8,
  dividedToIntegerBy: fn8,
  eq: fn9,
  equals: fn9,
  floor: function() {
    const constructor = new this.constructor(this);
    finalise(constructor, this.e + 1, 3);
    return constructor;
  },
  gt: fn10,
  greaterThan: fn10,
  gte: fn11,
  greaterThanOrEqualTo: fn11,
  cosh: fn12,
  hyperbolicCosine: fn12,
  sinh: fn13,
  hyperbolicSine: fn13,
  tanh: fn14,
  hyperbolicTangent: fn14,
  acos: fn15,
  inverseCosine: fn15,
  acosh: fn16,
  inverseHyperbolicCosine: fn16,
  asinh: fn17,
  inverseHyperbolicSine: fn17,
  atanh: fn18,
  inverseHyperbolicTangent: fn18,
  asin: fn19,
  inverseSine: fn19,
  atan: fn20,
  inverseTangent: fn20,
  isFinite: function() {
    return this.d;
  },
  isInt: fn21,
  isInteger: fn21,
  isNaN: function() {
    return !this.s;
  },
  isNeg: fn22,
  isNegative: fn22,
  isPos: fn23,
  isPositive: fn23,
  isZero: function() {
    const d = this.d && 0 === this.d[0];
    return d;
  },
  lt: fn24,
  lessThan: fn24,
  lte: fn25,
  lessThanOrEqualTo: fn25,
  log: fn26,
  logarithm: fn26,
  sub: fn27,
  minus: fn27,
  mod: fn28,
  modulo: fn28,
  exp: fn29,
  naturalExponential: fn29,
  ln: fn30,
  naturalLogarithm: fn30,
  neg: fn31,
  negated: fn31,
  add: fn32,
  plus: fn32,
  sd: fn33,
  precision: fn33,
  round: function() {
    const constructor = this.constructor;
    const constructor1 = new constructor(this);
    finalise(constructor1, this.e + 1, constructor.rounding);
    return constructor1;
  },
  sin: fn34,
  sine: fn34,
  sqrt: fn35,
  squareRoot: fn35,
  tan: fn36,
  tangent: fn36,
  mul: fn37,
  times: fn37,
  toBinary: function(arg0, arg1) {
    return toStringBinary(this, 2, arg0, arg1);
  },
  toDP: fn38,
  toDecimalPlaces: fn38,
  toExponential: function(arg0, rounding) {
    let tmp9;
    self = this;
    const constructor = this.constructor;
    if (undefined === arg0) {
      tmp9 = finiteToString(self, true);
      obj = self;
    } else {
      if (arg0 === ~(~arg0)) {
        if (arg0 >= 0) {
          if (arg0 <= 1000000000) {
            if (undefined === rounding) {
              rounding = constructor.rounding;
            } else {
              const _Error = Error;
              throw Error(c9 + rounding);
            }
            const self2 = this;
            const self3 = this;
            const constructor1 = new constructor(self);
            obj = constructor1;
            finalise(constructor1, arg0 + 1, rounding);
            tmp9 = finiteToString(constructor1, true, arg0 + 1);
          }
        }
      }
      const _Error2 = Error;
      throw Error(c9 + arg0);
    }
    let text = tmp9;
    if (obj.isNeg()) {
      text = tmp9;
      if (!obj.isZero()) {
        text = `-${tmp9}`;
      }
    }
    return text;
  },
  toFixed: function(arg0, rounding) {
    let tmp9;
    self = this;
    const constructor = this.constructor;
    if (undefined === arg0) {
      tmp9 = finiteToString(self);
    } else {
      if (arg0 === ~(~arg0)) {
        if (arg0 >= 0) {
          if (arg0 <= 1000000000) {
            if (undefined === rounding) {
              rounding = constructor.rounding;
            } else {
              const _Error = Error;
              throw Error(c9 + rounding);
            }
            const self2 = this;
            const self3 = this;
            const constructor1 = new constructor(self);
            finalise(constructor1, arg0 + self.e + 1, rounding);
            tmp9 = finiteToString(constructor1, false, arg0 + constructor1.e + 1);
          }
        }
      }
      const _Error2 = Error;
      throw Error(c9 + arg0);
    }
    let text = tmp9;
    if (self.isNeg()) {
      text = tmp9;
      if (!self.isZero()) {
        text = `-${tmp9}`;
      }
    }
    return text;
  },
  toFraction: function(arg0) {
    let cmpResult;
    let constructor;
    let d;
    let result1;
    self = this;
    ({ d, constructor } = this);
    const self2 = this;
    if (d) {
      let obj3;
      let items1;
      const constructor1 = new constructor(1);
      const self3 = this;
      const self4 = this;
      const constructor2 = new constructor(0);
      const self5 = this;
      const self6 = this;
      const constructor3 = new constructor(constructor2);
      const diff = d.length - 1;
      sum = 7 * diff + 1;
      let tmp12 = d[diff];
      let tmp13 = sum;
      if (tmp12) {
        let diff1 = sum;
        let tmp15 = sum;
        if (tmp12 % 10 === 0) {
          do {
            diff1 = diff1 - 1;
            let result = tmp12 / 10;
            tmp12 = result;
            tmp15 = diff1;
            result1 = result % 10;
          } while (result1 === 0);
        }
        let first = d[0];
        let sum1 = tmp15;
        tmp13 = tmp15;
        if (first >= 10) {
          do {
            sum1 = sum1 + 1;
            first = first / 10;
            tmp13 = sum1;
          } while (10 <= first);
        }
      }
      const diff2 = tmp13 - self.e - 1;
      constructor3.e = diff2;
      const result2 = diff2 % 7;
      let sum2 = result2;
      const d2 = constructor3.d;
      const tmp20 = constructor3;
      if (result2 < 0) {
        sum2 = 7 + result2;
      }
      d2[0] = pow(10, sum2);
      if (null == arg0) {
        let tmp33 = constructor1;
        if (0 < diff2) {
          tmp33 = constructor3;
        }
        obj3 = tmp33;
      } else {
        const self7 = this;
        const self8 = this;
        const constructor4 = new constructor(arg0);
        if (constructor4.isInt()) {
          if (!constructor4.lt(constructor1)) {
            obj3 = constructor4;
            if (constructor4.gt(constructor3)) {
              let tmp30 = constructor1;
              if (0 < diff2) {
                tmp30 = constructor3;
              }
              obj3 = tmp30;
            }
          }
        }
        const _Error = Error;
        throw Error(c9 + constructor4);
      }
      c8 = false;
      const self9 = this;
      const self10 = this;
      const constructor5 = new constructor(digitsToString(d));
      const result3 = 7 * d.length * 2;
      constructor.precision = result3;
      let tmp38 = f143737;
      const precision = constructor.precision;
      const obj4 = f143737(constructor5, tmp20, 0, 1, 1);
      const plusResult = constructor1.plus(obj4.times(constructor2));
      let obj6 = obj4;
      let tmp41 = constructor1;
      let obj7 = constructor2;
      let obj8 = constructor5;
      let tmp42 = plusResult;
      let obj9 = constructor2;
      let tmp43 = constructor3;
      let tmp44 = constructor1;
      let obj10 = constructor2;
      let tmp45 = constructor2;
      let obj11 = constructor1;
      if (1 != plusResult.cmp(obj3)) {
        do {
          let plusResult1 = obj7.plus(obj6.times(tmp41));
          let minusResult = obj8.minus(obj6.times(tmp43));
          let obj12 = f143737(tmp43, minusResult, 0, 1, 1);
          let plusResult2 = obj9.plus(obj12.times(tmp42));
          obj7 = tmp41;
          let tmp52 = tmp42;
          obj11 = obj9;
          obj8 = tmp43;
          obj6 = obj12;
          tmp41 = plusResult1;
          tmp42 = plusResult2;
          obj9 = tmp52;
          tmp43 = minusResult;
          tmp44 = plusResult1;
          obj10 = obj7;
          tmp45 = tmp52;
          tmp38 = f143737;
          cmpResult = plusResult2.cmp(obj3);
        } while (1 != cmpResult);
      }
      const tmp38Result = tmp38(obj3.minus(obj11), tmp45, 0, 1, 1);
      const plusResult3 = obj10.plus(tmp38Result.times(tmp44));
      const plusResult4 = obj11.plus(tmp38Result.times(tmp45));
      const s = self.s;
      tmp44.s = s;
      plusResult3.s = s;
      const tmp38Result3 = tmp38(tmp44, tmp45, result3, 1);
      const minusResult1 = tmp38Result3.minus(self);
      const cmp = minusResult1.abs().cmp;
      minusResult1.abs();
      const tmp38Result4 = tmp38(plusResult3, plusResult4, result3, 1);
      const minusResult2 = tmp38Result4.minus(self);
      if (cmp(minusResult2.abs()) < 1) {
        const items = [tmp44, tmp45];
        items1 = items;
      } else {
        items1 = [plusResult3, plusResult4];
      }
      constructor.precision = precision;
      c8 = true;
      return items1;
    } else {
      const constructor6 = new constructor(self);
      return constructor6;
    }
  },
  toHex: fn39,
  toHexadecimal: fn39,
  toNearest: function(arg0, arg1) {
    let constructor2;
    let rounding;
    let tmp7;
    const constructor = this.constructor;
    const constructor1 = new constructor(this);
    if (null == arg0) {
      if (constructor1.d) {
        self = this;
        const self2 = this;
        constructor2 = new constructor(1);
        rounding = constructor.rounding;
      } else {
        return constructor1;
      }
    } else {
      const self3 = this;
      const self4 = this;
      const constructor3 = new constructor(arg0);
      if (undefined === arg1) {
        rounding = constructor.rounding;
      } else {
        if (arg1 === ~(~arg1)) {
          if (arg1 >= 0) {
            rounding = arg1;
          }
        }
        const _Error = Error;
        throw Error(c9 + arg1);
      }
      if (constructor1.d) {
        constructor2 = constructor3;
        if (!constructor3.d) {
          if (constructor3.s) {
            constructor3.s = constructor1.s;
          }
          return constructor3;
        }
      } else {
        let tmp5 = constructor3;
        if (constructor3.s) {
          tmp5 = constructor1;
        }
        return tmp5;
      }
    }
    if (constructor2.d[0]) {
      obj = f143737(constructor1, constructor2, 0, rounding, 1);
      const timesResult = obj.times(constructor2);
      c8 = true;
      finalise(timesResult);
      tmp7 = timesResult;
    } else {
      constructor2.s = constructor1.s;
      tmp7 = constructor2;
    }
    return tmp7;
  },
  toNumber: function() {
    return +this;
  },
  toOctal: function(arg0, arg1) {
    return toStringBinary(this, 8, arg0, arg1);
  },
  pow: fn40,
  toPower: fn40,
  toPrecision: function(precision, rounding) {
    let tmp3Result;
    self = this;
    const constructor = this.constructor;
    if (undefined === precision) {
      const tmp13 = self.e <= constructor.toExpNeg || self.e >= constructor.toExpPos;
      tmp3Result = finiteToString(self, tmp13);
      obj = self;
    } else {
      if (precision === ~(~precision)) {
        if (precision >= 1) {
          if (precision <= 1000000000) {
            if (undefined === rounding) {
              rounding = constructor.rounding;
            } else {
              const _Error = Error;
              throw Error(c9 + rounding);
            }
            const self2 = this;
            const self3 = this;
            const constructor1 = new constructor(self);
            obj = constructor1;
            finalise(constructor1, precision, rounding);
            const tmp8 = precision <= constructor1.e || obj.e <= constructor.toExpNeg;
            tmp3Result = finiteToString(obj, tmp8, precision);
          }
        }
      }
      const _Error2 = Error;
      throw Error(c9 + precision);
    }
    let text = tmp3Result;
    if (obj.isNeg()) {
      text = tmp3Result;
      if (!obj.isZero()) {
        text = `-${tmp9}`;
      }
    }
    return text;
  },
  toSD: fn41,
  toSignificantDigits: fn41,
  toString: function() {
    self = this;
    const constructor = this.constructor;
    const tmp2 = this.e <= constructor.toExpNeg || self.e >= constructor.toExpPos;
    const tmpResult = finiteToString(self, tmp2);
    let text = tmpResult;
    if (self.isNeg()) {
      text = tmpResult;
      if (!self.isZero()) {
        text = `-${tmp3}`;
      }
    }
    return text;
  },
  trunc: fn42,
  truncated: fn42,
  toJSON: fn43,
  valueOf: fn43
};
fn = function() {
  const constructor = new this.constructor(this);
  if (constructor.s < 0) {
    constructor.s = 1;
  }
  finalise(constructor);
  return constructor;
};
fn2 = function(arg0, arg1) {
  self = this;
  const constructor = this.constructor;
  const constructor1 = new constructor(arg0);
  obj = constructor1;
  const constructor2 = new constructor(arg1);
  if (constructor1.s) {
    if (constructor2.s) {
      if (obj.gt(constructor2)) {
        const _Error = Error;
        throw Error(c9 + constructor2);
      } else {
        if (self.cmp(obj) >= 0) {
          let constructor3 = constructor2;
          if (self.cmp(constructor2) <= 0) {
            const self2 = this;
            const self3 = this;
            constructor3 = new constructor(self);
          }
          obj = constructor3;
        }
        return obj;
      }
    }
  }
  const constructor4 = new constructor(NaN);
  return constructor4;
};
fn3 = function(arg0) {
  self = this;
  const d = this.d;
  const constructor = new this.constructor(arg0);
  const d1 = constructor.d;
  const s = this.s;
  const s2 = constructor.s;
  if (d) {
    if (d1) {
      if (d[0]) {
        if (d1[0]) {
          if (s !== s2) {
            return s;
          } else if (self.e !== constructor.e) {
            let num13 = -1;
            if (self.e > constructor.e ^ s < 0) {
              num13 = 1;
            }
            return num13;
          } else {
            let tmp4 = length2;
            if (d.length < d1.length) {
              tmp4 = length;
            }
            let num8 = 0;
            if (0 < tmp4) {
              while (d[num8] === d1[num8]) {
                num8 = num8 + 1;
              }
              let num11 = -1;
              if (d[num8] > d1[num8] ^ s < 0) {
                num11 = 1;
              }
              return num11;
            }
            let num9 = 0;
            if (d.length !== d1.length) {
              let num10 = -1;
              if (d.length > d1.length ^ s < 0) {
                num10 = 1;
              }
              num9 = num10;
            }
            return num9;
          }
        }
      }
      let tmp3 = s;
      if (!d[0]) {
        let num5 = 0;
        if (d1[0]) {
          num5 = -s2;
        }
        tmp3 = num5;
      }
      return tmp3;
    }
  }
  num = NaN;
  if (s) {
    num = NaN;
    if (s2) {
      let tmp2 = s;
      if (s === s2) {
        let num3 = 0;
        if (d !== d1) {
          let num4 = -1;
          if (!d ^ s < 0) {
            num4 = 1;
          }
          num3 = num4;
        }
        tmp2 = num3;
      }
      num = tmp2;
    }
  }
  return num;
};
fn4 = function() {
  let constructor3;
  let precision;
  let rounding;
  let tmp15;
  self = this;
  const constructor = this.constructor;
  if (this.d) {
    let constructor2;
    if (self.d[0]) {
      let negResult;
      ({ precision, rounding } = constructor);
      const _Math = Math;
      constructor.precision = precision + Math.max(self.e, self.sd()) + 7;
      constructor.rounding = 1;
      obj = toLessThanHalfPi(constructor, self);
      obj2 = obj;
      if (!obj.isZero()) {
        let str = "2.3283064365386962890625e-10";
        let num7 = 16;
        if (obj.d.length < 32) {
          const _Math2 = Math;
          const rounded = Math.ceil(length / 3);
          let diff = rounded - 1;
          let num10 = 4;
          let num11 = 4;
          while (diff) {
            num10 = num10 * 4;
            diff = diff - 1;
            num11 = num10;
          }
          const str2 = 1 / num11;
          str = str2.toString();
          num7 = rounded;
        }
        constructor.precision = constructor.precision + num7;
        const self6 = this;
        const self7 = this;
        const timesResult = obj.times(str);
        const constructor1 = new constructor(1);
        let plusResult = taylorSeries(constructor, 1, timesResult, constructor1);
        let diff1 = tmp12 - 1;
        let tmp14 = plusResult;
        if (+num7) {
          do {
            let timesResult1 = plusResult.times(plusResult);
            let timesResult2 = timesResult1.times(timesResult1);
            let minusResult = timesResult2.minus(timesResult1);
            let timesResult3 = minusResult.times(8);
            plusResult = timesResult3.plus(1);
            tmp15 = +diff1;
            diff1 = tmp15 - 1;
            tmp14 = plusResult;
          } while (tmp15);
        }
        constructor.precision = constructor.precision - num7;
        obj2 = tmp14;
      }
      constructor.precision = precision;
      constructor.rounding = rounding;
      if (2 == num) {
        negResult = obj2.neg();
      } else {
        negResult = obj2;
      }
      finalise(negResult, precision, rounding, true);
      constructor2 = negResult;
    } else {
      const self4 = this;
      const self5 = this;
      constructor2 = new constructor(1);
    }
    constructor3 = constructor2;
  } else {
    const self2 = this;
    const self3 = this;
    constructor3 = new constructor(NaN);
  }
  return constructor3;
};
fn5 = function() {
  let arr4;
  let obj7;
  let substr;
  let substr1;
  let tmp20;
  let tmp21;
  let tmp24;
  self = this;
  const constructor = this.constructor;
  if (this.isFinite()) {
    if (!self.isZero()) {
      let text;
      c8 = false;
      const str = self.s * pow(self.s * self, 0.3333333333333333);
      if (str) {
        let constructor1;
        let obj8;
        const _Math = Math;
        if (Math.abs(str) != Infinity) {
          const self4 = this;
          const self5 = this;
          constructor1 = new constructor(str.toString());
        }
        const precision = constructor.precision;
        sum = precision + 3;
        do {
          let timesResult = constructor1.times(constructor1);
          let timesResult1 = timesResult.times(constructor1);
          let plusResult = timesResult1.plus(self);
          let plusResult1 = plusResult.plus(self);
          let timesResult2 = plusResult1.times(constructor1);
          obj7 = f143737(timesResult2, plusResult.plus(timesResult1), sum + 2, 1);
          let arr3 = digitsToString(constructor1.d);
          substr = arr3.slice(0, sum);
          arr4 = digitsToString(obj7.d);
          tmp20 = sum;
          tmp21 = num14;
          obj8 = constructor1;
          substr1 = arr4.slice(0, sum);
          constructor1 = obj7;
        } while (substr !== substr1);
        const substr2 = arr4.slice(tmp20 - 3, tmp20 + 1);
        if ("9999" != substr2) {
          if (!tmp21) {
            c8 = true;
            finalise(obj8, precision, constructor.rounding, tmp24);
            return obj8;
          }
          let tmp25 = +substr2;
          if (tmp25) {
            tmp25 = +substr2.slice(1) || "5" != substr2.charAt(0);
            const tmp26 = +substr2.slice(1) || "5" != substr2.charAt(0);
          }
          obj8 = obj7;
          if (!tmp25) {
            finalise(obj7, precision + 1, 1);
            const timesResult3 = obj7.times(obj7);
            const timesResult4 = timesResult3.times(obj7);
            obj8 = obj7;
            tmp24 = !timesResult4.eq(self);
          }
        }
        if (tmp21) {
          sum = tmp20 + 4;
          constructor1 = obj7;
        } else {
          finalise(obj8, precision + 1, 0);
          const timesResult5 = obj8.times(obj8);
          timesResult5.times(obj8);
        }
      }
      const arr = digitsToString(self.d);
      const e = self.e;
      const result = (e - arr.length + 1) % 3;
      let sum1 = arr;
      if (result) {
        let str2;
        if (1 === result) {
          str2 = "0";
        } else {
          str2 = "00";
        }
        sum1 = arr + str2;
      }
      const tmpResult = pow(sum1, 0.3333333333333333);
      let num7 = 2;
      const result1 = e % 3;
      const tmp7 = floor((e + 1) / 3);
      if (e < 0) {
        num7 = -1;
      }
      const diff = tmp7 - (result1 === num7);
      if (tmpResult == Infinity) {
        text = `5e${tmp9}`;
      } else {
        const toExponentialResult = tmpResult.toExponential();
        text = toExponentialResult.slice(0, toExponentialResult.indexOf("e") + 1) + diff;
      }
      const self2 = this;
      const self3 = this;
      const constructor2 = new constructor(text);
      constructor1 = constructor2;
      constructor2.s = self.s;
    }
  }
  const constructor3 = new constructor(self);
  return constructor3;
};
fn6 = function() {
  let result2;
  const d = this.d;
  num = NaN;
  if (d) {
    const diff = d.length - 1;
    const result = 7 * (diff - floor(tmp.e / 7));
    let tmp5 = d[diff];
    let tmp6 = result;
    if (tmp5) {
      let diff1 = result;
      tmp6 = result;
      if (tmp5 % 10 === 0) {
        do {
          diff1 = diff1 - 1;
          let result1 = tmp5 / 10;
          tmp5 = result1;
          tmp6 = diff1;
          result2 = result1 % 10;
        } while (result2 === 0);
      }
    }
    num = tmp6;
    if (tmp6 < 0) {
      num = 0;
    }
  }
  return num;
};
fn7 = function(arg0) {
  const constructor = new this.constructor(arg0);
  return f143737(this, constructor);
};
fn8 = function(arg0) {
  const constructor = this.constructor;
  const constructor1 = new constructor(arg0);
  const tmp2 = f143737(this, constructor1, 0, 1, 1);
  finalise(tmp2, constructor.precision, constructor.rounding);
  return tmp2;
};
fn9 = function(arg0) {
  return 0 === this.cmp(arg0);
};
fn10 = function(arg0) {
  return this.cmp(arg0) > 0;
};
fn11 = function(arg0) {
  const cmpResult = this.cmp(arg0);
  return 1 == cmpResult || 0 === cmpResult;
};
fn12 = function() {
  let precision;
  let rounding;
  let tmp18;
  self = this;
  const constructor = this.constructor;
  const constructor1 = new constructor(1);
  if (this.isFinite()) {
    if (self.isZero()) {
      return constructor1;
    } else {
      ({ precision, rounding } = constructor);
      const _Math = Math;
      constructor.precision = precision + Math.max(self.e, self.sd()) + 4;
      constructor.rounding = 1;
      let str = "2.3283064365386962890625e-10";
      let num4 = 16;
      if (self.d.length < 32) {
        const _Math2 = Math;
        const rounded = Math.ceil(length / 3);
        let diff = rounded - 1;
        let num6 = 4;
        let num7 = 4;
        while (diff) {
          num6 = num6 * 4;
          diff = diff - 1;
          num7 = num6;
        }
        const str2 = 1 / num7;
        str = str2.toString();
        num4 = rounded;
      }
      const self4 = this;
      const self5 = this;
      const timesResult = self.times(str);
      const constructor2 = new constructor(1);
      const tmp13 = taylorSeries(constructor, 1, timesResult, constructor2, true);
      const self6 = this;
      const self7 = this;
      const constructor3 = new constructor(8);
      let diff1 = tmp15 - 1;
      let minusResult = tmp13;
      let tmp17 = tmp13;
      if (+num4) {
        do {
          let timesResult1 = minusResult.times(minusResult);
          minusResult = constructor1.minus(timesResult1.times(constructor3.minus(timesResult1.times(constructor3))));
          tmp18 = +diff1;
          diff1 = tmp18 - 1;
          tmp17 = minusResult;
        } while (tmp18);
      }
      constructor.precision = precision;
      constructor.rounding = rounding;
      finalise(tmp17, precision, rounding, true);
      return tmp17;
    }
  } else {
    num = NaN;
    if (self.s) {
      num = Infinity;
    }
    const self2 = this;
    const self3 = this;
    const constructor4 = new constructor(num);
    return constructor4;
  }
};
fn13 = function() {
  let precision;
  let rounding;
  let tmp17;
  self = this;
  const constructor = this.constructor;
  if (this.isFinite()) {
    if (!self.isZero()) {
      let tmp15;
      ({ precision, rounding } = constructor);
      const _Math = Math;
      constructor.precision = precision + Math.max(self.e, self.sd()) + 4;
      constructor.rounding = 1;
      if (self.d.length < 3) {
        tmp15 = taylorSeries(constructor, 2, self, self, true);
      } else {
        const _Math2 = Math;
        const result = 1.4 * Math.sqrt(length);
        let num4 = 16;
        if (16 >= result) {
          num4 = result | 0;
        }
        let diff = num4 - 1;
        let num6 = 5;
        let diff1 = diff;
        let num7 = 5;
        const times = self.times;
        if (diff) {
          do {
            num6 = num6 * 5;
            diff1 = diff1 - 1;
            num7 = num6;
          } while (diff1);
        }
        const timesResult = times(1 / num7);
        const tmp2Result = taylorSeries(constructor, 2, timesResult, timesResult, true);
        const self2 = this;
        const self3 = this;
        const constructor1 = new constructor(5);
        const self4 = this;
        const self5 = this;
        const constructor2 = new constructor(16);
        const self6 = this;
        const self7 = this;
        const constructor3 = new constructor(20);
        let times2Result = tmp2Result;
        tmp15 = tmp2Result;
        if (num4) {
          do {
            let timesResult1 = times2Result.times(times2Result);
            let times2 = times2Result.times;
            let plus = constructor1.plus;
            let times3 = timesResult1.times;
            let timesResult2 = constructor2.times(timesResult1);
            times2Result = times2(plus(times3(timesResult2.plus(constructor3))));
            tmp17 = diff;
            diff = diff - 1;
            tmp15 = times2Result;
          } while (tmp17);
        }
      }
      constructor.precision = precision;
      constructor.rounding = rounding;
      finalise(tmp15, precision, rounding, true);
      return tmp15;
    }
  }
  const constructor4 = new constructor(self);
  return constructor4;
};
fn14 = function() {
  let constructor2;
  let precision;
  let rounding;
  self = this;
  const constructor = this.constructor;
  if (this.isFinite()) {
    let constructor1;
    if (self.isZero()) {
      const self4 = this;
      const self5 = this;
      constructor1 = new constructor(self);
    } else {
      ({ precision, rounding } = constructor);
      constructor.precision = precision + 7;
      constructor.rounding = 1;
      constructor.precision = precision;
      constructor.rounding = rounding;
      const sinhResult = self.sinh();
      constructor1 = f143737(sinhResult, self.cosh(), precision, rounding);
    }
    constructor2 = constructor1;
  } else {
    const self2 = this;
    const self3 = this;
    constructor2 = new constructor(self.s);
  }
  return constructor2;
};
fn15 = function() {
  let precision;
  let rounding;
  let timesResult;
  self = this;
  const constructor = this.constructor;
  const absResult = this.abs();
  const cmpResult = absResult.cmp(1);
  ({ precision, rounding } = constructor);
  if (-1 !== cmpResult) {
    let constructor3;
    if (0 === cmpResult) {
      let constructor2;
      if (self.isNeg()) {
        if (precision > closure_21) {
          const _Error2 = Error;
          throw Error(c10);
        } else {
          const self10 = this;
          const self11 = this;
          const constructor1 = new constructor(cloneResult2);
          finalise(constructor1, precision, rounding, true);
          constructor2 = constructor1;
        }
      } else {
        const self8 = this;
        const self9 = this;
        constructor2 = new constructor(0);
      }
      constructor3 = constructor2;
    } else {
      const self6 = this;
      const self7 = this;
      constructor3 = new constructor(NaN);
    }
    timesResult = constructor3;
  } else if (self.isZero()) {
    sum = precision + 4;
    if (sum > closure_21) {
      const _Error = Error;
      throw Error(c10);
    } else {
      const self4 = this;
      const self5 = this;
      const constructor4 = new constructor(cloneResult2);
      finalise(constructor4, sum, rounding, true);
      timesResult = constructor4.times(0.5);
    }
  } else {
    constructor.precision = precision + 6;
    constructor.rounding = 1;
    const self2 = this;
    const self3 = this;
    const constructor5 = new constructor(1);
    const minusResult = constructor5.minus(self);
    const divResult = minusResult.div(self.plus(1));
    constructor.precision = precision;
    constructor.rounding = rounding;
    const sqrtResult = divResult.sqrt();
    const atanResult = sqrtResult.atan();
    timesResult = atanResult.times(2);
  }
  return timesResult;
};
fn16 = function() {
  let constructor1;
  self = this;
  const constructor = this.constructor;
  if (this.lte(1)) {
    let num2 = NaN;
    if (self.eq(1)) {
      num2 = 0;
    }
    const self4 = this;
    const self5 = this;
    constructor1 = new constructor(num2);
  } else if (self.isFinite()) {
    const precision = constructor.precision;
    const _Math = Math;
    const _Math2 = Math;
    const rounding = constructor.rounding;
    max = Math.max;
    const absolute = Math.abs(self.e);
    constructor.precision = precision + max(absolute, self.sd()) + 4;
    constructor.rounding = 1;
    const timesResult = self.times(self);
    const minusResult = timesResult.minus(1);
    c8 = true;
    constructor.precision = precision;
    constructor.rounding = rounding;
    const sqrtResult = minusResult.sqrt();
    const plusResult = sqrtResult.plus(self);
    constructor1 = plusResult.ln();
  } else {
    const self2 = this;
    const self3 = this;
    constructor1 = new constructor(self);
  }
  return constructor1;
};
fn17 = function() {
  self = this;
  const constructor = this.constructor;
  if (this.isFinite()) {
    let lnResult;
    if (!self.isZero()) {
      const precision = constructor.precision;
      const _Math = Math;
      const _Math2 = Math;
      const rounding = constructor.rounding;
      max = Math.max;
      const absolute = Math.abs(self.e);
      constructor.precision = precision + 2 * max(absolute, self.sd()) + 6;
      constructor.rounding = 1;
      const timesResult = self.times(self);
      const plusResult = timesResult.plus(1);
      c8 = true;
      constructor.precision = precision;
      constructor.rounding = rounding;
      const sqrtResult = plusResult.sqrt();
      const plusResult1 = sqrtResult.plus(self);
      lnResult = plusResult1.ln();
    }
    return lnResult;
  }
  lnResult = new constructor(self);
};
fn18 = function() {
  let constructor4;
  let precision;
  let rounding;
  self = this;
  const constructor = this.constructor;
  if (this.isFinite()) {
    let constructor1;
    if (self.e >= 0) {
      let num4;
      const absResult = self.abs();
      if (absResult.eq(1)) {
        num4 = self.s / 0;
      } else {
        num4 = NaN;
        if (self.isZero()) {
          num4 = self;
        }
      }
      const self6 = this;
      const self7 = this;
      constructor1 = new constructor(num4);
    } else {
      ({ precision, rounding } = constructor);
      const sdResult = self.sd();
      const _Math = Math;
      if (Math.max(sdResult, precision) < 2 * -self.e - 1) {
        const self4 = this;
        const self5 = this;
        const constructor2 = new constructor(self);
        finalise(constructor2, precision, rounding, true);
        constructor1 = constructor2;
      } else {
        const diff = sdResult - self.e;
        constructor.precision = diff;
        const self8 = this;
        const self9 = this;
        const plusResult = self.plus(1);
        const constructor3 = new constructor(1);
        constructor.precision = precision + 4;
        constructor.rounding = 1;
        constructor.precision = precision;
        constructor.rounding = rounding;
        const obj3 = f143737(plusResult, constructor3.minus(self), diff + precision, 1);
        const lnResult = obj3.ln();
        constructor1 = lnResult.times(0.5);
      }
    }
    constructor4 = constructor1;
  } else {
    const self2 = this;
    const self3 = this;
    constructor4 = new constructor(NaN);
  }
  return constructor4;
};
fn19 = function() {
  let constructor1;
  let precision;
  let rounding;
  self = this;
  const constructor = this.constructor;
  if (this.isZero()) {
    const self6 = this;
    const self7 = this;
    constructor1 = new constructor(self);
  } else {
    const absResult = self.abs();
    const cmpResult = absResult.cmp(1);
    ({ precision, rounding } = constructor);
    if (-1 !== cmpResult) {
      let constructor3;
      if (0 === cmpResult) {
        sum = precision + 4;
        if (sum > closure_21) {
          const _Error = Error;
          throw Error(c10);
        } else {
          const self4 = this;
          const self5 = this;
          const constructor2 = new constructor(cloneResult2);
          finalise(constructor2, sum, rounding, true);
          const timesResult = constructor2.times(0.5);
          timesResult.s = self.s;
          constructor3 = timesResult;
        }
      } else {
        const self2 = this;
        const self3 = this;
        constructor3 = new constructor(NaN);
      }
      constructor1 = constructor3;
    } else {
      constructor.precision = precision + 6;
      constructor.rounding = 1;
      const self8 = this;
      const self9 = this;
      div = self.div;
      const constructor4 = new constructor(1);
      const minusResult = constructor4.minus(self.times(self));
      const sqrtResult = minusResult.sqrt();
      constructor.precision = precision;
      constructor.rounding = rounding;
      const divResult = div(sqrtResult.plus(1));
      const atanResult = divResult.atan();
      constructor1 = atanResult.times(2);
    }
  }
  return constructor1;
};
fn20 = function() {
  let precision;
  let rounding;
  let tmp26;
  self = this;
  const constructor = this.constructor;
  ({ precision, rounding } = constructor);
  if (this.isFinite()) {
    if (self.isZero()) {
      const self8 = this;
      const self9 = this;
      const constructor1 = new constructor(self);
      return constructor1;
    } else {
      const absResult = self.abs();
      if (absResult.eq(1)) {
        if (precision + 4 <= closure_21) {
          sum = precision + 4;
          if (sum > tmp14) {
            const _Error2 = Error;
            throw Error(c10);
          } else {
            const self6 = this;
            const self7 = this;
            const constructor2 = new constructor(cloneResult2);
            finalise(constructor2, sum, rounding, true);
            const timesResult = constructor2.times(0.25);
            timesResult.s = self.s;
            return timesResult;
          }
        }
      }
    }
  } else if (self.s) {
    if (precision + 4 <= closure_21) {
      const sum1 = precision + 4;
      if (sum1 > tmp3) {
        const _Error = Error;
        throw Error(c10);
      } else {
        const self4 = this;
        const self5 = this;
        const constructor3 = new constructor(cloneResult2);
        finalise(constructor3, sum1, rounding, true);
        const timesResult1 = constructor3.times(0.5);
        timesResult1.s = self.s;
        return timesResult1;
      }
    }
  } else {
    const self2 = this;
    const self3 = this;
    const constructor4 = new constructor(NaN);
    return constructor4;
  }
  const sum2 = precision + 10;
  constructor.precision = sum2;
  constructor.rounding = 1;
  const result = sum2 / 7;
  const bound = Math.min(28, result + 2 | 0);
  let divResult = self;
  let diff = bound;
  let obj4 = self;
  let tmp19 = bound;
  if (tmp19) {
    do {
      div = divResult.div;
      let timesResult2 = divResult.times(divResult);
      let plusResult = timesResult2.plus(1);
      let sqrtResult = plusResult.sqrt();
      divResult = div(sqrtResult.plus(1));
      diff = diff - 1;
      obj4 = divResult;
      tmp19 = diff;
    } while (diff);
  }
  c8 = false;
  const rounded = Math.ceil(result);
  const timesResult3 = obj4.times(obj4);
  const constructor5 = new constructor(obj4);
  let obj8 = obj4;
  let obj9 = constructor5;
  let num6 = 1;
  let obj10 = constructor5;
  if (-1 !== tmp19) {
    do {
      let timesResult4 = obj8.times(timesResult3);
      let sum3 = num6 + 2;
      let minusResult = obj9.minus(timesResult4.div(sum3));
      let timesResult5 = timesResult4.times(timesResult3);
      let sum4 = sum3 + 2;
      let plusResult1 = minusResult.plus(timesResult5.div(sum4));
      tmp26 = tmp19;
      if (undefined !== plusResult1.d[rounded]) {
        tmp26 = rounded;
        if (plusResult1.d[rounded] === minusResult.d[rounded]) {
          let tmp27 = +rounded;
          let diff1 = tmp27 - 1;
          tmp26 = diff1;
          if (tmp27) {
            tmp26 = diff1;
            while (plusResult1.d[diff1] === minusResult.d[diff1]) {
              let tmp30 = +diff1;
              diff1 = tmp30 - 1;
              tmp26 = diff1;
              if (!tmp30) {
                break;
              }
            }
          }
        }
      }
      tmp19 = tmp26;
      obj9 = plusResult1;
      obj8 = timesResult5;
      num6 = sum4;
      obj10 = plusResult1;
    } while (-1 !== tmp26);
  }
  let timesResult6 = obj10;
  if (bound) {
    timesResult6 = obj10.times(2 << bound - 1);
  }
  c8 = true;
  constructor.precision = precision;
  constructor.rounding = rounding;
  finalise(timesResult6, precision, rounding, true);
  return timesResult6;
};
fn21 = function() {
  self = this;
  const d = this.d && floor(self.e / 7) > self.d.length - 2;
  return d;
};
fn22 = function() {
  return this.s < 0;
};
fn23 = function() {
  return this.s > 0;
};
fn24 = function(arg0) {
  return this.cmp(arg0) < 0;
};
fn25 = function(arg0) {
  return this.cmp(arg0) < 1;
};
fn26 = function(arg0) {
  let constructor1;
  let num15;
  let precision;
  let result1;
  let rounding;
  self = this;
  const constructor = this.constructor;
  ({ precision, rounding } = constructor);
  if (null == arg0) {
    const self6 = this;
    const self7 = this;
    constructor1 = new constructor(10);
    flag = true;
  } else {
    const self2 = this;
    const self3 = this;
    const constructor2 = new constructor(arg0);
    const d = constructor2.d;
    if (constructor2.s >= 0) {
      if (d) {
        if (d[0]) {
          if (!constructor2.eq(1)) {
            flag = constructor2.eq(10);
            constructor1 = constructor2;
          }
        }
      }
    }
    const self4 = this;
    const self5 = this;
    const constructor3 = new constructor(NaN);
    return constructor3;
  }
  const d1 = self.d;
  if (self.s >= 0) {
    if (d1) {
      if (d1[0]) {
        if (!self.eq(1)) {
          let flag2;
          let tmp11Result;
          if (flag) {
            flag2 = true;
            if (d1.length <= 1) {
              const first = d1[0];
              let tmp7 = first;
              let tmp8 = first;
              if (first % 10 === 0) {
                do {
                  let result = tmp7 / 10;
                  tmp7 = result;
                  tmp8 = result;
                  result1 = result % 10;
                } while (result1 === 0);
              }
              flag2 = 1 !== tmp8;
            }
          }
          c8 = false;
          sum = precision + 5;
          const tmp13 = naturalLogarithm(self, sum);
          if (flag) {
            const sum1 = sum + 10;
            if (sum1 > closure_20) {
              c8 = true;
              const _Error2 = Error;
              throw Error(c10);
            } else {
              const self8 = this;
              const self9 = this;
              const constructor4 = new constructor(cloneResult1);
              finalise(constructor4, sum1, 1, true);
              tmp11Result = constructor4;
            }
          } else {
            tmp11Result = naturalLogarithm(constructor1, sum);
          }
          let tmp22 = f143737(tmp13, tmp11Result, sum, 1);
          let tmp23 = sum;
          let tmp24 = precision;
          if (checkRoundingDigits(tmp22.d, precision, rounding)) {
            while (true) {
              let tmp25Result;
              let sum2 = tmp23 + 10;
              let tmp27 = naturalLogarithm(self, sum2);
              if (flag) {
                let sum3 = sum2 + 10;
                if (sum3 > closure_20) {
                  break;
                } else {
                  let self10 = this;
                  let self11 = this;
                  let constructor5 = new constructor(cloneResult1);
                  let flag7 = true;
                  let tmp62 = finalise(constructor5, sum3, 1, true);
                  tmp25Result = constructor5;
                }
              } else {
                tmp25Result = naturalLogarithm(constructor1, sum2);
              }
              let tmp36 = f143737(tmp27, tmp25Result, sum2, 1);
              if (flag2) {
                let sum4 = tmp24 + 10;
                tmp23 = sum2;
                tmp24 = sum4;
                tmp22 = tmp36;
              } else {
                let arr2 = digitsToString(tmp36.d);
                tmp22 = tmp36;
                if (+arr2.slice(tmp24 + 1, tmp24 + 15) + 1 === 100000000000000) {
                  let tmp39 = finalise(tmp36, precision + 1, 0);
                  tmp22 = tmp36;
                }
              }
            }
            c8 = true;
            const _Error = Error;
            throw Error(c10);
          }
          c8 = true;
          finalise(tmp22, precision, rounding);
          return tmp22;
        }
      }
    }
  }
  if (!d1) {
    let num17 = NaN;
    if (1 == self.s) {
      let num18 = Infinity;
      if (d1) {
        num18 = 0;
      }
      num17 = num18;
    }
    num15 = num17;
  } else {
    num15 = -Infinity;
  }
  const constructor6 = new constructor(num15);
  return constructor6;
};
fn27 = function(arg0) {
  let diff3;
  let first;
  let precision;
  let rounding;
  let tmp28;
  let tmp44;
  self = this;
  const constructor = this.constructor;
  const constructor1 = new constructor(arg0);
  if (this.d) {
    if (constructor1.d) {
      if (self.s != constructor1.s) {
        constructor1.s = -constructor1.s;
        return self.plus(constructor1);
      } else {
        let constructor3;
        const d = self.d;
        const d1 = constructor1.d;
        ({ precision, rounding } = constructor);
        if (d[0]) {
          if (d1[0]) {
            let tmp17;
            let num8;
            let tmp19;
            let constructor2;
            const tmp13 = floor(constructor1.e / 7);
            let tmp14 = floor(self.e / 7);
            const substr = d.slice();
            const diff = tmp14 - tmp13;
            if (diff) {
              let tmp21;
              let length3;
              let arr2;
              if (diff < 0) {
                tmp21 = -diff;
                length3 = d1.length;
                tmp14 = tmp13;
                arr2 = substr;
              } else {
                length3 = substr.length;
                tmp21 = diff;
                arr2 = d1;
              }
              const _Math = Math;
              const _Math2 = Math;
              sum = Math.max(Math.ceil(precision / 7), length3) + 2;
              if (tmp21 > sum) {
                arr2.length = 1;
                tmp21 = sum;
              }
              const reversed = arr2.reverse();
              let diff1 = tmp25 - 1;
              if (+tmp21) {
                do {
                  let arr = arr2.push(0);
                  tmp28 = +diff1;
                  diff1 = tmp28 - 1;
                } while (tmp28);
              }
              const reversed1 = arr2.reverse();
              tmp17 = tmp20;
              num8 = tmp21;
              tmp19 = tmp14;
            } else {
              let length2 = d1.length;
              if (substr.length < length2) {
                length2 = length;
              }
              let num7 = 0;
              tmp17 = tmp16;
              if (0 < length2) {
                while (substr[num7] == d1[num7]) {
                  num7 = num7 + 1;
                  tmp17 = tmp16;
                }
                tmp17 = substr[num7] < d1[num7];
              }
              num8 = 0;
              tmp19 = tmp13;
            }
            let arr3 = d1;
            let arr4 = substr;
            if (tmp17) {
              constructor1.s = -constructor1.s;
              arr3 = substr;
              arr4 = d1;
            }
            let diff2 = arr3.length - length4;
            let sum1 = length4;
            let tmp32 = length4;
            if (diff2 > 0) {
              do {
                let tmp33 = +sum1;
                sum1 = tmp33 + 1;
                arr4[tmp33] = 0;
                diff2 = diff2 - 1;
                tmp32 = sum1;
              } while (diff2 > 0);
            }
            let length5 = arr3.length;
            if (length5 > num8) {
              do {
                diff3 = length5 - 1;
                if (arr4[diff3] < arr3[diff3]) {
                  let tmp35 = diff3;
                  if (tmp35) {
                    let diff4 = diff3 - 1;
                    let tmp37 = diff4;
                    tmp35 = diff4;
                    if (0 === arr4[diff4]) {
                      arr4[tmp37] = 9999999;
                      tmp35 = tmp37;
                      while (tmp37) {
                        let diff5 = tmp37 - 1;
                        tmp37 = diff5;
                        tmp35 = diff5;
                        if (0 !== arr4[diff5]) {
                          break;
                        }
                      }
                    }
                  }
                  arr4[tmp35] = arr4[tmp35] - 1;
                  arr4[diff3] = arr4[diff3] + c19;
                }
                arr4[diff3] = arr4[diff3] - arr3[diff3];
                length5 = diff3;
              } while (diff3 > num8);
            }
            let diff6 = tmp32 - 1;
            if (0 === arr4[diff6]) {
              do {
                let arr5 = arr4.pop();
                let diff7 = diff6 - 1;
                diff6 = diff7;
                tmp44 = arr4[diff7];
              } while (0 === tmp44);
            }
            let diff8 = tmp19;
            let tmp46 = tmp19;
            if (0 === arr4[0]) {
              do {
                diff8 = diff8 - 1;
                let arr6 = arr4.shift();
                tmp46 = diff8;
                first = arr4[0];
              } while (0 === first);
            }
            if (arr4[0]) {
              constructor1.d = arr4;
              let first1 = arr4[0];
              let result = tmp46 * 7;
              let tmp53 = result;
              if (first1 >= 10) {
                do {
                  result = result + 1;
                  first1 = first1 / 10;
                  tmp53 = result;
                } while (10 <= first1);
              }
              constructor1.e = tmp53;
              constructor2 = constructor1;
              if (c8) {
                finalise(constructor1, precision, rounding);
                constructor2 = constructor1;
              }
            } else {
              let num15 = 0;
              if (3 === rounding) {
                num15 = -0;
              }
              const self8 = this;
              const self9 = this;
              constructor2 = new constructor(num15);
            }
            return constructor2;
          }
        }
        if (d1[0]) {
          constructor1.s = -constructor1.s;
          constructor3 = constructor1;
        } else if (d[0]) {
          const self6 = this;
          const self7 = this;
          constructor3 = new constructor(self);
        } else {
          let num3 = 0;
          if (3 === rounding) {
            num3 = -0;
          }
          const self4 = this;
          const self5 = this;
          const constructor4 = new constructor(num3);
          return constructor4;
        }
        if (c8) {
          finalise(constructor3, precision, rounding);
        }
        return constructor3;
      }
    }
  }
  if (self.s) {
    let constructor5;
    if (constructor1.s) {
      if (self.d) {
        constructor1.s = -constructor1.s;
        constructor5 = constructor1;
      } else {
        if (constructor1.d) {
          num = self;
        } else {
          num = NaN;
        }
        const self2 = this;
        const self3 = this;
        constructor5 = new constructor(num);
      }
    }
    return constructor5;
  }
  constructor5 = new constructor(NaN);
};
fn28 = function(arg0) {
  let constructor3;
  let minusResult;
  self = this;
  const constructor = this.constructor;
  const constructor1 = new constructor(arg0);
  if (this.d) {
    if (constructor1.s) {
      if (constructor1.d) {
        return constructor3;
      }
      if (constructor1.d) {
        if (self.d) {
          constructor3 = minusResult;
        }
        c8 = false;
        if (9 == constructor.modulo) {
          const tmp13 = f143737(self, constructor1.abs(), 0, 3, 1);
          tmp13.s = tmp13.s * constructor1.s;
          obj2 = tmp13;
        } else {
          obj2 = f143737(self, tmp, 0, constructor.modulo, 1);
        }
        c8 = true;
        minusResult = self.minus(obj2.times(constructor1));
      }
      const self2 = this;
      const self3 = this;
      const constructor2 = new constructor(self);
      minusResult = constructor2;
      finalise(constructor2, constructor.precision, constructor.rounding);
    }
  }
  constructor3 = new constructor(NaN);
};
fn29 = function() {
  return naturalExponential(this);
};
fn30 = function() {
  return naturalLogarithm(this);
};
fn31 = function() {
  const constructor = new this.constructor(this);
  constructor.s = -constructor.s;
  finalise(constructor);
  return constructor;
};
fn32 = function(arg0) {
  let diff2;
  let precision;
  let rounding;
  let tmp22;
  let tmp33;
  self = this;
  const constructor = this.constructor;
  const constructor1 = new constructor(arg0);
  if (this.d) {
    if (constructor1.d) {
      if (self.s != constructor1.s) {
        constructor1.s = -constructor1.s;
        return self.minus(constructor1);
      } else {
        const d = self.d;
        const d1 = constructor1.d;
        ({ precision, rounding } = constructor);
        if (d[0]) {
          if (d1[0]) {
            let tmp10 = floor(self.e / 7);
            const tmp11 = floor(constructor1.e / 7);
            const substr = d.slice();
            const diff = tmp10 - tmp11;
            let tmp13 = tmp11;
            if (diff) {
              let tmp14;
              let length;
              let arr2;
              if (diff < 0) {
                tmp14 = -diff;
                length = d1.length;
                tmp10 = tmp11;
                arr2 = substr;
              } else {
                length = substr.length;
                tmp14 = diff;
                arr2 = d1;
              }
              const _Math = Math;
              const rounded = Math.ceil(precision / 7);
              if (rounded > length) {
                sum = rounded + 1;
              } else {
                sum = length + 1;
              }
              if (tmp14 > sum) {
                arr2.length = 1;
                tmp14 = sum;
              }
              const reversed = arr2.reverse();
              let diff1 = tmp19 - 1;
              if (+tmp14) {
                do {
                  let arr = arr2.push(0);
                  tmp22 = +diff1;
                  diff1 = tmp22 - 1;
                } while (tmp22);
              }
              const reversed1 = arr2.reverse();
              tmp13 = tmp10;
            }
            let length3 = d1.length;
            let tmp24 = d1;
            let arr3 = substr;
            if (substr.length - length3 < 0) {
              tmp24 = substr;
              arr3 = d1;
              length3 = length2;
            }
            let num8 = 0;
            let num9 = 0;
            if (length3) {
              do {
                diff2 = length3 - 1;
                let sum1 = arr3[diff2] + tmp24[diff2] + num8;
                arr3[diff2] = sum1;
                num8 = sum1 / c19 | 0;
                arr3[diff2] = arr3[diff2] % c19;
                num9 = num8;
                length3 = diff2;
              } while (diff2);
            }
            let sum2 = tmp13;
            if (num9) {
              arr3.unshift(num9);
              sum2 = tmp13 + 1;
            }
            let diff3 = arr3.length - 1;
            if (0 == arr3[diff3]) {
              do {
                let arr5 = arr3.pop();
                let diff4 = diff3 - 1;
                diff3 = diff4;
                tmp33 = arr3[diff4];
              } while (0 == tmp33);
            }
            constructor1.d = arr3;
            let first = arr3[0];
            let result = sum2 * 7;
            let tmp36 = result;
            if (first >= 10) {
              do {
                result = result + 1;
                first = first / 10;
                tmp36 = result;
              } while (10 <= first);
            }
            constructor1.e = tmp36;
            if (c8) {
              finalise(constructor1, precision, rounding);
            }
            return constructor1;
          }
        }
        let constructor2 = constructor1;
        if (!d1[0]) {
          const self4 = this;
          const self5 = this;
          constructor2 = new constructor(self);
        }
        if (c8) {
          finalise(constructor2, precision, rounding);
        }
        return constructor2;
      }
    }
  }
  if (self.s) {
    let constructor3;
    if (constructor1.s) {
      constructor3 = constructor1;
      if (!self.d) {
        if (constructor1.d) {
          num = self;
        } else {
          num = NaN;
        }
        const self2 = this;
        const self3 = this;
        constructor3 = new constructor(num);
      }
    }
    return constructor3;
  }
  constructor3 = new constructor(NaN);
};
fn33 = function(arg0) {
  let result1;
  if (undefined !== arg0) {
    if (arg0 !== arg0) {
      if (1 !== arg0) {
        if (0 !== arg0) {
          const _Error = Error;
          throw Error(c9 + arg0);
        }
      }
    }
  }
  self = this;
  let num3 = NaN;
  if (this.d) {
    const d = self.d;
    const diff = d.length - 1;
    sum = 7 * diff + 1;
    let tmp3 = d[diff];
    let tmp4 = sum;
    if (tmp3) {
      let diff1 = sum;
      let tmp6 = sum;
      if (tmp3 % 10 === 0) {
        do {
          diff1 = diff1 - 1;
          let result = tmp3 / 10;
          tmp3 = result;
          tmp6 = diff1;
          result1 = result % 10;
        } while (result1 === 0);
      }
      let first = d[0];
      let sum1 = tmp6;
      tmp4 = tmp6;
      if (first >= 10) {
        do {
          sum1 = sum1 + 1;
          first = first / 10;
          tmp4 = sum1;
        } while (10 <= first);
      }
    }
    num3 = tmp4;
    const tmp11 = arg0 && self.e + 1 > tmp4;
    if (tmp11) {
      num3 = self.e + 1;
    }
  }
  return num3;
};
fn34 = function() {
  let constructor5;
  let precision;
  let rounding;
  let tmp18;
  self = this;
  const constructor = this.constructor;
  if (this.isFinite()) {
    let constructor1;
    if (self.isZero()) {
      const self10 = this;
      const self11 = this;
      constructor1 = new constructor(self);
    } else {
      let obj4;
      ({ precision, rounding } = constructor);
      const _Math = Math;
      constructor.precision = precision + Math.max(self.e, self.sd()) + 7;
      constructor.rounding = 1;
      obj = toLessThanHalfPi(constructor, self);
      if (obj.d.length < 3) {
        let tmp19 = obj;
        if (!obj.isZero()) {
          tmp19 = taylorSeries(constructor, 2, obj, obj);
        }
        obj4 = tmp19;
      } else {
        const _Math2 = Math;
        const result = 1.4 * Math.sqrt(length);
        let num6 = 16;
        if (16 >= result) {
          num6 = result | 0;
        }
        let diff = num6 - 1;
        let num8 = 5;
        let diff1 = diff;
        let num9 = 5;
        const times = obj.times;
        if (diff) {
          do {
            num8 = num8 * 5;
            diff1 = diff1 - 1;
            num9 = num8;
          } while (diff1);
        }
        const timesResult = times(1 / num9);
        const tmp11 = taylorSeries(constructor, 2, timesResult, timesResult);
        const self4 = this;
        const self5 = this;
        const constructor2 = new constructor(5);
        const self6 = this;
        const self7 = this;
        const constructor3 = new constructor(16);
        const self8 = this;
        const self9 = this;
        const constructor4 = new constructor(20);
        let times2Result = tmp11;
        obj4 = tmp11;
        if (num6) {
          do {
            let timesResult1 = times2Result.times(times2Result);
            let times2 = times2Result.times;
            let plus = constructor2.plus;
            let times3 = timesResult1.times;
            let timesResult2 = constructor3.times(timesResult1);
            times2Result = times2(plus(times3(timesResult2.minus(constructor4))));
            tmp18 = diff;
            diff = diff - 1;
            obj4 = times2Result;
          } while (tmp18);
        }
      }
      constructor.precision = precision;
      constructor.rounding = rounding;
      constructor1 = obj4;
      if (num > 2) {
        constructor1 = obj4.neg();
      }
      finalise(constructor1, precision, rounding, true);
    }
    constructor5 = constructor1;
  } else {
    const self2 = this;
    const self3 = this;
    constructor5 = new constructor(NaN);
  }
  return constructor5;
};
fn35 = function() {
  let arr4;
  let constructor;
  let d;
  let e;
  let s;
  let substr;
  let substr1;
  let timesResult;
  let tmp17;
  let tmp18;
  let tmp21;
  self = this;
  ({ d, e, s, constructor } = this);
  if (1 === s) {
    if (d) {
      if (d[0]) {
        let text1;
        c8 = false;
        const _Math = Math;
        const str = Math.sqrt(+self);
        if (0 != str) {
          let constructor1;
          let obj5;
          if (str != Infinity) {
            const self2 = this;
            const self3 = this;
            constructor1 = new constructor(str.toString());
          }
          const precision = constructor.precision;
          sum = precision + 3;
          do {
            let plusResult = constructor1.plus(f143737(self, constructor1, sum + 2, 1));
            timesResult = plusResult.times(0.5);
            let arr3 = digitsToString(constructor1.d);
            substr = arr3.slice(0, sum);
            arr4 = digitsToString(timesResult.d);
            tmp17 = num9;
            obj5 = constructor1;
            tmp18 = sum;
            constructor1 = timesResult;
            substr1 = arr4.slice(0, sum);
          } while (substr !== substr1);
          const substr2 = arr4.slice(tmp18 - 3, tmp18 + 1);
          if ("9999" != substr2) {
            if (!tmp17) {
              c8 = true;
              finalise(obj5, precision, constructor.rounding, tmp21);
              return obj5;
            }
            let tmp22 = +substr2;
            if (tmp22) {
              tmp22 = +substr2.slice(1) || "5" != substr2.charAt(0);
              const tmp23 = +substr2.slice(1) || "5" != substr2.charAt(0);
            }
            obj5 = timesResult;
            if (!tmp22) {
              finalise(timesResult, precision + 1, 1);
              const timesResult1 = timesResult.times(timesResult);
              obj5 = timesResult;
              tmp21 = !timesResult1.eq(self);
            }
          }
          if (tmp17) {
            sum = tmp18 + 4;
            constructor1 = timesResult;
          } else {
            finalise(obj5, precision + 1, 0);
            obj5.times(obj5);
          }
        }
        const arr = digitsToString(d);
        let text = arr;
        if ((arr.length + e) % 2 === 0) {
          text = `${arr}0`;
        }
        const _Math2 = Math;
        const sqrtResult = Math.sqrt(text);
        let result = e < 0;
        const tmp5 = floor((e + 1) / 2);
        if (!result) {
          result = e % 2;
        }
        const diff = tmp5 - result;
        if (sqrtResult == Infinity) {
          text1 = `5e${tmp7}`;
        } else {
          const toExponentialResult = sqrtResult.toExponential();
          text1 = toExponentialResult.slice(0, toExponentialResult.indexOf("e") + 1) + diff;
        }
        const self4 = this;
        const self5 = this;
        constructor1 = new constructor(text1);
      }
    }
  }
  let num11 = NaN;
  if (s) {
    if (s >= 0) {
      let num13 = Infinity;
      if (d) {
        num13 = self;
      }
      num11 = num13;
    } else {
      num11 = NaN;
      if (d) {
        num11 = NaN;
      }
    }
  }
  const constructor2 = new constructor(num11);
  return constructor2;
};
fn36 = function() {
  let constructor3;
  let precision;
  let rounding;
  self = this;
  const constructor = this.constructor;
  if (this.isFinite()) {
    let constructor1;
    if (self.isZero()) {
      const self6 = this;
      const self7 = this;
      constructor1 = new constructor(self);
    } else {
      ({ precision, rounding } = constructor);
      constructor.precision = precision + 10;
      constructor.rounding = 1;
      const sinResult = self.sin();
      sinResult.s = 1;
      const self4 = this;
      const self5 = this;
      const constructor2 = new constructor(1);
      const minusResult = constructor2.minus(sinResult.times(sinResult));
      const obj4 = f143737(sinResult, minusResult.sqrt(), precision + 10, 0);
      constructor.precision = precision;
      constructor.rounding = rounding;
      if (2 == num) {
        constructor1 = obj4.neg();
      } else {
        constructor1 = obj4;
      }
      finalise(constructor1, precision, rounding, true);
    }
    constructor3 = constructor1;
  } else {
    const self2 = this;
    const self3 = this;
    constructor3 = new constructor(NaN);
  }
  return constructor3;
};
fn37 = function(arg0) {
  let constructor;
  let d;
  let tmp14;
  let tmp27;
  ({ constructor, d } = this);
  const constructor1 = new constructor(arg0);
  const d1 = constructor1.d;
  constructor1.s = constructor1.s * this.s;
  if (d) {
    if (d[0]) {
      if (d1) {
        if (d1[0]) {
          let sum4;
          const tmp4 = floor(this.e / 7);
          sum = tmp4 + floor(constructor1.e / 7);
          let tmp6 = d1;
          let tmp7 = d;
          let tmp8 = length2;
          let tmp9 = length;
          if (d.length < d1.length) {
            tmp6 = d;
            tmp7 = d1;
            tmp8 = length;
            tmp9 = length2;
          }
          const items = [];
          const sum1 = tmp9 + tmp8;
          let diff = tmp11 - 1;
          if (+sum1) {
            do {
              let arr = items.push(0);
              tmp14 = +diff;
              diff = tmp14 - 1;
            } while (tmp14);
          }
          let diff1 = tmp8 - 1;
          let tmp16;
          if (diff1 >= 0) {
            do {
              let sum2 = tmp9 + diff1;
              let num8 = 0;
              let num9 = 0;
              let tmp19 = sum2;
              if (sum2 > diff1) {
                do {
                  let sum3 = items[sum2] + tmp6[diff1] * tmp7[sum2 - diff1 - 1] + num8;
                  let tmp21 = +sum2;
                  sum2 = tmp21 - 1;
                  items[tmp21] = sum3 % c19 | 0;
                  num8 = sum3 / c19 | 0;
                  num9 = num8;
                  tmp19 = sum2;
                } while (sum2 > diff1);
              }
              items[tmp19] = (items[tmp19] + num9) % c19 | 0;
              diff1 = diff1 - 1;
              tmp16 = num9;
            } while (diff1 >= 0);
          }
          let diff2 = sum1 - 1;
          if (!items[diff2]) {
            do {
              let arr2 = items.pop();
              let diff3 = diff2 - 1;
              diff2 = diff3;
              tmp27 = items[diff3];
            } while (!tmp27);
          }
          if (tmp16) {
            sum4 = sum + 1;
          } else {
            items.shift();
            sum4 = sum;
          }
          constructor1.d = items;
          let first = items[0];
          let result = sum4 * 7;
          let tmp32 = result;
          if (first >= 10) {
            do {
              result = result + 1;
              first = first / 10;
              tmp32 = result;
            } while (10 <= first);
          }
          constructor1.e = tmp32;
          if (c8) {
            finalise(constructor1, constructor.precision, constructor.rounding);
          }
          return constructor1;
        }
      }
    }
  }
  num = NaN;
  if (constructor1.s) {
    if (d) {
      if (!d[0]) {
        num = NaN;
      }
    }
    if (d1) {
      if (!d1[0]) {
        num = NaN;
      }
    }
    if (d) {
      let num3;
      if (d1) {
        const s = constructor1.s;
        num3 = 0;
      }
      num = num3;
    }
    num3 = constructor1.s / 0;
  }
  const constructor2 = new constructor(num);
  return constructor2;
};
fn38 = function(arg0, rounding) {
  const constructor = this.constructor;
  const constructor1 = new constructor(this);
  if (undefined !== arg0) {
    if (arg0 === ~(~arg0)) {
      if (arg0 >= 0) {
        if (arg0 <= 1000000000) {
          if (undefined === rounding) {
            rounding = constructor.rounding;
          } else {
            const _Error = Error;
            throw Error(c9 + rounding);
          }
          finalise(constructor1, arg0 + constructor1.e + 1, rounding);
        }
      }
    }
    const _Error2 = Error;
    throw Error(c9 + arg0);
  }
  return constructor1;
};
fn39 = function(arg0, arg1) {
  return toStringBinary(this, 16, arg0, arg1);
};
fn40 = function(arg0) {
  let precision;
  let rounding;
  self = this;
  const constructor = this.constructor;
  const constructor1 = new constructor(arg0);
  if (this.d) {
    if (constructor1.d) {
      if (self.d[0]) {
        if (constructor1.d[0]) {
          const self2 = this;
          const self3 = this;
          const constructor2 = new constructor(self);
          const tmp4 = constructor2;
          if (constructor2.eq(1)) {
            return constructor2;
          } else {
            ({ precision, rounding } = constructor);
            if (constructor1.eq(1)) {
              finalise(constructor2, precision, rounding);
              return constructor2;
            } else {
              const tmp6 = floor(constructor1.e / 7);
              if (tmp6 >= constructor1.d.length - 1) {
                let tmp7 = tmp;
                if (+constructor1 < 0) {
                  tmp7 = -tmp;
                }
                if (tmp7 <= 9007199254740991) {
                  let divResult;
                  const tmp36 = intPow(constructor, tmp4, tmp7, precision);
                  if (constructor1.s < 0) {
                    const self10 = this;
                    const self11 = this;
                    const constructor3 = new constructor(1);
                    divResult = constructor3.div(tmp36);
                  } else {
                    finalise(tmp36, precision, rounding);
                    divResult = tmp36;
                  }
                  return divResult;
                }
              }
              let num5 = constructor2.s;
              let tmp8 = num5;
              if (num5 < 0) {
                if (tmp6 < constructor1.d.length - 1) {
                  const self8 = this;
                  const self9 = this;
                  const constructor4 = new constructor(NaN);
                  return constructor4;
                } else {
                  if (!(1 & constructor1.d[tmp6])) {
                    num5 = 1;
                  }
                  tmp8 = num5;
                  if (0 == constructor2.e) {
                    tmp8 = num5;
                    if (1 == constructor2.d[0]) {
                      tmp8 = num5;
                      if (1 == constructor2.d.length) {
                        constructor2.s = num5;
                        return constructor2;
                      }
                    }
                  }
                }
              }
              const tmp10 = pow(+constructor2, +constructor1);
              if (0 != tmp10) {
                let e;
                const _isFinite = isFinite;
                if (isFinite(tmp10)) {
                  const self4 = this;
                  const self5 = this;
                  const constructor5 = new constructor("" + tmp10);
                  e = constructor5.e;
                }
                if (e <= constructor.maxE + 1) {
                  let constructor6;
                  if (e >= constructor.minE - 1) {
                    c8 = false;
                    constructor2.s = 1;
                    constructor.rounding = 1;
                    const _Math3 = Math;
                    const bound = Math.min(12, ("" + e).length);
                    constructor6 = naturalExponential(constructor1.times(naturalLogarithm(constructor2, precision + bound)), precision);
                    let d = constructor6.d;
                    if (d) {
                      finalise(constructor6, precision + 5, 1);
                      d = checkRoundingDigits(constructor6.d, precision, rounding);
                    }
                    if (d) {
                      sum = precision + 10;
                      const tmp45Result = naturalExponential(constructor1.times(naturalLogarithm(constructor2, sum + bound)), sum);
                      finalise(tmp45Result, sum + 5, 1);
                      constructor6 = tmp45Result;
                      const arr = digitsToString(tmp45Result.d);
                      if (+arr.slice(precision + 1, precision + 15) + 1 === 100000000000000) {
                        finalise(tmp45Result, precision + 1, 0);
                        constructor6 = tmp45Result;
                      }
                    }
                    constructor6.s = tmp8;
                    c8 = true;
                    constructor.rounding = rounding;
                    finalise(constructor6, precision, rounding);
                  }
                  return constructor6;
                }
                let num12 = 0;
                if (e > 0) {
                  num12 = tmp8 / 0;
                }
                const self6 = this;
                const self7 = this;
                constructor6 = new constructor(num12);
              }
              const _Math = Math;
              const _Math2 = Math;
              e = floor(tmp * (Math.log(`0.${digitsToString(obj2.d)}`) / Math.LN10 + constructor2.e + 1));
            }
          }
        }
      }
    }
  }
  const constructor7 = new constructor(pow(+self, tmp));
  return constructor7;
};
fn41 = function(precision, rounding) {
  self = this;
  const constructor = this.constructor;
  if (undefined === precision) {
    ({ precision, rounding } = constructor);
  } else {
    if (precision === ~(~precision)) {
      if (precision >= 1) {
        if (precision <= 1000000000) {
          if (undefined === rounding) {
            rounding = constructor.rounding;
          } else {
            const _Error = Error;
            throw Error(c9 + rounding);
          }
        }
      }
    }
    const _Error2 = Error;
    throw Error(c9 + precision);
  }
  const constructor1 = new constructor(self);
  finalise(constructor1, precision, rounding);
  return constructor1;
};
fn42 = function() {
  const constructor = new this.constructor(this);
  finalise(constructor, this.e + 1, 1);
  return constructor;
};
fn43 = function() {
  self = this;
  const constructor = this.constructor;
  let text = finiteToString(self, tmp2);
  finiteToString(self, this.e <= constructor.toExpNeg || self.e >= constructor.toExpPos);
  if (self.isNeg()) {
    text = `-${tmp3}`;
  }
  return text;
};
const f143737 = function(s, s2, arg2, rounding, arg4, arg5) {
  let num13;
  let precision;
  let tmp14;
  let tmp21;
  let tmp27;
  let tmp56;
  let tmp64;
  let tmp71;
  let tmp81;
  const constructor = s.constructor;
  num = -1;
  if (s.s == s2.s) {
    num = 1;
  }
  const d = s.d;
  const d1 = s2.d;
  if (d) {
    if (d[0]) {
      if (d1) {
        if (d1[0]) {
          let diff;
          let num7;
          let tmp5;
          const tmp4 = arg5;
          if (tmp4) {
            diff = s.e - s2.e;
            num7 = 1;
            tmp5 = arg5;
          } else {
            tmp5 = c19;
            num7 = 7;
            const tmp7 = floor(s.e / 7);
            diff = tmp7 - floor(s2.e / 7);
          }
          let length = d1.length;
          self = this;
          const self2 = this;
          const constructor1 = new constructor(num);
          const items = [];
          constructor1.d = items;
          let num8 = d[0];
          const first = d1[0];
          const tmp11 = constructor1;
          if (!num8) {
            num8 = 0;
          }
          let num11 = 0;
          let num12 = 0;
          if (first == num8) {
            do {
              sum = num11 + 1;
              num13 = d[sum];
              tmp14 = d1[sum];
              if (!num13) {
                num13 = 0;
              }
              num11 = sum;
              num12 = sum;
            } while (tmp14 == num13);
          }
          let num14 = d[num12];
          const tmp15 = d1[num12];
          if (!num14) {
            num14 = 0;
          }
          let diff1 = diff;
          if (tmp15 > num14) {
            diff1 = diff - 1;
          }
          let tmp17 = arg2;
          if (null == arg2) {
            ({ precision, rounding } = constructor);
            tmp17 = precision;
          } else {
            precision = tmp17;
            if (arg4) {
              precision = tmp17 + (s.e - s2.e) + 1;
            }
          }
          if (precision < 0) {
            items.push(1);
            flag = true;
          } else {
            let tmp87;
            if (1 == length) {
              const first1 = d1[0];
              let num44 = 0;
              let num45 = 0;
              if (0 < d.length) {
                const sum1 = tmp107 + 1;
                let diff2 = sum1 - 1;
                let num46 = 0;
                let num47 = 0;
                num44 = 0;
                num45 = 0;
                if (sum1) {
                  while (true) {
                    let num48 = d[num47];
                    let result = num46 * tmp5;
                    let tmp92 = diff2;
                    if (!num48) {
                      num48 = 0;
                    }
                    let sum2 = result + num48;
                    items[num47] = sum2 / first1 | 0;
                    let tmp95 = sum2 % first1 | 0;
                    let sum3 = num47 + 1;
                    if (sum3 < length2) {
                      diff2 = diff2 - 1;
                      num46 = tmp95;
                      num47 = sum3;
                      num44 = tmp95;
                      num45 = sum3;
                      if (!tmp92) {
                        break;
                      }
                    } else {
                      num44 = tmp95;
                      num45 = sum3;
                      if (!tmp95) {
                        break;
                      }
                    }
                    break;
                  }
                }
              }
              if (!num44) {
                num44 = num45 < length2;
              }
              tmp87 = num44;
            } else {
              let arr5 = d1;
              let arr6 = d;
              let length4 = length2;
              if (1 < (tmp5 / (d1[0] + 1) | 0)) {
                const length11 = d1.length;
                const substr = d1.slice();
                let diff3 = tmp109 - 1;
                let num15 = 0;
                let num16 = 0;
                if (+length11) {
                  do {
                    let sum4 = substr[diff3] * tmp108 + num15;
                    substr[diff3] = sum4 % tmp5 | 0;
                    num15 = sum4 / tmp5 | 0;
                    tmp21 = +diff3;
                    diff3 = tmp21 - 1;
                    num16 = num15;
                  } while (tmp21);
                }
                if (num16) {
                  substr.unshift(num16);
                }
                const length3 = d.length;
                const substr1 = d.slice();
                let diff4 = tmp24 - 1;
                let num17 = 0;
                let num18 = 0;
                if (+length3) {
                  do {
                    let sum5 = substr1[diff4] * tmp108 + num17;
                    substr1[diff4] = sum5 % tmp5 | 0;
                    num17 = sum5 / tmp5 | 0;
                    tmp27 = +diff4;
                    diff4 = tmp27 - 1;
                    num18 = num17;
                  } while (tmp27);
                }
                if (num18) {
                  substr1.unshift(num18);
                }
                length = substr.length;
                length4 = substr1.length;
                arr5 = substr;
                arr6 = substr1;
              }
              const substr2 = arr6.slice(0, length);
              let sum6 = length5;
              let tmp32 = length5;
              if (substr2.length < length) {
                do {
                  let tmp33 = +sum6;
                  sum6 = tmp33 + 1;
                  substr2[tmp33] = 0;
                  tmp32 = sum6;
                } while (sum6 < length);
              }
              const substr3 = arr5.slice();
              substr3.unshift(0);
              const first2 = arr5[0];
              let sum7 = first2;
              let sum14 = length;
              let diff11 = tmp107;
              let tmp39 = tmp32;
              let arr9 = substr2;
              let num19 = 0;
              if (arr5[1] >= tmp5 / 2) {
                sum7 = first2 + 1;
                sum14 = length;
                diff11 = tmp107;
                tmp39 = tmp32;
                arr9 = substr2;
                num19 = 0;
              }
              while (true) {
                let num21;
                let length6;
                let num24;
                let items1;
                let tmp48;
                let tmp43 = tmp39;
                let tmp42 = diff11;
                if (length != tmp39) {
                  let num23 = -1;
                  if (length > tmp43) {
                    num23 = 1;
                  }
                  num21 = num23;
                } else {
                  let num20 = 0;
                  num21 = 0;
                  if (0 < length) {
                    while (arr5[num20] == arr9[num20]) {
                      let sum8 = num20 + 1;
                      num20 = sum8;
                      num21 = 0;
                    }
                    let num22 = -1;
                    if (arr5[num20] > arr9[num20]) {
                      num22 = 1;
                    }
                    num21 = num22;
                  }
                }
                if (num21 < 0) {
                  let substr5;
                  let num26;
                  let first3 = arr9[0];
                  let sum9 = first3;
                  if (length != tmp43) {
                    let num25 = arr9[1];
                    let result1 = first3 * tmp5;
                    if (!num25) {
                      num25 = 0;
                    }
                    sum9 = result1 + num25;
                  }
                  let diff5 = sum9 / sum7 | 0;
                  if (1 < diff5) {
                    let num30;
                    if (diff5 >= tmp5) {
                      diff5 = tmp5 - 1;
                    }
                    let length7 = arr5.length;
                    let substr4 = arr5.slice();
                    let tmp53 = +length7;
                    let diff6 = tmp53 - 1;
                    let num27 = 0;
                    let num28 = 0;
                    if (tmp53) {
                      do {
                        let sum10 = substr4[diff6] * diff5 + num27;
                        substr4[diff6] = sum10 % tmp5 | 0;
                        num27 = sum10 / tmp5 | 0;
                        tmp56 = +diff6;
                        diff6 = tmp56 - 1;
                        num28 = num27;
                      } while (tmp56);
                    }
                    if (num28) {
                      let arr7 = substr4.unshift(num28);
                    }
                    let length8 = substr4.length;
                    let length9 = arr9.length;
                    if (length8 != length9) {
                      let num32 = -1;
                      if (length8 > length9) {
                        num32 = 1;
                      }
                      num30 = num32;
                    } else {
                      let num29 = 0;
                      num30 = 0;
                      if (0 < length8) {
                        while (substr4[num29] == arr9[num29]) {
                          let sum11 = num29 + 1;
                          num29 = sum11;
                          num30 = 0;
                        }
                        let num31 = -1;
                        if (substr4[num29] > arr9[num29]) {
                          num31 = 1;
                        }
                        num30 = num31;
                      }
                    }
                    tmp43 = length9;
                    substr5 = substr4;
                    num26 = diff5;
                    num21 = num30;
                    if (1 === num30) {
                      let tmp60 = arr5;
                      if (length < length8) {
                        tmp60 = substr3;
                      }
                      let tmp61 = +length8;
                      let diff7 = tmp61 - 1;
                      let num33 = 0;
                      if (tmp61) {
                        do {
                          substr4[diff7] = substr4[diff7] - num33;
                          let num34 = 0;
                          if (substr4[diff7] < tmp60[diff7]) {
                            num34 = 1;
                          }
                          substr4[diff7] = num34 * tmp5 + substr4[diff7] - tmp60[diff7];
                          tmp64 = +diff7;
                          diff7 = tmp64 - 1;
                          num33 = num34;
                        } while (tmp64);
                      }
                      let diff8 = diff5 - 1;
                      tmp43 = length9;
                      substr5 = substr4;
                      num26 = diff8;
                      num21 = num30;
                      if (!substr4[0]) {
                        tmp43 = length9;
                        substr5 = substr4;
                        num26 = diff8;
                        num21 = num30;
                        if (substr4.length > 1) {
                          let arr8 = substr4.shift();
                          tmp43 = length9;
                          substr5 = substr4;
                          num26 = diff8;
                          num21 = num30;
                          while (!substr4[0]) {
                            tmp43 = length9;
                            substr5 = substr4;
                            num26 = diff8;
                            num21 = num30;
                            if (substr4.length <= 1) {
                              break;
                            }
                          }
                        }
                      }
                    }
                  } else {
                    num26 = diff5;
                    if (0 === diff5) {
                      num26 = 1;
                      num21 = 1;
                    }
                    substr5 = arr5.slice();
                  }
                  if (substr5.length < tmp43) {
                    let arr10 = substr5.unshift(0);
                  }
                  let tmp68 = +tmp43;
                  let diff9 = tmp68 - 1;
                  let num35 = 0;
                  if (tmp68) {
                    do {
                      arr9[diff9] = arr9[diff9] - num35;
                      let num36 = 0;
                      if (arr9[diff9] < substr5[diff9]) {
                        num36 = 1;
                      }
                      arr9[diff9] = num36 * tmp5 + arr9[diff9] - substr5[diff9];
                      tmp71 = +diff9;
                      diff9 = tmp71 - 1;
                      num35 = num36;
                    } while (tmp71);
                  }
                  if (!arr9[0]) {
                    if (arr9.length > 1) {
                      let arr11 = arr9.shift();
                      while (!arr9[0]) {
                        if (arr9.length <= 1) {
                          break;
                        }
                      }
                    }
                  }
                  let tmp73 = -1 === num21;
                  if (-1 === num21) {
                    let num38;
                    let length10 = arr9.length;
                    if (length != length10) {
                      let num40 = -1;
                      if (length > length10) {
                        num40 = 1;
                      }
                      num38 = num40;
                    } else {
                      let num37 = 0;
                      num38 = 0;
                      if (0 < length) {
                        while (arr5[num37] == arr9[num37]) {
                          let sum12 = num37 + 1;
                          num37 = sum12;
                          num38 = 0;
                        }
                        let num39 = -1;
                        if (arr5[num37] > arr9[num37]) {
                          num39 = 1;
                        }
                        num38 = num39;
                      }
                    }
                    tmp73 = num38 < 1;
                    num21 = num38;
                    tmp43 = length10;
                  }
                  let tmp76 = num26;
                  if (tmp73) {
                    let tmp77 = arr5;
                    if (length < tmp43) {
                      tmp77 = substr3;
                    }
                    let tmp78 = +tmp43;
                    let diff10 = tmp78 - 1;
                    let num41 = 0;
                    if (tmp78) {
                      do {
                        arr9[diff10] = arr9[diff10] - num41;
                        let num42 = 0;
                        if (arr9[diff10] < tmp77[diff10]) {
                          num42 = 1;
                        }
                        arr9[diff10] = num42 * tmp5 + arr9[diff10] - tmp77[diff10];
                        tmp81 = +diff10;
                        diff10 = tmp81 - 1;
                        num41 = num42;
                      } while (tmp81);
                    }
                    let sum13 = num26 + 1;
                    tmp76 = sum13;
                    if (!arr9[0]) {
                      tmp76 = sum13;
                      if (arr9.length > 1) {
                        let arr12 = arr9.shift();
                        tmp76 = sum13;
                        while (!arr9[0]) {
                          tmp76 = sum13;
                          if (arr9.length <= 1) {
                            break;
                          }
                        }
                      }
                    }
                  }
                  length6 = arr9.length;
                  num24 = tmp76;
                  items1 = arr9;
                  tmp48 = num21;
                } else {
                  length6 = tmp43;
                  items1 = arr9;
                  num24 = 0;
                  tmp48 = num21;
                  if (0 === num21) {
                    items1 = [0];
                    length6 = tmp43;
                    num24 = 1;
                    tmp48 = num21;
                  }
                }
                items[num19] = num24;
                if (tmp48) {
                  if (items1[0]) {
                    let tmp84 = +length6;
                    let tmp85 = arr6[sum14] || 0;
                    let num43 = tmp84 + 1;
                    items1[tmp84] = tmp85;
                    let items2 = items1;
                    let tmp86 = +sum14;
                    if (tmp86 < length4) {
                      num19 = num19 + 1;
                      sum14 = tmp86 + 1;
                      diff11 = diff11 - 1;
                      tmp39 = num43;
                      arr9 = items2;
                      if (!tmp42) {
                        break;
                      }
                    } else if (undefined === items2[0]) {
                      break;
                    }
                    tmp87 = undefined !== items2[0];
                  }
                }
                items2 = [arr6[sum14]];
                num43 = 1;
              }
            }
            flag = tmp87;
            if (!items[0]) {
              items.shift();
              flag = tmp87;
            }
          }
          if (1 === num7) {
            constructor1.e = diff1;
          } else {
            let first4 = items[0];
            let num50 = 1;
            let num51 = 1;
            if (first4 >= 10) {
              do {
                num50 = num50 + 1;
                first4 = first4 / 10;
                num51 = num50;
              } while (10 <= first4);
            }
            constructor1.e = num51 + diff1 * num7 - 1;
            let sum15 = tmp17;
            if (arg4) {
              sum15 = tmp17 + constructor1.e + 1;
            }
            finalise(tmp11, sum15, rounding, flag);
          }
          return constructor1;
        }
      }
    }
  }
  let num2 = NaN;
  if (s.s) {
    num2 = NaN;
    if (s2.s) {
      let tmp = d1;
      if (d) {
        let tmp2 = !d1;
        if (d1) {
          tmp2 = d[0] != d1[0];
        }
        tmp = tmp2;
      }
      num2 = NaN;
      if (tmp) {
        if (!d) {
          let num5;
          if (d1) {
            num5 = num / 0;
          }
          num2 = num5;
        }
        num5 = 0;
      }
    }
  }
  const constructor2 = new constructor(num2);
  return constructor2;
};
function clone(arg0) {
  obj = arg0;
  class Decimal {
    constructor(arg0) {
      self = this;
      tmp = Decimal;
      if (this instanceof Decimal) {
        self.constructor = tmp;
        tmp4 = closure_1;
        flag = arg0 instanceof closure_1;
        if (!flag) {
          tmp5 = arg0;
          if (tmp5) {
            tmp6 = c12;
            tmp5 = arg0.toStringTag === c12;
          }
          flag = tmp5;
        }
        if (!flag) {
          flag = false;
        }
        if (flag) {
          self.s = arg0.s;
          tmp66 = c8;
          if (tmp66) {
            if (arg0.d) {
              if (arg0.e <= tmp.maxE) {
                if (arg0.e < tmp.minE) {
                  num35 = 0;
                  self.e = 0;
                  items = [0];
                  self.d = items;
                  substr = items;
                } else {
                  ({ e: self.e, d: d2 } = arg0);
                  substr = d2.slice();
                  self.d = substr;
                }
              }
              tmp70 = substr;
            }
            num36 = NaN;
            self.e = NaN;
            tmp69 = null;
            self.d = null;
            substr = null;
          } else {
            ({ e: self.e, d } = arg0);
            if (d) {
              substr1 = d.slice();
            } else {
              substr1 = d;
            }
            self.d = substr1;
          }
          return;
        } else if (typeof arg0 === "number") {
          num25 = 0;
          if (0 === arg0) {
            num34 = 1;
            if (1 / arg0 < 0) {
              num34 = -1;
            }
            self.s = num34;
            self.e = 0;
            self.d = [0];
            return;
          } else {
            if (arg0 < 0) {
              str9 = -arg0;
              num27 = -1;
              self.s = -1;
            } else {
              num26 = 1;
              self.s = 1;
              str9 = arg0;
            }
            if (str9 === ~(~str9)) {
              num28 = 10000000;
              if (str9 < 10000000) {
                num29 = 10;
                num30 = 1;
                result = str9;
                num31 = 0;
                num32 = 0;
                if (str9 >= 10) {
                  do {
                    num31 = num31 + 1;
                    result = result / 10;
                    num32 = num31;
                  } while (10 <= result);
                }
                tmp62 = c8;
                if (tmp62) {
                  if (num32 > Decimal.maxE) {
                    num33 = NaN;
                    self.e = NaN;
                    tmp64 = null;
                    self.d = null;
                    items2 = null;
                  } else if (num32 < tmp63.minE) {
                    self.e = 0;
                    items1 = [0];
                    self.d = items1;
                    items2 = items1;
                  } else {
                    self.e = num32;
                    items2 = [];
                    items2[0] = str9;
                    self.d = items2;
                  }
                  tmp65 = items2;
                } else {
                  self.e = num32;
                  items3 = [];
                  items3[0] = str9;
                  self.d = items3;
                }
                return;
              }
            }
            {
              tmp58 = parseDecimal;
              tmp59 = parseDecimal(self, str9.toString());
              tmp60 = self;
            }
            return tmp60;
          }
        } else if (typeof arg0 === "string") {
          num4 = 0;
          charCodeAtResult = arg0.charCodeAt(0);
          num5 = 45;
          if (45 === charCodeAtResult) {
            num9 = 1;
            substr2 = arg0.slice(1);
            num10 = -1;
            self.s = -1;
          } else {
            num6 = 43;
            substr2 = arg0;
            if (43 === charCodeAtResult) {
              num7 = 1;
              substr2 = arg0.slice(1);
            }
            num8 = 1;
            self.s = 1;
          }
          obj = re18;
          tmp10 = substr2;
          if (re18.test(substr2)) {
            tmp56 = parseDecimal;
            tmp57 = parseDecimal(self, substr2);
            tmp12 = self;
          } else {
            str2 = "_";
            num11 = -1;
            if (substr2.indexOf("_") > -1) {
              str6 = "$1";
              replaced = substr2.replace(/(\d)_(?=\d)/g, "$1");
              str5 = replaced;
              if (obj.test(replaced)) {
                tmp54 = parseDecimal;
                tmp55 = parseDecimal(self, replaced);
                tmp12 = self;
              }
            } else {
              str3 = "Infinity";
              if ("Infinity" !== substr2) {
                str4 = "NaN";
                str5 = substr2;
              }
              if (!(+substr2)) {
                num12 = NaN;
                self.s = NaN;
              }
              num13 = NaN;
              self.e = NaN;
              tmp11 = null;
              self.d = null;
              tmp12 = self;
            }
            tmp14 = re16;
            tmp15 = str5;
            if (re16.test(str5)) {
              formatted = str5.toLowerCase();
              num14 = 16;
            } else {
              tmp16 = re15;
              num14 = 2;
              formatted = str5;
              if (!re15.test(str5)) {
                tmp17 = re17;
                num14 = 8;
                formatted = str5;
                if (!re17.test(str5)) {
                  tmp18 = globalThis;
                  _Error = Error;
                  tmp19 = c9;
                  throw Error(c9 + str5);
                }
              }
            }
            searchResult = formatted.search(/p/i);
            tmp21 = formatted;
            if (searchResult > 0) {
              num16 = 1;
              tmp22 = +formatted.slice(searchResult + 1);
              num17 = 2;
              substr3 = formatted.substring(2, searchResult);
            } else {
              num15 = 2;
              substr3 = formatted.slice(2);
            }
            str7 = ".";
            index = substr3.indexOf(".");
            tmp24 = index >= 0;
            constructor = self.constructor;
            tmp25 = substr3;
            tmp28 = substr3;
            if (tmp24) {
              str8 = "";
              replaced1 = substr3.replace(".", "");
              length = replaced1.length;
              diff = length - index;
              tmp30 = intPow;
              self2 = this;
              self3 = this;
              tmp31 = num14;
              constructor1 = new constructor(num14);
              num18 = 2;
              tmp33 = constructor1;
              num19 = 0;
              tmp34 = constructor;
              tmp35 = diff;
              tmp27 = intPow(constructor, constructor1, diff, 2 * diff);
              tmp26 = length;
              tmp28 = replaced1;
            }
            tmp36 = convertBase;
            tmp37 = c19;
            arr5 = convertBase(tmp28, num14, c19);
            num20 = 1;
            diff1 = arr5.length - 1;
            tmp39 = diff1;
            tmp40 = diff1;
            if (0 === arr5[diff1]) {
              do {
                arr1 = arr5.pop();
                diff2 = tmp39 - 1;
                tmp39 = diff2;
                tmp40 = diff2;
                tmp43 = arr5[diff2];
              } while (0 === tmp43);
            }
            if (tmp40 < 0) {
              s = self.s;
              self4 = this;
              self5 = this;
              constructor2 = new constructor(0);
            } else {
              first = arr5[0];
              num37 = 7;
              result1 = diff1 * 7;
              num38 = 10;
              tmp46 = result1;
              if (first >= 10) {
                do {
                  result1 = result1 + 1;
                  first = first / 10;
                  tmp46 = result1;
                } while (10 <= first);
              }
              self.e = tmp46;
              self.d = arr5;
              flag2 = false;
              c8 = false;
              tmp47 = self;
              if (tmp24) {
                tmp48 = f143737;
                num21 = 4;
                tmp47 = f143737(self, tmp27, 4 * tmp26);
              }
              constructor2 = tmp47;
              if (tmp22) {
                tmp50 = globalThis;
                _Math = Math;
                times = tmp47.times;
                num22 = 54;
                if (Math.abs(tmp22) < 54) {
                  tmp53 = pow;
                  num24 = 2;
                  powResult = pow(2, tmp22);
                } else {
                  tmp51 = closure_1;
                  num23 = 2;
                  powResult = closure_1.pow(2, tmp22);
                }
                constructor2 = times(powResult);
              }
              flag3 = true;
              c8 = true;
            }
            tmp12 = constructor2;
          }
          return tmp12;
        } else if (typeof arg0 === "bigint") {
          num = 0;
          if (arg0 < 0) {
            str = -arg0;
            num3 = -1;
            self.s = -1;
          } else {
            num2 = 1;
            self.s = 1;
            str = arg0;
          }
          tmp7 = parseDecimal;
          tmp8 = parseDecimal(self, str.toString());
          return self;
        } else {
          tmp71 = globalThis;
          _Error2 = Error;
          tmp72 = c9;
          throw Error(c9 + arg0);
        }
      } else {
        tmpResult = tmp(arg0);
        tmp3 = tmpResult;
        return tmpResult;
      }
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
  Decimal.EUCLID = 9;
  Decimal.set = config;
  Decimal.config = config;
  Decimal.clone = clone;
  Decimal.isDecimal = isDecimalInstance;
  Decimal.abs = abs;
  Decimal.acos = acos;
  Decimal.acosh = acosh;
  Decimal.add = add;
  Decimal.asin = asin;
  Decimal.asinh = asinh;
  Decimal.atan = atan;
  Decimal.atanh = atanh;
  Decimal.atan2 = atan2;
  Decimal.cbrt = cbrt;
  Decimal.ceil = ceil;
  Decimal.clamp = clamp;
  Decimal.cos = cos;
  Decimal.cosh = cosh;
  Decimal.div = div;
  Decimal.exp = exp;
  Decimal.floor = floor;
  Decimal.hypot = hypot;
  Decimal.ln = ln;
  Decimal.log = log;
  Decimal.log10 = log10;
  Decimal.log2 = log2;
  Decimal.max = max;
  Decimal.min = min;
  Decimal.mod = mod;
  Decimal.mul = mul;
  Decimal.pow = pow;
  Decimal.random = random;
  Decimal.round = round;
  Decimal.sign = sign;
  Decimal.sin = sin;
  Decimal.sinh = sinh;
  Decimal.sqrt = sqrt;
  Decimal.sub = sub;
  Decimal.sum = sum;
  Decimal.tan = tan;
  Decimal.tanh = tanh;
  Decimal.trunc = trunc;
  if (undefined === arg0) {
    obj = {};
  }
  if (obj) {
    flag = true;
    class Decimal {
      constructor(arg0) {
        self = this;
        tmp = Decimal;
        if (this instanceof Decimal) {
          self.constructor = tmp;
          tmp4 = closure_1;
          flag = arg0 instanceof closure_1;
          if (!flag) {
            tmp5 = arg0;
            if (tmp5) {
              tmp6 = c12;
              tmp5 = arg0.toStringTag === c12;
            }
            flag = tmp5;
          }
          if (!flag) {
            flag = false;
          }
          if (flag) {
            self.s = arg0.s;
            tmp66 = c8;
            if (tmp66) {
              if (arg0.d) {
                if (arg0.e <= tmp.maxE) {
                  if (arg0.e < tmp.minE) {
                    num35 = 0;
                    self.e = 0;
                    items = [0];
                    self.d = items;
                    substr = items;
                  } else {
                    ({ e: self.e, d: d2 } = arg0);
                    substr = d2.slice();
                    self.d = substr;
                  }
                }
                tmp70 = substr;
              }
              num36 = NaN;
              self.e = NaN;
              tmp69 = null;
              self.d = null;
              substr = null;
            } else {
              ({ e: self.e, d } = arg0);
              if (d) {
                substr1 = d.slice();
              } else {
                substr1 = d;
              }
              self.d = substr1;
            }
            return;
          } else if (typeof arg0 === "number") {
            num25 = 0;
            if (0 === arg0) {
              num34 = 1;
              if (1 / arg0 < 0) {
                num34 = -1;
              }
              self.s = num34;
              self.e = 0;
              self.d = [0];
              return;
            } else {
              if (arg0 < 0) {
                str9 = -arg0;
                num27 = -1;
                self.s = -1;
              } else {
                num26 = 1;
                self.s = 1;
                str9 = arg0;
              }
              if (str9 === ~(~str9)) {
                num28 = 10000000;
                if (str9 < 10000000) {
                  num29 = 10;
                  num30 = 1;
                  result = str9;
                  num31 = 0;
                  num32 = 0;
                  if (str9 >= 10) {
                    do {
                      num31 = num31 + 1;
                      result = result / 10;
                      num32 = num31;
                    } while (10 <= result);
                  }
                  tmp62 = c8;
                  if (tmp62) {
                    if (num32 > Decimal.maxE) {
                      num33 = NaN;
                      self.e = NaN;
                      tmp64 = null;
                      self.d = null;
                      items2 = null;
                    } else if (num32 < tmp63.minE) {
                      self.e = 0;
                      items1 = [0];
                      self.d = items1;
                      items2 = items1;
                    } else {
                      self.e = num32;
                      items2 = [];
                      items2[0] = str9;
                      self.d = items2;
                    }
                    tmp65 = items2;
                  } else {
                    self.e = num32;
                    items3 = [];
                    items3[0] = str9;
                    self.d = items3;
                  }
                  return;
                }
              }
              {
                tmp58 = parseDecimal;
                tmp59 = parseDecimal(self, str9.toString());
                tmp60 = self;
              }
              return tmp60;
            }
          } else if (typeof arg0 === "string") {
            num4 = 0;
            charCodeAtResult = arg0.charCodeAt(0);
            num5 = 45;
            if (45 === charCodeAtResult) {
              num9 = 1;
              substr2 = arg0.slice(1);
              num10 = -1;
              self.s = -1;
            } else {
              num6 = 43;
              substr2 = arg0;
              if (43 === charCodeAtResult) {
                num7 = 1;
                substr2 = arg0.slice(1);
              }
              num8 = 1;
              self.s = 1;
            }
            obj = re18;
            tmp10 = substr2;
            if (re18.test(substr2)) {
              tmp56 = parseDecimal;
              tmp57 = parseDecimal(self, substr2);
              tmp12 = self;
            } else {
              str2 = "_";
              num11 = -1;
              if (substr2.indexOf("_") > -1) {
                str6 = "$1";
                replaced = substr2.replace(/(\d)_(?=\d)/g, "$1");
                str5 = replaced;
                if (obj.test(replaced)) {
                  tmp54 = parseDecimal;
                  tmp55 = parseDecimal(self, replaced);
                  tmp12 = self;
                }
              } else {
                str3 = "Infinity";
                if ("Infinity" !== substr2) {
                  str4 = "NaN";
                  str5 = substr2;
                }
                if (!(+substr2)) {
                  num12 = NaN;
                  self.s = NaN;
                }
                num13 = NaN;
                self.e = NaN;
                tmp11 = null;
                self.d = null;
                tmp12 = self;
              }
              tmp14 = re16;
              tmp15 = str5;
              if (re16.test(str5)) {
                formatted = str5.toLowerCase();
                num14 = 16;
              } else {
                tmp16 = re15;
                num14 = 2;
                formatted = str5;
                if (!re15.test(str5)) {
                  tmp17 = re17;
                  num14 = 8;
                  formatted = str5;
                  if (!re17.test(str5)) {
                    tmp18 = globalThis;
                    _Error = Error;
                    tmp19 = c9;
                    throw Error(c9 + str5);
                  }
                }
              }
              searchResult = formatted.search(/p/i);
              tmp21 = formatted;
              if (searchResult > 0) {
                num16 = 1;
                tmp22 = +formatted.slice(searchResult + 1);
                num17 = 2;
                substr3 = formatted.substring(2, searchResult);
              } else {
                num15 = 2;
                substr3 = formatted.slice(2);
              }
              str7 = ".";
              index = substr3.indexOf(".");
              tmp24 = index >= 0;
              constructor = self.constructor;
              tmp25 = substr3;
              tmp28 = substr3;
              if (tmp24) {
                str8 = "";
                replaced1 = substr3.replace(".", "");
                length = replaced1.length;
                diff = length - index;
                tmp30 = intPow;
                self2 = this;
                self3 = this;
                tmp31 = num14;
                constructor1 = new constructor(num14);
                num18 = 2;
                tmp33 = constructor1;
                num19 = 0;
                tmp34 = constructor;
                tmp35 = diff;
                tmp27 = intPow(constructor, constructor1, diff, 2 * diff);
                tmp26 = length;
                tmp28 = replaced1;
              }
              tmp36 = convertBase;
              tmp37 = c19;
              arr5 = convertBase(tmp28, num14, c19);
              num20 = 1;
              diff1 = arr5.length - 1;
              tmp39 = diff1;
              tmp40 = diff1;
              if (0 === arr5[diff1]) {
                do {
                  arr1 = arr5.pop();
                  diff2 = tmp39 - 1;
                  tmp39 = diff2;
                  tmp40 = diff2;
                  tmp43 = arr5[diff2];
                } while (0 === tmp43);
              }
              if (tmp40 < 0) {
                s = self.s;
                self4 = this;
                self5 = this;
                constructor2 = new constructor(0);
              } else {
                first = arr5[0];
                num37 = 7;
                result1 = diff1 * 7;
                num38 = 10;
                tmp46 = result1;
                if (first >= 10) {
                  do {
                    result1 = result1 + 1;
                    first = first / 10;
                    tmp46 = result1;
                  } while (10 <= first);
                }
                self.e = tmp46;
                self.d = arr5;
                flag2 = false;
                c8 = false;
                tmp47 = self;
                if (tmp24) {
                  tmp48 = f143737;
                  num21 = 4;
                  tmp47 = f143737(self, tmp27, 4 * tmp26);
                }
                constructor2 = tmp47;
                if (tmp22) {
                  tmp50 = globalThis;
                  _Math = Math;
                  times = tmp47.times;
                  num22 = 54;
                  if (Math.abs(tmp22) < 54) {
                    tmp53 = pow;
                    num24 = 2;
                    powResult = pow(2, tmp22);
                  } else {
                    tmp51 = closure_1;
                    num23 = 2;
                    powResult = closure_1.pow(2, tmp22);
                  }
                  constructor2 = times(powResult);
                }
                flag3 = true;
                c8 = true;
              }
              tmp12 = constructor2;
            }
            return tmp12;
          } else if (typeof arg0 === "bigint") {
            num = 0;
            if (arg0 < 0) {
              str = -arg0;
              num3 = -1;
              self.s = -1;
            } else {
              num2 = 1;
              self.s = 1;
              str = arg0;
            }
            tmp7 = parseDecimal;
            tmp8 = parseDecimal(self, str.toString());
            return self;
          } else {
            tmp71 = globalThis;
            _Error2 = Error;
            tmp72 = c9;
            throw Error(c9 + arg0);
          }
        } else {
          tmpResult = tmp(arg0);
          tmp3 = tmpResult;
          return tmpResult;
        }
      }
    }
  }
  Decimal.config(obj);
  return Decimal;
}
const cloneResult = clone(obj);
const map = cloneResult;
cloneResult.prototype.constructor = cloneResult;
cloneResult.Decimal = cloneResult;
cloneResult.default = cloneResult;
cloneResult1 = new cloneResult("2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058");
cloneResult2 = new cloneResult("3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789");
if (typeof globalThis.define === "function") {
  const define2 = globalThis.define;
  if (globalThis.define.amd) {
    globalThis.define(() => map);
  }
}
if (undefined !== module) {
  if (module.exports) {
    const _Symbol = Symbol;
    let tmp4 = typeof Symbol === "function";
    if (typeof Symbol === "function") {
      const _Symbol4 = Symbol;
      tmp4 = typeof Symbol.iterator === "symbol";
    }
    if (tmp4) {
      const _Symbol2 = Symbol;
      let str = "nodejs.util.inspect.custom";
      obj2[Symbol.for("nodejs.util.inspect.custom")] = obj2.toString;
      const _Symbol3 = Symbol;
      let str2 = "Decimal";
      obj2[Symbol.toStringTag] = "Decimal";
    }
    module.exports = cloneResult;
  }
}
const Decimal = self.Decimal;
class tmp {
  static noConflict() {
    self.Decimal = Decimal;
    return map;
  }
}
self.Decimal = cloneResult;