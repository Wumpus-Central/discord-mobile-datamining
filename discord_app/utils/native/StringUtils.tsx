// === Module 10906: ? ===

// Module 10906
import rawDefault from "raw" /* 10905 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("utils/native/StringUtils.tsx");

export const splitGraphemes = function splitGraphemes(memo) {
  const obj = rawDefault();
  const items = [];
  let match = obj.exec(memo);
  let num = 0;
  let num2 = 0;
  if (null !== match) {
    do {
      if (match.index > num) {
        let push = items.push;
        let _Array = Array;
        let items1 = [];
        let arraySpreadResult = HermesBuiltin.arraySpread(Array.from(memo.slice(num, match.index)), 0);
        let applyResult = HermesBuiltin.apply(items1, items);
      }
      let arr = items.push(match[0]);
      num = obj.lastIndex;
      match = obj.exec(memo);
      num2 = num;
    } while (null !== match);
  }
  if (num2 < memo.length) {
    const push2 = items.push;
    const _Array2 = Array;
    const items2 = [];
    HermesBuiltin.arraySpread(Array.from(memo.slice(num2)), 0);
    HermesBuiltin.apply(items2, items);
  }
  return items;
};