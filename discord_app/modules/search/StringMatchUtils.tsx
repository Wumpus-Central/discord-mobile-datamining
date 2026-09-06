// === Module 14700: StringMatchUtils ===

// Module 14700 (StringMatchUtils)
import size from "module_2" /* 2 */;

function calculateJaroWinklerDistance(formatted, item) {
  const diff = Math.floor(Math.max(formatted.length, item.length) / 2) - 1;
  const items = [];
  let num = 0;
  let num2 = 0;
  let num3 = 0;
  if (0 < formatted.length) {
    do {
      let _Math = Math;
      let bound = Math.max(0, num - diff);
      let _Math2 = Math;
      let sum = num + diff;
      let sum1 = num2;
      if (bound <= Math.min(item.length, sum)) {
        while (true) {
          if (formatted[num] === item[bound]) {
            if (!items[bound]) {
              break;
            }
          }
          bound = bound + 1;
          let _Math3 = Math;
          sum1 = num2;
        }
        items[bound] = true;
        sum1 = num2 + 1;
      }
      num = num + 1;
      num2 = sum1;
      num3 = sum1;
    } while (num < formatted.length);
  }
  if (0 < num3) {
    const _Math4 = Math;
    const _Math5 = Math;
    const diff1 = Math.floor(Math.max(formatted.length, item.length) / 2) - 1;
    const items1 = [];
    let str2 = "";
    let num4 = 0;
    let str3 = "";
    if (0 < formatted.length) {
      do {
        let _Math6 = Math;
        let bound1 = Math.max(0, num4 - diff1);
        let _Math7 = Math;
        let sum2 = num4 + diff1;
        let sum3 = str2;
        if (bound1 <= Math.min(item.length, sum2)) {
          while (true) {
            if (formatted[num4] === item[bound1]) {
              if (!items1[bound1]) {
                break;
              }
            }
            bound1 = bound1 + 1;
            let _Math8 = Math;
            sum3 = str2;
          }
          sum3 = str2 + formatted[num4];
          items1[bound1] = true;
        }
        num4 = num4 + 1;
        str2 = sum3;
        str3 = sum3;
      } while (num4 < formatted.length);
    }
    const items2 = [];
    let str4 = "";
    let num5 = 0;
    let str5 = "";
    if (0 < item.length) {
      do {
        let _Math9 = Math;
        let bound2 = Math.max(0, num5 - diff1);
        let _Math10 = Math;
        let sum4 = num5 + diff1;
        let sum5 = str4;
        if (bound2 <= Math.min(formatted.length, sum4)) {
          while (true) {
            if (item[num5] === formatted[bound2]) {
              if (!items2[bound2]) {
                break;
              }
            }
            bound2 = bound2 + 1;
            let _Math11 = Math;
            sum5 = str4;
          }
          sum5 = str4 + item[num5];
          items2[bound2] = true;
        }
        num5 = num5 + 1;
        str4 = sum5;
        str5 = sum5;
      } while (num5 < item.length);
    }
    let num6 = 0;
    let num7 = 0;
    let num8 = 0;
    if (0 < str3.length) {
      do {
        let sum6 = num7;
        if (str3[num6] !== str5[num6]) {
          sum6 = num7 + 1;
        }
        num6 = num6 + 1;
        num7 = sum6;
        num8 = sum6;
      } while (num6 < str3.length);
    }
    const _Math12 = Math;
    const result = (num3 / formatted.length + num3 / item.length + (num3 - Math.floor(num8 / 2)) / num3) / 3;
    let num12 = 0;
    if (result < 0.7) {
      return result;
    } else {
      let sum8 = num12;
      while (formatted[num12] === item[num12]) {
        let sum7 = num12 + 1;
        num12 = sum7;
        if (sum7 < 4) {
          continue;
        } else {
          sum8 = sum7 + 1;
          break;
        }
        return result + 0.1 * sum8 * (1 - result);
      }
    }
  } else {
    return 0;
  }
}
let result = size.fileFinishedImporting("modules/search/StringMatchUtils.tsx");

export const calculateJaroWinklerSimilarity = function calculateJaroWinklerSimilarity(toLocaleLowerCaseResult, item, arg2) {
  let obj = arg2;
  if (arg2 == null) {
    obj = {};
  }
  const caseSensitive = obj.caseSensitive;
  if (undefined !== caseSensitive) {
    if (caseSensitive) {
      let tmp2 = calculateJaroWinklerDistance(toLocaleLowerCaseResult, item);
    }
    return tmp2;
  }
  const formatted = toLocaleLowerCaseResult.toLowerCase();
  tmp2 = calculateJaroWinklerDistance(formatted, item.toLowerCase());
};