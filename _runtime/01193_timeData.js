// === Module 1193: timeData ===

// Module 1193 (timeData)
import _mod1194 from "module_1194" /* 1194 */;

require = arg1;
const dependencyMap = arg6;

export const getBestPattern = function getBestPattern(arr3, locale) {
  let num = 0;
  let str = "";
  let str2 = "";
  if (0 < arr3.length) {
    while (true) {
      let charAtResult = arr3.charAt(num);
      if ("j" === charAtResult) {
        let sum = num + 1;
        let num2 = 0;
        let tmp7 = num;
        if (sum < arr3.length) {
          let num3 = 0;
          let tmp8 = num;
          num2 = 0;
          tmp7 = num;
          if (arr3.charAt(sum) === charAtResult) {
            let sum1 = num3 + 1;
            let sum2 = tmp8 + 1;
            let sum3 = sum2 + 1;
            num2 = sum1;
            tmp7 = sum2;
            while (sum3 < arr3.length) {
              num3 = sum1;
              tmp8 = sum2;
              num2 = sum1;
              tmp7 = sum2;
              if (arr3.charAt(sum3) !== charAtResult) {
                break;
              }
            }
          }
        }
        let num4 = 1;
        if (num2 >= 2) {
          num4 = 3 + (num2 >> 1);
        }
        let hourCycle = locale.hourCycle;
        let tmp12 = undefined === hourCycle && locale.hourCycles && locale.hourCycles.length;
        if (tmp12) {
          hourCycle = locale.hourCycles[0];
        }
        if (hourCycle) {
          if ("h24" === hourCycle) {
            let str6 = "k";
          } else if ("h23" === hourCycle) {
            str6 = "H";
          } else if ("h12" === hourCycle) {
            str6 = "h";
          } else {
            str6 = "K";
            if ("h11" !== hourCycle) {
              break;
            }
          }
        } else {
          let language = locale.language;
          let str4;
          if ("root" !== language) {
            str4 = locale.maximize().region;
          }
          if (!str4) {
            str4 = "";
          }
          let v001 = _mod1194.timeData[str4];
          if (!v001) {
            let str5 = language;
            if (!language) {
              str5 = "";
            }
            v001 = _mod1194.timeData[str5];
          }
          if (!v001) {
            let concat = "".concat;
            v001 = _mod1194.timeData["".concat("", language, "-001")];
          }
          if (!v001) {
            v001 = _mod1194.timeData["001"];
          }
          str6 = v001[0];
        }
        let tmp20 = "H" != str6 && "k" != str6;
        if (!tmp20) {
          num4 = 0;
        }
        let diff = num4 - 1;
        let text = str;
        let tmp23 = str;
        if (0 < num4) {
          do {
            text = `${tmp22}a`;
            tmp24 = diff;
            diff = diff - 1;
            tmp23 = text;
          } while (0 < tmp24);
        }
        let sum4 = 1 + (1 & num2);
        let diff1 = sum4 - 1;
        let sum5 = tmp23;
        let tmp5 = tmp7;
        let sum6 = tmp23;
        if (0 < sum4) {
          do {
            sum5 = str6 + sum5;
            tmp28 = diff1;
            diff1 = diff1 - 1;
            tmp5 = tmp7;
            sum6 = sum5;
          } while (0 < tmp28);
        }
      } else {
        let str3 = "H";
        if ("J" !== charAtResult) {
          str3 = charAtResult;
        }
        sum6 = str + str3;
        tmp5 = num;
      }
      num = tmp5 + 1;
      str = sum6;
      str2 = sum6;
    }
    const _Error = Error;
    const error = new Error("Invalid hourCycle");
    throw error;
  }
  return str2;
};