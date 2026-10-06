// === Module 8076: compareMultiple ===

// Module 8076 (compareMultiple)
import compareAscending from "compareAscending" /* 8077 */;


export default function compareMultiple(criteria, index, arg2) {
  criteria = criteria.criteria;
  let num = 0;
  let num2 = 1;
  const length = criteria.length;
  if (0 < length) {
    const tmp5 = compareAscending(criteria[num], tmp[num]);
    while (!tmp5) {
      num = num + num2;
    }
    let result = tmp5;
    if (num < tmp2) {
      if ("desc" == arg2[num]) {
        num2 = -1;
      }
      result = tmp5 * num2;
    }
    return result;
  }
  return criteria.index - index.index;
};