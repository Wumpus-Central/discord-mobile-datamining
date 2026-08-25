// _runtime/13690___exportStarResult14.js
import digitsToString2 from "13674_digitsToString.js";
import getMultiInternalSlots from "13675_getMultiInternalSlots.js";
import e from "01281_e.js";

const digitsToString = e.__importDefault(digitsToString2);
const result = digitsToString.default.set({ toExpPos: 100 });

export const ComputeExponentForMagnitude = function ComputeExponentForMagnitude(style, floorResult) {
  ({ notation, dataLocaleData, numberingSystem } = style);
  if ("standard" === notation) {
    return 0;
  } else if ("scientific" === notation) {
    return floorResult.toNumber();
  } else if ("engineering" === notation) {
    const divResult = floorResult.div(3);
    floorResult = floorResult.div(3).floor();
    return floorResult.div(3).floor().times(3).toNumber();
  } else {
    getMultiInternalSlots.invariant("compact" === notation, "Invalid notation");
    if ("currency" === style.style) {
      let str = "name";
      if ("name" !== tmp11) {
        let short = dataLocaleData.numbers.currency[numberingSystem] || dataLocaleData.numbers.currency[dataLocaleData.numbers.nu[0]].short;
        const tmp2 = dataLocaleData.numbers.currency[numberingSystem] || dataLocaleData.numbers.currency[dataLocaleData.numbers.nu[0]];
      }
      if (short) {
        str = digitsToString.default.pow(10, floorResult).toString();
        const _Object = Object;
        const keys = Object.keys(short);
        if (str < keys[0]) {
          return 0;
        } else if (str > keys[keys.length - 1]) {
          return keys[keys.length - 1].length - 1;
        } else {
          const index = keys.indexOf(str);
          if (-1 === index) {
            return 0;
          } else {
            let num4 = 0;
            if ("0" !== short[keys[index]].other) {
              num4 = arr2.length - short[arr2].other.match(/0+/)[0].length;
              const str5 = short[arr2].other;
            }
            return num4;
          }
        }
        const _default = digitsToString.default;
        const str3 = digitsToString.default.pow(10, floorResult);
      } else {
        return 0;
      }
    }
    const tmp = dataLocaleData.numbers.decimal[numberingSystem] || dataLocaleData.numbers.decimal[dataLocaleData.numbers.nu[0]];
    short = "long" === style.compactDisplay ? tmp.long : tmp.short;
  }
};