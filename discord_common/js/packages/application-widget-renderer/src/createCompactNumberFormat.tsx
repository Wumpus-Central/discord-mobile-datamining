// === Module 12191: toAsciiDigits ===

// Module 12191 (toAsciiDigits)
import obj132 from "obj132" /* 2 */;

function toAsciiDigits(arg0, get) {
  let str = "";
  const iter = arg0[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let value = get.get(nextResult);
    if (value == null) {
      value = nextResult;
    }
    str = str + value;
    continue;
  }
  return str;
}
let result = obj132.fileFinishedImporting("../discord_common/js/packages/application-widget-renderer/src/createCompactNumberFormat.tsx");

export const createCompactNumberFormat = function createCompactNumberFormat(stateFromStores) {
  const numberFormat = new Intl.NumberFormat(stateFromStores, { useGrouping: false });
  const map = new Map();
  let num = 0;
  do {
    let _String = String;
    let formatResult = numberFormat.format(num);
    let result = map.set(formatResult, String(num));
    num = num + 1;
  } while (num <= 9);
  const numberFormat1 = new Intl.NumberFormat(stateFromStores, { notation: "compact", compactDisplay: "short" });
  map1 = new Map();
  return {
    format(arg0) {
      let tmp10;
      let tmp22;
      let tmp28;
      let tmp4;
      if (0 !== arg0) {
        const _Number2 = Number;
        if (Number.isFinite(arg0)) {
          const _Math = Math;
          const absolute = Math.abs(arg0);
          let num = 0;
          if (0 !== absolute) {
            const _Math6 = Math;
            const _Math7 = Math;
            const rounded = Math.floor(Math.log10(absolute));
            let tmp5 = rounded;
            let tmp6 = rounded;
            if (10 ** rounded > absolute) {
              do {
                let diff = tmp5 - 1;
                tmp5 = diff;
                tmp6 = diff;
                tmp4 = 10 ** diff;
              } while (tmp4 > absolute);
            }
            let tmp7 = tmp6;
            let tmp8 = tmp6;
            if (10 ** (tmp6 + 1) <= absolute) {
              do {
                let sum = tmp7 + 1;
                tmp7 = sum;
                tmp8 = sum;
                tmp10 = 10 ** (sum + 1);
              } while (tmp10 <= absolute);
            }
            num = tmp8;
          }
          let num7 = 1;
          if (num >= 0) {
            let value = map1.get(num);
            if (undefined === value) {
              const tmp16 = (function parseCoefficient(numberFormat1, map) {
                let str = "";
                const iter = numberFormat1[Symbol.iterator]();
                const nextResult = iter.next();
                for (; iter !== undefined; str = str + callback(iter2.value, map)) {
                  iter2 = nextResult;
                  if ("integer" !== nextResult.type) {
                    if ("fraction" !== iter2.type) {
                      if ("decimal" === iter2.type) {
                        str = `.`;
                      }
                    }
                    continue;
                  }
                }
                return Number(str);
              })(numberFormat1.formatToParts(10 ** num), map);
              let num9 = 1;
              if (tmp16 > 0) {
                num9 = tmp13 / tmp16;
              }
              const result = map1.set(num, num9);
              value = num9;
            }
            num7 = value;
          }
          const result1 = arg0 / num7;
          const _Math2 = Math;
          const absolute1 = Math.abs(result1);
          let num10 = 0;
          if (0 !== absolute1) {
            const _Math8 = Math;
            const _Math9 = Math;
            const rounded1 = Math.floor(Math.log10(absolute1));
            let tmp23 = rounded1;
            let tmp24 = rounded1;
            if (10 ** rounded1 > absolute1) {
              do {
                let diff1 = tmp23 - 1;
                tmp23 = diff1;
                tmp24 = diff1;
                tmp22 = 10 ** diff1;
              } while (tmp22 > absolute1);
            }
            let tmp25 = tmp24;
            let tmp26 = tmp24;
            if (10 ** (tmp24 + 1) <= absolute1) {
              do {
                let sum1 = tmp25 + 1;
                tmp25 = sum1;
                tmp26 = sum1;
                tmp28 = 10 ** (sum1 + 1);
              } while (tmp28 <= absolute1);
            }
            num10 = tmp26;
          }
          const _Math3 = Math;
          const _Math4 = Math;
          const tmp29 = 10 ** -Math.max(Math.min(num10 - 1, 0), -15);
          const _Math5 = Math;
          const result2 = Math.floor(result1 * tmp29) / tmp29 * num7;
          const _Number = Number;
          let tmp32 = arg0;
          if (Number.isFinite(result2)) {
            tmp32 = result2;
          }
          return numberFormat1.format(tmp32);
        }
      }
      return numberFormat1.format(arg0);
    }
  };
};