// _runtime/13985_ComputeExponentForMagnitude.js
import _mod13969 from "metro/13969__.js";
import UNICODE_EXTENSION_SEQUENCE_REGEX from "13970_UNICODE_EXTENSION_SEQUENCE_REGEX.js";
import 01172__ from "metro/01172__.js";

const module_13969 = module_1172.__importDefault(_mod13969);
let _default = module_13969.default;
const result = _default.set({ toExpPos: 100 });

export const ComputeExponentForMagnitude = function ComputeExponentForMagnitude(compactDisplay, floorResult) {
  let dataLocaleData;
  let notation;
  let numberingSystem;
  ({ notation, dataLocaleData, numberingSystem } = compactDisplay);
  if ("standard" === notation) {
    return 0;
  } else if ("scientific" === notation) {
    return floorResult.toNumber();
  } else if ("engineering" === notation) {
    const divResult = floorResult.div(3);
    floorResult = divResult.floor();
    const timesResult = floorResult.times(3);
    return timesResult.toNumber();
  } else {
    UNICODE_EXTENSION_SEQUENCE_REGEX.invariant("compact" === notation, "Invalid notation");
    compactDisplay = compactDisplay.compactDisplay;
    if ("currency" === compactDisplay.style) {
      let short;
      if ("name" !== tmp11) {
        short = (dataLocaleData.numbers.currency[numberingSystem] || dataLocaleData.numbers.currency[dataLocaleData.numbers.nu[0]]).short;
      }
      if (short) {
        const _default = module_13969.default;
        const str3 = _default.pow(10, floorResult);
        const str1 = str3.toString();
        const _Object = Object;
        const keys = Object.keys(short);
        if (str1 < keys[0]) {
          return 0;
        } else if (str1 > keys[keys.length - 1]) {
          return keys[keys.length - 1].length - 1;
        } else {
          const index = keys.indexOf(str1);
          if (-1 === index) {
            return 0;
          } else {
            let num4 = 0;
            if ("0" !== short[keys[index]].other) {
              const str5 = short[keys[index]].other;
              num4 = arr2.length - str5.match(/0+/)[0].length;
            }
            return num4;
          }
        }
      } else {
        return 0;
      }
    }
    const tmp = dataLocaleData.numbers.decimal[numberingSystem] || dataLocaleData.numbers.decimal[dataLocaleData.numbers.nu[0]];
    short = "long" === compactDisplay ? tmp.long : tmp.short;
  }
};