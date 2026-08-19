// discord_app/utils/native/StringUtils.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import rawDefault from "../../../_runtime/09460_raw.js";

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