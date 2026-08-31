// discord_app/utils/native/StringUtils.tsx
import set from "../../../_runtime/00002_set.js";
import rawDefault from "../../../_runtime/08894_raw.js";

const result = set.fileFinishedImporting("utils/native/StringUtils.tsx");

export const splitGraphemes = function splitGraphemes(closure_0) {
  const obj = rawDefault();
  const items = [];
  let match = obj.exec(closure_0);
  let num = 0;
  let num2 = 0;
  if (null !== match) {
    do {
      let tmp2 = num;
      let tmp3 = match;
      if (match.index > num) {
        let push = items.push;
        let _Array = Array;
        let items1 = [];
        let tmp4 = items1;
        let num3 = 0;
        let arraySpreadResult = HermesBuiltin.arraySpread(Array.from(closure_0.slice(num, match.index)), 0);
        let tmp6 = push;
        let tmp7 = items1;
        let tmp8 = items;
        let applyResult = HermesBuiltin.apply(items1, items);
      }
      let arr = items.push(match[0]);
      num = obj.lastIndex;
      match = obj.exec(closure_0);
      num2 = num;
    } while (null !== match);
  }
  if (num2 < closure_0.length) {
    const push2 = items.push;
    const _Array2 = Array;
    const items2 = [];
    HermesBuiltin.arraySpread(Array.from(closure_0.slice(num2)), 0);
    HermesBuiltin.apply(items2, items);
  }
  return items;
};