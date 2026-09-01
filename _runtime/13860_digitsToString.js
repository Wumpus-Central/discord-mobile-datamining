// === Module 13860: digitsToString ===

// Module 13860 (digitsToString)
let self = this;
self = this;
function digitsToString(arg0) {
  let result1;
  let tmp16;
  const diff = arg0.length - 1;
  const first = arg0[0];
  if (0 < diff) {
    let text = `${tmp2}`;
    let num2 = 1;
    let tmp5 = text;
    let num3 = 1;
    if (1 < diff) {
      do {
        let text1 = `${arg0[num2]}`;
        let diff1 = 7 - `${arg0[num2]}`.length;
        let tmp8 = text;
        let tmp9 = num2;
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
        num3 = num2;
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
function checkRoundingDigits(d, precision, rounding, arg3) {
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
    let num3 = 0;
  } else {
    const _Math = Math;
    num3 = Math.ceil((diff1 + 1) / 7);
    sum = diff1 % 7;
  }
  const tmp8 = pow(10, 7 - sum);
  if (null == arg3) {
    if (sum < 3) {
      if (0 === sum) {
        let tmp21 = tmp9 / 100 | 0;
      } else {
        tmp21 = tmp9;
        if (1 === sum) {
          tmp21 = tmp9 / 10 | 0;
        }
      }
      let tmp22 = rounding < 4;
      if (tmp22) {
        tmp22 = 99999 === tmp21;
      }
      if (!tmp22) {
        let tmp23 = rounding > 3;
        if (tmp23) {
          tmp23 = 49999 === tmp21;
        }
        tmp22 = tmp23;
      }
      if (!tmp22) {
        tmp22 = 50000 === tmp21;
      }
      if (!tmp22) {
        tmp22 = 0 === tmp21;
      }
      let tmp10 = tmp22;
    } else {
      let tmp16 = rounding < 4;
      if (tmp16) {
        tmp16 = tmp9 + 1 == tmp8;
      }
      if (!tmp16) {
        let tmp17 = rounding > 3;
        if (tmp17) {
          tmp17 = tmp9 + 1 === tmp8 / 2;
        }
        tmp16 = tmp17;
      }
      if (tmp16) {
        tmp16 = (d[num3 + 1] / tmp8 / 100 | 0) === tmp7(10, sum - 2) - 1;
        const tmp18 = d[num3 + 1] / tmp8 / 100 | 0;
      }
      if (!tmp16) {
        const result = tmp8 / 2;
        let tmp20 = tmp9 === result;
        if (tmp9 !== result) {
          tmp20 = 0 === tmp9;
        }
        if (tmp20) {
          tmp20 = !(d[num3 + 1] / tmp8 / 100 | 0);
        }
        tmp16 = tmp20;
      }
      tmp10 = tmp16;
    }
  } else if (sum < 4) {
    if (0 === sum) {
      let tmp13 = tmp9 / 1000 | 0;
    } else if (1 === sum) {
      tmp13 = tmp9 / 100 | 0;
    } else {
      tmp13 = tmp9;
      if (2 === sum) {
        tmp13 = tmp9 / 10 | 0;
      }
    }
    let tmp14 = arg3;
    if (!arg3) {
      tmp14 = rounding < 4;
    }
    if (tmp14) {
      tmp14 = 9999 === tmp13;
    }
    if (!tmp14) {
      let tmp15 = !arg3;
      if (!arg3) {
        tmp15 = rounding > 3;
      }
      if (tmp15) {
        tmp15 = 4999 === tmp13;
      }
      tmp14 = tmp15;
    }
    tmp10 = tmp14;
  } else {
    tmp10 = arg3;
    if (!arg3) {
      tmp10 = rounding < 4;
    }
    if (tmp10) {
      tmp10 = tmp9 + 1 == tmp8;
    }
    if (!tmp10) {
      let tmp11 = !arg3;
      if (!arg3) {
        tmp11 = rounding > 3;
      }
      if (tmp11) {
        tmp11 = tmp9 + 1 === tmp8 / 2;
      }
      tmp10 = tmp11;
    }
    if (tmp10) {
      tmp10 = (d[num3 + 1] / tmp8 / 1000 | 0) === tmp7(10, sum - 3) - 1;
      const tmp12 = d[num3 + 1] / tmp8 / 1000 | 0;
    }
  }
  return tmp10;
}
function convertBase(str, arg1, arg2) {
  const items = [0];
  for (let num = 0; num < length; num = num + 1) {
    let tmp2 = +items.length;
    let diff = tmp2 - 1;
    let tmp4 = num;
    if (tmp2) {
      do {
        items[diff] = items[diff] * arg1;
        tmp5 = +diff;
        diff = tmp5 - 1;
      } while (tmp5);
    }
    let indexOf = "0123456789abcdef".indexOf;
    items[0] = items[0] + "0123456789abcdef".indexOf(str.charAt(num));
    for (let num2 = 0; num2 < items.length; num2 = num2 + 1) {
      let tmp6 = num2;
      if (items[num2] > tmp) {
        sum = num2 + 1;
        if (undefined === items[sum]) {
          items[sum] = 0;
        }
        items[sum] = items[sum] + (items[num2] / arg2 | 0);
        items[num2] = items[num2] % arg2;
      }
    }
  }
  return items.reverse();
}
function finalise(constructor, precision, rounding, arg3) {
  let tmp11;
  let tmp39;
  constructor = constructor.constructor;
  if (null != precision) {
    const d = constructor.d;
    if (d) {
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
      let tmp2 = arg3;
      const diff = precision - num4;
      if (diff < 0) {
        sum = diff + 7;
        const first1 = d[0];
        let num9 = first1 / pow(10, num4 - precision - 1) % 10 | 0;
        let num10 = 0;
        let num6 = first1;
        let sum3 = precision;
        let num8 = num4;
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
            let tmp25 = 0 == rounding;
            if (!tmp25) {
              let num16 = 2;
              if (constructor.s < 0) {
                num16 = 3;
              }
              tmp25 = rounding == num16;
            }
            num9 = tmp25;
          }
          let tmp24 = num9;
        } else {
          tmp24 = num9 > 5;
          if (5 >= num9) {
            let tmp18 = 5 === num9;
            if (5 === num9) {
              let tmp19 = 4 == rounding || tmp2;
              if (!tmp19) {
                if (6 != rounding) {
                  tmp19 = tmp20;
                } else if (0 < sum) {
                  let num14 = 0;
                  if (sum3 > 0) {
                    num14 = num6 / pow(10, num8 - sum3);
                  }
                  let tmp21 = num14;
                } else {
                  tmp21 = d[num10 - 1];
                }
              }
              if (!tmp19) {
                let num15 = 7;
                if (constructor.s < 0) {
                  num15 = 8;
                }
                tmp19 = rounding == num15;
              }
              tmp18 = tmp19;
            }
            tmp24 = tmp18;
          }
        }
        if (precision >= 1) {
          if (d[0]) {
            if (0 === sum) {
              d.length = num10;
              let diff1 = num10 - 1;
              let num18 = 1;
            } else {
              d.length = num10 + 1;
              num18 = pow(10, 7 - sum);
              let num19 = 0;
              if (sum3 > 0) {
                const result1 = num6 / tmp26(10, num8 - sum3);
                num19 = (result1 % tmp26(10, sum3) | 0) * num18;
              }
              d[num10] = num19;
              diff1 = num10;
            }
            if (tmp24) {
              while (0 != diff1) {
                d[diff1] = d[diff1] + num18;
                let tmp31 = c19;
                if (d[diff1] == c19) {
                  let tmp32 = +diff1;
                  diff1 = tmp32 - 1;
                  d[tmp32] = 0;
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
                constructor.e = constructor.e + 1;
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
                tmp39 = d[diff3];
              } while (0 === tmp39);
            }
          }
        }
        d.length = 0;
        if (tmp24) {
          const diff4 = precision - (constructor.e + 1);
          d[0] = pow(10, (7 - diff4 % 7) % 7);
          constructor.e = -diff4 || 0;
        } else {
          constructor.e = 0;
          d[0] = 0;
        }
        return constructor;
      } else {
        const _Math = Math;
        const rounded = Math.ceil((diff + 1) / 7);
        if (rounded >= d.length) {
          if (tmp2) {
            let sum2 = tmp8 + 1;
            if (+length <= rounded) {
              do {
                arr = d.push(0);
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
      return constructor;
    }
  }
  if (c8) {
    if (constructor.e > constructor.maxE) {
      constructor.d = null;
      constructor.e = NaN;
    } else if (constructor.e < constructor.minE) {
      constructor.e = 0;
      constructor.d = [0];
    }
  }
  return constructor;
}
function finiteToString(constructor, arg1, arg2) {
  let tmp14;
  let tmp17;
  let tmp24;
  let tmp28;
  let tmp36;
  let tmp44;
  if (constructor.isFinite()) {
    const e = constructor.e;
    const arr = digitsToString(constructor.d);
    if (arg1) {
      if (arg2) {
        const diff = arg2 - length;
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
        if (constructor.e < 0) {
          str25 = "e";
        }
        let sum1 = sum + str25 + constructor.e;
      }
      sum = arr;
      if (length > 1) {
        const text2 = `${arr.charAt(0)}.`;
        sum = `${arr.charAt(0)}.${arr.slice(1)}`;
      }
    } else if (e < 0) {
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
      let tmp32 = arg2;
      if (arg2) {
        const diff4 = arg2 - length;
        tmp32 = diff4 > 0;
        const tmp31 = diff4;
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
    } else if (e >= length) {
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
      let tmp18 = arg2;
      if (arg2) {
        const diff8 = arg2 - e - 1;
        tmp18 = diff8 > 0;
        const tmp19 = diff8;
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
      if (sum3 < length) {
        const text3 = `${arr.slice(0, tmp45)}.`;
        text4 = `${arr.slice(0, tmp45)}.${arr.slice(tmp45)}`;
      }
      let tmp7 = arg2;
      let tmp8 = sum3;
      if (arg2) {
        const diff10 = arg2 - length;
        tmp7 = diff10 > 0;
        tmp8 = diff10;
      }
      sum1 = text4;
      if (tmp7) {
        let text5 = text4;
        if (e + 1 === length) {
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
    return String(constructor.s * constructor.s / 0);
  }
}
function intPow(constructor, constructor, arg2, precision) {
  let tmp8;
  obj = constructor;
  let tmp = arg2;
  let obj2 = new constructor(1);
  const rounded = Math.ceil(precision / 7 + 4);
  c8 = false;
  while (true) {
    let result = tmp % 2;
    let tmp5 = obj2;
    let flag = tmp3;
    let tmp6 = tmp;
    let tmp7 = obj;
    tmp8 = obj2;
    if (result) {
      let timesResult = obj2.times(obj);
      let d = timesResult.d;
      let flag2;
      if (d.length > rounded) {
        d.length = rounded;
        flag2 = true;
      }
      result = flag2;
      tmp8 = timesResult;
    }
    if (result) {
      flag = true;
    }
    let tmp10 = floor;
    let tmp11 = floor(tmp / 2);
    if (0 === tmp11) {
      break;
    } else {
      let timesResult1 = obj.times(obj);
      let d1 = timesResult1.d;
      obj2 = tmp8;
      tmp3 = flag;
      tmp = tmp11;
      obj = timesResult1;
      if (d1.length <= rounded) {
        continue;
      } else {
        d1.length = rounded;
        obj2 = tmp8;
        tmp3 = flag;
        tmp = tmp11;
        obj = timesResult1;
        continue;
      }
      continue;
    }
  }
  const diff = tmp8.d.length - 1;
  if (flag) {
    flag = 0 === tmp8.d[diff];
  }
  if (flag) {
    d = tmp8.d;
    d[diff] = d[diff] + 1;
  }
  c8 = true;
  return tmp8;
}
function naturalExponential(constructor, precision) {
  let e;
  let tmp39;
  constructor = constructor.constructor;
  ({ rounding, precision } = constructor);
  if (constructor.d) {
    if (constructor.d[0]) {
      if (constructor.e <= 17) {
        let tmp = precision;
        if (null == precision) {
          c8 = false;
          tmp = precision;
        }
        constructor = new constructor(0.03125);
        let num6 = 0;
        obj = constructor;
        let num7 = 0;
        let tmp6 = constructor;
        if (constructor.e > -2) {
          do {
            let timesResult = obj.times(constructor);
            num6 = num6 + 5;
            obj = timesResult;
            num7 = num6;
            tmp6 = timesResult;
            e = timesResult.e;
          } while (e > -2);
        }
        const _Math = Math;
        const _Math2 = Math;
        const tmp10 = Math.log(pow(2, num7)) / Math.LN10 * 2 + 5 | 0;
        sum = tmp + tmp10;
        const constructor1 = new constructor(1);
        let obj2 = constructor1;
        constructor.precision = sum;
        let num13 = 0;
        let num14 = 0;
        let obj3 = constructor1;
        let obj4 = constructor1;
        while (true) {
          let tmp17 = finalise;
          let timesResult1 = obj3.times(tmp6);
          let tmp19 = finalise(timesResult1, sum, 1);
          let sum1 = num13 + 1;
          let timesResult2 = obj4.times(sum1);
          let tmp22 = digitsToString;
          let tmp23 = f113060;
          let tmp24 = timesResult1;
          let tmp25 = timesResult2;
          let tmp26 = sum;
          let num15 = 1;
          let plusResult = obj2.plus(f113060(timesResult1, timesResult2, sum, 1));
          let arr = digitsToString(plusResult.d);
          let substr = arr.slice(0, sum);
          let arr2 = digitsToString(obj2.d);
          let tmp30 = sum;
          let tmp31 = obj2;
          let num16 = sum1;
          let sum3 = num14;
          let tmp33 = sum;
          if (substr === arr2.slice(0, sum)) {
            let obj5 = obj2;
            let diff = tmp15;
            tmp39 = obj2;
            if (num7) {
              do {
                let tmp34 = finalise;
                let timesResult3 = obj5.times(obj5);
                let tmp36 = finalise(timesResult3, sum, 1);
                obj5 = timesResult3;
                tmp37 = diff;
                diff = diff - 1;
                tmp39 = timesResult3;
                tmp17 = finalise;
              } while (tmp37);
            }
            if (null != precision) {
              break;
            } else {
              if (num14 < 3) {
                let tmp40 = checkRoundingDigits;
                let num17 = 0;
                let tmp41 = rounding;
                let tmp42 = num14;
                if (checkRoundingDigits(tmp39.d, sum - tmp10, rounding, tmp29)) {
                  let sum2 = sum + 10;
                  constructor.precision = sum2;
                  let tmp47 = new.target;
                  let tmp48 = new.target;
                  let num18 = 1;
                  let constructor2 = new constructor(1);
                  plusResult = constructor2;
                  sum3 = num14 + 1;
                  num16 = 0;
                  tmp33 = sum2;
                  timesResult1 = constructor2;
                  timesResult2 = constructor2;
                }
              }
              constructor.precision = precision;
              let flag2 = true;
              c8 = true;
              let tmp43 = tmp39;
              let tmp44 = precision;
              let tmp45 = rounding;
              let flag3 = true;
              return tmp17(tmp39, precision, rounding, true);
            }
          }
          num13 = num16;
          num14 = sum3;
          sum = tmp33;
          obj2 = plusResult;
          obj3 = timesResult1;
          obj4 = timesResult2;
          continue;
        }
        constructor.precision = precision;
        return tmp39;
      }
    }
  }
  if (constructor.d) {
    let num21 = 1;
    if (constructor.d[0]) {
      let num23 = Infinity;
      if (constructor.s < 0) {
        num23 = 0;
      }
      num21 = num23;
    }
    let num19 = num21;
  } else {
    num19 = NaN;
    if (constructor.s) {
      let num20 = 0;
      if (constructor.s >= 0) {
        num20 = constructor;
      }
      num19 = num20;
    }
  }
  const constructor3 = new constructor(num19);
  return constructor3;
}
function naturalLogarithm(self, sum) {
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
          if (charAtResult >= 7) {
            let tmp14 = self;
            let tmp15 = charAtResult;
            let arr = str;
            if (1 == charAtResult) {
              obj = self;
              let num5 = 1;
              tmp14 = self;
              tmp15 = charAtResult;
              arr = str;
            }
            let e2 = tmp14.e;
            if (tmp15 > 1) {
              constructor = new constructor("0." + arr);
              const sum1 = e2 + 1;
            } else {
              const text = `${tmp15}.`;
              constructor = new constructor(`${tmp15}.` + arr.slice(1));
            }
            const minusResult = constructor.minus(1);
            e2 = f113060(minusResult, constructor.plus(1), sum, 1);
            const timesResult = e2.times(e2);
            finalise(timesResult, sum, 1);
            arr = constructor;
            sum = e2;
          } else {
            num5 = 1;
            obj = self;
          }
          while (true) {
            let tmp16 = digitsToString;
            let timesResult1 = obj.times(self);
            let str2 = digitsToString(timesResult1.d);
            let charAtResult1 = str2.charAt(0);
            let num10 = 1;
            let sum2 = num5 + 1;
            if (charAtResult1 < 7) {
              obj = timesResult1;
              num5 = sum2;
            }
            tmp14 = timesResult1;
            let tmp20 = sum2;
            tmp15 = charAtResult1;
            arr = str2;
            if (1 != charAtResult1) {
              break;
            } else {
              let num11 = 3;
              obj = timesResult1;
              num5 = sum2;
              tmp14 = timesResult1;
              let tmp21 = sum2;
              tmp15 = charAtResult1;
              arr = str2;
              if (str2.charAt(1) <= 3) {
                break;
              }
            }
          }
        } else {
          const sum3 = sum + 2;
          if (sum3 > closure_20) {
            c8 = true;
            if (precision) {
              constructor.precision = precision;
            }
            const _Error = Error;
            throw Error(c10);
          } else {
            const constructor1 = new constructor(c5);
            finalise(constructor1, sum3, 1, true);
            const text1 = `${tmp7}.`;
            const constructor2 = new constructor(`${tmp7}.` + str.slice(1));
            const timesResult2 = constructor1.times("" + e);
            const tmp42 = finalise;
            const plusResult = naturalLogarithm(constructor2, sum - 10).plus(timesResult2);
            constructor.precision = precision;
            if (tmp3) {
              c8 = true;
              tmp42(plusResult, precision, rounding, true);
            }
            return plusResult;
          }
        }
      }
    }
  }
  if (!d) {
    let num18 = NaN;
    if (1 == self.s) {
      let num19 = 0;
      if (!d) {
        num19 = self;
      }
      num18 = num19;
    }
    let num16 = num18;
  } else {
    num16 = -Infinity;
  }
  const constructor3 = new constructor(num16);
  return constructor3;
}
function parseDecimal(d, arr) {
  let charCodeAtResult;
  let charCodeAtResult1;
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
        d.push(+substr1.slice(0, sum1));
      }
      const diff3 = diff1 - 7;
      let tmp18 = sum1;
      let tmp19 = sum1;
      if (sum1 < diff3) {
        do {
          let d1 = d.d;
          sum2 = tmp18 + 7;
          arr = d1.push(+substr1.slice(tmp18, sum2));
          tmp18 = sum2;
          tmp19 = sum2;
        } while (sum2 < diff3);
      }
      const substr2 = substr1.slice(tmp19);
      let diff4 = 7 - substr2.length;
      let tmp15 = substr2;
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
function taylorSeries(constructor, arg1, timesResult, constructor2, arg4) {
  let plusResult1;
  let tmp = arg1;
  const precision = constructor.precision;
  const rounded = Math.ceil(precision / 7);
  c8 = false;
  timesResult = timesResult.times(timesResult);
  obj = new constructor(constructor2);
  let obj2 = constructor2;
  while (true) {
    let tmp4 = f113060;
    let timesResult1 = obj.times(timesResult);
    sum = tmp + 1;
    let tmp7 = new.target;
    let tmp8 = new.target;
    let tmp9 = new constructor(tmp * sum);
    let tmp10 = tmp9;
    let tmp11 = timesResult1;
    let tmp12 = precision;
    let num = 1;
    let obj3 = f113060(timesResult1, tmp9, precision, 1);
    let tmp13 = obj2;
    if (arg4) {
      let plusResult = obj2.plus(obj3);
    } else {
      plusResult = obj2.minus(obj3);
    }
    let sum1 = sum + 1;
    let timesResult2 = obj3.times(timesResult);
    let sum2 = sum1 + 1;
    let sum3 = sum2 + 1;
    let tmp18 = new.target;
    let tmp19 = new.target;
    let tmp20 = new constructor(sum1 * sum2);
    let tmp21 = tmp20;
    let tmp22 = timesResult2;
    let tmp23 = precision;
    let num2 = 1;
    let tmp4Result = tmp4(timesResult2, tmp20, precision, 1);
    plusResult1 = plusResult.plus(tmp4Result);
    let tmp26 = plusResult;
    obj = tmp4Result;
    obj2 = plusResult1;
    tmp = sum3;
    if (undefined === plusResult1.d[rounded]) {
      continue;
    } else {
      let tmp29 = rounded;
      if (plusResult1.d[rounded] === plusResult.d[rounded]) {
        let tmp27 = +rounded;
        let diff = tmp27 - 1;
        tmp29 = diff;
        if (tmp27) {
          let tmp30 = diff;
          tmp29 = diff;
          while (plusResult1.d[diff] === plusResult.d[diff]) {
            let tmp31 = +diff;
            diff = tmp31 - 1;
            tmp29 = diff;
            if (!tmp31) {
              break;
            }
          }
        }
      }
      obj = tmp4Result;
      obj2 = plusResult1;
      tmp = sum3;
      if (-1 == tmp29) {
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
    const obj5 = new constructor(cloneResult1);
    let num6 = 1;
    finalise(obj5, precision, 1, true);
    const timesResult = obj5.times(0.5);
    const absResult = self.abs();
    if (absResult.lte(timesResult)) {
      if (tmp) {
        num6 = 4;
      }
      let num = num6;
      return absResult;
    } else {
      const divToIntResult = absResult.divToInt(obj5);
      if (divToIntResult.isZero()) {
        let num5 = 2;
        if (tmp) {
          num5 = 3;
        }
        num = num5;
        let obj3 = absResult;
      } else {
        const minusResult = absResult.minus(divToIntResult.times(obj5));
        const tmp2 = num6 & divToIntResult.d[divToIntResult.d.length - num6];
        if (minusResult.lte(timesResult)) {
          if (tmp2) {
            let num4 = 3;
            if (tmp) {
              num4 = 2;
            }
            let num3 = num4;
          } else {
            num3 = num6;
            if (tmp) {
              num3 = 4;
            }
          }
          num = num3;
          return minusResult;
        } else {
          if (tmp2) {
            let num2 = 4;
            if (tmp) {
              num2 = num6;
            }
            num = num2;
          } else {
            num = 2;
            if (tmp) {
              num = 3;
            }
          }
          obj3 = minusResult;
        }
      }
      return obj3.minus(obj5).abs();
    }
  }
}
function toStringBinary(isFinite, arg1, arg2, arg3) {
  let result1;
  let sum2;
  let tmp22;
  let tmp59;
  let tmp64;
  let tmp78;
  let constructor = isFinite.constructor;
  if (undefined !== arg2) {
    if (arg2 === ~~arg2) {
      if (arg2 >= 1) {
        if (arg2 <= 1000000000) {
          if (undefined === arg3) {
            rounding = constructor.rounding;
            precision = arg2;
          } else {
            if (arg3 === ~~arg3) {
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
    let num4 = arg1;
    let diff = precision;
    if (tmp) {
      if (16 === arg1) {
        diff = 4 * precision - 3;
        num4 = 2;
      } else {
        num4 = 2;
        diff = precision;
        if (8 === arg1) {
          diff = 3 * precision - 2;
          num4 = 2;
        }
      }
    }
    let arr = finiteToString(isFinite);
    const index = arr.indexOf(".");
    let tmp12 = arr;
    if (index >= 0) {
      const replaced = arr.replace(".", "");
      constructor = new constructor(1);
      constructor.e = replaced.length - index;
      constructor.d = convertBase(tmp9(constructor), 10, num4);
      constructor.e = constructor.d.length;
      tmp12 = replaced;
    }
    const arr3 = convertBase(tmp12, 10, num4);
    let diff1 = length - 1;
    if (0 == arr3[diff1]) {
      do {
        arr = arr3.pop();
        let diff2 = diff1 - 1;
        diff1 = diff2;
        tmp22 = arr3[diff2];
      } while (0 == tmp22);
    }
    if (arr3[0]) {
      if (index < 0) {
        e = length - 1;
        d = arr3;
        let tmp35 = isFinite;
      } else {
        const constructor1 = new constructor(isFinite);
        constructor1.d = arr3;
        constructor1.e = length;
        tmp35 = f113060(constructor1, tmp11, diff, rounding, 0, num4);
        ({ d, e } = tmp35);
        let tmp36 = closure_2;
      }
      if (!tmp36) {
        tmp36 = undefined !== d[diff + 1];
      }
      if (rounding < 4) {
        let tmp43 = undefined !== tmp37 || tmp36;
        if (tmp43) {
          let tmp44 = 0 === rounding;
          if (!tmp44) {
            let num22 = 2;
            if (tmp35.s < 0) {
              num22 = 3;
            }
            tmp44 = rounding === num22;
          }
          tmp43 = tmp44;
        }
        let tmp39 = tmp43;
      } else {
        const result = num4 / 2;
        tmp39 = tmp37 > result;
        if (!tmp39) {
          let tmp40 = tmp37 === result;
          if (tmp40) {
            let tmp41 = 4 === rounding || tmp36;
            if (!tmp41) {
              let tmp42 = 6 === rounding;
              if (tmp42) {
                tmp42 = 1 & d[diff - 1];
              }
              tmp41 = tmp42;
            }
            if (!tmp41) {
              let num21 = 7;
              if (tmp35.s < 0) {
                num21 = 8;
              }
              tmp41 = rounding === num21;
            }
            tmp40 = tmp41;
          }
          tmp39 = tmp40;
        }
      }
      d.length = diff;
      let tmp45 = e;
      if (tmp39) {
        let diff3 = diff - 1;
        sum = d[diff3] + 1;
        d[diff3] = sum;
        const diff4 = num4 - 1;
        let tmp49 = e;
        tmp45 = e;
        if (sum > diff4) {
          do {
            d[diff3] = 0;
            let tmp50 = tmp49;
            let tmp51 = diff3;
            let sum1 = tmp49;
            if (!diff3) {
              sum1 = tmp49 + 1;
              arr = d.unshift(1);
            }
            let diff5 = diff3 - 1;
            sum2 = d[diff5] + 1;
            d[diff5] = sum2;
            tmp49 = sum1;
            diff3 = diff5;
            tmp45 = sum1;
          } while (sum2 > diff4);
        }
      }
      let tmp56 = length2;
      let tmp57 = length2;
      if (!d[d.length - 1]) {
        do {
          let diff6 = tmp56 - 1;
          tmp56 = diff6;
          tmp57 = diff6;
          tmp59 = d[diff6 - 1];
        } while (!tmp59);
      }
      let str4 = "";
      let num25 = 0;
      let str6 = "";
      if (0 < tmp57) {
        do {
          let charAt = "0123456789abcdef".charAt;
          str4 = `${"0123456789abcdef".charAt(d[num25])}`;
          num25 = num25 + 1;
          str6 = str4;
        } while (num25 < tmp57);
      }
      if (tmp) {
        let str10 = str6;
        if (tmp57 > 1) {
          if (16 !== arg1) {
            if (8 !== arg1) {
              const text = `${str6.charAt(0)}.`;
              str10 = `${str6.charAt(0)}.${str6.slice(1)}`;
            }
          }
          let num27 = 3;
          if (16 === arg1) {
            num27 = 4;
          }
          let diff7 = tmp57 - 1;
          let text1 = str6;
          let tmp71 = str6;
          if (diff7 % num27) {
            do {
              text1 = `${tmp70}0`;
              let sum3 = diff7 + 1;
              diff7 = sum3;
              tmp71 = text1;
              result1 = sum3 % num27;
            } while (result1);
          }
          const arr4 = convertBase(tmp71, num4, arg1);
          let tmp75 = length3;
          let tmp76 = length3;
          if (!arr4[arr4.length - 1]) {
            do {
              let diff8 = tmp75 - 1;
              tmp75 = diff8;
              tmp76 = diff8;
              tmp78 = arr4[diff8 - 1];
            } while (!tmp78);
          }
          let str12 = "1.";
          let num28 = 1;
          str10 = "1.";
          if (1 < tmp76) {
            do {
              let charAt2 = "0123456789abcdef".charAt;
              str12 = `1.${"0123456789abcdef".charAt(arr4[num28])}`;
              num28 = num28 + 1;
              str10 = str12;
            } while (num28 < tmp76);
          }
        }
        let str13 = "p+";
        if (tmp45 < 0) {
          str13 = "p";
        }
        let str3 = str10 + str13 + tmp45;
        let tmp23 = tmp35;
      } else if (tmp45 < 0) {
        let sum4 = tmp45 + 1;
        let text2 = str6;
        let tmp67 = str6;
        while (sum4) {
          text2 = `0${tmp66}`;
          sum4 = sum4 + 1;
          tmp67 = text2;
        }
        str3 = `0.${tmp67}`;
        tmp23 = tmp35;
      } else {
        const sum5 = tmp45 + 1;
        if (sum5 > tmp57) {
          let diff9 = tmp61 - 1;
          let text3 = str6;
          str3 = str6;
          tmp23 = tmp35;
          if (+sum5 - tmp57) {
            do {
              text3 = `${tmp63}0`;
              tmp64 = +diff9;
              diff9 = tmp64 - 1;
              str3 = text3;
              tmp23 = tmp35;
            } while (tmp64);
          }
        } else {
          str3 = str6;
          tmp23 = tmp35;
          if (sum5 < tmp57) {
            const text4 = `${str6.slice(0, tmp60)}.`;
            str3 = `${str6.slice(0, tmp60)}.${str6.slice(tmp60)}`;
            tmp23 = tmp35;
          }
        }
      }
    } else {
      str3 = "0";
      if (tmp) {
        str3 = "0p+0";
      }
      tmp23 = isFinite;
    }
    let str14 = "0x";
    if (16 !== arg1) {
      let str15 = "0b";
      if (2 !== arg1) {
        let str16 = "";
        if (8 === arg1) {
          str16 = "0o";
        }
        str15 = str16;
      }
      str14 = str15;
    }
    let sum6 = str14 + str3;
    let tmp6 = tmp23;
    tmp9 = finiteToString;
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
  return new this(arg0).abs();
}
function acos(arg0) {
  return new this(arg0).acos();
}
function acosh(arg0) {
  return new this(arg0).acosh();
}
function add(arg0, arg1) {
  return new this(arg0).plus(arg1);
}
function asin(arg0) {
  return new this(arg0).asin();
}
function asinh(arg0) {
  return new this(arg0).asinh();
}
function atan(arg0) {
  return new this(arg0).atan();
}
function atanh(arg0) {
  return new this(arg0).atanh();
}
function atan2(result2, result2) {
  self = this;
  const tmp = new this(result2);
  let s = tmp;
  obj = new this(result2);
  ({ precision, rounding } = this);
  sum = precision + 4;
  if (tmp.s) {
    if (obj.s) {
      if (!s.d) {
        if (!obj.d) {
          if (sum > closure_21) {
            const _Error = Error;
            throw Error(c10);
          } else {
            const _self = new self(cloneResult1);
            finalise(_self, sum, 1, true);
            let num3 = 0.75;
            if (obj.s > 0) {
              num3 = 0.25;
            }
            const timesResult = _self.times(num3);
            timesResult.s = s.s;
            let atanResult1 = timesResult;
          }
        }
      }
      if (obj.d) {
        if (!s.isZero()) {
          if (s.d) {
            if (!obj.isZero()) {
              if (obj.s < 0) {
                self.precision = sum;
                self.rounding = 1;
                const atanResult = self.atan(f113060(s, tmp3, sum, 1));
                if (sum > closure_21) {
                  const _Error2 = Error;
                  throw Error(c10);
                } else {
                  const _self1 = new self(cloneResult1);
                  finalise(_self1, sum, 1, true);
                  self.precision = precision;
                  self.rounding = rounding;
                  if (s.s < 0) {
                    let minusResult = atanResult.minus(_self1);
                  } else {
                    minusResult = atanResult.plus(_self1);
                  }
                  atanResult1 = minusResult;
                }
              } else {
                atanResult1 = self.atan(f113060(s, tmp3, sum, 1));
              }
            }
          }
          if (sum > closure_21) {
            const _Error3 = Error;
            throw Error(c10);
          } else {
            const _self2 = new self(cloneResult1);
            finalise(_self2, sum, 1, true);
            const timesResult1 = _self2.times(0.5);
            timesResult1.s = s.s;
            atanResult1 = timesResult1;
          }
        }
      }
      if (obj.s < 0) {
        if (precision > closure_21) {
          const _Error4 = Error;
          throw Error(c10);
        } else {
          const _self3 = new self(cloneResult1);
          finalise(_self3, precision, rounding, true);
          let _self4 = _self3;
        }
      } else {
        _self4 = new self(0);
      }
      s = s.s;
      _self4.s = s;
    }
    return atanResult1;
  }
  atanResult1 = new self(NaN);
}
function cbrt(arg0) {
  return new this(arg0).cbrt();
}
function ceil(result) {
  const tmp = new this(result);
  finalise(tmp, tmp.e + 1, 2);
  return tmp;
}
function clamp(arg0, arg1, arg2) {
  return new this(arg0).clamp(arg1, arg2);
}
function config(obj) {
  let tmp;
  let tmp4;
  if (obj) {
    if (typeof obj === "object") {
      self = this;
      const items = ["precision", 1, 1000000000, "rounding", 0, 8, "toExpNeg", -9000000000000000, 0, "toExpPos", 0, 9000000000000000, "maxE", 0, 9000000000000000, "minE", -9000000000000000, 0, "modulo", 0, 9];
      let num = 0;
      if (0 < items.length) {
        while (true) {
          tmp = items[num];
          let tmp2 = num;
          if (tmp13) {
            let tmp3 = obj;
            self[tmp] = obj[tmp];
          }
          tmp4 = obj[tmp];
          if (undefined !== tmp4) {
            let tmp5 = floor;
            if (floor(tmp4) !== tmp4) {
              break;
            } else if (tmp4 < items[num + 1]) {
              break;
            } else if (tmp4 > items[num + 2]) {
              break;
            } else {
              self[tmp] = tmp4;
            }
          }
          num = num + 3;
        }
        const _Error = Error;
        throw Error(c9 + tmp + ": " + tmp4);
      }
      if (true === obj.defaults) {
        self.crypto = obj.crypto;
      }
      const _crypto = obj.crypto;
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
            const _crypto5 = crypto;
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
function cos(result) {
  return new this(result).cos();
}
function cosh(arg0) {
  return new this(arg0).cosh();
}
function div(sqrtResult, sqrtResult) {
  return new this(sqrtResult).div(sqrtResult);
}
function exp(arg0) {
  return new this(arg0).exp();
}
function floor(arg0) {
  const tmp = new this(arg0);
  finalise(tmp, tmp.e + 1, 3);
  return tmp;
}
function hypot(arg0, arg1) {
  self = this;
  let num = 0;
  const tmp = new this(0);
  obj = tmp;
  c8 = false;
  let obj2 = tmp;
  if (0 < arguments.length) {
    while (true) {
      let tmp2 = new.target;
      let tmp3 = new.target;
      let _self = new self(arguments[num]);
      let tmp4 = _self;
      let tmp5 = obj;
      let tmp6 = num;
      if (_self.d) {
        let plusResult = obj;
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
    const _self1 = new self(Infinity);
    return _self1;
  }
  c8 = true;
  return obj2.sqrt();
}
function isDecimalInstance(toStringTag) {
  let flag = toStringTag instanceof closure_1;
  if (!flag) {
    let tmp = toStringTag;
    if (toStringTag) {
      tmp = toStringTag.toStringTag === c12;
    }
    flag = tmp;
  }
  if (!flag) {
    flag = false;
  }
  return flag;
}
function ln(arg0) {
  return new this(arg0).ln();
}
function log(arg0, arg1) {
  return new this(arg0).log(arg1);
}
function log2(arg0) {
  return new this(arg0).log(2);
}
function log10(absolute) {
  return new this(absolute).log(10);
}
function max() {
  const tmp = new this(arguments[0]);
  let tmp2 = tmp;
  let num = 1;
  let tmp3 = tmp;
  if (1 < arguments.length) {
    const tmp6 = new this(arguments[num]);
    obj = tmp2;
    tmp3 = tmp6;
    while (tmp6.s) {
      let cmpResult = obj.cmp(tmp6);
      let tmp10 = cmpResult === -1;
      if (!tmp10) {
        let tmp11 = 0 === cmpResult && obj.s === -1;
        tmp10 = tmp11;
      }
      if (tmp10) {
        obj = tmp6;
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
  let num = 1;
  let tmp3 = tmp;
  if (1 < arguments.length) {
    const tmp6 = new this(arguments[num]);
    obj = tmp2;
    tmp3 = tmp6;
    while (tmp6.s) {
      let cmpResult = obj.cmp(tmp6);
      let tmp10 = cmpResult === 1;
      if (!tmp10) {
        let tmp11 = 0 === cmpResult && obj.s === 1;
        tmp10 = tmp11;
      }
      if (tmp10) {
        obj = tmp6;
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
  return new this(arg0).mod(arg1);
}
function mul(arg0) {
  return new this(arg0).mul(arg1);
}
function pow(sum, exponent) {
  return new this(sum).pow(exponent);
}
function random(arg0) {
  let first;
  let sum2;
  let sum3;
  let tmp37;
  self = this;
  const tmp = new this(1);
  if (undefined === arg0) {
    let precision = self.precision;
  } else {
    if (arg0 === ~~arg0) {
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
      const uint32Array = new Uint32Array(rounded);
      const randomValues = _crypto2.getRandomValues(uint32Array);
      let num18 = 0;
      let num2 = 0;
      if (0 < rounded) {
        do {
          let tmp20 = randomValues[num18];
          let tmp21 = num18;
          if (tmp20 >= 4290000000) {
            let _crypto5 = crypto;
            let _Uint32Array2 = Uint32Array;
            let tmp23 = new.target;
            let tmp24 = new.target;
            let num19 = 1;
            let uint32Array1 = new Uint32Array(1);
            let tmp26 = uint32Array1;
            randomValues[num18] = crypto.getRandomValues(uint32Array1)[0];
            sum = num18;
          } else {
            sum = num18 + 1;
            items[num18] = tmp20 % 10000000;
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
          let tmp10 = num14;
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
  let tmp30 = tmp29;
  if (items[diff]) {
    tmp30 = result1;
  }
  if (tmp30) {
    const tmp32 = pow(10, 7 - result1);
    items[diff] = (tmp29 / tmp32 | 0) * tmp32;
  }
  let tmp33 = diff;
  let tmp34 = diff;
  if (0 === items[diff]) {
    do {
      arr = items.pop();
      let diff1 = tmp33 - 1;
      tmp33 = diff1;
      tmp34 = diff1;
      tmp37 = items[diff1];
    } while (0 === tmp37);
  }
  if (tmp34 < 0) {
    let items1 = [0];
    let num26 = 0;
  } else {
    let num21 = -1;
    let num22 = -1;
    if (0 === items[0]) {
      do {
        let arr1 = items.shift();
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
  const tmp = new this(arg0);
  if (tmp.d) {
    if (tmp.d[0]) {
      let num2 = tmp.s;
    } else {
      num2 = 0;
    }
  } else {
    return tmp.s || NaN;
  }
}
function sin(arg0) {
  return new this(arg0).sin();
}
function sinh(arg0) {
  return new this(arg0).sinh();
}
function sqrt(length) {
  return new this(length).sqrt();
}
function sub(arg0, arg1) {
  return new this(arg0).sub(arg1);
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
  return new this(arg0).tan();
}
function tanh(arg0) {
  return new this(arg0).tanh();
}
function trunc(arg0) {
  const tmp = new this(arg0);
  finalise(tmp, tmp.e + 1, 1);
  return tmp;
}
let c5 = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058";
let cloneResult1 = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789";
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
obj = { toStringTag: "[object Decimal]" };
const fn = function() {
  const constructor = new this.constructor(this);
  if (constructor.s < 0) {
    constructor.s = 1;
  }
  finalise(constructor);
  return constructor;
};
obj.abs = fn;
obj.absoluteValue = fn;
obj.ceil = function() {
  const constructor = new this.constructor(this);
  finalise(constructor, this.e + 1, 2);
  return constructor;
};
const fn2 = function(arg0, arg1) {
  self = this;
  let constructor = this.constructor;
  constructor = new constructor(arg0);
  obj = constructor;
  const constructor1 = new constructor(arg1);
  if (constructor.s) {
    if (constructor1.s) {
      if (obj.gt(constructor1)) {
        const _Error = Error;
        throw Error(c9 + constructor1);
      } else {
        if (self.cmp(obj) >= 0) {
          let constructor2 = constructor1;
          if (self.cmp(constructor1) <= 0) {
            constructor2 = new constructor(self);
          }
          obj = constructor2;
        }
        return obj;
      }
    }
  }
  const constructor3 = new constructor(NaN);
  return constructor3;
};
obj.clamp = fn2;
obj.clampedTo = fn2;
const fn3 = function(arg0) {
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
              if (length > length2 ^ s < 0) {
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
  let num = NaN;
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
obj.cmp = fn3;
obj.comparedTo = fn3;
const fn4 = function() {
  let tmp22;
  self = this;
  let constructor = this.constructor;
  if (this.d) {
    if (self.d[0]) {
      ({ precision, rounding } = constructor);
      const _Math = Math;
      constructor.precision = precision + Math.max(self.e, self.sd()) + 7;
      constructor.rounding = 1;
      obj = toLessThanHalfPi(constructor, self);
      self = obj.isZero();
      let obj2 = obj;
      if (!self) {
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
          str = 1 / num11.toString();
          num7 = rounded;
          const str2 = 1 / num11;
        }
        constructor.precision = constructor.precision + num7;
        constructor = new constructor(1);
        let plusResult = taylorSeries(constructor, 1, obj.times(str), constructor);
        let diff1 = tmp19 - 1;
        let tmp21 = plusResult;
        if (+num7) {
          do {
            let timesResult1 = plusResult.times(plusResult);
            let timesResult2 = timesResult1.times(timesResult1);
            let minusResult = timesResult2.minus(timesResult1);
            let timesResult3 = minusResult.times(8);
            plusResult = timesResult3.plus(1);
            tmp22 = +diff1;
            diff1 = tmp22 - 1;
            tmp21 = plusResult;
          } while (tmp22);
        }
        self = constructor.precision - num7;
        constructor.precision = self;
        obj2 = tmp21;
        const timesResult = obj.times(str);
      }
      constructor.precision = precision;
      constructor.rounding = rounding;
      if (2 == closure_4) {
        let negResult = obj2.neg();
      } else {
        negResult = obj2;
      }
      constructor = finalise(negResult, precision, rounding, true);
      let constructor1 = negResult;
      const tmp23 = finalise;
    } else {
      constructor1 = new constructor(1);
    }
  } else {
    const constructor2 = new constructor(NaN);
    return constructor2;
  }
};
obj.cos = fn4;
obj.cosine = fn4;
const fn5 = function() {
  self = this;
  let constructor = this.constructor;
  if (this.isFinite()) {
    if (!self.isZero()) {
      c8 = false;
      let str = self.s * pow(self.s * self, 0.3333333333333333);
      if (!str) {
        const arr = digitsToString(self.d);
        const e = self.e;
        const result = (e - arr.length + 1) % 3;
        sum = arr;
        if (result) {
          if (1 === result) {
            let str2 = "0";
          } else {
            str2 = "00";
          }
          sum = arr + str2;
        }
        const tmpResult = tmp(sum, 0.3333333333333333);
        let num7 = 2;
        const result1 = e % 3;
        if (e < 0) {
          num7 = -1;
        }
        const diff = floor((e + 1) / 3) - (result1 === num7);
        if (tmpResult == Infinity) {
          let text = `5e${tmp9}`;
        } else {
          const toExponentialResult = tmpResult.toExponential();
          text = toExponentialResult.slice(0, toExponentialResult.indexOf("e") + 1) + diff;
        }
        constructor = new constructor(text);
        constructor.s = self.s;
        const sum1 = constructor.precision + 3;
        const tmp7 = floor((e + 1) / 3);
      } else {
        const _Math = Math;
      }
      str = str.toString();
      str = new.target;
      const constructor1 = new constructor(str);
      tmp = pow;
    }
  }
  const constructor2 = new constructor(self);
  return constructor2;
};
obj.cbrt = fn5;
obj.cubeRoot = fn5;
const fn6 = function() {
  let result2;
  const d = this.d;
  let num = NaN;
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
obj.dp = fn6;
obj.decimalPlaces = fn6;
const fn7 = function(arg0) {
  const constructor = new this.constructor(arg0);
  return f113060(this, constructor);
};
obj.div = fn7;
obj.dividedBy = fn7;
const fn8 = function(arg0) {
  let constructor = this.constructor;
  constructor = new constructor(arg0);
  const tmp2 = f113060(this, constructor, 0, 1, 1);
  finalise(tmp2, constructor.precision, constructor.rounding);
  return tmp2;
};
obj.divToInt = fn8;
obj.dividedToIntegerBy = fn8;
const fn9 = function(arg0) {
  return 0 === this.cmp(arg0);
};
obj.eq = fn9;
obj.equals = fn9;
obj.floor = function() {
  const constructor = new this.constructor(this);
  finalise(constructor, this.e + 1, 3);
  return constructor;
};
const fn10 = function(arg0) {
  return this.cmp(arg0) > 0;
};
obj.gt = fn10;
obj.greaterThan = fn10;
const fn11 = function(arg0) {
  const cmpResult = this.cmp(arg0);
  let tmp2 = 1 == cmpResult;
  if (!tmp2) {
    tmp2 = 0 === cmpResult;
  }
  return tmp2;
};
obj.gte = fn11;
obj.greaterThanOrEqualTo = fn11;
const fn12 = function() {
  let tmp24;
  self = this;
  let constructor = this.constructor;
  constructor = new constructor(1);
  if (this.isFinite()) {
    if (self.isZero()) {
      return constructor;
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
        str = 1 / num7.toString();
        num4 = rounded;
        const str2 = 1 / num7;
      }
      const constructor1 = new constructor(1);
      const tmp17 = taylorSeries(constructor, 1, self.times(str), constructor1, true);
      const constructor2 = new constructor(8);
      let diff1 = tmp21 - 1;
      let minusResult = tmp17;
      let tmp23 = tmp17;
      if (+num4) {
        do {
          let timesResult1 = minusResult.times(minusResult);
          minusResult = constructor.minus(timesResult1.times(constructor2.minus(timesResult1.times(constructor2))));
          tmp24 = +diff1;
          diff1 = tmp24 - 1;
          tmp23 = minusResult;
        } while (tmp24);
      }
      constructor.precision = precision;
      constructor.rounding = rounding;
      finalise(tmp23, precision, rounding, true);
      return tmp23;
    }
  } else {
    let num = NaN;
    if (self.s) {
      num = Infinity;
    }
    const constructor3 = new constructor(num);
    return constructor3;
  }
};
obj.cosh = fn12;
obj.hyperbolicCosine = fn12;
const fn13 = function() {
  let tmp21;
  self = this;
  let constructor = this.constructor;
  if (this.isFinite()) {
    if (!self.isZero()) {
      ({ precision, rounding } = constructor);
      const _Math = Math;
      constructor.precision = precision + Math.max(self.e, self.sd()) + 4;
      constructor.rounding = 1;
      if (self.d.length < 3) {
        let tmp20 = taylorSeries(constructor, 2, self, self, true);
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
        if (diff) {
          do {
            num6 = num6 * 5;
            diff1 = diff1 - 1;
            num7 = num6;
          } while (diff1);
        }
        const timesResult = self.times(1 / num7);
        const tmp2Result = taylorSeries(constructor, 2, timesResult, timesResult, true);
        constructor = new constructor(5);
        const constructor1 = new constructor(16);
        const constructor2 = new constructor(20);
        let timesResult3 = tmp2Result;
        tmp20 = tmp2Result;
        if (num4) {
          do {
            let timesResult1 = timesResult3.times(timesResult3);
            let timesResult2 = constructor1.times(timesResult1);
            timesResult3 = timesResult3.times(constructor.plus(timesResult1.times(timesResult2.plus(constructor2))));
            tmp21 = diff;
            diff = diff - 1;
            tmp20 = timesResult3;
          } while (tmp21);
        }
        const tmp2 = taylorSeries;
      }
      constructor.precision = precision;
      constructor.rounding = rounding;
      finalise(tmp20, precision, rounding, true);
      return tmp20;
    }
  }
  const constructor3 = new constructor(self);
  return constructor3;
};
obj.sinh = fn13;
obj.hyperbolicSine = fn13;
const fn14 = function() {
  self = this;
  let constructor = this.constructor;
  if (this.isFinite()) {
    if (self.isZero()) {
      constructor = new constructor(self);
      let tmp9 = constructor;
    } else {
      ({ precision, rounding } = constructor);
      constructor.precision = precision + 7;
      constructor.rounding = 1;
      constructor.precision = precision;
      constructor.rounding = rounding;
      tmp9 = f113060(self.sinh(), self.cosh(), precision, rounding);
      const sinhResult = self.sinh();
    }
  } else {
    constructor = new constructor(self.s);
    return constructor;
  }
};
obj.tanh = fn14;
obj.hyperbolicTangent = fn14;
const fn15 = function() {
  self = this;
  let constructor = this.constructor;
  const cmpResult = this.abs().cmp(1);
  ({ precision, rounding } = constructor);
  if (-1 !== cmpResult) {
    if (0 !== cmpResult) {
      constructor = new constructor(NaN);
    }
    if (self.isNeg()) {
      if (precision > closure_21) {
        const _Error2 = Error;
        throw Error(c10);
      } else {
        const constructor1 = new constructor(cloneResult1);
        finalise(constructor1, precision, rounding, true);
        let constructor2 = constructor1;
      }
    } else {
      constructor2 = new constructor(0);
    }
  } else {
    if (self.isZero()) {
      sum = precision + 4;
      if (sum > closure_21) {
        const _Error = Error;
        throw Error(c10);
      } else {
        const constructor3 = new constructor(cloneResult1);
        finalise(constructor3, sum, rounding, true);
        let timesResult = constructor3.times(0.5);
      }
    } else {
      constructor.precision = precision + 6;
      constructor.rounding = 1;
      const constructor4 = new constructor(1);
      const minusResult = constructor4.minus(self);
      const divResult = constructor4.minus(self).div(self.plus(1));
      const sqrtResult = constructor4.minus(self).div(self.plus(1)).sqrt();
      constructor.precision = precision;
      constructor.rounding = rounding;
      timesResult = constructor4.minus(self).div(self.plus(1)).sqrt().atan().times(2);
      const atanResult = constructor4.minus(self).div(self.plus(1)).sqrt().atan();
    }
    return timesResult;
  }
};
obj.acos = fn15;
obj.inverseCosine = fn15;
const fn16 = function() {
  self = this;
  let constructor = this.constructor;
  if (this.lte(1)) {
    let num2 = NaN;
    if (self.eq(1)) {
      num2 = 0;
    }
    constructor = new constructor(num2);
  } else if (self.isFinite()) {
    const precision = constructor.precision;
    const _Math = Math;
    const _Math2 = Math;
    const absolute = Math.abs(self.e);
    constructor.precision = precision + Math.max(absolute, self.sd()) + 4;
    constructor.rounding = 1;
    c8 = false;
    const timesResult = self.times(self);
    const minusResult = self.times(self).minus(1);
    const sqrtResult = self.times(self).minus(1).sqrt();
    c8 = true;
    constructor.precision = precision;
    constructor.rounding = constructor.rounding;
    constructor = self.times(self).minus(1).sqrt().plus(self).ln();
    const plusResult = self.times(self).minus(1).sqrt().plus(self);
  } else {
    constructor = new constructor(self);
  }
  return constructor;
};
obj.acosh = fn16;
obj.inverseHyperbolicCosine = fn16;
const fn17 = function() {
  self = this;
  const constructor = this.constructor;
  if (this.isFinite()) {
    if (!self.isZero()) {
      const precision = constructor.precision;
      const _Math = Math;
      const _Math2 = Math;
      const absolute = Math.abs(self.e);
      constructor.precision = precision + 2 * Math.max(absolute, self.sd()) + 6;
      constructor.rounding = 1;
      c8 = false;
      const timesResult = self.times(self);
      const plusResult = self.times(self).plus(1);
      const sqrtResult = self.times(self).plus(1).sqrt();
      c8 = true;
      constructor.precision = precision;
      constructor.rounding = constructor.rounding;
      let lnResult = self.times(self).plus(1).sqrt().plus(self).ln();
      const plusResult1 = self.times(self).plus(1).sqrt().plus(self);
    }
    return lnResult;
  }
  lnResult = new constructor(self);
};
obj.asinh = fn17;
obj.inverseHyperbolicSine = fn17;
const fn18 = function() {
  self = this;
  let constructor = this.constructor;
  if (this.isFinite()) {
    if (self.e < 0) {
      ({ precision, rounding } = constructor);
      const sdResult = self.sd();
      const _Math = Math;
      if (Math.max(sdResult, precision) < 2 * -self.e - 1) {
        constructor = new constructor(self);
        finalise(constructor, precision, rounding, true);
        let timesResult = constructor;
      } else {
        const diff = sdResult - self.e;
        constructor.precision = diff;
        const plusResult = self.plus(1);
        const constructor1 = new constructor(1);
        constructor.precision = precision + 4;
        constructor.rounding = 1;
        const obj3 = f113060(plusResult, constructor1.minus(self), diff + precision, 1);
        constructor.precision = precision;
        constructor.rounding = rounding;
        timesResult = f113060(plusResult, constructor1.minus(self), diff + precision, 1).ln().times(0.5);
        const lnResult = f113060(plusResult, constructor1.minus(self), diff + precision, 1).ln();
      }
    }
    if (absResult.eq(1)) {
      let num4 = self.s / 0;
    } else {
      num4 = NaN;
      if (self.isZero()) {
        num4 = self;
      }
    }
    self = new.target;
    const constructor2 = new constructor(num4);
    absResult = self.abs();
  } else {
    const constructor3 = new constructor(NaN);
    return constructor3;
  }
};
obj.atanh = fn18;
obj.inverseHyperbolicTangent = fn18;
const fn19 = function() {
  self = this;
  let constructor = this.constructor;
  if (this.isZero()) {
    constructor = new constructor(self);
  } else {
    const cmpResult = self.abs().cmp(1);
    ({ precision, rounding } = constructor);
    if (-1 !== cmpResult) {
      if (0 === cmpResult) {
        sum = precision + 4;
        if (sum > closure_21) {
          const _Error = Error;
          throw Error(c10);
        } else {
          const constructor1 = new constructor(cloneResult1);
          finalise(constructor1, sum, rounding, true);
          precision = constructor1.times(0.5);
          precision.s = self.s;
          let constructor2 = precision;
        }
      } else {
        constructor2 = new constructor(NaN);
      }
    } else {
      constructor.precision = precision + 6;
      constructor.rounding = 1;
      const constructor3 = new constructor(1);
      const minusResult = constructor3.minus(self.times(self));
      const sqrtResult = constructor3.minus(self.times(self)).sqrt();
      const divResult = self.div(constructor3.minus(self.times(self)).sqrt().plus(1));
      constructor.precision = precision;
      constructor.rounding = rounding;
      constructor = self.div(constructor3.minus(self.times(self)).sqrt().plus(1)).atan().times(2);
      const atanResult = self.div(constructor3.minus(self.times(self)).sqrt().plus(1)).atan();
    }
    const absResult = self.abs();
  }
  return constructor;
};
obj.asin = fn19;
obj.inverseSine = fn19;
const fn20 = function() {
  let tmp30;
  self = this;
  let constructor = this.constructor;
  ({ precision, rounding } = constructor);
  if (this.isFinite()) {
    if (self.isZero()) {
      constructor = new constructor(self);
      return constructor;
    } else {
      if (absResult.eq(1)) {
        if (precision + 4 <= closure_21) {
          sum = precision + 4;
          if (sum > tmp18) {
            const _Error2 = Error;
            throw Error(c10);
          } else {
            const constructor1 = new constructor(cloneResult1);
            finalise(constructor1, sum, rounding, true);
            const timesResult = constructor1.times(0.25);
            timesResult.s = self.s;
            return timesResult;
          }
        }
      }
      absResult = self.abs();
    }
  } else if (self.s) {
    if (precision + 4 <= closure_21) {
      const sum1 = precision + 4;
      if (sum1 > tmp5) {
        const _Error = Error;
        throw Error(c10);
      } else {
        const constructor2 = new constructor(cloneResult1);
        finalise(constructor2, sum1, rounding, true);
        const timesResult1 = constructor2.times(0.5);
        timesResult1.s = self.s;
        return timesResult1;
      }
    }
  } else {
    const constructor3 = new constructor(NaN);
    return constructor3;
  }
  const sum2 = precision + 10;
  constructor.precision = sum2;
  constructor.rounding = 1;
  const result = sum2 / 7;
  const bound = Math.min(28, result + 2 | 0);
  let divResult = self;
  let diff = bound;
  let obj4 = self;
  let tmp23 = bound;
  if (bound) {
    do {
      let timesResult2 = divResult.times(divResult);
      let plusResult = timesResult2.plus(1);
      let sqrtResult = plusResult.sqrt();
      divResult = divResult.div(sqrtResult.plus(1));
      diff = diff - 1;
      obj4 = divResult;
      tmp23 = diff;
    } while (diff);
  }
  c8 = false;
  const rounded = Math.ceil(result);
  const timesResult3 = obj4.times(obj4);
  const constructor4 = new constructor(obj4);
  let obj8 = obj4;
  let obj9 = constructor4;
  let num6 = 1;
  let obj10 = constructor4;
  if (-1 !== tmp23) {
    do {
      let timesResult4 = obj8.times(timesResult3);
      let sum3 = num6 + 2;
      let minusResult = obj9.minus(timesResult4.div(sum3));
      let timesResult5 = timesResult4.times(timesResult3);
      let sum4 = sum3 + 2;
      let plusResult1 = minusResult.plus(timesResult5.div(sum4));
      tmp30 = tmp23;
      if (undefined !== plusResult1.d[rounded]) {
        tmp30 = rounded;
        if (plusResult1.d[rounded] === minusResult.d[rounded]) {
          let tmp31 = +rounded;
          let diff1 = tmp31 - 1;
          tmp30 = diff1;
          if (tmp31) {
            let tmp33 = diff1;
            tmp30 = diff1;
            while (plusResult1.d[diff1] === minusResult.d[diff1]) {
              let tmp34 = +diff1;
              diff1 = tmp34 - 1;
              tmp30 = diff1;
              if (!tmp34) {
                break;
              }
            }
          }
        }
      }
      tmp23 = tmp30;
      obj9 = plusResult1;
      obj8 = timesResult5;
      num6 = sum4;
      obj10 = plusResult1;
    } while (-1 !== tmp30);
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
obj.atan = fn20;
obj.inverseTangent = fn20;
obj.isFinite = function() {
  return this.d;
};
const fn21 = function() {
  self = this;
  let d = this.d;
  if (d) {
    d = floor(self.e / 7) > self.d.length - 2;
  }
  return d;
};
obj.isInt = fn21;
obj.isInteger = fn21;
obj.isNaN = function() {
  return !this.s;
};
const fn22 = function() {
  return this.s < 0;
};
obj.isNeg = fn22;
obj.isNegative = fn22;
const fn23 = function() {
  return this.s > 0;
};
obj.isPos = fn23;
obj.isPositive = fn23;
obj.isZero = function() {
  let d = this.d;
  if (d) {
    d = 0 === this.d[0];
  }
  return d;
};
const fn24 = function(arg0) {
  return this.cmp(arg0) < 0;
};
obj.lt = fn24;
obj.lessThan = fn24;
const fn25 = function(arg0) {
  return this.cmp(arg0) < 1;
};
obj.lte = fn25;
obj.lessThanOrEqualTo = fn25;
const fn26 = function(arg0) {
  let result1;
  self = this;
  let constructor = this.constructor;
  ({ precision, rounding } = constructor);
  if (null == arg0) {
    constructor = new constructor(10);
    let flag = true;
  } else {
    const constructor1 = new constructor(arg0);
    let d = constructor1.d;
    if (constructor1.s >= 0) {
      if (d) {
        if (d[0]) {
          if (!constructor1.eq(1)) {
            flag = constructor1.eq(10);
            constructor = constructor1;
          }
        }
      }
    }
    const constructor2 = new constructor(NaN);
    return constructor2;
  }
  d = self.d;
  if (self.s >= 0) {
    if (d) {
      if (d[0]) {
        if (!self.eq(1)) {
          if (flag) {
            let flag2 = true;
            if (d.length <= 1) {
              const first = d[0];
              let tmp13 = first;
              let tmp14 = first;
              if (first % 10 === 0) {
                do {
                  let result = tmp13 / 10;
                  tmp13 = result;
                  tmp14 = result;
                  result1 = result % 10;
                } while (result1 === 0);
              }
              flag2 = 1 !== tmp14;
            }
          }
          c8 = false;
          sum = precision + 5;
          const tmp19 = naturalLogarithm(self, sum);
          if (flag) {
            const sum1 = sum + 10;
            if (sum1 > closure_20) {
              c8 = true;
              const _Error2 = Error;
              throw Error(c10);
            } else {
              const constructor3 = new constructor(c5);
              finalise(constructor3, sum1, 1, true);
              let tmp17Result = constructor3;
            }
          } else {
            tmp17Result = naturalLogarithm(constructor, sum);
          }
          let tmp28 = f113060(tmp19, tmp17Result, sum, 1);
          let tmp29 = sum;
          let tmp30 = precision;
          if (checkRoundingDigits(tmp28.d, precision, rounding)) {
            while (true) {
              let sum2 = tmp29 + 10;
              let tmp31 = naturalLogarithm;
              let tmp33 = naturalLogarithm(self, sum2);
              let tmp34 = tmp30;
              if (flag) {
                let sum3 = sum2 + 10;
                let tmp37 = closure_20;
                if (sum3 > closure_20) {
                  break;
                } else {
                  let tmp64 = finalise;
                  let tmp65 = c5;
                  let tmp66 = new.target;
                  let tmp67 = new.target;
                  let constructor4 = new constructor(c5);
                  let tmp69 = constructor4;
                  let tmp70 = constructor4;
                  let tmp71 = sum3;
                  let num20 = 1;
                  let flag7 = true;
                  let tmp72 = finalise(constructor4, sum3, 1, true);
                  let tmp31Result = constructor4;
                }
              } else {
                tmp31Result = tmp31(constructor, sum2);
              }
              let tmp38 = f113060;
              let tmp39 = tmp33;
              let tmp40 = tmp31Result;
              let tmp41 = sum2;
              let num12 = 1;
              let tmp42 = f113060(tmp33, tmp31Result, sum2, 1);
              if (flag2) {
                let tmp46 = checkRoundingDigits;
                let sum4 = tmp30 + 10;
                tmp29 = sum2;
                tmp30 = sum4;
                tmp28 = tmp42;
              } else {
                let tmp43 = digitsToString;
                let arr2 = digitsToString(tmp42.d);
                let num13 = 15;
                let num14 = 100000000000000;
                tmp28 = tmp42;
                if (+arr2.slice(tmp30 + 1, tmp30 + 15) + 1 === 100000000000000) {
                  let tmp44 = finalise;
                  let tmp45 = finalise(tmp42, precision + 1, 0);
                  tmp28 = tmp42;
                }
              }
            }
            c8 = true;
            const _Error = Error;
            throw Error(c10);
          }
          c8 = true;
          finalise(tmp28, precision, rounding);
          return tmp28;
        }
      }
    }
  }
  if (!d) {
    let num17 = NaN;
    if (1 == self.s) {
      let num18 = Infinity;
      if (d) {
        num18 = 0;
      }
      num17 = num18;
    }
    let num15 = num17;
  } else {
    num15 = -Infinity;
  }
  const constructor5 = new constructor(num15);
  return constructor5;
};
obj.log = fn26;
obj.logarithm = fn26;
const fn27 = function(arg0) {
  let diff3;
  let first;
  let tmp34;
  let tmp50;
  self = this;
  let constructor = this.constructor;
  constructor = new constructor(arg0);
  if (this.d) {
    if (constructor.d) {
      if (self.s != constructor.s) {
        constructor.s = -constructor.s;
        return self.plus(constructor);
      } else {
        const d = self.d;
        const d1 = constructor.d;
        ({ precision, rounding } = constructor);
        if (d[0]) {
          if (d1[0]) {
            const tmp19 = floor(constructor.e / 7);
            let tmp20 = floor(self.e / 7);
            const substr = d.slice();
            const diff = tmp20 - tmp19;
            if (diff) {
              if (diff < 0) {
                let tmp27 = -diff;
                let length3 = d1.length;
                tmp20 = tmp19;
                let arr1 = substr;
              } else {
                length3 = substr.length;
                tmp27 = diff;
                arr1 = d1;
              }
              const _Math = Math;
              const _Math2 = Math;
              sum = Math.max(Math.ceil(precision / 7), length3) + 2;
              if (tmp27 > sum) {
                arr1.length = 1;
                tmp27 = sum;
              }
              const reversed = arr1.reverse();
              let diff1 = tmp31 - 1;
              if (+tmp27) {
                do {
                  let arr = arr1.push(0);
                  tmp34 = +diff1;
                  diff1 = tmp34 - 1;
                } while (tmp34);
              }
              const reversed1 = arr1.reverse();
              let tmp23 = tmp26;
              let num8 = tmp27;
              let tmp25 = tmp20;
            } else {
              let length2 = d1.length;
              if (substr.length < length2) {
                length2 = length;
              }
              let num7 = 0;
              tmp23 = tmp22;
              if (0 < length2) {
                while (substr[num7] == d1[num7]) {
                  num7 = num7 + 1;
                  tmp23 = tmp22;
                }
                tmp23 = substr[num7] < d1[num7];
              }
              num8 = 0;
              tmp25 = tmp19;
            }
            let arr3 = d1;
            let arr4 = substr;
            if (tmp23) {
              constructor.s = -constructor.s;
              arr3 = substr;
              arr4 = d1;
            }
            let diff2 = arr3.length - length4;
            let sum1 = length4;
            let tmp38 = length4;
            if (diff2 > 0) {
              do {
                let tmp39 = +sum1;
                sum1 = tmp39 + 1;
                arr4[tmp39] = 0;
                diff2 = diff2 - 1;
                tmp38 = sum1;
              } while (diff2 > 0);
            }
            let length5 = arr3.length;
            if (length5 > num8) {
              do {
                diff3 = length5 - 1;
                if (arr4[diff3] < arr3[diff3]) {
                  let tmp41 = diff3;
                  if (diff3) {
                    let diff4 = diff3 - 1;
                    let tmp43 = diff4;
                    tmp41 = diff4;
                    if (0 === arr4[diff4]) {
                      arr4[tmp43] = 9999999;
                      let tmp44 = tmp43;
                      tmp41 = tmp43;
                      while (tmp43) {
                        let diff5 = tmp43 - 1;
                        tmp43 = diff5;
                        tmp41 = diff5;
                        if (0 !== arr4[diff5]) {
                          break;
                        }
                      }
                    }
                  }
                  arr4[tmp41] = arr4[tmp41] - 1;
                  let tmp46 = c19;
                  arr4[diff3] = arr4[diff3] + c19;
                }
                arr4[diff3] = arr4[diff3] - arr3[diff3];
                length5 = diff3;
              } while (diff3 > num8);
            }
            let diff6 = tmp38 - 1;
            if (0 === arr4[diff6]) {
              do {
                arr = arr4.pop();
                let diff7 = diff6 - 1;
                diff6 = diff7;
                tmp50 = arr4[diff7];
              } while (0 === tmp50);
            }
            let diff8 = tmp25;
            let tmp52 = tmp25;
            if (0 === arr4[0]) {
              do {
                diff8 = diff8 - 1;
                arr1 = arr4.shift();
                tmp52 = diff8;
                first = arr4[0];
              } while (0 === first);
            }
            if (arr4[0]) {
              constructor.d = arr4;
              let first1 = arr4[0];
              let result = tmp52 * 7;
              let tmp61 = result;
              if (first1 >= 10) {
                do {
                  result = result + 1;
                  first1 = first1 / 10;
                  tmp61 = result;
                } while (10 <= first1);
              }
              constructor.e = tmp61;
              let constructor1 = constructor;
              if (c8) {
                finalise(constructor, precision, rounding);
                constructor1 = constructor;
              }
            } else {
              let num15 = 0;
              if (3 === rounding) {
                num15 = -0;
              }
              constructor1 = new constructor(num15);
            }
            return constructor1;
          }
        }
        if (d1[0]) {
          constructor.s = -constructor.s;
          let constructor2 = constructor;
        } else if (d[0]) {
          constructor2 = new constructor(self);
        } else {
          let num3 = 0;
          if (3 === rounding) {
            num3 = -0;
          }
          const constructor3 = new constructor(num3);
          return constructor3;
        }
        if (c8) {
          finalise(constructor2, precision, rounding);
        }
        return constructor2;
      }
    }
  }
  if (self.s) {
    if (constructor.s) {
      if (self.d) {
        constructor.s = -constructor.s;
        let constructor4 = constructor;
      } else {
        if (constructor.d) {
          let num = self;
        } else {
          num = NaN;
        }
        constructor4 = new constructor(num);
      }
    }
    return constructor4;
  }
  constructor4 = new constructor(NaN);
};
obj.sub = fn27;
obj.minus = fn27;
const fn28 = function(arg0) {
  self = this;
  let constructor = this.constructor;
  constructor = new constructor(arg0);
  if (this.d) {
    if (constructor.s) {
      if (!constructor.d) {
        const constructor1 = new constructor(self);
        finalise(constructor1, constructor.precision, constructor.rounding);
      }
      c8 = false;
      if (9 == constructor.modulo) {
        const tmp15 = f113060(self, constructor.abs(), 0, 3, 1);
        tmp15.s = tmp15.s * constructor.s;
        let obj2 = tmp15;
      } else {
        obj2 = f113060(self, tmp, 0, constructor.modulo, 1);
      }
      c8 = true;
      self.minus(obj2.times(constructor));
    }
  }
  const constructor2 = new constructor(NaN);
  return constructor2;
};
obj.mod = fn28;
obj.modulo = fn28;
const fn29 = function() {
  return naturalExponential(this);
};
obj.exp = fn29;
obj.naturalExponential = fn29;
const fn30 = function() {
  return naturalLogarithm(this);
};
obj.ln = fn30;
obj.naturalLogarithm = fn30;
const fn31 = function() {
  const constructor = new this.constructor(this);
  constructor.s = -constructor.s;
  finalise(constructor);
  return constructor;
};
obj.neg = fn31;
obj.negated = fn31;
const fn32 = function(arg0) {
  let diff2;
  let tmp26;
  let tmp37;
  self = this;
  let constructor = this.constructor;
  constructor = new constructor(arg0);
  if (this.d) {
    if (constructor.d) {
      if (self.s != constructor.s) {
        constructor.s = -constructor.s;
        return self.minus(constructor);
      } else {
        const d = self.d;
        const d1 = constructor.d;
        ({ precision, rounding } = constructor);
        if (d[0]) {
          if (d1[0]) {
            let tmp14 = floor(self.e / 7);
            const tmp15 = floor(constructor.e / 7);
            const substr = d.slice();
            const diff = tmp14 - tmp15;
            let tmp17 = tmp15;
            if (diff) {
              if (diff < 0) {
                let tmp18 = -diff;
                let length = d1.length;
                tmp14 = tmp15;
                let arr1 = substr;
              } else {
                length = substr.length;
                tmp18 = diff;
                arr1 = d1;
              }
              const _Math = Math;
              const rounded = Math.ceil(precision / 7);
              if (rounded > length) {
                sum = rounded + 1;
              } else {
                sum = length + 1;
              }
              if (tmp18 > sum) {
                arr1.length = 1;
                tmp18 = sum;
              }
              const reversed = arr1.reverse();
              let diff1 = tmp23 - 1;
              if (+tmp18) {
                do {
                  let arr = arr1.push(0);
                  tmp26 = +diff1;
                  diff1 = tmp26 - 1;
                } while (tmp26);
              }
              const reversed1 = arr1.reverse();
              tmp17 = tmp14;
            }
            let length3 = d1.length;
            let tmp28 = d1;
            let arr3 = substr;
            if (substr.length - length3 < 0) {
              tmp28 = substr;
              arr3 = d1;
              length3 = length2;
            }
            let num8 = 0;
            let num9 = 0;
            if (length3) {
              do {
                diff2 = length3 - 1;
                let sum1 = arr3[diff2] + tmp28[diff2] + num8;
                arr3[diff2] = sum1;
                let tmp31 = c19;
                num8 = sum1 / c19 | 0;
                arr3[diff2] = arr3[diff2] % c19;
                num9 = num8;
                length3 = diff2;
              } while (diff2);
            }
            let sum2 = tmp17;
            if (num9) {
              arr3.unshift(num9);
              sum2 = tmp17 + 1;
            }
            let diff3 = arr3.length - 1;
            if (0 == arr3[diff3]) {
              do {
                arr1 = arr3.pop();
                let diff4 = diff3 - 1;
                diff3 = diff4;
                tmp37 = arr3[diff4];
              } while (0 == tmp37);
            }
            constructor.d = arr3;
            let first = arr3[0];
            let result = sum2 * 7;
            let tmp40 = result;
            if (first >= 10) {
              do {
                result = result + 1;
                first = first / 10;
                tmp40 = result;
              } while (10 <= first);
            }
            constructor.e = tmp40;
            if (c8) {
              finalise(constructor, precision, rounding);
            }
            return constructor;
          }
        }
        let constructor1 = constructor;
        if (!d1[0]) {
          constructor1 = new constructor(self);
        }
        if (c8) {
          finalise(constructor1, precision, rounding);
        }
        return constructor1;
      }
    }
  }
  if (self.s) {
    if (constructor.s) {
      let constructor2 = constructor;
      if (!self.d) {
        if (constructor.d) {
          let num = self;
        } else {
          num = NaN;
        }
        constructor2 = new constructor(num);
      }
    }
    return constructor2;
  }
  constructor2 = new constructor(NaN);
};
obj.add = fn32;
obj.plus = fn32;
const fn33 = function(arg0) {
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
    let tmp11 = arg0;
    if (arg0) {
      tmp11 = self.e + 1 > tmp4;
    }
    num3 = tmp4;
    if (tmp11) {
      num3 = self.e + 1;
    }
  }
  return num3;
};
obj.sd = fn33;
obj.precision = fn33;
obj.round = function() {
  let constructor = this.constructor;
  constructor = new constructor(this);
  finalise(constructor, this.e + 1, constructor.rounding);
  return constructor;
};
const fn34 = function() {
  let tmp25;
  self = this;
  let constructor = this.constructor;
  if (this.isFinite()) {
    if (self.isZero()) {
      constructor = new constructor(self);
      let negResult = constructor;
    } else {
      ({ precision, rounding } = constructor);
      const _Math = Math;
      constructor.precision = precision + Math.max(self.e, self.sd()) + 7;
      constructor.rounding = 1;
      obj = toLessThanHalfPi(constructor, self);
      if (obj.d.length < 3) {
        let tmp26 = obj;
        if (!obj.isZero()) {
          tmp26 = taylorSeries(constructor, 2, obj, obj);
        }
        let obj5 = tmp26;
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
        if (diff) {
          do {
            num8 = num8 * 5;
            diff1 = diff1 - 1;
            num9 = num8;
          } while (diff1);
        }
        const timesResult = obj.times(1 / num9);
        const tmp14 = taylorSeries(constructor, 2, timesResult, timesResult);
        constructor = new constructor(5);
        const constructor1 = new constructor(16);
        const constructor2 = new constructor(20);
        let timesResult3 = tmp14;
        obj5 = tmp14;
        if (num6) {
          do {
            let timesResult1 = timesResult3.times(timesResult3);
            let timesResult2 = constructor1.times(timesResult1);
            timesResult3 = timesResult3.times(constructor.plus(timesResult1.times(timesResult2.minus(constructor2))));
            tmp25 = diff;
            diff = diff - 1;
            obj5 = timesResult3;
          } while (tmp25);
        }
      }
      constructor.precision = precision;
      constructor.rounding = rounding;
      negResult = obj5;
      if (closure_4 > 2) {
        negResult = obj5.neg();
      }
      finalise(negResult, precision, rounding, true);
      const tmp31 = finalise;
    }
  } else {
    const constructor3 = new constructor(NaN);
    return constructor3;
  }
};
obj.sin = fn34;
obj.sine = fn34;
const fn35 = function() {
  self = this;
  ({ d, e, s, constructor } = this);
  if (1 === s) {
    if (d) {
      if (d[0]) {
        c8 = false;
        const _Math = Math;
        const str = Math.sqrt(+self);
        if (0 != str) {
          if (str != Infinity) {
            constructor = new constructor(str.toString());
            sum = constructor.precision + 3;
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
        if (!result) {
          result = e % 2;
        }
        const diff = floor((e + 1) / 2) - result;
        if (sqrtResult == Infinity) {
          let text1 = `5e${tmp10}`;
        } else {
          const toExponentialResult = sqrtResult.toExponential();
          text1 = toExponentialResult.slice(0, toExponentialResult.indexOf("e") + 1) + diff;
        }
        const constructor1 = new constructor(text1);
        const tmp8 = floor((e + 1) / 2);
      }
    }
  }
  let num9 = NaN;
  if (s) {
    if (s >= 0) {
      let num11 = Infinity;
      if (d) {
        num11 = self;
      }
      num9 = num11;
    } else {
      num9 = NaN;
      if (d) {
        num9 = NaN;
      }
    }
  }
  const constructor2 = new constructor(num9);
  return constructor2;
};
obj.sqrt = fn35;
obj.squareRoot = fn35;
const fn36 = function() {
  self = this;
  let constructor = this.constructor;
  if (this.isFinite()) {
    if (self.isZero()) {
      constructor = new constructor(self);
      let negResult = constructor;
    } else {
      ({ precision, rounding } = constructor);
      constructor.precision = precision + 10;
      constructor.rounding = 1;
      const sinResult = self.sin();
      sinResult.s = 1;
      constructor = new constructor(1);
      const obj4 = f113060(sinResult, constructor.minus(sinResult.times(sinResult)).sqrt(), precision + 10, 0);
      constructor.precision = precision;
      constructor.rounding = rounding;
      if (2 == closure_4) {
        negResult = obj4.neg();
      } else {
        negResult = obj4;
      }
      finalise(negResult, precision, rounding, true);
      const minusResult = constructor.minus(sinResult.times(sinResult));
      const tmp10 = finalise;
    }
  } else {
    const constructor1 = new constructor(NaN);
    return constructor1;
  }
};
obj.tan = fn36;
obj.tangent = fn36;
const fn37 = function(arg0) {
  let tmp15;
  let tmp28;
  ({ constructor, d } = this);
  constructor = new constructor(arg0);
  d = constructor.d;
  constructor.s = constructor.s * this.s;
  if (d) {
    if (d[0]) {
      if (d) {
        if (d[0]) {
          sum = floor(this.e / 7) + floor(constructor.e / 7);
          let tmp7 = d;
          let tmp8 = d;
          let tmp9 = length2;
          let tmp10 = length;
          if (d.length < d.length) {
            tmp7 = d;
            tmp8 = d;
            tmp9 = length;
            tmp10 = length2;
          }
          const items = [];
          const sum1 = tmp10 + tmp9;
          let diff = tmp12 - 1;
          if (+sum1) {
            do {
              let arr = items.push(0);
              tmp15 = +diff;
              diff = tmp15 - 1;
            } while (tmp15);
          }
          let diff1 = tmp9 - 1;
          let tmp17;
          if (diff1 >= 0) {
            do {
              let sum2 = tmp10 + diff1;
              let tmp19 = diff1;
              let num8 = 0;
              let num9 = 0;
              let tmp20 = sum2;
              if (sum2 > diff1) {
                do {
                  let sum3 = items[sum2] + tmp7[diff1] * tmp8[sum2 - diff1 - 1] + num8;
                  let tmp22 = +sum2;
                  sum2 = tmp22 - 1;
                  let tmp23 = c19;
                  items[tmp22] = sum3 % c19 | 0;
                  num8 = sum3 / c19 | 0;
                  num9 = num8;
                  tmp20 = sum2;
                } while (sum2 > diff1);
              }
              let tmp24 = c19;
              items[tmp20] = (items[tmp20] + num9) % c19 | 0;
              diff1 = diff1 - 1;
              tmp17 = num9;
            } while (diff1 >= 0);
          }
          let diff2 = sum1 - 1;
          if (!items[diff2]) {
            do {
              arr = items.pop();
              let diff3 = diff2 - 1;
              diff2 = diff3;
              tmp28 = items[diff3];
            } while (!tmp28);
          }
          if (tmp17) {
            let sum4 = sum + 1;
          } else {
            items.shift();
            sum4 = sum;
          }
          constructor.d = items;
          let first = items[0];
          let result = sum4 * 7;
          let tmp33 = result;
          if (first >= 10) {
            do {
              result = result + 1;
              first = first / 10;
              tmp33 = result;
            } while (10 <= first);
          }
          constructor.e = tmp33;
          if (c8) {
            finalise(constructor, constructor.precision, constructor.rounding);
          }
          return constructor;
        }
      }
    }
  }
  let num = NaN;
  if (constructor.s) {
    if (d) {
      if (!d[0]) {
        num = NaN;
      }
    }
    if (d) {
      if (!d[0]) {
        num = NaN;
      }
    }
    if (!d) {
      let num3 = constructor.s / 0;
    }
    const s = constructor.s;
    num3 = 0;
  }
  const constructor1 = new constructor(num);
  return constructor1;
};
obj.mul = fn37;
obj.times = fn37;
obj.toBinary = function(arg0, arg1) {
  return toStringBinary(this, 2, arg0, arg1);
};
const fn38 = function(arg0, rounding) {
  let constructor = this.constructor;
  constructor = new constructor(this);
  if (undefined !== arg0) {
    if (arg0 === ~~arg0) {
      if (arg0 >= 0) {
        if (arg0 <= 1000000000) {
          if (undefined === rounding) {
            rounding = constructor.rounding;
          } else {
            const _Error = Error;
            throw Error(c9 + rounding);
          }
          finalise(constructor, arg0 + constructor.e + 1, rounding);
        }
      }
    }
    const _Error2 = Error;
    throw Error(c9 + arg0);
  }
  return constructor;
};
obj.toDP = fn38;
obj.toDecimalPlaces = fn38;
obj.toExponential = function(arg0, rounding) {
  self = this;
  let constructor = this.constructor;
  if (undefined === arg0) {
    let tmp11 = finiteToString(self, true);
    obj = self;
  } else {
    if (arg0 === ~~arg0) {
      if (arg0 >= 0) {
        if (arg0 <= 1000000000) {
          if (undefined === rounding) {
            rounding = constructor.rounding;
          } else {
            const _Error = Error;
            throw Error(c9 + rounding);
          }
          constructor = new constructor(self);
          obj = constructor;
          finalise(constructor, arg0 + 1, rounding);
          tmp11 = finiteToString(constructor, true, arg0 + 1);
        }
      }
    }
    const _Error2 = Error;
    throw Error(c9 + arg0);
  }
  let text = tmp11;
  if (obj.isNeg()) {
    text = tmp11;
    if (!obj.isZero()) {
      text = `-${tmp11}`;
    }
  }
  return text;
};
obj.toFixed = function(arg0, rounding) {
  self = this;
  let constructor = this.constructor;
  if (undefined === arg0) {
    let tmp11 = finiteToString(self);
  } else {
    if (arg0 === ~~arg0) {
      if (arg0 >= 0) {
        if (arg0 <= 1000000000) {
          if (undefined === rounding) {
            rounding = constructor.rounding;
          } else {
            const _Error = Error;
            throw Error(c9 + rounding);
          }
          constructor = new constructor(self);
          finalise(constructor, arg0 + self.e + 1, rounding);
          tmp11 = finiteToString(constructor, false, arg0 + constructor.e + 1);
        }
      }
    }
    const _Error2 = Error;
    throw Error(c9 + arg0);
  }
  let text = tmp11;
  if (self.isNeg()) {
    text = tmp11;
    if (!self.isZero()) {
      text = `-${tmp11}`;
    }
  }
  return text;
};
obj.toFraction = function(arg0) {
  let cmpResult;
  let result1;
  self = this;
  ({ d, constructor } = this);
  if (d) {
    constructor = new constructor(1);
    const constructor1 = new constructor(0);
    const constructor2 = new constructor(constructor1);
    const diff = d.length - 1;
    sum = 7 * diff + 1;
    let tmp17 = d[diff];
    let tmp18 = sum;
    if (tmp17) {
      let diff1 = sum;
      let tmp20 = sum;
      if (tmp17 % 10 === 0) {
        do {
          diff1 = diff1 - 1;
          let result = tmp17 / 10;
          tmp17 = result;
          tmp20 = diff1;
          result1 = result % 10;
        } while (result1 === 0);
      }
      let first = d[0];
      let sum1 = tmp20;
      tmp18 = tmp20;
      if (first >= 10) {
        do {
          sum1 = sum1 + 1;
          first = first / 10;
          tmp18 = sum1;
        } while (10 <= first);
      }
    }
    const diff2 = tmp18 - self.e - 1;
    constructor2.e = diff2;
    const result2 = diff2 % 7;
    let sum2 = result2;
    if (result2 < 0) {
      sum2 = 7 + result2;
    }
    constructor2.d[0] = pow(10, sum2);
    if (null == arg0) {
      let tmp40 = constructor;
      if (0 < diff2) {
        tmp40 = constructor2;
      }
      let obj3 = tmp40;
    } else {
      const constructor3 = new constructor(arg0);
      if (constructor3.isInt()) {
        if (!constructor3.lt(constructor)) {
          obj3 = constructor3;
          if (constructor3.gt(constructor2)) {
            let tmp37 = constructor;
            if (0 < diff2) {
              tmp37 = constructor2;
            }
            obj3 = tmp37;
          }
        }
      }
      const _Error = Error;
      throw Error(c9 + constructor3);
    }
    c8 = false;
    const constructor4 = new constructor(digitsToString(d));
    const result3 = 7 * d.length * 2;
    constructor.precision = result3;
    let tmp47 = f113060;
    const obj4 = f113060(constructor4, constructor2, 0, 1, 1);
    const plusResult = constructor.plus(obj4.times(constructor1));
    let obj6 = obj4;
    let tmp50 = constructor;
    let obj7 = constructor1;
    let obj8 = constructor4;
    let tmp51 = plusResult;
    let obj9 = constructor1;
    let tmp52 = constructor2;
    let tmp53 = constructor;
    let obj10 = constructor1;
    let tmp54 = constructor1;
    let obj11 = constructor;
    if (1 != plusResult.cmp(obj3)) {
      do {
        let plusResult1 = obj7.plus(obj6.times(tmp50));
        let minusResult = obj8.minus(obj6.times(tmp52));
        let tmp57 = f113060;
        let tmp58 = tmp52;
        let tmp59 = minusResult;
        let num12 = 0;
        let num13 = 1;
        let num14 = 1;
        let obj12 = f113060(tmp52, minusResult, 0, 1, 1);
        let plusResult2 = obj9.plus(obj12.times(tmp51));
        obj7 = tmp50;
        let tmp61 = tmp51;
        obj11 = obj9;
        obj8 = tmp52;
        obj6 = obj12;
        tmp50 = plusResult1;
        tmp51 = plusResult2;
        obj9 = tmp61;
        tmp52 = minusResult;
        tmp53 = plusResult1;
        obj10 = obj7;
        tmp54 = tmp61;
        tmp47 = f113060;
        cmpResult = plusResult2.cmp(obj3);
      } while (1 != cmpResult);
    }
    let tmp47Result = tmp47(obj3.minus(obj11), tmp54, 0, 1, 1);
    const plusResult3 = obj10.plus(tmp47Result.times(tmp53));
    const plusResult4 = obj11.plus(tmp47Result.times(tmp54));
    const s = self.s;
    tmp53.s = s;
    plusResult3.s = s;
    tmp47Result = tmp47(tmp53, tmp54, result3, 1);
    const minusResult1 = tmp47Result.minus(self);
    const tmp25 = constructor2;
    const tmp28 = pow;
    const absResult = tmp47Result.minus(self).abs();
    const tmp47Result1 = tmp47(plusResult3, plusResult4, result3, 1);
    if (absResult.cmp(minusResult2.abs()) < 1) {
      const items = [tmp53, tmp54];
      let items1 = items;
    } else {
      items1 = [plusResult3, plusResult4];
    }
    constructor.precision = constructor.precision;
    c8 = true;
    return items1;
  } else {
    const constructor5 = new constructor(self);
    return constructor5;
  }
};
const fn39 = function(arg0, arg1) {
  return toStringBinary(this, 16, arg0, arg1);
};
obj.toHex = fn39;
obj.toHexadecimal = fn39;
obj.toNearest = function(arg0, arg1) {
  let constructor = this.constructor;
  constructor = new constructor(this);
  if (null == arg0) {
    if (constructor.d) {
      let constructor1 = new constructor(1);
      let rounding = constructor.rounding;
    } else {
      return constructor;
    }
  } else {
    const constructor2 = new constructor(arg0);
    if (undefined === arg1) {
      rounding = constructor.rounding;
    } else {
      if (arg1 === ~~arg1) {
        if (arg1 >= 0) {
          rounding = arg1;
        }
      }
      const _Error = Error;
      throw Error(c9 + arg1);
    }
    if (constructor.d) {
      constructor1 = constructor2;
      if (!constructor2.d) {
        if (constructor2.s) {
          constructor2.s = constructor.s;
        }
        return constructor2;
      }
    } else {
      let tmp5 = constructor2;
      if (constructor2.s) {
        tmp5 = constructor;
      }
      return tmp5;
    }
  }
  if (constructor1.d[0]) {
    c8 = false;
    const timesResult = f113060(constructor, constructor1, 0, rounding, 1).times(constructor1);
    c8 = true;
    finalise(timesResult);
    let tmp9 = timesResult;
    obj = f113060(constructor, constructor1, 0, rounding, 1);
  } else {
    constructor1.s = constructor.s;
    tmp9 = constructor1;
  }
  return tmp9;
};
obj.toNumber = function() {
  return +this;
};
obj.toOctal = function(arg0, arg1) {
  return toStringBinary(this, 8, arg0, arg1);
};
const fn40 = function(arg0) {
  self = this;
  let constructor = this.constructor;
  constructor = new constructor(arg0);
  if (this.d) {
    if (constructor.d) {
      if (self.d[0]) {
        if (constructor.d[0]) {
          const constructor1 = new constructor(self);
          if (constructor1.eq(1)) {
            return constructor1;
          } else {
            ({ precision, rounding } = constructor);
            if (constructor.eq(1)) {
              finalise(constructor1, precision, rounding);
              return constructor1;
            } else {
              const tmp8 = floor(constructor.e / 7);
              if (tmp8 >= constructor.d.length - 1) {
                let tmp9 = tmp;
                if (tmp < 0) {
                  tmp9 = -tmp;
                }
                if (tmp9 <= 9007199254740991) {
                  const tmp44 = intPow(constructor, tmp6, tmp9, precision);
                  if (constructor.s < 0) {
                    const constructor2 = new constructor(1);
                    let divResult = constructor2.div(tmp44);
                  } else {
                    finalise(tmp44, precision, rounding);
                    divResult = tmp44;
                  }
                  return divResult;
                }
              }
              let num5 = constructor1.s;
              let tmp10 = num5;
              if (num5 < 0) {
                if (tmp8 < constructor.d.length - 1) {
                  const constructor3 = new constructor(NaN);
                  return constructor3;
                } else {
                  if (!(1 & constructor.d[tmp8])) {
                    num5 = 1;
                  }
                  tmp10 = num5;
                  if (0 == constructor1.e) {
                    tmp10 = num5;
                    if (1 == constructor1.d[0]) {
                      tmp10 = num5;
                      if (1 == constructor1.d.length) {
                        constructor1.s = num5;
                        return constructor1;
                      }
                    }
                  }
                }
              }
              const tmp12 = pow(+constructor1, tmp);
              if (0 != tmp12) {
                const _isFinite = isFinite;
                if (isFinite(tmp12)) {
                  const constructor4 = new constructor("" + tmp12);
                  let e = constructor4.e;
                }
                if (e <= constructor.maxE + 1) {
                  if (e >= constructor.minE - 1) {
                    c8 = false;
                    constructor1.s = 1;
                    constructor.rounding = 1;
                    const _Math3 = Math;
                    const bound = Math.min(12, "" + e.length);
                    let constructor5 = naturalExponential(constructor.times(naturalLogarithm(constructor1, precision + bound)), precision);
                    let d = constructor5.d;
                    if (d) {
                      finalise(constructor5, precision + 5, 1);
                      d = checkRoundingDigits(constructor5.d, precision, rounding);
                    }
                    if (d) {
                      sum = precision + 10;
                      const tmp55Result = tmp55(constructor.times(tmp56(constructor1, sum + bound)), sum);
                      finalise(tmp55Result, sum + 5, 1);
                      constructor5 = tmp55Result;
                      if (+arr.slice(precision + 1, precision + 15) + 1 === 100000000000000) {
                        tmp25(tmp55Result, precision + 1, 0);
                        constructor5 = tmp55Result;
                      }
                      arr = digitsToString(tmp55Result.d);
                      tmp25 = finalise;
                    }
                    constructor5.s = tmp10;
                    c8 = true;
                    constructor.rounding = rounding;
                    finalise(constructor5, precision, rounding);
                    tmp55 = naturalExponential;
                    tmp56 = naturalLogarithm;
                  }
                  return constructor5;
                }
                let num12 = 0;
                if (e > 0) {
                  num12 = tmp10 / 0;
                }
                constructor5 = new constructor(num12);
              }
              const _Math = Math;
              const _Math2 = Math;
              e = floor(tmp * (Math.log(`0.${digitsToString(obj2.d)}`) / Math.LN10 + constructor1.e + 1));
              const tmp7 = floor;
            }
          }
          tmp6 = constructor1;
        }
      }
    }
  }
  const constructor6 = new constructor(pow(+self, tmp));
  return constructor6;
};
obj.pow = fn40;
obj.toPower = fn40;
obj.toPrecision = function(precision, rounding) {
  self = this;
  let constructor = this.constructor;
  if (undefined === precision) {
    let tmp15 = self.e <= constructor.toExpNeg;
    if (!tmp15) {
      tmp15 = self.e >= constructor.toExpPos;
    }
    let tmp3Result = finiteToString(self, tmp15);
    obj = self;
    const tmp14 = finiteToString;
  } else {
    if (precision === ~~precision) {
      if (precision >= 1) {
        if (precision <= 1000000000) {
          if (undefined === rounding) {
            rounding = constructor.rounding;
          } else {
            const _Error = Error;
            throw Error(c9 + rounding);
          }
          constructor = new constructor(self);
          obj = constructor;
          finalise(constructor, precision, rounding);
          tmp3Result = finiteToString(obj, precision <= constructor.e || obj.e <= constructor.toExpNeg, precision);
          const tmp10 = precision <= constructor.e || obj.e <= constructor.toExpNeg;
          const tmp3 = finiteToString;
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
      text = `-${tmp11}`;
    }
  }
  return text;
};
const fn41 = function(precision, rounding) {
  self = this;
  let constructor = this.constructor;
  if (undefined === precision) {
    ({ precision, rounding } = constructor);
  } else {
    if (precision === ~~precision) {
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
  constructor = new constructor(self);
  finalise(constructor, precision, rounding);
  return constructor;
};
obj.toSD = fn41;
obj.toSignificantDigits = fn41;
obj.toString = function() {
  self = this;
  const constructor = this.constructor;
  let tmp2 = this.e <= constructor.toExpNeg;
  if (!tmp2) {
    tmp2 = self.e >= constructor.toExpPos;
  }
  const tmpResult = finiteToString(self, tmp2);
  let text = tmpResult;
  if (self.isNeg()) {
    text = tmpResult;
    if (!self.isZero()) {
      text = `-${tmp3}`;
    }
  }
  return text;
};
const fn42 = function() {
  const constructor = new this.constructor(this);
  finalise(constructor, this.e + 1, 1);
  return constructor;
};
obj.trunc = fn42;
obj.truncated = fn42;
const fn43 = function() {
  self = this;
  const constructor = this.constructor;
  let tmp2 = this.e <= constructor.toExpNeg;
  if (!tmp2) {
    tmp2 = self.e >= constructor.toExpPos;
  }
  let text = finiteToString(self, tmp2);
  if (self.isNeg()) {
    text = `-${tmp3}`;
  }
  return text;
};
obj.toJSON = fn43;
obj.valueOf = fn43;
const f113060 = (s, s2, arg2, _exports2) => {
  let num13;
  let tmp21;
  let tmp27;
  let constructor = s.constructor;
  let num = -1;
  if (s.s == s2.s) {
    num = 1;
  }
  const d = s.d;
  const d1 = s2.d;
  if (d) {
    if (d[0]) {
      if (d1) {
        if (d1[0]) {
          if (arg5) {
            let diff = s.e - s2.e;
            let num7 = 1;
            let tmp6 = arg5;
          } else {
            tmp6 = c19;
            num7 = 7;
            diff = floor(s.e / 7) - floor(s2.e / 7);
            const tmp8 = floor(s.e / 7);
          }
          let length = d1.length;
          constructor = new constructor(num);
          const items = [];
          constructor.d = items;
          let num8 = d[0];
          if (!num8) {
            num8 = 0;
          }
          let num11 = 0;
          let num12 = 0;
          if (d1[0] == num8) {
            do {
              sum = num11 + 1;
              num13 = d[sum];
              if (!num13) {
                num13 = 0;
              }
              num11 = sum;
              num12 = sum;
            } while (d1[sum] == num13);
          }
          let num14 = d[num12];
          if (!num14) {
            num14 = 0;
          }
          let diff1 = diff;
          if (d1[num12] > num14) {
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
            rounding = _exports2;
          }
          if (precision < 0) {
            let first = items.push(1);
            let flag = true;
          } else {
            first = precision / num7 + 2 | 0;
            if (1 == length) {
              first = d1[0];
              let num40 = 0;
              let num41 = 0;
              if (0 < length2) {
                const sum1 = first + 1;
                let diff2 = sum1 - 1;
                let num42 = 0;
                let num43 = 0;
                num40 = 0;
                num41 = 0;
                if (sum1) {
                  while (true) {
                    let num44 = d[num43];
                    let tmp96 = num43;
                    let result = num42 * tmp6;
                    let tmp95 = diff2;
                    if (!num44) {
                      num44 = 0;
                    }
                    let sum2 = result + num44;
                    items[num43] = sum2 / first | 0;
                    let tmp98 = sum2 % first | 0;
                    let sum3 = num43 + 1;
                    if (sum3 < length2) {
                      diff2 = diff2 - 1;
                      num42 = tmp98;
                      num43 = sum3;
                      num40 = tmp98;
                      num41 = sum3;
                      if (!tmp95) {
                        break;
                      }
                    } else {
                      num40 = tmp98;
                      num41 = sum3;
                      if (!tmp98) {
                        break;
                      }
                    }
                    break;
                  }
                }
              }
              if (!num40) {
                num40 = num41 < length2;
              }
              let tmp90 = num40;
            } else {
              first = tmp6 / (d1[0] + 1) | 0;
              let arr4 = d1;
              let arr5 = d;
              let length3 = length2;
              if (1 < first) {
                const substr = d1.slice();
                first = +d1.length;
                let diff3 = first - 1;
                let num15 = 0;
                let num16 = 0;
                if (first) {
                  do {
                    let sum4 = substr[diff3] * first + num15;
                    substr[diff3] = sum4 % tmp6 | 0;
                    num15 = sum4 / tmp6 | 0;
                    tmp21 = +diff3;
                    diff3 = tmp21 - 1;
                    num16 = num15;
                  } while (tmp21);
                }
                if (num16) {
                  substr.unshift(num16);
                }
                const substr1 = d.slice();
                let diff4 = tmp24 - 1;
                let num17 = 0;
                let num18 = 0;
                if (+d.length) {
                  do {
                    let sum5 = substr1[diff4] * first + num17;
                    substr1[diff4] = sum5 % tmp6 | 0;
                    num17 = sum5 / tmp6 | 0;
                    tmp27 = +diff4;
                    diff4 = tmp27 - 1;
                    num18 = num17;
                  } while (tmp27);
                }
                if (num18) {
                  substr1.unshift(num18);
                }
                length = substr.length;
                length3 = substr1.length;
                arr4 = substr;
                arr5 = substr1;
              }
              const substr2 = arr5.slice(0, length);
              let sum6 = length4;
              let tmp32 = length4;
              if (substr2.length < length) {
                do {
                  let tmp33 = +sum6;
                  sum6 = tmp33 + 1;
                  substr2[tmp33] = 0;
                  tmp32 = sum6;
                } while (sum6 < length);
              }
              const substr3 = arr4.slice();
              substr3.unshift(0);
              const first1 = arr4[0];
              let sum7 = first1;
              let sum13 = length;
              let diff11 = first;
              let tmp39 = tmp32;
              let arr9 = substr2;
              let num19 = 0;
              if (arr4[1] >= tmp6 / 2) {
                sum7 = first1 + 1;
                sum13 = length;
                diff11 = first;
                tmp39 = tmp32;
                arr9 = substr2;
                num19 = 0;
              }
              while (true) {
                let tmp40 = sum7;
                let tmp41 = sum13;
                let tmp43 = tmp39;
                let tmp44 = arr9;
                let tmp45 = num19;
                let tmp42 = diff11;
                if (length != tmp39) {
                  let num23 = -1;
                  if (length > tmp43) {
                    num23 = 1;
                  }
                  let num21 = num23;
                } else {
                  let num20 = 0;
                  num21 = 0;
                  if (0 < length) {
                    let tmp46 = num20;
                    while (arr4[num20] == arr9[num20]) {
                      let sum8 = num20 + 1;
                      num20 = sum8;
                      num21 = 0;
                    }
                    let num22 = -1;
                    if (arr4[num20] > arr9[num20]) {
                      num22 = 1;
                    }
                    num21 = num22;
                  }
                }
                if (num21 < 0) {
                  let first2 = arr9[0];
                  let sum9 = first2;
                  if (length != tmp43) {
                    let num25 = arr9[1];
                    let result1 = first2 * tmp6;
                    if (!num25) {
                      num25 = 0;
                    }
                    sum9 = result1 + num25;
                  }
                  let diff5 = sum9 / sum7 | 0;
                  if (1 < diff5) {
                    if (diff5 >= tmp6) {
                      diff5 = tmp6 - 1;
                    }
                    let substr4 = arr4.slice();
                    let tmp53 = +arr4.length;
                    let diff6 = tmp53 - 1;
                    let num27 = 0;
                    let num28 = 0;
                    if (tmp53) {
                      do {
                        let sum10 = substr4[diff6] * diff5 + num27;
                        substr4[diff6] = sum10 % tmp6 | 0;
                        num27 = sum10 / tmp6 | 0;
                        tmp56 = +diff6;
                        diff6 = tmp56 - 1;
                        num28 = num27;
                      } while (tmp56);
                    }
                    if (num28) {
                      let arr3 = substr4.unshift(num28);
                    }
                    let length6 = substr4.length;
                    let length7 = arr9.length;
                    if (length6 != length7) {
                      let num32 = -1;
                      if (length6 > length7) {
                        num32 = 1;
                      }
                      let num30 = num32;
                    } else {
                      let num29 = 0;
                      num30 = 0;
                      if (0 < length6) {
                        let tmp58 = num29;
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
                    tmp43 = length7;
                    let substr5 = substr4;
                    let num26 = diff5;
                    num21 = num30;
                    if (1 === num30) {
                      let tmp60 = arr4;
                      if (length < length6) {
                        tmp60 = substr3;
                      }
                      let tmp61 = +length6;
                      let diff7 = tmp61 - 1;
                      let num33 = 0;
                      if (tmp61) {
                        do {
                          substr4[diff7] = substr4[diff7] - num33;
                          let tmp63 = diff7;
                          let num34 = 0;
                          if (substr4[diff7] < tmp60[diff7]) {
                            num34 = 1;
                          }
                          substr4[diff7] = num34 * tmp6 + substr4[diff7] - tmp60[diff7];
                          tmp64 = +diff7;
                          diff7 = tmp64 - 1;
                          num33 = num34;
                        } while (tmp64);
                      }
                      let diff8 = diff5 - 1;
                      tmp43 = length7;
                      substr5 = substr4;
                      num26 = diff8;
                      num21 = num30;
                      if (!substr4[0]) {
                        tmp43 = length7;
                        substr5 = substr4;
                        num26 = diff8;
                        num21 = num30;
                        if (substr4.length > 1) {
                          arr4 = substr4.shift();
                          tmp43 = length7;
                          substr5 = substr4;
                          num26 = diff8;
                          num21 = num30;
                          while (!substr4[0]) {
                            tmp43 = length7;
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
                    substr5 = arr4.slice();
                  }
                  if (substr5.length < tmp43) {
                    arr5 = substr5.unshift(0);
                  }
                  let tmp68 = +tmp43;
                  let diff9 = tmp68 - 1;
                  let num35 = 0;
                  if (tmp68) {
                    do {
                      arr9[diff9] = arr9[diff9] - num35;
                      let tmp70 = diff9;
                      num30 = 0;
                      if (arr9[diff9] < substr5[diff9]) {
                        num30 = 1;
                      }
                      arr9[diff9] = num30 * tmp6 + arr9[diff9] - substr5[diff9];
                      tmp71 = +diff9;
                      diff9 = tmp71 - 1;
                      num35 = num30;
                    } while (tmp71);
                  }
                  if (!arr9[0]) {
                    if (arr9.length > 1) {
                      let arr6 = arr9.shift();
                      while (!arr9[0]) {
                        if (arr9.length <= 1) {
                          break;
                        }
                      }
                    }
                  }
                  if (-1 === num21) {
                    break;
                  } else {
                    let tmp79 = num26;
                    if (tmp73) {
                      let tmp80 = arr4;
                      if (length < tmp43) {
                        tmp80 = substr3;
                      }
                      let tmp81 = +tmp43;
                      let diff10 = tmp81 - 1;
                      num30 = 0;
                      if (tmp81) {
                        do {
                          arr9[diff10] = arr9[diff10] - num30;
                          let tmp83 = diff10;
                          let num38 = 0;
                          if (arr9[diff10] < tmp80[diff10]) {
                            num38 = 1;
                          }
                          arr9[diff10] = num38 * tmp6 + arr9[diff10] - tmp80[diff10];
                          tmp84 = +diff10;
                          diff10 = tmp84 - 1;
                          num30 = num38;
                        } while (tmp84);
                      }
                      let sum12 = num26 + 1;
                      tmp79 = sum12;
                      if (!arr9[0]) {
                        tmp79 = sum12;
                        if (arr9.length > 1) {
                          let arr7 = arr9.shift();
                          tmp79 = sum12;
                          while (!arr9[0]) {
                            tmp79 = sum12;
                            if (arr9.length <= 1) {
                              break;
                            }
                          }
                        }
                      }
                    }
                    let length5 = arr9.length;
                    let num24 = tmp79;
                    let items1 = arr9;
                    let tmp48 = num21;
                  }
                } else {
                  length5 = tmp43;
                  items1 = arr9;
                  num24 = 0;
                  tmp48 = num21;
                  if (0 === num21) {
                    items1 = [0];
                    length5 = tmp43;
                    num24 = 1;
                    tmp48 = num21;
                  }
                }
                items[num19] = num24;
                if (tmp48) {
                  if (items1[0]) {
                    let tmp87 = +length5;
                    let tmp88 = arr5[sum13] || 0;
                    let num39 = tmp87 + 1;
                    items1[tmp87] = tmp88;
                    let items2 = items1;
                    let tmp89 = +sum13;
                    if (tmp89 < length3) {
                      num19 = num19 + 1;
                      sum13 = tmp89 + 1;
                      diff11 = diff11 - 1;
                      tmp39 = num39;
                      arr9 = items2;
                    }
                    tmp90 = undefined !== items2[0];
                  }
                }
                items2 = [arr5[sum13]];
                num39 = 1;
              }
              if (length != arr9.length) {
                num30 = -1;
                if (length > length8) {
                  num30 = 1;
                }
                let num37 = num30;
              } else {
                let num36 = 0;
                num37 = 0;
                if (0 < length) {
                  num30 = num36;
                  while (arr4[num36] == arr9[num36]) {
                    let sum14 = num30 + 1;
                    num36 = sum14;
                    num37 = 0;
                  }
                }
                num30 = -1;
                if (tmp75) {
                  num30 = 1;
                }
                num37 = num30;
                tmp75 = arr4[num30] > arr9[num30];
              }
            }
            flag = tmp90;
            if (!items[0]) {
              first = items.shift();
              flag = tmp90;
            }
          }
          if (1 === num7) {
            constructor.e = diff1;
          } else {
            first = items[0];
            let num46 = 1;
            let num47 = 1;
            if (first >= 10) {
              do {
                num46 = num46 + 1;
                first = first / 10;
                num47 = num46;
              } while (10 <= first);
            }
            constructor.e = num47 + diff1 * num7 - 1;
            first = tmp17;
            first = finalise;
            if (arg4) {
              first = tmp17 + constructor.e + 1;
            }
            first = constructor;
            first = rounding;
            first = flag;
            first = first(constructor, first, rounding, flag);
          }
          return constructor;
        }
      }
    }
  }
  let num2 = NaN;
  if (s.s) {
    num2 = NaN;
    if (s2.s) {
      first = d1;
      if (d) {
        let tmp2 = !d1;
        if (d1) {
          tmp2 = d[0] != d1[0];
        }
        first = tmp2;
      }
      num2 = NaN;
      if (first) {
        if (!d) {
          if (d1) {
            let num5 = num / 0;
          }
        }
        num5 = 0;
      }
    }
  }
  const constructor1 = new constructor(num2);
  return constructor1;
};
function clone(arg0) {
  obj = arg0;
  class Decimal {
    constructor(arg0) {
      self = this;
      tmp = Decimal;
      if (this instanceof Decimal) {
        self.constructor = tmp;
        tmp4 = closure_1_1;
        flag = arg0 instanceof closure_1_1;
        if (!flag) {
          tmp5 = arg0;
          if (arg0) {
            tmp6 = closure_1_12;
            tmp5 = arg0.toStringTag === closure_1_12;
          }
          flag = tmp5;
        }
        if (!flag) {
          flag = false;
        }
        if (flag) {
          self.s = arg0.s;
          tmp70 = c8;
          if (c8) {
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
              tmp74 = substr;
            }
            num36 = NaN;
            self.e = NaN;
            tmp73 = null;
            self.d = null;
            substr = null;
          } else {
            ({ e: self.e, d } = arg0);
            if (arg0.d) {
              substr1 = d.slice();
            } else {
              substr1 = d;
            }
            self.d = substr1;
            return;
          }
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
            if (str9 === ~~str9) {
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
                tmp66 = c8;
                if (c8) {
                  if (num32 > Decimal.maxE) {
                    num33 = NaN;
                    self.e = NaN;
                    tmp68 = null;
                    self.d = null;
                    items2 = null;
                  } else if (num32 < tmp67.minE) {
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
                  tmp69 = items2;
                } else {
                  self.e = num32;
                  items3 = [];
                  items3[0] = str9;
                  self.d = items3;
                  return;
                }
              }
            }
            {
              tmp62 = closure_1_32;
              tmp63 = closure_1_32(self, str9.toString());
              tmp64 = self;
            }
            return tmp64;
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
          obj = closure_1_18;
          tmp10 = substr2;
          if (closure_1_18.test(substr2)) {
            tmp60 = closure_1_32;
            tmp61 = closure_1_32(self, substr2);
            tmp12 = self;
          } else {
            str2 = "_";
            num11 = -1;
            if (substr2.indexOf("_") > -1) {
              str6 = "$1";
              replaced = substr2.replace(/(\d)_(?=\d)/g, "$1");
              str5 = replaced;
              if (obj.test(replaced)) {
                tmp58 = closure_1_32;
                tmp59 = closure_1_32(self, replaced);
                tmp12 = self;
              }
            } else {
              str3 = "Infinity";
              if ("Infinity" !== substr2) {
                str4 = "NaN";
                str5 = substr2;
              }
              if (!+substr2) {
                num12 = NaN;
                self.s = NaN;
              }
              num13 = NaN;
              self.e = NaN;
              tmp11 = null;
              self.d = null;
              tmp12 = self;
            }
            tmp14 = closure_1_16;
            tmp15 = str5;
            if (closure_1_16.test(str5)) {
              formatted = str5.toLowerCase();
              num14 = 16;
            } else {
              tmp16 = closure_1_15;
              num14 = 2;
              formatted = str5;
              if (!closure_1_15.test(str5)) {
                tmp17 = closure_1_17;
                num14 = 8;
                formatted = str5;
                if (!closure_1_17.test(str5)) {
                  tmp18 = globalThis;
                  _Error = Error;
                  tmp19 = closure_1_9;
                  throw Error(closure_1_9 + str5);
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
              tmp30 = closure_1_29;
              tmp31 = new.target;
              tmp32 = new.target;
              tmp33 = num14;
              constructor = new constructor(num14);
              num18 = 2;
              tmp35 = constructor;
              num19 = 0;
              tmp36 = constructor;
              tmp37 = diff;
              tmp27 = closure_1_29(constructor, constructor, diff, 2 * diff);
              tmp26 = length;
              tmp28 = replaced1;
            }
            tmp38 = closure_1_25;
            tmp39 = closure_1_19;
            arr5 = closure_1_25(tmp28, num14, closure_1_19);
            num20 = 1;
            diff1 = arr5.length - 1;
            tmp41 = diff1;
            tmp42 = diff1;
            if (0 === arr5[diff1]) {
              do {
                arr = arr5.pop();
                diff2 = tmp41 - 1;
                tmp41 = diff2;
                tmp42 = diff2;
                tmp45 = arr5[diff2];
              } while (0 === tmp45);
            }
            if (tmp42 < 0) {
              s = self.s;
              tmp56 = new.target;
              tmp57 = new.target;
              constructor1 = new constructor(0);
            } else {
              first = arr5[0];
              num37 = 7;
              result1 = diff1 * 7;
              num38 = 10;
              tmp48 = result1;
              if (first >= 10) {
                do {
                  result1 = result1 + 1;
                  first = first / 10;
                  tmp48 = result1;
                } while (10 <= first);
              }
              self.e = tmp48;
              self.d = arr5;
              flag2 = false;
              c8 = false;
              obj2 = self;
              if (tmp24) {
                tmp49 = closure_1_26;
                num21 = 4;
                obj2 = closure_1_26(self, tmp27, 4 * tmp26);
              }
              constructor1 = obj2;
              if (!tmp22) {
                flag3 = true;
                c8 = true;
              } else {
                tmp51 = globalThis;
                _Math = Math;
                num22 = 54;
                if (Math.abs(tmp22) < 54) {
                  tmp54 = closure_1_14;
                  num24 = 2;
                  powResult = closure_1_14(2, tmp22);
                } else {
                  tmp52 = closure_1_1;
                  num23 = 2;
                  powResult = closure_1_1.pow(2, tmp22);
                }
                timesResult = obj2.times(powResult);
              }
            }
            tmp12 = constructor1;
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
          tmp7 = closure_1_32;
          tmp8 = closure_1_32(self, str.toString());
          return self;
        } else {
          tmp75 = globalThis;
          _Error2 = Error;
          tmp76 = closure_1_9;
          throw Error(closure_1_9 + arg0);
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
    class Decimal {
      constructor(arg0) {
        self = this;
        tmp = Decimal;
        if (this instanceof Decimal) {
          self.constructor = tmp;
          tmp4 = closure_1_1;
          flag = arg0 instanceof closure_1_1;
          if (!flag) {
            tmp5 = arg0;
            if (arg0) {
              tmp6 = closure_1_12;
              tmp5 = arg0.toStringTag === closure_1_12;
            }
            flag = tmp5;
          }
          if (!flag) {
            flag = false;
          }
          if (flag) {
            self.s = arg0.s;
            tmp70 = c8;
            if (c8) {
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
                tmp74 = substr;
              }
              num36 = NaN;
              self.e = NaN;
              tmp73 = null;
              self.d = null;
              substr = null;
            } else {
              ({ e: self.e, d } = arg0);
              if (arg0.d) {
                substr1 = d.slice();
              } else {
                substr1 = d;
              }
              self.d = substr1;
              return;
            }
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
              if (str9 === ~~str9) {
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
                  tmp66 = c8;
                  if (c8) {
                    if (num32 > Decimal.maxE) {
                      num33 = NaN;
                      self.e = NaN;
                      tmp68 = null;
                      self.d = null;
                      items2 = null;
                    } else if (num32 < tmp67.minE) {
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
                    tmp69 = items2;
                  } else {
                    self.e = num32;
                    items3 = [];
                    items3[0] = str9;
                    self.d = items3;
                    return;
                  }
                }
              }
              {
                tmp62 = closure_1_32;
                tmp63 = closure_1_32(self, str9.toString());
                tmp64 = self;
              }
              return tmp64;
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
            obj = closure_1_18;
            tmp10 = substr2;
            if (closure_1_18.test(substr2)) {
              tmp60 = closure_1_32;
              tmp61 = closure_1_32(self, substr2);
              tmp12 = self;
            } else {
              str2 = "_";
              num11 = -1;
              if (substr2.indexOf("_") > -1) {
                str6 = "$1";
                replaced = substr2.replace(/(\d)_(?=\d)/g, "$1");
                str5 = replaced;
                if (obj.test(replaced)) {
                  tmp58 = closure_1_32;
                  tmp59 = closure_1_32(self, replaced);
                  tmp12 = self;
                }
              } else {
                str3 = "Infinity";
                if ("Infinity" !== substr2) {
                  str4 = "NaN";
                  str5 = substr2;
                }
                if (!+substr2) {
                  num12 = NaN;
                  self.s = NaN;
                }
                num13 = NaN;
                self.e = NaN;
                tmp11 = null;
                self.d = null;
                tmp12 = self;
              }
              tmp14 = closure_1_16;
              tmp15 = str5;
              if (closure_1_16.test(str5)) {
                formatted = str5.toLowerCase();
                num14 = 16;
              } else {
                tmp16 = closure_1_15;
                num14 = 2;
                formatted = str5;
                if (!closure_1_15.test(str5)) {
                  tmp17 = closure_1_17;
                  num14 = 8;
                  formatted = str5;
                  if (!closure_1_17.test(str5)) {
                    tmp18 = globalThis;
                    _Error = Error;
                    tmp19 = closure_1_9;
                    throw Error(closure_1_9 + str5);
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
                tmp30 = closure_1_29;
                tmp31 = new.target;
                tmp32 = new.target;
                tmp33 = num14;
                constructor = new constructor(num14);
                num18 = 2;
                tmp35 = constructor;
                num19 = 0;
                tmp36 = constructor;
                tmp37 = diff;
                tmp27 = closure_1_29(constructor, constructor, diff, 2 * diff);
                tmp26 = length;
                tmp28 = replaced1;
              }
              tmp38 = closure_1_25;
              tmp39 = closure_1_19;
              arr5 = closure_1_25(tmp28, num14, closure_1_19);
              num20 = 1;
              diff1 = arr5.length - 1;
              tmp41 = diff1;
              tmp42 = diff1;
              if (0 === arr5[diff1]) {
                do {
                  arr = arr5.pop();
                  diff2 = tmp41 - 1;
                  tmp41 = diff2;
                  tmp42 = diff2;
                  tmp45 = arr5[diff2];
                } while (0 === tmp45);
              }
              if (tmp42 < 0) {
                s = self.s;
                tmp56 = new.target;
                tmp57 = new.target;
                constructor1 = new constructor(0);
              } else {
                first = arr5[0];
                num37 = 7;
                result1 = diff1 * 7;
                num38 = 10;
                tmp48 = result1;
                if (first >= 10) {
                  do {
                    result1 = result1 + 1;
                    first = first / 10;
                    tmp48 = result1;
                  } while (10 <= first);
                }
                self.e = tmp48;
                self.d = arr5;
                flag2 = false;
                c8 = false;
                obj2 = self;
                if (tmp24) {
                  tmp49 = closure_1_26;
                  num21 = 4;
                  obj2 = closure_1_26(self, tmp27, 4 * tmp26);
                }
                constructor1 = obj2;
                if (!tmp22) {
                  flag3 = true;
                  c8 = true;
                } else {
                  tmp51 = globalThis;
                  _Math = Math;
                  num22 = 54;
                  if (Math.abs(tmp22) < 54) {
                    tmp54 = closure_1_14;
                    num24 = 2;
                    powResult = closure_1_14(2, tmp22);
                  } else {
                    tmp52 = closure_1_1;
                    num23 = 2;
                    powResult = closure_1_1.pow(2, tmp22);
                  }
                  timesResult = obj2.times(powResult);
                }
              }
              tmp12 = constructor1;
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
            tmp7 = closure_1_32;
            tmp8 = closure_1_32(self, str.toString());
            return self;
          } else {
            tmp75 = globalThis;
            _Error2 = Error;
            tmp76 = closure_1_9;
            throw Error(closure_1_9 + arg0);
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
  Decimal.config(obj);
  return Decimal;
}
let cloneResult = clone(obj);
cloneResult.prototype.constructor = cloneResult;
cloneResult.Decimal = cloneResult;
cloneResult.default = cloneResult;
cloneResult = new cloneResult("2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058");
c5 = cloneResult;
cloneResult1 = new cloneResult("3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789");
if (typeof globalThis.define === "function") {
  if (globalThis.define.amd) {
    globalThis.define(() => closure_1);
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
      obj[Symbol.for("nodejs.util.inspect.custom")] = obj.toString;
      const _Symbol3 = Symbol;
      obj[Symbol.toStringTag] = "Decimal";
    }
    module.exports = cloneResult;
  }
}
const Decimal = self.Decimal;
class tmp {
  static noConflict() {
    self.Decimal = Decimal;
    return closure_1;
  }
}
self.Decimal = cloneResult;