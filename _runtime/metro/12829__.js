// === Module 12829: ? ===

// Module 12829
import _mod12830 from "module_12830" /* 12830 */;

function consumeEscaped(arr, sum) {
  sum = sum + 2;
  const diff = sum - 1;
  let num = 0;
  if (diff < arr.length) {
    num = arr.charCodeAt(diff);
  }
  let sum3 = sum;
  if (obj.isHexDigit(num)) {
    const _Math = Math;
    const bound = Math.min(arr.length, sum + 5);
    let tmp8 = sum;
    if (sum < bound) {
      let num3 = 0;
      if (sum < arr.length) {
        num3 = arr.charCodeAt(sum);
      }
      let tmp9 = sum;
      tmp8 = sum;
      if (tmp2Result.isHexDigit(num3)) {
        const sum1 = tmp9 + 1;
        tmp8 = sum1;
        while (sum1 < bound) {
          let obj2 = _mod12830;
          let num4 = 0;
          if (sum1 < arr.length) {
            num4 = arr.charCodeAt(sum1);
          }
          tmp9 = sum1;
          tmp8 = sum1;
          if (!obj2.isHexDigit(num4)) {
            break;
          }
        }
      }
      tmp2Result = _mod12830;
    }
    let num5 = 0;
    if (tmp8 < arr.length) {
      num5 = arr.charCodeAt(tmp8);
    }
    sum3 = tmp8;
    if (obj3.isWhiteSpace(num5)) {
      let num7 = 1;
      if (13 === num5) {
        const sum2 = tmp8 + 1;
        let num8 = 0;
        if (sum2 < arr.length) {
          num8 = arr.charCodeAt(sum2);
        }
        num7 = 1;
        if (10 === num8) {
          num7 = 2;
        }
      }
      sum3 = tmp8 + num7;
    }
    obj3 = _mod12830;
  }
  return sum3;
}

export default {
  consumeEscaped,
  consumeName(StringResult, sum) {
    let tmp2 = sum;
    if (sum < StringResult.length) {
      while (true) {
        let charCodeAtResult = StringResult.charCodeAt(sum);
        let obj = _mod12830;
        let diff = sum;
        if (obj.isName(charCodeAtResult)) {
          sum = diff + 1;
          tmp2 = sum;
          if (sum >= StringResult.length) {
            break;
          }
        } else {
          let tmp4Result = _mod12830;
          let sum1 = sum + 1;
          let num = 0;
          if (sum1 < StringResult.length) {
            num = StringResult.charCodeAt(sum1);
          }
          tmp2 = sum;
          if (!tmp4Result.isValidEscape(charCodeAtResult, num)) {
            break;
          } else {
            diff = consumeEscaped(StringResult, sum) - 1;
          }
        }
        break;
      }
    }
    return tmp2;
  },
  consumeNumber(str, sum) {
    let charCodeAtResult = str.charCodeAt(sum);
    let tmp2 = 43 !== charCodeAtResult;
    if (tmp2) {
      tmp2 = 45 !== charCodeAtResult;
    }
    let tmp3 = sum;
    if (!tmp2) {
      sum = sum + 1;
      charCodeAtResult = str.charCodeAt(sum);
      tmp3 = sum;
    }
    let tmp7 = tmp3;
    if (obj.isDigit(charCodeAtResult)) {
      const sum1 = tmp3 + 1;
      let tmp9 = sum1;
      if (sum1 < str.length) {
        let tmp10 = sum1;
        tmp9 = sum1;
        if (tmp5Result.isDigit(str.charCodeAt(sum1))) {
          const sum2 = tmp10 + 1;
          tmp9 = sum2;
          while (sum2 < str.length) {
            let obj3 = _mod12830;
            tmp10 = sum2;
            tmp9 = sum2;
            if (!obj3.isDigit(str.charCodeAt(sum2))) {
              break;
            }
          }
        }
        tmp5Result = _mod12830;
      }
      charCodeAtResult = str.charCodeAt(tmp9);
      tmp7 = tmp9;
    }
    let isDigitResult = 46 === charCodeAtResult;
    if (isDigitResult) {
      isDigitResult = _mod12830.isDigit(str.charCodeAt(tmp7 + 1));
      const tmp5Result3 = _mod12830;
    }
    let tmp15 = tmp7;
    if (isDigitResult) {
      const sum3 = tmp7 + 2;
      str.charCodeAt(sum3);
      let tmp18 = sum3;
      if (sum3 < str.length) {
        let tmp21 = sum3;
        tmp18 = sum3;
        if (obj5.isDigit(str.charCodeAt(sum3))) {
          const sum4 = tmp21 + 1;
          tmp18 = sum4;
          while (sum4 < str.length) {
            let obj6 = _mod12830;
            tmp21 = sum4;
            tmp18 = sum4;
            if (!obj6.isDigit(str.charCodeAt(sum4))) {
              break;
            }
          }
        }
        obj5 = _mod12830;
      }
      tmp15 = tmp18;
    }
    const charCodeAtResult2 = str.charCodeAt(tmp15);
    obj = _mod12830;
    let tmp28 = charCodeAtResult2;
    if (obj7.isUppercaseLetter(charCodeAtResult2)) {
      tmp28 = charCodeAtResult2 | 32;
    }
    let tmp29 = tmp15;
    if (tmp28 === 101) {
      let charCodeAtResult3 = str.charCodeAt(tmp15 + 1);
      let num7 = 0;
      if (!tmp30) {
        charCodeAtResult3 = str.charCodeAt(tmp15 + 2);
        num7 = 1;
      }
      tmp29 = tmp15;
      if (tmp5Result4.isDigit(charCodeAtResult3)) {
        const sum5 = tmp15 + 1 + num7 + 1;
        let tmp33 = sum5;
        if (sum5 < str.length) {
          let tmp34 = sum5;
          tmp33 = sum5;
          if (tmp26Result.isDigit(str.charCodeAt(sum5))) {
            const sum6 = tmp34 + 1;
            tmp33 = sum6;
            while (sum6 < str.length) {
              let obj10 = _mod12830;
              tmp34 = sum6;
              tmp33 = sum6;
              if (!obj10.isDigit(str.charCodeAt(sum6))) {
                break;
              }
            }
          }
          tmp26Result = _mod12830;
        }
        tmp29 = tmp33;
      }
      tmp30 = 45 !== charCodeAtResult3 && 43 !== charCodeAtResult3;
      tmp5Result4 = _mod12830;
    }
    return tmp29;
  },
  consumeBadUrlRemnants(arr2, sum) {
    let sum1 = sum;
    let sum2 = sum;
    if (sum < arr2.length) {
      const charCodeAtResult = arr2.charCodeAt(sum1);
      while (41 !== charCodeAtResult) {
        let obj = _mod12830;
        sum = sum1 + 1;
        let num = 0;
        if (sum < arr2.length) {
          num = arr2.charCodeAt(sum);
        }
        let tmp8 = sum1;
        if (obj.isValidEscape(charCodeAtResult, num)) {
          tmp8 = consumeEscaped(arr2, sum1);
        }
        sum1 = tmp8 + 1;
        sum2 = sum1;
      }
      sum2 = sum1 + 1;
    }
    return sum2;
  },
  cmpChar(source, tokenStart, c8) {
    const charCodeAtResult = source.charCodeAt(tokenStart);
    let tmp2 = charCodeAtResult;
    if (obj.isUppercaseLetter(charCodeAtResult)) {
      tmp2 = charCodeAtResult | 32;
    }
    return tmp2 === c8;
  },
  cmpStr(source, tokenStart, length, c0) {
    if (length - tokenStart !== _require.length) {
      return false;
    } else {
      if (tokenStart >= 0) {
        if (length <= source.length) {
          let sum = tokenStart;
          if (tokenStart < length) {
            while (true) {
              let charCodeAtResult = source.charCodeAt(sum);
              let charCodeAtResult1 = _require.charCodeAt(sum - tokenStart);
              let obj = _mod12830;
              let tmp8 = charCodeAtResult;
              if (obj.isUppercaseLetter(charCodeAtResult)) {
                tmp8 = charCodeAtResult | 32;
              }
              if (tmp8 !== charCodeAtResult1) {
                break;
              } else {
                sum = sum + 1;
              }
            }
            return false;
          }
          return true;
        }
      }
      return false;
    }
  },
  getNewlineLength(arr, arg1, charCodeAtResult) {
    let num = 1;
    if (13 === charCodeAtResult) {
      const sum = arg1 + 1;
      let num2 = 0;
      if (sum < arr.length) {
        num2 = arr.charCodeAt(sum);
      }
      num = 1;
      if (10 === num2) {
        num = 2;
      }
    }
    return num;
  },
  findWhiteSpaceStart(source, sum) {
    let tmp = sum;
    if (sum >= 0) {
      let tmp5 = sum;
      tmp = sum;
      if (obj.isWhiteSpace(source.charCodeAt(sum))) {
        const diff = tmp5 - 1;
        tmp = diff;
        while (diff >= 0) {
          let obj2 = _mod12830;
          tmp5 = diff;
          tmp = diff;
          if (!obj2.isWhiteSpace(source.charCodeAt(diff))) {
            break;
          }
        }
      }
      obj = _mod12830;
    }
    return tmp + 1;
  },
  findWhiteSpaceEnd(arr, sum) {
    let tmp = sum;
    if (sum < arr.length) {
      let tmp4 = sum;
      tmp = sum;
      if (obj.isWhiteSpace(arr.charCodeAt(sum))) {
        sum = tmp4 + 1;
        tmp = sum;
        while (sum < arr.length) {
          let obj2 = _mod12830;
          tmp4 = sum;
          tmp = sum;
          if (!obj2.isWhiteSpace(arr.charCodeAt(sum))) {
            break;
          }
        }
      }
      obj = _mod12830;
    }
    return tmp;
  }
};