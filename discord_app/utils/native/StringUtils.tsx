// === Module 9461: splitGraphemes ===

// Module 9461 (splitGraphemes)
import obj132 from "obj132" /* 2 */;
import rawDefault from "raw" /* 9460 */;

const result = obj132.fileFinishedImporting("utils/native/StringUtils.tsx");

export const splitGraphemes = function splitGraphemes(closure_0) {
  const obj = rawDefault();
  const items = [];
  let match = obj.exec(importDefault);
  let num = 0;
  let num2 = 0;
  if (null !== match) {
    do {
      if (match.index > num) {
        let push = items.push;
        let _Array = Array;
        let items1 = [];
        let arraySpreadResult = HermesBuiltin.arraySpread(Array.from(importDefault.slice(num, match.index)), 0);
        let applyResult = HermesBuiltin.apply(items1, items);
      }
      let arr = items.push(match[0]);
      num = obj.lastIndex;
      match = obj.exec(importDefault);
      num2 = num;
    } while (null !== match);
  }
  if (num2 < importDefault.length) {
    const push2 = items.push;
    const _Array2 = Array;
    const items2 = [];
    HermesBuiltin.arraySpread(Array.from(importDefault.slice(num2)), 0);
    HermesBuiltin.apply(items2, items);
  }
  return items;
};